var fn = Object.defineProperty;
var dn = (d, c, y) => c in d ? fn(d, c, { enumerable: !0, configurable: !0, writable: !0, value: y }) : d[c] = y;
var Ye = (d, c, y) => (dn(d, typeof c != "symbol" ? c + "" : c, y), y);
import * as fe from "react";
import yr, { useState as Ie, useEffect as rt, useRef as _r, useCallback as br, createContext as gn, forwardRef as pn, useMemo as Bi, useImperativeHandle as vn, useContext as mn } from "react";
import { Popover as yn, IconButton as St, Box as We, SvgIcon as ot, Menu as Cr, MenuItem as xr, ListItemText as Sr, Switch as _n, Dialog as bn, DialogTitle as Cn, List as xn, ListItem as Sn, Stack as wn, Slider as Tn, Paper as En } from "@mui/material";
import On from "@emotion/styled";
import "@emotion/react";
function wr(d) {
  if (d.__esModule)
    return d;
  var c = d.default;
  if (typeof c == "function") {
    var y = function _() {
      if (this instanceof _) {
        var v = [null];
        v.push.apply(v, arguments);
        var T = Function.bind.apply(c, v);
        return new T();
      }
      return c.apply(this, arguments);
    };
    y.prototype = c.prototype;
  } else
    y = {};
  return Object.defineProperty(y, "__esModule", { value: !0 }), Object.keys(d).forEach(function(_) {
    var v = Object.getOwnPropertyDescriptor(d, _);
    Object.defineProperty(y, _, v.get ? v : {
      enumerable: !0,
      get: function() {
        return d[_];
      }
    });
  }), y;
}
var U = {}, Pn = {
  get exports() {
    return U;
  },
  set exports(d) {
    U = d;
  }
}, Tt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function An() {
  if (Yi)
    return Tt;
  Yi = 1;
  var d = yr, c = Symbol.for("react.element"), y = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, v = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(X, N, u) {
    var i, a = {}, o = null, e = null;
    u !== void 0 && (o = "" + u), N.key !== void 0 && (o = "" + N.key), N.ref !== void 0 && (e = N.ref);
    for (i in N)
      _.call(N, i) && !T.hasOwnProperty(i) && (a[i] = N[i]);
    if (X && X.defaultProps)
      for (i in N = X.defaultProps, N)
        a[i] === void 0 && (a[i] = N[i]);
    return { $$typeof: c, type: X, key: o, ref: e, props: a, _owner: v.current };
  }
  return Tt.Fragment = y, Tt.jsx = R, Tt.jsxs = R, Tt;
}
var Et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi;
function kn() {
  return Xi || (Xi = 1, process.env.NODE_ENV !== "production" && function() {
    var d = yr, c = Symbol.for("react.element"), y = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), X = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), e = Symbol.for("react.offscreen"), r = Symbol.iterator, t = "@@iterator";
    function s(D) {
      if (D === null || typeof D != "object")
        return null;
      var ne = r && D[r] || D[t];
      return typeof ne == "function" ? ne : null;
    }
    var l = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(D) {
      {
        for (var ne = arguments.length, le = new Array(ne > 1 ? ne - 1 : 0), de = 1; de < ne; de++)
          le[de - 1] = arguments[de];
        h("error", D, le);
      }
    }
    function h(D, ne, le) {
      {
        var de = l.ReactDebugCurrentFrame, Ce = de.getStackAddendum();
        Ce !== "" && (ne += "%s", le = le.concat([Ce]));
        var Pe = le.map(function(_e) {
          return String(_e);
        });
        Pe.unshift("Warning: " + ne), Function.prototype.apply.call(console[D], console, Pe);
      }
    }
    var f = !1, g = !1, p = !1, m = !1, C = !1, w;
    w = Symbol.for("react.module.reference");
    function x(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === _ || D === T || C || D === v || D === u || D === i || m || D === e || f || g || p || typeof D == "object" && D !== null && (D.$$typeof === o || D.$$typeof === a || D.$$typeof === R || D.$$typeof === X || D.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === w || D.getModuleId !== void 0));
    }
    function k(D, ne, le) {
      var de = D.displayName;
      if (de)
        return de;
      var Ce = ne.displayName || ne.name || "";
      return Ce !== "" ? le + "(" + Ce + ")" : le;
    }
    function L(D) {
      return D.displayName || "Context";
    }
    function Y(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && n("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case _:
          return "Fragment";
        case y:
          return "Portal";
        case T:
          return "Profiler";
        case v:
          return "StrictMode";
        case u:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case X:
            var ne = D;
            return L(ne) + ".Consumer";
          case R:
            var le = D;
            return L(le._context) + ".Provider";
          case N:
            return k(D, D.render, "ForwardRef");
          case a:
            var de = D.displayName || null;
            return de !== null ? de : Y(D.type) || "Memo";
          case o: {
            var Ce = D, Pe = Ce._payload, _e = Ce._init;
            try {
              return Y(_e(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, re = 0, q, ee, se, ae, W, b, A;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function O() {
      {
        if (re === 0) {
          q = console.log, ee = console.info, se = console.warn, ae = console.error, W = console.group, b = console.groupCollapsed, A = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        re++;
      }
    }
    function B() {
      {
        if (re--, re === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, D, {
              value: q
            }),
            info: K({}, D, {
              value: ee
            }),
            warn: K({}, D, {
              value: se
            }),
            error: K({}, D, {
              value: ae
            }),
            group: K({}, D, {
              value: W
            }),
            groupCollapsed: K({}, D, {
              value: b
            }),
            groupEnd: K({}, D, {
              value: A
            })
          });
        }
        re < 0 && n("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = l.ReactCurrentDispatcher, S;
    function M(D, ne, le) {
      {
        if (S === void 0)
          try {
            throw Error();
          } catch (Ce) {
            var de = Ce.stack.trim().match(/\n( *(at )?)/);
            S = de && de[1] || "";
          }
        return `
` + S + D;
      }
    }
    var j = !1, z;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      z = new H();
    }
    function I(D, ne) {
      if (!D || j)
        return "";
      {
        var le = z.get(D);
        if (le !== void 0)
          return le;
      }
      var de;
      j = !0;
      var Ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = E.current, E.current = null, O();
      try {
        if (ne) {
          var _e = function() {
            throw Error();
          };
          if (Object.defineProperty(_e.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_e, []);
            } catch (et) {
              de = et;
            }
            Reflect.construct(D, [], _e);
          } else {
            try {
              _e.call();
            } catch (et) {
              de = et;
            }
            D.call(_e.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            de = et;
          }
          D();
        }
      } catch (et) {
        if (et && de && typeof et.stack == "string") {
          for (var me = et.stack.split(`
`), Be = de.stack.split(`
`), je = me.length - 1, Fe = Be.length - 1; je >= 1 && Fe >= 0 && me[je] !== Be[Fe]; )
            Fe--;
          for (; je >= 1 && Fe >= 0; je--, Fe--)
            if (me[je] !== Be[Fe]) {
              if (je !== 1 || Fe !== 1)
                do
                  if (je--, Fe--, Fe < 0 || me[je] !== Be[Fe]) {
                    var Ge = `
` + me[je].replace(" at new ", " at ");
                    return D.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", D.displayName)), typeof D == "function" && z.set(D, Ge), Ge;
                  }
                while (je >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        j = !1, E.current = Pe, B(), Error.prepareStackTrace = Ce;
      }
      var mt = D ? D.displayName || D.name : "", Li = mt ? M(mt) : "";
      return typeof D == "function" && z.set(D, Li), Li;
    }
    function te(D, ne, le) {
      return I(D, !1);
    }
    function $(D) {
      var ne = D.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function G(D, ne, le) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return I(D, $(D));
      if (typeof D == "string")
        return M(D);
      switch (D) {
        case u:
          return M("Suspense");
        case i:
          return M("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case N:
            return te(D.render);
          case a:
            return G(D.type, ne, le);
          case o: {
            var de = D, Ce = de._payload, Pe = de._init;
            try {
              return G(Pe(Ce), ne, le);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, Q = {}, J = l.ReactDebugCurrentFrame;
    function V(D) {
      if (D) {
        var ne = D._owner, le = G(D.type, D._source, ne ? ne.type : null);
        J.setExtraStackFrame(le);
      } else
        J.setExtraStackFrame(null);
    }
    function ie(D, ne, le, de, Ce) {
      {
        var Pe = Function.call.bind(F);
        for (var _e in D)
          if (Pe(D, _e)) {
            var me = void 0;
            try {
              if (typeof D[_e] != "function") {
                var Be = Error((de || "React class") + ": " + le + " type `" + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[_e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              me = D[_e](ne, _e, de, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (je) {
              me = je;
            }
            me && !(me instanceof Error) && (V(Ce), n("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", le, _e, typeof me), V(null)), me instanceof Error && !(me.message in Q) && (Q[me.message] = !0, V(Ce), n("Failed %s type: %s", le, me.message), V(null));
          }
      }
    }
    var oe = Array.isArray;
    function ue(D) {
      return oe(D);
    }
    function ce(D) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, le = ne && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return le;
      }
    }
    function Z(D) {
      try {
        return he(D), !1;
      } catch {
        return !0;
      }
    }
    function he(D) {
      return "" + D;
    }
    function ge(D) {
      if (Z(D))
        return n("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(D)), he(D);
    }
    var pe = l.ReactCurrentOwner, Ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Le, ke;
    ke = {};
    function Ze(D) {
      if (F.call(D, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function ct(D) {
      if (F.call(D, "key")) {
        var ne = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Ue(D, ne) {
      if (typeof D.ref == "string" && pe.current && ne && pe.current.stateNode !== ne) {
        var le = Y(pe.current.type);
        ke[le] || (n('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(pe.current.type), D.ref), ke[le] = !0);
      }
    }
    function Qt(D, ne) {
      {
        var le = function() {
          be || (be = !0, n("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        le.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function Rt(D, ne) {
      {
        var le = function() {
          Le || (Le = !0, n("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        le.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var Jt = function(D, ne, le, de, Ce, Pe, _e) {
      var me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: D,
        key: ne,
        ref: le,
        props: _e,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return me._store = {}, Object.defineProperty(me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.freeze && (Object.freeze(me.props), Object.freeze(me)), me;
    };
    function Zt(D, ne, le, de, Ce) {
      {
        var Pe, _e = {}, me = null, Be = null;
        le !== void 0 && (ge(le), me = "" + le), ct(ne) && (ge(ne.key), me = "" + ne.key), Ze(ne) && (Be = ne.ref, Ue(ne, Ce));
        for (Pe in ne)
          F.call(ne, Pe) && !Ae.hasOwnProperty(Pe) && (_e[Pe] = ne[Pe]);
        if (D && D.defaultProps) {
          var je = D.defaultProps;
          for (Pe in je)
            _e[Pe] === void 0 && (_e[Pe] = je[Pe]);
        }
        if (me || Be) {
          var Fe = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          me && Qt(_e, Fe), Be && Rt(_e, Fe);
        }
        return Jt(D, me, Be, Ce, de, pe.current, _e);
      }
    }
    var ei = l.ReactCurrentOwner, Mi = l.ReactDebugCurrentFrame;
    function vt(D) {
      if (D) {
        var ne = D._owner, le = G(D.type, D._source, ne ? ne.type : null);
        Mi.setExtraStackFrame(le);
      } else
        Mi.setExtraStackFrame(null);
    }
    var ti;
    ti = !1;
    function ii(D) {
      return typeof D == "object" && D !== null && D.$$typeof === c;
    }
    function Di() {
      {
        if (ei.current) {
          var D = Y(ei.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function nn(D) {
      {
        if (D !== void 0) {
          var ne = D.fileName.replace(/^.*[\\\/]/, ""), le = D.lineNumber;
          return `

Check your code at ` + ne + ":" + le + ".";
        }
        return "";
      }
    }
    var Ri = {};
    function sn(D) {
      {
        var ne = Di();
        if (!ne) {
          var le = typeof D == "string" ? D : D.displayName || D.name;
          le && (ne = `

Check the top-level render call using <` + le + ">.");
        }
        return ne;
      }
    }
    function ji(D, ne) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var le = sn(ne);
        if (Ri[le])
          return;
        Ri[le] = !0;
        var de = "";
        D && D._owner && D._owner !== ei.current && (de = " It was passed a child from " + Y(D._owner.type) + "."), vt(D), n('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, de), vt(null);
      }
    }
    function Fi(D, ne) {
      {
        if (typeof D != "object")
          return;
        if (ue(D))
          for (var le = 0; le < D.length; le++) {
            var de = D[le];
            ii(de) && ji(de, ne);
          }
        else if (ii(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Ce = s(D);
          if (typeof Ce == "function" && Ce !== D.entries)
            for (var Pe = Ce.call(D), _e; !(_e = Pe.next()).done; )
              ii(_e.value) && ji(_e.value, ne);
        }
      }
    }
    function on(D) {
      {
        var ne = D.type;
        if (ne == null || typeof ne == "string")
          return;
        var le;
        if (typeof ne == "function")
          le = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === a))
          le = ne.propTypes;
        else
          return;
        if (le) {
          var de = Y(ne);
          ie(le, D.props, "prop", de, D);
        } else if (ne.PropTypes !== void 0 && !ti) {
          ti = !0;
          var Ce = Y(ne);
          n("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && n("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function an(D) {
      {
        for (var ne = Object.keys(D.props), le = 0; le < ne.length; le++) {
          var de = ne[le];
          if (de !== "children" && de !== "key") {
            vt(D), n("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), vt(null);
            break;
          }
        }
        D.ref !== null && (vt(D), n("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    function Ii(D, ne, le, de, Ce, Pe) {
      {
        var _e = x(D);
        if (!_e) {
          var me = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = nn(Ce);
          Be ? me += Be : me += Di();
          var je;
          D === null ? je = "null" : ue(D) ? je = "array" : D !== void 0 && D.$$typeof === c ? (je = "<" + (Y(D.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : je = typeof D, n("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, me);
        }
        var Fe = Zt(D, ne, le, Ce, Pe);
        if (Fe == null)
          return Fe;
        if (_e) {
          var Ge = ne.children;
          if (Ge !== void 0)
            if (de)
              if (ue(Ge)) {
                for (var mt = 0; mt < Ge.length; mt++)
                  Fi(Ge[mt], D);
                Object.freeze && Object.freeze(Ge);
              } else
                n("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fi(Ge, D);
        }
        return D === _ ? an(Fe) : on(Fe), Fe;
      }
    }
    function ln(D, ne, le) {
      return Ii(D, ne, le, !0);
    }
    function cn(D, ne, le) {
      return Ii(D, ne, le, !1);
    }
    var hn = cn, un = ln;
    Et.Fragment = _, Et.jsx = hn, Et.jsxs = un;
  }()), Et;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = An() : d.exports = kn();
})(Pn);
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(d) {
    for (var c = 1; c < arguments.length; c++) {
      var y = arguments[c];
      for (var _ in y)
        Object.prototype.hasOwnProperty.call(y, _) && (d[_] = y[_]);
    }
    return d;
  }, ye.apply(this, arguments);
}
function gt(d) {
  return d !== null && typeof d == "object" && d.constructor === Object;
}
function Tr(d) {
  if (!gt(d))
    return d;
  const c = {};
  return Object.keys(d).forEach((y) => {
    c[y] = Tr(d[y]);
  }), c;
}
function nt(d, c, y = {
  clone: !0
}) {
  const _ = y.clone ? ye({}, d) : d;
  return gt(d) && gt(c) && Object.keys(c).forEach((v) => {
    v !== "__proto__" && (gt(c[v]) && v in d && gt(d[v]) ? _[v] = nt(d[v], c[v], y) : y.clone ? _[v] = gt(c[v]) ? Tr(c[v]) : c[v] : _[v] = c[v]);
  }), _;
}
var ve = {}, zi = {
  get exports() {
    return ve;
  },
  set exports(d) {
    ve = d;
  }
}, It = {}, Mn = {
  get exports() {
    return It;
  },
  set exports(d) {
    It = d;
  }
}, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni;
function Dn() {
  if (Ni)
    return Se;
  Ni = 1;
  var d = typeof Symbol == "function" && Symbol.for, c = d ? Symbol.for("react.element") : 60103, y = d ? Symbol.for("react.portal") : 60106, _ = d ? Symbol.for("react.fragment") : 60107, v = d ? Symbol.for("react.strict_mode") : 60108, T = d ? Symbol.for("react.profiler") : 60114, R = d ? Symbol.for("react.provider") : 60109, X = d ? Symbol.for("react.context") : 60110, N = d ? Symbol.for("react.async_mode") : 60111, u = d ? Symbol.for("react.concurrent_mode") : 60111, i = d ? Symbol.for("react.forward_ref") : 60112, a = d ? Symbol.for("react.suspense") : 60113, o = d ? Symbol.for("react.suspense_list") : 60120, e = d ? Symbol.for("react.memo") : 60115, r = d ? Symbol.for("react.lazy") : 60116, t = d ? Symbol.for("react.block") : 60121, s = d ? Symbol.for("react.fundamental") : 60117, l = d ? Symbol.for("react.responder") : 60118, n = d ? Symbol.for("react.scope") : 60119;
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var p = g.$$typeof;
      switch (p) {
        case c:
          switch (g = g.type, g) {
            case N:
            case u:
            case _:
            case T:
            case v:
            case a:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case X:
                case i:
                case r:
                case e:
                case R:
                  return g;
                default:
                  return p;
              }
          }
        case y:
          return p;
      }
    }
  }
  function f(g) {
    return h(g) === u;
  }
  return Se.AsyncMode = N, Se.ConcurrentMode = u, Se.ContextConsumer = X, Se.ContextProvider = R, Se.Element = c, Se.ForwardRef = i, Se.Fragment = _, Se.Lazy = r, Se.Memo = e, Se.Portal = y, Se.Profiler = T, Se.StrictMode = v, Se.Suspense = a, Se.isAsyncMode = function(g) {
    return f(g) || h(g) === N;
  }, Se.isConcurrentMode = f, Se.isContextConsumer = function(g) {
    return h(g) === X;
  }, Se.isContextProvider = function(g) {
    return h(g) === R;
  }, Se.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === c;
  }, Se.isForwardRef = function(g) {
    return h(g) === i;
  }, Se.isFragment = function(g) {
    return h(g) === _;
  }, Se.isLazy = function(g) {
    return h(g) === r;
  }, Se.isMemo = function(g) {
    return h(g) === e;
  }, Se.isPortal = function(g) {
    return h(g) === y;
  }, Se.isProfiler = function(g) {
    return h(g) === T;
  }, Se.isStrictMode = function(g) {
    return h(g) === v;
  }, Se.isSuspense = function(g) {
    return h(g) === a;
  }, Se.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === _ || g === u || g === T || g === v || g === a || g === o || typeof g == "object" && g !== null && (g.$$typeof === r || g.$$typeof === e || g.$$typeof === R || g.$$typeof === X || g.$$typeof === i || g.$$typeof === s || g.$$typeof === l || g.$$typeof === n || g.$$typeof === t);
  }, Se.typeOf = h, Se;
}
var we = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function Rn() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
    var d = typeof Symbol == "function" && Symbol.for, c = d ? Symbol.for("react.element") : 60103, y = d ? Symbol.for("react.portal") : 60106, _ = d ? Symbol.for("react.fragment") : 60107, v = d ? Symbol.for("react.strict_mode") : 60108, T = d ? Symbol.for("react.profiler") : 60114, R = d ? Symbol.for("react.provider") : 60109, X = d ? Symbol.for("react.context") : 60110, N = d ? Symbol.for("react.async_mode") : 60111, u = d ? Symbol.for("react.concurrent_mode") : 60111, i = d ? Symbol.for("react.forward_ref") : 60112, a = d ? Symbol.for("react.suspense") : 60113, o = d ? Symbol.for("react.suspense_list") : 60120, e = d ? Symbol.for("react.memo") : 60115, r = d ? Symbol.for("react.lazy") : 60116, t = d ? Symbol.for("react.block") : 60121, s = d ? Symbol.for("react.fundamental") : 60117, l = d ? Symbol.for("react.responder") : 60118, n = d ? Symbol.for("react.scope") : 60119;
    function h(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === _ || I === u || I === T || I === v || I === a || I === o || typeof I == "object" && I !== null && (I.$$typeof === r || I.$$typeof === e || I.$$typeof === R || I.$$typeof === X || I.$$typeof === i || I.$$typeof === s || I.$$typeof === l || I.$$typeof === n || I.$$typeof === t);
    }
    function f(I) {
      if (typeof I == "object" && I !== null) {
        var te = I.$$typeof;
        switch (te) {
          case c:
            var $ = I.type;
            switch ($) {
              case N:
              case u:
              case _:
              case T:
              case v:
              case a:
                return $;
              default:
                var G = $ && $.$$typeof;
                switch (G) {
                  case X:
                  case i:
                  case r:
                  case e:
                  case R:
                    return G;
                  default:
                    return te;
                }
            }
          case y:
            return te;
        }
      }
    }
    var g = N, p = u, m = X, C = R, w = c, x = i, k = _, L = r, Y = e, K = y, re = T, q = v, ee = a, se = !1;
    function ae(I) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(I) || f(I) === N;
    }
    function W(I) {
      return f(I) === u;
    }
    function b(I) {
      return f(I) === X;
    }
    function A(I) {
      return f(I) === R;
    }
    function P(I) {
      return typeof I == "object" && I !== null && I.$$typeof === c;
    }
    function O(I) {
      return f(I) === i;
    }
    function B(I) {
      return f(I) === _;
    }
    function E(I) {
      return f(I) === r;
    }
    function S(I) {
      return f(I) === e;
    }
    function M(I) {
      return f(I) === y;
    }
    function j(I) {
      return f(I) === T;
    }
    function z(I) {
      return f(I) === v;
    }
    function H(I) {
      return f(I) === a;
    }
    we.AsyncMode = g, we.ConcurrentMode = p, we.ContextConsumer = m, we.ContextProvider = C, we.Element = w, we.ForwardRef = x, we.Fragment = k, we.Lazy = L, we.Memo = Y, we.Portal = K, we.Profiler = re, we.StrictMode = q, we.Suspense = ee, we.isAsyncMode = ae, we.isConcurrentMode = W, we.isContextConsumer = b, we.isContextProvider = A, we.isElement = P, we.isForwardRef = O, we.isFragment = B, we.isLazy = E, we.isMemo = S, we.isPortal = M, we.isProfiler = j, we.isStrictMode = z, we.isSuspense = H, we.isValidElementType = h, we.typeOf = f;
  }()), we;
}
var Wi;
function Er() {
  return Wi || (Wi = 1, function(d) {
    process.env.NODE_ENV === "production" ? d.exports = Dn() : d.exports = Rn();
  }(Mn)), It;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ri, Ui;
function jn() {
  if (Ui)
    return ri;
  Ui = 1;
  var d = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function _(T) {
    if (T == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(T);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var T = new String("abc");
      if (T[5] = "de", Object.getOwnPropertyNames(T)[0] === "5")
        return !1;
      for (var R = {}, X = 0; X < 10; X++)
        R["_" + String.fromCharCode(X)] = X;
      var N = Object.getOwnPropertyNames(R).map(function(i) {
        return R[i];
      });
      if (N.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(i) {
        u[i] = i;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ri = v() ? Object.assign : function(T, R) {
    for (var X, N = _(T), u, i = 1; i < arguments.length; i++) {
      X = Object(arguments[i]);
      for (var a in X)
        c.call(X, a) && (N[a] = X[a]);
      if (d) {
        u = d(X);
        for (var o = 0; o < u.length; o++)
          y.call(X, u[o]) && (N[u[o]] = X[u[o]]);
      }
    }
    return N;
  }, ri;
}
var ni, Gi;
function pi() {
  if (Gi)
    return ni;
  Gi = 1;
  var d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ni = d, ni;
}
var si, Vi;
function Or() {
  return Vi || (Vi = 1, si = Function.call.bind(Object.prototype.hasOwnProperty)), si;
}
var oi, $i;
function Fn() {
  if ($i)
    return oi;
  $i = 1;
  var d = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var c = pi(), y = {}, _ = Or();
    d = function(T) {
      var R = "Warning: " + T;
      typeof console < "u" && console.error(R);
      try {
        throw new Error(R);
      } catch {
      }
    };
  }
  function v(T, R, X, N, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var i in T)
        if (_(T, i)) {
          var a;
          try {
            if (typeof T[i] != "function") {
              var o = Error(
                (N || "React class") + ": " + X + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw o.name = "Invariant Violation", o;
            }
            a = T[i](R, i, N, X, null, c);
          } catch (r) {
            a = r;
          }
          if (a && !(a instanceof Error) && d(
            (N || "React class") + ": type specification of " + X + " `" + i + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof a + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), a instanceof Error && !(a.message in y)) {
            y[a.message] = !0;
            var e = u ? u() : "";
            d(
              "Failed " + X + " type: " + a.message + (e ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (y = {});
  }, oi = v, oi;
}
var ai, Ki;
function In() {
  if (Ki)
    return ai;
  Ki = 1;
  var d = Er(), c = jn(), y = pi(), _ = Or(), v = Fn(), T = function() {
  };
  process.env.NODE_ENV !== "production" && (T = function(X) {
    var N = "Warning: " + X;
    typeof console < "u" && console.error(N);
    try {
      throw new Error(N);
    } catch {
    }
  });
  function R() {
    return null;
  }
  return ai = function(X, N) {
    var u = typeof Symbol == "function" && Symbol.iterator, i = "@@iterator";
    function a(W) {
      var b = W && (u && W[u] || W[i]);
      if (typeof b == "function")
        return b;
    }
    var o = "<<anonymous>>", e = {
      array: l("array"),
      bigint: l("bigint"),
      bool: l("boolean"),
      func: l("function"),
      number: l("number"),
      object: l("object"),
      string: l("string"),
      symbol: l("symbol"),
      any: n(),
      arrayOf: h,
      element: f(),
      elementType: g(),
      instanceOf: p,
      node: x(),
      objectOf: C,
      oneOf: m,
      oneOfType: w,
      shape: L,
      exact: Y
    };
    function r(W, b) {
      return W === b ? W !== 0 || 1 / W === 1 / b : W !== W && b !== b;
    }
    function t(W, b) {
      this.message = W, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    t.prototype = Error.prototype;
    function s(W) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, A = 0;
      function P(B, E, S, M, j, z, H) {
        if (M = M || o, z = z || S, H !== y) {
          if (N) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = M + ":" + S;
            !b[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (T(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[te] = !0, A++);
          }
        }
        return E[S] == null ? B ? E[S] === null ? new t("The " + j + " `" + z + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new t("The " + j + " `" + z + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : W(E, S, M, j, z);
      }
      var O = P.bind(null, !1);
      return O.isRequired = P.bind(null, !0), O;
    }
    function l(W) {
      function b(A, P, O, B, E, S) {
        var M = A[P], j = q(M);
        if (j !== W) {
          var z = ee(M);
          return new t(
            "Invalid " + B + " `" + E + "` of type " + ("`" + z + "` supplied to `" + O + "`, expected ") + ("`" + W + "`."),
            { expectedType: W }
          );
        }
        return null;
      }
      return s(b);
    }
    function n() {
      return s(R);
    }
    function h(W) {
      function b(A, P, O, B, E) {
        if (typeof W != "function")
          return new t("Property `" + E + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var S = A[P];
        if (!Array.isArray(S)) {
          var M = q(S);
          return new t("Invalid " + B + " `" + E + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an array."));
        }
        for (var j = 0; j < S.length; j++) {
          var z = W(S, j, O, B, E + "[" + j + "]", y);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return s(b);
    }
    function f() {
      function W(b, A, P, O, B) {
        var E = b[A];
        if (!X(E)) {
          var S = q(E);
          return new t("Invalid " + O + " `" + B + "` of type " + ("`" + S + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return s(W);
    }
    function g() {
      function W(b, A, P, O, B) {
        var E = b[A];
        if (!d.isValidElementType(E)) {
          var S = q(E);
          return new t("Invalid " + O + " `" + B + "` of type " + ("`" + S + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return s(W);
    }
    function p(W) {
      function b(A, P, O, B, E) {
        if (!(A[P] instanceof W)) {
          var S = W.name || o, M = ae(A[P]);
          return new t("Invalid " + B + " `" + E + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return s(b);
    }
    function m(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? T(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : T("Invalid argument supplied to oneOf, expected an array.")), R;
      function b(A, P, O, B, E) {
        for (var S = A[P], M = 0; M < W.length; M++)
          if (r(S, W[M]))
            return null;
        var j = JSON.stringify(W, function(H, I) {
          var te = ee(I);
          return te === "symbol" ? String(I) : I;
        });
        return new t("Invalid " + B + " `" + E + "` of value `" + String(S) + "` " + ("supplied to `" + O + "`, expected one of " + j + "."));
      }
      return s(b);
    }
    function C(W) {
      function b(A, P, O, B, E) {
        if (typeof W != "function")
          return new t("Property `" + E + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var S = A[P], M = q(S);
        if (M !== "object")
          return new t("Invalid " + B + " `" + E + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an object."));
        for (var j in S)
          if (_(S, j)) {
            var z = W(S, j, O, B, E + "." + j, y);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return s(b);
    }
    function w(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && T("Invalid argument supplied to oneOfType, expected an instance of array."), R;
      for (var b = 0; b < W.length; b++) {
        var A = W[b];
        if (typeof A != "function")
          return T(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(A) + " at index " + b + "."
          ), R;
      }
      function P(O, B, E, S, M) {
        for (var j = [], z = 0; z < W.length; z++) {
          var H = W[z], I = H(O, B, E, S, M, y);
          if (I == null)
            return null;
          I.data && _(I.data, "expectedType") && j.push(I.data.expectedType);
        }
        var te = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new t("Invalid " + S + " `" + M + "` supplied to " + ("`" + E + "`" + te + "."));
      }
      return s(P);
    }
    function x() {
      function W(b, A, P, O, B) {
        return K(b[A]) ? null : new t("Invalid " + O + " `" + B + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return s(W);
    }
    function k(W, b, A, P, O) {
      return new t(
        (W || "React class") + ": " + b + " type `" + A + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function L(W) {
      function b(A, P, O, B, E) {
        var S = A[P], M = q(S);
        if (M !== "object")
          return new t("Invalid " + B + " `" + E + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var j in W) {
          var z = W[j];
          if (typeof z != "function")
            return k(O, B, E, j, ee(z));
          var H = z(S, j, O, B, E + "." + j, y);
          if (H)
            return H;
        }
        return null;
      }
      return s(b);
    }
    function Y(W) {
      function b(A, P, O, B, E) {
        var S = A[P], M = q(S);
        if (M !== "object")
          return new t("Invalid " + B + " `" + E + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        var j = c({}, A[P], W);
        for (var z in j) {
          var H = W[z];
          if (_(W, z) && typeof H != "function")
            return k(O, B, E, z, ee(H));
          if (!H)
            return new t(
              "Invalid " + B + " `" + E + "` key `" + z + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(A[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(W), null, "  ")
            );
          var I = H(S, z, O, B, E + "." + z, y);
          if (I)
            return I;
        }
        return null;
      }
      return s(b);
    }
    function K(W) {
      switch (typeof W) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !W;
        case "object":
          if (Array.isArray(W))
            return W.every(K);
          if (W === null || X(W))
            return !0;
          var b = a(W);
          if (b) {
            var A = b.call(W), P;
            if (b !== W.entries) {
              for (; !(P = A.next()).done; )
                if (!K(P.value))
                  return !1;
            } else
              for (; !(P = A.next()).done; ) {
                var O = P.value;
                if (O && !K(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(W, b) {
      return W === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function q(W) {
      var b = typeof W;
      return Array.isArray(W) ? "array" : W instanceof RegExp ? "object" : re(b, W) ? "symbol" : b;
    }
    function ee(W) {
      if (typeof W > "u" || W === null)
        return "" + W;
      var b = q(W);
      if (b === "object") {
        if (W instanceof Date)
          return "date";
        if (W instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function se(W) {
      var b = ee(W);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function ae(W) {
      return !W.constructor || !W.constructor.name ? o : W.constructor.name;
    }
    return e.checkPropTypes = v, e.resetWarningCache = v.resetWarningCache, e.PropTypes = e, e;
  }, ai;
}
var li, qi;
function Ln() {
  if (qi)
    return li;
  qi = 1;
  var d = pi();
  function c() {
  }
  function y() {
  }
  return y.resetWarningCache = c, li = function() {
    function _(R, X, N, u, i, a) {
      if (a !== d) {
        var o = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw o.name = "Invariant Violation", o;
      }
    }
    _.isRequired = _;
    function v() {
      return _;
    }
    var T = {
      array: _,
      bigint: _,
      bool: _,
      func: _,
      number: _,
      object: _,
      string: _,
      symbol: _,
      any: _,
      arrayOf: v,
      element: _,
      elementType: _,
      instanceOf: v,
      node: _,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: y,
      resetWarningCache: c
    };
    return T.PropTypes = T, T;
  }, li;
}
if (process.env.NODE_ENV !== "production") {
  var Bn = Er(), Yn = !0;
  zi.exports = In()(Bn.isElement, Yn);
} else
  zi.exports = Ln()();
function Ct(d) {
  let c = "https://mui.com/production-error/?code=" + d;
  for (let y = 1; y < arguments.length; y += 1)
    c += "&args[]=" + encodeURIComponent(arguments[y]);
  return "Minified MUI error #" + d + "; visit " + c + " for the full message.";
}
var Lt = {}, Xn = {
  get exports() {
    return Lt;
  },
  set exports(d) {
    Lt = d;
  }
}, Te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function zn() {
  if (Qi)
    return Te;
  Qi = 1;
  var d = Symbol.for("react.element"), c = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), R = Symbol.for("react.context"), X = Symbol.for("react.server_context"), N = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), e = Symbol.for("react.offscreen"), r;
  r = Symbol.for("react.module.reference");
  function t(s) {
    if (typeof s == "object" && s !== null) {
      var l = s.$$typeof;
      switch (l) {
        case d:
          switch (s = s.type, s) {
            case y:
            case v:
            case _:
            case u:
            case i:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case X:
                case R:
                case N:
                case o:
                case a:
                case T:
                  return s;
                default:
                  return l;
              }
          }
        case c:
          return l;
      }
    }
  }
  return Te.ContextConsumer = R, Te.ContextProvider = T, Te.Element = d, Te.ForwardRef = N, Te.Fragment = y, Te.Lazy = o, Te.Memo = a, Te.Portal = c, Te.Profiler = v, Te.StrictMode = _, Te.Suspense = u, Te.SuspenseList = i, Te.isAsyncMode = function() {
    return !1;
  }, Te.isConcurrentMode = function() {
    return !1;
  }, Te.isContextConsumer = function(s) {
    return t(s) === R;
  }, Te.isContextProvider = function(s) {
    return t(s) === T;
  }, Te.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === d;
  }, Te.isForwardRef = function(s) {
    return t(s) === N;
  }, Te.isFragment = function(s) {
    return t(s) === y;
  }, Te.isLazy = function(s) {
    return t(s) === o;
  }, Te.isMemo = function(s) {
    return t(s) === a;
  }, Te.isPortal = function(s) {
    return t(s) === c;
  }, Te.isProfiler = function(s) {
    return t(s) === v;
  }, Te.isStrictMode = function(s) {
    return t(s) === _;
  }, Te.isSuspense = function(s) {
    return t(s) === u;
  }, Te.isSuspenseList = function(s) {
    return t(s) === i;
  }, Te.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === y || s === v || s === _ || s === u || s === i || s === e || typeof s == "object" && s !== null && (s.$$typeof === o || s.$$typeof === a || s.$$typeof === T || s.$$typeof === R || s.$$typeof === N || s.$$typeof === r || s.getModuleId !== void 0);
  }, Te.typeOf = t, Te;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ji;
function Nn() {
  return Ji || (Ji = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Symbol.for("react.element"), c = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), R = Symbol.for("react.context"), X = Symbol.for("react.server_context"), N = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), e = Symbol.for("react.offscreen"), r = !1, t = !1, s = !1, l = !1, n = !1, h;
    h = Symbol.for("react.module.reference");
    function f($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === y || $ === v || n || $ === _ || $ === u || $ === i || l || $ === e || r || t || s || typeof $ == "object" && $ !== null && ($.$$typeof === o || $.$$typeof === a || $.$$typeof === T || $.$$typeof === R || $.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === h || $.getModuleId !== void 0));
    }
    function g($) {
      if (typeof $ == "object" && $ !== null) {
        var G = $.$$typeof;
        switch (G) {
          case d:
            var F = $.type;
            switch (F) {
              case y:
              case v:
              case _:
              case u:
              case i:
                return F;
              default:
                var Q = F && F.$$typeof;
                switch (Q) {
                  case X:
                  case R:
                  case N:
                  case o:
                  case a:
                  case T:
                    return Q;
                  default:
                    return G;
                }
            }
          case c:
            return G;
        }
      }
    }
    var p = R, m = T, C = d, w = N, x = y, k = o, L = a, Y = c, K = v, re = _, q = u, ee = i, se = !1, ae = !1;
    function W($) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function b($) {
      return ae || (ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A($) {
      return g($) === R;
    }
    function P($) {
      return g($) === T;
    }
    function O($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === d;
    }
    function B($) {
      return g($) === N;
    }
    function E($) {
      return g($) === y;
    }
    function S($) {
      return g($) === o;
    }
    function M($) {
      return g($) === a;
    }
    function j($) {
      return g($) === c;
    }
    function z($) {
      return g($) === v;
    }
    function H($) {
      return g($) === _;
    }
    function I($) {
      return g($) === u;
    }
    function te($) {
      return g($) === i;
    }
    Ee.ContextConsumer = p, Ee.ContextProvider = m, Ee.Element = C, Ee.ForwardRef = w, Ee.Fragment = x, Ee.Lazy = k, Ee.Memo = L, Ee.Portal = Y, Ee.Profiler = K, Ee.StrictMode = re, Ee.Suspense = q, Ee.SuspenseList = ee, Ee.isAsyncMode = W, Ee.isConcurrentMode = b, Ee.isContextConsumer = A, Ee.isContextProvider = P, Ee.isElement = O, Ee.isForwardRef = B, Ee.isFragment = E, Ee.isLazy = S, Ee.isMemo = M, Ee.isPortal = j, Ee.isProfiler = z, Ee.isStrictMode = H, Ee.isSuspense = I, Ee.isSuspenseList = te, Ee.isValidElementType = f, Ee.typeOf = g;
  }()), Ee;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = zn() : d.exports = Nn();
})(Xn);
const Hn = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Wn(d) {
  const c = `${d}`.match(Hn);
  return c && c[1] || "";
}
function Pr(d, c = "") {
  return d.displayName || d.name || Wn(d) || c;
}
function Zi(d, c, y) {
  const _ = Pr(c);
  return d.displayName || (_ !== "" ? `${y}(${_})` : y);
}
function Un(d) {
  if (d != null) {
    if (typeof d == "string")
      return d;
    if (typeof d == "function")
      return Pr(d, "Component");
    if (typeof d == "object")
      switch (d.$$typeof) {
        case Lt.ForwardRef:
          return Zi(d, d.render, "ForwardRef");
        case Lt.Memo:
          return Zi(d, d.type, "memo");
        default:
          return;
      }
  }
}
function qe(d) {
  if (typeof d != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ct(7));
  return d.charAt(0).toUpperCase() + d.slice(1);
}
function Gn(...d) {
  return d.reduce((c, y) => y == null ? c : function(...v) {
    c.apply(this, v), y.apply(this, v);
  }, () => {
  });
}
function Vn(d, c = 166) {
  let y;
  function _(...v) {
    const T = () => {
      d.apply(this, v);
    };
    clearTimeout(y), y = setTimeout(T, c);
  }
  return _.clear = () => {
    clearTimeout(y);
  }, _;
}
function $n(d, c) {
  return process.env.NODE_ENV === "production" ? () => null : (y, _, v, T, R) => {
    const X = v || "<<anonymous>>", N = R || _;
    return typeof y[_] < "u" ? new Error(`The ${T} \`${N}\` of \`${X}\` is deprecated. ${c}`) : null;
  };
}
function Kn(d, c) {
  return /* @__PURE__ */ fe.isValidElement(d) && c.indexOf(d.type.muiName) !== -1;
}
function Ar(d) {
  return d && d.ownerDocument || document;
}
function qn(d) {
  return Ar(d).defaultView || window;
}
function Qn(d, c) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const y = c ? ye({}, c.propTypes) : null;
  return (v) => (T, R, X, N, u, ...i) => {
    const a = u || R, o = y == null ? void 0 : y[a];
    if (o) {
      const e = o(T, R, X, N, u, ...i);
      if (e)
        return e;
    }
    return typeof T[R] < "u" && !T[v] ? new Error(`The prop \`${a}\` of \`${d}\` can only be used together with the \`${v}\` prop.`) : null;
  };
}
function kr(d, c) {
  typeof d == "function" ? d(c) : d && (d.current = c);
}
const Jn = typeof window < "u" ? fe.useLayoutEffect : fe.useEffect, Mr = Jn;
let er = 0;
function Zn(d) {
  const [c, y] = fe.useState(d), _ = d || c;
  return fe.useEffect(() => {
    c == null && (er += 1, y(`mui-${er}`));
  }, [c]), _;
}
const tr = fe["useId"];
function es(d) {
  if (tr !== void 0) {
    const c = tr();
    return d ?? c;
  }
  return Zn(d);
}
function ts(d, c, y, _, v) {
  if (process.env.NODE_ENV === "production")
    return null;
  const T = v || c;
  return typeof d[c] < "u" ? new Error(`The prop \`${T}\` is not supported. Please remove it.`) : null;
}
function is({
  controlled: d,
  default: c,
  name: y,
  state: _ = "value"
}) {
  const {
    current: v
  } = fe.useRef(d !== void 0), [T, R] = fe.useState(c), X = v ? d : T;
  if (process.env.NODE_ENV !== "production") {
    fe.useEffect(() => {
      v !== (d !== void 0) && console.error([`MUI: A component is changing the ${v ? "" : "un"}controlled ${_} state of ${y} to be ${v ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${y} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [_, y, d]);
    const {
      current: u
    } = fe.useRef(c);
    fe.useEffect(() => {
      !v && u !== c && console.error([`MUI: A component is changing the default ${_} state of an uncontrolled ${y} after being initialized. To suppress this warning opt to use a controlled ${y}.`].join(`
`));
    }, [JSON.stringify(c)]);
  }
  const N = fe.useCallback((u) => {
    v || R(u);
  }, []);
  return [X, N];
}
function rs(d) {
  const c = fe.useRef(d);
  return Mr(() => {
    c.current = d;
  }), fe.useCallback((...y) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, c.current)(...y)
  ), []);
}
function ns(...d) {
  return fe.useMemo(() => d.every((c) => c == null) ? null : (c) => {
    d.forEach((y) => {
      kr(y, c);
    });
  }, d);
}
let Yt = !0, gi = !1, ir;
const ss = {
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
function os(d) {
  const {
    type: c,
    tagName: y
  } = d;
  return !!(y === "INPUT" && ss[c] && !d.readOnly || y === "TEXTAREA" && !d.readOnly || d.isContentEditable);
}
function as(d) {
  d.metaKey || d.altKey || d.ctrlKey || (Yt = !0);
}
function ci() {
  Yt = !1;
}
function ls() {
  this.visibilityState === "hidden" && gi && (Yt = !0);
}
function cs(d) {
  d.addEventListener("keydown", as, !0), d.addEventListener("mousedown", ci, !0), d.addEventListener("pointerdown", ci, !0), d.addEventListener("touchstart", ci, !0), d.addEventListener("visibilitychange", ls, !0);
}
function hs(d) {
  const {
    target: c
  } = d;
  try {
    return c.matches(":focus-visible");
  } catch {
  }
  return Yt || os(c);
}
function us() {
  const d = fe.useCallback((v) => {
    v != null && cs(v.ownerDocument);
  }, []), c = fe.useRef(!1);
  function y() {
    return c.current ? (gi = !0, window.clearTimeout(ir), ir = window.setTimeout(() => {
      gi = !1;
    }, 100), c.current = !1, !0) : !1;
  }
  function _(v) {
    return hs(v) ? (c.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: c,
    onFocus: _,
    onBlur: y,
    ref: d
  };
}
function Dr(d, c) {
  const y = ye({}, c);
  return Object.keys(d).forEach((_) => {
    if (_.toString().match(/^(components|slots)$/))
      y[_] = ye({}, d[_], y[_]);
    else if (_.toString().match(/^(componentsProps|slotProps)$/)) {
      const v = d[_] || {}, T = c[_];
      y[_] = {}, !T || !Object.keys(T) ? y[_] = v : !v || !Object.keys(v) ? y[_] = T : (y[_] = ye({}, T), Object.keys(v).forEach((R) => {
        y[_][R] = Dr(v[R], T[R]);
      }));
    } else
      y[_] === void 0 && (y[_] = d[_]);
  }), y;
}
function fs(d, c, y = void 0) {
  const _ = {};
  return Object.keys(d).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (v) => {
      _[v] = d[v].reduce((T, R) => {
        if (R) {
          const X = c(R);
          X !== "" && T.push(X), y && y[R] && T.push(y[R]);
        }
        return T;
      }, []).join(" ");
    }
  ), _;
}
const rr = (d) => d, ds = () => {
  let d = rr;
  return {
    configure(c) {
      d = c;
    },
    generate(c) {
      return d(c);
    },
    reset() {
      d = rr;
    }
  };
}, gs = ds(), Rr = gs, ps = {
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
function vi(d, c, y = "Mui") {
  const _ = ps[c];
  return _ ? `${y}-${_}` : `${Rr.generate(d)}-${c}`;
}
function vs(d, c, y = "Mui") {
  const _ = {};
  return c.forEach((v) => {
    _[v] = vi(d, v, y);
  }), _;
}
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function jr(d, c) {
  const y = On(d, c);
  return process.env.NODE_ENV !== "production" ? (..._) => {
    const v = typeof d == "string" ? `"${d}"` : "component";
    return _.length === 0 ? console.error([`MUI: Seems like you called \`styled(${v})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : _.some((T) => T === void 0) && console.error(`MUI: the styled(${v})(...args) API requires all its args to be defined.`), y(..._);
  } : y;
}
const ms = (d, c) => {
  Array.isArray(d.__emotion_styles) && (d.__emotion_styles = c(d.__emotion_styles));
}, ys = process.env.NODE_ENV !== "production" ? ve.oneOfType([ve.number, ve.string, ve.object, ve.array]) : {}, lt = ys;
function Pt(d, c) {
  return c ? nt(d, c, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : d;
}
const mi = {
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
}, nr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (d) => `@media (min-width:${mi[d]}px)`
};
function Je(d, c, y) {
  const _ = d.theme || {};
  if (Array.isArray(c)) {
    const T = _.breakpoints || nr;
    return c.reduce((R, X, N) => (R[T.up(T.keys[N])] = y(c[N]), R), {});
  }
  if (typeof c == "object") {
    const T = _.breakpoints || nr;
    return Object.keys(c).reduce((R, X) => {
      if (Object.keys(T.values || mi).indexOf(X) !== -1) {
        const N = T.up(X);
        R[N] = y(c[X], X);
      } else {
        const N = X;
        R[N] = c[N];
      }
      return R;
    }, {});
  }
  return y(c);
}
function _s(d = {}) {
  var c;
  return ((c = d.keys) == null ? void 0 : c.reduce((_, v) => {
    const T = d.up(v);
    return _[T] = {}, _;
  }, {})) || {};
}
function bs(d, c) {
  return d.reduce((y, _) => {
    const v = y[_];
    return (!v || Object.keys(v).length === 0) && delete y[_], y;
  }, c);
}
function Xt(d, c, y = !0) {
  if (!c || typeof c != "string")
    return null;
  if (d && d.vars && y) {
    const _ = `vars.${c}`.split(".").reduce((v, T) => v && v[T] ? v[T] : null, d);
    if (_ != null)
      return _;
  }
  return c.split(".").reduce((_, v) => _ && _[v] != null ? _[v] : null, d);
}
function Bt(d, c, y, _ = y) {
  let v;
  return typeof d == "function" ? v = d(y) : Array.isArray(d) ? v = d[y] || _ : v = Xt(d, y) || _, c && (v = c(v, _, d)), v;
}
function Oe(d) {
  const {
    prop: c,
    cssProperty: y = d.prop,
    themeKey: _,
    transform: v
  } = d, T = (R) => {
    if (R[c] == null)
      return null;
    const X = R[c], N = R.theme, u = Xt(N, _) || {};
    return Je(R, X, (a) => {
      let o = Bt(u, v, a);
      return a === o && typeof a == "string" && (o = Bt(u, v, `${c}${a === "default" ? "" : qe(a)}`, a)), y === !1 ? o : {
        [y]: o
      };
    });
  };
  return T.propTypes = process.env.NODE_ENV !== "production" ? {
    [c]: lt
  } : {}, T.filterProps = [c], T;
}
function zt(...d) {
  const c = d.reduce((_, v) => (v.filterProps.forEach((T) => {
    _[T] = v;
  }), _), {}), y = (_) => Object.keys(_).reduce((v, T) => c[T] ? Pt(v, c[T](_)) : v, {});
  return y.propTypes = process.env.NODE_ENV !== "production" ? d.reduce((_, v) => Object.assign(_, v.propTypes), {}) : {}, y.filterProps = d.reduce((_, v) => _.concat(v.filterProps), []), y;
}
function Cs(d) {
  const c = {};
  return (y) => (c[y] === void 0 && (c[y] = d(y)), c[y]);
}
const xs = {
  m: "margin",
  p: "padding"
}, Ss = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, sr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ws = Cs((d) => {
  if (d.length > 2)
    if (sr[d])
      d = sr[d];
    else
      return [d];
  const [c, y] = d.split(""), _ = xs[c], v = Ss[y] || "";
  return Array.isArray(v) ? v.map((T) => _ + T) : [_ + v];
}), Nt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ht = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ts = [...Nt, ...Ht];
function kt(d, c, y, _) {
  var v;
  const T = (v = Xt(d, c, !1)) != null ? v : y;
  return typeof T == "number" ? (R) => typeof R == "string" ? R : (process.env.NODE_ENV !== "production" && typeof R != "number" && console.error(`MUI: Expected ${_} argument to be a number or a string, got ${R}.`), T * R) : Array.isArray(T) ? (R) => typeof R == "string" ? R : (process.env.NODE_ENV !== "production" && (Number.isInteger(R) ? R > T.length - 1 && console.error([`MUI: The value provided (${R}) overflows.`, `The supported values are: ${JSON.stringify(T)}.`, `${R} > ${T.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${c}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${c}\` as a number.`].join(`
`))), T[R]) : typeof T == "function" ? T : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${c}\` value (${T}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Fr(d) {
  return kt(d, "spacing", 8, "spacing");
}
function Mt(d, c) {
  if (typeof c == "string" || c == null)
    return c;
  const y = Math.abs(c), _ = d(y);
  return c >= 0 ? _ : typeof _ == "number" ? -_ : `-${_}`;
}
function Es(d, c) {
  return (y) => d.reduce((_, v) => (_[v] = Mt(c, y), _), {});
}
function Os(d, c, y, _) {
  if (c.indexOf(y) === -1)
    return null;
  const v = ws(y), T = Es(v, _), R = d[y];
  return Je(d, R, T);
}
function Ir(d, c) {
  const y = Fr(d.theme);
  return Object.keys(d).map((_) => Os(d, c, _, y)).reduce(Pt, {});
}
function De(d) {
  return Ir(d, Nt);
}
De.propTypes = process.env.NODE_ENV !== "production" ? Nt.reduce((d, c) => (d[c] = lt, d), {}) : {};
De.filterProps = Nt;
function Re(d) {
  return Ir(d, Ht);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? Ht.reduce((d, c) => (d[c] = lt, d), {}) : {};
Re.filterProps = Ht;
process.env.NODE_ENV !== "production" && Ts.reduce((d, c) => (d[c] = lt, d), {});
function Qe(d) {
  return typeof d != "number" ? d : `${d}px solid`;
}
const Ps = Oe({
  prop: "border",
  themeKey: "borders",
  transform: Qe
}), As = Oe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Qe
}), ks = Oe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Qe
}), Ms = Oe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Qe
}), Ds = Oe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Qe
}), Rs = Oe({
  prop: "borderColor",
  themeKey: "palette"
}), js = Oe({
  prop: "borderTopColor",
  themeKey: "palette"
}), Fs = Oe({
  prop: "borderRightColor",
  themeKey: "palette"
}), Is = Oe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Ls = Oe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Wt = (d) => {
  if (d.borderRadius !== void 0 && d.borderRadius !== null) {
    const c = kt(d.theme, "shape.borderRadius", 4, "borderRadius"), y = (_) => ({
      borderRadius: Mt(c, _)
    });
    return Je(d, d.borderRadius, y);
  }
  return null;
};
Wt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: lt
} : {};
Wt.filterProps = ["borderRadius"];
zt(Ps, As, ks, Ms, Ds, Rs, js, Fs, Is, Ls, Wt);
const Ut = (d) => {
  if (d.gap !== void 0 && d.gap !== null) {
    const c = kt(d.theme, "spacing", 8, "gap"), y = (_) => ({
      gap: Mt(c, _)
    });
    return Je(d, d.gap, y);
  }
  return null;
};
Ut.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: lt
} : {};
Ut.filterProps = ["gap"];
const Gt = (d) => {
  if (d.columnGap !== void 0 && d.columnGap !== null) {
    const c = kt(d.theme, "spacing", 8, "columnGap"), y = (_) => ({
      columnGap: Mt(c, _)
    });
    return Je(d, d.columnGap, y);
  }
  return null;
};
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: lt
} : {};
Gt.filterProps = ["columnGap"];
const Vt = (d) => {
  if (d.rowGap !== void 0 && d.rowGap !== null) {
    const c = kt(d.theme, "spacing", 8, "rowGap"), y = (_) => ({
      rowGap: Mt(c, _)
    });
    return Je(d, d.rowGap, y);
  }
  return null;
};
Vt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: lt
} : {};
Vt.filterProps = ["rowGap"];
const Bs = Oe({
  prop: "gridColumn"
}), Ys = Oe({
  prop: "gridRow"
}), Xs = Oe({
  prop: "gridAutoFlow"
}), zs = Oe({
  prop: "gridAutoColumns"
}), Ns = Oe({
  prop: "gridAutoRows"
}), Hs = Oe({
  prop: "gridTemplateColumns"
}), Ws = Oe({
  prop: "gridTemplateRows"
}), Us = Oe({
  prop: "gridTemplateAreas"
}), Gs = Oe({
  prop: "gridArea"
});
zt(Ut, Gt, Vt, Bs, Ys, Xs, zs, Ns, Hs, Ws, Us, Gs);
function bt(d, c) {
  return c === "grey" ? c : d;
}
const Vs = Oe({
  prop: "color",
  themeKey: "palette",
  transform: bt
}), $s = Oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: bt
}), Ks = Oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: bt
});
zt(Vs, $s, Ks);
function Xe(d) {
  return d <= 1 && d !== 0 ? `${d * 100}%` : d;
}
const qs = Oe({
  prop: "width",
  transform: Xe
}), yi = (d) => {
  if (d.maxWidth !== void 0 && d.maxWidth !== null) {
    const c = (y) => {
      var _, v, T;
      return {
        maxWidth: ((_ = d.theme) == null || (v = _.breakpoints) == null || (T = v.values) == null ? void 0 : T[y]) || mi[y] || Xe(y)
      };
    };
    return Je(d, d.maxWidth, c);
  }
  return null;
};
yi.filterProps = ["maxWidth"];
const Qs = Oe({
  prop: "minWidth",
  transform: Xe
}), Js = Oe({
  prop: "height",
  transform: Xe
}), Zs = Oe({
  prop: "maxHeight",
  transform: Xe
}), eo = Oe({
  prop: "minHeight",
  transform: Xe
});
Oe({
  prop: "size",
  cssProperty: "width",
  transform: Xe
});
Oe({
  prop: "size",
  cssProperty: "height",
  transform: Xe
});
const to = Oe({
  prop: "boxSizing"
});
zt(qs, yi, Qs, Js, Zs, eo, to);
const hi = (d) => (c) => {
  if (c[d] !== void 0 && c[d] !== null) {
    const y = (_) => {
      var v;
      let T = (v = c.theme.typography) == null ? void 0 : v[_];
      if (typeof T == "object" && (T = null), !T) {
        var R, X;
        T = (R = c.theme.typography) == null ? void 0 : R[`${d}${c[d] === "default" || c[d] === d ? "" : qe((X = c[d]) == null ? void 0 : X.toString())}`];
      }
      if (!T) {
        var N, u, i;
        T = (N = (u = c.theme.typography) == null || (i = u[_]) == null ? void 0 : i[d]) != null ? N : _;
      }
      return {
        [d]: T
      };
    };
    return Je(c, c[d], y);
  }
  return null;
}, io = {
  // borders
  border: {
    themeKey: "borders",
    transform: Qe
  },
  borderTop: {
    themeKey: "borders",
    transform: Qe
  },
  borderRight: {
    themeKey: "borders",
    transform: Qe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Qe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Qe
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
    style: Wt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: bt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: bt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: bt
  },
  // spacing
  p: {
    style: Re
  },
  pt: {
    style: Re
  },
  pr: {
    style: Re
  },
  pb: {
    style: Re
  },
  pl: {
    style: Re
  },
  px: {
    style: Re
  },
  py: {
    style: Re
  },
  padding: {
    style: Re
  },
  paddingTop: {
    style: Re
  },
  paddingRight: {
    style: Re
  },
  paddingBottom: {
    style: Re
  },
  paddingLeft: {
    style: Re
  },
  paddingX: {
    style: Re
  },
  paddingY: {
    style: Re
  },
  paddingInline: {
    style: Re
  },
  paddingInlineStart: {
    style: Re
  },
  paddingInlineEnd: {
    style: Re
  },
  paddingBlock: {
    style: Re
  },
  paddingBlockStart: {
    style: Re
  },
  paddingBlockEnd: {
    style: Re
  },
  m: {
    style: De
  },
  mt: {
    style: De
  },
  mr: {
    style: De
  },
  mb: {
    style: De
  },
  ml: {
    style: De
  },
  mx: {
    style: De
  },
  my: {
    style: De
  },
  margin: {
    style: De
  },
  marginTop: {
    style: De
  },
  marginRight: {
    style: De
  },
  marginBottom: {
    style: De
  },
  marginLeft: {
    style: De
  },
  marginX: {
    style: De
  },
  marginY: {
    style: De
  },
  marginInline: {
    style: De
  },
  marginInlineStart: {
    style: De
  },
  marginInlineEnd: {
    style: De
  },
  marginBlock: {
    style: De
  },
  marginBlockStart: {
    style: De
  },
  marginBlockEnd: {
    style: De
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (d) => ({
      "@media print": {
        display: d
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
    style: Ut
  },
  rowGap: {
    style: Vt
  },
  columnGap: {
    style: Gt
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
    transform: Xe
  },
  maxWidth: {
    style: yi
  },
  minWidth: {
    transform: Xe
  },
  height: {
    transform: Xe
  },
  maxHeight: {
    transform: Xe
  },
  minHeight: {
    transform: Xe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography",
    style: hi("fontFamily")
  },
  fontSize: {
    themeKey: "typography",
    style: hi("fontSize")
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography",
    style: hi("fontWeight")
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, $t = io;
function ro(...d) {
  const c = d.reduce((_, v) => _.concat(Object.keys(v)), []), y = new Set(c);
  return d.every((_) => y.size === Object.keys(_).length);
}
function no(d, c) {
  return typeof d == "function" ? d(c) : d;
}
function so() {
  function d(y, _, v, T) {
    const R = {
      [y]: _,
      theme: v
    }, X = T[y];
    if (!X)
      return {
        [y]: _
      };
    const {
      cssProperty: N = y,
      themeKey: u,
      transform: i,
      style: a
    } = X;
    if (_ == null)
      return null;
    const o = Xt(v, u) || {};
    return a ? a(R) : Je(R, _, (r) => {
      let t = Bt(o, i, r);
      return r === t && typeof r == "string" && (t = Bt(o, i, `${y}${r === "default" ? "" : qe(r)}`, r)), N === !1 ? t : {
        [N]: t
      };
    });
  }
  function c(y) {
    var _;
    const {
      sx: v,
      theme: T = {}
    } = y || {};
    if (!v)
      return null;
    const R = (_ = T.unstable_sxConfig) != null ? _ : $t;
    function X(N) {
      let u = N;
      if (typeof N == "function")
        u = N(T);
      else if (typeof N != "object")
        return N;
      if (!u)
        return null;
      const i = _s(T.breakpoints), a = Object.keys(i);
      let o = i;
      return Object.keys(u).forEach((e) => {
        const r = no(u[e], T);
        if (r != null)
          if (typeof r == "object")
            if (R[e])
              o = Pt(o, d(e, r, T, R));
            else {
              const t = Je({
                theme: T
              }, r, (s) => ({
                [e]: s
              }));
              ro(t, r) ? o[e] = c({
                sx: r,
                theme: T
              }) : o = Pt(o, t);
            }
          else
            o = Pt(o, d(e, r, T, R));
      }), bs(a, o);
    }
    return Array.isArray(v) ? v.map(X) : X(v);
  }
  return c;
}
const Lr = so();
Lr.filterProps = ["sx"];
const Kt = Lr;
function Ne(d, c) {
  if (d == null)
    return {};
  var y = {}, _ = Object.keys(d), v, T;
  for (T = 0; T < _.length; T++)
    v = _[T], !(c.indexOf(v) >= 0) && (y[v] = d[v]);
  return y;
}
const oo = ["sx"], ao = (d) => {
  var c, y;
  const _ = {
    systemProps: {},
    otherProps: {}
  }, v = (c = d == null || (y = d.theme) == null ? void 0 : y.unstable_sxConfig) != null ? c : $t;
  return Object.keys(d).forEach((T) => {
    v[T] ? _.systemProps[T] = d[T] : _.otherProps[T] = d[T];
  }), _;
};
function lo(d) {
  const {
    sx: c
  } = d, y = Ne(d, oo), {
    systemProps: _,
    otherProps: v
  } = ao(y);
  let T;
  return Array.isArray(c) ? T = [_, ...c] : typeof c == "function" ? T = (...R) => {
    const X = c(...R);
    return gt(X) ? ye({}, _, X) : _;
  } : T = ye({}, _, c), ye({}, v, {
    sx: T
  });
}
function Br(d) {
  var c, y, _ = "";
  if (typeof d == "string" || typeof d == "number")
    _ += d;
  else if (typeof d == "object")
    if (Array.isArray(d))
      for (c = 0; c < d.length; c++)
        d[c] && (y = Br(d[c])) && (_ && (_ += " "), _ += y);
    else
      for (c in d)
        d[c] && (_ && (_ += " "), _ += c);
  return _;
}
function Yr() {
  for (var d, c, y = 0, _ = ""; y < arguments.length; )
    (d = arguments[y++]) && (c = Br(d)) && (_ && (_ += " "), _ += c);
  return _;
}
const co = ["values", "unit", "step"], ho = (d) => {
  const c = Object.keys(d).map((y) => ({
    key: y,
    val: d[y]
  })) || [];
  return c.sort((y, _) => y.val - _.val), c.reduce((y, _) => ye({}, y, {
    [_.key]: _.val
  }), {});
};
function uo(d) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: c = {
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
    unit: y = "px",
    step: _ = 5
  } = d, v = Ne(d, co), T = ho(c), R = Object.keys(T);
  function X(o) {
    return `@media (min-width:${typeof c[o] == "number" ? c[o] : o}${y})`;
  }
  function N(o) {
    return `@media (max-width:${(typeof c[o] == "number" ? c[o] : o) - _ / 100}${y})`;
  }
  function u(o, e) {
    const r = R.indexOf(e);
    return `@media (min-width:${typeof c[o] == "number" ? c[o] : o}${y}) and (max-width:${(r !== -1 && typeof c[R[r]] == "number" ? c[R[r]] : e) - _ / 100}${y})`;
  }
  function i(o) {
    return R.indexOf(o) + 1 < R.length ? u(o, R[R.indexOf(o) + 1]) : X(o);
  }
  function a(o) {
    const e = R.indexOf(o);
    return e === 0 ? X(R[1]) : e === R.length - 1 ? N(R[e]) : u(o, R[R.indexOf(o) + 1]).replace("@media", "@media not all and");
  }
  return ye({
    keys: R,
    values: T,
    up: X,
    down: N,
    between: u,
    only: i,
    not: a,
    unit: y
  }, v);
}
const fo = {
  borderRadius: 4
}, go = fo;
function po(d = 8) {
  if (d.mui)
    return d;
  const c = Fr({
    spacing: d
  }), y = (..._) => (process.env.NODE_ENV !== "production" && (_.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${_.length}`)), (_.length === 0 ? [1] : _).map((T) => {
    const R = c(T);
    return typeof R == "number" ? `${R}px` : R;
  }).join(" "));
  return y.mui = !0, y;
}
const vo = ["breakpoints", "palette", "spacing", "shape"];
function _i(d = {}, ...c) {
  const {
    breakpoints: y = {},
    palette: _ = {},
    spacing: v,
    shape: T = {}
  } = d, R = Ne(d, vo), X = uo(y), N = po(v);
  let u = nt({
    breakpoints: X,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ye({
      mode: "light"
    }, _),
    spacing: N,
    shape: ye({}, go, T)
  }, R);
  return u = c.reduce((i, a) => nt(i, a), u), u.unstable_sxConfig = ye({}, $t, R == null ? void 0 : R.unstable_sxConfig), u.unstable_sx = function(a) {
    return Kt({
      sx: a,
      theme: this
    });
  }, u;
}
const Xr = /* @__PURE__ */ fe.createContext(null);
process.env.NODE_ENV !== "production" && (Xr.displayName = "ThemeContext");
const mo = Xr;
function yo() {
  const d = fe.useContext(mo);
  return process.env.NODE_ENV !== "production" && fe.useDebugValue(d), d;
}
function _o(d) {
  return Object.keys(d).length === 0;
}
function bo(d = null) {
  const c = yo();
  return !c || _o(c) ? d : c;
}
const Co = _i();
function zr(d = Co) {
  return bo(d);
}
const xo = ["className", "component"];
function So(d = {}) {
  const {
    defaultTheme: c,
    defaultClassName: y = "MuiBox-root",
    generateClassName: _
  } = d, v = jr("div", {
    shouldForwardProp: (R) => R !== "theme" && R !== "sx" && R !== "as"
  })(Kt);
  return /* @__PURE__ */ fe.forwardRef(function(X, N) {
    const u = zr(c), i = lo(X), {
      className: a,
      component: o = "div"
    } = i, e = Ne(i, xo);
    return /* @__PURE__ */ U.jsx(v, ye({
      as: o,
      ref: N,
      className: Yr(a, _ ? _(y) : y),
      theme: u
    }, e));
  });
}
const Nr = So();
process.env.NODE_ENV !== "production" && (Nr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: ve.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ve.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: ve.oneOfType([ve.arrayOf(ve.oneOfType([ve.func, ve.object, ve.bool])), ve.func, ve.object])
});
const at = Nr, wo = ["variant"];
function or(d) {
  return d.length === 0;
}
function Hr(d) {
  const {
    variant: c
  } = d, y = Ne(d, wo);
  let _ = c || "";
  return Object.keys(y).sort().forEach((v) => {
    v === "color" ? _ += or(_) ? d[v] : qe(d[v]) : _ += `${or(_) ? v : qe(v)}${qe(d[v].toString())}`;
  }), _;
}
const To = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], Eo = ["theme"], Oo = ["theme"];
function Ot(d) {
  return Object.keys(d).length === 0;
}
function Po(d) {
  return typeof d == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  d.charCodeAt(0) > 96;
}
const Ao = (d, c) => c.components && c.components[d] && c.components[d].styleOverrides ? c.components[d].styleOverrides : null, ko = (d, c) => {
  let y = [];
  c && c.components && c.components[d] && c.components[d].variants && (y = c.components[d].variants);
  const _ = {};
  return y.forEach((v) => {
    const T = Hr(v.props);
    _[T] = v.style;
  }), _;
}, Mo = (d, c, y, _) => {
  var v, T;
  const {
    ownerState: R = {}
  } = d, X = [], N = y == null || (v = y.components) == null || (T = v[_]) == null ? void 0 : T.variants;
  return N && N.forEach((u) => {
    let i = !0;
    Object.keys(u.props).forEach((a) => {
      R[a] !== u.props[a] && d[a] !== u.props[a] && (i = !1);
    }), i && X.push(c[Hr(u.props)]);
  }), X;
};
function Ft(d) {
  return d !== "ownerState" && d !== "theme" && d !== "sx" && d !== "as";
}
const Do = _i(), Ro = (d) => d.charAt(0).toLowerCase() + d.slice(1);
function Wr(d = {}) {
  const {
    defaultTheme: c = Do,
    rootShouldForwardProp: y = Ft,
    slotShouldForwardProp: _ = Ft
  } = d, v = (T) => {
    const R = Ot(T.theme) ? c : T.theme;
    return Kt(ye({}, T, {
      theme: R
    }));
  };
  return v.__mui_systemSx = !0, (T, R = {}) => {
    ms(T, (h) => h.filter((f) => !(f != null && f.__mui_systemSx)));
    const {
      name: X,
      slot: N,
      skipVariantsResolver: u,
      skipSx: i,
      overridesResolver: a
    } = R, o = Ne(R, To), e = u !== void 0 ? u : N && N !== "Root" || !1, r = i || !1;
    let t;
    process.env.NODE_ENV !== "production" && X && (t = `${X}-${Ro(N || "Root")}`);
    let s = Ft;
    N === "Root" ? s = y : N ? s = _ : Po(T) && (s = void 0);
    const l = jr(T, ye({
      shouldForwardProp: s,
      label: t
    }, o)), n = (h, ...f) => {
      const g = f ? f.map((w) => typeof w == "function" && w.__emotion_real !== w ? (x) => {
        let {
          theme: k
        } = x, L = Ne(x, Eo);
        return w(ye({
          theme: Ot(k) ? c : k
        }, L));
      } : w) : [];
      let p = h;
      X && a && g.push((w) => {
        const x = Ot(w.theme) ? c : w.theme, k = Ao(X, x);
        if (k) {
          const L = {};
          return Object.entries(k).forEach(([Y, K]) => {
            L[Y] = typeof K == "function" ? K(ye({}, w, {
              theme: x
            })) : K;
          }), a(w, L);
        }
        return null;
      }), X && !e && g.push((w) => {
        const x = Ot(w.theme) ? c : w.theme;
        return Mo(w, ko(X, x), x, X);
      }), r || g.push(v);
      const m = g.length - f.length;
      if (Array.isArray(h) && m > 0) {
        const w = new Array(m).fill("");
        p = [...h, ...w], p.raw = [...h.raw, ...w];
      } else
        typeof h == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        h.__emotion_real !== h && (p = (w) => {
          let {
            theme: x
          } = w, k = Ne(w, Oo);
          return h(ye({
            theme: Ot(x) ? c : x
          }, k));
        });
      const C = l(p, ...g);
      if (process.env.NODE_ENV !== "production") {
        let w;
        X && (w = `${X}${N || ""}`), w === void 0 && (w = `Styled(${Un(T)})`), C.displayName = w;
      }
      return C;
    };
    return l.withConfig && (n.withConfig = l.withConfig), n;
  };
}
const jo = Wr(), Ur = jo;
function Fo(d) {
  const {
    theme: c,
    name: y,
    props: _
  } = d;
  return !c || !c.components || !c.components[y] || !c.components[y].defaultProps ? _ : Dr(c.components[y].defaultProps, _);
}
function Io({
  props: d,
  name: c,
  defaultTheme: y
}) {
  const _ = zr(y);
  return Fo({
    theme: _,
    name: c,
    props: d
  });
}
function Gr(d, c = 0, y = 1) {
  return process.env.NODE_ENV !== "production" && (d < c || d > y) && console.error(`MUI: The value provided ${d} is out of range [${c}, ${y}].`), Math.min(Math.max(c, d), y);
}
function Lo(d) {
  d = d.slice(1);
  const c = new RegExp(`.{1,${d.length >= 6 ? 2 : 1}}`, "g");
  let y = d.match(c);
  return y && y[0].length === 1 && (y = y.map((_) => _ + _)), y ? `rgb${y.length === 4 ? "a" : ""}(${y.map((_, v) => v < 3 ? parseInt(_, 16) : Math.round(parseInt(_, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function xt(d) {
  if (d.type)
    return d;
  if (d.charAt(0) === "#")
    return xt(Lo(d));
  const c = d.indexOf("("), y = d.substring(0, c);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(y) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${d}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ct(9, d));
  let _ = d.substring(c + 1, d.length - 1), v;
  if (y === "color") {
    if (_ = _.split(" "), v = _.shift(), _.length === 4 && _[3].charAt(0) === "/" && (_[3] = _[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(v) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${v}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ct(10, v));
  } else
    _ = _.split(",");
  return _ = _.map((T) => parseFloat(T)), {
    type: y,
    values: _,
    colorSpace: v
  };
}
function bi(d) {
  const {
    type: c,
    colorSpace: y
  } = d;
  let {
    values: _
  } = d;
  return c.indexOf("rgb") !== -1 ? _ = _.map((v, T) => T < 3 ? parseInt(v, 10) : v) : c.indexOf("hsl") !== -1 && (_[1] = `${_[1]}%`, _[2] = `${_[2]}%`), c.indexOf("color") !== -1 ? _ = `${y} ${_.join(" ")}` : _ = `${_.join(", ")}`, `${c}(${_})`;
}
function Bo(d) {
  d = xt(d);
  const {
    values: c
  } = d, y = c[0], _ = c[1] / 100, v = c[2] / 100, T = _ * Math.min(v, 1 - v), R = (u, i = (u + y / 30) % 12) => v - T * Math.max(Math.min(i - 3, 9 - i, 1), -1);
  let X = "rgb";
  const N = [Math.round(R(0) * 255), Math.round(R(8) * 255), Math.round(R(4) * 255)];
  return d.type === "hsla" && (X += "a", N.push(c[3])), bi({
    type: X,
    values: N
  });
}
function ar(d) {
  d = xt(d);
  let c = d.type === "hsl" || d.type === "hsla" ? xt(Bo(d)).values : d.values;
  return c = c.map((y) => (d.type !== "color" && (y /= 255), y <= 0.03928 ? y / 12.92 : ((y + 0.055) / 1.055) ** 2.4)), Number((0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]).toFixed(3));
}
function lr(d, c) {
  const y = ar(d), _ = ar(c);
  return (Math.max(y, _) + 0.05) / (Math.min(y, _) + 0.05);
}
function Yo(d, c) {
  if (d = xt(d), c = Gr(c), d.type.indexOf("hsl") !== -1)
    d.values[2] *= 1 - c;
  else if (d.type.indexOf("rgb") !== -1 || d.type.indexOf("color") !== -1)
    for (let y = 0; y < 3; y += 1)
      d.values[y] *= 1 - c;
  return bi(d);
}
function Xo(d, c) {
  if (d = xt(d), c = Gr(c), d.type.indexOf("hsl") !== -1)
    d.values[2] += (100 - d.values[2]) * c;
  else if (d.type.indexOf("rgb") !== -1)
    for (let y = 0; y < 3; y += 1)
      d.values[y] += (255 - d.values[y]) * c;
  else if (d.type.indexOf("color") !== -1)
    for (let y = 0; y < 3; y += 1)
      d.values[y] += (1 - d.values[y]) * c;
  return bi(d);
}
function zo(d) {
  const [c, y] = Ie(null);
  return rt(() => {
    if (!d.current)
      throw Error("ref must be initialized in intial render");
    const _ = new ResizeObserver((T) => {
      const X = T[0].target.getBoundingClientRect();
      y((N) => N && N.width === X.width && N.height === X.height ? N : {
        width: X.width,
        height: X.height
      });
    }), v = d.current;
    return _.observe(v), () => {
      _.unobserve(v);
    };
  }, [d]), c;
}
function No({ containerSize: d }) {
  const c = _r(null), { core: y } = Ke();
  return rt(() => (y.setCanvas(c.current), () => {
    y.detach();
  }), [y]), rt(() => {
    y.setContainerSize(d);
  }, [d, y]), /* @__PURE__ */ U.jsx(U.Fragment, { children: /* @__PURE__ */ U.jsx("canvas", { ref: c }) });
}
var $e = {};
const Ho = {}, Wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), ui = /* @__PURE__ */ wr(Wo);
(function(d) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var c = c || { version: "5.2.1" };
  if (d.fabric = c, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? c.document = document : c.document = document.implementation.createHTMLDocument(""), c.window = window;
  else {
    var y = ui, _ = new y.JSDOM(
      decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),
      {
        features: {
          FetchExternalResources: ["img"]
        },
        resources: "usable"
      }
    ).window;
    c.document = _.document, c.jsdomImplForWrapper = ui.implForWrapper, c.nodeCanvas = ui.Canvas, c.window = _, DOMParser = c.window.DOMParser;
  }
  if (c.isTouchSupported = "ontouchstart" in c.window || "ontouchstart" in c.document || c.window && c.window.navigator && c.window.navigator.maxTouchPoints > 0, c.isLikelyNode = typeof Buffer < "u" && typeof window > "u", c.SHARED_ATTRIBUTES = [
    "display",
    "transform",
    "fill",
    "fill-opacity",
    "fill-rule",
    "opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-linecap",
    "stroke-dashoffset",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "id",
    "paint-order",
    "vector-effect",
    "instantiated_by_use",
    "clip-path"
  ], c.DPI = 96, c.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", c.commaWsp = "(?:\\s+,?\\s*|,\\s*)", c.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/ig, c.reNonWord = /[ \n\.,;!\?\-]/, c.fontPaths = {}, c.iMatrix = [1, 0, 0, 1, 0, 0], c.svgNS = "http://www.w3.org/2000/svg", c.perfLimitSizeTotal = 2097152, c.maxCacheSideLimit = 4096, c.minCacheSideLimit = 256, c.charWidthsCache = {}, c.textureSize = 2048, c.disableStyleCopyPaste = !1, c.enableGLFiltering = !0, c.devicePixelRatio = c.window.devicePixelRatio || c.window.webkitDevicePixelRatio || c.window.mozDevicePixelRatio || 1, c.browserShadowBlurConstant = 1, c.arcToSegmentsCache = {}, c.boundsOfCurveCache = {}, c.cachesBoundsOfCurve = !0, c.forceGLPutImageData = !1, c.initFilterBackend = function() {
    if (c.enableGLFiltering && c.isWebglSupported && c.isWebglSupported(c.textureSize))
      return console.log("max texture size: " + c.maxTextureSize), new c.WebglFilterBackend({ tileSize: c.textureSize });
    if (c.Canvas2dFilterBackend)
      return new c.Canvas2dFilterBackend();
  }, typeof document < "u" && typeof window < "u" && (window.fabric = c), typeof v > "u")
    var v = {};
  if (function(u) {
    u.modifyEventListener = !1, u.modifySelectors = !1, u.configure = function(x) {
      isFinite(x.modifyEventListener) && (u.modifyEventListener = x.modifyEventListener), isFinite(x.modifySelectors) && (u.modifySelectors = x.modifySelectors), p === !1 && u.modifyEventListener && m(), C === !1 && u.modifySelectors && w();
    }, u.add = function(x, k, L, Y) {
      return a(x, k, L, Y, "add");
    }, u.remove = function(x, k, L, Y) {
      return a(x, k, L, Y, "remove");
    }, u.returnFalse = function(x) {
      return !1;
    }, u.stop = function(x) {
      x && (x.stopPropagation && x.stopPropagation(), x.cancelBubble = !0, x.cancelBubbleCount = 0);
    }, u.prevent = function(x) {
      x && (x.preventDefault ? x.preventDefault() : x.preventManipulation ? x.preventManipulation() : x.returnValue = !1);
    }, u.cancel = function(x) {
      u.stop(x), u.prevent(x);
    }, u.blur = function() {
      var x = document.activeElement;
      if (x) {
        var k = document.activeElement.nodeName;
        (k === "INPUT" || k === "TEXTAREA" || x.contentEditable === "true") && x.blur && x.blur();
      }
    }, u.getEventSupport = function(x, k) {
      if (typeof x == "string" && (k = x, x = window), k = "on" + k, k in x)
        return !0;
      if (x.setAttribute || (x = document.createElement("div")), x.setAttribute && x.removeAttribute) {
        x.setAttribute(k, "");
        var L = typeof x[k] == "function";
        return typeof x[k] < "u" && (x[k] = null), x.removeAttribute(k), L;
      }
    };
    var i = function(x) {
      if (!x || typeof x != "object")
        return x;
      var k = new x.constructor();
      for (var L in x)
        !x[L] || typeof x[L] != "object" ? k[L] = x[L] : k[L] = i(x[L]);
      return k;
    }, a = function(x, k, L, Y, K, re) {
      if (Y = Y || {}, String(x) === "[object Object]") {
        var q = x;
        if (x = q.target, delete q.target, q.type && q.listener) {
          k = q.type, delete q.type, L = q.listener, delete q.listener;
          for (var ee in q)
            Y[ee] = q[ee];
        } else {
          for (var se in q) {
            var ae = q[se];
            typeof ae != "function" && (Y[se] = ae);
          }
          var W = {};
          for (var ee in q) {
            var se = ee.split(","), b = q[ee], A = {};
            for (var P in Y)
              A[P] = Y[P];
            if (typeof b == "function")
              var L = b;
            else if (typeof b.listener == "function") {
              var L = b.listener;
              for (var P in b)
                typeof b[P] != "function" && (A[P] = b[P]);
            } else
              continue;
            for (var O = 0; O < se.length; O++)
              W[ee] = v.add(x, se[O], L, A, K);
          }
          return W;
        }
      }
      if (!(!x || !k || !L)) {
        if (typeof x == "string" && k === "ready")
          if (window.eventjs_stallOnReady)
            k = "load", x = window;
          else {
            var B = (/* @__PURE__ */ new Date()).getTime(), E = Y.timeout, S = Y.interval || 1e3 / 60, M = window.setInterval(function() {
              (/* @__PURE__ */ new Date()).getTime() - B > E && window.clearInterval(M), document.querySelector(x) && (window.clearInterval(M), setTimeout(L, 1));
            }, S);
            return;
          }
        if (typeof x == "string") {
          if (x = document.querySelectorAll(x), x.length === 0)
            return e("Missing target on listener!", arguments);
          x.length === 1 && (x = x[0]);
        }
        var j, z = {};
        if (x.length > 0 && x !== window) {
          for (var H = 0, I = x.length; H < I; H++)
            j = a(x[H], k, L, i(Y), K), j && (z[H] = j);
          return o(z);
        }
        if (typeof k == "string" && (k = k.toLowerCase(), k.indexOf(" ") !== -1 ? k = k.split(" ") : k.indexOf(",") !== -1 && (k = k.split(","))), typeof k != "string") {
          if (typeof k.length == "number")
            for (var te = 0, $ = k.length; te < $; te++)
              j = a(x, k[te], L, i(Y), K), j && (z[k[te]] = j);
          else
            for (var ee in k)
              typeof k[ee] == "function" ? j = a(x, ee, k[ee], i(Y), K) : j = a(x, ee, k[ee].listener, i(k[ee]), K), j && (z[ee] = j);
          return o(z);
        } else
          k.indexOf("on") === 0 && (k = k.slice(2));
        if (typeof x != "object")
          return e("Target is not defined!", arguments);
        if (typeof L != "function")
          return e("Listener is not a function!", arguments);
        var G = Y.useCapture || !1, F = h(x) + "." + h(L) + "." + (G ? 1 : 0);
        if (u.Gesture && u.Gesture._gestureHandlers[k]) {
          if (F = k + F, K === "remove") {
            if (!l[F])
              return;
            l[F].remove(), delete l[F];
          } else if (K === "add") {
            if (l[F])
              return l[F].add(), l[F];
            if (Y.useCall && !u.modifyEventListener) {
              var Q = L;
              L = function(ie, oe) {
                for (var ue in oe)
                  ie[ue] = oe[ue];
                return Q.call(x, ie);
              };
            }
            Y.gesture = k, Y.target = x, Y.listener = L, Y.fromOverwrite = re, l[F] = u.proxy[k](Y);
          }
          return l[F];
        } else {
          for (var J = s(k), O = 0, V; O < J.length; O++)
            if (k = J[O], V = k + "." + F, K === "remove") {
              if (!l[V])
                continue;
              x[g](k, L, G), delete l[V];
            } else if (K === "add") {
              if (l[V])
                return l[V];
              x[f](k, L, G), l[V] = {
                id: V,
                type: k,
                target: x,
                listener: L,
                remove: function() {
                  for (var oe = 0; oe < J.length; oe++)
                    u.remove(x, J[oe], L, Y);
                }
              };
            }
          return l[V];
        }
      }
    }, o = function(x) {
      return {
        remove: function() {
          for (var k in x)
            x[k].remove();
        },
        add: function() {
          for (var k in x)
            x[k].add();
        }
      };
    }, e = function(x, k) {
      typeof console > "u" || typeof console.error > "u" || console.error(x, k);
    }, r = {
      msPointer: ["MSPointerDown", "MSPointerMove", "MSPointerUp"],
      touch: ["touchstart", "touchmove", "touchend"],
      mouse: ["mousedown", "mousemove", "mouseup"]
    }, t = {
      // MSPointer
      MSPointerDown: 0,
      MSPointerMove: 1,
      MSPointerUp: 2,
      // Touch
      touchstart: 0,
      touchmove: 1,
      touchend: 2,
      // Mouse
      mousedown: 0,
      mousemove: 1,
      mouseup: 2
    };
    (function() {
      u.supports = {}, window.navigator.msPointerEnabled && (u.supports.msPointer = !0), u.getEventSupport("touchstart") && (u.supports.touch = !0), u.getEventSupport("mousedown") && (u.supports.mouse = !0);
    })();
    var s = function() {
      return function(x) {
        var k = document.addEventListener ? "" : "on", L = t[x];
        if (isFinite(L)) {
          var Y = [];
          for (var K in u.supports)
            Y.push(k + r[K][L]);
          return Y;
        } else
          return [k + x];
      };
    }(), l = {}, n = 0, h = function(x) {
      return x === window ? "#window" : x === document ? "#document" : (x.uniqueID || (x.uniqueID = "e" + n++), x.uniqueID);
    }, f = document.addEventListener ? "addEventListener" : "attachEvent", g = document.removeEventListener ? "removeEventListener" : "detachEvent";
    u.createPointerEvent = function(x, k, L) {
      var Y = k.gesture, K = k.target, re = x.changedTouches || u.proxy.getCoords(x);
      if (re.length) {
        var q = re[0];
        k.pointers = L ? [] : re, k.pageX = q.pageX, k.pageY = q.pageY, k.x = k.pageX, k.y = k.pageY;
      }
      var ee = document.createEvent("Event");
      ee.initEvent(Y, !0, !0), ee.originalEvent = x;
      for (var se in k)
        se !== "target" && (ee[se] = k[se]);
      var ae = ee.type;
      u.Gesture && u.Gesture._gestureHandlers[ae] && k.oldListener.call(K, ee, k, !1);
    };
    var p = !1, m = function() {
      if (window.HTMLElement) {
        var x = function(k) {
          var L = function(Y) {
            var K = Y + "EventListener", re = k[K];
            k[K] = function(q, ee, se) {
              if (u.Gesture && u.Gesture._gestureHandlers[q]) {
                var ae = se;
                typeof se == "object" ? ae.useCall = !0 : ae = {
                  useCall: !0,
                  useCapture: se
                }, a(this, q, ee, ae, Y, !0);
              } else
                for (var W = s(q), b = 0; b < W.length; b++)
                  re.call(this, W[b], ee, se);
            };
          };
          L("add"), L("remove");
        };
        navigator.userAgent.match(/Firefox/) ? (x(HTMLDivElement.prototype), x(HTMLCanvasElement.prototype)) : x(HTMLElement.prototype), x(document), x(window);
      }
    }, C = !1, w = function() {
      var x = NodeList.prototype;
      x.removeEventListener = function(k, L, Y) {
        for (var K = 0, re = this.length; K < re; K++)
          this[K].removeEventListener(k, L, Y);
      }, x.addEventListener = function(k, L, Y) {
        for (var K = 0, re = this.length; K < re; K++)
          this[K].addEventListener(k, L, Y);
      };
    };
    return u;
  }(v), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    u.pointerSetup = function(o, e) {
      o.target = o.target || window, o.doc = o.target.ownerDocument || o.target, o.minFingers = o.minFingers || o.fingers || 1, o.maxFingers = o.maxFingers || o.fingers || 1 / 0, o.position = o.position || "relative", delete o.fingers, e = e || {}, e.enabled = !0, e.gesture = o.gesture, e.target = o.target, e.env = o.env, v.modifyEventListener && o.fromOverwrite && (o.oldListener = o.listener, o.listener = v.createPointerEvent);
      var r = 0, t = e.gesture.indexOf("pointer") === 0 && v.modifyEventListener ? "pointer" : "mouse";
      return o.oldListener && (e.oldListener = o.oldListener), e.listener = o.listener, e.proxy = function(s) {
        e.defaultListener = o.listener, o.listener = s, s(o.event, e);
      }, e.add = function() {
        e.enabled !== !0 && (o.onPointerDown && v.add(o.target, t + "down", o.onPointerDown), o.onPointerMove && v.add(o.doc, t + "move", o.onPointerMove), o.onPointerUp && v.add(o.doc, t + "up", o.onPointerUp), e.enabled = !0);
      }, e.remove = function() {
        e.enabled !== !1 && (o.onPointerDown && v.remove(o.target, t + "down", o.onPointerDown), o.onPointerMove && v.remove(o.doc, t + "move", o.onPointerMove), o.onPointerUp && v.remove(o.doc, t + "up", o.onPointerUp), e.reset(), e.enabled = !1);
      }, e.pause = function(s) {
        o.onPointerMove && (!s || s.move) && v.remove(o.doc, t + "move", o.onPointerMove), o.onPointerUp && (!s || s.up) && v.remove(o.doc, t + "up", o.onPointerUp), r = o.fingers, o.fingers = 0;
      }, e.resume = function(s) {
        o.onPointerMove && (!s || s.move) && v.add(o.doc, t + "move", o.onPointerMove), o.onPointerUp && (!s || s.up) && v.add(o.doc, t + "up", o.onPointerUp), o.fingers = r;
      }, e.reset = function() {
        o.tracker = {}, o.fingers = 0;
      }, e;
    };
    var i = v.supports;
    v.isMouse = !!i.mouse, v.isMSPointer = !!i.touch, v.isTouch = !!i.msPointer, u.pointerStart = function(o, e, r) {
      var t = (o.type || "mousedown").toUpperCase();
      t.indexOf("MOUSE") === 0 ? (v.isMouse = !0, v.isTouch = !1, v.isMSPointer = !1) : t.indexOf("TOUCH") === 0 ? (v.isMouse = !1, v.isTouch = !0, v.isMSPointer = !1) : t.indexOf("MSPOINTER") === 0 && (v.isMouse = !1, v.isTouch = !1, v.isMSPointer = !0);
      var s = function(x, k) {
        var L = r.bbox, Y = n[k] = {};
        switch (r.position) {
          case "absolute":
            Y.offsetX = 0, Y.offsetY = 0;
            break;
          case "differenceFromLast":
            Y.offsetX = x.pageX, Y.offsetY = x.pageY;
            break;
          case "difference":
            Y.offsetX = x.pageX, Y.offsetY = x.pageY;
            break;
          case "move":
            Y.offsetX = x.pageX - L.x1, Y.offsetY = x.pageY - L.y1;
            break;
          default:
            Y.offsetX = L.x1 - L.scrollLeft, Y.offsetY = L.y1 - L.scrollTop;
            break;
        }
        var K = x.pageX - Y.offsetX, re = x.pageY - Y.offsetY;
        Y.rotation = 0, Y.scale = 1, Y.startTime = Y.moveTime = (/* @__PURE__ */ new Date()).getTime(), Y.move = { x: K, y: re }, Y.start = { x: K, y: re }, r.fingers++;
      };
      r.event = o, e.defaultListener && (r.listener = e.defaultListener, delete e.defaultListener);
      for (var l = !r.fingers, n = r.tracker, h = o.changedTouches || u.getCoords(o), f = h.length, g = 0; g < f; g++) {
        var p = h[g], m = p.identifier || 1 / 0;
        if (r.fingers) {
          if (r.fingers >= r.maxFingers) {
            var w = [];
            for (var m in r.tracker)
              w.push(m);
            return e.identifier = w.join(","), l;
          }
          for (var C in n)
            if (n[C].up) {
              delete n[C], s(p, m), r.cancel = !0;
              break;
            }
          if (n[m])
            continue;
          s(p, m);
        } else
          n = r.tracker = {}, e.bbox = r.bbox = u.getBoundingBox(r.target), r.fingers = 0, r.cancel = !1, s(p, m);
      }
      var w = [];
      for (var m in r.tracker)
        w.push(m);
      return e.identifier = w.join(","), l;
    }, u.pointerEnd = function(o, e, r, t) {
      for (var s = o.touches || [], l = s.length, n = {}, h = 0; h < l; h++) {
        var f = s[h], g = f.identifier;
        n[g || 1 / 0] = !0;
      }
      for (var g in r.tracker) {
        var p = r.tracker[g];
        n[g] || p.up || (t && t({
          pageX: p.pageX,
          pageY: p.pageY,
          changedTouches: [{
            pageX: p.pageX,
            pageY: p.pageY,
            identifier: g === "Infinity" ? 1 / 0 : g
          }]
        }, "up"), p.up = !0, r.fingers--);
      }
      if (r.fingers !== 0)
        return !1;
      var m = [];
      r.gestureFingers = 0;
      for (var g in r.tracker)
        r.gestureFingers++, m.push(g);
      return e.identifier = m.join(","), !0;
    }, u.getCoords = function(o) {
      return typeof o.pageX < "u" ? u.getCoords = function(e) {
        return Array({
          type: "mouse",
          x: e.pageX,
          y: e.pageY,
          pageX: e.pageX,
          pageY: e.pageY,
          identifier: e.pointerId || 1 / 0
          // pointerId is MS
        });
      } : u.getCoords = function(e) {
        var r = document.documentElement;
        return e = e || window.event, Array({
          type: "mouse",
          x: e.clientX + r.scrollLeft,
          y: e.clientY + r.scrollTop,
          pageX: e.clientX + r.scrollLeft,
          pageY: e.clientY + r.scrollTop,
          identifier: 1 / 0
        });
      }, u.getCoords(o);
    }, u.getCoord = function(o) {
      if ("ontouchstart" in window) {
        var e = 0, r = 0;
        u.getCoord = function(t) {
          var s = t.changedTouches;
          return s && s.length ? {
            x: e = s[0].pageX,
            y: r = s[0].pageY
          } : {
            x: e,
            y: r
          };
        };
      } else
        typeof o.pageX < "u" && typeof o.pageY < "u" ? u.getCoord = function(t) {
          return {
            x: t.pageX,
            y: t.pageY
          };
        } : u.getCoord = function(t) {
          var s = document.documentElement;
          return t = t || window.event, {
            x: t.clientX + s.scrollLeft,
            y: t.clientY + s.scrollTop
          };
        };
      return u.getCoord(o);
    };
    var a = function(o, e) {
      var r = parseFloat(o.getPropertyValue(e), 10);
      return isFinite(r) ? r : 0;
    };
    return u.getBoundingBox = function(o) {
      (o === window || o === document) && (o = document.body);
      var e = {}, r = o.getBoundingClientRect();
      e.width = r.width, e.height = r.height, e.x1 = r.left, e.y1 = r.top, e.scaleX = r.width / o.offsetWidth || 1, e.scaleY = r.height / o.offsetHeight || 1, e.scrollLeft = 0, e.scrollTop = 0;
      var t = window.getComputedStyle(o), s = t.getPropertyValue("box-sizing") === "border-box";
      if (s === !1) {
        var l = a(t, "border-left-width"), n = a(t, "border-right-width"), h = a(t, "border-bottom-width"), f = a(t, "border-top-width");
        e.border = [l, n, f, h], e.x1 += l, e.y1 += f, e.width -= n + l, e.height -= h + f;
      }
      e.x2 = e.x1 + e.width, e.y2 = e.y1 + e.height;
      for (var g = t.getPropertyValue("position"), p = g === "fixed" ? o : o.parentNode; p !== null && !(p === document.body || p.scrollTop === void 0); ) {
        var t = window.getComputedStyle(p), g = t.getPropertyValue("position");
        if (g !== "absolute")
          if (g === "fixed") {
            e.scrollTop -= p.parentNode.scrollTop, e.scrollLeft -= p.parentNode.scrollLeft;
            break;
          } else
            e.scrollLeft += p.scrollLeft, e.scrollTop += p.scrollTop;
        p = p.parentNode;
      }
      return e.scrollBodyLeft = window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, e.scrollBodyTop = window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, e.scrollLeft -= e.scrollBodyLeft, e.scrollTop -= e.scrollBodyTop, e;
    }, function() {
      var o = navigator.userAgent.toLowerCase(), e = o.indexOf("macintosh") !== -1, r;
      e && o.indexOf("khtml") !== -1 ? r = { 91: !0, 93: !0 } : e && o.indexOf("firefox") !== -1 ? r = { 224: !0 } : r = { 17: !0 }, (u.metaTrackerReset = function() {
        v.fnKey = u.fnKey = !1, v.metaKey = u.metaKey = !1, v.escKey = u.escKey = !1, v.ctrlKey = u.ctrlKey = !1, v.shiftKey = u.shiftKey = !1, v.altKey = u.altKey = !1;
      })(), u.metaTracker = function(t) {
        var s = t.type === "keydown";
        t.keyCode === 27 && (v.escKey = u.escKey = s), r[t.keyCode] && (v.metaKey = u.metaKey = s), v.ctrlKey = u.ctrlKey = t.ctrlKey, v.shiftKey = u.shiftKey = t.shiftKey, v.altKey = u.altKey = t.altKey;
      };
    }(), u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (v.MutationObserver = function() {
    var u = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i = !u && function() {
      var a = document.createElement("p"), o = !1, e = function() {
        o = !0;
      };
      if (a.addEventListener)
        a.addEventListener("DOMAttrModified", e, !1);
      else if (a.attachEvent)
        a.attachEvent("onDOMAttrModified", e);
      else
        return !1;
      return a.setAttribute("id", "target"), o;
    }();
    return function(a, o) {
      if (u) {
        var e = {
          subtree: !1,
          attributes: !0
        }, r = new u(function(t) {
          t.forEach(function(s) {
            o.call(s.target, s.attributeName);
          });
        });
        r.observe(a, e);
      } else
        i ? v.add(a, "DOMAttrModified", function(t) {
          o.call(a, t.attrName);
        }) : "onpropertychange" in document.body && v.add(a, "propertychange", function(t) {
          o.call(a, window.event.propertyName);
        });
    };
  }(), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    return u.click = function(i) {
      i.gesture = i.gesture || "click", i.maxFingers = i.maxFingers || i.fingers || 1, i.onPointerDown = function(o) {
        u.pointerStart(o, a, i) && v.add(i.target, "mouseup", i.onPointerUp);
      }, i.onPointerUp = function(o) {
        if (u.pointerEnd(o, a, i)) {
          v.remove(i.target, "mouseup", i.onPointerUp);
          var e = o.changedTouches || u.getCoords(o), r = e[0], t = i.bbox, s = u.getBoundingBox(i.target), l = r.pageY - s.scrollBodyTop, n = r.pageX - s.scrollBodyLeft;
          if (n > t.x1 && l > t.y1 && n < t.x2 && l < t.y2 && t.scrollTop === s.scrollTop) {
            for (var h in i.tracker)
              break;
            var f = i.tracker[h];
            a.x = f.start.x, a.y = f.start.y, i.listener(o, a);
          }
        }
      };
      var a = u.pointerSetup(i);
      return a.state = "click", v.add(i.target, "mousedown", i.onPointerDown), a;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.click = u.click, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    return u.dbltap = u.dblclick = function(i) {
      i.gesture = i.gesture || "dbltap", i.maxFingers = i.maxFingers || i.fingers || 1;
      var a = 700, o, e, r, t, s;
      i.onPointerDown = function(n) {
        var h = n.changedTouches || u.getCoords(n);
        o && !e ? (s = h[0], e = (/* @__PURE__ */ new Date()).getTime() - o) : (t = h[0], o = (/* @__PURE__ */ new Date()).getTime(), e = 0, clearTimeout(r), r = setTimeout(function() {
          o = 0;
        }, a)), u.pointerStart(n, l, i) && (v.add(i.target, "mousemove", i.onPointerMove).listener(n), v.add(i.target, "mouseup", i.onPointerUp));
      }, i.onPointerMove = function(n) {
        if (o && !e) {
          var h = n.changedTouches || u.getCoords(n);
          s = h[0];
        }
        var f = i.bbox, g = s.pageX - f.x1, p = s.pageY - f.y1;
        g > 0 && g < f.width && // Within target coordinates..
        p > 0 && p < f.height && Math.abs(s.pageX - t.pageX) <= 25 && // Within drift deviance.
        Math.abs(s.pageY - t.pageY) <= 25 || (v.remove(i.target, "mousemove", i.onPointerMove), clearTimeout(r), o = e = 0);
      }, i.onPointerUp = function(n) {
        if (u.pointerEnd(n, l, i) && (v.remove(i.target, "mousemove", i.onPointerMove), v.remove(i.target, "mouseup", i.onPointerUp)), o && e) {
          if (e <= a) {
            l.state = i.gesture;
            for (var h in i.tracker)
              break;
            var f = i.tracker[h];
            l.x = f.start.x, l.y = f.start.y, i.listener(n, l);
          }
          clearTimeout(r), o = e = 0;
        }
      };
      var l = u.pointerSetup(i);
      return l.state = "dblclick", v.add(i.target, "mousedown", i.onPointerDown), l;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.dbltap = u.dbltap, v.Gesture._gestureHandlers.dblclick = u.dblclick, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    return u.dragElement = function(i, a) {
      u.drag({
        event: a,
        target: i,
        position: "move",
        listener: function(o, e) {
          i.style.left = e.x + "px", i.style.top = e.y + "px", v.prevent(o);
        }
      });
    }, u.drag = function(i) {
      i.gesture = "drag", i.onPointerDown = function(o) {
        u.pointerStart(o, a, i) && (i.monitor || (v.add(i.doc, "mousemove", i.onPointerMove), v.add(i.doc, "mouseup", i.onPointerUp))), i.onPointerMove(o, "down");
      }, i.onPointerMove = function(o, e) {
        if (!i.tracker)
          return i.onPointerDown(o);
        i.bbox;
        for (var r = o.changedTouches || u.getCoords(o), t = r.length, s = 0; s < t; s++) {
          var l = r[s], n = l.identifier || 1 / 0, h = i.tracker[n];
          h && (h.pageX = l.pageX, h.pageY = l.pageY, a.state = e || "move", a.identifier = n, a.start = h.start, a.fingers = i.fingers, i.position === "differenceFromLast" ? (a.x = h.pageX - h.offsetX, a.y = h.pageY - h.offsetY, h.offsetX = h.pageX, h.offsetY = h.pageY) : (a.x = h.pageX - h.offsetX, a.y = h.pageY - h.offsetY), i.listener(o, a));
        }
      }, i.onPointerUp = function(o) {
        u.pointerEnd(o, a, i, i.onPointerMove) && (i.monitor || (v.remove(i.doc, "mousemove", i.onPointerMove), v.remove(i.doc, "mouseup", i.onPointerUp)));
      };
      var a = u.pointerSetup(i);
      return i.event ? i.onPointerDown(i.event) : (v.add(i.target, "mousedown", i.onPointerDown), i.monitor && (v.add(i.doc, "mousemove", i.onPointerMove), v.add(i.doc, "mouseup", i.onPointerUp))), a;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.drag = u.drag, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    var i = Math.PI / 180, a = function(o, e) {
      var r = 0, t = 0, s = 0;
      for (var l in e) {
        var n = e[l];
        n.up || (r += n.move.x, t += n.move.y, s++);
      }
      return o.x = r /= s, o.y = t /= s, o;
    };
    return u.gesture = function(o) {
      o.gesture = o.gesture || "gesture", o.minFingers = o.minFingers || o.fingers || 2, o.onPointerDown = function(r) {
        var t = o.fingers;
        if (u.pointerStart(r, e, o) && (v.add(o.doc, "mousemove", o.onPointerMove), v.add(o.doc, "mouseup", o.onPointerUp)), o.fingers === o.minFingers && t !== o.fingers) {
          e.fingers = o.minFingers, e.scale = 1, e.rotation = 0, e.state = "start";
          var s = "";
          for (var l in o.tracker)
            s += l;
          e.identifier = parseInt(s), a(e, o.tracker), o.listener(r, e);
        }
      }, o.onPointerMove = function(r, t) {
        for (var s = o.bbox, l = o.tracker, m = r.changedTouches || u.getCoords(r), n = m.length, h = 0; h < n; h++) {
          var f = m[h], g = f.identifier || 1 / 0, p = l[g];
          p && (p.move.x = f.pageX - s.x1, p.move.y = f.pageY - s.y1);
        }
        if (!(o.fingers < o.minFingers)) {
          var m = [], C = 0, w = 0;
          a(e, l);
          for (var g in l) {
            var f = l[g];
            if (!f.up) {
              var x = f.start;
              if (!x.distance) {
                var k = x.x - e.x, L = x.y - e.y;
                x.distance = Math.sqrt(k * k + L * L), x.angle = Math.atan2(k, L) / i;
              }
              var k = f.move.x - e.x, L = f.move.y - e.y, Y = Math.sqrt(k * k + L * L);
              x.distance !== 0 && (C += Y / x.distance);
              var K = Math.atan2(k, L) / i, re = (x.angle - K + 360) % 360 - 180;
              f.DEG2 = f.DEG1, f.DEG1 = re > 0 ? re : -re, typeof f.DEG2 < "u" && (re > 0 ? f.rotation += f.DEG1 - f.DEG2 : f.rotation -= f.DEG1 - f.DEG2, w += f.rotation), m.push(f.move);
            }
          }
          e.touches = m, e.fingers = o.fingers, e.scale = C / o.fingers, e.rotation = w / o.fingers, e.state = "change", o.listener(r, e);
        }
      }, o.onPointerUp = function(r) {
        var t = o.fingers;
        u.pointerEnd(r, e, o) && (v.remove(o.doc, "mousemove", o.onPointerMove), v.remove(o.doc, "mouseup", o.onPointerUp)), t === o.minFingers && o.fingers < o.minFingers && (e.fingers = o.fingers, e.state = "end", o.listener(r, e));
      };
      var e = u.pointerSetup(o);
      return v.add(o.target, "mousedown", o.onPointerDown), e;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.gesture = u.gesture, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    return u.pointerdown = u.pointermove = u.pointerup = function(i) {
      if (i.gesture = i.gesture || "pointer", !i.target.isPointerEmitter) {
        var a = !0;
        i.onPointerDown = function(e) {
          a = !1, o.gesture = "pointerdown", i.listener(e, o);
        }, i.onPointerMove = function(e) {
          o.gesture = "pointermove", i.listener(e, o, a);
        }, i.onPointerUp = function(e) {
          a = !0, o.gesture = "pointerup", i.listener(e, o, !0);
        };
        var o = u.pointerSetup(i);
        return v.add(i.target, "mousedown", i.onPointerDown), v.add(i.target, "mousemove", i.onPointerMove), v.add(i.doc, "mouseup", i.onPointerUp), i.target.isPointerEmitter = !0, o;
      }
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.pointerdown = u.pointerdown, v.Gesture._gestureHandlers.pointermove = u.pointermove, v.Gesture._gestureHandlers.pointerup = u.pointerup, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    return u.shake = function(i) {
      var a = {
        gesture: "devicemotion",
        acceleration: {},
        accelerationIncludingGravity: {},
        target: i.target,
        listener: i.listener,
        remove: function() {
          window.removeEventListener("devicemotion", h, !1);
        }
      }, o = 4, e = 1e3, r = 200, t = 3, s = (/* @__PURE__ */ new Date()).getTime(), l = { x: 0, y: 0, z: 0 }, n = {
        x: { count: 0, value: 0 },
        y: { count: 0, value: 0 },
        z: { count: 0, value: 0 }
      }, h = function(f) {
        var g = 0.8, p = f.accelerationIncludingGravity;
        if (l.x = g * l.x + (1 - g) * p.x, l.y = g * l.y + (1 - g) * p.y, l.z = g * l.z + (1 - g) * p.z, a.accelerationIncludingGravity = l, a.acceleration.x = p.x - l.x, a.acceleration.y = p.y - l.y, a.acceleration.z = p.z - l.z, i.gesture === "devicemotion") {
          i.listener(f, a);
          return;
        }
        for (var m = "xyz", C = (/* @__PURE__ */ new Date()).getTime(), w = 0, x = m.length; w < x; w++) {
          var k = m[w], L = a.acceleration[k], Y = n[k], K = Math.abs(L);
          if (!(C - s < e) && K > o) {
            var re = C * L / K, q = Math.abs(re + Y.value);
            Y.value && q < r ? (Y.value = re, Y.count++, Y.count === t && (i.listener(f, a), s = C, Y.value = 0, Y.count = 0)) : (Y.value = re, Y.count = 1);
          }
        }
      };
      if (window.addEventListener)
        return window.addEventListener("devicemotion", h, !1), a;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.shake = u.shake, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    var i = Math.PI / 180;
    return u.swipe = function(a) {
      a.snap = a.snap || 90, a.threshold = a.threshold || 1, a.gesture = a.gesture || "swipe", a.onPointerDown = function(e) {
        u.pointerStart(e, o, a) && (v.add(a.doc, "mousemove", a.onPointerMove).listener(e), v.add(a.doc, "mouseup", a.onPointerUp));
      }, a.onPointerMove = function(e) {
        for (var r = e.changedTouches || u.getCoords(e), t = r.length, s = 0; s < t; s++) {
          var l = r[s], n = l.identifier || 1 / 0, h = a.tracker[n];
          h && (h.move.x = l.pageX, h.move.y = l.pageY, h.moveTime = (/* @__PURE__ */ new Date()).getTime());
        }
      }, a.onPointerUp = function(e) {
        if (u.pointerEnd(e, o, a)) {
          v.remove(a.doc, "mousemove", a.onPointerMove), v.remove(a.doc, "mouseup", a.onPointerUp);
          var r, t, s, l, n = { x: 0, y: 0 }, h = 0, f = 0, g = 0;
          for (var p in a.tracker) {
            var m = a.tracker[p], C = m.move.x - m.start.x, w = m.move.y - m.start.y;
            h += m.move.x, f += m.move.y, n.x += m.start.x, n.y += m.start.y, g++;
            var x = Math.sqrt(C * C + w * w), k = m.moveTime - m.startTime, l = Math.atan2(C, w) / i + 180, t = k ? x / k : 0;
            if (typeof s > "u")
              s = l, r = t;
            else if (Math.abs(l - s) <= 20)
              s = (s + l) / 2, r = (r + t) / 2;
            else
              return;
          }
          var L = a.gestureFingers;
          a.minFingers <= L && a.maxFingers >= L && r > a.threshold && (n.x /= g, n.y /= g, o.start = n, o.x = h / g, o.y = f / g, o.angle = -(((s / a.snap + 0.5 >> 0) * a.snap || 360) - 360), o.velocity = r, o.fingers = L, o.state = "swipe", a.listener(e, o));
        }
      };
      var o = u.pointerSetup(a);
      return v.add(a.target, "mousedown", a.onPointerDown), o;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.swipe = u.swipe, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    return u.longpress = function(i) {
      return i.gesture = "longpress", u.tap(i);
    }, u.tap = function(i) {
      i.delay = i.delay || 500, i.timeout = i.timeout || 250, i.driftDeviance = i.driftDeviance || 10, i.gesture = i.gesture || "tap";
      var a, o;
      i.onPointerDown = function(r) {
        if (u.pointerStart(r, e, i)) {
          if (a = (/* @__PURE__ */ new Date()).getTime(), v.add(i.doc, "mousemove", i.onPointerMove).listener(r), v.add(i.doc, "mouseup", i.onPointerUp), i.gesture !== "longpress")
            return;
          o = setTimeout(function() {
            if (!(r.cancelBubble && ++r.cancelBubbleCount > 1)) {
              var t = 0;
              for (var s in i.tracker) {
                var l = i.tracker[s];
                if (l.end === !0 || i.cancel)
                  return;
                t++;
              }
              i.minFingers <= t && i.maxFingers >= t && (e.state = "start", e.fingers = t, e.x = l.start.x, e.y = l.start.y, i.listener(r, e));
            }
          }, i.delay);
        }
      }, i.onPointerMove = function(r) {
        for (var t = i.bbox, s = r.changedTouches || u.getCoords(r), l = s.length, n = 0; n < l; n++) {
          var h = s[n], f = h.identifier || 1 / 0, g = i.tracker[f];
          if (g) {
            var p = h.pageX - t.x1 - parseInt(window.scrollX), m = h.pageY - t.y1 - parseInt(window.scrollY), C = p - g.start.x, w = m - g.start.y, x = Math.sqrt(C * C + w * w);
            if (!(p > 0 && p < t.width && // Within target coordinates..
            m > 0 && m < t.height && x <= i.driftDeviance)) {
              v.remove(i.doc, "mousemove", i.onPointerMove), i.cancel = !0;
              return;
            }
          }
        }
      }, i.onPointerUp = function(r) {
        if (u.pointerEnd(r, e, i)) {
          if (clearTimeout(o), v.remove(i.doc, "mousemove", i.onPointerMove), v.remove(i.doc, "mouseup", i.onPointerUp), r.cancelBubble && ++r.cancelBubbleCount > 1)
            return;
          if (i.gesture === "longpress") {
            e.state === "start" && (e.state = "end", i.listener(r, e));
            return;
          }
          if (i.cancel || (/* @__PURE__ */ new Date()).getTime() - a > i.timeout)
            return;
          var t = i.gestureFingers;
          i.minFingers <= t && i.maxFingers >= t && (e.state = "tap", e.fingers = i.gestureFingers, i.listener(r, e));
        }
      };
      var e = u.pointerSetup(i);
      return v.add(i.target, "mousedown", i.onPointerDown), e;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.tap = u.tap, v.Gesture._gestureHandlers.longpress = u.longpress, u;
  }(v.proxy), typeof v > "u")
    var v = {};
  if (typeof v.proxy > "u" && (v.proxy = {}), v.proxy = function(u) {
    return u.wheelPreventElasticBounce = function(i) {
      i && (typeof i == "string" && (i = document.querySelector(i)), v.add(i, "wheel", function(a, o) {
        o.preventElasticBounce(), v.stop(a);
      }));
    }, u.wheel = function(i) {
      var a, o = i.timeout || 150, e = 0, r = {
        gesture: "wheel",
        state: "start",
        wheelDelta: 0,
        target: i.target,
        listener: i.listener,
        preventElasticBounce: function(h) {
          var f = this.target, g = f.scrollTop, p = g + f.offsetHeight, m = f.scrollHeight;
          (p === m && this.wheelDelta <= 0 || g === 0 && this.wheelDelta >= 0) && v.cancel(h), v.stop(h);
        },
        add: function() {
          i.target[s](n, t, !1);
        },
        remove: function() {
          i.target[l](n, t, !1);
        }
      }, t = function(h) {
        h = h || window.event, r.state = e++ ? "change" : "start", r.wheelDelta = h.detail ? h.detail * -20 : h.wheelDelta, i.listener(h, r), clearTimeout(a), a = setTimeout(function() {
          e = 0, r.state = "end", r.wheelDelta = 0, i.listener(h, r);
        }, o);
      }, s = document.addEventListener ? "addEventListener" : "attachEvent", l = document.removeEventListener ? "removeEventListener" : "detachEvent", n = v.getEventSupport("mousewheel") ? "mousewheel" : "DOMMouseScroll";
      return i.target[s](n, t, !1), r;
    }, v.Gesture = v.Gesture || {}, v.Gesture._gestureHandlers = v.Gesture._gestureHandlers || {}, v.Gesture._gestureHandlers.wheel = u.wheel, u;
  }(v.proxy), typeof T > "u")
    var T = {};
  typeof T.proxy > "u" && (T.proxy = {}), T.proxy = function(u) {
    return u.orientation = function(i) {
      var a = {
        gesture: "orientationchange",
        previous: null,
        /* Report the previous orientation */
        current: window.orientation,
        target: i.target,
        listener: i.listener,
        remove: function() {
          window.removeEventListener("orientationchange", o, !1);
        }
      }, o = function(e) {
        if (a.previous = a.current, a.current = window.orientation, a.previous !== null && a.previous != a.current) {
          i.listener(e, a);
          return;
        }
      };
      return window.DeviceOrientationEvent && window.addEventListener("orientationchange", o, !1), a;
    }, T.Gesture = T.Gesture || {}, T.Gesture._gestureHandlers = T.Gesture._gestureHandlers || {}, T.Gesture._gestureHandlers.orientation = u.orientation, u;
  }(T.proxy), function() {
    function u(t, s) {
      if (this.__eventListeners[t]) {
        var l = this.__eventListeners[t];
        s ? l[l.indexOf(s)] = !1 : c.util.array.fill(l, !1);
      }
    }
    function i(t, s) {
      if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1)
        for (var l in t)
          this.on(l, t[l]);
      else
        this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(s);
      return this;
    }
    function a(t, s) {
      var l = function() {
        s.apply(this, arguments), this.off(t, l);
      }.bind(this);
      this.on(t, l);
    }
    function o(t, s) {
      if (arguments.length === 1)
        for (var l in t)
          a.call(this, l, t[l]);
      else
        a.call(this, t, s);
      return this;
    }
    function e(t, s) {
      if (!this.__eventListeners)
        return this;
      if (arguments.length === 0)
        for (t in this.__eventListeners)
          u.call(this, t);
      else if (arguments.length === 1 && typeof arguments[0] == "object")
        for (var l in t)
          u.call(this, l, t[l]);
      else
        u.call(this, t, s);
      return this;
    }
    function r(t, s) {
      if (!this.__eventListeners)
        return this;
      var l = this.__eventListeners[t];
      if (!l)
        return this;
      for (var n = 0, h = l.length; n < h; n++)
        l[n] && l[n].call(this, s || {});
      return this.__eventListeners[t] = l.filter(function(f) {
        return f !== !1;
      }), this;
    }
    c.Observable = {
      fire: r,
      on: i,
      once: o,
      off: e
    };
  }(), c.Collection = {
    _objects: [],
    /**
     * Adds objects to collection, Canvas or Group, then renders canvas
     * (if `renderOnAddRemove` is not `false`).
     * in case of Group no changes to bounding box are made.
     * Objects should be instances of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the add method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    add: function() {
      if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
        for (var u = 0, i = arguments.length; u < i; u++)
          this._onObjectAdded(arguments[u]);
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
     * An object should be an instance of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the insertAt method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {Object} object Object to insert
     * @param {Number} index Index to insert object at
     * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
     * @return {Self} thisArg
     * @chainable
     */
    insertAt: function(u, i, a) {
      var o = this._objects;
      return a ? o[i] = u : o.splice(i, 0, u), this._onObjectAdded && this._onObjectAdded(u), this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    remove: function() {
      for (var u = this._objects, i, a = !1, o = 0, e = arguments.length; o < e; o++)
        i = u.indexOf(arguments[o]), i !== -1 && (a = !0, u.splice(i, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[o]));
      return this.renderOnAddRemove && a && this.requestRenderAll(), this;
    },
    /**
     * Executes given function for each object in this group
     * @param {Function} callback
     *                   Callback invoked with current object as first argument,
     *                   index - as second and an array of all objects - as third.
     *                   Callback is invoked in a context of Global Object (e.g. `window`)
     *                   when no `context` argument is given
     *
     * @param {Object} context Context (aka thisObject)
     * @return {Self} thisArg
     * @chainable
     */
    forEachObject: function(u, i) {
      for (var a = this.getObjects(), o = 0, e = a.length; o < e; o++)
        u.call(i, a[o], o, a);
      return this;
    },
    /**
     * Returns an array of children objects of this instance
     * Type parameter introduced in 1.3.10
     * since 2.3.5 this method return always a COPY of the array;
     * @param {String} [type] When specified, only objects of this type are returned
     * @return {Array}
     */
    getObjects: function(u) {
      return typeof u > "u" ? this._objects.concat() : this._objects.filter(function(i) {
        return i.type === u;
      });
    },
    /**
     * Returns object at specified index
     * @param {Number} index
     * @return {Self} thisArg
     */
    item: function(u) {
      return this._objects[u];
    },
    /**
     * Returns true if collection contains no objects
     * @return {Boolean} true if collection is empty
     */
    isEmpty: function() {
      return this._objects.length === 0;
    },
    /**
     * Returns a size of a collection (i.e: length of an array containing its objects)
     * @return {Number} Collection size
     */
    size: function() {
      return this._objects.length;
    },
    /**
     * Returns true if collection contains an object
     * @param {Object} object Object to check against
     * @param {Boolean} [deep=false] `true` to check all descendants, `false` to check only `_objects`
     * @return {Boolean} `true` if collection contains an object
     */
    contains: function(u, i) {
      return this._objects.indexOf(u) > -1 ? !0 : i ? this._objects.some(function(a) {
        return typeof a.contains == "function" && a.contains(u, !0);
      }) : !1;
    },
    /**
     * Returns number representation of a collection complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this._objects.reduce(function(u, i) {
        return u += i.complexity ? i.complexity() : 0, u;
      }, 0);
    }
  }, c.CommonMethods = {
    /**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
    _setOptions: function(u) {
      for (var i in u)
        this.set(i, u[i]);
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Gradient to
     */
    _initGradient: function(u, i) {
      u && u.colorStops && !(u instanceof c.Gradient) && this.set(i, new c.Gradient(u));
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Pattern to
     * @param {Function} [callback] callback to invoke after pattern load
     */
    _initPattern: function(u, i, a) {
      u && u.source && !(u instanceof c.Pattern) ? this.set(i, new c.Pattern(u, a)) : a && a();
    },
    /**
     * @private
     */
    _setObject: function(u) {
      for (var i in u)
        this._set(i, u[i]);
    },
    /**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(u, i) {
      return typeof u == "object" ? this._setObject(u) : this._set(u, i), this;
    },
    _set: function(u, i) {
      this[u] = i;
    },
    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(u) {
      var i = this.get(u);
      return typeof i == "boolean" && this.set(u, !i), this;
    },
    /**
     * Basic getter
     * @param {String} property Property name
     * @return {*} value of a property
     */
    get: function(u) {
      return this[u];
    }
  }, function(u) {
    var i = Math.sqrt, a = Math.atan2, o = Math.pow, e = Math.PI / 180, r = Math.PI / 2;
    c.util = {
      /**
       * Calculate the cos of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      cos: function(t) {
        if (t === 0)
          return 1;
        t < 0 && (t = -t);
        var s = t / r;
        switch (s) {
          case 1:
          case 3:
            return 0;
          case 2:
            return -1;
        }
        return Math.cos(t);
      },
      /**
       * Calculate the sin of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      sin: function(t) {
        if (t === 0)
          return 0;
        var s = t / r, l = 1;
        switch (t < 0 && (l = -1), s) {
          case 1:
            return l;
          case 2:
            return 0;
          case 3:
            return -l;
        }
        return Math.sin(t);
      },
      /**
       * Removes value from an array.
       * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
       * @static
       * @memberOf fabric.util
       * @param {Array} array
       * @param {*} value
       * @return {Array} original array
       */
      removeFromArray: function(t, s) {
        var l = t.indexOf(s);
        return l !== -1 && t.splice(l, 1), t;
      },
      /**
       * Returns random number between 2 specified ones.
       * @static
       * @memberOf fabric.util
       * @param {Number} min lower limit
       * @param {Number} max upper limit
       * @return {Number} random value (between min and max)
       */
      getRandomInt: function(t, s) {
        return Math.floor(Math.random() * (s - t + 1)) + t;
      },
      /**
       * Transforms degrees to radians.
       * @static
       * @memberOf fabric.util
       * @param {Number} degrees value in degrees
       * @return {Number} value in radians
       */
      degreesToRadians: function(t) {
        return t * e;
      },
      /**
       * Transforms radians to degrees.
       * @static
       * @memberOf fabric.util
       * @param {Number} radians value in radians
       * @return {Number} value in degrees
       */
      radiansToDegrees: function(t) {
        return t / e;
      },
      /**
       * Rotates `point` around `origin` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {fabric.Point} point The point to rotate
       * @param {fabric.Point} origin The origin of the rotation
       * @param {Number} radians The radians of the angle for the rotation
       * @return {fabric.Point} The new rotated point
       */
      rotatePoint: function(t, s, l) {
        var n = new c.Point(t.x - s.x, t.y - s.y), h = c.util.rotateVector(n, l);
        return new c.Point(h.x, h.y).addEquals(s);
      },
      /**
       * Rotates `vector` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {Object} vector The vector to rotate (x and y)
       * @param {Number} radians The radians of the angle for the rotation
       * @return {Object} The new rotated point
       */
      rotateVector: function(t, s) {
        var l = c.util.sin(s), n = c.util.cos(s), h = t.x * n - t.y * l, f = t.x * l + t.y * n;
        return {
          x: h,
          y: f
        };
      },
      /**
       * Creates a vetor from points represented as a point
       * @static
       * @memberOf fabric.util
       *
       * @typedef {Object} Point
       * @property {number} x
       * @property {number} y
       *
       * @param {Point} from
       * @param {Point} to
       * @returns {Point} vector
       */
      createVector: function(t, s) {
        return new c.Point(s.x - t.x, s.y - t.y);
      },
      /**
       * Calculates angle between 2 vectors using dot product
       * @static
       * @memberOf fabric.util
       * @param {Point} a
       * @param {Point} b
       * @returns the angle in radian between the vectors
       */
      calcAngleBetweenVectors: function(t, s) {
        return Math.acos((t.x * s.x + t.y * s.y) / (Math.hypot(t.x, t.y) * Math.hypot(s.x, s.y)));
      },
      /**
       * @static
       * @memberOf fabric.util
       * @param {Point} v
       * @returns {Point} vector representing the unit vector of pointing to the direction of `v`
       */
      getHatVector: function(t) {
        return new c.Point(t.x, t.y).multiply(1 / Math.hypot(t.x, t.y));
      },
      /**
       * @static
       * @memberOf fabric.util
       * @param {Point} A
       * @param {Point} B
       * @param {Point} C
       * @returns {{ vector: Point, angle: number }} vector representing the bisector of A and A's angle
       */
      getBisector: function(t, s, l) {
        var n = c.util.createVector(t, s), h = c.util.createVector(t, l), f = c.util.calcAngleBetweenVectors(n, h), g = c.util.calcAngleBetweenVectors(c.util.rotateVector(n, f), h), p = f * (g === 0 ? 1 : -1) / 2;
        return {
          vector: c.util.getHatVector(c.util.rotateVector(n, p)),
          angle: f
        };
      },
      /**
       * Project stroke width on points returning 2 projections for each point as follows:
       * - `miter`: 2 points corresponding to the outer boundary and the inner boundary of stroke.
       * - `bevel`: 2 points corresponding to the bevel boundaries, tangent to the bisector.
       * - `round`: same as `bevel`
       * Used to calculate object's bounding box
       * @static
       * @memberOf fabric.util
       * @param {Point[]} points
       * @param {Object} options
       * @param {number} options.strokeWidth
       * @param {'miter'|'bevel'|'round'} options.strokeLineJoin
       * @param {number} options.strokeMiterLimit https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
       * @param {boolean} options.strokeUniform
       * @param {number} options.scaleX
       * @param {number} options.scaleY
       * @param {boolean} [openPath] whether the shape is open or not, affects the calculations of the first and last points
       * @returns {fabric.Point[]} array of size 2n/4n of all suspected points
       */
      projectStrokeOnPoints: function(t, s, l) {
        var n = [], h = s.strokeWidth / 2, f = s.strokeUniform ? new c.Point(1 / s.scaleX, 1 / s.scaleY) : new c.Point(1, 1), g = function(p) {
          var m = h / Math.hypot(p.x, p.y);
          return new c.Point(p.x * m * f.x, p.y * m * f.y);
        };
        return t.length <= 1 || t.forEach(function(p, m) {
          var C = new c.Point(p.x, p.y), w, x;
          m === 0 ? (x = t[m + 1], w = l ? g(c.util.createVector(x, C)).addEquals(C) : t[t.length - 1]) : m === t.length - 1 ? (w = t[m - 1], x = l ? g(c.util.createVector(w, C)).addEquals(C) : t[0]) : (w = t[m - 1], x = t[m + 1]);
          var k = c.util.getBisector(C, w, x), L = k.vector, Y = k.angle, K, re;
          if (s.strokeLineJoin === "miter" && (K = -h / Math.sin(Y / 2), re = new c.Point(
            L.x * K * f.x,
            L.y * K * f.y
          ), Math.hypot(re.x, re.y) / h <= s.strokeMiterLimit)) {
            n.push(C.add(re)), n.push(C.subtract(re));
            return;
          }
          K = -h * Math.SQRT2, re = new c.Point(
            L.x * K * f.x,
            L.y * K * f.y
          ), n.push(C.add(re)), n.push(C.subtract(re));
        }), n;
      },
      /**
       * Apply transform t to point p
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Point} p The point to transform
       * @param  {Array} t The transform
       * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
       * @return {fabric.Point} The transformed point
       */
      transformPoint: function(t, s, l) {
        return l ? new c.Point(
          s[0] * t.x + s[2] * t.y,
          s[1] * t.x + s[3] * t.y
        ) : new c.Point(
          s[0] * t.x + s[2] * t.y + s[4],
          s[1] * t.x + s[3] * t.y + s[5]
        );
      },
      /**
       * Returns coordinates of points's bounding rectangle (left, top, width, height)
       * @param {Array} points 4 points array
       * @param {Array} [transform] an array of 6 numbers representing a 2x3 transform matrix
       * @return {Object} Object with left, top, width, height properties
       */
      makeBoundingBoxFromPoints: function(t, s) {
        if (s)
          for (var l = 0; l < t.length; l++)
            t[l] = c.util.transformPoint(t[l], s);
        var n = [t[0].x, t[1].x, t[2].x, t[3].x], h = c.util.array.min(n), f = c.util.array.max(n), g = f - h, p = [t[0].y, t[1].y, t[2].y, t[3].y], m = c.util.array.min(p), C = c.util.array.max(p), w = C - m;
        return {
          left: h,
          top: m,
          width: g,
          height: w
        };
      },
      /**
       * Invert transformation t
       * @static
       * @memberOf fabric.util
       * @param {Array} t The transform
       * @return {Array} The inverted transform
       */
      invertTransform: function(t) {
        var s = 1 / (t[0] * t[3] - t[1] * t[2]), l = [s * t[3], -s * t[1], -s * t[2], s * t[0]], n = c.util.transformPoint({ x: t[4], y: t[5] }, l, !0);
        return l[4] = -n.x, l[5] = -n.y, l;
      },
      /**
       * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
       * @static
       * @memberOf fabric.util
       * @param {Number|String} number number to operate on
       * @param {Number} fractionDigits number of fraction digits to "leave"
       * @return {Number}
       */
      toFixed: function(t, s) {
        return parseFloat(Number(t).toFixed(s));
      },
      /**
       * Converts from attribute value to pixel value if applicable.
       * Returns converted pixels or original value not converted.
       * @param {Number|String} value number to operate on
       * @param {Number} fontSize
       * @return {Number|String}
       */
      parseUnit: function(t, s) {
        var l = /\D{0,2}$/.exec(t), n = parseFloat(t);
        switch (s || (s = c.Text.DEFAULT_SVG_FONT_SIZE), l[0]) {
          case "mm":
            return n * c.DPI / 25.4;
          case "cm":
            return n * c.DPI / 2.54;
          case "in":
            return n * c.DPI;
          case "pt":
            return n * c.DPI / 72;
          case "pc":
            return n * c.DPI / 72 * 12;
          case "em":
            return n * s;
          default:
            return n;
        }
      },
      /**
       * Function which always returns `false`.
       * @static
       * @memberOf fabric.util
       * @return {Boolean}
       */
      falseFunction: function() {
        return !1;
      },
      /**
       * Returns klass "Class" object of given namespace
       * @memberOf fabric.util
       * @param {String} type Type of object (eg. 'circle')
       * @param {String} namespace Namespace to get klass "Class" object from
       * @return {Object} klass "Class"
       */
      getKlass: function(t, s) {
        return t = c.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1)), c.util.resolveNamespace(s)[t];
      },
      /**
       * Returns array of attributes for given svg that fabric parses
       * @memberOf fabric.util
       * @param {String} type Type of svg element (eg. 'circle')
       * @return {Array} string names of supported attributes
       */
      getSvgAttributes: function(t) {
        var s = [
          "instantiated_by_use",
          "style",
          "id",
          "class"
        ];
        switch (t) {
          case "linearGradient":
            s = s.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
            break;
          case "radialGradient":
            s = s.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
            break;
          case "stop":
            s = s.concat(["offset", "stop-color", "stop-opacity"]);
            break;
        }
        return s;
      },
      /**
       * Returns object of given namespace
       * @memberOf fabric.util
       * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
       * @return {Object} Object for given namespace (default fabric)
       */
      resolveNamespace: function(t) {
        if (!t)
          return c;
        var s = t.split("."), l = s.length, n, h = u || c.window;
        for (n = 0; n < l; ++n)
          h = h[s[n]];
        return h;
      },
      /**
       * Loads image element from given url and passes it to a callback
       * @memberOf fabric.util
       * @param {String} url URL representing an image
       * @param {Function} callback Callback; invoked with loaded image
       * @param {*} [context] Context to invoke callback in
       * @param {Object} [crossOrigin] crossOrigin value to set image element to
       */
      loadImage: function(t, s, l, n) {
        if (!t) {
          s && s.call(l, t);
          return;
        }
        var h = c.util.createImage(), f = function() {
          s && s.call(l, h, !1), h = h.onload = h.onerror = null;
        };
        h.onload = f, h.onerror = function() {
          c.log("Error loading " + h.src), s && s.call(l, null, !0), h = h.onload = h.onerror = null;
        }, t.indexOf("data") !== 0 && n !== void 0 && n !== null && (h.crossOrigin = n), t.substring(0, 14) === "data:image/svg" && (h.onload = null, c.util.loadImageInDom(h, f)), h.src = t;
      },
      /**
       * Attaches SVG image with data: URL to the dom
       * @memberOf fabric.util
       * @param {Object} img Image object with data:image/svg src
       * @param {Function} callback Callback; invoked with loaded image
       * @return {Object} DOM element (div containing the SVG image)
       */
      loadImageInDom: function(t, s) {
        var l = c.document.createElement("div");
        l.style.width = l.style.height = "1px", l.style.left = l.style.top = "-100%", l.style.position = "absolute", l.appendChild(t), c.document.querySelector("body").appendChild(l), t.onload = function() {
          s(), l.parentNode.removeChild(l), l = null;
        };
      },
      /**
       * Creates corresponding fabric instances from their object representations
       * @static
       * @memberOf fabric.util
       * @param {Array} objects Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * @param {String} namespace Namespace to get klass "Class" object from
       * @param {Function} reviver Method for further parsing of object elements,
       * called after each fabric object created.
       */
      enlivenObjects: function(t, s, l, n) {
        t = t || [];
        var h = [], f = 0, g = t.length;
        function p() {
          ++f === g && s && s(h.filter(function(m) {
            return m;
          }));
        }
        if (!g) {
          s && s(h);
          return;
        }
        t.forEach(function(m, C) {
          if (!m || !m.type) {
            p();
            return;
          }
          var w = c.util.getKlass(m.type, l);
          w.fromObject(m, function(x, k) {
            k || (h[C] = x), n && n(m, x, k), p();
          });
        });
      },
      /**
       * Creates corresponding fabric instances residing in an object, e.g. `clipPath`
       * @see {@link fabric.Object.ENLIVEN_PROPS}
       * @param {Object} object
       * @param {Object} [context] assign enlived props to this object (pass null to skip this)
       * @param {(objects:fabric.Object[]) => void} callback
       */
      enlivenObjectEnlivables: function(t, s, l) {
        var n = c.Object.ENLIVEN_PROPS.filter(function(h) {
          return !!t[h];
        });
        c.util.enlivenObjects(n.map(function(h) {
          return t[h];
        }), function(h) {
          var f = {};
          n.forEach(function(g, p) {
            f[g] = h[p], s && (s[g] = h[p]);
          }), l && l(f);
        });
      },
      /**
       * Create and wait for loading of patterns
       * @static
       * @memberOf fabric.util
       * @param {Array} patterns Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * called after each fabric object created.
       */
      enlivenPatterns: function(t, s) {
        t = t || [];
        function l() {
          ++h === f && s && s(n);
        }
        var n = [], h = 0, f = t.length;
        if (!f) {
          s && s(n);
          return;
        }
        t.forEach(function(g, p) {
          g && g.source ? new c.Pattern(g, function(m) {
            n[p] = m, l();
          }) : (n[p] = g, l());
        });
      },
      /**
       * Groups SVG elements (usually those retrieved from SVG document)
       * @static
       * @memberOf fabric.util
       * @param {Array} elements SVG elements to group
       * @param {Object} [options] Options object
       * @param {String} path Value to set sourcePath to
       * @return {fabric.Object|fabric.Group}
       */
      groupSVGElements: function(t, s, l) {
        var n;
        return t && t.length === 1 ? t[0] : (s && (s.width && s.height ? s.centerPoint = {
          x: s.width / 2,
          y: s.height / 2
        } : (delete s.width, delete s.height)), n = new c.Group(t, s), typeof l < "u" && (n.sourcePath = l), n);
      },
      /**
       * Populates an object with properties of another object
       * @static
       * @memberOf fabric.util
       * @param {Object} source Source object
       * @param {Object} destination Destination object
       * @return {Array} properties Properties names to include
       */
      populateWithProperties: function(t, s, l) {
        if (l && Array.isArray(l))
          for (var n = 0, h = l.length; n < h; n++)
            l[n] in t && (s[l[n]] = t[l[n]]);
      },
      /**
       * Creates canvas element
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      createCanvasElement: function() {
        return c.document.createElement("canvas");
      },
      /**
       * Creates a canvas element that is a copy of another and is also painted
       * @param {CanvasElement} canvas to copy size and content of
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      copyCanvasElement: function(t) {
        var s = c.util.createCanvasElement();
        return s.width = t.width, s.height = t.height, s.getContext("2d").drawImage(t, 0, 0), s;
      },
      /**
       * since 2.6.0 moved from canvas instance to utility.
       * @param {CanvasElement} canvasEl to copy size and content of
       * @param {String} format 'jpeg' or 'png', in some browsers 'webp' is ok too
       * @param {Number} quality <= 1 and > 0
       * @static
       * @memberOf fabric.util
       * @return {String} data url
       */
      toDataURL: function(t, s, l) {
        return t.toDataURL("image/" + s, l);
      },
      /**
       * Creates image element (works on client and node)
       * @static
       * @memberOf fabric.util
       * @return {HTMLImageElement} HTML image element
       */
      createImage: function() {
        return c.document.createElement("img");
      },
      /**
       * Multiply matrix A by matrix B to nest transformations
       * @static
       * @memberOf fabric.util
       * @param  {Array} a First transformMatrix
       * @param  {Array} b Second transformMatrix
       * @param  {Boolean} is2x2 flag to multiply matrices as 2x2 matrices
       * @return {Array} The product of the two transform matrices
       */
      multiplyTransformMatrices: function(t, s, l) {
        return [
          t[0] * s[0] + t[2] * s[1],
          t[1] * s[0] + t[3] * s[1],
          t[0] * s[2] + t[2] * s[3],
          t[1] * s[2] + t[3] * s[3],
          l ? 0 : t[0] * s[4] + t[2] * s[5] + t[4],
          l ? 0 : t[1] * s[4] + t[3] * s[5] + t[5]
        ];
      },
      /**
       * Decomposes standard 2x3 matrix into transform components
       * @static
       * @memberOf fabric.util
       * @param  {Array} a transformMatrix
       * @return {Object} Components of transform
       */
      qrDecompose: function(t) {
        var s = a(t[1], t[0]), l = o(t[0], 2) + o(t[1], 2), n = i(l), h = (t[0] * t[3] - t[2] * t[1]) / n, f = a(t[0] * t[2] + t[1] * t[3], l);
        return {
          angle: s / e,
          scaleX: n,
          scaleY: h,
          skewX: f / e,
          skewY: 0,
          translateX: t[4],
          translateY: t[5]
        };
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle] angle in degrees
       * @return {Number[]} transform matrix
       */
      calcRotateMatrix: function(t) {
        if (!t.angle)
          return c.iMatrix.concat();
        var s = c.util.degreesToRadians(t.angle), l = c.util.cos(s), n = c.util.sin(s);
        return [l, n, -n, l, 0, 0];
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet.
       * is called DimensionsTransformMatrix because those properties are the one that influence
       * the size of the resulting box of the object.
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewY]
       * @return {Number[]} transform matrix
       */
      calcDimensionsMatrix: function(t) {
        var s = typeof t.scaleX > "u" ? 1 : t.scaleX, l = typeof t.scaleY > "u" ? 1 : t.scaleY, n = [
          t.flipX ? -s : s,
          0,
          0,
          t.flipY ? -l : l,
          0,
          0
        ], h = c.util.multiplyTransformMatrices, f = c.util.degreesToRadians;
        return t.skewX && (n = h(
          n,
          [1, 0, Math.tan(f(t.skewX)), 1],
          !0
        )), t.skewY && (n = h(
          n,
          [1, Math.tan(f(t.skewY)), 0, 1],
          !0
        )), n;
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle]
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.translateX]
       * @param  {Number} [options.translateY]
       * @return {Number[]} transform matrix
       */
      composeMatrix: function(t) {
        var s = [1, 0, 0, 1, t.translateX || 0, t.translateY || 0], l = c.util.multiplyTransformMatrices;
        return t.angle && (s = l(s, c.util.calcRotateMatrix(t))), (t.scaleX !== 1 || t.scaleY !== 1 || t.skewX || t.skewY || t.flipX || t.flipY) && (s = l(s, c.util.calcDimensionsMatrix(t))), s;
      },
      /**
       * reset an object transform state to neutral. Top and left are not accounted for
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to transform
       */
      resetObjectTransform: function(t) {
        t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.flipX = !1, t.flipY = !1, t.rotate(0);
      },
      /**
       * Extract Object transform values
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to read from
       * @return {Object} Components of transform
       */
      saveObjectTransform: function(t) {
        return {
          scaleX: t.scaleX,
          scaleY: t.scaleY,
          skewX: t.skewX,
          skewY: t.skewY,
          angle: t.angle,
          left: t.left,
          flipX: t.flipX,
          flipY: t.flipY,
          top: t.top
        };
      },
      /**
       * Returns true if context has transparent pixel
       * at specified location (taking tolerance into account)
       * @param {CanvasRenderingContext2D} ctx context
       * @param {Number} x x coordinate
       * @param {Number} y y coordinate
       * @param {Number} tolerance Tolerance
       */
      isTransparent: function(t, s, l, n) {
        n > 0 && (s > n ? s -= n : s = 0, l > n ? l -= n : l = 0);
        var h = !0, f, g, p = t.getImageData(s, l, n * 2 || 1, n * 2 || 1), m = p.data.length;
        for (f = 3; f < m && (g = p.data[f], h = g <= 0, h !== !1); f += 4)
          ;
        return p = null, h;
      },
      /**
       * Parse preserveAspectRatio attribute from element
       * @param {string} attribute to be parsed
       * @return {Object} an object containing align and meetOrSlice attribute
       */
      parsePreserveAspectRatioAttribute: function(t) {
        var s = "meet", l = "Mid", n = "Mid", h = t.split(" "), f;
        return h && h.length && (s = h.pop(), s !== "meet" && s !== "slice" ? (f = s, s = "meet") : h.length && (f = h.pop())), l = f !== "none" ? f.slice(1, 4) : "none", n = f !== "none" ? f.slice(5, 8) : "none", {
          meetOrSlice: s,
          alignX: l,
          alignY: n
        };
      },
      /**
       * Clear char widths cache for the given font family or all the cache if no
       * fontFamily is specified.
       * Use it if you know you are loading fonts in a lazy way and you are not waiting
       * for custom fonts to load properly when adding text objects to the canvas.
       * If a text object is added when its own font is not loaded yet, you will get wrong
       * measurement and so wrong bounding boxes.
       * After the font cache is cleared, either change the textObject text content or call
       * initDimensions() to trigger a recalculation
       * @memberOf fabric.util
       * @param {String} [fontFamily] font family to clear
       */
      clearFabricFontCache: function(t) {
        t = (t || "").toLowerCase(), t ? c.charWidthsCache[t] && delete c.charWidthsCache[t] : c.charWidthsCache = {};
      },
      /**
       * Given current aspect ratio, determines the max width and height that can
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Number} ar aspect ratio
       * @param {Number} maximumArea Maximum area you want to achieve
       * @return {Object.x} Limited dimensions by X
       * @return {Object.y} Limited dimensions by Y
       */
      limitDimsByArea: function(t, s) {
        var l = Math.sqrt(s * t), n = Math.floor(s / l);
        return { x: Math.floor(l), y: n };
      },
      capValue: function(t, s, l) {
        return Math.max(t, Math.min(s, l));
      },
      /**
       * Finds the scale for the object source to fit inside the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to fit into destination
       */
      findScaleToFit: function(t, s) {
        return Math.min(s.width / t.width, s.height / t.height);
      },
      /**
       * Finds the scale for the object source to cover entirely the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to cover destination
       */
      findScaleToCover: function(t, s) {
        return Math.max(s.width / t.width, s.height / t.height);
      },
      /**
       * given an array of 6 number returns something like `"matrix(...numbers)"`
       * @memberOf fabric.util
       * @param {Array} transform an array with 6 numbers
       * @return {String} transform matrix for svg
       * @return {Object.y} Limited dimensions by Y
       */
      matrixToSVG: function(t) {
        return "matrix(" + t.map(function(s) {
          return c.util.toFixed(s, c.Object.NUM_FRACTION_DIGITS);
        }).join(" ") + ")";
      },
      /**
       * given an object and a transform, apply the inverse transform to the object,
       * this is equivalent to remove from that object that transformation, so that
       * added in a space with the removed transform, the object will be the same as before.
       * Removing from an object a transform that scale by 2 is like scaling it by 1/2.
       * Removing from an object a transfrom that rotate by 30deg is like rotating by 30deg
       * in the opposite direction.
       * This util is used to add objects inside transformed groups or nested groups.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      removeTransformFromObject: function(t, s) {
        var l = c.util.invertTransform(s), n = c.util.multiplyTransformMatrices(l, t.calcOwnMatrix());
        c.util.applyTransformToObject(t, n);
      },
      /**
       * given an object and a transform, apply the transform to the object.
       * this is equivalent to change the space where the object is drawn.
       * Adding to an object a transform that scale by 2 is like scaling it by 2.
       * This is used when removing an object from an active selection for example.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      addTransformToObject: function(t, s) {
        c.util.applyTransformToObject(
          t,
          c.util.multiplyTransformMatrices(s, t.calcOwnMatrix())
        );
      },
      /**
       * discard an object transform state and apply the one from the matrix.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      applyTransformToObject: function(t, s) {
        var l = c.util.qrDecompose(s), n = new c.Point(l.translateX, l.translateY);
        t.flipX = !1, t.flipY = !1, t.set("scaleX", l.scaleX), t.set("scaleY", l.scaleY), t.skewX = l.skewX, t.skewY = l.skewY, t.angle = l.angle, t.setPositionByOrigin(n, "center", "center");
      },
      /**
       * given a width and height, return the size of the bounding box
       * that can contains the box with width/height with applied transform
       * described in options.
       * Use to calculate the boxes around objects for controls.
       * @memberOf fabric.util
       * @param {Number} width
       * @param {Number} height
       * @param {Object} options
       * @param {Number} options.scaleX
       * @param {Number} options.scaleY
       * @param {Number} options.skewX
       * @param {Number} options.skewY
       * @return {Object.x} width of containing
       * @return {Object.y} height of containing
       */
      sizeAfterTransform: function(t, s, l) {
        var n = t / 2, h = s / 2, f = [
          {
            x: -n,
            y: -h
          },
          {
            x: n,
            y: -h
          },
          {
            x: -n,
            y: h
          },
          {
            x: n,
            y: h
          }
        ], g = c.util.calcDimensionsMatrix(l), p = c.util.makeBoundingBoxFromPoints(f, g);
        return {
          x: p.width,
          y: p.height
        };
      },
      /**
       * Merges 2 clip paths into one visually equal clip path
       *
       * **IMPORTANT**:\
       * Does **NOT** clone the arguments, clone them proir if necessary.
       *
       * Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap.
       * Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible.
       *
       * In order to handle the `inverted` property we follow logic described in the following cases:\
       * **(1)** both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\
       * **(2)** one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\
       * **(3)** both clip paths are not inverted - wrapper and clip paths remain unchanged.
       *
       * @memberOf fabric.util
       * @param {fabric.Object} c1
       * @param {fabric.Object} c2
       * @returns {fabric.Object} merged clip path
       */
      mergeClipPaths: function(t, s) {
        var l = t, n = s;
        l.inverted && !n.inverted && (l = s, n = t), c.util.applyTransformToObject(
          n,
          c.util.multiplyTransformMatrices(
            c.util.invertTransform(l.calcTransformMatrix()),
            n.calcTransformMatrix()
          )
        );
        var h = l.inverted && n.inverted;
        return h && (l.inverted = n.inverted = !1), new c.Group([l], { clipPath: n, inverted: h });
      }
    };
  }(d), function() {
    var u = Array.prototype.join, i = {
      m: 2,
      l: 2,
      h: 1,
      v: 1,
      c: 6,
      s: 4,
      q: 4,
      t: 2,
      a: 7
    }, a = {
      m: "l",
      M: "L"
    };
    function o(b, A, P, O, B, E, S, M, j, z, H) {
      var I = c.util.cos(b), te = c.util.sin(b), $ = c.util.cos(A), G = c.util.sin(A), F = P * B * $ - O * E * G + S, Q = O * B * $ + P * E * G + M, J = z + j * (-P * B * te - O * E * I), V = H + j * (-O * B * te + P * E * I), ie = F + j * (P * B * G + O * E * $), oe = Q + j * (O * B * G - P * E * $);
      return [
        "C",
        J,
        V,
        ie,
        oe,
        F,
        Q
      ];
    }
    function e(b, A, P, O, B, E, S) {
      var M = Math.PI, j = S * M / 180, z = c.util.sin(j), H = c.util.cos(j), I = 0, te = 0;
      P = Math.abs(P), O = Math.abs(O);
      var $ = -H * b * 0.5 - z * A * 0.5, G = -H * A * 0.5 + z * b * 0.5, F = P * P, Q = O * O, J = G * G, V = $ * $, ie = F * Q - F * J - Q * V, oe = 0;
      if (ie < 0) {
        var ue = Math.sqrt(1 - ie / (F * Q));
        P *= ue, O *= ue;
      } else
        oe = (B === E ? -1 : 1) * Math.sqrt(ie / (F * J + Q * V));
      var ce = oe * P * G / O, Z = -oe * O * $ / P, he = H * ce - z * Z + b * 0.5, ge = z * ce + H * Z + A * 0.5, pe = r(1, 0, ($ - ce) / P, (G - Z) / O), Ae = r(($ - ce) / P, (G - Z) / O, (-$ - ce) / P, (-G - Z) / O);
      E === 0 && Ae > 0 ? Ae -= 2 * M : E === 1 && Ae < 0 && (Ae += 2 * M);
      for (var be = Math.ceil(Math.abs(Ae / M * 2)), Le = [], ke = Ae / be, Ze = 8 / 3 * Math.sin(ke / 4) * Math.sin(ke / 4) / Math.sin(ke / 2), ct = pe + ke, Ue = 0; Ue < be; Ue++)
        Le[Ue] = o(pe, ct, H, z, P, O, he, ge, Ze, I, te), I = Le[Ue][5], te = Le[Ue][6], pe = ct, ct += ke;
      return Le;
    }
    function r(b, A, P, O) {
      var B = Math.atan2(A, b), E = Math.atan2(O, P);
      return E >= B ? E - B : 2 * Math.PI - (B - E);
    }
    function t(b, A, P, O, B, E, S, M) {
      var j;
      if (c.cachesBoundsOfCurve && (j = u.call(arguments), c.boundsOfCurveCache[j]))
        return c.boundsOfCurveCache[j];
      var z = Math.sqrt, H = Math.min, I = Math.max, te = Math.abs, $ = [], G = [[], []], F, Q, J, V, ie, oe, ue, ce;
      Q = 6 * b - 12 * P + 6 * B, F = -3 * b + 9 * P - 9 * B + 3 * S, J = 3 * P - 3 * b;
      for (var Z = 0; Z < 2; ++Z) {
        if (Z > 0 && (Q = 6 * A - 12 * O + 6 * E, F = -3 * A + 9 * O - 9 * E + 3 * M, J = 3 * O - 3 * A), te(F) < 1e-12) {
          if (te(Q) < 1e-12)
            continue;
          V = -J / Q, 0 < V && V < 1 && $.push(V);
          continue;
        }
        ue = Q * Q - 4 * J * F, !(ue < 0) && (ce = z(ue), ie = (-Q + ce) / (2 * F), 0 < ie && ie < 1 && $.push(ie), oe = (-Q - ce) / (2 * F), 0 < oe && oe < 1 && $.push(oe));
      }
      for (var he, ge, pe = $.length, Ae = pe, be; pe--; )
        V = $[pe], be = 1 - V, he = be * be * be * b + 3 * be * be * V * P + 3 * be * V * V * B + V * V * V * S, G[0][pe] = he, ge = be * be * be * A + 3 * be * be * V * O + 3 * be * V * V * E + V * V * V * M, G[1][pe] = ge;
      G[0][Ae] = b, G[1][Ae] = A, G[0][Ae + 1] = S, G[1][Ae + 1] = M;
      var Le = [
        {
          x: H.apply(null, G[0]),
          y: H.apply(null, G[1])
        },
        {
          x: I.apply(null, G[0]),
          y: I.apply(null, G[1])
        }
      ];
      return c.cachesBoundsOfCurve && (c.boundsOfCurveCache[j] = Le), Le;
    }
    function s(b, A, P) {
      for (var O = P[1], B = P[2], E = P[3], S = P[4], M = P[5], j = P[6], z = P[7], H = e(j - b, z - A, O, B, S, M, E), I = 0, te = H.length; I < te; I++)
        H[I][1] += b, H[I][2] += A, H[I][3] += b, H[I][4] += A, H[I][5] += b, H[I][6] += A;
      return H;
    }
    function l(b) {
      var A = 0, P = 0, O = b.length, B = 0, E = 0, S, M, j, z = [], H, I, te;
      for (M = 0; M < O; ++M) {
        switch (j = !1, S = b[M].slice(0), S[0]) {
          case "l":
            S[0] = "L", S[1] += A, S[2] += P;
          case "L":
            A = S[1], P = S[2];
            break;
          case "h":
            S[1] += A;
          case "H":
            S[0] = "L", S[2] = P, A = S[1];
            break;
          case "v":
            S[1] += P;
          case "V":
            S[0] = "L", P = S[1], S[1] = A, S[2] = P;
            break;
          case "m":
            S[0] = "M", S[1] += A, S[2] += P;
          case "M":
            A = S[1], P = S[2], B = S[1], E = S[2];
            break;
          case "c":
            S[0] = "C", S[1] += A, S[2] += P, S[3] += A, S[4] += P, S[5] += A, S[6] += P;
          case "C":
            I = S[3], te = S[4], A = S[5], P = S[6];
            break;
          case "s":
            S[0] = "S", S[1] += A, S[2] += P, S[3] += A, S[4] += P;
          case "S":
            H === "C" ? (I = 2 * A - I, te = 2 * P - te) : (I = A, te = P), A = S[3], P = S[4], S[0] = "C", S[5] = S[3], S[6] = S[4], S[3] = S[1], S[4] = S[2], S[1] = I, S[2] = te, I = S[3], te = S[4];
            break;
          case "q":
            S[0] = "Q", S[1] += A, S[2] += P, S[3] += A, S[4] += P;
          case "Q":
            I = S[1], te = S[2], A = S[3], P = S[4];
            break;
          case "t":
            S[0] = "T", S[1] += A, S[2] += P;
          case "T":
            H === "Q" ? (I = 2 * A - I, te = 2 * P - te) : (I = A, te = P), S[0] = "Q", A = S[1], P = S[2], S[1] = I, S[2] = te, S[3] = A, S[4] = P;
            break;
          case "a":
            S[0] = "A", S[6] += A, S[7] += P;
          case "A":
            j = !0, z = z.concat(s(A, P, S)), A = S[6], P = S[7];
            break;
          case "z":
          case "Z":
            A = B, P = E;
            break;
        }
        j || z.push(S), H = S[0];
      }
      return z;
    }
    function n(b, A, P, O) {
      return Math.sqrt((P - b) * (P - b) + (O - A) * (O - A));
    }
    function h(b) {
      return b * b * b;
    }
    function f(b) {
      return 3 * b * b * (1 - b);
    }
    function g(b) {
      return 3 * b * (1 - b) * (1 - b);
    }
    function p(b) {
      return (1 - b) * (1 - b) * (1 - b);
    }
    function m(b, A, P, O, B, E, S, M) {
      return function(j) {
        var z = h(j), H = f(j), I = g(j), te = p(j);
        return {
          x: S * z + B * H + P * I + b * te,
          y: M * z + E * H + O * I + A * te
        };
      };
    }
    function C(b, A, P, O, B, E, S, M) {
      return function(j) {
        var z = 1 - j, H = 3 * z * z * (P - b) + 6 * z * j * (B - P) + 3 * j * j * (S - B), I = 3 * z * z * (O - A) + 6 * z * j * (E - O) + 3 * j * j * (M - E);
        return Math.atan2(I, H);
      };
    }
    function w(b) {
      return b * b;
    }
    function x(b) {
      return 2 * b * (1 - b);
    }
    function k(b) {
      return (1 - b) * (1 - b);
    }
    function L(b, A, P, O, B, E) {
      return function(S) {
        var M = w(S), j = x(S), z = k(S);
        return {
          x: B * M + P * j + b * z,
          y: E * M + O * j + A * z
        };
      };
    }
    function Y(b, A, P, O, B, E) {
      return function(S) {
        var M = 1 - S, j = 2 * M * (P - b) + 2 * S * (B - P), z = 2 * M * (O - A) + 2 * S * (E - O);
        return Math.atan2(z, j);
      };
    }
    function K(b, A, P) {
      var O = { x: A, y: P }, B, E = 0, S;
      for (S = 1; S <= 100; S += 1)
        B = b(S / 100), E += n(O.x, O.y, B.x, B.y), O = B;
      return E;
    }
    function re(b, A) {
      for (var P = 0, O = 0, B = b.iterator, E = { x: b.x, y: b.y }, S, M, j = 0.01, z = b.angleFinder, H; O < A && j > 1e-4; )
        S = B(P), H = P, M = n(E.x, E.y, S.x, S.y), M + O > A ? (P -= j, j /= 2) : (E = S, P += j, O += M);
      return S.angle = z(H), S;
    }
    function q(b) {
      for (var A = 0, P = b.length, O, B = 0, E = 0, S = 0, M = 0, j = [], z, H, I, te = 0; te < P; te++) {
        switch (O = b[te], H = {
          x: B,
          y: E,
          command: O[0]
        }, O[0]) {
          case "M":
            H.length = 0, S = B = O[1], M = E = O[2];
            break;
          case "L":
            H.length = n(B, E, O[1], O[2]), B = O[1], E = O[2];
            break;
          case "C":
            z = m(
              B,
              E,
              O[1],
              O[2],
              O[3],
              O[4],
              O[5],
              O[6]
            ), I = C(
              B,
              E,
              O[1],
              O[2],
              O[3],
              O[4],
              O[5],
              O[6]
            ), H.iterator = z, H.angleFinder = I, H.length = K(z, B, E), B = O[5], E = O[6];
            break;
          case "Q":
            z = L(
              B,
              E,
              O[1],
              O[2],
              O[3],
              O[4]
            ), I = Y(
              B,
              E,
              O[1],
              O[2],
              O[3],
              O[4]
            ), H.iterator = z, H.angleFinder = I, H.length = K(z, B, E), B = O[3], E = O[4];
            break;
          case "Z":
          case "z":
            H.destX = S, H.destY = M, H.length = n(B, E, S, M), B = S, E = M;
            break;
        }
        A += H.length, j.push(H);
      }
      return j.push({ length: A, x: B, y: E }), j;
    }
    function ee(b, A, P) {
      P || (P = q(b));
      for (var O = 0; A - P[O].length > 0 && O < P.length - 2; )
        A -= P[O].length, O++;
      var B = P[O], E = A / B.length, S = B.command, M = b[O], j;
      switch (S) {
        case "M":
          return { x: B.x, y: B.y, angle: 0 };
        case "Z":
        case "z":
          return j = new c.Point(B.x, B.y).lerp(
            new c.Point(B.destX, B.destY),
            E
          ), j.angle = Math.atan2(B.destY - B.y, B.destX - B.x), j;
        case "L":
          return j = new c.Point(B.x, B.y).lerp(
            new c.Point(M[1], M[2]),
            E
          ), j.angle = Math.atan2(M[2] - B.y, M[1] - B.x), j;
        case "C":
          return re(B, A);
        case "Q":
          return re(B, A);
      }
    }
    function se(b) {
      var A = [], P = [], O, B, E = c.rePathCommand, S = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", M = "(" + S + ")" + c.commaWsp, j = "([01])" + c.commaWsp + "?", z = M + "?" + M + "?" + M + j + j + M + "?(" + S + ")", H = new RegExp(z, "g"), I, te, $;
      if (!b || !b.match)
        return A;
      $ = b.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);
      for (var G = 0, F, Q = $.length; G < Q; G++) {
        O = $[G], te = O.slice(1).trim(), P.length = 0;
        var J = O.charAt(0);
        if (F = [J], J.toLowerCase() === "a")
          for (var V; V = H.exec(te); )
            for (var ie = 1; ie < V.length; ie++)
              P.push(V[ie]);
        else
          for (; I = E.exec(te); )
            P.push(I[0]);
        for (var ie = 0, oe = P.length; ie < oe; ie++)
          B = parseFloat(P[ie]), isNaN(B) || F.push(B);
        var ue = i[J.toLowerCase()], ce = a[J] || J;
        if (F.length - 1 > ue)
          for (var Z = 1, he = F.length; Z < he; Z += ue)
            A.push([J].concat(F.slice(Z, Z + ue))), J = ce;
        else
          A.push(F);
      }
      return A;
    }
    function ae(b, A) {
      var P = [], O, B = new c.Point(b[0].x, b[0].y), E = new c.Point(b[1].x, b[1].y), S = b.length, M = 1, j = 0, z = S > 2;
      for (A = A || 0, z && (M = b[2].x < E.x ? -1 : b[2].x === E.x ? 0 : 1, j = b[2].y < E.y ? -1 : b[2].y === E.y ? 0 : 1), P.push(["M", B.x - M * A, B.y - j * A]), O = 1; O < S; O++) {
        if (!B.eq(E)) {
          var H = B.midPointFrom(E);
          P.push(["Q", B.x, B.y, H.x, H.y]);
        }
        B = b[O], O + 1 < b.length && (E = b[O + 1]);
      }
      return z && (M = B.x > b[O - 2].x ? 1 : B.x === b[O - 2].x ? 0 : -1, j = B.y > b[O - 2].y ? 1 : B.y === b[O - 2].y ? 0 : -1), P.push(["L", B.x + M * A, B.y + j * A]), P;
    }
    function W(b, A, P) {
      return P && (A = c.util.multiplyTransformMatrices(
        A,
        [1, 0, 0, 1, -P.x, -P.y]
      )), b.map(function(O) {
        for (var B = O.slice(0), E = {}, S = 1; S < O.length - 1; S += 2)
          E.x = O[S], E.y = O[S + 1], E = c.util.transformPoint(E, A), B[S] = E.x, B[S + 1] = E.y;
        return B;
      });
    }
    c.util.joinPath = function(b) {
      return b.map(function(A) {
        return A.join(" ");
      }).join(" ");
    }, c.util.parsePath = se, c.util.makePathSimpler = l, c.util.getSmoothPathFromPoints = ae, c.util.getPathSegmentsInfo = q, c.util.getBoundsOfCurve = t, c.util.getPointOnPath = ee, c.util.transformPath = W;
  }(), function() {
    var u = Array.prototype.slice;
    function i(t, s) {
      for (var l = u.call(arguments, 2), n = [], h = 0, f = t.length; h < f; h++)
        n[h] = l.length ? t[h][s].apply(t[h], l) : t[h][s].call(t[h]);
      return n;
    }
    function a(t, s) {
      return r(t, s, function(l, n) {
        return l >= n;
      });
    }
    function o(t, s) {
      return r(t, s, function(l, n) {
        return l < n;
      });
    }
    function e(t, s) {
      for (var l = t.length; l--; )
        t[l] = s;
      return t;
    }
    function r(t, s, l) {
      if (!(!t || t.length === 0)) {
        var n = t.length - 1, h = s ? t[n][s] : t[n];
        if (s)
          for (; n--; )
            l(t[n][s], h) && (h = t[n][s]);
        else
          for (; n--; )
            l(t[n], h) && (h = t[n]);
        return h;
      }
    }
    c.util.array = {
      fill: e,
      invoke: i,
      min: o,
      max: a
    };
  }(), function() {
    function u(a, o, e) {
      if (e)
        if (!c.isLikelyNode && o instanceof Element)
          a = o;
        else if (o instanceof Array) {
          a = [];
          for (var r = 0, t = o.length; r < t; r++)
            a[r] = u({}, o[r], e);
        } else if (o && typeof o == "object")
          for (var s in o)
            s === "canvas" || s === "group" ? a[s] = null : o.hasOwnProperty(s) && (a[s] = u({}, o[s], e));
        else
          a = o;
      else
        for (var s in o)
          a[s] = o[s];
      return a;
    }
    function i(a, o) {
      return u({}, a, o);
    }
    c.util.object = {
      extend: u,
      clone: i
    }, c.util.object.extend(c.util, c.Observable);
  }(), function() {
    function u(r) {
      return r.replace(/-+(.)?/g, function(t, s) {
        return s ? s.toUpperCase() : "";
      });
    }
    function i(r, t) {
      return r.charAt(0).toUpperCase() + (t ? r.slice(1) : r.slice(1).toLowerCase());
    }
    function a(r) {
      return r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function o(r) {
      var t = 0, s, l = [];
      for (t = 0, s; t < r.length; t++)
        (s = e(r, t)) !== !1 && l.push(s);
      return l;
    }
    function e(r, t) {
      var s = r.charCodeAt(t);
      if (isNaN(s))
        return "";
      if (s < 55296 || s > 57343)
        return r.charAt(t);
      if (55296 <= s && s <= 56319) {
        if (r.length <= t + 1)
          throw "High surrogate without following low surrogate";
        var l = r.charCodeAt(t + 1);
        if (56320 > l || l > 57343)
          throw "High surrogate without following low surrogate";
        return r.charAt(t) + r.charAt(t + 1);
      }
      if (t === 0)
        throw "Low surrogate without preceding high surrogate";
      var n = r.charCodeAt(t - 1);
      if (55296 > n || n > 56319)
        throw "Low surrogate without preceding high surrogate";
      return !1;
    }
    c.util.string = {
      camelize: u,
      capitalize: i,
      escapeXml: a,
      graphemeSplit: o
    };
  }(), function() {
    var u = Array.prototype.slice, i = function() {
    }, a = function() {
      for (var s in { toString: 1 })
        if (s === "toString")
          return !1;
      return !0;
    }(), o = function(s, l, n) {
      for (var h in l)
        h in s.prototype && typeof s.prototype[h] == "function" && (l[h] + "").indexOf("callSuper") > -1 ? s.prototype[h] = function(f) {
          return function() {
            var g = this.constructor.superclass;
            this.constructor.superclass = n;
            var p = l[f].apply(this, arguments);
            if (this.constructor.superclass = g, f !== "initialize")
              return p;
          };
        }(h) : s.prototype[h] = l[h], a && (l.toString !== Object.prototype.toString && (s.prototype.toString = l.toString), l.valueOf !== Object.prototype.valueOf && (s.prototype.valueOf = l.valueOf));
    };
    function e() {
    }
    function r(s) {
      for (var l = null, n = this; n.constructor.superclass; ) {
        var h = n.constructor.superclass.prototype[s];
        if (n[s] !== h) {
          l = h;
          break;
        }
        n = n.constructor.superclass.prototype;
      }
      return l ? arguments.length > 1 ? l.apply(this, u.call(arguments, 1)) : l.call(this) : console.log("tried to callSuper " + s + ", method not found in prototype chain", this);
    }
    function t() {
      var s = null, l = u.call(arguments, 0);
      typeof l[0] == "function" && (s = l.shift());
      function n() {
        this.initialize.apply(this, arguments);
      }
      n.superclass = s, n.subclasses = [], s && (e.prototype = s.prototype, n.prototype = new e(), s.subclasses.push(n));
      for (var h = 0, f = l.length; h < f; h++)
        o(n, l[h], s);
      return n.prototype.initialize || (n.prototype.initialize = i), n.prototype.constructor = n, n.prototype.callSuper = r, n;
    }
    c.util.createClass = t;
  }(), function() {
    var u = !!c.document.createElement("div").attachEvent, i = ["touchstart", "touchmove", "touchend"];
    c.util.addListener = function(o, e, r, t) {
      o && o.addEventListener(e, r, u ? !1 : t);
    }, c.util.removeListener = function(o, e, r, t) {
      o && o.removeEventListener(e, r, u ? !1 : t);
    };
    function a(o) {
      var e = o.changedTouches;
      return e && e[0] ? e[0] : o;
    }
    c.util.getPointer = function(o) {
      var e = o.target, r = c.util.getScrollLeftTop(e), t = a(o);
      return {
        x: t.clientX + r.left,
        y: t.clientY + r.top
      };
    }, c.util.isTouchEvent = function(o) {
      return i.indexOf(o.type) > -1 || o.pointerType === "touch";
    };
  }(), function() {
    function u(t, s) {
      var l = t.style;
      if (!l)
        return t;
      if (typeof s == "string")
        return t.style.cssText += ";" + s, s.indexOf("opacity") > -1 ? r(t, s.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;
      for (var n in s)
        if (n === "opacity")
          r(t, s[n]);
        else {
          var h = n === "float" || n === "cssFloat" ? typeof l.styleFloat > "u" ? "cssFloat" : "styleFloat" : n;
          l[h] = s[n];
        }
      return t;
    }
    var i = c.document.createElement("div"), a = typeof i.style.opacity == "string", o = typeof i.style.filter == "string", e = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, r = function(t) {
      return t;
    };
    a ? r = function(t, s) {
      return t.style.opacity = s, t;
    } : o && (r = function(t, s) {
      var l = t.style;
      return t.currentStyle && !t.currentStyle.hasLayout && (l.zoom = 1), e.test(l.filter) ? (s = s >= 0.9999 ? "" : "alpha(opacity=" + s * 100 + ")", l.filter = l.filter.replace(e, s)) : l.filter += " alpha(opacity=" + s * 100 + ")", t;
    }), c.util.setStyle = u;
  }(), function() {
    var u = Array.prototype.slice;
    function i(p) {
      return typeof p == "string" ? c.document.getElementById(p) : p;
    }
    var a, o = function(p) {
      return u.call(p, 0);
    };
    try {
      a = o(c.document.childNodes) instanceof Array;
    } catch {
    }
    a || (o = function(p) {
      for (var m = new Array(p.length), C = p.length; C--; )
        m[C] = p[C];
      return m;
    });
    function e(p, m) {
      var C = c.document.createElement(p);
      for (var w in m)
        w === "class" ? C.className = m[w] : w === "for" ? C.htmlFor = m[w] : C.setAttribute(w, m[w]);
      return C;
    }
    function r(p, m) {
      p && (" " + p.className + " ").indexOf(" " + m + " ") === -1 && (p.className += (p.className ? " " : "") + m);
    }
    function t(p, m, C) {
      return typeof m == "string" && (m = e(m, C)), p.parentNode && p.parentNode.replaceChild(m, p), m.appendChild(p), m;
    }
    function s(p) {
      for (var m = 0, C = 0, w = c.document.documentElement, x = c.document.body || {
        scrollLeft: 0,
        scrollTop: 0
      }; p && (p.parentNode || p.host) && (p = p.parentNode || p.host, p === c.document ? (m = x.scrollLeft || w.scrollLeft || 0, C = x.scrollTop || w.scrollTop || 0) : (m += p.scrollLeft || 0, C += p.scrollTop || 0), !(p.nodeType === 1 && p.style.position === "fixed")); )
        ;
      return { left: m, top: C };
    }
    function l(p) {
      var m, C = p && p.ownerDocument, w = { left: 0, top: 0 }, x = { left: 0, top: 0 }, k, L = {
        borderLeftWidth: "left",
        borderTopWidth: "top",
        paddingLeft: "left",
        paddingTop: "top"
      };
      if (!C)
        return x;
      for (var Y in L)
        x[L[Y]] += parseInt(n(p, Y), 10) || 0;
      return m = C.documentElement, typeof p.getBoundingClientRect < "u" && (w = p.getBoundingClientRect()), k = s(p), {
        left: w.left + k.left - (m.clientLeft || 0) + x.left,
        top: w.top + k.top - (m.clientTop || 0) + x.top
      };
    }
    var n;
    c.document.defaultView && c.document.defaultView.getComputedStyle ? n = function(p, m) {
      var C = c.document.defaultView.getComputedStyle(p, null);
      return C ? C[m] : void 0;
    } : n = function(p, m) {
      var C = p.style[m];
      return !C && p.currentStyle && (C = p.currentStyle[m]), C;
    }, function() {
      var p = c.document.documentElement.style, m = "userSelect" in p ? "userSelect" : "MozUserSelect" in p ? "MozUserSelect" : "WebkitUserSelect" in p ? "WebkitUserSelect" : "KhtmlUserSelect" in p ? "KhtmlUserSelect" : "";
      function C(x) {
        return typeof x.onselectstart < "u" && (x.onselectstart = c.util.falseFunction), m ? x.style[m] = "none" : typeof x.unselectable == "string" && (x.unselectable = "on"), x;
      }
      function w(x) {
        return typeof x.onselectstart < "u" && (x.onselectstart = null), m ? x.style[m] = "" : typeof x.unselectable == "string" && (x.unselectable = ""), x;
      }
      c.util.makeElementUnselectable = C, c.util.makeElementSelectable = w;
    }();
    function h(p) {
      var m = c.jsdomImplForWrapper(p);
      return m._canvas || m._image;
    }
    function f(p) {
      if (c.isLikelyNode) {
        var m = c.jsdomImplForWrapper(p);
        m && (m._image = null, m._canvas = null, m._currentSrc = null, m._attributes = null, m._classList = null);
      }
    }
    function g(p, m) {
      p.imageSmoothingEnabled = p.imageSmoothingEnabled || p.webkitImageSmoothingEnabled || p.mozImageSmoothingEnabled || p.msImageSmoothingEnabled || p.oImageSmoothingEnabled, p.imageSmoothingEnabled = m;
    }
    c.util.setImageSmoothing = g, c.util.getById = i, c.util.toArray = o, c.util.addClass = r, c.util.makeElement = e, c.util.wrapElement = t, c.util.getScrollLeftTop = s, c.util.getElementOffset = l, c.util.getNodeCanvas = h, c.util.cleanUpJsdomNode = f;
  }(), function() {
    function u(o, e) {
      return o + (/\?/.test(o) ? "&" : "?") + e;
    }
    function i() {
    }
    function a(o, e) {
      e || (e = {});
      var r = e.method ? e.method.toUpperCase() : "GET", t = e.onComplete || function() {
      }, s = new c.window.XMLHttpRequest(), l = e.body || e.parameters;
      return s.onreadystatechange = function() {
        s.readyState === 4 && (t(s), s.onreadystatechange = i);
      }, r === "GET" && (l = null, typeof e.parameters == "string" && (o = u(o, e.parameters))), s.open(r, o, !0), (r === "POST" || r === "PUT") && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.send(l), s;
    }
    c.util.request = a;
  }(), c.log = console.log, c.warn = console.warn, function() {
    var u = c.util.object.extend, i = c.util.object.clone, a = [];
    c.util.object.extend(a, {
      /**
       * cancel all running animations at the next requestAnimFrame
       * @returns {AnimationContext[]}
       */
      cancelAll: function() {
        var h = this.splice(0);
        return h.forEach(function(f) {
          f.cancel();
        }), h;
      },
      /**
       * cancel all running animations attached to canvas at the next requestAnimFrame
       * @param {fabric.Canvas} canvas
       * @returns {AnimationContext[]}
       */
      cancelByCanvas: function(h) {
        if (!h)
          return [];
        var f = this.filter(function(g) {
          return typeof g.target == "object" && g.target.canvas === h;
        });
        return f.forEach(function(g) {
          g.cancel();
        }), f;
      },
      /**
       * cancel all running animations for target at the next requestAnimFrame
       * @param {*} target
       * @returns {AnimationContext[]}
       */
      cancelByTarget: function(h) {
        var f = this.findAnimationsByTarget(h);
        return f.forEach(function(g) {
          g.cancel();
        }), f;
      },
      /**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {number}
       */
      findAnimationIndex: function(h) {
        return this.indexOf(this.findAnimation(h));
      },
      /**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {AnimationContext | undefined} animation's options object
       */
      findAnimation: function(h) {
        return this.find(function(f) {
          return f.cancel === h;
        });
      },
      /**
       *
       * @param {*} target the object that is assigned to the target property of the animation context
       * @returns {AnimationContext[]} array of animation options object associated with target
       */
      findAnimationsByTarget: function(h) {
        return h ? this.filter(function(f) {
          return f.target === h;
        }) : [];
      }
    });
    function o() {
      return !1;
    }
    function e(h, f, g, p) {
      return -g * Math.cos(h / p * (Math.PI / 2)) + g + f;
    }
    function r(h) {
      h || (h = {});
      var f = !1, g, p = function() {
        var m = c.runningAnimations.indexOf(g);
        return m > -1 && c.runningAnimations.splice(m, 1)[0];
      };
      return g = u(i(h), {
        cancel: function() {
          return f = !0, p();
        },
        currentValue: "startValue" in h ? h.startValue : 0,
        completionRate: 0,
        durationRate: 0
      }), c.runningAnimations.push(g), l(function(m) {
        var C = m || +/* @__PURE__ */ new Date(), w = h.duration || 500, x = C + w, k, L = h.onChange || o, Y = h.abort || o, K = h.onComplete || o, re = h.easing || e, q = "startValue" in h ? h.startValue.length > 0 : !1, ee = "startValue" in h ? h.startValue : 0, se = "endValue" in h ? h.endValue : 100, ae = h.byValue || (q ? ee.map(function(W, b) {
          return se[b] - ee[b];
        }) : se - ee);
        h.onStart && h.onStart(), function W(b) {
          k = b || +/* @__PURE__ */ new Date();
          var A = k > x ? w : k - C, P = A / w, O = q ? ee.map(function(E, S) {
            return re(A, ee[S], ae[S], w);
          }) : re(A, ee, ae, w), B = Math.abs(q ? (O[0] - ee[0]) / ae[0] : (O - ee) / ae);
          if (g.currentValue = q ? O.slice() : O, g.completionRate = B, g.durationRate = P, !f) {
            if (Y(O, B, P)) {
              p();
              return;
            }
            if (k > x) {
              g.currentValue = q ? se.slice() : se, g.completionRate = 1, g.durationRate = 1, L(q ? se.slice() : se, 1, 1), K(se, 1, 1), p();
              return;
            } else
              L(O, B, P), l(W);
          }
        }(C);
      }), g.cancel;
    }
    var t = c.window.requestAnimationFrame || c.window.webkitRequestAnimationFrame || c.window.mozRequestAnimationFrame || c.window.oRequestAnimationFrame || c.window.msRequestAnimationFrame || function(h) {
      return c.window.setTimeout(h, 1e3 / 60);
    }, s = c.window.cancelAnimationFrame || c.window.clearTimeout;
    function l() {
      return t.apply(c.window, arguments);
    }
    function n() {
      return s.apply(c.window, arguments);
    }
    c.util.animate = r, c.util.requestAnimFrame = l, c.util.cancelAnimFrame = n, c.runningAnimations = a;
  }(), function() {
    function u(a, o, e) {
      var r = "rgba(" + parseInt(a[0] + e * (o[0] - a[0]), 10) + "," + parseInt(a[1] + e * (o[1] - a[1]), 10) + "," + parseInt(a[2] + e * (o[2] - a[2]), 10);
      return r += "," + (a && o ? parseFloat(a[3] + e * (o[3] - a[3])) : 1), r += ")", r;
    }
    function i(a, o, e, r) {
      var t = new c.Color(a).getSource(), s = new c.Color(o).getSource(), l = r.onComplete, n = r.onChange;
      return r = r || {}, c.util.animate(c.util.object.extend(r, {
        duration: e || 500,
        startValue: t,
        endValue: s,
        byValue: s,
        easing: function(h, f, g, p) {
          var m = r.colorEasing ? r.colorEasing(h, p) : 1 - Math.cos(h / p * (Math.PI / 2));
          return u(f, g, m);
        },
        // has to take in account for color restoring;
        onComplete: function(h, f, g) {
          if (l)
            return l(
              u(s, s, 0),
              f,
              g
            );
        },
        onChange: function(h, f, g) {
          if (n) {
            if (Array.isArray(h))
              return n(
                u(h, h, 0),
                f,
                g
              );
            n(h, f, g);
          }
        }
      }));
    }
    c.util.animateColor = i;
  }(), function() {
    function u(b, A, P, O) {
      return b < Math.abs(A) ? (b = A, O = P / 4) : A === 0 && b === 0 ? O = P / (2 * Math.PI) * Math.asin(1) : O = P / (2 * Math.PI) * Math.asin(A / b), { a: b, c: A, p: P, s: O };
    }
    function i(b, A, P) {
      return b.a * Math.pow(2, 10 * (A -= 1)) * Math.sin((A * P - b.s) * (2 * Math.PI) / b.p);
    }
    function a(b, A, P, O) {
      return P * ((b = b / O - 1) * b * b + 1) + A;
    }
    function o(b, A, P, O) {
      return b /= O / 2, b < 1 ? P / 2 * b * b * b + A : P / 2 * ((b -= 2) * b * b + 2) + A;
    }
    function e(b, A, P, O) {
      return P * (b /= O) * b * b * b + A;
    }
    function r(b, A, P, O) {
      return -P * ((b = b / O - 1) * b * b * b - 1) + A;
    }
    function t(b, A, P, O) {
      return b /= O / 2, b < 1 ? P / 2 * b * b * b * b + A : -P / 2 * ((b -= 2) * b * b * b - 2) + A;
    }
    function s(b, A, P, O) {
      return P * (b /= O) * b * b * b * b + A;
    }
    function l(b, A, P, O) {
      return P * ((b = b / O - 1) * b * b * b * b + 1) + A;
    }
    function n(b, A, P, O) {
      return b /= O / 2, b < 1 ? P / 2 * b * b * b * b * b + A : P / 2 * ((b -= 2) * b * b * b * b + 2) + A;
    }
    function h(b, A, P, O) {
      return -P * Math.cos(b / O * (Math.PI / 2)) + P + A;
    }
    function f(b, A, P, O) {
      return P * Math.sin(b / O * (Math.PI / 2)) + A;
    }
    function g(b, A, P, O) {
      return -P / 2 * (Math.cos(Math.PI * b / O) - 1) + A;
    }
    function p(b, A, P, O) {
      return b === 0 ? A : P * Math.pow(2, 10 * (b / O - 1)) + A;
    }
    function m(b, A, P, O) {
      return b === O ? A + P : P * (-Math.pow(2, -10 * b / O) + 1) + A;
    }
    function C(b, A, P, O) {
      return b === 0 ? A : b === O ? A + P : (b /= O / 2, b < 1 ? P / 2 * Math.pow(2, 10 * (b - 1)) + A : P / 2 * (-Math.pow(2, -10 * --b) + 2) + A);
    }
    function w(b, A, P, O) {
      return -P * (Math.sqrt(1 - (b /= O) * b) - 1) + A;
    }
    function x(b, A, P, O) {
      return P * Math.sqrt(1 - (b = b / O - 1) * b) + A;
    }
    function k(b, A, P, O) {
      return b /= O / 2, b < 1 ? -P / 2 * (Math.sqrt(1 - b * b) - 1) + A : P / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + A;
    }
    function L(b, A, P, O) {
      var B = 1.70158, E = 0, S = P;
      if (b === 0)
        return A;
      if (b /= O, b === 1)
        return A + P;
      E || (E = O * 0.3);
      var M = u(S, P, E, B);
      return -i(M, b, O) + A;
    }
    function Y(b, A, P, O) {
      var B = 1.70158, E = 0, S = P;
      if (b === 0)
        return A;
      if (b /= O, b === 1)
        return A + P;
      E || (E = O * 0.3);
      var M = u(S, P, E, B);
      return M.a * Math.pow(2, -10 * b) * Math.sin((b * O - M.s) * (2 * Math.PI) / M.p) + M.c + A;
    }
    function K(b, A, P, O) {
      var B = 1.70158, E = 0, S = P;
      if (b === 0)
        return A;
      if (b /= O / 2, b === 2)
        return A + P;
      E || (E = O * (0.3 * 1.5));
      var M = u(S, P, E, B);
      return b < 1 ? -0.5 * i(M, b, O) + A : M.a * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * O - M.s) * (2 * Math.PI) / M.p) * 0.5 + M.c + A;
    }
    function re(b, A, P, O, B) {
      return B === void 0 && (B = 1.70158), P * (b /= O) * b * ((B + 1) * b - B) + A;
    }
    function q(b, A, P, O, B) {
      return B === void 0 && (B = 1.70158), P * ((b = b / O - 1) * b * ((B + 1) * b + B) + 1) + A;
    }
    function ee(b, A, P, O, B) {
      return B === void 0 && (B = 1.70158), b /= O / 2, b < 1 ? P / 2 * (b * b * (((B *= 1.525) + 1) * b - B)) + A : P / 2 * ((b -= 2) * b * (((B *= 1.525) + 1) * b + B) + 2) + A;
    }
    function se(b, A, P, O) {
      return P - ae(O - b, 0, P, O) + A;
    }
    function ae(b, A, P, O) {
      return (b /= O) < 1 / 2.75 ? P * (7.5625 * b * b) + A : b < 2 / 2.75 ? P * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + A : b < 2.5 / 2.75 ? P * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + A : P * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + A;
    }
    function W(b, A, P, O) {
      return b < O / 2 ? se(b * 2, 0, P, O) * 0.5 + A : ae(b * 2 - O, 0, P, O) * 0.5 + P * 0.5 + A;
    }
    c.util.ease = {
      /**
       * Quadratic easing in
       * @memberOf fabric.util.ease
       */
      easeInQuad: function(b, A, P, O) {
        return P * (b /= O) * b + A;
      },
      /**
       * Quadratic easing out
       * @memberOf fabric.util.ease
       */
      easeOutQuad: function(b, A, P, O) {
        return -P * (b /= O) * (b - 2) + A;
      },
      /**
       * Quadratic easing in and out
       * @memberOf fabric.util.ease
       */
      easeInOutQuad: function(b, A, P, O) {
        return b /= O / 2, b < 1 ? P / 2 * b * b + A : -P / 2 * (--b * (b - 2) - 1) + A;
      },
      /**
       * Cubic easing in
       * @memberOf fabric.util.ease
       */
      easeInCubic: function(b, A, P, O) {
        return P * (b /= O) * b * b + A;
      },
      easeOutCubic: a,
      easeInOutCubic: o,
      easeInQuart: e,
      easeOutQuart: r,
      easeInOutQuart: t,
      easeInQuint: s,
      easeOutQuint: l,
      easeInOutQuint: n,
      easeInSine: h,
      easeOutSine: f,
      easeInOutSine: g,
      easeInExpo: p,
      easeOutExpo: m,
      easeInOutExpo: C,
      easeInCirc: w,
      easeOutCirc: x,
      easeInOutCirc: k,
      easeInElastic: L,
      easeOutElastic: Y,
      easeInOutElastic: K,
      easeInBack: re,
      easeOutBack: q,
      easeInOutBack: ee,
      easeInBounce: se,
      easeOutBounce: ae,
      easeInOutBounce: W
    };
  }(), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend, o = i.util.object.clone, e = i.util.toFixed, r = i.util.parseUnit, t = i.util.multiplyTransformMatrices, s = [
      "path",
      "circle",
      "polygon",
      "polyline",
      "ellipse",
      "rect",
      "line",
      "image",
      "text"
    ], l = ["symbol", "image", "marker", "pattern", "view", "svg"], n = ["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"], h = ["symbol", "g", "a", "svg", "clipPath", "defs"], f = {
      cx: "left",
      x: "left",
      r: "radius",
      cy: "top",
      y: "top",
      display: "visible",
      visibility: "visible",
      transform: "transformMatrix",
      "fill-opacity": "fillOpacity",
      "fill-rule": "fillRule",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "letter-spacing": "charSpacing",
      "paint-order": "paintFirst",
      "stroke-dasharray": "strokeDashArray",
      "stroke-dashoffset": "strokeDashOffset",
      "stroke-linecap": "strokeLineCap",
      "stroke-linejoin": "strokeLineJoin",
      "stroke-miterlimit": "strokeMiterLimit",
      "stroke-opacity": "strokeOpacity",
      "stroke-width": "strokeWidth",
      "text-decoration": "textDecoration",
      "text-anchor": "textAnchor",
      opacity: "opacity",
      "clip-path": "clipPath",
      "clip-rule": "clipRule",
      "vector-effect": "strokeUniform",
      "image-rendering": "imageSmoothing"
    }, g = {
      stroke: "strokeOpacity",
      fill: "fillOpacity"
    }, p = "font-size", m = "clip-path";
    i.svgValidTagNamesRegEx = x(s), i.svgViewBoxElementsRegEx = x(l), i.svgInvalidAncestorsRegEx = x(n), i.svgValidParentsRegEx = x(h), i.cssRules = {}, i.gradientDefs = {}, i.clipPaths = {};
    function C(E) {
      return E in f ? f[E] : E;
    }
    function w(E, S, M, j) {
      var z = Array.isArray(S), H;
      if ((E === "fill" || E === "stroke") && S === "none")
        S = "";
      else {
        if (E === "strokeUniform")
          return S === "non-scaling-stroke";
        if (E === "strokeDashArray")
          S === "none" ? S = null : S = S.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (E === "transformMatrix")
          M && M.transformMatrix ? S = t(
            M.transformMatrix,
            i.parseTransformAttribute(S)
          ) : S = i.parseTransformAttribute(S);
        else if (E === "visible")
          S = S !== "none" && S !== "hidden", M && M.visible === !1 && (S = !1);
        else if (E === "opacity")
          S = parseFloat(S), M && typeof M.opacity < "u" && (S *= M.opacity);
        else if (E === "textAnchor")
          S = S === "start" ? "left" : S === "end" ? "right" : "center";
        else if (E === "charSpacing")
          H = r(S, j) / j * 1e3;
        else if (E === "paintFirst") {
          var I = S.indexOf("fill"), te = S.indexOf("stroke"), S = "fill";
          (I > -1 && te > -1 && te < I || I === -1 && te > -1) && (S = "stroke");
        } else {
          if (E === "href" || E === "xlink:href" || E === "font")
            return S;
          if (E === "imageSmoothing")
            return S === "optimizeQuality";
          H = z ? S.map(r) : r(S, j);
        }
      }
      return !z && isNaN(H) ? S : H;
    }
    function x(E) {
      return new RegExp("^(" + E.join("|") + ")\\b", "i");
    }
    function k(E) {
      for (var S in g)
        if (!(typeof E[g[S]] > "u" || E[S] === "")) {
          if (typeof E[S] > "u") {
            if (!i.Object.prototype[S])
              continue;
            E[S] = i.Object.prototype[S];
          }
          if (E[S].indexOf("url(") !== 0) {
            var M = new i.Color(E[S]);
            E[S] = M.setAlpha(e(M.getAlpha() * E[g[S]], 2)).toRgba();
          }
        }
      return E;
    }
    function L(E, S) {
      var M, j = [], z, H, I;
      for (H = 0, I = S.length; H < I; H++)
        M = S[H], z = E.getElementsByTagName(M), j = j.concat(Array.prototype.slice.call(z));
      return j;
    }
    i.parseTransformAttribute = function() {
      function E(Z, he) {
        var ge = i.util.cos(he[0]), pe = i.util.sin(he[0]), Ae = 0, be = 0;
        he.length === 3 && (Ae = he[1], be = he[2]), Z[0] = ge, Z[1] = pe, Z[2] = -pe, Z[3] = ge, Z[4] = Ae - (ge * Ae - pe * be), Z[5] = be - (pe * Ae + ge * be);
      }
      function S(Z, he) {
        var ge = he[0], pe = he.length === 2 ? he[1] : he[0];
        Z[0] = ge, Z[3] = pe;
      }
      function M(Z, he, ge) {
        Z[ge] = Math.tan(i.util.degreesToRadians(he[0]));
      }
      function j(Z, he) {
        Z[4] = he[0], he.length === 2 && (Z[5] = he[1]);
      }
      var z = i.iMatrix, H = i.reNum, I = i.commaWsp, te = "(?:(skewX)\\s*\\(\\s*(" + H + ")\\s*\\))", $ = "(?:(skewY)\\s*\\(\\s*(" + H + ")\\s*\\))", G = "(?:(rotate)\\s*\\(\\s*(" + H + ")(?:" + I + "(" + H + ")" + I + "(" + H + "))?\\s*\\))", F = "(?:(scale)\\s*\\(\\s*(" + H + ")(?:" + I + "(" + H + "))?\\s*\\))", Q = "(?:(translate)\\s*\\(\\s*(" + H + ")(?:" + I + "(" + H + "))?\\s*\\))", J = "(?:(matrix)\\s*\\(\\s*(" + H + ")" + I + "(" + H + ")" + I + "(" + H + ")" + I + "(" + H + ")" + I + "(" + H + ")" + I + "(" + H + ")\\s*\\))", V = "(?:" + J + "|" + Q + "|" + F + "|" + G + "|" + te + "|" + $ + ")", ie = "(?:" + V + "(?:" + I + "*" + V + ")*)", oe = "^\\s*(?:" + ie + "?)\\s*$", ue = new RegExp(oe), ce = new RegExp(V, "g");
      return function(Z) {
        var he = z.concat(), ge = [];
        if (!Z || Z && !ue.test(Z))
          return he;
        Z.replace(ce, function(Ae) {
          var be = new RegExp(V).exec(Ae).filter(function(Ze) {
            return !!Ze;
          }), Le = be[1], ke = be.slice(2).map(parseFloat);
          switch (Le) {
            case "translate":
              j(he, ke);
              break;
            case "rotate":
              ke[0] = i.util.degreesToRadians(ke[0]), E(he, ke);
              break;
            case "scale":
              S(he, ke);
              break;
            case "skewX":
              M(he, ke, 2);
              break;
            case "skewY":
              M(he, ke, 1);
              break;
            case "matrix":
              he = ke;
              break;
          }
          ge.push(he.concat()), he = z.concat();
        });
        for (var pe = ge[0]; ge.length > 1; )
          ge.shift(), pe = i.util.multiplyTransformMatrices(pe, ge[0]);
        return pe;
      };
    }();
    function Y(E, S) {
      var M, j;
      E.replace(/;\s*$/, "").split(";").forEach(function(z) {
        var H = z.split(":");
        M = H[0].trim().toLowerCase(), j = H[1].trim(), S[M] = j;
      });
    }
    function K(E, S) {
      var M, j;
      for (var z in E)
        typeof E[z] > "u" || (M = z.toLowerCase(), j = E[z], S[M] = j);
    }
    function re(E, S) {
      var M = {};
      for (var j in i.cssRules[S])
        if (q(E, j.split(" ")))
          for (var z in i.cssRules[S][j])
            M[z] = i.cssRules[S][j][z];
      return M;
    }
    function q(E, S) {
      var M, j = !0;
      return M = se(E, S.pop()), M && S.length && (j = ee(E, S)), M && j && S.length === 0;
    }
    function ee(E, S) {
      for (var M, j = !0; E.parentNode && E.parentNode.nodeType === 1 && S.length; )
        j && (M = S.pop()), E = E.parentNode, j = se(E, M);
      return S.length === 0;
    }
    function se(E, S) {
      var M = E.nodeName, j = E.getAttribute("class"), z = E.getAttribute("id"), H, I;
      if (H = new RegExp("^" + M, "i"), S = S.replace(H, ""), z && S.length && (H = new RegExp("#" + z + "(?![a-zA-Z\\-]+)", "i"), S = S.replace(H, "")), j && S.length)
        for (j = j.split(" "), I = j.length; I--; )
          H = new RegExp("\\." + j[I] + "(?![a-zA-Z\\-]+)", "i"), S = S.replace(H, "");
      return S.length === 0;
    }
    function ae(E, S) {
      var M;
      if (E.getElementById && (M = E.getElementById(S)), M)
        return M;
      var j, z, H, I = E.getElementsByTagName("*");
      for (z = 0, H = I.length; z < H; z++)
        if (j = I[z], S === j.getAttribute("id"))
          return j;
    }
    function W(E) {
      for (var S = L(E, ["use", "svg:use"]), M = 0; S.length && M < S.length; ) {
        var j = S[M], z = j.getAttribute("xlink:href") || j.getAttribute("href");
        if (z === null)
          return;
        var H = z.slice(1), I = j.getAttribute("x") || 0, te = j.getAttribute("y") || 0, $ = ae(E, H).cloneNode(!0), G = ($.getAttribute("transform") || "") + " translate(" + I + ", " + te + ")", F, Q = S.length, J, V, ie, oe, ue = i.svgNS;
        if (A($), /^svg$/i.test($.nodeName)) {
          var ce = $.ownerDocument.createElementNS(ue, "g");
          for (V = 0, ie = $.attributes, oe = ie.length; V < oe; V++)
            J = ie.item(V), ce.setAttributeNS(ue, J.nodeName, J.nodeValue);
          for (; $.firstChild; )
            ce.appendChild($.firstChild);
          $ = ce;
        }
        for (V = 0, ie = j.attributes, oe = ie.length; V < oe; V++)
          J = ie.item(V), !(J.nodeName === "x" || J.nodeName === "y" || J.nodeName === "xlink:href" || J.nodeName === "href") && (J.nodeName === "transform" ? G = J.nodeValue + " " + G : $.setAttribute(J.nodeName, J.nodeValue));
        $.setAttribute("transform", G), $.setAttribute("instantiated_by_use", "1"), $.removeAttribute("id"), F = j.parentNode, F.replaceChild($, j), S.length === Q && M++;
      }
    }
    var b = new RegExp(
      "^\\s*(" + i.reNum + "+)\\s*,?\\s*(" + i.reNum + "+)\\s*,?\\s*(" + i.reNum + "+)\\s*,?\\s*(" + i.reNum + "+)\\s*$"
    );
    function A(E) {
      if (!i.svgViewBoxElementsRegEx.test(E.nodeName))
        return {};
      var S = E.getAttribute("viewBox"), M = 1, j = 1, z = 0, H = 0, I, te, $, G, F = E.getAttribute("width"), Q = E.getAttribute("height"), J = E.getAttribute("x") || 0, V = E.getAttribute("y") || 0, ie = E.getAttribute("preserveAspectRatio") || "", oe = !S || !(S = S.match(b)), ue = !F || !Q || F === "100%" || Q === "100%", ce = oe && ue, Z = {}, he = "", ge = 0, pe = 0;
      if (Z.width = 0, Z.height = 0, Z.toBeParsed = ce, oe && (J || V) && E.parentNode && E.parentNode.nodeName !== "#document" && (he = " translate(" + r(J) + " " + r(V) + ") ", $ = (E.getAttribute("transform") || "") + he, E.setAttribute("transform", $), E.removeAttribute("x"), E.removeAttribute("y")), ce)
        return Z;
      if (oe)
        return Z.width = r(F), Z.height = r(Q), Z;
      if (z = -parseFloat(S[1]), H = -parseFloat(S[2]), I = parseFloat(S[3]), te = parseFloat(S[4]), Z.minX = z, Z.minY = H, Z.viewBoxWidth = I, Z.viewBoxHeight = te, ue ? (Z.width = I, Z.height = te) : (Z.width = r(F), Z.height = r(Q), M = Z.width / I, j = Z.height / te), ie = i.util.parsePreserveAspectRatioAttribute(ie), ie.alignX !== "none" && (ie.meetOrSlice === "meet" && (j = M = M > j ? j : M), ie.meetOrSlice === "slice" && (j = M = M > j ? M : j), ge = Z.width - I * M, pe = Z.height - te * M, ie.alignX === "Mid" && (ge /= 2), ie.alignY === "Mid" && (pe /= 2), ie.alignX === "Min" && (ge = 0), ie.alignY === "Min" && (pe = 0)), M === 1 && j === 1 && z === 0 && H === 0 && J === 0 && V === 0)
        return Z;
      if ((J || V) && E.parentNode.nodeName !== "#document" && (he = " translate(" + r(J) + " " + r(V) + ") "), $ = he + " matrix(" + M + " 0 0 " + j + " " + (z * M + ge) + " " + (H * j + pe) + ") ", E.nodeName === "svg") {
        for (G = E.ownerDocument.createElementNS(i.svgNS, "g"); E.firstChild; )
          G.appendChild(E.firstChild);
        E.appendChild(G);
      } else
        G = E, G.removeAttribute("x"), G.removeAttribute("y"), $ = G.getAttribute("transform") + $;
      return G.setAttribute("transform", $), Z;
    }
    function P(E, S) {
      for (; E && (E = E.parentNode); )
        if (E.nodeName && S.test(E.nodeName.replace("svg:", "")) && !E.getAttribute("instantiated_by_use"))
          return !0;
      return !1;
    }
    i.parseSVGDocument = function(E, S, M, j) {
      if (E) {
        W(E);
        var z = i.Object.__uid++, H, I, te = A(E), $ = i.util.toArray(E.getElementsByTagName("*"));
        if (te.crossOrigin = j && j.crossOrigin, te.svgUid = z, $.length === 0 && i.isLikelyNode) {
          $ = E.selectNodes('//*[name(.)!="svg"]');
          var G = [];
          for (H = 0, I = $.length; H < I; H++)
            G[H] = $[H];
          $ = G;
        }
        var F = $.filter(function(J) {
          return A(J), i.svgValidTagNamesRegEx.test(J.nodeName.replace("svg:", "")) && !P(J, i.svgInvalidAncestorsRegEx);
        });
        if (!F || F && !F.length) {
          S && S([], {});
          return;
        }
        var Q = {};
        $.filter(function(J) {
          return J.nodeName.replace("svg:", "") === "clipPath";
        }).forEach(function(J) {
          var V = J.getAttribute("id");
          Q[V] = i.util.toArray(J.getElementsByTagName("*")).filter(function(ie) {
            return i.svgValidTagNamesRegEx.test(ie.nodeName.replace("svg:", ""));
          });
        }), i.gradientDefs[z] = i.getGradientDefs(E), i.cssRules[z] = i.getCSSRules(E), i.clipPaths[z] = Q, i.parseElements(F, function(J, V) {
          S && (S(J, te, V, $), delete i.gradientDefs[z], delete i.cssRules[z], delete i.clipPaths[z]);
        }, o(te), M, j);
      }
    };
    function O(E, S) {
      var M = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"], j = "xlink:href", z = S.getAttribute(j).slice(1), H = ae(E, z);
      if (H && H.getAttribute(j) && O(E, H), M.forEach(function(te) {
        H && !S.hasAttribute(te) && H.hasAttribute(te) && S.setAttribute(te, H.getAttribute(te));
      }), !S.children.length)
        for (var I = H.cloneNode(!0); I.firstChild; )
          S.appendChild(I.firstChild);
      S.removeAttribute(j);
    }
    var B = new RegExp(
      "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + i.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + i.reNum + "))?\\s+(.*)"
    );
    a(i, {
      /**
       * Parses a short font declaration, building adding its properties to a style object
       * @static
       * @function
       * @memberOf fabric
       * @param {String} value font declaration
       * @param {Object} oStyle definition
       */
      parseFontDeclaration: function(E, S) {
        var M = E.match(B);
        if (M) {
          var j = M[1], z = M[3], H = M[4], I = M[5], te = M[6];
          j && (S.fontStyle = j), z && (S.fontWeight = isNaN(parseFloat(z)) ? z : parseFloat(z)), H && (S.fontSize = r(H)), te && (S.fontFamily = te), I && (S.lineHeight = I === "normal" ? 1 : I);
        }
      },
      /**
       * Parses an SVG document, returning all of the gradient declarations found in it
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
       */
      getGradientDefs: function(E) {
        var S = [
          "linearGradient",
          "radialGradient",
          "svg:linearGradient",
          "svg:radialGradient"
        ], M = L(E, S), j, z = 0, H = {};
        for (z = M.length; z--; )
          j = M[z], j.getAttribute("xlink:href") && O(E, j), H[j.getAttribute("id")] = j;
        return H;
      },
      /**
       * Returns an object of attributes' name/value, given element and an array of attribute names;
       * Parses parent "g" nodes recursively upwards.
       * @static
       * @memberOf fabric
       * @param {DOMElement} element Element to parse
       * @param {Array} attributes Array of attributes to parse
       * @return {Object} object containing parsed attributes' names/values
       */
      parseAttributes: function(E, S, M) {
        if (E) {
          var j, z = {}, H, I;
          typeof M > "u" && (M = E.getAttribute("svgUid")), E.parentNode && i.svgValidParentsRegEx.test(E.parentNode.nodeName) && (z = i.parseAttributes(E.parentNode, S, M));
          var te = S.reduce(function(ie, oe) {
            return j = E.getAttribute(oe), j && (ie[oe] = j), ie;
          }, {}), $ = a(
            re(E, M),
            i.parseStyleAttribute(E)
          );
          te = a(
            te,
            $
          ), $[m] && E.setAttribute(m, $[m]), H = I = z.fontSize || i.Text.DEFAULT_SVG_FONT_SIZE, te[p] && (te[p] = H = r(te[p], I));
          var G, F, Q = {};
          for (var J in te)
            G = C(J), F = w(G, te[J], z, H), Q[G] = F;
          Q && Q.font && i.parseFontDeclaration(Q.font, Q);
          var V = a(z, Q);
          return i.svgValidParentsRegEx.test(E.nodeName) ? V : k(V);
        }
      },
      /**
       * Transforms an array of svg elements to corresponding fabric.* instances
       * @static
       * @memberOf fabric
       * @param {Array} elements Array of elements to parse
       * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
       * @param {Object} [options] Options object
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       */
      parseElements: function(E, S, M, j, z) {
        new i.ElementsParser(E, S, M, j, z).parse();
      },
      /**
       * Parses "style" attribute, retuning an object with values
       * @static
       * @memberOf fabric
       * @param {SVGElement} element Element to parse
       * @return {Object} Objects with values parsed from style attribute of an element
       */
      parseStyleAttribute: function(E) {
        var S = {}, M = E.getAttribute("style");
        return M && (typeof M == "string" ? Y(M, S) : K(M, S)), S;
      },
      /**
       * Parses "points" attribute, returning an array of values
       * @static
       * @memberOf fabric
       * @param {String} points points attribute string
       * @return {Array} array of points
       */
      parsePointsAttribute: function(E) {
        if (!E)
          return null;
        E = E.replace(/,/g, " ").trim(), E = E.split(/\s+/);
        var S = [], M, j;
        for (M = 0, j = E.length; M < j; M += 2)
          S.push({
            x: parseFloat(E[M]),
            y: parseFloat(E[M + 1])
          });
        return S;
      },
      /**
       * Returns CSS rules for a given SVG document
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} CSS rules of this document
       */
      getCSSRules: function(E) {
        var S = E.getElementsByTagName("style"), M, j, z = {}, H;
        for (M = 0, j = S.length; M < j; M++) {
          var I = S[M].textContent;
          I = I.replace(/\/\*[\s\S]*?\*\//g, ""), I.trim() !== "" && (H = I.split("}"), H = H.filter(function(te) {
            return te.trim();
          }), H.forEach(function(te) {
            var $ = te.split("{"), G = {}, F = $[1].trim(), Q = F.split(";").filter(function(oe) {
              return oe.trim();
            });
            for (M = 0, j = Q.length; M < j; M++) {
              var J = Q[M].split(":"), V = J[0].trim(), ie = J[1].trim();
              G[V] = ie;
            }
            te = $[0].trim(), te.split(",").forEach(function(oe) {
              oe = oe.replace(/^svg/i, "").trim(), oe !== "" && (z[oe] ? i.util.object.extend(z[oe], G) : z[oe] = i.util.object.clone(G));
            });
          }));
        }
        return z;
      },
      /**
       * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
       * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
       * @memberOf fabric
       * @param {String} url
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromURL: function(E, S, M, j) {
        E = E.replace(/^\n\s*/, "").trim(), new i.util.request(E, {
          method: "get",
          onComplete: z
        });
        function z(H) {
          var I = H.responseXML;
          if (!I || !I.documentElement)
            return S && S(null), !1;
          i.parseSVGDocument(I.documentElement, function(te, $, G, F) {
            S && S(te, $, G, F);
          }, M, j);
        }
      },
      /**
       * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
       * @memberOf fabric
       * @param {String} string
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromString: function(E, S, M, j) {
        var z = new i.window.DOMParser(), H = z.parseFromString(E.trim(), "text/xml");
        i.parseSVGDocument(H.documentElement, function(I, te, $, G) {
          S(I, te, $, G);
        }, M, j);
      }
    });
  }(d), c.ElementsParser = function(u, i, a, o, e, r) {
    this.elements = u, this.callback = i, this.options = a, this.reviver = o, this.svgUid = a && a.svgUid || 0, this.parsingOptions = e, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = r;
  }, function(u) {
    u.parse = function() {
      this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
    }, u.createObjects = function() {
      var i = this;
      this.elements.forEach(function(a, o) {
        a.setAttribute("svgUid", i.svgUid), i.createObject(a, o);
      });
    }, u.findTag = function(i) {
      return c[c.util.string.capitalize(i.tagName.replace("svg:", ""))];
    }, u.createObject = function(i, a) {
      var o = this.findTag(i);
      if (o && o.fromElement)
        try {
          o.fromElement(i, this.createCallback(a, i), this.options);
        } catch (e) {
          c.log(e);
        }
      else
        this.checkIfDone();
    }, u.createCallback = function(i, a) {
      var o = this;
      return function(e) {
        var r;
        o.resolveGradient(e, a, "fill"), o.resolveGradient(e, a, "stroke"), e instanceof c.Image && e._originalElement && (r = e.parsePreserveAspectRatioAttribute(a)), e._removeTransformMatrix(r), o.resolveClipPath(e, a), o.reviver && o.reviver(a, e), o.instances[i] = e, o.checkIfDone();
      };
    }, u.extractPropertyDefinition = function(i, a, o) {
      var e = i[a], r = this.regexUrl;
      if (r.test(e)) {
        r.lastIndex = 0;
        var t = r.exec(e)[1];
        return r.lastIndex = 0, c[o][this.svgUid][t];
      }
    }, u.resolveGradient = function(i, a, o) {
      var e = this.extractPropertyDefinition(i, o, "gradientDefs");
      if (e) {
        var r = a.getAttribute(o + "-opacity"), t = c.Gradient.fromElement(e, i, r, this.options);
        i.set(o, t);
      }
    }, u.createClipPathCallback = function(i, a) {
      return function(o) {
        o._removeTransformMatrix(), o.fillRule = o.clipRule, a.push(o);
      };
    }, u.resolveClipPath = function(i, a) {
      var o = this.extractPropertyDefinition(i, "clipPath", "clipPaths"), e, r, t, s, l, n;
      if (o) {
        s = [], t = c.util.invertTransform(i.calcTransformMatrix());
        for (var h = o[0].parentNode, f = a; f.parentNode && f.getAttribute("clip-path") !== i.clipPath; )
          f = f.parentNode;
        f.parentNode.appendChild(h);
        for (var g = 0; g < o.length; g++)
          e = o[g], r = this.findTag(e), r.fromElement(
            e,
            this.createClipPathCallback(i, s),
            this.options
          );
        s.length === 1 ? o = s[0] : o = new c.Group(s), l = c.util.multiplyTransformMatrices(
          t,
          o.calcTransformMatrix()
        ), o.clipPath && this.resolveClipPath(o, f);
        var n = c.util.qrDecompose(l);
        o.flipX = !1, o.flipY = !1, o.set("scaleX", n.scaleX), o.set("scaleY", n.scaleY), o.angle = n.angle, o.skewX = n.skewX, o.skewY = 0, o.setPositionByOrigin({ x: n.translateX, y: n.translateY }, "center", "center"), i.clipPath = o;
      } else
        delete i.clipPath;
    }, u.checkIfDone = function() {
      --this.numElements === 0 && (this.instances = this.instances.filter(function(i) {
        return i != null;
      }), this.callback(this.instances, this.elements));
    };
  }(c.ElementsParser.prototype), function(u) {
    var i = u.fabric || (u.fabric = {});
    if (i.Point) {
      i.warn("fabric.Point is already defined");
      return;
    }
    i.Point = a;
    function a(o, e) {
      this.x = o, this.y = e;
    }
    a.prototype = /** @lends fabric.Point.prototype */
    {
      type: "point",
      constructor: a,
      /**
       * Adds another point to this one and returns another one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point instance with added values
       */
      add: function(o) {
        return new a(this.x + o.x, this.y + o.y);
      },
      /**
       * Adds another point to this one
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      addEquals: function(o) {
        return this.x += o.x, this.y += o.y, this;
      },
      /**
       * Adds value to this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point} new Point with added value
       */
      scalarAdd: function(o) {
        return new a(this.x + o, this.y + o);
      },
      /**
       * Adds value to this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarAddEquals: function(o) {
        return this.x += o, this.y += o, this;
      },
      /**
       * Subtracts another point from this point and returns a new one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point object with subtracted values
       */
      subtract: function(o) {
        return new a(this.x - o.x, this.y - o.y);
      },
      /**
       * Subtracts another point from this point
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      subtractEquals: function(o) {
        return this.x -= o.x, this.y -= o.y, this;
      },
      /**
       * Subtracts value from this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      scalarSubtract: function(o) {
        return new a(this.x - o, this.y - o);
      },
      /**
       * Subtracts value from this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarSubtractEquals: function(o) {
        return this.x -= o, this.y -= o, this;
      },
      /**
       * Multiplies this point by a value and returns a new one
       * TODO: rename in scalarMultiply in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      multiply: function(o) {
        return new a(this.x * o, this.y * o);
      },
      /**
       * Multiplies this point by a value
       * TODO: rename in scalarMultiplyEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      multiplyEquals: function(o) {
        return this.x *= o, this.y *= o, this;
      },
      /**
       * Divides this point by a value and returns a new one
       * TODO: rename in scalarDivide in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      divide: function(o) {
        return new a(this.x / o, this.y / o);
      },
      /**
       * Divides this point by a value
       * TODO: rename in scalarDivideEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      divideEquals: function(o) {
        return this.x /= o, this.y /= o, this;
      },
      /**
       * Returns true if this point is equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      eq: function(o) {
        return this.x === o.x && this.y === o.y;
      },
      /**
       * Returns true if this point is less than another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lt: function(o) {
        return this.x < o.x && this.y < o.y;
      },
      /**
       * Returns true if this point is less than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lte: function(o) {
        return this.x <= o.x && this.y <= o.y;
      },
      /**
      
      	     * Returns true if this point is greater another one
      	     * @param {fabric.Point} that
      	     * @return {Boolean}
      	     */
      gt: function(o) {
        return this.x > o.x && this.y > o.y;
      },
      /**
       * Returns true if this point is greater than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      gte: function(o) {
        return this.x >= o.x && this.y >= o.y;
      },
      /**
       * Returns new point which is the result of linear interpolation with this one and another one
       * @param {fabric.Point} that
       * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
       * @return {fabric.Point}
       */
      lerp: function(o, e) {
        return typeof e > "u" && (e = 0.5), e = Math.max(Math.min(1, e), 0), new a(this.x + (o.x - this.x) * e, this.y + (o.y - this.y) * e);
      },
      /**
       * Returns distance from this point and another one
       * @param {fabric.Point} that
       * @return {Number}
       */
      distanceFrom: function(o) {
        var e = this.x - o.x, r = this.y - o.y;
        return Math.sqrt(e * e + r * r);
      },
      /**
       * Returns the point between this point and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      midPointFrom: function(o) {
        return this.lerp(o);
      },
      /**
       * Returns a new point which is the min of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      min: function(o) {
        return new a(Math.min(this.x, o.x), Math.min(this.y, o.y));
      },
      /**
       * Returns a new point which is the max of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      max: function(o) {
        return new a(Math.max(this.x, o.x), Math.max(this.y, o.y));
      },
      /**
       * Returns string representation of this point
       * @return {String}
       */
      toString: function() {
        return this.x + "," + this.y;
      },
      /**
       * Sets x/y of this point
       * @param {Number} x
       * @param {Number} y
       * @chainable
       */
      setXY: function(o, e) {
        return this.x = o, this.y = e, this;
      },
      /**
       * Sets x of this point
       * @param {Number} x
       * @chainable
       */
      setX: function(o) {
        return this.x = o, this;
      },
      /**
       * Sets y of this point
       * @param {Number} y
       * @chainable
       */
      setY: function(o) {
        return this.y = o, this;
      },
      /**
       * Sets x/y of this point from another point
       * @param {fabric.Point} that
       * @chainable
       */
      setFromPoint: function(o) {
        return this.x = o.x, this.y = o.y, this;
      },
      /**
       * Swaps x/y of this point and another point
       * @param {fabric.Point} that
       */
      swap: function(o) {
        var e = this.x, r = this.y;
        this.x = o.x, this.y = o.y, o.x = e, o.y = r;
      },
      /**
       * return a cloned instance of the point
       * @return {fabric.Point}
       */
      clone: function() {
        return new a(this.x, this.y);
      }
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {});
    if (i.Intersection) {
      i.warn("fabric.Intersection is already defined");
      return;
    }
    function a(o) {
      this.status = o, this.points = [];
    }
    i.Intersection = a, i.Intersection.prototype = /** @lends fabric.Intersection.prototype */
    {
      constructor: a,
      /**
       * Appends a point to intersection
       * @param {fabric.Point} point
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoint: function(o) {
        return this.points.push(o), this;
      },
      /**
       * Appends points to intersection
       * @param {Array} points
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoints: function(o) {
        return this.points = this.points.concat(o), this;
      }
    }, i.Intersection.intersectLineLine = function(o, e, r, t) {
      var s, l = (t.x - r.x) * (o.y - r.y) - (t.y - r.y) * (o.x - r.x), n = (e.x - o.x) * (o.y - r.y) - (e.y - o.y) * (o.x - r.x), h = (t.y - r.y) * (e.x - o.x) - (t.x - r.x) * (e.y - o.y);
      if (h !== 0) {
        var f = l / h, g = n / h;
        0 <= f && f <= 1 && 0 <= g && g <= 1 ? (s = new a("Intersection"), s.appendPoint(new i.Point(o.x + f * (e.x - o.x), o.y + f * (e.y - o.y)))) : s = new a();
      } else
        l === 0 || n === 0 ? s = new a("Coincident") : s = new a("Parallel");
      return s;
    }, i.Intersection.intersectLinePolygon = function(o, e, r) {
      var t = new a(), s = r.length, l, n, h, f;
      for (f = 0; f < s; f++)
        l = r[f], n = r[(f + 1) % s], h = a.intersectLineLine(o, e, l, n), t.appendPoints(h.points);
      return t.points.length > 0 && (t.status = "Intersection"), t;
    }, i.Intersection.intersectPolygonPolygon = function(o, e) {
      var r = new a(), t = o.length, s;
      for (s = 0; s < t; s++) {
        var l = o[s], n = o[(s + 1) % t], h = a.intersectLinePolygon(l, n, e);
        r.appendPoints(h.points);
      }
      return r.points.length > 0 && (r.status = "Intersection"), r;
    }, i.Intersection.intersectPolygonRectangle = function(o, e, r) {
      var t = e.min(r), s = e.max(r), l = new i.Point(s.x, t.y), n = new i.Point(t.x, s.y), h = a.intersectLinePolygon(t, l, o), f = a.intersectLinePolygon(l, s, o), g = a.intersectLinePolygon(s, n, o), p = a.intersectLinePolygon(n, t, o), m = new a();
      return m.appendPoints(h.points), m.appendPoints(f.points), m.appendPoints(g.points), m.appendPoints(p.points), m.points.length > 0 && (m.status = "Intersection"), m;
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {});
    if (i.Color) {
      i.warn("fabric.Color is already defined.");
      return;
    }
    function a(e) {
      e ? this._tryParsingColor(e) : this.setSource([0, 0, 0, 1]);
    }
    i.Color = a, i.Color.prototype = /** @lends fabric.Color.prototype */
    {
      /**
       * @private
       * @param {String|Array} color Color value to parse
       */
      _tryParsingColor: function(e) {
        var r;
        e in a.colorNameMap && (e = a.colorNameMap[e]), e === "transparent" && (r = [255, 255, 255, 0]), r || (r = a.sourceFromHex(e)), r || (r = a.sourceFromRgb(e)), r || (r = a.sourceFromHsl(e)), r || (r = [0, 0, 0, 1]), r && this.setSource(r);
      },
      /**
       * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
       * @private
       * @param {Number} r Red color value
       * @param {Number} g Green color value
       * @param {Number} b Blue color value
       * @return {Array} Hsl color
       */
      _rgbToHsl: function(e, r, t) {
        e /= 255, r /= 255, t /= 255;
        var s, l, n, h = i.util.array.max([e, r, t]), f = i.util.array.min([e, r, t]);
        if (n = (h + f) / 2, h === f)
          s = l = 0;
        else {
          var g = h - f;
          switch (l = n > 0.5 ? g / (2 - h - f) : g / (h + f), h) {
            case e:
              s = (r - t) / g + (r < t ? 6 : 0);
              break;
            case r:
              s = (t - e) / g + 2;
              break;
            case t:
              s = (e - r) / g + 4;
              break;
          }
          s /= 6;
        }
        return [
          Math.round(s * 360),
          Math.round(l * 100),
          Math.round(n * 100)
        ];
      },
      /**
       * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @return {Array}
       */
      getSource: function() {
        return this._source;
      },
      /**
       * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @param {Array} source
       */
      setSource: function(e) {
        this._source = e;
      },
      /**
       * Returns color representation in RGB format
       * @return {String} ex: rgb(0-255,0-255,0-255)
       */
      toRgb: function() {
        var e = this.getSource();
        return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")";
      },
      /**
       * Returns color representation in RGBA format
       * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
       */
      toRgba: function() {
        var e = this.getSource();
        return "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + e[3] + ")";
      },
      /**
       * Returns color representation in HSL format
       * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
       */
      toHsl: function() {
        var e = this.getSource(), r = this._rgbToHsl(e[0], e[1], e[2]);
        return "hsl(" + r[0] + "," + r[1] + "%," + r[2] + "%)";
      },
      /**
       * Returns color representation in HSLA format
       * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
       */
      toHsla: function() {
        var e = this.getSource(), r = this._rgbToHsl(e[0], e[1], e[2]);
        return "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + e[3] + ")";
      },
      /**
       * Returns color representation in HEX format
       * @return {String} ex: FF5555
       */
      toHex: function() {
        var e = this.getSource(), r, t, s;
        return r = e[0].toString(16), r = r.length === 1 ? "0" + r : r, t = e[1].toString(16), t = t.length === 1 ? "0" + t : t, s = e[2].toString(16), s = s.length === 1 ? "0" + s : s, r.toUpperCase() + t.toUpperCase() + s.toUpperCase();
      },
      /**
       * Returns color representation in HEXA format
       * @return {String} ex: FF5555CC
       */
      toHexa: function() {
        var e = this.getSource(), r;
        return r = Math.round(e[3] * 255), r = r.toString(16), r = r.length === 1 ? "0" + r : r, this.toHex() + r.toUpperCase();
      },
      /**
       * Gets value of alpha channel for this color
       * @return {Number} 0-1
       */
      getAlpha: function() {
        return this.getSource()[3];
      },
      /**
       * Sets value of alpha channel for this color
       * @param {Number} alpha Alpha value 0-1
       * @return {fabric.Color} thisArg
       */
      setAlpha: function(e) {
        var r = this.getSource();
        return r[3] = e, this.setSource(r), this;
      },
      /**
       * Transforms color to its grayscale representation
       * @return {fabric.Color} thisArg
       */
      toGrayscale: function() {
        var e = this.getSource(), r = parseInt((e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11).toFixed(0), 10), t = e[3];
        return this.setSource([r, r, r, t]), this;
      },
      /**
       * Transforms color to its black and white representation
       * @param {Number} threshold
       * @return {fabric.Color} thisArg
       */
      toBlackWhite: function(e) {
        var r = this.getSource(), t = (r[0] * 0.3 + r[1] * 0.59 + r[2] * 0.11).toFixed(0), s = r[3];
        return e = e || 127, t = Number(t) < Number(e) ? 0 : 255, this.setSource([t, t, t, s]), this;
      },
      /**
       * Overlays color with another color
       * @param {String|fabric.Color} otherColor
       * @return {fabric.Color} thisArg
       */
      overlayWith: function(e) {
        e instanceof a || (e = new a(e));
        var r = [], t = this.getAlpha(), s = 0.5, l = this.getSource(), n = e.getSource(), h;
        for (h = 0; h < 3; h++)
          r.push(Math.round(l[h] * (1 - s) + n[h] * s));
        return r[3] = t, this.setSource(r), this;
      }
    }, i.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, i.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, i.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, i.Color.colorNameMap = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgrey: "#A9A9A9",
      darkgreen: "#006400",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgrey: "#D3D3D3",
      lightgreen: "#90EE90",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };
    function o(e, r, t) {
      return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (r - e) * 6 * t : t < 1 / 2 ? r : t < 2 / 3 ? e + (r - e) * (2 / 3 - t) * 6 : e;
    }
    i.Color.fromRgb = function(e) {
      return a.fromSource(a.sourceFromRgb(e));
    }, i.Color.sourceFromRgb = function(e) {
      var r = e.match(a.reRGBa);
      if (r) {
        var t = parseInt(r[1], 10) / (/%$/.test(r[1]) ? 100 : 1) * (/%$/.test(r[1]) ? 255 : 1), s = parseInt(r[2], 10) / (/%$/.test(r[2]) ? 100 : 1) * (/%$/.test(r[2]) ? 255 : 1), l = parseInt(r[3], 10) / (/%$/.test(r[3]) ? 100 : 1) * (/%$/.test(r[3]) ? 255 : 1);
        return [
          parseInt(t, 10),
          parseInt(s, 10),
          parseInt(l, 10),
          r[4] ? parseFloat(r[4]) : 1
        ];
      }
    }, i.Color.fromRgba = a.fromRgb, i.Color.fromHsl = function(e) {
      return a.fromSource(a.sourceFromHsl(e));
    }, i.Color.sourceFromHsl = function(e) {
      var r = e.match(a.reHSLa);
      if (r) {
        var t = (parseFloat(r[1]) % 360 + 360) % 360 / 360, s = parseFloat(r[2]) / (/%$/.test(r[2]) ? 100 : 1), l = parseFloat(r[3]) / (/%$/.test(r[3]) ? 100 : 1), n, h, f;
        if (s === 0)
          n = h = f = l;
        else {
          var g = l <= 0.5 ? l * (s + 1) : l + s - l * s, p = l * 2 - g;
          n = o(p, g, t + 1 / 3), h = o(p, g, t), f = o(p, g, t - 1 / 3);
        }
        return [
          Math.round(n * 255),
          Math.round(h * 255),
          Math.round(f * 255),
          r[4] ? parseFloat(r[4]) : 1
        ];
      }
    }, i.Color.fromHsla = a.fromHsl, i.Color.fromHex = function(e) {
      return a.fromSource(a.sourceFromHex(e));
    }, i.Color.sourceFromHex = function(e) {
      if (e.match(a.reHex)) {
        var r = e.slice(e.indexOf("#") + 1), t = r.length === 3 || r.length === 4, s = r.length === 8 || r.length === 4, l = t ? r.charAt(0) + r.charAt(0) : r.substring(0, 2), n = t ? r.charAt(1) + r.charAt(1) : r.substring(2, 4), h = t ? r.charAt(2) + r.charAt(2) : r.substring(4, 6), f = s ? t ? r.charAt(3) + r.charAt(3) : r.substring(6, 8) : "FF";
        return [
          parseInt(l, 16),
          parseInt(n, 16),
          parseInt(h, 16),
          parseFloat((parseInt(f, 16) / 255).toFixed(2))
        ];
      }
    }, i.Color.fromSource = function(e) {
      var r = new a();
      return r.setSource(e), r;
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], o = ["ns", "nesw", "ew", "nwse"], e = {}, r = "left", t = "top", s = "right", l = "bottom", n = "center", h = {
      top: l,
      bottom: t,
      left: s,
      right: r,
      center: n
    }, f = i.util.radiansToDegrees, g = Math.sign || function(G) {
      return (G > 0) - (G < 0) || +G;
    };
    function p(G, F) {
      var Q = G.angle + f(Math.atan2(F.y, F.x)) + 360;
      return Math.round(Q % 360 / 45);
    }
    function m(G, F) {
      var Q = F.transform.target, J = Q.canvas, V = i.util.object.clone(F);
      V.target = Q, J && J.fire("object:" + G, V), Q.fire(G, F);
    }
    function C(G, F) {
      var Q = F.canvas, J = Q.uniScaleKey, V = G[J];
      return Q.uniformScaling && !V || !Q.uniformScaling && V;
    }
    function w(G) {
      return G.originX === n && G.originY === n;
    }
    function x(G, F, Q) {
      var J = G.lockScalingX, V = G.lockScalingY;
      return !!(J && V || !F && (J || V) && Q || J && F === "x" || V && F === "y");
    }
    function k(G, F, Q) {
      var J = "not-allowed", V = C(G, Q), ie = "";
      if (F.x !== 0 && F.y === 0 ? ie = "x" : F.x === 0 && F.y !== 0 && (ie = "y"), x(Q, ie, V))
        return J;
      var oe = p(Q, F);
      return a[oe] + "-resize";
    }
    function L(G, F, Q) {
      var J = "not-allowed";
      if (F.x !== 0 && Q.lockSkewingY || F.y !== 0 && Q.lockSkewingX)
        return J;
      var V = p(Q, F) % 4;
      return o[V] + "-resize";
    }
    function Y(G, F, Q) {
      return G[Q.canvas.altActionKey] ? e.skewCursorStyleHandler(G, F, Q) : e.scaleCursorStyleHandler(G, F, Q);
    }
    function K(G, F, Q) {
      var J = G[Q.canvas.altActionKey];
      if (F.x === 0)
        return J ? "skewX" : "scaleY";
      if (F.y === 0)
        return J ? "skewY" : "scaleX";
    }
    function re(G, F, Q) {
      return Q.lockRotation ? "not-allowed" : F.cursorStyle;
    }
    function q(G, F, Q, J) {
      return {
        e: G,
        transform: F,
        pointer: {
          x: Q,
          y: J
        }
      };
    }
    function ee(G) {
      return function(F, Q, J, V) {
        var ie = Q.target, oe = ie.getCenterPoint(), ue = ie.translateToOriginPoint(oe, Q.originX, Q.originY), ce = G(F, Q, J, V);
        return ie.setPositionByOrigin(ue, Q.originX, Q.originY), ce;
      };
    }
    function se(G, F) {
      return function(Q, J, V, ie) {
        var oe = F(Q, J, V, ie);
        return oe && m(G, q(Q, J, V, ie)), oe;
      };
    }
    function ae(G, F, Q, J, V) {
      var ie = G.target, oe = ie.controls[G.corner], ue = ie.canvas.getZoom(), ce = ie.padding / ue, Z = ie.toLocalPoint(new i.Point(J, V), F, Q);
      return Z.x >= ce && (Z.x -= ce), Z.x <= -ce && (Z.x += ce), Z.y >= ce && (Z.y -= ce), Z.y <= ce && (Z.y += ce), Z.x -= oe.offsetX, Z.y -= oe.offsetY, Z;
    }
    function W(G) {
      return G.flipX !== G.flipY;
    }
    function b(G, F, Q, J, V) {
      if (G[F] !== 0) {
        var ie = G._getTransformedDimensions()[J], oe = V / ie * G[Q];
        G.set(Q, oe);
      }
    }
    function A(G, F, Q, J) {
      var V = F.target, ie = V._getTransformedDimensions(0, V.skewY), oe = ae(F, F.originX, F.originY, Q, J), ue = Math.abs(oe.x * 2) - ie.x, ce = V.skewX, Z;
      ue < 2 ? Z = 0 : (Z = f(
        Math.atan2(ue / V.scaleX, ie.y / V.scaleY)
      ), F.originX === r && F.originY === l && (Z = -Z), F.originX === s && F.originY === t && (Z = -Z), W(V) && (Z = -Z));
      var he = ce !== Z;
      if (he) {
        var ge = V._getTransformedDimensions().y;
        V.set("skewX", Z), b(V, "skewY", "scaleY", "y", ge);
      }
      return he;
    }
    function P(G, F, Q, J) {
      var V = F.target, ie = V._getTransformedDimensions(V.skewX, 0), oe = ae(F, F.originX, F.originY, Q, J), ue = Math.abs(oe.y * 2) - ie.y, ce = V.skewY, Z;
      ue < 2 ? Z = 0 : (Z = f(
        Math.atan2(ue / V.scaleY, ie.x / V.scaleX)
      ), F.originX === r && F.originY === l && (Z = -Z), F.originX === s && F.originY === t && (Z = -Z), W(V) && (Z = -Z));
      var he = ce !== Z;
      if (he) {
        var ge = V._getTransformedDimensions().x;
        V.set("skewY", Z), b(V, "skewX", "scaleX", "x", ge);
      }
      return he;
    }
    function O(G, F, Q, J) {
      var V = F.target, ie = V.skewX, oe, ue = F.originY;
      if (V.lockSkewingX)
        return !1;
      if (ie === 0) {
        var ce = ae(F, n, n, Q, J);
        ce.x > 0 ? oe = r : oe = s;
      } else
        ie > 0 && (oe = ue === t ? r : s), ie < 0 && (oe = ue === t ? s : r), W(V) && (oe = oe === r ? s : r);
      F.originX = oe;
      var Z = se("skewing", ee(A));
      return Z(G, F, Q, J);
    }
    function B(G, F, Q, J) {
      var V = F.target, ie = V.skewY, oe, ue = F.originX;
      if (V.lockSkewingY)
        return !1;
      if (ie === 0) {
        var ce = ae(F, n, n, Q, J);
        ce.y > 0 ? oe = t : oe = l;
      } else
        ie > 0 && (oe = ue === r ? t : l), ie < 0 && (oe = ue === r ? l : t), W(V) && (oe = oe === t ? l : t);
      F.originY = oe;
      var Z = se("skewing", ee(P));
      return Z(G, F, Q, J);
    }
    function E(G, F, Q, J) {
      var V = F, ie = V.target, oe = ie.translateToOriginPoint(ie.getCenterPoint(), V.originX, V.originY);
      if (ie.lockRotation)
        return !1;
      var ue = Math.atan2(V.ey - oe.y, V.ex - oe.x), ce = Math.atan2(J - oe.y, Q - oe.x), Z = f(ce - ue + V.theta), he = !0;
      if (ie.snapAngle > 0) {
        var ge = ie.snapAngle, pe = ie.snapThreshold || ge, Ae = Math.ceil(Z / ge) * ge, be = Math.floor(Z / ge) * ge;
        Math.abs(Z - be) < pe ? Z = be : Math.abs(Z - Ae) < pe && (Z = Ae);
      }
      return Z < 0 && (Z = 360 + Z), Z %= 360, he = ie.angle !== Z, ie.angle = Z, he;
    }
    function S(G, F, Q, J, V) {
      V = V || {};
      var ie = F.target, oe = ie.lockScalingX, ue = ie.lockScalingY, ce = V.by, Z, he, ge, pe, Ae = C(G, ie), be = x(ie, ce, Ae), Le, ke, Ze = F.gestureScale;
      if (be)
        return !1;
      if (Ze)
        he = F.scaleX * Ze, ge = F.scaleY * Ze;
      else {
        if (Z = ae(F, F.originX, F.originY, Q, J), Le = ce !== "y" ? g(Z.x) : 1, ke = ce !== "x" ? g(Z.y) : 1, F.signX || (F.signX = Le), F.signY || (F.signY = ke), ie.lockScalingFlip && (F.signX !== Le || F.signY !== ke))
          return !1;
        if (pe = ie._getTransformedDimensions(), Ae && !ce) {
          var ct = Math.abs(Z.x) + Math.abs(Z.y), Ue = F.original, Qt = Math.abs(pe.x * Ue.scaleX / ie.scaleX) + Math.abs(pe.y * Ue.scaleY / ie.scaleY), Rt = ct / Qt;
          he = Ue.scaleX * Rt, ge = Ue.scaleY * Rt;
        } else
          he = Math.abs(Z.x * ie.scaleX / pe.x), ge = Math.abs(Z.y * ie.scaleY / pe.y);
        w(F) && (he *= 2, ge *= 2), F.signX !== Le && ce !== "y" && (F.originX = h[F.originX], he *= -1, F.signX = Le), F.signY !== ke && ce !== "x" && (F.originY = h[F.originY], ge *= -1, F.signY = ke);
      }
      var Jt = ie.scaleX, Zt = ie.scaleY;
      return ce ? (ce === "x" && ie.set("scaleX", he), ce === "y" && ie.set("scaleY", ge)) : (!oe && ie.set("scaleX", he), !ue && ie.set("scaleY", ge)), Jt !== ie.scaleX || Zt !== ie.scaleY;
    }
    function M(G, F, Q, J) {
      return S(G, F, Q, J);
    }
    function j(G, F, Q, J) {
      return S(G, F, Q, J, { by: "x" });
    }
    function z(G, F, Q, J) {
      return S(G, F, Q, J, { by: "y" });
    }
    function H(G, F, Q, J) {
      return G[F.target.canvas.altActionKey] ? e.skewHandlerX(G, F, Q, J) : e.scalingY(G, F, Q, J);
    }
    function I(G, F, Q, J) {
      return G[F.target.canvas.altActionKey] ? e.skewHandlerY(G, F, Q, J) : e.scalingX(G, F, Q, J);
    }
    function te(G, F, Q, J) {
      var V = F.target, ie = ae(F, F.originX, F.originY, Q, J), oe = V.strokeWidth / (V.strokeUniform ? V.scaleX : 1), ue = w(F) ? 2 : 1, ce = V.width, Z = Math.abs(ie.x * ue / V.scaleX) - oe;
      return V.set("width", Math.max(Z, 0)), ce !== Z;
    }
    function $(G, F, Q, J) {
      var V = F.target, ie = Q - F.offsetX, oe = J - F.offsetY, ue = !V.get("lockMovementX") && V.left !== ie, ce = !V.get("lockMovementY") && V.top !== oe;
      return ue && V.set("left", ie), ce && V.set("top", oe), (ue || ce) && m("moving", q(G, F, Q, J)), ue || ce;
    }
    e.scaleCursorStyleHandler = k, e.skewCursorStyleHandler = L, e.scaleSkewCursorStyleHandler = Y, e.rotationWithSnapping = se("rotating", ee(E)), e.scalingEqually = se("scaling", ee(M)), e.scalingX = se("scaling", ee(j)), e.scalingY = se("scaling", ee(z)), e.scalingYOrSkewingX = H, e.scalingXOrSkewingY = I, e.changeWidth = se("resizing", ee(te)), e.skewHandlerX = O, e.skewHandlerY = B, e.dragHandler = $, e.scaleOrSkewActionName = K, e.rotationStyleHandler = re, e.fireEvent = m, e.wrapWithFixedAnchor = ee, e.wrapWithFireEvent = se, e.getLocalPoint = ae, i.controlsUtils = e;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.degreesToRadians, o = i.controlsUtils;
    function e(t, s, l, n, h) {
      n = n || {};
      var f = this.sizeX || n.cornerSize || h.cornerSize, g = this.sizeY || n.cornerSize || h.cornerSize, p = typeof n.transparentCorners < "u" ? n.transparentCorners : h.transparentCorners, m = p ? "stroke" : "fill", C = !p && (n.cornerStrokeColor || h.cornerStrokeColor), w = s, x = l, k;
      t.save(), t.fillStyle = n.cornerColor || h.cornerColor, t.strokeStyle = n.cornerStrokeColor || h.cornerStrokeColor, f > g ? (k = f, t.scale(1, g / f), x = l * f / g) : g > f ? (k = g, t.scale(f / g, 1), w = s * g / f) : k = f, t.lineWidth = 1, t.beginPath(), t.arc(w, x, k / 2, 0, 2 * Math.PI, !1), t[m](), C && t.stroke(), t.restore();
    }
    function r(t, s, l, n, h) {
      n = n || {};
      var f = this.sizeX || n.cornerSize || h.cornerSize, g = this.sizeY || n.cornerSize || h.cornerSize, p = typeof n.transparentCorners < "u" ? n.transparentCorners : h.transparentCorners, m = p ? "stroke" : "fill", C = !p && (n.cornerStrokeColor || h.cornerStrokeColor), w = f / 2, x = g / 2;
      t.save(), t.fillStyle = n.cornerColor || h.cornerColor, t.strokeStyle = n.cornerStrokeColor || h.cornerStrokeColor, t.lineWidth = 1, t.translate(s, l), t.rotate(a(h.angle)), t[m + "Rect"](-w, -x, f, g), C && t.strokeRect(-w, -x, f, g), t.restore();
    }
    o.renderCircleControl = e, o.renderSquareControl = r;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {});
    function a(o) {
      for (var e in o)
        this[e] = o[e];
    }
    i.Control = a, i.Control.prototype = /** @lends fabric.Control.prototype */
    {
      /**
       * keep track of control visibility.
       * mainly for backward compatibility.
       * if you do not want to see a control, you can remove it
       * from the controlset.
       * @type {Boolean}
       * @default true
       */
      visible: !0,
      /**
       * Name of the action that the control will likely execute.
       * This is optional. FabricJS uses to identify what the user is doing for some
       * extra optimizations. If you are writing a custom control and you want to know
       * somewhere else in the code what is going on, you can use this string here.
       * you can also provide a custom getActionName if your control run multiple actions
       * depending on some external state.
       * default to scale since is the most common, used on 4 corners by default
       * @type {String}
       * @default 'scale'
       */
      actionName: "scale",
      /**
       * Drawing angle of the control.
       * NOT used for now, but name marked as needed for internal logic
       * example: to reuse the same drawing function for different rotated controls
       * @type {Number}
       * @default 0
       */
      angle: 0,
      /**
       * Relative position of the control. X
       * 0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      x: 0,
      /**
       * Relative position of the control. Y
       * 0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      y: 0,
      /**
       * Horizontal offset of the control from the defined position. In pixels
       * Positive offset moves the control to the right, negative to the left.
       * It used when you want to have position of control that does not scale with
       * the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
       * the boundindbox, with an offset of 30 pixels vertically. Those 30 pixels will
       * stay 30 pixels no matter how the object is big. Another example is having 2
       * controls in the corner, that stay in the same position when the object scale.
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      offsetX: 0,
      /**
       * Vertical offset of the control from the defined position. In pixels
       * Positive offset moves the control to the bottom, negative to the top.
       * @type {Number}
       * @default 0
       */
      offsetY: 0,
      /**
       * Sets the length of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      sizeX: null,
      /**
       * Sets the height of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      sizeY: null,
      /**
       * Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      touchSizeX: null,
      /**
       * Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      touchSizeY: null,
      /**
       * Css cursor style to display when the control is hovered.
       * if the method `cursorStyleHandler` is provided, this property is ignored.
       * @type {String}
       * @default 'crosshair'
       */
      cursorStyle: "crosshair",
      /**
       * If controls has an offsetY or offsetX, draw a line that connects
       * the control to the bounding box
       * @type {Boolean}
       * @default false
       */
      withConnection: !1,
      /**
       * The control actionHandler, provide one to handle action ( control being moved )
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      actionHandler: function() {
      },
      /**
       * The control handler for mouse down, provide one to handle mouse down on control
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      mouseDownHandler: function() {
      },
      /**
       * The control mouseUpHandler, provide one to handle an effect on mouse up.
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      mouseUpHandler: function() {
      },
      /**
       * Returns control actionHandler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getActionHandler: function() {
        return this.actionHandler;
      },
      /**
       * Returns control mouseDown handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getMouseDownHandler: function() {
        return this.mouseDownHandler;
      },
      /**
       * Returns control mouseUp handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getMouseUpHandler: function() {
        return this.mouseUpHandler;
      },
      /**
       * Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
       * function you can pass one in the constructor
       * the cursorStyle property
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
      cursorStyleHandler: function(o, e) {
        return e.cursorStyle;
      },
      /**
       * Returns the action name. The basic implementation just return the actionName property.
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
      getActionName: function(o, e) {
        return e.actionName;
      },
      /**
       * Returns controls visibility
       * @param {fabric.Object} object on which the control is displayed
       * @param {String} controlKey key where the control is memorized on the
       * @return {Boolean}
       */
      getVisibility: function(o, e) {
        var r = o._controlsVisibility;
        return r && typeof r[e] < "u" ? r[e] : this.visible;
      },
      /**
       * Sets controls visibility
       * @param {Boolean} visibility for the object
       * @return {Void}
       */
      setVisibility: function(o) {
        this.visible = o;
      },
      positionHandler: function(o, e) {
        var r = i.util.transformPoint({
          x: this.x * o.x + this.offsetX,
          y: this.y * o.y + this.offsetY
        }, e);
        return r;
      },
      /**
       * Returns the coords for this control based on object values.
       * @param {Number} objectAngle angle from the fabric object holding the control
       * @param {Number} objectCornerSize cornerSize from the fabric object holding the control (or touchCornerSize if
       *   isTouch is true)
       * @param {Number} centerX x coordinate where the control center should be
       * @param {Number} centerY y coordinate where the control center should be
       * @param {boolean} isTouch true if touch corner, false if normal corner
       */
      calcCornerCoords: function(o, e, r, t, s) {
        var l, n, h, f, g = s ? this.touchSizeX : this.sizeX, p = s ? this.touchSizeY : this.sizeY;
        if (g && p && g !== p) {
          var m = Math.atan2(p, g), C = Math.sqrt(g * g + p * p) / 2, w = m - i.util.degreesToRadians(o), x = Math.PI / 2 - m - i.util.degreesToRadians(o);
          l = C * i.util.cos(w), n = C * i.util.sin(w), h = C * i.util.cos(x), f = C * i.util.sin(x);
        } else {
          var k = g && p ? g : e;
          C = k * 0.7071067812;
          var w = i.util.degreesToRadians(45 - o);
          l = h = C * i.util.cos(w), n = f = C * i.util.sin(w);
        }
        return {
          tl: {
            x: r - f,
            y: t - h
          },
          tr: {
            x: r + l,
            y: t - n
          },
          bl: {
            x: r - l,
            y: t + n
          },
          br: {
            x: r + f,
            y: t + h
          }
        };
      },
      /**
      * Render function for the control.
      * When this function runs the context is unscaled. unrotate. Just retina scaled.
      * all the functions will have to translate to the point left,top before starting Drawing
      * if they want to draw a control where the position is detected.
      * left and top are the result of the positionHandler function
      * @param {RenderingContext2D} ctx the context where the control will be drawn
      * @param {Number} left position of the canvas where we are about to render the control.
      * @param {Number} top position of the canvas where we are about to render the control.
      * @param {Object} styleOverride
      * @param {fabric.Object} fabricObject the object where the control is about to be rendered
      */
      render: function(o, e, r, t, s) {
        switch (t = t || {}, t.cornerStyle || s.cornerStyle) {
          case "circle":
            i.controlsUtils.renderCircleControl.call(this, o, e, r, t, s);
            break;
          default:
            i.controlsUtils.renderSquareControl.call(this, o, e, r, t, s);
        }
      }
    };
  }(d), function() {
    function u(r, t) {
      var s = r.getAttribute("style"), l = r.getAttribute("offset") || 0, n, h, f, g;
      if (l = parseFloat(l) / (/%$/.test(l) ? 100 : 1), l = l < 0 ? 0 : l > 1 ? 1 : l, s) {
        var p = s.split(/\s*;\s*/);
        for (p[p.length - 1] === "" && p.pop(), g = p.length; g--; ) {
          var m = p[g].split(/\s*:\s*/), C = m[0].trim(), w = m[1].trim();
          C === "stop-color" ? n = w : C === "stop-opacity" && (f = w);
        }
      }
      return n || (n = r.getAttribute("stop-color") || "rgb(0,0,0)"), f || (f = r.getAttribute("stop-opacity")), n = new c.Color(n), h = n.getAlpha(), f = isNaN(parseFloat(f)) ? 1 : parseFloat(f), f *= h * t, {
        offset: l,
        color: n.toRgb(),
        opacity: f
      };
    }
    function i(r) {
      return {
        x1: r.getAttribute("x1") || 0,
        y1: r.getAttribute("y1") || 0,
        x2: r.getAttribute("x2") || "100%",
        y2: r.getAttribute("y2") || 0
      };
    }
    function a(r) {
      return {
        x1: r.getAttribute("fx") || r.getAttribute("cx") || "50%",
        y1: r.getAttribute("fy") || r.getAttribute("cy") || "50%",
        r1: 0,
        x2: r.getAttribute("cx") || "50%",
        y2: r.getAttribute("cy") || "50%",
        r2: r.getAttribute("r") || "50%"
      };
    }
    var o = c.util.object.clone;
    c.Gradient = c.util.createClass(
      /** @lends fabric.Gradient.prototype */
      {
        /**
         * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetX: 0,
        /**
         * Vertical offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetY: 0,
        /**
         * A transform matrix to apply to the gradient before painting.
         * Imported from svg gradients, is not applied with the current transform in the center.
         * Before this transform is applied, the origin point is at the top left corner of the object
         * plus the addition of offsetY and offsetX.
         * @type Number[]
         * @default null
         */
        gradientTransform: null,
        /**
         * coordinates units for coords.
         * If `pixels`, the number of coords are in the same unit of width / height.
         * If set as `percentage` the coords are still a number, but 1 means 100% of width
         * for the X and 100% of the height for the y. It can be bigger than 1 and negative.
         * allowed values pixels or percentage.
         * @type String
         * @default 'pixels'
         */
        gradientUnits: "pixels",
        /**
         * Gradient type linear or radial
         * @type String
         * @default 'pixels'
         */
        type: "linear",
        /**
         * Constructor
         * @param {Object} options Options object with type, coords, gradientUnits and colorStops
         * @param {Object} [options.type] gradient type linear or radial
         * @param {Object} [options.gradientUnits] gradient units
         * @param {Object} [options.offsetX] SVG import compatibility
         * @param {Object} [options.offsetY] SVG import compatibility
         * @param {Object[]} options.colorStops contains the colorstops.
         * @param {Object} options.coords contains the coords of the gradient
         * @param {Number} [options.coords.x1] X coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.y1] Y coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.x2] X coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.y2] Y coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.r1] only for radial gradient, radius of the inner circle
         * @param {Number} [options.coords.r2] only for radial gradient, radius of the external circle
         * @return {fabric.Gradient} thisArg
         */
        initialize: function(r) {
          r || (r = {}), r.coords || (r.coords = {});
          var t, s = this;
          Object.keys(r).forEach(function(l) {
            s[l] = r[l];
          }), this.id ? this.id += "_" + c.Object.__uid++ : this.id = c.Object.__uid++, t = {
            x1: r.coords.x1 || 0,
            y1: r.coords.y1 || 0,
            x2: r.coords.x2 || 0,
            y2: r.coords.y2 || 0
          }, this.type === "radial" && (t.r1 = r.coords.r1 || 0, t.r2 = r.coords.r2 || 0), this.coords = t, this.colorStops = r.colorStops.slice();
        },
        /**
         * Adds another colorStop
         * @param {Object} colorStop Object with offset and color
         * @return {fabric.Gradient} thisArg
         */
        addColorStop: function(r) {
          for (var t in r) {
            var s = new c.Color(r[t]);
            this.colorStops.push({
              offset: parseFloat(t),
              color: s.toRgb(),
              opacity: s.getAlpha()
            });
          }
          return this;
        },
        /**
         * Returns object representation of a gradient
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object}
         */
        toObject: function(r) {
          var t = {
            type: this.type,
            coords: this.coords,
            colorStops: this.colorStops,
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            gradientUnits: this.gradientUnits,
            gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
          };
          return c.util.populateWithProperties(this, t, r), t;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of an gradient
         * @param {Object} object Object to create a gradient for
         * @return {String} SVG representation of an gradient (linear/radial)
         */
        toSVG: function(r, h) {
          var s = o(this.coords, !0), l, n, h = h || {}, f, g, p = o(this.colorStops, !0), m = s.r1 > s.r2, C = this.gradientTransform ? this.gradientTransform.concat() : c.iMatrix.concat(), w = -this.offsetX, x = -this.offsetY, k = !!h.additionalTransform, L = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
          if (p.sort(function(ee, se) {
            return ee.offset - se.offset;
          }), L === "objectBoundingBox" ? (w /= r.width, x /= r.height) : (w += r.width / 2, x += r.height / 2), r.type === "path" && this.gradientUnits !== "percentage" && (w -= r.pathOffset.x, x -= r.pathOffset.y), C[4] -= w, C[5] -= x, g = 'id="SVGID_' + this.id + '" gradientUnits="' + L + '"', g += ' gradientTransform="' + (k ? h.additionalTransform + " " : "") + c.util.matrixToSVG(C) + '" ', this.type === "linear" ? f = [
            "<linearGradient ",
            g,
            ' x1="',
            s.x1,
            '" y1="',
            s.y1,
            '" x2="',
            s.x2,
            '" y2="',
            s.y2,
            `">
`
          ] : this.type === "radial" && (f = [
            "<radialGradient ",
            g,
            ' cx="',
            m ? s.x1 : s.x2,
            '" cy="',
            m ? s.y1 : s.y2,
            '" r="',
            m ? s.r1 : s.r2,
            '" fx="',
            m ? s.x2 : s.x1,
            '" fy="',
            m ? s.y2 : s.y1,
            `">
`
          ]), this.type === "radial") {
            if (m)
              for (p = p.concat(), p.reverse(), l = 0, n = p.length; l < n; l++)
                p[l].offset = 1 - p[l].offset;
            var Y = Math.min(s.r1, s.r2);
            if (Y > 0) {
              var K = Math.max(s.r1, s.r2), re = Y / K;
              for (l = 0, n = p.length; l < n; l++)
                p[l].offset += re * (1 - p[l].offset);
            }
          }
          for (l = 0, n = p.length; l < n; l++) {
            var q = p[l];
            f.push(
              "<stop ",
              'offset="',
              q.offset * 100 + "%",
              '" style="stop-color:',
              q.color,
              typeof q.opacity < "u" ? ";stop-opacity: " + q.opacity : ";",
              `"/>
`
            );
          }
          return f.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), f.join("");
        },
        /* _TO_SVG_END_ */
        /**
         * Returns an instance of CanvasGradient
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {CanvasGradient}
         */
        toLive: function(r) {
          var t, s = c.util.object.clone(this.coords), l, n;
          if (this.type) {
            for (this.type === "linear" ? t = r.createLinearGradient(
              s.x1,
              s.y1,
              s.x2,
              s.y2
            ) : this.type === "radial" && (t = r.createRadialGradient(
              s.x1,
              s.y1,
              s.r1,
              s.x2,
              s.y2,
              s.r2
            )), l = 0, n = this.colorStops.length; l < n; l++) {
              var h = this.colorStops[l].color, f = this.colorStops[l].opacity, g = this.colorStops[l].offset;
              typeof f < "u" && (h = new c.Color(h).setAlpha(f).toRgba()), t.addColorStop(g, h);
            }
            return t;
          }
        }
      }
    ), c.util.object.extend(c.Gradient, {
      /* _FROM_SVG_START_ */
      /**
       * Returns {@link fabric.Gradient} instance from an SVG element
       * @static
       * @memberOf fabric.Gradient
       * @param {SVGGradientElement} el SVG gradient element
       * @param {fabric.Object} instance
       * @param {String} opacityAttr A fill-opacity or stroke-opacity attribute to multiply to each stop's opacity.
       * @param {Object} svgOptions an object containing the size of the SVG in order to parse correctly gradients
       * that uses gradientUnits as 'userSpaceOnUse' and percentages.
       * @param {Object.number} viewBoxWidth width part of the viewBox attribute on svg
       * @param {Object.number} viewBoxHeight height part of the viewBox attribute on svg
       * @param {Object.number} width width part of the svg tag if viewBox is not specified
       * @param {Object.number} height height part of the svg tag if viewBox is not specified
       * @return {fabric.Gradient} Gradient instance
       * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
       * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
       */
      fromElement: function(r, t, s, l) {
        var n = parseFloat(s) / (/%$/.test(s) ? 100 : 1);
        n = n < 0 ? 0 : n > 1 ? 1 : n, isNaN(n) && (n = 1);
        var h = r.getElementsByTagName("stop"), f, g = r.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", p = r.getAttribute("gradientTransform") || "", m = [], C, w, x = 0, k = 0, L;
        for (r.nodeName === "linearGradient" || r.nodeName === "LINEARGRADIENT" ? (f = "linear", C = i(r)) : (f = "radial", C = a(r)), w = h.length; w--; )
          m.push(u(h[w], n));
        L = c.parseTransformAttribute(p), e(t, C, l, g), g === "pixels" && (x = -t.left, k = -t.top);
        var Y = new c.Gradient({
          id: r.getAttribute("id"),
          type: f,
          coords: C,
          colorStops: m,
          gradientUnits: g,
          gradientTransform: L,
          offsetX: x,
          offsetY: k
        });
        return Y;
      }
      /* _FROM_SVG_END_ */
    });
    function e(r, t, s, l) {
      var n, h;
      Object.keys(t).forEach(function(f) {
        n = t[f], n === "Infinity" ? h = 1 : n === "-Infinity" ? h = 0 : (h = parseFloat(t[f], 10), typeof n == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(n) && (h *= 0.01, l === "pixels" && ((f === "x1" || f === "x2" || f === "r2") && (h *= s.viewBoxWidth || s.width), (f === "y1" || f === "y2") && (h *= s.viewBoxHeight || s.height)))), t[f] = h;
      });
    }
  }(), function() {
    var u = c.util.toFixed;
    c.Pattern = c.util.createClass(
      /** @lends fabric.Pattern.prototype */
      {
        /**
         * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
         * @type String
         * @default
         */
        repeat: "repeat",
        /**
         * Pattern horizontal offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Pattern vertical offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @type String
         * @default
         */
        crossOrigin: "",
        /**
         * transform matrix to change the pattern, imported from svgs.
         * @type Array
         * @default
         */
        patternTransform: null,
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @param {Function} [callback] function to invoke after callback init.
         * @return {fabric.Pattern} thisArg
         */
        initialize: function(i, a) {
          if (i || (i = {}), this.id = c.Object.__uid++, this.setOptions(i), !i.source || i.source && typeof i.source != "string") {
            a && a(this);
            return;
          } else {
            var o = this;
            this.source = c.util.createImage(), c.util.loadImage(i.source, function(e, r) {
              o.source = e, a && a(o, r);
            }, null, this.crossOrigin);
          }
        },
        /**
         * Returns object representation of a pattern
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of a pattern instance
         */
        toObject: function(i) {
          var a = c.Object.NUM_FRACTION_DIGITS, o, e;
          return typeof this.source.src == "string" ? o = this.source.src : typeof this.source == "object" && this.source.toDataURL && (o = this.source.toDataURL()), e = {
            type: "pattern",
            source: o,
            repeat: this.repeat,
            crossOrigin: this.crossOrigin,
            offsetX: u(this.offsetX, a),
            offsetY: u(this.offsetY, a),
            patternTransform: this.patternTransform ? this.patternTransform.concat() : null
          }, c.util.populateWithProperties(this, e, i), e;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a pattern
         * @param {fabric.Object} object
         * @return {String} SVG representation of a pattern
         */
        toSVG: function(i) {
          var a = typeof this.source == "function" ? this.source() : this.source, o = a.width / i.width, e = a.height / i.height, r = this.offsetX / i.width, t = this.offsetY / i.height, s = "";
          return (this.repeat === "repeat-x" || this.repeat === "no-repeat") && (e = 1, t && (e += Math.abs(t))), (this.repeat === "repeat-y" || this.repeat === "no-repeat") && (o = 1, r && (o += Math.abs(r))), a.src ? s = a.src : a.toDataURL && (s = a.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + r + '" y="' + t + '" width="' + o + '" height="' + e + `">
<image x="0" y="0" width="` + a.width + '" height="' + a.height + '" xlink:href="' + s + `"></image>
</pattern>
`;
        },
        /* _TO_SVG_END_ */
        setOptions: function(i) {
          for (var a in i)
            this[a] = i[a];
        },
        /**
         * Returns an instance of CanvasPattern
         * @param {CanvasRenderingContext2D} ctx Context to create pattern
         * @return {CanvasPattern}
         */
        toLive: function(i) {
          var a = this.source;
          return !a || typeof a.src < "u" && (!a.complete || a.naturalWidth === 0 || a.naturalHeight === 0) ? "" : i.createPattern(a, this.repeat);
        }
      }
    );
  }(), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.toFixed;
    if (i.Shadow) {
      i.warn("fabric.Shadow is already defined.");
      return;
    }
    i.Shadow = i.util.createClass(
      /** @lends fabric.Shadow.prototype */
      {
        /**
         * Shadow color
         * @type String
         * @default
         */
        color: "rgb(0,0,0)",
        /**
         * Shadow blur
         * @type Number
         */
        blur: 0,
        /**
         * Shadow horizontal offset
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Shadow vertical offset
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * Whether the shadow should affect stroke operations
         * @type Boolean
         * @default
         */
        affectStroke: !1,
        /**
         * Indicates whether toObject should include default values
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * When `false`, the shadow will scale with the object.
         * When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
         * default to false
         * @type Boolean
         * @default
         */
        nonScaling: !1,
        /**
         * Constructor
         * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")
         * @return {fabric.Shadow} thisArg
         */
        initialize: function(o) {
          typeof o == "string" && (o = this._parseShadow(o));
          for (var e in o)
            this[e] = o[e];
          this.id = i.Object.__uid++;
        },
        /**
         * @private
         * @param {String} shadow Shadow value to parse
         * @return {Object} Shadow object with color, offsetX, offsetY and blur
         */
        _parseShadow: function(o) {
          var e = o.trim(), r = i.Shadow.reOffsetsAndBlur.exec(e) || [], t = e.replace(i.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
          return {
            color: t.trim(),
            offsetX: parseFloat(r[1], 10) || 0,
            offsetY: parseFloat(r[2], 10) || 0,
            blur: parseFloat(r[3], 10) || 0
          };
        },
        /**
         * Returns a string representation of an instance
         * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
         * @return {String} Returns CSS3 text-shadow declaration
         */
        toString: function() {
          return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a shadow
         * @param {fabric.Object} object
         * @return {String} SVG representation of a shadow
         */
        toSVG: function(o) {
          var e = 40, r = 40, t = i.Object.NUM_FRACTION_DIGITS, s = i.util.rotateVector(
            { x: this.offsetX, y: this.offsetY },
            i.util.degreesToRadians(-o.angle)
          ), l = 20, n = new i.Color(this.color);
          return o.width && o.height && (e = a((Math.abs(s.x) + this.blur) / o.width, t) * 100 + l, r = a((Math.abs(s.y) + this.blur) / o.height, t) * 100 + l), o.flipX && (s.x *= -1), o.flipY && (s.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + r + '%" height="' + (100 + 2 * r) + '%" x="-' + e + '%" width="' + (100 + 2 * e) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + a(this.blur ? this.blur / 2 : 0, t) + `"></feGaussianBlur>
	<feOffset dx="` + a(s.x, t) + '" dy="' + a(s.y, t) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + n.toRgb() + '" flood-opacity="' + n.getAlpha() + `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns object representation of a shadow
         * @return {Object} Object representation of a shadow instance
         */
        toObject: function() {
          if (this.includeDefaultValues)
            return {
              color: this.color,
              blur: this.blur,
              offsetX: this.offsetX,
              offsetY: this.offsetY,
              affectStroke: this.affectStroke,
              nonScaling: this.nonScaling
            };
          var o = {}, e = i.Shadow.prototype;
          return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(r) {
            this[r] !== e[r] && (o[r] = this[r]);
          }, this), o;
        }
      }
    ), i.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/;
  }(d), function() {
    if (c.StaticCanvas) {
      c.warn("fabric.StaticCanvas is already defined.");
      return;
    }
    var u = c.util.object.extend, i = c.util.getElementOffset, a = c.util.removeFromArray, o = c.util.toFixed, e = c.util.transformPoint, r = c.util.invertTransform, t = c.util.getNodeCanvas, s = c.util.createCanvasElement, l = new Error("Could not initialize `canvas` element");
    c.StaticCanvas = c.util.createClass(
      c.CommonMethods,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(n, h) {
          h || (h = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(n, h);
        },
        /**
         * Background color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
         * @type {(String|fabric.Pattern)}
         * @default
         */
        backgroundColor: "",
        /**
         * Background image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as background, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        backgroundImage: null,
        /**
         * Overlay color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
         * @since 1.3.9
         * @type {(String|fabric.Pattern)}
         * @default
         */
        overlayColor: "",
        /**
         * Overlay image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as overlay, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        overlayImage: null,
        /**
         * Indicates whether toObject/toDatalessObject should include default values
         * if set to false, takes precedence over the object value.
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * Indicates whether objects' state should be saved
         * @type Boolean
         * @default
         */
        stateful: !1,
        /**
         * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove},
         * {@link fabric.StaticCanvas.moveTo}, {@link fabric.StaticCanvas.clear} and many more, should also re-render canvas.
         * Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
         * since the renders are quequed and executed one per frame.
         * Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
         * Left default to true to do not break documentation and old app, fiddles.
         * @type Boolean
         * @default
         */
        renderOnAddRemove: !0,
        /**
         * Indicates whether object controls (borders/controls) are rendered above overlay image
         * @type Boolean
         * @default
         */
        controlsAboveOverlay: !1,
        /**
         * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
         * @type Boolean
         * @default
         */
        allowTouchScrolling: !1,
        /**
         * Indicates whether this canvas will use image smoothing, this is on by default in browsers
         * @type Boolean
         * @default
         */
        imageSmoothingEnabled: !0,
        /**
         * The transformation (a Canvas 2D API transform matrix) which focuses the viewport
         * @type Array
         * @example <caption>Default transform</caption>
         * canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
         * @example <caption>Scale by 70% and translate toward bottom-right by 50, without skewing</caption>
         * canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
         * @default
         */
        viewportTransform: c.iMatrix.concat(),
        /**
         * if set to false background image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        backgroundVpt: !0,
        /**
         * if set to false overlya image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        overlayVpt: !0,
        /**
         * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
         * @type Boolean
         * @default
         */
        enableRetinaScaling: !0,
        /**
         * Describe canvas element extension over design
         * properties are tl,tr,bl,br.
         * if canvas is not zoomed/panned those points are the four corner of canvas
         * if canvas is viewportTransformed you those points indicate the extension
         * of canvas element in plain untrasformed coordinates
         * The coordinates get updated with @method calcViewportBoundaries.
         * @memberOf fabric.StaticCanvas.prototype
         */
        vptCoords: {},
        /**
         * Based on vptCoords and object.aCoords, skip rendering of objects that
         * are not included in current viewport.
         * May greatly help in applications with crowded canvas and use of zoom/pan
         * If One of the corner of the bounding box of the object is on the canvas
         * the objects get rendered.
         * @memberOf fabric.StaticCanvas.prototype
         * @type Boolean
         * @default
         */
        skipOffscreen: !0,
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the canvas has rendered, and the context is placed in the
         * top left corner of the canvas.
         * clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * @private
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         */
        _initStatic: function(n, h) {
          var f = this.requestRenderAllBound;
          this._objects = [], this._createLowerCanvas(n), this._initOptions(h), this.interactive || this._initRetinaScaling(), h.overlayImage && this.setOverlayImage(h.overlayImage, f), h.backgroundImage && this.setBackgroundImage(h.backgroundImage, f), h.backgroundColor && this.setBackgroundColor(h.backgroundColor, f), h.overlayColor && this.setOverlayColor(h.overlayColor, f), this.calcOffset();
        },
        /**
         * @private
         */
        _isRetinaScaling: function() {
          return c.devicePixelRatio > 1 && this.enableRetinaScaling;
        },
        /**
         * @private
         * @return {Number} retinaScaling if applied, otherwise 1;
         */
        getRetinaScaling: function() {
          return this._isRetinaScaling() ? Math.max(1, c.devicePixelRatio) : 1;
        },
        /**
         * @private
         */
        _initRetinaScaling: function() {
          if (this._isRetinaScaling()) {
            var n = c.devicePixelRatio;
            this.__initRetinaScaling(n, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(n, this.upperCanvasEl, this.contextTop);
          }
        },
        __initRetinaScaling: function(n, h, f) {
          h.setAttribute("width", this.width * n), h.setAttribute("height", this.height * n), f.scale(n, n);
        },
        /**
         * Calculates canvas element offset relative to the document
         * This method is also attached as "resize" event handler of window
         * @return {fabric.Canvas} instance
         * @chainable
         */
        calcOffset: function() {
          return this._offset = i(this.lowerCanvasEl), this;
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
         * @param {Function} callback callback to invoke when image is loaded and set as an overlay
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
         * @example <caption>Normal overlayImage with left/top = 0</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage with different properties</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage loaded from cross-origin</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        setOverlayImage: function(n, h, f) {
          return this.__setBgOverlayImage("overlayImage", n, h, f);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
         * @param {Function} callback Callback to invoke when image is loaded and set as background
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/djnr8o7a/28/|jsFiddle demo}
         * @example <caption>Normal backgroundImage with left/top = 0</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage with different properties</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage loaded from cross-origin</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        // TODO: fix stretched examples
        setBackgroundImage: function(n, h, f) {
          return this.__setBgOverlayImage("backgroundImage", n, h, f);
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayColor|foreground color} for this canvas
         * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set foreground color to
         * @param {Function} callback Callback to invoke when foreground color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
         * @example <caption>Normal overlayColor - color value</caption>
         * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setOverlayColor: function(n, h) {
          return this.__setBgOverlayColor("overlayColor", n, h);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
         * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
         * @param {Function} callback Callback to invoke when background color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
         * @example <caption>Normal backgroundColor - color value</caption>
         * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setBackgroundColor: function(n, h) {
          return this.__setBgOverlayColor("backgroundColor", n, h);
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
         * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
         * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
         * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay. The first argument is the created image, the second argument is a flag indicating whether an error occurred or not.
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
         */
        __setBgOverlayImage: function(n, h, f, g) {
          return typeof h == "string" ? c.util.loadImage(h, function(p, m) {
            if (p) {
              var C = new c.Image(p, g);
              this[n] = C, C.canvas = this;
            }
            f && f(p, m);
          }, this, g && g.crossOrigin) : (g && h.setOptions(g), this[n] = h, h && (h.canvas = this), f && f(h, !1)), this;
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
         * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
         * @param {(Object|String|null)} color Object with pattern information, color value or null
         * @param {Function} [callback] Callback is invoked when color is set
         */
        __setBgOverlayColor: function(n, h, f) {
          return this[n] = h, this._initGradient(h, n), this._initPattern(h, n, f), this;
        },
        /**
         * @private
         */
        _createCanvasElement: function() {
          var n = s();
          if (!n || (n.style || (n.style = {}), typeof n.getContext > "u"))
            throw l;
          return n;
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initOptions: function(n) {
          var h = this.lowerCanvasEl;
          this._setOptions(n), this.width = this.width || parseInt(h.width, 10) || 0, this.height = this.height || parseInt(h.height, 10) || 0, this.lowerCanvasEl.style && (h.width = this.width, h.height = this.height, h.style.width = this.width + "px", h.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
        },
        /**
         * Creates a bottom canvas
         * @private
         * @param {HTMLElement} [canvasEl]
         */
        _createLowerCanvas: function(n) {
          n && n.getContext ? this.lowerCanvasEl = n : this.lowerCanvasEl = c.util.getById(n) || this._createCanvasElement(), c.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
        },
        /**
         * Returns canvas width (in px)
         * @return {Number}
         */
        getWidth: function() {
          return this.width;
        },
        /**
         * Returns canvas height (in px)
         * @return {Number}
         */
        getHeight: function() {
          return this.height;
        },
        /**
         * Sets width of this canvas instance
         * @param {Number|String} value                         Value to set width to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setWidth: function(n, h) {
          return this.setDimensions({ width: n }, h);
        },
        /**
         * Sets height of this canvas instance
         * @param {Number|String} value                         Value to set height to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setHeight: function(n, h) {
          return this.setDimensions({ height: n }, h);
        },
        /**
         * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
         * @param {Object}        dimensions                    Object with width/height properties
         * @param {Number|String} [dimensions.width]            Width of canvas element
         * @param {Number|String} [dimensions.height]           Height of canvas element
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setDimensions: function(n, h) {
          var f;
          h = h || {};
          for (var g in n)
            f = n[g], h.cssOnly || (this._setBackstoreDimension(g, n[g]), f += "px", this.hasLostContext = !0), h.backstoreOnly || this._setCssDimension(g, f);
          return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop), this._initRetinaScaling(), this.calcOffset(), h.cssOnly || this.requestRenderAll(), this;
        },
        /**
         * Helper for setting width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {Number} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setBackstoreDimension: function(n, h) {
          return this.lowerCanvasEl[n] = h, this.upperCanvasEl && (this.upperCanvasEl[n] = h), this.cacheCanvasEl && (this.cacheCanvasEl[n] = h), this[n] = h, this;
        },
        /**
         * Helper for setting css width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {String} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setCssDimension: function(n, h) {
          return this.lowerCanvasEl.style[n] = h, this.upperCanvasEl && (this.upperCanvasEl.style[n] = h), this.wrapperEl && (this.wrapperEl.style[n] = h), this;
        },
        /**
         * Returns canvas zoom level
         * @return {Number}
         */
        getZoom: function() {
          return this.viewportTransform[0];
        },
        /**
         * Sets viewport transformation of this canvas instance
         * @param {Array} vpt a Canvas 2D API transform matrix
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setViewportTransform: function(n) {
          var h = this._activeObject, f = this.backgroundImage, g = this.overlayImage, p, m, C;
          for (this.viewportTransform = n, m = 0, C = this._objects.length; m < C; m++)
            p = this._objects[m], p.group || p.setCoords(!0);
          return h && h.setCoords(), f && f.setCoords(!0), g && g.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Sets zoom level of this canvas instance, the zoom centered around point
         * meaning that following zoom to point with the same point will have the visual
         * effect of the zoom originating from that point. The point won't move.
         * It has nothing to do with canvas center or visual center of the viewport.
         * @param {fabric.Point} point to zoom with respect to
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        zoomToPoint: function(n, h) {
          var f = n, g = this.viewportTransform.slice(0);
          n = e(n, r(this.viewportTransform)), g[0] = h, g[3] = h;
          var p = e(n, g);
          return g[4] += f.x - p.x, g[5] += f.y - p.y, this.setViewportTransform(g);
        },
        /**
         * Sets zoom level of this canvas instance
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setZoom: function(n) {
          return this.zoomToPoint(new c.Point(0, 0), n), this;
        },
        /**
         * Pan viewport so as to place point at top left corner of canvas
         * @param {fabric.Point} point to move to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        absolutePan: function(n) {
          var h = this.viewportTransform.slice(0);
          return h[4] = -n.x, h[5] = -n.y, this.setViewportTransform(h);
        },
        /**
         * Pans viewpoint relatively
         * @param {fabric.Point} point (position vector) to move by
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        relativePan: function(n) {
          return this.absolutePan(new c.Point(
            -n.x - this.viewportTransform[4],
            -n.y - this.viewportTransform[5]
          ));
        },
        /**
         * Returns &lt;canvas> element corresponding to this instance
         * @return {HTMLCanvasElement}
         */
        getElement: function() {
          return this.lowerCanvasEl;
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was added
         */
        _onObjectAdded: function(n) {
          this.stateful && n.setupState(), n._set("canvas", this), n.setCoords(), this.fire("object:added", { target: n }), n.fire("added");
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(n) {
          this.fire("object:removed", { target: n }), n.fire("removed"), delete n.canvas;
        },
        /**
         * Clears specified context of canvas element
         * @param {CanvasRenderingContext2D} ctx Context to clear
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clearContext: function(n) {
          return n.clearRect(0, 0, this.width, this.height), this;
        },
        /**
         * Returns context of canvas where objects are drawn
         * @return {CanvasRenderingContext2D}
         */
        getContext: function() {
          return this.contextContainer;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Renders the canvas
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          var n = this.contextContainer;
          return this.renderCanvas(n, this._objects), this;
        },
        /**
         * Function created to be instance bound at initialization
         * used in requestAnimationFrame rendering
         * Let the fabricJS call it. If you call it manually you could have more
         * animationFrame stacking on to of each other
         * for an imperative rendering, use canvas.renderAll
         * @private
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAndReset: function() {
          this.isRendering = 0, this.renderAll();
        },
        /**
         * Append a renderAll request to next animation frame.
         * unless one is already in progress, in that case nothing is done
         * a boolean flag will avoid appending more.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        requestRenderAll: function() {
          return this.isRendering || (this.isRendering = c.util.requestAnimFrame(this.renderAndResetBound)), this;
        },
        /**
         * Calculate the position of the 4 corner of canvas with current viewportTransform.
         * helps to determinate when an object is in the current rendering viewport using
         * object absolute coordinates ( aCoords )
         * @return {Object} points.tl
         * @chainable
         */
        calcViewportBoundaries: function() {
          var n = {}, h = this.width, f = this.height, g = r(this.viewportTransform);
          return n.tl = e({ x: 0, y: 0 }, g), n.br = e({ x: h, y: f }, g), n.tr = new c.Point(n.br.x, n.tl.y), n.bl = new c.Point(n.tl.x, n.br.y), this.vptCoords = n, n;
        },
        cancelRequestedRender: function() {
          this.isRendering && (c.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
        },
        /**
         * Renders background, objects, overlay and controls.
         * @param {CanvasRenderingContext2D} ctx
         * @param {Array} objects to render
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderCanvas: function(n, h) {
          var f = this.viewportTransform, g = this.clipPath;
          this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(n), c.util.setImageSmoothing(n, this.imageSmoothingEnabled), this.fire("before:render", { ctx: n }), this._renderBackground(n), n.save(), n.transform(f[0], f[1], f[2], f[3], f[4], f[5]), this._renderObjects(n, h), n.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(n), g && (g.canvas = this, g.shouldCache(), g._transformDone = !0, g.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(n)), this._renderOverlay(n), this.controlsAboveOverlay && this.interactive && this.drawControls(n), this.fire("after:render", { ctx: n });
        },
        /**
         * Paint the cached clipPath on the lowerCanvasEl
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawClipPathOnCanvas: function(n) {
          var h = this.viewportTransform, f = this.clipPath;
          n.save(), n.transform(h[0], h[1], h[2], h[3], h[4], h[5]), n.globalCompositeOperation = "destination-in", f.transform(n), n.scale(1 / f.zoomX, 1 / f.zoomY), n.drawImage(f._cacheCanvas, -f.cacheTranslationX, -f.cacheTranslationY), n.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} objects to render
         */
        _renderObjects: function(n, h) {
          var f, g;
          for (f = 0, g = h.length; f < g; ++f)
            h[f] && h[f].render(n);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {string} property 'background' or 'overlay'
         */
        _renderBackgroundOrOverlay: function(n, h) {
          var f = this[h + "Color"], g = this[h + "Image"], p = this.viewportTransform, m = this[h + "Vpt"];
          if (!(!f && !g)) {
            if (f) {
              n.save(), n.beginPath(), n.moveTo(0, 0), n.lineTo(this.width, 0), n.lineTo(this.width, this.height), n.lineTo(0, this.height), n.closePath(), n.fillStyle = f.toLive ? f.toLive(n, this) : f, m && n.transform(p[0], p[1], p[2], p[3], p[4], p[5]), n.transform(1, 0, 0, 1, f.offsetX || 0, f.offsetY || 0);
              var C = f.gradientTransform || f.patternTransform;
              C && n.transform(C[0], C[1], C[2], C[3], C[4], C[5]), n.fill(), n.restore();
            }
            g && (n.save(), m && n.transform(p[0], p[1], p[2], p[3], p[4], p[5]), g.render(n), n.restore());
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(n) {
          this._renderBackgroundOrOverlay(n, "background");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderOverlay: function(n) {
          this._renderBackgroundOrOverlay(n, "overlay");
        },
        /**
         * Returns coordinates of a center of canvas.
         * Returned value is an object with top and left properties
         * @return {Object} object with "top" and "left" number values
         * @deprecated migrate to `getCenterPoint`
         */
        getCenter: function() {
          return {
            top: this.height / 2,
            left: this.width / 2
          };
        },
        /**
         * Returns coordinates of a center of canvas.
         * @return {fabric.Point} 
         */
        getCenterPoint: function() {
          return new c.Point(this.width / 2, this.height / 2);
        },
        /**
         * Centers object horizontally in the canvas
         * @param {fabric.Object} object Object to center horizontally
         * @return {fabric.Canvas} thisArg
         */
        centerObjectH: function(n) {
          return this._centerObject(n, new c.Point(this.getCenterPoint().x, n.getCenterPoint().y));
        },
        /**
         * Centers object vertically in the canvas
         * @param {fabric.Object} object Object to center vertically
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObjectV: function(n) {
          return this._centerObject(n, new c.Point(n.getCenterPoint().x, this.getCenterPoint().y));
        },
        /**
         * Centers object vertically and horizontally in the canvas
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObject: function(n) {
          var h = this.getCenterPoint();
          return this._centerObject(n, h);
        },
        /**
         * Centers object vertically and horizontally in the viewport
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObject: function(n) {
          var h = this.getVpCenter();
          return this._centerObject(n, h);
        },
        /**
         * Centers object horizontally in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectH: function(n) {
          var h = this.getVpCenter();
          return this._centerObject(n, new c.Point(h.x, n.getCenterPoint().y)), this;
        },
        /**
         * Centers object Vertically in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectV: function(n) {
          var h = this.getVpCenter();
          return this._centerObject(n, new c.Point(n.getCenterPoint().x, h.y));
        },
        /**
         * Calculate the point in canvas that correspond to the center of actual viewport.
         * @return {fabric.Point} vpCenter, viewport center
         * @chainable
         */
        getVpCenter: function() {
          var n = this.getCenterPoint(), h = r(this.viewportTransform);
          return e(n, h);
        },
        /**
         * @private
         * @param {fabric.Object} object Object to center
         * @param {fabric.Point} center Center point
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        _centerObject: function(n, h) {
          return n.setPositionByOrigin(h, "center", "center"), n.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Returns dataless JSON representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {String} json string
         */
        toDatalessJSON: function(n) {
          return this.toDatalessObject(n);
        },
        /**
         * Returns object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(n) {
          return this._toObjectMethod("toObject", n);
        },
        /**
         * Returns dataless object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(n) {
          return this._toObjectMethod("toDatalessObject", n);
        },
        /**
         * @private
         */
        _toObjectMethod: function(n, h) {
          var f = this.clipPath, g = {
            version: c.version,
            objects: this._toObjects(n, h)
          };
          return f && !f.excludeFromExport && (g.clipPath = this._toObject(this.clipPath, n, h)), u(g, this.__serializeBgOverlay(n, h)), c.util.populateWithProperties(this, g, h), g;
        },
        /**
         * @private
         */
        _toObjects: function(n, h) {
          return this._objects.filter(function(f) {
            return !f.excludeFromExport;
          }).map(function(f) {
            return this._toObject(f, n, h);
          }, this);
        },
        /**
         * @private
         */
        _toObject: function(n, h, f) {
          var g;
          this.includeDefaultValues || (g = n.includeDefaultValues, n.includeDefaultValues = !1);
          var p = n[h](f);
          return this.includeDefaultValues || (n.includeDefaultValues = g), p;
        },
        /**
         * @private
         */
        __serializeBgOverlay: function(n, h) {
          var f = {}, g = this.backgroundImage, p = this.overlayImage, m = this.backgroundColor, C = this.overlayColor;
          return m && m.toObject ? m.excludeFromExport || (f.background = m.toObject(h)) : m && (f.background = m), C && C.toObject ? C.excludeFromExport || (f.overlay = C.toObject(h)) : C && (f.overlay = C), g && !g.excludeFromExport && (f.backgroundImage = this._toObject(g, n, h)), p && !p.excludeFromExport && (f.overlayImage = this._toObject(p, n, h)), f;
        },
        /* _TO_SVG_START_ */
        /**
         * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
         * a zoomed canvas will then produce zoomed SVG output.
         * @type Boolean
         * @default
         */
        svgViewportTransformation: !0,
        /**
         * Returns SVG representation of canvas
         * @function
         * @param {Object} [options] Options object for SVG output
         * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
         * @param {Object} [options.viewBox] SVG viewbox object
         * @param {Number} [options.viewBox.x] x-coordinate of viewbox
         * @param {Number} [options.viewBox.y] y-coordinate of viewbox
         * @param {Number} [options.viewBox.width] Width of viewbox
         * @param {Number} [options.viewBox.height] Height of viewbox
         * @param {String} [options.encoding=UTF-8] Encoding of SVG output
         * @param {String} [options.width] desired width of svg with or without units
         * @param {String} [options.height] desired height of svg with or without units
         * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
         * @return {String} SVG string
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
         * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
         * @example <caption>Normal SVG output</caption>
         * var svg = canvas.toSVG();
         * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
         * var svg = canvas.toSVG({suppressPreamble: true});
         * @example <caption>SVG output with viewBox attribute</caption>
         * var svg = canvas.toSVG({
         *   viewBox: {
         *     x: 100,
         *     y: 100,
         *     width: 200,
         *     height: 300
         *   }
         * });
         * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
         * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
         * @example <caption>Modify SVG output with reviver function</caption>
         * var svg = canvas.toSVG(null, function(svg) {
         *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
         * });
         */
        toSVG: function(n, h) {
          n || (n = {}), n.reviver = h;
          var f = [];
          return this._setSVGPreamble(f, n), this._setSVGHeader(f, n), this.clipPath && f.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(f, "background"), this._setSVGBgOverlayImage(f, "backgroundImage", h), this._setSVGObjects(f, h), this.clipPath && f.push(`</g>
`), this._setSVGBgOverlayColor(f, "overlay"), this._setSVGBgOverlayImage(f, "overlayImage", h), f.push("</svg>"), f.join("");
        },
        /**
         * @private
         */
        _setSVGPreamble: function(n, h) {
          h.suppressPreamble || n.push(
            '<?xml version="1.0" encoding="',
            h.encoding || "UTF-8",
            `" standalone="no" ?>
`,
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
            `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`
          );
        },
        /**
         * @private
         */
        _setSVGHeader: function(n, h) {
          var f = h.width || this.width, g = h.height || this.height, p, m = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', C = c.Object.NUM_FRACTION_DIGITS;
          h.viewBox ? m = 'viewBox="' + h.viewBox.x + " " + h.viewBox.y + " " + h.viewBox.width + " " + h.viewBox.height + '" ' : this.svgViewportTransformation && (p = this.viewportTransform, m = 'viewBox="' + o(-p[4] / p[0], C) + " " + o(-p[5] / p[3], C) + " " + o(this.width / p[0], C) + " " + o(this.height / p[3], C) + '" '), n.push(
            "<svg ",
            'xmlns="http://www.w3.org/2000/svg" ',
            'xmlns:xlink="http://www.w3.org/1999/xlink" ',
            'version="1.1" ',
            'width="',
            f,
            '" ',
            'height="',
            g,
            '" ',
            m,
            `xml:space="preserve">
`,
            "<desc>Created with Fabric.js ",
            c.version,
            `</desc>
`,
            `<defs>
`,
            this.createSVGFontFacesMarkup(),
            this.createSVGRefElementsMarkup(),
            this.createSVGClipPathMarkup(h),
            `</defs>
`
          );
        },
        createSVGClipPathMarkup: function(n) {
          var h = this.clipPath;
          return h ? (h.clipPathId = "CLIPPATH_" + c.Object.__uid++, '<clipPath id="' + h.clipPathId + `" >
` + this.clipPath.toClipPathSVG(n.reviver) + `</clipPath>
`) : "";
        },
        /**
         * Creates markup containing SVG referenced elements like patterns, gradients etc.
         * @return {String}
         */
        createSVGRefElementsMarkup: function() {
          var n = this, h = ["background", "overlay"].map(function(f) {
            var g = n[f + "Color"];
            if (g && g.toLive) {
              var p = n[f + "Vpt"], m = n.viewportTransform, C = {
                width: n.width / (p ? m[0] : 1),
                height: n.height / (p ? m[3] : 1)
              };
              return g.toSVG(
                C,
                { additionalTransform: p ? c.util.matrixToSVG(m) : "" }
              );
            }
          });
          return h.join("");
        },
        /**
         * Creates markup containing SVG font faces,
         * font URLs for font faces must be collected by developers
         * and are not extracted from the DOM by fabricjs
         * @param {Array} objects Array of fabric objects
         * @return {String}
         */
        createSVGFontFacesMarkup: function() {
          var n = "", h = {}, f, g, p, m, C, w, x, k, L, Y = c.fontPaths, K = [];
          for (this._objects.forEach(function q(ee) {
            K.push(ee), ee._objects && ee._objects.forEach(q);
          }), k = 0, L = K.length; k < L; k++)
            if (f = K[k], g = f.fontFamily, !(f.type.indexOf("text") === -1 || h[g] || !Y[g]) && (h[g] = !0, !!f.styles)) {
              p = f.styles;
              for (C in p) {
                m = p[C];
                for (x in m)
                  w = m[x], g = w.fontFamily, !h[g] && Y[g] && (h[g] = !0);
              }
            }
          for (var re in h)
            n += [
              `		@font-face {
`,
              "			font-family: '",
              re,
              `';
`,
              "			src: url('",
              Y[re],
              `');
`,
              `		}
`
            ].join("");
          return n && (n = [
            '	<style type="text/css">',
            `<![CDATA[
`,
            n,
            "]]>",
            `</style>
`
          ].join("")), n;
        },
        /**
         * @private
         */
        _setSVGObjects: function(n, h) {
          var f, g, p, m = this._objects;
          for (g = 0, p = m.length; g < p; g++)
            f = m[g], !f.excludeFromExport && this._setSVGObject(n, f, h);
        },
        /**
         * @private
         */
        _setSVGObject: function(n, h, f) {
          n.push(h.toSVG(f));
        },
        /**
         * @private
         */
        _setSVGBgOverlayImage: function(n, h, f) {
          this[h] && !this[h].excludeFromExport && this[h].toSVG && n.push(this[h].toSVG(f));
        },
        /**
         * @private
         */
        _setSVGBgOverlayColor: function(n, h) {
          var f = this[h + "Color"], g = this.viewportTransform, p = this.width, m = this.height;
          if (f)
            if (f.toLive) {
              var C = f.repeat, w = c.util.invertTransform(g), x = this[h + "Vpt"], k = x ? c.util.matrixToSVG(w) : "";
              n.push(
                '<rect transform="' + k + " translate(",
                p / 2,
                ",",
                m / 2,
                ')"',
                ' x="',
                f.offsetX - p / 2,
                '" y="',
                f.offsetY - m / 2,
                '" ',
                'width="',
                C === "repeat-y" || C === "no-repeat" ? f.source.width : p,
                '" height="',
                C === "repeat-x" || C === "no-repeat" ? f.source.height : m,
                '" fill="url(#SVGID_' + f.id + ')"',
                `></rect>
`
              );
            } else
              n.push(
                '<rect x="0" y="0" width="100%" height="100%" ',
                'fill="',
                f,
                '"',
                `></rect>
`
              );
        },
        /* _TO_SVG_END_ */
        /**
         * Moves an object or the objects of a multiple selection
         * to the bottom of the stack of drawn objects
         * @param {fabric.Object} object Object to send to back
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendToBack: function(n) {
          if (!n)
            return this;
          var h = this._activeObject, f, g, p;
          if (n === h && n.type === "activeSelection")
            for (p = h._objects, f = p.length; f--; )
              g = p[f], a(this._objects, g), this._objects.unshift(g);
          else
            a(this._objects, n), this._objects.unshift(n);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or the objects of a multiple selection
         * to the top of the stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringToFront: function(n) {
          if (!n)
            return this;
          var h = this._activeObject, f, g, p;
          if (n === h && n.type === "activeSelection")
            for (p = h._objects, f = 0; f < p.length; f++)
              g = p[f], a(this._objects, g), this._objects.push(g);
          else
            a(this._objects, n), this._objects.push(n);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or a selection down in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in behind
         * the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendBackwards: function(n, h) {
          if (!n)
            return this;
          var f = this._activeObject, g, p, m, C, w, x = 0;
          if (n === f && n.type === "activeSelection")
            for (w = f._objects, g = 0; g < w.length; g++)
              p = w[g], m = this._objects.indexOf(p), m > 0 + x && (C = m - 1, a(this._objects, p), this._objects.splice(C, 0, p)), x++;
          else
            m = this._objects.indexOf(n), m !== 0 && (C = this._findNewLowerIndex(n, m, h), a(this._objects, n), this._objects.splice(C, 0, n));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewLowerIndex: function(n, h, f) {
          var g, p;
          if (f)
            for (g = h, p = h - 1; p >= 0; --p) {
              var m = n.intersectsWithObject(this._objects[p]) || n.isContainedWithinObject(this._objects[p]) || this._objects[p].isContainedWithinObject(n);
              if (m) {
                g = p;
                break;
              }
            }
          else
            g = h - 1;
          return g;
        },
        /**
         * Moves an object or a selection up in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in front
         * of the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringForward: function(n, h) {
          if (!n)
            return this;
          var f = this._activeObject, g, p, m, C, w, x = 0;
          if (n === f && n.type === "activeSelection")
            for (w = f._objects, g = w.length; g--; )
              p = w[g], m = this._objects.indexOf(p), m < this._objects.length - 1 - x && (C = m + 1, a(this._objects, p), this._objects.splice(C, 0, p)), x++;
          else
            m = this._objects.indexOf(n), m !== this._objects.length - 1 && (C = this._findNewUpperIndex(n, m, h), a(this._objects, n), this._objects.splice(C, 0, n));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewUpperIndex: function(n, h, f) {
          var g, p, m;
          if (f)
            for (g = h, p = h + 1, m = this._objects.length; p < m; ++p) {
              var C = n.intersectsWithObject(this._objects[p]) || n.isContainedWithinObject(this._objects[p]) || this._objects[p].isContainedWithinObject(n);
              if (C) {
                g = p;
                break;
              }
            }
          else
            g = h + 1;
          return g;
        },
        /**
         * Moves an object to specified level in stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @param {Number} index Position to move to
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        moveTo: function(n, h) {
          return a(this._objects, n), this._objects.splice(h, 0, n), this.renderOnAddRemove && this.requestRenderAll();
        },
        /**
         * Clears a canvas element and dispose objects
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          return this.isRendering && (c.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(n) {
            n.dispose && n.dispose();
          }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), c.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle), delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), c.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
        },
        /**
         * Returns a string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
        }
      }
    ), u(c.StaticCanvas.prototype, c.Observable), u(c.StaticCanvas.prototype, c.Collection), u(c.StaticCanvas.prototype, c.DataURLExporter), u(
      c.StaticCanvas,
      /** @lends fabric.StaticCanvas */
      {
        /**
         * @static
         * @type String
         * @default
         */
        EMPTY_JSON: '{"objects": [], "background": "white"}',
        /**
         * Provides a way to check support of some of the canvas methods
         * (either those of HTMLCanvasElement itself, or rendering context)
         *
         * @param {String} methodName Method to check support for;
         *                            Could be one of "setLineDash"
         * @return {Boolean | null} `true` if method is supported (or at least exists),
         *                          `null` if canvas element or context can not be initialized
         */
        supports: function(n) {
          var h = s();
          if (!h || !h.getContext)
            return null;
          var f = h.getContext("2d");
          if (!f)
            return null;
          switch (n) {
            case "setLineDash":
              return typeof f.setLineDash < "u";
            default:
              return null;
          }
        }
      }
    ), c.StaticCanvas.prototype.toJSON = c.StaticCanvas.prototype.toObject, c.isLikelyNode && (c.StaticCanvas.prototype.createPNGStream = function() {
      var n = t(this.lowerCanvasEl);
      return n && n.createPNGStream();
    }, c.StaticCanvas.prototype.createJPEGStream = function(n) {
      var h = t(this.lowerCanvasEl);
      return h && h.createJPEGStream(n);
    });
  }(), c.BaseBrush = c.util.createClass(
    /** @lends fabric.BaseBrush.prototype */
    {
      /**
       * Color of a brush
       * @type String
       * @default
       */
      color: "rgb(0, 0, 0)",
      /**
       * Width of a brush, has to be a Number, no string literals
       * @type Number
       * @default
       */
      width: 1,
      /**
       * Shadow object representing shadow of this shape.
       * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
       * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
       * @type fabric.Shadow
       * @default
       */
      shadow: null,
      /**
       * Line endings style of a brush (one of "butt", "round", "square")
       * @type String
       * @default
       */
      strokeLineCap: "round",
      /**
       * Corner style of a brush (one of "bevel", "round", "miter")
       * @type String
       * @default
       */
      strokeLineJoin: "round",
      /**
       * Maximum miter length (used for strokeLineJoin = "miter") of a brush's
       * @type Number
       * @default
       */
      strokeMiterLimit: 10,
      /**
       * Stroke Dash Array.
       * @type Array
       * @default
       */
      strokeDashArray: null,
      /**
       * When `true`, the free drawing is limited to the whiteboard size. Default to false.
       * @type Boolean
       * @default false
      */
      limitedToCanvasSize: !1,
      /**
       * Sets brush styles
       * @private
       * @param {CanvasRenderingContext2D} ctx
       */
      _setBrushStyles: function(u) {
        u.strokeStyle = this.color, u.lineWidth = this.width, u.lineCap = this.strokeLineCap, u.miterLimit = this.strokeMiterLimit, u.lineJoin = this.strokeLineJoin, u.setLineDash(this.strokeDashArray || []);
      },
      /**
       * Sets the transformation on given context
       * @param {RenderingContext2d} ctx context to render on
       * @private
       */
      _saveAndTransform: function(u) {
        var i = this.canvas.viewportTransform;
        u.save(), u.transform(i[0], i[1], i[2], i[3], i[4], i[5]);
      },
      /**
       * Sets brush shadow styles
       * @private
       */
      _setShadow: function() {
        if (this.shadow) {
          var u = this.canvas, i = this.shadow, a = u.contextTop, o = u.getZoom();
          u && u._isRetinaScaling() && (o *= c.devicePixelRatio), a.shadowColor = i.color, a.shadowBlur = i.blur * o, a.shadowOffsetX = i.offsetX * o, a.shadowOffsetY = i.offsetY * o;
        }
      },
      needsFullRender: function() {
        var u = new c.Color(this.color);
        return u.getAlpha() < 1 || !!this.shadow;
      },
      /**
       * Removes brush shadow styles
       * @private
       */
      _resetShadow: function() {
        var u = this.canvas.contextTop;
        u.shadowColor = "", u.shadowBlur = u.shadowOffsetX = u.shadowOffsetY = 0;
      },
      /**
       * Check is pointer is outside canvas boundaries
       * @param {Object} pointer
       * @private
      */
      _isOutSideCanvas: function(u) {
        return u.x < 0 || u.x > this.canvas.getWidth() || u.y < 0 || u.y > this.canvas.getHeight();
      }
    }
  ), function() {
    c.PencilBrush = c.util.createClass(
      c.BaseBrush,
      /** @lends fabric.PencilBrush.prototype */
      {
        /**
         * Discard points that are less than `decimate` pixel distant from each other
         * @type Number
         * @default 0.4
         */
        decimate: 0.4,
        /**
         * Draws a straight line between last recorded point to current pointer
         * Used for `shift` functionality
         *
         * @type boolean
         * @default false
         */
        drawStraightLine: !1,
        /**
         * The event modifier key that makes the brush draw a straight line.
         * If `null` or 'none' or any other string that is not a modifier key the feature is disabled.
         * @type {'altKey' | 'shiftKey' | 'ctrlKey' | 'none' | undefined | null}
         */
        straightLineKey: "shiftKey",
        /**
         * Constructor
         * @param {fabric.Canvas} canvas
         * @return {fabric.PencilBrush} Instance of a pencil brush
         */
        initialize: function(u) {
          this.canvas = u, this._points = [];
        },
        needsFullRender: function() {
          return this.callSuper("needsFullRender") || this._hasStraightLine;
        },
        /**
         * Invoked inside on mouse down and mouse move
         * @param {Object} pointer
         */
        _drawSegment: function(u, i, a) {
          var o = i.midPointFrom(a);
          return u.quadraticCurveTo(i.x, i.y, o.x, o.y), o;
        },
        /**
         * Invoked on mouse down
         * @param {Object} pointer
         */
        onMouseDown: function(u, i) {
          this.canvas._isMainEvent(i.e) && (this.drawStraightLine = i.e[this.straightLineKey], this._prepareForDrawing(u));
        },
        /**
         * Invoked on mouse move
         * @param {Object} pointer
         */
        onMouseMove: function(u, i) {
          if (this.canvas._isMainEvent(i.e) && (this.drawStraightLine = i.e[this.straightLineKey], !(this.limitedToCanvasSize === !0 && this._isOutSideCanvas(u)) && this._captureDrawingPath(u) && this._points.length > 1))
            if (this.needsFullRender())
              this.canvas.clearContext(this.canvas.contextTop), this._render();
            else {
              var a = this._points, o = a.length, e = this.canvas.contextTop;
              this._saveAndTransform(e), e.beginPath(), this.oldEnd && e.moveTo(this.oldEnd.x, this.oldEnd.y), this.oldEnd = this._drawSegment(e, a[o - 2], a[o - 1], !0), e.stroke(), e.restore();
            }
        },
        /**
         * Invoked on mouse up
         */
        onMouseUp: function(u) {
          return this.canvas._isMainEvent(u.e) ? (this.finish(), !1) : !0;
        },
        finish: function() {
          this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath();
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _prepareForDrawing: function(u) {
          var i = new c.Point(u.x, u.y);
          this._reset(), this._addPoint(i), this.canvas.contextTop.moveTo(i.x, i.y);
        },
        /**
         * @private
         * @param {fabric.Point} point Point to be added to points array
         */
        _addPoint: function(u) {
          return this._points.length > 1 && u.eq(this._points[this._points.length - 1]) ? !1 : (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(u), !0);
        },
        /**
         * Clear points array and set contextTop canvas style.
         * @private
         */
        _reset: function() {
          this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _captureDrawingPath: function(u) {
          var i = new c.Point(u.x, u.y);
          return this._addPoint(i);
        },
        /**
         * Draw a smooth path on the topCanvas using quadraticCurveTo
         * @private
         * @param {CanvasRenderingContext2D} [ctx]
         */
        _render: function(u) {
          var i, a, o = this._points[0], e = this._points[1];
          if (u = u || this.canvas.contextTop, this._saveAndTransform(u), u.beginPath(), this._points.length === 2 && o.x === e.x && o.y === e.y) {
            var r = this.width / 1e3;
            o = new c.Point(o.x, o.y), e = new c.Point(e.x, e.y), o.x -= r, e.x += r;
          }
          for (u.moveTo(o.x, o.y), i = 1, a = this._points.length; i < a; i++)
            this._drawSegment(u, o, e), o = this._points[i], e = this._points[i + 1];
          u.lineTo(o.x, o.y), u.stroke(), u.restore();
        },
        /**
         * Converts points to SVG path
         * @param {Array} points Array of points
         * @return {(string|number)[][]} SVG path commands
         */
        convertPointsToSVGPath: function(u) {
          var i = this.width / 1e3;
          return c.util.getSmoothPathFromPoints(u, i);
        },
        /**
         * @private
         * @param {(string|number)[][]} pathData SVG path commands
         * @returns {boolean}
         */
        _isEmptySVGPath: function(u) {
          var i = c.util.joinPath(u);
          return i === "M 0 0 Q 0 0 0 0 L 0 0";
        },
        /**
         * Creates fabric.Path object to add on canvas
         * @param {(string|number)[][]} pathData Path data
         * @return {fabric.Path} Path to add on canvas
         */
        createPath: function(u) {
          var i = new c.Path(u, {
            fill: null,
            stroke: this.color,
            strokeWidth: this.width,
            strokeLineCap: this.strokeLineCap,
            strokeMiterLimit: this.strokeMiterLimit,
            strokeLineJoin: this.strokeLineJoin,
            strokeDashArray: this.strokeDashArray
          });
          return this.shadow && (this.shadow.affectStroke = !0, i.shadow = new c.Shadow(this.shadow)), i;
        },
        /**
         * Decimate points array with the decimate value
         */
        decimatePoints: function(u, i) {
          if (u.length <= 2)
            return u;
          var a = this.canvas.getZoom(), o = Math.pow(i / a, 2), e, r = u.length - 1, t = u[0], s = [t], l;
          for (e = 1; e < r - 1; e++)
            l = Math.pow(t.x - u[e].x, 2) + Math.pow(t.y - u[e].y, 2), l >= o && (t = u[e], s.push(t));
          return s.push(u[r]), s;
        },
        /**
         * On mouseup after drawing the path on contextTop canvas
         * we use the points captured to create an new fabric path object
         * and add it to the fabric canvas.
         */
        _finalizeAndAddPath: function() {
          var u = this.canvas.contextTop;
          if (u.closePath(), this._points.length < 2) {
            this.canvas.clearContext(this.canvas.contextTop), this.canvas.requestRenderAll(), this._resetShadow();
            return;
          }
          this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
          var i = this.convertPointsToSVGPath(this._points);
          if (this._isEmptySVGPath(i)) {
            this.canvas.requestRenderAll();
            return;
          }
          var a = this.createPath(i);
          this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: a }), this.canvas.add(a), this.canvas.requestRenderAll(), a.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: a });
        }
      }
    );
  }(), c.CircleBrush = c.util.createClass(
    c.BaseBrush,
    /** @lends fabric.CircleBrush.prototype */
    {
      /**
       * Width of a brush
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.CircleBrush} Instance of a circle brush
       */
      initialize: function(u) {
        this.canvas = u, this.points = [];
      },
      /**
       * Invoked inside on mouse down and mouse move
       * @param {Object} pointer
       */
      drawDot: function(u) {
        var i = this.addPoint(u), a = this.canvas.contextTop;
        this._saveAndTransform(a), this.dot(a, i), a.restore();
      },
      dot: function(u, i) {
        u.fillStyle = i.fill, u.beginPath(), u.arc(i.x, i.y, i.radius, 0, Math.PI * 2, !1), u.closePath(), u.fill();
      },
      /**
       * Invoked on mouse down
       */
      onMouseDown: function(u) {
        this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(u);
      },
      /**
       * Render the full state of the brush
       * @private
       */
      _render: function() {
        var u = this.canvas.contextTop, i, a, o = this.points;
        for (this._saveAndTransform(u), i = 0, a = o.length; i < a; i++)
          this.dot(u, o[i]);
        u.restore();
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(u) {
        this.limitedToCanvasSize === !0 && this._isOutSideCanvas(u) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(u), this._render()) : this.drawDot(u));
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var u = this.canvas.renderOnAddRemove, i, a;
        this.canvas.renderOnAddRemove = !1;
        var o = [];
        for (i = 0, a = this.points.length; i < a; i++) {
          var e = this.points[i], r = new c.Circle({
            radius: e.radius,
            left: e.x,
            top: e.y,
            originX: "center",
            originY: "center",
            fill: e.fill
          });
          this.shadow && (r.shadow = new c.Shadow(this.shadow)), o.push(r);
        }
        var t = new c.Group(o);
        t.canvas = this.canvas, this.canvas.fire("before:path:created", { path: t }), this.canvas.add(t), this.canvas.fire("path:created", { path: t }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = u, this.canvas.requestRenderAll();
      },
      /**
       * @param {Object} pointer
       * @return {fabric.Point} Just added pointer point
       */
      addPoint: function(u) {
        var i = new c.Point(u.x, u.y), a = c.util.getRandomInt(
          Math.max(0, this.width - 20),
          this.width + 20
        ) / 2, o = new c.Color(this.color).setAlpha(c.util.getRandomInt(0, 100) / 100).toRgba();
        return i.radius = a, i.fill = o, this.points.push(i), i;
      }
    }
  ), c.SprayBrush = c.util.createClass(
    c.BaseBrush,
    /** @lends fabric.SprayBrush.prototype */
    {
      /**
       * Width of a spray
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Density of a spray (number of dots per chunk)
       * @type Number
       * @default
       */
      density: 20,
      /**
       * Width of spray dots
       * @type Number
       * @default
       */
      dotWidth: 1,
      /**
       * Width variance of spray dots
       * @type Number
       * @default
       */
      dotWidthVariance: 1,
      /**
       * Whether opacity of a dot should be random
       * @type Boolean
       * @default
       */
      randomOpacity: !1,
      /**
       * Whether overlapping dots (rectangles) should be removed (for performance reasons)
       * @type Boolean
       * @default
       */
      optimizeOverlapping: !0,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.SprayBrush} Instance of a spray brush
       */
      initialize: function(u) {
        this.canvas = u, this.sprayChunks = [];
      },
      /**
       * Invoked on mouse down
       * @param {Object} pointer
       */
      onMouseDown: function(u) {
        this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(u), this.render(this.sprayChunkPoints);
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(u) {
        this.limitedToCanvasSize === !0 && this._isOutSideCanvas(u) || (this.addSprayChunk(u), this.render(this.sprayChunkPoints));
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var u = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        for (var i = [], a = 0, o = this.sprayChunks.length; a < o; a++)
          for (var e = this.sprayChunks[a], r = 0, t = e.length; r < t; r++) {
            var s = new c.Rect({
              width: e[r].width,
              height: e[r].width,
              left: e[r].x + 1,
              top: e[r].y + 1,
              originX: "center",
              originY: "center",
              fill: this.color
            });
            i.push(s);
          }
        this.optimizeOverlapping && (i = this._getOptimizedRects(i));
        var l = new c.Group(i);
        this.shadow && l.set("shadow", new c.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: l }), this.canvas.add(l), this.canvas.fire("path:created", { path: l }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = u, this.canvas.requestRenderAll();
      },
      /**
       * @private
       * @param {Array} rects
       */
      _getOptimizedRects: function(u) {
        var i = {}, a, o, e;
        for (o = 0, e = u.length; o < e; o++)
          a = u[o].left + "" + u[o].top, i[a] || (i[a] = u[o]);
        var r = [];
        for (a in i)
          r.push(i[a]);
        return r;
      },
      /**
       * Render new chunk of spray brush
       */
      render: function(u) {
        var i = this.canvas.contextTop, a, o;
        for (i.fillStyle = this.color, this._saveAndTransform(i), a = 0, o = u.length; a < o; a++) {
          var e = u[a];
          typeof e.opacity < "u" && (i.globalAlpha = e.opacity), i.fillRect(e.x, e.y, e.width, e.width);
        }
        i.restore();
      },
      /**
       * Render all spray chunks
       */
      _render: function() {
        var u = this.canvas.contextTop, i, a;
        for (u.fillStyle = this.color, this._saveAndTransform(u), i = 0, a = this.sprayChunks.length; i < a; i++)
          this.render(this.sprayChunks[i]);
        u.restore();
      },
      /**
       * @param {Object} pointer
       */
      addSprayChunk: function(u) {
        this.sprayChunkPoints = [];
        var i, a, o, e = this.width / 2, r;
        for (r = 0; r < this.density; r++) {
          i = c.util.getRandomInt(u.x - e, u.x + e), a = c.util.getRandomInt(u.y - e, u.y + e), this.dotWidthVariance ? o = c.util.getRandomInt(
            // bottom clamp width to 1
            Math.max(1, this.dotWidth - this.dotWidthVariance),
            this.dotWidth + this.dotWidthVariance
          ) : o = this.dotWidth;
          var t = new c.Point(i, a);
          t.width = o, this.randomOpacity && (t.opacity = c.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(t);
        }
        this.sprayChunks.push(this.sprayChunkPoints);
      }
    }
  ), c.PatternBrush = c.util.createClass(
    c.PencilBrush,
    /** @lends fabric.PatternBrush.prototype */
    {
      getPatternSrc: function() {
        var u = 20, i = 5, a = c.util.createCanvasElement(), o = a.getContext("2d");
        return a.width = a.height = u + i, o.fillStyle = this.color, o.beginPath(), o.arc(u / 2, u / 2, u / 2, 0, Math.PI * 2, !1), o.closePath(), o.fill(), a;
      },
      getPatternSrcFunction: function() {
        return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
      },
      /**
       * Creates "pattern" instance property
       * @param {CanvasRenderingContext2D} ctx
       */
      getPattern: function(u) {
        return u.createPattern(this.source || this.getPatternSrc(), "repeat");
      },
      /**
       * Sets brush styles
       * @param {CanvasRenderingContext2D} ctx
       */
      _setBrushStyles: function(u) {
        this.callSuper("_setBrushStyles", u), u.strokeStyle = this.getPattern(u);
      },
      /**
       * Creates path
       */
      createPath: function(u) {
        var i = this.callSuper("createPath", u), a = i._getLeftTopCoords().scalarAdd(i.strokeWidth / 2);
        return i.stroke = new c.Pattern({
          source: this.source || this.getPatternSrcFunction(),
          offsetX: -a.x,
          offsetY: -a.y
        }), i;
      }
    }
  ), function() {
    var u = c.util.getPointer, i = c.util.degreesToRadians, a = c.util.isTouchEvent;
    c.Canvas = c.util.createClass(
      c.StaticCanvas,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(e, r) {
          r || (r = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(e, r), this._initInteractive(), this._createCacheCanvas();
        },
        /**
         * When true, objects can be transformed by one side (unproportionally)
         * when dragged on the corners that normally would not do that.
         * @type Boolean
         * @default
         * @since fabric 4.0 // changed name and default value
         */
        uniformScaling: !0,
        /**
         * Indicates which key switches uniform scaling.
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * totally wrong named. this sounds like `uniform scaling`
         * if Canvas.uniformScaling is true, pressing this will set it to false
         * and viceversa.
         * @since 1.6.2
         * @type String
         * @default
         */
        uniScaleKey: "shiftKey",
        /**
         * When true, objects use center point as the origin of scale transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, objects use center point as the origin of rotate transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !1,
        /**
         * Indicates which key enable centered Transform
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        centeredKey: "altKey",
        /**
         * Indicates which key enable alternate action on corner
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        altActionKey: "shiftKey",
        /**
         * Indicates that canvas is interactive. This property should not be changed.
         * @type Boolean
         * @default
         */
        interactive: !0,
        /**
         * Indicates whether group selection should be enabled
         * @type Boolean
         * @default
         */
        selection: !0,
        /**
         * Indicates which key or keys enable multiple click selection
         * Pass value as a string or array of strings
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or empty or containing any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.2
         * @type String|Array
         * @default
         */
        selectionKey: "shiftKey",
        /**
         * Indicates which key enable alternative selection
         * in case of target overlapping with active object
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * For a series of reason that come from the general expectations on how
         * things should work, this feature works only for preserveObjectStacking true.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.5
         * @type null|String
         * @default
         */
        altSelectionKey: null,
        /**
         * Color of selection
         * @type String
         * @default
         */
        selectionColor: "rgba(100, 100, 255, 0.3)",
        // blue
        /**
         * Default dash array pattern
         * If not empty the selection border is dashed
         * @type Array
         */
        selectionDashArray: [],
        /**
         * Color of the border of selection (usually slightly darker than color of selection itself)
         * @type String
         * @default
         */
        selectionBorderColor: "rgba(255, 255, 255, 0.3)",
        /**
         * Width of a line used in object/group selection
         * @type Number
         * @default
         */
        selectionLineWidth: 1,
        /**
         * Select only shapes that are fully contained in the dragged selection rectangle.
         * @type Boolean
         * @default
         */
        selectionFullyContained: !1,
        /**
         * Default cursor value used when hovering over an object on canvas
         * @type String
         * @default
         */
        hoverCursor: "move",
        /**
         * Default cursor value used when moving an object on canvas
         * @type String
         * @default
         */
        moveCursor: "move",
        /**
         * Default cursor value used for the entire canvas
         * @type String
         * @default
         */
        defaultCursor: "default",
        /**
         * Cursor value used during free drawing
         * @type String
         * @default
         */
        freeDrawingCursor: "crosshair",
        /**
         * Cursor value used for disabled elements ( corners with disabled action )
         * @type String
         * @since 2.0.0
         * @default
         */
        notAllowedCursor: "not-allowed",
        /**
         * Default element class that's given to wrapper (div) element of canvas
         * @type String
         * @default
         */
        containerClass: "canvas-container",
        /**
         * When true, object detection happens on per-pixel basis rather than on per-bounding-box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * Number of pixels around target pixel to tolerate (consider active) during object detection
         * @type Number
         * @default
         */
        targetFindTolerance: 0,
        /**
         * When true, target detection is skipped. Target detection will return always undefined.
         * click selection won't work anymore, events will fire with no targets.
         * if something is selected before setting it to true, it will be deselected at the first click.
         * area selection will still work. check the `selection` property too.
         * if you deactivate both, you should look into staticCanvas.
         * @type Boolean
         * @default
         */
        skipTargetFind: !1,
        /**
         * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
         * After mousedown, mousemove creates a shape,
         * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-4#free_drawing}
         * @type Boolean
         * @default
         */
        isDrawingMode: !1,
        /**
         * Indicates whether objects should remain in current stack position when selected.
         * When false objects are brought to top and rendered as part of the selection group
         * @type Boolean
         * @default
         */
        preserveObjectStacking: !1,
        /**
         * Indicates the angle that an object will lock to while rotating.
         * @type Number
         * @since 1.6.7
         * @default
         */
        snapAngle: 0,
        /**
         * Indicates the distance from the snapAngle the rotation will lock to the snapAngle.
         * When `null`, the snapThreshold will default to the snapAngle.
         * @type null|Number
         * @since 1.6.7
         * @default
         */
        snapThreshold: null,
        /**
         * Indicates if the right click on canvas can output the context menu or not
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        stopContextMenu: !1,
        /**
         * Indicates if the canvas can fire right click events
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        fireRightClick: !1,
        /**
         * Indicates if the canvas can fire middle click events
         * @type Boolean
         * @since 1.7.8
         * @default
         */
        fireMiddleClick: !1,
        /**
         * Keep track of the subTargets for Mouse Events
         * @type fabric.Object[]
         */
        targets: [],
        /**
         * When the option is enabled, PointerEvent is used instead of MouseEvent.
         * @type Boolean
         * @default
         */
        enablePointerEvents: !1,
        /**
         * Keep track of the hovered target
         * @type fabric.Object
         * @private
         */
        _hoveredTarget: null,
        /**
         * hold the list of nested targets hovered
         * @type fabric.Object[]
         * @private
         */
        _hoveredTargets: [],
        /**
         * @private
         */
        _initInteractive: function() {
          this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = c.PencilBrush && new c.PencilBrush(this), this.calcOffset();
        },
        /**
         * Divides objects in two groups, one to render immediately
         * and one to render as activeGroup.
         * @return {Array} objects to render immediately and pushes the other in the activeGroup.
         */
        _chooseObjectsToRender: function() {
          var e = this.getActiveObjects(), r, t, s;
          if (e.length > 0 && !this.preserveObjectStacking) {
            t = [], s = [];
            for (var l = 0, n = this._objects.length; l < n; l++)
              r = this._objects[l], e.indexOf(r) === -1 ? t.push(r) : s.push(r);
            e.length > 1 && (this._activeObject._objects = s), t.push.apply(t, s);
          } else
            t = this._objects;
          return t;
        },
        /**
         * Renders both the top canvas and the secondary container canvas.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          this.contextTopDirty && !this._groupSelector && !this.isDrawingMode && (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1);
          var e = this.contextContainer;
          return this.renderCanvas(e, this._chooseObjectsToRender()), this;
        },
        renderTopLayer: function(e) {
          e.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(e), this.contextTopDirty = !0), e.restore();
        },
        /**
         * Method to render only the top canvas.
         * Also used to render the group selection box.
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        renderTop: function() {
          var e = this.contextTop;
          return this.clearContext(e), this.renderTopLayer(e), this.fire("after:render"), this;
        },
        /**
         * @private
         */
        _normalizePointer: function(e, r) {
          var t = e.calcTransformMatrix(), s = c.util.invertTransform(t), l = this.restorePointerVpt(r);
          return c.util.transformPoint(l, s);
        },
        /**
         * Returns true if object is transparent at a certain location
         * @param {fabric.Object} target Object to check
         * @param {Number} x Left coordinate
         * @param {Number} y Top coordinate
         * @return {Boolean}
         */
        isTargetTransparent: function(e, r, t) {
          if (e.shouldCache() && e._cacheCanvas && e !== this._activeObject) {
            var s = this._normalizePointer(e, { x: r, y: t }), l = Math.max(e.cacheTranslationX + s.x * e.zoomX, 0), n = Math.max(e.cacheTranslationY + s.y * e.zoomY, 0), p = c.util.isTransparent(
              e._cacheContext,
              Math.round(l),
              Math.round(n),
              this.targetFindTolerance
            );
            return p;
          }
          var h = this.contextCache, f = e.selectionBackgroundColor, g = this.viewportTransform;
          e.selectionBackgroundColor = "", this.clearContext(h), h.save(), h.transform(g[0], g[1], g[2], g[3], g[4], g[5]), e.render(h), h.restore(), e.selectionBackgroundColor = f;
          var p = c.util.isTransparent(
            h,
            r,
            t,
            this.targetFindTolerance
          );
          return p;
        },
        /**
         * takes an event and determines if selection key has been pressed
         * @private
         * @param {Event} e Event object
         */
        _isSelectionKeyPressed: function(e) {
          var r = !1;
          return Array.isArray(this.selectionKey) ? r = !!this.selectionKey.find(function(t) {
            return e[t] === !0;
          }) : r = e[this.selectionKey], r;
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _shouldClearSelection: function(e, r) {
          var t = this.getActiveObjects(), s = this._activeObject;
          return !r || r && s && t.length > 1 && t.indexOf(r) === -1 && s !== r && !this._isSelectionKeyPressed(e) || r && !r.evented || r && !r.selectable && s && s !== r;
        },
        /**
         * centeredScaling from object can't override centeredScaling from canvas.
         * this should be fixed, since object setting should take precedence over canvas.
         * also this should be something that will be migrated in the control properties.
         * as ability to define the origin of the transformation that the control provide.
         * @private
         * @param {fabric.Object} target
         * @param {String} action
         * @param {Boolean} altKey
         */
        _shouldCenterTransform: function(e, r, t) {
          if (e) {
            var s;
            return r === "scale" || r === "scaleX" || r === "scaleY" || r === "resizing" ? s = this.centeredScaling || e.centeredScaling : r === "rotate" && (s = this.centeredRotation || e.centeredRotation), s ? !t : t;
          }
        },
        /**
         * should disappear before release 4.0
         * @private
         */
        _getOriginFromCorner: function(e, r) {
          var t = {
            x: e.originX,
            y: e.originY
          };
          return r === "ml" || r === "tl" || r === "bl" ? t.x = "right" : (r === "mr" || r === "tr" || r === "br") && (t.x = "left"), r === "tl" || r === "mt" || r === "tr" ? t.y = "bottom" : (r === "bl" || r === "mb" || r === "br") && (t.y = "top"), t;
        },
        /**
         * @private
         * @param {Boolean} alreadySelected true if target is already selected
         * @param {String} corner a string representing the corner ml, mr, tl ...
         * @param {Event} e Event object
         * @param {fabric.Object} [target] inserted back to help overriding. Unused
         */
        _getActionFromCorner: function(e, r, t, s) {
          if (!r || !e)
            return "drag";
          var l = s.controls[r];
          return l.getActionName(t, l, s);
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _setupCurrentTransform: function(e, r, t) {
          if (r) {
            var s = this.getPointer(e), l = r.__corner, n = r.controls[l], h = t && l ? n.getActionHandler(e, r, n) : c.controlsUtils.dragHandler, f = this._getActionFromCorner(t, l, e, r), g = this._getOriginFromCorner(r, l), p = e[this.centeredKey], m = {
              target: r,
              action: f,
              actionHandler: h,
              corner: l,
              scaleX: r.scaleX,
              scaleY: r.scaleY,
              skewX: r.skewX,
              skewY: r.skewY,
              // used by transation
              offsetX: s.x - r.left,
              offsetY: s.y - r.top,
              originX: g.x,
              originY: g.y,
              ex: s.x,
              ey: s.y,
              lastX: s.x,
              lastY: s.y,
              // unsure they are useful anymore.
              // left: target.left,
              // top: target.top,
              theta: i(r.angle),
              // end of unsure
              width: r.width * r.scaleX,
              shiftKey: e.shiftKey,
              altKey: p,
              original: c.util.saveObjectTransform(r)
            };
            this._shouldCenterTransform(r, f, p) && (m.originX = "center", m.originY = "center"), m.original.originX = g.x, m.original.originY = g.y, this._currentTransform = m, this._beforeTransform(e);
          }
        },
        /**
         * Set the cursor type of the canvas element
         * @param {String} value Cursor type of the canvas element.
         * @see http://www.w3.org/TR/css3-ui/#cursor
         */
        setCursor: function(e) {
          this.upperCanvasEl.style.cursor = e;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx to draw the selection on
         */
        _drawSelection: function(e) {
          var r = this._groupSelector, t = new c.Point(r.ex, r.ey), s = c.util.transformPoint(t, this.viewportTransform), l = new c.Point(r.ex + r.left, r.ey + r.top), n = c.util.transformPoint(l, this.viewportTransform), h = Math.min(s.x, n.x), f = Math.min(s.y, n.y), g = Math.max(s.x, n.x), p = Math.max(s.y, n.y), m = this.selectionLineWidth / 2;
          this.selectionColor && (e.fillStyle = this.selectionColor, e.fillRect(h, f, g - h, p - f)), !(!this.selectionLineWidth || !this.selectionBorderColor) && (e.lineWidth = this.selectionLineWidth, e.strokeStyle = this.selectionBorderColor, h += m, f += m, g -= m, p -= m, c.Object.prototype._setLineDash.call(this, e, this.selectionDashArray), e.strokeRect(h, f, g - h, p - f));
        },
        /**
         * Method that determines what object we are clicking on
         * the skipGroup parameter is for internal use, is needed for shift+click action
         * 11/09/2018 TODO: would be cool if findTarget could discern between being a full target
         * or the outside part of the corner.
         * @param {Event} e mouse event
         * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
         * @return {fabric.Object} the target found
         */
        findTarget: function(e, r) {
          if (!this.skipTargetFind) {
            var t = !0, s = this.getPointer(e, t), l = this._activeObject, n = this.getActiveObjects(), h, f, g = a(e), p = n.length > 1 && !r || n.length === 1;
            if (this.targets = [], p && l._findTargetCorner(s, g) || n.length > 1 && !r && l === this._searchPossibleTargets([l], s))
              return l;
            if (n.length === 1 && l === this._searchPossibleTargets([l], s))
              if (this.preserveObjectStacking)
                h = l, f = this.targets, this.targets = [];
              else
                return l;
            var m = this._searchPossibleTargets(this._objects, s);
            return e[this.altSelectionKey] && m && h && m !== h && (m = h, this.targets = f), m;
          }
        },
        /**
         * Checks point is inside the object.
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @param {fabric.Object} obj Object to test against
         * @param {Object} [globalPointer] x,y object of point coordinates relative to canvas used to search per pixel target.
         * @return {Boolean} true if point is contained within an area of given object
         * @private
         */
        _checkTarget: function(e, r, t) {
          if (r && r.visible && r.evented && // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
          // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
          r.containsPoint(e))
            if ((this.perPixelTargetFind || r.perPixelTargetFind) && !r.isEditing) {
              var s = this.isTargetTransparent(r, t.x, t.y);
              if (!s)
                return !0;
            } else
              return !0;
        },
        /**
         * Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted
         * @param {Array} [objects] objects array to look into
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @return {fabric.Object} object that contains pointer
         * @private
         */
        _searchPossibleTargets: function(e, r) {
          for (var t, s = e.length, l; s--; ) {
            var n = e[s], h = n.group ? this._normalizePointer(n.group, r) : r;
            if (this._checkTarget(h, n, r)) {
              t = e[s], t.subTargetCheck && t instanceof c.Group && (l = this._searchPossibleTargets(t._objects, r), l && this.targets.push(l));
              break;
            }
          }
          return t;
        },
        /**
         * Returns pointer coordinates without the effect of the viewport
         * @param {Object} pointer with "x" and "y" number values
         * @return {Object} object with "x" and "y" number values
         */
        restorePointerVpt: function(e) {
          return c.util.transformPoint(
            e,
            c.util.invertTransform(this.viewportTransform)
          );
        },
        /**
         * Returns pointer coordinates relative to canvas.
         * Can return coordinates with or without viewportTransform.
         * ignoreZoom false gives back coordinates that represent
         * the point clicked on canvas element.
         * ignoreZoom true gives back coordinates after being processed
         * by the viewportTransform ( sort of coordinates of what is displayed
         * on the canvas where you are clicking.
         * ignoreZoom true = HTMLElement coordinates relative to top,left
         * ignoreZoom false, default = fabric space coordinates, the same used for shape position
         * To interact with your shapes top and left you want to use ignoreZoom true
         * most of the time, while ignoreZoom false will give you coordinates
         * compatible with the object.oCoords system.
         * of the time.
         * @param {Event} e
         * @param {Boolean} ignoreZoom
         * @return {Object} object with "x" and "y" number values
         */
        getPointer: function(e, r) {
          if (this._absolutePointer && !r)
            return this._absolutePointer;
          if (this._pointer && r)
            return this._pointer;
          var t = u(e), s = this.upperCanvasEl, l = s.getBoundingClientRect(), n = l.width || 0, h = l.height || 0, f;
          (!n || !h) && ("top" in l && "bottom" in l && (h = Math.abs(l.top - l.bottom)), "right" in l && "left" in l && (n = Math.abs(l.right - l.left))), this.calcOffset(), t.x = t.x - this._offset.left, t.y = t.y - this._offset.top, r || (t = this.restorePointerVpt(t));
          var g = this.getRetinaScaling();
          return g !== 1 && (t.x /= g, t.y /= g), n === 0 || h === 0 ? f = { width: 1, height: 1 } : f = {
            width: s.width / n,
            height: s.height / h
          }, {
            x: t.x * f.width,
            y: t.y * f.height
          };
        },
        /**
         * @private
         * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
         */
        _createUpperCanvas: function() {
          var e = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), r = this.lowerCanvasEl, t = this.upperCanvasEl;
          t ? t.className = "" : (t = this._createCanvasElement(), this.upperCanvasEl = t), c.util.addClass(t, "upper-canvas " + e), this.wrapperEl.appendChild(t), this._copyCanvasStyle(r, t), this._applyCanvasStyle(t), this.contextTop = t.getContext("2d");
        },
        /**
         * Returns context of top canvas where interactions are drawn
         * @returns {CanvasRenderingContext2D}
         */
        getTopContext: function() {
          return this.contextTop;
        },
        /**
         * @private
         */
        _createCacheCanvas: function() {
          this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
        },
        /**
         * @private
         */
        _initWrapperElement: function() {
          this.wrapperEl = c.util.wrapElement(this.lowerCanvasEl, "div", {
            class: this.containerClass
          }), c.util.setStyle(this.wrapperEl, {
            width: this.width + "px",
            height: this.height + "px",
            position: "relative"
          }), c.util.makeElementUnselectable(this.wrapperEl);
        },
        /**
         * @private
         * @param {HTMLElement} element canvas element to apply styles on
         */
        _applyCanvasStyle: function(e) {
          var r = this.width || e.width, t = this.height || e.height;
          c.util.setStyle(e, {
            position: "absolute",
            width: r + "px",
            height: t + "px",
            left: 0,
            top: 0,
            "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
            "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none"
          }), e.width = r, e.height = t, c.util.makeElementUnselectable(e);
        },
        /**
         * Copy the entire inline style from one element (fromEl) to another (toEl)
         * @private
         * @param {Element} fromEl Element style is copied from
         * @param {Element} toEl Element copied style is applied to
         */
        _copyCanvasStyle: function(e, r) {
          r.style.cssText = e.style.cssText;
        },
        /**
         * Returns context of canvas where object selection is drawn
         * @return {CanvasRenderingContext2D}
         */
        getSelectionContext: function() {
          return this.contextTop;
        },
        /**
         * Returns &lt;canvas> element on which object selection is drawn
         * @return {HTMLCanvasElement}
         */
        getSelectionElement: function() {
          return this.upperCanvasEl;
        },
        /**
         * Returns currently active object
         * @return {fabric.Object} active object
         */
        getActiveObject: function() {
          return this._activeObject;
        },
        /**
         * Returns an array with the current selected objects
         * @return {fabric.Object} active object
         */
        getActiveObjects: function() {
          var e = this._activeObject;
          return e ? e.type === "activeSelection" && e._objects ? e._objects.slice(0) : [e] : [];
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(e) {
          e === this._activeObject && (this.fire("before:selection:cleared", { target: e }), this._discardActiveObject(), this.fire("selection:cleared", { target: e }), e.fire("deselected")), e === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", e);
        },
        /**
         * @private
         * Compares the old activeObject with the current one and fires correct events
         * @param {fabric.Object} obj old activeObject
         */
        _fireSelectionEvents: function(e, r) {
          var t = !1, s = this.getActiveObjects(), l = [], n = [];
          e.forEach(function(h) {
            s.indexOf(h) === -1 && (t = !0, h.fire("deselected", {
              e: r,
              target: h
            }), n.push(h));
          }), s.forEach(function(h) {
            e.indexOf(h) === -1 && (t = !0, h.fire("selected", {
              e: r,
              target: h
            }), l.push(h));
          }), e.length > 0 && s.length > 0 ? t && this.fire("selection:updated", {
            e: r,
            selected: l,
            deselected: n
          }) : s.length > 0 ? this.fire("selection:created", {
            e: r,
            selected: l
          }) : e.length > 0 && this.fire("selection:cleared", {
            e: r,
            deselected: n
          });
        },
        /**
         * Sets given object as the only active object on canvas
         * @param {fabric.Object} object Object to set as an active one
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setActiveObject: function(e, r) {
          var t = this.getActiveObjects();
          return this._setActiveObject(e, r), this._fireSelectionEvents(t, r), this;
        },
        /**
         * This is a private method for now.
         * This is supposed to be equivalent to setActiveObject but without firing
         * any event. There is commitment to have this stay this way.
         * This is the functional part of setActiveObject.
         * @private
         * @param {Object} object to set as active
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {Boolean} true if the selection happened
         */
        _setActiveObject: function(e, r) {
          return this._activeObject === e || !this._discardActiveObject(r, e) || e.onSelect({ e: r }) ? !1 : (this._activeObject = e, !0);
        },
        /**
         * This is a private method for now.
         * This is supposed to be equivalent to discardActiveObject but without firing
         * any events. There is commitment to have this stay this way.
         * This is the functional part of discardActiveObject.
         * @param {Event} [e] Event (passed along when firing "object:deselected")
         * @param {Object} object to set as active
         * @return {Boolean} true if the selection happened
         * @private
         */
        _discardActiveObject: function(e, r) {
          var t = this._activeObject;
          if (t) {
            if (t.onDeselect({ e, object: r }))
              return !1;
            this._activeObject = null;
          }
          return !0;
        },
        /**
         * Discards currently active object and fire events. If the function is called by fabric
         * as a consequence of a mouse event, the event is passed as a parameter and
         * sent to the fire function for the custom events. When used as a method the
         * e param does not have any application.
         * @param {event} e
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        discardActiveObject: function(e) {
          var r = this.getActiveObjects(), t = this.getActiveObject();
          return r.length && this.fire("before:selection:cleared", { target: t, e }), this._discardActiveObject(e), this._fireSelectionEvents(r, e), this;
        },
        /**
         * Clears a canvas element and removes all event listeners
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          var e = this.wrapperEl;
          return this.removeListeners(), e.removeChild(this.upperCanvasEl), e.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach(function(r) {
            c.util.cleanUpJsdomNode(this[r]), this[r] = void 0;
          }.bind(this)), e.parentNode && e.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, c.StaticCanvas.prototype.dispose.call(this), this;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
        },
        /**
         * Draws objects' controls (borders/controls)
         * @param {CanvasRenderingContext2D} ctx Context to render controls on
         */
        drawControls: function(e) {
          var r = this._activeObject;
          r && r._renderControls(e);
        },
        /**
         * @private
         */
        _toObject: function(e, r, t) {
          var s = this._realizeGroupTransformOnObject(e), l = this.callSuper("_toObject", e, r, t);
          return this._unwindGroupTransformOnObject(e, s), l;
        },
        /**
         * Realises an object's group transformation on it
         * @private
         * @param {fabric.Object} [instance] the object to transform (gets mutated)
         * @returns the original values of instance which were changed
         */
        _realizeGroupTransformOnObject: function(e) {
          if (e.group && e.group.type === "activeSelection" && this._activeObject === e.group) {
            var r = ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"], t = {};
            return r.forEach(function(s) {
              t[s] = e[s];
            }), c.util.addTransformToObject(e, this._activeObject.calcOwnMatrix()), t;
          } else
            return null;
        },
        /**
         * Restores the changed properties of instance
         * @private
         * @param {fabric.Object} [instance] the object to un-transform (gets mutated)
         * @param {Object} [originalValues] the original values of instance, as returned by _realizeGroupTransformOnObject
         */
        _unwindGroupTransformOnObject: function(e, r) {
          r && e.set(r);
        },
        /**
         * @private
         */
        _setSVGObject: function(e, r, t) {
          var s = this._realizeGroupTransformOnObject(r);
          this.callSuper("_setSVGObject", e, r, t), this._unwindGroupTransformOnObject(r, s);
        },
        setViewportTransform: function(e) {
          this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), c.StaticCanvas.prototype.setViewportTransform.call(this, e);
        }
      }
    );
    for (var o in c.StaticCanvas)
      o !== "prototype" && (c.Canvas[o] = c.StaticCanvas[o]);
  }(), function() {
    var u = c.util.addListener, i = c.util.removeListener, a = 3, o = 2, e = 1, r = { passive: !1 };
    function t(s, l) {
      return s.button && s.button === l - 1;
    }
    c.util.object.extend(
      c.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Contains the id of the touch event that owns the fabric transform
         * @type Number
         * @private
         */
        mainTouchId: null,
        /**
         * Adds mouse listeners to canvas
         * @private
         */
        _initEventListeners: function() {
          this.removeListeners(), this._bindEvents(), this.addOrRemove(u, "add");
        },
        /**
         * return an event prefix pointer or mouse.
         * @private
         */
        _getEventPrefix: function() {
          return this.enablePointerEvents ? "pointer" : "mouse";
        },
        addOrRemove: function(s, l) {
          var n = this.upperCanvasEl, h = this._getEventPrefix();
          s(c.window, "resize", this._onResize), s(n, h + "down", this._onMouseDown), s(n, h + "move", this._onMouseMove, r), s(n, h + "out", this._onMouseOut), s(n, h + "enter", this._onMouseEnter), s(n, "wheel", this._onMouseWheel), s(n, "contextmenu", this._onContextMenu), s(n, "dblclick", this._onDoubleClick), s(n, "dragover", this._onDragOver), s(n, "dragenter", this._onDragEnter), s(n, "dragleave", this._onDragLeave), s(n, "drop", this._onDrop), this.enablePointerEvents || s(n, "touchstart", this._onTouchStart, r), typeof v < "u" && l in v && (v[l](n, "gesture", this._onGesture), v[l](n, "drag", this._onDrag), v[l](n, "orientation", this._onOrientationChange), v[l](n, "shake", this._onShake), v[l](n, "longpress", this._onLongPress));
        },
        /**
         * Removes all event listeners
         */
        removeListeners: function() {
          this.addOrRemove(i, "remove");
          var s = this._getEventPrefix();
          i(c.document, s + "up", this._onMouseUp), i(c.document, "touchend", this._onTouchEnd, r), i(c.document, s + "move", this._onMouseMove, r), i(c.document, "touchmove", this._onMouseMove, r);
        },
        /**
         * @private
         */
        _bindEvents: function() {
          this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._onDrop.bind(this), this.eventsBound = !0);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js gesture
         * @param {Event} [self] Inner Event object
         */
        _onGesture: function(s, l) {
          this.__onTransformGesture && this.__onTransformGesture(s, l);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js drag
         * @param {Event} [self] Inner Event object
         */
        _onDrag: function(s, l) {
          this.__onDrag && this.__onDrag(s, l);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on wheel event
         */
        _onMouseWheel: function(s) {
          this.__onMouseWheel(s);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseOut: function(s) {
          var l = this._hoveredTarget;
          this.fire("mouse:out", { target: l, e: s }), this._hoveredTarget = null, l && l.fire("mouseout", { e: s });
          var n = this;
          this._hoveredTargets.forEach(function(h) {
            n.fire("mouse:out", { target: l, e: s }), h && l.fire("mouseout", { e: s });
          }), this._hoveredTargets = [], this._iTextInstances && this._iTextInstances.forEach(function(h) {
            h.isEditing && h.hiddenTextarea.focus();
          });
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseenter
         */
        _onMouseEnter: function(s) {
          !this._currentTransform && !this.findTarget(s) && (this.fire("mouse:over", { target: null, e: s }), this._hoveredTarget = null, this._hoveredTargets = []);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js orientation change
         * @param {Event} [self] Inner Event object
         */
        _onOrientationChange: function(s, l) {
          this.__onOrientationChange && this.__onOrientationChange(s, l);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onShake: function(s, l) {
          this.__onShake && this.__onShake(s, l);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onLongPress: function(s, l) {
          this.__onLongPress && this.__onLongPress(s, l);
        },
        /**
         * prevent default to allow drop event to be fired
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         */
        _onDragOver: function(s) {
          s.preventDefault();
          var l = this._simpleEventHandler("dragover", s);
          this._fireEnterLeaveEvents(l, s);
        },
        /**
         * `drop:before` is a an event that allow you to schedule logic
         * before the `drop` event. Prefer `drop` event always, but if you need
         * to run some drop-disabling logic on an event, since there is no way
         * to handle event handlers ordering, use `drop:before`
         * @param {Event} e
         */
        _onDrop: function(s) {
          return this._simpleEventHandler("drop:before", s), this._simpleEventHandler("drop", s);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onContextMenu: function(s) {
          return this.stopContextMenu && (s.stopPropagation(), s.preventDefault()), !1;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onDoubleClick: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "dblclick"), this._resetTransformEventData(s);
        },
        /**
         * Return a the id of an event.
         * returns either the pointerId or the identifier or 0 for the mouse event
         * @private
         * @param {Event} evt Event object
         */
        getPointerId: function(s) {
          var l = s.changedTouches;
          return l ? l[0] && l[0].identifier : this.enablePointerEvents ? s.pointerId : -1;
        },
        /**
         * Determines if an event has the id of the event that is considered main
         * @private
         * @param {evt} event Event object
         */
        _isMainEvent: function(s) {
          return s.isPrimary === !0 ? !0 : s.isPrimary === !1 ? !1 : s.type === "touchend" && s.touches.length === 0 ? !0 : s.changedTouches ? s.changedTouches[0].identifier === this.mainTouchId : !0;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchStart: function(s) {
          s.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(s)), this.__onMouseDown(s), this._resetTransformEventData();
          var l = this.upperCanvasEl, n = this._getEventPrefix();
          u(c.document, "touchend", this._onTouchEnd, r), u(c.document, "touchmove", this._onMouseMove, r), i(l, n + "down", this._onMouseDown);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDown: function(s) {
          this.__onMouseDown(s), this._resetTransformEventData();
          var l = this.upperCanvasEl, n = this._getEventPrefix();
          i(l, n + "move", this._onMouseMove, r), u(c.document, n + "up", this._onMouseUp), u(c.document, n + "move", this._onMouseMove, r);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchEnd: function(s) {
          if (!(s.touches.length > 0)) {
            this.__onMouseUp(s), this._resetTransformEventData(), this.mainTouchId = null;
            var l = this._getEventPrefix();
            i(c.document, "touchend", this._onTouchEnd, r), i(c.document, "touchmove", this._onMouseMove, r);
            var n = this;
            this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
              u(n.upperCanvasEl, l + "down", n._onMouseDown), n._willAddMouseDown = 0;
            }, 400);
          }
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUp: function(s) {
          this.__onMouseUp(s), this._resetTransformEventData();
          var l = this.upperCanvasEl, n = this._getEventPrefix();
          this._isMainEvent(s) && (i(c.document, n + "up", this._onMouseUp), i(c.document, n + "move", this._onMouseMove, r), u(l, n + "move", this._onMouseMove, r));
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMove: function(s) {
          !this.allowTouchScrolling && s.preventDefault && s.preventDefault(), this.__onMouseMove(s);
        },
        /**
         * @private
         */
        _onResize: function() {
          this.calcOffset();
        },
        /**
         * Decides whether the canvas should be redrawn in mouseup and mousedown events.
         * @private
         * @param {Object} target
         */
        _shouldRender: function(s) {
          var l = this._activeObject;
          return !!l != !!s || l && s && l !== s ? !0 : (l && l.isEditing, !1);
        },
        /**
         * Method that defines the actions when mouse is released on canvas.
         * The method resets the currentTransform parameters, store the image corner
         * position in the image object and render the canvas on top.
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseUp: function(s) {
          var l, n = this._currentTransform, h = this._groupSelector, f = !1, g = !h || h.left === 0 && h.top === 0;
          if (this._cacheTransformEventData(s), l = this._target, this._handleEvent(s, "up:before"), t(s, a)) {
            this.fireRightClick && this._handleEvent(s, "up", a, g);
            return;
          }
          if (t(s, o)) {
            this.fireMiddleClick && this._handleEvent(s, "up", o, g), this._resetTransformEventData();
            return;
          }
          if (this.isDrawingMode && this._isCurrentlyDrawing) {
            this._onMouseUpInDrawingMode(s);
            return;
          }
          if (this._isMainEvent(s)) {
            if (n && (this._finalizeCurrentTransform(s), f = n.actionPerformed), !g) {
              var p = l === this._activeObject;
              this._maybeGroupObjects(s), f || (f = this._shouldRender(l) || !p && l === this._activeObject);
            }
            var m, C;
            if (l) {
              if (m = l._findTargetCorner(
                this.getPointer(s, !0),
                c.util.isTouchEvent(s)
              ), l.selectable && l !== this._activeObject && l.activeOn === "up")
                this.setActiveObject(l, s), f = !0;
              else {
                var w = l.controls[m], x = w && w.getMouseUpHandler(s, l, w);
                x && (C = this.getPointer(s), x(s, n, C.x, C.y));
              }
              l.isMoving = !1;
            }
            if (n && (n.target !== l || n.corner !== m)) {
              var k = n.target && n.target.controls[n.corner], L = k && k.getMouseUpHandler(s, l, w);
              C = C || this.getPointer(s), L && L(s, n, C.x, C.y);
            }
            this._setCursorFromEvent(s, l), this._handleEvent(s, "up", e, g), this._groupSelector = null, this._currentTransform = null, l && (l.__corner = 0), f ? this.requestRenderAll() : g || this.renderTop();
          }
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @return {Fabric.Object} target return the the target found, for internal reasons.
         */
        _simpleEventHandler: function(s, l) {
          var n = this.findTarget(l), h = this.targets, f = {
            e: l,
            target: n,
            subTargets: h
          };
          if (this.fire(s, f), n && n.fire(s, f), !h)
            return n;
          for (var g = 0; g < h.length; g++)
            h[g].fire(s, f);
          return n;
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @param {fabric.Object} targetObj receiving event
         * @param {Number} [button] button used in the event 1 = left, 2 = middle, 3 = right
         * @param {Boolean} isClick for left button only, indicates that the mouse up happened without move.
         */
        _handleEvent: function(s, l, n, h) {
          var f = this._target, g = this.targets || [], p = {
            e: s,
            target: f,
            subTargets: g,
            button: n || e,
            isClick: h || !1,
            pointer: this._pointer,
            absolutePointer: this._absolutePointer,
            transform: this._currentTransform
          };
          l === "up" && (p.currentTarget = this.findTarget(s), p.currentSubTargets = this.targets), this.fire("mouse:" + l, p), f && f.fire("mouse" + l, p);
          for (var m = 0; m < g.length; m++)
            g[m].fire("mouse" + l, p);
        },
        /**
         * @private
         * @param {Event} e send the mouse event that generate the finalize down, so it can be used in the event
         */
        _finalizeCurrentTransform: function(s) {
          var l = this._currentTransform, n = l.target, h = {
            e: s,
            target: n,
            transform: l,
            action: l.action
          };
          n._scaling && (n._scaling = !1), n.setCoords(), (l.actionPerformed || this.stateful && n.hasStateChanged()) && this._fire("modified", h);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDownInDrawingMode: function(s) {
          this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(s).requestRenderAll();
          var l = this.getPointer(s);
          this.freeDrawingBrush.onMouseDown(l, { e: s, pointer: l }), this._handleEvent(s, "down");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMoveInDrawingMode: function(s) {
          if (this._isCurrentlyDrawing) {
            var l = this.getPointer(s);
            this.freeDrawingBrush.onMouseMove(l, { e: s, pointer: l });
          }
          this.setCursor(this.freeDrawingCursor), this._handleEvent(s, "move");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUpInDrawingMode: function(s) {
          var l = this.getPointer(s);
          this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: s, pointer: l }), this._handleEvent(s, "up");
        },
        _finishDrawing: function() {
          this.freeDrawingBrush.finish(), this._isCurrentlyDrawing = !1;
        },
        /**
         * Method that defines the actions when mouse is clicked on canvas.
         * The method inits the currentTransform parameters and renders all the
         * canvas so the current image can be placed on the top canvas and the rest
         * in on the container one.
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        __onMouseDown: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "down:before");
          var l = this._target;
          if (t(s, a)) {
            this.fireRightClick && this._handleEvent(s, "down", a);
            return;
          }
          if (t(s, o)) {
            this.fireMiddleClick && this._handleEvent(s, "down", o);
            return;
          }
          if (this.isDrawingMode)
            if (!this.usePencil || this._isStylus(s)) {
              if (s.type === "touchstart" && s.touches.length > 1) {
                this._isCurrentlyDrawing && this._finishDrawing(s), this._handleEvent(s, "down");
                return;
              }
              this._onMouseDownInDrawingMode(s);
              return;
            } else {
              this._handleEvent(s, "down");
              return;
            }
          if (this._isMainEvent(s) && !this._currentTransform) {
            var n = this._pointer;
            this._previousPointer = n;
            var h = this._shouldRender(l), f = this._shouldGroup(s, l);
            if (this._shouldClearSelection(s, l) ? this.discardActiveObject(s) : f && (this._handleGrouping(s, l), l = this._activeObject), this.selection && (!l || !l.selectable && !l.isEditing && l !== this._activeObject) && (this._groupSelector = {
              ex: this._absolutePointer.x,
              ey: this._absolutePointer.y,
              top: 0,
              left: 0
            }), l) {
              var g = l === this._activeObject;
              l.selectable && l.activeOn === "down" && this.setActiveObject(l, s);
              var p = l._findTargetCorner(
                this.getPointer(s, !0),
                c.util.isTouchEvent(s)
              );
              if (l.__corner = p, l === this._activeObject && (p || !f)) {
                this._setupCurrentTransform(s, l, g);
                var m = l.controls[p], n = this.getPointer(s), C = m && m.getMouseDownHandler(s, l, m);
                C && C(s, this._currentTransform, n.x, n.y);
              }
            }
            this._handleEvent(s, "down"), (h || f) && this.requestRenderAll();
          }
        },
        /**
         * reset cache form common information needed during event processing
         * @private
         */
        _resetTransformEventData: function() {
          this._target = null, this._pointer = null, this._absolutePointer = null;
        },
        /**
         * Cache common information needed during event processing
         * @private
         * @param {Event} e Event object fired on event
         */
        _cacheTransformEventData: function(s) {
          this._resetTransformEventData(), this._pointer = this.getPointer(s, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(s) || null;
        },
        /**
         * @private
         */
        _beforeTransform: function(s) {
          var l = this._currentTransform;
          this.stateful && l.target.saveState(), this.fire("before:transform", {
            e: s,
            transform: l
          });
        },
        _isStylus: function(s) {
          if (!s.changedTouches)
            return !1;
          for (var l = 0; l < s.changedTouches.length; l++) {
            var n = s.changedTouches[l];
            if (n.touchType && n.touchType === "stylus" || n.radiusX === 0)
              return !0;
          }
          return !1;
        },
        /**
         * Method that defines the actions when mouse is hovering the canvas.
         * The currentTransform parameter will define whether the user is rotating/scaling/translating
         * an image or neither of them (only hovering). A group selection is also possible and would cancel
         * all any other type of action.
         * In case of an image transformation only the top canvas will be rendered.
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        __onMouseMove: function(s) {
          this._handleEvent(s, "move:before"), this._cacheTransformEventData(s);
          var l, n;
          if (this.isDrawingMode)
            if (!this.usePencil || this._isStylus(s)) {
              this._onMouseMoveInDrawingMode(s);
              return;
            } else
              return;
          if (this._isMainEvent(s)) {
            var h = this._groupSelector;
            h ? (n = this._absolutePointer, h.left = n.x - h.ex, h.top = n.y - h.ey, this.renderTop()) : this._currentTransform ? this._transformObject(s) : (l = this.findTarget(s) || null, this._setCursorFromEvent(s, l), this._fireOverOutEvents(l, s)), this._handleEvent(s, "move"), this._resetTransformEventData();
          }
        },
        /**
         * Manage the mouseout, mouseover events for the fabric object on the canvas
         * @param {Fabric.Object} target the target where the target from the mousemove event
         * @param {Event} e Event object fired on mousemove
         * @private
         */
        _fireOverOutEvents: function(s, l) {
          var n = this._hoveredTarget, h = this._hoveredTargets, f = this.targets, g = Math.max(h.length, f.length);
          this.fireSyntheticInOutEvents(s, l, {
            oldTarget: n,
            evtOut: "mouseout",
            canvasEvtOut: "mouse:out",
            evtIn: "mouseover",
            canvasEvtIn: "mouse:over"
          });
          for (var p = 0; p < g; p++)
            this.fireSyntheticInOutEvents(f[p], l, {
              oldTarget: h[p],
              evtOut: "mouseout",
              evtIn: "mouseover"
            });
          this._hoveredTarget = s, this._hoveredTargets = this.targets.concat();
        },
        /**
         * Manage the dragEnter, dragLeave events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the onDrag event
         * @param {Event} e Event object fired on ondrag
         * @private
         */
        _fireEnterLeaveEvents: function(s, l) {
          var n = this._draggedoverTarget, h = this._hoveredTargets, f = this.targets, g = Math.max(h.length, f.length);
          this.fireSyntheticInOutEvents(s, l, {
            oldTarget: n,
            evtOut: "dragleave",
            evtIn: "dragenter"
          });
          for (var p = 0; p < g; p++)
            this.fireSyntheticInOutEvents(f[p], l, {
              oldTarget: h[p],
              evtOut: "dragleave",
              evtIn: "dragenter"
            });
          this._draggedoverTarget = s;
        },
        /**
         * Manage the synthetic in/out events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the supported events
         * @param {Event} e Event object fired
         * @param {Object} config configuration for the function to work
         * @param {String} config.targetName property on the canvas where the old target is stored
         * @param {String} [config.canvasEvtOut] name of the event to fire at canvas level for out
         * @param {String} config.evtOut name of the event to fire for out
         * @param {String} [config.canvasEvtIn] name of the event to fire at canvas level for in
         * @param {String} config.evtIn name of the event to fire for in
         * @private
         */
        fireSyntheticInOutEvents: function(s, l, n) {
          var h, f, g = n.oldTarget, p, m, C = g !== s, w = n.canvasEvtIn, x = n.canvasEvtOut;
          C && (h = { e: l, target: s, previousTarget: g }, f = { e: l, target: g, nextTarget: s }), m = s && C, p = g && C, p && (x && this.fire(x, f), g.fire(n.evtOut, f)), m && (w && this.fire(w, h), s.fire(n.evtIn, h));
        },
        /**
         * Method that defines actions when an Event Mouse Wheel
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseWheel: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "wheel"), this._resetTransformEventData();
        },
        /**
         * @private
         * @param {Event} e Event fired on mousemove
         */
        _transformObject: function(s) {
          var l = this.getPointer(s), n = this._currentTransform;
          n.reset = !1, n.shiftKey = s.shiftKey, n.altKey = s[this.centeredKey], this._performTransformAction(s, n, l), n.actionPerformed && this.requestRenderAll();
        },
        /**
         * @private
         */
        _performTransformAction: function(s, l, n) {
          var h = n.x, f = n.y, g = l.action, p = !1, m = l.actionHandler;
          m && (p = m(s, l, h, f)), g === "drag" && p && (l.target.isMoving = !0, this.setCursor(l.target.moveCursor || this.moveCursor)), l.actionPerformed = l.actionPerformed || p;
        },
        /**
         * @private
         */
        _fire: c.controlsUtils.fireEvent,
        /**
         * Sets the cursor depending on where the canvas is being hovered.
         * Note: very buggy in Opera
         * @param {Event} e Event object
         * @param {Object} target Object that the mouse is hovering, if so.
         */
        _setCursorFromEvent: function(s, l) {
          if (!l)
            return this.setCursor(this.defaultCursor), !1;
          var n = l.hoverCursor || this.hoverCursor, h = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, f = (!h || !h.contains(l)) && l._findTargetCorner(this.getPointer(s, !0));
          f ? this.setCursor(this.getCornerCursor(f, l, s)) : (l.subTargetCheck && this.targets.concat().reverse().map(function(g) {
            n = g.hoverCursor || n;
          }), this.setCursor(n));
        },
        /**
         * @private
         */
        getCornerCursor: function(s, l, n) {
          var h = l.controls[s];
          return h.cursorStyleHandler(n, h, l);
        }
      }
    );
  }(), function() {
    var u = Math.min, i = Math.max;
    c.util.object.extend(
      c.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         * @return {Boolean}
         */
        _shouldGroup: function(a, o) {
          var e = this._activeObject;
          return e && this._isSelectionKeyPressed(a) && o && o.selectable && this.selection && (e !== o || e.type === "activeSelection") && !o.onSelect({ e: a });
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _handleGrouping: function(a, o) {
          var e = this._activeObject;
          e.__corner || o === e && (o = this.findTarget(a, !0), !o || !o.selectable) || (e && e.type === "activeSelection" ? this._updateActiveSelection(o, a) : this._createActiveSelection(o, a));
        },
        /**
         * @private
         */
        _updateActiveSelection: function(a, o) {
          var e = this._activeObject, r = e._objects.slice(0);
          e.contains(a) ? (e.removeWithUpdate(a), this._hoveredTarget = a, this._hoveredTargets = this.targets.concat(), e.size() === 1 && this._setActiveObject(e.item(0), o)) : (e.addWithUpdate(a), this._hoveredTarget = e, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(r, o);
        },
        /**
         * @private
         */
        _createActiveSelection: function(a, o) {
          var e = this.getActiveObjects(), r = this._createGroup(a);
          this._hoveredTarget = r, this._setActiveObject(r, o), this._fireSelectionEvents(e, o);
        },
        /**
         * @private
         * @param {Object} target
         */
        _createGroup: function(a) {
          var o = this._objects, e = o.indexOf(this._activeObject) < o.indexOf(a), r = e ? [this._activeObject, a] : [a, this._activeObject];
          return this._activeObject.isEditing && this._activeObject.exitEditing(), new c.ActiveSelection(r, {
            canvas: this
          });
        },
        /**
         * @private
         * @param {Event} e mouse event
         */
        _groupSelectedObjects: function(a) {
          var o = this._collectObjects(a), e;
          o.length === 1 ? this.setActiveObject(o[0], a) : o.length > 1 && (e = new c.ActiveSelection(o.reverse(), {
            canvas: this
          }), this.setActiveObject(e, a));
        },
        /**
         * @private
         */
        _collectObjects: function(a) {
          for (var o = [], e, r = this._groupSelector.ex, t = this._groupSelector.ey, s = r + this._groupSelector.left, l = t + this._groupSelector.top, n = new c.Point(u(r, s), u(t, l)), h = new c.Point(i(r, s), i(t, l)), f = !this.selectionFullyContained, g = r === s && t === l, p = this._objects.length; p-- && (e = this._objects[p], !(!(!e || !e.selectable || !e.visible) && (f && e.intersectsWithRect(n, h, !0) || e.isContainedWithinRect(n, h, !0) || f && e.containsPoint(n, null, !0) || f && e.containsPoint(h, null, !0)) && (o.push(e), g))); )
            ;
          return o.length > 1 && (o = o.filter(function(m) {
            return !m.onSelect({ e: a });
          })), o;
        },
        /**
         * @private
         */
        _maybeGroupObjects: function(a) {
          this.selection && this._groupSelector && this._groupSelectedObjects(a), this.setCursor(this.defaultCursor), this._groupSelector = null;
        }
      }
    );
  }(), function() {
    c.util.object.extend(
      c.StaticCanvas.prototype,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
         * @param {Object} [options] Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by, to have consistent
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 2.0.0
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
         * @example <caption>Generate jpeg dataURL with lower quality</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'jpeg',
         *   quality: 0.8
         * });
         * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   left: 100,
         *   top: 100,
         *   width: 200,
         *   height: 200
         * });
         * @example <caption>Generate double scaled png dataURL</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   multiplier: 2
         * });
         */
        toDataURL: function(u) {
          u || (u = {});
          var i = u.format || "png", a = u.quality || 1, o = (u.multiplier || 1) * (u.enableRetinaScaling ? this.getRetinaScaling() : 1), e = this.toCanvasElement(o, u);
          return c.util.toDataURL(e, i, a);
        },
        /**
         * Create a new HTMLCanvas element painted with the current canvas content.
         * No need to resize the actual one or repaint it.
         * Will transfer object ownership to a new canvas, paint it, and set everything back.
         * This is an intermediary step used to get to a dataUrl but also it is useful to
         * create quick image copies of a canvas without passing for the dataUrl string
         * @param {Number} [multiplier] a zoom factor.
         * @param {Object} [cropping] Cropping informations
         * @param {Number} [cropping.left] Cropping left offset.
         * @param {Number} [cropping.top] Cropping top offset.
         * @param {Number} [cropping.width] Cropping width.
         * @param {Number} [cropping.height] Cropping height.
         */
        toCanvasElement: function(u, i) {
          u = u || 1, i = i || {};
          var a = (i.width || this.width) * u, o = (i.height || this.height) * u, e = this.getZoom(), r = this.width, t = this.height, s = e * u, l = this.viewportTransform, n = (l[4] - (i.left || 0)) * u, h = (l[5] - (i.top || 0)) * u, f = this.interactive, g = [s, 0, 0, s, n, h], p = this.enableRetinaScaling, m = c.util.createCanvasElement(), C = this.contextTop;
          return m.width = a, m.height = o, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = g, this.width = a, this.height = o, this.calcViewportBoundaries(), this.renderCanvas(m.getContext("2d"), this._objects), this.viewportTransform = l, this.width = r, this.height = t, this.calcViewportBoundaries(), this.interactive = f, this.enableRetinaScaling = p, this.contextTop = C, m;
        }
      }
    );
  }(), c.util.object.extend(
    c.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Populates canvas with data from the specified JSON.
       * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
       * @param {String|Object} json JSON string or object
       * @param {Function} callback Callback, invoked when json is parsed
       *                            and corresponding objects (e.g: {@link fabric.Image})
       *                            are initialized
       * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
       * @return {fabric.Canvas} instance
       * @chainable
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
       * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
       * @example <caption>loadFromJSON</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
       * @example <caption>loadFromJSON with reviver</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
       *   // `o` = json object
       *   // `object` = fabric.Object instance
       *   // ... do some stuff ...
       * });
       */
      loadFromJSON: function(u, i, a) {
        if (u) {
          var o = typeof u == "string" ? JSON.parse(u) : c.util.object.clone(u), e = this, r = o.clipPath, t = this.renderOnAddRemove;
          return this.renderOnAddRemove = !1, delete o.clipPath, this._enlivenObjects(o.objects, function(s) {
            e.clear(), e._setBgOverlay(o, function() {
              r ? e._enlivenObjects([r], function(l) {
                e.clipPath = l[0], e.__setupCanvas.call(e, o, s, t, i);
              }) : e.__setupCanvas.call(e, o, s, t, i);
            });
          }, a), this;
        }
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Array} restored canvas objects
       * @param {Function} cached renderOnAddRemove callback
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      __setupCanvas: function(u, i, a, o) {
        var e = this;
        i.forEach(function(r, t) {
          e.insertAt(r, t);
        }), this.renderOnAddRemove = a, delete u.objects, delete u.backgroundImage, delete u.overlayImage, delete u.background, delete u.overlay, this._setOptions(u), this.renderAll(), o && o();
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      _setBgOverlay: function(u, i) {
        var a = {
          backgroundColor: !1,
          overlayColor: !1,
          backgroundImage: !1,
          overlayImage: !1
        };
        if (!u.backgroundImage && !u.overlayImage && !u.background && !u.overlay) {
          i && i();
          return;
        }
        var o = function() {
          a.backgroundImage && a.overlayImage && a.backgroundColor && a.overlayColor && i && i();
        };
        this.__setBgOverlay("backgroundImage", u.backgroundImage, a, o), this.__setBgOverlay("overlayImage", u.overlayImage, a, o), this.__setBgOverlay("backgroundColor", u.background, a, o), this.__setBgOverlay("overlayColor", u.overlay, a, o);
      },
      /**
       * @private
       * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
       * @param {(Object|String)} value Value to set
       * @param {Object} loaded Set loaded property to true if property is set
       * @param {Object} callback Callback function to invoke after property is set
       */
      __setBgOverlay: function(u, i, a, o) {
        var e = this;
        if (!i) {
          a[u] = !0, o && o();
          return;
        }
        u === "backgroundImage" || u === "overlayImage" ? c.util.enlivenObjects([i], function(r) {
          e[u] = r[0], a[u] = !0, o && o();
        }) : this["set" + c.util.string.capitalize(u, !0)](i, function() {
          a[u] = !0, o && o();
        });
      },
      /**
       * @private
       * @param {Array} objects
       * @param {Function} callback
       * @param {Function} [reviver]
       */
      _enlivenObjects: function(u, i, a) {
        if (!u || u.length === 0) {
          i && i([]);
          return;
        }
        c.util.enlivenObjects(u, function(o) {
          i && i(o);
        }, null, a);
      },
      /**
       * @private
       * @param {String} format
       * @param {Function} callback
       */
      _toDataURL: function(u, i) {
        this.clone(function(a) {
          i(a.toDataURL(u));
        });
      },
      /**
       * @private
       * @param {String} format
       * @param {Number} multiplier
       * @param {Function} callback
       */
      _toDataURLWithMultiplier: function(u, i, a) {
        this.clone(function(o) {
          a(o.toDataURLWithMultiplier(u, i));
        });
      },
      /**
       * Clones canvas instance
       * @param {Object} [callback] Receives cloned instance as a first argument
       * @param {Array} [properties] Array of properties to include in the cloned canvas and children
       */
      clone: function(u, i) {
        var a = JSON.stringify(this.toJSON(i));
        this.cloneWithoutData(function(o) {
          o.loadFromJSON(a, function() {
            u && u(o);
          });
        });
      },
      /**
       * Clones canvas instance without cloning existing data.
       * This essentially copies canvas dimensions, clipping properties, etc.
       * but leaves data empty (so that you can populate it with your own)
       * @param {Object} [callback] Receives cloned instance as a first argument
       */
      cloneWithoutData: function(u) {
        var i = c.util.createCanvasElement();
        i.width = this.width, i.height = this.height;
        var a = new c.Canvas(i);
        this.backgroundImage ? (a.setBackgroundImage(this.backgroundImage.src, function() {
          a.renderAll(), u && u(a);
        }), a.backgroundImageOpacity = this.backgroundImageOpacity, a.backgroundImageStretch = this.backgroundImageStretch) : u && u(a);
      }
    }
  ), function() {
    var u = c.util.degreesToRadians, i = c.util.radiansToDegrees;
    c.util.object.extend(
      c.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Method that defines actions when an Event.js gesture is detected on an object. Currently only supports
         * 2 finger gestures.
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onTransformGesture: function(a, o) {
          if (!(!a.touches || a.touches.length !== 2 || o.gesture !== "gesture")) {
            var e = this.findTarget(a);
            typeof e < "u" && (this.__gesturesParams = {
              e: a,
              self: o,
              target: e
            }, this.__gesturesRenderer()), this.fire("touch:gesture", {
              target: e,
              e: a,
              self: o
            });
          }
        },
        __gesturesParams: null,
        __gesturesRenderer: function() {
          if (!(this.__gesturesParams === null || this._currentTransform === null)) {
            var a = this.__gesturesParams.self, o = this._currentTransform, e = this.__gesturesParams.e;
            o.action = "scale", o.originX = o.originY = "center", this._scaleObjectBy(a.scale, e), a.rotation !== 0 && (o.action = "rotate", this._rotateObjectByAngle(a.rotation, e)), this.requestRenderAll(), o.action = "drag";
          }
        },
        /**
         * Method that defines actions when an Event.js drag is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onDrag: function(a, o) {
          this.fire("touch:drag", {
            e: a,
            self: o
          });
        },
        /**
         * Method that defines actions when an Event.js orientation event is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onOrientationChange: function(a, o) {
          this.fire("touch:orientation", {
            e: a,
            self: o
          });
        },
        /**
         * Method that defines actions when an Event.js shake event is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onShake: function(a, o) {
          this.fire("touch:shake", {
            e: a,
            self: o
          });
        },
        /**
         * Method that defines actions when an Event.js longpress event is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onLongPress: function(a, o) {
          this.fire("touch:longpress", {
            e: a,
            self: o
          });
        },
        /**
         * Scales an object by a factor
         * @param {Number} s The scale factor to apply to the current scale level
         * @param {Event} e Event object by Event.js
         */
        _scaleObjectBy: function(a, o) {
          var e = this._currentTransform, r = e.target;
          return e.gestureScale = a, r._scaling = !0, c.controlsUtils.scalingEqually(o, e, 0, 0);
        },
        /**
         * Rotates object by an angle
         * @param {Number} curAngle The angle of rotation in degrees
         * @param {Event} e Event object by Event.js
         */
        _rotateObjectByAngle: function(a, o) {
          var e = this._currentTransform;
          e.target.get("lockRotation") || (e.target.rotate(i(u(a) + e.theta)), this._fire("rotating", {
            target: e.target,
            e: o,
            transform: e
          }));
        }
      }
    );
  }(), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend, o = i.util.object.clone, e = i.util.toFixed, r = i.util.string.capitalize, t = i.util.degreesToRadians, s = !i.isLikelyNode, l = 2;
    i.Object || (i.Object = i.util.createClass(
      i.CommonMethods,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Type of an object (rect, circle, path, etc.).
         * Note that this property is meant to be read-only and not meant to be modified.
         * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
         * @type String
         * @default
         */
        type: "object",
        /**
         * Horizontal origin of transformation of an object (one of "left", "right", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originX: "left",
        /**
         * Vertical origin of transformation of an object (one of "top", "bottom", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originY: "top",
        /**
         * Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}
         * @type Number
         * @default
         */
        top: 0,
        /**
         * Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}
         * @type Number
         * @default
         */
        left: 0,
        /**
         * Object width
         * @type Number
         * @default
         */
        width: 0,
        /**
         * Object height
         * @type Number
         * @default
         */
        height: 0,
        /**
         * Object scale factor (horizontal)
         * @type Number
         * @default
         */
        scaleX: 1,
        /**
         * Object scale factor (vertical)
         * @type Number
         * @default
         */
        scaleY: 1,
        /**
         * When true, an object is rendered as flipped horizontally
         * @type Boolean
         * @default
         */
        flipX: !1,
        /**
         * When true, an object is rendered as flipped vertically
         * @type Boolean
         * @default
         */
        flipY: !1,
        /**
         * Opacity of an object
         * @type Number
         * @default
         */
        opacity: 1,
        /**
         * Angle of rotation of an object (in degrees)
         * @type Number
         * @default
         */
        angle: 0,
        /**
         * Angle of skew on x axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewX: 0,
        /**
         * Angle of skew on y axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewY: 0,
        /**
         * Size of object's controlling corners (in pixels)
         * @type Number
         * @default
         */
        cornerSize: 13,
        /**
         * Size of object's controlling corners when touch interaction is detected
         * @type Number
         * @default
         */
        touchCornerSize: 24,
        /**
         * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
         * @type Boolean
         * @default
         */
        transparentCorners: !0,
        /**
         * Default cursor value used when hovering over this object on canvas
         * @type String
         * @default
         */
        hoverCursor: null,
        /**
         * Default cursor value used when moving this object on canvas
         * @type String
         * @default
         */
        moveCursor: null,
        /**
         * Padding between object and its controlling borders (in pixels)
         * @type Number
         * @default
         */
        padding: 0,
        /**
         * Color of controlling borders of an object (when it's active)
         * @type String
         * @default
         */
        borderColor: "rgb(178,204,255)",
        /**
         * Array specifying dash pattern of an object's borders (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        borderDashArray: null,
        /**
         * Color of controlling corners of an object (when it's active)
         * @type String
         * @default
         */
        cornerColor: "rgb(178,204,255)",
        /**
         * Color of controlling corners of an object (when it's active and transparentCorners false)
         * @since 1.6.2
         * @type String
         * @default
         */
        cornerStrokeColor: null,
        /**
         * Specify style of control, 'rect' or 'circle'
         * @since 1.6.2
         * @type String
         */
        cornerStyle: "rect",
        /**
         * Array specifying dash pattern of an object's control (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        cornerDashArray: null,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being scaled via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being rotated via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !0,
        /**
         * Color of object's fill
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        fill: "rgb(0,0,0)",
        /**
         * Fill rule used to fill an object
         * accepted values are nonzero, evenodd
         * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
         * @type String
         * @default
         */
        fillRule: "nonzero",
        /**
         * Composite rule used for canvas globalCompositeOperation
         * @type String
         * @default
         */
        globalCompositeOperation: "source-over",
        /**
         * Background color of an object.
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        backgroundColor: "",
        /**
         * Selection Background color of an object. colored layer behind the object when it is active.
         * does not mix good with globalCompositeOperation methods.
         * @type String
         * @default
         */
        selectionBackgroundColor: "",
        /**
         * When defined, an object is rendered via stroke and this property specifies its color
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Width of a stroke used to render this object
         * @type Number
         * @default
         */
        strokeWidth: 1,
        /**
         * Array specifying dash pattern of an object's stroke (stroke must be defined)
         * @type Array
         */
        strokeDashArray: null,
        /**
         * Line offset of an object's stroke
         * @type Number
         * @default
         */
        strokeDashOffset: 0,
        /**
         * Line endings style of an object's stroke (one of "butt", "round", "square")
         * @type String
         * @default
         */
        strokeLineCap: "butt",
        /**
         * Corner style of an object's stroke (one of "bevel", "round", "miter")
         * @type String
         * @default
         */
        strokeLineJoin: "miter",
        /**
         * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
         * @type Number
         * @default
         */
        strokeMiterLimit: 4,
        /**
         * Shadow object representing shadow of this shape
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * Opacity of object's controlling borders when object is active and moving
         * @type Number
         * @default
         */
        borderOpacityWhenMoving: 0.4,
        /**
         * Scale factor of object's controlling borders
         * bigger number will make a thicker border
         * border is 1, so this is basically a border thickness
         * since there is no way to change the border itself.
         * @type Number
         * @default
         */
        borderScaleFactor: 1,
        /**
         * Minimum allowed scale value of an object
         * @type Number
         * @default
         */
        minScaleLimit: 0,
        /**
         * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
         * But events still fire on it.
         * @type Boolean
         * @default
         */
        selectable: !0,
        /**
         * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
         * @type Boolean
         * @default
         */
        evented: !0,
        /**
         * When set to `false`, an object is not rendered on canvas
         * @type Boolean
         * @default
         */
        visible: !0,
        /**
         * When set to `false`, object's controls are not displayed and can not be used to manipulate object
         * @type Boolean
         * @default
         */
        hasControls: !0,
        /**
         * When set to `false`, object's controlling borders are not rendered
         * @type Boolean
         * @default
         */
        hasBorders: !0,
        /**
         * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * When `false`, default object's values are not included in its serialization
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * When `true`, object horizontal movement is locked
         * @type Boolean
         * @default
         */
        lockMovementX: !1,
        /**
         * When `true`, object vertical movement is locked
         * @type Boolean
         * @default
         */
        lockMovementY: !1,
        /**
         * When `true`, object rotation is locked
         * @type Boolean
         * @default
         */
        lockRotation: !1,
        /**
         * When `true`, object horizontal scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingX: !1,
        /**
         * When `true`, object vertical scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingY: !1,
        /**
         * When `true`, object horizontal skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingX: !1,
        /**
         * When `true`, object vertical skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingY: !1,
        /**
         * When `true`, object cannot be flipped by scaling into negative values
         * @type Boolean
         * @default
         */
        lockScalingFlip: !1,
        /**
         * When `true`, object is not exported in OBJECT/JSON
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        excludeFromExport: !1,
        /**
         * When `true`, object is cached on an additional canvas.
         * When `false`, object is not cached unless necessary ( clipPath )
         * default to true
         * @since 1.7.0
         * @type Boolean
         * @default true
         */
        objectCaching: s,
        /**
         * When `true`, object properties are checked for cache invalidation. In some particular
         * situation you may want this to be disabled ( spray brush, very big, groups)
         * or if your application does not allow you to modify properties for groups child you want
         * to disable it for groups.
         * default to false
         * since 1.7.0
         * @type Boolean
         * @default false
         */
        statefullCache: !1,
        /**
         * When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
         * too much and will be redrawn with correct details at the end of scaling.
         * this setting is performance and application dependant.
         * default to true
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        noScaleCache: !0,
        /**
         * When `false`, the stoke width will scale with the object.
         * When `true`, the stroke will always match the exact pixel size entered for stroke width.
         * this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
         * default to false
         * @since 2.6.0
         * @type Boolean
         * @default false
         * @type Boolean
         * @default false
         */
        strokeUniform: !1,
        /**
         * When set to `true`, object's cache will be rerendered next render call.
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        dirty: !0,
        /**
         * keeps the value of the last hovered corner during mouse move.
         * 0 is no corner, or 'mt', 'ml', 'mtr' etc..
         * It should be private, but there is no harm in using it as
         * a read-only property.
         * @type number|string|any
         * @default 0
         */
        __corner: 0,
        /**
         * Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")
         * @type String
         * @default
         */
        paintFirst: "fill",
        /**
         * When 'down', object is set to active on mousedown/touchstart
         * When 'up', object is set to active on mouseup/touchend
         * Experimental. Let's see if this breaks anything before supporting officially
         * @private
         * since 4.4.0
         * @type String
         * @default 'down'
         */
        activeOn: "down",
        /**
         * List of properties to consider when checking if state
         * of an object is changed (fabric.Object#hasStateChanged)
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),
        /**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
        cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
        /**
         * List of properties to consider for animating colors.
         * @type Array
         */
        colorProperties: "fill stroke backgroundColor".split(" "),
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the object has rendered, and the context is placed in the center
         * of the object cacheCanvas.
         * If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will make the object clip to the outside of the clipPath
         * since 2.4.0
         * @type boolean
         * @default false
         */
        inverted: !1,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will have its top and left relative to canvas, and will
         * not be influenced by the object transform. This will make the clipPath relative
         * to the canvas, but clipping just a particular object.
         * WARNING this is beta, this feature may change or be renamed.
         * since 2.4.0
         * @type boolean
         * @default false
         */
        absolutePositioned: !1,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(n) {
          n && this.setOptions(n);
        },
        /**
         * Create a the canvas used to keep the cached copy of the object
         * @private
         */
        _createCacheCanvas: function() {
          this._cacheProperties = {}, this._cacheCanvas = i.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
        },
        /**
         * Limit the cache dimensions so that X * Y do not cross fabric.perfLimitSizeTotal
         * and each side do not cross fabric.cacheSideLimit
         * those numbers are configurable so that you can get as much detail as you want
         * making bargain with performances.
         * @param {Object} dims
         * @param {Object} dims.width width of canvas
         * @param {Object} dims.height height of canvas
         * @param {Object} dims.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @param {Object} dims.zoomY zoomY zoom value to unscale the canvas before drawing cache
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _limitCacheSize: function(n) {
          var h = i.perfLimitSizeTotal, f = n.width, g = n.height, p = i.maxCacheSideLimit, m = i.minCacheSideLimit;
          if (f <= p && g <= p && f * g <= h)
            return f < m && (n.width = m), g < m && (n.height = m), n;
          var C = f / g, w = i.util.limitDimsByArea(C, h), x = i.util.capValue, k = x(m, w.x, p), L = x(m, w.y, p);
          return f > k && (n.zoomX /= f / k, n.width = k, n.capped = !0), g > L && (n.zoomY /= g / L, n.height = L, n.capped = !0), n;
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @return {Object}.x width of object to be cached
         * @return {Object}.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var n = this.getTotalObjectScaling(), h = this._getTransformedDimensions(0, 0), f = h.x * n.scaleX / this.scaleX, g = h.y * n.scaleY / this.scaleY;
          return {
            // for sure this ALIASING_LIMIT is slightly creating problem
            // in situation in which the cache canvas gets an upper limit
            // also objectScale contains already scaleX and scaleY
            width: f + l,
            height: g + l,
            zoomX: n.scaleX,
            zoomY: n.scaleY,
            x: f,
            y: g
          };
        },
        /**
         * Update width and height of the canvas for cache
         * returns true or false if canvas needed resize.
         * @private
         * @return {Boolean} true if the canvas has been resized
         */
        _updateCacheCanvas: function() {
          var n = this.canvas;
          if (this.noScaleCache && n && n._currentTransform) {
            var h = n._currentTransform.target, f = n._currentTransform.action;
            if (this === h && f.slice && f.slice(0, 5) === "scale")
              return !1;
          }
          var g = this._cacheCanvas, p = this._limitCacheSize(this._getCacheCanvasDimensions()), m = i.minCacheSideLimit, C = p.width, w = p.height, x, k, L = p.zoomX, Y = p.zoomY, K = C !== this.cacheWidth || w !== this.cacheHeight, re = this.zoomX !== L || this.zoomY !== Y, q = K || re, ee = 0, se = 0, ae = !1;
          if (K) {
            var W = this._cacheCanvas.width, b = this._cacheCanvas.height, A = C > W || w > b, P = (C < W * 0.9 || w < b * 0.9) && W > m && b > m;
            ae = A || P, A && !p.capped && (C > m || w > m) && (ee = C * 0.1, se = w * 0.1);
          }
          return this instanceof i.Text && this.path && (q = !0, ae = !0, ee += this.getHeightOfLine(0) * this.zoomX, se += this.getHeightOfLine(0) * this.zoomY), q ? (ae ? (g.width = Math.ceil(C + ee), g.height = Math.ceil(w + se)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, g.width, g.height)), x = p.x / 2, k = p.y / 2, this.cacheTranslationX = Math.round(g.width / 2 - x) + x, this.cacheTranslationY = Math.round(g.height / 2 - k) + k, this.cacheWidth = C, this.cacheHeight = w, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(L, Y), this.zoomX = L, this.zoomY = Y, !0) : !1;
        },
        /**
         * Sets object's properties from options
         * @param {Object} [options] Options object
         */
        setOptions: function(n) {
          this._setOptions(n), this._initGradient(n.fill, "fill"), this._initGradient(n.stroke, "stroke"), this._initPattern(n.fill, "fill"), this._initPattern(n.stroke, "stroke");
        },
        /**
         * Transforms context when rendering an object
         * @param {CanvasRenderingContext2D} ctx Context
         */
        transform: function(n) {
          var h = this.group && !this.group._transformDone || this.group && this.canvas && n === this.canvas.contextTop, f = this.calcTransformMatrix(!h);
          n.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
        },
        /**
         * Returns an object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(n) {
          var h = i.Object.NUM_FRACTION_DIGITS, f = {
            type: this.type,
            version: i.version,
            originX: this.originX,
            originY: this.originY,
            left: e(this.left, h),
            top: e(this.top, h),
            width: e(this.width, h),
            height: e(this.height, h),
            fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
            stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
            strokeWidth: e(this.strokeWidth, h),
            strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
            strokeLineCap: this.strokeLineCap,
            strokeDashOffset: this.strokeDashOffset,
            strokeLineJoin: this.strokeLineJoin,
            strokeUniform: this.strokeUniform,
            strokeMiterLimit: e(this.strokeMiterLimit, h),
            scaleX: e(this.scaleX, h),
            scaleY: e(this.scaleY, h),
            angle: e(this.angle, h),
            flipX: this.flipX,
            flipY: this.flipY,
            opacity: e(this.opacity, h),
            shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
            visible: this.visible,
            backgroundColor: this.backgroundColor,
            fillRule: this.fillRule,
            paintFirst: this.paintFirst,
            globalCompositeOperation: this.globalCompositeOperation,
            skewX: e(this.skewX, h),
            skewY: e(this.skewY, h)
          };
          return this.clipPath && !this.clipPath.excludeFromExport && (f.clipPath = this.clipPath.toObject(n), f.clipPath.inverted = this.clipPath.inverted, f.clipPath.absolutePositioned = this.clipPath.absolutePositioned), i.util.populateWithProperties(this, f, n), this.includeDefaultValues || (f = this._removeDefaultValues(f)), f;
        },
        /**
         * Returns (dataless) object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toDatalessObject: function(n) {
          return this.toObject(n);
        },
        /**
         * @private
         * @param {Object} object
         */
        _removeDefaultValues: function(n) {
          var h = i.util.getKlass(n.type).prototype, f = h.stateProperties;
          return f.forEach(function(g) {
            g === "left" || g === "top" || (n[g] === h[g] && delete n[g], Array.isArray(n[g]) && Array.isArray(h[g]) && n[g].length === 0 && h[g].length === 0 && delete n[g]);
          }), n;
        },
        /**
         * Returns a string representation of an instance
         * @return {String}
         */
        toString: function() {
          return "#<fabric." + r(this.type) + ">";
        },
        /**
         * Return the object scale factor counting also the group scaling
         * @return {Object} object with scaleX and scaleY properties
         */
        getObjectScaling: function() {
          if (!this.group)
            return {
              scaleX: this.scaleX,
              scaleY: this.scaleY
            };
          var n = i.util.qrDecompose(this.calcTransformMatrix());
          return { scaleX: Math.abs(n.scaleX), scaleY: Math.abs(n.scaleY) };
        },
        /**
         * Return the object scale factor counting also the group scaling, zoom and retina
         * @return {Object} object with scaleX and scaleY properties
         */
        getTotalObjectScaling: function() {
          var n = this.getObjectScaling(), h = n.scaleX, f = n.scaleY;
          if (this.canvas) {
            var g = this.canvas.getZoom(), p = this.canvas.getRetinaScaling();
            h *= g * p, f *= g * p;
          }
          return { scaleX: h, scaleY: f };
        },
        /**
         * Return the object opacity counting also the group property
         * @return {Number}
         */
        getObjectOpacity: function() {
          var n = this.opacity;
          return this.group && (n *= this.group.getObjectOpacity()), n;
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Object} thisArg
         */
        _set: function(n, h) {
          var f = n === "scaleX" || n === "scaleY", g = this[n] !== h, p = !1;
          return f && (h = this._constrainScale(h)), n === "scaleX" && h < 0 ? (this.flipX = !this.flipX, h *= -1) : n === "scaleY" && h < 0 ? (this.flipY = !this.flipY, h *= -1) : n === "shadow" && h && !(h instanceof i.Shadow) ? h = new i.Shadow(h) : n === "dirty" && this.group && this.group.set("dirty", h), this[n] = h, g && (p = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(n) > -1 ? (this.dirty = !0, p && this.group.set("dirty", !0)) : p && this.stateProperties.indexOf(n) > -1 && this.group.set("dirty", !0)), this;
        },
        /**
         * This callback function is called by the parent group of an object every
         * time a non-delegated property changes on the group. It is passed the key
         * and value as parameters. Not adding in this function's signature to avoid
         * Travis build error about unused variables.
         */
        setOnGroup: function() {
        },
        /**
         * Retrieves viewportTransform from Object's canvas if possible
         * @method getViewportTransform
         * @memberOf fabric.Object.prototype
         * @return {Array}
         */
        getViewportTransform: function() {
          return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : i.iMatrix.concat();
        },
        /*
         * @private
         * return if the object would be visible in rendering
         * @memberOf fabric.Object.prototype
         * @return {Boolean}
         */
        isNotVisible: function() {
          return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
        },
        /**
         * Renders an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(n) {
          this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (n.save(), this._setupCompositeOperation(n), this.drawSelectionBackground(n), this.transform(n), this._setOpacity(n), this._setShadow(n, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(n)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(n), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), n.restore());
        },
        renderCache: function(n) {
          n = n || {}, (!this._cacheCanvas || !this._cacheContext) && this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, n.forClipping), this.dirty = !1);
        },
        /**
         * Remove cacheCanvas and its dimensions from the objects
         */
        _removeCacheCanvas: function() {
          this._cacheCanvas = null, this._cacheContext = null, this.cacheWidth = 0, this.cacheHeight = 0;
        },
        /**
         * return true if the object will draw a stroke
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when stroke happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the stroke is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasStroke: function() {
          return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
        },
        /**
         * return true if the object will draw a fill
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when fill happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the fill is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasFill: function() {
          return this.fill && this.fill !== "transparent";
        },
        /**
         * When set to `true`, force the object to have its own cache, even if it is inside a group
         * it may be needed when your object behave in a particular way on the cache and always needs
         * its own isolated canvas to render correctly.
         * Created to be overridden
         * since 1.7.12
         * @returns Boolean
         */
        needsItsOwnCache: function() {
          return !!(this.paintFirst === "stroke" && this.hasFill() && this.hasStroke() && typeof this.shadow == "object" || this.clipPath);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * Read as: cache if is needed, or if the feature is enabled but we are not already caching.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * used by Group.shouldCache to know if child has a shadow recursively
         * @return {Boolean}
         */
        willDrawShadow: function() {
          return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
        },
        /**
         * Execute the drawing operation for an object clipPath
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Object} clipPath
         */
        drawClipPathOnCache: function(n, h) {
          if (n.save(), h.inverted ? n.globalCompositeOperation = "destination-out" : n.globalCompositeOperation = "destination-in", h.absolutePositioned) {
            var f = i.util.invertTransform(this.calcTransformMatrix());
            n.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
          }
          h.transform(n), n.scale(1 / h.zoomX, 1 / h.zoomY), n.drawImage(h._cacheCanvas, -h.cacheTranslationX, -h.cacheTranslationY), n.restore();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(n, h) {
          var f = this.fill, g = this.stroke;
          h ? (this.fill = "black", this.stroke = "", this._setClippingProperties(n)) : this._renderBackground(n), this._render(n), this._drawClipPath(n, this.clipPath), this.fill = f, this.stroke = g;
        },
        /**
         * Prepare clipPath state and cache and draw it on instance's cache
         * @param {CanvasRenderingContext2D} ctx
         * @param {fabric.Object} clipPath
         */
        _drawClipPath: function(n, h) {
          h && (h.canvas = this.canvas, h.shouldCache(), h._transformDone = !0, h.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(n, h));
        },
        /**
         * Paint the cached copy of the object on the target context.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawCacheOnCanvas: function(n) {
          n.scale(1 / this.zoomX, 1 / this.zoomY), n.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
        },
        /**
         * Check if cache is dirty
         * @param {Boolean} skipCanvas skip canvas checks because this object is painted
         * on parent canvas.
         */
        isCacheDirty: function(n) {
          if (this.isNotVisible())
            return !1;
          if (this._cacheCanvas && this._cacheContext && !n && this._updateCacheCanvas())
            return !0;
          if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
            if (this._cacheCanvas && this._cacheContext && !n) {
              var h = this.cacheWidth / this.zoomX, f = this.cacheHeight / this.zoomY;
              this._cacheContext.clearRect(-h / 2, -f / 2, h, f);
            }
            return !0;
          }
          return !1;
        },
        /**
         * Draws a background for the object big as its untransformed dimensions
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(n) {
          if (this.backgroundColor) {
            var h = this._getNonTransformedDimensions();
            n.fillStyle = this.backgroundColor, n.fillRect(
              -h.x / 2,
              -h.y / 2,
              h.x,
              h.y
            ), this._removeShadow(n);
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setOpacity: function(n) {
          this.group && !this.group._transformDone ? n.globalAlpha = this.getObjectOpacity() : n.globalAlpha *= this.opacity;
        },
        _setStrokeStyles: function(n, h) {
          var f = h.stroke;
          f && (n.lineWidth = h.strokeWidth, n.lineCap = h.strokeLineCap, n.lineDashOffset = h.strokeDashOffset, n.lineJoin = h.strokeLineJoin, n.miterLimit = h.strokeMiterLimit, f.toLive ? f.gradientUnits === "percentage" || f.gradientTransform || f.patternTransform ? this._applyPatternForTransformedGradient(n, f) : (n.strokeStyle = f.toLive(n, this), this._applyPatternGradientTransform(n, f)) : n.strokeStyle = h.stroke);
        },
        _setFillStyles: function(n, h) {
          var f = h.fill;
          f && (f.toLive ? (n.fillStyle = f.toLive(n, this), this._applyPatternGradientTransform(n, h.fill)) : n.fillStyle = f);
        },
        _setClippingProperties: function(n) {
          n.globalAlpha = 1, n.strokeStyle = "transparent", n.fillStyle = "#000000";
        },
        /**
         * @private
         * Sets line dash
         * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
         * @param {Array} dashArray array representing dashes
         */
        _setLineDash: function(n, h) {
          !h || h.length === 0 || (1 & h.length && h.push.apply(h, h), n.setLineDash(h));
        },
        /**
         * Renders controls and borders for the object
         * the context here is not transformed
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         */
        _renderControls: function(n, h) {
          var f = this.getViewportTransform(), g = this.calcTransformMatrix(), p, m, C;
          h = h || {}, m = typeof h.hasBorders < "u" ? h.hasBorders : this.hasBorders, C = typeof h.hasControls < "u" ? h.hasControls : this.hasControls, g = i.util.multiplyTransformMatrices(f, g), p = i.util.qrDecompose(g), n.save(), n.translate(p.translateX, p.translateY), n.lineWidth = 1 * this.borderScaleFactor, this.group || (n.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (p.angle -= 180), n.rotate(t(this.group ? p.angle : this.angle)), h.forActiveSelection || this.group ? m && this.drawBordersInGroup(n, p, h) : m && this.drawBorders(n, h), C && this.drawControls(n, h), n.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setShadow: function(n) {
          if (this.shadow) {
            var h = this.shadow, f = this.canvas, g, p = f && f.viewportTransform[0] || 1, m = f && f.viewportTransform[3] || 1;
            h.nonScaling ? g = { scaleX: 1, scaleY: 1 } : g = this.getObjectScaling(), f && f._isRetinaScaling() && (p *= i.devicePixelRatio, m *= i.devicePixelRatio), n.shadowColor = h.color, n.shadowBlur = h.blur * i.browserShadowBlurConstant * (p + m) * (g.scaleX + g.scaleY) / 4, n.shadowOffsetX = h.offsetX * p * g.scaleX, n.shadowOffsetY = h.offsetY * m * g.scaleY;
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _removeShadow: function(n) {
          this.shadow && (n.shadowColor = "", n.shadowBlur = n.shadowOffsetX = n.shadowOffsetY = 0);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} filler fabric.Pattern or fabric.Gradient
         * @return {Object} offset.offsetX offset for text rendering
         * @return {Object} offset.offsetY offset for text rendering
         */
        _applyPatternGradientTransform: function(n, h) {
          if (!h || !h.toLive)
            return { offsetX: 0, offsetY: 0 };
          var f = h.gradientTransform || h.patternTransform, g = -this.width / 2 + h.offsetX || 0, p = -this.height / 2 + h.offsetY || 0;
          return h.gradientUnits === "percentage" ? n.transform(this.width, 0, 0, this.height, g, p) : n.transform(1, 0, 0, 1, g, p), f && n.transform(f[0], f[1], f[2], f[3], f[4], f[5]), { offsetX: g, offsetY: p };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderPaintInOrder: function(n) {
          this.paintFirst === "stroke" ? (this._renderStroke(n), this._renderFill(n)) : (this._renderFill(n), this._renderStroke(n));
        },
        /**
         * @private
         * function that actually render something on the context.
         * empty here to allow Obects to work on tests to benchmark fabric functionalites
         * not related to rendering
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function() {
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderFill: function(n) {
          this.fill && (n.save(), this._setFillStyles(n, this), this.fillRule === "evenodd" ? n.fill("evenodd") : n.fill(), n.restore());
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderStroke: function(n) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            if (this.shadow && !this.shadow.affectStroke && this._removeShadow(n), n.save(), this.strokeUniform && this.group) {
              var h = this.getObjectScaling();
              n.scale(1 / h.scaleX, 1 / h.scaleY);
            } else
              this.strokeUniform && n.scale(1 / this.scaleX, 1 / this.scaleY);
            this._setLineDash(n, this.strokeDashArray), this._setStrokeStyles(n, this), n.stroke(), n.restore();
          }
        },
        /**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drwabacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Gradient} filler a fabric gradient instance
         */
        _applyPatternForTransformedGradient: function(n, h) {
          var f = this._limitCacheSize(this._getCacheCanvasDimensions()), g = i.util.createCanvasElement(), p, m = this.canvas.getRetinaScaling(), C = f.x / this.scaleX / m, w = f.y / this.scaleY / m;
          g.width = C, g.height = w, p = g.getContext("2d"), p.beginPath(), p.moveTo(0, 0), p.lineTo(C, 0), p.lineTo(C, w), p.lineTo(0, w), p.closePath(), p.translate(C / 2, w / 2), p.scale(
            f.zoomX / this.scaleX / m,
            f.zoomY / this.scaleY / m
          ), this._applyPatternGradientTransform(p, h), p.fillStyle = h.toLive(n), p.fill(), n.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), n.scale(
            m * this.scaleX / f.zoomX,
            m * this.scaleY / f.zoomY
          ), n.strokeStyle = p.createPattern(g, "no-repeat");
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
        },
        /**
         * This function is an helper for svg import. it decompose the transformMatrix
         * and assign properties to object.
         * untransformed coordinates
         * @private
         * @chainable
         */
        _assignTransformMatrixProps: function() {
          if (this.transformMatrix) {
            var n = i.util.qrDecompose(this.transformMatrix);
            this.flipX = !1, this.flipY = !1, this.set("scaleX", n.scaleX), this.set("scaleY", n.scaleY), this.angle = n.angle, this.skewX = n.skewX, this.skewY = 0;
          }
        },
        /**
         * This function is an helper for svg import. it removes the transform matrix
         * and set to object properties that fabricjs can handle
         * @private
         * @param {Object} preserveAspectRatioOptions
         * @return {thisArg}
         */
        _removeTransformMatrix: function(n) {
          var h = this._findCenterFromElement();
          this.transformMatrix && (this._assignTransformMatrixProps(), h = i.util.transformPoint(h, this.transformMatrix)), this.transformMatrix = null, n && (this.scaleX *= n.scaleX, this.scaleY *= n.scaleY, this.cropX = n.cropX, this.cropY = n.cropY, h.x += n.offsetLeft, h.y += n.offsetTop, this.width = n.width, this.height = n.height), this.setPositionByOrigin(h, "center", "center");
        },
        /**
         * Clones an instance, using a callback method will work for every object.
         * @param {Function} callback Callback is invoked with a clone as a first argument
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         */
        clone: function(n, h) {
          var f = this.toObject(h);
          this.constructor.fromObject ? this.constructor.fromObject(f, n) : i.Object._fromObject("Object", f, n);
        },
        /**
         * Creates an instance of fabric.Image out of an object
         * makes use of toCanvasElement.
         * Once this method was based on toDataUrl and loadImage, so it also had a quality
         * and format option. toCanvasElement is faster and produce no loss of quality.
         * If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
         * toCanvasElement and then toBlob from the obtained canvas is also a good option.
         * This method is sync now, but still support the callback because we did not want to break.
         * When fabricJS 5.0 will be planned, this will probably be changed to not have a callback.
         * @param {Function} callback callback, invoked with an instance as a first argument
         * @param {Object} [options] for clone as image, passed to toDataURL
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {fabric.Object} thisArg
         */
        cloneAsImage: function(n, h) {
          var f = this.toCanvasElement(h);
          return n && n(new i.Image(f)), this;
        },
        /**
         * Converts an object into a HTMLCanvas element
         * @param {Object} options Options object
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {HTMLCanvasElement} Returns DOM element <canvas> with the fabric.Object
         */
        toCanvasElement: function(n) {
          n || (n = {});
          var h = i.util, f = h.saveObjectTransform(this), g = this.group, p = this.shadow, m = Math.abs, C = (n.multiplier || 1) * (n.enableRetinaScaling ? i.devicePixelRatio : 1);
          delete this.group, n.withoutTransform && h.resetObjectTransform(this), n.withoutShadow && (this.shadow = null);
          var w = i.util.createCanvasElement(), x = this.getBoundingRect(!0, !0), k = this.shadow, L, Y = { x: 0, y: 0 }, K, re, q;
          k && (K = k.blur, k.nonScaling ? L = { scaleX: 1, scaleY: 1 } : L = this.getObjectScaling(), Y.x = 2 * Math.round(m(k.offsetX) + K) * m(L.scaleX), Y.y = 2 * Math.round(m(k.offsetY) + K) * m(L.scaleY)), re = x.width + Y.x, q = x.height + Y.y, w.width = Math.ceil(re), w.height = Math.ceil(q);
          var ee = new i.StaticCanvas(w, {
            enableRetinaScaling: !1,
            renderOnAddRemove: !1,
            skipOffscreen: !1
          });
          n.format === "jpeg" && (ee.backgroundColor = "#fff"), this.setPositionByOrigin(new i.Point(ee.width / 2, ee.height / 2), "center", "center");
          var se = this.canvas;
          ee.add(this);
          var ae = ee.toCanvasElement(C || 1, n);
          return this.shadow = p, this.set("canvas", se), g && (this.group = g), this.set(f).setCoords(), ee._objects = [], ee.dispose(), ee = null, ae;
        },
        /**
         * Converts an object into a data-url-like string
         * @param {Object} options Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         */
        toDataURL: function(n) {
          return n || (n = {}), i.util.toDataURL(this.toCanvasElement(n), n.format || "png", n.quality || 1);
        },
        /**
         * Returns true if specified type is identical to the type of an instance
         * @param {String} type Type to check against
         * @return {Boolean}
         */
        isType: function(n) {
          return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === n;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance (is 1 unless subclassed)
         */
        complexity: function() {
          return 1;
        },
        /**
         * Returns a JSON representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} JSON
         */
        toJSON: function(n) {
          return this.toObject(n);
        },
        /**
         * Sets "angle" of an instance with centered rotation
         * @param {Number} angle Angle value (in degrees)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        rotate: function(n) {
          var h = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
          return h && this._setOriginToCenter(), this.set("angle", n), h && this._resetOrigin(), this;
        },
        /**
         * Centers object horizontally on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerH: function() {
          return this.canvas && this.canvas.centerObjectH(this), this;
        },
        /**
         * Centers object horizontally on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterH: function() {
          return this.canvas && this.canvas.viewportCenterObjectH(this), this;
        },
        /**
         * Centers object vertically on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerV: function() {
          return this.canvas && this.canvas.centerObjectV(this), this;
        },
        /**
         * Centers object vertically on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterV: function() {
          return this.canvas && this.canvas.viewportCenterObjectV(this), this;
        },
        /**
         * Centers object vertically and horizontally on canvas to which is was added last
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        center: function() {
          return this.canvas && this.canvas.centerObject(this), this;
        },
        /**
         * Centers object on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenter: function() {
          return this.canvas && this.canvas.viewportCenterObject(this), this;
        },
        /**
         * Returns coordinates of a pointer relative to an object
         * @param {Event} e Event to operate upon
         * @param {Object} [pointer] Pointer to operate upon (instead of event)
         * @return {Object} Coordinates of a pointer (x, y)
         */
        getLocalPointer: function(n, h) {
          h = h || this.canvas.getPointer(n);
          var f = new i.Point(h.x, h.y), g = this._getLeftTopCoords();
          return this.angle && (f = i.util.rotatePoint(
            f,
            g,
            t(-this.angle)
          )), {
            x: f.x - g.x,
            y: f.y - g.y
          };
        },
        /**
         * Sets canvas globalCompositeOperation for specific object
         * custom composition operation for the particular object can be specified using globalCompositeOperation property
         * @param {CanvasRenderingContext2D} ctx Rendering canvas context
         */
        _setupCompositeOperation: function(n) {
          this.globalCompositeOperation && (n.globalCompositeOperation = this.globalCompositeOperation);
        },
        /**
         * cancel instance's running animations
         * override if necessary to dispose artifacts such as `clipPath`
         */
        dispose: function() {
          i.runningAnimations && i.runningAnimations.cancelByTarget(this);
        }
      }
    ), i.util.createAccessors && i.util.createAccessors(i.Object), a(i.Object.prototype, i.Observable), i.Object.NUM_FRACTION_DIGITS = 2, i.Object.ENLIVEN_PROPS = ["clipPath"], i.Object._fromObject = function(n, h, f, g) {
      var p = i[n];
      h = o(h, !0), i.util.enlivenPatterns([h.fill, h.stroke], function(m) {
        typeof m[0] < "u" && (h.fill = m[0]), typeof m[1] < "u" && (h.stroke = m[1]), i.util.enlivenObjectEnlivables(h, h, function() {
          var C = g ? new p(h[g], h) : new p(h);
          f && f(C);
        });
      });
    }, i.Object.__uid = 0);
  }(d), function() {
    var u = c.util.degreesToRadians, i = {
      left: -0.5,
      center: 0,
      right: 0.5
    }, a = {
      top: -0.5,
      center: 0,
      bottom: 0.5
    };
    c.util.object.extend(
      c.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Translates the coordinates from a set of origin to another (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToGivenOrigin: function(o, e, r, t, s) {
          var l = o.x, n = o.y, h, f, g;
          return typeof e == "string" ? e = i[e] : e -= 0.5, typeof t == "string" ? t = i[t] : t -= 0.5, h = t - e, typeof r == "string" ? r = a[r] : r -= 0.5, typeof s == "string" ? s = a[s] : s -= 0.5, f = s - r, (h || f) && (g = this._getTransformedDimensions(), l = o.x + h * g.x, n = o.y + f * g.y), new c.Point(l, n);
        },
        /**
         * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToCenterPoint: function(o, e, r) {
          var t = this.translateToGivenOrigin(o, e, r, "center", "center");
          return this.angle ? c.util.rotatePoint(t, o, u(this.angle)) : t;
        },
        /**
         * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
         * @param {fabric.Point} center The point which corresponds to center of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToOriginPoint: function(o, e, r) {
          var t = this.translateToGivenOrigin(o, "center", "center", e, r);
          return this.angle ? c.util.rotatePoint(t, o, u(this.angle)) : t;
        },
        /**
         * Returns the real center coordinates of the object
         * @return {fabric.Point}
         */
        getCenterPoint: function() {
          var o = new c.Point(this.left, this.top);
          return this.translateToCenterPoint(o, this.originX, this.originY);
        },
        /**
         * Returns the coordinates of the object based on center coordinates
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @return {fabric.Point}
         */
        // getOriginPoint: function(center) {
        //   return this.translateToOriginPoint(center, this.originX, this.originY);
        // },
        /**
         * Returns the coordinates of the object as if it has a different origin
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        getPointByOrigin: function(o, e) {
          var r = this.getCenterPoint();
          return this.translateToOriginPoint(r, o, e);
        },
        /**
         * Returns the point in local coordinates
         * @param {fabric.Point} point The point relative to the global coordinate system
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        toLocalPoint: function(o, e, r) {
          var t = this.getCenterPoint(), s, l;
          return typeof e < "u" && typeof r < "u" ? s = this.translateToGivenOrigin(t, "center", "center", e, r) : s = new c.Point(this.left, this.top), l = new c.Point(o.x, o.y), this.angle && (l = c.util.rotatePoint(l, t, -u(this.angle))), l.subtractEquals(s);
        },
        /**
         * Returns the point in global coordinates
         * @param {fabric.Point} The point relative to the local coordinate system
         * @return {fabric.Point}
         */
        // toGlobalPoint: function(point) {
        //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
        // },
        /**
         * Sets the position of the object taking into consideration the object's origin
         * @param {fabric.Point} pos The new position of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {void}
         */
        setPositionByOrigin: function(o, e, r) {
          var t = this.translateToCenterPoint(o, e, r), s = this.translateToOriginPoint(t, this.originX, this.originY);
          this.set("left", s.x), this.set("top", s.y);
        },
        /**
         * @param {String} to One of 'left', 'center', 'right'
         */
        adjustPosition: function(o) {
          var e = u(this.angle), r = this.getScaledWidth(), t = c.util.cos(e) * r, s = c.util.sin(e) * r, l, n;
          typeof this.originX == "string" ? l = i[this.originX] : l = this.originX - 0.5, typeof o == "string" ? n = i[o] : n = o - 0.5, this.left += t * (n - l), this.top += s * (n - l), this.setCoords(), this.originX = o;
        },
        /**
         * Sets the origin/position of the object to it's center point
         * @private
         * @return {void}
         */
        _setOriginToCenter: function() {
          this._originalOriginX = this.originX, this._originalOriginY = this.originY;
          var o = this.getCenterPoint();
          this.originX = "center", this.originY = "center", this.left = o.x, this.top = o.y;
        },
        /**
         * Resets the origin/position of the object to it's original origin
         * @private
         * @return {void}
         */
        _resetOrigin: function() {
          var o = this.translateToOriginPoint(
            this.getCenterPoint(),
            this._originalOriginX,
            this._originalOriginY
          );
          this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = o.x, this.top = o.y, this._originalOriginX = null, this._originalOriginY = null;
        },
        /**
         * @private
         */
        _getLeftTopCoords: function() {
          return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
        }
      }
    );
  }(), function() {
    function u(r) {
      return [
        new c.Point(r.tl.x, r.tl.y),
        new c.Point(r.tr.x, r.tr.y),
        new c.Point(r.br.x, r.br.y),
        new c.Point(r.bl.x, r.bl.y)
      ];
    }
    var i = c.util, a = i.degreesToRadians, o = i.multiplyTransformMatrices, e = i.transformPoint;
    i.object.extend(
      c.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Describe object's corner position in canvas element coordinates.
         * properties are depending on control keys and padding the main controls.
         * each property is an object with x, y and corner.
         * The `corner` property contains in a similar manner the 4 points of the
         * interactive area of the corner.
         * The coordinates depends from the controls positionHandler and are used
         * to draw and locate controls
         * @memberOf fabric.Object.prototype
         */
        oCoords: null,
        /**
         * Describe object's corner position in canvas object absolute coordinates
         * properties are tl,tr,bl,br and describe the four main corner.
         * each property is an object with x, y, instance of Fabric.Point.
         * The coordinates depends from this properties: width, height, scaleX, scaleY
         * skewX, skewY, angle, strokeWidth, top, left.
         * Those coordinates are useful to understand where an object is. They get updated
         * with oCoords but they do not need to be updated when zoom or panning change.
         * The coordinates get updated with @method setCoords.
         * You can calculate them without updating with @method calcACoords();
         * @memberOf fabric.Object.prototype
         */
        aCoords: null,
        /**
         * Describe object's corner position in canvas element coordinates.
         * includes padding. Used of object detection.
         * set and refreshed with setCoords.
         * @memberOf fabric.Object.prototype
         */
        lineCoords: null,
        /**
         * storage for object transform matrix
         */
        ownMatrixCache: null,
        /**
         * storage for object full transform matrix
         */
        matrixCache: null,
        /**
         * custom controls interface
         * controls are added by default_controls.js
         */
        controls: {},
        /**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * @param {Boolean} absolute will return aCoords if true or lineCoords
         * @return {Object} {tl, tr, br, bl} points
         */
        _getCoords: function(r, t) {
          return t ? r ? this.calcACoords() : this.calcLineCoords() : ((!this.aCoords || !this.lineCoords) && this.setCoords(!0), r ? this.aCoords : this.lineCoords);
        },
        /**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * The coords are returned in an array.
         * @return {Array} [tl, tr, br, bl] of points
         */
        getCoords: function(r, t) {
          return u(this._getCoords(r, t));
        },
        /**
         * Checks if object intersects with an area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with an area formed by 2 points
         */
        intersectsWithRect: function(r, t, s, l) {
          var n = this.getCoords(s, l), h = c.Intersection.intersectPolygonRectangle(
            n,
            r,
            t
          );
          return h.status === "Intersection";
        },
        /**
         * Checks if object intersects with another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with another object
         */
        intersectsWithObject: function(r, t, s) {
          var l = c.Intersection.intersectPolygonPolygon(
            this.getCoords(t, s),
            r.getCoords(t, s)
          );
          return l.status === "Intersection" || r.isContainedWithinObject(this, t, s) || this.isContainedWithinObject(r, t, s);
        },
        /**
         * Checks if object is fully contained within area of another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area of another object
         */
        isContainedWithinObject: function(r, t, s) {
          for (var l = this.getCoords(t, s), n = t ? r.aCoords : r.lineCoords, h = 0, f = r._getImageLines(n); h < 4; h++)
            if (!r.containsPoint(l[h], f))
              return !1;
          return !0;
        },
        /**
         * Checks if object is fully contained within area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area formed by 2 points
         */
        isContainedWithinRect: function(r, t, s, l) {
          var n = this.getBoundingRect(s, l);
          return n.left >= r.x && n.left + n.width <= t.x && n.top >= r.y && n.top + n.height <= t.y;
        },
        /**
         * Checks if point is inside the object
         * @param {fabric.Point} point Point to check against
         * @param {Object} [lines] object returned from @method _getImageLines
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if point is inside the object
         */
        containsPoint: function(r, h, s, l) {
          var n = this._getCoords(s, l), h = h || this._getImageLines(n), f = this._findCrossPoints(r, h);
          return f !== 0 && f % 2 === 1;
        },
        /**
         * Checks if object is contained within the canvas with current viewportTransform
         * the check is done stopping at first point that appears on screen
         * @param {Boolean} [calculate] use coordinates of current position instead of .aCoords
         * @return {Boolean} true if object is fully or partially contained within canvas
         */
        isOnScreen: function(r) {
          if (!this.canvas)
            return !1;
          var t = this.canvas.vptCoords.tl, s = this.canvas.vptCoords.br, l = this.getCoords(!0, r);
          return l.some(function(n) {
            return n.x <= s.x && n.x >= t.x && n.y <= s.y && n.y >= t.y;
          }) || this.intersectsWithRect(t, s, !0, r) ? !0 : this._containsCenterOfCanvas(t, s, r);
        },
        /**
         * Checks if the object contains the midpoint between canvas extremities
         * Does not make sense outside the context of isOnScreen and isPartiallyOnScreen
         * @private
         * @param {Fabric.Point} pointTL Top Left point
         * @param {Fabric.Point} pointBR Top Right point
         * @param {Boolean} calculate use coordinates of current position instead of .oCoords
         * @return {Boolean} true if the object contains the point
         */
        _containsCenterOfCanvas: function(r, t, s) {
          var l = { x: (r.x + t.x) / 2, y: (r.y + t.y) / 2 };
          return !!this.containsPoint(l, null, !0, s);
        },
        /**
         * Checks if object is partially contained within the canvas with current viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is partially contained within canvas
         */
        isPartiallyOnScreen: function(r) {
          if (!this.canvas)
            return !1;
          var t = this.canvas.vptCoords.tl, s = this.canvas.vptCoords.br;
          if (this.intersectsWithRect(t, s, !0, r))
            return !0;
          var l = this.getCoords(!0, r).every(function(n) {
            return (n.x >= s.x || n.x <= t.x) && (n.y >= s.y || n.y <= t.y);
          });
          return l && this._containsCenterOfCanvas(t, s, r);
        },
        /**
         * Method that returns an object with the object edges in it, given the coordinates of the corners
         * @private
         * @param {Object} oCoords Coordinates of the object corners
         */
        _getImageLines: function(r) {
          var t = {
            topline: {
              o: r.tl,
              d: r.tr
            },
            rightline: {
              o: r.tr,
              d: r.br
            },
            bottomline: {
              o: r.br,
              d: r.bl
            },
            leftline: {
              o: r.bl,
              d: r.tl
            }
          };
          return t;
        },
        /**
         * Helper method to determine how many cross points are between the 4 object edges
         * and the horizontal line determined by a point on canvas
         * @private
         * @param {fabric.Point} point Point to check
         * @param {Object} lines Coordinates of the object being evaluated
         */
        // remove yi, not used but left code here just in case.
        _findCrossPoints: function(r, t) {
          var s, l, n, h, f, g = 0, p;
          for (var m in t)
            if (p = t[m], !(p.o.y < r.y && p.d.y < r.y) && !(p.o.y >= r.y && p.d.y >= r.y) && (p.o.x === p.d.x && p.o.x >= r.x ? f = p.o.x : (s = 0, l = (p.d.y - p.o.y) / (p.d.x - p.o.x), n = r.y - s * r.x, h = p.o.y - l * p.o.x, f = -(n - h) / (s - l)), f >= r.x && (g += 1), g === 2))
              break;
          return g;
        },
        /**
         * Returns coordinates of object's bounding rectangle (left, top, width, height)
         * the box is intended as aligned to axis of canvas.
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords / .aCoords
         * @return {Object} Object with left, top, width, height properties
         */
        getBoundingRect: function(r, t) {
          var s = this.getCoords(r, t);
          return i.makeBoundingBoxFromPoints(s);
        },
        /**
         * Returns width of an object's bounding box counting transformations
         * before 2.0 it was named getWidth();
         * @return {Number} width value
         */
        getScaledWidth: function() {
          return this._getTransformedDimensions().x;
        },
        /**
         * Returns height of an object bounding box counting transformations
         * before 2.0 it was named getHeight();
         * @return {Number} height value
         */
        getScaledHeight: function() {
          return this._getTransformedDimensions().y;
        },
        /**
         * Makes sure the scale is valid and modifies it if necessary
         * @private
         * @param {Number} value
         * @return {Number}
         */
        _constrainScale: function(r) {
          return Math.abs(r) < this.minScaleLimit ? r < 0 ? -this.minScaleLimit : this.minScaleLimit : r === 0 ? 1e-4 : r;
        },
        /**
         * Scales an object (equally by x and y)
         * @param {Number} value Scale factor
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scale: function(r) {
          return this._set("scaleX", r), this._set("scaleY", r), this.setCoords();
        },
        /**
         * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New width value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToWidth: function(r, t) {
          var s = this.getBoundingRect(t).width / this.getScaledWidth();
          return this.scale(r / this.width / s);
        },
        /**
         * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New height value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToHeight: function(r, t) {
          var s = this.getBoundingRect(t).height / this.getScaledHeight();
          return this.scale(r / this.height / s);
        },
        calcLineCoords: function() {
          var r = this.getViewportTransform(), t = this.padding, s = a(this.angle), l = i.cos(s), n = i.sin(s), h = l * t, f = n * t, g = h + f, p = h - f, m = this.calcACoords(), C = {
            tl: e(m.tl, r),
            tr: e(m.tr, r),
            bl: e(m.bl, r),
            br: e(m.br, r)
          };
          return t && (C.tl.x -= p, C.tl.y -= g, C.tr.x += g, C.tr.y -= p, C.bl.x -= g, C.bl.y += p, C.br.x += p, C.br.y += g), C;
        },
        calcOCoords: function() {
          var r = this._calcRotateMatrix(), t = this._calcTranslateMatrix(), s = this.getViewportTransform(), l = o(s, t), n = o(l, r), n = o(n, [1 / s[0], 0, 0, 1 / s[3], 0, 0]), h = this._calculateCurrentDimensions(), f = {};
          return this.forEachControl(function(g, p, m) {
            f[p] = g.positionHandler(h, n, m);
          }), f;
        },
        calcACoords: function() {
          var r = this._calcRotateMatrix(), t = this._calcTranslateMatrix(), s = o(t, r), l = this._getTransformedDimensions(), n = l.x / 2, h = l.y / 2;
          return {
            // corners
            tl: e({ x: -n, y: -h }, s),
            tr: e({ x: n, y: -h }, s),
            bl: e({ x: -n, y: h }, s),
            br: e({ x: n, y: h }, s)
          };
        },
        /**
         * Sets corner and controls position coordinates based on current angle, width and height, left and top.
         * oCoords are used to find the corners
         * aCoords are used to quickly find an object on the canvas
         * lineCoords are used to quickly find object during pointer events.
         * See {@link https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords} and {@link http://fabricjs.com/fabric-gotchas}
         *
         * @param {Boolean} [skipCorners] skip calculation of oCoords.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setCoords: function(r) {
          return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), r ? this : (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords(), this);
        },
        /**
         * calculate rotation matrix of an object
         * @return {Array} rotation matrix for the object
         */
        _calcRotateMatrix: function() {
          return i.calcRotateMatrix(this);
        },
        /**
         * calculate the translation matrix for an object transform
         * @return {Array} rotation matrix for the object
         */
        _calcTranslateMatrix: function() {
          var r = this.getCenterPoint();
          return [1, 0, 0, 1, r.x, r.y];
        },
        transformMatrixKey: function(r) {
          var t = "_", s = "";
          return !r && this.group && (s = this.group.transformMatrixKey(r) + t), s + this.top + t + this.left + t + this.scaleX + t + this.scaleY + t + this.skewX + t + this.skewY + t + this.angle + t + this.originX + t + this.originY + t + this.width + t + this.height + t + this.strokeWidth + this.flipX + this.flipY;
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties.
         * @param {Boolean} [skipGroup] return transform matrix for object not counting parent transformations
         * There are some situation in which this is useful to avoid the fake rotation.
         * @return {Array} transform matrix for the object
         */
        calcTransformMatrix: function(r) {
          var t = this.calcOwnMatrix();
          if (r || !this.group)
            return t;
          var s = this.transformMatrixKey(r), l = this.matrixCache || (this.matrixCache = {});
          return l.key === s ? l.value : (this.group && (t = o(this.group.calcTransformMatrix(!1), t)), l.key = s, l.value = t, t);
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties, this matrix does not include the group transformation
         * @return {Array} transform matrix for the object
         */
        calcOwnMatrix: function() {
          var r = this.transformMatrixKey(!0), t = this.ownMatrixCache || (this.ownMatrixCache = {});
          if (t.key === r)
            return t.value;
          var s = this._calcTranslateMatrix(), l = {
            angle: this.angle,
            translateX: s[4],
            translateY: s[5],
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: this.skewX,
            skewY: this.skewY,
            flipX: this.flipX,
            flipY: this.flipY
          };
          return t.key = r, t.value = i.composeMatrix(l), t.value;
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getNonTransformedDimensions: function() {
          var r = this.strokeWidth, t = this.width + r, s = this.height + r;
          return { x: t, y: s };
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param {Number} skewX, a value to override current skewX
         * @param {Number} skewY, a value to override current skewY
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getTransformedDimensions: function(r, t) {
          typeof r > "u" && (r = this.skewX), typeof t > "u" && (t = this.skewY);
          var s, l, n, h = r === 0 && t === 0;
          if (this.strokeUniform ? (l = this.width, n = this.height) : (s = this._getNonTransformedDimensions(), l = s.x, n = s.y), h)
            return this._finalizeDimensions(l * this.scaleX, n * this.scaleY);
          var f = i.sizeAfterTransform(l, n, {
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: r,
            skewY: t
          });
          return this._finalizeDimensions(f.x, f.y);
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param Number width width of the bbox
         * @param Number height height of the bbox
         * @private
         * @return {Object} .x finalized width dimension
         * @return {Object} .y finalized height dimension
         */
        _finalizeDimensions: function(r, t) {
          return this.strokeUniform ? { x: r + this.strokeWidth, y: t + this.strokeWidth } : { x: r, y: t };
        },
        /*
         * Calculate object dimensions for controls box, including padding and canvas zoom.
         * and active selection
         * private
         */
        _calculateCurrentDimensions: function() {
          var r = this.getViewportTransform(), t = this._getTransformedDimensions(), s = e(t, r, !0);
          return s.scalarAdd(2 * this.padding);
        }
      }
    );
  }(), c.util.object.extend(
    c.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Moves an object to the bottom of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendToBack: function() {
        return this.group ? c.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
      },
      /**
       * Moves an object to the top of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringToFront: function() {
        return this.group ? c.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
      },
      /**
       * Moves an object down in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendBackwards: function(u) {
        return this.group ? c.StaticCanvas.prototype.sendBackwards.call(this.group, this, u) : this.canvas && this.canvas.sendBackwards(this, u), this;
      },
      /**
       * Moves an object up in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringForward: function(u) {
        return this.group ? c.StaticCanvas.prototype.bringForward.call(this.group, this, u) : this.canvas && this.canvas.bringForward(this, u), this;
      },
      /**
       * Moves an object to specified level in stack of drawn objects
       * @param {Number} index New position of object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      moveTo: function(u) {
        return this.group && this.group.type !== "activeSelection" ? c.StaticCanvas.prototype.moveTo.call(this.group, this, u) : this.canvas && this.canvas.moveTo(this, u), this;
      }
    }
  ), function() {
    function u(a, o) {
      if (o) {
        if (o.toLive)
          return a + ": url(#SVGID_" + o.id + "); ";
        var e = new c.Color(o), r = a + ": " + e.toRgb() + "; ", t = e.getAlpha();
        return t !== 1 && (r += a + "-opacity: " + t.toString() + "; "), r;
      } else
        return a + ": none; ";
    }
    var i = c.util.toFixed;
    c.util.object.extend(
      c.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(a) {
          var o = this.fillRule ? this.fillRule : "nonzero", e = this.strokeWidth ? this.strokeWidth : "0", r = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", t = this.strokeDashOffset ? this.strokeDashOffset : "0", s = this.strokeLineCap ? this.strokeLineCap : "butt", l = this.strokeLineJoin ? this.strokeLineJoin : "miter", n = this.strokeMiterLimit ? this.strokeMiterLimit : "4", h = typeof this.opacity < "u" ? this.opacity : "1", f = this.visible ? "" : " visibility: hidden;", g = a ? "" : this.getSvgFilter(), p = u("fill", this.fill), m = u("stroke", this.stroke);
          return [
            m,
            "stroke-width: ",
            e,
            "; ",
            "stroke-dasharray: ",
            r,
            "; ",
            "stroke-linecap: ",
            s,
            "; ",
            "stroke-dashoffset: ",
            t,
            "; ",
            "stroke-linejoin: ",
            l,
            "; ",
            "stroke-miterlimit: ",
            n,
            "; ",
            p,
            "fill-rule: ",
            o,
            "; ",
            "opacity: ",
            h,
            ";",
            g,
            f
          ].join("");
        },
        /**
         * Returns styles-string for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @param {Boolean} useWhiteSpace a boolean to include an additional attribute in the style.
         * @return {String}
         */
        getSvgSpanStyles: function(a, o) {
          var e = "; ", t = a.fontFamily ? "font-family: " + (a.fontFamily.indexOf("'") === -1 && a.fontFamily.indexOf('"') === -1 ? "'" + a.fontFamily + "'" : a.fontFamily) + e : "", r = a.strokeWidth ? "stroke-width: " + a.strokeWidth + e : "", t = t, s = a.fontSize ? "font-size: " + a.fontSize + "px" + e : "", l = a.fontStyle ? "font-style: " + a.fontStyle + e : "", n = a.fontWeight ? "font-weight: " + a.fontWeight + e : "", h = a.fill ? u("fill", a.fill) : "", f = a.stroke ? u("stroke", a.stroke) : "", g = this.getSvgTextDecoration(a), p = a.deltaY ? "baseline-shift: " + -a.deltaY + "; " : "";
          return g && (g = "text-decoration: " + g + e), [
            f,
            r,
            t,
            s,
            l,
            n,
            g,
            h,
            p,
            o ? "white-space: pre; " : ""
          ].join("");
        },
        /**
         * Returns text-decoration property for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @return {String}
         */
        getSvgTextDecoration: function(a) {
          return ["overline", "underline", "line-through"].filter(function(o) {
            return a[o.replace("-", "")];
          }).join(" ");
        },
        /**
         * Returns filter for svg shadow
         * @return {String}
         */
        getSvgFilter: function() {
          return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
        },
        /**
         * Returns id attribute for svg output
         * @return {String}
         */
        getSvgCommons: function() {
          return [
            this.id ? 'id="' + this.id + '" ' : "",
            this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""
          ].join("");
        },
        /**
         * Returns transform-string for svg-export
         * @param {Boolean} use the full transform or the single object one.
         * @return {String}
         */
        getSvgTransform: function(a, o) {
          var e = a ? this.calcTransformMatrix() : this.calcOwnMatrix(), r = 'transform="' + c.util.matrixToSVG(e);
          return r + (o || "") + '" ';
        },
        _setSVGBg: function(a) {
          if (this.backgroundColor) {
            var o = c.Object.NUM_FRACTION_DIGITS;
            a.push(
              "		<rect ",
              this._getFillAttributes(this.backgroundColor),
              ' x="',
              i(-this.width / 2, o),
              '" y="',
              i(-this.height / 2, o),
              '" width="',
              i(this.width, o),
              '" height="',
              i(this.height, o),
              `"></rect>
`
            );
          }
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(a) {
          return this._createBaseSVGMarkup(this._toSVG(a), { reviver: a });
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(a) {
          return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(a), { reviver: a });
        },
        /**
         * @private
         */
        _createBaseClipPathSVGMarkup: function(a, o) {
          o = o || {};
          var e = o.reviver, r = o.additionalTransform || "", t = [
            this.getSvgTransform(!0, r),
            this.getSvgCommons()
          ].join(""), s = a.indexOf("COMMON_PARTS");
          return a[s] = t, e ? e(a.join("")) : a.join("");
        },
        /**
         * @private
         */
        _createBaseSVGMarkup: function(a, o) {
          o = o || {};
          var e = o.noStyle, r = o.reviver, t = e ? "" : 'style="' + this.getSvgStyles() + '" ', s = o.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", l = this.clipPath, n = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", h = l && l.absolutePositioned, f = this.stroke, g = this.fill, p = this.shadow, m, C = [], w, x = a.indexOf("COMMON_PARTS"), k = o.additionalTransform;
          return l && (l.clipPathId = "CLIPPATH_" + c.Object.__uid++, w = '<clipPath id="' + l.clipPathId + `" >
` + l.toClipPathSVG(r) + `</clipPath>
`), h && C.push(
            "<g ",
            s,
            this.getSvgCommons(),
            ` >
`
          ), C.push(
            "<g ",
            this.getSvgTransform(!1),
            h ? "" : s + this.getSvgCommons(),
            ` >
`
          ), m = [
            t,
            n,
            e ? "" : this.addPaintOrder(),
            " ",
            k ? 'transform="' + k + '" ' : ""
          ].join(""), a[x] = m, g && g.toLive && C.push(g.toSVG(this)), f && f.toLive && C.push(f.toSVG(this)), p && C.push(p.toSVG(this)), l && C.push(w), C.push(a.join("")), C.push(`</g>
`), h && C.push(`</g>
`), r ? r(C.join("")) : C.join("");
        },
        addPaintOrder: function() {
          return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
        }
      }
    );
  }(), function() {
    var u = c.util.object.extend, i = "stateProperties";
    function a(e, r, t) {
      var s = {}, l = !0;
      t.forEach(function(n) {
        s[n] = e[n];
      }), u(e[r], s, l);
    }
    function o(e, r, t) {
      if (e === r)
        return !0;
      if (Array.isArray(e)) {
        if (!Array.isArray(r) || e.length !== r.length)
          return !1;
        for (var s = 0, l = e.length; s < l; s++)
          if (!o(e[s], r[s]))
            return !1;
        return !0;
      } else if (e && typeof e == "object") {
        var n = Object.keys(e), h;
        if (!r || typeof r != "object" || !t && n.length !== Object.keys(r).length)
          return !1;
        for (var s = 0, l = n.length; s < l; s++)
          if (h = n[s], !(h === "canvas" || h === "group") && !o(e[h], r[h]))
            return !1;
        return !0;
      }
    }
    c.util.object.extend(
      c.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns true if object state (one of its state properties) was changed
         * @param {String} [propertySet] optional name for the set of property we want to save
         * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
         */
        hasStateChanged: function(e) {
          e = e || i;
          var r = "_" + e;
          return Object.keys(this[r]).length < this[e].length ? !0 : !o(this[r], this, !0);
        },
        /**
         * Saves state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        saveState: function(e) {
          var r = e && e.propertySet || i, t = "_" + r;
          return this[t] ? (a(this, t, this[r]), e && e.stateProperties && a(this, t, e.stateProperties), this) : this.setupState(e);
        },
        /**
         * Setups state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        setupState: function(e) {
          e = e || {};
          var r = e.propertySet || i;
          return e.propertySet = r, this["_" + r] = {}, this.saveState(e), this;
        }
      }
    );
  }(), function() {
    var u = c.util.degreesToRadians;
    c.util.object.extend(
      c.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Determines which corner has been clicked
         * @private
         * @param {Object} pointer The pointer indicating the mouse position
         * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
         */
        _findTargetCorner: function(i, a) {
          if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
            return !1;
          var o = i.x, e = i.y, r, t, s = Object.keys(this.oCoords), l = s.length - 1, n;
          for (this.__corner = 0; l >= 0; l--)
            if (n = s[l], !!this.isControlVisible(n) && (t = this._getImageLines(a ? this.oCoords[n].touchCorner : this.oCoords[n].corner), r = this._findCrossPoints({ x: o, y: e }, t), r !== 0 && r % 2 === 1))
              return this.__corner = n, n;
          return !1;
        },
        /**
         * Calls a function for each control. The function gets called,
         * with the control, the object that is calling the iterator and the control's key
         * @param {Function} fn function to iterate over the controls over
         */
        forEachControl: function(i) {
          for (var a in this.controls)
            i(this.controls[a], a, this);
        },
        /**
         * Sets the coordinates of the draggable boxes in the corners of
         * the image used to scale/rotate it.
         * note: if we would switch to ROUND corner area, all of this would disappear.
         * everything would resolve to a single point and a pythagorean theorem for the distance
         * @private
         */
        _setCornerCoords: function() {
          var i = this.oCoords;
          for (var a in i) {
            var o = this.controls[a];
            i[a].corner = o.calcCornerCoords(
              this.angle,
              this.cornerSize,
              i[a].x,
              i[a].y,
              !1
            ), i[a].touchCorner = o.calcCornerCoords(
              this.angle,
              this.touchCornerSize,
              i[a].x,
              i[a].y,
              !0
            );
          }
        },
        /**
         * Draws a colored layer behind the object, inside its selection borders.
         * Requires public options: padding, selectionBackgroundColor
         * this function is called when the context is transformed
         * has checks to be skipped when the object is on a staticCanvas
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawSelectionBackground: function(i) {
          if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
            return this;
          i.save();
          var a = this.getCenterPoint(), o = this._calculateCurrentDimensions(), e = this.canvas.viewportTransform;
          return i.translate(a.x, a.y), i.scale(1 / e[0], 1 / e[3]), i.rotate(u(this.angle)), i.fillStyle = this.selectionBackgroundColor, i.fillRect(-o.x / 2, -o.y / 2, o.x, o.y), i.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBorders: function(i, a) {
          a = a || {};
          var o = this._calculateCurrentDimensions(), e = this.borderScaleFactor, r = o.x + e, t = o.y + e, s = typeof a.hasControls < "u" ? a.hasControls : this.hasControls, l = !1;
          return i.save(), i.strokeStyle = a.borderColor || this.borderColor, this._setLineDash(i, a.borderDashArray || this.borderDashArray), i.strokeRect(
            -r / 2,
            -t / 2,
            r,
            t
          ), s && (i.beginPath(), this.forEachControl(function(n, h, f) {
            n.withConnection && n.getVisibility(f, h) && (l = !0, i.moveTo(n.x * r, n.y * t), i.lineTo(
              n.x * r + n.offsetX,
              n.y * t + n.offsetY
            ));
          }), l && i.stroke()), i.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box when it is inside a group.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {object} options object representing current object parameters
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBordersInGroup: function(i, a, o) {
          o = o || {};
          var e = c.util.sizeAfterTransform(this.width, this.height, a), r = this.strokeWidth, t = this.strokeUniform, s = this.borderScaleFactor, l = e.x + r * (t ? this.canvas.getZoom() : a.scaleX) + s, n = e.y + r * (t ? this.canvas.getZoom() : a.scaleY) + s;
          return i.save(), this._setLineDash(i, o.borderDashArray || this.borderDashArray), i.strokeStyle = o.borderColor || this.borderColor, i.strokeRect(
            -l / 2,
            -n / 2,
            l,
            n
          ), i.restore(), this;
        },
        /**
         * Draws corners of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: cornerSize, padding
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawControls: function(i, a) {
          a = a || {}, i.save();
          var o = this.canvas.getRetinaScaling(), e, r;
          return i.setTransform(o, 0, 0, o, 0, 0), i.strokeStyle = i.fillStyle = a.cornerColor || this.cornerColor, this.transparentCorners || (i.strokeStyle = a.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(i, a.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (e = this.group.calcTransformMatrix()), this.forEachControl(function(t, s, l) {
            r = l.oCoords[s], t.getVisibility(l, s) && (e && (r = c.util.transformPoint(r, e)), t.render(i, r.x, r.y, a, l));
          }), i.restore(), this;
        },
        /**
         * Returns true if the specified control is visible, false otherwise.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @returns {Boolean} true if the specified control is visible, false otherwise
         */
        isControlVisible: function(i) {
          return this.controls[i] && this.controls[i].getVisibility(this, i);
        },
        /**
         * Sets the visibility of the specified control.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @param {Boolean} visible true to set the specified control visible, false otherwise
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlVisible: function(i, a) {
          return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[i] = a, this;
        },
        /**
         * Sets the visibility state of object controls.
         * @param {Object} [options] Options object
         * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
         * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
         * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
         * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
         * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
         * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
         * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
         * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
         * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlsVisibility: function(i) {
          i || (i = {});
          for (var a in i)
            this.setControlVisible(a, i[a]);
          return this;
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to deselect this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onDeselect: function() {
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to select this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onSelect: function() {
        }
      }
    );
  }(), c.util.object.extend(
    c.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Animation duration (in ms) for fx* methods
       * @type Number
       * @default
       */
      FX_DURATION: 500,
      /**
       * Centers object horizontally with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxCenterObjectH: function(u, i) {
        i = i || {};
        var a = function() {
        }, o = i.onComplete || a, e = i.onChange || a, r = this;
        return c.util.animate({
          target: this,
          startValue: u.left,
          endValue: this.getCenterPoint().x,
          duration: this.FX_DURATION,
          onChange: function(t) {
            u.set("left", t), r.requestRenderAll(), e();
          },
          onComplete: function() {
            u.setCoords(), o();
          }
        });
      },
      /**
       * Centers object vertically with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxCenterObjectV: function(u, i) {
        i = i || {};
        var a = function() {
        }, o = i.onComplete || a, e = i.onChange || a, r = this;
        return c.util.animate({
          target: this,
          startValue: u.top,
          endValue: this.getCenterPoint().y,
          duration: this.FX_DURATION,
          onChange: function(t) {
            u.set("top", t), r.requestRenderAll(), e();
          },
          onComplete: function() {
            u.setCoords(), o();
          }
        });
      },
      /**
       * Same as `fabric.Canvas#remove` but animated
       * @param {fabric.Object} object Object to remove
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxRemove: function(u, i) {
        i = i || {};
        var a = function() {
        }, o = i.onComplete || a, e = i.onChange || a, r = this;
        return c.util.animate({
          target: this,
          startValue: u.opacity,
          endValue: 0,
          duration: this.FX_DURATION,
          onChange: function(t) {
            u.set("opacity", t), r.requestRenderAll(), e();
          },
          onComplete: function() {
            r.remove(u), o();
          }
        });
      }
    }
  ), c.util.object.extend(
    c.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Animates object's properties
       * @param {String|Object} property Property to animate (if string) or properties to animate (if object)
       * @param {Number|Object} value Value to animate property to (if string was given first) or options object
       * @return {fabric.Object} thisArg
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#animation}
       * @return {fabric.AnimationContext | fabric.AnimationContext[]} animation context (or an array if passed multiple properties)
       *
       * As object — multiple properties
       *
       * object.animate({ left: ..., top: ... });
       * object.animate({ left: ..., top: ... }, { duration: ... });
       *
       * As string — one property
       *
       * object.animate('left', ...);
       * object.animate('left', { duration: ... });
       *
       */
      animate: function() {
        if (arguments[0] && typeof arguments[0] == "object") {
          var u = [], i, a, o = [];
          for (i in arguments[0])
            u.push(i);
          for (var e = 0, r = u.length; e < r; e++)
            i = u[e], a = e !== r - 1, o.push(this._animate(i, arguments[0][i], arguments[1], a));
          return o;
        } else
          return this._animate.apply(this, arguments);
      },
      /**
       * @private
       * @param {String} property Property to animate
       * @param {String} to Value to animate to
       * @param {Object} [options] Options object
       * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
       */
      _animate: function(u, i, a, o) {
        var e = this, r;
        i = i.toString(), a ? a = c.util.object.clone(a) : a = {}, ~u.indexOf(".") && (r = u.split("."));
        var t = e.colorProperties.indexOf(u) > -1 || r && e.colorProperties.indexOf(r[1]) > -1, s = r ? this.get(r[0])[r[1]] : this.get(u);
        "from" in a || (a.from = s), t || (~i.indexOf("=") ? i = s + parseFloat(i.replace("=", "")) : i = parseFloat(i));
        var l = {
          target: this,
          startValue: a.from,
          endValue: i,
          byValue: a.by,
          easing: a.easing,
          duration: a.duration,
          abort: a.abort && function(n, h, f) {
            return a.abort.call(e, n, h, f);
          },
          onChange: function(n, h, f) {
            r ? e[r[0]][r[1]] = n : e.set(u, n), !o && a.onChange && a.onChange(n, h, f);
          },
          onComplete: function(n, h, f) {
            o || (e.setCoords(), a.onComplete && a.onComplete(n, h, f));
          }
        };
        return t ? c.util.animateColor(l.startValue, l.endValue, l.duration, l) : c.util.animate(l);
      }
    }
  ), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend, o = i.util.object.clone, e = { x1: 1, x2: 1, y1: 1, y2: 1 };
    if (i.Line) {
      i.warn("fabric.Line is already defined");
      return;
    }
    i.Line = i.util.createClass(
      i.Object,
      /** @lends fabric.Line.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "line",
        /**
         * x value or first line edge
         * @type Number
         * @default
         */
        x1: 0,
        /**
         * y value or first line edge
         * @type Number
         * @default
         */
        y1: 0,
        /**
         * x value or second line edge
         * @type Number
         * @default
         */
        x2: 0,
        /**
         * y value or second line edge
         * @type Number
         * @default
         */
        y2: 0,
        cacheProperties: i.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
        /**
         * Constructor
         * @param {Array} [points] Array of points
         * @param {Object} [options] Options object
         * @return {fabric.Line} thisArg
         */
        initialize: function(t, s) {
          t || (t = [0, 0, 0, 0]), this.callSuper("initialize", s), this.set("x1", t[0]), this.set("y1", t[1]), this.set("x2", t[2]), this.set("y2", t[3]), this._setWidthHeight(s);
        },
        /**
         * @private
         * @param {Object} [options] Options
         */
        _setWidthHeight: function(t) {
          t || (t = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in t ? t.left : this._getLeftToOriginX(), this.top = "top" in t ? t.top : this._getTopToOriginY();
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         */
        _set: function(t, s) {
          return this.callSuper("_set", t, s), typeof e[t] < "u" && this._setWidthHeight(), this;
        },
        /**
         * @private
         * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
         */
        _getLeftToOriginX: r(
          {
            // property names
            origin: "originX",
            axis1: "x1",
            axis2: "x2",
            dimension: "width"
          },
          {
            // possible values of origin
            nearest: "left",
            center: "center",
            farthest: "right"
          }
        ),
        /**
         * @private
         * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
         */
        _getTopToOriginY: r(
          {
            // property names
            origin: "originY",
            axis1: "y1",
            axis2: "y2",
            dimension: "height"
          },
          {
            // possible values of origin
            nearest: "top",
            center: "center",
            farthest: "bottom"
          }
        ),
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(t) {
          t.beginPath();
          var s = this.calcLinePoints();
          t.moveTo(s.x1, s.y1), t.lineTo(s.x2, s.y2), t.lineWidth = this.strokeWidth;
          var l = t.strokeStyle;
          t.strokeStyle = this.stroke || t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = l;
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return {
            x: (this.x1 + this.x2) / 2,
            y: (this.y1 + this.y2) / 2
          };
        },
        /**
         * Returns object representation of an instance
         * @method toObject
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(t) {
          return a(this.callSuper("toObject", t), this.calcLinePoints());
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         */
        _getNonTransformedDimensions: function() {
          var t = this.callSuper("_getNonTransformedDimensions");
          return this.strokeLineCap === "butt" && (this.width === 0 && (t.y -= this.strokeWidth), this.height === 0 && (t.x -= this.strokeWidth)), t;
        },
        /**
         * Recalculates line points given width and height
         * @private
         */
        calcLinePoints: function() {
          var t = this.x1 <= this.x2 ? -1 : 1, s = this.y1 <= this.y2 ? -1 : 1, l = t * this.width * 0.5, n = s * this.height * 0.5, h = t * this.width * -0.5, f = s * this.height * -0.5;
          return {
            x1: l,
            x2: h,
            y1: n,
            y2: f
          };
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var t = this.calcLinePoints();
          return [
            "<line ",
            "COMMON_PARTS",
            'x1="',
            t.x1,
            '" y1="',
            t.y1,
            '" x2="',
            t.x2,
            '" y2="',
            t.y2,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), i.Line.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), i.Line.fromElement = function(t, s, l) {
      l = l || {};
      var n = i.parseAttributes(t, i.Line.ATTRIBUTE_NAMES), h = [
        n.x1 || 0,
        n.y1 || 0,
        n.x2 || 0,
        n.y2 || 0
      ];
      s(new i.Line(h, a(n, l)));
    }, i.Line.fromObject = function(t, s) {
      function l(h) {
        delete h.points, s && s(h);
      }
      var n = o(t, !0);
      n.points = [t.x1, t.y1, t.x2, t.y2], i.Object._fromObject("Line", n, l, "points");
    };
    function r(t, s) {
      var l = t.origin, n = t.axis1, h = t.axis2, f = t.dimension, g = s.nearest, p = s.center, m = s.farthest;
      return function() {
        switch (this.get(l)) {
          case g:
            return Math.min(this.get(n), this.get(h));
          case p:
            return Math.min(this.get(n), this.get(h)) + 0.5 * this.get(f);
          case m:
            return Math.max(this.get(n), this.get(h));
        }
      };
    }
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.degreesToRadians;
    if (i.Circle) {
      i.warn("fabric.Circle is already defined.");
      return;
    }
    i.Circle = i.util.createClass(
      i.Object,
      /** @lends fabric.Circle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "circle",
        /**
         * Radius of this circle
         * @type Number
         * @default
         */
        radius: 0,
        /**
         * degrees of start of the circle.
         * probably will change to degrees in next major version
         * @type Number 0 - 359
         * @default 0
         */
        startAngle: 0,
        /**
         * End angle of the circle
         * probably will change to degrees in next major version
         * @type Number 1 - 360
         * @default 360
         */
        endAngle: 360,
        cacheProperties: i.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Circle} thisArg
         */
        _set: function(e, r) {
          return this.callSuper("_set", e, r), e === "radius" && this.setRadius(r), this;
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(e) {
          return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(e));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var e, r = 0, t = 0, s = (this.endAngle - this.startAngle) % 360;
          if (s === 0)
            e = [
              "<circle ",
              "COMMON_PARTS",
              'cx="' + r + '" cy="' + t + '" ',
              'r="',
              this.radius,
              `" />
`
            ];
          else {
            var l = a(this.startAngle), n = a(this.endAngle), h = this.radius, f = i.util.cos(l) * h, g = i.util.sin(l) * h, p = i.util.cos(n) * h, m = i.util.sin(n) * h, C = s > 180 ? "1" : "0";
            e = [
              '<path d="M ' + f + " " + g,
              " A " + h + " " + h,
              " 0 ",
              +C + " 1",
              " " + p + " " + m,
              '" ',
              "COMMON_PARTS",
              ` />
`
            ];
          }
          return e;
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(e) {
          e.beginPath(), e.arc(
            0,
            0,
            this.radius,
            a(this.startAngle),
            a(this.endAngle),
            !1
          ), this._renderPaintInOrder(e);
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusX: function() {
          return this.get("radius") * this.get("scaleX");
        },
        /**
         * Returns vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusY: function() {
          return this.get("radius") * this.get("scaleY");
        },
        /**
         * Sets radius of an object (and updates width accordingly)
         * @return {fabric.Circle} thisArg
         */
        setRadius: function(e) {
          return this.radius = e, this.set("width", e * 2).set("height", e * 2);
        }
      }
    ), i.Circle.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), i.Circle.fromElement = function(e, r) {
      var t = i.parseAttributes(e, i.Circle.ATTRIBUTE_NAMES);
      if (!o(t))
        throw new Error("value of `r` attribute is required and can not be negative");
      t.left = (t.left || 0) - t.radius, t.top = (t.top || 0) - t.radius, r(new i.Circle(t));
    };
    function o(e) {
      return "radius" in e && e.radius >= 0;
    }
    i.Circle.fromObject = function(e, r) {
      i.Object._fromObject("Circle", e, r);
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {});
    if (i.Triangle) {
      i.warn("fabric.Triangle is already defined");
      return;
    }
    i.Triangle = i.util.createClass(
      i.Object,
      /** @lends fabric.Triangle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "triangle",
        /**
         * Width is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        width: 100,
        /**
         * Height is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        height: 100,
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(a) {
          var o = this.width / 2, e = this.height / 2;
          a.beginPath(), a.moveTo(-o, e), a.lineTo(0, -e), a.lineTo(o, e), a.closePath(), this._renderPaintInOrder(a);
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var a = this.width / 2, o = this.height / 2, e = [
            -a + " " + o,
            "0 " + -o,
            a + " " + o
          ].join(",");
          return [
            "<polygon ",
            "COMMON_PARTS",
            'points="',
            e,
            '" />'
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), i.Triangle.fromObject = function(a, o) {
      return i.Object._fromObject("Triangle", a, o);
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = Math.PI * 2;
    if (i.Ellipse) {
      i.warn("fabric.Ellipse is already defined.");
      return;
    }
    i.Ellipse = i.util.createClass(
      i.Object,
      /** @lends fabric.Ellipse.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "ellipse",
        /**
         * Horizontal radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: i.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {fabric.Ellipse} thisArg
         */
        initialize: function(o) {
          this.callSuper("initialize", o), this.set("rx", o && o.rx || 0), this.set("ry", o && o.ry || 0);
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Ellipse} thisArg
         */
        _set: function(o, e) {
          switch (this.callSuper("_set", o, e), o) {
            case "rx":
              this.rx = e, this.set("width", e * 2);
              break;
            case "ry":
              this.ry = e, this.set("height", e * 2);
              break;
          }
          return this;
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRx: function() {
          return this.get("rx") * this.get("scaleX");
        },
        /**
         * Returns Vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRy: function() {
          return this.get("ry") * this.get("scaleY");
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(o) {
          return this.callSuper("toObject", ["rx", "ry"].concat(o));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          return [
            "<ellipse ",
            "COMMON_PARTS",
            'cx="0" cy="0" ',
            'rx="',
            this.rx,
            '" ry="',
            this.ry,
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(o) {
          o.beginPath(), o.save(), o.transform(1, 0, 0, this.ry / this.rx, 0, 0), o.arc(
            0,
            0,
            this.rx,
            0,
            a,
            !1
          ), o.restore(), this._renderPaintInOrder(o);
        }
      }
    ), i.Ellipse.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), i.Ellipse.fromElement = function(o, e) {
      var r = i.parseAttributes(o, i.Ellipse.ATTRIBUTE_NAMES);
      r.left = (r.left || 0) - r.rx, r.top = (r.top || 0) - r.ry, e(new i.Ellipse(r));
    }, i.Ellipse.fromObject = function(o, e) {
      i.Object._fromObject("Ellipse", o, e);
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend;
    if (i.Rect) {
      i.warn("fabric.Rect is already defined");
      return;
    }
    i.Rect = i.util.createClass(
      i.Object,
      /** @lends fabric.Rect.prototype */
      {
        /**
         * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: i.Object.prototype.stateProperties.concat("rx", "ry"),
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "rect",
        /**
         * Horizontal border radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical border radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: i.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(o) {
          this.callSuper("initialize", o), this._initRxRy();
        },
        /**
         * Initializes rx/ry attributes
         * @private
         */
        _initRxRy: function() {
          this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(o) {
          var e = this.rx ? Math.min(this.rx, this.width / 2) : 0, r = this.ry ? Math.min(this.ry, this.height / 2) : 0, t = this.width, s = this.height, l = -this.width / 2, n = -this.height / 2, h = e !== 0 || r !== 0, f = 1 - 0.5522847498;
          o.beginPath(), o.moveTo(l + e, n), o.lineTo(l + t - e, n), h && o.bezierCurveTo(l + t - f * e, n, l + t, n + f * r, l + t, n + r), o.lineTo(l + t, n + s - r), h && o.bezierCurveTo(l + t, n + s - f * r, l + t - f * e, n + s, l + t - e, n + s), o.lineTo(l + e, n + s), h && o.bezierCurveTo(l + f * e, n + s, l, n + s - f * r, l, n + s - r), o.lineTo(l, n + r), h && o.bezierCurveTo(l, n + f * r, l + f * e, n, l + e, n), o.closePath(), this._renderPaintInOrder(o);
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(o) {
          return this.callSuper("toObject", ["rx", "ry"].concat(o));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var o = -this.width / 2, e = -this.height / 2;
          return [
            "<rect ",
            "COMMON_PARTS",
            'x="',
            o,
            '" y="',
            e,
            '" rx="',
            this.rx,
            '" ry="',
            this.ry,
            '" width="',
            this.width,
            '" height="',
            this.height,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), i.Rect.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), i.Rect.fromElement = function(o, e, r) {
      if (!o)
        return e(null);
      r = r || {};
      var t = i.parseAttributes(o, i.Rect.ATTRIBUTE_NAMES);
      t.left = t.left || 0, t.top = t.top || 0, t.height = t.height || 0, t.width = t.width || 0;
      var s = new i.Rect(a(r ? i.util.object.clone(r) : {}, t));
      s.visible = s.visible && s.width > 0 && s.height > 0, e(s);
    }, i.Rect.fromObject = function(o, e) {
      return i.Object._fromObject("Rect", o, e);
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend, o = i.util.array.min, e = i.util.array.max, r = i.util.toFixed, t = i.util.projectStrokeOnPoints;
    if (i.Polyline) {
      i.warn("fabric.Polyline is already defined");
      return;
    }
    i.Polyline = i.util.createClass(
      i.Object,
      /** @lends fabric.Polyline.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polyline",
        /**
         * Points array
         * @type Array
         * @default
         */
        points: null,
        /**
         * WARNING: Feature in progress
         * Calculate the exact bounding box taking in account strokeWidth on acute angles
         * this will be turned to true by default on fabric 6.0
         * maybe will be left in as an optimization since calculations may be slow
         * @deprecated
         * @type Boolean
         * @default false
         */
        exactBoundingBox: !1,
        cacheProperties: i.Object.prototype.cacheProperties.concat("points"),
        /**
         * Constructor
         * @param {Array} points Array of points (where each point is an object with x and y)
         * @param {Object} [options] Options object
         * @return {fabric.Polyline} thisArg
         * @example
         * var poly = new fabric.Polyline([
         *     { x: 10, y: 10 },
         *     { x: 50, y: 30 },
         *     { x: 40, y: 70 },
         *     { x: 60, y: 50 },
         *     { x: 100, y: 150 },
         *     { x: 40, y: 100 }
         *   ], {
         *   stroke: 'red',
         *   left: 100,
         *   top: 100
         * });
         */
        initialize: function(s, l) {
          l = l || {}, this.points = s || [], this.callSuper("initialize", l), this._setPositionDimensions(l);
        },
        /**
         * @private
         */
        _projectStrokeOnPoints: function() {
          return t(this.points, this, !0);
        },
        _setPositionDimensions: function(s) {
          var l = this._calcDimensions(s), n, h = this.exactBoundingBox ? this.strokeWidth : 0;
          this.width = l.width - h, this.height = l.height - h, s.fromSVG || (n = this.translateToGivenOrigin(
            {
              // this looks bad, but is one way to keep it optional for now.
              x: l.left - this.strokeWidth / 2 + h / 2,
              y: l.top - this.strokeWidth / 2 + h / 2
            },
            "left",
            "top",
            this.originX,
            this.originY
          )), typeof s.left > "u" && (this.left = s.fromSVG ? l.left : n.x), typeof s.top > "u" && (this.top = s.fromSVG ? l.top : n.y), this.pathOffset = {
            x: l.left + this.width / 2 + h / 2,
            y: l.top + this.height / 2 + h / 2
          };
        },
        /**
         * Calculate the polygon min and max point from points array,
         * returning an object with left, top, width, height to measure the
         * polygon size
         * @return {Object} object.left X coordinate of the polygon leftmost point
         * @return {Object} object.top Y coordinate of the polygon topmost point
         * @return {Object} object.width distance between X coordinates of the polygon leftmost and rightmost point
         * @return {Object} object.height distance between Y coordinates of the polygon topmost and bottommost point
         * @private
         */
        _calcDimensions: function() {
          var s = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, l = o(s, "x") || 0, n = o(s, "y") || 0, h = e(s, "x") || 0, f = e(s, "y") || 0, g = h - l, p = f - n;
          return {
            left: l,
            top: n,
            width: g,
            height: p
          };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(s) {
          return a(this.callSuper("toObject", s), {
            points: this.points.concat()
          });
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          for (var s = [], l = this.pathOffset.x, n = this.pathOffset.y, h = i.Object.NUM_FRACTION_DIGITS, f = 0, g = this.points.length; f < g; f++)
            s.push(
              r(this.points[f].x - l, h),
              ",",
              r(this.points[f].y - n, h),
              " "
            );
          return [
            "<" + this.type + " ",
            "COMMON_PARTS",
            'points="',
            s.join(""),
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        commonRender: function(s) {
          var l, n = this.points.length, h = this.pathOffset.x, f = this.pathOffset.y;
          if (!n || isNaN(this.points[n - 1].y))
            return !1;
          s.beginPath(), s.moveTo(this.points[0].x - h, this.points[0].y - f);
          for (var g = 0; g < n; g++)
            l = this.points[g], s.lineTo(l.x - h, l.y - f);
          return !0;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(s) {
          this.commonRender(s) && this._renderPaintInOrder(s);
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.get("points").length;
        }
      }
    ), i.Polyline.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat(), i.Polyline.fromElementGenerator = function(s) {
      return function(l, n, h) {
        if (!l)
          return n(null);
        h || (h = {});
        var f = i.parsePointsAttribute(l.getAttribute("points")), g = i.parseAttributes(l, i[s].ATTRIBUTE_NAMES);
        g.fromSVG = !0, n(new i[s](f, a(g, h)));
      };
    }, i.Polyline.fromElement = i.Polyline.fromElementGenerator("Polyline"), i.Polyline.fromObject = function(s, l) {
      return i.Object._fromObject("Polyline", s, l, "points");
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.projectStrokeOnPoints;
    if (i.Polygon) {
      i.warn("fabric.Polygon is already defined");
      return;
    }
    i.Polygon = i.util.createClass(
      i.Polyline,
      /** @lends fabric.Polygon.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polygon",
        /**
         * @private
         */
        _projectStrokeOnPoints: function() {
          return a(this.points, this);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(o) {
          this.commonRender(o) && (o.closePath(), this._renderPaintInOrder(o));
        }
      }
    ), i.Polygon.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat(), i.Polygon.fromElement = i.Polyline.fromElementGenerator("Polygon"), i.Polygon.fromObject = function(o, e) {
      i.Object._fromObject("Polygon", o, e, "points");
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.array.min, o = i.util.array.max, e = i.util.object.extend, r = i.util.object.clone, t = i.util.toFixed;
    if (i.Path) {
      i.warn("fabric.Path is already defined");
      return;
    }
    i.Path = i.util.createClass(
      i.Object,
      /** @lends fabric.Path.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "path",
        /**
         * Array of path points
         * @type Array
         * @default
         */
        path: null,
        cacheProperties: i.Object.prototype.cacheProperties.concat("path", "fillRule"),
        stateProperties: i.Object.prototype.stateProperties.concat("path"),
        /**
         * Constructor
         * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
         * @param {Object} [options] Options object
         * @return {fabric.Path} thisArg
         */
        initialize: function(s, l) {
          l = r(l || {}), delete l.path, this.callSuper("initialize", l), this._setPath(s || [], l);
        },
        /**
        * @private
        * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
        * @param {Object} [options] Options object
        */
        _setPath: function(s, l) {
          this.path = i.util.makePathSimpler(
            Array.isArray(s) ? s : i.util.parsePath(s)
          ), i.Polyline.prototype._setPositionDimensions.call(this, l || {});
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _renderPathCommands: function(s) {
          var l, n = 0, h = 0, f = 0, g = 0, p = 0, m = 0, C = -this.pathOffset.x, w = -this.pathOffset.y;
          s.beginPath();
          for (var x = 0, k = this.path.length; x < k; ++x)
            switch (l = this.path[x], l[0]) {
              case "L":
                f = l[1], g = l[2], s.lineTo(f + C, g + w);
                break;
              case "M":
                f = l[1], g = l[2], n = f, h = g, s.moveTo(f + C, g + w);
                break;
              case "C":
                f = l[5], g = l[6], p = l[3], m = l[4], s.bezierCurveTo(
                  l[1] + C,
                  l[2] + w,
                  p + C,
                  m + w,
                  f + C,
                  g + w
                );
                break;
              case "Q":
                s.quadraticCurveTo(
                  l[1] + C,
                  l[2] + w,
                  l[3] + C,
                  l[4] + w
                ), f = l[3], g = l[4], p = l[1], m = l[2];
                break;
              case "z":
              case "Z":
                f = n, g = h, s.closePath();
                break;
            }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _render: function(s) {
          this._renderPathCommands(s), this._renderPaintInOrder(s);
        },
        /**
         * Returns string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(s) {
          return e(this.callSuper("toObject", s), {
            path: this.path.map(function(l) {
              return l.slice();
            })
          });
        },
        /**
         * Returns dataless object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(s) {
          var l = this.toObject(["sourcePath"].concat(s));
          return l.sourcePath && delete l.path, l;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var s = i.util.joinPath(this.path);
          return [
            "<path ",
            "COMMON_PARTS",
            'd="',
            s,
            '" stroke-linecap="round" ',
            `/>
`
          ];
        },
        _getOffsetTransform: function() {
          var s = i.Object.NUM_FRACTION_DIGITS;
          return " translate(" + t(-this.pathOffset.x, s) + ", " + t(-this.pathOffset.y, s) + ")";
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(s) {
          var l = this._getOffsetTransform();
          return "	" + this._createBaseClipPathSVGMarkup(
            this._toSVG(),
            { reviver: s, additionalTransform: l }
          );
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(s) {
          var l = this._getOffsetTransform();
          return this._createBaseSVGMarkup(this._toSVG(), { reviver: s, additionalTransform: l });
        },
        /* _TO_SVG_END_ */
        /**
         * Returns number representation of an instance complexity
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.path.length;
        },
        /**
         * @private
         */
        _calcDimensions: function() {
          for (var s = [], l = [], n, h = 0, f = 0, g = 0, p = 0, m, C = 0, w = this.path.length; C < w; ++C) {
            switch (n = this.path[C], n[0]) {
              case "L":
                g = n[1], p = n[2], m = [];
                break;
              case "M":
                g = n[1], p = n[2], h = g, f = p, m = [];
                break;
              case "C":
                m = i.util.getBoundsOfCurve(
                  g,
                  p,
                  n[1],
                  n[2],
                  n[3],
                  n[4],
                  n[5],
                  n[6]
                ), g = n[5], p = n[6];
                break;
              case "Q":
                m = i.util.getBoundsOfCurve(
                  g,
                  p,
                  n[1],
                  n[2],
                  n[1],
                  n[2],
                  n[3],
                  n[4]
                ), g = n[3], p = n[4];
                break;
              case "z":
              case "Z":
                g = h, p = f;
                break;
            }
            m.forEach(function(q) {
              s.push(q.x), l.push(q.y);
            }), s.push(g), l.push(p);
          }
          var x = a(s) || 0, k = a(l) || 0, L = o(s) || 0, Y = o(l) || 0, K = L - x, re = Y - k;
          return {
            left: x,
            top: k,
            width: K,
            height: re
          };
        }
      }
    ), i.Path.fromObject = function(s, l) {
      if (typeof s.sourcePath == "string") {
        var n = s.sourcePath;
        i.loadSVGFromURL(n, function(h) {
          var f = h[0];
          f.setOptions(s), l && l(f);
        });
      } else
        i.Object._fromObject("Path", s, l, "path");
    }, i.Path.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat(["d"]), i.Path.fromElement = function(s, l, n) {
      var h = i.parseAttributes(s, i.Path.ATTRIBUTE_NAMES);
      h.fromSVG = !0, l(new i.Path(h.d, e(h, n)));
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.array.min, o = i.util.array.max;
    i.Group || (i.Group = i.util.createClass(
      i.Object,
      i.Collection,
      /** @lends fabric.Group.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "group",
        /**
         * Width of stroke
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * Indicates if click, mouseover, mouseout events & hoverCursor should also check for subtargets
         * @type Boolean
         * @default
         */
        subTargetCheck: !1,
        /**
         * Groups are container, do not render anything on theyr own, ence no cache properties
         * @type Array
         * @default
         */
        cacheProperties: [],
        /**
         * setOnGroup is a method used for TextBox that is no more used since 2.0.0 The behavior is still
         * available setting this boolean to true.
         * @type Boolean
         * @since 2.0.0
         * @default
         */
        useSetOnGroup: !1,
        /**
         * Constructor
         * @param {Object} objects Group objects
         * @param {Object} [options] Options object
         * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
         * @return {Object} thisArg
         */
        initialize: function(e, r, t) {
          r = r || {}, this._objects = [], t && this.callSuper("initialize", r), this._objects = e || [];
          for (var s = this._objects.length; s--; )
            this._objects[s].group = this;
          if (t)
            this._updateObjectsACoords();
          else {
            var l = r && r.centerPoint;
            r.originX !== void 0 && (this.originX = r.originX), r.originY !== void 0 && (this.originY = r.originY), l || this._calcBounds(), this._updateObjectsCoords(l), delete r.centerPoint, this.callSuper("initialize", r);
          }
          this.setCoords();
        },
        /**
         * @private
         */
        _updateObjectsACoords: function() {
          for (var e = !0, r = this._objects.length; r--; )
            this._objects[r].setCoords(e);
        },
        /**
         * @private
         * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
         */
        _updateObjectsCoords: function(r) {
          for (var r = r || this.getCenterPoint(), t = this._objects.length; t--; )
            this._updateObjectCoords(this._objects[t], r);
        },
        /**
         * @private
         * @param {Object} object
         * @param {fabric.Point} center, current center of group.
         */
        _updateObjectCoords: function(e, r) {
          var t = e.left, s = e.top, l = !0;
          e.set({
            left: t - r.x,
            top: s - r.y
          }), e.group = this, e.setCoords(l);
        },
        /**
         * Returns string represenation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.Group: (" + this.complexity() + ")>";
        },
        /**
         * Adds an object to a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        addWithUpdate: function(e) {
          var r = !!this.group;
          return this._restoreObjectsState(), i.util.resetObjectTransform(this), e && (r && i.util.removeTransformFromObject(e, this.group.calcTransformMatrix()), this._objects.push(e), e.group = this, e._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, r ? this.group.addWithUpdate() : this.setCoords(), this;
        },
        /**
         * Removes an object from a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        removeWithUpdate: function(e) {
          return this._restoreObjectsState(), i.util.resetObjectTransform(this), this.remove(e), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
        },
        /**
         * @private
         */
        _onObjectAdded: function(e) {
          this.dirty = !0, e.group = this, e._set("canvas", this.canvas);
        },
        /**
         * @private
         */
        _onObjectRemoved: function(e) {
          this.dirty = !0, delete e.group;
        },
        /**
         * @private
         */
        _set: function(e, r) {
          var t = this._objects.length;
          if (this.useSetOnGroup)
            for (; t--; )
              this._objects[t].setOnGroup(e, r);
          if (e === "canvas")
            for (; t--; )
              this._objects[t]._set(e, r);
          i.Object.prototype._set.call(this, e, r);
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(e) {
          var r = this.includeDefaultValues, t = this._objects.filter(function(l) {
            return !l.excludeFromExport;
          }).map(function(l) {
            var n = l.includeDefaultValues;
            l.includeDefaultValues = r;
            var h = l.toObject(e);
            return l.includeDefaultValues = n, h;
          }), s = i.Object.prototype.toObject.call(this, e);
          return s.objects = t, s;
        },
        /**
         * Returns object representation of an instance, in dataless mode.
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(e) {
          var r, t = this.sourcePath;
          if (t)
            r = t;
          else {
            var s = this.includeDefaultValues;
            r = this._objects.map(function(n) {
              var h = n.includeDefaultValues;
              n.includeDefaultValues = s;
              var f = n.toDatalessObject(e);
              return n.includeDefaultValues = h, f;
            });
          }
          var l = i.Object.prototype.toDatalessObject.call(this, e);
          return l.objects = r, l;
        },
        /**
         * Renders instance on a given context
         * @param {CanvasRenderingContext2D} ctx context to render instance on
         */
        render: function(e) {
          this._transformDone = !0, this.callSuper("render", e), this._transformDone = !1;
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group is already cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          var e = i.Object.prototype.shouldCache.call(this);
          if (e) {
            for (var r = 0, t = this._objects.length; r < t; r++)
              if (this._objects[r].willDrawShadow())
                return this.ownCaching = !1, !1;
          }
          return e;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * @return {Boolean}
         */
        willDrawShadow: function() {
          if (i.Object.prototype.willDrawShadow.call(this))
            return !0;
          for (var e = 0, r = this._objects.length; e < r; e++)
            if (this._objects[e].willDrawShadow())
              return !0;
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return this.ownCaching || this.group && this.group.isOnACache();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(e) {
          for (var r = 0, t = this._objects.length; r < t; r++)
            this._objects[r].render(e);
          this._drawClipPath(e, this.clipPath);
        },
        /**
         * Check if cache is dirty
         */
        isCacheDirty: function(e) {
          if (this.callSuper("isCacheDirty", e))
            return !0;
          if (!this.statefullCache)
            return !1;
          for (var r = 0, t = this._objects.length; r < t; r++)
            if (this._objects[r].isCacheDirty(!0)) {
              if (this._cacheCanvas) {
                var s = this.cacheWidth / this.zoomX, l = this.cacheHeight / this.zoomY;
                this._cacheContext.clearRect(-s / 2, -l / 2, s, l);
              }
              return !0;
            }
          return !1;
        },
        /**
         * Restores original state of each of group objects (original state is that which was before group was created).
         * if the nested boolean is true, the original state will be restored just for the
         * first group and not for all the group chain
         * @private
         * @param {Boolean} nested tell the function to restore object state up to the parent group and not more
         * @return {fabric.Group} thisArg
         * @chainable
         */
        _restoreObjectsState: function() {
          var e = this.calcOwnMatrix();
          return this._objects.forEach(function(r) {
            i.util.addTransformToObject(r, e), delete r.group, r.setCoords();
          }), this;
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        destroy: function() {
          return this._objects.forEach(function(e) {
            e.set("dirty", !0);
          }), this._restoreObjectsState();
        },
        dispose: function() {
          this.callSuper("dispose"), this.forEachObject(function(e) {
            e.dispose && e.dispose();
          }), this._objects = [];
        },
        /**
         * make a group an active selection, remove the group from canvas
         * the group has to be on canvas for this to work.
         * @return {fabric.ActiveSelection} thisArg
         * @chainable
         */
        toActiveSelection: function() {
          if (this.canvas) {
            var e = this._objects, r = this.canvas;
            this._objects = [];
            var t = this.toObject();
            delete t.objects;
            var s = new i.ActiveSelection([]);
            return s.set(t), s.type = "activeSelection", r.remove(this), e.forEach(function(l) {
              l.group = s, l.dirty = !0, r.add(l);
            }), s.canvas = r, s._objects = e, r._activeObject = s, s.setCoords(), s;
          }
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        ungroupOnCanvas: function() {
          return this._restoreObjectsState();
        },
        /**
         * Sets coordinates of all objects inside group
         * @return {fabric.Group} thisArg
         * @chainable
         */
        setObjectsCoords: function() {
          var e = !0;
          return this.forEachObject(function(r) {
            r.setCoords(e);
          }), this;
        },
        /**
         * @private
         */
        _calcBounds: function(e) {
          for (var r = [], t = [], s, l, n, h = ["tr", "br", "bl", "tl"], f = 0, g = this._objects.length, p, m = h.length; f < g; ++f) {
            for (s = this._objects[f], n = s.calcACoords(), p = 0; p < m; p++)
              l = h[p], r.push(n[l].x), t.push(n[l].y);
            s.aCoords = n;
          }
          this._getBounds(r, t, e);
        },
        /**
         * @private
         */
        _getBounds: function(e, r, t) {
          var s = new i.Point(a(e), a(r)), l = new i.Point(o(e), o(r)), n = s.y || 0, h = s.x || 0, f = l.x - s.x || 0, g = l.y - s.y || 0;
          this.width = f, this.height = g, t || this.setPositionByOrigin({ x: h, y: n }, "left", "top");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function(e) {
          for (var r = ["<g ", "COMMON_PARTS", ` >
`], t = 0, s = this._objects.length; t < s; t++)
            r.push("		", this._objects[t].toSVG(e));
          return r.push(`</g>
`), r;
        },
        /**
         * Returns styles-string for svg-export, specific version for group
         * @return {String}
         */
        getSvgStyles: function() {
          var e = typeof this.opacity < "u" && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", r = this.visible ? "" : " visibility: hidden;";
          return [
            e,
            this.getSvgFilter(),
            r
          ].join("");
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(e) {
          for (var r = [], t = 0, s = this._objects.length; t < s; t++)
            r.push("	", this._objects[t].toClipPathSVG(e));
          return this._createBaseClipPathSVGMarkup(r, { reviver: e });
        }
        /* _TO_SVG_END_ */
      }
    ), i.Group.fromObject = function(e, r) {
      var t = e.objects, s = i.util.object.clone(e, !0);
      if (delete s.objects, typeof t == "string") {
        i.loadSVGFromURL(t, function(l) {
          var n = i.util.groupSVGElements(l, e, t);
          n.set(s), r && r(n);
        });
        return;
      }
      i.util.enlivenObjects(t, function(l) {
        var n = i.util.object.clone(e, !0);
        delete n.objects, i.util.enlivenObjectEnlivables(e, n, function() {
          r && r(new i.Group(l, n, !0));
        });
      });
    });
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {});
    i.ActiveSelection || (i.ActiveSelection = i.util.createClass(
      i.Group,
      /** @lends fabric.ActiveSelection.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "activeSelection",
        /**
         * Constructor
         * @param {Object} objects ActiveSelection objects
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(a, o) {
          o = o || {}, this._objects = a || [];
          for (var e = this._objects.length; e--; )
            this._objects[e].group = this;
          o.originX && (this.originX = o.originX), o.originY && (this.originY = o.originY), this._calcBounds(), this._updateObjectsCoords(), i.Object.prototype.initialize.call(this, o), this.setCoords();
        },
        /**
         * Change te activeSelection to a normal group,
         * High level function that automatically adds it to canvas as
         * active object. no events fired.
         * @since 2.0.0
         * @return {fabric.Group}
         */
        toGroup: function() {
          var a = this._objects.concat();
          this._objects = [];
          var o = i.Object.prototype.toObject.call(this), e = new i.Group([]);
          if (delete o.type, e.set(o), a.forEach(function(t) {
            t.canvas.remove(t), t.group = e;
          }), e._objects = a, !this.canvas)
            return e;
          var r = this.canvas;
          return r.add(e), r._activeObject = e, e.setCoords(), e;
        },
        /**
         * If returns true, deselection is cancelled.
         * @since 2.0.0
         * @return {Boolean} [cancel]
         */
        onDeselect: function() {
          return this.destroy(), !1;
        },
        /**
         * Returns string representation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return !1;
        },
        /**
         * Renders controls and borders for the object
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         * @param {Object} [childrenOverride] properties to override the children overrides
         */
        _renderControls: function(a, o, e) {
          a.save(), a.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", a, o), e = e || {}, typeof e.hasControls > "u" && (e.hasControls = !1), e.forActiveSelection = !0;
          for (var r = 0, t = this._objects.length; r < t; r++)
            this._objects[r]._renderControls(a, e);
          a.restore();
        }
      }
    ), i.ActiveSelection.fromObject = function(a, o) {
      i.util.enlivenObjects(a.objects, function(e) {
        delete a.objects, o && o(new i.ActiveSelection(e, a, !0));
      });
    });
  }(d), function(u) {
    var i = c.util.object.extend;
    if (u.fabric || (u.fabric = {}), u.fabric.Image) {
      c.warn("fabric.Image is already defined.");
      return;
    }
    c.Image = c.util.createClass(
      c.Object,
      /** @lends fabric.Image.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "image",
        /**
         * Width of a stroke.
         * For image quality a stroke multiple of 2 gives better results.
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * When calling {@link fabric.Image.getSrc}, return value from element src with `element.getAttribute('src')`.
         * This allows for relative urls as image src.
         * @since 2.7.0
         * @type Boolean
         * @default
         */
        srcFromAttribute: !1,
        /**
         * private
         * contains last value of scaleX to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleX: 1,
        /**
         * private
         * contains last value of scaleY to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleY: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingX: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingY: 1,
        /**
         * minimum scale factor under which any resizeFilter is triggered to resize the image
         * 0 will disable the automatic resize. 1 will trigger automatically always.
         * number bigger than 1 are not implemented yet.
         * @type Number
         */
        minimumScaleTrigger: 0.5,
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: c.Object.prototype.stateProperties.concat("cropX", "cropY"),
        /**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
        cacheProperties: c.Object.prototype.cacheProperties.concat("cropX", "cropY"),
        /**
         * key used to retrieve the texture representing this image
         * @since 2.0.0
         * @type String
         * @default
         */
        cacheKey: "",
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropX: 0,
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropY: 0,
        /**
         * Indicates whether this canvas will use image smoothing when painting this image.
         * Also influence if the cacheCanvas for this image uses imageSmoothing
         * @since 4.0.0-beta.11
         * @type Boolean
         * @default
         */
        imageSmoothing: !0,
        /**
         * Constructor
         * Image can be initialized with any canvas drawable or a string.
         * The string should be a url and will be loaded as an image.
         * Canvas and Image element work out of the box, while videos require extra code to work.
         * Please check video element events for seeking.
         * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} element Image element
         * @param {Object} [options] Options object
         * @param {function} [callback] callback function to call after eventual filters applied.
         * @return {fabric.Image} thisArg
         */
        initialize: function(a, o) {
          o || (o = {}), this.filters = [], this.cacheKey = "texture" + c.Object.__uid++, this.callSuper("initialize", o), this._initElement(a, o);
        },
        /**
         * Returns image element which this instance if based on
         * @return {HTMLImageElement} Image element
         */
        getElement: function() {
          return this._element || {};
        },
        /**
         * Sets image element for this instance to a specified one.
         * If filters defined they are applied to new image.
         * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
         * @param {HTMLImageElement} element
         * @param {Object} [options] Options object
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setElement: function(a, o) {
          return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = a, this._originalElement = a, this._initConfig(o), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
        },
        /**
         * Delete a single texture if in webgl mode
         */
        removeTexture: function(a) {
          var o = c.filterBackend;
          o && o.evictCachesForKey && o.evictCachesForKey(a);
        },
        /**
         * Delete textures, reference to elements and eventually JSDOM cleanup
         */
        dispose: function() {
          this.callSuper("dispose"), this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(function(a) {
            c.util.cleanUpJsdomNode(this[a]), this[a] = void 0;
          }.bind(this));
        },
        /**
         * Get the crossOrigin value (of the corresponding image element)
         */
        getCrossOrigin: function() {
          return this._originalElement && (this._originalElement.crossOrigin || null);
        },
        /**
         * Returns original size of an image
         * @return {Object} Object with "width" and "height" properties
         */
        getOriginalSize: function() {
          var a = this.getElement();
          return {
            width: a.naturalWidth || a.width,
            height: a.naturalHeight || a.height
          };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _stroke: function(a) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            var o = this.width / 2, e = this.height / 2;
            a.beginPath(), a.moveTo(-o, -e), a.lineTo(o, -e), a.lineTo(o, e), a.lineTo(-o, e), a.lineTo(-o, -e), a.closePath();
          }
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(a) {
          var o = [];
          this.filters.forEach(function(r) {
            r && o.push(r.toObject());
          });
          var e = i(
            this.callSuper(
              "toObject",
              ["cropX", "cropY"].concat(a)
            ),
            {
              src: this.getSrc(),
              crossOrigin: this.getCrossOrigin(),
              filters: o
            }
          );
          return this.resizeFilter && (e.resizeFilter = this.resizeFilter.toObject()), e;
        },
        /**
         * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.
         * @return {Boolean}
         */
        hasCrop: function() {
          return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var a = [], o = [], e, r = this._element, t = -this.width / 2, s = -this.height / 2, l = "", n = "";
          if (!r)
            return [];
          if (this.hasCrop()) {
            var h = c.Object.__uid++;
            a.push(
              '<clipPath id="imageCrop_' + h + `">
`,
              '	<rect x="' + t + '" y="' + s + '" width="' + this.width + '" height="' + this.height + `" />
`,
              `</clipPath>
`
            ), l = ' clip-path="url(#imageCrop_' + h + ')" ';
          }
          if (this.imageSmoothing || (n = '" image-rendering="optimizeSpeed'), o.push(
            "	<image ",
            "COMMON_PARTS",
            'xlink:href="',
            this.getSvgSrc(!0),
            '" x="',
            t - this.cropX,
            '" y="',
            s - this.cropY,
            // we're essentially moving origin of transformation from top/left corner to the center of the shape
            // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
            // so that object's center aligns with container's left/top
            '" width="',
            r.width || r.naturalWidth,
            '" height="',
            r.height || r.height,
            n,
            '"',
            l,
            `></image>
`
          ), this.stroke || this.strokeDashArray) {
            var f = this.fill;
            this.fill = null, e = [
              "	<rect ",
              'x="',
              t,
              '" y="',
              s,
              '" width="',
              this.width,
              '" height="',
              this.height,
              '" style="',
              this.getSvgStyles(),
              `"/>
`
            ], this.fill = f;
          }
          return this.paintFirst !== "fill" ? a = a.concat(e, o) : a = a.concat(o, e), a;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns source of an image
         * @param {Boolean} filtered indicates if the src is needed for svg
         * @return {String} Source of an image
         */
        getSrc: function(a) {
          var o = a ? this._element : this._originalElement;
          return o ? o.toDataURL ? o.toDataURL() : this.srcFromAttribute ? o.getAttribute("src") : o.src : this.src || "";
        },
        /**
         * Sets source of an image
         * @param {String} src Source string (URL)
         * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
         * @param {Object} [options] Options object
         * @param {String} [options.crossOrigin] crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setSrc: function(a, o, e) {
          return c.util.loadImage(a, function(r, t) {
            this.setElement(r, e), this._setWidthHeight(), o && o(this, t);
          }, this, e && e.crossOrigin), this;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of an instance
         */
        toString: function() {
          return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
        },
        applyResizeFilters: function() {
          var a = this.resizeFilter, o = this.minimumScaleTrigger, e = this.getTotalObjectScaling(), r = e.scaleX, t = e.scaleY, s = this._filteredEl || this._originalElement;
          if (this.group && this.set("dirty", !0), !a || r > o && t > o) {
            this._element = s, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = r, this._lastScaleY = t;
            return;
          }
          c.filterBackend || (c.filterBackend = c.initFilterBackend());
          var l = c.util.createCanvasElement(), n = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, h = s.width, f = s.height;
          l.width = h, l.height = f, this._element = l, this._lastScaleX = a.scaleX = r, this._lastScaleY = a.scaleY = t, c.filterBackend.applyFilters(
            [a],
            s,
            h,
            f,
            this._element,
            n
          ), this._filterScalingX = l.width / this._originalElement.width, this._filterScalingY = l.height / this._originalElement.height;
        },
        /**
         * Applies filters assigned to this image (from "filters" array) or from filter param
         * @method applyFilters
         * @param {Array} filters to be applied
         * @param {Boolean} forResizing specify if the filter operation is a resize operation
         * @return {thisArg} return the fabric.Image object
         * @chainable
         */
        applyFilters: function(a) {
          if (a = a || this.filters || [], a = a.filter(function(s) {
            return s && !s.isNeutralState();
          }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), a.length === 0)
            return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
          var o = this._originalElement, e = o.naturalWidth || o.width, r = o.naturalHeight || o.height;
          if (this._element === this._originalElement) {
            var t = c.util.createCanvasElement();
            t.width = e, t.height = r, this._element = t, this._filteredEl = t;
          } else
            this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, e, r), this._lastScaleX = 1, this._lastScaleY = 1;
          return c.filterBackend || (c.filterBackend = c.initFilterBackend()), c.filterBackend.applyFilters(
            a,
            this._originalElement,
            e,
            r,
            this._element,
            this.cacheKey
          ), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(a) {
          c.util.setImageSmoothing(a, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(a), this._renderPaintInOrder(a);
        },
        /**
         * Paint the cached copy of the object on the target context.
         * it will set the imageSmoothing for the draw operation
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawCacheOnCanvas: function(a) {
          c.util.setImageSmoothing(a, this.imageSmoothing), c.Object.prototype.drawCacheOnCanvas.call(this, a);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * This is the special image version where we would like to avoid caching where possible.
         * Essentially images do not benefit from caching. They may require caching, and in that
         * case we do it. Also caching an image usually ends in a loss of details.
         * A full performance audit should be done.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.needsItsOwnCache();
        },
        _renderFill: function(a) {
          var o = this._element;
          if (o) {
            var e = this._filterScalingX, r = this._filterScalingY, t = this.width, s = this.height, l = Math.min, n = Math.max, h = n(this.cropX, 0), f = n(this.cropY, 0), g = o.naturalWidth || o.width, p = o.naturalHeight || o.height, m = h * e, C = f * r, w = l(t * e, g - m), x = l(s * r, p - C), k = -t / 2, L = -s / 2, Y = l(t, g / e - h), K = l(s, p / r - f);
            o && a.drawImage(o, m, C, w, x, k, L, Y, K);
          }
        },
        /**
         * needed to check if image needs resize
         * @private
         */
        _needsResize: function() {
          var a = this.getTotalObjectScaling();
          return a.scaleX !== this._lastScaleX || a.scaleY !== this._lastScaleY;
        },
        /**
         * @private
         */
        _resetWidthHeight: function() {
          this.set(this.getOriginalSize());
        },
        /**
         * The Image class's initialization method. This method is automatically
         * called by the constructor.
         * @private
         * @param {HTMLImageElement|String} element The element representing the image
         * @param {Object} [options] Options object
         */
        _initElement: function(a, o) {
          this.setElement(c.util.getById(a), o), c.util.addClass(this.getElement(), c.Image.CSS_CANVAS);
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initConfig: function(a) {
          a || (a = {}), this.setOptions(a), this._setWidthHeight(a);
        },
        /**
         * @private
         * @param {Array} filters to be initialized
         * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
         */
        _initFilters: function(a, o) {
          a && a.length ? c.util.enlivenObjects(a, function(e) {
            o && o(e);
          }, "fabric.Image.filters") : o && o();
        },
        /**
         * @private
         * Set the width and the height of the image object, using the element or the
         * options.
         * @param {Object} [options] Object with width/height properties
         */
        _setWidthHeight: function(a) {
          a || (a = {});
          var o = this.getElement();
          this.width = a.width || o.naturalWidth || o.width || 0, this.height = a.height || o.naturalHeight || o.height || 0;
        },
        /**
         * Calculate offset for center and scale factor for the image in order to respect
         * the preserveAspectRatio attribute
         * @private
         * @return {Object}
         */
        parsePreserveAspectRatioAttribute: function() {
          var a = c.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), o = this._element.width, e = this._element.height, r = 1, t = 1, s = 0, l = 0, n = 0, h = 0, f, g = this.width, p = this.height, m = { width: g, height: p };
          return a && (a.alignX !== "none" || a.alignY !== "none") ? (a.meetOrSlice === "meet" && (r = t = c.util.findScaleToFit(this._element, m), f = (g - o * r) / 2, a.alignX === "Min" && (s = -f), a.alignX === "Max" && (s = f), f = (p - e * t) / 2, a.alignY === "Min" && (l = -f), a.alignY === "Max" && (l = f)), a.meetOrSlice === "slice" && (r = t = c.util.findScaleToCover(this._element, m), f = o - g / r, a.alignX === "Mid" && (n = f / 2), a.alignX === "Max" && (n = f), f = e - p / t, a.alignY === "Mid" && (h = f / 2), a.alignY === "Max" && (h = f), o = g / r, e = p / t)) : (r = g / o, t = p / e), {
            width: o,
            height: e,
            scaleX: r,
            scaleY: t,
            offsetLeft: s,
            offsetTop: l,
            cropX: n,
            cropY: h
          };
        }
      }
    ), c.Image.CSS_CANVAS = "canvas-img", c.Image.prototype.getSvgSrc = c.Image.prototype.getSrc, c.Image.fromObject = function(a, o) {
      var e = c.util.object.clone(a);
      c.util.loadImage(e.src, function(r, t) {
        if (t) {
          o && o(null, !0);
          return;
        }
        c.Image.prototype._initFilters.call(e, e.filters, function(s) {
          e.filters = s || [], c.Image.prototype._initFilters.call(e, [e.resizeFilter], function(l) {
            e.resizeFilter = l[0], c.util.enlivenObjectEnlivables(e, e, function() {
              var n = new c.Image(r, e);
              o(n, !1);
            });
          });
        });
      }, null, e.crossOrigin);
    }, c.Image.fromURL = function(a, o, e) {
      c.util.loadImage(a, function(r, t) {
        o && o(new c.Image(r, e), t);
      }, null, e && e.crossOrigin);
    }, c.Image.ATTRIBUTE_NAMES = c.SHARED_ATTRIBUTES.concat(
      "x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")
    ), c.Image.fromElement = function(a, o, e) {
      var r = c.parseAttributes(a, c.Image.ATTRIBUTE_NAMES);
      c.Image.fromURL(
        r["xlink:href"],
        o,
        i(e ? c.util.object.clone(e) : {}, r)
      );
    };
  }(d), c.util.object.extend(
    c.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * @private
       * @return {Number} angle value
       */
      _getAngleValueForStraighten: function() {
        var u = this.angle % 360;
        return u > 0 ? Math.round((u - 1) / 90) * 90 : Math.round(u / 90) * 90;
      },
      /**
       * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
       * @return {fabric.Object} thisArg
       * @chainable
       */
      straighten: function() {
        return this.rotate(this._getAngleValueForStraighten());
      },
      /**
       * Same as {@link fabric.Object.prototype.straighten} but with animation
       * @param {Object} callbacks Object with callback functions
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Object} thisArg
       */
      fxStraighten: function(u) {
        u = u || {};
        var i = function() {
        }, a = u.onComplete || i, o = u.onChange || i, e = this;
        return c.util.animate({
          target: this,
          startValue: this.get("angle"),
          endValue: this._getAngleValueForStraighten(),
          duration: this.FX_DURATION,
          onChange: function(r) {
            e.rotate(r), o();
          },
          onComplete: function() {
            e.setCoords(), a();
          }
        });
      }
    }
  ), c.util.object.extend(
    c.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Straightens object, then rerenders canvas
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      straightenObject: function(u) {
        return u.straighten(), this.requestRenderAll(), this;
      },
      /**
       * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       */
      fxStraightenObject: function(u) {
        return u.fxStraighten({
          onChange: this.requestRenderAllBound
        });
      }
    }
  ), function() {
    function u(a, o) {
      var e = "precision " + o + ` float;
void main(){}`, r = a.createShader(a.FRAGMENT_SHADER);
      return a.shaderSource(r, e), a.compileShader(r), !!a.getShaderParameter(r, a.COMPILE_STATUS);
    }
    c.isWebglSupported = function(a) {
      if (c.isLikelyNode)
        return !1;
      a = a || c.WebglFilterBackend.prototype.tileSize;
      var o = document.createElement("canvas"), e = o.getContext("webgl") || o.getContext("experimental-webgl"), r = !1;
      if (e) {
        c.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), r = c.maxTextureSize >= a;
        for (var t = ["highp", "mediump", "lowp"], s = 0; s < 3; s++)
          if (u(e, t[s])) {
            c.webGlPrecision = t[s];
            break;
          }
      }
      return this.isSupported = r, r;
    }, c.WebglFilterBackend = i;
    function i(a) {
      a && a.tileSize && (this.tileSize = a.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
    }
    i.prototype = /** @lends fabric.WebglFilterBackend.prototype */
    {
      tileSize: 2048,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Setup a WebGL context suitable for filtering, and bind any needed event handlers.
       */
      setupGLContext: function(a, o) {
        this.dispose(), this.createWebGLCanvas(a, o), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(a, o);
      },
      /**
       * Pick a method to copy data from GL context to 2d canvas.  In some browsers using
       * putImageData is faster than drawImage for that specific operation.
       */
      chooseFastestCopyGLTo2DMethod: function(a, o) {
        var e = typeof window.performance < "u", r;
        try {
          new ImageData(1, 1), r = !0;
        } catch {
          r = !1;
        }
        var t = typeof ArrayBuffer < "u", s = typeof Uint8ClampedArray < "u";
        if (e && r && t && s) {
          var l = c.util.createCanvasElement(), n = new ArrayBuffer(a * o * 4);
          if (c.forceGLPutImageData) {
            this.imageBuffer = n, this.copyGLTo2D = N;
            return;
          }
          var h = {
            imageBuffer: n,
            destinationWidth: a,
            destinationHeight: o,
            targetCanvas: l
          }, f, g, p;
          l.width = a, l.height = o, f = window.performance.now(), X.call(h, this.gl, h), g = window.performance.now() - f, f = window.performance.now(), N.call(h, this.gl, h), p = window.performance.now() - f, g > p ? (this.imageBuffer = n, this.copyGLTo2D = N) : this.copyGLTo2D = X;
        }
      },
      /**
       * Create a canvas element and associated WebGL context and attaches them as
       * class properties to the GLFilterBackend class.
       */
      createWebGLCanvas: function(a, o) {
        var e = c.util.createCanvasElement();
        e.width = a, e.height = o;
        var r = {
          alpha: !0,
          premultipliedAlpha: !1,
          depth: !1,
          stencil: !1,
          antialias: !1
        }, t = e.getContext("webgl", r);
        t || (t = e.getContext("experimental-webgl", r)), t && (t.clearColor(0, 0, 0, 0), this.canvas = e, this.gl = t);
      },
      /**
       * Attempts to apply the requested filters to the source provided, drawing the filtered output
       * to the provided target canvas.
       *
       * @param {Array} filters The filters to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} source The source to be filtered.
       * @param {Number} width The width of the source input.
       * @param {Number} height The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       * @param {String|undefined} cacheKey A key used to cache resources related to the source. If
       * omitted, caching will be skipped.
       */
      applyFilters: function(a, o, e, r, t, s) {
        var l = this.gl, n;
        s && (n = this.getCachedTexture(s, o));
        var h = {
          originalWidth: o.width || o.originalWidth,
          originalHeight: o.height || o.originalHeight,
          sourceWidth: e,
          sourceHeight: r,
          destinationWidth: e,
          destinationHeight: r,
          context: l,
          sourceTexture: this.createTexture(l, e, r, !n && o),
          targetTexture: this.createTexture(l, e, r),
          originalTexture: n || this.createTexture(l, e, r, !n && o),
          passes: a.length,
          webgl: !0,
          aPosition: this.aPosition,
          programCache: this.programCache,
          pass: 0,
          filterBackend: this,
          targetCanvas: t
        }, f = l.createFramebuffer();
        return l.bindFramebuffer(l.FRAMEBUFFER, f), a.forEach(function(g) {
          g && g.applyTo(h);
        }), R(h), this.copyGLTo2D(l, h), l.bindTexture(l.TEXTURE_2D, null), l.deleteTexture(h.sourceTexture), l.deleteTexture(h.targetTexture), l.deleteFramebuffer(f), t.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), h;
      },
      /**
       * Detach event listeners, remove references, and clean up caches.
       */
      dispose: function() {
        this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
      },
      /**
       * Wipe out WebGL-related caches.
       */
      clearWebGLCaches: function() {
        this.programCache = {}, this.textureCache = {};
      },
      /**
       * Create a WebGL texture object.
       *
       * Accepts specific dimensions to initialize the texture to or a source image.
       *
       * @param {WebGLRenderingContext} gl The GL context to use for creating the texture.
       * @param {Number} width The width to initialize the texture at.
       * @param {Number} height The height to initialize the texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source for the texture data.
       * @returns {WebGLTexture}
       */
      createTexture: function(a, o, e, r) {
        var t = a.createTexture();
        return a.bindTexture(a.TEXTURE_2D, t), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), r ? a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, r) : a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, o, e, 0, a.RGBA, a.UNSIGNED_BYTE, null), t;
      },
      /**
       * Can be optionally used to get a texture from the cache array
       *
       * If an existing texture is not found, a new texture is created and cached.
       *
       * @param {String} uniqueId A cache key to use to find an existing texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source to use to create the
       * texture cache entry if one does not already exist.
       */
      getCachedTexture: function(a, o) {
        if (this.textureCache[a])
          return this.textureCache[a];
        var e = this.createTexture(
          this.gl,
          o.width,
          o.height,
          o
        );
        return this.textureCache[a] = e, e;
      },
      /**
       * Clear out cached resources related to a source image that has been
       * filtered previously.
       *
       * @param {String} cacheKey The cache key provided when the source image was filtered.
       */
      evictCachesForKey: function(a) {
        this.textureCache[a] && (this.gl.deleteTexture(this.textureCache[a]), delete this.textureCache[a]);
      },
      copyGLTo2D: X,
      /**
       * Attempt to extract GPU information strings from a WebGL context.
       *
       * Useful information when debugging or blacklisting specific GPUs.
       *
       * @returns {Object} A GPU info object with renderer and vendor strings.
       */
      captureGPUInfo: function() {
        if (this.gpuInfo)
          return this.gpuInfo;
        var a = this.gl, o = { renderer: "", vendor: "" };
        if (!a)
          return o;
        var e = a.getExtension("WEBGL_debug_renderer_info");
        if (e) {
          var r = a.getParameter(e.UNMASKED_RENDERER_WEBGL), t = a.getParameter(e.UNMASKED_VENDOR_WEBGL);
          r && (o.renderer = r.toLowerCase()), t && (o.vendor = t.toLowerCase());
        }
        return this.gpuInfo = o, o;
      }
    };
  }();
  function R(u) {
    var i = u.targetCanvas, a = i.width, o = i.height, e = u.destinationWidth, r = u.destinationHeight;
    (a !== e || o !== r) && (i.width = e, i.height = r);
  }
  function X(u, i) {
    var a = u.canvas, o = i.targetCanvas, e = o.getContext("2d");
    e.translate(0, o.height), e.scale(1, -1);
    var r = a.height - o.height;
    e.drawImage(
      a,
      0,
      r,
      o.width,
      o.height,
      0,
      0,
      o.width,
      o.height
    );
  }
  function N(u, i) {
    var a = i.targetCanvas, o = a.getContext("2d"), e = i.destinationWidth, r = i.destinationHeight, t = e * r * 4, s = new Uint8Array(this.imageBuffer, 0, t), l = new Uint8ClampedArray(this.imageBuffer, 0, t);
    u.readPixels(0, 0, e, r, u.RGBA, u.UNSIGNED_BYTE, s);
    var n = new ImageData(l, e, r);
    o.putImageData(n, 0, 0);
  }
  (function() {
    var u = function() {
    };
    c.Canvas2dFilterBackend = i;
    function i() {
    }
    i.prototype = /** @lends fabric.Canvas2dFilterBackend.prototype */
    {
      evictCachesForKey: u,
      dispose: u,
      clearWebGLCaches: u,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Apply a set of filters against a source image and draw the filtered output
       * to the provided destination canvas.
       *
       * @param {EnhancedFilter} filters The filter to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} sourceElement The source to be filtered.
       * @param {Number} sourceWidth The width of the source input.
       * @param {Number} sourceHeight The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       */
      applyFilters: function(a, o, e, r, t) {
        var s = t.getContext("2d");
        s.drawImage(o, 0, 0, e, r);
        var l = s.getImageData(0, 0, e, r), n = s.getImageData(0, 0, e, r), h = {
          sourceWidth: e,
          sourceHeight: r,
          imageData: l,
          originalEl: o,
          originalImageData: n,
          canvasEl: t,
          ctx: s,
          filterBackend: this
        };
        return a.forEach(function(f) {
          f.applyTo(h);
        }), (h.imageData.width !== e || h.imageData.height !== r) && (t.width = h.imageData.width, t.height = h.imageData.height), s.putImageData(h.imageData, 0, 0), h;
      }
    };
  })(), c.Image = c.Image || {}, c.Image.filters = c.Image.filters || {}, c.Image.filters.BaseFilter = c.util.createClass(
    /** @lends fabric.Image.filters.BaseFilter.prototype */
    {
      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: "BaseFilter",
      /**
       * Array of attributes to send with buffers. do not modify
       * @private
       */
      vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
      fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`,
      /**
       * Constructor
       * @param {Object} [options] Options object
       */
      initialize: function(u) {
        u && this.setOptions(u);
      },
      /**
       * Sets filter's properties from options
       * @param {Object} [options] Options object
       */
      setOptions: function(u) {
        for (var i in u)
          this[i] = u[i];
      },
      /**
       * Compile this filter's shader program.
       *
       * @param {WebGLRenderingContext} gl The GL canvas context to use for shader compilation.
       * @param {String} fragmentSource fragmentShader source for compilation
       * @param {String} vertexSource vertexShader source for compilation
       */
      createProgram: function(u, i, a) {
        i = i || this.fragmentSource, a = a || this.vertexSource, c.webGlPrecision !== "highp" && (i = i.replace(
          /precision highp float/g,
          "precision " + c.webGlPrecision + " float"
        ));
        var o = u.createShader(u.VERTEX_SHADER);
        if (u.shaderSource(o, a), u.compileShader(o), !u.getShaderParameter(o, u.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Vertex shader compile error for " + this.type + ": " + u.getShaderInfoLog(o)
          );
        var e = u.createShader(u.FRAGMENT_SHADER);
        if (u.shaderSource(e, i), u.compileShader(e), !u.getShaderParameter(e, u.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Fragment shader compile error for " + this.type + ": " + u.getShaderInfoLog(e)
          );
        var r = u.createProgram();
        if (u.attachShader(r, o), u.attachShader(r, e), u.linkProgram(r), !u.getProgramParameter(r, u.LINK_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            'Shader link error for "${this.type}" ' + u.getProgramInfoLog(r)
          );
        var t = this.getAttributeLocations(u, r), s = this.getUniformLocations(u, r) || {};
        return s.uStepW = u.getUniformLocation(r, "uStepW"), s.uStepH = u.getUniformLocation(r, "uStepH"), {
          program: r,
          attributeLocations: t,
          uniformLocations: s
        };
      },
      /**
       * Return a map of attribute names to WebGLAttributeLocation objects.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take attribute locations.
       * @returns {Object} A map of attribute names to attribute locations.
       */
      getAttributeLocations: function(u, i) {
        return {
          aPosition: u.getAttribLocation(i, "aPosition")
        };
      },
      /**
       * Return a map of uniform names to WebGLUniformLocation objects.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take uniform locations.
       * @returns {Object} A map of uniform names to uniform locations.
       */
      getUniformLocations: function() {
        return {};
      },
      /**
       * Send attribute data from this filter to its shader program on the GPU.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} attributeLocations A map of shader attribute names to their locations.
       */
      sendAttributeData: function(u, i, a) {
        var o = i.aPosition, e = u.createBuffer();
        u.bindBuffer(u.ARRAY_BUFFER, e), u.enableVertexAttribArray(o), u.vertexAttribPointer(o, 2, u.FLOAT, !1, 0, 0), u.bufferData(u.ARRAY_BUFFER, a, u.STATIC_DRAW);
      },
      _setupFrameBuffer: function(u) {
        var i = u.context, a, o;
        u.passes > 1 ? (a = u.destinationWidth, o = u.destinationHeight, (u.sourceWidth !== a || u.sourceHeight !== o) && (i.deleteTexture(u.targetTexture), u.targetTexture = u.filterBackend.createTexture(i, a, o)), i.framebufferTexture2D(
          i.FRAMEBUFFER,
          i.COLOR_ATTACHMENT0,
          i.TEXTURE_2D,
          u.targetTexture,
          0
        )) : (i.bindFramebuffer(i.FRAMEBUFFER, null), i.finish());
      },
      _swapTextures: function(u) {
        u.passes--, u.pass++;
        var i = u.targetTexture;
        u.targetTexture = u.sourceTexture, u.sourceTexture = i;
      },
      /**
       * Generic isNeutral implementation for one parameter based filters.
       * Used only in image applyFilters to discard filters that will not have an effect
       * on the image
       * Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )
       * @param {Object} options
       **/
      isNeutralState: function() {
        var u = this.mainParameter, i = c.Image.filters[this.type].prototype;
        if (u)
          if (Array.isArray(i[u])) {
            for (var a = i[u].length; a--; )
              if (this[u][a] !== i[u][a])
                return !1;
            return !0;
          } else
            return i[u] === this[u];
        else
          return !1;
      },
      /**
       * Apply this filter to the input image data provided.
       *
       * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyTo: function(u) {
        u.webgl ? (this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u)) : this.applyTo2d(u);
      },
      /**
       * Retrieves the cached shader.
       * @param {Object} options
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      retrieveShader: function(u) {
        return u.programCache.hasOwnProperty(this.type) || (u.programCache[this.type] = this.createProgram(u.context)), u.programCache[this.type];
      },
      /**
       * Apply this filter using webgl.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.originalTexture The texture of the original input image.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyToWebGL: function(u) {
        var i = u.context, a = this.retrieveShader(u);
        u.pass === 0 && u.originalTexture ? i.bindTexture(i.TEXTURE_2D, u.originalTexture) : i.bindTexture(i.TEXTURE_2D, u.sourceTexture), i.useProgram(a.program), this.sendAttributeData(i, a.attributeLocations, u.aPosition), i.uniform1f(a.uniformLocations.uStepW, 1 / u.sourceWidth), i.uniform1f(a.uniformLocations.uStepH, 1 / u.sourceHeight), this.sendUniformData(i, a.uniformLocations), i.viewport(0, 0, u.destinationWidth, u.destinationHeight), i.drawArrays(i.TRIANGLE_STRIP, 0, 4);
      },
      bindAdditionalTexture: function(u, i, a) {
        u.activeTexture(a), u.bindTexture(u.TEXTURE_2D, i), u.activeTexture(u.TEXTURE0);
      },
      unbindAdditionalTexture: function(u, i) {
        u.activeTexture(i), u.bindTexture(u.TEXTURE_2D, null), u.activeTexture(u.TEXTURE0);
      },
      getMainParameter: function() {
        return this[this.mainParameter];
      },
      setMainParameter: function(u) {
        this[this.mainParameter] = u;
      },
      /**
       * Send uniform data from this filter to its shader program on the GPU.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} uniformLocations A map of shader uniform names to their locations.
       */
      sendUniformData: function() {
      },
      /**
       * If needed by a 2d filter, this functions can create an helper canvas to be used
       * remember that options.targetCanvas is available for use till end of chain.
       */
      createHelpLayer: function(u) {
        if (!u.helpLayer) {
          var i = document.createElement("canvas");
          i.width = u.sourceWidth, i.height = u.sourceHeight, u.helpLayer = i;
        }
      },
      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function() {
        var u = { type: this.type }, i = this.mainParameter;
        return i && (u[i] = this[i]), u;
      },
      /**
       * Returns a JSON representation of an instance
       * @return {Object} JSON
       */
      toJSON: function() {
        return this.toObject();
      }
    }
  ), c.Image.filters.BaseFilter.fromObject = function(u, i) {
    var a = new c.Image.filters[u.type](u);
    return i && i(a), a;
  }, function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.ColorMatrix = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.ColorMatrix.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "ColorMatrix",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`,
        /**
         * Colormatrix for pixels.
         * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
         * outside the -1, 1 range.
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Array} matrix array of 20 numbers.
         * @default
         */
        matrix: [
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        mainParameter: "matrix",
        /**
         * Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
         * to save some calculation
         * @type Boolean
         * @default true
         */
        colorsOnly: !0,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(e) {
          this.callSuper("initialize", e), this.matrix = this.matrix.slice(0);
        },
        /**
         * Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, s = t.length, l = this.matrix, n, h, f, g, p, m = this.colorsOnly;
          for (p = 0; p < s; p += 4)
            n = t[p], h = t[p + 1], f = t[p + 2], m ? (t[p] = n * l[0] + h * l[1] + f * l[2] + l[4] * 255, t[p + 1] = n * l[5] + h * l[6] + f * l[7] + l[9] * 255, t[p + 2] = n * l[10] + h * l[11] + f * l[12] + l[14] * 255) : (g = t[p + 3], t[p] = n * l[0] + h * l[1] + f * l[2] + g * l[3] + l[4] * 255, t[p + 1] = n * l[5] + h * l[6] + f * l[7] + g * l[8] + l[9] * 255, t[p + 2] = n * l[10] + h * l[11] + f * l[12] + g * l[13] + l[14] * 255, t[p + 3] = n * l[15] + h * l[16] + f * l[17] + g * l[18] + l[19] * 255);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uColorMatrix: e.getUniformLocation(r, "uColorMatrix"),
            uConstants: e.getUniformLocation(r, "uConstants")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = this.matrix, s = [
            t[0],
            t[1],
            t[2],
            t[3],
            t[5],
            t[6],
            t[7],
            t[8],
            t[10],
            t[11],
            t[12],
            t[13],
            t[15],
            t[16],
            t[17],
            t[18]
          ], l = [t[4], t[9], t[14], t[19]];
          e.uniformMatrix4fv(r.uColorMatrix, !1, s), e.uniform4fv(r.uConstants, l);
        }
      }
    ), i.Image.filters.ColorMatrix.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Brightness = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Brightness.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Brightness",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`,
        /**
         * Brightness value, from -1 to 1.
         * translated to -255 to 255 for 2d
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Number} brightness
         * @default
         */
        brightness: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "brightness",
        /**
        * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
        *
        * @param {Object} options
        * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
        */
        applyTo2d: function(e) {
          if (this.brightness !== 0) {
            var r = e.imageData, t = r.data, s, l = t.length, n = Math.round(this.brightness * 255);
            for (s = 0; s < l; s += 4)
              t[s] = t[s] + n, t[s + 1] = t[s + 1] + n, t[s + 2] = t[s + 2] + n;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uBrightness: e.getUniformLocation(r, "uBrightness")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uBrightness, this.brightness);
        }
      }
    ), i.Image.filters.Brightness.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend, o = i.Image.filters, e = i.util.createClass;
    o.Convolute = e(
      o.BaseFilter,
      /** @lends fabric.Image.filters.Convolute.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Convolute",
        /*
         * Opaque value (true/false)
         */
        opaque: !1,
        /*
         * matrix for the filter, max 9x9
         */
        matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: {
          Convolute_3_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_3_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_5_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_5_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_7_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_7_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_9_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_9_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`
        },
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Convolute.prototype
         * @param {Object} [options] Options object
         * @param {Boolean} [options.opaque=false] Opaque value (true/false)
         * @param {Array} [options.matrix] Filter matrix
         */
        /**
        * Retrieves the cached shader.
        * @param {Object} options
        * @param {WebGLRenderingContext} options.context The GL context used for rendering.
        * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
        */
        retrieveShader: function(r) {
          var t = Math.sqrt(this.matrix.length), s = this.type + "_" + t + "_" + (this.opaque ? 1 : 0), l = this.fragmentSource[s];
          return r.programCache.hasOwnProperty(s) || (r.programCache[s] = this.createProgram(r.context, l)), r.programCache[s];
        },
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(r) {
          var t = r.imageData, s = t.data, l = this.matrix, n = Math.round(Math.sqrt(l.length)), h = Math.floor(n / 2), f = t.width, g = t.height, p = r.ctx.createImageData(f, g), m = p.data, C = this.opaque ? 1 : 0, w, x, k, L, Y, K, re, q, ee, se, ae, W, b;
          for (ae = 0; ae < g; ae++)
            for (se = 0; se < f; se++) {
              for (Y = (ae * f + se) * 4, w = 0, x = 0, k = 0, L = 0, b = 0; b < n; b++)
                for (W = 0; W < n; W++)
                  re = ae + b - h, K = se + W - h, !(re < 0 || re >= g || K < 0 || K >= f) && (q = (re * f + K) * 4, ee = l[b * n + W], w += s[q] * ee, x += s[q + 1] * ee, k += s[q + 2] * ee, C || (L += s[q + 3] * ee));
              m[Y] = w, m[Y + 1] = x, m[Y + 2] = k, C ? m[Y + 3] = s[Y + 3] : m[Y + 3] = L;
            }
          r.imageData = p;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, t) {
          return {
            uMatrix: r.getUniformLocation(t, "uMatrix"),
            uOpaque: r.getUniformLocation(t, "uOpaque"),
            uHalfSize: r.getUniformLocation(t, "uHalfSize"),
            uSize: r.getUniformLocation(t, "uSize")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, t) {
          r.uniform1fv(t.uMatrix, this.matrix);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return a(this.callSuper("toObject"), {
            opaque: this.opaque,
            matrix: this.matrix
          });
        }
      }
    ), i.Image.filters.Convolute.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Grayscale = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Grayscale.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Grayscale",
        fragmentSource: {
          average: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float average = (color.r + color.b + color.g) / 3.0;
gl_FragColor = vec4(average, average, average, color.a);
}`,
          lightness: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
gl_FragColor = vec4(average, average, average, col.a);
}`,
          luminosity: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
gl_FragColor = vec4(average, average, average, col.a);
}`
        },
        /**
         * Grayscale mode, between 'average', 'lightness', 'luminosity'
         * @param {String} type
         * @default
         */
        mode: "average",
        mainParameter: "mode",
        /**
         * Apply the Grayscale operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, s, l = t.length, n, h = this.mode;
          for (s = 0; s < l; s += 4)
            h === "average" ? n = (t[s] + t[s + 1] + t[s + 2]) / 3 : h === "lightness" ? n = (Math.min(t[s], t[s + 1], t[s + 2]) + Math.max(t[s], t[s + 1], t[s + 2])) / 2 : h === "luminosity" && (n = 0.21 * t[s] + 0.72 * t[s + 1] + 0.07 * t[s + 2]), t[s] = n, t[s + 1] = n, t[s + 2] = n;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(e) {
          var r = this.type + "_" + this.mode;
          if (!e.programCache.hasOwnProperty(r)) {
            var t = this.fragmentSource[this.mode];
            e.programCache[r] = this.createProgram(e.context, t);
          }
          return e.programCache[r];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uMode: e.getUniformLocation(r, "uMode")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = 1;
          e.uniform1i(r.uMode, t);
        },
        /**
         * Grayscale filter isNeutralState implementation
         * The filter is never neutral
         * on the image
         **/
        isNeutralState: function() {
          return !1;
        }
      }
    ), i.Image.filters.Grayscale.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Invert = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Invert.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Invert",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform int uInvert;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
if (uInvert == 1) {
gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
} else {
gl_FragColor = color;
}
}`,
        /**
         * Filter invert. if false, does nothing
         * @param {Boolean} invert
         * @default
         */
        invert: !0,
        mainParameter: "invert",
        /**
         * Apply the Invert operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, s, l = t.length;
          for (s = 0; s < l; s += 4)
            t[s] = 255 - t[s], t[s + 1] = 255 - t[s + 1], t[s + 2] = 255 - t[s + 2];
        },
        /**
         * Invert filter isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function() {
          return !this.invert;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uInvert: e.getUniformLocation(r, "uInvert")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1i(r.uInvert, this.invert);
        }
      }
    ), i.Image.filters.Invert.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend, o = i.Image.filters, e = i.util.createClass;
    o.Noise = e(
      o.BaseFilter,
      /** @lends fabric.Image.filters.Noise.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Noise",
        /**
         * Fragment source for the noise program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uStepH;
uniform float uNoise;
uniform float uSeed;
varying vec2 vTexCoord;
float rand(vec2 co, float seed, float vScale) {
return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
}
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
gl_FragColor = color;
}`,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "noise",
        /**
         * Noise value, from
         * @param {Number} noise
         * @default
         */
        noise: 0,
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(r) {
          if (this.noise !== 0) {
            var t = r.imageData, s = t.data, l, n = s.length, h = this.noise, f;
            for (l = 0, n = s.length; l < n; l += 4)
              f = (0.5 - Math.random()) * h, s[l] += f, s[l + 1] += f, s[l + 2] += f;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, t) {
          return {
            uNoise: r.getUniformLocation(t, "uNoise"),
            uSeed: r.getUniformLocation(t, "uSeed")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, t) {
          r.uniform1f(t.uNoise, this.noise / 255), r.uniform1f(t.uSeed, Math.random());
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return a(this.callSuper("toObject"), {
            noise: this.noise
          });
        }
      }
    ), i.Image.filters.Noise.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Pixelate = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Pixelate.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Pixelate",
        blocksize: 4,
        mainParameter: "blocksize",
        /**
         * Fragment source for the Pixelate program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBlocksize;
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
float blockW = uBlocksize * uStepW;
float blockH = uBlocksize * uStepW;
int posX = int(vTexCoord.x / blockW);
int posY = int(vTexCoord.y / blockH);
float fposX = float(posX);
float fposY = float(posY);
vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
vec4 color = texture2D(uTexture, squareCoords);
gl_FragColor = color;
}`,
        /**
         * Apply the Pixelate operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, s = r.height, l = r.width, n, h, f, g, p, m, C, w, x, k, L;
          for (h = 0; h < s; h += this.blocksize)
            for (f = 0; f < l; f += this.blocksize)
              for (n = h * 4 * l + f * 4, g = t[n], p = t[n + 1], m = t[n + 2], C = t[n + 3], k = Math.min(h + this.blocksize, s), L = Math.min(f + this.blocksize, l), w = h; w < k; w++)
                for (x = f; x < L; x++)
                  n = w * 4 * l + x * 4, t[n] = g, t[n + 1] = p, t[n + 2] = m, t[n + 3] = C;
        },
        /**
         * Indicate when the filter is not gonna apply changes to the image
         **/
        isNeutralState: function() {
          return this.blocksize === 1;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uBlocksize: e.getUniformLocation(r, "uBlocksize"),
            uStepW: e.getUniformLocation(r, "uStepW"),
            uStepH: e.getUniformLocation(r, "uStepH")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uBlocksize, this.blocksize);
        }
      }
    ), i.Image.filters.Pixelate.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.extend, o = i.Image.filters, e = i.util.createClass;
    o.RemoveColor = e(
      o.BaseFilter,
      /** @lends fabric.Image.filters.RemoveColor.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "RemoveColor",
        /**
         * Color to remove, in any format understood by fabric.Color.
         * @param {String} type
         * @default
         */
        color: "#FFFFFF",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`,
        /**
         * distance to actual color, as value up or down from each r,g,b
         * between 0 and 1
         **/
        distance: 0.02,
        /**
         * For color to remove inside distance, use alpha channel for a smoother deletion
         * NOT IMPLEMENTED YET
         **/
        useAlpha: !1,
        /**
         * Constructor
         * @memberOf fabric.Image.filters.RemoveWhite.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.color=#RRGGBB] Threshold value
         * @param {Number} [options.distance=10] Distance value
         */
        /**
         * Applies filter to canvas element
         * @param {Object} canvasEl Canvas element to apply filter to
         */
        applyTo2d: function(r) {
          var t = r.imageData, s = t.data, l, n = this.distance * 255, h, f, g, p = new i.Color(this.color).getSource(), m = [
            p[0] - n,
            p[1] - n,
            p[2] - n
          ], C = [
            p[0] + n,
            p[1] + n,
            p[2] + n
          ];
          for (l = 0; l < s.length; l += 4)
            h = s[l], f = s[l + 1], g = s[l + 2], h > m[0] && f > m[1] && g > m[2] && h < C[0] && f < C[1] && g < C[2] && (s[l + 3] = 0);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, t) {
          return {
            uLow: r.getUniformLocation(t, "uLow"),
            uHigh: r.getUniformLocation(t, "uHigh")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, t) {
          var s = new i.Color(this.color).getSource(), l = parseFloat(this.distance), n = [
            0 + s[0] / 255 - l,
            0 + s[1] / 255 - l,
            0 + s[2] / 255 - l,
            1
          ], h = [
            s[0] / 255 + l,
            s[1] / 255 + l,
            s[2] / 255 + l,
            1
          ];
          r.uniform4fv(t.uLow, n), r.uniform4fv(t.uHigh, h);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return a(this.callSuper("toObject"), {
            color: this.color,
            distance: this.distance
          });
        }
      }
    ), i.Image.filters.RemoveColor.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass, e = {
      Brownie: [
        0.5997,
        0.34553,
        -0.27082,
        0,
        0.186,
        -0.0377,
        0.86095,
        0.15059,
        0,
        -0.1449,
        0.24113,
        -0.07441,
        0.44972,
        0,
        -0.02965,
        0,
        0,
        0,
        1,
        0
      ],
      Vintage: [
        0.62793,
        0.32021,
        -0.03965,
        0,
        0.03784,
        0.02578,
        0.64411,
        0.03259,
        0,
        0.02926,
        0.0466,
        -0.08512,
        0.52416,
        0,
        0.02023,
        0,
        0,
        0,
        1,
        0
      ],
      Kodachrome: [
        1.12855,
        -0.39673,
        -0.03992,
        0,
        0.24991,
        -0.16404,
        1.08352,
        -0.05498,
        0,
        0.09698,
        -0.16786,
        -0.56034,
        1.60148,
        0,
        0.13972,
        0,
        0,
        0,
        1,
        0
      ],
      Technicolor: [
        1.91252,
        -0.85453,
        -0.09155,
        0,
        0.04624,
        -0.30878,
        1.76589,
        -0.10601,
        0,
        -0.27589,
        -0.2311,
        -0.75018,
        1.84759,
        0,
        0.12137,
        0,
        0,
        0,
        1,
        0
      ],
      Polaroid: [
        1.438,
        -0.062,
        -0.062,
        0,
        0,
        -0.122,
        1.378,
        -0.122,
        0,
        0,
        -0.016,
        -0.016,
        1.483,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      Sepia: [
        0.393,
        0.769,
        0.189,
        0,
        0,
        0.349,
        0.686,
        0.168,
        0,
        0,
        0.272,
        0.534,
        0.131,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      BlackWhite: [
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        0,
        0,
        0,
        1,
        0
      ]
    };
    for (var r in e)
      a[r] = o(
        a.ColorMatrix,
        /** @lends fabric.Image.filters.Sepia.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: r,
          /**
           * Colormatrix for the effect
           * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
           * outside the -1, 1 range.
           * @param {Array} matrix array of 20 numbers.
           * @default
           */
          matrix: e[r],
          /**
           * Lock the matrix export for this kind of static, parameter less filters.
           */
          mainParameter: !1,
          /**
           * Lock the colormatrix on the color part, skipping alpha
           */
          colorsOnly: !0
        }
      ), i.Image.filters[r].fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric, a = i.Image.filters, o = i.util.createClass;
    a.BlendColor = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Blend.prototype */
      {
        type: "BlendColor",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         * @type String
         * @default
         **/
        color: "#F95C63",
        /**
         * Blend mode for the filter: one of multiply, add, diff, screen, subtract,
         * darken, lighten, overlay, exclusion, tint.
         * @type String
         * @default
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend color operation.
         * @type Number
         * @default
         **/
        alpha: 1,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `gl_FragColor.rgb *= uColor.rgb;
`,
          screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,
          add: `gl_FragColor.rgb += uColor.rgb;
`,
          diff: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,
          subtract: `gl_FragColor.rgb -= uColor.rgb;
`,
          lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,
          darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,
          exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,
          overlay: `if (uColor.r < 0.5) {
gl_FragColor.r *= 2.0 * uColor.r;
} else {
gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
}
if (uColor.g < 0.5) {
gl_FragColor.g *= 2.0 * uColor.g;
} else {
gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
}
if (uColor.b < 0.5) {
gl_FragColor.b *= 2.0 * uColor.b;
} else {
gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
}
`,
          tint: `gl_FragColor.rgb *= (1.0 - uColor.a);
gl_FragColor.rgb += uColor.rgb;
`
        },
        /**
         * build the fragment source for the filters, joining the common part with
         * the specific one.
         * @param {String} mode the mode of the filter, a key of this.fragmentSource
         * @return {String} the source to be compiled
         * @private
         */
        buildSource: function(e) {
          return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[e] + `}
}`;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(e) {
          var r = this.type + "_" + this.mode, t;
          return e.programCache.hasOwnProperty(r) || (t = this.buildSource(this.mode), e.programCache[r] = this.createProgram(e.context, t)), e.programCache[r];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, s = t.length, l, n, h, f, g, p, m, C = 1 - this.alpha;
          m = new i.Color(this.color).getSource(), l = m[0] * this.alpha, n = m[1] * this.alpha, h = m[2] * this.alpha;
          for (var w = 0; w < s; w += 4)
            switch (f = t[w], g = t[w + 1], p = t[w + 2], this.mode) {
              case "multiply":
                t[w] = f * l / 255, t[w + 1] = g * n / 255, t[w + 2] = p * h / 255;
                break;
              case "screen":
                t[w] = 255 - (255 - f) * (255 - l) / 255, t[w + 1] = 255 - (255 - g) * (255 - n) / 255, t[w + 2] = 255 - (255 - p) * (255 - h) / 255;
                break;
              case "add":
                t[w] = f + l, t[w + 1] = g + n, t[w + 2] = p + h;
                break;
              case "diff":
              case "difference":
                t[w] = Math.abs(f - l), t[w + 1] = Math.abs(g - n), t[w + 2] = Math.abs(p - h);
                break;
              case "subtract":
                t[w] = f - l, t[w + 1] = g - n, t[w + 2] = p - h;
                break;
              case "darken":
                t[w] = Math.min(f, l), t[w + 1] = Math.min(g, n), t[w + 2] = Math.min(p, h);
                break;
              case "lighten":
                t[w] = Math.max(f, l), t[w + 1] = Math.max(g, n), t[w + 2] = Math.max(p, h);
                break;
              case "overlay":
                t[w] = l < 128 ? 2 * f * l / 255 : 255 - 2 * (255 - f) * (255 - l) / 255, t[w + 1] = n < 128 ? 2 * g * n / 255 : 255 - 2 * (255 - g) * (255 - n) / 255, t[w + 2] = h < 128 ? 2 * p * h / 255 : 255 - 2 * (255 - p) * (255 - h) / 255;
                break;
              case "exclusion":
                t[w] = l + f - 2 * l * f / 255, t[w + 1] = n + g - 2 * n * g / 255, t[w + 2] = h + p - 2 * h * p / 255;
                break;
              case "tint":
                t[w] = l + f * C, t[w + 1] = n + g * C, t[w + 2] = h + p * C;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uColor: e.getUniformLocation(r, "uColor")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = new i.Color(this.color).getSource();
          t[0] = this.alpha * t[0] / 255, t[1] = this.alpha * t[1] / 255, t[2] = this.alpha * t[2] / 255, t[3] = this.alpha, e.uniform4fv(r.uColor, t);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            color: this.color,
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), i.Image.filters.BlendColor.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric, a = i.Image.filters, o = i.util.createClass;
    a.BlendImage = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.BlendImage.prototype */
      {
        type: "BlendImage",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         **/
        image: null,
        /**
         * Blend mode for the filter (one of "multiply", "mask")
         * @type String
         * @default
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend image operation.
         * not implemented.
         **/
        alpha: 1,
        vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
uniform mat3 uTransformMatrix;
void main() {
vTexCoord = aPosition;
vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.rgba *= color2.rgba;
gl_FragColor = color;
}`,
          mask: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.a = color2.a;
gl_FragColor = color;
}`
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(e) {
          var r = this.type + "_" + this.mode, t = this.fragmentSource[this.mode];
          return e.programCache.hasOwnProperty(r) || (e.programCache[r] = this.createProgram(e.context, t)), e.programCache[r];
        },
        applyToWebGL: function(e) {
          var r = e.context, t = this.createTexture(e.filterBackend, this.image);
          this.bindAdditionalTexture(r, t, r.TEXTURE1), this.callSuper("applyToWebGL", e), this.unbindAdditionalTexture(r, r.TEXTURE1);
        },
        createTexture: function(e, r) {
          return e.getCachedTexture(r.cacheKey, r._element);
        },
        /**
         * Calculate a transformMatrix to adapt the image to blend over
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        calculateMatrix: function() {
          var e = this.image, r = e._element.width, t = e._element.height;
          return [
            1 / e.scaleX,
            0,
            0,
            0,
            1 / e.scaleY,
            0,
            -e.left / r,
            -e.top / t,
            1
          ];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = e.filterBackend.resources, s = r.data, l = s.length, n = r.width, h = r.height, f, g, p, m, C, w, x, k, L, Y, K = this.image, re;
          t.blendImage || (t.blendImage = i.util.createCanvasElement()), L = t.blendImage, Y = L.getContext("2d"), L.width !== n || L.height !== h ? (L.width = n, L.height = h) : Y.clearRect(0, 0, n, h), Y.setTransform(K.scaleX, 0, 0, K.scaleY, K.left, K.top), Y.drawImage(K._element, 0, 0, n, h), re = Y.getImageData(0, 0, n, h).data;
          for (var q = 0; q < l; q += 4)
            switch (C = s[q], w = s[q + 1], x = s[q + 2], k = s[q + 3], f = re[q], g = re[q + 1], p = re[q + 2], m = re[q + 3], this.mode) {
              case "multiply":
                s[q] = C * f / 255, s[q + 1] = w * g / 255, s[q + 2] = x * p / 255, s[q + 3] = k * m / 255;
                break;
              case "mask":
                s[q + 3] = m;
                break;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uTransformMatrix: e.getUniformLocation(r, "uTransformMatrix"),
            uImage: e.getUniformLocation(r, "uImage")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = this.calculateMatrix();
          e.uniform1i(r.uImage, 1), e.uniformMatrix3fv(r.uTransformMatrix, !1, t);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            image: this.image && this.image.toObject(),
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), i.Image.filters.BlendImage.fromObject = function(e, r) {
      i.Image.fromObject(e.image, function(t) {
        var s = i.util.object.clone(e);
        s.image = t, r(new i.Image.filters.BlendImage(s));
      });
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = Math.pow, o = Math.floor, e = Math.sqrt, r = Math.abs, t = Math.round, s = Math.sin, l = Math.ceil, n = i.Image.filters, h = i.util.createClass;
    n.Resize = h(
      n.BaseFilter,
      /** @lends fabric.Image.filters.Resize.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Resize",
        /**
         * Resize type
         * for webgl resizeType is just lanczos, for canvas2d can be:
         * bilinear, hermite, sliceHack, lanczos.
         * @param {String} resizeType
         * @default
         */
        resizeType: "hermite",
        /**
         * Scale factor for resizing, x axis
         * @param {Number} scaleX
         * @default
         */
        scaleX: 1,
        /**
         * Scale factor for resizing, y axis
         * @param {Number} scaleY
         * @default
         */
        scaleY: 1,
        /**
         * LanczosLobes parameter for lanczos filter, valid for resizeType lanczos
         * @param {Number} lanczosLobes
         * @default
         */
        lanczosLobes: 3,
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(f, g) {
          return {
            uDelta: f.getUniformLocation(g, "uDelta"),
            uTaps: f.getUniformLocation(g, "uTaps")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(f, g) {
          f.uniform2fv(g.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), f.uniform1fv(g.uTaps, this.taps);
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(f) {
          var g = this.getFilterWindow(), p = this.type + "_" + g;
          if (!f.programCache.hasOwnProperty(p)) {
            var m = this.generateShader(g);
            f.programCache[p] = this.createProgram(f.context, m);
          }
          return f.programCache[p];
        },
        getFilterWindow: function() {
          var f = this.tempScale;
          return Math.ceil(this.lanczosLobes / f);
        },
        getTaps: function() {
          for (var f = this.lanczosCreate(this.lanczosLobes), g = this.tempScale, p = this.getFilterWindow(), m = new Array(p), C = 1; C <= p; C++)
            m[C - 1] = f(C * g);
          return m;
        },
        /**
         * Generate vertex and shader sources from the necessary steps numbers
         * @param {Number} filterWindow
         */
        generateShader: function(m) {
          for (var g = new Array(m), p = this.fragmentSourceTOP, m, C = 1; C <= m; C++)
            g[C - 1] = C + ".0 * uDelta";
          return p += "uniform float uTaps[" + m + `];
`, p += `void main() {
`, p += `  vec4 color = texture2D(uTexture, vTexCoord);
`, p += `  float sum = 1.0;
`, g.forEach(function(w, x) {
            p += "  color += texture2D(uTexture, vTexCoord + " + w + ") * uTaps[" + x + `];
`, p += "  color += texture2D(uTexture, vTexCoord - " + w + ") * uTaps[" + x + `];
`, p += "  sum += 2.0 * uTaps[" + x + `];
`;
          }), p += `  gl_FragColor = color / sum;
`, p += "}", p;
        },
        fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`,
        /**
         * Apply the resize filter to the image
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(f) {
          f.webgl ? (f.passes++, this.width = f.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = f.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), f.destinationWidth = this.dW, this._setupFrameBuffer(f), this.applyToWebGL(f), this._swapTextures(f), f.sourceWidth = f.destinationWidth, this.height = f.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), f.destinationHeight = this.dH, this._setupFrameBuffer(f), this.applyToWebGL(f), this._swapTextures(f), f.sourceHeight = f.destinationHeight) : this.applyTo2d(f);
        },
        isNeutralState: function() {
          return this.scaleX === 1 && this.scaleY === 1;
        },
        lanczosCreate: function(f) {
          return function(g) {
            if (g >= f || g <= -f)
              return 0;
            if (g < 11920929e-14 && g > -11920929e-14)
              return 1;
            g *= Math.PI;
            var p = g / f;
            return s(g) / g * s(p) / p;
          };
        },
        /**
         * Applies filter to canvas element
         * @memberOf fabric.Image.filters.Resize.prototype
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} scaleX
         * @param {Number} scaleY
         */
        applyTo2d: function(f) {
          var g = f.imageData, p = this.scaleX, m = this.scaleY;
          this.rcpScaleX = 1 / p, this.rcpScaleY = 1 / m;
          var C = g.width, w = g.height, x = t(C * p), k = t(w * m), L;
          this.resizeType === "sliceHack" ? L = this.sliceByTwo(f, C, w, x, k) : this.resizeType === "hermite" ? L = this.hermiteFastResize(f, C, w, x, k) : this.resizeType === "bilinear" ? L = this.bilinearFiltering(f, C, w, x, k) : this.resizeType === "lanczos" && (L = this.lanczosResize(f, C, w, x, k)), f.imageData = L;
        },
        /**
         * Filter sliceByTwo
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        sliceByTwo: function(f, g, p, m, C) {
          var w = f.imageData, x = 0.5, k = !1, L = !1, Y = g * x, K = p * x, re = i.filterBackend.resources, q, ee, se = 0, ae = 0, W = g, b = 0;
          for (re.sliceByTwo || (re.sliceByTwo = document.createElement("canvas")), q = re.sliceByTwo, (q.width < g * 1.5 || q.height < p) && (q.width = g * 1.5, q.height = p), ee = q.getContext("2d"), ee.clearRect(0, 0, g * 1.5, p), ee.putImageData(w, 0, 0), m = o(m), C = o(C); !k || !L; )
            g = Y, p = K, m < o(Y * x) ? Y = o(Y * x) : (Y = m, k = !0), C < o(K * x) ? K = o(K * x) : (K = C, L = !0), ee.drawImage(q, se, ae, g, p, W, b, Y, K), se = W, ae = b, b += K;
          return ee.getImageData(se, ae, m, C);
        },
        /**
         * Filter lanczosResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        lanczosResize: function(f, g, p, m, C) {
          function w(P) {
            var O, B, E, S, M, j, z, H, I, te, $;
            for (b.x = (P + 0.5) * K, A.x = o(b.x), O = 0; O < C; O++) {
              for (b.y = (O + 0.5) * re, A.y = o(b.y), M = 0, j = 0, z = 0, H = 0, I = 0, B = A.x - se; B <= A.x + se; B++)
                if (!(B < 0 || B >= g)) {
                  te = o(1e3 * r(B - b.x)), W[te] || (W[te] = {});
                  for (var G = A.y - ae; G <= A.y + ae; G++)
                    G < 0 || G >= p || ($ = o(1e3 * r(G - b.y)), W[te][$] || (W[te][$] = Y(e(a(te * q, 2) + a($ * ee, 2)) / 1e3)), E = W[te][$], E > 0 && (S = (G * g + B) * 4, M += E, j += E * x[S], z += E * x[S + 1], H += E * x[S + 2], I += E * x[S + 3]));
                }
              S = (O * m + P) * 4, L[S] = j / M, L[S + 1] = z / M, L[S + 2] = H / M, L[S + 3] = I / M;
            }
            return ++P < m ? w(P) : k;
          }
          var x = f.imageData.data, k = f.ctx.createImageData(m, C), L = k.data, Y = this.lanczosCreate(this.lanczosLobes), K = this.rcpScaleX, re = this.rcpScaleY, q = 2 / this.rcpScaleX, ee = 2 / this.rcpScaleY, se = l(K * this.lanczosLobes / 2), ae = l(re * this.lanczosLobes / 2), W = {}, b = {}, A = {};
          return w(0);
        },
        /**
         * bilinearFiltering
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        bilinearFiltering: function(f, g, p, m, C) {
          var w, x, k, L, Y, K, re, q, ee, se, ae, W, b = 0, A, P = this.rcpScaleX, O = this.rcpScaleY, B = 4 * (g - 1), E = f.imageData, S = E.data, M = f.ctx.createImageData(m, C), j = M.data;
          for (re = 0; re < C; re++)
            for (q = 0; q < m; q++)
              for (Y = o(P * q), K = o(O * re), ee = P * q - Y, se = O * re - K, A = 4 * (K * g + Y), ae = 0; ae < 4; ae++)
                w = S[A + ae], x = S[A + 4 + ae], k = S[A + B + ae], L = S[A + B + 4 + ae], W = w * (1 - ee) * (1 - se) + x * ee * (1 - se) + k * se * (1 - ee) + L * ee * se, j[b++] = W;
          return M;
        },
        /**
         * hermiteFastResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        hermiteFastResize: function(f, g, p, m, C) {
          for (var w = this.rcpScaleX, x = this.rcpScaleY, k = l(w / 2), L = l(x / 2), Y = f.imageData, K = Y.data, re = f.ctx.createImageData(m, C), q = re.data, ee = 0; ee < C; ee++)
            for (var se = 0; se < m; se++) {
              for (var ae = (se + ee * m) * 4, W = 0, b = 0, A = 0, P = 0, O = 0, B = 0, E = 0, S = (ee + 0.5) * x, M = o(ee * x); M < (ee + 1) * x; M++)
                for (var j = r(S - (M + 0.5)) / L, z = (se + 0.5) * w, H = j * j, I = o(se * w); I < (se + 1) * w; I++) {
                  var te = r(z - (I + 0.5)) / k, $ = e(H + te * te);
                  $ > 1 && $ < -1 || (W = 2 * $ * $ * $ - 3 * $ * $ + 1, W > 0 && (te = 4 * (I + M * g), E += W * K[te + 3], A += W, K[te + 3] < 255 && (W = W * K[te + 3] / 250), P += W * K[te], O += W * K[te + 1], B += W * K[te + 2], b += W));
                }
              q[ae] = P / b, q[ae + 1] = O / b, q[ae + 2] = B / b, q[ae + 3] = E / A;
            }
          return re;
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            resizeType: this.resizeType,
            lanczosLobes: this.lanczosLobes
          };
        }
      }
    ), i.Image.filters.Resize.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Contrast = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Contrast.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Contrast",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`,
        /**
         * contrast value, range from -1 to 1.
         * @param {Number} contrast
         * @default 0
         */
        contrast: 0,
        mainParameter: "contrast",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Contrast.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.contrast=0] Value to contrast the image up (-1...1)
         */
        /**
          * Apply the Contrast operation to a Uint8Array representing the pixels of an image.
          *
          * @param {Object} options
          * @param {ImageData} options.imageData The Uint8Array to be filtered.
          */
        applyTo2d: function(e) {
          if (this.contrast !== 0) {
            var r = e.imageData, t, l, s = r.data, l = s.length, n = Math.floor(this.contrast * 255), h = 259 * (n + 255) / (255 * (259 - n));
            for (t = 0; t < l; t += 4)
              s[t] = h * (s[t] - 128) + 128, s[t + 1] = h * (s[t + 1] - 128) + 128, s[t + 2] = h * (s[t + 2] - 128) + 128;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uContrast: e.getUniformLocation(r, "uContrast")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uContrast, this.contrast);
        }
      }
    ), i.Image.filters.Contrast.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Saturation = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Saturation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Saturation",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uSaturation;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float rgMax = max(color.r, color.g);
float rgbMax = max(rgMax, color.b);
color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
gl_FragColor = color;
}`,
        /**
         * Saturation value, from -1 to 1.
         * Increases/decreases the color saturation.
         * A value of 0 has no effect.
         * 
         * @param {Number} saturation
         * @default
         */
        saturation: 0,
        mainParameter: "saturation",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Saturate.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.saturate=0] Value to saturate the image (-1...1)
         */
        /**
         * Apply the Saturation operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          if (this.saturation !== 0) {
            var r = e.imageData, t = r.data, s = t.length, l = -this.saturation, n, h;
            for (n = 0; n < s; n += 4)
              h = Math.max(t[n], t[n + 1], t[n + 2]), t[n] += h !== t[n] ? (h - t[n]) * l : 0, t[n + 1] += h !== t[n + 1] ? (h - t[n + 1]) * l : 0, t[n + 2] += h !== t[n + 2] ? (h - t[n + 2]) * l : 0;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uSaturation: e.getUniformLocation(r, "uSaturation")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uSaturation, -this.saturation);
        }
      }
    ), i.Image.filters.Saturation.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Vibrance = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Vibrance.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Vibrance",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uVibrance;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float max = max(color.r, max(color.g, color.b));
float avg = (color.r + color.g + color.b) / 3.0;
float amt = (abs(max - avg) * 2.0) * uVibrance;
color.r += max != color.r ? (max - color.r) * amt : 0.00;
color.g += max != color.g ? (max - color.g) * amt : 0.00;
color.b += max != color.b ? (max - color.b) * amt : 0.00;
gl_FragColor = color;
}`,
        /**
         * Vibrance value, from -1 to 1.
         * Increases/decreases the saturation of more muted colors with less effect on saturated colors.
         * A value of 0 has no effect.
         * 
         * @param {Number} vibrance
         * @default
         */
        vibrance: 0,
        mainParameter: "vibrance",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Vibrance.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.vibrance=0] Vibrance value for the image (between -1 and 1)
         */
        /**
         * Apply the Vibrance operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          if (this.vibrance !== 0) {
            var r = e.imageData, t = r.data, s = t.length, l = -this.vibrance, n, h, f, g;
            for (n = 0; n < s; n += 4)
              h = Math.max(t[n], t[n + 1], t[n + 2]), f = (t[n] + t[n + 1] + t[n + 2]) / 3, g = Math.abs(h - f) * 2 / 255 * l, t[n] += h !== t[n] ? (h - t[n]) * g : 0, t[n + 1] += h !== t[n + 1] ? (h - t[n + 1]) * g : 0, t[n + 2] += h !== t[n + 2] ? (h - t[n + 2]) * g : 0;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uVibrance: e.getUniformLocation(r, "uVibrance")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uVibrance, -this.vibrance);
        }
      }
    ), i.Image.filters.Vibrance.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Blur = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Blur.prototype */
      {
        type: "Blur",
        /*
        'gl_FragColor = vec4(0.0);',
        'gl_FragColor += texture2D(texture, vTexCoord + -7 * uDelta)*0.0044299121055113265;',
        'gl_FragColor += texture2D(texture, vTexCoord + -6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + -5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + -4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + -3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + -2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + -1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord              )*0.159576912161;',
        'gl_FragColor += texture2D(texture, vTexCoord + 1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord + 2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + 3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + 4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + 5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + 6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + 7 * uDelta)*0.0044299121055113265;',
        */
        /* eslint-disable max-len */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
const float nSamples = 15.0;
vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
float random(vec3 scale) {
return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
}
void main() {
vec4 color = vec4(0.0);
float total = 0.0;
float offset = random(v3offset);
for (float t = -nSamples; t <= nSamples; t++) {
float percent = (t + offset - 0.5) / nSamples;
float weight = 1.0 - abs(percent);
color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
total += weight;
}
gl_FragColor = color / total;
}`,
        /* eslint-enable max-len */
        /**
         * blur value, in percentage of image dimensions.
         * specific to keep the image blur constant at different resolutions
         * range between 0 and 1.
         * @type Number
         * @default
         */
        blur: 0,
        mainParameter: "blur",
        applyTo: function(e) {
          e.webgl ? (this.aspectRatio = e.sourceWidth / e.sourceHeight, e.passes++, this._setupFrameBuffer(e), this.horizontal = !0, this.applyToWebGL(e), this._swapTextures(e), this._setupFrameBuffer(e), this.horizontal = !1, this.applyToWebGL(e), this._swapTextures(e)) : this.applyTo2d(e);
        },
        applyTo2d: function(e) {
          e.imageData = this.simpleBlur(e);
        },
        simpleBlur: function(e) {
          var r = e.filterBackend.resources, t, s, l = e.imageData.width, n = e.imageData.height;
          r.blurLayer1 || (r.blurLayer1 = i.util.createCanvasElement(), r.blurLayer2 = i.util.createCanvasElement()), t = r.blurLayer1, s = r.blurLayer2, (t.width !== l || t.height !== n) && (s.width = t.width = l, s.height = t.height = n);
          var h = t.getContext("2d"), f = s.getContext("2d"), g = 15, p, m, C, w, x = this.blur * 0.06 * 0.5;
          for (h.putImageData(e.imageData, 0, 0), f.clearRect(0, 0, l, n), w = -g; w <= g; w++)
            p = (Math.random() - 0.5) / 4, m = w / g, C = x * m * l + p, f.globalAlpha = 1 - Math.abs(m), f.drawImage(t, C, p), h.drawImage(s, 0, 0), f.globalAlpha = 1, f.clearRect(0, 0, s.width, s.height);
          for (w = -g; w <= g; w++)
            p = (Math.random() - 0.5) / 4, m = w / g, C = x * m * n + p, f.globalAlpha = 1 - Math.abs(m), f.drawImage(t, p, C), h.drawImage(s, 0, 0), f.globalAlpha = 1, f.clearRect(0, 0, s.width, s.height);
          e.ctx.drawImage(t, 0, 0);
          var k = e.ctx.getImageData(0, 0, t.width, t.height);
          return h.globalAlpha = 1, h.clearRect(0, 0, t.width, t.height), k;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            delta: e.getUniformLocation(r, "uDelta")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = this.chooseRightDelta();
          e.uniform2fv(r.delta, t);
        },
        /**
         * choose right value of image percentage to blur with
         * @returns {Array} a numeric array with delta values
         */
        chooseRightDelta: function() {
          var e = 1, r = [0, 0], t;
          return this.horizontal ? this.aspectRatio > 1 && (e = 1 / this.aspectRatio) : this.aspectRatio < 1 && (e = this.aspectRatio), t = e * this.blur * 0.12, this.horizontal ? r[0] = t : r[1] = t, r;
        }
      }
    ), a.Blur.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Gamma = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Gamma.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Gamma",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec3 uGamma;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec3 correction = (1.0 / uGamma);
color.r = pow(color.r, correction.r);
color.g = pow(color.g, correction.g);
color.b = pow(color.b, correction.b);
gl_FragColor = color;
gl_FragColor.rgb *= color.a;
}`,
        /**
         * Gamma array value, from 0.01 to 2.2.
         * @param {Array} gamma
         * @default
         */
        gamma: [1, 1, 1],
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "gamma",
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(e) {
          this.gamma = [1, 1, 1], a.BaseFilter.prototype.initialize.call(this, e);
        },
        /**
         * Apply the Gamma operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, s = this.gamma, l = t.length, n = 1 / s[0], h = 1 / s[1], f = 1 / s[2], g;
          for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), g = 0, l = 256; g < l; g++)
            this.rVals[g] = Math.pow(g / 255, n) * 255, this.gVals[g] = Math.pow(g / 255, h) * 255, this.bVals[g] = Math.pow(g / 255, f) * 255;
          for (g = 0, l = t.length; g < l; g += 4)
            t[g] = this.rVals[t[g]], t[g + 1] = this.gVals[t[g + 1]], t[g + 2] = this.bVals[t[g + 2]];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uGamma: e.getUniformLocation(r, "uGamma")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform3fv(r.uGamma, this.gamma);
        }
      }
    ), i.Image.filters.Gamma.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.Composed = o(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Composed.prototype */
      {
        type: "Composed",
        /**
         * A non sparse array of filters to apply
         */
        subFilters: [],
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(e) {
          this.callSuper("initialize", e), this.subFilters = this.subFilters.slice(0);
        },
        /**
         * Apply this container's filters to the input image provided.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be applied.
         */
        applyTo: function(e) {
          e.passes += this.subFilters.length - 1, this.subFilters.forEach(function(r) {
            r.applyTo(e);
          });
        },
        /**
         * Serialize this filter into JSON.
         *
         * @returns {Object} A JSON representation of this filter.
         */
        toObject: function() {
          return i.util.object.extend(this.callSuper("toObject"), {
            subFilters: this.subFilters.map(function(e) {
              return e.toObject();
            })
          });
        },
        isNeutralState: function() {
          return !this.subFilters.some(function(e) {
            return !e.isNeutralState();
          });
        }
      }
    ), i.Image.filters.Composed.fromObject = function(e, r) {
      var t = e.subFilters || [], s = t.map(function(n) {
        return new i.Image.filters[n.type](n);
      }), l = new i.Image.filters.Composed({ subFilters: s });
      return r && r(l), l;
    };
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.Image.filters, o = i.util.createClass;
    a.HueRotation = o(
      a.ColorMatrix,
      /** @lends fabric.Image.filters.HueRotation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "HueRotation",
        /**
         * HueRotation value, from -1 to 1.
         * the unit is radians
         * @param {Number} myParameter
         * @default
         */
        rotation: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "rotation",
        calculateMatrix: function() {
          var e = this.rotation * Math.PI, r = i.util.cos(e), t = i.util.sin(e), s = 1 / 3, l = Math.sqrt(s) * t, n = 1 - r;
          this.matrix = [
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ], this.matrix[0] = r + n / 3, this.matrix[1] = s * n - l, this.matrix[2] = s * n + l, this.matrix[5] = s * n + l, this.matrix[6] = r + s * n, this.matrix[7] = s * n - l, this.matrix[10] = s * n - l, this.matrix[11] = s * n + l, this.matrix[12] = r + s * n;
        },
        /**
         * HueRotation isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function(e) {
          return this.calculateMatrix(), a.BaseFilter.prototype.isNeutralState.call(this, e);
        },
        /**
         * Apply this filter to the input image data provided.
         *
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(e) {
          this.calculateMatrix(), a.BaseFilter.prototype.applyTo.call(this, e);
        }
      }
    ), i.Image.filters.HueRotation.fromObject = i.Image.filters.BaseFilter.fromObject;
  }(d), function(u) {
    var i = u.fabric || (u.fabric = {}), a = i.util.object.clone;
    if (i.Text) {
      i.warn("fabric.Text is already defined");
      return;
    }
    var o = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign".split(" ");
    i.Text = i.util.createClass(
      i.Object,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Properties which when set cause object to change dimensions
         * @type Array
         * @private
         */
        _dimensionAffectingProps: [
          "fontSize",
          "fontWeight",
          "fontFamily",
          "fontStyle",
          "lineHeight",
          "text",
          "charSpacing",
          "textAlign",
          "styles",
          "path",
          "pathStartOffset",
          "pathSide",
          "pathAlign"
        ],
        /**
         * @private
         */
        _reNewline: /\r?\n/,
        /**
         * Use this regular expression to filter for whitespaces that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpacesAndTabs: /[ \t\r]/g,
        /**
         * Use this regular expression to filter for whitespace that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpaceAndTab: /[ \t\r]/,
        /**
         * Use this regular expression to filter consecutive groups of non spaces.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reWords: /\S+/g,
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "text",
        /**
         * Font size (in pixels)
         * @type Number
         * @default
         */
        fontSize: 40,
        /**
         * Font weight (e.g. bold, normal, 400, 600, 800)
         * @type {(Number|String)}
         * @default
         */
        fontWeight: "normal",
        /**
         * Font family
         * @type String
         * @default
         */
        fontFamily: "Times New Roman",
        /**
         * Text decoration underline.
         * @type Boolean
         * @default
         */
        underline: !1,
        /**
         * Text decoration overline.
         * @type Boolean
         * @default
         */
        overline: !1,
        /**
         * Text decoration linethrough.
         * @type Boolean
         * @default
         */
        linethrough: !1,
        /**
         * Text alignment. Possible values: "left", "center", "right", "justify",
         * "justify-left", "justify-center" or "justify-right".
         * @type String
         * @default
         */
        textAlign: "left",
        /**
         * Font style . Possible values: "", "normal", "italic" or "oblique".
         * @type String
         * @default
         */
        fontStyle: "normal",
        /**
         * Line height
         * @type Number
         * @default
         */
        lineHeight: 1.16,
        /**
         * Superscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        superscript: {
          size: 0.6,
          // fontSize factor
          baseline: -0.35
          // baseline-shift factor (upwards)
        },
        /**
         * Subscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        subscript: {
          size: 0.6,
          // fontSize factor
          baseline: 0.11
          // baseline-shift factor (downwards)
        },
        /**
         * Background color of text lines
         * @type String
         * @default
         */
        textBackgroundColor: "",
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: i.Object.prototype.stateProperties.concat(o),
        /**
         * List of properties to consider when checking if cache needs refresh
         * @type Array
         */
        cacheProperties: i.Object.prototype.cacheProperties.concat(o),
        /**
         * When defined, an object is rendered via stroke and this property specifies its color.
         * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Shadow object representing shadow of this shape.
         * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * fabric.Path that the text should follow.
         * since 4.6.0 the path will be drawn automatically.
         * if you want to make the path visible, give it a stroke and strokeWidth or fill value
         * if you want it to be hidden, assign visible = false to the path.
         * This feature is in BETA, and SVG import/export is not yet supported.
         * @type fabric.Path
         * @example
         * var textPath = new fabric.Text('Text on a path', {
         *     top: 150,
         *     left: 150,
         *     textAlign: 'center',
         *     charSpacing: -50,
         *     path: new fabric.Path('M 0 0 C 50 -100 150 -100 200 0', {
         *         strokeWidth: 1,
         *         visible: false
         *     }),
         *     pathSide: 'left',
         *     pathStartOffset: 0
         * });
         * @default
         */
        path: null,
        /**
         * Offset amount for text path starting position
         * Only used when text has a path
         * @type Number
         * @default
         */
        pathStartOffset: 0,
        /**
         * Which side of the path the text should be drawn on.
         * Only used when text has a path
         * @type {String} 'left|right'
         * @default
         */
        pathSide: "left",
        /**
         * How text is aligned to the path. This property determines
         * the perpendicular position of each character relative to the path.
         * (one of "baseline", "center", "ascender", "descender")
         * This feature is in BETA, and its behavior may change
         * @type String
         * @default
         */
        pathAlign: "baseline",
        /**
         * @private
         */
        _fontSizeFraction: 0.222,
        /**
         * @private
         */
        offsets: {
          underline: 0.1,
          linethrough: -0.315,
          overline: -0.88
        },
        /**
         * Text Line proportion to font Size (in pixels)
         * @type Number
         * @default
         */
        _fontSizeMult: 1.13,
        /**
         * additional space between characters
         * expressed in thousands of em unit
         * @type Number
         * @default
         */
        charSpacing: 0,
        /**
         * Object containing character styles - top-level properties -> line numbers,
         * 2nd-level properties - character numbers
         * @type Object
         * @default
         */
        styles: null,
        /**
         * Reference to a context to measure text char or couple of chars
         * the cacheContext of the canvas will be used or a freshly created one if the object is not on canvas
         * once created it will be referenced on fabric._measuringContext to avoid creating a canvas for every
         * text object created.
         * @type {CanvasRenderingContext2D}
         * @default
         */
        _measuringContext: null,
        /**
         * Baseline shift, styles only, keep at 0 for the main text object
         * @type {Number}
         * @default
         */
        deltaY: 0,
        /**
         * WARNING: EXPERIMENTAL. NOT SUPPORTED YET
         * determine the direction of the text.
         * This has to be set manually together with textAlign and originX for proper
         * experience.
         * some interesting link for the future
         * https://www.w3.org/International/questions/qa-bidi-unicode-controls
         * @since 4.5.0
         * @type {String} 'ltr|rtl'
         * @default
         */
        direction: "ltr",
        /**
         * Array of properties that define a style unit (of 'styles').
         * @type {Array}
         * @default
         */
        _styleProperties: [
          "stroke",
          "strokeWidth",
          "fill",
          "fontFamily",
          "fontSize",
          "fontWeight",
          "fontStyle",
          "underline",
          "overline",
          "linethrough",
          "deltaY",
          "textBackgroundColor"
        ],
        /**
         * contains characters bounding boxes
         */
        __charBounds: [],
        /**
         * use this size when measuring text. To avoid IE11 rounding errors
         * @type {Number}
         * @default
         * @readonly
         * @private
         */
        CACHE_FONT_SIZE: 400,
        /**
         * contains the min text width to avoid getting 0
         * @type {Number}
         * @default
         */
        MIN_TEXT_WIDTH: 2,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        initialize: function(e, r) {
          this.styles = r ? r.styles || {} : {}, this.text = e, this.__skipDimension = !0, this.callSuper("initialize", r), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
        },
        /**
         * If text has a path, it will add the extra information needed
         * for path and text calculations
         * @return {fabric.Text} thisArg
         */
        setPathInfo: function() {
          var e = this.path;
          e && (e.segmentsInfo = i.util.getPathSegmentsInfo(e.path));
        },
        /**
         * Return a context for measurement of text string.
         * if created it gets stored for reuse
         * this is for internal use, please do not use it
         * @private
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        getMeasuringContext: function() {
          return i._measuringContext || (i._measuringContext = this.canvas && this.canvas.contextCache || i.util.createCanvasElement().getContext("2d")), i._measuringContext;
        },
        /**
         * @private
         * Divides text into lines of text and lines of graphemes.
         */
        _splitText: function() {
          var e = this._splitTextIntoLines(this.text);
          return this.textLines = e.lines, this._textLines = e.graphemeLines, this._unwrappedTextLines = e._unwrappedLines, this._text = e.graphemeText, e;
        },
        /**
         * Initialize or update text dimensions.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         */
        initDimensions: function() {
          this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
        },
        /**
         * Enlarge space boxes and shift the others
         */
        enlargeSpaces: function() {
          for (var e, r, t, s, l, n, h, f = 0, g = this._textLines.length; f < g; f++)
            if (!(this.textAlign !== "justify" && (f === g - 1 || this.isEndOfWrapping(f))) && (s = 0, l = this._textLines[f], r = this.getLineWidth(f), r < this.width && (h = this.textLines[f].match(this._reSpacesAndTabs)))) {
              t = h.length, e = (this.width - r) / t;
              for (var p = 0, m = l.length; p <= m; p++)
                n = this.__charBounds[f][p], this._reSpaceAndTab.test(l[p]) ? (n.width += e, n.kernedWidth += e, n.left += s, s += e) : n.left += s;
            }
        },
        /**
         * Detect if the text line is ended with an hard break
         * text and itext do not have wrapping, return false
         * @return {Boolean}
         */
        isEndOfWrapping: function(e) {
          return e === this._textLines.length - 1;
        },
        /**
         * Detect if a line has a linebreak and so we need to account for it when moving
         * and counting style.
         * It return always for text and Itext.
         * @return Number
         */
        missingNewlineOffset: function() {
          return 1;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of text object
         */
        toString: function() {
          return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @param {Object} dim.x width of object to be cached
         * @param {Object} dim.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var e = this.callSuper("_getCacheCanvasDimensions"), r = this.fontSize;
          return e.width += r * e.zoomX, e.height += r * e.zoomY, e;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(e) {
          var r = this.path;
          r && !r.isNotVisible() && r._render(e), this._setTextStyles(e), this._renderTextLinesBackground(e), this._renderTextDecoration(e, "underline"), this._renderText(e), this._renderTextDecoration(e, "overline"), this._renderTextDecoration(e, "linethrough");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderText: function(e) {
          this.paintFirst === "stroke" ? (this._renderTextStroke(e), this._renderTextFill(e)) : (this._renderTextFill(e), this._renderTextStroke(e));
        },
        /**
         * Set the font parameter of the context with the object properties or with charStyle
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [charStyle] object with font style properties
         * @param {String} [charStyle.fontFamily] Font Family
         * @param {Number} [charStyle.fontSize] Font size in pixels. ( without px suffix )
         * @param {String} [charStyle.fontWeight] Font weight
         * @param {String} [charStyle.fontStyle] Font style (italic|normal)
         */
        _setTextStyles: function(e, r, t) {
          if (e.textBaseline = "alphabetical", this.path)
            switch (this.pathAlign) {
              case "center":
                e.textBaseline = "middle";
                break;
              case "ascender":
                e.textBaseline = "top";
                break;
              case "descender":
                e.textBaseline = "bottom";
                break;
            }
          e.font = this._getFontDeclaration(r, t);
        },
        /**
         * calculate and return the text Width measuring each line.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {Number} Maximum width of fabric.Text object
         */
        calcTextWidth: function() {
          for (var e = this.getLineWidth(0), r = 1, t = this._textLines.length; r < t; r++) {
            var s = this.getLineWidth(r);
            s > e && (e = s);
          }
          return e;
        },
        /**
         * @private
         * @param {String} method Method name ("fillText" or "strokeText")
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} line Text to render
         * @param {Number} left Left position of text
         * @param {Number} top Top position of text
         * @param {Number} lineIndex Index of a line in a text
         */
        _renderTextLine: function(e, r, t, s, l, n) {
          this._renderChars(e, r, t, s, l, n);
        },
        /**
         * Renders the text background for lines, taking care of style
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextLinesBackground: function(e) {
          if (!(!this.textBackgroundColor && !this.styleHas("textBackgroundColor"))) {
            for (var r, t, s = e.fillStyle, l, n, h = this._getLeftOffset(), f = this._getTopOffset(), g = 0, p = 0, m, C, w = this.path, x, k = 0, L = this._textLines.length; k < L; k++) {
              if (r = this.getHeightOfLine(k), !this.textBackgroundColor && !this.styleHas("textBackgroundColor", k)) {
                f += r;
                continue;
              }
              l = this._textLines[k], t = this._getLineLeftOffset(k), p = 0, g = 0, n = this.getValueOfPropertyAt(k, 0, "textBackgroundColor");
              for (var Y = 0, K = l.length; Y < K; Y++)
                m = this.__charBounds[k][Y], C = this.getValueOfPropertyAt(k, Y, "textBackgroundColor"), w ? (e.save(), e.translate(m.renderLeft, m.renderTop), e.rotate(m.angle), e.fillStyle = C, C && e.fillRect(
                  -m.width / 2,
                  -r / this.lineHeight * (1 - this._fontSizeFraction),
                  m.width,
                  r / this.lineHeight
                ), e.restore()) : C !== n ? (x = h + t + g, this.direction === "rtl" && (x = this.width - x - p), e.fillStyle = n, n && e.fillRect(
                  x,
                  f,
                  p,
                  r / this.lineHeight
                ), g = m.left, p = m.width, n = C) : p += m.kernedWidth;
              C && !w && (x = h + t + g, this.direction === "rtl" && (x = this.width - x - p), e.fillStyle = C, e.fillRect(
                x,
                f,
                p,
                r / this.lineHeight
              )), f += r;
            }
            e.fillStyle = s, this._removeShadow(e);
          }
        },
        /**
         * @private
         * @param {Object} decl style declaration for cache
         * @param {String} decl.fontFamily fontFamily
         * @param {String} decl.fontStyle fontStyle
         * @param {String} decl.fontWeight fontWeight
         * @return {Object} reference to cache
         */
        getFontCache: function(e) {
          var r = e.fontFamily.toLowerCase();
          i.charWidthsCache[r] || (i.charWidthsCache[r] = {});
          var t = i.charWidthsCache[r], s = e.fontStyle.toLowerCase() + "_" + (e.fontWeight + "").toLowerCase();
          return t[s] || (t[s] = {}), t[s];
        },
        /**
         * measure and return the width of a single character.
         * possibly overridden to accommodate different measure logic or
         * to hook some external lib for character measurement
         * @private
         * @param {String} _char, char to be measured
         * @param {Object} charStyle style of char to be measured
         * @param {String} [previousChar] previous char
         * @param {Object} [prevCharStyle] style of previous char
         */
        _measureChar: function(e, r, t, s) {
          var l = this.getFontCache(r), n = this._getFontDeclaration(r), h = this._getFontDeclaration(s), f = t + e, g = n === h, p, m, C, w = r.fontSize / this.CACHE_FONT_SIZE, x;
          if (t && l[t] !== void 0 && (C = l[t]), l[e] !== void 0 && (x = p = l[e]), g && l[f] !== void 0 && (m = l[f], x = m - C), p === void 0 || C === void 0 || m === void 0) {
            var k = this.getMeasuringContext();
            this._setTextStyles(k, r, !0);
          }
          return p === void 0 && (x = p = k.measureText(e).width, l[e] = p), C === void 0 && g && t && (C = k.measureText(t).width, l[t] = C), g && m === void 0 && (m = k.measureText(f).width, l[f] = m, x = m - C), { width: p * w, kernedWidth: x * w };
        },
        /**
         * Computes height of character at given position
         * @param {Number} line the line index number
         * @param {Number} _char the character index number
         * @return {Number} fontSize of the character
         */
        getHeightOfChar: function(e, r) {
          return this.getValueOfPropertyAt(e, r, "fontSize");
        },
        /**
         * measure a text line measuring all characters.
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        measureLine: function(e) {
          var r = this._measureLine(e);
          return this.charSpacing !== 0 && (r.width -= this._getWidthOfCharSpacing()), r.width < 0 && (r.width = 0), r;
        },
        /**
         * measure every grapheme of a line, populating __charBounds
         * @param {Number} lineIndex
         * @return {Object} object.width total width of characters
         * @return {Object} object.widthOfSpaces length of chars that match this._reSpacesAndTabs
         */
        _measureLine: function(e) {
          var r = 0, t, s, l = this._textLines[e], n, h, f = 0, g = new Array(l.length), p = 0, m, C, w = this.path, x = this.pathSide === "right";
          for (this.__charBounds[e] = g, t = 0; t < l.length; t++)
            s = l[t], h = this._getGraphemeBox(s, e, t, n), g[t] = h, r += h.kernedWidth, n = s;
          if (g[t] = {
            left: h ? h.left + h.width : 0,
            width: 0,
            kernedWidth: 0,
            height: this.fontSize
          }, w) {
            switch (C = w.segmentsInfo[w.segmentsInfo.length - 1].length, m = i.util.getPointOnPath(w.path, 0, w.segmentsInfo), m.x += w.pathOffset.x, m.y += w.pathOffset.y, this.textAlign) {
              case "left":
                p = x ? C - r : 0;
                break;
              case "center":
                p = (C - r) / 2;
                break;
              case "right":
                p = x ? 0 : C - r;
                break;
            }
            for (p += this.pathStartOffset * (x ? -1 : 1), t = x ? l.length - 1 : 0; x ? t >= 0 : t < l.length; x ? t-- : t++)
              h = g[t], p > C ? p %= C : p < 0 && (p += C), this._setGraphemeOnPath(p, h, m), p += h.kernedWidth;
          }
          return { width: r, numOfSpaces: f };
        },
        /**
         * Calculate the angle  and the left,top position of the char that follow a path.
         * It appends it to graphemeInfo to be reused later at rendering
         * @private
         * @param {Number} positionInPath to be measured
         * @param {Object} graphemeInfo current grapheme box information
         * @param {Object} startingPoint position of the point
         */
        _setGraphemeOnPath: function(e, r, t) {
          var s = e + r.kernedWidth / 2, l = this.path, n = i.util.getPointOnPath(l.path, s, l.segmentsInfo);
          r.renderLeft = n.x - t.x, r.renderTop = n.y - t.y, r.angle = n.angle + (this.pathSide === "right" ? Math.PI : 0);
        },
        /**
         * Measure and return the info of a single grapheme.
         * needs the the info of previous graphemes already filled
         * @private
         * @param {String} grapheme to be measured
         * @param {Number} lineIndex index of the line where the char is
         * @param {Number} charIndex position in the line
         * @param {String} [prevGrapheme] character preceding the one to be measured
         */
        _getGraphemeBox: function(e, r, t, s, l) {
          var n = this.getCompleteStyleDeclaration(r, t), h = s ? this.getCompleteStyleDeclaration(r, t - 1) : {}, f = this._measureChar(e, n, s, h), g = f.kernedWidth, p = f.width, m;
          this.charSpacing !== 0 && (m = this._getWidthOfCharSpacing(), p += m, g += m);
          var C = {
            width: p,
            left: 0,
            height: n.fontSize,
            kernedWidth: g,
            deltaY: n.deltaY
          };
          if (t > 0 && !l) {
            var w = this.__charBounds[r][t - 1];
            C.left = w.left + w.width + f.kernedWidth - f.width;
          }
          return C;
        },
        /**
         * Calculate height of line at 'lineIndex'
         * @param {Number} lineIndex index of line to calculate
         * @return {Number}
         */
        getHeightOfLine: function(e) {
          if (this.__lineHeights[e])
            return this.__lineHeights[e];
          for (var r = this._textLines[e], t = this.getHeightOfChar(e, 0), s = 1, l = r.length; s < l; s++)
            t = Math.max(this.getHeightOfChar(e, s), t);
          return this.__lineHeights[e] = t * this.lineHeight * this._fontSizeMult;
        },
        /**
         * Calculate text box height
         */
        calcTextHeight: function() {
          for (var e, r = 0, t = 0, s = this._textLines.length; t < s; t++)
            e = this.getHeightOfLine(t), r += t === s - 1 ? e / this.lineHeight : e;
          return r;
        },
        /**
         * @private
         * @return {Number} Left offset
         */
        _getLeftOffset: function() {
          return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
        },
        /**
         * @private
         * @return {Number} Top offset
         */
        _getTopOffset: function() {
          return -this.height / 2;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} method Method name ("fillText" or "strokeText")
         */
        _renderTextCommon: function(e, r) {
          e.save();
          for (var t = 0, s = this._getLeftOffset(), l = this._getTopOffset(), n = 0, h = this._textLines.length; n < h; n++) {
            var f = this.getHeightOfLine(n), g = f / this.lineHeight, p = this._getLineLeftOffset(n);
            this._renderTextLine(
              r,
              e,
              this._textLines[n],
              s + p,
              l + t + g,
              n
            ), t += f;
          }
          e.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextFill: function(e) {
          !this.fill && !this.styleHas("fill") || this._renderTextCommon(e, "fillText");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextStroke: function(e) {
          (!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles() || (this.shadow && !this.shadow.affectStroke && this._removeShadow(e), e.save(), this._setLineDash(e, this.strokeDashArray), e.beginPath(), this._renderTextCommon(e, "strokeText"), e.closePath(), e.restore());
        },
        /**
         * @private
         * @param {String} method fillText or strokeText.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} line Content of the line, splitted in an array by grapheme
         * @param {Number} left
         * @param {Number} top
         * @param {Number} lineIndex
         */
        _renderChars: function(e, r, t, s, l, n) {
          var h = this.getHeightOfLine(n), f = this.textAlign.indexOf("justify") !== -1, g, p, m = "", C, w = 0, x, k = this.path, L = !f && this.charSpacing === 0 && this.isEmptyStyles(n) && !k, Y = this.direction === "ltr", K = this.direction === "ltr" ? 1 : -1, re, q = r.canvas.getAttribute("dir");
          if (r.save(), q !== this.direction && (r.canvas.setAttribute("dir", Y ? "ltr" : "rtl"), r.direction = Y ? "ltr" : "rtl", r.textAlign = Y ? "left" : "right"), l -= h * this._fontSizeFraction / this.lineHeight, L) {
            this._renderChar(e, r, n, 0, t.join(""), s, l, h), r.restore();
            return;
          }
          for (var ee = 0, se = t.length - 1; ee <= se; ee++)
            x = ee === se || this.charSpacing || k, m += t[ee], C = this.__charBounds[n][ee], w === 0 ? (s += K * (C.kernedWidth - C.width), w += C.width) : w += C.kernedWidth, f && !x && this._reSpaceAndTab.test(t[ee]) && (x = !0), x || (g = g || this.getCompleteStyleDeclaration(n, ee), p = this.getCompleteStyleDeclaration(n, ee + 1), x = this._hasStyleChanged(g, p)), x && (k ? (r.save(), r.translate(C.renderLeft, C.renderTop), r.rotate(C.angle), this._renderChar(e, r, n, ee, m, -w / 2, 0, h), r.restore()) : (re = s, this._renderChar(e, r, n, ee, m, re, l, h)), m = "", g = p, s += K * w, w = 0);
          r.restore();
        },
        /**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {fabric.Gradient} filler a fabric gradient instance
         * @return {CanvasPattern} a pattern to use as fill/stroke style
         */
        _applyPatternGradientTransformText: function(e) {
          var r = i.util.createCanvasElement(), t, s = this.width + this.strokeWidth, l = this.height + this.strokeWidth;
          return r.width = s, r.height = l, t = r.getContext("2d"), t.beginPath(), t.moveTo(0, 0), t.lineTo(s, 0), t.lineTo(s, l), t.lineTo(0, l), t.closePath(), t.translate(s / 2, l / 2), t.fillStyle = e.toLive(t), this._applyPatternGradientTransform(t, e), t.fill(), t.createPattern(r, "no-repeat");
        },
        handleFiller: function(e, r, t) {
          var s, l;
          return t.toLive ? t.gradientUnits === "percentage" || t.gradientTransform || t.patternTransform ? (s = -this.width / 2, l = -this.height / 2, e.translate(s, l), e[r] = this._applyPatternGradientTransformText(t), { offsetX: s, offsetY: l }) : (e[r] = t.toLive(e, this), this._applyPatternGradientTransform(e, t)) : (e[r] = t, { offsetX: 0, offsetY: 0 });
        },
        _setStrokeStyles: function(e, r) {
          return e.lineWidth = r.strokeWidth, e.lineCap = this.strokeLineCap, e.lineDashOffset = this.strokeDashOffset, e.lineJoin = this.strokeLineJoin, e.miterLimit = this.strokeMiterLimit, this.handleFiller(e, "strokeStyle", r.stroke);
        },
        _setFillStyles: function(e, r) {
          return this.handleFiller(e, "fillStyle", r.fill);
        },
        /**
         * @private
         * @param {String} method
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {String} _char
         * @param {Number} left Left coordinate
         * @param {Number} top Top coordinate
         * @param {Number} lineHeight Height of the line
         */
        _renderChar: function(e, r, t, s, l, n, h) {
          var f = this._getStyleDeclaration(t, s), g = this.getCompleteStyleDeclaration(t, s), p = e === "fillText" && g.fill, m = e === "strokeText" && g.stroke && g.strokeWidth, C, w;
          !m && !p || (r.save(), p && (C = this._setFillStyles(r, g)), m && (w = this._setStrokeStyles(r, g)), r.font = this._getFontDeclaration(g), f && f.textBackgroundColor && this._removeShadow(r), f && f.deltaY && (h += f.deltaY), p && r.fillText(l, n - C.offsetX, h - C.offsetY), m && r.strokeText(l, n - w.offsetX, h - w.offsetY), r.restore());
        },
        /**
         * Turns the character into a 'superior figure' (i.e. 'superscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSuperscript: function(e, r) {
          return this._setScript(e, r, this.superscript);
        },
        /**
         * Turns the character into an 'inferior figure' (i.e. 'subscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSubscript: function(e, r) {
          return this._setScript(e, r, this.subscript);
        },
        /**
         * Applies 'schema' at given position
         * @private
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @param {Number} schema
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        _setScript: function(e, r, t) {
          var s = this.get2DCursorLocation(e, !0), l = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "fontSize"), n = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "deltaY"), h = { fontSize: l * t.size, deltaY: n + l * t.baseline };
          return this.setSelectionStyles(h, e, r), this;
        },
        /**
         * @private
         * @param {Object} prevStyle
         * @param {Object} thisStyle
         */
        _hasStyleChanged: function(e, r) {
          return e.fill !== r.fill || e.stroke !== r.stroke || e.strokeWidth !== r.strokeWidth || e.fontSize !== r.fontSize || e.fontFamily !== r.fontFamily || e.fontWeight !== r.fontWeight || e.fontStyle !== r.fontStyle || e.deltaY !== r.deltaY;
        },
        /**
         * @private
         * @param {Object} prevStyle
         * @param {Object} thisStyle
         */
        _hasStyleChangedForSvg: function(e, r) {
          return this._hasStyleChanged(e, r) || e.overline !== r.overline || e.underline !== r.underline || e.linethrough !== r.linethrough;
        },
        /**
         * @private
         * @param {Number} lineIndex index text line
         * @return {Number} Line left offset
         */
        _getLineLeftOffset: function(e) {
          var r = this.getLineWidth(e), t = this.width - r, s = this.textAlign, l = this.direction, h, n = 0, h = this.isEndOfWrapping(e);
          return s === "justify" || s === "justify-center" && !h || s === "justify-right" && !h || s === "justify-left" && !h ? 0 : (s === "center" && (n = t / 2), s === "right" && (n = t), s === "justify-center" && (n = t / 2), s === "justify-right" && (n = t), l === "rtl" && (n -= t), n);
        },
        /**
         * @private
         */
        _clearCache: function() {
          this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
        },
        /**
         * @private
         */
        _shouldClearDimensionCache: function() {
          var e = this._forceClearCache;
          return e || (e = this.hasStateChanged("_dimensionAffectingProps")), e && (this.dirty = !0, this._forceClearCache = !1), e;
        },
        /**
         * Measure a single line given its index. Used to calculate the initial
         * text bounding box. The values are calculated and stored in __lineWidths cache.
         * @private
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        getLineWidth: function(e) {
          if (this.__lineWidths[e] !== void 0)
            return this.__lineWidths[e];
          var r = this.measureLine(e), t = r.width;
          return this.__lineWidths[e] = t, t;
        },
        _getWidthOfCharSpacing: function() {
          return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
        },
        /**
         * Retrieves the value of property at given character position
         * @param {Number} lineIndex the line number
         * @param {Number} charIndex the character number
         * @param {String} property the property name
         * @returns the value of 'property'
         */
        getValueOfPropertyAt: function(e, r, t) {
          var s = this._getStyleDeclaration(e, r);
          return s && typeof s[t] < "u" ? s[t] : this[t];
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextDecoration: function(e, r) {
          if (!(!this[r] && !this.styleHas(r))) {
            for (var t, s, l, n, h, f, g, p, m = this._getLeftOffset(), C = this._getTopOffset(), w, x, k, L, Y, K, re, q, ee = this.path, se = this._getWidthOfCharSpacing(), ae = this.offsets[r], W = 0, b = this._textLines.length; W < b; W++) {
              if (t = this.getHeightOfLine(W), !this[r] && !this.styleHas(r, W)) {
                C += t;
                continue;
              }
              g = this._textLines[W], K = t / this.lineHeight, n = this._getLineLeftOffset(W), x = 0, k = 0, p = this.getValueOfPropertyAt(W, 0, r), q = this.getValueOfPropertyAt(W, 0, "fill"), w = C + K * (1 - this._fontSizeFraction), s = this.getHeightOfChar(W, 0), h = this.getValueOfPropertyAt(W, 0, "deltaY");
              for (var A = 0, P = g.length; A < P; A++)
                if (L = this.__charBounds[W][A], Y = this.getValueOfPropertyAt(W, A, r), re = this.getValueOfPropertyAt(W, A, "fill"), l = this.getHeightOfChar(W, A), f = this.getValueOfPropertyAt(W, A, "deltaY"), ee && Y && re)
                  e.save(), e.fillStyle = q, e.translate(L.renderLeft, L.renderTop), e.rotate(L.angle), e.fillRect(
                    -L.kernedWidth / 2,
                    ae * l + f,
                    L.kernedWidth,
                    this.fontSize / 15
                  ), e.restore();
                else if ((Y !== p || re !== q || l !== s || f !== h) && k > 0) {
                  var O = m + n + x;
                  this.direction === "rtl" && (O = this.width - O - k), p && q && (e.fillStyle = q, e.fillRect(
                    O,
                    w + ae * s + h,
                    k,
                    this.fontSize / 15
                  )), x = L.left, k = L.width, p = Y, q = re, s = l, h = f;
                } else
                  k += L.kernedWidth;
              var O = m + n + x;
              this.direction === "rtl" && (O = this.width - O - k), e.fillStyle = re, Y && re && e.fillRect(
                O,
                w + ae * s + h,
                k - se,
                this.fontSize / 15
              ), C += t;
            }
            this._removeShadow(e);
          }
        },
        /**
         * return font declaration string for canvas context
         * @param {Object} [styleObject] object
         * @returns {String} font declaration formatted for canvas context.
         */
        _getFontDeclaration: function(e, r) {
          var t = e || this, s = this.fontFamily, l = i.Text.genericFonts.indexOf(s.toLowerCase()) > -1, n = s === void 0 || s.indexOf("'") > -1 || s.indexOf(",") > -1 || s.indexOf('"') > -1 || l ? t.fontFamily : '"' + t.fontFamily + '"';
          return [
            // node-canvas needs "weight style", while browsers need "style weight"
            // verify if this can be fixed in JSDOM
            i.isLikelyNode ? t.fontWeight : t.fontStyle,
            i.isLikelyNode ? t.fontStyle : t.fontWeight,
            r ? this.CACHE_FONT_SIZE + "px" : t.fontSize + "px",
            n
          ].join(" ");
        },
        /**
         * Renders text instance on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(e) {
          this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", e)));
        },
        /**
         * Returns the text as an array of lines.
         * @param {String} text text to split
         * @returns {Array} Lines in the text
         */
        _splitTextIntoLines: function(e) {
          for (var r = e.split(this._reNewline), t = new Array(r.length), s = [`
`], l = [], n = 0; n < r.length; n++)
            t[n] = i.util.string.graphemeSplit(r[n]), l = l.concat(t[n], s);
          return l.pop(), { _unwrappedLines: t, lines: r, graphemeText: l, graphemeLines: t };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(e) {
          var r = o.concat(e), t = this.callSuper("toObject", r);
          return t.styles = a(this.styles, !0), t.path && (t.path = this.path.toObject()), t;
        },
        /**
         * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
         * @param {String|Object} key Property name or object (if object, iterate over the object properties)
         * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        set: function(e, r) {
          this.callSuper("set", e, r);
          var t = !1, s = !1;
          if (typeof e == "object")
            for (var l in e)
              l === "path" && this.setPathInfo(), t = t || this._dimensionAffectingProps.indexOf(l) !== -1, s = s || l === "path";
          else
            t = this._dimensionAffectingProps.indexOf(e) !== -1, s = e === "path";
          return s && this.setPathInfo(), t && (this.initDimensions(), this.setCoords()), this;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity
         */
        complexity: function() {
          return 1;
        }
      }
    ), i.Text.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat(
      "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")
    ), i.Text.DEFAULT_SVG_FONT_SIZE = 16, i.Text.fromElement = function(e, r, t) {
      if (!e)
        return r(null);
      var s = i.parseAttributes(e, i.Text.ATTRIBUTE_NAMES), l = s.textAnchor || "left";
      if (t = i.util.object.extend(t ? a(t) : {}, s), t.top = t.top || 0, t.left = t.left || 0, s.textDecoration) {
        var n = s.textDecoration;
        n.indexOf("underline") !== -1 && (t.underline = !0), n.indexOf("overline") !== -1 && (t.overline = !0), n.indexOf("line-through") !== -1 && (t.linethrough = !0), delete t.textDecoration;
      }
      "dx" in s && (t.left += s.dx), "dy" in s && (t.top += s.dy), "fontSize" in t || (t.fontSize = i.Text.DEFAULT_SVG_FONT_SIZE);
      var h = "";
      "textContent" in e ? h = e.textContent : "firstChild" in e && e.firstChild !== null && "data" in e.firstChild && e.firstChild.data !== null && (h = e.firstChild.data), h = h.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
      var f = t.strokeWidth;
      t.strokeWidth = 0;
      var g = new i.Text(h, t), p = g.getScaledHeight() / g.height, m = (g.height + g.strokeWidth) * g.lineHeight - g.height, C = m * p, w = g.getScaledHeight() + C, x = 0;
      l === "center" && (x = g.getScaledWidth() / 2), l === "right" && (x = g.getScaledWidth()), g.set({
        left: g.left - x,
        top: g.top - (w - g.fontSize * (0.07 + g._fontSizeFraction)) / g.lineHeight,
        strokeWidth: typeof f < "u" ? f : 1
      }), r(g);
    }, i.Text.fromObject = function(e, r) {
      var t = a(e), s = e.path;
      return delete t.path, i.Object._fromObject("Text", t, function(l) {
        s ? i.Object._fromObject("Path", s, function(n) {
          l.set("path", n), r(l);
        }, "path") : r(l);
      }, "text");
    }, i.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], i.util.createAccessors && i.util.createAccessors(i.Text);
  }(d), function() {
    c.util.object.extend(
      c.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns true if object has no styling or no styling in a line
         * @param {Number} lineIndex , lineIndex is on wrapped lines.
         * @return {Boolean}
         */
        isEmptyStyles: function(u) {
          if (!this.styles || typeof u < "u" && !this.styles[u])
            return !0;
          var i = typeof u > "u" ? this.styles : { line: this.styles[u] };
          for (var a in i)
            for (var o in i[a])
              for (var e in i[a][o])
                return !1;
          return !0;
        },
        /**
         * Returns true if object has a style property or has it ina specified line
         * This function is used to detect if a text will use a particular property or not.
         * @param {String} property to check for
         * @param {Number} lineIndex to check the style on
         * @return {Boolean}
         */
        styleHas: function(u, i) {
          if (!this.styles || !u || u === "" || typeof i < "u" && !this.styles[i])
            return !1;
          var a = typeof i > "u" ? this.styles : { 0: this.styles[i] };
          for (var o in a)
            for (var e in a[o])
              if (typeof a[o][e][u] < "u")
                return !0;
          return !1;
        },
        /**
         * Check if characters in a text have a value for a property
         * whose value matches the textbox's value for that property.  If so,
         * the character-level property is deleted.  If the character
         * has no other properties, then it is also deleted.  Finally,
         * if the line containing that character has no other characters
         * then it also is deleted.
         *
         * @param {string} property The property to compare between characters and text.
         */
        cleanStyle: function(u) {
          if (!this.styles || !u || u === "")
            return !1;
          var i = this.styles, a = 0, o, e, r = !0, t = 0, s;
          for (var l in i) {
            o = 0;
            for (var n in i[l]) {
              var s = i[l][n], h = s.hasOwnProperty(u);
              a++, h ? (e ? s[u] !== e && (r = !1) : e = s[u], s[u] === this[u] && delete s[u]) : r = !1, Object.keys(s).length !== 0 ? o++ : delete i[l][n];
            }
            o === 0 && delete i[l];
          }
          for (var f = 0; f < this._textLines.length; f++)
            t += this._textLines[f].length;
          r && a === t && (this[u] = e, this.removeStyle(u));
        },
        /**
         * Remove a style property or properties from all individual character styles
         * in a text object.  Deletes the character style object if it contains no other style
         * props.  Deletes a line style object if it contains no other character styles.
         *
         * @param {String} props The property to remove from character styles.
         */
        removeStyle: function(u) {
          if (!(!this.styles || !u || u === "")) {
            var i = this.styles, a, o, e;
            for (o in i) {
              a = i[o];
              for (e in a)
                delete a[e][u], Object.keys(a[e]).length === 0 && delete a[e];
              Object.keys(a).length === 0 && delete i[o];
            }
          }
        },
        /**
         * @private
         */
        _extendStyles: function(u, i) {
          var a = this.get2DCursorLocation(u);
          this._getLineStyle(a.lineIndex) || this._setLineStyle(a.lineIndex), this._getStyleDeclaration(a.lineIndex, a.charIndex) || this._setStyleDeclaration(a.lineIndex, a.charIndex, {}), c.util.object.extend(this._getStyleDeclaration(a.lineIndex, a.charIndex), i);
        },
        /**
         * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
         * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
         * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. useful to manage styles.
         */
        get2DCursorLocation: function(u, i) {
          typeof u > "u" && (u = this.selectionStart);
          for (var a = i ? this._unwrappedTextLines : this._textLines, o = a.length, e = 0; e < o; e++) {
            if (u <= a[e].length)
              return {
                lineIndex: e,
                charIndex: u
              };
            u -= a[e].length + this.missingNewlineOffset(e);
          }
          return {
            lineIndex: e - 1,
            charIndex: a[e - 1].length < u ? a[e - 1].length : u
          };
        },
        /**
         * Gets style of a current selection/cursor (at the start position)
         * if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @param {Boolean} [complete] get full style or not
         * @return {Array} styles an array with one, zero or more Style objects
         */
        getSelectionStyles: function(u, i, a) {
          typeof u > "u" && (u = this.selectionStart || 0), typeof i > "u" && (i = this.selectionEnd || u);
          for (var o = [], e = u; e < i; e++)
            o.push(this.getStyleAtPosition(e, a));
          return o;
        },
        /**
         * Gets style of a current selection/cursor position
         * @param {Number} position  to get styles at
         * @param {Boolean} [complete] full style if true
         * @return {Object} style Style object at a specified index
         * @private
         */
        getStyleAtPosition: function(u, i) {
          var a = this.get2DCursorLocation(u), o = i ? this.getCompleteStyleDeclaration(a.lineIndex, a.charIndex) : this._getStyleDeclaration(a.lineIndex, a.charIndex);
          return o || {};
        },
        /**
         * Sets style of a current selection, if no selection exist, do not set anything.
         * @param {Object} [styles] Styles object
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @return {fabric.IText} thisArg
         * @chainable
         */
        setSelectionStyles: function(u, i, a) {
          typeof i > "u" && (i = this.selectionStart || 0), typeof a > "u" && (a = this.selectionEnd || i);
          for (var o = i; o < a; o++)
            this._extendStyles(o, u);
          return this._forceClearCache = !0, this;
        },
        /**
         * get the reference, not a clone, of the style object for a given character
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @return {Object} style object
         */
        _getStyleDeclaration: function(u, i) {
          var a = this.styles && this.styles[u];
          return a ? a[i] : null;
        },
        /**
         * return a new object that contains all the style property for a character
         * the object returned is newly created
         * @param {Number} lineIndex of the line where the character is
         * @param {Number} charIndex position of the character on the line
         * @return {Object} style object
         */
        getCompleteStyleDeclaration: function(u, i) {
          for (var a = this._getStyleDeclaration(u, i) || {}, o = {}, e, r = 0; r < this._styleProperties.length; r++)
            e = this._styleProperties[r], o[e] = typeof a[e] > "u" ? this[e] : a[e];
          return o;
        },
        /**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {Object} style
         * @private
         */
        _setStyleDeclaration: function(u, i, a) {
          this.styles[u][i] = a;
        },
        /**
         *
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @private
         */
        _deleteStyleDeclaration: function(u, i) {
          delete this.styles[u][i];
        },
        /**
         * @param {Number} lineIndex
         * @return {Boolean} if the line exists or not
         * @private
         */
        _getLineStyle: function(u) {
          return !!this.styles[u];
        },
        /**
         * Set the line style to an empty object so that is initialized
         * @param {Number} lineIndex
         * @private
         */
        _setLineStyle: function(u) {
          this.styles[u] = {};
        },
        /**
         * @param {Number} lineIndex
         * @private
         */
        _deleteLineStyle: function(u) {
          delete this.styles[u];
        }
      }
    );
  }(), function() {
    function u(i) {
      i.textDecoration && (i.textDecoration.indexOf("underline") > -1 && (i.underline = !0), i.textDecoration.indexOf("line-through") > -1 && (i.linethrough = !0), i.textDecoration.indexOf("overline") > -1 && (i.overline = !0), delete i.textDecoration);
    }
    c.IText = c.util.createClass(
      c.Text,
      c.Observable,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "i-text",
        /**
         * Index where text selection starts (or where cursor is when there is no selection)
         * @type Number
         * @default
         */
        selectionStart: 0,
        /**
         * Index where text selection ends
         * @type Number
         * @default
         */
        selectionEnd: 0,
        /**
         * Color of text selection
         * @type String
         * @default
         */
        selectionColor: "rgba(17,119,255,0.3)",
        /**
         * Indicates whether text is in editing mode
         * @type Boolean
         * @default
         */
        isEditing: !1,
        /**
         * Indicates whether a text can be edited
         * @type Boolean
         * @default
         */
        editable: !0,
        /**
         * Border color of text object while it's in editing mode
         * @type String
         * @default
         */
        editingBorderColor: "rgba(102,153,255,0.25)",
        /**
         * Width of cursor (in px)
         * @type Number
         * @default
         */
        cursorWidth: 2,
        /**
         * Color of text cursor color in editing mode.
         * if not set (default) will take color from the text.
         * if set to a color value that fabric can understand, it will
         * be used instead of the color of the text at the current position.
         * @type String
         * @default
         */
        cursorColor: "",
        /**
         * Delay between cursor blink (in ms)
         * @type Number
         * @default
         */
        cursorDelay: 1e3,
        /**
         * Duration of cursor fadein (in ms)
         * @type Number
         * @default
         */
        cursorDuration: 600,
        /**
         * Indicates whether internal text char widths can be cached
         * @type Boolean
         * @default
         */
        caching: !0,
        /**
         * DOM container to append the hiddenTextarea.
         * An alternative to attaching to the document.body.
         * Useful to reduce laggish redraw of the full document.body tree and
         * also with modals event capturing that won't let the textarea take focus.
         * @type HTMLElement
         * @default
         */
        hiddenTextareaContainer: null,
        /**
         * @private
         */
        _reSpace: /\s|\n/,
        /**
         * @private
         */
        _currentCursorOpacity: 0,
        /**
         * @private
         */
        _selectionDirection: null,
        /**
         * @private
         */
        _abortCursorAnimation: !1,
        /**
         * @private
         */
        __widthOfSpace: [],
        /**
         * Helps determining when the text is in composition, so that the cursor
         * rendering is altered.
         */
        inCompositionMode: !1,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.IText} thisArg
         */
        initialize: function(i, a) {
          this.callSuper("initialize", i, a), this.initBehavior();
        },
        /**
         * Sets selection start (left boundary of a selection)
         * @param {Number} index Index to set selection start to
         */
        setSelectionStart: function(i) {
          i = Math.max(i, 0), this._updateAndFire("selectionStart", i);
        },
        /**
         * Sets selection end (right boundary of a selection)
         * @param {Number} index Index to set selection end to
         */
        setSelectionEnd: function(i) {
          i = Math.min(i, this.text.length), this._updateAndFire("selectionEnd", i);
        },
        /**
         * @private
         * @param {String} property 'selectionStart' or 'selectionEnd'
         * @param {Number} index new position of property
         */
        _updateAndFire: function(i, a) {
          this[i] !== a && (this._fireSelectionChanged(), this[i] = a), this._updateTextarea();
        },
        /**
         * Fires the even of selection changed
         * @private
         */
        _fireSelectionChanged: function() {
          this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
        },
        /**
         * Initialize text dimensions. Render all text on given context
         * or on a offscreen canvas to get the text width with measureText.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         * @private
         */
        initDimensions: function() {
          this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(i) {
          this.clearContextTop(), this.callSuper("render", i), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(i) {
          this.callSuper("_render", i);
        },
        /**
         * Prepare and clean the contextTop
         */
        clearContextTop: function(i) {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var a = this.canvas.contextTop, o = this.canvas.viewportTransform;
            a.save(), a.transform(o[0], o[1], o[2], o[3], o[4], o[5]), this.transform(a), this._clearTextArea(a), i || a.restore();
          }
        },
        /**
         * Renders cursor or selection (depending on what exists)
         * it does on the contextTop. If contextTop is not available, do nothing.
         */
        renderCursorOrSelection: function() {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var i = this._getCursorBoundaries(), a = this.canvas.contextTop;
            this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(i, a) : this.renderSelection(i, a), a.restore();
          }
        },
        _clearTextArea: function(i) {
          var a = this.width + 4, o = this.height + 4;
          i.clearRect(-a / 2, -o / 2, a, o);
        },
        /**
         * Returns cursor boundaries (left, top, leftOffset, topOffset)
         * @private
         * @param {Array} chars Array of characters
         * @param {String} typeOfBoundaries
         */
        _getCursorBoundaries: function(i) {
          typeof i > "u" && (i = this.selectionStart);
          var a = this._getLeftOffset(), o = this._getTopOffset(), e = this._getCursorBoundariesOffsets(i);
          return {
            left: a,
            top: o,
            leftOffset: e.left,
            topOffset: e.top
          };
        },
        /**
         * @private
         */
        _getCursorBoundariesOffsets: function(i) {
          if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
            return this.cursorOffsetCache;
          var a, o, e, r = 0, t = 0, s, l = this.get2DCursorLocation(i);
          e = l.charIndex, o = l.lineIndex;
          for (var n = 0; n < o; n++)
            r += this.getHeightOfLine(n);
          a = this._getLineLeftOffset(o);
          var h = this.__charBounds[o][e];
          return h && (t = h.left), this.charSpacing !== 0 && e === this._textLines[o].length && (t -= this._getWidthOfCharSpacing()), s = {
            top: r,
            left: a + (t > 0 ? t : 0)
          }, this.direction === "rtl" && (s.left *= -1), this.cursorOffsetCache = s, this.cursorOffsetCache;
        },
        /**
         * Renders cursor
         * @param {Object} boundaries
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderCursor: function(i, a) {
          var o = this.get2DCursorLocation(), e = o.lineIndex, r = o.charIndex > 0 ? o.charIndex - 1 : 0, t = this.getValueOfPropertyAt(e, r, "fontSize"), s = this.scaleX * this.canvas.getZoom(), l = this.cursorWidth / s, n = i.topOffset, h = this.getValueOfPropertyAt(e, r, "deltaY");
          n += (1 - this._fontSizeFraction) * this.getHeightOfLine(e) / this.lineHeight - t * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(i, a), a.fillStyle = this.cursorColor || this.getValueOfPropertyAt(e, r, "fill"), a.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, a.fillRect(
            i.left + i.leftOffset - l / 2,
            n + i.top + h,
            l,
            t
          );
        },
        /**
         * Renders text selection
         * @param {Object} boundaries Object with left/top/leftOffset/topOffset
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderSelection: function(i, a) {
          for (var o = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, e = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, r = this.textAlign.indexOf("justify") !== -1, t = this.get2DCursorLocation(o), s = this.get2DCursorLocation(e), l = t.lineIndex, n = s.lineIndex, h = t.charIndex < 0 ? 0 : t.charIndex, f = s.charIndex < 0 ? 0 : s.charIndex, g = l; g <= n; g++) {
            var p = this._getLineLeftOffset(g) || 0, m = this.getHeightOfLine(g), C = 0, w = 0, x = 0;
            if (g === l && (w = this.__charBounds[l][h].left), g >= l && g < n)
              x = r && !this.isEndOfWrapping(g) ? this.width : this.getLineWidth(g) || 5;
            else if (g === n)
              if (f === 0)
                x = this.__charBounds[n][f].left;
              else {
                var k = this._getWidthOfCharSpacing();
                x = this.__charBounds[n][f - 1].left + this.__charBounds[n][f - 1].width - k;
              }
            C = m, (this.lineHeight < 1 || g === n && this.lineHeight > 1) && (m /= this.lineHeight);
            var L = i.left + p + w, Y = x - w, K = m, re = 0;
            this.inCompositionMode ? (a.fillStyle = this.compositionColor || "black", K = 1, re = m) : a.fillStyle = this.selectionColor, this.direction === "rtl" && (L = this.width - L - Y), a.fillRect(
              L,
              i.top + i.topOffset + re,
              Y,
              K
            ), i.topOffset += C;
          }
        },
        /**
         * High level function to know the height of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns fontSize of char at the current cursor
         * Unused from the library, is for the end user
         * @return {Number} Character font size
         */
        getCurrentCharFontSize: function() {
          var i = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(i.l, i.c, "fontSize");
        },
        /**
         * High level function to know the color of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns color (fill) of char at the current cursor
         * if the text object has a pattern or gradient for filler, it will return that.
         * Unused by the library, is for the end user
         * @return {String | fabric.Gradient | fabric.Pattern} Character color (fill)
         */
        getCurrentCharColor: function() {
          var i = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(i.l, i.c, "fill");
        },
        /**
         * Returns the cursor position for the getCurrent.. functions
         * @private
         */
        _getCurrentCharIndex: function() {
          var i = this.get2DCursorLocation(this.selectionStart, !0), a = i.charIndex > 0 ? i.charIndex - 1 : 0;
          return { l: i.lineIndex, c: a };
        }
      }
    ), c.IText.fromObject = function(i, a) {
      if (u(i), i.styles)
        for (var o in i.styles)
          for (var e in i.styles[o])
            u(i.styles[o][e]);
      c.Object._fromObject("IText", i, a, "text");
    };
  }(), function() {
    var u = c.util.object.clone;
    c.util.object.extend(
      c.IText.prototype,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Initializes all the interactive behavior of IText
         */
        initBehavior: function() {
          this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        },
        onDeselect: function() {
          this.isEditing && this.exitEditing(), this.selected = !1;
        },
        /**
         * Initializes "added" event handler
         */
        initAddedHandler: function() {
          var i = this;
          this.on("added", function() {
            var a = i.canvas;
            a && (a._hasITextHandlers || (a._hasITextHandlers = !0, i._initCanvasHandlers(a)), a._iTextInstances = a._iTextInstances || [], a._iTextInstances.push(i));
          });
        },
        initRemovedHandler: function() {
          var i = this;
          this.on("removed", function() {
            var a = i.canvas;
            a && (a._iTextInstances = a._iTextInstances || [], c.util.removeFromArray(a._iTextInstances, i), a._iTextInstances.length === 0 && (a._hasITextHandlers = !1, i._removeCanvasHandlers(a)));
          });
        },
        /**
         * register canvas event to manage exiting on other instances
         * @private
         */
        _initCanvasHandlers: function(i) {
          i._mouseUpITextHandler = function() {
            i._iTextInstances && i._iTextInstances.forEach(function(a) {
              a.__isMousedown = !1;
            });
          }, i.on("mouse:up", i._mouseUpITextHandler);
        },
        /**
         * remove canvas event to manage exiting on other instances
         * @private
         */
        _removeCanvasHandlers: function(i) {
          i.off("mouse:up", i._mouseUpITextHandler);
        },
        /**
         * @private
         */
        _tick: function() {
          this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
        },
        /**
         * @private
         */
        _animateCursor: function(i, a, o, e) {
          var r;
          return r = {
            isAborted: !1,
            abort: function() {
              this.isAborted = !0;
            }
          }, i.animate("_currentCursorOpacity", a, {
            duration: o,
            onComplete: function() {
              r.isAborted || i[e]();
            },
            onChange: function() {
              i.canvas && i.selectionStart === i.selectionEnd && i.renderCursorOrSelection();
            },
            abort: function() {
              return r.isAborted;
            }
          }), r;
        },
        /**
         * @private
         */
        _onTickComplete: function() {
          var i = this;
          this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
            i._currentTickCompleteState = i._animateCursor(i, 0, this.cursorDuration / 2, "_tick");
          }, 100);
        },
        /**
         * Initializes delayed cursor
         */
        initDelayedCursor: function(i) {
          var a = this, o = i ? 0 : this.cursorDelay;
          this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
            a._tick();
          }, o);
        },
        /**
         * Aborts cursor animation and clears all timeouts
         */
        abortCursorAnimation: function() {
          var i = this._currentTickState || this._currentTickCompleteState, a = this.canvas;
          this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, i && a && a.clearContext(a.contextTop || a.contextContainer);
        },
        /**
         * Selects entire text
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectAll: function() {
          return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Returns selected text
         * @return {String}
         */
        getSelectedText: function() {
          return this._text.slice(this.selectionStart, this.selectionEnd).join("");
        },
        /**
         * Find new selection index representing start of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryLeft: function(i) {
          var a = 0, o = i - 1;
          if (this._reSpace.test(this._text[o]))
            for (; this._reSpace.test(this._text[o]); )
              a++, o--;
          for (; /\S/.test(this._text[o]) && o > -1; )
            a++, o--;
          return i - a;
        },
        /**
         * Find new selection index representing end of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryRight: function(i) {
          var a = 0, o = i;
          if (this._reSpace.test(this._text[o]))
            for (; this._reSpace.test(this._text[o]); )
              a++, o++;
          for (; /\S/.test(this._text[o]) && o < this._text.length; )
            a++, o++;
          return i + a;
        },
        /**
         * Find new selection index representing start of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryLeft: function(i) {
          for (var a = 0, o = i - 1; !/\n/.test(this._text[o]) && o > -1; )
            a++, o--;
          return i - a;
        },
        /**
         * Find new selection index representing end of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryRight: function(i) {
          for (var a = 0, o = i; !/\n/.test(this._text[o]) && o < this._text.length; )
            a++, o++;
          return i + a;
        },
        /**
         * Finds index corresponding to beginning or end of a word
         * @param {Number} selectionStart Index of a character
         * @param {Number} direction 1 or -1
         * @return {Number} Index of the beginning or end of a word
         */
        searchWordBoundary: function(i, a) {
          for (var o = this._text, e = this._reSpace.test(o[i]) ? i - 1 : i, r = o[e], t = c.reNonWord; !t.test(r) && e > 0 && e < o.length; )
            e += a, r = o[e];
          return t.test(r) && (e += a === 1 ? 0 : 1), e;
        },
        /**
         * Selects a word based on the index
         * @param {Number} selectionStart Index of a character
         */
        selectWord: function(i) {
          i = i || this.selectionStart;
          var a = this.searchWordBoundary(i, -1), o = this.searchWordBoundary(i, 1);
          this.selectionStart = a, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
        },
        /**
         * Selects a line based on the index
         * @param {Number} selectionStart Index of a character
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectLine: function(i) {
          i = i || this.selectionStart;
          var a = this.findLineBoundaryLeft(i), o = this.findLineBoundaryRight(i);
          return this.selectionStart = a, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Enters editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        enterEditing: function(i) {
          if (!(this.isEditing || !this.editable))
            return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(i), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
        },
        exitEditingOnOthers: function(i) {
          i._iTextInstances && i._iTextInstances.forEach(function(a) {
            a.selected = !1, a.isEditing && a.exitEditing();
          });
        },
        /**
         * Initializes "mousemove" event handler
         */
        initMouseMoveHandler: function() {
          this.canvas.on("mouse:move", this.mouseMoveHandler);
        },
        /**
         * @private
         */
        mouseMoveHandler: function(i) {
          if (!(!this.__isMousedown || !this.isEditing)) {
            var a = this.getSelectionStartFromPointer(i.e), o = this.selectionStart, e = this.selectionEnd;
            (a !== this.__selectionStartOnMouseDown || o === e) && (o === a || e === a) || (a > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = a) : (this.selectionStart = a, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== o || this.selectionEnd !== e) && (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
          }
        },
        /**
         * @private
         */
        _setEditingProps: function() {
          this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
        },
        /**
         * convert from textarea to grapheme indexes
         */
        fromStringToGraphemeSelection: function(i, a, o) {
          var e = o.slice(0, i), r = c.util.string.graphemeSplit(e).length;
          if (i === a)
            return { selectionStart: r, selectionEnd: r };
          var t = o.slice(i, a), s = c.util.string.graphemeSplit(t).length;
          return { selectionStart: r, selectionEnd: r + s };
        },
        /**
         * convert from fabric to textarea values
         */
        fromGraphemeToStringSelection: function(i, a, o) {
          var e = o.slice(0, i), r = e.join("").length;
          if (i === a)
            return { selectionStart: r, selectionEnd: r };
          var t = o.slice(i, a), s = t.join("").length;
          return { selectionStart: r, selectionEnd: r + s };
        },
        /**
         * @private
         */
        _updateTextarea: function() {
          if (this.cursorOffsetCache = {}, !!this.hiddenTextarea) {
            if (!this.inCompositionMode) {
              var i = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
              this.hiddenTextarea.selectionStart = i.selectionStart, this.hiddenTextarea.selectionEnd = i.selectionEnd;
            }
            this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateFromTextArea: function() {
          if (this.hiddenTextarea) {
            this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
            var i = this.fromStringToGraphemeSelection(
              this.hiddenTextarea.selectionStart,
              this.hiddenTextarea.selectionEnd,
              this.hiddenTextarea.value
            );
            this.selectionEnd = this.selectionStart = i.selectionEnd, this.inCompositionMode || (this.selectionStart = i.selectionStart), this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateTextareaPosition: function() {
          if (this.selectionStart === this.selectionEnd) {
            var i = this._calcTextareaPosition();
            this.hiddenTextarea.style.left = i.left, this.hiddenTextarea.style.top = i.top;
          }
        },
        /**
         * @private
         * @return {Object} style contains style for hiddenTextarea
         */
        _calcTextareaPosition: function() {
          if (!this.canvas)
            return { x: 1, y: 1 };
          var i = this.inCompositionMode ? this.compositionStart : this.selectionStart, a = this._getCursorBoundaries(i), o = this.get2DCursorLocation(i), e = o.lineIndex, r = o.charIndex, t = this.getValueOfPropertyAt(e, r, "fontSize") * this.lineHeight, s = a.leftOffset, l = this.calcTransformMatrix(), n = {
            x: a.left + s,
            y: a.top + a.topOffset + t
          }, h = this.canvas.getRetinaScaling(), f = this.canvas.upperCanvasEl, g = f.width / h, p = f.height / h, m = g - t, C = p - t, w = f.clientWidth / g, x = f.clientHeight / p;
          return n = c.util.transformPoint(n, l), n = c.util.transformPoint(n, this.canvas.viewportTransform), n.x *= w, n.y *= x, n.x < 0 && (n.x = 0), n.x > m && (n.x = m), n.y < 0 && (n.y = 0), n.y > C && (n.y = C), n.x += this.canvas._offset.left, n.y += this.canvas._offset.top, { left: n.x + "px", top: n.y + "px", fontSize: t + "px", charHeight: t };
        },
        /**
         * @private
         */
        _saveEditingProps: function() {
          this._savedProps = {
            hasControls: this.hasControls,
            borderColor: this.borderColor,
            lockMovementX: this.lockMovementX,
            lockMovementY: this.lockMovementY,
            hoverCursor: this.hoverCursor,
            selectable: this.selectable,
            defaultCursor: this.canvas && this.canvas.defaultCursor,
            moveCursor: this.canvas && this.canvas.moveCursor
          };
        },
        /**
         * @private
         */
        _restoreEditingProps: function() {
          this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
        },
        /**
         * Exits from editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        exitEditing: function() {
          var i = this._textBeforeEdit !== this.text, a = this.hiddenTextarea;
          return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, a && (a.blur && a.blur(), a.parentNode && a.parentNode.removeChild(a)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), i && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), i && this.canvas.fire("object:modified", { target: this })), this;
        },
        /**
         * @private
         */
        _removeExtraneousStyles: function() {
          for (var i in this.styles)
            this._textLines[i] || delete this.styles[i];
        },
        /**
         * remove and reflow a style block from start to end.
         * @param {Number} start linear start position for removal (included in removal)
         * @param {Number} end linear end position for removal ( excluded from removal )
         */
        removeStyleFromTo: function(i, a) {
          var o = this.get2DCursorLocation(i, !0), e = this.get2DCursorLocation(a, !0), r = o.lineIndex, t = o.charIndex, s = e.lineIndex, l = e.charIndex, n, h;
          if (r !== s) {
            if (this.styles[r])
              for (n = t; n < this._unwrappedTextLines[r].length; n++)
                delete this.styles[r][n];
            if (this.styles[s])
              for (n = l; n < this._unwrappedTextLines[s].length; n++)
                h = this.styles[s][n], h && (this.styles[r] || (this.styles[r] = {}), this.styles[r][t + n - l] = h);
            for (n = r + 1; n <= s; n++)
              delete this.styles[n];
            this.shiftLineStyles(s, r - s);
          } else if (this.styles[r]) {
            h = this.styles[r];
            var f = l - t, g, p;
            for (n = t; n < l; n++)
              delete h[n];
            for (p in this.styles[r])
              g = parseInt(p, 10), g >= l && (h[g - f] = h[p], delete h[p]);
          }
        },
        /**
         * Shifts line styles up or down
         * @param {Number} lineIndex Index of a line
         * @param {Number} offset Can any number?
         */
        shiftLineStyles: function(i, a) {
          var o = u(this.styles);
          for (var e in this.styles) {
            var r = parseInt(e, 10);
            r > i && (this.styles[r + a] = o[r], o[r - a] || delete this.styles[r]);
          }
        },
        restartCursorIfNeeded: function() {
          (!this._currentTickState || this._currentTickState.isAborted || !this._currentTickCompleteState || this._currentTickCompleteState.isAborted) && this.initDelayedCursor();
        },
        /**
         * Handle insertion of more consecutive style lines for when one or more
         * newlines gets added to the text. Since current style needs to be shifted
         * first we shift the current style of the number lines needed, then we add
         * new lines from the last to the first.
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} qty number of lines to add
         * @param {Array} copiedStyle Array of objects styles
         */
        insertNewlineStyleObject: function(i, a, o, e) {
          var r, t = {}, s = !1, l = this._unwrappedTextLines[i].length === a;
          o || (o = 1), this.shiftLineStyles(i, o), this.styles[i] && (r = this.styles[i][a === 0 ? a : a - 1]);
          for (var n in this.styles[i]) {
            var h = parseInt(n, 10);
            h >= a && (s = !0, t[h - a] = this.styles[i][n], l && a === 0 || delete this.styles[i][n]);
          }
          var f = !1;
          for (s && !l && (this.styles[i + o] = t, f = !0), f && o--; o > 0; )
            e && e[o - 1] ? this.styles[i + o] = { 0: u(e[o - 1]) } : r ? this.styles[i + o] = { 0: u(r) } : delete this.styles[i + o], o--;
          this._forceClearCache = !0;
        },
        /**
         * Inserts style object for a given line/char index
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} quantity number Style object to insert, if given
         * @param {Array} copiedStyle array of style objects
         */
        insertCharStyleObject: function(i, a, o, e) {
          this.styles || (this.styles = {});
          var r = this.styles[i], t = r ? u(r) : {};
          o || (o = 1);
          for (var s in t) {
            var l = parseInt(s, 10);
            l >= a && (r[l + o] = t[l], t[l - o] || delete r[l]);
          }
          if (this._forceClearCache = !0, e) {
            for (; o--; )
              Object.keys(e[o]).length && (this.styles[i] || (this.styles[i] = {}), this.styles[i][a + o] = u(e[o]));
            return;
          }
          if (r)
            for (var n = r[a ? a - 1 : 1]; n && o--; )
              this.styles[i][a + o] = u(n);
        },
        /**
         * Inserts style object(s)
         * @param {Array} insertedText Characters at the location where style is inserted
         * @param {Number} start cursor index for inserting style
         * @param {Array} [copiedStyle] array of style objects to insert.
         */
        insertNewStyleBlock: function(i, a, o) {
          for (var e = this.get2DCursorLocation(a, !0), r = [0], t = 0, s = 0; s < i.length; s++)
            i[s] === `
` ? (t++, r[t] = 0) : r[t]++;
          r[0] > 0 && (this.insertCharStyleObject(e.lineIndex, e.charIndex, r[0], o), o = o && o.slice(r[0] + 1)), t && this.insertNewlineStyleObject(
            e.lineIndex,
            e.charIndex + r[0],
            t
          );
          for (var s = 1; s < t; s++)
            r[s] > 0 ? this.insertCharStyleObject(e.lineIndex + s, 0, r[s], o) : o && this.styles[e.lineIndex + s] && o[0] && (this.styles[e.lineIndex + s][0] = o[0]), o = o && o.slice(r[s] + 1);
          r[s] > 0 && this.insertCharStyleObject(e.lineIndex + s, 0, r[s], o);
        },
        /**
         * Set the selectionStart and selectionEnd according to the new position of cursor
         * mimic the key - mouse navigation when shift is pressed.
         */
        setSelectionStartEndWithShift: function(i, a, o) {
          o <= i ? (a === i ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = i), this.selectionStart = o) : o > i && o < a ? this._selectionDirection === "right" ? this.selectionEnd = o : this.selectionStart = o : (a === i ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = a), this.selectionEnd = o);
        },
        setSelectionInBoundaries: function() {
          var i = this.text.length;
          this.selectionStart > i ? this.selectionStart = i : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > i ? this.selectionEnd = i : this.selectionEnd < 0 && (this.selectionEnd = 0);
        }
      }
    );
  }(), c.util.object.extend(
    c.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes "dbclick" event handler
       */
      initDoubleClickSimulation: function() {
        this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
      },
      /**
       * Default event handler to simulate triple click
       * @private
       */
      onMouseDown: function(u) {
        if (this.canvas) {
          this.__newClickTime = +/* @__PURE__ */ new Date();
          var i = u.pointer;
          this.isTripleClick(i) && (this.fire("tripleclick", u), this._stopEvent(u.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = i, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
        }
      },
      isTripleClick: function(u) {
        return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === u.x && this.__lastPointer.y === u.y;
      },
      /**
       * @private
       */
      _stopEvent: function(u) {
        u.preventDefault && u.preventDefault(), u.stopPropagation && u.stopPropagation();
      },
      /**
       * Initializes event handlers related to cursor or selection
       */
      initCursorSelectionHandlers: function() {
        this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
      },
      /**
       * Default handler for double click, select a word
       */
      doubleClickHandler: function(u) {
        this.isEditing && this.selectWord(this.getSelectionStartFromPointer(u.e));
      },
      /**
       * Default handler for triple click, select a line
       */
      tripleClickHandler: function(u) {
        this.isEditing && this.selectLine(this.getSelectionStartFromPointer(u.e));
      },
      /**
       * Initializes double and triple click event handlers
       */
      initClicks: function() {
        this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
      },
      /**
       * Default event handler for the basic functionalities needed on _mouseDown
       * can be overridden to do something different.
       * Scope of this implementation is: find the click position, set selectionStart
       * find selectionEnd, initialize the drawing of either cursor or selection area
       * initializing a mousedDown on a text area will cancel fabricjs knowledge of
       * current compositionMode. It will be set to false.
       */
      _mouseDownHandler: function(u) {
        !this.canvas || !this.editable || u.e.button && u.e.button !== 1 || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(u.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
      },
      /**
       * Default event handler for the basic functionalities needed on mousedown:before
       * can be overridden to do something different.
       * Scope of this implementation is: verify the object is already selected when mousing down
       */
      _mouseDownHandlerBefore: function(u) {
        !this.canvas || !this.editable || u.e.button && u.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
      },
      /**
       * Initializes "mousedown" event handler
       */
      initMousedownHandler: function() {
        this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
      },
      /**
       * Initializes "mouseup" event handler
       */
      initMouseupHandler: function() {
        this.on("mouseup", this.mouseUpHandler);
      },
      /**
       * standard handler for mouse up, overridable
       * @private
       */
      mouseUpHandler: function(u) {
        if (this.__isMousedown = !1, !(!this.editable || this.group || u.transform && u.transform.actionPerformed || u.e.button && u.e.button !== 1)) {
          if (this.canvas) {
            var i = this.canvas._activeObject;
            if (i && i !== this)
              return;
          }
          this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(u.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
        }
      },
      /**
       * Changes cursor location in a text depending on passed pointer (x/y) object
       * @param {Event} e Event object
       */
      setCursorByClick: function(u) {
        var i = this.getSelectionStartFromPointer(u), a = this.selectionStart, o = this.selectionEnd;
        u.shiftKey ? this.setSelectionStartEndWithShift(a, o, i) : (this.selectionStart = i, this.selectionEnd = i), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Returns index of a character corresponding to where an object was clicked
       * @param {Event} e Event object
       * @return {Number} Index of a character
       */
      getSelectionStartFromPointer: function(u) {
        for (var i = this.getLocalPointer(u), a = 0, o = 0, e = 0, r = 0, t = 0, s, l, n = 0, h = this._textLines.length; n < h && e <= i.y; n++)
          e += this.getHeightOfLine(n) * this.scaleY, t = n, n > 0 && (r += this._textLines[n - 1].length + this.missingNewlineOffset(n - 1));
        s = this._getLineLeftOffset(t), o = s * this.scaleX, l = this._textLines[t], this.direction === "rtl" && (i.x = this.width * this.scaleX - i.x + o);
        for (var f = 0, g = l.length; f < g && (a = o, o += this.__charBounds[t][f].kernedWidth * this.scaleX, o <= i.x); f++)
          r++;
        return this._getNewSelectionStartFromOffset(i, a, o, r, g);
      },
      /**
       * @private
       */
      _getNewSelectionStartFromOffset: function(u, i, a, o, e) {
        var r = u.x - i, t = a - u.x, s = t > r || t < 0 ? 0 : 1, l = o + s;
        return this.flipX && (l = e - l), l > this._text.length && (l = this._text.length), l;
      }
    }
  ), c.util.object.extend(
    c.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes hidden textarea (needed to bring up keyboard in iOS)
       */
      initHiddenTextarea: function() {
        this.hiddenTextarea = c.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
        var u = this._calcTextareaPosition();
        this.hiddenTextarea.style.cssText = "position: absolute; top: " + u.top + "; left: " + u.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: " + u.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : c.document.body.appendChild(this.hiddenTextarea), c.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), c.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), c.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), c.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), c.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), c.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), c.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), c.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), c.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (c.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
      },
      /**
       * For functionalities on keyDown
       * Map a special key to a function of the instance/prototype
       * If you need different behaviour for ESC or TAB or arrows, you have to change
       * this map setting the name of a function that you build on the fabric.Itext or
       * your prototype.
       * the map change will affect all Instances unless you need for only some text Instances
       * in that case you have to clone this object and assign your Instance.
       * this.keysMap = fabric.util.object.clone(this.keysMap);
       * The function must be in fabric.Itext.prototype.myFunction And will receive event as args[0]
       */
      keysMap: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorRight",
        36: "moveCursorLeft",
        37: "moveCursorLeft",
        38: "moveCursorUp",
        39: "moveCursorRight",
        40: "moveCursorDown"
      },
      keysMapRtl: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorLeft",
        36: "moveCursorRight",
        37: "moveCursorRight",
        38: "moveCursorUp",
        39: "moveCursorLeft",
        40: "moveCursorDown"
      },
      /**
       * For functionalities on keyUp + ctrl || cmd
       */
      ctrlKeysMapUp: {
        67: "copy",
        88: "cut"
      },
      /**
       * For functionalities on keyDown + ctrl || cmd
       */
      ctrlKeysMapDown: {
        65: "selectAll"
      },
      onClick: function() {
        this.hiddenTextarea && this.hiddenTextarea.focus();
      },
      /**
       * Handles keydown event
       * only used for arrows and combination of modifier keys.
       * @param {Event} e Event object
       */
      onKeyDown: function(u) {
        if (this.isEditing) {
          var i = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
          if (u.keyCode in i)
            this[i[u.keyCode]](u);
          else if (u.keyCode in this.ctrlKeysMapDown && (u.ctrlKey || u.metaKey))
            this[this.ctrlKeysMapDown[u.keyCode]](u);
          else
            return;
          u.stopImmediatePropagation(), u.preventDefault(), u.keyCode >= 33 && u.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
        }
      },
      /**
       * Handles keyup event
       * We handle KeyUp because ie11 and edge have difficulties copy/pasting
       * if a copy/cut event fired, keyup is dismissed
       * @param {Event} e Event object
       */
      onKeyUp: function(u) {
        if (!this.isEditing || this._copyDone || this.inCompositionMode) {
          this._copyDone = !1;
          return;
        }
        if (u.keyCode in this.ctrlKeysMapUp && (u.ctrlKey || u.metaKey))
          this[this.ctrlKeysMapUp[u.keyCode]](u);
        else
          return;
        u.stopImmediatePropagation(), u.preventDefault(), this.canvas && this.canvas.requestRenderAll();
      },
      /**
       * Handles onInput event
       * @param {Event} e Event object
       */
      onInput: function(u) {
        var i = this.fromPaste;
        if (this.fromPaste = !1, u && u.stopPropagation(), !!this.isEditing) {
          var a = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, o = this._text.length, e = a.length, r, t, s = e - o, l = this.selectionStart, n = this.selectionEnd, h = l !== n, f, g, p;
          if (this.hiddenTextarea.value === "") {
            this.styles = {}, this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
            return;
          }
          var m = this.fromStringToGraphemeSelection(
            this.hiddenTextarea.selectionStart,
            this.hiddenTextarea.selectionEnd,
            this.hiddenTextarea.value
          ), C = l > m.selectionStart;
          h ? (r = this._text.slice(l, n), s += n - l) : e < o && (C ? r = this._text.slice(n + s, n) : r = this._text.slice(l, l - s)), t = a.slice(m.selectionEnd - s, m.selectionEnd), r && r.length && (t.length && (f = this.getSelectionStyles(l, l + 1, !1), f = t.map(function() {
            return f[0];
          })), h ? (g = l, p = n) : C ? (g = n - r.length, p = n) : (g = n, p = n + r.length), this.removeStyleFromTo(g, p)), t.length && (i && t.join("") === c.copiedText && !c.disableStyleCopyPaste && (f = c.copiedTextStyle), this.insertNewStyleBlock(t, l, f)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
        }
      },
      /**
       * Composition start
       */
      onCompositionStart: function() {
        this.inCompositionMode = !0;
      },
      /**
       * Composition end
       */
      onCompositionEnd: function() {
        this.inCompositionMode = !1;
      },
      // /**
      //  * Composition update
      //  */
      onCompositionUpdate: function(u) {
        this.compositionStart = u.target.selectionStart, this.compositionEnd = u.target.selectionEnd, this.updateTextareaPosition();
      },
      /**
       * Copies selected text
       * @param {Event} e Event object
       */
      copy: function() {
        this.selectionStart !== this.selectionEnd && (c.copiedText = this.getSelectedText(), c.disableStyleCopyPaste ? c.copiedTextStyle = null : c.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
      },
      /**
       * Pastes text
       * @param {Event} e Event object
       */
      paste: function() {
        this.fromPaste = !0;
      },
      /**
       * @private
       * @param {Event} e Event object
       * @return {Object} Clipboard data object
       */
      _getClipboardData: function(u) {
        return u && u.clipboardData || c.window.clipboardData;
      },
      /**
       * Finds the width in pixels before the cursor on the same line
       * @private
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @return {Number} widthBeforeCursor width before cursor
       */
      _getWidthBeforeCursor: function(u, i) {
        var a = this._getLineLeftOffset(u), o;
        return i > 0 && (o = this.__charBounds[u][i - 1], a += o.left + o.width), a;
      },
      /**
       * Gets start offset of a selection
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getDownCursorOffset: function(u, i) {
        var a = this._getSelectionForOffset(u, i), o = this.get2DCursorLocation(a), e = o.lineIndex;
        if (e === this._textLines.length - 1 || u.metaKey || u.keyCode === 34)
          return this._text.length - a;
        var r = o.charIndex, t = this._getWidthBeforeCursor(e, r), s = this._getIndexOnLine(e + 1, t), l = this._textLines[e].slice(r);
        return l.length + s + 1 + this.missingNewlineOffset(e);
      },
      /**
       * private
       * Helps finding if the offset should be counted from Start or End
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      _getSelectionForOffset: function(u, i) {
        return u.shiftKey && this.selectionStart !== this.selectionEnd && i ? this.selectionEnd : this.selectionStart;
      },
      /**
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getUpCursorOffset: function(u, i) {
        var a = this._getSelectionForOffset(u, i), o = this.get2DCursorLocation(a), e = o.lineIndex;
        if (e === 0 || u.metaKey || u.keyCode === 33)
          return -a;
        var r = o.charIndex, t = this._getWidthBeforeCursor(e, r), s = this._getIndexOnLine(e - 1, t), l = this._textLines[e].slice(0, r), n = this.missingNewlineOffset(e - 1);
        return -this._textLines[e - 1].length + s - l.length + (1 - n);
      },
      /**
       * for a given width it founds the matching character.
       * @private
       */
      _getIndexOnLine: function(u, i) {
        for (var a = this._textLines[u], o = this._getLineLeftOffset(u), e = o, r = 0, t, s, l = 0, n = a.length; l < n; l++)
          if (t = this.__charBounds[u][l].width, e += t, e > i) {
            s = !0;
            var h = e - t, f = e, g = Math.abs(h - i), p = Math.abs(f - i);
            r = p < g ? l : l - 1;
            break;
          }
        return s || (r = a.length - 1), r;
      },
      /**
       * Moves cursor down
       * @param {Event} e Event object
       */
      moveCursorDown: function(u) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", u);
      },
      /**
       * Moves cursor up
       * @param {Event} e Event object
       */
      moveCursorUp: function(u) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", u);
      },
      /**
       * Moves cursor up or down, fires the events
       * @param {String} direction 'Up' or 'Down'
       * @param {Event} e Event object
       */
      _moveCursorUpOrDown: function(u, i) {
        var a = "get" + u + "CursorOffset", o = this[a](i, this._selectionDirection === "right");
        i.shiftKey ? this.moveCursorWithShift(o) : this.moveCursorWithoutShift(o), o !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor with shift
       * @param {Number} offset
       */
      moveCursorWithShift: function(u) {
        var i = this._selectionDirection === "left" ? this.selectionStart + u : this.selectionEnd + u;
        return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, i), u !== 0;
      },
      /**
       * Moves cursor up without shift
       * @param {Number} offset
       */
      moveCursorWithoutShift: function(u) {
        return u < 0 ? (this.selectionStart += u, this.selectionEnd = this.selectionStart) : (this.selectionEnd += u, this.selectionStart = this.selectionEnd), u !== 0;
      },
      /**
       * Moves cursor left
       * @param {Event} e Event object
       */
      moveCursorLeft: function(u) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", u);
      },
      /**
       * @private
       * @return {Boolean} true if a change happened
       */
      _move: function(u, i, a) {
        var o;
        if (u.altKey)
          o = this["findWordBoundary" + a](this[i]);
        else if (u.metaKey || u.keyCode === 35 || u.keyCode === 36)
          o = this["findLineBoundary" + a](this[i]);
        else
          return this[i] += a === "Left" ? -1 : 1, !0;
        if (typeof o !== void 0 && this[i] !== o)
          return this[i] = o, !0;
      },
      /**
       * @private
       */
      _moveLeft: function(u, i) {
        return this._move(u, i, "Left");
      },
      /**
       * @private
       */
      _moveRight: function(u, i) {
        return this._move(u, i, "Right");
      },
      /**
       * Moves cursor left without keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithoutShift: function(u) {
        var i = !0;
        return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (i = this._moveLeft(u, "selectionStart")), this.selectionEnd = this.selectionStart, i;
      },
      /**
       * Moves cursor left while keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithShift: function(u) {
        if (this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd)
          return this._moveLeft(u, "selectionEnd");
        if (this.selectionStart !== 0)
          return this._selectionDirection = "left", this._moveLeft(u, "selectionStart");
      },
      /**
       * Moves cursor right
       * @param {Event} e Event object
       */
      moveCursorRight: function(u) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", u);
      },
      /**
       * Moves cursor right or Left, fires event
       * @param {String} direction 'Left', 'Right'
       * @param {Event} e Event object
       */
      _moveCursorLeftOrRight: function(u, i) {
        var a = "moveCursor" + u + "With";
        this._currentCursorOpacity = 1, i.shiftKey ? a += "Shift" : a += "outShift", this[a](i) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor right while keeping selection
       * @param {Event} e
       */
      moveCursorRightWithShift: function(u) {
        if (this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd)
          return this._moveRight(u, "selectionStart");
        if (this.selectionEnd !== this._text.length)
          return this._selectionDirection = "right", this._moveRight(u, "selectionEnd");
      },
      /**
       * Moves cursor right without keeping selection
       * @param {Event} e Event object
       */
      moveCursorRightWithoutShift: function(u) {
        var i = !0;
        return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (i = this._moveRight(u, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, i;
      },
      /**
       * Removes characters from start/end
       * start/end ar per grapheme position in _text array.
       *
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      removeChars: function(u, i) {
        typeof i > "u" && (i = u + 1), this.removeStyleFromTo(u, i), this._text.splice(u, i - u), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      },
      /**
       * insert characters at start position, before start position.
       * start  equal 1 it means the text get inserted between actual grapheme 0 and 1
       * if style array is provided, it must be as the same length of text in graphemes
       * if end is provided and is bigger than start, old text is replaced.
       * start/end ar per grapheme position in _text array.
       *
       * @param {String} text text to insert
       * @param {Array} style array of style objects
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      insertChars: function(u, i, a, o) {
        typeof o > "u" && (o = a), o > a && this.removeStyleFromTo(a, o);
        var e = c.util.string.graphemeSplit(u);
        this.insertNewStyleBlock(e, a, i), this._text = [].concat(this._text.slice(0, a), e, this._text.slice(o)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      }
    }
  ), function() {
    var u = c.util.toFixed, i = /  +/g;
    c.util.object.extend(
      c.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns SVG representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function() {
          var a = this._getSVGLeftTopOffsets(), o = this._getSVGTextAndBg(a.textTop, a.textLeft);
          return this._wrapSVGTextAndBg(o);
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(a) {
          return this._createBaseSVGMarkup(
            this._toSVG(),
            { reviver: a, noStyle: !0, withShadow: !0 }
          );
        },
        /**
         * @private
         */
        _getSVGLeftTopOffsets: function() {
          return {
            textLeft: -this.width / 2,
            textTop: -this.height / 2,
            lineTop: this.getHeightOfLine(0)
          };
        },
        /**
         * @private
         */
        _wrapSVGTextAndBg: function(a) {
          var o = !0, e = this.getSvgTextDecoration(this);
          return [
            a.textBgRects.join(""),
            '		<text xml:space="preserve" ',
            this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "",
            this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
            this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
            this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "",
            e ? 'text-decoration="' + e + '" ' : "",
            'style="',
            this.getSvgStyles(o),
            '"',
            this.addPaintOrder(),
            " >",
            a.textSpans.join(""),
            `</text>
`
          ];
        },
        /**
         * @private
         * @param {Number} textTopOffset Text top offset
         * @param {Number} textLeftOffset Text left offset
         * @return {Object}
         */
        _getSVGTextAndBg: function(a, o) {
          var e = [], r = [], t = a, s;
          this._setSVGBg(r);
          for (var l = 0, n = this._textLines.length; l < n; l++)
            s = this._getLineLeftOffset(l), (this.textBackgroundColor || this.styleHas("textBackgroundColor", l)) && this._setSVGTextLineBg(r, l, o + s, t), this._setSVGTextLineText(e, l, o + s, t), t += this.getHeightOfLine(l);
          return {
            textSpans: e,
            textBgRects: r
          };
        },
        /**
         * @private
         */
        _createTextCharSpan: function(a, o, e, r) {
          var t = a !== a.trim() || a.match(i), s = this.getSvgSpanStyles(o, t), l = s ? 'style="' + s + '"' : "", n = o.deltaY, h = "", f = c.Object.NUM_FRACTION_DIGITS;
          return n && (h = ' dy="' + u(n, f) + '" '), [
            '<tspan x="',
            u(e, f),
            '" y="',
            u(r, f),
            '" ',
            h,
            l,
            ">",
            c.util.string.escapeXml(a),
            "</tspan>"
          ].join("");
        },
        _setSVGTextLineText: function(a, o, e, r) {
          var t = this.getHeightOfLine(o), s = this.textAlign.indexOf("justify") !== -1, l, n, h = "", f, g, p = 0, m = this._textLines[o], C;
          r += t * (1 - this._fontSizeFraction) / this.lineHeight;
          for (var w = 0, x = m.length - 1; w <= x; w++)
            C = w === x || this.charSpacing, h += m[w], f = this.__charBounds[o][w], p === 0 ? (e += f.kernedWidth - f.width, p += f.width) : p += f.kernedWidth, s && !C && this._reSpaceAndTab.test(m[w]) && (C = !0), C || (l = l || this.getCompleteStyleDeclaration(o, w), n = this.getCompleteStyleDeclaration(o, w + 1), C = this._hasStyleChangedForSvg(l, n)), C && (g = this._getStyleDeclaration(o, w) || {}, a.push(this._createTextCharSpan(h, g, e, r)), h = "", l = n, e += p, p = 0);
        },
        _pushTextBgRect: function(a, o, e, r, t, s) {
          var l = c.Object.NUM_FRACTION_DIGITS;
          a.push(
            "		<rect ",
            this._getFillAttributes(o),
            ' x="',
            u(e, l),
            '" y="',
            u(r, l),
            '" width="',
            u(t, l),
            '" height="',
            u(s, l),
            `"></rect>
`
          );
        },
        _setSVGTextLineBg: function(a, o, e, r) {
          for (var t = this._textLines[o], s = this.getHeightOfLine(o) / this.lineHeight, l = 0, n = 0, h, f, g = this.getValueOfPropertyAt(o, 0, "textBackgroundColor"), p = 0, m = t.length; p < m; p++)
            h = this.__charBounds[o][p], f = this.getValueOfPropertyAt(o, p, "textBackgroundColor"), f !== g ? (g && this._pushTextBgRect(
              a,
              g,
              e + n,
              r,
              l,
              s
            ), n = h.left, l = h.width, g = f) : l += h.kernedWidth;
          f && this._pushTextBgRect(
            a,
            f,
            e + n,
            r,
            l,
            s
          );
        },
        /**
         * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
         * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
         *
         * @private
         * @param {*} value
         * @return {String}
         */
        _getFillAttributes: function(a) {
          var o = a && typeof a == "string" ? new c.Color(a) : "";
          return !o || !o.getSource() || o.getAlpha() === 1 ? 'fill="' + a + '"' : 'opacity="' + o.getAlpha() + '" fill="' + o.setAlpha(1).toRgb() + '"';
        },
        /**
         * @private
         */
        _getSVGLineTopOffset: function(a) {
          for (var o = 0, e = 0, r = 0; r < a; r++)
            o += this.getHeightOfLine(r);
          return e = this.getHeightOfLine(r), {
            lineTop: o,
            offset: (this._fontSizeMult - this._fontSizeFraction) * e / (this.lineHeight * this._fontSizeMult)
          };
        },
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(a) {
          var o = c.Object.prototype.getSvgStyles.call(this, a);
          return o + " white-space: pre;";
        }
      }
    );
  }(), function(u) {
    var i = u.fabric || (u.fabric = {});
    i.Textbox = i.util.createClass(i.IText, i.Observable, {
      /**
       * Type of an object
       * @type String
       * @default
       */
      type: "textbox",
      /**
       * Minimum width of textbox, in pixels.
       * @type Number
       * @default
       */
      minWidth: 20,
      /**
       * Minimum calculated width of a textbox, in pixels.
       * fixed to 2 so that an empty textbox cannot go to 0
       * and is still selectable without text.
       * @type Number
       * @default
       */
      dynamicMinWidth: 2,
      /**
       * Cached array of text wrapping.
       * @type Array
       */
      __cachedLines: null,
      /**
       * Override standard Object class values
       */
      lockScalingFlip: !0,
      /**
       * Override standard Object class values
       * Textbox needs this on false
       */
      noScaleCache: !1,
      /**
       * Properties which when set cause object to change dimensions
       * @type Object
       * @private
       */
      _dimensionAffectingProps: i.Text.prototype._dimensionAffectingProps.concat("width"),
      /**
       * Use this regular expression to split strings in breakable lines
       * @private
       */
      _wordJoiners: /[ \t\r]/,
      /**
       * Use this boolean property in order to split strings that have no white space concept.
       * this is a cheap way to help with chinese/japanese
       * @type Boolean
       * @since 2.6.0
       */
      splitByGrapheme: !1,
      /**
       * Unlike superclass's version of this function, Textbox does not update
       * its width.
       * @private
       * @override
       */
      initDimensions: function() {
        this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
      },
      /**
       * Generate an object that translates the style object so that it is
       * broken up by visual lines (new lines and automatic wrapping).
       * The original text styles object is broken up by actual lines (new lines only),
       * which is only sufficient for Text / IText
       * @private
       */
      _generateStyleMap: function(a) {
        for (var o = 0, e = 0, r = 0, t = {}, s = 0; s < a.graphemeLines.length; s++)
          a.graphemeText[r] === `
` && s > 0 ? (e = 0, r++, o++) : !this.splitByGrapheme && this._reSpaceAndTab.test(a.graphemeText[r]) && s > 0 && (e++, r++), t[s] = { line: o, offset: e }, r += a.graphemeLines[s].length, e += a.graphemeLines[s].length;
        return t;
      },
      /**
       * Returns true if object has a style property or has it on a specified line
       * @param {Number} lineIndex
       * @return {Boolean}
       */
      styleHas: function(a, o) {
        if (this._styleMap && !this.isWrapping) {
          var e = this._styleMap[o];
          e && (o = e.line);
        }
        return i.Text.prototype.styleHas.call(this, a, o);
      },
      /**
       * Returns true if object has no styling or no styling in a line
       * @param {Number} lineIndex , lineIndex is on wrapped lines.
       * @return {Boolean}
       */
      isEmptyStyles: function(a) {
        if (!this.styles)
          return !0;
        var o = 0, e = a + 1, r, t, s = !1, l = this._styleMap[a], n = this._styleMap[a + 1];
        l && (a = l.line, o = l.offset), n && (e = n.line, s = e === a, r = n.offset), t = typeof a > "u" ? this.styles : { line: this.styles[a] };
        for (var h in t)
          for (var f in t[h])
            if (f >= o && (!s || f < r))
              for (var g in t[h][f])
                return !1;
        return !0;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _getStyleDeclaration: function(a, o) {
        if (this._styleMap && !this.isWrapping) {
          var e = this._styleMap[a];
          if (!e)
            return null;
          a = e.line, o = e.offset + o;
        }
        return this.callSuper("_getStyleDeclaration", a, o);
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @param {Object} style
       * @private
       */
      _setStyleDeclaration: function(a, o, e) {
        var r = this._styleMap[a];
        a = r.line, o = r.offset + o, this.styles[a][o] = e;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _deleteStyleDeclaration: function(a, o) {
        var e = this._styleMap[a];
        a = e.line, o = e.offset + o, delete this.styles[a][o];
      },
      /**
       * probably broken need a fix
       * Returns the real style line that correspond to the wrapped lineIndex line
       * Used just to verify if the line does exist or not.
       * @param {Number} lineIndex
       * @returns {Boolean} if the line exists or not
       * @private
       */
      _getLineStyle: function(a) {
        var o = this._styleMap[a];
        return !!this.styles[o.line];
      },
      /**
       * Set the line style to an empty object so that is initialized
       * @param {Number} lineIndex
       * @param {Object} style
       * @private
       */
      _setLineStyle: function(a) {
        var o = this._styleMap[a];
        this.styles[o.line] = {};
      },
      /**
       * Wraps text using the 'width' property of Textbox. First this function
       * splits text on newlines, so we preserve newlines entered by the user.
       * Then it wraps each line using the width of the Textbox by calling
       * _wrapLine().
       * @param {Array} lines The string array of text that is split into lines
       * @param {Number} desiredWidth width you want to wrap to
       * @returns {Array} Array of lines
       */
      _wrapText: function(a, o) {
        var e = [], r;
        for (this.isWrapping = !0, r = 0; r < a.length; r++)
          e = e.concat(this._wrapLine(a[r], r, o));
        return this.isWrapping = !1, e;
      },
      /**
       * Helper function to measure a string of text, given its lineIndex and charIndex offset
       * it gets called when charBounds are not available yet.
       * @param {CanvasRenderingContext2D} ctx
       * @param {String} text
       * @param {number} lineIndex
       * @param {number} charOffset
       * @returns {number}
       * @private
       */
      _measureWord: function(a, o, e) {
        var r = 0, t, s = !0;
        e = e || 0;
        for (var l = 0, n = a.length; l < n; l++) {
          var h = this._getGraphemeBox(a[l], o, l + e, t, s);
          r += h.kernedWidth, t = a[l];
        }
        return r;
      },
      /**
       * Wraps a line of text using the width of the Textbox and a context.
       * @param {Array} line The grapheme array that represent the line
       * @param {Number} lineIndex
       * @param {Number} desiredWidth width you want to wrap the line to
       * @param {Number} reservedSpace space to remove from wrapping for custom functionalities
       * @returns {Array} Array of line(s) into which the given text is wrapped
       * to.
       */
      _wrapLine: function(a, o, e, L) {
        var t = 0, s = this.splitByGrapheme, l = [], n = [], h = s ? i.util.string.graphemeSplit(a) : a.split(this._wordJoiners), f = "", g = 0, p = s ? "" : " ", m = 0, C = 0, w = 0, x = !0, k = this._getWidthOfCharSpacing(), L = L || 0;
        h.length === 0 && h.push([]), e -= L;
        for (var Y = 0; Y < h.length; Y++)
          f = s ? h[Y] : i.util.string.graphemeSplit(h[Y]), m = this._measureWord(f, o, g), g += f.length, t += C + m - k, t > e && !x ? (l.push(n), n = [], t = m, x = !0) : t += k, !x && !s && n.push(p), n = n.concat(f), C = s ? 0 : this._measureWord([p], o, g), g++, x = !1, m > w && (w = m);
        return Y && l.push(n), w + L > this.dynamicMinWidth && (this.dynamicMinWidth = w - k + L), l;
      },
      /**
       * Detect if the text line is ended with an hard break
       * text and itext do not have wrapping, return false
       * @param {Number} lineIndex text to split
       * @return {Boolean}
       */
      isEndOfWrapping: function(a) {
        return !this._styleMap[a + 1] || this._styleMap[a + 1].line !== this._styleMap[a].line;
      },
      /**
       * Detect if a line has a linebreak and so we need to account for it when moving
       * and counting style.
       * @return Number
       */
      missingNewlineOffset: function(a) {
        return this.splitByGrapheme ? this.isEndOfWrapping(a) ? 1 : 0 : 1;
      },
      /**
      * Gets lines of text to render in the Textbox. This function calculates
      * text wrapping on the fly every time it is called.
      * @param {String} text text to split
      * @returns {Array} Array of lines in the Textbox.
      * @override
      */
      _splitTextIntoLines: function(a) {
        for (var o = i.Text.prototype._splitTextIntoLines.call(this, a), e = this._wrapText(o.lines, this.width), r = new Array(e.length), t = 0; t < e.length; t++)
          r[t] = e[t].join("");
        return o.lines = r, o.graphemeLines = e, o;
      },
      getMinWidth: function() {
        return Math.max(this.minWidth, this.dynamicMinWidth);
      },
      _removeExtraneousStyles: function() {
        var a = {};
        for (var o in this._styleMap)
          this._textLines[o] && (a[this._styleMap[o].line] = 1);
        for (var o in this.styles)
          a[o] || delete this.styles[o];
      },
      /**
       * Returns object representation of an instance
       * @method toObject
       * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
       * @return {Object} object representation of an instance
       */
      toObject: function(a) {
        return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(a));
      }
    }), i.Textbox.fromObject = function(a, o) {
      return i.Object._fromObject("Textbox", a, o, "text");
    };
  }(d), function() {
    var u = c.controlsUtils, i = u.scaleSkewCursorStyleHandler, a = u.scaleCursorStyleHandler, o = u.scalingEqually, e = u.scalingYOrSkewingX, r = u.scalingXOrSkewingY, t = u.scaleOrSkewActionName, s = c.Object.prototype.controls;
    if (s.ml = new c.Control({
      x: -0.5,
      y: 0,
      cursorStyleHandler: i,
      actionHandler: r,
      getActionName: t
    }), s.mr = new c.Control({
      x: 0.5,
      y: 0,
      cursorStyleHandler: i,
      actionHandler: r,
      getActionName: t
    }), s.mb = new c.Control({
      x: 0,
      y: 0.5,
      cursorStyleHandler: i,
      actionHandler: e,
      getActionName: t
    }), s.mt = new c.Control({
      x: 0,
      y: -0.5,
      cursorStyleHandler: i,
      actionHandler: e,
      getActionName: t
    }), s.tl = new c.Control({
      x: -0.5,
      y: -0.5,
      cursorStyleHandler: a,
      actionHandler: o
    }), s.tr = new c.Control({
      x: 0.5,
      y: -0.5,
      cursorStyleHandler: a,
      actionHandler: o
    }), s.bl = new c.Control({
      x: -0.5,
      y: 0.5,
      cursorStyleHandler: a,
      actionHandler: o
    }), s.br = new c.Control({
      x: 0.5,
      y: 0.5,
      cursorStyleHandler: a,
      actionHandler: o
    }), s.mtr = new c.Control({
      x: 0,
      y: -0.5,
      actionHandler: u.rotationWithSnapping,
      cursorStyleHandler: u.rotationStyleHandler,
      offsetY: -40,
      withConnection: !0,
      actionName: "rotate"
    }), c.Textbox) {
      var l = c.Textbox.prototype.controls = {};
      l.mtr = s.mtr, l.tr = s.tr, l.br = s.br, l.tl = s.tl, l.bl = s.bl, l.mt = s.mt, l.mb = s.mb, l.mr = new c.Control({
        x: 0.5,
        y: 0,
        actionHandler: u.changeWidth,
        cursorStyleHandler: i,
        actionName: "resizing"
      }), l.ml = new c.Control({
        x: -0.5,
        y: 0,
        actionHandler: u.changeWidth,
        cursorStyleHandler: i,
        actionName: "resizing"
      });
    }
  }(), function() {
    c.Object.ENLIVEN_PROPS.push("eraser");
    var u = c.Object.prototype._drawClipPath, i = c.Object.prototype.needsItsOwnCache, a = c.Object.prototype.toObject, o = c.Object.prototype.getSvgCommons, e = c.Object.prototype._createBaseClipPathSVGMarkup, r = c.Object.prototype._createBaseSVGMarkup;
    c.Object.prototype.cacheProperties.push("eraser"), c.Object.prototype.stateProperties.push("eraser"), c.util.object.extend(c.Object.prototype, {
      /**
       * Indicates whether this object can be erased by {@link fabric.EraserBrush}
       * The `deep` option introduces fine grained control over a group's `erasable` property.
       * When set to `deep` the eraser will erase nested objects if they are erasable, leaving the group and the other objects untouched.
       * When set to `true` the eraser will erase the entire group. Once the group changes the eraser is propagated to its children for proper functionality.
       * When set to `false` the eraser will leave all objects including the group untouched.
       * @tutorial {@link http://fabricjs.com/erasing#erasable_property}
       * @type boolean | 'deep'
       * @default true
       */
      erasable: !0,
      /**
       * @tutorial {@link http://fabricjs.com/erasing#eraser}
       * @type fabric.Eraser
       */
      eraser: void 0,
      /**
       * @override
       * @returns Boolean
       */
      needsItsOwnCache: function() {
        return i.call(this) || !!this.eraser;
      },
      /**
       * draw eraser above clip path
       * @override
       * @private
       * @param {CanvasRenderingContext2D} ctx
       * @param {fabric.Object} clipPath
       */
      _drawClipPath: function(l, n) {
        if (u.call(this, l, n), this.eraser) {
          var h = this._getNonTransformedDimensions();
          this.eraser.isType("eraser") && this.eraser.set({
            width: h.x,
            height: h.y
          }), u.call(this, l, this.eraser);
        }
      },
      /**
       * Returns an object representation of an instance
       * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
       * @return {Object} Object representation of an instance
       */
      toObject: function(l) {
        var n = a.call(this, ["erasable"].concat(l));
        return this.eraser && !this.eraser.excludeFromExport && (n.eraser = this.eraser.toObject(l)), n;
      },
      /* _TO_SVG_START_ */
      /**
       * Returns id attribute for svg output
       * @override
       * @return {String}
       */
      getSvgCommons: function() {
        return o.call(this) + (this.eraser ? 'mask="url(#' + this.eraser.clipPathId + ')" ' : "");
      },
      /**
       * create svg markup for eraser
       * use <mask> to achieve erasing for svg, credit: https://travishorn.com/removing-parts-of-shapes-in-svg-b539a89e5649
       * must be called before object markup creation as it relies on the `clipPathId` property of the mask
       * @param {Function} [reviver]
       * @returns
       */
      _createEraserSVGMarkup: function(l) {
        return this.eraser ? (this.eraser.clipPathId = "MASK_" + c.Object.__uid++, [
          '<mask id="',
          this.eraser.clipPathId,
          '" >',
          this.eraser.toSVG(l),
          "</mask>",
          `
`
        ].join("")) : "";
      },
      /**
       * @private
       */
      _createBaseClipPathSVGMarkup: function(l, n) {
        return [
          this._createEraserSVGMarkup(n && n.reviver),
          e.call(this, l, n)
        ].join("");
      },
      /**
       * @private
       */
      _createBaseSVGMarkup: function(l, n) {
        return [
          this._createEraserSVGMarkup(n && n.reviver),
          r.call(this, l, n)
        ].join("");
      }
      /* _TO_SVG_END_ */
    });
    var t = c.Group.prototype._restoreObjectsState;
    c.util.object.extend(c.Group.prototype, {
      /**
       * @private
       * @param {fabric.Path} path
       */
      _addEraserPathToObjects: function(l) {
        this._objects.forEach(function(n) {
          c.EraserBrush.prototype._addPathToObjectEraser.call(
            c.EraserBrush.prototype,
            n,
            l
          );
        });
      },
      /**
       * Applies the group's eraser to its objects
       * @tutorial {@link http://fabricjs.com/erasing#erasable_property}
       */
      applyEraserToObjects: function() {
        var l = this, n = this.eraser;
        if (n) {
          delete this.eraser;
          var h = l.calcTransformMatrix();
          n.clone(function(f) {
            var g = l.clipPath;
            f.getObjects("path").forEach(function(p) {
              var m = c.util.multiplyTransformMatrices(
                h,
                p.calcTransformMatrix()
              );
              c.util.applyTransformToObject(p, m), g ? g.clone(function(C) {
                var w = c.EraserBrush.prototype.applyClipPathToPath.call(
                  c.EraserBrush.prototype,
                  p,
                  C,
                  h
                );
                l._addEraserPathToObjects(w);
              }, ["absolutePositioned", "inverted"]) : l._addEraserPathToObjects(p);
            });
          });
        }
      },
      /**
       * Propagate the group's eraser to its objects, crucial for proper functionality of the eraser within the group and nested objects.
       * @private
       */
      _restoreObjectsState: function() {
        return this.erasable === !0 && this.applyEraserToObjects(), t.call(this);
      }
    }), c.Eraser = c.util.createClass(c.Group, {
      /**
       * @readonly
       * @static
       */
      type: "eraser",
      /**
       * @default
       */
      originX: "center",
      /**
       * @default
       */
      originY: "center",
      drawObject: function(l) {
        l.save(), l.fillStyle = "black", l.fillRect(-this.width / 2, -this.height / 2, this.width, this.height), l.restore(), this.callSuper("drawObject", l);
      },
      /**
       * eraser should retain size
       * dimensions should not change when paths are added or removed
       * handled by {@link fabric.Object#_drawClipPath}
       * @override
       * @private
       */
      _getBounds: function() {
      },
      /* _TO_SVG_START_ */
      /**
       * Returns svg representation of an instance
       * use <mask> to achieve erasing for svg, credit: https://travishorn.com/removing-parts-of-shapes-in-svg-b539a89e5649
       * for masking we need to add a white rect before all paths
       *
       * @param {Function} [reviver] Method for further parsing of svg representation.
       * @return {String} svg representation of an instance
       */
      _toSVG: function(l) {
        var n = ["<g ", "COMMON_PARTS", ` >
`], h = -this.width / 2, f = -this.height / 2, g = [
          "<rect ",
          'fill="white" ',
          'x="',
          h,
          '" y="',
          f,
          '" width="',
          this.width,
          '" height="',
          this.height,
          `" />
`
        ].join("");
        n.push("		", g);
        for (var p = 0, m = this._objects.length; p < m; p++)
          n.push("		", this._objects[p].toSVG(l));
        return n.push(`</g>
`), n;
      }
      /* _TO_SVG_END_ */
    }), c.Eraser.fromObject = function(l, n) {
      var h = l.objects;
      c.util.enlivenObjects(h, function(f) {
        var g = c.util.object.clone(l, !0);
        delete g.objects, c.util.enlivenObjectEnlivables(l, g, function() {
          n && n(new c.Eraser(f, g, !0));
        });
      });
    };
    var s = c.Canvas.prototype._renderOverlay;
    c.util.object.extend(c.Canvas.prototype, {
      /**
       * Used by {@link #renderAll}
       * @returns boolean
       */
      isErasing: function() {
        return this.isDrawingMode && this.freeDrawingBrush && this.freeDrawingBrush.type === "eraser" && this.freeDrawingBrush._isErasing;
      },
      /**
       * While erasing the brush clips out the erasing path from canvas
       * so we need to render it on top of canvas every render
       * @param {CanvasRenderingContext2D} ctx
       */
      _renderOverlay: function(l) {
        s.call(this, l), this.isErasing() && !this.freeDrawingBrush.inverted && this.freeDrawingBrush._render();
      }
    }), c.EraserBrush = c.util.createClass(
      c.PencilBrush,
      /** @lends fabric.EraserBrush.prototype */
      {
        type: "eraser",
        /**
         * When set to `true` the brush will create a visual effect of undoing erasing
         */
        inverted: !1,
        /**
         * @private
         */
        _isErasing: !1,
        /**
         *
         * @private
         * @param {fabric.Object} object
         * @returns boolean
         */
        _isErasable: function(l) {
          return l.erasable !== !1;
        },
        /**
         * @private
         * This is designed to support erasing a collection with both erasable and non-erasable objects.
         * Iterates over collections to allow nested selective erasing.
         * Prepares the pattern brush that will draw on the top context to achieve the desired visual effect.
         * If brush is **NOT** inverted render all non-erasable objects.
         * If brush is inverted render all erasable objects that have been erased with their clip path inverted.
         * This will render the erased parts as if they were not erased.
         *
         * @param {fabric.Collection} collection
         * @param {CanvasRenderingContext2D} ctx
         * @param {{ visibility: fabric.Object[], eraser: fabric.Object[], collection: fabric.Object[] }} restorationContext
         */
        _prepareCollectionTraversal: function(l, n, h) {
          l.forEachObject(function(f) {
            f.forEachObject && f.erasable === "deep" ? this._prepareCollectionTraversal(f, n, h) : !this.inverted && f.erasable && f.visible ? (f.visible = !1, l.dirty = !0, h.visibility.push(f), h.collection.push(l)) : this.inverted && f.visible && (f.erasable && f.eraser ? (f.eraser.inverted = !0, f.dirty = !0, l.dirty = !0, h.eraser.push(f), h.collection.push(l)) : (f.visible = !1, l.dirty = !0, h.visibility.push(f), h.collection.push(l)));
          }, this);
        },
        /**
         * Prepare the pattern for the erasing brush
         * This pattern will be drawn on the top context, achieving a visual effect of erasing only erasable objects
         * @todo decide how overlay color should behave when `inverted === true`, currently draws over it which is undesirable
         * @private
         */
        preparePattern: function() {
          this._patternCanvas || (this._patternCanvas = c.util.createCanvasElement());
          var l = this._patternCanvas;
          l.width = this.canvas.width, l.height = this.canvas.height;
          var n = l.getContext("2d");
          if (this.canvas._isRetinaScaling()) {
            var h = this.canvas.getRetinaScaling();
            this.canvas.__initRetinaScaling(h, l, n);
          }
          var f = this.canvas.backgroundImage, g = f && this._isErasable(f), p = this.canvas.overlayImage, m = p && this._isErasable(p);
          if (!this.inverted && (f && !g || this.canvas.backgroundColor))
            g && (this.canvas.backgroundImage = void 0), this.canvas._renderBackground(n), g && (this.canvas.backgroundImage = f);
          else if (this.inverted && f && g) {
            var C = this.canvas.backgroundColor;
            this.canvas.backgroundColor = void 0, this.canvas._renderBackground(n), this.canvas.backgroundColor = C;
          }
          n.save(), n.transform.apply(n, this.canvas.viewportTransform);
          var w = { visibility: [], eraser: [], collection: [] };
          if (this._prepareCollectionTraversal(this.canvas, n, w), this.canvas._renderObjects(n, this.canvas._objects), w.visibility.forEach(function(x) {
            x.visible = !0;
          }), w.eraser.forEach(function(x) {
            x.eraser.inverted = !1, x.dirty = !0;
          }), w.collection.forEach(function(x) {
            x.dirty = !0;
          }), n.restore(), !this.inverted && (p && !m || this.canvas.overlayColor))
            m && (this.canvas.overlayImage = void 0), s.call(this.canvas, n), m && (this.canvas.overlayImage = p);
          else if (this.inverted && p && m) {
            var C = this.canvas.overlayColor;
            this.canvas.overlayColor = void 0, s.call(this.canvas, n), this.canvas.overlayColor = C;
          }
        },
        /**
         * Sets brush styles
         * @private
         * @param {CanvasRenderingContext2D} ctx
         */
        _setBrushStyles: function(l) {
          this.callSuper("_setBrushStyles", l), l.strokeStyle = "black";
        },
        /**
         * **Customiztion**
         *
         * if you need the eraser to update on each render (i.e animating during erasing) override this method by **adding** the following (performance may suffer):
         * @example
         * ```
         * if(ctx === this.canvas.contextTop) {
         *  this.preparePattern();
         * }
         * ```
         *
         * @override fabric.BaseBrush#_saveAndTransform
         * @param {CanvasRenderingContext2D} ctx
         */
        _saveAndTransform: function(l) {
          this.callSuper("_saveAndTransform", l), this._setBrushStyles(l), l.globalCompositeOperation = l === this.canvas.getContext() ? "destination-out" : "source-over";
        },
        /**
         * We indicate {@link fabric.PencilBrush} to repaint itself if necessary
         * @returns
         */
        needsFullRender: function() {
          return !0;
        },
        /**
         *
         * @param {fabric.Point} pointer
         * @param {fabric.IEvent} options
         * @returns
         */
        onMouseDown: function(l, n) {
          this.canvas._isMainEvent(n.e) && (this._prepareForDrawing(l), this._captureDrawingPath(l), this.preparePattern(), this._isErasing = !0, this.canvas.fire("erasing:start"), this._render());
        },
        /**
         * Rendering Logic:
         * 1. Use brush to clip canvas by rendering it on top of canvas (unnecessary if `inverted === true`)
         * 2. Render brush with canvas pattern on top context
         *
         */
        _render: function() {
          var l;
          this.inverted || (l = this.canvas.getContext(), this.callSuper("_render", l)), l = this.canvas.contextTop, this.canvas.clearContext(l), this.callSuper("_render", l), l.save();
          var n = this.canvas.getRetinaScaling(), h = 1 / n;
          l.scale(h, h), l.globalCompositeOperation = "source-in", l.drawImage(this._patternCanvas, 0, 0), l.restore();
        },
        /**
         * Creates fabric.Path object
         * @override
         * @private
         * @param {(string|number)[][]} pathData Path data
         * @return {fabric.Path} Path to add on canvas
         * @returns
         */
        createPath: function(l) {
          var n = this.callSuper("createPath", l);
          return n.globalCompositeOperation = this.inverted ? "source-over" : "destination-out", n.stroke = this.inverted ? "white" : "black", n;
        },
        /**
         * Utility to apply a clip path to a path.
         * Used to preserve clipping on eraser paths in nested objects.
         * Called when a group has a clip path that should be applied to the path before applying erasing on the group's objects.
         * @param {fabric.Path} path The eraser path in canvas coordinate plane
         * @param {fabric.Object} clipPath The clipPath to apply to the path
         * @param {number[]} clipPathContainerTransformMatrix The transform matrix of the object that the clip path belongs to
         * @returns {fabric.Path} path with clip path
         */
        applyClipPathToPath: function(l, n, h) {
          var f = c.util.invertTransform(l.calcTransformMatrix()), g = n.calcTransformMatrix(), p = n.absolutePositioned ? f : c.util.multiplyTransformMatrices(
            f,
            h
          );
          return n.absolutePositioned = !1, c.util.applyTransformToObject(
            n,
            c.util.multiplyTransformMatrices(
              p,
              g
            )
          ), l.clipPath = l.clipPath ? c.util.mergeClipPaths(n, l.clipPath) : n, l;
        },
        /**
         * Utility to apply a clip path to a path.
         * Used to preserve clipping on eraser paths in nested objects.
         * Called when a group has a clip path that should be applied to the path before applying erasing on the group's objects.
         * @param {fabric.Path} path The eraser path
         * @param {fabric.Object} object The clipPath to apply to path belongs to object
         * @param {Function} callback Callback to be invoked with the cloned path after applying the clip path
         */
        clonePathWithClipPath: function(l, n, h) {
          var f = n.calcTransformMatrix(), g = n.clipPath, p = this;
          l.clone(function(m) {
            g.clone(function(C) {
              h(p.applyClipPathToPath(m, C, f));
            }, ["absolutePositioned", "inverted"]);
          });
        },
        /**
         * Adds path to object's eraser, walks down object's descendants if necessary
         *
         * @fires erasing:end on object
         * @param {fabric.Object} obj
         * @param {fabric.Path} path
         */
        _addPathToObjectEraser: function(l, n) {
          var h = this;
          if (l.forEachObject && l.erasable === "deep") {
            var f = l._objects.filter(function(p) {
              return p.erasable;
            });
            f.length > 0 && l.clipPath ? this.clonePathWithClipPath(n, l, function(p) {
              f.forEach(function(m) {
                h._addPathToObjectEraser(m, p);
              });
            }) : f.length > 0 && f.forEach(function(p) {
              h._addPathToObjectEraser(p, n);
            });
            return;
          }
          var g = l.eraser;
          g || (g = new c.Eraser(), l.eraser = g), n.clone(function(p) {
            var m = c.util.multiplyTransformMatrices(
              c.util.invertTransform(
                l.calcTransformMatrix()
              ),
              p.calcTransformMatrix()
            );
            c.util.applyTransformToObject(p, m), g.addWithUpdate(p), l.set("dirty", !0), l.fire("erasing:end", {
              path: p
            }), l.group && Array.isArray(h.__subTargets) && h.__subTargets.push(l);
          });
        },
        /**
         * Add the eraser path to canvas drawables' clip paths
         *
         * @param {fabric.Canvas} source
         * @param {fabric.Canvas} path
         * @returns {Object} canvas drawables that were erased by the path
         */
        applyEraserToCanvas: function(l) {
          var n = this.canvas, h = {};
          return [
            "backgroundImage",
            "overlayImage"
          ].forEach(function(f) {
            var g = n[f];
            g && g.erasable && (this._addPathToObjectEraser(g, l), h[f] = g);
          }, this), h;
        },
        /**
         * On mouseup after drawing the path on contextTop canvas
         * we use the points captured to create an new fabric path object
         * and add it to every intersected erasable object.
         */
        _finalizeAndAddPath: function() {
          var l = this.canvas.contextTop, n = this.canvas;
          l.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate)), n.clearContext(n.contextTop), this._isErasing = !1;
          var h = this._points && this._points.length > 1 ? this.convertPointsToSVGPath(this._points) : null;
          if (!h || this._isEmptySVGPath(h)) {
            n.fire("erasing:end"), n.requestRenderAll();
            return;
          }
          var f = this.createPath(h);
          f.setCoords(), n.fire("before:path:created", { path: f });
          var g = this.applyEraserToCanvas(f), p = this;
          this.__subTargets = [];
          var m = [];
          n.forEachObject(function(C) {
            C.erasable && C.intersectsWithObject(f, !0, !0) && (p._addPathToObjectEraser(C, f), m.push(C));
          }), n.fire("erasing:end", {
            path: f,
            targets: m,
            subTargets: this.__subTargets,
            drawables: g
          }), delete this.__subTargets, n.requestRenderAll(), this._resetShadow(), n.fire("path:created", { path: f });
        }
      }
    );
  }();
})($e);
class Dt {
  /**
   *
   * @param {EditorCore} core
   */
  constructor(c, y) {
    this.core = c, this.config = y, this.c = c.c, this.name = "unknown";
  }
}
class Uo extends Dt {
  constructor(c, y) {
    super(c, y), this.onPathCreated = (_) => {
      const v = _.path;
      v.selectable = !1, v.hoverCursor = "default";
    };
  }
  onSelect() {
    this.c.isDrawingMode = !0, this.c.freeDrawingBrush = new $e.fabric.EraserBrush(this.c), this.c.freeDrawingBrush.width = this.config.thickness * 4 / this.core.zoomMin, this.c.on("path:created", this.onPathCreated);
  }
  onDeselect() {
    this.c.isDrawingMode = !1, this.c.off("path:created", this.onPathCreated);
  }
}
class Go extends Dt {
  onSelect() {
    this.c.isDrawingMode = !0, this.c.freeDrawingBrush = new $e.fabric.PencilBrush(this.c), this.c.freeDrawingBrush.width = this.config.thickness * 1 / this.core.zoomMin, this.c.freeDrawingBrush.color = this.config.color.code;
  }
  onDeselect() {
    this.c.isDrawingMode = !1;
  }
}
function Vo(d, c) {
  var y = parseInt(d.slice(1, 3), 16), _ = parseInt(d.slice(3, 5), 16), v = parseInt(d.slice(5, 7), 16);
  return c ? "rgba(" + y + ", " + _ + ", " + v + ", " + c + ")" : "rgb(" + y + ", " + _ + ", " + v + ")";
}
class $o extends Dt {
  onSelect() {
    this.c.isDrawingMode = !0, this.c.freeDrawingBrush = new $e.fabric.PencilBrush(this.c), this.c.freeDrawingBrush.width = this.config.thickness * 8 / this.core.zoomMin, this.c.freeDrawingBrush.color = Vo(this.config.color.code, 0.4), this.c.isDrawingMode = !0;
  }
  onDeselect() {
    this.c.isDrawingMode = !1;
  }
}
class Ko extends Dt {
  constructor(c, y = null) {
    super(c, y), this.touchPositions = {}, this.onMouseDown = (_) => {
      const v = _.e;
      if (v.type === "touchstart") {
        this.isDragging = v.touches.length === 1;
        for (const T of v.changedTouches)
          this.touchPositions[T.identifier] = {
            x: T.clientX,
            y: T.clientY
          };
      } else
        this.isDragging = !0, this.lastPosX = v.clientX, this.lastPosY = v.clientY;
    }, this.onMouseUp = (_) => {
      const v = _.e;
      if (v.type === "touchend")
        for (const T of v.changedTouches)
          delete this.touchPositions[T.identifier];
      this.c.setViewportTransform(this.c.viewportTransform), this.isDragging = !1;
    }, this.onMouseMove = (_) => {
      if (_.e.type === "mousemove" && this.isDragging) {
        const v = _.e;
        this.core.pan(v.clientX - this.lastPosX, v.clientY - this.lastPosY), this.lastPosX = v.clientX, this.lastPosY = v.clientY;
      }
    }, this.onObjectSelected = (_) => {
      this.pausePanning = !0;
    }, this.onSelectionCleared = (_) => {
      this.pausePanning = !1;
    }, this.onTouchDrag = (_) => {
      const v = _.e;
      if (v.type === "touchmove" && this.isDragging) {
        if (v.touches.length > 1)
          return;
        for (const T of v.changedTouches) {
          const R = this.touchPositions[T.identifier];
          if (!R)
            return;
          this.core.pan(T.clientX - R.x, T.clientY - R.y), this.touchPositions[T.identifier] = {
            x: T.clientX,
            y: T.clientY
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
class qo extends Dt {
  constructor(c, y = null) {
    super(c, y);
  }
  onDeselect() {
    this.c.discardActiveObject().renderAll();
  }
}
const xe = {
  FREEDRAW: "FREEDRAW",
  SELECT: "SELECT",
  PAN: "PAN",
  TEXT: "TEXT",
  MARKER: "MARKER",
  ERASER: "ERASER"
}, tt = {
  BLACK: "#000000",
  RED: "#d82735",
  YELLOW: "#ffcb35",
  GREEN: "#009e47",
  BLUE: "#0052a5"
}, jt = 6, cr = 60, Qo = {
  HISTORY_CHANGE: "history.change",
  AVAILABILITY_CHANGE: "availability.change",
  TOOL_CHANGE: "tool.change",
  MODE_CHANGE: "mode.change",
  TEXT_CHANGE: "text.change"
}, Jo = {
  BRUSH: "BRUSH",
  TEXT: "TEXT",
  IMAGE: "IMAGE"
}, Zo = {
  FREEDRAW: "FREEBRUSH",
  MARKER: "MARKER",
  ERASER: "ERASER",
  TEXT: "TEXT"
}, Ve = class extends EventTarget {
  constructor({
    imageUrl: y,
    touchEnabled: _
  }) {
    super();
    Ye(this, "mode", Ve.Mode.BRUSH);
    Ye(this, "imageUrl");
    Ye(this, "_busy");
    Ye(this, "zoomMin", 1);
    Ye(this, "zoomMax", 2);
    Ye(this, "history", {
      index: -1,
      records: []
    });
    Ye(this, "_isTraversingHistory", !1);
    Ye(this, "touchEnabled");
    Ye(this, "c", null);
    this.config = this.fetchConfig(), this._busy = !0, this.imageUrl = y, this.tools = {
      [xe.FREEDRAW]: {
        class: Go
      },
      [xe.MARKER]: {
        class: $o
      },
      [xe.ERASER]: {
        class: Uo
      },
      [xe.PAN]: {
        class: Ko
      },
      [xe.SELECT]: {
        class: qo
      }
    }, this.touchEnabled = _;
  }
  setCanvas(y) {
    this.c = new $e.fabric.Canvas(y, {
      selection: !1
    });
    const _ = this.c;
    this.c.usePencil = this.touchEnabled ? this.config.usePencil : !1, $e.fabric.Image.fromURL(
      this.imageUrl,
      (v) => {
        _.getElement() && (v.erasable = !1, this.busy = !1, _.setBackgroundImage(v, null), this.fitCanvas(), this.pushHistory(), this.selectTool(this.fetchTool()), this.c.on("touch:gesture", this.onGesture), this.c.on("mouse:up", this.onMouseUp), this.c.on("object:added", this.onObjectAdded), this.c.on("object:modified", this.onObjectModified), this.c.on("object:removed", this.onObjectRemoved), this.c.on("selection:created", this.onObjectSelected), this.c.on("selection:cleared", this.onObjectDeselected));
      },
      {
        crossOrigin: "anonymous"
      }
    ), this.c.on("mouse:wheel", (v) => {
      v.e.preventDefault(), v.e.stopPropagation();
      const T = v.e.deltaY;
      this.zoom(
        { x: v.e.offsetX, y: v.e.offsetY },
        this.c.getZoom() * 0.999 ** T
      );
    }), this.onGesture = (v) => {
      const T = v.e;
      if (T.touches && T.touches.length === 2) {
        this.isDragging = !1;
        const R = new $e.fabric.Point(v.self.x, v.self.y), X = [];
        for (const u of T.touches)
          X.push({
            identifier: u.identifier,
            clientX: u.clientX,
            clientY: u.clientY
          });
        if (v.self.state === "start") {
          this.zoomStartScale = this.c.getZoom(), this.touches = X;
          return;
        }
        this.lastPoint && this.pan(R.x - this.lastPoint.x, R.y - this.lastPoint.y);
        const N = this.zoomStartScale * (T.scale ?? v.self.scale);
        this.zoom(R, N), this.lastPoint = R, this.touches = X;
      }
    }, this.onMouseUp = (v) => {
      v.e.type === "touchend" && (this.lastPoint = null, this.touches = null);
    }, this.onObjectAdded = (v) => {
      if (v.target.type === "path") {
        const T = v.target;
        T.selectable = !1, T.hoverCursor = "default";
      }
      this.c.getObjects("image").forEach((T) => {
        this.c.bringToFront(T);
      }), this.c.getObjects("path").forEach((T) => {
        this.c.bringToFront(T);
      }), this.c.getObjects("i-text").forEach((T) => {
        this.c.bringToFront(T);
      }), !this.isTraversingHistory && this.pushHistory();
    }, this.onObjectModified = (v) => {
      if (!this.isTraversingHistory) {
        if (v.target.type === "i-text" && v.target.text.trim() === "") {
          const T = this.isTraversingHistory;
          this.isTraversingHistory = !0, this.c.remove(v.target), this.isTraversingHistory = T;
        }
        this.pushHistory();
      }
    }, this.onObjectRemoved = (v) => {
      this.isTraversingHistory || this.pushHistory();
    }, this.onObjectSelected = (v) => {
      const T = v.selected[0];
      switch (T.type) {
        case "i-text":
          this._dispatch(Ve.Event.MODE_CHANGE, Ve.Mode.TEXT);
          return;
        case "image":
          this._dispatch(Ve.Event.MODE_CHANGE, Ve.Mode.IMAGE);
          return;
        default:
          throw new Error(`object type ${T.type} selected`);
      }
    }, this.onObjectDeselected = (v) => {
      this._dispatch(Ve.Event.MODE_CHANGE, Ve.Mode.BRUSH);
    };
  }
  zoom(y, _) {
    const v = Math.max(this.zoomMin, Math.min(this.zoomMax, _));
    this.c.zoomToPoint(y, v), this.adjustPan();
  }
  pan(y, _) {
    this.c.relativePan({ x: y, y: _ }), this.adjustPan();
  }
  clamp(y, _, v) {
    return Math.min(Math.max(y, _), v);
  }
  adjustPan() {
    const y = this.c.viewportTransform, _ = this.c.getZoom(), v = {
      x: this.c.getWidth() * (1 / this.zoomMin - 1) / 2,
      y: this.c.getHeight() * (1 / this.zoomMin - 1) / 2
    }, T = {
      width: (v.x + this.c.backgroundImage.left) * 2 + this.c.backgroundImage.width,
      height: (v.y + this.c.backgroundImage.top) * 2 + this.c.backgroundImage.height
    }, R = {
      x: {
        min: this.c.getWidth() + (v.x - T.width) * _,
        max: v.x * _
      },
      y: {
        min: this.c.getHeight() + (v.y - T.height) * _,
        max: v.y * _
      }
    };
    y[4] = this.clamp(y[4], R.x.min, R.x.max), y[5] = this.clamp(y[5], R.y.min, R.y.max), this.c.setViewportTransform(y);
  }
  detach() {
    this.c && (this.c.dispose(), this.tool = null);
  }
  getToolConfig(y) {
    switch (y) {
      case xe.FREEDRAW:
        return this.config.freedraw;
      case xe.MARKER:
        return this.config.marker;
      case xe.ERASER:
        return this.config.eraser;
      default:
        return null;
    }
  }
  selectTool(y) {
    var R, X, N;
    if (!this.available)
      return;
    const _ = this.getToolConfig(y), v = new this.tools[y].class(this, _), T = this.tool;
    (X = T == null ? void 0 : (R = T.instance).onDeselect) == null || X.call(R), this.tool = { name: y, instance: v }, (N = v.onSelect) == null || N.call(v), (T == null ? void 0 : T.type) !== v && this._dispatch(Ve.Event.TOOL_CHANGE, y), this.cacheTool();
  }
  updateToolConfig(y, _) {
    const v = this.getToolConfig(y), T = Object.assign({}, v, _);
    switch (y) {
      case xe.FREEDRAW:
        this.config.freedraw = T;
        break;
      case xe.MARKER:
        this.config.marker = T;
        break;
      case xe.ERASER:
        this.config.eraser = T;
        break;
      default:
        throw new Error(`Invalid toolId ${y}`);
    }
    return this.tool.name === y && this.selectTool(y), this.cacheConfig(), T;
  }
  setContainerSize(y) {
    this.containerSize = y, this.fitCanvas();
  }
  addImage(y) {
    this.available && (this.busy = !0, this.selectTool(xe.SELECT), $e.fabric.Image.fromURL(
      y,
      (_) => {
        this.c.add(_), this.c.centerObject(_), this.c.setActiveObject(_), _.erasable = !1, this.busy = !1;
      },
      {
        crossOrigin: "anonymous"
      }
    ));
  }
  calcTextSize(y) {
    return (jt + y / 100 * (cr - jt)) / this.zoomMin;
  }
  calcFontSize(y) {
    return (y * this.zoomMin - jt) / (cr - jt) * 100;
  }
  addText(y) {
    if (!this.available)
      return;
    this.selectTool(xe.SELECT);
    const _ = new $e.fabric.IText(y);
    _.set("fill", this.config.text.color.code), _.set("fontSize", this.calcTextSize(this.config.text.fontSize)), this.c.viewportCenterObject(_), _.erasable = !1, this.c.add(_), this.c.setActiveObject(_), _.selectAll(), _.enterEditing();
  }
  async undo() {
    if (!this.available || this.history.index === 0)
      return;
    this.history.index -= 1;
    const y = this.history.records[this.history.index];
    await this.loadFromHistory(y), this._dispatchHistoryChange();
  }
  async redo() {
    if (!this.available || this.history.index >= this.history.records.length - 1)
      return;
    this.history.index += 1;
    const y = this.history.records[this.history.index];
    await this.loadFromHistory(y), this._dispatchHistoryChange();
  }
  async loadFromHistory(y) {
    this.isTraversingHistory = !0, await new Promise((_, v) => {
      try {
        $e.fabric.util.enlivenObjects(
          y,
          (T) => {
            this.c.remove(...this.c.getObjects()), T.forEach((R) => {
              this.c.add(R);
            }), this.c.renderAll(), _();
          },
          null
        );
      } catch (T) {
        v(T);
      }
    }), this.isTraversingHistory = !1;
  }
  get isTraversingHistory() {
    return this._isTraversingHistory;
  }
  set isTraversingHistory(y) {
    this._isTraversingHistory = y, this._dispatchAvailbilityChange();
  }
  get busy() {
    return this._busy;
  }
  set busy(y) {
    this._busy = y, this._dispatchAvailbilityChange();
  }
  get available() {
    return !this._isTraversingHistory && !this.busy;
  }
  pushHistory() {
    const y = this.history.records.slice(0, this.history.index + 1);
    this.history.records = [...y, this.c.toObject().objects], this.history.index = this.history.records.length - 1, this._dispatchHistoryChange();
  }
  onHistoryChange(y) {
    this.onHistoryChangeListener = y;
  }
  onAvailabilityChange(y) {
    this.onAvailabilityChangeListener = y;
  }
  on(y, _) {
    const v = (T) => {
      _(T.detail);
    };
    return this.addEventListener(y, v), () => {
      this.removeEventListener(y, v);
    };
  }
  getHistoryInfo() {
    return {
      index: this.history.index,
      histories: this.history.records.length
    };
  }
  _dispatch(y, _) {
    this.dispatchEvent(
      new CustomEvent(y, {
        detail: _
      })
    );
  }
  _dispatchHistoryChange() {
    this._dispatch(Ve.Event.HISTORY_CHANGE, this.getHistoryInfo());
  }
  _dispatchAvailbilityChange() {
    this._dispatch(Ve.Event.AVAILABILITY_CHANGE, this.available);
  }
  fitCanvas() {
    if (!this.c.backgroundImage || !this.containerSize)
      return;
    const y = Math.min(
      1,
      Math.min(
        this.containerSize.width / this.c.backgroundImage.width,
        this.containerSize.height / this.c.backgroundImage.height
      )
    );
    this.c.setWidth(this.containerSize.width), this.c.setHeight(this.containerSize.height), this.c.backgroundImage.center();
    const _ = new $e.fabric.Rect({
      width: this.c.backgroundImage.width,
      height: this.c.backgroundImage.height,
      top: this.c.backgroundImage.top,
      left: this.c.backgroundImage.left
    });
    this.c.clipPath = _, this.zoomMin = y, this.zoom(
      { x: this.containerSize.width / 2, y: this.containerSize.height / 2 },
      y
    );
  }
  getDataUrl(y) {
    const _ = this.c.viewportTransform;
    this.c.viewportTransform = $e.fabric.iMatrix.slice(0);
    const v = this.c.toDataURL({
      format: y.toLowerCase() === "png" ? "png" : "jpeg",
      width: this.c.clipPath.width,
      height: this.c.clipPath.height,
      left: this.c.clipPath.left,
      top: this.c.clipPath.top
    });
    return this.c.viewportTransform = _, v;
  }
  deleteSelectedObject() {
    this.c.remove(this.c.getActiveObject());
  }
  changeSelectedTextSize(y) {
    this.c.getActiveObject().set("fontSize", this.calcTextSize(y)), this.config.text.fontSize = y, this.cacheConfig(), this.c.requestRenderAll();
  }
  changeSelectedTextColor(y) {
    this.c.getActiveObject().set("fill", y.code), this.config.text.color = y, this.cacheConfig(), this.c.requestRenderAll();
  }
  changeSelectedTextMessage(y) {
    this.c.getActiveObject().set("text", y), this.c.requestRenderAll();
  }
  getSelectedTextSize() {
    const y = this.c.getActiveObject();
    return this.calcFontSize(y.fontSize);
  }
  getSelectedTextColor() {
    const y = this.c.getActiveObject();
    return Object.values(tt).includes(y.fill) ? {
      type: "preset",
      code: y.fill
    } : {
      type: "custom",
      code: y.fill
    };
  }
  getSelectedTextContents() {
    return this.c.getActiveObject().text;
  }
  setUsePencil(y) {
    this.config.usePencil = y, this.c.usePencil = y, this.cacheConfig();
  }
  fetchConfig() {
    const y = localStorage.getItem("editorConfig"), _ = y ? JSON.parse(y) : null;
    return {
      freedraw: (_ == null ? void 0 : _.freedraw) ?? {
        thickness: 3,
        color: {
          type: "preset",
          code: tt.BLACK
        }
      },
      marker: (_ == null ? void 0 : _.marker) ?? {
        thickness: 3,
        color: {
          type: "preset",
          code: tt.BLACK
        }
      },
      eraser: (_ == null ? void 0 : _.eraser) ?? {
        thickness: 3
      },
      text: (_ == null ? void 0 : _.text) ?? {
        color: {
          type: "preset",
          code: tt.BLACK
        },
        fontSize: 40
      },
      usePencil: (_ == null ? void 0 : _.usePencil) ?? !0
    };
  }
  fetchTool() {
    return localStorage.getItem("editorTool") ?? xe.PAN;
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
let ze = Ve;
Ye(ze, "Event", Qo), Ye(ze, "Mode", Jo), Ye(ze, "ConfigName", Zo);
const ea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABgpJREFUWEeVl7uPG1UYxc+1x563X7uERwUtDVIoIlIgIhQBUoRWSFAihSIgKFKCqOiSAkSEBCI0adOQCCUNKChQkCD+BUoQCo+APU/P+HHRuQ971uvNwkqf7npm7fP7zvnu3bHA//iRv+CEnLffE3XrFOpWD7UQqAHUUqKSCerl96jnF8UruPtfP1Yc9YdSwpVp+6qYdfZQd4CZA9QOMGsBtYACqCRQL4FqAUznQFUD1fwmlvNXxVlMH6TxQIDZwrnkLDrnMXOhqwMN0QZqlgGoJVARgOJzYFqbqoCi+kycX7xzGMRWgJ8l3C4694bwB/HSN+IE6BoAutDSLlQqAt29qtlavJwC+RTIyhR/1g+Lj1FughwAuDnGsN93748QiBECjOCju/CA2tMAygVGQAcYAyNY6giU/QSodFE8L4GsYElMp8fER/irCbEP4BMJdwduOUIodhBipMrHQPoQc0KYGBSEjYAxmPyb9hf7xIEsB9Jcoj0Nm07sA7goO/8MEQ12EGGECBpCuxDYKOqmC40hbNpP6wmQ2e4pntlKxZW6Z11YAby1cC6NWsH5HcTQRQjrgoZw6AKHUUE0IlD22/w5eJviFiAFUlb2hfhy8SYhFMBLEu4Q/nQHPeyuAGLjAkEIEKAvOZBmFuxWVENodgCnv2T2q9wbnadAYisBFkUobqBQACeX7esjEe/tKoAeCNJ0Yu1GAI8DqbYkdwJdMENoh88OXpoDmbF9JUyABJhM6MTX4rv5iwrgSenJXfSV+HptQtCNUM3EEAFaCoBb0gIY+5m9yl0NnLa72bUSNwCE+KFsCV/ixBDxjw+hD5YGsDDaDe2KHkxGsT4bGgC031rPgUvYPcUIMdHCdh3z9RgoiudEe9m/3hPe3lB9eLyC2ITRsXBn6OHUZwNjYARzM3hFo3PTrRVlx1bY/p6k34iOfHw8QNjvI8QAIfqI1Eog3b11pjkfEQYygFAxQJ987F51zk43rLbCB9dMuPLp5QChaIrz983XBGrGQyfU2UAAbjtabges2e1KdKwdGI+1/VzHYyk8eVpawYHp3rqgr2tHNoEYFx1yCMBBU6L8cLNqAVMm833X9D3hydcMwFqIojqSbdf0dd7vSR9+AbTT8nBx1e02KO2EcOW55QCRimCzy6YTFLTVQ4h44cLPgW4BBCXgZku0Joxhw4kmwNp6O5BSdOW74z7Cvha3EOsu18IBKMyKagdBAXQzwMmAaAblhJcB3WQOsZoFE4mF2Leqe7lw5IWveghebopvdquFA8QyQDRtIaRYATipLgIEFZQjhPDV9UrPg9qGFsTOglmTyS0B+fkzPXh39osGOmNTsTp8PESl0OI54OZavJUA0RwIKx2FdYIQbirRTgoNsQ0kT59XR7Enr8lmvn0KNsXnXSXMovUUp/3tBBATICYAXZgaCDrBSrUbbrqEUEcyO191DxRnWgrAkd/eiBGcsVarIVMVIKraiBritvtOprsXY+0AYwhrA1BqAD9bR0KYbjIzBxX/GU1uidnx0/p5QN72AhwrKajFTd6lUOLsmqXsNd1z+FoT7QCFFQQBmlHwPRsQBHESPi1NIoFH8tUDSVv++mkE/23V9cJDzK7Lte0cMALQejX9KSCMA0G9jkHNgomCg6re1xhOAng5roQz8cbqgcQ+HnVlnUR1J45K7LOdwvwQZs/qpDx8dAQYA/4UiBeNGKwLZigVhHUiQ/FEJcIDj2Q6Cul7fyMPCwg7dFac3djhY/cKYKIB3BLoLQ664BOAZVzwc0i/RPwURL4dgFd/k7veGH8EBYTN3XbftfkTgPYbB3gaWoDVMDKGqQHQ8yP7JR47BXHv0Mfy1Y070u/W+N3PEdvBW3Vv8rdbkA50cgPQiEHNwjqKIqhw7PVG54c70MBrX5WX3RznbPb26LUHEHcAAfi6t9QRqDOhNluyUuuVD8zAbft6duSXU1yWgXMf1zopXuDeZ7F7dQYYAM6DisDMgYphhluPzrD34Zauj45g6zdJKZyzeLaV4H2R4KRIEIoJBA8iMYHsLVH0l7jbk7jw0xy3ASGP+ubN+/8CCrP4h3UWm6AAAAAASUVORK5CYII=";
function qt({ children: d, ...c }) {
  return /* @__PURE__ */ U.jsx(
    yn,
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
      ...c,
      children: d
    }
  );
}
const ta = {
  black: "#000",
  white: "#fff"
}, At = ta, ia = {
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
}, ht = ia, ra = {
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
}, na = ra, sa = {
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
}, ut = sa, oa = {
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
}, aa = oa, la = {
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
}, ca = la, ha = {
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
}, yt = ha, ua = {
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
}, ft = ua, fa = {
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
}, dt = fa, da = {
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
}, ga = da, pa = {
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
}, va = pa, ma = {
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
}, ya = ma, _a = {
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
}, _t = _a, ba = {
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
}, it = ba, Ca = [
  tt.BLACK,
  tt.RED,
  tt.YELLOW,
  tt.GREEN,
  tt.BLUE
];
function hr({ type: d, color: c, selected: y, onClick: _ }) {
  return /* @__PURE__ */ U.jsx(St, { sx: { p: 0 }, onClick: _, children: /* @__PURE__ */ U.jsxs("svg", { width: "24", height: "24", children: [
    /* @__PURE__ */ U.jsxs("mask", { id: "mask", children: [
      /* @__PURE__ */ U.jsx(
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
      /* @__PURE__ */ U.jsx("circle", { cx: "50%", cy: "50%", r: "8", fill: "white" })
    ] }),
    d === "preset" ? /* @__PURE__ */ U.jsx(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: "50%",
        fill: c,
        mask: y ? "url(#mask)" : ""
      }
    ) : /* @__PURE__ */ U.jsx(
      "image",
      {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        href: ea,
        mask: y ? "url(#mask)" : ""
      }
    ),
    c && /* @__PURE__ */ U.jsx("circle", { cx: "50%", cy: "50%", r: "8", fill: c })
  ] }) });
}
const Vr = [100, 200, 300, 400, 500, 600, 700, 800, 900], xa = ["#ffffff", ...Vr.map((d) => it[d]), "#000000"], Sa = [
  ft,
  ca,
  aa,
  ut,
  na,
  ht,
  _t,
  ya,
  va,
  ga,
  dt
], wa = xa.concat(
  ...Vr.map((d) => Sa.map((c) => c[d]))
);
function Ta({ color: d, onClick: c }) {
  return /* @__PURE__ */ U.jsx(
    at,
    {
      sx: {
        width: 24,
        height: 24,
        borderRadius: 0,
        p: 0,
        backgroundColor: d
      },
      onClick: c
    }
  );
}
function Ea({ onChange: d }) {
  return /* @__PURE__ */ U.jsx(
    at,
    {
      sx: {
        p: 2,
        display: "grid",
        gridTemplateColumns: "repeat(11, 1fr)"
      },
      children: wa.map((c) => /* @__PURE__ */ U.jsx(Ta, { color: c, onClick: () => d(c) }, c))
    }
  );
}
function $r({ value: d, onChange: c }) {
  const [y, _] = Ie(null), v = (N) => {
    d && c({
      type: "preset",
      code: N
    });
  }, T = (N) => {
    d && _(N.currentTarget);
  }, R = br(() => {
    _(null);
  }, []), X = (N) => {
    c({
      type: "custom",
      code: N
    }), R();
  };
  return /* @__PURE__ */ U.jsxs(
    at,
    {
      sx: {
        display: "grid",
        gridTemplateRows: "repeat(2, minmax(0, 1fr))",
        gridTemplateColumns: "repeat(3, minmax(0, min-content))",
        gap: 1
      },
      children: [
        Ca.map((N, u) => /* @__PURE__ */ U.jsx(
          hr,
          {
            selected: (d == null ? void 0 : d.type) === "preset" && (d == null ? void 0 : d.code) === N,
            type: "preset",
            color: N,
            onClick: () => v(N)
          },
          u
        )),
        /* @__PURE__ */ U.jsx(
          hr,
          {
            selected: (d == null ? void 0 : d.type) === "custom",
            type: "custom",
            color: (d == null ? void 0 : d.type) === "custom" ? d == null ? void 0 : d.code : null,
            onClick: T
          }
        ),
        /* @__PURE__ */ U.jsx(
          qt,
          {
            open: !!y,
            anchorEl: y,
            onClose: R,
            anchorOrigin: {
              vertical: -16,
              horizontal: "center"
            },
            children: /* @__PURE__ */ U.jsx(Ea, { onChange: X })
          }
        )
      ]
    }
  );
}
function Ci({
  leadingItems: d = null,
  palette: c = null,
  trailingItems: y
}) {
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(
      at,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 2
        },
        children: d
      }
    ),
    /* @__PURE__ */ U.jsx(at, { children: c }),
    /* @__PURE__ */ U.jsx(
      at,
      {
        sx: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2
        },
        children: y
      }
    )
  ] });
}
const He = ({
  Icon: d,
  selected: c = !1,
  small: y = !1,
  ..._
}) => /* @__PURE__ */ U.jsx(
  St,
  {
    color: "inherit",
    sx: {
      ":disabled": {
        backgroundColor: it[200],
        color: it[400]
      },
      ":hover": {
        backgroundColor: c ? "black" : it[200]
      },
      p: y ? 1 : 1.5,
      borderRadius: "50%",
      backgroundColor: c ? "black" : it[200],
      color: c ? "white" : "black"
    },
    ..._,
    children: /* @__PURE__ */ U.jsx(d, { sx: { fontSize: y ? 16 : 20 } })
  }
), Oa = ({ thickness: d, selected: c }) => /* @__PURE__ */ U.jsx(
  We,
  {
    sx: {
      p: 1,
      backgroundColor: c ? "black" : "transparent",
      borderRadius: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40
    },
    children: /* @__PURE__ */ U.jsx(
      We,
      {
        sx: {
          width: d * 4,
          height: d * 4,
          borderRadius: "50%",
          backgroundColor: c ? "white" : "black"
        }
      }
    )
  }
), Pa = [1, 2, 3, 4, 5], Aa = ({ value: d, onChange: c }) => {
  const y = (_) => {
    c({
      thickness: _
    });
  };
  return /* @__PURE__ */ U.jsx(We, { children: /* @__PURE__ */ U.jsx(
    We,
    {
      sx: {
        display: "flex",
        gap: 1
      },
      children: Pa.map((_) => /* @__PURE__ */ U.jsx(St, { onClick: () => y(_), children: /* @__PURE__ */ U.jsx(Oa, { thickness: _, selected: d.thickness === _ }) }, _))
    }
  ) });
}, ka = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("g", { fill: "currentColor", fillRule: "evenodd" }, /* @__PURE__ */ fe.createElement("path", { d: "M11.892 22.287c-.08.082-.15.168-.208.26.414.192 1.513.784 3.097 2.272 1.545 1.455 2.086 2.41 2.256 2.787.031-.026.066-.049.096-.076l12.081-12.082-5.241-5.24-12.08 12.079zM27.12 7.06l-1.797 1.797 5.241 5.24 1.798-1.795a1.592 1.592 0 0 0-.003-2.243l-2.997-2.998a1.593 1.593 0 0 0-2.243-.001M13.333 26.221c-1.901-1.784-3.061-2.19-3.061-2.19s-1.045 2.44-1.73 4.588c.602.348 1.633 1.105 2.425 2.494 2.096-.844 4.538-2.121 4.538-2.121s-.272-.984-2.172-2.77M7.45 30.087c-.41 1.278-.665 2.434-.357 2.655.292.209 1.291-.095 2.41-.545-.669-1.176-1.541-1.816-2.052-2.11M26.763 33.484H10.26l2.797-1.304H29z" })));
function Ma(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: ka, ...d });
}
function Da() {
  const [d, c] = Ie(null), { core: y } = Ke(), { tool: _, setTool: v } = wt(), [T, R] = Ie(y.getToolConfig(xe.FREEDRAW)), X = _ === xe.FREEDRAW, N = (a) => {
    X ? c(a.currentTarget) : v(xe.FREEDRAW);
  }, u = () => {
    c(null);
  }, i = (a) => {
    const o = y.updateToolConfig(xe.FREEDRAW, a);
    R(o), u();
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(He, { selected: X, Icon: Ma, onClick: N }),
    /* @__PURE__ */ U.jsx(
      qt,
      {
        open: !!d,
        anchorEl: d,
        onClose: u,
        children: /* @__PURE__ */ U.jsx(Aa, { value: T, onChange: i })
      }
    )
  ] });
}
const Ra = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("path", { d: "m20 6.957-5.07 5.07h4.146v7.049h-7.05v-4.147L6.957 20l5.07 5.07v-4.147h7.05v7.05H14.93l5.07 5.07 5.07-5.07h-4.146v-7.05h7.05v4.147l5.07-5.07-5.07-5.07v4.146h-7.05v-7.05h4.147z", fill: "currentColor", fillRule: "evenodd" }));
function ja(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: Ra, ...d });
}
function Fa() {
  const { tool: d, setTool: c } = wt(), y = d === xe.PAN, _ = (v) => {
    c(xe.PAN);
  };
  return /* @__PURE__ */ U.jsx(He, { selected: y, Icon: ja, onClick: _ });
}
const Ia = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("path", { d: "M27.232 16.057c-.678 0-1.261.395-1.538.967v-.065c0-.948-.751-1.752-1.7-1.757a1.707 1.707 0 0 0-1.546.968v-.065c0-.92-.707-1.712-1.626-1.755a1.709 1.709 0 0 0-1.792 1.707v-7.3c0-.92-.707-1.712-1.626-1.755a1.709 1.709 0 0 0-1.791 1.707v14.246l-1.113-4.01c-.261-.94-1.272-1.708-2.248-1.708a1.709 1.709 0 0 0-1.19 2.103l1.964 6.909a14.75 14.75 0 0 0 1.317 3.17l.953 1.704a3.023 3.023 0 0 0 2.638 1.546h6.797c1.156 0 2.21-.658 2.717-1.697a14.746 14.746 0 0 0 1.493-6.466v-6.74c0-.944-.765-1.71-1.709-1.71", fill: "currentColor", fillRule: "evenodd" }));
function La(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: Ia, ...d });
}
function Ba() {
  const { tool: d, setTool: c } = wt(), y = d === xe.SELECT, _ = (v) => {
    c(xe.SELECT);
  };
  return /* @__PURE__ */ U.jsx(
    He,
    {
      selected: y,
      Icon: La,
      onClick: _
    }
  );
}
const Ya = ({ thickness: d, selected: c }) => /* @__PURE__ */ U.jsx(
  We,
  {
    sx: {
      p: 1,
      backgroundColor: c ? "black" : "transparent",
      borderRadius: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40
    },
    children: /* @__PURE__ */ U.jsx(
      We,
      {
        sx: {
          width: d * 4,
          height: d * 4,
          borderRadius: "50%",
          backgroundColor: c ? "white" : "black"
        }
      }
    )
  }
), Xa = [1, 2, 3, 4, 5], za = ({ value: d, onChange: c }) => {
  const y = (_) => {
    c({
      thickness: _
    });
  };
  return /* @__PURE__ */ U.jsx(We, { children: /* @__PURE__ */ U.jsx(
    We,
    {
      sx: {
        display: "flex",
        gap: 1
      },
      children: Xa.map((_) => /* @__PURE__ */ U.jsx(St, { onClick: () => y(_), children: /* @__PURE__ */ U.jsx(Ya, { thickness: _, selected: d.thickness === _ }) }, _))
    }
  ) });
}, Na = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("g", { fill: "currentColor", fillRule: "evenodd" }, /* @__PURE__ */ fe.createElement("path", { d: "m30.429 10.774-10.607 9.793 4.958 4.736 9.565-10.592c.054.072.064.03.066-.015v-.046l.002-.01c.01-.01.389.052-.326-.277l-3.651-3.582-.007-.007z", stroke: "currentColor", strokeWidth: 4 }), /* @__PURE__ */ fe.createElement("path", { d: "m16.451 21.895 6.837 6.523s-3.62-.739-6.193 2.297l-2.763-2.617s3.552-2.475 2.12-6.203M12.406 30.55l2.38 2.217 1.545-1.658-2.381-2.218zM5.903 33.254h7.748L11.33 31.22l-7.406-.016z" })));
function Ha(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: Na, ...d });
}
function Wa() {
  const [d, c] = Ie(null), { core: y } = Ke(), { tool: _, setTool: v } = wt(), [T, R] = Ie(y.getToolConfig(xe.MARKER)), X = _ === xe.MARKER, N = (a) => {
    X ? c(a.currentTarget) : v(xe.MARKER);
  }, u = () => {
    c(null);
  }, i = (a) => {
    const o = y.updateToolConfig(xe.MARKER, a);
    R(o), u();
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(
      He,
      {
        selected: X,
        Icon: Ha,
        onClick: N
      }
    ),
    /* @__PURE__ */ U.jsx(
      qt,
      {
        open: !!d,
        anchorEl: d,
        onClose: u,
        children: /* @__PURE__ */ U.jsx(za, { value: T, onChange: i })
      }
    )
  ] });
}
const Ua = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("g", { fill: "currentColor", fillRule: "nonzero", stroke: "currentColor", strokeWidth: 0.6 }, /* @__PURE__ */ fe.createElement("path", { d: "M29.134 9.63H10.866a3.044 3.044 0 0 0-3.04 3.039v14.365l.002.013a3.043 3.043 0 0 0 3.038 3.015h18.267a3.043 3.043 0 0 0 3.04-3.03V12.669a3.043 3.043 0 0 0-3.04-3.04zm2.179 16.307-3.617-3.836a2.868 2.868 0 0 0-4.207 0l-2.437 2.584-3.538-3.86a2.802 2.802 0 0 0-2.08-.932c-.791 0-1.53.331-2.081.933l-4.666 5.09V12.668c0-1.201.978-2.18 2.18-2.18h18.267c1.201 0 2.179.979 2.179 2.18v13.268z" }), /* @__PURE__ */ fe.createElement("path", { d: "M25.22 17.718a2.181 2.181 0 0 1-2.18-2.178c0-1.202.977-2.18 2.18-2.18 1.2 0 2.178.978 2.178 2.18a2.181 2.181 0 0 1-2.179 2.178z" })));
function Ga(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: Ua, ...d });
}
const Va = Ur("label")``, $a = Ur("input")`
  display: none;
`, Ka = ({ ...d }) => {
  const { core: c } = Ke(), y = (v) => {
    v.target.value = null;
  }, _ = async (v) => {
    await Promise.all(
      [...v.target.files].map(
        (T) => new Promise((R, X) => {
          const N = new FileReader();
          N.onload = function(u) {
            c.addImage(u.target.result), R();
          }, N.readAsDataURL(T);
        })
      )
    ), c.selectTool(xe.SELECT);
  };
  return /* @__PURE__ */ U.jsxs(
    Va,
    {
      htmlFor: "file-upload",
      sx: {
        display: "flex",
        ":hover": {
          backgroundColor: it[200]
        },
        p: 1.5,
        borderRadius: "50%",
        backgroundColor: it[200],
        color: "black"
      },
      children: [
        /* @__PURE__ */ U.jsx(
          Ga,
          {
            sx: {
              fontSize: 20,
              color: "inherit"
            }
          }
        ),
        /* @__PURE__ */ U.jsx(
          $a,
          {
            id: "file-upload",
            type: "file",
            ...d,
            accept: "image/*",
            onClick: y,
            onChange: _
          }
        )
      ]
    }
  );
}, qa = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("path", { d: "M10.435 8.696v6.117h2.607v-2.515h5.403v16.4h-2.607v2.606h8.817v-2.607h-2.608V12.298h5.404v2.515h2.607V8.696z", fill: "currentColor", fillRule: "evenodd" }));
function Qa(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: qa, ...d });
}
function Ja() {
  const { core: d } = Ke(), c = (y) => {
    d.addText("text");
  };
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: /* @__PURE__ */ U.jsx(He, { Icon: Qa, onClick: c }) });
}
const Za = ({ thickness: d, selected: c }) => /* @__PURE__ */ U.jsx(
  We,
  {
    sx: {
      p: 1,
      backgroundColor: c ? "black" : "transparent",
      borderRadius: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 24,
      height: 24
    },
    children: /* @__PURE__ */ U.jsx(
      We,
      {
        sx: {
          width: d * 4,
          height: d * 4,
          borderRadius: "50%",
          backgroundColor: c ? "white" : "black"
        }
      }
    )
  }
), el = [1, 2, 3, 4, 5], tl = ({ value: d, onChange: c }) => {
  const y = (_) => {
    c({
      thickness: _
    });
  };
  return /* @__PURE__ */ U.jsx(We, { children: /* @__PURE__ */ U.jsx(
    We,
    {
      sx: {
        display: "flex",
        gap: 1
      },
      children: el.map((_) => /* @__PURE__ */ U.jsx(St, { onClick: () => y(_), children: /* @__PURE__ */ U.jsx(Za, { thickness: _, selected: d.thickness === _ }) }, _))
    }
  ) });
}, il = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("path", { d: "M25.09 5.217 6.086 24.22l6.637 6.635h21.189v-1.72h-15.2l15.146-15.147-8.77-8.77zM8.52 24.22l6.965-6.967 6.338 6.34-5.544 5.542h-2.843L8.52 24.22z", fill: "currentColor", fillRule: "evenodd" }));
function rl(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: il, ...d });
}
function nl() {
  const [d, c] = Ie(null), { core: y } = Ke(), { tool: _, setTool: v } = wt(), [T, R] = Ie(y.getToolConfig(xe.ERASER)), X = _ === xe.ERASER, N = (a) => {
    X ? c(a.currentTarget) : v(xe.ERASER);
  }, u = () => {
    c(null);
  }, i = (a) => {
    const o = y.updateToolConfig(xe.ERASER, a);
    R(o), u();
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(
      He,
      {
        selected: X,
        Icon: rl,
        onClick: N
      }
    ),
    /* @__PURE__ */ U.jsx(
      qt,
      {
        open: !!d,
        anchorEl: d,
        onClose: u,
        children: /* @__PURE__ */ U.jsx(tl, { value: T, onChange: i })
      }
    )
  ] });
}
var xi = {}, st = {}, sl = {
  get exports() {
    return st;
  },
  set exports(d) {
    st = d;
  }
};
(function(d) {
  function c(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  d.exports = c, d.exports.__esModule = !0, d.exports.default = d.exports;
})(sl);
var fi = {};
function ol(d, c) {
  return ye({
    toolbar: {
      minHeight: 56,
      [d.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [d.up("sm")]: {
        minHeight: 64
      }
    }
  }, c);
}
const al = ["mode", "contrastThreshold", "tonalOffset"], ur = {
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
    paper: At.white,
    default: At.white
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
}, di = {
  text: {
    primary: At.white,
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
    active: At.white,
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
function fr(d, c, y, _) {
  const v = _.light || _, T = _.dark || _ * 1.5;
  d[c] || (d.hasOwnProperty(y) ? d[c] = d[y] : c === "light" ? d.light = Xo(d.main, v) : c === "dark" && (d.dark = Yo(d.main, T)));
}
function ll(d = "light") {
  return d === "dark" ? {
    main: yt[200],
    light: yt[50],
    dark: yt[400]
  } : {
    main: yt[700],
    light: yt[400],
    dark: yt[800]
  };
}
function cl(d = "light") {
  return d === "dark" ? {
    main: ut[200],
    light: ut[50],
    dark: ut[400]
  } : {
    main: ut[500],
    light: ut[300],
    dark: ut[700]
  };
}
function hl(d = "light") {
  return d === "dark" ? {
    main: ht[500],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[700],
    light: ht[400],
    dark: ht[800]
  };
}
function ul(d = "light") {
  return d === "dark" ? {
    main: ft[400],
    light: ft[300],
    dark: ft[700]
  } : {
    main: ft[700],
    light: ft[500],
    dark: ft[900]
  };
}
function fl(d = "light") {
  return d === "dark" ? {
    main: dt[400],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[800],
    light: dt[500],
    dark: dt[900]
  };
}
function dl(d = "light") {
  return d === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _t[500],
    dark: _t[900]
  };
}
function gl(d) {
  const {
    mode: c = "light",
    contrastThreshold: y = 3,
    tonalOffset: _ = 0.2
  } = d, v = Ne(d, al), T = d.primary || ll(c), R = d.secondary || cl(c), X = d.error || hl(c), N = d.info || ul(c), u = d.success || fl(c), i = d.warning || dl(c);
  function a(t) {
    const s = lr(t, di.text.primary) >= y ? di.text.primary : ur.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const l = lr(t, s);
      l < 3 && console.error([`MUI: The contrast ratio of ${l}:1 for ${s} on ${t}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return s;
  }
  const o = ({
    color: t,
    name: s,
    mainShade: l = 500,
    lightShade: n = 300,
    darkShade: h = 700
  }) => {
    if (t = ye({}, t), !t.main && t[l] && (t.main = t[l]), !t.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${s ? ` (${s})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${l}\` property.` : Ct(11, s ? ` (${s})` : "", l));
    if (typeof t.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${s ? ` (${s})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(t.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ct(12, s ? ` (${s})` : "", JSON.stringify(t.main)));
    return fr(t, "light", n, _), fr(t, "dark", h, _), t.contrastText || (t.contrastText = a(t.main)), t;
  }, e = {
    dark: di,
    light: ur
  };
  return process.env.NODE_ENV !== "production" && (e[c] || console.error(`MUI: The palette mode \`${c}\` is not supported.`)), nt(ye({
    // A collection of common colors.
    common: ye({}, At),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: c,
    // The colors used to represent primary interface elements for a user.
    primary: o({
      color: T,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: o({
      color: R,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: o({
      color: X,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: o({
      color: i,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: o({
      color: N,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: o({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: it,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: y,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: a,
    // Generate a rich color object.
    augmentColor: o,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: _
  }, e[c]), v);
}
const pl = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function vl(d) {
  return Math.round(d * 1e5) / 1e5;
}
const dr = {
  textTransform: "uppercase"
}, gr = '"Roboto", "Helvetica", "Arial", sans-serif';
function ml(d, c) {
  const y = typeof c == "function" ? c(d) : c, {
    fontFamily: _ = gr,
    // The default font size of the Material Specification.
    fontSize: v = 14,
    // px
    fontWeightLight: T = 300,
    fontWeightRegular: R = 400,
    fontWeightMedium: X = 500,
    fontWeightBold: N = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: i,
    pxToRem: a
  } = y, o = Ne(y, pl);
  process.env.NODE_ENV !== "production" && (typeof v != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const e = v / 14, r = a || ((l) => `${l / u * e}rem`), t = (l, n, h, f, g) => ye({
    fontFamily: _,
    fontWeight: l,
    fontSize: r(n),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h
  }, _ === gr ? {
    letterSpacing: `${vl(f / n)}em`
  } : {}, g, i), s = {
    h1: t(T, 96, 1.167, -1.5),
    h2: t(T, 60, 1.2, -0.5),
    h3: t(R, 48, 1.167, 0),
    h4: t(R, 34, 1.235, 0.25),
    h5: t(R, 24, 1.334, 0),
    h6: t(X, 20, 1.6, 0.15),
    subtitle1: t(R, 16, 1.75, 0.15),
    subtitle2: t(X, 14, 1.57, 0.1),
    body1: t(R, 16, 1.5, 0.15),
    body2: t(R, 14, 1.43, 0.15),
    button: t(X, 14, 1.75, 0.4, dr),
    caption: t(R, 12, 1.66, 0.4),
    overline: t(R, 12, 2.66, 1, dr),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return nt(ye({
    htmlFontSize: u,
    pxToRem: r,
    fontFamily: _,
    fontSize: v,
    fontWeightLight: T,
    fontWeightRegular: R,
    fontWeightMedium: X,
    fontWeightBold: N
  }, s), o, {
    clone: !1
    // No need to clone deep
  });
}
const yl = 0.2, _l = 0.14, bl = 0.12;
function Me(...d) {
  return [`${d[0]}px ${d[1]}px ${d[2]}px ${d[3]}px rgba(0,0,0,${yl})`, `${d[4]}px ${d[5]}px ${d[6]}px ${d[7]}px rgba(0,0,0,${_l})`, `${d[8]}px ${d[9]}px ${d[10]}px ${d[11]}px rgba(0,0,0,${bl})`].join(",");
}
const Cl = ["none", Me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], xl = Cl, Sl = ["duration", "easing", "delay"], wl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Tl = {
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
function pr(d) {
  return `${Math.round(d)}ms`;
}
function El(d) {
  if (!d)
    return 0;
  const c = d / 36;
  return Math.round((4 + 15 * c ** 0.25 + c / 5) * 10);
}
function Ol(d) {
  const c = ye({}, wl, d.easing), y = ye({}, Tl, d.duration);
  return ye({
    getAutoHeightDuration: El,
    create: (v = ["all"], T = {}) => {
      const {
        duration: R = y.standard,
        easing: X = c.easeInOut,
        delay: N = 0
      } = T, u = Ne(T, Sl);
      if (process.env.NODE_ENV !== "production") {
        const i = (o) => typeof o == "string", a = (o) => !isNaN(parseFloat(o));
        !i(v) && !Array.isArray(v) && console.error('MUI: Argument "props" must be a string or Array.'), !a(R) && !i(R) && console.error(`MUI: Argument "duration" must be a number or a string but found ${R}.`), i(X) || console.error('MUI: Argument "easing" must be a string.'), !a(N) && !i(N) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(v) ? v : [v]).map((i) => `${i} ${typeof R == "string" ? R : pr(R)} ${X} ${typeof N == "string" ? N : pr(N)}`).join(",");
    }
  }, d, {
    easing: c,
    duration: y
  });
}
const Pl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Al = Pl, kl = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ml(d = {}, ...c) {
  const {
    mixins: y = {},
    palette: _ = {},
    transitions: v = {},
    typography: T = {}
  } = d, R = Ne(d, kl);
  if (d.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ct(18));
  const X = gl(_), N = _i(d);
  let u = nt(N, {
    mixins: ol(N.breakpoints, y),
    palette: X,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xl.slice(),
    typography: ml(X, T),
    transitions: Ol(v),
    zIndex: ye({}, Al)
  });
  if (u = nt(u, R), u = c.reduce((i, a) => nt(i, a), u), process.env.NODE_ENV !== "production") {
    const i = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], a = (o, e) => {
      let r;
      for (r in o) {
        const t = o[r];
        if (i.indexOf(r) !== -1 && Object.keys(t).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const s = vi("", r);
            console.error([`MUI: The \`${e}\` component increases the CSS specificity of the \`${r}\` internal state.`, "You can not override it like this: ", JSON.stringify(o, null, 2), "", `Instead, you need to use the '&.${s}' syntax:`, JSON.stringify({
              root: {
                [`&.${s}`]: t
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          o[r] = {};
        }
      }
    };
    Object.keys(u.components).forEach((o) => {
      const e = u.components[o].styleOverrides;
      e && o.indexOf("Mui") === 0 && a(e, o);
    });
  }
  return u.unstable_sxConfig = ye({}, $t, R == null ? void 0 : R.unstable_sxConfig), u.unstable_sx = function(a) {
    return Kt({
      sx: a,
      theme: this
    });
  }, u;
}
const Dl = Ml(), Kr = Dl;
function Rl({
  props: d,
  name: c
}) {
  return Io({
    props: d,
    name: c,
    defaultTheme: Kr
  });
}
const jl = (d) => Ft(d) && d !== "classes", Fl = Wr({
  defaultTheme: Kr,
  rootShouldForwardProp: jl
}), Il = Fl;
function Ll(d) {
  return vi("MuiSvgIcon", d);
}
vs("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Bl = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Yl = (d) => {
  const {
    color: c,
    fontSize: y,
    classes: _
  } = d, v = {
    root: ["root", c !== "inherit" && `color${qe(c)}`, `fontSize${qe(y)}`]
  };
  return fs(v, Ll, _);
}, Xl = Il("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (d, c) => {
    const {
      ownerState: y
    } = d;
    return [c.root, y.color !== "inherit" && c[`color${qe(y.color)}`], c[`fontSize${qe(y.fontSize)}`]];
  }
})(({
  theme: d,
  ownerState: c
}) => {
  var y, _, v, T, R, X, N, u, i, a, o, e, r, t, s, l, n;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (y = d.transitions) == null || (_ = y.create) == null ? void 0 : _.call(y, "fill", {
      duration: (v = d.transitions) == null || (T = v.duration) == null ? void 0 : T.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((R = d.typography) == null || (X = R.pxToRem) == null ? void 0 : X.call(R, 20)) || "1.25rem",
      medium: ((N = d.typography) == null || (u = N.pxToRem) == null ? void 0 : u.call(N, 24)) || "1.5rem",
      large: ((i = d.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 35)) || "2.1875rem"
    }[c.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (o = (e = (d.vars || d).palette) == null || (r = e[c.color]) == null ? void 0 : r.main) != null ? o : {
      action: (t = (d.vars || d).palette) == null || (s = t.action) == null ? void 0 : s.active,
      disabled: (l = (d.vars || d).palette) == null || (n = l.action) == null ? void 0 : n.disabled,
      inherit: void 0
    }[c.color]
  };
}), Si = /* @__PURE__ */ fe.forwardRef(function(c, y) {
  const _ = Rl({
    props: c,
    name: "MuiSvgIcon"
  }), {
    children: v,
    className: T,
    color: R = "inherit",
    component: X = "svg",
    fontSize: N = "medium",
    htmlColor: u,
    inheritViewBox: i = !1,
    titleAccess: a,
    viewBox: o = "0 0 24 24"
  } = _, e = Ne(_, Bl), r = ye({}, _, {
    color: R,
    component: X,
    fontSize: N,
    instanceFontSize: c.fontSize,
    inheritViewBox: i,
    viewBox: o
  }), t = {};
  i || (t.viewBox = o);
  const s = Yl(r);
  return /* @__PURE__ */ U.jsxs(Xl, ye({
    as: X,
    className: Yr(s.root, T),
    focusable: "false",
    color: u,
    "aria-hidden": a ? void 0 : !0,
    role: a ? "img" : void 0,
    ref: y
  }, t, e, {
    ownerState: r,
    children: [v, a ? /* @__PURE__ */ U.jsx("title", {
      children: a
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Si.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: ve.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: ve.object,
  /**
   * @ignore
   */
  className: ve.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: ve.oneOfType([ve.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), ve.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ve.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: ve.oneOfType([ve.oneOf(["inherit", "large", "medium", "small"]), ve.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: ve.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: ve.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: ve.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: ve.oneOfType([ve.arrayOf(ve.oneOfType([ve.func, ve.object, ve.bool])), ve.func, ve.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: ve.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: ve.string
});
Si.muiName = "SvgIcon";
const vr = Si;
function zl(d, c) {
  function y(_, v) {
    return /* @__PURE__ */ U.jsx(vr, ye({
      "data-testid": `${c}Icon`,
      ref: v
    }, _, {
      children: d
    }));
  }
  return process.env.NODE_ENV !== "production" && (y.displayName = `${c}Icon`), y.muiName = vr.muiName, /* @__PURE__ */ fe.memo(/* @__PURE__ */ fe.forwardRef(y));
}
const Nl = {
  configure: (d) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Rr.configure(d);
  }
}, Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: qe,
  createChainedFunction: Gn,
  createSvgIcon: zl,
  debounce: Vn,
  deprecatedPropType: $n,
  isMuiElement: Kn,
  ownerDocument: Ar,
  ownerWindow: qn,
  requirePropFactory: Qn,
  setRef: kr,
  unstable_ClassNameGenerator: Nl,
  unstable_useEnhancedEffect: Mr,
  unstable_useId: es,
  unsupportedProp: ts,
  useControlled: is,
  useEventCallback: rs,
  useForkRef: ns,
  useIsFocusVisible: us
}, Symbol.toStringTag, { value: "Module" })), Wl = /* @__PURE__ */ wr(Hl);
var mr;
function pt() {
  return mr || (mr = 1, function(d) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    }), Object.defineProperty(d, "default", {
      enumerable: !0,
      get: function() {
        return c.createSvgIcon;
      }
    });
    var c = Wl;
  }(fi)), fi;
}
var Ul = st;
Object.defineProperty(xi, "__esModule", {
  value: !0
});
var qr = xi.default = void 0, Gl = Ul(pt()), Vl = U, $l = (0, Gl.default)(/* @__PURE__ */ (0, Vl.jsx)("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz");
qr = xi.default = $l;
function Kl() {
  const { core: d } = Ke(), [c, y] = Ie(null), [_, v] = Ie(d.config.usePencil), T = (N) => {
    y((u) => u ? null : N.currentTarget);
  }, R = () => {
    y(null);
  }, X = (N) => {
    v(!N.target.checked), d.setUsePencil(!N.target.checked);
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(He, { small: !0, Icon: qr, onClick: T }),
    /* @__PURE__ */ U.jsx(
      Cr,
      {
        anchorEl: c,
        open: !!c,
        onClose: R,
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
        children: /* @__PURE__ */ U.jsxs(xr, { onClick: X, children: [
          /* @__PURE__ */ U.jsx(Sr, { children: "손가락으로 그리기" }),
          /* @__PURE__ */ U.jsx(_n, { checked: !_, onChange: X })
        ] })
      }
    )
  ] });
}
const ql = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("path", { d: "M20.051 10.332V7.57a.614.614 0 0 0-.981-.492l-4.911 3.683a.616.616 0 0 0 0 .983l4.91 3.683a.617.617 0 0 0 .643.058.614.614 0 0 0 .34-.55v-2.762c5.246 0 9.514 4.268 9.514 9.515 0 5.246-4.268 9.514-9.515 9.514-5.246 0-9.514-4.268-9.514-9.514v-.614a.921.921 0 0 0-1.841 0v.614c0 6.261 5.094 11.355 11.355 11.355 6.262 0 11.356-5.094 11.356-11.355 0-6.262-5.094-11.356-11.356-11.356", fill: "currentColor", stroke: "currentColor", fillRule: "evenodd" }));
function Ql(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: ql, ...d });
}
const Jl = (d) => /* @__PURE__ */ fe.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ fe.createElement("path", { d: "M20.051 10.332V7.57a.614.614 0 0 1 .982-.492l4.91 3.683a.616.616 0 0 1 0 .983l-4.91 3.683a.617.617 0 0 1-.642.058.614.614 0 0 1-.34-.55v-2.762c-5.246 0-9.514 4.268-9.514 9.515 0 5.246 4.268 9.514 9.514 9.514 5.247 0 9.515-4.268 9.515-9.514v-.614a.921.921 0 0 1 1.841 0v.614c0 6.261-5.094 11.355-11.356 11.355-6.261 0-11.355-5.094-11.355-11.355 0-6.262 5.094-11.356 11.355-11.356", fill: "currentColor", stroke: "currentColor", fillRule: "evenodd" }));
function Zl(d) {
  return /* @__PURE__ */ U.jsx(ot, { inheritViewBox: !0, component: Jl, ...d });
}
function ec() {
  const { core: d, touch: c } = Ke(), { tool: y } = wt(), [_, v] = Ie(y ? d.getToolConfig(y) : null), [T, R] = Ie(d.getHistoryInfo()), [X, N] = Ie(d.available), u = (o) => {
    d.undo();
  }, i = (o) => {
    d.redo();
  };
  rt(() => {
    y && v(d.getToolConfig(y));
  }, [d, y]), rt(() => d.on(ze.Event.AVAILABILITY_CHANGE, N), [d]), rt(() => d.on(ze.Event.HISTORY_CHANGE, R), [d]);
  const a = (o) => {
    const e = d.updateToolConfig(y, {
      color: o
    });
    v(e);
  };
  return /* @__PURE__ */ U.jsx(
    Ci,
    {
      leadingItems: /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
        /* @__PURE__ */ U.jsx(Fa, {}),
        /* @__PURE__ */ U.jsx(Ba, {}),
        /* @__PURE__ */ U.jsx(Da, {}),
        /* @__PURE__ */ U.jsx(Wa, {}),
        /* @__PURE__ */ U.jsx(nl, {}),
        /* @__PURE__ */ U.jsx(Ja, {}),
        /* @__PURE__ */ U.jsx(Ka, {})
      ] }),
      palette: /* @__PURE__ */ U.jsx($r, { value: _ == null ? void 0 : _.color, onChange: a }),
      trailingItems: /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
        /* @__PURE__ */ U.jsx(
          He,
          {
            small: !0,
            disabled: !X || T.index <= 0,
            Icon: Ql,
            onClick: u
          }
        ),
        /* @__PURE__ */ U.jsx(
          He,
          {
            small: !0,
            disabled: !X || T.index >= T.histories - 1,
            Icon: Zl,
            onClick: i
          }
        ),
        c && /* @__PURE__ */ U.jsx(Kl, {})
      ] })
    }
  );
}
var wi = {}, tc = st;
Object.defineProperty(wi, "__esModule", {
  value: !0
});
var Qr = wi.default = void 0, ic = tc(pt()), rc = U, nc = (0, ic.default)(/* @__PURE__ */ (0, rc.jsx)("path", {
  d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM23 11v2h-8v-2h8z"
}), "TextDecrease");
Qr = wi.default = nc;
var Ti = {}, sc = st;
Object.defineProperty(Ti, "__esModule", {
  value: !0
});
var Jr = Ti.default = void 0, oc = sc(pt()), ac = U, lc = (0, oc.default)(/* @__PURE__ */ (0, ac.jsx)("path", {
  d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z"
}), "TextIncrease");
Jr = Ti.default = lc;
var Ei = {}, cc = st;
Object.defineProperty(Ei, "__esModule", {
  value: !0
});
var Zr = Ei.default = void 0, hc = cc(pt()), uc = U, fc = (0, hc.default)(/* @__PURE__ */ (0, uc.jsx)("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"
}), "Textsms");
Zr = Ei.default = fc;
var Oi = {}, dc = st;
Object.defineProperty(Oi, "__esModule", {
  value: !0
});
var en = Oi.default = void 0, gc = dc(pt()), pc = U, vc = (0, gc.default)(/* @__PURE__ */ (0, pc.jsx)("path", {
  d: "M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z"
}), "BookmarkAdd");
en = Oi.default = vc;
var Pi = {}, mc = st;
Object.defineProperty(Pi, "__esModule", {
  value: !0
});
var Ai = Pi.default = void 0, yc = mc(pt()), _c = U, bc = (0, yc.default)(/* @__PURE__ */ (0, _c.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), "DeleteForever");
Ai = Pi.default = bc;
var ki = {}, Cc = st;
Object.defineProperty(ki, "__esModule", {
  value: !0
});
var tn = ki.default = void 0, xc = Cc(pt()), Sc = U, wc = (0, xc.default)(/* @__PURE__ */ (0, Sc.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreVert");
tn = ki.default = wc;
function Tc({ bp: d, onSelect: c, onDelete: y }) {
  const [_, v] = Ie(null), T = (N) => {
    N.stopPropagation(), v(N.currentTarget);
  }, R = async (N) => {
    N.stopPropagation(), y(d.id);
  }, X = () => {
    v(null);
  };
  return /* @__PURE__ */ U.jsxs(Sn, { button: !0, onClick: () => c(d.contents), children: [
    /* @__PURE__ */ U.jsx(Sr, { primary: d.contents }),
    /* @__PURE__ */ U.jsx(St, { onClick: T, children: /* @__PURE__ */ U.jsx(tn, {}) }),
    /* @__PURE__ */ U.jsx(Cr, { anchorEl: _, open: !!_, onClose: X, children: /* @__PURE__ */ U.jsx(xr, { onClick: R, children: "삭제" }) })
  ] });
}
function Ec({
  open: d,
  boilerplates: c,
  onSelect: y,
  onClose: _,
  onDelete: v
}) {
  const T = (X) => {
    y(X), _();
  }, R = async (X) => {
    v(X);
  };
  return /* @__PURE__ */ U.jsxs(bn, { fullWidth: !0, maxWidth: "xs", onClose: _, open: d, children: [
    /* @__PURE__ */ U.jsx(Cn, { children: "상용구를 선택하세요" }),
    /* @__PURE__ */ U.jsx(xn, { sx: { pt: 0 }, children: c.map((X) => /* @__PURE__ */ U.jsx(
      Tc,
      {
        bp: X,
        onSelect: T,
        onDelete: R
      },
      X.id
    )) })
  ] });
}
const Oc = ({ value: d, onChange: c }) => /* @__PURE__ */ U.jsxs(
  wn,
  {
    spacing: 2,
    direction: "row",
    sx: { mb: 1, width: 200 },
    alignItems: "center",
    children: [
      /* @__PURE__ */ U.jsx(Qr, {}),
      /* @__PURE__ */ U.jsx(Tn, { "aria-label": "Volume", value: d, onChange: c }),
      /* @__PURE__ */ U.jsx(Jr, {})
    ]
  }
);
function Pc() {
  const { core: d, boilerplate: c } = Ke();
  if (!c)
    throw new Error(
      "ImageEditor boilerplate attr must be provided in the edit mode"
    );
  const [y, _] = Ie(d.getSelectedTextSize()), [v, T] = Ie(d.getSelectedTextColor()), [R, X] = Ie(!1), [N, u] = Ie([]), i = br(async () => {
    const n = await c.onLoadBoilerplate();
    u(n);
  }, [c]);
  rt(() => {
    i();
  }, [i]);
  const a = () => {
    d.deleteSelectedObject();
  }, o = (n) => {
    const h = n.target.value;
    d.changeSelectedTextSize(h), _(h);
  }, e = (n) => {
    d.changeSelectedTextColor(n), T(n);
  }, r = () => {
    X((n) => !n);
  }, t = async () => {
    await c.onSaveBoilerplate(d.getSelectedTextContents()), i();
  }, s = (n) => {
    d.changeSelectedTextMessage(n), X(!1);
  }, l = async (n) => {
    await c.onDeleteBoilerplate(n), i();
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(
      Ci,
      {
        leadingItems: /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
          /* @__PURE__ */ U.jsx(Oc, { value: y, onChange: o }),
          /* @__PURE__ */ U.jsx(He, { Icon: Zr, onClick: r }),
          /* @__PURE__ */ U.jsx(He, { Icon: en, onClick: t })
        ] }),
        palette: /* @__PURE__ */ U.jsx($r, { value: v, onChange: e }),
        trailingItems: /* @__PURE__ */ U.jsx(U.Fragment, { children: /* @__PURE__ */ U.jsx(
          He,
          {
            small: !0,
            Icon: Ai,
            onClick: a
          }
        ) })
      }
    ),
    /* @__PURE__ */ U.jsx(
      Ec,
      {
        open: R,
        onClose: () => X(!1),
        onSelect: s,
        onDelete: l,
        boilerplates: N
      }
    )
  ] });
}
function Ac() {
  const { core: d } = Ke(), c = () => {
    d.deleteSelectedObject();
  };
  return /* @__PURE__ */ U.jsx(
    Ci,
    {
      trailingItems: /* @__PURE__ */ U.jsx(U.Fragment, { children: /* @__PURE__ */ U.jsx(
        He,
        {
          small: !0,
          Icon: Ai,
          onClick: c
        }
      ) })
    }
  );
}
function kc() {
  const { core: d, touch: c } = Ke(), [y, _] = Ie(d.mode);
  return rt(() => d.on(ze.Event.MODE_CHANGE, _), [d]), /* @__PURE__ */ U.jsx(
    We,
    {
      sx: {
        display: "flex",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ U.jsxs(
        En,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: "404px 88px 128px",
            backgroundColor: it[50],
            py: 2,
            px: 4,
            overflow: "auto",
            color: "black",
            gap: 3
          },
          children: [
            y === ze.Mode.BRUSH && /* @__PURE__ */ U.jsx(ec, {}),
            y === ze.Mode.TEXT && /* @__PURE__ */ U.jsx(Pc, {}),
            y === ze.Mode.IMAGE && /* @__PURE__ */ U.jsx(Ac, {})
          ]
        }
      )
    }
  );
}
const rn = gn(null), Mc = ({
  editorRef: d,
  imageUrl: c,
  children: y,
  touch: _ = !0,
  boilerplate: v
}) => {
  const T = Bi(() => new ze({
    imageUrl: c,
    touchEnabled: _
  }), [c, _]);
  vn(
    d,
    () => ({
      getDataUrl(X) {
        return T.getDataUrl(X);
      },
      isDirty() {
        return T.isDirty();
      },
      isBusy() {
        return T.busy;
      }
    }),
    [T]
  );
  const R = Bi(
    () => ({
      core: T,
      boilerplate: v,
      touch: _
    }),
    [v, T, _]
  );
  return /* @__PURE__ */ U.jsx(rn.Provider, { value: R, children: y });
};
function Ke() {
  return mn(rn);
}
function wt() {
  var v;
  const { core: d } = Ke(), [c, y] = Ie((v = d.tool) == null ? void 0 : v.name);
  return rt(() => d.on(ze.Event.TOOL_CHANGE, (T) => y(T)), [d]), { tool: c, setTool: (T) => {
    d.selectTool(T);
  } };
}
const Lc = pn(
  function({ viewOnly: c = !1, imageUrl: y, boilerplate: _, touch: v }, T) {
    const R = _r(null), X = zo(R);
    return /* @__PURE__ */ U.jsx(
      Mc,
      {
        editorRef: T,
        imageUrl: y,
        boilerplate: _,
        touch: v,
        children: /* @__PURE__ */ U.jsxs(at, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ U.jsx(
            at,
            {
              ref: R,
              sx: {
                overflow: "hidden",
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: X && /* @__PURE__ */ U.jsx(No, { containerSize: X })
            }
          ),
          !c && /* @__PURE__ */ U.jsx(kc, {})
        ] })
      }
    );
  }
);
export {
  Lc as ImageEditor
};
