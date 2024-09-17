! function(e) {
  var a = {};

  function t(n) {
    if (a[n]) return a[n].exports;
    var r = a[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }
  t.m = e, t.c = a, t.d = function(e, a, n) {
    t.o(e, a) || Object.defineProperty(e, a, {
      enumerable: !0,
      get: n
    })
  }, t.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t.t = function(e, a) {
    if (1 & a && (e = t(e)), 8 & a) return e;
    if (4 & a && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (t.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & a && "string" != typeof e)
      for (var r in e) t.d(n, r, function(a) {
        return e[a]
      }.bind(null, r));
    return n
  }, t.n = function(e) {
    var a = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(a, "a", a), a
  }, t.o = function(e, a) {
    return Object.prototype.hasOwnProperty.call(e, a)
  }, t.p = "", t(t.s = 319)
}({
  124: function(e, a, t) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      r = "~";

    function i() {}

    function c(e, a, t) {
      this.fn = e, this.context = a, this.once = t || !1
    }

    function o(e, a, t, n, i) {
      if ("function" != typeof t) throw new TypeError("The listener must be a function");
      var o = new c(t, n || e, i),
        s = r ? r + a : a;
      return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], o] : e._events[s].push(o) : (e._events[s] = o, e._eventsCount++), e
    }

    function s(e, a) {
      0 == --e._eventsCount ? e._events = new i : delete e._events[a]
    }

    function l() {
      this._events = new i, this._eventsCount = 0
    }
    Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (r = !1)), l.prototype.eventNames = function() {
      var e, a, t = [];
      if (0 === this._eventsCount) return t;
      for (a in e = this._events) n.call(e, a) && t.push(r ? a.slice(1) : a);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
    }, l.prototype.listeners = function(e) {
      var a = r ? r + e : e,
        t = this._events[a];
      if (!t) return [];
      if (t.fn) return [t.fn];
      for (var n = 0, i = t.length, c = new Array(i); n < i; n++) c[n] = t[n].fn;
      return c
    }, l.prototype.listenerCount = function(e) {
      var a = r ? r + e : e,
        t = this._events[a];
      return t ? t.fn ? 1 : t.length : 0
    }, l.prototype.emit = function(e, a, t, n, i, c) {
      var o = r ? r + e : e;
      if (!this._events[o]) return !1;
      var s, l, d = this._events[o],
        u = arguments.length;
      if (d.fn) {
        switch (d.once && this.removeListener(e, d.fn, void 0, !0), u) {
          case 1:
            return d.fn.call(d.context), !0;
          case 2:
            return d.fn.call(d.context, a), !0;
          case 3:
            return d.fn.call(d.context, a, t), !0;
          case 4:
            return d.fn.call(d.context, a, t, n), !0;
          case 5:
            return d.fn.call(d.context, a, t, n, i), !0;
          case 6:
            return d.fn.call(d.context, a, t, n, i, c), !0
        }
        for (l = 1, s = new Array(u - 1); l < u; l++) s[l - 1] = arguments[l];
        d.fn.apply(d.context, s)
      } else {
        var h, m = d.length;
        for (l = 0; l < m; l++) switch (d[l].once && this.removeListener(e, d[l].fn, void 0, !0), u) {
          case 1:
            d[l].fn.call(d[l].context);
            break;
          case 2:
            d[l].fn.call(d[l].context, a);
            break;
          case 3:
            d[l].fn.call(d[l].context, a, t);
            break;
          case 4:
            d[l].fn.call(d[l].context, a, t, n);
            break;
          default:
            if (!s)
              for (h = 1, s = new Array(u - 1); h < u; h++) s[h - 1] = arguments[h];
            d[l].fn.apply(d[l].context, s)
        }
      }
      return !0
    }, l.prototype.on = function(e, a, t) {
      return o(this, e, a, t, !1)
    }, l.prototype.once = function(e, a, t) {
      return o(this, e, a, t, !0)
    }, l.prototype.removeListener = function(e, a, t, n) {
      var i = r ? r + e : e;
      if (!this._events[i]) return this;
      if (!a) return s(this, i), this;
      var c = this._events[i];
      if (c.fn) c.fn !== a || n && !c.once || t && c.context !== t || s(this, i);
      else {
        for (var o = 0, l = [], d = c.length; o < d; o++)(c[o].fn !== a || n && !c[o].once || t && c[o].context !== t) && l.push(c[o]);
        l.length ? this._events[i] = 1 === l.length ? l[0] : l : s(this, i)
      }
      return this
    }, l.prototype.removeAllListeners = function(e) {
      var a;
      return e ? (a = r ? r + e : e, this._events[a] && s(this, a)) : (this._events = new i, this._eventsCount = 0), this
    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l
  },
  125: function(e, a, t) {
    (function(a) {
      var t = "Expected a function",
        n = "__lodash_hash_undefined__",
        r = "[object Function]",
        i = "[object GeneratorFunction]",
        c = /^\[object .+?Constructor\]$/,
        o = "object" == typeof a && a && a.Object === Object && a,
        s = "object" == typeof self && self && self.Object === Object && self,
        l = o || s || Function("return this")();
      var d, u = Array.prototype,
        h = Function.prototype,
        m = Object.prototype,
        g = l["__core-js_shared__"],
        p = (d = /[^.]+$/.exec(g && g.keys && g.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "",
        y = h.toString,
        f = m.hasOwnProperty,
        v = m.toString,
        _ = RegExp("^" + y.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        S = u.splice,
        b = T(l, "Map"),
        w = T(Object, "create");

      function C(e) {
        var a = -1,
          t = e ? e.length : 0;
        for (this.clear(); ++a < t;) {
          var n = e[a];
          this.set(n[0], n[1])
        }
      }

      function N(e) {
        var a = -1,
          t = e ? e.length : 0;
        for (this.clear(); ++a < t;) {
          var n = e[a];
          this.set(n[0], n[1])
        }
      }

      function B(e) {
        var a = -1,
          t = e ? e.length : 0;
        for (this.clear(); ++a < t;) {
          var n = e[a];
          this.set(n[0], n[1])
        }
      }

      function D(e, a) {
        for (var t, n, r = e.length; r--;)
          if ((t = e[r][0]) === (n = a) || t != t && n != n) return r;
        return -1
      }

      function x(e) {
        return !(!P(e) || (a = e, p && p in a)) && (function(e) {
          var a = P(e) ? v.call(e) : "";
          return a == r || a == i
        }(e) || function(e) {
          var a = !1;
          if (null != e && "function" != typeof e.toString) try {
            a = !!(e + "")
          } catch (e) {}
          return a
        }(e) ? _ : c).test(function(e) {
          if (null != e) {
            try {
              return y.call(e)
            } catch (e) {}
            try {
              return e + ""
            } catch (e) {}
          }
          return ""
        }(e));
        var a
      }

      function I(e, a) {
        var t, n, r = e.__data__;
        return ("string" == (n = typeof(t = a)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? r["string" == typeof a ? "string" : "hash"] : r.map
      }

      function T(e, a) {
        var t = function(e, a) {
          return null == e ? void 0 : e[a]
        }(e, a);
        return x(t) ? t : void 0
      }

      function U(e, a) {
        if ("function" != typeof e || a && "function" != typeof a) throw new TypeError(t);
        var n = function() {
          var t = arguments,
            r = a ? a.apply(this, t) : t[0],
            i = n.cache;
          if (i.has(r)) return i.get(r);
          var c = e.apply(this, t);
          return n.cache = i.set(r, c), c
        };
        return n.cache = new(U.Cache || B), n
      }

      function P(e) {
        var a = typeof e;
        return !!e && ("object" == a || "function" == a)
      }
      C.prototype.clear = function() {
        this.__data__ = w ? w(null) : {}
      }, C.prototype.delete = function(e) {
        return this.has(e) && delete this.__data__[e]
      }, C.prototype.get = function(e) {
        var a = this.__data__;
        if (w) {
          var t = a[e];
          return t === n ? void 0 : t
        }
        return f.call(a, e) ? a[e] : void 0
      }, C.prototype.has = function(e) {
        var a = this.__data__;
        return w ? void 0 !== a[e] : f.call(a, e)
      }, C.prototype.set = function(e, a) {
        return this.__data__[e] = w && void 0 === a ? n : a, this
      }, N.prototype.clear = function() {
        this.__data__ = []
      }, N.prototype.delete = function(e) {
        var a = this.__data__,
          t = D(a, e);
        return !(t < 0) && (t == a.length - 1 ? a.pop() : S.call(a, t, 1), !0)
      }, N.prototype.get = function(e) {
        var a = this.__data__,
          t = D(a, e);
        return t < 0 ? void 0 : a[t][1]
      }, N.prototype.has = function(e) {
        return D(this.__data__, e) > -1
      }, N.prototype.set = function(e, a) {
        var t = this.__data__,
          n = D(t, e);
        return n < 0 ? t.push([e, a]) : t[n][1] = a, this
      }, B.prototype.clear = function() {
        this.__data__ = {
          hash: new C,
          map: new(b || N),
          string: new C
        }
      }, B.prototype.delete = function(e) {
        return I(this, e).delete(e)
      }, B.prototype.get = function(e) {
        return I(this, e).get(e)
      }, B.prototype.has = function(e) {
        return I(this, e).has(e)
      }, B.prototype.set = function(e, a) {
        return I(this, e).set(e, a), this
      }, U.Cache = B, e.exports = U
    }).call(this, t(48))
  },
  126: function(e, a, t) {
    "use strict";
    (function(a) {
      function n(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
      }
      var r = n(t(89)),
        i = n(t(130));

      function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, a) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
      }

      function s(e, a) {
        for (var t = 0; t < a.length; t++) {
          var n = a[t];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function l(e, a, t) {
        return a && s(e.prototype, a), t && s(e, t), e
      }

      function d(e, a) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, a) {
          var t = [],
            n = !0,
            r = !1,
            i = void 0;
          try {
            for (var c, o = e[Symbol.iterator](); !(n = (c = o.next()).done) && (t.push(c.value), !a || t.length !== a); n = !0);
          } catch (e) {
            r = !0, i = e
          } finally {
            try {
              n || null == o.return || o.return()
            } finally {
              if (r) throw i
            }
          }
          return t
        }(e, a) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
      }
      var u = "undefined" == typeof window ? null : window,
        h = u ? u.navigator : null,
        m = (u && u.document, c("")),
        g = c({}),
        p = c((function() {})),
        y = "undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement),
        f = function(e) {
          return e && e.instanceString && _(e.instanceString) ? e.instanceString() : null
        },
        v = function(e) {
          return null != e && c(e) == m
        },
        _ = function(e) {
          return null != e && c(e) === p
        },
        S = function(e) {
          return Array.isArray ? Array.isArray(e) : null != e && e instanceof Array
        },
        b = function(e) {
          return null != e && c(e) === g && !S(e) && e.constructor === Object
        },
        w = function(e) {
          return null != e && c(e) === c(1) && !isNaN(e)
        },
        C = function(e) {
          return "undefined" === y ? void 0 : null != e && e instanceof HTMLElement
        },
        N = function(e) {
          return B(e) || D(e)
        },
        B = function(e) {
          return "collection" === f(e) && e._private.single
        },
        D = function(e) {
          return "collection" === f(e) && !e._private.single
        },
        x = function(e) {
          return "core" === f(e)
        },
        I = function(e) {
          return "stylesheet" === f(e)
        },
        T = function(e) {
          return null == e || !("" !== e && !e.match(/^\s+$/))
        },
        U = function(e) {
          return function(e) {
            return null != e && c(e) === g
          }(e) && _(e.then)
        },
        P = function() {
          return h && h.userAgent.match(/msie|trident|edge/i)
        },
        M = function(e, a) {
          a || (a = function() {
            if (1 === arguments.length) return arguments[0];
            if (0 === arguments.length) return "undefined";
            for (var e = [], a = 0; a < arguments.length; a++) e.push(arguments[a]);
            return e.join("$")
          });
          var t = function t() {
            var n, r = this,
              i = arguments,
              c = a.apply(r, i),
              o = t.cache;
            return (n = o[c]) || (n = o[c] = e.apply(r, i)), n
          };
          return t.cache = {}, t
        },
        k = M((function(e) {
          return e.replace(/([A-Z])/g, (function(e) {
            return "-" + e.toLowerCase()
          }))
        })),
        A = M((function(e) {
          return e.replace(/(-\w)/g, (function(e) {
            return e[1].toUpperCase()
          }))
        })),
        R = M((function(e, a) {
          return e + a[0].toUpperCase() + a.substring(1)
        }), (function(e, a) {
          return e + "$" + a
        })),
        E = function(e) {
          return T(e) ? e : e.charAt(0).toUpperCase() + e.substring(1)
        },
        G = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))",
        V = function(e, a) {
          return e < a ? -1 : e > a ? 1 : 0
        },
        F = null != Object.assign ? Object.assign.bind(Object) : function(e) {
          for (var a = arguments, t = 1; t < a.length; t++) {
            var n = a[t];
            if (null != n)
              for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                var c = r[i];
                e[c] = n[c]
              }
          }
          return e
        },
        L = function(e) {
          return (S(e) ? e : null) || function(e) {
            return z[e.toLowerCase()]
          }(e) || function(e) {
            if ((4 === e.length || 7 === e.length) && "#" === e[0]) {
              var a, t, n;
              return 4 === e.length ? (a = parseInt(e[1] + e[1], 16), t = parseInt(e[2] + e[2], 16), n = parseInt(e[3] + e[3], 16)) : (a = parseInt(e[1] + e[2], 16), t = parseInt(e[3] + e[4], 16), n = parseInt(e[5] + e[6], 16)), [a, t, n]
            }
          }(e) || function(e) {
            var a, t = new RegExp("^rgb[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$").exec(e);
            if (t) {
              a = [];
              for (var n = [], r = 1; r <= 3; r++) {
                var i = t[r];
                if ("%" === i[i.length - 1] && (n[r] = !0), i = parseFloat(i), n[r] && (i = i / 100 * 255), i < 0 || i > 255) return;
                a.push(Math.floor(i))
              }
              var c = n[1] || n[2] || n[3],
                o = n[1] && n[2] && n[3];
              if (c && !o) return;
              var s = t[4];
              if (void 0 !== s) {
                if ((s = parseFloat(s)) < 0 || s > 1) return;
                a.push(s)
              }
            }
            return a
          }(e) || function(e) {
            var a, t, n, r, i, c, o, s;

            function l(e, a, t) {
              return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + 6 * (a - e) * t : t < .5 ? a : t < 2 / 3 ? e + (a - e) * (2 / 3 - t) * 6 : e
            }
            var d = new RegExp("^hsl[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$").exec(e);
            if (d) {
              if ((t = parseInt(d[1])) < 0 ? t = (360 - -1 * t % 360) % 360 : t > 360 && (t %= 360), t /= 360, (n = parseFloat(d[2])) < 0 || n > 100) return;
              if (n /= 100, (r = parseFloat(d[3])) < 0 || r > 100) return;
              if (r /= 100, void 0 !== (i = d[4]) && ((i = parseFloat(i)) < 0 || i > 1)) return;
              if (0 === n) c = o = s = Math.round(255 * r);
              else {
                var u = r < .5 ? r * (1 + n) : r + n - r * n,
                  h = 2 * r - u;
                c = Math.round(255 * l(h, u, t + 1 / 3)), o = Math.round(255 * l(h, u, t)), s = Math.round(255 * l(h, u, t - 1 / 3))
              }
              a = [c, o, s, i]
            }
            return a
          }(e)
        },
        z = {
          transparent: [0, 0, 0, 0],
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          grey: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50]
        },
        W = function(e) {
          for (var a = e.map, t = e.keys, n = t.length, r = 0; r < n; r++) {
            var i = t[r];
            if (b(i)) throw Error("Tried to set map with object key");
            r < t.length - 1 ? (null == a[i] && (a[i] = {}), a = a[i]) : a[i] = e.value
          }
        },
        j = function(e) {
          for (var a = e.map, t = e.keys, n = t.length, r = 0; r < n; r++) {
            var i = t[r];
            if (b(i)) throw Error("Tried to get map with object key");
            if (null == (a = a[i])) return a
          }
          return a
        },
        O = u ? u.performance : null,
        H = O && O.now ? function() {
          return O.now()
        } : function() {
          return Date.now()
        },
        Q = function() {
          if (u) {
            if (u.requestAnimationFrame) return function(e) {
              u.requestAnimationFrame(e)
            };
            if (u.mozRequestAnimationFrame) return function(e) {
              u.mozRequestAnimationFrame(e)
            };
            if (u.webkitRequestAnimationFrame) return function(e) {
              u.webkitRequestAnimationFrame(e)
            };
            if (u.msRequestAnimationFrame) return function(e) {
              u.msRequestAnimationFrame(e)
            }
          }
          return function(e) {
            e && setTimeout((function() {
              e(H())
            }), 1e3 / 60)
          }
        }(),
        q = function(e) {
          return Q(e)
        },
        Z = H,
        K = function(e) {
          for (var a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5381, n = t; !(a = e.next()).done;) n = (n << 5) + n + a.value | 0;
          return n
        },
        Y = function(e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5381;
          return (a << 5) + a + e | 0
        },
        X = function(e, a) {
          var t = {
              value: 0,
              done: !1
            },
            n = 0,
            r = e.length;
          return K({
            next: function() {
              return n < r ? t.value = e[n++] : t.done = !0, t
            }
          }, a)
        },
        J = function(e, a) {
          var t = {
              value: 0,
              done: !1
            },
            n = 0,
            r = e.length;
          return K({
            next: function() {
              return n < r ? t.value = e.charCodeAt(n++) : t.done = !0, t
            }
          }, a)
        },
        $ = function() {
          return ee(arguments)
        },
        ee = function(e) {
          for (var a, t = 0; t < e.length; t++) {
            var n = e[t];
            a = 0 === t ? J(n) : J(n, a)
          }
          return a
        },
        ae = !0,
        te = null != console.warn,
        ne = null != console.trace,
        re = Number.MAX_SAFE_INTEGER || 9007199254740991,
        ie = function() {
          return !0
        },
        ce = function() {
          return !1
        },
        oe = function() {
          return 0
        },
        se = function() {},
        le = function(e) {
          throw new Error(e)
        },
        de = function(e) {
          if (void 0 === e) return ae;
          ae = !!e
        },
        ue = function(e) {
          de() && (te ? console.warn(e) : (console.log(e), ne && console.trace()))
        },
        he = function(e) {
          return null == e ? e : S(e) ? e.slice() : b(e) ? function(e) {
            return F({}, e)
          }(e) : e
        },
        me = function(e, a) {
          for (a = e = ""; e++ < 36; a += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
          return a
        },
        ge = {},
        pe = function() {
          return ge
        },
        ye = function(e) {
          var a = Object.keys(e);
          return function(t) {
            for (var n = {}, r = 0; r < a.length; r++) {
              var i = a[r],
                c = null == t ? void 0 : t[i];
              n[i] = void 0 === c ? e[i] : c
            }
            return n
          }
        },
        fe = function(e, a, t) {
          for (var n = e.length; n >= 0 && (e[n] !== a || (e.splice(n, 1), t)); n--);
        },
        ve = function(e) {
          e.splice(0, e.length)
        },
        _e = function(e, a, t) {
          return t && (a = R(t, a)), e[a]
        },
        Se = function(e, a, t, n) {
          t && (a = R(t, a)), e[a] = n
        },
        be = "undefined" != typeof Map ? Map : function() {
          function e() {
            o(this, e), this._obj = {}
          }
          return l(e, [{
            key: "set",
            value: function(e, a) {
              return this._obj[e] = a, this
            }
          }, {
            key: "delete",
            value: function(e) {
              return this._obj[e] = void 0, this
            }
          }, {
            key: "clear",
            value: function() {
              this._obj = {}
            }
          }, {
            key: "has",
            value: function(e) {
              return void 0 !== this._obj[e]
            }
          }, {
            key: "get",
            value: function(e) {
              return this._obj[e]
            }
          }]), e
        }(),
        we = function() {
          function e(a) {
            if (o(this, e), this._obj = Object.create(null), this.size = 0, null != a) {
              var t;
              t = null != a.instanceString && a.instanceString() === this.instanceString() ? a.toArray() : a;
              for (var n = 0; n < t.length; n++) this.add(t[n])
            }
          }
          return l(e, [{
            key: "instanceString",
            value: function() {
              return "set"
            }
          }, {
            key: "add",
            value: function(e) {
              var a = this._obj;
              1 !== a[e] && (a[e] = 1, this.size++)
            }
          }, {
            key: "delete",
            value: function(e) {
              var a = this._obj;
              1 === a[e] && (a[e] = 0, this.size--)
            }
          }, {
            key: "clear",
            value: function() {
              this._obj = Object.create(null)
            }
          }, {
            key: "has",
            value: function(e) {
              return 1 === this._obj[e]
            }
          }, {
            key: "toArray",
            value: function() {
              var e = this;
              return Object.keys(this._obj).filter((function(a) {
                return e.has(a)
              }))
            }
          }, {
            key: "forEach",
            value: function(e, a) {
              return this.toArray().forEach(e, a)
            }
          }]), e
        }(),
        Ce = "undefined" !== ("undefined" == typeof Set ? "undefined" : c(Set)) ? Set : we,
        Ne = function(e, a, t) {
          if (t = !(void 0 !== t && !t), void 0 !== e && void 0 !== a && x(e)) {
            var n = a.group;
            if (null == n && (n = a.data && null != a.data.source && null != a.data.target ? "edges" : "nodes"), "nodes" === n || "edges" === n) {
              this.length = 1, this[0] = this;
              var r = this._private = {
                cy: e,
                single: !0,
                data: a.data || {},
                position: a.position || {
                  x: 0,
                  y: 0
                },
                autoWidth: void 0,
                autoHeight: void 0,
                autoPadding: void 0,
                compoundBoundsClean: !1,
                listeners: [],
                group: n,
                style: {},
                rstyle: {},
                styleCxts: [],
                styleKeys: {},
                removed: !0,
                selected: !!a.selected,
                selectable: void 0 === a.selectable || !!a.selectable,
                locked: !!a.locked,
                grabbed: !1,
                grabbable: void 0 === a.grabbable || !!a.grabbable,
                pannable: void 0 === a.pannable ? "edges" === n : !!a.pannable,
                active: !1,
                classes: new Ce,
                animation: {
                  current: [],
                  queue: []
                },
                rscratch: {},
                scratch: a.scratch || {},
                edges: [],
                children: [],
                parent: null,
                traversalCache: {},
                backgrounding: !1,
                bbCache: null,
                bbCacheShift: {
                  x: 0,
                  y: 0
                },
                bodyBounds: null,
                overlayBounds: null,
                labelBounds: {
                  all: null,
                  source: null,
                  target: null,
                  main: null
                },
                arrowBounds: {
                  source: null,
                  target: null,
                  "mid-source": null,
                  "mid-target": null
                }
              };
              if (null == r.position.x && (r.position.x = 0), null == r.position.y && (r.position.y = 0), a.renderedPosition) {
                var i = a.renderedPosition,
                  c = e.pan(),
                  o = e.zoom();
                r.position = {
                  x: (i.x - c.x) / o,
                  y: (i.y - c.y) / o
                }
              }
              var s = [];
              S(a.classes) ? s = a.classes : v(a.classes) && (s = a.classes.split(/\s+/));
              for (var l = 0, d = s.length; l < d; l++) {
                var u = s[l];
                u && "" !== u && r.classes.add(u)
              }
              this.createEmitter();
              var h = a.style || a.css;
              h && (ue("Setting a `style` bypass at element creation is deprecated"), this.style(h)), (void 0 === t || t) && this.restore()
            } else le("An element must be of type `nodes` or `edges`; you specified `" + n + "`")
          } else le("An element must have a core reference and parameters set")
        },
        Be = function(e) {
          return e = {
              bfs: e.bfs || !e.dfs,
              dfs: e.dfs || !e.bfs
            },
            function(a, t, n) {
              var r;
              b(a) && !N(a) && (a = (r = a).roots || r.root, t = r.visit, n = r.directed), n = 2 !== arguments.length || _(t) ? n : t, t = _(t) ? t : function() {};
              for (var i, c = this._private.cy, o = a = v(a) ? this.filter(a) : a, s = [], l = [], d = {}, u = {}, h = {}, m = 0, g = this.byGroup(), p = g.nodes, y = g.edges, f = 0; f < o.length; f++) {
                var S = o[f],
                  w = S.id();
                S.isNode() && (s.unshift(S), e.bfs && (h[w] = !0, l.push(S)), u[w] = 0)
              }
              var C = function() {
                var a = e.bfs ? s.shift() : s.pop(),
                  r = a.id();
                if (e.dfs) {
                  if (h[r]) return "continue";
                  h[r] = !0, l.push(a)
                }
                var c, o = u[r],
                  g = d[r],
                  f = null != g ? g.source() : null,
                  v = null != g ? g.target() : null,
                  _ = null == g ? void 0 : a.same(f) ? v[0] : f[0];
                if (!0 === (c = t(a, g, _, m++, o))) return i = a, "break";
                if (!1 === c) return "break";
                for (var S = a.connectedEdges().filter((function(e) {
                    return (!n || e.source().same(a)) && y.has(e)
                  })), b = 0; b < S.length; b++) {
                  var w = S[b],
                    C = w.connectedNodes().filter((function(e) {
                      return !e.same(a) && p.has(e)
                    })),
                    N = C.id();
                  0 === C.length || h[N] || (C = C[0], s.push(C), e.bfs && (h[N] = !0, l.push(C)), d[N] = w, u[N] = u[r] + 1)
                }
              };
              e: for (; 0 !== s.length;) {
                var B = C();
                switch (B) {
                  case "continue":
                    continue;
                  case "break":
                    break e
                }
              }
              for (var D = c.collection(), x = 0; x < l.length; x++) {
                var I = l[x],
                  T = d[I.id()];
                null != T && D.merge(T), D.merge(I)
              }
              return {
                path: c.collection(D),
                found: c.collection(i)
              }
            }
        },
        De = {
          breadthFirstSearch: Be({
            bfs: !0
          }),
          depthFirstSearch: Be({
            dfs: !0
          })
        };
      De.bfs = De.breadthFirstSearch, De.dfs = De.depthFirstSearch;
      var xe = ye({
          root: null,
          weight: function(e) {
            return 1
          },
          directed: !1
        }),
        Ie = {
          dijkstra: function(e) {
            if (!b(e)) {
              var a = arguments;
              e = {
                root: a[0],
                weight: a[1],
                directed: a[2]
              }
            }
            var t = xe(e),
              n = t.root,
              r = t.weight,
              c = t.directed,
              o = this,
              s = r,
              l = v(n) ? this.filter(n)[0] : n[0],
              d = {},
              u = {},
              h = {},
              m = this.byGroup(),
              g = m.nodes,
              p = m.edges;
            p.unmergeBy((function(e) {
              return e.isLoop()
            }));
            for (var y = function(e) {
                return d[e.id()]
              }, f = function(e, a) {
                d[e.id()] = a, _.updateItem(e)
              }, _ = new i((function(e, a) {
                return y(e) - y(a)
              })), S = 0; S < g.length; S++) {
              var w = g[S];
              d[w.id()] = w.same(l) ? 0 : 1 / 0, _.push(w)
            }
            for (var C = function(e, a) {
                for (var t, n = (c ? e.edgesTo(a) : e.edgesWith(a)).intersect(p), r = 1 / 0, i = 0; i < n.length; i++) {
                  var o = n[i],
                    l = s(o);
                  (l < r || !t) && (r = l, t = o)
                }
                return {
                  edge: t,
                  dist: r
                }
              }; _.size() > 0;) {
              var N = _.pop(),
                B = y(N),
                D = N.id();
              if (h[D] = B, B !== 1 / 0)
                for (var x = N.neighborhood().intersect(g), I = 0; I < x.length; I++) {
                  var T = x[I],
                    U = T.id(),
                    P = C(N, T),
                    M = B + P.dist;
                  M < y(T) && (f(T, M), u[U] = {
                    node: N,
                    edge: P.edge
                  })
                }
            }
            return {
              distanceTo: function(e) {
                var a = v(e) ? g.filter(e)[0] : e[0];
                return h[a.id()]
              },
              pathTo: function(e) {
                var a = v(e) ? g.filter(e)[0] : e[0],
                  t = [],
                  n = a,
                  r = n.id();
                if (a.length > 0)
                  for (t.unshift(a); u[r];) {
                    var i = u[r];
                    t.unshift(i.edge), t.unshift(i.node), r = (n = i.node).id()
                  }
                return o.spawn(t)
              }
            }
          }
        },
        Te = {
          kruskal: function(e) {
            e = e || function(e) {
              return 1
            };
            for (var a = this.byGroup(), t = a.nodes, n = a.edges, r = t.length, i = new Array(r), c = t, o = function(e) {
                for (var a = 0; a < i.length; a++) {
                  if (i[a].has(e)) return a
                }
              }, s = 0; s < r; s++) i[s] = this.spawn(t[s]);
            for (var l = n.sort((function(a, t) {
                return e(a) - e(t)
              })), d = 0; d < l.length; d++) {
              var u = l[d],
                h = u.source()[0],
                m = u.target()[0],
                g = o(h),
                p = o(m),
                y = i[g],
                f = i[p];
              g !== p && (c.merge(u), y.merge(f), i.splice(p, 1))
            }
            return c
          }
        },
        Ue = ye({
          root: null,
          goal: null,
          weight: function(e) {
            return 1
          },
          heuristic: function(e) {
            return 0
          },
          directed: !1
        }),
        Pe = {
          aStar: function(e) {
            var a = this.cy(),
              t = Ue(e),
              n = t.root,
              r = t.goal,
              c = t.heuristic,
              o = t.directed,
              s = t.weight;
            n = a.collection(n)[0], r = a.collection(r)[0];
            var l, d, u = n.id(),
              h = r.id(),
              m = {},
              g = {},
              p = {},
              y = new i((function(e, a) {
                return g[e.id()] - g[a.id()]
              })),
              f = new Ce,
              v = {},
              _ = {},
              S = function(e, a) {
                y.push(e), f.add(a)
              };
            S(n, u), m[u] = 0, g[u] = c(n);
            for (var b, w = 0; y.size() > 0;) {
              if (l = y.pop(), d = l.id(), f.delete(d), w++, d === h) {
                for (var C = [], N = r, B = h, D = _[B]; C.unshift(N), null != D && C.unshift(D), null != (N = v[B]);) D = _[B = N.id()];
                return {
                  found: !0,
                  distance: m[d],
                  path: this.spawn(C),
                  steps: w
                }
              }
              p[d] = !0;
              for (var x = l._private.edges, I = 0; I < x.length; I++) {
                var T = x[I];
                if (this.hasElementWithId(T.id()) && (!o || T.data("source") === d)) {
                  var U = T.source(),
                    P = T.target(),
                    M = U.id() !== d ? U : P,
                    k = M.id();
                  if (this.hasElementWithId(k) && !p[k]) {
                    var A = m[d] + s(T);
                    b = k, f.has(b) ? A < m[k] && (m[k] = A, g[k] = A + c(M), v[k] = l) : (m[k] = A, g[k] = A + c(M), S(M, k), v[k] = l, _[k] = T)
                  }
                }
              }
            }
            return {
              found: !1,
              distance: void 0,
              path: void 0,
              steps: w
            }
          }
        },
        Me = ye({
          weight: function(e) {
            return 1
          },
          directed: !1
        }),
        ke = {
          floydWarshall: function(e) {
            for (var a = this.cy(), t = Me(e), n = t.weight, r = t.directed, i = n, c = this.byGroup(), o = c.nodes, s = c.edges, l = o.length, d = l * l, u = function(e) {
                return o.indexOf(e)
              }, h = function(e) {
                return o[e]
              }, m = new Array(d), g = 0; g < d; g++) {
              var p = g % l,
                y = (g - p) / l;
              m[g] = y === p ? 0 : 1 / 0
            }
            for (var f = new Array(d), _ = new Array(d), S = 0; S < s.length; S++) {
              var b = s[S],
                w = b.source()[0],
                C = b.target()[0];
              if (w !== C) {
                var N = u(w),
                  B = u(C),
                  D = N * l + B,
                  x = i(b);
                if (m[D] > x && (m[D] = x, f[D] = B, _[D] = b), !r) {
                  var I = B * l + N;
                  !r && m[I] > x && (m[I] = x, f[I] = N, _[I] = b)
                }
              }
            }
            for (var T = 0; T < l; T++)
              for (var U = 0; U < l; U++)
                for (var P = U * l + T, M = 0; M < l; M++) {
                  var k = U * l + M,
                    A = T * l + M;
                  m[P] + m[A] < m[k] && (m[k] = m[P] + m[A], f[k] = f[P])
                }
            var R = function(e) {
              return u(function(e) {
                return (v(e) ? a.filter(e) : e)[0]
              }(e))
            };
            return {
              distance: function(e, a) {
                var t = R(e),
                  n = R(a);
                return m[t * l + n]
              },
              path: function(e, t) {
                var n = R(e),
                  r = R(t),
                  i = h(n);
                if (n === r) return i.collection();
                if (null == f[n * l + r]) return a.collection();
                var c, o = a.collection(),
                  s = n;
                for (o.merge(i); n !== r;) s = n, n = f[n * l + r], c = _[s * l + n], o.merge(c), o.merge(h(n));
                return o
              }
            }
          }
        },
        Ae = ye({
          weight: function(e) {
            return 1
          },
          directed: !1,
          root: null
        }),
        Re = {
          bellmanFord: function(e) {
            var a = this,
              t = Ae(e),
              n = t.weight,
              r = t.directed,
              i = t.root,
              c = n,
              o = this,
              s = this.cy(),
              l = this.byGroup(),
              d = l.edges,
              u = l.nodes,
              h = u.length,
              m = new be,
              g = !1;
            i = s.collection(i)[0], d.unmergeBy((function(e) {
              return e.isLoop()
            }));
            for (var p = d.length, y = function(e) {
                var a = m.get(e.id());
                return a || (a = {}, m.set(e.id(), a)), a
              }, f = function(e) {
                return (v(e) ? s.$(e) : e)[0]
              }, _ = 0; _ < h; _++) {
              var S = u[_],
                b = y(S);
              S.same(i) ? b.dist = 0 : b.dist = 1 / 0, b.pred = null, b.edge = null
            }
            for (var w = !1, C = function(e, a, t, n, r, i) {
                var c = n.dist + i;
                c < r.dist && !t.same(n.edge) && (r.dist = c, r.pred = e, r.edge = t, w = !0)
              }, N = 1; N < h; N++) {
              w = !1;
              for (var B = 0; B < p; B++) {
                var D = d[B],
                  x = D.source(),
                  I = D.target(),
                  T = c(D),
                  U = y(x),
                  P = y(I);
                C(x, 0, D, U, P, T), r || C(I, 0, D, P, U, T)
              }
              if (!w) break
            }
            if (w)
              for (var M = 0; M < p; M++) {
                var k = d[M],
                  A = k.source(),
                  R = k.target(),
                  E = c(k),
                  G = y(A).dist,
                  V = y(R).dist;
                if (G + E < V || !r && V + E < G) {
                  ue("Graph contains a negative weight cycle for Bellman-Ford"), g = !0;
                  break
                }
              }
            return {
              distanceTo: function(e) {
                return y(f(e)).dist
              },
              pathTo: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i, n = f(e), r = [], c = n;;) {
                  if (null == c) return a.spawn();
                  var s = y(c),
                    l = s.edge,
                    d = s.pred;
                  if (r.unshift(c[0]), c.same(t) && r.length > 0) break;
                  null != l && r.unshift(l), c = d
                }
                return o.spawn(r)
              },
              hasNegativeWeightCycle: g,
              negativeWeightCycles: []
            }
          }
        },
        Ee = Math.sqrt(2),
        Ge = function(e, a, t) {
          0 === t.length && le("Karger-Stein must be run on a connected (sub)graph");
          for (var n = t[e], r = n[1], i = n[2], c = a[r], o = a[i], s = t, l = s.length - 1; l >= 0; l--) {
            var d = s[l],
              u = d[1],
              h = d[2];
            (a[u] === c && a[h] === o || a[u] === o && a[h] === c) && s.splice(l, 1)
          }
          for (var m = 0; m < s.length; m++) {
            var g = s[m];
            g[1] === o ? (s[m] = g.slice(), s[m][1] = c) : g[2] === o && (s[m] = g.slice(), s[m][2] = c)
          }
          for (var p = 0; p < a.length; p++) a[p] === o && (a[p] = c);
          return s
        },
        Ve = function(e, a, t, n) {
          for (; t > n;) {
            var r = Math.floor(Math.random() * a.length);
            a = Ge(r, e, a), t--
          }
          return a
        },
        Fe = {
          kargerStein: function() {
            var e = this.byGroup(),
              a = e.nodes,
              t = e.edges;
            t.unmergeBy((function(e) {
              return e.isLoop()
            }));
            var n = a.length,
              r = t.length,
              i = Math.ceil(Math.pow(Math.log(n) / Math.LN2, 2)),
              c = Math.floor(n / Ee);
            if (!(n < 2)) {
              for (var o = [], s = 0; s < r; s++) {
                var l = t[s];
                o.push([s, a.indexOf(l.source()), a.indexOf(l.target())])
              }
              for (var d = 1 / 0, u = [], h = new Array(n), m = new Array(n), g = new Array(n), p = function(e, a) {
                  for (var t = 0; t < n; t++) a[t] = e[t]
                }, y = 0; y <= i; y++) {
                for (var f = 0; f < n; f++) m[f] = f;
                var v = Ve(m, o.slice(), n, c),
                  _ = v.slice();
                p(m, g);
                var S = Ve(m, v, c, 2),
                  b = Ve(g, _, c, 2);
                S.length <= b.length && S.length < d ? (d = S.length, u = S, p(m, h)) : b.length <= S.length && b.length < d && (d = b.length, u = b, p(g, h))
              }
              for (var w = this.spawn(u.map((function(e) {
                  return t[e[0]]
                }))), C = this.spawn(), N = this.spawn(), B = h[0], D = 0; D < h.length; D++) {
                var x = h[D],
                  I = a[D];
                x === B ? C.merge(I) : N.merge(I)
              }
              return {
                cut: w,
                partition1: C,
                partition2: N
              }
            }
            le("At least 2 nodes are required for Karger-Stein algorithm")
          }
        },
        Le = function(e) {
          return {
            x: e.x,
            y: e.y
          }
        },
        ze = function(e, a, t) {
          return {
            x: e.x * a + t.x,
            y: e.y * a + t.y
          }
        },
        We = function(e, a, t) {
          return {
            x: (e.x - t.x) / a,
            y: (e.y - t.y) / a
          }
        },
        je = function(e) {
          return {
            x: e[0],
            y: e[1]
          }
        },
        Oe = function(e, a) {
          return Math.atan2(a, e) - Math.PI / 2
        },
        He = Math.log2 || function(e) {
          return Math.log(e) / Math.log(2)
        },
        Qe = function(e) {
          return e > 0 ? 1 : e < 0 ? -1 : 0
        },
        qe = function(e, a) {
          return Math.sqrt(Ze(e, a))
        },
        Ze = function(e, a) {
          var t = a.x - e.x,
            n = a.y - e.y;
          return t * t + n * n
        },
        Ke = function(e) {
          for (var a = e.length, t = 0, n = 0; n < a; n++) t += e[n];
          for (var r = 0; r < a; r++) e[r] = e[r] / t;
          return e
        },
        Ye = function(e, a, t, n) {
          return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * a + n * n * t
        },
        Xe = function(e, a, t, n) {
          return {
            x: Ye(e.x, a.x, t.x, n),
            y: Ye(e.y, a.y, t.y, n)
          }
        },
        Je = function(e, a, t) {
          return Math.max(e, Math.min(t, a))
        },
        $e = function(e) {
          if (null == e) return {
            x1: 1 / 0,
            y1: 1 / 0,
            x2: -1 / 0,
            y2: -1 / 0,
            w: 0,
            h: 0
          };
          if (null != e.x1 && null != e.y1) {
            if (null != e.x2 && null != e.y2 && e.x2 >= e.x1 && e.y2 >= e.y1) return {
              x1: e.x1,
              y1: e.y1,
              x2: e.x2,
              y2: e.y2,
              w: e.x2 - e.x1,
              h: e.y2 - e.y1
            };
            if (null != e.w && null != e.h && e.w >= 0 && e.h >= 0) return {
              x1: e.x1,
              y1: e.y1,
              x2: e.x1 + e.w,
              y2: e.y1 + e.h,
              w: e.w,
              h: e.h
            }
          }
        },
        ea = function(e, a, t) {
          e.x1 = Math.min(e.x1, a), e.x2 = Math.max(e.x2, a), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, t), e.y2 = Math.max(e.y2, t), e.h = e.y2 - e.y1
        },
        aa = function(e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return e.x1 -= a, e.x2 += a, e.y1 -= a, e.y2 += a, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e
        },
        ta = function(e) {
          var a, t, n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0];
          if (1 === i.length) a = t = n = r = i[0];
          else if (2 === i.length) a = n = i[0], r = t = i[1];
          else if (4 === i.length) {
            var c = d(i, 4);
            a = c[0], t = c[1], n = c[2], r = c[3]
          }
          return e.x1 -= r, e.x2 += t, e.y1 -= a, e.y2 += n, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e
        },
        na = function(e, a) {
          e.x1 = a.x1, e.y1 = a.y1, e.x2 = a.x2, e.y2 = a.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1
        },
        ra = function(e, a) {
          e.x1 += a.x, e.x2 += a.x, e.y1 += a.y, e.y2 += a.y
        },
        ia = function(e, a) {
          return !(e.x1 > a.x2) && (!(a.x1 > e.x2) && (!(e.x2 < a.x1) && (!(a.x2 < e.x1) && (!(e.y2 < a.y1) && (!(a.y2 < e.y1) && (!(e.y1 > a.y2) && !(a.y1 > e.y2)))))))
        },
        ca = function(e, a, t) {
          return e.x1 <= a && a <= e.x2 && e.y1 <= t && t <= e.y2
        },
        oa = function(e, a) {
          return ca(e, a.x1, a.y1) && ca(e, a.x2, a.y2)
        },
        sa = function(e, a, t, n, r, i, c) {
          var o, s = Da(r, i),
            l = r / 2,
            d = i / 2,
            u = n - d - c;
          if ((o = Sa(e, a, t, n, t - l + s - c, u, t + l - s + c, u, !1)).length > 0) return o;
          var h = t + l + c;
          if ((o = Sa(e, a, t, n, h, n - d + s - c, h, n + d - s + c, !1)).length > 0) return o;
          var m = n + d + c;
          if ((o = Sa(e, a, t, n, t - l + s - c, m, t + l - s + c, m, !1)).length > 0) return o;
          var g, p = t - l - c;
          if ((o = Sa(e, a, t, n, p, n - d + s - c, p, n + d - s + c, !1)).length > 0) return o;
          var y = t - l + s,
            f = n - d + s;
          if ((g = va(e, a, t, n, y, f, s + c)).length > 0 && g[0] <= y && g[1] <= f) return [g[0], g[1]];
          var v = t + l - s,
            _ = n - d + s;
          if ((g = va(e, a, t, n, v, _, s + c)).length > 0 && g[0] >= v && g[1] <= _) return [g[0], g[1]];
          var S = t + l - s,
            b = n + d - s;
          if ((g = va(e, a, t, n, S, b, s + c)).length > 0 && g[0] >= S && g[1] >= b) return [g[0], g[1]];
          var w = t - l + s,
            C = n + d - s;
          return (g = va(e, a, t, n, w, C, s + c)).length > 0 && g[0] <= w && g[1] >= C ? [g[0], g[1]] : []
        },
        la = function(e, a, t, n, r, i, c) {
          var o = c,
            s = Math.min(t, r),
            l = Math.max(t, r),
            d = Math.min(n, i),
            u = Math.max(n, i);
          return s - o <= e && e <= l + o && d - o <= a && a <= u + o
        },
        da = function(e, a, t, n, r, i, c, o, s) {
          var l = Math.min(t, c, r) - s,
            d = Math.max(t, c, r) + s,
            u = Math.min(n, o, i) - s,
            h = Math.max(n, o, i) + s;
          return !(e < l || e > d || a < u || a > h)
        },
        ua = function(e, a, t, n, r, i, c, o) {
          var s = [];
          ! function(e, a, t, n, r) {
            var i, c, o, s, l, d, u, h;
            0 === e && (e = 1e-5), o = -27 * (n /= e) + (a /= e) * (9 * (t /= e) - a * a * 2), i = (c = (3 * t - a * a) / 9) * c * c + (o /= 54) * o, r[1] = 0, u = a / 3, i > 0 ? (l = (l = o + Math.sqrt(i)) < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), d = (d = o - Math.sqrt(i)) < 0 ? -Math.pow(-d, 1 / 3) : Math.pow(d, 1 / 3), r[0] = -u + l + d, u += (l + d) / 2, r[4] = r[2] = -u, u = Math.sqrt(3) * (-d + l) / 2, r[3] = u, r[5] = -u) : (r[5] = r[3] = 0, 0 === i ? (h = o < 0 ? -Math.pow(-o, 1 / 3) : Math.pow(o, 1 / 3), r[0] = 2 * h - u, r[4] = r[2] = -(h + u)) : (s = (c = -c) * c * c, s = Math.acos(o / Math.sqrt(s)), h = 2 * Math.sqrt(c), r[0] = -u + h * Math.cos(s / 3), r[2] = -u + h * Math.cos((s + 2 * Math.PI) / 3), r[4] = -u + h * Math.cos((s + 4 * Math.PI) / 3)))
          }(1 * t * t - 4 * t * r + 2 * t * c + 4 * r * r - 4 * r * c + c * c + n * n - 4 * n * i + 2 * n * o + 4 * i * i - 4 * i * o + o * o, 9 * t * r - 3 * t * t - 3 * t * c - 6 * r * r + 3 * r * c + 9 * n * i - 3 * n * n - 3 * n * o - 6 * i * i + 3 * i * o, 3 * t * t - 6 * t * r + t * c - t * e + 2 * r * r + 2 * r * e - c * e + 3 * n * n - 6 * n * i + n * o - n * a + 2 * i * i + 2 * i * a - o * a, 1 * t * r - t * t + t * e - r * e + n * i - n * n + n * a - i * a, s);
          for (var l = [], d = 0; d < 6; d += 2) Math.abs(s[d + 1]) < 1e-7 && s[d] >= 0 && s[d] <= 1 && l.push(s[d]);
          l.push(1), l.push(0);
          for (var u, h, m, g = -1, p = 0; p < l.length; p++) u = Math.pow(1 - l[p], 2) * t + 2 * (1 - l[p]) * l[p] * r + l[p] * l[p] * c, h = Math.pow(1 - l[p], 2) * n + 2 * (1 - l[p]) * l[p] * i + l[p] * l[p] * o, m = Math.pow(u - e, 2) + Math.pow(h - a, 2), g >= 0 ? m < g && (g = m) : g = m;
          return g
        },
        ha = function(e, a, t, n, r, i) {
          var c = [e - t, a - n],
            o = [r - t, i - n],
            s = o[0] * o[0] + o[1] * o[1],
            l = c[0] * c[0] + c[1] * c[1],
            d = c[0] * o[0] + c[1] * o[1],
            u = d * d / s;
          return d < 0 ? l : u > s ? (e - r) * (e - r) + (a - i) * (a - i) : l - u
        },
        ma = function(e, a, t) {
          for (var n, r, i, c, o = 0, s = 0; s < t.length / 2; s++)
            if (n = t[2 * s], r = t[2 * s + 1], s + 1 < t.length / 2 ? (i = t[2 * (s + 1)], c = t[2 * (s + 1) + 1]) : (i = t[2 * (s + 1 - t.length / 2)], c = t[2 * (s + 1 - t.length / 2) + 1]), n == e && i == e);
            else {
              if (!(n >= e && e >= i || n <= e && e <= i)) continue;
              (e - n) / (i - n) * (c - r) + r > a && o++
            } return o % 2 != 0
        },
        ga = function(e, a, t, n, r, i, c, o, s) {
          var l, d = new Array(t.length);
          null != o[0] ? (l = Math.atan(o[1] / o[0]), o[0] < 0 ? l += Math.PI / 2 : l = -l - Math.PI / 2) : l = o;
          for (var u, h = Math.cos(-l), m = Math.sin(-l), g = 0; g < d.length / 2; g++) d[2 * g] = i / 2 * (t[2 * g] * h - t[2 * g + 1] * m), d[2 * g + 1] = c / 2 * (t[2 * g + 1] * h + t[2 * g] * m), d[2 * g] += n, d[2 * g + 1] += r;
          if (s > 0) {
            var p = ya(d, -s);
            u = pa(p)
          } else u = d;
          return ma(e, a, u)
        },
        pa = function(e) {
          for (var a, t, n, r, i, c, o, s, l = new Array(e.length / 2), d = 0; d < e.length / 4; d++) {
            a = e[4 * d], t = e[4 * d + 1], n = e[4 * d + 2], r = e[4 * d + 3], d < e.length / 4 - 1 ? (i = e[4 * (d + 1)], c = e[4 * (d + 1) + 1], o = e[4 * (d + 1) + 2], s = e[4 * (d + 1) + 3]) : (i = e[0], c = e[1], o = e[2], s = e[3]);
            var u = Sa(a, t, n, r, i, c, o, s, !0);
            l[2 * d] = u[0], l[2 * d + 1] = u[1]
          }
          return l
        },
        ya = function(e, a) {
          for (var t, n, r, i, c = new Array(2 * e.length), o = 0; o < e.length / 2; o++) {
            t = e[2 * o], n = e[2 * o + 1], o < e.length / 2 - 1 ? (r = e[2 * (o + 1)], i = e[2 * (o + 1) + 1]) : (r = e[0], i = e[1]);
            var s = i - n,
              l = -(r - t),
              d = Math.sqrt(s * s + l * l),
              u = s / d,
              h = l / d;
            c[4 * o] = t + u * a, c[4 * o + 1] = n + h * a, c[4 * o + 2] = r + u * a, c[4 * o + 3] = i + h * a
          }
          return c
        },
        fa = function(e, a, t, n, r, i, c) {
          return e -= r, a -= i, (e /= t / 2 + c) * e + (a /= n / 2 + c) * a <= 1
        },
        va = function(e, a, t, n, r, i, c) {
          var o = [t - e, n - a],
            s = [e - r, a - i],
            l = o[0] * o[0] + o[1] * o[1],
            d = 2 * (s[0] * o[0] + s[1] * o[1]),
            u = d * d - 4 * l * (s[0] * s[0] + s[1] * s[1] - c * c);
          if (u < 0) return [];
          var h = (-d + Math.sqrt(u)) / (2 * l),
            m = (-d - Math.sqrt(u)) / (2 * l),
            g = Math.min(h, m),
            p = Math.max(h, m),
            y = [];
          if (g >= 0 && g <= 1 && y.push(g), p >= 0 && p <= 1 && y.push(p), 0 === y.length) return [];
          var f = y[0] * o[0] + e,
            v = y[0] * o[1] + a;
          return y.length > 1 ? y[0] == y[1] ? [f, v] : [f, v, y[1] * o[0] + e, y[1] * o[1] + a] : [f, v]
        },
        _a = function(e, a, t) {
          return a <= e && e <= t || t <= e && e <= a ? e : e <= a && a <= t || t <= a && a <= e ? a : t
        },
        Sa = function(e, a, t, n, r, i, c, o, s) {
          var l = e - r,
            d = t - e,
            u = c - r,
            h = a - i,
            m = n - a,
            g = o - i,
            p = u * h - g * l,
            y = d * h - m * l,
            f = g * d - u * m;
          if (0 !== f) {
            var v = p / f,
              _ = y / f;
            return -.001 <= v && v <= 1.001 && -.001 <= _ && _ <= 1.001 ? [e + v * d, a + v * m] : s ? [e + v * d, a + v * m] : []
          }
          return 0 === p || 0 === y ? _a(e, t, c) === c ? [c, o] : _a(e, t, r) === r ? [r, i] : _a(r, c, t) === t ? [t, n] : [] : []
        },
        ba = function(e, a, t, n, r, i, c, o) {
          var s, l, d, u, h, m, g = [],
            p = new Array(t.length),
            y = !0;
          if (null == i && (y = !1), y) {
            for (var f = 0; f < p.length / 2; f++) p[2 * f] = t[2 * f] * i + n, p[2 * f + 1] = t[2 * f + 1] * c + r;
            if (o > 0) {
              var v = ya(p, -o);
              l = pa(v)
            } else l = p
          } else l = t;
          for (var _ = 0; _ < l.length / 2; _++) d = l[2 * _], u = l[2 * _ + 1], _ < l.length / 2 - 1 ? (h = l[2 * (_ + 1)], m = l[2 * (_ + 1) + 1]) : (h = l[0], m = l[1]), 0 !== (s = Sa(e, a, n, r, d, u, h, m)).length && g.push(s[0], s[1]);
          return g
        },
        wa = function(e, a, t) {
          var n = [e[0] - a[0], e[1] - a[1]],
            r = Math.sqrt(n[0] * n[0] + n[1] * n[1]),
            i = (r - t) / r;
          return i < 0 && (i = 1e-5), [a[0] + i * n[0], a[1] + i * n[1]]
        },
        Ca = function(e, a) {
          var t = Ba(e, a);
          return t = Na(t)
        },
        Na = function(e) {
          for (var a, t, n = e.length / 2, r = 1 / 0, i = 1 / 0, c = -1 / 0, o = -1 / 0, s = 0; s < n; s++) a = e[2 * s], t = e[2 * s + 1], r = Math.min(r, a), c = Math.max(c, a), i = Math.min(i, t), o = Math.max(o, t);
          for (var l = 2 / (c - r), d = 2 / (o - i), u = 0; u < n; u++) a = e[2 * u] = e[2 * u] * l, t = e[2 * u + 1] = e[2 * u + 1] * d, r = Math.min(r, a), c = Math.max(c, a), i = Math.min(i, t), o = Math.max(o, t);
          if (i < -1)
            for (var h = 0; h < n; h++) t = e[2 * h + 1] = e[2 * h + 1] + (-1 - i);
          return e
        },
        Ba = function(e, a) {
          var t = 1 / e * 2 * Math.PI,
            n = e % 2 == 0 ? Math.PI / 2 + t / 2 : Math.PI / 2;
          n += a;
          for (var r, i = new Array(2 * e), c = 0; c < e; c++) r = c * t + n, i[2 * c] = Math.cos(r), i[2 * c + 1] = Math.sin(-r);
          return i
        },
        Da = function(e, a) {
          return Math.min(e / 4, a / 4, 8)
        },
        xa = function(e, a) {
          return Math.min(e / 10, a / 10, 8)
        },
        Ia = function(e, a) {
          return {
            heightOffset: Math.min(15, .05 * a),
            widthOffset: Math.min(100, .25 * e),
            ctrlPtOffsetPct: .05
          }
        },
        Ta = ye({
          dampingFactor: .8,
          precision: 1e-6,
          iterations: 200,
          weight: function(e) {
            return 1
          }
        }),
        Ua = {
          pageRank: function(e) {
            for (var a = Ta(e), t = a.dampingFactor, n = a.precision, r = a.iterations, i = a.weight, c = this._private.cy, o = this.byGroup(), s = o.nodes, l = o.edges, d = s.length, u = d * d, h = l.length, m = new Array(u), g = new Array(d), p = (1 - t) / d, y = 0; y < d; y++) {
              for (var f = 0; f < d; f++) {
                m[y * d + f] = 0
              }
              g[y] = 0
            }
            for (var v = 0; v < h; v++) {
              var _ = l[v],
                S = _.data("source"),
                b = _.data("target");
              if (S !== b) {
                var w = s.indexOfId(S),
                  C = s.indexOfId(b),
                  N = i(_);
                m[C * d + w] += N, g[w] += N
              }
            }
            for (var B = 1 / d + p, D = 0; D < d; D++)
              if (0 === g[D])
                for (var x = 0; x < d; x++) {
                  m[x * d + D] = B
                } else
                  for (var I = 0; I < d; I++) {
                    var T = I * d + D;
                    m[T] = m[T] / g[D] + p
                  }
            for (var U, P = new Array(d), M = new Array(d), k = 0; k < d; k++) P[k] = 1;
            for (var A = 0; A < r; A++) {
              for (var R = 0; R < d; R++) M[R] = 0;
              for (var E = 0; E < d; E++)
                for (var G = 0; G < d; G++) {
                  var V = E * d + G;
                  M[E] += m[V] * P[G]
                }
              Ke(M), U = P, P = M, M = U;
              for (var F = 0, L = 0; L < d; L++) {
                var z = U[L] - P[L];
                F += z * z
              }
              if (F < n) break
            }
            return {
              rank: function(e) {
                return e = c.collection(e)[0], P[s.indexOf(e)]
              }
            }
          }
        },
        Pa = ye({
          root: null,
          weight: function(e) {
            return 1
          },
          directed: !1,
          alpha: 0
        }),
        Ma = {
          degreeCentralityNormalized: function(e) {
            e = Pa(e);
            var a = this.cy(),
              t = this.nodes(),
              n = t.length;
            if (e.directed) {
              for (var r = {}, i = {}, c = 0, o = 0, s = 0; s < n; s++) {
                var l = t[s],
                  d = l.id();
                e.root = l;
                var u = this.degreeCentrality(e);
                c < u.indegree && (c = u.indegree), o < u.outdegree && (o = u.outdegree), r[d] = u.indegree, i[d] = u.outdegree
              }
              return {
                indegree: function(e) {
                  return 0 == c ? 0 : (v(e) && (e = a.filter(e)), r[e.id()] / c)
                },
                outdegree: function(e) {
                  return 0 === o ? 0 : (v(e) && (e = a.filter(e)), i[e.id()] / o)
                }
              }
            }
            for (var h = {}, m = 0, g = 0; g < n; g++) {
              var p = t[g];
              e.root = p;
              var y = this.degreeCentrality(e);
              m < y.degree && (m = y.degree), h[p.id()] = y.degree
            }
            return {
              degree: function(e) {
                return 0 === m ? 0 : (v(e) && (e = a.filter(e)), h[e.id()] / m)
              }
            }
          },
          degreeCentrality: function(e) {
            e = Pa(e);
            var a = this.cy(),
              t = this,
              n = e,
              r = n.root,
              i = n.weight,
              c = n.directed,
              o = n.alpha;
            if (r = a.collection(r)[0], c) {
              for (var s = r.connectedEdges(), l = s.filter((function(e) {
                  return e.target().same(r) && t.has(e)
                })), d = s.filter((function(e) {
                  return e.source().same(r) && t.has(e)
                })), u = l.length, h = d.length, m = 0, g = 0, p = 0; p < l.length; p++) m += i(l[p]);
              for (var y = 0; y < d.length; y++) g += i(d[y]);
              return {
                indegree: Math.pow(u, 1 - o) * Math.pow(m, o),
                outdegree: Math.pow(h, 1 - o) * Math.pow(g, o)
              }
            }
            for (var f = r.connectedEdges().intersection(t), v = f.length, _ = 0, S = 0; S < f.length; S++) _ += i(f[S]);
            return {
              degree: Math.pow(v, 1 - o) * Math.pow(_, o)
            }
          }
        };
      Ma.dc = Ma.degreeCentrality, Ma.dcn = Ma.degreeCentralityNormalised = Ma.degreeCentralityNormalized;
      var ka = ye({
          harmonic: !0,
          weight: function() {
            return 1
          },
          directed: !1,
          root: null
        }),
        Aa = {
          closenessCentralityNormalized: function(e) {
            for (var a = ka(e), t = a.harmonic, n = a.weight, r = a.directed, i = this.cy(), c = {}, o = 0, s = this.nodes(), l = this.floydWarshall({
                weight: n,
                directed: r
              }), d = 0; d < s.length; d++) {
              for (var u = 0, h = s[d], m = 0; m < s.length; m++)
                if (d !== m) {
                  var g = l.distance(h, s[m]);
                  u += t ? 1 / g : g
                } t || (u = 1 / u), o < u && (o = u), c[h.id()] = u
            }
            return {
              closeness: function(e) {
                return 0 == o ? 0 : (e = v(e) ? i.filter(e)[0].id() : e.id(), c[e] / o)
              }
            }
          },
          closenessCentrality: function(e) {
            var a = ka(e),
              t = a.root,
              n = a.weight,
              r = a.directed,
              i = a.harmonic;
            t = this.filter(t)[0];
            for (var c = this.dijkstra({
                root: t,
                weight: n,
                directed: r
              }), o = 0, s = this.nodes(), l = 0; l < s.length; l++) {
              var d = s[l];
              if (!d.same(t)) {
                var u = c.distanceTo(d);
                o += i ? 1 / u : u
              }
            }
            return i ? o : 1 / o
          }
        };
      Aa.cc = Aa.closenessCentrality, Aa.ccn = Aa.closenessCentralityNormalised = Aa.closenessCentralityNormalized;
      var Ra = ye({
          weight: null,
          directed: !1
        }),
        Ea = {
          betweennessCentrality: function(e) {
            for (var a = Ra(e), t = a.directed, n = a.weight, r = null != n, c = this.cy(), o = this.nodes(), s = {}, l = {}, d = 0, u = function(e, a) {
                l[e] = a, a > d && (d = a)
              }, h = function(e) {
                return l[e]
              }, m = 0; m < o.length; m++) {
              var g = o[m],
                p = g.id();
              s[p] = t ? g.outgoers().nodes() : g.openNeighborhood().nodes(), u(p, 0)
            }
            for (var y = function(e) {
                for (var a = o[e].id(), t = [], l = {}, d = {}, m = {}, g = new i((function(e, a) {
                    return m[e] - m[a]
                  })), p = 0; p < o.length; p++) {
                  var y = o[p].id();
                  l[y] = [], d[y] = 0, m[y] = 1 / 0
                }
                for (d[a] = 1, m[a] = 0, g.push(a); !g.empty();) {
                  var f = g.pop();
                  if (t.push(f), r)
                    for (var v = 0; v < s[f].length; v++) {
                      var _ = s[f][v],
                        S = c.getElementById(f),
                        b = void 0;
                      b = S.edgesTo(_).length > 0 ? S.edgesTo(_)[0] : _.edgesTo(S)[0];
                      var w = n(b);
                      _ = _.id(), m[_] > m[f] + w && (m[_] = m[f] + w, g.nodes.indexOf(_) < 0 ? g.push(_) : g.updateItem(_), d[_] = 0, l[_] = []), m[_] == m[f] + w && (d[_] = d[_] + d[f], l[_].push(f))
                    } else
                      for (var C = 0; C < s[f].length; C++) {
                        var N = s[f][C].id();
                        m[N] == 1 / 0 && (g.push(N), m[N] = m[f] + 1), m[N] == m[f] + 1 && (d[N] = d[N] + d[f], l[N].push(f))
                      }
                }
                for (var B = {}, D = 0; D < o.length; D++) B[o[D].id()] = 0;
                for (; t.length > 0;)
                  for (var x = t.pop(), I = 0; I < l[x].length; I++) {
                    var T = l[x][I];
                    B[T] = B[T] + d[T] / d[x] * (1 + B[x]), x != o[e].id() && u(x, h(x) + B[x])
                  }
              }, f = 0; f < o.length; f++) y(f);
            var v = {
              betweenness: function(e) {
                var a = c.collection(e).id();
                return h(a)
              },
              betweennessNormalized: function(e) {
                if (0 == d) return 0;
                var a = c.collection(e).id();
                return h(a) / d
              }
            };
            return v.betweennessNormalised = v.betweennessNormalized, v
          }
        };
      Ea.bc = Ea.betweennessCentrality;
      var Ga = ye({
          expandFactor: 2,
          inflateFactor: 2,
          multFactor: 1,
          maxIterations: 20,
          attributes: [function(e) {
            return 1
          }]
        }),
        Va = function(e, a) {
          for (var t = 0, n = 0; n < a.length; n++) t += a[n](e);
          return t
        },
        Fa = function(e, a) {
          for (var t, n = 0; n < a; n++) {
            t = 0;
            for (var r = 0; r < a; r++) t += e[r * a + n];
            for (var i = 0; i < a; i++) e[i * a + n] = e[i * a + n] / t
          }
        },
        La = function(e, a, t) {
          for (var n = new Array(t * t), r = 0; r < t; r++) {
            for (var i = 0; i < t; i++) n[r * t + i] = 0;
            for (var c = 0; c < t; c++)
              for (var o = 0; o < t; o++) n[r * t + o] += e[r * t + c] * a[c * t + o]
          }
          return n
        },
        za = function(e, a, t) {
          for (var n = e.slice(0), r = 1; r < t; r++) e = La(e, n, a);
          return e
        },
        Wa = function(e, a, t) {
          for (var n = new Array(a * a), r = 0; r < a * a; r++) n[r] = Math.pow(e[r], t);
          return Fa(n, a), n
        },
        ja = function(e, a, t, n) {
          for (var r = 0; r < t; r++) {
            if (Math.round(e[r] * Math.pow(10, n)) / Math.pow(10, n) !== Math.round(a[r] * Math.pow(10, n)) / Math.pow(10, n)) return !1
          }
          return !0
        },
        Oa = function(e, a) {
          for (var t = 0; t < e.length; t++)
            if (!a[t] || e[t].id() !== a[t].id()) return !1;
          return !0
        },
        Ha = function(e) {
          for (var a = this.nodes(), t = this.edges(), n = this.cy(), r = function(e) {
              return Ga(e)
            }(e), i = {}, c = 0; c < a.length; c++) i[a[c].id()] = c;
          for (var o, s = a.length, l = s * s, d = new Array(l), u = 0; u < l; u++) d[u] = 0;
          for (var h = 0; h < t.length; h++) {
            var m = t[h],
              g = i[m.source().id()],
              p = i[m.target().id()],
              y = Va(m, r.attributes);
            d[g * s + p] += y, d[p * s + g] += y
          }! function(e, a, t) {
            for (var n = 0; n < a; n++) e[n * a + n] = t
          }(d, s, r.multFactor), Fa(d, s);
          for (var f = !0, v = 0; f && v < r.maxIterations;) f = !1, o = za(d, s, r.expandFactor), d = Wa(o, s, r.inflateFactor), ja(d, o, l, 4) || (f = !0), v++;
          var _ = function(e, a, t, n) {
            for (var r = [], i = 0; i < a; i++) {
              for (var c = [], o = 0; o < a; o++) Math.round(1e3 * e[i * a + o]) / 1e3 > 0 && c.push(t[o]);
              0 !== c.length && r.push(n.collection(c))
            }
            return r
          }(d, s, a, n);
          return _ = function(e) {
            for (var a = 0; a < e.length; a++)
              for (var t = 0; t < e.length; t++) a != t && Oa(e[a], e[t]) && e.splice(t, 1);
            return e
          }(_)
        },
        Qa = {
          markovClustering: Ha,
          mcl: Ha
        },
        qa = function(e) {
          return e
        },
        Za = function(e, a) {
          return Math.abs(a - e)
        },
        Ka = function(e, a, t) {
          return e + Za(a, t)
        },
        Ya = function(e, a, t) {
          return e + Math.pow(t - a, 2)
        },
        Xa = function(e) {
          return Math.sqrt(e)
        },
        Ja = function(e, a, t) {
          return Math.max(e, Za(a, t))
        },
        $a = function(e, a, t, n, r) {
          for (var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qa, c = n, o = 0; o < e; o++) c = r(c, a(o), t(o));
          return i(c)
        },
        et = {
          euclidean: function(e, a, t) {
            return e >= 2 ? $a(e, a, t, 0, Ya, Xa) : $a(e, a, t, 0, Ka)
          },
          squaredEuclidean: function(e, a, t) {
            return $a(e, a, t, 0, Ya)
          },
          manhattan: function(e, a, t) {
            return $a(e, a, t, 0, Ka)
          },
          max: function(e, a, t) {
            return $a(e, a, t, -1 / 0, Ja)
          }
        };

      function at(e, a, t, n, r, i) {
        var c;
        return c = _(e) ? e : et[e] || et.euclidean, 0 === a && _(e) ? c(r, i) : c(a, t, n, r, i)
      }
      et["squared-euclidean"] = et.squaredEuclidean, et.squaredeuclidean = et.squaredEuclidean;
      var tt = ye({
          k: 2,
          m: 2,
          sensitivityThreshold: 1e-4,
          distance: "euclidean",
          maxIterations: 10,
          attributes: [],
          testMode: !1,
          testCentroids: null
        }),
        nt = function(e) {
          return tt(e)
        },
        rt = function(e, a, t, n, r) {
          var i = "kMedoids" !== r ? function(e) {
              return t[e]
            } : function(e) {
              return n[e](t)
            },
            c = t,
            o = a;
          return at(e, n.length, i, (function(e) {
            return n[e](a)
          }), c, o)
        },
        it = function(e, a, t) {
          for (var n = t.length, r = new Array(n), i = new Array(n), c = new Array(a), o = null, s = 0; s < n; s++) r[s] = e.min(t[s]).value, i[s] = e.max(t[s]).value;
          for (var l = 0; l < a; l++) {
            o = [];
            for (var d = 0; d < n; d++) o[d] = Math.random() * (i[d] - r[d]) + r[d];
            c[l] = o
          }
          return c
        },
        ct = function(e, a, t, n, r) {
          for (var i = 1 / 0, c = 0, o = 0; o < a.length; o++) {
            var s = rt(t, e, a[o], n, r);
            s < i && (i = s, c = o)
          }
          return c
        },
        ot = function(e, a, t) {
          for (var n = [], r = null, i = 0; i < a.length; i++) t[(r = a[i]).id()] === e && n.push(r);
          return n
        },
        st = function(e, a, t) {
          for (var n = 0; n < e.length; n++)
            for (var r = 0; r < e[n].length; r++) {
              if (Math.abs(e[n][r] - a[n][r]) > t) return !1
            }
          return !0
        },
        lt = function(e, a, t) {
          for (var n = 0; n < t; n++)
            if (e === a[n]) return !0;
          return !1
        },
        dt = function(e, a) {
          var t = new Array(a);
          if (e.length < 50)
            for (var n = 0; n < a; n++) {
              for (var r = e[Math.floor(Math.random() * e.length)]; lt(r, t, n);) r = e[Math.floor(Math.random() * e.length)];
              t[n] = r
            } else
              for (var i = 0; i < a; i++) t[i] = e[Math.floor(Math.random() * e.length)];
          return t
        },
        ut = function(e, a, t) {
          for (var n = 0, r = 0; r < a.length; r++) n += rt("manhattan", a[r], e, t, "kMedoids");
          return n
        },
        ht = function(e, a, t, n, r) {
          for (var i, c, o = 0; o < a.length; o++)
            for (var s = 0; s < e.length; s++) n[o][s] = Math.pow(t[o][s], r.m);
          for (var l = 0; l < e.length; l++)
            for (var d = 0; d < r.attributes.length; d++) {
              i = 0, c = 0;
              for (var u = 0; u < a.length; u++) i += n[u][l] * r.attributes[d](a[u]), c += n[u][l];
              e[l][d] = i / c
            }
        },
        mt = function(e, a, t, n, r) {
          for (var i = 0; i < e.length; i++) a[i] = e[i].slice();
          for (var c, o, s, l = 2 / (r.m - 1), d = 0; d < t.length; d++)
            for (var u = 0; u < n.length; u++) {
              c = 0;
              for (var h = 0; h < t.length; h++) o = rt(r.distance, n[u], t[d], r.attributes, "cmeans"), s = rt(r.distance, n[u], t[h], r.attributes, "cmeans"), c += Math.pow(o / s, l);
              e[u][d] = 1 / c
            }
        },
        gt = function(e) {
          var a, t, n, r, i = this.cy(),
            c = this.nodes(),
            o = nt(e);
          n = new Array(c.length);
          for (var s = 0; s < c.length; s++) n[s] = new Array(o.k);
          t = new Array(c.length);
          for (var l = 0; l < c.length; l++) t[l] = new Array(o.k);
          for (var d = 0; d < c.length; d++) {
            for (var u = 0, h = 0; h < o.k; h++) t[d][h] = Math.random(), u += t[d][h];
            for (var m = 0; m < o.k; m++) t[d][m] = t[d][m] / u
          }
          a = new Array(o.k);
          for (var g = 0; g < o.k; g++) a[g] = new Array(o.attributes.length);
          r = new Array(c.length);
          for (var p = 0; p < c.length; p++) r[p] = new Array(o.k);
          for (var y = !0, f = 0; y && f < o.maxIterations;) y = !1, ht(a, c, t, r, o), mt(t, n, a, c, o), st(t, n, o.sensitivityThreshold) || (y = !0), f++;
          return {
            clusters: function(e, a, t, n) {
              for (var r, i, c = new Array(t.k), o = 0; o < c.length; o++) c[o] = [];
              for (var s = 0; s < a.length; s++) {
                r = -1 / 0, i = -1;
                for (var l = 0; l < a[0].length; l++) a[s][l] > r && (r = a[s][l], i = l);
                c[i].push(e[s])
              }
              for (var d = 0; d < c.length; d++) c[d] = n.collection(c[d]);
              return c
            }(c, t, o, i),
            degreeOfMembership: t
          }
        },
        pt = {
          kMeans: function(e) {
            var a, t = this.cy(),
              n = this.nodes(),
              r = null,
              i = nt(e),
              o = new Array(i.k),
              s = {};
            a = i.testMode ? "number" == typeof i.testCentroids ? it(n, i.k, i.attributes) : "object" === c(i.testCentroids) ? i.testCentroids : it(n, i.k, i.attributes) : it(n, i.k, i.attributes);
            for (var l, d, u, h = !0, m = 0; h && m < i.maxIterations;) {
              for (var g = 0; g < n.length; g++) s[(r = n[g]).id()] = ct(r, a, i.distance, i.attributes, "kMeans");
              h = !1;
              for (var p = 0; p < i.k; p++) {
                var y = ot(p, n, s);
                if (0 !== y.length) {
                  for (var f = i.attributes.length, v = a[p], _ = new Array(f), S = new Array(f), b = 0; b < f; b++) {
                    S[b] = 0;
                    for (var w = 0; w < y.length; w++) r = y[w], S[b] += i.attributes[b](r);
                    _[b] = S[b] / y.length, l = _[b], d = v[b], u = i.sensitivityThreshold, Math.abs(d - l) <= u || (h = !0)
                  }
                  a[p] = _, o[p] = t.collection(y)
                }
              }
              m++
            }
            return o
          },
          kMedoids: function(e) {
            var a, t, n = this.cy(),
              r = this.nodes(),
              i = null,
              o = nt(e),
              s = new Array(o.k),
              l = {},
              d = new Array(o.k);
            o.testMode ? "number" == typeof o.testCentroids || (a = "object" === c(o.testCentroids) ? o.testCentroids : dt(r, o.k)) : a = dt(r, o.k);
            for (var u = !0, h = 0; u && h < o.maxIterations;) {
              for (var m = 0; m < r.length; m++) l[(i = r[m]).id()] = ct(i, a, o.distance, o.attributes, "kMedoids");
              u = !1;
              for (var g = 0; g < a.length; g++) {
                var p = ot(g, r, l);
                if (0 !== p.length) {
                  d[g] = ut(a[g], p, o.attributes);
                  for (var y = 0; y < p.length; y++)(t = ut(p[y], p, o.attributes)) < d[g] && (d[g] = t, a[g] = p[y], u = !0);
                  s[g] = n.collection(p)
                }
              }
              h++
            }
            return s
          },
          fuzzyCMeans: gt,
          fcm: gt
        },
        yt = ye({
          distance: "euclidean",
          linkage: "min",
          mode: "threshold",
          threshold: 1 / 0,
          addDendrogram: !1,
          dendrogramDepth: 0,
          attributes: []
        }),
        ft = {
          single: "min",
          complete: "max"
        },
        vt = function(e, a, t, n, r) {
          for (var i, c = 0, o = 1 / 0, s = r.attributes, l = function(e, a) {
              return at(r.distance, s.length, (function(a) {
                return s[a](e)
              }), (function(e) {
                return s[e](a)
              }), e, a)
            }, d = 0; d < e.length; d++) {
            var u = e[d].key,
              h = t[u][n[u]];
            h < o && (c = u, o = h)
          }
          if ("threshold" === r.mode && o >= r.threshold || "dendrogram" === r.mode && 1 === e.length) return !1;
          var m, g = a[c],
            p = a[n[c]];
          m = "dendrogram" === r.mode ? {
            left: g,
            right: p,
            key: g.key
          } : {
            value: g.value.concat(p.value),
            key: g.key
          }, e[g.index] = m, e.splice(p.index, 1), a[g.key] = m;
          for (var y = 0; y < e.length; y++) {
            var f = e[y];
            g.key === f.key ? i = 1 / 0 : "min" === r.linkage ? (i = t[g.key][f.key], t[g.key][f.key] > t[p.key][f.key] && (i = t[p.key][f.key])) : "max" === r.linkage ? (i = t[g.key][f.key], t[g.key][f.key] < t[p.key][f.key] && (i = t[p.key][f.key])) : i = "mean" === r.linkage ? (t[g.key][f.key] * g.size + t[p.key][f.key] * p.size) / (g.size + p.size) : "dendrogram" === r.mode ? l(f.value, g.value) : l(f.value[0], g.value[0]), t[g.key][f.key] = t[f.key][g.key] = i
          }
          for (var v = 0; v < e.length; v++) {
            var _ = e[v].key;
            if (n[_] === g.key || n[_] === p.key) {
              for (var S = _, b = 0; b < e.length; b++) {
                var w = e[b].key;
                t[_][w] < t[_][S] && (S = w)
              }
              n[_] = S
            }
            e[v].index = v
          }
          return g.key = p.key = g.index = p.index = null, !0
        },
        _t = function e(a, t, n) {
          a && (a.value ? t.push(a.value) : (a.left && e(a.left, t), a.right && e(a.right, t)))
        },
        St = function(e) {
          for (var a = this.cy(), t = this.nodes(), n = function(e) {
              var a = yt(e),
                t = ft[a.linkage];
              return null != t && (a.linkage = t), a
            }(e), r = n.attributes, i = function(e, a) {
              return at(n.distance, r.length, (function(a) {
                return r[a](e)
              }), (function(e) {
                return r[e](a)
              }), e, a)
            }, c = [], o = [], s = [], l = [], d = 0; d < t.length; d++) {
            var u = {
              value: "dendrogram" === n.mode ? t[d] : [t[d]],
              key: d,
              index: d
            };
            c[d] = u, l[d] = u, o[d] = [], s[d] = 0
          }
          for (var h = 0; h < c.length; h++)
            for (var m = 0; m <= h; m++) {
              var g = void 0;
              g = "dendrogram" === n.mode ? h === m ? 1 / 0 : i(c[h].value, c[m].value) : h === m ? 1 / 0 : i(c[h].value[0], c[m].value[0]), o[h][m] = g, o[m][h] = g, g < o[h][s[h]] && (s[h] = m)
            }
          for (var p, y = vt(c, l, o, s, n); y;) y = vt(c, l, o, s, n);
          return "dendrogram" === n.mode ? (p = function e(a, t, n) {
            if (!a) return [];
            var r = [],
              i = [],
              c = [];
            return 0 === t ? (a.left && _t(a.left, r), a.right && _t(a.right, i), c = r.concat(i), [n.collection(c)]) : 1 === t ? a.value ? [n.collection(a.value)] : (a.left && _t(a.left, r), a.right && _t(a.right, i), [n.collection(r), n.collection(i)]) : a.value ? [n.collection(a.value)] : (a.left && (r = e(a.left, t - 1, n)), a.right && (i = e(a.right, t - 1, n)), r.concat(i))
          }(c[0], n.dendrogramDepth, a), n.addDendrogram && function e(a, t) {
            if (!a) return "";
            if (a.left && a.right) {
              var n = e(a.left, t),
                r = e(a.right, t),
                i = t.add({
                  group: "nodes",
                  data: {
                    id: n + "," + r
                  }
                });
              return t.add({
                group: "edges",
                data: {
                  source: n,
                  target: i.id()
                }
              }), t.add({
                group: "edges",
                data: {
                  source: r,
                  target: i.id()
                }
              }), i.id()
            }
            return a.value ? a.value.id() : void 0
          }(c[0], a)) : (p = new Array(c.length), c.forEach((function(e, t) {
            e.key = e.index = null, p[t] = a.collection(e.value)
          }))), p
        },
        bt = {
          hierarchicalClustering: St,
          hca: St
        },
        wt = ye({
          distance: "euclidean",
          preference: "median",
          damping: .8,
          maxIterations: 1e3,
          minIterations: 100,
          attributes: []
        }),
        Ct = function(e, a, t, n) {
          var r = function(e, a) {
            return n[a](e)
          };
          return -at(e, n.length, (function(e) {
            return r(a, e)
          }), (function(e) {
            return r(t, e)
          }), a, t)
        },
        Nt = function(e, a) {
          return "median" === a ? function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length,
              n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              i = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            n ? e = e.slice(a, t) : (t < e.length && e.splice(t, e.length - t), a > 0 && e.splice(0, a));
            for (var c = 0, o = e.length - 1; o >= 0; o--) {
              var s = e[o];
              i ? isFinite(s) || (e[o] = -1 / 0, c++) : e.splice(o, 1)
            }
            r && e.sort((function(e, a) {
              return e - a
            }));
            var l = e.length,
              d = Math.floor(l / 2);
            return l % 2 != 0 ? e[d + 1 + c] : (e[d - 1 + c] + e[d + c]) / 2
          }(e) : "mean" === a ? function(e) {
            for (var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length, n = 0, r = 0, i = a; i < t; i++) {
              var c = e[i];
              isFinite(c) && (n += c, r++)
            }
            return n / r
          }(e) : "min" === a ? function(e) {
            for (var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length, n = 1 / 0, r = a; r < t; r++) {
              var i = e[r];
              isFinite(i) && (n = Math.min(i, n))
            }
            return n
          }(e) : "max" === a ? function(e) {
            for (var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length, n = -1 / 0, r = a; r < t; r++) {
              var i = e[r];
              isFinite(i) && (n = Math.max(i, n))
            }
            return n
          }(e) : a
        },
        Bt = function(e, a, t) {
          for (var n = [], r = 0; r < e; r++) {
            for (var i = -1, c = -1 / 0, o = 0; o < t.length; o++) {
              var s = t[o];
              a[r * e + s] > c && (i = s, c = a[r * e + s])
            }
            i > 0 && n.push(i)
          }
          for (var l = 0; l < t.length; l++) n[t[l]] = t[l];
          return n
        },
        Dt = function(e) {
          for (var a, t, n, r, i, c, o = this.cy(), s = this.nodes(), l = function(e) {
              var a = e.damping,
                t = e.preference;
              .5 <= a && a < 1 || le("Damping must range on [0.5, 1).  Got: ".concat(a));
              var n = ["median", "mean", "min", "max"];
              return n.some((function(e) {
                return e === t
              })) || w(t) || le("Preference must be one of [".concat(n.map((function(e) {
                return "'".concat(e, "'")
              })).join(", "), "] or a number.  Got: ").concat(t)), wt(e)
            }(e), d = {}, u = 0; u < s.length; u++) d[s[u].id()] = u;
          t = (a = s.length) * a, n = new Array(t);
          for (var h = 0; h < t; h++) n[h] = -1 / 0;
          for (var m = 0; m < a; m++)
            for (var g = 0; g < a; g++) m !== g && (n[m * a + g] = Ct(l.distance, s[m], s[g], l.attributes));
          r = Nt(n, l.preference);
          for (var p = 0; p < a; p++) n[p * a + p] = r;
          i = new Array(t);
          for (var y = 0; y < t; y++) i[y] = 0;
          c = new Array(t);
          for (var f = 0; f < t; f++) c[f] = 0;
          for (var v = new Array(a), _ = new Array(a), S = new Array(a), b = 0; b < a; b++) v[b] = 0, _[b] = 0, S[b] = 0;
          for (var C, N = new Array(a * l.minIterations), B = 0; B < N.length; B++) N[B] = 0;
          for (C = 0; C < l.maxIterations; C++) {
            for (var D = 0; D < a; D++) {
              for (var x = -1 / 0, I = -1 / 0, T = -1, U = 0, P = 0; P < a; P++) v[P] = i[D * a + P], (U = c[D * a + P] + n[D * a + P]) >= x ? (I = x, x = U, T = P) : U > I && (I = U);
              for (var M = 0; M < a; M++) i[D * a + M] = (1 - l.damping) * (n[D * a + M] - x) + l.damping * v[M];
              i[D * a + T] = (1 - l.damping) * (n[D * a + T] - I) + l.damping * v[T]
            }
            for (var k = 0; k < a; k++) {
              for (var A = 0, R = 0; R < a; R++) v[R] = c[R * a + k], _[R] = Math.max(0, i[R * a + k]), A += _[R];
              A -= _[k], _[k] = i[k * a + k], A += _[k];
              for (var E = 0; E < a; E++) c[E * a + k] = (1 - l.damping) * Math.min(0, A - _[E]) + l.damping * v[E];
              c[k * a + k] = (1 - l.damping) * (A - _[k]) + l.damping * v[k]
            }
            for (var G = 0, V = 0; V < a; V++) {
              var F = c[V * a + V] + i[V * a + V] > 0 ? 1 : 0;
              N[C % l.minIterations * a + V] = F, G += F
            }
            if (G > 0 && (C >= l.minIterations - 1 || C == l.maxIterations - 1)) {
              for (var L = 0, z = 0; z < a; z++) {
                S[z] = 0;
                for (var W = 0; W < l.minIterations; W++) S[z] += N[W * a + z];
                0 !== S[z] && S[z] !== l.minIterations || L++
              }
              if (L === a) break
            }
          }
          for (var j = function(e, a, t) {
              for (var n = [], r = 0; r < e; r++) a[r * e + r] + t[r * e + r] > 0 && n.push(r);
              return n
            }(a, i, c), O = function(e, a, t) {
              for (var n = Bt(e, a, t), r = 0; r < t.length; r++) {
                for (var i = [], c = 0; c < n.length; c++) n[c] === t[r] && i.push(c);
                for (var o = -1, s = -1 / 0, l = 0; l < i.length; l++) {
                  for (var d = 0, u = 0; u < i.length; u++) d += a[i[u] * e + i[l]];
                  d > s && (o = l, s = d)
                }
                t[r] = i[o]
              }
              return n = Bt(e, a, t)
            }(a, n, j), H = {}, Q = 0; Q < j.length; Q++) H[j[Q]] = [];
          for (var q = 0; q < s.length; q++) {
            var Z = O[d[s[q].id()]];
            null != Z && H[Z].push(s[q])
          }
          for (var K = new Array(j.length), Y = 0; Y < j.length; Y++) K[Y] = o.collection(H[j[Y]]);
          return K
        },
        xt = {
          affinityPropagation: Dt,
          ap: Dt
        },
        It = ye({
          root: void 0,
          directed: !1
        }),
        Tt = {};
      [De, Ie, Te, Pe, ke, Re, Fe, Ua, Ma, Aa, Ea, Qa, pt, bt, xt, {
        hierholzer: function(e) {
          if (!b(e)) {
            var a = arguments;
            e = {
              root: a[0],
              directed: a[1]
            }
          }
          var t, n, r, i = It(e),
            c = i.root,
            o = i.directed,
            s = this,
            l = !1;
          c && (r = v(c) ? this.filter(c)[0].id() : c[0].id());
          var d = {},
            u = {};
          o ? s.forEach((function(e) {
            var a = e.id();
            if (e.isNode()) {
              var r = e.indegree(!0),
                i = e.outdegree(!0),
                c = r - i,
                o = i - r;
              1 == c ? t ? l = !0 : t = a : 1 == o ? n ? l = !0 : n = a : (o > 1 || c > 1) && (l = !0), d[a] = [], e.outgoers().forEach((function(e) {
                e.isEdge() && d[a].push(e.id())
              }))
            } else u[a] = [void 0, e.target().id()]
          })) : s.forEach((function(e) {
            var a = e.id();
            e.isNode() ? (e.degree(!0) % 2 && (t ? n ? l = !0 : n = a : t = a), d[a] = [], e.connectedEdges().forEach((function(e) {
              return d[a].push(e.id())
            }))) : u[a] = [e.source().id(), e.target().id()]
          }));
          var h = {
            found: !1,
            trail: void 0
          };
          if (l) return h;
          if (n && t)
            if (o) {
              if (r && n != r) return h;
              r = n
            } else {
              if (r && n != r && t != r) return h;
              r || (r = n)
            }
          else r || (r = s[0].id());
          var m = function(e) {
              for (var a, t, n, r = e, i = [e]; d[r].length;) a = d[r].shift(), t = u[a][0], r != (n = u[a][1]) ? (d[n] = d[n].filter((function(e) {
                return e != a
              })), r = n) : o || r == t || (d[t] = d[t].filter((function(e) {
                return e != a
              })), r = t), i.unshift(a), i.unshift(r);
              return i
            },
            g = [],
            p = [];
          for (p = m(r); 1 != p.length;) 0 == d[p[0]].length ? (g.unshift(s.getElementById(p.shift())), g.unshift(s.getElementById(p.shift()))) : p = m(p.shift()).concat(p);
          for (var y in g.unshift(s.getElementById(p.shift())), d)
            if (d[y].length) return h;
          return h.found = !0, h.trail = this.spawn(g), h
        }
      }].forEach((function(e) {
        F(Tt, e)
      }));
      /*!
      Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
      Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
      Licensed under The MIT License (http://opensource.org/licenses/MIT)
      */
      var Ut = function e(a) {
        if (!(this instanceof e)) return new e(a);
        this.id = "Thenable/1.0.7", this.state = 0, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
          then: this.then.bind(this)
        }, "function" == typeof a && a.call(this, this.fulfill.bind(this), this.reject.bind(this))
      };
      Ut.prototype = {
        fulfill: function(e) {
          return Pt(this, 1, "fulfillValue", e)
        },
        reject: function(e) {
          return Pt(this, 2, "rejectReason", e)
        },
        then: function(e, a) {
          var t = new Ut;
          return this.onFulfilled.push(At(e, t, "fulfill")), this.onRejected.push(At(a, t, "reject")), Mt(this), t.proxy
        }
      };
      var Pt = function(e, a, t, n) {
          return 0 === e.state && (e.state = a, e[t] = n, Mt(e)), e
        },
        Mt = function(e) {
          1 === e.state ? kt(e, "onFulfilled", e.fulfillValue) : 2 === e.state && kt(e, "onRejected", e.rejectReason)
        },
        kt = function(e, t, n) {
          if (0 !== e[t].length) {
            var r = e[t];
            e[t] = [];
            var i = function() {
              for (var e = 0; e < r.length; e++) r[e](n)
            };
            "function" == typeof a ? a(i) : setTimeout(i, 0)
          }
        },
        At = function(e, a, t) {
          return function(n) {
            if ("function" != typeof e) a[t].call(a, n);
            else {
              var r;
              try {
                r = e(n)
              } catch (e) {
                return void a.reject(e)
              }
              Rt(a, r)
            }
          }
        },
        Rt = function e(a, t) {
          if (a !== t && a.proxy !== t) {
            var n;
            if ("object" === c(t) && null !== t || "function" == typeof t) try {
              n = t.then
            } catch (e) {
              return void a.reject(e)
            }
            if ("function" != typeof n) a.fulfill(t);
            else {
              var r = !1;
              try {
                n.call(t, (function(n) {
                  r || (r = !0, n === t ? a.reject(new TypeError("circular thenable chain")) : e(a, n))
                }), (function(e) {
                  r || (r = !0, a.reject(e))
                }))
              } catch (e) {
                r || a.reject(e)
              }
            }
          } else a.reject(new TypeError("cannot resolve promise with itself"))
        };
      Ut.all = function(e) {
        return new Ut((function(a, t) {
          for (var n = new Array(e.length), r = 0, i = function(t, i) {
              n[t] = i, ++r === e.length && a(n)
            }, c = 0; c < e.length; c++) ! function(a) {
            var n = e[a];
            null != n && null != n.then ? n.then((function(e) {
              i(a, e)
            }), (function(e) {
              t(e)
            })) : i(a, n)
          }(c)
        }))
      }, Ut.resolve = function(e) {
        return new Ut((function(a, t) {
          a(e)
        }))
      }, Ut.reject = function(e) {
        return new Ut((function(a, t) {
          t(e)
        }))
      };
      var Et = "undefined" != typeof Promise ? Promise : Ut,
        Gt = function(e, a, t) {
          var n = x(e),
            r = !n,
            i = this._private = F({
              duration: 1e3
            }, a, t);
          if (i.target = e, i.style = i.style || i.css, i.started = !1, i.playing = !1, i.hooked = !1, i.applying = !1, i.progress = 0, i.completes = [], i.frames = [], i.complete && _(i.complete) && i.completes.push(i.complete), r) {
            var c = e.position();
            i.startPosition = i.startPosition || {
              x: c.x,
              y: c.y
            }, i.startStyle = i.startStyle || e.cy().style().getAnimationStartStyle(e, i.style)
          }
          if (n) {
            var o = e.pan();
            i.startPan = {
              x: o.x,
              y: o.y
            }, i.startZoom = e.zoom()
          }
          this.length = 1, this[0] = this
        },
        Vt = Gt.prototype;
      F(Vt, {
        instanceString: function() {
          return "animation"
        },
        hook: function() {
          var e = this._private;
          if (!e.hooked) {
            var a = e.target._private.animation;
            (e.queue ? a.queue : a.current).push(this), N(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0
          }
          return this
        },
        play: function() {
          var e = this._private;
          return 1 === e.progress && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this
        },
        playing: function() {
          return this._private.playing
        },
        apply: function() {
          var e = this._private;
          return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this
        },
        applying: function() {
          return this._private.applying
        },
        pause: function() {
          var e = this._private;
          return e.playing = !1, e.started = !1, this
        },
        stop: function() {
          var e = this._private;
          return e.playing = !1, e.started = !1, e.stopped = !0, this
        },
        rewind: function() {
          return this.progress(0)
        },
        fastforward: function() {
          return this.progress(1)
        },
        time: function(e) {
          var a = this._private;
          return void 0 === e ? a.progress * a.duration : this.progress(e / a.duration)
        },
        progress: function(e) {
          var a = this._private,
            t = a.playing;
          return void 0 === e ? a.progress : (t && this.pause(), a.progress = e, a.started = !1, t && this.play(), this)
        },
        completed: function() {
          return 1 === this._private.progress
        },
        reverse: function() {
          var e = this._private,
            a = e.playing;
          a && this.pause(), e.progress = 1 - e.progress, e.started = !1;
          var t = function(a, t) {
            var n = e[a];
            null != n && (e[a] = e[t], e[t] = n)
          };
          if (t("zoom", "startZoom"), t("pan", "startPan"), t("position", "startPosition"), e.style)
            for (var n = 0; n < e.style.length; n++) {
              var r = e.style[n],
                i = r.name,
                c = e.startStyle[i];
              e.startStyle[i] = r, e.style[n] = c
            }
          return a && this.play(), this
        },
        promise: function(e) {
          var a, t = this._private;
          switch (e) {
            case "frame":
              a = t.frames;
              break;
            default:
            case "complete":
            case "completed":
              a = t.completes
          }
          return new Et((function(e, t) {
            a.push((function() {
              e()
            }))
          }))
        }
      }), Vt.complete = Vt.completed, Vt.run = Vt.play, Vt.running = Vt.playing;
      var Ft = {};
      [{
        animated: function() {
          return function() {
            var e = void 0 !== this.length ? this : [this];
            if (!(this._private.cy || this).styleEnabled()) return !1;
            var a = e[0];
            return a ? a._private.animation.current.length > 0 : void 0
          }
        },
        clearQueue: function() {
          return function() {
            var e = void 0 !== this.length ? this : [this];
            if (!(this._private.cy || this).styleEnabled()) return this;
            for (var a = 0; a < e.length; a++) {
              e[a]._private.animation.queue = []
            }
            return this
          }
        },
        delay: function() {
          return function(e, a) {
            return (this._private.cy || this).styleEnabled() ? this.animate({
              delay: e,
              duration: e,
              complete: a
            }) : this
          }
        },
        delayAnimation: function() {
          return function(e, a) {
            return (this._private.cy || this).styleEnabled() ? this.animation({
              delay: e,
              duration: e,
              complete: a
            }) : this
          }
        },
        animation: function() {
          return function(e, a) {
            var t = void 0 !== this.length,
              n = t ? this : [this],
              r = this._private.cy || this,
              i = !t,
              c = !i;
            if (!r.styleEnabled()) return this;
            var o = r.style();
            if (e = F({}, e, a), 0 === Object.keys(e).length) return new Gt(n[0], e);
            switch (void 0 === e.duration && (e.duration = 400), e.duration) {
              case "slow":
                e.duration = 600;
                break;
              case "fast":
                e.duration = 200
            }
            if (c && (e.style = o.getPropsList(e.style || e.css), e.css = void 0), c && null != e.renderedPosition) {
              var s = e.renderedPosition,
                l = r.pan(),
                d = r.zoom();
              e.position = We(s, d, l)
            }
            if (i && null != e.panBy) {
              var u = e.panBy,
                h = r.pan();
              e.pan = {
                x: h.x + u.x,
                y: h.y + u.y
              }
            }
            var m = e.center || e.centre;
            if (i && null != m) {
              var g = r.getCenterPan(m.eles, e.zoom);
              null != g && (e.pan = g)
            }
            if (i && null != e.fit) {
              var p = e.fit,
                y = r.getFitViewport(p.eles || p.boundingBox, p.padding);
              null != y && (e.pan = y.pan, e.zoom = y.zoom)
            }
            if (i && b(e.zoom)) {
              var f = r.getZoomedViewport(e.zoom);
              null != f && (f.zoomed && (e.zoom = f.zoom), f.panned && (e.pan = f.pan))
            }
            return new Gt(n[0], e)
          }
        },
        animate: function() {
          return function(e, a) {
            var t = void 0 !== this.length ? this : [this];
            if (!(this._private.cy || this).styleEnabled()) return this;
            a && (e = F({}, e, a));
            for (var n = 0; n < t.length; n++) {
              var r = t[n],
                i = r.animated() && (void 0 === e.queue || e.queue);
              r.animation(e, i ? {
                queue: !0
              } : void 0).play()
            }
            return this
          }
        },
        stop: function() {
          return function(e, a) {
            var t = void 0 !== this.length ? this : [this],
              n = this._private.cy || this;
            if (!n.styleEnabled()) return this;
            for (var r = 0; r < t.length; r++) {
              for (var i = t[r]._private, c = i.animation.current, o = 0; o < c.length; o++) {
                var s = c[o]._private;
                a && (s.duration = 0)
              }
              e && (i.animation.queue = []), a || (i.animation.current = [])
            }
            return n.notify("draw"), this
          }
        }
      }, {
        data: function(e) {
          return e = F({}, {
              field: "data",
              bindingEvent: "data",
              allowBinding: !1,
              allowSetting: !1,
              allowGetting: !1,
              settingEvent: "data",
              settingTriggersEvent: !1,
              triggerFnName: "trigger",
              immutableKeys: {},
              updateStyle: !1,
              beforeGet: function(e) {},
              beforeSet: function(e, a) {},
              onSet: function(e) {},
              canSet: function(e) {
                return !0
              }
            }, e),
            function(a, t) {
              var n = e,
                r = void 0 !== this.length,
                i = r ? this : [this],
                c = r ? this[0] : this;
              if (v(a)) {
                var o;
                if (n.allowGetting && void 0 === t) return c && (n.beforeGet(c), o = c._private[n.field][a]), o;
                if (n.allowSetting && void 0 !== t && !n.immutableKeys[a]) {
                  var s = function(e, a, t) {
                    return a in e ? Object.defineProperty(e, a, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[a] = t, e
                  }({}, a, t);
                  n.beforeSet(this, s);
                  for (var l = 0, d = i.length; l < d; l++) {
                    var u = i[l];
                    n.canSet(u) && (u._private[n.field][a] = t)
                  }
                  n.updateStyle && this.updateStyle(), n.onSet(this), n.settingTriggersEvent && this[n.triggerFnName](n.settingEvent)
                }
              } else if (n.allowSetting && b(a)) {
                var h, m, g = a,
                  p = Object.keys(g);
                n.beforeSet(this, g);
                for (var y = 0; y < p.length; y++) {
                  if (m = g[h = p[y]], !n.immutableKeys[h])
                    for (var f = 0; f < i.length; f++) {
                      var S = i[f];
                      n.canSet(S) && (S._private[n.field][h] = m)
                    }
                }
                n.updateStyle && this.updateStyle(), n.onSet(this), n.settingTriggersEvent && this[n.triggerFnName](n.settingEvent)
              } else if (n.allowBinding && _(a)) {
                var w = a;
                this.on(n.bindingEvent, w)
              } else if (n.allowGetting && void 0 === a) {
                var C;
                return c && (n.beforeGet(c), C = c._private[n.field]), C
              }
              return this
            }
        },
        removeData: function(e) {
          return e = F({}, {
              field: "data",
              event: "data",
              triggerFnName: "trigger",
              triggerEvent: !1,
              immutableKeys: {}
            }, e),
            function(a) {
              var t = e,
                n = void 0 !== this.length ? this : [this];
              if (v(a)) {
                for (var r = a.split(/\s+/), i = r.length, c = 0; c < i; c++) {
                  var o = r[c];
                  if (!T(o))
                    if (!t.immutableKeys[o])
                      for (var s = 0, l = n.length; s < l; s++) n[s]._private[t.field][o] = void 0
                }
                t.triggerEvent && this[t.triggerFnName](t.event)
              } else if (void 0 === a) {
                for (var d = 0, u = n.length; d < u; d++)
                  for (var h = n[d]._private[t.field], m = Object.keys(h), g = 0; g < m.length; g++) {
                    var p = m[g];
                    !t.immutableKeys[p] && (h[p] = void 0)
                  }
                t.triggerEvent && this[t.triggerFnName](t.event)
              }
              return this
            }
        }
      }, {
        eventAliasesOn: function(e) {
          var a = e;
          a.addListener = a.listen = a.bind = a.on, a.unlisten = a.unbind = a.off = a.removeListener, a.trigger = a.emit, a.pon = a.promiseOn = function(e, a) {
            var t = this,
              n = Array.prototype.slice.call(arguments, 0);
            return new Et((function(e, a) {
              var r = n.concat([function(a) {
                  t.off.apply(t, i), e(a)
                }]),
                i = r.concat([]);
              t.on.apply(t, r)
            }))
          }
        }
      }].forEach((function(e) {
        F(Ft, e)
      }));
      var Lt = {
          animate: Ft.animate(),
          animation: Ft.animation(),
          animated: Ft.animated(),
          clearQueue: Ft.clearQueue(),
          delay: Ft.delay(),
          delayAnimation: Ft.delayAnimation(),
          stop: Ft.stop()
        },
        zt = {
          classes: function(e) {
            if (void 0 === e) {
              var a = [];
              return this[0]._private.classes.forEach((function(e) {
                return a.push(e)
              })), a
            }
            S(e) || (e = (e || "").match(/\S+/g) || []);
            for (var t = [], n = new Ce(e), r = 0; r < this.length; r++) {
              for (var i = this[r], c = i._private, o = c.classes, s = !1, l = 0; l < e.length; l++) {
                var d = e[l];
                if (!o.has(d)) {
                  s = !0;
                  break
                }
              }
              s || (s = o.size !== e.length), s && (c.classes = n, t.push(i))
            }
            return t.length > 0 && this.spawn(t).updateStyle().emit("class"), this
          },
          addClass: function(e) {
            return this.toggleClass(e, !0)
          },
          hasClass: function(e) {
            var a = this[0];
            return null != a && a._private.classes.has(e)
          },
          toggleClass: function(e, a) {
            S(e) || (e = e.match(/\S+/g) || []);
            for (var t = void 0 === a, n = [], r = 0, i = this.length; r < i; r++)
              for (var c = this[r], o = c._private.classes, s = !1, l = 0; l < e.length; l++) {
                var d = e[l],
                  u = o.has(d),
                  h = !1;
                a || t && !u ? (o.add(d), h = !0) : (!a || t && u) && (o.delete(d), h = !0), !s && h && (n.push(c), s = !0)
              }
            return n.length > 0 && this.spawn(n).updateStyle().emit("class"), this
          },
          removeClass: function(e) {
            return this.toggleClass(e, !1)
          },
          flashClass: function(e, a) {
            var t = this;
            if (null == a) a = 250;
            else if (0 === a) return t;
            return t.addClass(e), setTimeout((function() {
              t.removeClass(e)
            }), a), t
          }
        };
      zt.className = zt.classNames = zt.classes;
      var Wt = {
        metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
        comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
        boolOp: "\\?|\\!|\\^",
        string: '"(?:\\\\"|[^"])*"|' + "'(?:\\\\'|[^'])*'",
        number: G,
        meta: "degree|indegree|outdegree",
        separator: "\\s*,\\s*",
        descendant: "\\s+",
        child: "\\s+>\\s+",
        subject: "\\$",
        group: "node|edge|\\*",
        directedEdge: "\\s+->\\s+",
        undirectedEdge: "\\s+<->\\s+"
      };
      Wt.variable = "(?:[\\w-]|(?:\\\\" + Wt.metaChar + "))+", Wt.value = Wt.string + "|" + Wt.number, Wt.className = Wt.variable, Wt.id = Wt.variable,
        function() {
          var e, a, t;
          for (e = Wt.comparatorOp.split("|"), t = 0; t < e.length; t++) a = e[t], Wt.comparatorOp += "|@" + a;
          for (e = Wt.comparatorOp.split("|"), t = 0; t < e.length; t++)(a = e[t]).indexOf("!") >= 0 || "=" !== a && (Wt.comparatorOp += "|\\!" + a)
        }();
      var jt = 0,
        Ot = 1,
        Ht = 2,
        Qt = 3,
        qt = 4,
        Zt = 5,
        Kt = 6,
        Yt = 7,
        Xt = 8,
        Jt = 9,
        $t = 10,
        en = 11,
        an = 12,
        tn = 13,
        nn = 14,
        rn = 15,
        cn = 16,
        on = 17,
        sn = 18,
        ln = 19,
        dn = 20,
        un = [{
          selector: ":selected",
          matches: function(e) {
            return e.selected()
          }
        }, {
          selector: ":unselected",
          matches: function(e) {
            return !e.selected()
          }
        }, {
          selector: ":selectable",
          matches: function(e) {
            return e.selectable()
          }
        }, {
          selector: ":unselectable",
          matches: function(e) {
            return !e.selectable()
          }
        }, {
          selector: ":locked",
          matches: function(e) {
            return e.locked()
          }
        }, {
          selector: ":unlocked",
          matches: function(e) {
            return !e.locked()
          }
        }, {
          selector: ":visible",
          matches: function(e) {
            return e.visible()
          }
        }, {
          selector: ":hidden",
          matches: function(e) {
            return !e.visible()
          }
        }, {
          selector: ":transparent",
          matches: function(e) {
            return e.transparent()
          }
        }, {
          selector: ":grabbed",
          matches: function(e) {
            return e.grabbed()
          }
        }, {
          selector: ":free",
          matches: function(e) {
            return !e.grabbed()
          }
        }, {
          selector: ":removed",
          matches: function(e) {
            return e.removed()
          }
        }, {
          selector: ":inside",
          matches: function(e) {
            return !e.removed()
          }
        }, {
          selector: ":grabbable",
          matches: function(e) {
            return e.grabbable()
          }
        }, {
          selector: ":ungrabbable",
          matches: function(e) {
            return !e.grabbable()
          }
        }, {
          selector: ":animated",
          matches: function(e) {
            return e.animated()
          }
        }, {
          selector: ":unanimated",
          matches: function(e) {
            return !e.animated()
          }
        }, {
          selector: ":parent",
          matches: function(e) {
            return e.isParent()
          }
        }, {
          selector: ":childless",
          matches: function(e) {
            return e.isChildless()
          }
        }, {
          selector: ":child",
          matches: function(e) {
            return e.isChild()
          }
        }, {
          selector: ":orphan",
          matches: function(e) {
            return e.isOrphan()
          }
        }, {
          selector: ":nonorphan",
          matches: function(e) {
            return e.isChild()
          }
        }, {
          selector: ":compound",
          matches: function(e) {
            return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent()
          }
        }, {
          selector: ":loop",
          matches: function(e) {
            return e.isLoop()
          }
        }, {
          selector: ":simple",
          matches: function(e) {
            return e.isSimple()
          }
        }, {
          selector: ":active",
          matches: function(e) {
            return e.active()
          }
        }, {
          selector: ":inactive",
          matches: function(e) {
            return !e.active()
          }
        }, {
          selector: ":backgrounding",
          matches: function(e) {
            return e.backgrounding()
          }
        }, {
          selector: ":nonbackgrounding",
          matches: function(e) {
            return !e.backgrounding()
          }
        }].sort((function(e, a) {
          return function(e, a) {
            return -1 * V(e, a)
          }(e.selector, a.selector)
        })),
        hn = function() {
          for (var e, a = {}, t = 0; t < un.length; t++) a[(e = un[t]).selector] = e.matches;
          return a
        }(),
        mn = "(" + un.map((function(e) {
          return e.selector
        })).join("|") + ")",
        gn = function(e) {
          return e.replace(new RegExp("\\\\(" + Wt.metaChar + ")", "g"), (function(e, a) {
            return a
          }))
        },
        pn = function(e, a, t) {
          e[e.length - 1] = t
        },
        yn = [{
          name: "group",
          query: !0,
          regex: "(" + Wt.group + ")",
          populate: function(e, a, t) {
            var n = d(t, 1)[0];
            a.checks.push({
              type: jt,
              value: "*" === n ? n : n + "s"
            })
          }
        }, {
          name: "state",
          query: !0,
          regex: mn,
          populate: function(e, a, t) {
            var n = d(t, 1)[0];
            a.checks.push({
              type: Yt,
              value: n
            })
          }
        }, {
          name: "id",
          query: !0,
          regex: "\\#(" + Wt.id + ")",
          populate: function(e, a, t) {
            var n = d(t, 1)[0];
            a.checks.push({
              type: Xt,
              value: gn(n)
            })
          }
        }, {
          name: "className",
          query: !0,
          regex: "\\.(" + Wt.className + ")",
          populate: function(e, a, t) {
            var n = d(t, 1)[0];
            a.checks.push({
              type: Jt,
              value: gn(n)
            })
          }
        }, {
          name: "dataExists",
          query: !0,
          regex: "\\[\\s*(" + Wt.variable + ")\\s*\\]",
          populate: function(e, a, t) {
            var n = d(t, 1)[0];
            a.checks.push({
              type: qt,
              field: gn(n)
            })
          }
        }, {
          name: "dataCompare",
          query: !0,
          regex: "\\[\\s*(" + Wt.variable + ")\\s*(" + Wt.comparatorOp + ")\\s*(" + Wt.value + ")\\s*\\]",
          populate: function(e, a, t) {
            var n = d(t, 3),
              r = n[0],
              i = n[1],
              c = n[2];
            c = null != new RegExp("^" + Wt.string + "$").exec(c) ? c.substring(1, c.length - 1) : parseFloat(c), a.checks.push({
              type: Qt,
              field: gn(r),
              operator: i,
              value: c
            })
          }
        }, {
          name: "dataBool",
          query: !0,
          regex: "\\[\\s*(" + Wt.boolOp + ")\\s*(" + Wt.variable + ")\\s*\\]",
          populate: function(e, a, t) {
            var n = d(t, 2),
              r = n[0],
              i = n[1];
            a.checks.push({
              type: Zt,
              field: gn(i),
              operator: r
            })
          }
        }, {
          name: "metaCompare",
          query: !0,
          regex: "\\[\\[\\s*(" + Wt.meta + ")\\s*(" + Wt.comparatorOp + ")\\s*(" + Wt.number + ")\\s*\\]\\]",
          populate: function(e, a, t) {
            var n = d(t, 3),
              r = n[0],
              i = n[1],
              c = n[2];
            a.checks.push({
              type: Kt,
              field: gn(r),
              operator: i,
              value: parseFloat(c)
            })
          }
        }, {
          name: "nextQuery",
          separator: !0,
          regex: Wt.separator,
          populate: function(e, a) {
            var t = e.currentSubject,
              n = e.edgeCount,
              r = e.compoundCount,
              i = e[e.length - 1];
            return null != t && (i.subject = t, e.currentSubject = null), i.edgeCount = n, i.compoundCount = r, e.edgeCount = 0, e.compoundCount = 0, e[e.length++] = {
              checks: []
            }
          }
        }, {
          name: "directedEdge",
          separator: !0,
          regex: Wt.directedEdge,
          populate: function(e, a) {
            if (null == e.currentSubject) {
              var t = {
                  checks: []
                },
                n = a,
                r = {
                  checks: []
                };
              return t.checks.push({
                type: en,
                source: n,
                target: r
              }), pn(e, 0, t), e.edgeCount++, r
            }
            var i = {
                checks: []
              },
              c = a,
              o = {
                checks: []
              };
            return i.checks.push({
              type: an,
              source: c,
              target: o
            }), pn(e, 0, i), e.edgeCount++, o
          }
        }, {
          name: "undirectedEdge",
          separator: !0,
          regex: Wt.undirectedEdge,
          populate: function(e, a) {
            if (null == e.currentSubject) {
              var t = {
                  checks: []
                },
                n = a,
                r = {
                  checks: []
                };
              return t.checks.push({
                type: $t,
                nodes: [n, r]
              }), pn(e, 0, t), e.edgeCount++, r
            }
            var i = {
                checks: []
              },
              c = a,
              o = {
                checks: []
              };
            return i.checks.push({
              type: nn,
              node: c,
              neighbor: o
            }), pn(e, 0, i), o
          }
        }, {
          name: "child",
          separator: !0,
          regex: Wt.child,
          populate: function(e, a) {
            if (null == e.currentSubject) {
              var t = {
                  checks: []
                },
                n = {
                  checks: []
                },
                r = e[e.length - 1];
              return t.checks.push({
                type: rn,
                parent: r,
                child: n
              }), pn(e, 0, t), e.compoundCount++, n
            }
            if (e.currentSubject === a) {
              var i = {
                  checks: []
                },
                c = e[e.length - 1],
                o = {
                  checks: []
                },
                s = {
                  checks: []
                },
                l = {
                  checks: []
                },
                d = {
                  checks: []
                };
              return i.checks.push({
                type: ln,
                left: c,
                right: o,
                subject: s
              }), s.checks = a.checks, a.checks = [{
                type: dn
              }], d.checks.push({
                type: dn
              }), o.checks.push({
                type: on,
                parent: d,
                child: l
              }), pn(e, 0, i), e.currentSubject = s, e.compoundCount++, l
            }
            var u = {
                checks: []
              },
              h = {
                checks: []
              },
              m = [{
                type: on,
                parent: u,
                child: h
              }];
            return u.checks = a.checks, a.checks = m, e.compoundCount++, h
          }
        }, {
          name: "descendant",
          separator: !0,
          regex: Wt.descendant,
          populate: function(e, a) {
            if (null == e.currentSubject) {
              var t = {
                  checks: []
                },
                n = {
                  checks: []
                },
                r = e[e.length - 1];
              return t.checks.push({
                type: cn,
                ancestor: r,
                descendant: n
              }), pn(e, 0, t), e.compoundCount++, n
            }
            if (e.currentSubject === a) {
              var i = {
                  checks: []
                },
                c = e[e.length - 1],
                o = {
                  checks: []
                },
                s = {
                  checks: []
                },
                l = {
                  checks: []
                },
                d = {
                  checks: []
                };
              return i.checks.push({
                type: ln,
                left: c,
                right: o,
                subject: s
              }), s.checks = a.checks, a.checks = [{
                type: dn
              }], d.checks.push({
                type: dn
              }), o.checks.push({
                type: sn,
                ancestor: d,
                descendant: l
              }), pn(e, 0, i), e.currentSubject = s, e.compoundCount++, l
            }
            var u = {
                checks: []
              },
              h = {
                checks: []
              },
              m = [{
                type: sn,
                ancestor: u,
                descendant: h
              }];
            return u.checks = a.checks, a.checks = m, e.compoundCount++, h
          }
        }, {
          name: "subject",
          modifier: !0,
          regex: Wt.subject,
          populate: function(e, a) {
            if (null != e.currentSubject && e.currentSubject !== a) return ue("Redefinition of subject in selector `" + e.toString() + "`"), !1;
            e.currentSubject = a;
            var t = e[e.length - 1].checks[0],
              n = null == t ? null : t.type;
            n === en ? t.type = tn : n === $t && (t.type = nn, t.node = t.nodes[1], t.neighbor = t.nodes[0], t.nodes = null)
          }
        }];
      yn.forEach((function(e) {
        return e.regexObj = new RegExp("^" + e.regex)
      }));
      var fn = function(e) {
          for (var a, t, n, r = 0; r < yn.length; r++) {
            var i = yn[r],
              c = i.name,
              o = e.match(i.regexObj);
            if (null != o) {
              t = o, a = i, n = c;
              var s = o[0];
              e = e.substring(s.length);
              break
            }
          }
          return {
            expr: a,
            match: t,
            name: n,
            remaining: e
          }
        },
        vn = {
          parse: function(e) {
            var a = this.inputText = e,
              t = this[0] = {
                checks: []
              };
            for (this.length = 1, a = function(e) {
                var a = e.match(/^\s+/);
                if (a) {
                  var t = a[0];
                  e = e.substring(t.length)
                }
                return e
              }(a);;) {
              var n = fn(a);
              if (null == n.expr) return ue("The selector `" + e + "`is invalid"), !1;
              var r = n.match.slice(1),
                i = n.expr.populate(this, t, r);
              if (!1 === i) return !1;
              if (null != i && (t = i), (a = n.remaining).match(/^\s*$/)) break
            }
            var c = this[this.length - 1];
            null != this.currentSubject && (c.subject = this.currentSubject), c.edgeCount = this.edgeCount, c.compoundCount = this.compoundCount;
            for (var o = 0; o < this.length; o++) {
              var s = this[o];
              if (s.compoundCount > 0 && s.edgeCount > 0) return ue("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
              if (s.edgeCount > 1) return ue("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
              1 === s.edgeCount && ue("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.")
            }
            return !0
          },
          toString: function() {
            if (null != this.toStringCache) return this.toStringCache;
            for (var e = function(e) {
                return null == e ? "" : e
              }, a = function(a) {
                return v(a) ? '"' + a + '"' : e(a)
              }, t = function(e) {
                return " " + e + " "
              }, n = function(n, i) {
                var c = n.type,
                  o = n.value;
                switch (c) {
                  case jt:
                    var s = e(o);
                    return s.substring(0, s.length - 1);
                  case Qt:
                    var l = n.field,
                      d = n.operator;
                    return "[" + l + t(e(d)) + a(o) + "]";
                  case Zt:
                    var u = n.operator,
                      h = n.field;
                    return "[" + e(u) + h + "]";
                  case qt:
                    return "[" + n.field + "]";
                  case Kt:
                    var m = n.operator;
                    return "[[" + n.field + t(e(m)) + a(o) + "]]";
                  case Yt:
                    return o;
                  case Xt:
                    return "#" + o;
                  case Jt:
                    return "." + o;
                  case on:
                  case rn:
                    return r(n.parent, i) + t(">") + r(n.child, i);
                  case sn:
                  case cn:
                    return r(n.ancestor, i) + " " + r(n.descendant, i);
                  case ln:
                    var g = r(n.left, i),
                      p = r(n.subject, i),
                      y = r(n.right, i);
                    return g + (g.length > 0 ? " " : "") + p + y;
                  case dn:
                    return ""
                }
              }, r = function(e, a) {
                return e.checks.reduce((function(t, r, i) {
                  return t + (a === e && 0 === i ? "$" : "") + n(r, a)
                }), "")
              }, i = "", c = 0; c < this.length; c++) {
              var o = this[c];
              i += r(o, o.subject), this.length > 1 && c < this.length - 1 && (i += ", ")
            }
            return this.toStringCache = i, i
          }
        },
        _n = function(e, a, t) {
          var n, r, i, c = v(e),
            o = w(e),
            s = v(t),
            l = !1,
            d = !1,
            u = !1;
          switch (a.indexOf("!") >= 0 && (a = a.replace("!", ""), d = !0), a.indexOf("@") >= 0 && (a = a.replace("@", ""), l = !0), (c || s || l) && (r = c || o ? "" + e : "", i = "" + t), l && (e = r = r.toLowerCase(), t = i = i.toLowerCase()), a) {
            case "*=":
              n = r.indexOf(i) >= 0;
              break;
            case "$=":
              n = r.indexOf(i, r.length - i.length) >= 0;
              break;
            case "^=":
              n = 0 === r.indexOf(i);
              break;
            case "=":
              n = e === t;
              break;
            case ">":
              u = !0, n = e > t;
              break;
            case ">=":
              u = !0, n = e >= t;
              break;
            case "<":
              u = !0, n = e < t;
              break;
            case "<=":
              u = !0, n = e <= t;
              break;
            default:
              n = !1
          }
          return !d || null == e && u || (n = !n), n
        },
        Sn = function(e, a) {
          return e.data(a)
        },
        bn = [],
        wn = function(e, a) {
          return e.checks.every((function(e) {
            return bn[e.type](e, a)
          }))
        };
      bn[jt] = function(e, a) {
        var t = e.value;
        return "*" === t || t === a.group()
      }, bn[Yt] = function(e, a) {
        return function(e, a) {
          return hn[e](a)
        }(e.value, a)
      }, bn[Xt] = function(e, a) {
        var t = e.value;
        return a.id() === t
      }, bn[Jt] = function(e, a) {
        var t = e.value;
        return a.hasClass(t)
      }, bn[Kt] = function(e, a) {
        var t = e.field,
          n = e.operator,
          r = e.value;
        return _n(function(e, a) {
          return e[a]()
        }(a, t), n, r)
      }, bn[Qt] = function(e, a) {
        var t = e.field,
          n = e.operator,
          r = e.value;
        return _n(Sn(a, t), n, r)
      }, bn[Zt] = function(e, a) {
        var t = e.field,
          n = e.operator;
        return function(e, a) {
          switch (a) {
            case "?":
              return !!e;
            case "!":
              return !e;
            case "^":
              return void 0 === e
          }
        }(Sn(a, t), n)
      }, bn[qt] = function(e, a) {
        var t = e.field;
        e.operator;
        return void 0 !== Sn(a, t)
      }, bn[$t] = function(e, a) {
        var t = e.nodes[0],
          n = e.nodes[1],
          r = a.source(),
          i = a.target();
        return wn(t, r) && wn(n, i) || wn(n, r) && wn(t, i)
      }, bn[nn] = function(e, a) {
        return wn(e.node, a) && a.neighborhood().some((function(a) {
          return a.isNode() && wn(e.neighbor, a)
        }))
      }, bn[en] = function(e, a) {
        return wn(e.source, a.source()) && wn(e.target, a.target())
      }, bn[an] = function(e, a) {
        return wn(e.source, a) && a.outgoers().some((function(a) {
          return a.isNode() && wn(e.target, a)
        }))
      }, bn[tn] = function(e, a) {
        return wn(e.target, a) && a.incomers().some((function(a) {
          return a.isNode() && wn(e.source, a)
        }))
      }, bn[rn] = function(e, a) {
        return wn(e.child, a) && wn(e.parent, a.parent())
      }, bn[on] = function(e, a) {
        return wn(e.parent, a) && a.children().some((function(a) {
          return wn(e.child, a)
        }))
      }, bn[cn] = function(e, a) {
        return wn(e.descendant, a) && a.ancestors().some((function(a) {
          return wn(e.ancestor, a)
        }))
      }, bn[sn] = function(e, a) {
        return wn(e.ancestor, a) && a.descendants().some((function(a) {
          return wn(e.descendant, a)
        }))
      }, bn[ln] = function(e, a) {
        return wn(e.subject, a) && wn(e.left, a) && wn(e.right, a)
      }, bn[dn] = function() {
        return !0
      }, bn[Ot] = function(e, a) {
        return e.value.has(a)
      }, bn[Ht] = function(e, a) {
        return (0, e.value)(a)
      };
      var Cn = function(e) {
          this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, null == e || v(e) && e.match(/^\s*$/) || (N(e) ? this.addQuery({
            checks: [{
              type: Ot,
              value: e.collection()
            }]
          }) : _(e) ? this.addQuery({
            checks: [{
              type: Ht,
              value: e
            }]
          }) : v(e) ? this.parse(e) || (this.invalid = !0) : le("A selector must be created from a string; found "))
        },
        Nn = Cn.prototype;
      [vn, {
        matches: function(e) {
          for (var a = 0; a < this.length; a++) {
            var t = this[a];
            if (wn(t, e)) return !0
          }
          return !1
        },
        filter: function(e) {
          var a = this;
          if (1 === a.length && 1 === a[0].checks.length && a[0].checks[0].type === Xt) return e.getElementById(a[0].checks[0].value).collection();
          var t = function(e) {
            for (var t = 0; t < a.length; t++) {
              var n = a[t];
              if (wn(n, e)) return !0
            }
            return !1
          };
          return null == a.text() && (t = function() {
            return !0
          }), e.filter(t)
        }
      }].forEach((function(e) {
        return F(Nn, e)
      })), Nn.text = function() {
        return this.inputText
      }, Nn.size = function() {
        return this.length
      }, Nn.eq = function(e) {
        return this[e]
      }, Nn.sameText = function(e) {
        return !this.invalid && !e.invalid && this.text() === e.text()
      }, Nn.addQuery = function(e) {
        this[this.length++] = e
      }, Nn.selector = Nn.toString;
      var Bn = {
        allAre: function(e) {
          var a = new Cn(e);
          return this.every((function(e) {
            return a.matches(e)
          }))
        },
        is: function(e) {
          var a = new Cn(e);
          return this.some((function(e) {
            return a.matches(e)
          }))
        },
        some: function(e, a) {
          for (var t = 0; t < this.length; t++) {
            if (a ? e.apply(a, [this[t], t, this]) : e(this[t], t, this)) return !0
          }
          return !1
        },
        every: function(e, a) {
          for (var t = 0; t < this.length; t++) {
            if (!(a ? e.apply(a, [this[t], t, this]) : e(this[t], t, this))) return !1
          }
          return !0
        },
        same: function(e) {
          if (this === e) return !0;
          e = this.cy().collection(e);
          var a = this.length;
          return a === e.length && (1 === a ? this[0] === e[0] : this.every((function(a) {
            return e.hasElementWithId(a.id())
          })))
        },
        anySame: function(e) {
          return e = this.cy().collection(e), this.some((function(a) {
            return e.hasElementWithId(a.id())
          }))
        },
        allAreNeighbors: function(e) {
          e = this.cy().collection(e);
          var a = this.neighborhood();
          return e.every((function(e) {
            return a.hasElementWithId(e.id())
          }))
        },
        contains: function(e) {
          e = this.cy().collection(e);
          var a = this;
          return e.every((function(e) {
            return a.hasElementWithId(e.id())
          }))
        }
      };
      Bn.allAreNeighbours = Bn.allAreNeighbors, Bn.has = Bn.contains, Bn.equal = Bn.equals = Bn.same;
      var Dn, xn, In = function(e, a) {
          return function(t, n, r, i) {
            var c, o = t;
            if (null == o ? c = "" : N(o) && 1 === o.length && (c = o.id()), 1 === this.length && c) {
              var s = this[0]._private,
                l = s.traversalCache = s.traversalCache || {},
                d = l[a] = l[a] || [],
                u = J(c),
                h = d[u];
              return h || (d[u] = e.call(this, t, n, r, i))
            }
            return e.call(this, t, n, r, i)
          }
        },
        Tn = {
          parent: function(e) {
            var a = [];
            if (1 === this.length) {
              var t = this[0]._private.parent;
              if (t) return t
            }
            for (var n = 0; n < this.length; n++) {
              var r = this[n]._private.parent;
              r && a.push(r)
            }
            return this.spawn(a, {
              unique: !0
            }).filter(e)
          },
          parents: function(e) {
            for (var a = [], t = this.parent(); t.nonempty();) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                a.push(r)
              }
              t = t.parent()
            }
            return this.spawn(a, {
              unique: !0
            }).filter(e)
          },
          commonAncestors: function(e) {
            for (var a, t = 0; t < this.length; t++) {
              var n = this[t].parents();
              a = (a = a || n).intersect(n)
            }
            return a.filter(e)
          },
          orphans: function(e) {
            return this.stdFilter((function(e) {
              return e.isOrphan()
            })).filter(e)
          },
          nonorphans: function(e) {
            return this.stdFilter((function(e) {
              return e.isChild()
            })).filter(e)
          },
          children: In((function(e) {
            for (var a = [], t = 0; t < this.length; t++)
              for (var n = this[t]._private.children, r = 0; r < n.length; r++) a.push(n[r]);
            return this.spawn(a, {
              unique: !0
            }).filter(e)
          }), "children"),
          siblings: function(e) {
            return this.parent().children().not(this).filter(e)
          },
          isParent: function() {
            var e = this[0];
            if (e) return e.isNode() && 0 !== e._private.children.length
          },
          isChildless: function() {
            var e = this[0];
            if (e) return e.isNode() && 0 === e._private.children.length
          },
          isChild: function() {
            var e = this[0];
            if (e) return e.isNode() && null != e._private.parent
          },
          isOrphan: function() {
            var e = this[0];
            if (e) return e.isNode() && null == e._private.parent
          },
          descendants: function(e) {
            var a = [];
            return function e(t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                a.push(r), r.children().nonempty() && e(r.children())
              }
            }(this.children()), this.spawn(a, {
              unique: !0
            }).filter(e)
          }
        };

      function Un(e, a, t, n) {
        for (var r = [], i = new Ce, c = e.cy().hasCompoundNodes(), o = 0; o < e.length; o++) {
          var s = e[o];
          t ? r.push(s) : c && n(r, i, s)
        }
        for (; r.length > 0;) {
          var l = r.shift();
          a(l), i.add(l.id()), c && n(r, i, l)
        }
        return e
      }

      function Pn(e, a, t) {
        if (t.isParent())
          for (var n = t._private.children, r = 0; r < n.length; r++) {
            var i = n[r];
            a.has(i.id()) || e.push(i)
          }
      }

      function Mn(e, a, t) {
        if (t.isChild()) {
          var n = t._private.parent;
          a.has(n.id()) || e.push(n)
        }
      }

      function kn(e, a, t) {
        Mn(e, a, t), Pn(e, a, t)
      }
      Tn.forEachDown = function(e) {
        var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Un(this, e, a, Pn)
      }, Tn.forEachUp = function(e) {
        var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Un(this, e, a, Mn)
      }, Tn.forEachUpAndDown = function(e) {
        var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Un(this, e, a, kn)
      }, Tn.ancestors = Tn.parents, (Dn = xn = {
        data: Ft.data({
          field: "data",
          bindingEvent: "data",
          allowBinding: !0,
          allowSetting: !0,
          settingEvent: "data",
          settingTriggersEvent: !0,
          triggerFnName: "trigger",
          allowGetting: !0,
          immutableKeys: {
            id: !0,
            source: !0,
            target: !0,
            parent: !0
          },
          updateStyle: !0
        }),
        removeData: Ft.removeData({
          field: "data",
          event: "data",
          triggerFnName: "trigger",
          triggerEvent: !0,
          immutableKeys: {
            id: !0,
            source: !0,
            target: !0,
            parent: !0
          },
          updateStyle: !0
        }),
        scratch: Ft.data({
          field: "scratch",
          bindingEvent: "scratch",
          allowBinding: !0,
          allowSetting: !0,
          settingEvent: "scratch",
          settingTriggersEvent: !0,
          triggerFnName: "trigger",
          allowGetting: !0,
          updateStyle: !0
        }),
        removeScratch: Ft.removeData({
          field: "scratch",
          event: "scratch",
          triggerFnName: "trigger",
          triggerEvent: !0,
          updateStyle: !0
        }),
        rscratch: Ft.data({
          field: "rscratch",
          allowBinding: !1,
          allowSetting: !0,
          settingTriggersEvent: !1,
          allowGetting: !0
        }),
        removeRscratch: Ft.removeData({
          field: "rscratch",
          triggerEvent: !1
        }),
        id: function() {
          var e = this[0];
          if (e) return e._private.data.id
        }
      }).attr = Dn.data, Dn.removeAttr = Dn.removeData;
      var An, Rn, En = xn,
        Gn = {};

      function Vn(e) {
        return function(a) {
          if (void 0 === a && (a = !0), 0 !== this.length && this.isNode() && !this.removed()) {
            for (var t = 0, n = this[0], r = n._private.edges, i = 0; i < r.length; i++) {
              var c = r[i];
              !a && c.isLoop() || (t += e(n, c))
            }
            return t
          }
        }
      }

      function Fn(e, a) {
        return function(t) {
          for (var n, r = this.nodes(), i = 0; i < r.length; i++) {
            var c = r[i][e](t);
            void 0 === c || void 0 !== n && !a(c, n) || (n = c)
          }
          return n
        }
      }
      F(Gn, {
        degree: Vn((function(e, a) {
          return a.source().same(a.target()) ? 2 : 1
        })),
        indegree: Vn((function(e, a) {
          return a.target().same(e) ? 1 : 0
        })),
        outdegree: Vn((function(e, a) {
          return a.source().same(e) ? 1 : 0
        }))
      }), F(Gn, {
        minDegree: Fn("degree", (function(e, a) {
          return e < a
        })),
        maxDegree: Fn("degree", (function(e, a) {
          return e > a
        })),
        minIndegree: Fn("indegree", (function(e, a) {
          return e < a
        })),
        maxIndegree: Fn("indegree", (function(e, a) {
          return e > a
        })),
        minOutdegree: Fn("outdegree", (function(e, a) {
          return e < a
        })),
        maxOutdegree: Fn("outdegree", (function(e, a) {
          return e > a
        }))
      }), F(Gn, {
        totalDegree: function(e) {
          for (var a = 0, t = this.nodes(), n = 0; n < t.length; n++) a += t[n].degree(e);
          return a
        }
      });
      var Ln = function(e, a, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (!r.locked()) {
              var i = r._private.position,
                c = {
                  x: null != a.x ? a.x - i.x : 0,
                  y: null != a.y ? a.y - i.y : 0
                };
              !r.isParent() || 0 === c.x && 0 === c.y || r.children().shift(c, t), r.shiftCachedBoundingBox(c)
            }
          }
        },
        zn = {
          field: "position",
          bindingEvent: "position",
          allowBinding: !0,
          allowSetting: !0,
          settingEvent: "position",
          settingTriggersEvent: !0,
          triggerFnName: "emitAndNotify",
          allowGetting: !0,
          validKeys: ["x", "y"],
          beforeGet: function(e) {
            e.updateCompoundBounds()
          },
          beforeSet: function(e, a) {
            Ln(e, a, !1)
          },
          onSet: function(e) {
            e.dirtyCompoundBoundsCache()
          },
          canSet: function(e) {
            return !e.locked()
          }
        };
      (An = Rn = {
        position: Ft.data(zn),
        silentPosition: Ft.data(F({}, zn, {
          allowBinding: !1,
          allowSetting: !0,
          settingTriggersEvent: !1,
          allowGetting: !1,
          beforeSet: function(e, a) {
            Ln(e, a, !0)
          }
        })),
        positions: function(e, a) {
          if (b(e)) a ? this.silentPosition(e) : this.position(e);
          else if (_(e)) {
            var t = e,
              n = this.cy();
            n.startBatch();
            for (var r = 0; r < this.length; r++) {
              var i, c = this[r];
              (i = t(c, r)) && (a ? c.silentPosition(i) : c.position(i))
            }
            n.endBatch()
          }
          return this
        },
        silentPositions: function(e) {
          return this.positions(e, !0)
        },
        shift: function(e, a, t) {
          var n;
          if (b(e) ? (n = {
              x: w(e.x) ? e.x : 0,
              y: w(e.y) ? e.y : 0
            }, t = a) : v(e) && w(a) && ((n = {
              x: 0,
              y: 0
            })[e] = a), null != n) {
            var r = this.cy();
            r.startBatch();
            for (var i = 0; i < this.length; i++) {
              var c = this[i],
                o = c.position(),
                s = {
                  x: o.x + n.x,
                  y: o.y + n.y
                };
              t ? c.silentPosition(s) : c.position(s)
            }
            r.endBatch()
          }
          return this
        },
        silentShift: function(e, a) {
          return b(e) ? this.shift(e, !0) : v(e) && w(a) && this.shift(e, a, !0), this
        },
        renderedPosition: function(e, a) {
          var t = this[0],
            n = this.cy(),
            r = n.zoom(),
            i = n.pan(),
            c = b(e) ? e : void 0,
            o = void 0 !== c || void 0 !== a && v(e);
          if (t && t.isNode()) {
            if (!o) {
              var s = t.position();
              return c = ze(s, r, i), void 0 === e ? c : c[e]
            }
            for (var l = 0; l < this.length; l++) {
              var d = this[l];
              void 0 !== a ? d.position(e, (a - i[e]) / r) : void 0 !== c && d.position(We(c, r, i))
            }
          } else if (!o) return;
          return this
        },
        relativePosition: function(e, a) {
          var t = this[0],
            n = this.cy(),
            r = b(e) ? e : void 0,
            i = void 0 !== r || void 0 !== a && v(e),
            c = n.hasCompoundNodes();
          if (t && t.isNode()) {
            if (!i) {
              var o = t.position(),
                s = c ? t.parent() : null,
                l = s && s.length > 0,
                d = l;
              l && (s = s[0]);
              var u = d ? s.position() : {
                x: 0,
                y: 0
              };
              return r = {
                x: o.x - u.x,
                y: o.y - u.y
              }, void 0 === e ? r : r[e]
            }
            for (var h = 0; h < this.length; h++) {
              var m = this[h],
                g = c ? m.parent() : null,
                p = g && g.length > 0,
                y = p;
              p && (g = g[0]);
              var f = y ? g.position() : {
                x: 0,
                y: 0
              };
              void 0 !== a ? m.position(e, a + f[e]) : void 0 !== r && m.position({
                x: r.x + f.x,
                y: r.y + f.y
              })
            }
          } else if (!i) return;
          return this
        }
      }).modelPosition = An.point = An.position, An.modelPositions = An.points = An.positions, An.renderedPoint = An.renderedPosition, An.relativePoint = An.relativePosition;
      var Wn, jn, On = Rn;
      Wn = jn = {}, jn.renderedBoundingBox = function(e) {
        var a = this.boundingBox(e),
          t = this.cy(),
          n = t.zoom(),
          r = t.pan(),
          i = a.x1 * n + r.x,
          c = a.x2 * n + r.x,
          o = a.y1 * n + r.y,
          s = a.y2 * n + r.y;
        return {
          x1: i,
          x2: c,
          y1: o,
          y2: s,
          w: c - i,
          h: s - o
        }
      }, jn.dirtyCompoundBoundsCache = function() {
        var e = this.cy();
        return e.styleEnabled() && e.hasCompoundNodes() ? (this.forEachUp((function(e) {
          if (e.isParent()) {
            var a = e._private;
            a.compoundBoundsClean = !1, a.bbCache = null, e.emitAndNotify("bounds")
          }
        })), this) : this
      }, jn.updateCompoundBounds = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          a = this.cy();
        if (!a.styleEnabled() || !a.hasCompoundNodes()) return this;
        if (!e && a.batching()) return this;

        function t(e) {
          if (e.isParent()) {
            var a = e._private,
              t = e.children(),
              n = "include" === e.pstyle("compound-sizing-wrt-labels").value,
              r = {
                width: {
                  val: e.pstyle("min-width").pfValue,
                  left: e.pstyle("min-width-bias-left"),
                  right: e.pstyle("min-width-bias-right")
                },
                height: {
                  val: e.pstyle("min-height").pfValue,
                  top: e.pstyle("min-height-bias-top"),
                  bottom: e.pstyle("min-height-bias-bottom")
                }
              },
              i = t.boundingBox({
                includeLabels: n,
                includeOverlays: !1,
                useCache: !1
              }),
              c = a.position;
            0 !== i.w && 0 !== i.h || ((i = {
              w: e.pstyle("width").pfValue,
              h: e.pstyle("height").pfValue
            }).x1 = c.x - i.w / 2, i.x2 = c.x + i.w / 2, i.y1 = c.y - i.h / 2, i.y2 = c.y + i.h / 2);
            var o = r.width.left.value;
            "px" === r.width.left.units && r.width.val > 0 && (o = 100 * o / r.width.val);
            var s = r.width.right.value;
            "px" === r.width.right.units && r.width.val > 0 && (s = 100 * s / r.width.val);
            var l = r.height.top.value;
            "px" === r.height.top.units && r.height.val > 0 && (l = 100 * l / r.height.val);
            var d = r.height.bottom.value;
            "px" === r.height.bottom.units && r.height.val > 0 && (d = 100 * d / r.height.val);
            var u = f(r.width.val - i.w, o, s),
              h = u.biasDiff,
              m = u.biasComplementDiff,
              g = f(r.height.val - i.h, l, d),
              p = g.biasDiff,
              y = g.biasComplementDiff;
            a.autoPadding = function(e, a, t, n) {
              if ("%" !== t.units) return "px" === t.units ? t.pfValue : 0;
              switch (n) {
                case "width":
                  return e > 0 ? t.pfValue * e : 0;
                case "height":
                  return a > 0 ? t.pfValue * a : 0;
                case "average":
                  return e > 0 && a > 0 ? t.pfValue * (e + a) / 2 : 0;
                case "min":
                  return e > 0 && a > 0 ? e > a ? t.pfValue * a : t.pfValue * e : 0;
                case "max":
                  return e > 0 && a > 0 ? e > a ? t.pfValue * e : t.pfValue * a : 0;
                default:
                  return 0
              }
            }(i.w, i.h, e.pstyle("padding"), e.pstyle("padding-relative-to").value), a.autoWidth = Math.max(i.w, r.width.val), c.x = (-h + i.x1 + i.x2 + m) / 2, a.autoHeight = Math.max(i.h, r.height.val), c.y = (-p + i.y1 + i.y2 + y) / 2
          }

          function f(e, a, t) {
            var n = 0,
              r = 0,
              i = a + t;
            return e > 0 && i > 0 && (n = a / i * e, r = t / i * e), {
              biasDiff: n,
              biasComplementDiff: r
            }
          }
        }
        for (var n = 0; n < this.length; n++) {
          var r = this[n],
            i = r._private;
          i.compoundBoundsClean || (t(r), a.batching() || (i.compoundBoundsClean = !0))
        }
        return this
      };
      var Hn = function(e) {
          return e === 1 / 0 || e === -1 / 0 ? 0 : e
        },
        Qn = function(e, a, t, n, r) {
          n - a != 0 && r - t != 0 && null != a && null != t && null != n && null != r && (e.x1 = a < e.x1 ? a : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = t < e.y1 ? t : e.y1, e.y2 = r > e.y2 ? r : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1)
        },
        qn = function(e, a) {
          return null == a ? e : Qn(e, a.x1, a.y1, a.x2, a.y2)
        },
        Zn = function(e, a, t) {
          return _e(e, a, t)
        },
        Kn = function(e, a, t) {
          if (!a.cy().headless()) {
            var n, r, i = a._private,
              c = i.rstyle,
              o = c.arrowWidth / 2;
            if ("none" !== a.pstyle(t + "-arrow-shape").value) {
              "source" === t ? (n = c.srcX, r = c.srcY) : "target" === t ? (n = c.tgtX, r = c.tgtY) : (n = c.midX, r = c.midY);
              var s = i.arrowBounds = i.arrowBounds || {},
                l = s[t] = s[t] || {};
              l.x1 = n - o, l.y1 = r - o, l.x2 = n + o, l.y2 = r + o, l.w = l.x2 - l.x1, l.h = l.y2 - l.y1, aa(l, 1), Qn(e, l.x1, l.y1, l.x2, l.y2)
            }
          }
        },
        Yn = function(e, a, t) {
          if (!a.cy().headless()) {
            var n;
            n = t ? t + "-" : "";
            var r = a._private,
              i = r.rstyle;
            if (a.pstyle(n + "label").strValue) {
              var c, o, s, l, d = a.pstyle("text-halign"),
                u = a.pstyle("text-valign"),
                h = Zn(i, "labelWidth", t),
                m = Zn(i, "labelHeight", t),
                g = Zn(i, "labelX", t),
                p = Zn(i, "labelY", t),
                y = a.pstyle(n + "text-margin-x").pfValue,
                f = a.pstyle(n + "text-margin-y").pfValue,
                v = a.isEdge(),
                _ = a.pstyle(n + "text-rotation"),
                S = a.pstyle("text-outline-width").pfValue,
                b = a.pstyle("text-border-width").pfValue / 2,
                w = a.pstyle("text-background-padding").pfValue,
                C = m,
                N = h,
                B = N / 2,
                D = C / 2;
              if (v) c = g - B, o = g + B, s = p - D, l = p + D;
              else {
                switch (d.value) {
                  case "left":
                    c = g - N, o = g;
                    break;
                  case "center":
                    c = g - B, o = g + B;
                    break;
                  case "right":
                    c = g, o = g + N
                }
                switch (u.value) {
                  case "top":
                    s = p - C, l = p;
                    break;
                  case "center":
                    s = p - D, l = p + D;
                    break;
                  case "bottom":
                    s = p, l = p + C
                }
              }
              c += y - Math.max(S, b) - w, o += y + Math.max(S, b) + w, s += f - Math.max(S, b) - w, l += f + Math.max(S, b) + w;
              var x = t || "main",
                I = r.labelBounds,
                T = I[x] = I[x] || {};
              T.x1 = c, T.y1 = s, T.x2 = o, T.y2 = l, T.w = o - c, T.h = l - s, aa(T, 1);
              var U = v && "autorotate" === _.strValue,
                P = null != _.pfValue && 0 !== _.pfValue;
              if (U || P) {
                var M = U ? Zn(r.rstyle, "labelAngle", t) : _.pfValue,
                  k = Math.cos(M),
                  A = Math.sin(M),
                  R = (c + o) / 2,
                  E = (s + l) / 2;
                if (!v) {
                  switch (d.value) {
                    case "left":
                      R = o;
                      break;
                    case "right":
                      R = c
                  }
                  switch (u.value) {
                    case "top":
                      E = l;
                      break;
                    case "bottom":
                      E = s
                  }
                }
                var G = function(e, a) {
                    return {
                      x: (e -= R) * k - (a -= E) * A + R,
                      y: e * A + a * k + E
                    }
                  },
                  V = G(c, s),
                  F = G(c, l),
                  L = G(o, s),
                  z = G(o, l);
                c = Math.min(V.x, F.x, L.x, z.x), o = Math.max(V.x, F.x, L.x, z.x), s = Math.min(V.y, F.y, L.y, z.y), l = Math.max(V.y, F.y, L.y, z.y)
              }
              var W = x + "Rot",
                j = I[W] = I[W] || {};
              j.x1 = c, j.y1 = s, j.x2 = o, j.y2 = l, j.w = o - c, j.h = l - s, Qn(e, c, s, o, l), Qn(r.labelBounds.all, c, s, o, l)
            }
            return e
          }
        },
        Xn = function(e) {
          var a = 0,
            t = function(e) {
              return (e ? 1 : 0) << a++
            },
            n = 0;
          return n += t(e.incudeNodes), n += t(e.includeEdges), n += t(e.includeLabels), n += t(e.includeMainLabels), n += t(e.includeSourceLabels), n += t(e.includeTargetLabels), n += t(e.includeOverlays)
        },
        Jn = function(e) {
          if (e.isEdge()) {
            var a = e.source().position(),
              t = e.target().position(),
              n = function(e) {
                return Math.round(e)
              };
            return X([n(a.x), n(a.y), n(t.x), n(t.y)])
          }
          return 0
        },
        $n = function(e, a) {
          var t, n = e._private,
            r = e.isEdge(),
            i = (null == a ? ar : Xn(a)) === ar,
            c = Jn(e),
            o = n.bbCachePosKey === c,
            s = function(e) {
              return null == e._private.bbCache
            },
            l = !(a.useCache && o) || s(e) || r && s(e.source()) || s(e.target());
          if (l ? (o || e.recalculateRenderedStyle(), t = function(e, a) {
              var t, n, r, i, c, o, s, l = e._private.cy,
                d = l.styleEnabled(),
                u = l.headless(),
                h = $e(),
                m = e._private,
                g = e.isNode(),
                p = e.isEdge(),
                y = m.rstyle,
                f = g && d ? e.pstyle("bounds-expansion").pfValue : [0],
                v = function(e) {
                  return "none" !== e.pstyle("display").value
                },
                _ = !d || v(e) && (!p || v(e.source()) && v(e.target()));
              if (_) {
                var S = 0;
                d && a.includeOverlays && 0 !== e.pstyle("overlay-opacity").value && (S = e.pstyle("overlay-padding").value);
                var b = 0;
                if (d && (b = e.pstyle("width").pfValue / 2), g && a.includeNodes) {
                  var w = e.position();
                  c = w.x, o = w.y;
                  var C = e.outerWidth() / 2,
                    N = e.outerHeight() / 2;
                  Qn(h, t = c - C, r = o - N, n = c + C, i = o + N)
                } else if (p && a.includeEdges)
                  if (d && !u) {
                    var B = e.pstyle("curve-style").strValue;
                    if (t = Math.min(y.srcX, y.midX, y.tgtX), n = Math.max(y.srcX, y.midX, y.tgtX), r = Math.min(y.srcY, y.midY, y.tgtY), i = Math.max(y.srcY, y.midY, y.tgtY), Qn(h, t -= b, r -= b, n += b, i += b), "haystack" === B) {
                      var D = y.haystackPts;
                      if (D && 2 === D.length) {
                        if (t = D[0].x, r = D[0].y, t > (n = D[1].x)) {
                          var x = t;
                          t = n, n = x
                        }
                        if (r > (i = D[1].y)) {
                          var I = r;
                          r = i, i = I
                        }
                        Qn(h, t - b, r - b, n + b, i + b)
                      }
                    } else if ("bezier" === B || "unbundled-bezier" === B || "segments" === B || "taxi" === B) {
                      var T;
                      switch (B) {
                        case "bezier":
                        case "unbundled-bezier":
                          T = y.bezierPts;
                          break;
                        case "segments":
                        case "taxi":
                          T = y.linePts
                      }
                      if (null != T)
                        for (var U = 0; U < T.length; U++) {
                          var P = T[U];
                          t = P.x - b, n = P.x + b, r = P.y - b, i = P.y + b, Qn(h, t, r, n, i)
                        }
                    }
                  } else {
                    var M = e.source().position(),
                      k = e.target().position();
                    if ((t = M.x) > (n = k.x)) {
                      var A = t;
                      t = n, n = A
                    }
                    if ((r = M.y) > (i = k.y)) {
                      var R = r;
                      r = i, i = R
                    }
                    Qn(h, t -= b, r -= b, n += b, i += b)
                  } if (d && a.includeEdges && p && (Kn(h, e, "mid-source"), Kn(h, e, "mid-target"), Kn(h, e, "source"), Kn(h, e, "target")), d)
                  if ("yes" === e.pstyle("ghost").value) {
                    var E = e.pstyle("ghost-offset-x").pfValue,
                      G = e.pstyle("ghost-offset-y").pfValue;
                    Qn(h, h.x1 + E, h.y1 + G, h.x2 + E, h.y2 + G)
                  } var V = m.bodyBounds = m.bodyBounds || {};
                na(V, h), ta(V, f), aa(V, 1), d && (t = h.x1, n = h.x2, r = h.y1, i = h.y2, Qn(h, t - S, r - S, n + S, i + S));
                var F = m.overlayBounds = m.overlayBounds || {};
                na(F, h), ta(F, f), aa(F, 1);
                var L = m.labelBounds = m.labelBounds || {};
                null != L.all ? ((s = L.all).x1 = 1 / 0, s.y1 = 1 / 0, s.x2 = -1 / 0, s.y2 = -1 / 0, s.w = 0, s.h = 0) : L.all = $e(), d && a.includeLabels && (a.includeMainLabels && Yn(h, e, null), p && (a.includeSourceLabels && Yn(h, e, "source"), a.includeTargetLabels && Yn(h, e, "target")))
              }
              return h.x1 = Hn(h.x1), h.y1 = Hn(h.y1), h.x2 = Hn(h.x2), h.y2 = Hn(h.y2), h.w = Hn(h.x2 - h.x1), h.h = Hn(h.y2 - h.y1), h.w > 0 && h.h > 0 && _ && (ta(h, f), aa(h, 1)), h
            }(e, er), n.bbCache = t, n.bbCacheShift.x = n.bbCacheShift.y = 0, n.bbCachePosKey = c) : t = n.bbCache, !l && (0 !== n.bbCacheShift.x || 0 !== n.bbCacheShift.y)) {
            var d = ra,
              u = n.bbCacheShift,
              h = function(e, a) {
                null != e && d(e, a)
              };
            d(t, u);
            var m = n.bodyBounds,
              g = n.overlayBounds,
              p = n.labelBounds,
              y = n.arrowBounds;
            h(m, u), h(g, u), null != y && (h(y.source, u), h(y.target, u), h(y["mid-source"], u), h(y["mid-target"], u)), null != p && (h(p.main, u), h(p.all, u), h(p.source, u), h(p.target, u))
          }
          if (n.bbCacheShift.x = n.bbCacheShift.y = 0, !i) {
            var f = e.isNode();
            t = $e(), (a.includeNodes && f || a.includeEdges && !f) && (a.includeOverlays ? qn(t, n.overlayBounds) : qn(t, n.bodyBounds)), a.includeLabels && (a.includeMainLabels && (!r || a.includeSourceLabels && a.includeTargetLabels) ? qn(t, n.labelBounds.all) : (a.includeMainLabels && qn(t, n.labelBounds.mainRot), a.includeSourceLabels && qn(t, n.labelBounds.sourceRot), a.includeTargetLabels && qn(t, n.labelBounds.targetRot))), t.w = t.x2 - t.x1, t.h = t.y2 - t.y1
          }
          return t
        },
        er = {
          includeNodes: !0,
          includeEdges: !0,
          includeLabels: !0,
          includeMainLabels: !0,
          includeSourceLabels: !0,
          includeTargetLabels: !0,
          includeOverlays: !0,
          useCache: !0
        },
        ar = Xn(er),
        tr = ye(er);
      jn.boundingBox = function(e) {
        var a;
        if (1 !== this.length || null == this[0]._private.bbCache || void 0 !== e && void 0 !== e.useCache && !0 !== e.useCache) {
          a = $e();
          var t = tr(e = e || er);
          if (this.cy().styleEnabled())
            for (var n = 0; n < this.length; n++) {
              var r = this[n],
                i = r._private,
                c = Jn(r),
                o = i.bbCachePosKey === c,
                s = t.useCache && o;
              r.recalculateRenderedStyle(s)
            }
          this.updateCompoundBounds();
          for (var l = 0; l < this.length; l++) {
            var d = this[l];
            qn(a, $n(d, t))
          }
        } else e = void 0 === e ? er : tr(e), a = $n(this[0], e);
        return a.x1 = Hn(a.x1), a.y1 = Hn(a.y1), a.x2 = Hn(a.x2), a.y2 = Hn(a.y2), a.w = Hn(a.x2 - a.x1), a.h = Hn(a.y2 - a.y1), a
      }, jn.dirtyBoundingBoxCache = function() {
        for (var e = 0; e < this.length; e++) {
          var a = this[e]._private;
          a.bbCache = null, a.bbCacheShift.x = a.bbCacheShift.y = 0, a.bbCachePosKey = null, a.bodyBounds = null, a.overlayBounds = null, a.labelBounds.all = null, a.labelBounds.source = null, a.labelBounds.target = null, a.labelBounds.main = null, a.labelBounds.sourceRot = null, a.labelBounds.targetRot = null, a.labelBounds.mainRot = null, a.arrowBounds.source = null, a.arrowBounds.target = null, a.arrowBounds["mid-source"] = null, a.arrowBounds["mid-target"] = null
        }
        return this.emitAndNotify("bounds"), this
      }, jn.shiftCachedBoundingBox = function(e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a]._private;
          null != t.bbCache && (t.bbCacheShift.x += e.x, t.bbCacheShift.y += e.y)
        }
        return this.emitAndNotify("bounds"), this
      }, jn.boundingBoxAt = function(e) {
        var a = this.nodes(),
          t = this.cy(),
          n = t.hasCompoundNodes();
        if (n && (a = a.filter((function(e) {
            return !e.isParent()
          }))), b(e)) {
          var r = e;
          e = function() {
            return r
          }
        }
        t.startBatch(), a.forEach((function(a, t) {
          return a._private.bbAtOldPos = e(a, t)
        })).silentPositions(e), n && this.updateCompoundBounds(!0);
        var i = function(e) {
          return {
            x1: e.x1,
            x2: e.x2,
            w: e.w,
            y1: e.y1,
            y2: e.y2,
            h: e.h
          }
        }(this.boundingBox({
          useCache: !1
        }));
        return a.silentPositions((function(e) {
          return e._private.bbAtOldPos
        })), t.endBatch(), i
      }, Wn.boundingbox = Wn.bb = Wn.boundingBox, Wn.renderedBoundingbox = Wn.renderedBoundingBox;
      var nr, rr, ir = jn;
      nr = rr = {};
      var cr = function(e) {
        e.uppercaseName = E(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = E(e.outerName), nr[e.name] = function() {
          var a = this[0],
            t = a._private,
            n = t.cy._private.styleEnabled;
          if (a) {
            if (!n) return 1;
            if (a.isParent()) return a.updateCompoundBounds(), t[e.autoName] || 0;
            var r = a.pstyle(e.name);
            switch (r.strValue) {
              case "label":
                return a.recalculateRenderedStyle(), t.rstyle[e.labelName] || 0;
              default:
                return r.pfValue
            }
          }
        }, nr["outer" + e.uppercaseName] = function() {
          var a = this[0],
            t = a._private.cy._private.styleEnabled;
          if (a) return t ? a[e.name]() + a.pstyle("border-width").pfValue + 2 * a.padding() : 1
        }, nr["rendered" + e.uppercaseName] = function() {
          var a = this[0];
          if (a) return a[e.name]() * this.cy().zoom()
        }, nr["rendered" + e.uppercaseOuterName] = function() {
          var a = this[0];
          if (a) return a[e.outerName]() * this.cy().zoom()
        }
      };
      cr({
        name: "width"
      }), cr({
        name: "height"
      }), rr.padding = function() {
        var e = this[0],
          a = e._private;
        return e.isParent() ? (e.updateCompoundBounds(), void 0 !== a.autoPadding ? a.autoPadding : e.pstyle("padding").pfValue) : e.pstyle("padding").pfValue
      }, rr.paddedHeight = function() {
        var e = this[0];
        return e.height() + 2 * e.padding()
      }, rr.paddedWidth = function() {
        var e = this[0];
        return e.width() + 2 * e.padding()
      };
      var or = rr,
        sr = {
          controlPoints: {
            get: function(e) {
              return e.renderer().getControlPoints(e)
            },
            mult: !0
          },
          segmentPoints: {
            get: function(e) {
              return e.renderer().getSegmentPoints(e)
            },
            mult: !0
          },
          sourceEndpoint: {
            get: function(e) {
              return e.renderer().getSourceEndpoint(e)
            }
          },
          targetEndpoint: {
            get: function(e) {
              return e.renderer().getTargetEndpoint(e)
            }
          },
          midpoint: {
            get: function(e) {
              return e.renderer().getEdgeMidpoint(e)
            }
          }
        },
        lr = Object.keys(sr).reduce((function(e, a) {
          var t = sr[a],
            n = function(e) {
              return "rendered" + e[0].toUpperCase() + e.substr(1)
            }(a);
          return e[a] = function() {
            return function(e, a) {
              if (e.isEdge()) return a(e)
            }(this, t.get)
          }, t.mult ? e[n] = function() {
            return function(e, a) {
              if (e.isEdge()) {
                var t = e.cy(),
                  n = t.pan(),
                  r = t.zoom();
                return a(e).map((function(e) {
                  return ze(e, r, n)
                }))
              }
            }(this, t.get)
          } : e[n] = function() {
            return function(e, a) {
              if (e.isEdge()) {
                var t = e.cy();
                return ze(a(e), t.zoom(), t.pan())
              }
            }(this, t.get)
          }, e
        }), {}),
        dr = F({}, On, ir, or, lr),
        ur = function(e, a) {
          this.recycle(e, a)
        };

      function hr() {
        return !1
      }

      function mr() {
        return !0
      }
      ur.prototype = {
        instanceString: function() {
          return "event"
        },
        recycle: function(e, a) {
          if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = hr, null != e && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? mr : hr) : null != e && e.type ? a = e : this.type = e, null != a && (this.originalEvent = a.originalEvent, this.type = null != a.type ? a.type : this.type, this.cy = a.cy, this.target = a.target, this.position = a.position, this.renderedPosition = a.renderedPosition, this.namespace = a.namespace, this.layout = a.layout), null != this.cy && null != this.position && null == this.renderedPosition) {
            var t = this.position,
              n = this.cy.zoom(),
              r = this.cy.pan();
            this.renderedPosition = {
              x: t.x * n + r.x,
              y: t.y * n + r.y
            }
          }
          this.timeStamp = e && e.timeStamp || Date.now()
        },
        preventDefault: function() {
          this.isDefaultPrevented = mr;
          var e = this.originalEvent;
          e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
          this.isPropagationStopped = mr;
          var e = this.originalEvent;
          e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
          this.isImmediatePropagationStopped = mr, this.stopPropagation()
        },
        isDefaultPrevented: hr,
        isPropagationStopped: hr,
        isImmediatePropagationStopped: hr
      };
      var gr = /^([^.]+)(\.(?:[^.]+))?$/,
        pr = {
          qualifierCompare: function(e, a) {
            return e === a
          },
          eventMatches: function() {
            return !0
          },
          addEventFields: function() {},
          callbackContext: function(e) {
            return e
          },
          beforeEmit: function() {},
          afterEmit: function() {},
          bubble: function() {
            return !1
          },
          parent: function() {
            return null
          },
          context: null
        },
        yr = Object.keys(pr),
        fr = {};

      function vr() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fr, a = arguments.length > 1 ? arguments[1] : void 0, t = 0; t < yr.length; t++) {
          var n = yr[t];
          this[n] = e[n] || pr[n]
        }
        this.context = a || this.context, this.listeners = [], this.emitting = 0
      }
      var _r = vr.prototype,
        Sr = function(e, a, t, n, r, i, c) {
          _(n) && (r = n, n = null), c && (i = null == i ? c : F({}, i, c));
          for (var o = S(t) ? t : t.split(/\s+/), s = 0; s < o.length; s++) {
            var l = o[s];
            if (!T(l)) {
              var d = l.match(gr);
              if (d)
                if (!1 === a(e, l, d[1], d[2] ? d[2] : null, n, r, i)) break
            }
          }
        },
        br = function(e, a) {
          return e.addEventFields(e.context, a), new ur(a.type, a)
        },
        wr = function(e, a, t) {
          if ("event" !== f(t))
            if (b(t)) a(e, br(e, t));
            else
              for (var n = S(t) ? t : t.split(/\s+/), r = 0; r < n.length; r++) {
                var i = n[r];
                if (!T(i)) {
                  var c = i.match(gr);
                  if (c) {
                    var o = c[1],
                      s = c[2] ? c[2] : null;
                    a(e, br(e, {
                      type: o,
                      namespace: s,
                      target: e.context
                    }))
                  }
                }
              } else a(e, t)
        };
      _r.on = _r.addListener = function(e, a, t, n, r) {
        return Sr(this, (function(e, a, t, n, r, i, c) {
          _(i) && e.listeners.push({
            event: a,
            callback: i,
            type: t,
            namespace: n,
            qualifier: r,
            conf: c
          })
        }), e, a, t, n, r), this
      }, _r.one = function(e, a, t, n) {
        return this.on(e, a, t, n, {
          one: !0
        })
      }, _r.removeListener = _r.off = function(e, a, t, n) {
        var r = this;
        0 !== this.emitting && (this.listeners = this.listeners.slice());
        for (var i = this.listeners, c = function(c) {
            var o = i[c];
            Sr(r, (function(a, t, n, r, s, l) {
              if ((o.type === n || "*" === e) && (!r && ".*" !== o.namespace || o.namespace === r) && (!s || a.qualifierCompare(o.qualifier, s)) && (!l || o.callback === l)) return i.splice(c, 1), !1
            }), e, a, t, n)
          }, o = i.length - 1; o >= 0; o--) c(o);
        return this
      }, _r.removeAllListeners = function() {
        return this.removeListener("*")
      }, _r.emit = _r.trigger = function(e, a, t) {
        var n = this.listeners,
          r = n.length;
        return this.emitting++, S(a) || (a = [a]), wr(this, (function(e, i) {
          null != t && (n = [{
            event: i.event,
            type: i.type,
            namespace: i.namespace,
            callback: t
          }], r = n.length);
          for (var c = function(t) {
              var r = n[t];
              if (r.type === i.type && (!r.namespace || r.namespace === i.namespace || ".*" === r.namespace) && e.eventMatches(e.context, r, i)) {
                var c = [i];
                null != a && function(e, a) {
                  for (var t = 0; t < a.length; t++) {
                    var n = a[t];
                    e.push(n)
                  }
                }(c, a), e.beforeEmit(e.context, r, i), r.conf && r.conf.one && (e.listeners = e.listeners.filter((function(e) {
                  return e !== r
                })));
                var o = e.callbackContext(e.context, r, i),
                  s = r.callback.apply(o, c);
                e.afterEmit(e.context, r, i), !1 === s && (i.stopPropagation(), i.preventDefault())
              }
            }, o = 0; o < r; o++) c(o);
          e.bubble(e.context) && !i.isPropagationStopped() && e.parent(e.context).emit(i, a)
        }), e), this.emitting--, this
      };
      var Cr = {
          qualifierCompare: function(e, a) {
            return null == e || null == a ? null == e && null == a : e.sameText(a)
          },
          eventMatches: function(e, a, t) {
            var n = a.qualifier;
            return null == n || e !== t.target && B(t.target) && n.matches(t.target)
          },
          addEventFields: function(e, a) {
            a.cy = e.cy(), a.target = e
          },
          callbackContext: function(e, a, t) {
            return null != a.qualifier ? t.target : e
          },
          beforeEmit: function(e, a) {
            a.conf && a.conf.once && a.conf.onceCollection.removeListener(a.event, a.qualifier, a.callback)
          },
          bubble: function() {
            return !0
          },
          parent: function(e) {
            return e.isChild() ? e.parent() : e.cy()
          }
        },
        Nr = function(e) {
          return v(e) ? new Cn(e) : e
        },
        Br = {
          createEmitter: function() {
            for (var e = 0; e < this.length; e++) {
              var a = this[e],
                t = a._private;
              t.emitter || (t.emitter = new vr(Cr, a))
            }
            return this
          },
          emitter: function() {
            return this._private.emitter
          },
          on: function(e, a, t) {
            for (var n = Nr(a), r = 0; r < this.length; r++) {
              this[r].emitter().on(e, n, t)
            }
            return this
          },
          removeListener: function(e, a, t) {
            for (var n = Nr(a), r = 0; r < this.length; r++) {
              this[r].emitter().removeListener(e, n, t)
            }
            return this
          },
          removeAllListeners: function() {
            for (var e = 0; e < this.length; e++) {
              this[e].emitter().removeAllListeners()
            }
            return this
          },
          one: function(e, a, t) {
            for (var n = Nr(a), r = 0; r < this.length; r++) {
              this[r].emitter().one(e, n, t)
            }
            return this
          },
          once: function(e, a, t) {
            for (var n = Nr(a), r = 0; r < this.length; r++) {
              this[r].emitter().on(e, n, t, {
                once: !0,
                onceCollection: this
              })
            }
          },
          emit: function(e, a) {
            for (var t = 0; t < this.length; t++) {
              this[t].emitter().emit(e, a)
            }
            return this
          },
          emitAndNotify: function(e, a) {
            if (0 !== this.length) return this.cy().notify(e, this), this.emit(e, a), this
          }
        };
      Ft.eventAliasesOn(Br);
      var Dr = {
          nodes: function(e) {
            return this.filter((function(e) {
              return e.isNode()
            })).filter(e)
          },
          edges: function(e) {
            return this.filter((function(e) {
              return e.isEdge()
            })).filter(e)
          },
          byGroup: function() {
            for (var e = this.spawn(), a = this.spawn(), t = 0; t < this.length; t++) {
              var n = this[t];
              n.isNode() ? e.merge(n) : a.merge(n)
            }
            return {
              nodes: e,
              edges: a
            }
          },
          filter: function(e, a) {
            if (void 0 === e) return this;
            if (v(e) || N(e)) return new Cn(e).filter(this);
            if (_(e)) {
              for (var t = this.spawn(), n = 0; n < this.length; n++) {
                var r = this[n];
                (a ? e.apply(a, [r, n, this]) : e(r, n, this)) && t.merge(r)
              }
              return t
            }
            return this.spawn()
          },
          not: function(e) {
            if (e) {
              v(e) && (e = this.filter(e));
              for (var a = [], t = e._private.map, n = 0; n < this.length; n++) {
                var r = this[n];
                t.has(r.id()) || a.push(r)
              }
              return this.spawn(a)
            }
            return this
          },
          absoluteComplement: function() {
            return this.cy().mutableElements().not(this)
          },
          intersect: function(e) {
            if (v(e)) {
              var a = e;
              return this.filter(a)
            }
            for (var t = [], n = e, r = this.length < e.length, i = r ? n._private.map : this._private.map, c = r ? this : n, o = 0; o < c.length; o++) {
              var s = c[o]._private.data.id,
                l = i.get(s);
              l && t.push(l.ele)
            }
            return this.spawn(t)
          },
          xor: function(e) {
            var a = this._private.cy;
            v(e) && (e = a.$(e));
            var t = [],
              n = e,
              r = function(e, a) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n],
                    i = r._private.data.id;
                  a.hasElementWithId(i) || t.push(r)
                }
              };
            return r(this, n), r(n, this), this.spawn(t)
          },
          diff: function(e) {
            var a = this._private.cy;
            v(e) && (e = a.$(e));
            var t = [],
              n = [],
              r = [],
              i = e,
              c = function(e, a, t) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n],
                    c = i._private.data.id;
                  a.hasElementWithId(c) ? r.push(i) : t.push(i)
                }
              };
            return c(this, i, t), c(i, this, n), {
              left: this.spawn(t, {
                unique: !0
              }),
              right: this.spawn(n, {
                unique: !0
              }),
              both: this.spawn(r, {
                unique: !0
              })
            }
          },
          add: function(e) {
            var a = this._private.cy;
            if (!e) return this;
            if (v(e)) {
              var t = e;
              e = a.mutableElements().filter(t)
            }
            for (var n = [], r = 0; r < this.length; r++) n.push(this[r]);
            for (var i = this._private.map, c = 0; c < e.length; c++) {
              var o = !i.has(e[c].id());
              o && n.push(e[c])
            }
            return this.spawn(n)
          },
          merge: function(e) {
            var a = this._private,
              t = a.cy;
            if (!e) return this;
            if (e && v(e)) {
              var n = e;
              e = t.mutableElements().filter(n)
            }
            for (var r = a.map, i = 0; i < e.length; i++) {
              var c = e[i],
                o = c._private.data.id;
              if (!r.has(o)) {
                var s = this.length++;
                this[s] = c, r.set(o, {
                  ele: c,
                  index: s
                })
              } else {
                var l = r.get(o).index;
                this[l] = c, r.set(o, {
                  ele: c,
                  index: l
                })
              }
            }
            return this
          },
          unmergeAt: function(e) {
            var a = this[e].id(),
              t = this._private.map;
            this[e] = void 0, t.delete(a);
            var n = e === this.length - 1;
            if (this.length > 1 && !n) {
              var r = this.length - 1,
                i = this[r],
                c = i._private.data.id;
              this[r] = void 0, this[e] = i, t.set(c, {
                ele: i,
                index: e
              })
            }
            return this.length--, this
          },
          unmergeOne: function(e) {
            e = e[0];
            var a = this._private,
              t = e._private.data.id,
              n = a.map.get(t);
            if (!n) return this;
            var r = n.index;
            return this.unmergeAt(r), this
          },
          unmerge: function(e) {
            var a = this._private.cy;
            if (!e) return this;
            if (e && v(e)) {
              var t = e;
              e = a.mutableElements().filter(t)
            }
            for (var n = 0; n < e.length; n++) this.unmergeOne(e[n]);
            return this
          },
          unmergeBy: function(e) {
            for (var a = this.length - 1; a >= 0; a--) {
              e(this[a]) && this.unmergeAt(a)
            }
            return this
          },
          map: function(e, a) {
            for (var t = [], n = 0; n < this.length; n++) {
              var r = this[n],
                i = a ? e.apply(a, [r, n, this]) : e(r, n, this);
              t.push(i)
            }
            return t
          },
          reduce: function(e, a) {
            for (var t = a, n = 0; n < this.length; n++) t = e(t, this[n], n, this);
            return t
          },
          max: function(e, a) {
            for (var t, n = -1 / 0, r = 0; r < this.length; r++) {
              var i = this[r],
                c = a ? e.apply(a, [i, r, this]) : e(i, r, this);
              c > n && (n = c, t = i)
            }
            return {
              value: n,
              ele: t
            }
          },
          min: function(e, a) {
            for (var t, n = 1 / 0, r = 0; r < this.length; r++) {
              var i = this[r],
                c = a ? e.apply(a, [i, r, this]) : e(i, r, this);
              c < n && (n = c, t = i)
            }
            return {
              value: n,
              ele: t
            }
          }
        },
        xr = Dr;
      xr.u = xr["|"] = xr["+"] = xr.union = xr.or = xr.add, xr["\\"] = xr["!"] = xr["-"] = xr.difference = xr.relativeComplement = xr.subtract = xr.not, xr.n = xr["&"] = xr["."] = xr.and = xr.intersection = xr.intersect, xr["^"] = xr["(+)"] = xr["(-)"] = xr.symmetricDifference = xr.symdiff = xr.xor, xr.fnFilter = xr.filterFn = xr.stdFilter = xr.filter, xr.complement = xr.abscomp = xr.absoluteComplement;
      var Ir = function(e, a) {
          var t = e.cy().hasCompoundNodes();

          function n(e) {
            var a = e.pstyle("z-compound-depth");
            return "auto" === a.value ? t ? e.zDepth() : 0 : "bottom" === a.value ? -1 : "top" === a.value ? re : 0
          }
          var r = n(e) - n(a);
          if (0 !== r) return r;

          function i(e) {
            return "auto" === e.pstyle("z-index-compare").value && e.isNode() ? 1 : 0
          }
          var c = i(e) - i(a);
          if (0 !== c) return c;
          var o = e.pstyle("z-index").value - a.pstyle("z-index").value;
          return 0 !== o ? o : e.poolIndex() - a.poolIndex()
        },
        Tr = {
          forEach: function(e, a) {
            if (_(e))
              for (var t = this.length, n = 0; n < t; n++) {
                var r = this[n];
                if (!1 === (a ? e.apply(a, [r, n, this]) : e(r, n, this))) break
              }
            return this
          },
          toArray: function() {
            for (var e = [], a = 0; a < this.length; a++) e.push(this[a]);
            return e
          },
          slice: function(e, a) {
            var t = [],
              n = this.length;
            null == a && (a = n), null == e && (e = 0), e < 0 && (e = n + e), a < 0 && (a = n + a);
            for (var r = e; r >= 0 && r < a && r < n; r++) t.push(this[r]);
            return this.spawn(t)
          },
          size: function() {
            return this.length
          },
          eq: function(e) {
            return this[e] || this.spawn()
          },
          first: function() {
            return this[0] || this.spawn()
          },
          last: function() {
            return this[this.length - 1] || this.spawn()
          },
          empty: function() {
            return 0 === this.length
          },
          nonempty: function() {
            return !this.empty()
          },
          sort: function(e) {
            if (!_(e)) return this;
            var a = this.toArray().sort(e);
            return this.spawn(a)
          },
          sortByZIndex: function() {
            return this.sort(Ir)
          },
          zDepth: function() {
            var e = this[0];
            if (e) {
              var a = e._private;
              if ("nodes" === a.group) {
                var t = a.data.parent ? e.parents().size() : 0;
                return e.isParent() ? t : re - 1
              }
              var n = a.source,
                r = a.target,
                i = n.zDepth(),
                c = r.zDepth();
              return Math.max(i, c, 0)
            }
          }
        };
      Tr.each = Tr.forEach;
      var Ur = ye({
          nodeDimensionsIncludeLabels: !1
        }),
        Pr = {
          layoutDimensions: function(e) {
            var a;
            if (e = Ur(e), this.takesUpSpace())
              if (e.nodeDimensionsIncludeLabels) {
                var t = this.boundingBox();
                a = {
                  w: t.w,
                  h: t.h
                }
              } else a = {
                w: this.outerWidth(),
                h: this.outerHeight()
              };
            else a = {
              w: 0,
              h: 0
            };
            return 0 !== a.w && 0 !== a.h || (a.w = a.h = 1), a
          },
          layoutPositions: function(e, a, t) {
            var n = this.nodes(),
              r = this.cy(),
              i = a.eles,
              c = function(e) {
                return e.id()
              },
              o = M(t, c);
            e.emit({
              type: "layoutstart",
              layout: e
            }), e.animations = [];
            var s = a.spacingFactor && 1 !== a.spacingFactor,
              l = function() {
                if (!s) return null;
                for (var e = $e(), a = 0; a < n.length; a++) {
                  var t = n[a],
                    r = o(t, a);
                  ea(e, r.x, r.y)
                }
                return e
              }(),
              d = M((function(e, t) {
                var n = o(e, t);
                s && (n = function(e, a, t) {
                  var n = a.x1 + a.w / 2,
                    r = a.y1 + a.h / 2;
                  return {
                    x: n + (t.x - n) * e,
                    y: r + (t.y - r) * e
                  }
                }(Math.abs(a.spacingFactor), l, n));
                return null != a.transform && (n = a.transform(e, n)), n
              }), c);
            if (a.animate) {
              for (var u = 0; u < n.length; u++) {
                var h = n[u],
                  m = d(h, u);
                if (null == a.animateFilter || a.animateFilter(h, u)) {
                  var g = h.animation({
                    position: m,
                    duration: a.animationDuration,
                    easing: a.animationEasing
                  });
                  e.animations.push(g)
                } else h.position(m)
              }
              if (a.fit) {
                var p = r.animation({
                  fit: {
                    boundingBox: i.boundingBoxAt(d),
                    padding: a.padding
                  },
                  duration: a.animationDuration,
                  easing: a.animationEasing
                });
                e.animations.push(p)
              } else if (void 0 !== a.zoom && void 0 !== a.pan) {
                var y = r.animation({
                  zoom: a.zoom,
                  pan: a.pan,
                  duration: a.animationDuration,
                  easing: a.animationEasing
                });
                e.animations.push(y)
              }
              e.animations.forEach((function(e) {
                return e.play()
              })), e.one("layoutready", a.ready), e.emit({
                type: "layoutready",
                layout: e
              }), Et.all(e.animations.map((function(e) {
                return e.promise()
              }))).then((function() {
                e.one("layoutstop", a.stop), e.emit({
                  type: "layoutstop",
                  layout: e
                })
              }))
            } else n.positions(d), a.fit && r.fit(a.eles, a.padding), null != a.zoom && r.zoom(a.zoom), a.pan && r.pan(a.pan), e.one("layoutready", a.ready), e.emit({
              type: "layoutready",
              layout: e
            }), e.one("layoutstop", a.stop), e.emit({
              type: "layoutstop",
              layout: e
            });
            return this
          },
          layout: function(e) {
            return this.cy().makeLayout(F({}, e, {
              eles: this
            }))
          }
        };

      function Mr(e, a, t) {
        var n, r = t._private,
          i = r.styleCache = r.styleCache || [];
        return null != (n = i[e]) ? n : n = i[e] = a(t)
      }

      function kr(e, a) {
        return e = J(e),
          function(t) {
            return Mr(e, a, t)
          }
      }

      function Ar(e, a) {
        e = J(e);
        var t = function(e) {
          return a.call(e)
        };
        return function() {
          var a = this[0];
          if (a) return Mr(e, t, a)
        }
      }
      Pr.createLayout = Pr.makeLayout = Pr.layout;
      var Rr = {
        recalculateRenderedStyle: function(e) {
          var a = this.cy(),
            t = a.renderer(),
            n = a.styleEnabled();
          return t && n && t.recalculateRenderedStyle(this, e), this
        },
        dirtyStyleCache: function() {
          var e, a = this.cy(),
            t = function(e) {
              return e._private.styleCache = null
            };
          a.hasCompoundNodes() ? ((e = this.spawnSelf().merge(this.descendants()).merge(this.parents())).merge(e.connectedEdges()), e.forEach(t)) : this.forEach((function(e) {
            t(e), e.connectedEdges().forEach(t)
          }));
          return this
        },
        updateStyle: function(e) {
          var a = this._private.cy;
          if (!a.styleEnabled()) return this;
          if (a.batching()) return a._private.batchStyleEles.merge(this), this;
          var t = a.hasCompoundNodes(),
            n = a.style(),
            r = this;
          e = !(!e && void 0 !== e), t && (r = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
          var i = n.apply(r);
          return e ? i.emitAndNotify("style") : i.emit("style"), this
        },
        parsedStyle: function(e) {
          var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            t = this[0],
            n = t.cy();
          if (n.styleEnabled() && t) {
            var r = t._private.style[e];
            return null != r ? r : a ? n.style().getDefaultProperty(e) : null
          }
        },
        numericStyle: function(e) {
          var a = this[0];
          if (a.cy().styleEnabled() && a) {
            var t = a.pstyle(e);
            return void 0 !== t.pfValue ? t.pfValue : t.value
          }
        },
        numericStyleUnits: function(e) {
          var a = this[0];
          if (a.cy().styleEnabled()) return a ? a.pstyle(e).units : void 0
        },
        renderedStyle: function(e) {
          var a = this.cy();
          if (!a.styleEnabled()) return this;
          var t = this[0];
          return t ? a.style().getRenderedStyle(t, e) : void 0
        },
        style: function(e, a) {
          var t = this.cy();
          if (!t.styleEnabled()) return this;
          var n = t.style();
          if (b(e)) {
            var r = e;
            n.applyBypass(this, r, !1), this.emitAndNotify("style")
          } else if (v(e)) {
            if (void 0 === a) {
              var i = this[0];
              return i ? n.getStylePropertyValue(i, e) : void 0
            }
            n.applyBypass(this, e, a, !1), this.emitAndNotify("style")
          } else if (void 0 === e) {
            var c = this[0];
            return c ? n.getRawStyle(c) : void 0
          }
          return this
        },
        removeStyle: function(e) {
          var a = this.cy();
          if (!a.styleEnabled()) return this;
          var t = a.style();
          if (void 0 === e)
            for (var n = 0; n < this.length; n++) {
              var r = this[n];
              t.removeAllBypasses(r, !1)
            } else {
              e = e.split(/\s+/);
              for (var i = 0; i < this.length; i++) {
                var c = this[i];
                t.removeBypasses(c, e, !1)
              }
            }
          return this.emitAndNotify("style"), this
        },
        show: function() {
          return this.css("display", "element"), this
        },
        hide: function() {
          return this.css("display", "none"), this
        },
        effectiveOpacity: function() {
          var e = this.cy();
          if (!e.styleEnabled()) return 1;
          var a = e.hasCompoundNodes(),
            t = this[0];
          if (t) {
            var n = t._private,
              r = t.pstyle("opacity").value;
            if (!a) return r;
            var i = n.data.parent ? t.parents() : null;
            if (i)
              for (var c = 0; c < i.length; c++) {
                r *= i[c].pstyle("opacity").value
              }
            return r
          }
        },
        transparent: function() {
          if (!this.cy().styleEnabled()) return !1;
          var e = this[0],
            a = e.cy().hasCompoundNodes();
          return e ? a ? 0 === e.effectiveOpacity() : 0 === e.pstyle("opacity").value : void 0
        },
        backgrounding: function() {
          return !!this.cy().styleEnabled() && !!this[0]._private.backgrounding
        }
      };

      function Er(e, a) {
        var t = e._private.data.parent ? e.parents() : null;
        if (t)
          for (var n = 0; n < t.length; n++) {
            if (!a(t[n])) return !1
          }
        return !0
      }

      function Gr(e) {
        var a = e.ok,
          t = e.edgeOkViaNode || e.ok,
          n = e.parentOk || e.ok;
        return function() {
          var e = this.cy();
          if (!e.styleEnabled()) return !0;
          var r = this[0],
            i = e.hasCompoundNodes();
          if (r) {
            var c = r._private;
            if (!a(r)) return !1;
            if (r.isNode()) return !i || Er(r, n);
            var o = c.source,
              s = c.target;
            return t(o) && (!i || Er(o, t)) && (o === s || t(s) && (!i || Er(s, t)))
          }
        }
      }
      var Vr = kr("eleTakesUpSpace", (function(e) {
        return "element" === e.pstyle("display").value && 0 !== e.width() && (!e.isNode() || 0 !== e.height())
      }));
      Rr.takesUpSpace = Ar("takesUpSpace", Gr({
        ok: Vr
      }));
      var Fr = kr("eleInteractive", (function(e) {
          return "yes" === e.pstyle("events").value && "visible" === e.pstyle("visibility").value && Vr(e)
        })),
        Lr = kr("parentInteractive", (function(e) {
          return "visible" === e.pstyle("visibility").value && Vr(e)
        }));
      Rr.interactive = Ar("interactive", Gr({
        ok: Fr,
        parentOk: Lr,
        edgeOkViaNode: Vr
      })), Rr.noninteractive = function() {
        var e = this[0];
        if (e) return !e.interactive()
      };
      var zr = kr("eleVisible", (function(e) {
          return "visible" === e.pstyle("visibility").value && 0 !== e.pstyle("opacity").pfValue && Vr(e)
        })),
        Wr = Vr;
      Rr.visible = Ar("visible", Gr({
        ok: zr,
        edgeOkViaNode: Wr
      })), Rr.hidden = function() {
        var e = this[0];
        if (e) return !e.visible()
      }, Rr.isBundledBezier = Ar("isBundledBezier", (function() {
        return !!this.cy().styleEnabled() && (!this.removed() && "bezier" === this.pstyle("curve-style").value && this.takesUpSpace())
      })), Rr.bypass = Rr.css = Rr.style, Rr.renderedCss = Rr.renderedStyle, Rr.removeBypass = Rr.removeCss = Rr.removeStyle, Rr.pstyle = Rr.parsedStyle;
      var jr = {};

      function Or(e) {
        return function() {
          var a = arguments,
            t = [];
          if (2 === a.length) {
            var n = a[0],
              r = a[1];
            this.on(e.event, n, r)
          } else if (1 === a.length && _(a[0])) {
            var i = a[0];
            this.on(e.event, i)
          } else if (0 === a.length || 1 === a.length && S(a[0])) {
            for (var c = 1 === a.length ? a[0] : null, o = 0; o < this.length; o++) {
              var s = this[o],
                l = !e.ableField || s._private[e.ableField],
                d = s._private[e.field] != e.value;
              if (e.overrideAble) {
                var u = e.overrideAble(s);
                if (void 0 !== u && (l = u, !u)) return this
              }
              l && (s._private[e.field] = e.value, d && t.push(s))
            }
            var h = this.spawn(t);
            h.updateStyle(), h.emit(e.event), c && h.emit(c)
          }
          return this
        }
      }

      function Hr(e) {
        jr[e.field] = function() {
          var a = this[0];
          if (a) {
            if (e.overrideField) {
              var t = e.overrideField(a);
              if (void 0 !== t) return t
            }
            return a._private[e.field]
          }
        }, jr[e.on] = Or({
          event: e.on,
          field: e.field,
          ableField: e.ableField,
          overrideAble: e.overrideAble,
          value: !0
        }), jr[e.off] = Or({
          event: e.off,
          field: e.field,
          ableField: e.ableField,
          overrideAble: e.overrideAble,
          value: !1
        })
      }
      Hr({
        field: "locked",
        overrideField: function(e) {
          return !!e.cy().autolock() || void 0
        },
        on: "lock",
        off: "unlock"
      }), Hr({
        field: "grabbable",
        overrideField: function(e) {
          return !e.cy().autoungrabify() && !e.pannable() && void 0
        },
        on: "grabify",
        off: "ungrabify"
      }), Hr({
        field: "selected",
        ableField: "selectable",
        overrideAble: function(e) {
          return !e.cy().autounselectify() && void 0
        },
        on: "select",
        off: "unselect"
      }), Hr({
        field: "selectable",
        overrideField: function(e) {
          return !e.cy().autounselectify() && void 0
        },
        on: "selectify",
        off: "unselectify"
      }), jr.deselect = jr.unselect, jr.grabbed = function() {
        var e = this[0];
        if (e) return e._private.grabbed
      }, Hr({
        field: "active",
        on: "activate",
        off: "unactivate"
      }), Hr({
        field: "pannable",
        on: "panify",
        off: "unpanify"
      }), jr.inactive = function() {
        var e = this[0];
        if (e) return !e._private.active
      };
      var Qr = {},
        qr = function(e) {
          return function(a) {
            for (var t = [], n = 0; n < this.length; n++) {
              var r = this[n];
              if (r.isNode()) {
                for (var i = !1, c = r.connectedEdges(), o = 0; o < c.length; o++) {
                  var s = c[o],
                    l = s.source(),
                    d = s.target();
                  if (e.noIncomingEdges && d === r && l !== r || e.noOutgoingEdges && l === r && d !== r) {
                    i = !0;
                    break
                  }
                }
                i || t.push(r)
              }
            }
            return this.spawn(t, {
              unique: !0
            }).filter(a)
          }
        },
        Zr = function(e) {
          return function(a) {
            for (var t = [], n = 0; n < this.length; n++) {
              var r = this[n];
              if (r.isNode())
                for (var i = r.connectedEdges(), c = 0; c < i.length; c++) {
                  var o = i[c],
                    s = o.source(),
                    l = o.target();
                  e.outgoing && s === r ? (t.push(o), t.push(l)) : e.incoming && l === r && (t.push(o), t.push(s))
                }
            }
            return this.spawn(t, {
              unique: !0
            }).filter(a)
          }
        },
        Kr = function(e) {
          return function(a) {
            for (var t = this, n = [], r = {};;) {
              var i = e.outgoing ? t.outgoers() : t.incomers();
              if (0 === i.length) break;
              for (var c = !1, o = 0; o < i.length; o++) {
                var s = i[o],
                  l = s.id();
                r[l] || (r[l] = !0, n.push(s), c = !0)
              }
              if (!c) break;
              t = i
            }
            return this.spawn(n, {
              unique: !0
            }).filter(a)
          }
        };

      function Yr(e) {
        return function(a) {
          for (var t = [], n = 0; n < this.length; n++) {
            var r = this[n]._private[e.attr];
            r && t.push(r)
          }
          return this.spawn(t, {
            unique: !0
          }).filter(a)
        }
      }

      function Xr(e) {
        return function(a) {
          var t = [],
            n = this._private.cy,
            r = e || {};
          v(a) && (a = n.$(a));
          for (var i = 0; i < a.length; i++)
            for (var c = a[i]._private.edges, o = 0; o < c.length; o++) {
              var s = c[o],
                l = s._private.data,
                d = this.hasElementWithId(l.source) && a.hasElementWithId(l.target),
                u = a.hasElementWithId(l.source) && this.hasElementWithId(l.target);
              if (d || u) {
                if (r.thisIsSrc || r.thisIsTgt) {
                  if (r.thisIsSrc && !d) continue;
                  if (r.thisIsTgt && !u) continue
                }
                t.push(s)
              }
            }
          return this.spawn(t, {
            unique: !0
          })
        }
      }

      function Jr(e) {
        return e = F({}, {
            codirected: !1
          }, e),
          function(a) {
            for (var t = [], n = this.edges(), r = e, i = 0; i < n.length; i++)
              for (var c = n[i]._private, o = c.source, s = o._private.data.id, l = c.data.target, d = o._private.edges, u = 0; u < d.length; u++) {
                var h = d[u],
                  m = h._private.data,
                  g = m.target,
                  p = m.source,
                  y = g === l && p === s,
                  f = s === g && l === p;
                (r.codirected && y || !r.codirected && (y || f)) && t.push(h)
              }
            return this.spawn(t, {
              unique: !0
            }).filter(a)
          }
      }
      Qr.clearTraversalCache = function() {
        for (var e = 0; e < this.length; e++) this[e]._private.traversalCache = null
      }, F(Qr, {
        roots: qr({
          noIncomingEdges: !0
        }),
        leaves: qr({
          noOutgoingEdges: !0
        }),
        outgoers: In(Zr({
          outgoing: !0
        }), "outgoers"),
        successors: Kr({
          outgoing: !0
        }),
        incomers: In(Zr({
          incoming: !0
        }), "incomers"),
        predecessors: Kr({
          incoming: !0
        })
      }), F(Qr, {
        neighborhood: In((function(e) {
          for (var a = [], t = this.nodes(), n = 0; n < t.length; n++)
            for (var r = t[n], i = r.connectedEdges(), c = 0; c < i.length; c++) {
              var o = i[c],
                s = o.source(),
                l = o.target(),
                d = r === s ? l : s;
              d.length > 0 && a.push(d[0]), a.push(o[0])
            }
          return this.spawn(a, {
            unique: !0
          }).filter(e)
        }), "neighborhood"),
        closedNeighborhood: function(e) {
          return this.neighborhood().add(this).filter(e)
        },
        openNeighborhood: function(e) {
          return this.neighborhood(e)
        }
      }), Qr.neighbourhood = Qr.neighborhood, Qr.closedNeighbourhood = Qr.closedNeighborhood, Qr.openNeighbourhood = Qr.openNeighborhood, F(Qr, {
        source: In((function(e) {
          var a, t = this[0];
          return t && (a = t._private.source || t.cy().collection()), a && e ? a.filter(e) : a
        }), "source"),
        target: In((function(e) {
          var a, t = this[0];
          return t && (a = t._private.target || t.cy().collection()), a && e ? a.filter(e) : a
        }), "target"),
        sources: Yr({
          attr: "source"
        }),
        targets: Yr({
          attr: "target"
        })
      }), F(Qr, {
        edgesWith: In(Xr(), "edgesWith"),
        edgesTo: In(Xr({
          thisIsSrc: !0
        }), "edgesTo")
      }), F(Qr, {
        connectedEdges: In((function(e) {
          for (var a = [], t = 0; t < this.length; t++) {
            var n = this[t];
            if (n.isNode())
              for (var r = n._private.edges, i = 0; i < r.length; i++) {
                var c = r[i];
                a.push(c)
              }
          }
          return this.spawn(a, {
            unique: !0
          }).filter(e)
        }), "connectedEdges"),
        connectedNodes: In((function(e) {
          for (var a = [], t = 0; t < this.length; t++) {
            var n = this[t];
            n.isEdge() && (a.push(n.source()[0]), a.push(n.target()[0]))
          }
          return this.spawn(a, {
            unique: !0
          }).filter(e)
        }), "connectedNodes"),
        parallelEdges: In(Jr(), "parallelEdges"),
        codirectedEdges: In(Jr({
          codirected: !0
        }), "codirectedEdges")
      }), F(Qr, {
        components: function(e) {
          var a = this,
            t = a.cy(),
            n = t.collection(),
            r = null == e ? a.nodes() : e.nodes(),
            i = [];
          null != e && r.empty() && (r = e.sources());
          var c = function(e, a) {
            n.merge(e), r.unmerge(e), a.merge(e)
          };
          if (r.empty()) return a.spawn();
          var o = function() {
            var e = t.collection();
            i.push(e);
            var n = r[0];
            c(n, e), a.bfs({
              directed: !1,
              roots: n,
              visit: function(a) {
                return c(a, e)
              }
            }), e.forEach((function(t) {
              t.connectedEdges().forEach((function(t) {
                a.has(t) && e.has(t.source()) && e.has(t.target()) && e.merge(t)
              }))
            }))
          };
          do {
            o()
          } while (r.length > 0);
          return i
        },
        component: function() {
          var e = this[0];
          return e.cy().mutableElements().components(e)[0]
        }
      }), Qr.componentsOf = Qr.components;
      var $r = function(e, a, t) {
          for (var n = null != t ? t : me(); e.hasElementWithId(n);) n = me();
          return n
        },
        ei = function(e, a, t) {
          if (void 0 !== e && x(e)) {
            var n = new be,
              r = !1;
            if (a) {
              if (a.length > 0 && b(a[0]) && !B(a[0])) {
                r = !0;
                for (var i = [], c = new Ce, o = 0, s = a.length; o < s; o++) {
                  var l = a[o];
                  null == l.data && (l.data = {});
                  var d = l.data;
                  if (null == d.id) d.id = $r(e, l);
                  else if (e.hasElementWithId(d.id) || c.has(d.id)) continue;
                  var u = new Ne(e, l, !1);
                  i.push(u), c.add(d.id)
                }
                a = i
              }
            } else a = [];
            this.length = 0;
            for (var h = 0, m = a.length; h < m; h++) {
              var g = a[h][0];
              if (null != g) {
                var p = g._private.data.id;
                (null == t || t.unique && !n.has(p)) && (n.set(p, {
                  index: this.length,
                  ele: g
                }), this[this.length] = g, this.length++)
              }
            }
            this._private = {
              cy: e,
              map: n
            }, r && this.restore()
          } else le("A collection must have a reference to the core")
        },
        ai = Ne.prototype = ei.prototype;
      ai.instanceString = function() {
        return "collection"
      }, ai.spawn = function(e, a, t) {
        return x(e) || (t = a, a = e, e = this.cy()), new ei(e, a, t)
      }, ai.spawnSelf = function() {
        return this.spawn(this)
      }, ai.cy = function() {
        return this._private.cy
      }, ai.renderer = function() {
        return this._private.cy.renderer()
      }, ai.element = function() {
        return this[0]
      }, ai.collection = function() {
        return D(this) ? this : new ei(this._private.cy, [this])
      }, ai.unique = function() {
        return new ei(this._private.cy, this, {
          unique: !0
        })
      }, ai.hasElementWithId = function(e) {
        return e = "" + e, this._private.map.has(e)
      }, ai.getElementById = function(e) {
        e = "" + e;
        var a = this._private.cy,
          t = this._private.map.get(e);
        return t ? t.ele : new ei(a)
      }, ai.$id = ai.getElementById, ai.poolIndex = function() {
        var e = this._private.cy._private.elements,
          a = this[0]._private.data.id;
        return e._private.map.get(a).index
      }, ai.indexOf = function(e) {
        var a = e[0]._private.data.id;
        return this._private.map.get(a).index
      }, ai.indexOfId = function(e) {
        return e = "" + e, this._private.map.get(e).index
      }, ai.json = function(e) {
        var a = this.element(),
          t = this.cy();
        if (null == a && e) return this;
        if (null != a) {
          var n = a._private;
          if (b(e)) {
            if (t.startBatch(), e.data) {
              a.data(e.data);
              var r = n.data;
              if (a.isEdge()) {
                var i = !1,
                  c = {},
                  o = e.data.source,
                  s = e.data.target;
                null != o && o != r.source && (c.source = "" + o, i = !0), null != s && s != r.target && (c.target = "" + s, i = !0), i && (a = a.move(c))
              } else {
                var l = e.data.parent;
                null == l && null == r.parent || l == r.parent || (void 0 === l && (l = null), null != l && (l = "" + l), a = a.move({
                  parent: l
                }))
              }
            }
            e.position && a.position(e.position);
            var d = function(t, r, i) {
              var c = e[t];
              null != c && c !== n[t] && (c ? a[r]() : a[i]())
            };
            return d("removed", "remove", "restore"), d("selected", "select", "unselect"), d("selectable", "selectify", "unselectify"), d("locked", "lock", "unlock"), d("grabbable", "grabify", "ungrabify"), d("pannable", "panify", "unpanify"), null != e.classes && a.classes(e.classes), t.endBatch(), this
          }
          if (void 0 === e) {
            var u = {
              data: he(n.data),
              position: he(n.position),
              group: n.group,
              removed: n.removed,
              selected: n.selected,
              selectable: n.selectable,
              locked: n.locked,
              grabbable: n.grabbable,
              pannable: n.pannable,
              classes: null
            };
            u.classes = "";
            var h = 0;
            return n.classes.forEach((function(e) {
              return u.classes += 0 == h++ ? e : " " + e
            })), u
          }
        }
      }, ai.jsons = function() {
        for (var e = [], a = 0; a < this.length; a++) {
          var t = this[a].json();
          e.push(t)
        }
        return e
      }, ai.clone = function() {
        for (var e = this.cy(), a = [], t = 0; t < this.length; t++) {
          var n = this[t].json(),
            r = new Ne(e, n, !1);
          a.push(r)
        }
        return new ei(e, a)
      }, ai.copy = ai.clone, ai.restore = function() {
        for (var e, a, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = this, i = r.cy(), c = i._private, o = [], s = [], l = 0, d = r.length; l < d; l++) {
          var u = r[l];
          n && !u.removed() || (u.isNode() ? o.push(u) : s.push(u))
        }
        e = o.concat(s);
        var h = function() {
          e.splice(a, 1), a--
        };
        for (a = 0; a < e.length; a++) {
          var m = e[a],
            g = m._private,
            p = g.data;
          if (m.clearTraversalCache(), n || g.removed)
            if (void 0 === p.id) p.id = $r(i, m);
            else if (w(p.id)) p.id = "" + p.id;
          else {
            if (T(p.id) || !v(p.id)) {
              le("Can not create element with invalid string ID `" + p.id + "`"), h();
              continue
            }
            if (i.hasElementWithId(p.id)) {
              le("Can not create second element with ID `" + p.id + "`"), h();
              continue
            }
          } else;
          var y = p.id;
          if (m.isNode()) {
            var f = g.position;
            null == f.x && (f.x = 0), null == f.y && (f.y = 0)
          }
          if (m.isEdge()) {
            for (var _ = m, S = ["source", "target"], b = S.length, C = !1, N = 0; N < b; N++) {
              var B = S[N],
                D = p[B];
              w(D) && (D = p[B] = "" + p[B]), null == D || "" === D ? (le("Can not create edge `" + y + "` with unspecified " + B), C = !0) : i.hasElementWithId(D) || (le("Can not create edge `" + y + "` with nonexistant " + B + " `" + D + "`"), C = !0)
            }
            if (C) {
              h();
              continue
            }
            var x = i.getElementById(p.source),
              I = i.getElementById(p.target);
            x.same(I) ? x._private.edges.push(_) : (x._private.edges.push(_), I._private.edges.push(_)), _._private.source = x, _._private.target = I
          }
          g.map = new be, g.map.set(y, {
            ele: m,
            index: 0
          }), g.removed = !1, n && i.addToPool(m)
        }
        for (var U = 0; U < o.length; U++) {
          var P = o[U],
            M = P._private.data;
          w(M.parent) && (M.parent = "" + M.parent);
          var k = M.parent,
            A = null != k;
          if (A) {
            var R = i.getElementById(k);
            if (R.empty()) M.parent = void 0;
            else {
              for (var E = !1, G = R; !G.empty();) {
                if (P.same(G)) {
                  E = !0, M.parent = void 0;
                  break
                }
                G = G.parent()
              }
              E || (R[0]._private.children.push(P), P._private.parent = R[0], c.hasCompoundNodes = !0)
            }
          }
        }
        if (e.length > 0) {
          for (var V = new ei(i, e), F = 0; F < V.length; F++) {
            var L = V[F];
            L.isNode() || (L.parallelEdges().clearTraversalCache(), L.source().clearTraversalCache(), L.target().clearTraversalCache())
          }(c.hasCompoundNodes ? i.collection().merge(V).merge(V.connectedNodes()).merge(V.parent()) : V).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? V.emitAndNotify("add") : n && V.emit("add")
        }
        return r
      }, ai.removed = function() {
        var e = this[0];
        return e && e._private.removed
      }, ai.inside = function() {
        var e = this[0];
        return e && !e._private.removed
      }, ai.remove = function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          t = this,
          n = [],
          r = {},
          i = t._private.cy;

        function c(e) {
          for (var a = e._private.edges, t = 0; t < a.length; t++) s(a[t])
        }

        function o(e) {
          for (var a = e._private.children, t = 0; t < a.length; t++) s(a[t])
        }

        function s(e) {
          var t = r[e.id()];
          a && e.removed() || t || (r[e.id()] = !0, e.isNode() ? (n.push(e), c(e), o(e)) : n.unshift(e))
        }
        for (var l = 0, d = t.length; l < d; l++) {
          var u = t[l];
          s(u)
        }

        function h(e, a) {
          var t = e._private.edges;
          fe(t, a), e.clearTraversalCache()
        }

        function m(e) {
          e.clearTraversalCache()
        }
        var g = [];

        function p(e, a) {
          a = a[0];
          var t = (e = e[0])._private.children,
            n = e.id();
          fe(t, a), a._private.parent = null, g.ids[n] || (g.ids[n] = !0, g.push(e))
        }
        g.ids = {}, t.dirtyCompoundBoundsCache(), a && i.removeFromPool(n);
        for (var y = 0; y < n.length; y++) {
          var f = n[y];
          if (f.isEdge()) {
            var v = f.source()[0],
              _ = f.target()[0];
            h(v, f), h(_, f);
            for (var S = f.parallelEdges(), b = 0; b < S.length; b++) {
              var w = S[b];
              m(w), w.isBundledBezier() && w.dirtyBoundingBoxCache()
            }
          } else {
            var C = f.parent();
            0 !== C.length && p(C, f)
          }
          a && (f._private.removed = !0)
        }
        var N = i._private.elements;
        i._private.hasCompoundNodes = !1;
        for (var B = 0; B < N.length; B++) {
          var D = N[B];
          if (D.isParent()) {
            i._private.hasCompoundNodes = !0;
            break
          }
        }
        var x = new ei(this.cy(), n);
        x.size() > 0 && (e ? x.emitAndNotify("remove") : a && x.emit("remove"));
        for (var I = 0; I < g.length; I++) {
          var T = g[I];
          a && T.removed() || T.updateStyle()
        }
        return x
      }, ai.move = function(e) {
        var a = this._private.cy,
          t = this,
          n = function(e) {
            return null == e ? e : "" + e
          };
        if (void 0 !== e.source || void 0 !== e.target) {
          var r = n(e.source),
            i = n(e.target),
            c = null != r && a.hasElementWithId(r),
            o = null != i && a.hasElementWithId(i);
          (c || o) && (a.batch((function() {
            t.remove(!1, !1), t.emitAndNotify("moveout");
            for (var e = 0; e < t.length; e++) {
              var a = t[e],
                n = a._private.data;
              a.isEdge() && (c && (n.source = r), o && (n.target = i))
            }
            t.restore(!1, !1)
          })), t.emitAndNotify("move"))
        } else if (void 0 !== e.parent) {
          var s = n(e.parent);
          if (null === s || a.hasElementWithId(s)) {
            var l = null === s ? void 0 : s;
            a.batch((function() {
              var e = t.remove(!1, !1);
              e.emitAndNotify("moveout");
              for (var a = 0; a < t.length; a++) {
                var n = t[a],
                  r = n._private.data;
                n.isNode() && (r.parent = l)
              }
              e.restore(!1, !1)
            })), t.emitAndNotify("move")
          }
        }
        return this
      }, [Tt, Lt, zt, Bn, Tn, En, Gn, dr, Br, Dr, {
        isNode: function() {
          return "nodes" === this.group()
        },
        isEdge: function() {
          return "edges" === this.group()
        },
        isLoop: function() {
          return this.isEdge() && this.source()[0] === this.target()[0]
        },
        isSimple: function() {
          return this.isEdge() && this.source()[0] !== this.target()[0]
        },
        group: function() {
          var e = this[0];
          if (e) return e._private.group
        }
      }, Tr, Pr, Rr, jr, Qr].forEach((function(e) {
        F(ai, e)
      }));
      var ti = {
        add: function(e) {
          var a, t = this;
          if (N(e)) {
            var n = e;
            if (n._private.cy === t) a = n.restore();
            else {
              for (var r = [], i = 0; i < n.length; i++) {
                var c = n[i];
                r.push(c.json())
              }
              a = new ei(t, r)
            }
          } else if (S(e)) {
            a = new ei(t, e)
          } else if (b(e) && (S(e.nodes) || S(e.edges))) {
            for (var o = e, s = [], l = ["nodes", "edges"], d = 0, u = l.length; d < u; d++) {
              var h = l[d],
                m = o[h];
              if (S(m))
                for (var g = 0, p = m.length; g < p; g++) {
                  var y = F({
                    group: h
                  }, m[g]);
                  s.push(y)
                }
            }
            a = new ei(t, s)
          } else {
            a = new Ne(t, e).collection()
          }
          return a
        },
        remove: function(e) {
          if (N(e));
          else if (v(e)) {
            var a = e;
            e = this.$(a)
          }
          return e.remove()
        }
      };
      /*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
      function ni(e, a, t, n) {
        var r = 4,
          i = .001,
          c = 1e-7,
          o = 10,
          s = 11,
          l = 1 / (s - 1),
          d = "undefined" != typeof Float32Array;
        if (4 !== arguments.length) return !1;
        for (var u = 0; u < 4; ++u)
          if ("number" != typeof arguments[u] || isNaN(arguments[u]) || !isFinite(arguments[u])) return !1;
        e = Math.min(e, 1), t = Math.min(t, 1), e = Math.max(e, 0), t = Math.max(t, 0);
        var h = d ? new Float32Array(s) : new Array(s);

        function m(e, a) {
          return 1 - 3 * a + 3 * e
        }

        function g(e, a) {
          return 3 * a - 6 * e
        }

        function p(e) {
          return 3 * e
        }

        function y(e, a, t) {
          return ((m(a, t) * e + g(a, t)) * e + p(a)) * e
        }

        function f(e, a, t) {
          return 3 * m(a, t) * e * e + 2 * g(a, t) * e + p(a)
        }

        function v(a) {
          for (var n = 0, d = 1, u = s - 1; d !== u && h[d] <= a; ++d) n += l;
          --d;
          var m = n + (a - h[d]) / (h[d + 1] - h[d]) * l,
            g = f(m, e, t);
          return g >= i ? function(a, n) {
            for (var i = 0; i < r; ++i) {
              var c = f(n, e, t);
              if (0 === c) return n;
              n -= (y(n, e, t) - a) / c
            }
            return n
          }(a, m) : 0 === g ? m : function(a, n, r) {
            var i, s, l = 0;
            do {
              (i = y(s = n + (r - n) / 2, e, t) - a) > 0 ? r = s : n = s
            } while (Math.abs(i) > c && ++l < o);
            return s
          }(a, n, n + l)
        }
        var _ = !1;

        function S() {
          _ = !0, e === a && t === n || function() {
            for (var a = 0; a < s; ++a) h[a] = y(a * l, e, t)
          }()
        }
        var b = function(r) {
          return _ || S(), e === a && t === n ? r : 0 === r ? 0 : 1 === r ? 1 : y(v(r), a, n)
        };
        b.getControlPoints = function() {
          return [{
            x: e,
            y: a
          }, {
            x: t,
            y: n
          }]
        };
        var w = "generateBezier(" + [e, a, t, n] + ")";
        return b.toString = function() {
          return w
        }, b
      }
      /*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
      var ri = function() {
          function e(e) {
            return -e.tension * e.x - e.friction * e.v
          }

          function a(a, t, n) {
            var r = {
              x: a.x + n.dx * t,
              v: a.v + n.dv * t,
              tension: a.tension,
              friction: a.friction
            };
            return {
              dx: r.v,
              dv: e(r)
            }
          }

          function t(t, n) {
            var r = {
                dx: t.v,
                dv: e(t)
              },
              i = a(t, .5 * n, r),
              c = a(t, .5 * n, i),
              o = a(t, n, c),
              s = 1 / 6 * (r.dx + 2 * (i.dx + c.dx) + o.dx),
              l = 1 / 6 * (r.dv + 2 * (i.dv + c.dv) + o.dv);
            return t.x = t.x + s * n, t.v = t.v + l * n, t
          }
          return function e(a, n, r) {
            var i, c, o, s = {
                x: -1,
                v: 0,
                tension: null,
                friction: null
              },
              l = [0],
              d = 0;
            for (a = parseFloat(a) || 500, n = parseFloat(n) || 20, r = r || null, s.tension = a, s.friction = n, c = (i = null !== r) ? (d = e(a, n)) / r * .016 : .016; o = t(o || s, c), l.push(1 + o.x), d += 16, Math.abs(o.x) > 1e-4 && Math.abs(o.v) > 1e-4;);
            return i ? function(e) {
              return l[e * (l.length - 1) | 0]
            } : d
          }
        }(),
        ii = function(e, a, t, n) {
          var r = ni(e, a, t, n);
          return function(e, a, t) {
            return e + (a - e) * r(t)
          }
        },
        ci = {
          linear: function(e, a, t) {
            return e + (a - e) * t
          },
          ease: ii(.25, .1, .25, 1),
          "ease-in": ii(.42, 0, 1, 1),
          "ease-out": ii(0, 0, .58, 1),
          "ease-in-out": ii(.42, 0, .58, 1),
          "ease-in-sine": ii(.47, 0, .745, .715),
          "ease-out-sine": ii(.39, .575, .565, 1),
          "ease-in-out-sine": ii(.445, .05, .55, .95),
          "ease-in-quad": ii(.55, .085, .68, .53),
          "ease-out-quad": ii(.25, .46, .45, .94),
          "ease-in-out-quad": ii(.455, .03, .515, .955),
          "ease-in-cubic": ii(.55, .055, .675, .19),
          "ease-out-cubic": ii(.215, .61, .355, 1),
          "ease-in-out-cubic": ii(.645, .045, .355, 1),
          "ease-in-quart": ii(.895, .03, .685, .22),
          "ease-out-quart": ii(.165, .84, .44, 1),
          "ease-in-out-quart": ii(.77, 0, .175, 1),
          "ease-in-quint": ii(.755, .05, .855, .06),
          "ease-out-quint": ii(.23, 1, .32, 1),
          "ease-in-out-quint": ii(.86, 0, .07, 1),
          "ease-in-expo": ii(.95, .05, .795, .035),
          "ease-out-expo": ii(.19, 1, .22, 1),
          "ease-in-out-expo": ii(1, 0, 0, 1),
          "ease-in-circ": ii(.6, .04, .98, .335),
          "ease-out-circ": ii(.075, .82, .165, 1),
          "ease-in-out-circ": ii(.785, .135, .15, .86),
          spring: function(e, a, t) {
            if (0 === t) return ci.linear;
            var n = ri(e, a, t);
            return function(e, a, t) {
              return e + (a - e) * n(t)
            }
          },
          "cubic-bezier": ii
        };

      function oi(e, a, t, n, r) {
        if (1 === n) return t;
        var i = r(a, t, n);
        return null == e ? i : ((e.roundValue || e.color) && (i = Math.round(i)), void 0 !== e.min && (i = Math.max(i, e.min)), void 0 !== e.max && (i = Math.min(i, e.max)), i)
      }

      function si(e, a) {
        return null != e.pfValue || null != e.value ? null == e.pfValue || null != a && "%" === a.type.units ? e.value : e.pfValue : e
      }

      function li(e, a, t, n, r) {
        var i = null != r ? r.type : null;
        t < 0 ? t = 0 : t > 1 && (t = 1);
        var c = si(e, r),
          o = si(a, r);
        if (w(c) && w(o)) return oi(i, c, o, t, n);
        if (S(c) && S(o)) {
          for (var s = [], l = 0; l < o.length; l++) {
            var d = c[l],
              u = o[l];
            if (null != d && null != u) {
              var h = oi(i, d, u, t, n);
              s.push(h)
            } else s.push(u)
          }
          return s
        }
      }

      function di(e, a, t, n) {
        var r = !n,
          i = e._private,
          c = a._private,
          o = c.easing,
          s = c.startTime,
          l = (n ? e : e.cy()).style();
        if (!c.easingImpl)
          if (null == o) c.easingImpl = ci.linear;
          else {
            var d, u, h;
            if (v(o)) d = l.parse("transition-timing-function", o).value;
            else d = o;
            v(d) ? (u = d, h = []) : (u = d[1], h = d.slice(2).map((function(e) {
              return +e
            }))), h.length > 0 ? ("spring" === u && h.push(c.duration), c.easingImpl = ci[u].apply(null, h)) : c.easingImpl = ci[u]
          } var m, g = c.easingImpl;
        if (m = 0 === c.duration ? 1 : (t - s) / c.duration, c.applying && (m = c.progress), m < 0 ? m = 0 : m > 1 && (m = 1), null == c.delay) {
          var p = c.startPosition,
            y = c.position;
          if (y && r && !e.locked()) {
            var f = {};
            ui(p.x, y.x) && (f.x = li(p.x, y.x, m, g)), ui(p.y, y.y) && (f.y = li(p.y, y.y, m, g)), e.position(f)
          }
          var _ = c.startPan,
            S = c.pan,
            b = i.pan,
            w = null != S && n;
          w && (ui(_.x, S.x) && (b.x = li(_.x, S.x, m, g)), ui(_.y, S.y) && (b.y = li(_.y, S.y, m, g)), e.emit("pan"));
          var C = c.startZoom,
            N = c.zoom,
            B = null != N && n;
          B && (ui(C, N) && (i.zoom = Je(i.minZoom, li(C, N, m, g), i.maxZoom)), e.emit("zoom")), (w || B) && e.emit("viewport");
          var D = c.style;
          if (D && D.length > 0 && r) {
            for (var x = 0; x < D.length; x++) {
              var I = D[x],
                T = I.name,
                U = I,
                P = c.startStyle[T],
                M = li(P, U, m, g, l.properties[P.name]);
              l.overrideBypass(e, T, M)
            }
            e.emit("style")
          }
        }
        return c.progress = m, m
      }

      function ui(e, a) {
        return null != e && null != a && (!(!w(e) || !w(a)) || !(!e || !a))
      }

      function hi(e, a, t, n) {
        var r = a._private;
        r.started = !0, r.startTime = t - r.progress * r.duration
      }

      function mi(e, a) {
        var t = a._private.aniEles,
          n = [];

        function r(a, t) {
          var r = a._private,
            i = r.animation.current,
            c = r.animation.queue,
            o = !1;
          if (!t && "none" === a.pstyle("display").value) {
            i = i.splice(0, i.length).concat(c.splice(0, c.length));
            for (var s = 0; s < i.length; s++) i[s].stop()
          }
          if (0 === i.length) {
            var l = c.shift();
            l && i.push(l)
          }
          for (var d = function(e) {
              for (var a = e.length - 1; a >= 0; a--) {
                (0, e[a])()
              }
              e.splice(0, e.length)
            }, u = i.length - 1; u >= 0; u--) {
            var h = i[u],
              m = h._private;
            m.stopped ? (i.splice(u, 1), m.hooked = !1, m.playing = !1, m.started = !1, d(m.frames)) : (m.playing || m.applying) && (m.playing && m.applying && (m.applying = !1), m.started || hi(0, h, e), di(a, h, e, t), m.applying && (m.applying = !1), d(m.frames), null != m.step && m.step(e), h.completed() && (i.splice(u, 1), m.hooked = !1, m.playing = !1, m.started = !1, d(m.completes)), o = !0)
          }
          return t || 0 !== i.length || 0 !== c.length || n.push(a), o
        }
        for (var i = !1, c = 0; c < t.length; c++) {
          var o = r(t[c]);
          i = i || o
        }
        var s = r(a, !0);
        (i || s) && (t.length > 0 ? a.notify("draw", t) : a.notify("draw")), t.unmerge(n), a.emit("step")
      }
      var gi = {
          animate: Ft.animate(),
          animation: Ft.animation(),
          animated: Ft.animated(),
          clearQueue: Ft.clearQueue(),
          delay: Ft.delay(),
          delayAnimation: Ft.delayAnimation(),
          stop: Ft.stop(),
          addToAnimationPool: function(e) {
            this.styleEnabled() && this._private.aniEles.merge(e)
          },
          stopAnimationLoop: function() {
            this._private.animationsRunning = !1
          },
          startAnimationLoop: function() {
            var e = this;
            if (e._private.animationsRunning = !0, e.styleEnabled()) {
              var a = e.renderer();
              a && a.beforeRender ? a.beforeRender((function(a, t) {
                mi(t, e)
              }), a.beforeRenderPriorities.animations) : function a() {
                e._private.animationsRunning && q((function(t) {
                  mi(t, e), a()
                }))
              }()
            }
          }
        },
        pi = {
          qualifierCompare: function(e, a) {
            return null == e || null == a ? null == e && null == a : e.sameText(a)
          },
          eventMatches: function(e, a, t) {
            var n = a.qualifier;
            return null == n || e !== t.target && B(t.target) && n.matches(t.target)
          },
          addEventFields: function(e, a) {
            a.cy = e, a.target = e
          },
          callbackContext: function(e, a, t) {
            return null != a.qualifier ? t.target : e
          }
        },
        yi = function(e) {
          return v(e) ? new Cn(e) : e
        },
        fi = {
          createEmitter: function() {
            var e = this._private;
            return e.emitter || (e.emitter = new vr(pi, this)), this
          },
          emitter: function() {
            return this._private.emitter
          },
          on: function(e, a, t) {
            return this.emitter().on(e, yi(a), t), this
          },
          removeListener: function(e, a, t) {
            return this.emitter().removeListener(e, yi(a), t), this
          },
          removeAllListeners: function() {
            return this.emitter().removeAllListeners(), this
          },
          one: function(e, a, t) {
            return this.emitter().one(e, yi(a), t), this
          },
          once: function(e, a, t) {
            return this.emitter().one(e, yi(a), t), this
          },
          emit: function(e, a) {
            return this.emitter().emit(e, a), this
          },
          emitAndNotify: function(e, a) {
            return this.emit(e), this.notify(e, a), this
          }
        };
      Ft.eventAliasesOn(fi);
      var vi = {
        png: function(e) {
          return e = e || {}, this._private.renderer.png(e)
        },
        jpg: function(e) {
          var a = this._private.renderer;
          return (e = e || {}).bg = e.bg || "#fff", a.jpg(e)
        }
      };
      vi.jpeg = vi.jpg;
      var _i = {
        layout: function(e) {
          if (null != e)
            if (null != e.name) {
              var a = e.name,
                t = this.extension("layout", a);
              if (null != t) {
                var n;
                n = v(e.eles) ? this.$(e.eles) : null != e.eles ? e.eles : this.$();
                var r = new t(F({}, e, {
                  cy: this,
                  eles: n
                }));
                return r
              }
              le("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?")
            } else le("A `name` must be specified to make a layout");
          else le("Layout options must be specified to make a layout")
        }
      };
      _i.createLayout = _i.makeLayout = _i.layout;
      var Si = {
          notify: function(e, a) {
            var t = this._private;
            if (this.batching()) {
              t.batchNotifications = t.batchNotifications || {};
              var n = t.batchNotifications[e] = t.batchNotifications[e] || this.collection();
              null != a && n.merge(a)
            } else if (t.notificationsEnabled) {
              var r = this.renderer();
              !this.destroyed() && r && r.notify(e, a)
            }
          },
          notifications: function(e) {
            var a = this._private;
            return void 0 === e ? a.notificationsEnabled : (a.notificationsEnabled = !!e, this)
          },
          noNotifications: function(e) {
            this.notifications(!1), e(), this.notifications(!0)
          },
          batching: function() {
            return this._private.batchCount > 0
          },
          startBatch: function() {
            var e = this._private;
            return null == e.batchCount && (e.batchCount = 0), 0 === e.batchCount && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this
          },
          endBatch: function() {
            var e = this._private;
            if (0 === e.batchCount) return this;
            if (e.batchCount--, 0 === e.batchCount) {
              e.batchStyleEles.updateStyle();
              var a = this.renderer();
              Object.keys(e.batchNotifications).forEach((function(t) {
                var n = e.batchNotifications[t];
                n.empty() ? a.notify(t) : a.notify(t, n)
              }))
            }
            return this
          },
          batch: function(e) {
            return this.startBatch(), e(), this.endBatch(), this
          },
          batchData: function(e) {
            var a = this;
            return this.batch((function() {
              for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                var r = t[n],
                  i = e[r];
                a.getElementById(r).data(i)
              }
            }))
          }
        },
        bi = ye({
          hideEdgesOnViewport: !1,
          textureOnViewport: !1,
          motionBlur: !1,
          motionBlurOpacity: .05,
          pixelRatio: void 0,
          desktopTapThreshold: 4,
          touchTapThreshold: 8,
          wheelSensitivity: 1,
          debug: !1,
          showFps: !1
        }),
        wi = {
          renderTo: function(e, a, t, n) {
            return this._private.renderer.renderTo(e, a, t, n), this
          },
          renderer: function() {
            return this._private.renderer
          },
          forceRender: function() {
            return this.notify("draw"), this
          },
          resize: function() {
            return this.invalidateSize(), this.emitAndNotify("resize"), this
          },
          initRenderer: function(e) {
            var a = this.extension("renderer", e.name);
            if (null != a) {
              void 0 !== e.wheelSensitivity && ue("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
              var t = bi(e);
              t.cy = this, this._private.renderer = new a(t), this.notify("init")
            } else le("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"))
          },
          destroyRenderer: function() {
            this.notify("destroy");
            var e = this.container();
            if (e)
              for (e._cyreg = null; e.childNodes.length > 0;) e.removeChild(e.childNodes[0]);
            this._private.renderer = null, this.mutableElements().forEach((function(e) {
              var a = e._private;
              a.rscratch = {}, a.rstyle = {}, a.animation.current = [], a.animation.queue = []
            }))
          },
          onRender: function(e) {
            return this.on("render", e)
          },
          offRender: function(e) {
            return this.off("render", e)
          }
        };
      wi.invalidateDimensions = wi.resize;
      var Ci = {
        collection: function(e, a) {
          return v(e) ? this.$(e) : N(e) ? e.collection() : S(e) ? new ei(this, e, a) : new ei(this)
        },
        nodes: function(e) {
          var a = this.$((function(e) {
            return e.isNode()
          }));
          return e ? a.filter(e) : a
        },
        edges: function(e) {
          var a = this.$((function(e) {
            return e.isEdge()
          }));
          return e ? a.filter(e) : a
        },
        $: function(e) {
          var a = this._private.elements;
          return e ? a.filter(e) : a.spawnSelf()
        },
        mutableElements: function() {
          return this._private.elements
        }
      };
      Ci.elements = Ci.filter = Ci.$;
      var Ni = {};
      Ni.apply = function(e) {
        var a = this._private,
          t = a.cy.collection();
        a.newStyle && (a.contextStyles = {}, a.propDiffs = {}, this.cleanElements(e, !0));
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = this.getContextMeta(r);
          if (!i.empty) {
            var c = this.getContextStyle(i),
              o = this.applyContextStyle(i, c, r);
            a.newStyle || this.updateTransitions(r, o.diffProps), this.updateStyleHints(r) && t.merge(r)
          }
        }
        return a.newStyle = !1, t
      }, Ni.getPropertiesDiff = function(e, a) {
        var t = this._private.propDiffs = this._private.propDiffs || {},
          n = e + "-" + a,
          r = t[n];
        if (r) return r;
        for (var i = [], c = {}, o = 0; o < this.length; o++) {
          var s = this[o],
            l = "t" === e[o],
            d = "t" === a[o],
            u = l !== d,
            h = s.mappedProperties.length > 0;
          if (u || d && h) {
            var m = void 0;
            u && h ? m = s.properties : u ? m = s.properties : h && (m = s.mappedProperties);
            for (var g = 0; g < m.length; g++) {
              for (var p = m[g], y = p.name, f = !1, v = o + 1; v < this.length; v++) {
                var _ = this[v];
                if ("t" === a[v] && (f = null != _.properties[p.name])) break
              }
              c[y] || f || (c[y] = !0, i.push(y))
            }
          }
        }
        return t[n] = i, i
      }, Ni.getContextMeta = function(e) {
        var a, t = "",
          n = e._private.styleCxtKey || "";
        this._private.newStyle && (n = "");
        for (var r = 0; r < this.length; r++) {
          var i = this[r];
          t += i.selector && i.selector.matches(e) ? "t" : "f"
        }
        return a = this.getPropertiesDiff(n, t), e._private.styleCxtKey = t, {
          key: t,
          diffPropNames: a,
          empty: 0 === a.length
        }
      }, Ni.getContextStyle = function(e) {
        var a = e.key,
          t = this._private.contextStyles = this._private.contextStyles || {};
        if (t[a]) return t[a];
        for (var n = {
            _private: {
              key: a
            }
          }, r = 0; r < this.length; r++) {
          var i = this[r];
          if ("t" === a[r])
            for (var c = 0; c < i.properties.length; c++) {
              var o = i.properties[c];
              n[o.name] = o
            }
        }
        return t[a] = n, n
      }, Ni.applyContextStyle = function(e, a, t) {
        for (var n = e.diffPropNames, r = {}, i = this.types, c = 0; c < n.length; c++) {
          var o = n[c],
            s = a[o],
            l = t.pstyle(o);
          if (!s) {
            if (!l) continue;
            s = l.bypass ? {
              name: o,
              deleteBypassed: !0
            } : {
              name: o,
              delete: !0
            }
          }
          if (l !== s) {
            if (s.mapped === i.fn && null != l && null != l.mapping && l.mapping.value === s.value) {
              var d = l.mapping;
              if ((d.fnValue = s.value(t)) === d.prevFnValue) continue
            }
            var u = r[o] = {
              prev: l
            };
            this.applyParsedProperty(t, s), u.next = t.pstyle(o), u.next && u.next.bypass && (u.next = u.next.bypassed)
          }
        }
        return {
          diffProps: r
        }
      }, Ni.updateStyleHints = function(e) {
        var a = e._private,
          t = this,
          n = t.propertyGroupNames,
          r = t.propertyGroupKeys,
          i = function(e, a, n) {
            return t.getPropertiesHash(e, a, n)
          },
          c = a.styleKey;
        if (e.removed()) return !1;
        var o = "nodes" === a.group,
          s = e._private.style;
        n = Object.keys(s);
        for (var l = 0; l < r.length; l++) {
          var d = r[l];
          a.styleKeys[d] = 0
        }
        for (var u = function(e, t) {
            return a.styleKeys[t] = Y(e, a.styleKeys[t])
          }, h = function(e, a) {
            for (var t = 0; t < e.length; t++) u(e.charCodeAt(t), a)
          }, m = function(e) {
            return -128 < e && e < 128 && Math.floor(e) !== e ? 2e9 - (1024 * e | 0) : e
          }, g = 0; g < n.length; g++) {
          var p = n[g],
            y = s[p];
          if (null != y) {
            var f = this.properties[p],
              v = f.type,
              _ = f.groupKey,
              S = void 0;
            null != f.hashOverride ? S = f.hashOverride(e, y) : null != y.pfValue && (S = y.pfValue);
            var b = null == f.enums ? y.value : null,
              w = null != S,
              C = w || null != b,
              N = y.units;
            if (v.number && C) {
              var B = w ? S : b;
              if (v.multiple)
                for (var D = 0; D < B.length; D++) u(m(B[D]), _);
              else u(m(B), _);
              w || null == N || h(N, _)
            } else h(y.strValue, _)
          }
        }
        for (var x = 0, I = 0; I < r.length; I++) {
          var T = r[I],
            U = a.styleKeys[T];
          x = Y(U, x)
        }
        a.styleKey = x;
        var P = a.labelDimsKey = a.styleKeys.labelDimensions;
        if (a.labelKey = i(e, ["label"], P), a.labelStyleKey = Y(a.styleKeys.commonLabel, a.labelKey), o || (a.sourceLabelKey = i(e, ["source-label"], P), a.sourceLabelStyleKey = Y(a.styleKeys.commonLabel, a.sourceLabelKey), a.targetLabelKey = i(e, ["target-label"], P), a.targetLabelStyleKey = Y(a.styleKeys.commonLabel, a.targetLabelKey)), o) {
          var M = a.styleKeys,
            k = M.nodeBody,
            A = M.nodeBorder,
            R = M.backgroundImage,
            E = M.compound,
            G = M.pie;
          a.nodeKey = X([A, R, E, G], k), a.hasPie = 0 != G
        }
        return c !== a.styleKey
      }, Ni.clearStyleHints = function(e) {
        var a = e._private;
        a.styleKeys = {}, a.styleKey = null, a.labelKey = null, a.labelStyleKey = null, a.sourceLabelKey = null, a.sourceLabelStyleKey = null, a.targetLabelKey = null, a.targetLabelStyleKey = null, a.nodeKey = null, a.hasPie = null
      }, Ni.applyParsedProperty = function(e, a) {
        var t, n = this,
          r = a,
          i = e._private.style,
          c = n.types,
          o = n.properties[r.name].type,
          s = r.bypass,
          l = i[r.name],
          d = l && l.bypass,
          u = e._private,
          h = function(e) {
            return null == e ? null : null != e.pfValue ? e.pfValue : e.value
          },
          m = function() {
            var a = h(l),
              t = h(r);
            n.checkTriggers(e, r.name, a, t)
          };
        if ("curve-style" === a.name && e.isEdge() && ("bezier" !== a.value && e.isLoop() || "haystack" === a.value && (e.source().isParent() || e.target().isParent())) && (r = a = this.parse(a.name, "bezier", s)), r.delete) return i[r.name] = void 0, m(), !0;
        if (r.deleteBypassed) return l ? !!l.bypass && (l.bypassed = void 0, m(), !0) : (m(), !0);
        if (r.deleteBypass) return l ? !!l.bypass && (i[r.name] = l.bypassed, m(), !0) : (m(), !0);
        var g = function() {
          ue("Do not assign mappings to elements without corresponding data (i.e. ele `" + e.id() + "` has no mapping for property `" + r.name + "` with data field `" + r.field + "`); try a `[" + r.field + "]` selector to limit scope to elements with `" + r.field + "` defined")
        };
        switch (r.mapped) {
          case c.mapData:
            for (var p, y = r.field.split("."), f = u.data, v = 0; v < y.length && f; v++) {
              f = f[y[v]]
            }
            if (null == f) return g(), !1;
            if (!w(f)) return ue("Do not use continuous mappers without specifying numeric data (i.e. `" + r.field + ": " + f + "` for `" + e.id() + "` is non-numeric)"), !1;
            var _ = r.fieldMax - r.fieldMin;
            if ((p = 0 === _ ? 0 : (f - r.fieldMin) / _) < 0 ? p = 0 : p > 1 && (p = 1), o.color) {
              var S = r.valueMin[0],
                b = r.valueMax[0],
                C = r.valueMin[1],
                N = r.valueMax[1],
                B = r.valueMin[2],
                D = r.valueMax[2],
                x = null == r.valueMin[3] ? 1 : r.valueMin[3],
                I = null == r.valueMax[3] ? 1 : r.valueMax[3],
                T = [Math.round(S + (b - S) * p), Math.round(C + (N - C) * p), Math.round(B + (D - B) * p), Math.round(x + (I - x) * p)];
              t = {
                bypass: r.bypass,
                name: r.name,
                value: T,
                strValue: "rgb(" + T[0] + ", " + T[1] + ", " + T[2] + ")"
              }
            } else {
              if (!o.number) return !1;
              var U = r.valueMin + (r.valueMax - r.valueMin) * p;
              t = this.parse(r.name, U, r.bypass, "mapping")
            }
            if (!t) return g(), !1;
            t.mapping = r, r = t;
            break;
          case c.data:
            for (var P = r.field.split("."), M = u.data, k = 0; k < P.length && M; k++) {
              M = M[P[k]]
            }
            if (null != M && (t = this.parse(r.name, M, r.bypass, "mapping")), !t) return g(), !1;
            t.mapping = r, r = t;
            break;
          case c.fn:
            var A = r.value,
              R = null != r.fnValue ? r.fnValue : A(e);
            if (r.prevFnValue = R, null == R) return ue("Custom function mappers may not return null (i.e. `" + r.name + "` for ele `" + e.id() + "` is null)"), !1;
            if (!(t = this.parse(r.name, R, r.bypass, "mapping"))) return ue("Custom function mappers may not return invalid values for the property type (i.e. `" + r.name + "` for ele `" + e.id() + "` is invalid)"), !1;
            t.mapping = he(r), r = t;
            break;
          case void 0:
            break;
          default:
            return !1
        }
        return s ? (r.bypassed = d ? l.bypassed : l, i[r.name] = r) : d ? l.bypassed = r : i[r.name] = r, m(), !0
      }, Ni.cleanElements = function(e, a) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (this.clearStyleHints(n), n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), a)
            for (var r = n._private.style, i = Object.keys(r), c = 0; c < i.length; c++) {
              var o = i[c],
                s = r[o];
              null != s && (s.bypass ? s.bypassed = null : r[o] = null)
            } else n._private.style = {}
        }
      }, Ni.update = function() {
        this._private.cy.mutableElements().updateStyle()
      }, Ni.updateTransitions = function(e, a) {
        var t = this,
          n = e._private,
          r = e.pstyle("transition-property").value,
          i = e.pstyle("transition-duration").pfValue,
          c = e.pstyle("transition-delay").pfValue;
        if (r.length > 0 && i > 0) {
          for (var o = {}, s = !1, l = 0; l < r.length; l++) {
            var d = r[l],
              u = e.pstyle(d),
              h = a[d];
            if (h) {
              var m = h.prev,
                g = null != h.next ? h.next : u,
                p = !1,
                y = void 0;
              m && (w(m.pfValue) && w(g.pfValue) ? (p = g.pfValue - m.pfValue, y = m.pfValue + 1e-6 * p) : w(m.value) && w(g.value) ? (p = g.value - m.value, y = m.value + 1e-6 * p) : S(m.value) && S(g.value) && (p = m.value[0] !== g.value[0] || m.value[1] !== g.value[1] || m.value[2] !== g.value[2], y = m.strValue), p && (o[d] = g.strValue, this.applyBypass(e, d, y), s = !0))
            }
          }
          if (!s) return;
          n.transitioning = !0, new Et((function(a) {
            c > 0 ? e.delayAnimation(c).play().promise().then(a) : a()
          })).then((function() {
            return e.animation({
              style: o,
              duration: i,
              easing: e.pstyle("transition-timing-function").value,
              queue: !1
            }).play().promise()
          })).then((function() {
            t.removeBypasses(e, r), e.emitAndNotify("style"), n.transitioning = !1
          }))
        } else n.transitioning && (this.removeBypasses(e, r), e.emitAndNotify("style"), n.transitioning = !1)
      }, Ni.checkTrigger = function(e, a, t, n, r, i) {
        var c = this.properties[a],
          o = r(c);
        null != o && o(t, n) && i(c)
      }, Ni.checkZOrderTrigger = function(e, a, t, n) {
        var r = this;
        this.checkTrigger(e, a, t, n, (function(e) {
          return e.triggersZOrder
        }), (function() {
          r._private.cy.notify("zorder", e)
        }))
      }, Ni.checkBoundsTrigger = function(e, a, t, n) {
        this.checkTrigger(e, a, t, n, (function(e) {
          return e.triggersBounds
        }), (function(r) {
          e.dirtyCompoundBoundsCache(), e.dirtyBoundingBoxCache(), "bezier" !== e.pstyle("curve-style").value && ("curve-style" !== a || "bezier" !== t && "bezier" !== n) || !r.triggersBoundsOfParallelBeziers || e.parallelEdges().forEach((function(e) {
            e.isBundledBezier() && e.dirtyBoundingBoxCache()
          }))
        }))
      }, Ni.checkTriggers = function(e, a, t, n) {
        e.dirtyStyleCache(), this.checkZOrderTrigger(e, a, t, n), this.checkBoundsTrigger(e, a, t, n)
      };
      var Bi = {
          applyBypass: function(e, a, t, n) {
            var r = [];
            if ("*" === a || "**" === a) {
              if (void 0 !== t)
                for (var i = 0; i < this.properties.length; i++) {
                  var c = this.properties[i].name,
                    o = this.parse(c, t, !0);
                  o && r.push(o)
                }
            } else if (v(a)) {
              var s = this.parse(a, t, !0);
              s && r.push(s)
            } else {
              if (!b(a)) return !1;
              var l = a;
              n = t;
              for (var d = Object.keys(l), u = 0; u < d.length; u++) {
                var h = d[u],
                  m = l[h];
                if (void 0 === m && (m = l[A(h)]), void 0 !== m) {
                  var g = this.parse(h, m, !0);
                  g && r.push(g)
                }
              }
            }
            if (0 === r.length) return !1;
            for (var p = !1, y = 0; y < e.length; y++) {
              for (var f = e[y], _ = {}, S = void 0, w = 0; w < r.length; w++) {
                var C = r[w];
                if (n) {
                  var N = f.pstyle(C.name);
                  S = _[C.name] = {
                    prev: N
                  }
                }
                p = this.applyParsedProperty(f, C) || p, n && (S.next = f.pstyle(C.name))
              }
              p && this.updateStyleHints(f), n && this.updateTransitions(f, _, !0)
            }
            return p
          },
          overrideBypass: function(e, a, t) {
            a = k(a);
            for (var n = 0; n < e.length; n++) {
              var r = e[n],
                i = r._private.style[a],
                c = this.properties[a].type,
                o = c.color,
                s = c.mutiple,
                l = i ? null != i.pfValue ? i.pfValue : i.value : null;
              i && i.bypass ? (i.value = t, null != i.pfValue && (i.pfValue = t), i.strValue = o ? "rgb(" + t.join(",") + ")" : s ? t.join(" ") : "" + t, this.updateStyleHints(r)) : this.applyBypass(r, a, t), this.checkTriggers(r, a, l, t)
            }
          },
          removeAllBypasses: function(e, a) {
            return this.removeBypasses(e, this.propertyNames, a)
          },
          removeBypasses: function(e, a, t) {
            for (var n = 0; n < e.length; n++) {
              for (var r = e[n], i = {}, c = 0; c < a.length; c++) {
                var o = a[c],
                  s = this.properties[o],
                  l = r.pstyle(s.name);
                if (l && l.bypass) {
                  var d = this.parse(o, "", !0),
                    u = i[s.name] = {
                      prev: l
                    };
                  this.applyParsedProperty(r, d), u.next = r.pstyle(s.name)
                }
              }
              this.updateStyleHints(r), t && this.updateTransitions(r, i, !0)
            }
          }
        },
        Di = {
          getEmSizeInPixels: function() {
            var e = this.containerCss("font-size");
            return null != e ? parseFloat(e) : 1
          },
          containerCss: function(e) {
            var a = this._private.cy.container();
            if (u && a && u.getComputedStyle) return u.getComputedStyle(a).getPropertyValue(e)
          }
        },
        xi = {
          getRenderedStyle: function(e, a) {
            return a ? this.getStylePropertyValue(e, a, !0) : this.getRawStyle(e, !0)
          },
          getRawStyle: function(e, a) {
            if (e = e[0]) {
              for (var t = {}, n = 0; n < this.properties.length; n++) {
                var r = this.properties[n],
                  i = this.getStylePropertyValue(e, r.name, a);
                null != i && (t[r.name] = i, t[A(r.name)] = i)
              }
              return t
            }
          },
          getIndexedStyle: function(e, a, t, n) {
            var r = e.pstyle(a)[t][n];
            return null != r ? r : e.cy().style().getDefaultProperty(a)[t][0]
          },
          getStylePropertyValue: function(e, a, t) {
            if (e = e[0]) {
              var n = this.properties[a];
              n.alias && (n = n.pointsTo);
              var r = n.type,
                i = e.pstyle(n.name);
              if (i) {
                var c = i.value,
                  o = i.units,
                  s = i.strValue;
                if (t && r.number && null != c && w(c)) {
                  var l = e.cy().zoom(),
                    d = function(e) {
                      return e * l
                    },
                    u = function(e, a) {
                      return d(e) + a
                    },
                    h = S(c);
                  return (h ? o.every((function(e) {
                    return null != e
                  })) : null != o) ? h ? c.map((function(e, a) {
                    return u(e, o[a])
                  })).join(" ") : u(c, o) : h ? c.map((function(e) {
                    return v(e) ? e : "" + d(e)
                  })).join(" ") : "" + d(c)
                }
                if (null != s) return s
              }
              return null
            }
          },
          getAnimationStartStyle: function(e, a) {
            for (var t = {}, n = 0; n < a.length; n++) {
              var r = a[n].name,
                i = e.pstyle(r);
              void 0 !== i && (i = b(i) ? this.parse(r, i.strValue) : this.parse(r, i)), i && (t[r] = i)
            }
            return t
          },
          getPropsList: function(e) {
            var a = [],
              t = e,
              n = this.properties;
            if (t)
              for (var r = Object.keys(t), i = 0; i < r.length; i++) {
                var c = r[i],
                  o = t[c],
                  s = n[c] || n[k(c)],
                  l = this.parse(s.name, o);
                l && a.push(l)
              }
            return a
          },
          getNonDefaultPropertiesHash: function(e, a, t) {
            var n, r, i, c, o, s, l = t;
            for (o = 0; o < a.length; o++)
              if (n = a[o], null != (r = e.pstyle(n, !1)))
                if (null != r.pfValue) l = Y(c, l);
                else
                  for (i = r.strValue, s = 0; s < i.length; s++) c = i.charCodeAt(s), l = Y(c, l);
            return l
          }
        };
      xi.getPropertiesHash = xi.getNonDefaultPropertiesHash;
      var Ii = {
          appendFromJson: function(e) {
            for (var a = 0; a < e.length; a++) {
              var t = e[a],
                n = t.selector,
                r = t.style || t.css,
                i = Object.keys(r);
              this.selector(n);
              for (var c = 0; c < i.length; c++) {
                var o = i[c],
                  s = r[o];
                this.css(o, s)
              }
            }
            return this
          },
          fromJson: function(e) {
            return this.resetToDefault(), this.appendFromJson(e), this
          },
          json: function() {
            for (var e = [], a = this.defaultLength; a < this.length; a++) {
              for (var t = this[a], n = t.selector, r = t.properties, i = {}, c = 0; c < r.length; c++) {
                var o = r[c];
                i[o.name] = o.strValue
              }
              e.push({
                selector: n ? n.toString() : "core",
                style: i
              })
            }
            return e
          }
        },
        Ti = {
          appendFromString: function(e) {
            var a, t, n, r = "" + e;

            function i() {
              r = r.length > a.length ? r.substr(a.length) : ""
            }

            function c() {
              t = t.length > n.length ? t.substr(n.length) : ""
            }
            for (r = r.replace(/[/][*](\s|.)+?[*][/]/g, "");;) {
              if (r.match(/^\s*$/)) break;
              var o = r.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
              if (!o) {
                ue("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + r);
                break
              }
              a = o[0];
              var s = o[1];
              if ("core" !== s)
                if (new Cn(s).invalid) {
                  ue("Skipping parsing of block: Invalid selector found in string stylesheet: " + s), i();
                  continue
                } var l = o[2],
                d = !1;
              t = l;
              for (var u = [];;) {
                if (t.match(/^\s*$/)) break;
                var h = t.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);
                if (!h) {
                  ue("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + l), d = !0;
                  break
                }
                n = h[0];
                var m = h[1],
                  g = h[2];
                if (this.properties[m]) this.parse(m, g) ? (u.push({
                  name: m,
                  val: g
                }), c()) : (ue("Skipping property: Invalid property definition in: " + n), c());
                else ue("Skipping property: Invalid property name in: " + n), c()
              }
              if (d) {
                i();
                break
              }
              this.selector(s);
              for (var p = 0; p < u.length; p++) {
                var y = u[p];
                this.css(y.name, y.val)
              }
              i()
            }
            return this
          },
          fromString: function(e) {
            return this.resetToDefault(), this.appendFromString(e), this
          }
        },
        Ui = {};
      ! function() {
        var e = G,
          a = function(e) {
            return "^" + e + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$"
          },
          t = function(a) {
            var t = e + "|\\w+|rgb[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)|hsl[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)|\\#[0-9a-fA-F]{3}|\\#[0-9a-fA-F]{6}";
            return "^" + a + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + e + ")\\s*\\,\\s*(" + e + ")\\s*,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\)$"
          },
          n = ["^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$", "^(none)$", "^(.+)$"];
        Ui.types = {
          time: {
            number: !0,
            min: 0,
            units: "s|ms",
            implicitUnits: "ms"
          },
          percent: {
            number: !0,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%"
          },
          percentages: {
            number: !0,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%",
            multiple: !0
          },
          zeroOneNumber: {
            number: !0,
            min: 0,
            max: 1,
            unitless: !0
          },
          zeroOneNumbers: {
            number: !0,
            min: 0,
            max: 1,
            unitless: !0,
            multiple: !0
          },
          nOneOneNumber: {
            number: !0,
            min: -1,
            max: 1,
            unitless: !0
          },
          nonNegativeInt: {
            number: !0,
            min: 0,
            integer: !0,
            unitless: !0
          },
          position: {
            enums: ["parent", "origin"]
          },
          nodeSize: {
            number: !0,
            min: 0,
            enums: ["label"]
          },
          number: {
            number: !0,
            unitless: !0
          },
          numbers: {
            number: !0,
            unitless: !0,
            multiple: !0
          },
          positiveNumber: {
            number: !0,
            unitless: !0,
            min: 0,
            strictMin: !0
          },
          size: {
            number: !0,
            min: 0
          },
          bidirectionalSize: {
            number: !0
          },
          bidirectionalSizes: {
            number: !0,
            multiple: !0
          },
          sizeMaybePercent: {
            number: !0,
            min: 0,
            allowPercent: !0
          },
          axisDirection: {
            enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
          },
          paddingRelativeTo: {
            enums: ["width", "height", "average", "min", "max"]
          },
          bgWH: {
            number: !0,
            min: 0,
            allowPercent: !0,
            enums: ["auto"],
            multiple: !0
          },
          bgPos: {
            number: !0,
            allowPercent: !0,
            multiple: !0
          },
          bgRelativeTo: {
            enums: ["inner", "include-padding"],
            multiple: !0
          },
          bgRepeat: {
            enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
            multiple: !0
          },
          bgFit: {
            enums: ["none", "contain", "cover"],
            multiple: !0
          },
          bgCrossOrigin: {
            enums: ["anonymous", "use-credentials"],
            multiple: !0
          },
          bgClip: {
            enums: ["none", "node"],
            multiple: !0
          },
          color: {
            color: !0
          },
          colors: {
            color: !0,
            multiple: !0
          },
          fill: {
            enums: ["solid", "linear-gradient", "radial-gradient"]
          },
          bool: {
            enums: ["yes", "no"]
          },
          lineStyle: {
            enums: ["solid", "dotted", "dashed"]
          },
          lineCap: {
            enums: ["butt", "round", "square"]
          },
          borderStyle: {
            enums: ["solid", "dotted", "dashed", "double"]
          },
          curveStyle: {
            enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "taxi"]
          },
          fontFamily: {
            regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
          },
          fontStyle: {
            enums: ["italic", "normal", "oblique"]
          },
          fontWeight: {
            enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
          },
          textDecoration: {
            enums: ["none", "underline", "overline", "line-through"]
          },
          textTransform: {
            enums: ["none", "uppercase", "lowercase"]
          },
          textWrap: {
            enums: ["none", "wrap", "ellipsis"]
          },
          textOverflowWrap: {
            enums: ["whitespace", "anywhere"]
          },
          textBackgroundShape: {
            enums: ["rectangle", "roundrectangle", "round-rectangle"]
          },
          nodeShape: {
            enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "polygon"]
          },
          compoundIncludeLabels: {
            enums: ["include", "exclude"]
          },
          arrowShape: {
            enums: ["tee", "triangle", "triangle-tee", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
          },
          arrowFill: {
            enums: ["filled", "hollow"]
          },
          display: {
            enums: ["element", "none"]
          },
          visibility: {
            enums: ["hidden", "visible"]
          },
          zCompoundDepth: {
            enums: ["bottom", "orphan", "auto", "top"]
          },
          zIndexCompare: {
            enums: ["auto", "manual"]
          },
          valign: {
            enums: ["top", "center", "bottom"]
          },
          halign: {
            enums: ["left", "center", "right"]
          },
          justification: {
            enums: ["left", "center", "right", "auto"]
          },
          text: {
            string: !0
          },
          data: {
            mapping: !0,
            regex: a("data")
          },
          layoutData: {
            mapping: !0,
            regex: a("layoutData")
          },
          scratch: {
            mapping: !0,
            regex: a("scratch")
          },
          mapData: {
            mapping: !0,
            regex: t("mapData")
          },
          mapLayoutData: {
            mapping: !0,
            regex: t("mapLayoutData")
          },
          mapScratch: {
            mapping: !0,
            regex: t("mapScratch")
          },
          fn: {
            mapping: !0,
            fn: !0
          },
          url: {
            regexes: n,
            singleRegexMatchValue: !0
          },
          urls: {
            regexes: n,
            singleRegexMatchValue: !0,
            multiple: !0
          },
          propList: {
            propList: !0
          },
          angle: {
            number: !0,
            units: "deg|rad",
            implicitUnits: "rad"
          },
          textRotation: {
            number: !0,
            units: "deg|rad",
            implicitUnits: "rad",
            enums: ["none", "autorotate"]
          },
          polygonPointList: {
            number: !0,
            multiple: !0,
            evenMultiple: !0,
            min: -1,
            max: 1,
            unitless: !0
          },
          edgeDistances: {
            enums: ["intersection", "node-position"]
          },
          edgeEndpoint: {
            number: !0,
            multiple: !0,
            units: "%|px|em|deg|rad",
            implicitUnits: "px",
            enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
            singleEnum: !0,
            validate: function(e, a) {
              switch (e.length) {
                case 2:
                  return "deg" !== a[0] && "rad" !== a[0] && "deg" !== a[1] && "rad" !== a[1];
                case 1:
                  return v(e[0]) || "deg" === a[0] || "rad" === a[0];
                default:
                  return !1
              }
            }
          },
          easing: {
            regexes: ["^(spring)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$"],
            enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
          },
          gradientDirection: {
            enums: ["to-bottom", "to-top", "to-left", "to-right", "to-bottom-right", "to-bottom-left", "to-top-right", "to-top-left", "to-right-bottom", "to-left-bottom", "to-right-top", "to-left-top"]
          },
          boundsExpansion: {
            number: !0,
            multiple: !0,
            min: 0,
            validate: function(e) {
              var a = e.length;
              return 1 === a || 2 === a || 4 === a
            }
          }
        };
        var r = {
            zeroNonZero: function(e, a) {
              return (null == e || null == a) && e !== a || (0 == e && 0 != a || 0 != e && 0 == a)
            },
            any: function(e, a) {
              return e != a
            }
          },
          i = Ui.types,
          c = [{
            name: "label",
            type: i.text,
            triggersBounds: r.any
          }, {
            name: "text-rotation",
            type: i.textRotation,
            triggersBounds: r.any
          }, {
            name: "text-margin-x",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }, {
            name: "text-margin-y",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }],
          o = [{
            name: "source-label",
            type: i.text,
            triggersBounds: r.any
          }, {
            name: "source-text-rotation",
            type: i.textRotation,
            triggersBounds: r.any
          }, {
            name: "source-text-margin-x",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }, {
            name: "source-text-margin-y",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }, {
            name: "source-text-offset",
            type: i.size,
            triggersBounds: r.any
          }],
          s = [{
            name: "target-label",
            type: i.text,
            triggersBounds: r.any
          }, {
            name: "target-text-rotation",
            type: i.textRotation,
            triggersBounds: r.any
          }, {
            name: "target-text-margin-x",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }, {
            name: "target-text-margin-y",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }, {
            name: "target-text-offset",
            type: i.size,
            triggersBounds: r.any
          }],
          l = [{
            name: "font-family",
            type: i.fontFamily,
            triggersBounds: r.any
          }, {
            name: "font-style",
            type: i.fontStyle,
            triggersBounds: r.any
          }, {
            name: "font-weight",
            type: i.fontWeight,
            triggersBounds: r.any
          }, {
            name: "font-size",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "text-transform",
            type: i.textTransform,
            triggersBounds: r.any
          }, {
            name: "text-wrap",
            type: i.textWrap,
            triggersBounds: r.any
          }, {
            name: "text-overflow-wrap",
            type: i.textOverflowWrap,
            triggersBounds: r.any
          }, {
            name: "text-max-width",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "text-outline-width",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "line-height",
            type: i.positiveNumber,
            triggersBounds: r.any
          }],
          d = [{
            name: "text-valign",
            type: i.valign,
            triggersBounds: r.any
          }, {
            name: "text-halign",
            type: i.halign,
            triggersBounds: r.any
          }, {
            name: "color",
            type: i.color
          }, {
            name: "text-outline-color",
            type: i.color
          }, {
            name: "text-outline-opacity",
            type: i.zeroOneNumber
          }, {
            name: "text-background-color",
            type: i.color
          }, {
            name: "text-background-opacity",
            type: i.zeroOneNumber
          }, {
            name: "text-background-padding",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "text-border-opacity",
            type: i.zeroOneNumber
          }, {
            name: "text-border-color",
            type: i.color
          }, {
            name: "text-border-width",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "text-border-style",
            type: i.borderStyle,
            triggersBounds: r.any
          }, {
            name: "text-background-shape",
            type: i.textBackgroundShape,
            triggersBounds: r.any
          }, {
            name: "text-justification",
            type: i.justification
          }],
          u = [{
            name: "events",
            type: i.bool
          }, {
            name: "text-events",
            type: i.bool
          }],
          h = [{
            name: "display",
            type: i.display,
            triggersZOrder: r.any,
            triggersBounds: r.any,
            triggersBoundsOfParallelBeziers: !0
          }, {
            name: "visibility",
            type: i.visibility,
            triggersZOrder: r.any
          }, {
            name: "opacity",
            type: i.zeroOneNumber,
            triggersZOrder: r.zeroNonZero
          }, {
            name: "text-opacity",
            type: i.zeroOneNumber
          }, {
            name: "min-zoomed-font-size",
            type: i.size
          }, {
            name: "z-compound-depth",
            type: i.zCompoundDepth,
            triggersZOrder: r.any
          }, {
            name: "z-index-compare",
            type: i.zIndexCompare,
            triggersZOrder: r.any
          }, {
            name: "z-index",
            type: i.nonNegativeInt,
            triggersZOrder: r.any
          }],
          m = [{
            name: "overlay-padding",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "overlay-color",
            type: i.color
          }, {
            name: "overlay-opacity",
            type: i.zeroOneNumber,
            triggersBounds: r.zeroNonZero
          }],
          g = [{
            name: "transition-property",
            type: i.propList
          }, {
            name: "transition-duration",
            type: i.time
          }, {
            name: "transition-delay",
            type: i.time
          }, {
            name: "transition-timing-function",
            type: i.easing
          }],
          p = function(e, a) {
            return "label" === a.value ? -e.poolIndex() : a.pfValue
          },
          y = [{
            name: "height",
            type: i.nodeSize,
            triggersBounds: r.any,
            hashOverride: p
          }, {
            name: "width",
            type: i.nodeSize,
            triggersBounds: r.any,
            hashOverride: p
          }, {
            name: "shape",
            type: i.nodeShape,
            triggersBounds: r.any
          }, {
            name: "shape-polygon-points",
            type: i.polygonPointList,
            triggersBounds: r.any
          }, {
            name: "background-color",
            type: i.color
          }, {
            name: "background-fill",
            type: i.fill
          }, {
            name: "background-opacity",
            type: i.zeroOneNumber
          }, {
            name: "background-blacken",
            type: i.nOneOneNumber
          }, {
            name: "background-gradient-stop-colors",
            type: i.colors
          }, {
            name: "background-gradient-stop-positions",
            type: i.percentages
          }, {
            name: "background-gradient-direction",
            type: i.gradientDirection
          }, {
            name: "padding",
            type: i.sizeMaybePercent,
            triggersBounds: r.any
          }, {
            name: "padding-relative-to",
            type: i.paddingRelativeTo,
            triggersBounds: r.any
          }, {
            name: "bounds-expansion",
            type: i.boundsExpansion,
            triggersBounds: r.any
          }],
          f = [{
            name: "border-color",
            type: i.color
          }, {
            name: "border-opacity",
            type: i.zeroOneNumber
          }, {
            name: "border-width",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "border-style",
            type: i.borderStyle
          }],
          _ = [{
            name: "background-image",
            type: i.urls
          }, {
            name: "background-image-crossorigin",
            type: i.bgCrossOrigin
          }, {
            name: "background-image-opacity",
            type: i.zeroOneNumbers
          }, {
            name: "background-position-x",
            type: i.bgPos
          }, {
            name: "background-position-y",
            type: i.bgPos
          }, {
            name: "background-width-relative-to",
            type: i.bgRelativeTo
          }, {
            name: "background-height-relative-to",
            type: i.bgRelativeTo
          }, {
            name: "background-repeat",
            type: i.bgRepeat
          }, {
            name: "background-fit",
            type: i.bgFit
          }, {
            name: "background-clip",
            type: i.bgClip
          }, {
            name: "background-width",
            type: i.bgWH
          }, {
            name: "background-height",
            type: i.bgWH
          }, {
            name: "background-offset-x",
            type: i.bgPos
          }, {
            name: "background-offset-y",
            type: i.bgPos
          }],
          S = [{
            name: "position",
            type: i.position,
            triggersBounds: r.any
          }, {
            name: "compound-sizing-wrt-labels",
            type: i.compoundIncludeLabels,
            triggersBounds: r.any
          }, {
            name: "min-width",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "min-width-bias-left",
            type: i.sizeMaybePercent,
            triggersBounds: r.any
          }, {
            name: "min-width-bias-right",
            type: i.sizeMaybePercent,
            triggersBounds: r.any
          }, {
            name: "min-height",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "min-height-bias-top",
            type: i.sizeMaybePercent,
            triggersBounds: r.any
          }, {
            name: "min-height-bias-bottom",
            type: i.sizeMaybePercent,
            triggersBounds: r.any
          }],
          b = [{
            name: "line-style",
            type: i.lineStyle
          }, {
            name: "line-color",
            type: i.color
          }, {
            name: "line-fill",
            type: i.fill
          }, {
            name: "line-cap",
            type: i.lineCap
          }, {
            name: "line-dash-pattern",
            type: i.numbers
          }, {
            name: "line-dash-offset",
            type: i.number
          }, {
            name: "line-gradient-stop-colors",
            type: i.colors
          }, {
            name: "line-gradient-stop-positions",
            type: i.percentages
          }, {
            name: "curve-style",
            type: i.curveStyle,
            triggersBounds: r.any,
            triggersBoundsOfParallelBeziers: !0
          }, {
            name: "haystack-radius",
            type: i.zeroOneNumber,
            triggersBounds: r.any
          }, {
            name: "source-endpoint",
            type: i.edgeEndpoint,
            triggersBounds: r.any
          }, {
            name: "target-endpoint",
            type: i.edgeEndpoint,
            triggersBounds: r.any
          }, {
            name: "control-point-step-size",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "control-point-distances",
            type: i.bidirectionalSizes,
            triggersBounds: r.any
          }, {
            name: "control-point-weights",
            type: i.numbers,
            triggersBounds: r.any
          }, {
            name: "segment-distances",
            type: i.bidirectionalSizes,
            triggersBounds: r.any
          }, {
            name: "segment-weights",
            type: i.numbers,
            triggersBounds: r.any
          }, {
            name: "taxi-turn",
            type: i.sizeMaybePercent,
            triggersBounds: r.any
          }, {
            name: "taxi-turn-min-distance",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "taxi-direction",
            type: i.axisDirection,
            triggersBounds: r.any
          }, {
            name: "edge-distances",
            type: i.edgeDistances,
            triggersBounds: r.any
          }, {
            name: "arrow-scale",
            type: i.positiveNumber,
            triggersBounds: r.any
          }, {
            name: "loop-direction",
            type: i.angle,
            triggersBounds: r.any
          }, {
            name: "loop-sweep",
            type: i.angle,
            triggersBounds: r.any
          }, {
            name: "source-distance-from-node",
            type: i.size,
            triggersBounds: r.any
          }, {
            name: "target-distance-from-node",
            type: i.size,
            triggersBounds: r.any
          }],
          w = [{
            name: "ghost",
            type: i.bool,
            triggersBounds: r.any
          }, {
            name: "ghost-offset-x",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }, {
            name: "ghost-offset-y",
            type: i.bidirectionalSize,
            triggersBounds: r.any
          }, {
            name: "ghost-opacity",
            type: i.zeroOneNumber
          }],
          C = [{
            name: "selection-box-color",
            type: i.color
          }, {
            name: "selection-box-opacity",
            type: i.zeroOneNumber
          }, {
            name: "selection-box-border-color",
            type: i.color
          }, {
            name: "selection-box-border-width",
            type: i.size
          }, {
            name: "active-bg-color",
            type: i.color
          }, {
            name: "active-bg-opacity",
            type: i.zeroOneNumber
          }, {
            name: "active-bg-size",
            type: i.size
          }, {
            name: "outside-texture-bg-color",
            type: i.color
          }, {
            name: "outside-texture-bg-opacity",
            type: i.zeroOneNumber
          }],
          N = [];
        Ui.pieBackgroundN = 16, N.push({
          name: "pie-size",
          type: i.sizeMaybePercent
        });
        for (var B = 1; B <= Ui.pieBackgroundN; B++) N.push({
          name: "pie-" + B + "-background-color",
          type: i.color
        }), N.push({
          name: "pie-" + B + "-background-size",
          type: i.percent
        }), N.push({
          name: "pie-" + B + "-background-opacity",
          type: i.zeroOneNumber
        });
        var D = [],
          x = Ui.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
        [{
          name: "arrow-shape",
          type: i.arrowShape,
          triggersBounds: r.any
        }, {
          name: "arrow-color",
          type: i.color
        }, {
          name: "arrow-fill",
          type: i.arrowFill
        }].forEach((function(e) {
          x.forEach((function(a) {
            var t = a + "-" + e.name,
              n = e.type,
              r = e.triggersBounds;
            D.push({
              name: t,
              type: n,
              triggersBounds: r
            })
          }))
        }), {});
        var I = Ui.properties = [].concat(u, g, h, m, w, d, l, c, o, s, y, f, _, N, S, b, D, C),
          T = Ui.propertyGroups = {
            behavior: u,
            transition: g,
            visibility: h,
            overlay: m,
            ghost: w,
            commonLabel: d,
            labelDimensions: l,
            mainLabel: c,
            sourceLabel: o,
            targetLabel: s,
            nodeBody: y,
            nodeBorder: f,
            backgroundImage: _,
            pie: N,
            compound: S,
            edgeLine: b,
            edgeArrow: D,
            core: C
          },
          U = Ui.propertyGroupNames = {};
        (Ui.propertyGroupKeys = Object.keys(T)).forEach((function(e) {
          U[e] = T[e].map((function(e) {
            return e.name
          })), T[e].forEach((function(a) {
            return a.groupKey = e
          }))
        }));
        var P = Ui.aliases = [{
          name: "content",
          pointsTo: "label"
        }, {
          name: "control-point-distance",
          pointsTo: "control-point-distances"
        }, {
          name: "control-point-weight",
          pointsTo: "control-point-weights"
        }, {
          name: "edge-text-rotation",
          pointsTo: "text-rotation"
        }, {
          name: "padding-left",
          pointsTo: "padding"
        }, {
          name: "padding-right",
          pointsTo: "padding"
        }, {
          name: "padding-top",
          pointsTo: "padding"
        }, {
          name: "padding-bottom",
          pointsTo: "padding"
        }];
        Ui.propertyNames = I.map((function(e) {
          return e.name
        }));
        for (var M = 0; M < I.length; M++) {
          var k = I[M];
          I[k.name] = k
        }
        for (var A = 0; A < P.length; A++) {
          var R = P[A],
            E = I[R.pointsTo],
            V = {
              name: R.name,
              alias: !0,
              pointsTo: E
            };
          I.push(V), I[R.name] = V
        }
      }(), Ui.getDefaultProperty = function(e) {
        return this.getDefaultProperties()[e]
      }, Ui.getDefaultProperties = function() {
        var e = this._private;
        if (null != e.defaultProperties) return e.defaultProperties;
        for (var a = F({
            "selection-box-color": "#ddd",
            "selection-box-opacity": .65,
            "selection-box-border-color": "#aaa",
            "selection-box-border-width": 1,
            "active-bg-color": "black",
            "active-bg-opacity": .15,
            "active-bg-size": 30,
            "outside-texture-bg-color": "#000",
            "outside-texture-bg-opacity": .125,
            events: "yes",
            "text-events": "no",
            "text-valign": "top",
            "text-halign": "center",
            "text-justification": "auto",
            "line-height": 1,
            color: "#000",
            "text-outline-color": "#000",
            "text-outline-width": 0,
            "text-outline-opacity": 1,
            "text-opacity": 1,
            "text-decoration": "none",
            "text-transform": "none",
            "text-wrap": "none",
            "text-overflow-wrap": "whitespace",
            "text-max-width": 9999,
            "text-background-color": "#000",
            "text-background-opacity": 0,
            "text-background-shape": "rectangle",
            "text-background-padding": 0,
            "text-border-opacity": 0,
            "text-border-width": 0,
            "text-border-style": "solid",
            "text-border-color": "#000",
            "font-family": "LXGW M, Helvetica Neue, Helvetica, sans-serif",
            "font-style": "normal",
            "font-weight": "normal",
            "font-size": 16,
            "min-zoomed-font-size": 0,
            "text-rotation": "none",
            "source-text-rotation": "none",
            "target-text-rotation": "none",
            visibility: "visible",
            display: "element",
            opacity: 1,
            "z-compound-depth": "auto",
            "z-index-compare": "auto",
            "z-index": 0,
            label: "",
            "text-margin-x": 0,
            "text-margin-y": 0,
            "source-label": "",
            "source-text-offset": 0,
            "source-text-margin-x": 0,
            "source-text-margin-y": 0,
            "target-label": "",
            "target-text-offset": 0,
            "target-text-margin-x": 0,
            "target-text-margin-y": 0,
            "overlay-opacity": 0,
            "overlay-color": "#000",
            "overlay-padding": 10,
            "transition-property": "none",
            "transition-duration": 0,
            "transition-delay": 0,
            "transition-timing-function": "linear",
            "background-blacken": 0,
            "background-color": "#999",
            "background-fill": "solid",
            "background-opacity": 1,
            "background-image": "none",
            "background-image-crossorigin": "anonymous",
            "background-image-opacity": 1,
            "background-position-x": "50%",
            "background-position-y": "50%",
            "background-offset-x": 0,
            "background-offset-y": 0,
            "background-width-relative-to": "include-padding",
            "background-height-relative-to": "include-padding",
            "background-repeat": "no-repeat",
            "background-fit": "none",
            "background-clip": "node",
            "background-width": "auto",
            "background-height": "auto",
            "border-color": "#000",
            "border-opacity": 1,
            "border-width": 0,
            "border-style": "solid",
            height: 30,
            width: 30,
            shape: "ellipse",
            "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
            "bounds-expansion": 0,
            "background-gradient-direction": "to-bottom",
            "background-gradient-stop-colors": "#999",
            "background-gradient-stop-positions": "0%",
            ghost: "no",
            "ghost-offset-y": 0,
            "ghost-offset-x": 0,
            "ghost-opacity": 0,
            padding: 0,
            "padding-relative-to": "width",
            position: "origin",
            "compound-sizing-wrt-labels": "include",
            "min-width": 0,
            "min-width-bias-left": 0,
            "min-width-bias-right": 0,
            "min-height": 0,
            "min-height-bias-top": 0,
            "min-height-bias-bottom": 0
          }, {
            "pie-size": "100%"
          }, [{
            name: "pie-{{i}}-background-color",
            value: "black"
          }, {
            name: "pie-{{i}}-background-size",
            value: "0%"
          }, {
            name: "pie-{{i}}-background-opacity",
            value: 1
          }].reduce((function(e, a) {
            for (var t = 1; t <= Ui.pieBackgroundN; t++) {
              var n = a.name.replace("{{i}}", t),
                r = a.value;
              e[n] = r
            }
            return e
          }), {}), {
            "line-style": "solid",
            "line-color": "#999",
            "line-fill": "solid",
            "line-cap": "butt",
            "line-gradient-stop-colors": "#999",
            "line-gradient-stop-positions": "0%",
            "control-point-step-size": 40,
            "control-point-weights": .5,
            "segment-weights": .5,
            "segment-distances": 20,
            "taxi-turn": "50%",
            "taxi-turn-min-distance": 10,
            "taxi-direction": "auto",
            "edge-distances": "intersection",
            "curve-style": "haystack",
            "haystack-radius": 0,
            "arrow-scale": 1,
            "loop-direction": "-45deg",
            "loop-sweep": "-90deg",
            "source-distance-from-node": 0,
            "target-distance-from-node": 0,
            "source-endpoint": "outside-to-node",
            "target-endpoint": "outside-to-node",
            "line-dash-pattern": [6, 3],
            "line-dash-offset": 0
          }, [{
            name: "arrow-shape",
            value: "none"
          }, {
            name: "arrow-color",
            value: "#999"
          }, {
            name: "arrow-fill",
            value: "filled"
          }].reduce((function(e, a) {
            return Ui.arrowPrefixes.forEach((function(t) {
              var n = t + "-" + a.name,
                r = a.value;
              e[n] = r
            })), e
          }), {})), t = {}, n = 0; n < this.properties.length; n++) {
          var r = this.properties[n];
          if (!r.pointsTo) {
            var i = r.name,
              c = a[i],
              o = this.parse(i, c);
            t[i] = o
          }
        }
        return e.defaultProperties = t, e.defaultProperties
      }, Ui.addDefaultStylesheet = function() {
        this.selector(":parent").css({
          shape: "rectangle",
          padding: 10,
          "background-color": "#eee",
          "border-color": "#ccc",
          "border-width": 1
        }).selector("edge").css({
          width: 3
        }).selector(":loop").css({
          "curve-style": "bezier"
        }).selector("edge:compound").css({
          "curve-style": "bezier",
          "source-endpoint": "outside-to-line",
          "target-endpoint": "outside-to-line"
        }).selector(":selected").css({
          "background-color": "#0169D9",
          "line-color": "#0169D9",
          "source-arrow-color": "#0169D9",
          "target-arrow-color": "#0169D9",
          "mid-source-arrow-color": "#0169D9",
          "mid-target-arrow-color": "#0169D9"
        }).selector(":parent:selected").css({
          "background-color": "#CCE1F9",
          "border-color": "#aec8e5"
        }).selector(":active").css({
          "overlay-color": "black",
          "overlay-padding": 10,
          "overlay-opacity": .25
        }), this.defaultLength = this.length
      };
      var Pi = {
        parse: function(e, a, t, n) {
          if (_(a)) return this.parseImplWarn(e, a, t, n);
          var r, i = $(e, "" + a, t ? "t" : "f", "mapping" === n || !0 === n || !1 === n || null == n ? "dontcare" : n),
            c = this.propCache = this.propCache || [];
          return (r = c[i]) || (r = c[i] = this.parseImplWarn(e, a, t, n)), (t || "mapping" === n) && (r = he(r)) && (r.value = he(r.value)), r
        },
        parseImplWarn: function(e, a, t, n) {
          var r = this.parseImpl(e, a, t, n);
          return r || null == a || ue("The style property `".concat(e, ": ").concat(a, "` is invalid")), r
        }
      };
      Pi.parseImpl = function(e, a, t, n) {
        e = k(e);
        var r = this.properties[e],
          i = a,
          c = this.types;
        if (!r) return null;
        if (void 0 === a) return null;
        r.alias && (r = r.pointsTo, e = r.name);
        var o = v(a);
        o && (a = a.trim());
        var s, l, d = r.type;
        if (!d) return null;
        if (t && ("" === a || null === a)) return {
          name: e,
          value: a,
          bypass: !0,
          deleteBypass: !0
        };
        if (_(a)) return {
          name: e,
          value: a,
          strValue: "fn",
          mapped: c.fn,
          bypass: t
        };
        if (!o || n || a.length < 7 || "a" !== a[1]);
        else {
          if (a.length >= 7 && "d" === a[0] && (s = new RegExp(c.data.regex).exec(a))) {
            if (t) return !1;
            var u = c.data;
            return {
              name: e,
              value: s,
              strValue: "" + a,
              mapped: u,
              field: s[1],
              bypass: t
            }
          }
          if (a.length >= 10 && "m" === a[0] && (l = new RegExp(c.mapData.regex).exec(a))) {
            if (t) return !1;
            if (d.multiple) return !1;
            var h = c.mapData;
            if (!d.color && !d.number) return !1;
            var m = this.parse(e, l[4]);
            if (!m || m.mapped) return !1;
            var g = this.parse(e, l[5]);
            if (!g || g.mapped) return !1;
            if (m.pfValue === g.pfValue || m.strValue === g.strValue) return ue("`" + e + ": " + a + "` is not a valid mapper because the output range is zero; converting to `" + e + ": " + m.strValue + "`"), this.parse(e, m.strValue);
            if (d.color) {
              var p = m.value,
                y = g.value;
              if (!(p[0] !== y[0] || p[1] !== y[1] || p[2] !== y[2] || p[3] !== y[3] && (null != p[3] && 1 !== p[3] || null != y[3] && 1 !== y[3]))) return !1
            }
            return {
              name: e,
              value: l,
              strValue: "" + a,
              mapped: h,
              field: l[1],
              fieldMin: parseFloat(l[2]),
              fieldMax: parseFloat(l[3]),
              valueMin: m.value,
              valueMax: g.value,
              bypass: t
            }
          }
        }
        if (d.multiple && "multiple" !== n) {
          var f;
          if (f = o ? a.split(/\s+/) : S(a) ? a : [a], d.evenMultiple && f.length % 2 != 0) return null;
          for (var b = [], C = [], N = [], B = "", D = !1, x = 0; x < f.length; x++) {
            var I = this.parse(e, f[x], t, "multiple");
            D = D || v(I.value), b.push(I.value), N.push(null != I.pfValue ? I.pfValue : I.value), C.push(I.units), B += (x > 0 ? " " : "") + I.strValue
          }
          return d.validate && !d.validate(b, C) ? null : d.singleEnum && D ? 1 === b.length && v(b[0]) ? {
            name: e,
            value: b[0],
            strValue: b[0],
            bypass: t
          } : null : {
            name: e,
            value: b,
            pfValue: N,
            strValue: B,
            bypass: t,
            units: C
          }
        }
        var T, U, P = function() {
          for (var n = 0; n < d.enums.length; n++) {
            if (d.enums[n] === a) return {
              name: e,
              value: a,
              strValue: "" + a,
              bypass: t
            }
          }
          return null
        };
        if (d.number) {
          var M, A = "px";
          if (d.units && (M = d.units), d.implicitUnits && (A = d.implicitUnits), !d.unitless)
            if (o) {
              var R = "px|em" + (d.allowPercent ? "|\\%" : "");
              M && (R = M);
              var E = a.match("^(" + G + ")(" + R + ")?$");
              E && (a = E[1], M = E[2] || A)
            } else M && !d.implicitUnits || (M = A);
          if (a = parseFloat(a), isNaN(a) && void 0 === d.enums) return null;
          if (isNaN(a) && void 0 !== d.enums) return a = i, P();
          if (d.integer && (!w(U = a) || Math.floor(U) !== U)) return null;
          if (void 0 !== d.min && (a < d.min || d.strictMin && a === d.min) || void 0 !== d.max && (a > d.max || d.strictMax && a === d.max)) return null;
          var V = {
            name: e,
            value: a,
            strValue: "" + a + (M || ""),
            units: M,
            bypass: t
          };
          return d.unitless || "px" !== M && "em" !== M ? V.pfValue = a : V.pfValue = "px" !== M && M ? this.getEmSizeInPixels() * a : a, "ms" !== M && "s" !== M || (V.pfValue = "ms" === M ? a : 1e3 * a), "deg" !== M && "rad" !== M || (V.pfValue = "rad" === M ? a : (T = a, Math.PI * T / 180)), "%" === M && (V.pfValue = a / 100), V
        }
        if (d.propList) {
          var F = [],
            z = "" + a;
          if ("none" === z);
          else {
            for (var W = z.split(/\s*,\s*|\s+/), j = 0; j < W.length; j++) {
              var O = W[j].trim();
              this.properties[O] ? F.push(O) : ue("`" + O + "` is not a valid property name")
            }
            if (0 === F.length) return null
          }
          return {
            name: e,
            value: F,
            strValue: 0 === F.length ? "none" : F.join(" "),
            bypass: t
          }
        }
        if (d.color) {
          var H = L(a);
          return H ? {
            name: e,
            value: H,
            pfValue: H,
            strValue: "rgb(" + H[0] + "," + H[1] + "," + H[2] + ")",
            bypass: t
          } : null
        }
        if (d.regex || d.regexes) {
          if (d.enums) {
            var Q = P();
            if (Q) return Q
          }
          for (var q = d.regexes ? d.regexes : [d.regex], Z = 0; Z < q.length; Z++) {
            var K = new RegExp(q[Z]).exec(a);
            if (K) return {
              name: e,
              value: d.singleRegexMatchValue ? K[1] : K,
              strValue: "" + a,
              bypass: t
            }
          }
          return null
        }
        return d.string ? {
          name: e,
          value: "" + a,
          strValue: "" + a,
          bypass: t
        } : d.enums ? P() : null
      };
      var Mi = function e(a) {
          if (!(this instanceof e)) return new e(a);
          x(a) ? (this._private = {
            cy: a,
            coreStyle: {}
          }, this.length = 0, this.resetToDefault()) : le("A style must have a core reference")
        },
        ki = Mi.prototype;
      ki.instanceString = function() {
        return "style"
      }, ki.clear = function() {
        for (var e = 0; e < this.length; e++) this[e] = void 0;
        return this.length = 0, this._private.newStyle = !0, this
      }, ki.resetToDefault = function() {
        return this.clear(), this.addDefaultStylesheet(), this
      }, ki.core = function(e) {
        return this._private.coreStyle[e] || this.getDefaultProperty(e)
      }, ki.selector = function(e) {
        var a = "core" === e ? null : new Cn(e),
          t = this.length++;
        return this[t] = {
          selector: a,
          properties: [],
          mappedProperties: [],
          index: t
        }, this
      }, ki.css = function() {
        var e = this,
          a = arguments;
        if (1 === a.length)
          for (var t = a[0], n = 0; n < e.properties.length; n++) {
            var r = e.properties[n],
              i = t[r.name];
            void 0 === i && (i = t[A(r.name)]), void 0 !== i && this.cssRule(r.name, i)
          } else 2 === a.length && this.cssRule(a[0], a[1]);
        return this
      }, ki.style = ki.css, ki.cssRule = function(e, a) {
        var t = this.parse(e, a);
        if (t) {
          var n = this.length - 1;
          this[n].properties.push(t), this[n].properties[t.name] = t, t.name.match(/pie-(\d+)-background-size/) && t.value && (this._private.hasPie = !0), t.mapped && this[n].mappedProperties.push(t), !this[n].selector && (this._private.coreStyle[t.name] = t)
        }
        return this
      }, ki.append = function(e) {
        return I(e) ? e.appendToStyle(this) : S(e) ? this.appendFromJson(e) : v(e) && this.appendFromString(e), this
      }, Mi.fromJson = function(e, a) {
        var t = new Mi(e);
        return t.fromJson(a), t
      }, Mi.fromString = function(e, a) {
        return new Mi(e).fromString(a)
      }, [Ni, Bi, Di, xi, Ii, Ti, Ui, Pi].forEach((function(e) {
        F(ki, e)
      })), Mi.types = ki.types, Mi.properties = ki.properties, Mi.propertyGroups = ki.propertyGroups, Mi.propertyGroupNames = ki.propertyGroupNames, Mi.propertyGroupKeys = ki.propertyGroupKeys;
      var Ai = {
          style: function(e) {
            e && this.setStyle(e).update();
            return this._private.style
          },
          setStyle: function(e) {
            var a = this._private;
            return I(e) ? a.style = e.generateStyle(this) : S(e) ? a.style = Mi.fromJson(this, e) : v(e) ? a.style = Mi.fromString(this, e) : a.style = Mi(this), a.style
          }
        },
        Ri = {
          autolock: function(e) {
            return void 0 === e ? this._private.autolock : (this._private.autolock = !!e, this)
          },
          autoungrabify: function(e) {
            return void 0 === e ? this._private.autoungrabify : (this._private.autoungrabify = !!e, this)
          },
          autounselectify: function(e) {
            return void 0 === e ? this._private.autounselectify : (this._private.autounselectify = !!e, this)
          },
          selectionType: function(e) {
            var a = this._private;
            return null == a.selectionType && (a.selectionType = "single"), void 0 === e ? a.selectionType : ("additive" !== e && "single" !== e || (a.selectionType = e), this)
          },
          panningEnabled: function(e) {
            return void 0 === e ? this._private.panningEnabled : (this._private.panningEnabled = !!e, this)
          },
          userPanningEnabled: function(e) {
            return void 0 === e ? this._private.userPanningEnabled : (this._private.userPanningEnabled = !!e, this)
          },
          zoomingEnabled: function(e) {
            return void 0 === e ? this._private.zoomingEnabled : (this._private.zoomingEnabled = !!e, this)
          },
          userZoomingEnabled: function(e) {
            return void 0 === e ? this._private.userZoomingEnabled : (this._private.userZoomingEnabled = !!e, this)
          },
          boxSelectionEnabled: function(e) {
            return void 0 === e ? this._private.boxSelectionEnabled : (this._private.boxSelectionEnabled = !!e, this)
          },
          pan: function() {
            var e, a, t, n, r, i = arguments,
              c = this._private.pan;
            switch (i.length) {
              case 0:
                return c;
              case 1:
                if (v(i[0])) return c[e = i[0]];
                if (b(i[0])) {
                  if (!this._private.panningEnabled) return this;
                  n = (t = i[0]).x, r = t.y, w(n) && (c.x = n), w(r) && (c.y = r), this.emit("pan viewport")
                }
                break;
              case 2:
                if (!this._private.panningEnabled) return this;
                e = i[0], a = i[1], "x" !== e && "y" !== e || !w(a) || (c[e] = a), this.emit("pan viewport")
            }
            return this.notify("viewport"), this
          },
          panBy: function(e, a) {
            var t, n, r, i, c, o = arguments,
              s = this._private.pan;
            if (!this._private.panningEnabled) return this;
            switch (o.length) {
              case 1:
                b(e) && (i = (r = o[0]).x, c = r.y, w(i) && (s.x += i), w(c) && (s.y += c), this.emit("pan viewport"));
                break;
              case 2:
                n = a, "x" !== (t = e) && "y" !== t || !w(n) || (s[t] += n), this.emit("pan viewport")
            }
            return this.notify("viewport"), this
          },
          fit: function(e, a) {
            var t = this.getFitViewport(e, a);
            if (t) {
              var n = this._private;
              n.zoom = t.zoom, n.pan = t.pan, this.emit("pan zoom viewport"), this.notify("viewport")
            }
            return this
          },
          getFitViewport: function(e, a) {
            if (w(e) && void 0 === a && (a = e, e = void 0), this._private.panningEnabled && this._private.zoomingEnabled) {
              var t, n;
              if (v(e)) {
                var r = e;
                e = this.$(r)
              } else if (b(n = e) && w(n.x1) && w(n.x2) && w(n.y1) && w(n.y2)) {
                var i = e;
                (t = {
                  x1: i.x1,
                  y1: i.y1,
                  x2: i.x2,
                  y2: i.y2
                }).w = t.x2 - t.x1, t.h = t.y2 - t.y1
              } else N(e) || (e = this.mutableElements());
              if (!N(e) || !e.empty()) {
                t = t || e.boundingBox();
                var c, o = this.width(),
                  s = this.height();
                if (a = w(a) ? a : 0, !isNaN(o) && !isNaN(s) && o > 0 && s > 0 && !isNaN(t.w) && !isNaN(t.h) && t.w > 0 && t.h > 0) return {
                  zoom: c = (c = (c = Math.min((o - 2 * a) / t.w, (s - 2 * a) / t.h)) > this._private.maxZoom ? this._private.maxZoom : c) < this._private.minZoom ? this._private.minZoom : c,
                  pan: {
                    x: (o - c * (t.x1 + t.x2)) / 2,
                    y: (s - c * (t.y1 + t.y2)) / 2
                  }
                }
              }
            }
          },
          zoomRange: function(e, a) {
            var t = this._private;
            if (null == a) {
              var n = e;
              e = n.min, a = n.max
            }
            return w(e) && w(a) && e <= a ? (t.minZoom = e, t.maxZoom = a) : w(e) && void 0 === a && e <= t.maxZoom ? t.minZoom = e : w(a) && void 0 === e && a >= t.minZoom && (t.maxZoom = a), this
          },
          minZoom: function(e) {
            return void 0 === e ? this._private.minZoom : this.zoomRange({
              min: e
            })
          },
          maxZoom: function(e) {
            return void 0 === e ? this._private.maxZoom : this.zoomRange({
              max: e
            })
          },
          getZoomedViewport: function(e) {
            var a, t, n = this._private,
              r = n.pan,
              i = n.zoom,
              c = !1;
            if (n.zoomingEnabled || (c = !0), w(e) ? t = e : b(e) && (t = e.level, null != e.position ? a = ze(e.position, i, r) : null != e.renderedPosition && (a = e.renderedPosition), null == a || n.panningEnabled || (c = !0)), t = (t = t > n.maxZoom ? n.maxZoom : t) < n.minZoom ? n.minZoom : t, c || !w(t) || t === i || null != a && (!w(a.x) || !w(a.y))) return null;
            if (null != a) {
              var o = r,
                s = i,
                l = t;
              return {
                zoomed: !0,
                panned: !0,
                zoom: l,
                pan: {
                  x: -l / s * (a.x - o.x) + a.x,
                  y: -l / s * (a.y - o.y) + a.y
                }
              }
            }
            return {
              zoomed: !0,
              panned: !1,
              zoom: t,
              pan: r
            }
          },
          zoom: function(e) {
            if (void 0 === e) return this._private.zoom;
            var a = this.getZoomedViewport(e),
              t = this._private;
            return null != a && a.zoomed ? (t.zoom = a.zoom, a.panned && (t.pan.x = a.pan.x, t.pan.y = a.pan.y), this.emit("zoom" + (a.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this) : this
          },
          viewport: function(e) {
            var a = this._private,
              t = !0,
              n = !0,
              r = [],
              i = !1,
              c = !1;
            if (!e) return this;
            if (w(e.zoom) || (t = !1), b(e.pan) || (n = !1), !t && !n) return this;
            if (t) {
              var o = e.zoom;
              o < a.minZoom || o > a.maxZoom || !a.zoomingEnabled ? i = !0 : (a.zoom = o, r.push("zoom"))
            }
            if (n && (!i || !e.cancelOnFailedZoom) && a.panningEnabled) {
              var s = e.pan;
              w(s.x) && (a.pan.x = s.x, c = !1), w(s.y) && (a.pan.y = s.y, c = !1), c || r.push("pan")
            }
            return r.length > 0 && (r.push("viewport"), this.emit(r.join(" ")), this.notify("viewport")), this
          },
          center: function(e) {
            var a = this.getCenterPan(e);
            return a && (this._private.pan = a, this.emit("pan viewport"), this.notify("viewport")), this
          },
          getCenterPan: function(e, a) {
            if (this._private.panningEnabled) {
              if (v(e)) {
                var t = e;
                e = this.mutableElements().filter(t)
              } else N(e) || (e = this.mutableElements());
              if (0 !== e.length) {
                var n = e.boundingBox(),
                  r = this.width(),
                  i = this.height();
                return {
                  x: (r - (a = void 0 === a ? this._private.zoom : a) * (n.x1 + n.x2)) / 2,
                  y: (i - a * (n.y1 + n.y2)) / 2
                }
              }
            }
          },
          reset: function() {
            return this._private.panningEnabled && this._private.zoomingEnabled ? (this.viewport({
              pan: {
                x: 0,
                y: 0
              },
              zoom: 1
            }), this) : this
          },
          invalidateSize: function() {
            this._private.sizeCache = null
          },
          size: function() {
            var e, a, t = this._private,
              n = t.container;
            return t.sizeCache = t.sizeCache || (n ? (e = u.getComputedStyle(n), a = function(a) {
              return parseFloat(e.getPropertyValue(a))
            }, {
              width: n.clientWidth - a("padding-left") - a("padding-right"),
              height: n.clientHeight - a("padding-top") - a("padding-bottom")
            }) : {
              width: 1,
              height: 1
            })
          },
          width: function() {
            return this.size().width
          },
          height: function() {
            return this.size().height
          },
          extent: function() {
            var e = this._private.pan,
              a = this._private.zoom,
              t = this.renderedExtent(),
              n = {
                x1: (t.x1 - e.x) / a,
                x2: (t.x2 - e.x) / a,
                y1: (t.y1 - e.y) / a,
                y2: (t.y2 - e.y) / a
              };
            return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n
          },
          renderedExtent: function() {
            var e = this.width(),
              a = this.height();
            return {
              x1: 0,
              y1: 0,
              x2: e,
              y2: a,
              w: e,
              h: a
            }
          }
        };
      Ri.centre = Ri.center, Ri.autolockNodes = Ri.autolock, Ri.autoungrabifyNodes = Ri.autoungrabify;
      var Ei = {
        data: Ft.data({
          field: "data",
          bindingEvent: "data",
          allowBinding: !0,
          allowSetting: !0,
          settingEvent: "data",
          settingTriggersEvent: !0,
          triggerFnName: "trigger",
          allowGetting: !0
        }),
        removeData: Ft.removeData({
          field: "data",
          event: "data",
          triggerFnName: "trigger",
          triggerEvent: !0
        }),
        scratch: Ft.data({
          field: "scratch",
          bindingEvent: "scratch",
          allowBinding: !0,
          allowSetting: !0,
          settingEvent: "scratch",
          settingTriggersEvent: !0,
          triggerFnName: "trigger",
          allowGetting: !0
        }),
        removeScratch: Ft.removeData({
          field: "scratch",
          event: "scratch",
          triggerFnName: "trigger",
          triggerEvent: !0
        })
      };
      Ei.attr = Ei.data, Ei.removeAttr = Ei.removeData;
      var Gi = function(e) {
          var a = this,
            t = (e = F({}, e)).container;
          t && !C(t) && C(t[0]) && (t = t[0]);
          var n = t ? t._cyreg : null;
          (n = n || {}) && n.cy && (n.cy.destroy(), n = {});
          var r = n.readies = n.readies || [];
          t && (t._cyreg = n), n.cy = a;
          var i = void 0 !== u && void 0 !== t && !e.headless,
            c = e;
          c.layout = F({
            name: i ? "grid" : "null"
          }, c.layout), c.renderer = F({
            name: i ? "canvas" : "null"
          }, c.renderer);
          var o = function(e, a, t) {
              return void 0 !== a ? a : void 0 !== t ? t : e
            },
            s = this._private = {
              container: t,
              ready: !1,
              options: c,
              elements: new ei(this),
              listeners: [],
              aniEles: new ei(this),
              data: {},
              scratch: {},
              layout: null,
              renderer: null,
              destroyed: !1,
              notificationsEnabled: !0,
              minZoom: 1e-50,
              maxZoom: 1e50,
              zoomingEnabled: o(!0, c.zoomingEnabled),
              userZoomingEnabled: o(!0, c.userZoomingEnabled),
              panningEnabled: o(!0, c.panningEnabled),
              userPanningEnabled: o(!0, c.userPanningEnabled),
              boxSelectionEnabled: o(!0, c.boxSelectionEnabled),
              autolock: o(!1, c.autolock, c.autolockNodes),
              autoungrabify: o(!1, c.autoungrabify, c.autoungrabifyNodes),
              autounselectify: o(!1, c.autounselectify),
              styleEnabled: void 0 === c.styleEnabled ? i : c.styleEnabled,
              zoom: w(c.zoom) ? c.zoom : 1,
              pan: {
                x: b(c.pan) && w(c.pan.x) ? c.pan.x : 0,
                y: b(c.pan) && w(c.pan.y) ? c.pan.y : 0
              },
              animation: {
                current: [],
                queue: []
              },
              hasCompoundNodes: !1
            };
          this.createEmitter(), this.selectionType(c.selectionType), this.zoomRange({
            min: c.minZoom,
            max: c.maxZoom
          });
          s.styleEnabled && a.setStyle([]);
          var l = F({}, c, c.renderer);
          a.initRenderer(l);
          ! function(e, a) {
            if (e.some(U)) return Et.all(e).then(a);
            a(e)
          }([c.style, c.elements], (function(e) {
            var t = e[0],
              i = e[1];
            s.styleEnabled && a.style().append(t),
              function(e, t, n) {
                a.notifications(!1);
                var r = a.mutableElements();
                r.length > 0 && r.remove(), null != e && (b(e) || S(e)) && a.add(e), a.one("layoutready", (function(e) {
                  a.notifications(!0), a.emit(e), a.one("load", t), a.emitAndNotify("load")
                })).one("layoutstop", (function() {
                  a.one("done", n), a.emit("done")
                }));
                var i = F({}, a._private.options.layout);
                i.eles = a.elements(), a.layout(i).run()
              }(i, (function() {
                a.startAnimationLoop(), s.ready = !0, _(c.ready) && a.on("ready", c.ready);
                for (var e = 0; e < r.length; e++) {
                  var t = r[e];
                  a.on("ready", t)
                }
                n && (n.readies = []), a.emit("ready")
              }), c.done)
          }))
        },
        Vi = Gi.prototype;
      F(Vi, {
        instanceString: function() {
          return "core"
        },
        isReady: function() {
          return this._private.ready
        },
        destroyed: function() {
          return this._private.destroyed
        },
        ready: function(e) {
          return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this
        },
        destroy: function() {
          var e = this;
          if (!e.destroyed()) return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e
        },
        hasElementWithId: function(e) {
          return this._private.elements.hasElementWithId(e)
        },
        getElementById: function(e) {
          return this._private.elements.getElementById(e)
        },
        hasCompoundNodes: function() {
          return this._private.hasCompoundNodes
        },
        headless: function() {
          return this._private.renderer.isHeadless()
        },
        styleEnabled: function() {
          return this._private.styleEnabled
        },
        addToPool: function(e) {
          return this._private.elements.merge(e), this
        },
        removeFromPool: function(e) {
          return this._private.elements.unmerge(e), this
        },
        container: function() {
          return this._private.container || null
        },
        mount: function(e) {
          if (null != e) {
            var a = this,
              t = a._private,
              n = t.options;
            return !C(e) && C(e[0]) && (e = e[0]), a.stopAnimationLoop(), a.destroyRenderer(), t.container = e, t.styleEnabled = !0, a.invalidateSize(), a.initRenderer(F({}, n, n.renderer, {
              name: "null" === n.renderer.name ? "canvas" : n.renderer.name
            })), a.startAnimationLoop(), a.style(n.style), a.emit("mount"), a
          }
        },
        unmount: function() {
          var e = this;
          return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
            name: "null"
          }), e.emit("unmount"), e
        },
        options: function() {
          return he(this._private.options)
        },
        json: function(e) {
          var a = this,
            t = a._private,
            n = a.mutableElements();
          if (b(e)) {
            if (a.startBatch(), e.elements) {
              var r = {},
                i = function(e, t) {
                  for (var n = [], i = [], c = 0; c < e.length; c++) {
                    var o = e[c],
                      s = "" + o.data.id,
                      l = a.getElementById(s);
                    r[s] = !0, 0 !== l.length ? i.push({
                      ele: l,
                      json: o
                    }) : t ? (o.group = t, n.push(o)) : n.push(o)
                  }
                  a.add(n);
                  for (var d = 0; d < i.length; d++) {
                    var u = i[d],
                      h = u.ele,
                      m = u.json;
                    h.json(m)
                  }
                };
              if (S(e.elements)) i(e.elements);
              else
                for (var c = ["nodes", "edges"], o = 0; o < c.length; o++) {
                  var s = c[o],
                    l = e.elements[s];
                  S(l) && i(l, s)
                }
              var d = a.collection();
              n.filter((function(e) {
                return !r[e.id()]
              })).forEach((function(e) {
                e.isParent() ? d.merge(e) : e.remove()
              })), d.forEach((function(e) {
                return e.children().move({
                  parent: null
                })
              })), d.forEach((function(e) {
                return function(e) {
                  return a.getElementById(e.id())
                }(e).remove()
              }))
            }
            e.style && a.style(e.style), null != e.zoom && e.zoom !== t.zoom && a.zoom(e.zoom), e.pan && (e.pan.x === t.pan.x && e.pan.y === t.pan.y || a.pan(e.pan)), e.data && a.data(e.data);
            for (var u = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify"], h = 0; h < u.length; h++) {
              var m = u[h];
              null != e[m] && a[m](e[m])
            }
            return a.endBatch(), this
          }
          var g = {};
          !!e ? g.elements = this.elements().map((function(e) {
            return e.json()
          })) : (g.elements = {}, n.forEach((function(e) {
            var a = e.group();
            g.elements[a] || (g.elements[a] = []), g.elements[a].push(e.json())
          }))), this._private.styleEnabled && (g.style = a.style().json()), g.data = he(a.data());
          var p = t.options;
          return g.zoomingEnabled = t.zoomingEnabled, g.userZoomingEnabled = t.userZoomingEnabled, g.zoom = t.zoom, g.minZoom = t.minZoom, g.maxZoom = t.maxZoom, g.panningEnabled = t.panningEnabled, g.userPanningEnabled = t.userPanningEnabled, g.pan = he(t.pan), g.boxSelectionEnabled = t.boxSelectionEnabled, g.renderer = he(p.renderer), g.hideEdgesOnViewport = p.hideEdgesOnViewport, g.textureOnViewport = p.textureOnViewport, g.wheelSensitivity = p.wheelSensitivity, g.motionBlur = p.motionBlur, g
        }
      }), Vi.$id = Vi.getElementById, [ti, gi, fi, vi, _i, Si, wi, Ci, Ai, Ri, Ei].forEach((function(e) {
        F(Vi, e)
      }));
      var Fi = {
          fit: !0,
          directed: !1,
          padding: 30,
          circle: !1,
          grid: !1,
          spacingFactor: 1.75,
          boundingBox: void 0,
          avoidOverlap: !0,
          nodeDimensionsIncludeLabels: !1,
          roots: void 0,
          maximal: !1,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function(e, a) {
            return !0
          },
          ready: void 0,
          stop: void 0,
          transform: function(e, a) {
            return a
          }
        },
        Li = function(e) {
          return e.scratch("breadthfirst")
        },
        zi = function(e, a) {
          return e.scratch("breadthfirst", a)
        };

      function Wi(e) {
        this.options = F({}, Fi, e)
      }
      Wi.prototype.run = function() {
        var e, a = this.options,
          t = a,
          n = a.cy,
          r = t.eles,
          i = r.nodes().filter((function(e) {
            return !e.isParent()
          })),
          c = r,
          o = t.directed,
          s = t.maximal || t.maximalAdjustments > 0,
          l = $e(t.boundingBox ? t.boundingBox : {
            x1: 0,
            y1: 0,
            w: n.width(),
            h: n.height()
          });
        if (N(t.roots)) e = t.roots;
        else if (S(t.roots)) {
          for (var d = [], u = 0; u < t.roots.length; u++) {
            var h = t.roots[u],
              m = n.getElementById(h);
            d.push(m)
          }
          e = n.collection(d)
        } else if (v(t.roots)) e = n.$(t.roots);
        else if (o) e = i.roots();
        else {
          var g = r.components();
          e = n.collection();
          for (var p = function(a) {
              var t = g[a],
                n = t.maxDegree(!1),
                r = t.filter((function(e) {
                  return e.degree(!1) === n
                }));
              e = e.add(r)
            }, y = 0; y < g.length; y++) p(y)
        }
        var f = [],
          _ = {},
          b = function(e, a) {
            null == f[a] && (f[a] = []);
            var t = f[a].length;
            f[a].push(e), zi(e, {
              index: t,
              depth: a
            })
          };
        c.bfs({
          roots: e,
          directed: t.directed,
          visit: function(e, a, t, n, r) {
            var i = e[0],
              c = i.id();
            b(i, r), _[c] = !0
          }
        });
        for (var w = [], C = 0; C < i.length; C++) {
          var B = i[C];
          _[B.id()] || w.push(B)
        }
        var D = function(e) {
            for (var a = f[e], t = 0; t < a.length; t++) {
              var n = a[t];
              null != n ? zi(n, {
                depth: e,
                index: t
              }) : (a.splice(t, 1), t--)
            }
          },
          x = function() {
            for (var e = 0; e < f.length; e++) D(e)
          },
          I = function(e, a) {
            for (var t = Li(e), n = e.incomers().filter((function(e) {
                return e.isNode() && r.has(e)
              })), i = -1, c = e.id(), o = 0; o < n.length; o++) {
              var s = n[o],
                l = Li(s);
              i = Math.max(i, l.depth)
            }
            return t.depth <= i && (a[c] ? null : (function(e, a) {
              var t = Li(e),
                n = t.depth,
                r = t.index;
              f[n][r] = null, b(e, a)
            }(e, i + 1), a[c] = !0, !0))
          };
        if (o && s) {
          var T = [],
            U = {},
            P = function(e) {
              return T.push(e)
            };
          for (i.forEach((function(e) {
              return T.push(e)
            })); T.length > 0;) {
            var M = T.shift(),
              k = I(M, U);
            if (k) M.outgoers().filter((function(e) {
              return e.isNode() && r.has(e)
            })).forEach(P);
            else if (null === k) {
              ue("Detected double maximal shift for node `" + M.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
              break
            }
          }
        }
        x();
        var A = 0;
        if (t.avoidOverlap)
          for (var R = 0; R < i.length; R++) {
            var E = i[R].layoutDimensions(t),
              G = E.w,
              F = E.h;
            A = Math.max(A, G, F)
          }
        for (var L = {}, z = function(e) {
            if (L[e.id()]) return L[e.id()];
            for (var a = Li(e).depth, t = e.neighborhood(), n = 0, r = 0, c = 0; c < t.length; c++) {
              var o = t[c];
              if (!o.isEdge() && !o.isParent() && i.has(o)) {
                var s = Li(o),
                  l = s.index,
                  d = s.depth;
                if (null != l && null != d) {
                  var u = f[d].length;
                  d < a && (n += l / u, r++)
                }
              }
            }
            return n /= r = Math.max(1, r), 0 === r && (n = 0), L[e.id()] = n, n
          }, W = function(e, a) {
            var t = z(e) - z(a);
            return 0 === t ? V(e.id(), a.id()) : t
          }, j = 0; j < f.length; j++) f[j].sort(W), D(j);
        for (var O = [], H = 0; H < w.length; H++) O.push(w[H]);
        f.unshift(O), x();
        for (var Q = 0, q = 0; q < f.length; q++) Q = Math.max(f[q].length, Q);
        var Z = l.x1 + l.w / 2,
          K = l.x1 + l.h / 2,
          Y = f.reduce((function(e, a) {
            return Math.max(e, a.length)
          }), 0);
        return i.layoutPositions(this, t, (function(e) {
          var a = Li(e),
            n = a.depth,
            r = a.index,
            i = f[n].length,
            c = Math.max(l.w / ((t.grid ? Y : i) + 1), A),
            o = Math.max(l.h / (f.length + 1), A),
            s = Math.min(l.w / 2 / f.length, l.h / 2 / f.length);
          if (s = Math.max(s, A), t.circle) {
            var d = s * n + s - (f.length > 0 && f[0].length <= 3 ? s / 2 : 0),
              u = 2 * Math.PI / f[n].length * r;
            return 0 === n && 1 === f[0].length && (d = 1), {
              x: Z + d * Math.cos(u),
              y: K + d * Math.sin(u)
            }
          }
          return {
            x: Z + (r + 1 - (i + 1) / 2) * c,
            y: (n + 1) * o
          }
        })), this
      };
      var ji = {
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        avoidOverlap: !0,
        nodeDimensionsIncludeLabels: !1,
        spacingFactor: void 0,
        radius: void 0,
        startAngle: 1.5 * Math.PI,
        sweep: void 0,
        clockwise: !0,
        sort: void 0,
        animate: !1,
        animationDuration: 500,
        animationEasing: void 0,
        animateFilter: function(e, a) {
          return !0
        },
        ready: void 0,
        stop: void 0,
        transform: function(e, a) {
          return a
        }
      };

      function Oi(e) {
        this.options = F({}, ji, e)
      }
      Oi.prototype.run = function() {
        var e = this.options,
          a = e,
          t = e.cy,
          n = a.eles,
          r = void 0 !== a.counterclockwise ? !a.counterclockwise : a.clockwise,
          i = n.nodes().not(":parent");
        a.sort && (i = i.sort(a.sort));
        for (var c, o = $e(a.boundingBox ? a.boundingBox : {
            x1: 0,
            y1: 0,
            w: t.width(),
            h: t.height()
          }), s = o.x1 + o.w / 2, l = o.y1 + o.h / 2, d = (void 0 === a.sweep ? 2 * Math.PI - 2 * Math.PI / i.length : a.sweep) / Math.max(1, i.length - 1), u = 0, h = 0; h < i.length; h++) {
          var m = i[h].layoutDimensions(a),
            g = m.w,
            p = m.h;
          u = Math.max(u, g, p)
        }
        if (c = w(a.radius) ? a.radius : i.length <= 1 ? 0 : Math.min(o.h, o.w) / 2 - u, i.length > 1 && a.avoidOverlap) {
          u *= 1.75;
          var y = Math.cos(d) - Math.cos(0),
            f = Math.sin(d) - Math.sin(0),
            v = Math.sqrt(u * u / (y * y + f * f));
          c = Math.max(v, c)
        }
        return i.layoutPositions(this, a, (function(e, t) {
          var n = a.startAngle + t * d * (r ? 1 : -1),
            i = c * Math.cos(n),
            o = c * Math.sin(n);
          return {
            x: s + i,
            y: l + o
          }
        })), this
      };
      var Hi, Qi = {
        fit: !0,
        padding: 30,
        startAngle: 1.5 * Math.PI,
        sweep: void 0,
        clockwise: !0,
        equidistant: !1,
        minNodeSpacing: 10,
        boundingBox: void 0,
        avoidOverlap: !0,
        nodeDimensionsIncludeLabels: !1,
        height: void 0,
        width: void 0,
        spacingFactor: void 0,
        concentric: function(e) {
          return e.degree()
        },
        levelWidth: function(e) {
          return e.maxDegree() / 4
        },
        animate: !1,
        animationDuration: 500,
        animationEasing: void 0,
        animateFilter: function(e, a) {
          return !0
        },
        ready: void 0,
        stop: void 0,
        transform: function(e, a) {
          return a
        }
      };

      function qi(e) {
        this.options = F({}, Qi, e)
      }
      qi.prototype.run = function() {
        for (var e = this.options, a = e, t = void 0 !== a.counterclockwise ? !a.counterclockwise : a.clockwise, n = e.cy, r = a.eles.nodes().not(":parent"), i = $e(a.boundingBox ? a.boundingBox : {
            x1: 0,
            y1: 0,
            w: n.width(),
            h: n.height()
          }), c = i.x1 + i.w / 2, o = i.y1 + i.h / 2, s = [], l = 0, d = 0; d < r.length; d++) {
          var u, h = r[d];
          u = a.concentric(h), s.push({
            value: u,
            node: h
          }), h._private.scratch.concentric = u
        }
        r.updateStyle();
        for (var m = 0; m < r.length; m++) {
          var g = r[m].layoutDimensions(a);
          l = Math.max(l, g.w, g.h)
        }
        s.sort((function(e, a) {
          return a.value - e.value
        }));
        for (var p = a.levelWidth(r), y = [
            []
          ], f = y[0], v = 0; v < s.length; v++) {
          var _ = s[v];
          if (f.length > 0) Math.abs(f[0].value - _.value) >= p && (f = [], y.push(f));
          f.push(_)
        }
        var S = l + a.minNodeSpacing;
        if (!a.avoidOverlap) {
          var b = y.length > 0 && y[0].length > 1,
            w = (Math.min(i.w, i.h) / 2 - S) / (y.length + b ? 1 : 0);
          S = Math.min(S, w)
        }
        for (var C = 0, N = 0; N < y.length; N++) {
          var B = y[N],
            D = void 0 === a.sweep ? 2 * Math.PI - 2 * Math.PI / B.length : a.sweep,
            x = B.dTheta = D / Math.max(1, B.length - 1);
          if (B.length > 1 && a.avoidOverlap) {
            var I = Math.cos(x) - Math.cos(0),
              T = Math.sin(x) - Math.sin(0),
              U = Math.sqrt(S * S / (I * I + T * T));
            C = Math.max(U, C)
          }
          B.r = C, C += S
        }
        if (a.equidistant) {
          for (var P = 0, M = 0, k = 0; k < y.length; k++) {
            var A = y[k].r - M;
            P = Math.max(P, A)
          }
          M = 0;
          for (var R = 0; R < y.length; R++) {
            var E = y[R];
            0 === R && (M = E.r), E.r = M, M += P
          }
        }
        for (var G = {}, V = 0; V < y.length; V++)
          for (var F = y[V], L = F.dTheta, z = F.r, W = 0; W < F.length; W++) {
            var j = F[W],
              O = a.startAngle + (t ? 1 : -1) * L * W,
              H = {
                x: c + z * Math.cos(O),
                y: o + z * Math.sin(O)
              };
            G[j.node.id()] = H
          }
        return r.layoutPositions(this, a, (function(e) {
          var a = e.id();
          return G[a]
        })), this
      };
      var Zi = {
        ready: function() {},
        stop: function() {},
        animate: !0,
        animationEasing: void 0,
        animationDuration: void 0,
        animateFilter: function(e, a) {
          return !0
        },
        animationThreshold: 250,
        refresh: 20,
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        nodeDimensionsIncludeLabels: !1,
        randomize: !1,
        componentSpacing: 40,
        nodeRepulsion: function(e) {
          return 2048
        },
        nodeOverlap: 4,
        idealEdgeLength: function(e) {
          return 32
        },
        edgeElasticity: function(e) {
          return 32
        },
        nestingFactor: 1.2,
        gravity: 1,
        numIter: 1e3,
        initialTemp: 1e3,
        coolingFactor: .99,
        minTemp: 1
      };

      function Ki(e) {
        this.options = F({}, Zi, e), this.options.layout = this
      }
      Ki.prototype.run = function() {
        var e = this.options,
          a = e.cy,
          t = this;
        t.stopped = !1, !0 !== e.animate && !1 !== e.animate || t.emit({
          type: "layoutstart",
          layout: t
        }), Hi = !0 === e.debug;
        var n = Yi(a, t, e);
        Hi && (void 0)(n), e.randomize && $i(n);
        var r = Z(),
          i = function() {
            ac(n, a, e), !0 === e.fit && a.fit(e.padding)
          },
          c = function(a) {
            return !(t.stopped || a >= e.numIter) && (tc(n, e), n.temperature = n.temperature * e.coolingFactor, !(n.temperature < e.minTemp))
          },
          o = function() {
            if (!0 === e.animate || !1 === e.animate) i(), t.one("layoutstop", e.stop), t.emit({
              type: "layoutstop",
              layout: t
            });
            else {
              var a = e.eles.nodes(),
                r = ec(n, e, a);
              a.layoutPositions(t, e, r)
            }
          },
          s = 0,
          l = !0;
        if (!0 === e.animate) {
          ! function a() {
            for (var t = 0; l && t < e.refresh;) l = c(s), s++, t++;
            l ? (Z() - r >= e.animationThreshold && i(), q(a)) : (gc(n, e), o())
          }()
        } else {
          for (; l;) l = c(s), s++;
          gc(n, e), o()
        }
        return this
      }, Ki.prototype.stop = function() {
        return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this
      }, Ki.prototype.destroy = function() {
        return this.thread && this.thread.stop(), this
      };
      var Yi = function(e, a, t) {
          for (var n = t.eles.edges(), r = t.eles.nodes(), i = {
              isCompound: e.hasCompoundNodes(),
              layoutNodes: [],
              idToIndex: {},
              nodeSize: r.size(),
              graphSet: [],
              indexToGraph: [],
              layoutEdges: [],
              edgeSize: n.size(),
              temperature: t.initialTemp,
              clientWidth: e.width(),
              clientHeight: e.width(),
              boundingBox: $e(t.boundingBox ? t.boundingBox : {
                x1: 0,
                y1: 0,
                w: e.width(),
                h: e.height()
              })
            }, c = t.eles.components(), o = {}, s = 0; s < c.length; s++)
            for (var l = c[s], d = 0; d < l.length; d++) {
              o[l[d].id()] = s
            }
          for (s = 0; s < i.nodeSize; s++) {
            var u = (y = r[s]).layoutDimensions(t);
            (k = {}).isLocked = y.locked(), k.id = y.data("id"), k.parentId = y.data("parent"), k.cmptId = o[y.id()], k.children = [], k.positionX = y.position("x"), k.positionY = y.position("y"), k.offsetX = 0, k.offsetY = 0, k.height = u.w, k.width = u.h, k.maxX = k.positionX + k.width / 2, k.minX = k.positionX - k.width / 2, k.maxY = k.positionY + k.height / 2, k.minY = k.positionY - k.height / 2, k.padLeft = parseFloat(y.style("padding")), k.padRight = parseFloat(y.style("padding")), k.padTop = parseFloat(y.style("padding")), k.padBottom = parseFloat(y.style("padding")), k.nodeRepulsion = _(t.nodeRepulsion) ? t.nodeRepulsion(y) : t.nodeRepulsion, i.layoutNodes.push(k), i.idToIndex[k.id] = s
          }
          var h = [],
            m = 0,
            g = -1,
            p = [];
          for (s = 0; s < i.nodeSize; s++) {
            var y, f = (y = i.layoutNodes[s]).parentId;
            null != f ? i.layoutNodes[i.idToIndex[f]].children.push(y.id) : (h[++g] = y.id, p.push(y.id))
          }
          for (i.graphSet.push(p); m <= g;) {
            var v = h[m++],
              S = i.idToIndex[v],
              b = i.layoutNodes[S].children;
            if (b.length > 0) {
              i.graphSet.push(b);
              for (s = 0; s < b.length; s++) h[++g] = b[s]
            }
          }
          for (s = 0; s < i.graphSet.length; s++) {
            var w = i.graphSet[s];
            for (d = 0; d < w.length; d++) {
              var C = i.idToIndex[w[d]];
              i.indexToGraph[C] = s
            }
          }
          for (s = 0; s < i.edgeSize; s++) {
            var N = n[s],
              B = {};
            B.id = N.data("id"), B.sourceId = N.data("source"), B.targetId = N.data("target");
            var D = _(t.idealEdgeLength) ? t.idealEdgeLength(N) : t.idealEdgeLength,
              x = _(t.edgeElasticity) ? t.edgeElasticity(N) : t.edgeElasticity,
              I = i.idToIndex[B.sourceId],
              T = i.idToIndex[B.targetId];
            if (i.indexToGraph[I] != i.indexToGraph[T]) {
              for (var U = Xi(B.sourceId, B.targetId, i), P = i.graphSet[U], M = 0, k = i.layoutNodes[I]; - 1 === P.indexOf(k.id);) k = i.layoutNodes[i.idToIndex[k.parentId]], M++;
              for (k = i.layoutNodes[T]; - 1 === P.indexOf(k.id);) k = i.layoutNodes[i.idToIndex[k.parentId]], M++;
              D *= M * t.nestingFactor
            }
            B.idealLength = D, B.elasticity = x, i.layoutEdges.push(B)
          }
          return i
        },
        Xi = function(e, a, t) {
          var n = Ji(e, a, 0, t);
          return 2 > n.count ? 0 : n.graph
        },
        Ji = function e(a, t, n, r) {
          var i = r.graphSet[n];
          if (-1 < i.indexOf(a) && -1 < i.indexOf(t)) return {
            count: 2,
            graph: n
          };
          for (var c = 0, o = 0; o < i.length; o++) {
            var s = i[o],
              l = r.idToIndex[s],
              d = r.layoutNodes[l].children;
            if (0 !== d.length) {
              var u = e(a, t, r.indexToGraph[r.idToIndex[d[0]]], r);
              if (0 !== u.count) {
                if (1 !== u.count) return u;
                if (2 === ++c) break
              }
            }
          }
          return {
            count: c,
            graph: n
          }
        },
        $i = function(e, a) {
          for (var t = e.clientWidth, n = e.clientHeight, r = 0; r < e.nodeSize; r++) {
            var i = e.layoutNodes[r];
            0 !== i.children.length || i.isLocked || (i.positionX = Math.random() * t, i.positionY = Math.random() * n)
          }
        },
        ec = function(e, a, t) {
          var n = e.boundingBox,
            r = {
              x1: 1 / 0,
              x2: -1 / 0,
              y1: 1 / 0,
              y2: -1 / 0
            };
          return a.boundingBox && (t.forEach((function(a) {
              var t = e.layoutNodes[e.idToIndex[a.data("id")]];
              r.x1 = Math.min(r.x1, t.positionX), r.x2 = Math.max(r.x2, t.positionX), r.y1 = Math.min(r.y1, t.positionY), r.y2 = Math.max(r.y2, t.positionY)
            })), r.w = r.x2 - r.x1, r.h = r.y2 - r.y1),
            function(t, i) {
              var c = e.layoutNodes[e.idToIndex[t.data("id")]];
              if (a.boundingBox) {
                var o = (c.positionX - r.x1) / r.w,
                  s = (c.positionY - r.y1) / r.h;
                return {
                  x: n.x1 + o * n.w,
                  y: n.y1 + s * n.h
                }
              }
              return {
                x: c.positionX,
                y: c.positionY
              }
            }
        },
        ac = function(e, a, t) {
          var n = t.layout,
            r = t.eles.nodes(),
            i = ec(e, t, r);
          r.positions(i), !0 !== e.ready && (e.ready = !0, n.one("layoutready", t.ready), n.emit({
            type: "layoutready",
            layout: this
          }))
        },
        tc = function(e, a, t) {
          nc(e, a), sc(e), lc(e, a), dc(e), uc(e)
        },
        nc = function(e, a) {
          for (var t = 0; t < e.graphSet.length; t++)
            for (var n = e.graphSet[t], r = n.length, i = 0; i < r; i++)
              for (var c = e.layoutNodes[e.idToIndex[n[i]]], o = i + 1; o < r; o++) {
                var s = e.layoutNodes[e.idToIndex[n[o]]];
                ic(c, s, e, a)
              }
        },
        rc = function(e) {
          return -e + 2 * e * Math.random()
        },
        ic = function(e, a, t, n) {
          if (e.cmptId === a.cmptId || t.isCompound) {
            var r = a.positionX - e.positionX,
              i = a.positionY - e.positionY;
            0 === r && 0 === i && (r = rc(1), i = rc(1));
            var c = cc(e, a, r, i);
            if (c > 0) var o = (l = n.nodeOverlap * c) * r / (p = Math.sqrt(r * r + i * i)),
              s = l * i / p;
            else {
              var l, d = oc(e, r, i),
                u = oc(a, -1 * r, -1 * i),
                h = u.x - d.x,
                m = u.y - d.y,
                g = h * h + m * m,
                p = Math.sqrt(g);
              o = (l = (e.nodeRepulsion + a.nodeRepulsion) / g) * h / p, s = l * m / p
            }
            e.isLocked || (e.offsetX -= o, e.offsetY -= s), a.isLocked || (a.offsetX += o, a.offsetY += s)
          }
        },
        cc = function(e, a, t, n) {
          if (t > 0) var r = e.maxX - a.minX;
          else r = a.maxX - e.minX;
          if (n > 0) var i = e.maxY - a.minY;
          else i = a.maxY - e.minY;
          return r >= 0 && i >= 0 ? Math.sqrt(r * r + i * i) : 0
        },
        oc = function(e, a, t) {
          var n = e.positionX,
            r = e.positionY,
            i = e.height || 1,
            c = e.width || 1,
            o = t / a,
            s = i / c,
            l = {};
          return 0 === a && 0 < t ? (l.x = n, l.y = r + i / 2, l) : 0 === a && 0 > t ? (l.x = n, l.y = r + i / 2, l) : 0 < a && -1 * s <= o && o <= s ? (l.x = n + c / 2, l.y = r + c * t / 2 / a, l) : 0 > a && -1 * s <= o && o <= s ? (l.x = n - c / 2, l.y = r - c * t / 2 / a, l) : 0 < t && (o <= -1 * s || o >= s) ? (l.x = n + i * a / 2 / t, l.y = r + i / 2, l) : 0 > t && (o <= -1 * s || o >= s) ? (l.x = n - i * a / 2 / t, l.y = r - i / 2, l) : l
        },
        sc = function(e, a) {
          for (var t = 0; t < e.edgeSize; t++) {
            var n = e.layoutEdges[t],
              r = e.idToIndex[n.sourceId],
              i = e.layoutNodes[r],
              c = e.idToIndex[n.targetId],
              o = e.layoutNodes[c],
              s = o.positionX - i.positionX,
              l = o.positionY - i.positionY;
            if (0 !== s || 0 !== l) {
              var d = oc(i, s, l),
                u = oc(o, -1 * s, -1 * l),
                h = u.x - d.x,
                m = u.y - d.y,
                g = Math.sqrt(h * h + m * m),
                p = Math.pow(n.idealLength - g, 2) / n.elasticity;
              if (0 !== g) var y = p * h / g,
                f = p * m / g;
              else y = 0, f = 0;
              i.isLocked || (i.offsetX += y, i.offsetY += f), o.isLocked || (o.offsetX -= y, o.offsetY -= f)
            }
          }
        },
        lc = function(e, a) {
          for (var t = 0; t < e.graphSet.length; t++) {
            var n = e.graphSet[t],
              r = n.length;
            if (0 === t) var i = e.clientHeight / 2,
              c = e.clientWidth / 2;
            else {
              var o = e.layoutNodes[e.idToIndex[n[0]]],
                s = e.layoutNodes[e.idToIndex[o.parentId]];
              i = s.positionX, c = s.positionY
            }
            for (var l = 0; l < r; l++) {
              var d = e.layoutNodes[e.idToIndex[n[l]]];
              if (!d.isLocked) {
                var u = i - d.positionX,
                  h = c - d.positionY,
                  m = Math.sqrt(u * u + h * h);
                if (m > 1) {
                  var g = a.gravity * u / m,
                    p = a.gravity * h / m;
                  d.offsetX += g, d.offsetY += p
                }
              }
            }
          }
        },
        dc = function(e, a) {
          var t = [],
            n = 0,
            r = -1;
          for (t.push.apply(t, e.graphSet[0]), r += e.graphSet[0].length; n <= r;) {
            var i = t[n++],
              c = e.idToIndex[i],
              o = e.layoutNodes[c],
              s = o.children;
            if (0 < s.length && !o.isLocked) {
              for (var l = o.offsetX, d = o.offsetY, u = 0; u < s.length; u++) {
                var h = e.layoutNodes[e.idToIndex[s[u]]];
                h.offsetX += l, h.offsetY += d, t[++r] = s[u]
              }
              o.offsetX = 0, o.offsetY = 0
            }
          }
        },
        uc = function(e, a) {
          for (var t = 0; t < e.nodeSize; t++) {
            0 < (r = e.layoutNodes[t]).children.length && (r.maxX = void 0, r.minX = void 0, r.maxY = void 0, r.minY = void 0)
          }
          for (t = 0; t < e.nodeSize; t++) {
            if (!(0 < (r = e.layoutNodes[t]).children.length || r.isLocked)) {
              var n = hc(r.offsetX, r.offsetY, e.temperature);
              r.positionX += n.x, r.positionY += n.y, r.offsetX = 0, r.offsetY = 0, r.minX = r.positionX - r.width, r.maxX = r.positionX + r.width, r.minY = r.positionY - r.height, r.maxY = r.positionY + r.height, mc(r, e)
            }
          }
          for (t = 0; t < e.nodeSize; t++) {
            var r;
            0 < (r = e.layoutNodes[t]).children.length && !r.isLocked && (r.positionX = (r.maxX + r.minX) / 2, r.positionY = (r.maxY + r.minY) / 2, r.width = r.maxX - r.minX, r.height = r.maxY - r.minY)
          }
        },
        hc = function(e, a, t) {
          var n = Math.sqrt(e * e + a * a);
          if (n > t) var r = {
            x: t * e / n,
            y: t * a / n
          };
          else r = {
            x: e,
            y: a
          };
          return r
        },
        mc = function e(a, t) {
          var n = a.parentId;
          if (null != n) {
            var r = t.layoutNodes[t.idToIndex[n]],
              i = !1;
            return (null == r.maxX || a.maxX + r.padRight > r.maxX) && (r.maxX = a.maxX + r.padRight, i = !0), (null == r.minX || a.minX - r.padLeft < r.minX) && (r.minX = a.minX - r.padLeft, i = !0), (null == r.maxY || a.maxY + r.padBottom > r.maxY) && (r.maxY = a.maxY + r.padBottom, i = !0), (null == r.minY || a.minY - r.padTop < r.minY) && (r.minY = a.minY - r.padTop, i = !0), i ? e(r, t) : void 0
          }
        },
        gc = function(e, a) {
          for (var t = e.layoutNodes, n = [], r = 0; r < t.length; r++) {
            var i = t[r],
              c = i.cmptId;
            (n[c] = n[c] || []).push(i)
          }
          var o = 0;
          for (r = 0; r < n.length; r++) {
            if (p = n[r]) {
              p.x1 = 1 / 0, p.x2 = -1 / 0, p.y1 = 1 / 0, p.y2 = -1 / 0;
              for (var s = 0; s < p.length; s++) {
                var l = p[s];
                p.x1 = Math.min(p.x1, l.positionX - l.width / 2), p.x2 = Math.max(p.x2, l.positionX + l.width / 2), p.y1 = Math.min(p.y1, l.positionY - l.height / 2), p.y2 = Math.max(p.y2, l.positionY + l.height / 2)
              }
              p.w = p.x2 - p.x1, p.h = p.y2 - p.y1, o += p.w * p.h
            }
          }
          n.sort((function(e, a) {
            return a.w * a.h - e.w * e.h
          }));
          var d = 0,
            u = 0,
            h = 0,
            m = 0,
            g = Math.sqrt(o) * e.clientWidth / e.clientHeight;
          for (r = 0; r < n.length; r++) {
            var p;
            if (p = n[r]) {
              for (s = 0; s < p.length; s++) {
                (l = p[s]).isLocked || (l.positionX += d - p.x1, l.positionY += u - p.y1)
              }
              d += p.w + a.componentSpacing, h += p.w + a.componentSpacing, m = Math.max(m, p.h), h > g && (u += m + a.componentSpacing, d = 0, h = 0, m = 0)
            }
          }
        },
        pc = {
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          avoidOverlap: !0,
          avoidOverlapPadding: 10,
          nodeDimensionsIncludeLabels: !1,
          spacingFactor: void 0,
          condense: !1,
          rows: void 0,
          cols: void 0,
          position: function(e) {},
          sort: void 0,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function(e, a) {
            return !0
          },
          ready: void 0,
          stop: void 0,
          transform: function(e, a) {
            return a
          }
        };

      function yc(e) {
        this.options = F({}, pc, e)
      }
      yc.prototype.run = function() {
        var e = this.options,
          a = e,
          t = e.cy,
          n = a.eles.nodes().not(":parent");
        a.sort && (n = n.sort(a.sort));
        var r = $e(a.boundingBox ? a.boundingBox : {
          x1: 0,
          y1: 0,
          w: t.width(),
          h: t.height()
        });
        if (0 === r.h || 0 === r.w) n.layoutPositions(this, a, (function(e) {
          return {
            x: r.x1,
            y: r.y1
          }
        }));
        else {
          var i = n.size(),
            c = Math.sqrt(i * r.h / r.w),
            o = Math.round(c),
            s = Math.round(r.w / r.h * c),
            l = function(e) {
              if (null == e) return Math.min(o, s);
              Math.min(o, s) == o ? o = e : s = e
            },
            d = function(e) {
              if (null == e) return Math.max(o, s);
              Math.max(o, s) == o ? o = e : s = e
            },
            u = a.rows,
            h = null != a.cols ? a.cols : a.columns;
          if (null != u && null != h) o = u, s = h;
          else if (null != u && null == h) o = u, s = Math.ceil(i / o);
          else if (null == u && null != h) s = h, o = Math.ceil(i / s);
          else if (s * o > i) {
            var m = l(),
              g = d();
            (m - 1) * g >= i ? l(m - 1) : (g - 1) * m >= i && d(g - 1)
          } else
            for (; s * o < i;) {
              var p = l(),
                y = d();
              (y + 1) * p >= i ? d(y + 1) : l(p + 1)
            }
          var f = r.w / s,
            v = r.h / o;
          if (a.condense && (f = 0, v = 0), a.avoidOverlap)
            for (var _ = 0; _ < n.length; _++) {
              var S = n[_],
                b = S._private.position;
              null != b.x && null != b.y || (b.x = 0, b.y = 0);
              var w = S.layoutDimensions(a),
                C = a.avoidOverlapPadding,
                N = w.w + C,
                B = w.h + C;
              f = Math.max(f, N), v = Math.max(v, B)
            }
          for (var D = {}, x = function(e, a) {
              return !!D["c-" + e + "-" + a]
            }, I = function(e, a) {
              D["c-" + e + "-" + a] = !0
            }, T = 0, U = 0, P = function() {
              ++U >= s && (U = 0, T++)
            }, M = {}, k = 0; k < n.length; k++) {
            var A = n[k],
              R = a.position(A);
            if (R && (void 0 !== R.row || void 0 !== R.col)) {
              var E = {
                row: R.row,
                col: R.col
              };
              if (void 0 === E.col)
                for (E.col = 0; x(E.row, E.col);) E.col++;
              else if (void 0 === E.row)
                for (E.row = 0; x(E.row, E.col);) E.row++;
              M[A.id()] = E, I(E.row, E.col)
            }
          }
          n.layoutPositions(this, a, (function(e, a) {
            var t, n;
            if (e.locked() || e.isParent()) return !1;
            var i = M[e.id()];
            if (i) t = i.col * f + f / 2 + r.x1, n = i.row * v + v / 2 + r.y1;
            else {
              for (; x(T, U);) P();
              t = U * f + f / 2 + r.x1, n = T * v + v / 2 + r.y1, I(T, U), P()
            }
            return {
              x: t,
              y: n
            }
          }))
        }
        return this
      };
      var fc = {
        ready: function() {},
        stop: function() {}
      };

      function vc(e) {
        this.options = F({}, fc, e)
      }
      vc.prototype.run = function() {
        var e = this.options,
          a = e.eles;
        e.cy;
        return this.emit("layoutstart"), a.nodes().positions((function() {
          return {
            x: 0,
            y: 0
          }
        })), this.one("layoutready", e.ready), this.emit("layoutready"), this.one("layoutstop", e.stop), this.emit("layoutstop"), this
      }, vc.prototype.stop = function() {
        return this
      };
      var _c = {
        positions: void 0,
        zoom: void 0,
        pan: void 0,
        fit: !0,
        padding: 30,
        animate: !1,
        animationDuration: 500,
        animationEasing: void 0,
        animateFilter: function(e, a) {
          return !0
        },
        ready: void 0,
        stop: void 0,
        transform: function(e, a) {
          return a
        }
      };

      function Sc(e) {
        this.options = F({}, _c, e)
      }
      Sc.prototype.run = function() {
        var e = this.options,
          a = e.eles.nodes(),
          t = _(e.positions);
        return a.layoutPositions(this, e, (function(a, n) {
          var r = function(a) {
            if (null == e.positions) return Le(a.position());
            if (t) return e.positions(a);
            var n = e.positions[a._private.data.id];
            return null == n ? null : n
          }(a);
          return !a.locked() && null != r && r
        })), this
      };
      var bc = {
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        animate: !1,
        animationDuration: 500,
        animationEasing: void 0,
        animateFilter: function(e, a) {
          return !0
        },
        ready: void 0,
        stop: void 0,
        transform: function(e, a) {
          return a
        }
      };

      function wc(e) {
        this.options = F({}, bc, e)
      }
      wc.prototype.run = function() {
        var e = this.options,
          a = e.cy,
          t = e.eles.nodes().not(":parent"),
          n = $e(e.boundingBox ? e.boundingBox : {
            x1: 0,
            y1: 0,
            w: a.width(),
            h: a.height()
          });
        return t.layoutPositions(this, e, (function(e, a) {
          return {
            x: n.x1 + Math.round(Math.random() * n.w),
            y: n.y1 + Math.round(Math.random() * n.h)
          }
        })), this
      };
      var Cc = [{
        name: "breadthfirst",
        impl: Wi
      }, {
        name: "circle",
        impl: Oi
      }, {
        name: "concentric",
        impl: qi
      }, {
        name: "cose",
        impl: Ki
      }, {
        name: "grid",
        impl: yc
      }, {
        name: "null",
        impl: vc
      }, {
        name: "preset",
        impl: Sc
      }, {
        name: "random",
        impl: wc
      }];

      function Nc(e) {
        this.options = e, this.notifications = 0
      }
      var Bc = function() {},
        Dc = function() {
          throw new Error("A headless instance can not render images")
        };
      Nc.prototype = {
        recalculateRenderedStyle: Bc,
        notify: function() {
          this.notifications++
        },
        init: Bc,
        isHeadless: function() {
          return !0
        },
        png: Dc,
        jpg: Dc
      };
      var xc = {
          arrowShapeWidth: .3,
          registerArrowShapes: function() {
            var e = this.arrowShapes = {},
              a = this,
              t = function(e, a, t, n, r, i, c) {
                var o = r.x - t / 2 - c,
                  s = r.x + t / 2 + c,
                  l = r.y - t / 2 - c,
                  d = r.y + t / 2 + c;
                return o <= e && e <= s && l <= a && a <= d
              },
              n = function(e, a, t, n, r) {
                var i = e * Math.cos(n) - a * Math.sin(n),
                  c = (e * Math.sin(n) + a * Math.cos(n)) * t;
                return {
                  x: i * t + r.x,
                  y: c + r.y
                }
              },
              r = function(e, a, t, r) {
                for (var i = [], c = 0; c < e.length; c += 2) {
                  var o = e[c],
                    s = e[c + 1];
                  i.push(n(o, s, a, t, r))
                }
                return i
              },
              i = function(e) {
                for (var a = [], t = 0; t < e.length; t++) {
                  var n = e[t];
                  a.push(n.x, n.y)
                }
                return a
              },
              c = function(e) {
                return e.pstyle("width").pfValue * e.pstyle("arrow-scale").pfValue * 2
              },
              o = function(n, o) {
                v(o) && (o = e[o]), e[n] = F({
                  name: n,
                  points: [-.15, -.3, .15, -.3, .15, .3, -.15, .3],
                  collide: function(e, a, t, n, c, o) {
                    var s = i(r(this.points, t + 2 * o, n, c));
                    return ma(e, a, s)
                  },
                  roughCollide: t,
                  draw: function(e, t, n, i) {
                    var c = r(this.points, t, n, i);
                    a.arrowShapeImpl("polygon")(e, c)
                  },
                  spacing: function(e) {
                    return 0
                  },
                  gap: c
                }, o)
              };
            o("none", {
              collide: ce,
              roughCollide: ce,
              draw: se,
              spacing: oe,
              gap: oe
            }), o("triangle", {
              points: [-.15, -.3, 0, 0, .15, -.3]
            }), o("arrow", "triangle"), o("triangle-backcurve", {
              points: e.triangle.points,
              controlPoint: [0, -.15],
              roughCollide: t,
              draw: function(e, t, i, c, o) {
                var s = r(this.points, t, i, c),
                  l = this.controlPoint,
                  d = n(l[0], l[1], t, i, c);
                a.arrowShapeImpl(this.name)(e, s, d)
              },
              gap: function(e) {
                return .8 * c(e)
              }
            }), o("triangle-tee", {
              points: [0, 0, .15, -.3, -.15, -.3, 0, 0],
              pointsTee: [-.15, -.4, -.15, -.5, .15, -.5, .15, -.4],
              collide: function(e, a, t, n, c, o, s) {
                var l = i(r(this.points, t + 2 * s, n, c)),
                  d = i(r(this.pointsTee, t + 2 * s, n, c));
                return ma(e, a, l) || ma(e, a, d)
              },
              draw: function(e, t, n, i, c) {
                var o = r(this.points, t, n, i),
                  s = r(this.pointsTee, t, n, i);
                a.arrowShapeImpl(this.name)(e, o, s)
              }
            }), o("triangle-cross", {
              points: [0, 0, .15, -.3, -.15, -.3, 0, 0],
              baseCrossLinePts: [-.15, -.4, -.15, -.4, .15, -.4, .15, -.4],
              crossLinePts: function(e, a) {
                var t = this.baseCrossLinePts.slice(),
                  n = a / e;
                return t[3] = t[3] - n, t[5] = t[5] - n, t
              },
              collide: function(e, a, t, n, c, o, s) {
                var l = i(r(this.points, t + 2 * s, n, c)),
                  d = i(r(this.crossLinePts(t, o), t + 2 * s, n, c));
                return ma(e, a, l) || ma(e, a, d)
              },
              draw: function(e, t, n, i, c) {
                var o = r(this.points, t, n, i),
                  s = r(this.crossLinePts(t, c), t, n, i);
                a.arrowShapeImpl(this.name)(e, o, s)
              }
            }), o("vee", {
              points: [-.15, -.3, 0, 0, .15, -.3, 0, -.15],
              gap: function(e) {
                return .525 * c(e)
              }
            }), o("circle", {
              radius: .15,
              collide: function(e, a, t, n, r, i, c) {
                var o = r;
                return Math.pow(o.x - e, 2) + Math.pow(o.y - a, 2) <= Math.pow((t + 2 * c) * this.radius, 2)
              },
              draw: function(e, t, n, r, i) {
                a.arrowShapeImpl(this.name)(e, r.x, r.y, this.radius * t)
              },
              spacing: function(e) {
                return a.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.radius
              }
            }), o("tee", {
              points: [-.15, 0, -.15, -.1, .15, -.1, .15, 0],
              spacing: function(e) {
                return 1
              },
              gap: function(e) {
                return 1
              }
            }), o("square", {
              points: [-.15, 0, .15, 0, .15, -.3, -.15, -.3]
            }), o("diamond", {
              points: [-.15, -.15, 0, -.3, .15, -.15, 0, 0],
              gap: function(e) {
                return e.pstyle("width").pfValue * e.pstyle("arrow-scale").value
              }
            }), o("chevron", {
              points: [0, 0, -.15, -.15, -.1, -.2, 0, -.1, .1, -.2, .15, -.15],
              gap: function(e) {
                return .95 * e.pstyle("width").pfValue * e.pstyle("arrow-scale").value
              }
            })
          }
        },
        Ic = {
          projectIntoViewport: function(e, a) {
            var t = this.cy,
              n = this.findContainerClientCoords(),
              r = n[0],
              i = n[1],
              c = n[4],
              o = t.pan(),
              s = t.zoom();
            return [((e - r) / c - o.x) / s, ((a - i) / c - o.y) / s]
          },
          findContainerClientCoords: function() {
            if (this.containerBB) return this.containerBB;
            var e = this.container,
              a = e.getBoundingClientRect(),
              t = u.getComputedStyle(e),
              n = function(e) {
                return parseFloat(t.getPropertyValue(e))
              },
              r = n("padding-left"),
              i = n("padding-right"),
              c = n("padding-top"),
              o = n("padding-bottom"),
              s = n("border-left-width"),
              l = n("border-right-width"),
              d = n("border-top-width"),
              h = (n("border-bottom-width"), e.clientWidth),
              m = e.clientHeight,
              g = r + i,
              p = c + o,
              y = s + l,
              f = a.width / (h + y),
              v = h - g,
              _ = m - p,
              S = a.left + r + s,
              b = a.top + c + d;
            return this.containerBB = [S, b, v, _, f]
          },
          invalidateContainerClientCoordsCache: function() {
            this.containerBB = null
          },
          findNearestElement: function(e, a, t, n) {
            return this.findNearestElements(e, a, t, n)[0]
          },
          findNearestElements: function(e, a, t, n) {
            var r, i, c = this,
              o = this,
              s = o.getCachedZSortedEles(),
              l = [],
              d = o.cy.zoom(),
              u = o.cy.hasCompoundNodes(),
              h = (n ? 24 : 8) / d,
              m = (n ? 8 : 2) / d,
              g = (n ? 8 : 2) / d,
              p = 1 / 0;

            function y(e, a) {
              if (e.isNode()) {
                if (i) return;
                i = e, l.push(e)
              }
              if (e.isEdge() && (null == a || a < p))
                if (r) {
                  if (r.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value && r.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value)
                    for (var t = 0; t < l.length; t++)
                      if (l[t].isEdge()) {
                        l[t] = e, r = e, p = null != a ? a : p;
                        break
                      }
                } else l.push(e), r = e, p = null != a ? a : p
            }

            function f(t) {
              var n = t.outerWidth() + 2 * m,
                r = t.outerHeight() + 2 * m,
                i = n / 2,
                s = r / 2,
                l = t.position();
              if (l.x - i <= e && e <= l.x + i && l.y - s <= a && a <= l.y + s && o.nodeShapes[c.getNodeShape(t)].checkPoint(e, a, 0, n, r, l.x, l.y)) return y(t, 0), !0
            }

            function v(t) {
              var n, r = t._private,
                i = r.rscratch,
                s = t.pstyle("width").pfValue,
                d = t.pstyle("arrow-scale").value,
                m = s / 2 + h,
                g = m * m,
                p = 2 * m,
                v = r.source,
                _ = r.target;
              if ("segments" === i.edgeType || "straight" === i.edgeType || "haystack" === i.edgeType) {
                for (var S = i.allpts, b = 0; b + 3 < S.length; b += 2)
                  if (la(e, a, S[b], S[b + 1], S[b + 2], S[b + 3], p) && g > (n = ha(e, a, S[b], S[b + 1], S[b + 2], S[b + 3]))) return y(t, n), !0
              } else if ("bezier" === i.edgeType || "multibezier" === i.edgeType || "self" === i.edgeType || "compound" === i.edgeType)
                for (S = i.allpts, b = 0; b + 5 < i.allpts.length; b += 4)
                  if (da(e, a, S[b], S[b + 1], S[b + 2], S[b + 3], S[b + 4], S[b + 5], p) && g > (n = ua(e, a, S[b], S[b + 1], S[b + 2], S[b + 3], S[b + 4], S[b + 5]))) return y(t, n), !0;
              v = v || r.source, _ = _ || r.target;
              var w = c.getArrowWidth(s, d),
                C = [{
                  name: "source",
                  x: i.arrowStartX,
                  y: i.arrowStartY,
                  angle: i.srcArrowAngle
                }, {
                  name: "target",
                  x: i.arrowEndX,
                  y: i.arrowEndY,
                  angle: i.tgtArrowAngle
                }, {
                  name: "mid-source",
                  x: i.midX,
                  y: i.midY,
                  angle: i.midsrcArrowAngle
                }, {
                  name: "mid-target",
                  x: i.midX,
                  y: i.midY,
                  angle: i.midtgtArrowAngle
                }];
              for (b = 0; b < C.length; b++) {
                var N = C[b],
                  B = o.arrowShapes[t.pstyle(N.name + "-arrow-shape").value],
                  D = t.pstyle("width").pfValue;
                if (B.roughCollide(e, a, w, N.angle, {
                    x: N.x,
                    y: N.y
                  }, D, h) && B.collide(e, a, w, N.angle, {
                    x: N.x,
                    y: N.y
                  }, D, h)) return y(t), !0
              }
              u && l.length > 0 && (f(v), f(_))
            }

            function _(e, a, t) {
              return _e(e, a, t)
            }

            function S(t, n) {
              var r, i = t._private,
                c = g;
              r = n ? n + "-" : "", t.boundingBox();
              var o = i.labelBounds[n || "main"],
                s = t.pstyle(r + "label").value;
              if ("yes" === t.pstyle("text-events").strValue && s) {
                var l = i.rstyle,
                  d = _(l, "labelX", n),
                  u = _(l, "labelY", n),
                  h = _(i.rscratch, "labelAngle", n),
                  m = o.x1 - c,
                  p = o.x2 + c,
                  f = o.y1 - c,
                  v = o.y2 + c;
                if (h) {
                  var S = Math.cos(h),
                    b = Math.sin(h),
                    w = function(e, a) {
                      return {
                        x: (e -= d) * S - (a -= u) * b + d,
                        y: e * b + a * S + u
                      }
                    },
                    C = w(m, f),
                    N = w(m, v),
                    B = w(p, f),
                    D = w(p, v),
                    x = [C.x, C.y, B.x, B.y, D.x, D.y, N.x, N.y];
                  if (ma(e, a, x)) return y(t), !0
                } else if (ca(o, e, a)) return y(t), !0
              }
            }
            t && (s = s.interactive);
            for (var b = s.length - 1; b >= 0; b--) {
              var w = s[b];
              w.isNode() ? f(w) || S(w) : v(w) || S(w) || S(w, "source") || S(w, "target")
            }
            return l
          },
          getAllInBox: function(e, a, t, n) {
            for (var r, i, c = this.getCachedZSortedEles().interactive, o = [], s = Math.min(e, t), l = Math.max(e, t), d = Math.min(a, n), u = Math.max(a, n), h = $e({
                x1: e = s,
                y1: a = d,
                x2: t = l,
                y2: n = u
              }), m = 0; m < c.length; m++) {
              var g = c[m];
              if (g.isNode()) {
                var p = g,
                  y = p.boundingBox({
                    includeNodes: !0,
                    includeEdges: !1,
                    includeLabels: !1
                  });
                ia(h, y) && !oa(y, h) && o.push(p)
              } else {
                var f = g,
                  v = f._private,
                  _ = v.rscratch;
                if (null != _.startX && null != _.startY && !ca(h, _.startX, _.startY)) continue;
                if (null != _.endX && null != _.endY && !ca(h, _.endX, _.endY)) continue;
                if ("bezier" === _.edgeType || "multibezier" === _.edgeType || "self" === _.edgeType || "compound" === _.edgeType || "segments" === _.edgeType || "haystack" === _.edgeType) {
                  for (var S = v.rstyle.bezierPts || v.rstyle.linePts || v.rstyle.haystackPts, b = !0, w = 0; w < S.length; w++)
                    if (r = h, i = S[w], !ca(r, i.x, i.y)) {
                      b = !1;
                      break
                    } b && o.push(f)
                } else "haystack" !== _.edgeType && "straight" !== _.edgeType || o.push(f)
              }
            }
            return o
          }
        },
        Tc = {
          calculateArrowAngles: function(e) {
            var a, t, n, r, i, c, o = e._private.rscratch,
              s = "haystack" === o.edgeType,
              l = "bezier" === o.edgeType,
              d = "multibezier" === o.edgeType,
              u = "segments" === o.edgeType,
              h = "compound" === o.edgeType,
              m = "self" === o.edgeType;
            if (s ? (n = o.haystackPts[0], r = o.haystackPts[1], i = o.haystackPts[2], c = o.haystackPts[3]) : (n = o.arrowStartX, r = o.arrowStartY, i = o.arrowEndX, c = o.arrowEndY), p = o.midX, y = o.midY, u) a = n - o.segpts[0], t = r - o.segpts[1];
            else if (d || h || m || l) {
              var g = o.allpts;
              a = n - Ye(g[0], g[2], g[4], .1), t = r - Ye(g[1], g[3], g[5], .1)
            } else a = n - p, t = r - y;
            o.srcArrowAngle = Oe(a, t);
            var p = o.midX,
              y = o.midY;
            if (s && (p = (n + i) / 2, y = (r + c) / 2), a = i - n, t = c - r, u)
              if ((g = o.allpts).length / 2 % 2 == 0) {
                var f = (v = g.length / 2) - 2;
                a = g[v] - g[f], t = g[v + 1] - g[f + 1]
              } else {
                f = (v = g.length / 2 - 1) - 2;
                var v, _ = v + 2;
                a = g[v] - g[f], t = g[v + 1] - g[f + 1]
              }
            else if (d || h || m) {
              var S, b, w, C, g = o.allpts;
              if (o.ctrlpts.length / 2 % 2 == 0) {
                var N = (B = (D = g.length / 2 - 1) + 2) + 2;
                S = Ye(g[D], g[B], g[N], 0), b = Ye(g[D + 1], g[B + 1], g[N + 1], 0), w = Ye(g[D], g[B], g[N], 1e-4), C = Ye(g[D + 1], g[B + 1], g[N + 1], 1e-4)
              } else {
                var B, D;
                N = (B = g.length / 2 - 1) + 2;
                S = Ye(g[D = B - 2], g[B], g[N], .4999), b = Ye(g[D + 1], g[B + 1], g[N + 1], .4999), w = Ye(g[D], g[B], g[N], .5), C = Ye(g[D + 1], g[B + 1], g[N + 1], .5)
              }
              a = w - S, t = C - b
            }(o.midtgtArrowAngle = Oe(a, t), o.midDispX = a, o.midDispY = t, a *= -1, t *= -1, u) && ((g = o.allpts).length / 2 % 2 == 0 || (a = -(g[_ = (v = g.length / 2 - 1) + 2] - g[v]), t = -(g[_ + 1] - g[v + 1])));
            if (o.midsrcArrowAngle = Oe(a, t), u) a = i - o.segpts[o.segpts.length - 2], t = c - o.segpts[o.segpts.length - 1];
            else if (d || h || m || l) {
              var x = (g = o.allpts).length;
              a = i - Ye(g[x - 6], g[x - 4], g[x - 2], .9), t = c - Ye(g[x - 5], g[x - 3], g[x - 1], .9)
            } else a = i - p, t = c - y;
            o.tgtArrowAngle = Oe(a, t)
          }
        };
      Tc.getArrowWidth = Tc.getArrowHeight = function(e, a) {
        var t = this.arrowWidthCache = this.arrowWidthCache || {},
          n = t[e + ", " + a];
        return n || (n = Math.max(Math.pow(13.37 * e, .9), 29) * a, t[e + ", " + a] = n, n)
      };
      var Uc = {};

      function Pc(e) {
        var a = [];
        if (null != e) {
          for (var t = 0; t < e.length; t += 2) {
            var n = e[t],
              r = e[t + 1];
            a.push({
              x: n,
              y: r
            })
          }
          return a
        }
      }
      Uc.findHaystackPoints = function(e) {
        for (var a = 0; a < e.length; a++) {
          var t = e[a],
            n = t._private,
            r = n.rscratch;
          if (!r.haystack) {
            var i = 2 * Math.random() * Math.PI;
            r.source = {
              x: Math.cos(i),
              y: Math.sin(i)
            }, i = 2 * Math.random() * Math.PI, r.target = {
              x: Math.cos(i),
              y: Math.sin(i)
            }
          }
          var c = n.source,
            o = n.target,
            s = c.position(),
            l = o.position(),
            d = c.width(),
            u = o.width(),
            h = c.height(),
            m = o.height(),
            g = t.pstyle("haystack-radius").value / 2;
          r.haystackPts = r.allpts = [r.source.x * d * g + s.x, r.source.y * h * g + s.y, r.target.x * u * g + l.x, r.target.y * m * g + l.y], r.midX = (r.allpts[0] + r.allpts[2]) / 2, r.midY = (r.allpts[1] + r.allpts[3]) / 2, r.edgeType = "haystack", r.haystack = !0, this.storeEdgeProjections(t), this.calculateArrowAngles(t), this.recalculateEdgeLabelProjections(t), this.calculateLabelAngles(t)
        }
      }, Uc.findSegmentsPoints = function(e, a) {
        var t = e._private.rscratch,
          n = a.posPts,
          r = a.intersectionPts,
          i = a.vectorNormInverse,
          c = e.pstyle("edge-distances").value,
          o = e.pstyle("segment-weights"),
          s = e.pstyle("segment-distances"),
          l = Math.min(o.pfValue.length, s.pfValue.length);
        t.edgeType = "segments", t.segpts = [];
        for (var d = 0; d < l; d++) {
          var u = o.pfValue[d],
            h = s.pfValue[d],
            m = 1 - u,
            g = u,
            p = "node-position" === c ? n : r,
            y = {
              x: p.x1 * m + p.x2 * g,
              y: p.y1 * m + p.y2 * g
            };
          t.segpts.push(y.x + i.x * h, y.y + i.y * h)
        }
      }, Uc.findLoopPoints = function(e, a, t, n) {
        var r = e._private.rscratch,
          i = a.dirCounts,
          c = a.srcPos,
          o = e.pstyle("control-point-distances"),
          s = o ? o.pfValue[0] : void 0,
          l = e.pstyle("loop-direction").pfValue,
          d = e.pstyle("loop-sweep").pfValue,
          u = e.pstyle("control-point-step-size").pfValue;
        r.edgeType = "self";
        var h = t,
          m = u;
        n && (h = 0, m = s);
        var g = l - Math.PI / 2,
          p = g - d / 2,
          y = g + d / 2,
          f = String(l + "_" + d);
        h = void 0 === i[f] ? i[f] = 0 : ++i[f], r.ctrlpts = [c.x + 1.4 * Math.cos(p) * m * (h / 3 + 1), c.y + 1.4 * Math.sin(p) * m * (h / 3 + 1), c.x + 1.4 * Math.cos(y) * m * (h / 3 + 1), c.y + 1.4 * Math.sin(y) * m * (h / 3 + 1)]
      }, Uc.findCompoundLoopPoints = function(e, a, t, n) {
        var r = e._private.rscratch;
        r.edgeType = "compound";
        var i = a.srcPos,
          c = a.tgtPos,
          o = a.srcW,
          s = a.srcH,
          l = a.tgtW,
          d = a.tgtH,
          u = e.pstyle("control-point-step-size").pfValue,
          h = e.pstyle("control-point-distances"),
          m = h ? h.pfValue[0] : void 0,
          g = t,
          p = u;
        n && (g = 0, p = m);
        var y = {
            x: i.x - o / 2,
            y: i.y - s / 2
          },
          f = {
            x: c.x - l / 2,
            y: c.y - d / 2
          },
          v = {
            x: Math.min(y.x, f.x),
            y: Math.min(y.y, f.y)
          },
          _ = Math.max(.5, Math.log(.01 * o)),
          S = Math.max(.5, Math.log(.01 * l));
        r.ctrlpts = [v.x, v.y - (1 + Math.pow(50, 1.12) / 100) * p * (g / 3 + 1) * _, v.x - (1 + Math.pow(50, 1.12) / 100) * p * (g / 3 + 1) * S, v.y]
      }, Uc.findStraightEdgePoints = function(e) {
        e._private.rscratch.edgeType = "straight"
      }, Uc.findBezierPoints = function(e, a, t, n, r) {
        var i = e._private.rscratch,
          c = a.vectorNormInverse,
          o = a.posPts,
          s = a.intersectionPts,
          l = e.pstyle("edge-distances").value,
          d = e.pstyle("control-point-step-size").pfValue,
          u = e.pstyle("control-point-distances"),
          h = e.pstyle("control-point-weights"),
          m = u && h ? Math.min(u.value.length, h.value.length) : 1,
          g = u ? u.pfValue[0] : void 0,
          p = h.value[0],
          y = n;
        i.edgeType = y ? "multibezier" : "bezier", i.ctrlpts = [];
        for (var f = 0; f < m; f++) {
          var v = (.5 - a.eles.length / 2 + t) * d * (r ? -1 : 1),
            _ = void 0,
            S = Qe(v);
          y && (g = u ? u.pfValue[f] : d, p = h.value[f]);
          var b = void 0 !== (_ = n ? g : void 0 !== g ? S * g : void 0) ? _ : v,
            w = 1 - p,
            C = p,
            N = "node-position" === l ? o : s,
            B = {
              x: N.x1 * w + N.x2 * C,
              y: N.y1 * w + N.y2 * C
            };
          i.ctrlpts.push(B.x + c.x * b, B.y + c.y * b)
        }
      }, Uc.findTaxiPoints = function(e, a) {
        var t = e._private.rscratch;
        t.edgeType = "segments";
        var n = a.posPts,
          r = a.srcW,
          i = a.srcH,
          c = a.tgtW,
          o = a.tgtH,
          s = "node-position" !== e.pstyle("edge-distances").value,
          l = e.pstyle("taxi-direction").value,
          d = l,
          u = e.pstyle("taxi-turn"),
          h = u.pfValue,
          m = e.pstyle("taxi-turn-min-distance").pfValue,
          g = "%" === u.units,
          p = s ? (r + c) / 2 : 0,
          y = s ? (i + o) / 2 : 0,
          f = n.x2 - n.x1,
          v = n.y2 - n.y1,
          _ = function(e, a) {
            return e > 0 ? Math.max(e - a, 0) : Math.min(e + a, 0)
          },
          S = _(f, p),
          b = _(v, y),
          w = !1;
        "auto" === l ? l = Math.abs(S) > Math.abs(b) ? "horizontal" : "vertical" : "upward" === l || "downward" === l ? (l = "vertical", w = !0) : "leftward" !== l && "rightward" !== l || (l = "horizontal", w = !0);
        var C = "vertical" === l,
          N = C ? b : S,
          B = C ? v : f,
          D = Qe(B),
          x = !1;
        w && g || !("downward" === d && B < 0 || "upward" === d && B > 0 || "leftward" === d && B > 0 || "rightward" === d && B < 0) || (N = (D *= -1) * Math.abs(N), x = !0);
        var I = g ? h * N : h * D,
          T = function(e) {
            return Math.abs(e) < m || Math.abs(e) >= Math.abs(N)
          },
          U = T(I),
          P = T(N - I);
        if ((U || P) && !x)
          if (C) {
            var M = Math.abs(B) <= i / 2,
              k = Math.abs(f) <= c / 2;
            if (M) {
              var A = (n.x1 + n.x2) / 2,
                R = n.y1,
                E = n.y2;
              t.segpts = [A, R, A, E]
            } else if (k) {
              var G = (n.y1 + n.y2) / 2,
                V = n.x1,
                F = n.x2;
              t.segpts = [V, G, F, G]
            } else t.segpts = [n.x1, n.y2]
          } else {
            var L = Math.abs(B) <= r / 2,
              z = Math.abs(v) <= o / 2;
            if (L) {
              var W = (n.y1 + n.y2) / 2,
                j = n.x1,
                O = n.x2;
              t.segpts = [j, W, O, W]
            } else if (z) {
              var H = (n.x1 + n.x2) / 2,
                Q = n.y1,
                q = n.y2;
              t.segpts = [H, Q, H, q]
            } else t.segpts = [n.x2, n.y1]
          }
        else if (C) {
          var Z = n.y1 + I + (s ? i / 2 * D : 0),
            K = n.x1,
            Y = n.x2;
          t.segpts = [K, Z, Y, Z]
        } else {
          var X = n.x1 + I + (s ? r / 2 * D : 0),
            J = n.y1,
            $ = n.y2;
          t.segpts = [X, J, X, $]
        }
      }, Uc.tryToCorrectInvalidPoints = function(e, a) {
        var t = e._private.rscratch;
        if ("bezier" === t.edgeType) {
          var n = a.srcPos,
            r = a.tgtPos,
            i = a.srcW,
            c = a.srcH,
            o = a.tgtW,
            s = a.tgtH,
            l = a.srcShape,
            d = a.tgtShape,
            u = !w(t.startX) || !w(t.startY),
            h = !w(t.arrowStartX) || !w(t.arrowStartY),
            m = !w(t.endX) || !w(t.endY),
            g = !w(t.arrowEndX) || !w(t.arrowEndY),
            p = 3 * (this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth),
            y = qe({
              x: t.ctrlpts[0],
              y: t.ctrlpts[1]
            }, {
              x: t.startX,
              y: t.startY
            }),
            f = y < p,
            v = qe({
              x: t.ctrlpts[0],
              y: t.ctrlpts[1]
            }, {
              x: t.endX,
              y: t.endY
            }),
            _ = v < p,
            S = !1;
          if (u || h || f) {
            S = !0;
            var b = {
                x: t.ctrlpts[0] - n.x,
                y: t.ctrlpts[1] - n.y
              },
              C = Math.sqrt(b.x * b.x + b.y * b.y),
              N = {
                x: b.x / C,
                y: b.y / C
              },
              B = Math.max(i, c),
              D = {
                x: t.ctrlpts[0] + 2 * N.x * B,
                y: t.ctrlpts[1] + 2 * N.y * B
              },
              x = l.intersectLine(n.x, n.y, i, c, D.x, D.y, 0);
            f ? (t.ctrlpts[0] = t.ctrlpts[0] + N.x * (p - y), t.ctrlpts[1] = t.ctrlpts[1] + N.y * (p - y)) : (t.ctrlpts[0] = x[0] + N.x * p, t.ctrlpts[1] = x[1] + N.y * p)
          }
          if (m || g || _) {
            S = !0;
            var I = {
                x: t.ctrlpts[0] - r.x,
                y: t.ctrlpts[1] - r.y
              },
              T = Math.sqrt(I.x * I.x + I.y * I.y),
              U = {
                x: I.x / T,
                y: I.y / T
              },
              P = Math.max(i, c),
              M = {
                x: t.ctrlpts[0] + 2 * U.x * P,
                y: t.ctrlpts[1] + 2 * U.y * P
              },
              k = d.intersectLine(r.x, r.y, o, s, M.x, M.y, 0);
            _ ? (t.ctrlpts[0] = t.ctrlpts[0] + U.x * (p - v), t.ctrlpts[1] = t.ctrlpts[1] + U.y * (p - v)) : (t.ctrlpts[0] = k[0] + U.x * p, t.ctrlpts[1] = k[1] + U.y * p)
          }
          S && this.findEndpoints(e)
        }
      }, Uc.storeAllpts = function(e) {
        var a = e._private.rscratch;
        if ("multibezier" === a.edgeType || "bezier" === a.edgeType || "self" === a.edgeType || "compound" === a.edgeType) {
          a.allpts = [], a.allpts.push(a.startX, a.startY);
          for (var t = 0; t + 1 < a.ctrlpts.length; t += 2) a.allpts.push(a.ctrlpts[t], a.ctrlpts[t + 1]), t + 3 < a.ctrlpts.length && a.allpts.push((a.ctrlpts[t] + a.ctrlpts[t + 2]) / 2, (a.ctrlpts[t + 1] + a.ctrlpts[t + 3]) / 2);
          var n;
          a.allpts.push(a.endX, a.endY), a.ctrlpts.length / 2 % 2 == 0 ? (n = a.allpts.length / 2 - 1, a.midX = a.allpts[n], a.midY = a.allpts[n + 1]) : (n = a.allpts.length / 2 - 3, .5, a.midX = Ye(a.allpts[n], a.allpts[n + 2], a.allpts[n + 4], .5), a.midY = Ye(a.allpts[n + 1], a.allpts[n + 3], a.allpts[n + 5], .5))
        } else if ("straight" === a.edgeType) a.allpts = [a.startX, a.startY, a.endX, a.endY], a.midX = (a.startX + a.endX + a.arrowStartX + a.arrowEndX) / 4, a.midY = (a.startY + a.endY + a.arrowStartY + a.arrowEndY) / 4;
        else if ("segments" === a.edgeType)
          if (a.allpts = [], a.allpts.push(a.startX, a.startY), a.allpts.push.apply(a.allpts, a.segpts), a.allpts.push(a.endX, a.endY), a.segpts.length % 4 == 0) {
            var r = a.segpts.length / 2,
              i = r - 2;
            a.midX = (a.segpts[i] + a.segpts[r]) / 2, a.midY = (a.segpts[i + 1] + a.segpts[r + 1]) / 2
          } else {
            var c = a.segpts.length / 2 - 1;
            a.midX = a.segpts[c], a.midY = a.segpts[c + 1]
          }
      }, Uc.checkForInvalidEdgeWarning = function(e) {
        var a = e[0]._private.rscratch;
        a.nodesOverlap || w(a.startX) && w(a.startY) && w(a.endX) && w(a.endY) ? a.loggedErr = !1 : a.loggedErr || (a.loggedErr = !0, ue("Edge `" + e.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."))
      }, Uc.findEdgeControlPoints = function(e) {
        var a = this;
        if (e && 0 !== e.length) {
          for (var t = this, n = t.cy.hasCompoundNodes(), r = {
              map: new be,
              get: function(e) {
                var a = this.map.get(e[0]);
                return null != a ? a.get(e[1]) : null
              },
              set: function(e, a) {
                var t = this.map.get(e[0]);
                null == t && (t = new be, this.map.set(e[0], t)), t.set(e[1], a)
              }
            }, i = [], c = [], o = 0; o < e.length; o++) {
            var s = e[o],
              l = s._private,
              d = s.pstyle("curve-style").value;
            if (!s.removed() && s.takesUpSpace())
              if ("haystack" !== d) {
                var u = "unbundled-bezier" === d || "segments" === d || "straight" === d || "taxi" === d,
                  h = "unbundled-bezier" === d || "bezier" === d,
                  m = l.source,
                  g = l.target,
                  p = [m.poolIndex(), g.poolIndex()].sort(),
                  y = r.get(p);
                null == y && (y = {
                  eles: []
                }, r.set(p, y), i.push(p)), y.eles.push(s), u && (y.hasUnbundled = !0), h && (y.hasBezier = !0)
              } else c.push(s)
          }
          for (var f = function(e) {
              var c = i[e],
                o = r.get(c),
                s = void 0;
              if (!o.hasUnbundled) {
                var l = o.eles[0].parallelEdges().filter((function(e) {
                  return e.isBundledBezier()
                }));
                ve(o.eles), l.forEach((function(e) {
                  return o.eles.push(e)
                })), o.eles.sort((function(e, a) {
                  return e.poolIndex() - a.poolIndex()
                }))
              }
              var d = o.eles[0],
                u = d.source(),
                h = d.target();
              if (u.poolIndex() > h.poolIndex()) {
                var m = u;
                u = h, h = m
              }
              var g = o.srcPos = u.position(),
                p = o.tgtPos = h.position(),
                y = o.srcW = u.outerWidth(),
                f = o.srcH = u.outerHeight(),
                v = o.tgtW = h.outerWidth(),
                _ = o.tgtH = h.outerHeight(),
                S = o.srcShape = t.nodeShapes[a.getNodeShape(u)],
                b = o.tgtShape = t.nodeShapes[a.getNodeShape(h)];
              o.dirCounts = {
                north: 0,
                west: 0,
                south: 0,
                east: 0,
                northwest: 0,
                southwest: 0,
                northeast: 0,
                southeast: 0
              };
              for (var C = 0; C < o.eles.length; C++) {
                var N = o.eles[C],
                  B = N[0]._private.rscratch,
                  D = N.pstyle("curve-style").value,
                  x = "unbundled-bezier" === D || "segments" === D || "taxi" === D,
                  I = !u.same(N.source());
                if (!o.calculatedIntersection && u !== h && (o.hasBezier || o.hasUnbundled)) {
                  o.calculatedIntersection = !0;
                  var T = S.intersectLine(g.x, g.y, y, f, p.x, p.y, 0),
                    U = o.srcIntn = T,
                    P = b.intersectLine(p.x, p.y, v, _, g.x, g.y, 0),
                    M = o.tgtIntn = P,
                    k = o.intersectionPts = {
                      x1: T[0],
                      x2: P[0],
                      y1: T[1],
                      y2: P[1]
                    },
                    A = o.posPts = {
                      x1: g.x,
                      x2: p.x,
                      y1: g.y,
                      y2: p.y
                    },
                    R = P[1] - T[1],
                    E = P[0] - T[0],
                    G = Math.sqrt(E * E + R * R),
                    V = o.vector = {
                      x: E,
                      y: R
                    },
                    F = o.vectorNorm = {
                      x: V.x / G,
                      y: V.y / G
                    },
                    L = {
                      x: -F.y,
                      y: F.x
                    };
                  o.nodesOverlap = !w(G) || b.checkPoint(T[0], T[1], 0, v, _, p.x, p.y) || S.checkPoint(P[0], P[1], 0, y, f, g.x, g.y), o.vectorNormInverse = L, s = {
                    nodesOverlap: o.nodesOverlap,
                    dirCounts: o.dirCounts,
                    calculatedIntersection: !0,
                    hasBezier: o.hasBezier,
                    hasUnbundled: o.hasUnbundled,
                    eles: o.eles,
                    srcPos: p,
                    tgtPos: g,
                    srcW: v,
                    srcH: _,
                    tgtW: y,
                    tgtH: f,
                    srcIntn: M,
                    tgtIntn: U,
                    srcShape: b,
                    tgtShape: S,
                    posPts: {
                      x1: A.x2,
                      y1: A.y2,
                      x2: A.x1,
                      y2: A.y1
                    },
                    intersectionPts: {
                      x1: k.x2,
                      y1: k.y2,
                      x2: k.x1,
                      y2: k.y1
                    },
                    vector: {
                      x: -V.x,
                      y: -V.y
                    },
                    vectorNorm: {
                      x: -F.x,
                      y: -F.y
                    },
                    vectorNormInverse: {
                      x: -L.x,
                      y: -L.y
                    }
                  }
                }
                var z = I ? s : o;
                B.nodesOverlap = z.nodesOverlap, B.srcIntn = z.srcIntn, B.tgtIntn = z.tgtIntn, n && (u.isParent() || u.isChild() || h.isParent() || h.isChild()) && (u.parents().anySame(h) || h.parents().anySame(u) || u.same(h) && u.isParent()) ? a.findCompoundLoopPoints(N, z, C, x) : u === h ? a.findLoopPoints(N, z, C, x) : "segments" === D ? a.findSegmentsPoints(N, z) : "taxi" === D ? a.findTaxiPoints(N, z) : "straight" === D || !x && o.eles.length % 2 == 1 && C === Math.floor(o.eles.length / 2) ? a.findStraightEdgePoints(N) : a.findBezierPoints(N, z, C, x, I), a.findEndpoints(N), a.tryToCorrectInvalidPoints(N, z), a.checkForInvalidEdgeWarning(N), a.storeAllpts(N), a.storeEdgeProjections(N), a.calculateArrowAngles(N), a.recalculateEdgeLabelProjections(N), a.calculateLabelAngles(N)
              }
            }, v = 0; v < i.length; v++) f(v);
          this.findHaystackPoints(c)
        }
      }, Uc.getSegmentPoints = function(e) {
        var a = e[0]._private.rscratch;
        if ("segments" === a.edgeType) return this.recalculateRenderedStyle(e), Pc(a.segpts)
      }, Uc.getControlPoints = function(e) {
        var a = e[0]._private.rscratch,
          t = a.edgeType;
        if ("bezier" === t || "multibezier" === t || "self" === t || "compound" === t) return this.recalculateRenderedStyle(e), Pc(a.ctrlpts)
      }, Uc.getEdgeMidpoint = function(e) {
        var a = e[0]._private.rscratch;
        return this.recalculateRenderedStyle(e), {
          x: a.midX,
          y: a.midY
        }
      };
      var Mc = {
          manualEndptToPx: function(e, a) {
            var t = e.position(),
              n = e.outerWidth(),
              r = e.outerHeight();
            if (2 === a.value.length) {
              var i = [a.pfValue[0], a.pfValue[1]];
              return "%" === a.units[0] && (i[0] = i[0] * n), "%" === a.units[1] && (i[1] = i[1] * r), i[0] += t.x, i[1] += t.y, i
            }
            var c = a.pfValue[0];
            c = -Math.PI / 2 + c;
            var o = 2 * Math.max(n, r),
              s = [t.x + Math.cos(c) * o, t.y + Math.sin(c) * o];
            return this.nodeShapes[this.getNodeShape(e)].intersectLine(t.x, t.y, n, r, s[0], s[1], 0)
          },
          findEndpoints: function(e) {
            var a, t, n, r, i, c = this,
              o = e.source()[0],
              s = e.target()[0],
              l = o.position(),
              d = s.position(),
              u = e.pstyle("target-arrow-shape").value,
              h = e.pstyle("source-arrow-shape").value,
              m = e.pstyle("target-distance-from-node").pfValue,
              g = e.pstyle("source-distance-from-node").pfValue,
              p = e.pstyle("curve-style").value,
              y = e._private.rscratch,
              f = y.edgeType,
              v = "self" === f || "compound" === f,
              _ = "bezier" === f || "multibezier" === f || v,
              S = "bezier" !== f,
              b = "straight" === f || "segments" === f,
              C = "segments" === f,
              N = _ || S || b,
              B = v || "taxi" === p,
              D = e.pstyle("source-endpoint"),
              x = B ? "outside-to-node" : D.value,
              I = e.pstyle("target-endpoint"),
              T = B ? "outside-to-node" : I.value;
            if (y.srcManEndpt = D, y.tgtManEndpt = I, _) {
              var U = [y.ctrlpts[0], y.ctrlpts[1]];
              t = S ? [y.ctrlpts[y.ctrlpts.length - 2], y.ctrlpts[y.ctrlpts.length - 1]] : U, n = U
            } else if (b) {
              var P = C ? y.segpts.slice(0, 2) : [d.x, d.y];
              t = C ? y.segpts.slice(y.segpts.length - 2) : [l.x, l.y], n = P
            }
            if ("inside-to-node" === T) a = [d.x, d.y];
            else if (I.units) a = this.manualEndptToPx(s, I);
            else if ("outside-to-line" === T) a = y.tgtIntn;
            else if ("outside-to-node" === T || "outside-to-node-or-label" === T ? r = t : "outside-to-line" !== T && "outside-to-line-or-label" !== T || (r = [l.x, l.y]), a = c.nodeShapes[this.getNodeShape(s)].intersectLine(d.x, d.y, s.outerWidth(), s.outerHeight(), r[0], r[1], 0), "outside-to-node-or-label" === T || "outside-to-line-or-label" === T) {
              var M = s._private.rscratch,
                k = M.labelWidth,
                A = M.labelHeight,
                R = M.labelX,
                E = M.labelY,
                G = s.pstyle("text-valign").value;
              "top" === G ? E -= A / 2 : "bottom" === G && (E += A / 2);
              var V = s.pstyle("text-halign").value;
              "left" === V ? R -= k / 2 : "right" === V && (R += k / 2);
              var F = c.nodeShapes.rectangle.intersectLine(R, E, k, A, r[0], r[1], 0),
                L = l,
                z = Ze(L, je(a));
              Ze(L, je(F)) < z && (a = F)
            }
            var W = wa(a, t, c.arrowShapes[u].spacing(e) + m),
              j = wa(a, t, c.arrowShapes[u].gap(e) + m);
            if (y.endX = j[0], y.endY = j[1], y.arrowEndX = W[0], y.arrowEndY = W[1], "inside-to-node" === x) a = [l.x, l.y];
            else if (D.units) a = this.manualEndptToPx(o, D);
            else if ("outside-to-line" === x) a = y.srcIntn;
            else if ("outside-to-node" === x || "outside-to-node-or-label" === x ? i = n : "outside-to-line" !== x && "outside-to-line-or-label" !== x || (i = [d.x, d.y]), a = c.nodeShapes[this.getNodeShape(o)].intersectLine(l.x, l.y, o.outerWidth(), o.outerHeight(), i[0], i[1], 0), "outside-to-node-or-label" === x || "outside-to-line-or-label" === x) {
              var O = o._private.rscratch,
                H = O.labelWidth,
                Q = O.labelHeight,
                q = O.labelX,
                Z = O.labelY,
                K = o.pstyle("text-valign").value;
              "top" === K ? Z -= Q / 2 : "bottom" === K && (Z += Q / 2);
              var Y = o.pstyle("text-halign").value;
              "left" === Y ? q -= H / 2 : "right" === Y && (q += H / 2);
              var X = c.nodeShapes.rectangle.intersectLine(q, Z, H, Q, i[0], i[1], 0),
                J = d,
                $ = Ze(J, je(a));
              Ze(J, je(X)) < $ && (a = X)
            }
            var ee = wa(a, n, c.arrowShapes[h].spacing(e) + g),
              ae = wa(a, n, c.arrowShapes[h].gap(e) + g);
            y.startX = ae[0], y.startY = ae[1], y.arrowStartX = ee[0], y.arrowStartY = ee[1], N && (w(y.startX) && w(y.startY) && w(y.endX) && w(y.endY) ? y.badLine = !1 : y.badLine = !0)
          },
          getSourceEndpoint: function(e) {
            var a = e[0]._private.rscratch;
            switch (this.recalculateRenderedStyle(e), a.edgeType) {
              case "haystack":
                return {
                  x: a.haystackPts[0], y: a.haystackPts[1]
                };
              default:
                return {
                  x: a.arrowStartX, y: a.arrowStartY
                }
            }
          },
          getTargetEndpoint: function(e) {
            var a = e[0]._private.rscratch;
            switch (this.recalculateRenderedStyle(e), a.edgeType) {
              case "haystack":
                return {
                  x: a.haystackPts[2], y: a.haystackPts[3]
                };
              default:
                return {
                  x: a.arrowEndX, y: a.arrowEndY
                }
            }
          }
        },
        kc = {};

      function Ac(e, a, t) {
        for (var n = function(e, a, t, n) {
            return Ye(e, a, t, n)
          }, r = a._private.rstyle.bezierPts, i = 0; i < e.bezierProjPcts.length; i++) {
          var c = e.bezierProjPcts[i];
          r.push({
            x: n(t[0], t[2], t[4], c),
            y: n(t[1], t[3], t[5], c)
          })
        }
      }
      kc.storeEdgeProjections = function(e) {
        var a = e._private,
          t = a.rscratch,
          n = t.edgeType;
        if (a.rstyle.bezierPts = null, a.rstyle.linePts = null, a.rstyle.haystackPts = null, "multibezier" === n || "bezier" === n || "self" === n || "compound" === n) {
          a.rstyle.bezierPts = [];
          for (var r = 0; r + 5 < t.allpts.length; r += 4) Ac(this, e, t.allpts.slice(r, r + 6))
        } else if ("segments" === n) {
          var i = a.rstyle.linePts = [];
          for (r = 0; r + 1 < t.allpts.length; r += 2) i.push({
            x: t.allpts[r],
            y: t.allpts[r + 1]
          })
        } else if ("haystack" === n) {
          var c = t.haystackPts;
          a.rstyle.haystackPts = [{
            x: c[0],
            y: c[1]
          }, {
            x: c[2],
            y: c[3]
          }]
        }
        a.rstyle.arrowWidth = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth
      }, kc.recalculateEdgeProjections = function(e) {
        this.findEdgeControlPoints(e)
      };
      var Rc = {
          recalculateNodeLabelProjection: function(e) {
            var a = e.pstyle("label").strValue;
            if (!T(a)) {
              var t, n, r = e._private,
                i = e.width(),
                c = e.height(),
                o = e.padding(),
                s = e.position(),
                l = e.pstyle("text-halign").strValue,
                d = e.pstyle("text-valign").strValue,
                u = r.rscratch,
                h = r.rstyle;
              switch (l) {
                case "left":
                  t = s.x - i / 2 - o;
                  break;
                case "right":
                  t = s.x + i / 2 + o;
                  break;
                default:
                  t = s.x
              }
              switch (d) {
                case "top":
                  n = s.y - c / 2 - o;
                  break;
                case "bottom":
                  n = s.y + c / 2 + o;
                  break;
                default:
                  n = s.y
              }
              u.labelX = t, u.labelY = n, h.labelX = t, h.labelY = n, this.applyLabelDimensions(e)
            }
          }
        },
        Ec = function(e, a) {
          var t = Math.atan(a / e);
          return 0 === e && t < 0 && (t *= -1), t
        },
        Gc = function(e, a) {
          var t = a.x - e.x,
            n = a.y - e.y;
          return Ec(t, n)
        };
      Rc.recalculateEdgeLabelProjections = function(e) {
        var a, t = e._private,
          n = t.rscratch,
          r = this,
          i = {
            mid: e.pstyle("label").strValue,
            source: e.pstyle("source-label").strValue,
            target: e.pstyle("target-label").strValue
          };
        if (i.mid || i.source || i.target) {
          a = {
            x: n.midX,
            y: n.midY
          };
          var c = function(e, a, n) {
            Se(t.rscratch, e, a, n), Se(t.rstyle, e, a, n)
          };
          c("labelX", null, a.x), c("labelY", null, a.y);
          var o = Ec(n.midDispX, n.midDispY);
          c("labelAutoAngle", null, o);
          var s = function(o) {
            var s, l = "source" === o;
            if (i[o]) {
              var d = e.pstyle(o + "-text-offset").pfValue;
              switch (n.edgeType) {
                case "self":
                case "compound":
                case "bezier":
                case "multibezier":
                  for (var u, h = function e() {
                      if (e.cache) return e.cache;
                      for (var a = [], i = 0; i + 5 < n.allpts.length; i += 4) {
                        var c = {
                            x: n.allpts[i],
                            y: n.allpts[i + 1]
                          },
                          o = {
                            x: n.allpts[i + 2],
                            y: n.allpts[i + 3]
                          },
                          s = {
                            x: n.allpts[i + 4],
                            y: n.allpts[i + 5]
                          };
                        a.push({
                          p0: c,
                          p1: o,
                          p2: s,
                          startDist: 0,
                          length: 0,
                          segments: []
                        })
                      }
                      var l = t.rstyle.bezierPts,
                        d = r.bezierProjPcts.length;

                      function u(e, a, t, n, r) {
                        var i = qe(a, t),
                          c = e.segments[e.segments.length - 1],
                          o = {
                            p0: a,
                            p1: t,
                            t0: n,
                            t1: r,
                            startDist: c ? c.startDist + c.length : 0,
                            length: i
                          };
                        e.segments.push(o), e.length += i
                      }
                      for (var h = 0; h < a.length; h++) {
                        var m = a[h],
                          g = a[h - 1];
                        g && (m.startDist = g.startDist + g.length), u(m, m.p0, l[h * d], 0, r.bezierProjPcts[0]);
                        for (var p = 0; p < d - 1; p++) u(m, l[h * d + p], l[h * d + p + 1], r.bezierProjPcts[p], r.bezierProjPcts[p + 1]);
                        u(m, l[h * d + d - 1], m.p2, r.bezierProjPcts[d - 1], 1)
                      }
                      return e.cache = a
                    }(), m = 0, g = 0, p = 0; p < h.length; p++) {
                    for (var y = h[l ? p : h.length - 1 - p], f = 0; f < y.segments.length; f++) {
                      var v = y.segments[l ? f : y.segments.length - 1 - f],
                        _ = p === h.length - 1 && f === y.segments.length - 1;
                      if (m = g, (g += v.length) >= d || _) {
                        u = {
                          cp: y,
                          segment: v
                        };
                        break
                      }
                    }
                    if (u) break
                  }
                  var S = u.cp,
                    b = u.segment,
                    w = (d - m) / b.length,
                    C = b.t1 - b.t0,
                    N = l ? b.t0 + C * w : b.t1 - C * w;
                  N = Je(0, N, 1), a = Xe(S.p0, S.p1, S.p2, N), s = function(e, a, t, n) {
                    var r = Je(0, n - .001, 1),
                      i = Je(0, n + .001, 1),
                      c = Xe(e, a, t, r),
                      o = Xe(e, a, t, i);
                    return Gc(c, o)
                  }(S.p0, S.p1, S.p2, N);
                  break;
                case "straight":
                case "segments":
                case "haystack":
                  for (var B, D, x, I, T = 0, U = n.allpts.length, P = 0; P + 3 < U && (l ? (x = {
                      x: n.allpts[P],
                      y: n.allpts[P + 1]
                    }, I = {
                      x: n.allpts[P + 2],
                      y: n.allpts[P + 3]
                    }) : (x = {
                      x: n.allpts[U - 2 - P],
                      y: n.allpts[U - 1 - P]
                    }, I = {
                      x: n.allpts[U - 4 - P],
                      y: n.allpts[U - 3 - P]
                    }), D = T, !((T += B = qe(x, I)) >= d)); P += 2);
                  var M = (d - D) / B;
                  M = Je(0, M, 1), a = function(e, a, t, n) {
                    var r = a.x - e.x,
                      i = a.y - e.y,
                      c = qe(e, a),
                      o = r / c,
                      s = i / c;
                    return t = null == t ? 0 : t, n = null != n ? n : t * c, {
                      x: e.x + o * n,
                      y: e.y + s * n
                    }
                  }(x, I, M), s = Gc(x, I)
              }
              c("labelX", o, a.x), c("labelY", o, a.y), c("labelAutoAngle", o, s)
            }
          };
          s("source"), s("target"), this.applyLabelDimensions(e)
        }
      }, Rc.applyLabelDimensions = function(e) {
        this.applyPrefixedLabelDimensions(e), e.isEdge() && (this.applyPrefixedLabelDimensions(e, "source"), this.applyPrefixedLabelDimensions(e, "target"))
      }, Rc.applyPrefixedLabelDimensions = function(e, a) {
        var t = e._private,
          n = this.getLabelText(e, a),
          r = this.calculateLabelDimensions(e, n),
          i = e.pstyle("line-height").pfValue,
          c = e.pstyle("text-wrap").strValue,
          o = _e(t.rscratch, "labelWrapCachedLines", a) || [],
          s = "wrap" !== c ? 1 : Math.max(o.length, 1),
          l = r.height / s,
          d = l * i,
          u = r.width,
          h = r.height + (s - 1) * (i - 1) * l;
        Se(t.rstyle, "labelWidth", a, u), Se(t.rscratch, "labelWidth", a, u), Se(t.rstyle, "labelHeight", a, h), Se(t.rscratch, "labelHeight", a, h), Se(t.rscratch, "labelLineHeight", a, d)
      }, Rc.getLabelText = function(e, a) {
        var t = e._private,
          n = a ? a + "-" : "",
          r = e.pstyle(n + "label").strValue,
          i = e.pstyle("text-transform").value,
          c = function(e, n) {
            return n ? (Se(t.rscratch, e, a, n), n) : _e(t.rscratch, e, a)
          };
        if (!r) return "";
        "none" == i || ("uppercase" == i ? r = r.toUpperCase() : "lowercase" == i && (r = r.toLowerCase()));
        var o = e.pstyle("text-wrap").value;
        if ("wrap" === o) {
          var s = c("labelKey");
          if (null != s && c("labelWrapKey") === s) return c("labelWrapCachedText");
          for (var l = r.split("\n"), d = e.pstyle("text-max-width").pfValue, u = "anywhere" === e.pstyle("text-overflow-wrap").value, h = [], m = /[\s\u200b]+/, g = u ? "" : " ", p = 0; p < l.length; p++) {
            var y = l[p],
              f = this.calculateLabelDimensions(e, y).width;
            if (u) {
              var v = y.split("").join("​");
              y = v
            }
            if (f > d) {
              for (var _ = y.split(m), S = "", b = 0; b < _.length; b++) {
                var w = _[b],
                  C = 0 === S.length ? w : S + g + w;
                this.calculateLabelDimensions(e, C).width <= d ? S += w + g : (S && h.push(S), S = w + g)
              }
              S.match(/^[\s\u200b]+$/) || h.push(S)
            } else h.push(y)
          }
          c("labelWrapCachedLines", h), r = c("labelWrapCachedText", h.join("\n")), c("labelWrapKey", s)
        } else if ("ellipsis" === o) {
          for (var N = e.pstyle("text-max-width").pfValue, B = "", D = !1, x = 0; x < r.length; x++) {
            if (this.calculateLabelDimensions(e, B + r[x] + "…").width > N) break;
            B += r[x], x === r.length - 1 && (D = !0)
          }
          return D || (B += "…"), B
        }
        return r
      }, Rc.getLabelJustification = function(e) {
        var a = e.pstyle("text-justification").strValue,
          t = e.pstyle("text-halign").strValue;
        if ("auto" !== a) return a;
        if (!e.isNode()) return "center";
        switch (t) {
          case "left":
            return "right";
          case "right":
            return "left";
          default:
            return "center"
        }
      }, Rc.calculateLabelDimensions = function(e, a) {
        var t = J(a, e._private.labelDimsKey),
          n = this.labelDimCache || (this.labelDimCache = []),
          r = n[t];
        if (null != r) return r;
        var i = e.pstyle("font-style").strValue,
          c = 1 * e.pstyle("font-size").pfValue + "px",
          o = e.pstyle("font-family").strValue,
          s = e.pstyle("font-weight").strValue,
          l = this.labelCalcDiv;
        l || (l = this.labelCalcDiv = document.createElement("div"), document.body.appendChild(l));
        var d = l.style;
        return d.fontFamily = o, d.fontStyle = i, d.fontSize = c, d.fontWeight = s, d.position = "absolute", d.left = "-9999px", d.top = "-9999px", d.zIndex = "-1", d.visibility = "hidden", d.pointerEvents = "none", d.padding = "0", d.lineHeight = "1", "wrap" === e.pstyle("text-wrap").value ? d.whiteSpace = "pre" : d.whiteSpace = "normal", l.textContent = a, n[t] = {
          width: Math.ceil(l.clientWidth / 1),
          height: Math.ceil(l.clientHeight / 1)
        }
      }, Rc.calculateLabelAngle = function(e, a) {
        var t = e._private.rscratch,
          n = e.isEdge(),
          r = a ? a + "-" : "",
          i = e.pstyle(r + "text-rotation"),
          c = i.strValue;
        return "none" === c ? 0 : n && "autorotate" === c ? t.labelAutoAngle : "autorotate" === c ? 0 : i.pfValue
      }, Rc.calculateLabelAngles = function(e) {
        var a = this,
          t = e.isEdge(),
          n = e._private.rscratch;
        n.labelAngle = a.calculateLabelAngle(e), t && (n.sourceLabelAngle = a.calculateLabelAngle(e, "source"), n.targetLabelAngle = a.calculateLabelAngle(e, "target"))
      };
      var Vc = {},
        Fc = !1;
      Vc.getNodeShape = function(e) {
        var a = e.pstyle("shape").value;
        if ("cutrectangle" === a && (e.width() < 28 || e.height() < 28)) return Fc || (ue("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Fc = !0), "rectangle";
        if (e.isParent()) return "rectangle" === a || "roundrectangle" === a || "cutrectangle" === a || "barrel" === a ? a : "rectangle";
        if ("polygon" === a) {
          var t = e.pstyle("shape-polygon-points").value;
          return this.nodeShapes.makePolygon(t).name
        }
        return a
      };
      var Lc = {
          registerCalculationListeners: function() {
            var e = this.cy,
              a = e.collection(),
              t = this,
              n = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (a.merge(e), t)
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                      i = r._private,
                      c = i.rstyle;
                    c.clean = !1, c.cleanConnected = !1
                  }
              };
            t.binder(e).on("bounds.* dirty.*", (function(e) {
              var a = e.target;
              n(a)
            })).on("style.* background.*", (function(e) {
              var a = e.target;
              n(a, !1)
            }));
            var r = function(r) {
              if (r) {
                for (var i = t.onUpdateEleCalcsFns, c = 0; c < a.length; c++) {
                  var o = a[c],
                    s = o._private.rstyle;
                  o.isNode() && !s.cleanConnected && (n(o.connectedEdges()), s.cleanConnected = !0)
                }
                if (i)
                  for (c = 0; c < i.length; c++) {
                    (0, i[c])(r, a)
                  }
                t.recalculateRenderedStyle(a), a = e.collection()
              }
            };
            t.flushRenderedStyleQueue = function() {
              r(!0)
            }, t.beforeRender(r, t.beforeRenderPriorities.eleCalcs)
          },
          onUpdateEleCalcs: function(e) {
            (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e)
          },
          recalculateRenderedStyle: function(e, a) {
            var t = [],
              n = [];
            if (!this.destroyed) {
              void 0 === a && (a = !0);
              for (var r = 0; r < e.length; r++) {
                var i = (s = (o = e[r])._private).rstyle;
                a && i.clean || o.removed() || "none" !== o.pstyle("display").value && ("nodes" === s.group ? n.push(o) : t.push(o), i.clean = !0)
              }
              for (r = 0; r < n.length; r++) {
                i = (s = (o = n[r])._private).rstyle;
                var c = o.position();
                this.recalculateNodeLabelProjection(o), i.nodeX = c.x, i.nodeY = c.y, i.nodeW = o.pstyle("width").pfValue, i.nodeH = o.pstyle("height").pfValue
              }
              this.recalculateEdgeProjections(t);
              for (r = 0; r < t.length; r++) {
                i = (s = (o = t[r])._private).rstyle;
                var o, s, l = s.rscratch;
                i.srcX = l.arrowStartX, i.srcY = l.arrowStartY, i.tgtX = l.arrowEndX, i.tgtY = l.arrowEndY, i.midX = l.midX, i.midY = l.midY, i.labelAngle = l.labelAngle, i.sourceLabelAngle = l.sourceLabelAngle, i.targetLabelAngle = l.targetLabelAngle
              }
            }
          }
        },
        zc = {
          updateCachedGrabbedEles: function() {
            var e = this.cachedZSortedEles;
            if (e) {
              e.drag = [], e.nondrag = [];
              for (var a = [], t = 0; t < e.length; t++) {
                var n = (r = e[t])._private.rscratch;
                r.grabbed() && !r.isParent() ? a.push(r) : n.inDragLayer ? e.drag.push(r) : e.nondrag.push(r)
              }
              for (t = 0; t < a.length; t++) {
                var r = a[t];
                e.drag.push(r)
              }
            }
          },
          invalidateCachedZSortedEles: function() {
            this.cachedZSortedEles = null
          },
          getCachedZSortedEles: function(e) {
            if (e || !this.cachedZSortedEles) {
              var a = this.cy.mutableElements().toArray();
              a.sort(Ir), a.interactive = a.filter((function(e) {
                return e.interactive()
              })), this.cachedZSortedEles = a, this.updateCachedGrabbedEles()
            } else a = this.cachedZSortedEles;
            return a
          }
        },
        Wc = {};
      [Ic, Tc, Uc, Mc, kc, Rc, Vc, Lc, zc].forEach((function(e) {
        F(Wc, e)
      }));
      var jc = {
          getCachedImage: function(e, a, t) {
            var n = this.imageCache = this.imageCache || {},
              r = n[e];
            if (r) return r.image.complete || r.image.addEventListener("load", t), r.image;
            var i = (r = n[e] = n[e] || {}).image = new Image;
            i.addEventListener("load", t), i.addEventListener("error", (function() {
              i.error = !0
            }));
            return "data:" === e.substring(0, "data:".length).toLowerCase() || (i.crossOrigin = a), i.src = e, i
          }
        },
        Oc = {
          registerBinding: function(e, a, t, n) {
            var r = Array.prototype.slice.apply(arguments, [1]),
              i = this.binder(e);
            return i.on.apply(i, r)
          }
        };
      Oc.binder = function(e) {
        var a, t = this,
          n = e === window || e === document || e === document.body || (a = e, "undefined" != typeof HTMLElement && a instanceof HTMLElement);
        if (null == t.supportsPassiveEvents) {
          var r = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function() {
                return r = !0, !0
              }
            });
            window.addEventListener("test", null, i)
          } catch (e) {}
          t.supportsPassiveEvents = r
        }
        var c = function(a, r, i) {
          var c = Array.prototype.slice.call(arguments);
          return n && t.supportsPassiveEvents && (c[2] = {
            capture: null != i && i,
            passive: !1,
            once: !1
          }), t.bindings.push({
            target: e,
            args: c
          }), (e.addEventListener || e.on).apply(e, c), this
        };
        return {
          on: c,
          addEventListener: c,
          addListener: c,
          bind: c
        }
      }, Oc.nodeIsDraggable = function(e) {
        return e && e.isNode() && !e.locked() && e.grabbable()
      }, Oc.nodeIsGrabbable = function(e) {
        return this.nodeIsDraggable(e) && e.interactive()
      }, Oc.load = function() {
        var e = this,
          a = function(e) {
            return e.selected()
          },
          t = function(a, t, n, r) {
            null == a && (a = e.cy);
            for (var i = 0; i < t.length; i++) {
              var c = t[i];
              a.emit({
                originalEvent: n,
                type: c,
                position: r
              })
            }
          },
          n = function(e) {
            return e.shiftKey || e.metaKey || e.ctrlKey
          },
          i = function(a, t) {
            var n = !0;
            if (e.cy.hasCompoundNodes() && a && a.pannable())
              for (var r = 0; t && r < t.length; r++) {
                if ((a = t[r]).isNode() && a.isParent()) {
                  n = !1;
                  break
                }
              } else n = !0;
            return n
          },
          c = function(e) {
            e[0]._private.rscratch.inDragLayer = !0
          },
          o = function(e) {
            e[0]._private.rscratch.isGrabTarget = !0
          },
          s = function(e, a) {
            var t = a.addToList;
            t.has(e) || (t.merge(e), function(e) {
              e[0]._private.grabbed = !0
            }(e))
          },
          l = function(a, t) {
            t = t || {};
            var n = a.cy().hasCompoundNodes();
            t.inDragLayer && (a.forEach(c), a.neighborhood().stdFilter((function(e) {
                return !n || e.isEdge()
              })).forEach(c)), t.addToList && a.forEach((function(e) {
                s(e, t)
              })),
              function(e, a) {
                if (e.cy().hasCompoundNodes() && (null != a.inDragLayer || null != a.addToList)) {
                  var t = e.descendants();
                  a.inDragLayer && (t.forEach(c), t.connectedEdges().forEach(c)), a.addToList && a.addToList.unmerge(t)
                }
              }(a, t), h(a, {
                inDragLayer: t.inDragLayer
              }), e.updateCachedGrabbedEles()
          },
          d = l,
          u = function(a) {
            a && (e.getCachedZSortedEles().forEach((function(e) {
              ! function(e) {
                e[0]._private.grabbed = !1
              }(e),
              function(e) {
                e[0]._private.rscratch.inDragLayer = !1
              }(e),
              function(e) {
                e[0]._private.rscratch.isGrabTarget = !1
              }(e)
            })), e.updateCachedGrabbedEles())
          },
          h = function(e, a) {
            if ((null != a.inDragLayer || null != a.addToList) && e.cy().hasCompoundNodes()) {
              var t = e.ancestors().orphans();
              if (!t.same(e)) {
                var n = t.descendants().spawnSelf().merge(t).unmerge(e).unmerge(e.descendants()),
                  r = n.connectedEdges();
                a.inDragLayer && (r.forEach(c), n.forEach(c)), a.addToList && n.forEach((function(e) {
                  s(e, a)
                }))
              }
            }
          },
          m = function() {
            null != document.activeElement && null != document.activeElement.blur && document.activeElement.blur()
          },
          g = "undefined" != typeof MutationObserver,
          p = "undefined" != typeof ResizeObserver;
        g ? (e.removeObserver = new MutationObserver((function(a) {
          for (var t = 0; t < a.length; t++) {
            var n = a[t].removedNodes;
            if (n)
              for (var r = 0; r < n.length; r++) {
                if (n[r] === e.container) {
                  e.destroy();
                  break
                }
              }
          }
        })), e.container.parentNode && e.removeObserver.observe(e.container.parentNode, {
          childList: !0
        })) : e.registerBinding(e.container, "DOMNodeRemoved", (function(a) {
          e.destroy()
        }));
        var y = r((function() {
          e.cy.resize()
        }), 100);
        g && (e.styleObserver = new MutationObserver(y), e.styleObserver.observe(e.container, {
          attributes: !0
        })), e.registerBinding(window, "resize", y), p && (e.resizeObserver = new ResizeObserver(y), e.resizeObserver.observe(e.container));
        var f = function() {
          e.invalidateContainerClientCoordsCache()
        };
        ! function(e, a) {
          for (; null != e;) a(e), e = e.parentNode
        }(e.container, (function(a) {
          e.registerBinding(a, "transitionend", f), e.registerBinding(a, "animationend", f), e.registerBinding(a, "scroll", f)
        })), e.registerBinding(e.container, "contextmenu", (function(e) {
          e.preventDefault()
        }));
        var v = function(a) {
          for (var t = e.findContainerClientCoords(), n = t[0], r = t[1], i = t[2], c = t[3], o = a.touches ? a.touches : [a], s = !1, l = 0; l < o.length; l++) {
            var d = o[l];
            if (n <= d.clientX && d.clientX <= n + i && r <= d.clientY && d.clientY <= r + c) {
              s = !0;
              break
            }
          }
          if (!s) return !1;
          for (var u = e.container, h = a.target.parentNode, m = !1; h;) {
            if (h === u) {
              m = !0;
              break
            }
            h = h.parentNode
          }
          return !!m
        };
        e.registerBinding(e.container, "mousedown", (function(a) {
          if (v(a)) {
            a.preventDefault(), m(), e.hoverData.capture = !0, e.hoverData.which = a.which;
            var n = e.cy,
              r = [a.clientX, a.clientY],
              i = e.projectIntoViewport(r[0], r[1]),
              c = e.selection,
              s = e.findNearestElements(i[0], i[1], !0, !1),
              u = s[0],
              h = e.dragData.possibleDragElements;
            e.hoverData.mdownPos = i, e.hoverData.mdownGPos = r;
            if (3 == a.which) {
              e.hoverData.cxtStarted = !0;
              var g = {
                originalEvent: a,
                type: "cxttapstart",
                position: {
                  x: i[0],
                  y: i[1]
                }
              };
              u ? (u.activate(), u.emit(g), e.hoverData.down = u) : n.emit(g), e.hoverData.downTime = (new Date).getTime(), e.hoverData.cxtDragged = !1
            } else if (1 == a.which) {
              if (u && u.activate(), null != u && e.nodeIsGrabbable(u)) {
                var p = function(e) {
                  return {
                    originalEvent: a,
                    type: e,
                    position: {
                      x: i[0],
                      y: i[1]
                    }
                  }
                };
                if (o(u), u.selected()) {
                  h = e.dragData.possibleDragElements = n.collection();
                  var y = n.$((function(a) {
                    return a.isNode() && a.selected() && e.nodeIsGrabbable(a)
                  }));
                  l(y, {
                    addToList: h
                  }), u.emit(p("grabon")), y.forEach((function(e) {
                    e.emit(p("grab"))
                  }))
                } else h = e.dragData.possibleDragElements = n.collection(), d(u, {
                  addToList: h
                }), u.emit(p("grabon")).emit(p("grab"));
                e.redrawHint("eles", !0), e.redrawHint("drag", !0)
              }
              e.hoverData.down = u, e.hoverData.downs = s, e.hoverData.downTime = (new Date).getTime(), t(u, ["mousedown", "tapstart", "vmousedown"], a, {
                x: i[0],
                y: i[1]
              }), null == u ? (c[4] = 1, e.data.bgActivePosistion = {
                x: i[0],
                y: i[1]
              }, e.redrawHint("select", !0), e.redraw()) : u.pannable() && (c[4] = 1), e.hoverData.tapholdCancelled = !1, clearTimeout(e.hoverData.tapholdTimeout), e.hoverData.tapholdTimeout = setTimeout((function() {
                if (!e.hoverData.tapholdCancelled) {
                  var t = e.hoverData.down;
                  t ? t.emit({
                    originalEvent: a,
                    type: "taphold",
                    position: {
                      x: i[0],
                      y: i[1]
                    }
                  }) : n.emit({
                    originalEvent: a,
                    type: "taphold",
                    position: {
                      x: i[0],
                      y: i[1]
                    }
                  })
                }
              }), e.tapholdDuration)
            }
            c[0] = c[2] = i[0], c[1] = c[3] = i[1]
          }
        }), !1), e.registerBinding(window, "mousemove", (function(a) {
          if (e.hoverData.capture || v(a)) {
            var r = !1,
              c = e.cy,
              o = c.zoom(),
              s = [a.clientX, a.clientY],
              d = e.projectIntoViewport(s[0], s[1]),
              h = e.hoverData.mdownPos,
              m = e.hoverData.mdownGPos,
              g = e.selection,
              p = null;
            e.hoverData.draggingEles || e.hoverData.dragging || e.hoverData.selecting || (p = e.findNearestElement(d[0], d[1], !0, !1));
            var y, f = e.hoverData.last,
              _ = e.hoverData.down,
              S = [d[0] - g[2], d[1] - g[3]],
              b = e.dragData.possibleDragElements;
            if (m) {
              var C = s[0] - m[0],
                N = C * C,
                B = s[1] - m[1],
                D = N + B * B;
              e.hoverData.isOverThresholdDrag = y = D >= e.desktopTapThreshold2
            }
            var x = n(a);
            y && (e.hoverData.tapholdCancelled = !0);
            r = !0, t(p, ["mousemove", "vmousemove", "tapdrag"], a, {
              x: d[0],
              y: d[1]
            });
            var I = function() {
              e.data.bgActivePosistion = void 0, e.hoverData.selecting || c.emit({
                originalEvent: a,
                type: "boxstart",
                position: {
                  x: d[0],
                  y: d[1]
                }
              }), g[4] = 1, e.hoverData.selecting = !0, e.redrawHint("select", !0), e.redraw()
            };
            if (3 === e.hoverData.which) {
              if (y) {
                var T = {
                  originalEvent: a,
                  type: "cxtdrag",
                  position: {
                    x: d[0],
                    y: d[1]
                  }
                };
                _ ? _.emit(T) : c.emit(T), e.hoverData.cxtDragged = !0, e.hoverData.cxtOver && p === e.hoverData.cxtOver || (e.hoverData.cxtOver && e.hoverData.cxtOver.emit({
                  originalEvent: a,
                  type: "cxtdragout",
                  position: {
                    x: d[0],
                    y: d[1]
                  }
                }), e.hoverData.cxtOver = p, p && p.emit({
                  originalEvent: a,
                  type: "cxtdragover",
                  position: {
                    x: d[0],
                    y: d[1]
                  }
                }))
              }
            } else if (e.hoverData.dragging) {
              if (r = !0, c.panningEnabled() && c.userPanningEnabled()) {
                var U;
                if (e.hoverData.justStartedPan) {
                  var P = e.hoverData.mdownPos;
                  U = {
                    x: (d[0] - P[0]) * o,
                    y: (d[1] - P[1]) * o
                  }, e.hoverData.justStartedPan = !1
                } else U = {
                  x: S[0] * o,
                  y: S[1] * o
                };
                c.panBy(U), e.hoverData.dragged = !0
              }
              d = e.projectIntoViewport(a.clientX, a.clientY)
            } else if (1 != g[4] || null != _ && !_.pannable()) {
              if (_ && _.pannable() && _.active() && _.unactivate(), _ && _.grabbed() || p == f || (f && t(f, ["mouseout", "tapdragout"], a, {
                  x: d[0],
                  y: d[1]
                }), p && t(p, ["mouseover", "tapdragover"], a, {
                  x: d[0],
                  y: d[1]
                }), e.hoverData.last = p), _)
                if (y) {
                  if (c.boxSelectionEnabled() && x) _ && _.grabbed() && (u(b), _.emit("freeon"), b.emit("free"), e.dragData.didDrag && (_.emit("dragfreeon"), b.emit("dragfree"))), I();
                  else if (_ && _.grabbed() && e.nodeIsDraggable(_)) {
                    var M = !e.dragData.didDrag;
                    M && e.redrawHint("eles", !0), e.dragData.didDrag = !0;
                    var k = c.collection();
                    e.hoverData.draggingEles || l(b, {
                      inDragLayer: !0
                    });
                    var A = {
                      x: 0,
                      y: 0
                    };
                    if (w(S[0]) && w(S[1]) && (A.x += S[0], A.y += S[1], M)) {
                      var R = e.hoverData.dragDelta;
                      R && w(R[0]) && w(R[1]) && (A.x += R[0], A.y += R[1])
                    }
                    for (var E = 0; E < b.length; E++) {
                      var G = b[E];
                      e.nodeIsDraggable(G) && G.grabbed() && k.merge(G)
                    }
                    e.hoverData.draggingEles = !0, k.silentShift(A).emit("position drag"), e.redrawHint("drag", !0), e.redraw()
                  }
                } else ! function() {
                  var a = e.hoverData.dragDelta = e.hoverData.dragDelta || [];
                  0 === a.length ? (a.push(S[0]), a.push(S[1])) : (a[0] += S[0], a[1] += S[1])
                }();
              r = !0
            } else if (y) {
              if (e.hoverData.dragging || !c.boxSelectionEnabled() || !x && c.panningEnabled() && c.userPanningEnabled()) {
                if (!e.hoverData.selecting && c.panningEnabled() && c.userPanningEnabled()) {
                  i(_, e.hoverData.downs) && (e.hoverData.dragging = !0, e.hoverData.justStartedPan = !0, g[4] = 0, e.data.bgActivePosistion = je(h), e.redrawHint("select", !0), e.redraw())
                }
              } else I();
              _ && _.pannable() && _.active() && _.unactivate()
            }
            return g[2] = d[0], g[3] = d[1], r ? (a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), !1) : void 0
          }
        }), !1), e.registerBinding(window, "mouseup", (function(r) {
          if (e.hoverData.capture) {
            e.hoverData.capture = !1;
            var i = e.cy,
              c = e.projectIntoViewport(r.clientX, r.clientY),
              o = e.selection,
              s = e.findNearestElement(c[0], c[1], !0, !1),
              l = e.dragData.possibleDragElements,
              d = e.hoverData.down,
              h = n(r);
            if (e.data.bgActivePosistion && (e.redrawHint("select", !0), e.redraw()), e.hoverData.tapholdCancelled = !0, e.data.bgActivePosistion = void 0, d && d.unactivate(), 3 === e.hoverData.which) {
              var m = {
                originalEvent: r,
                type: "cxttapend",
                position: {
                  x: c[0],
                  y: c[1]
                }
              };
              if (d ? d.emit(m) : i.emit(m), !e.hoverData.cxtDragged) {
                var g = {
                  originalEvent: r,
                  type: "cxttap",
                  position: {
                    x: c[0],
                    y: c[1]
                  }
                };
                d ? d.emit(g) : i.emit(g)
              }
              e.hoverData.cxtDragged = !1, e.hoverData.which = null
            } else if (1 === e.hoverData.which) {
              if (t(s, ["mouseup", "tapend", "vmouseup"], r, {
                  x: c[0],
                  y: c[1]
                }), e.dragData.didDrag || e.hoverData.dragged || e.hoverData.selecting || e.hoverData.isOverThresholdDrag || t(d, ["click", "tap", "vclick"], r, {
                  x: c[0],
                  y: c[1]
                }), null != d || e.dragData.didDrag || e.hoverData.selecting || e.hoverData.dragged || n(r) || (i.$(a).unselect(["tapunselect"]), l.length > 0 && e.redrawHint("eles", !0), e.dragData.possibleDragElements = l = i.collection()), s != d || e.dragData.didDrag || e.hoverData.selecting || null != s && s._private.selectable && (e.hoverData.dragging || ("additive" === i.selectionType() || h ? s.selected() ? s.unselect(["tapunselect"]) : s.select(["tapselect"]) : h || (i.$(a).unmerge(s).unselect(["tapunselect"]), s.select(["tapselect"]))), e.redrawHint("eles", !0)), e.hoverData.selecting) {
                var p = i.collection(e.getAllInBox(o[0], o[1], o[2], o[3]));
                e.redrawHint("select", !0), p.length > 0 && e.redrawHint("eles", !0), i.emit({
                  type: "boxend",
                  originalEvent: r,
                  position: {
                    x: c[0],
                    y: c[1]
                  }
                });
                var y = function(e) {
                  return e.selectable() && !e.selected()
                };
                "additive" === i.selectionType() ? p.emit("box").stdFilter(y).select().emit("boxselect") : (h || i.$(a).unmerge(p).unselect(), p.emit("box").stdFilter(y).select().emit("boxselect")), e.redraw()
              }
              if (e.hoverData.dragging && (e.hoverData.dragging = !1, e.redrawHint("select", !0), e.redrawHint("eles", !0), e.redraw()), !o[4]) {
                e.redrawHint("drag", !0), e.redrawHint("eles", !0);
                var f = d && d.grabbed();
                u(l), f && (d.emit("freeon"), l.emit("free"), e.dragData.didDrag && (d.emit("dragfreeon"), l.emit("dragfree")))
              }
            }
            o[4] = 0, e.hoverData.down = null, e.hoverData.cxtStarted = !1, e.hoverData.draggingEles = !1, e.hoverData.selecting = !1, e.hoverData.isOverThresholdDrag = !1, e.dragData.didDrag = !1, e.hoverData.dragged = !1, e.hoverData.dragDelta = [], e.hoverData.mdownPos = null, e.hoverData.mdownGPos = null
          }
        }), !1);
        var _, S, b, C, N, B, D, x, I, T, U, P, M;
        e.registerBinding(e.container, "wheel", (function(a) {
          if (!e.scrollingPage) {
            var t, n = e.cy,
              r = e.projectIntoViewport(a.clientX, a.clientY),
              i = [r[0] * n.zoom() + n.pan().x, r[1] * n.zoom() + n.pan().y];
            if (e.hoverData.draggingEles || e.hoverData.dragging || e.hoverData.cxtStarted || 0 !== e.selection[4]) a.preventDefault();
            else if (n.panningEnabled() && n.userPanningEnabled() && n.zoomingEnabled() && n.userZoomingEnabled()) a.preventDefault(), e.data.wheelZooming = !0, clearTimeout(e.data.wheelTimeout), e.data.wheelTimeout = setTimeout((function() {
              e.data.wheelZooming = !1, e.redrawHint("eles", !0), e.redraw()
            }), 150), t = null != a.deltaY ? a.deltaY / -250 : null != a.wheelDeltaY ? a.wheelDeltaY / 1e3 : a.wheelDelta / 1e3, t *= e.wheelSensitivity, 1 === a.deltaMode && (t *= 33), n.zoom({
              level: n.zoom() * Math.pow(10, t),
              renderedPosition: {
                x: i[0],
                y: i[1]
              }
            })
          }
        }), !0), e.registerBinding(window, "scroll", (function(a) {
          e.scrollingPage = !0, clearTimeout(e.scrollingPageTimeout), e.scrollingPageTimeout = setTimeout((function() {
            e.scrollingPage = !1
          }), 250)
        }), !0), e.registerBinding(e.container, "mouseout", (function(a) {
          var t = e.projectIntoViewport(a.clientX, a.clientY);
          e.cy.emit({
            originalEvent: a,
            type: "mouseout",
            position: {
              x: t[0],
              y: t[1]
            }
          })
        }), !1), e.registerBinding(e.container, "mouseover", (function(a) {
          var t = e.projectIntoViewport(a.clientX, a.clientY);
          e.cy.emit({
            originalEvent: a,
            type: "mouseover",
            position: {
              x: t[0],
              y: t[1]
            }
          })
        }), !1);
        var k, A, R, E, G = function(e, a, t, n) {
            return Math.sqrt((t - e) * (t - e) + (n - a) * (n - a))
          },
          V = function(e, a, t, n) {
            return (t - e) * (t - e) + (n - a) * (n - a)
          };
        if (e.registerBinding(e.container, "touchstart", k = function(a) {
            if (v(a)) {
              m(), e.touchData.capture = !0, e.data.bgActivePosistion = void 0;
              var n = e.cy,
                r = e.touchData.now,
                i = e.touchData.earlier;
              if (a.touches[0]) {
                var c = e.projectIntoViewport(a.touches[0].clientX, a.touches[0].clientY);
                r[0] = c[0], r[1] = c[1]
              }
              if (a.touches[1]) {
                c = e.projectIntoViewport(a.touches[1].clientX, a.touches[1].clientY);
                r[2] = c[0], r[3] = c[1]
              }
              if (a.touches[2]) {
                c = e.projectIntoViewport(a.touches[2].clientX, a.touches[2].clientY);
                r[4] = c[0], r[5] = c[1]
              }
              if (a.touches[1]) {
                e.touchData.singleTouchMoved = !0, u(e.dragData.touchDragEles);
                var s = e.findContainerClientCoords();
                I = s[0], T = s[1], U = s[2], P = s[3], _ = a.touches[0].clientX - I, S = a.touches[0].clientY - T, b = a.touches[1].clientX - I, C = a.touches[1].clientY - T, M = 0 <= _ && _ <= U && 0 <= b && b <= U && 0 <= S && S <= P && 0 <= C && C <= P;
                var h = n.pan(),
                  g = n.zoom();
                N = G(_, S, b, C), B = V(_, S, b, C), x = [((D = [(_ + b) / 2, (S + C) / 2])[0] - h.x) / g, (D[1] - h.y) / g];
                if (B < 4e4 && !a.touches[2]) {
                  var p = e.findNearestElement(r[0], r[1], !0, !0),
                    y = e.findNearestElement(r[2], r[3], !0, !0);
                  return p && p.isNode() ? (p.activate().emit({
                    originalEvent: a,
                    type: "cxttapstart",
                    position: {
                      x: r[0],
                      y: r[1]
                    }
                  }), e.touchData.start = p) : y && y.isNode() ? (y.activate().emit({
                    originalEvent: a,
                    type: "cxttapstart",
                    position: {
                      x: r[0],
                      y: r[1]
                    }
                  }), e.touchData.start = y) : n.emit({
                    originalEvent: a,
                    type: "cxttapstart",
                    position: {
                      x: r[0],
                      y: r[1]
                    }
                  }), e.touchData.start && (e.touchData.start._private.grabbed = !1), e.touchData.cxt = !0, e.touchData.cxtDragged = !1, e.data.bgActivePosistion = void 0, void e.redraw()
                }
              }
              if (a.touches[2]) n.boxSelectionEnabled() && a.preventDefault();
              else if (a.touches[1]);
              else if (a.touches[0]) {
                var f = e.findNearestElements(r[0], r[1], !0, !0),
                  w = f[0];
                if (null != w && (w.activate(), e.touchData.start = w, e.touchData.starts = f, e.nodeIsGrabbable(w))) {
                  var k = e.dragData.touchDragEles = n.collection(),
                    A = null;
                  e.redrawHint("eles", !0), e.redrawHint("drag", !0), w.selected() ? (A = n.$((function(a) {
                    return a.selected() && e.nodeIsGrabbable(a)
                  })), l(A, {
                    addToList: k
                  })) : d(w, {
                    addToList: k
                  }), o(w);
                  var R = function(e) {
                    return {
                      originalEvent: a,
                      type: e,
                      position: {
                        x: r[0],
                        y: r[1]
                      }
                    }
                  };
                  w.emit(R("grabon")), A ? A.forEach((function(e) {
                    e.emit(R("grab"))
                  })) : w.emit(R("grab"))
                }
                t(w, ["touchstart", "tapstart", "vmousedown"], a, {
                  x: r[0],
                  y: r[1]
                }), null == w && (e.data.bgActivePosistion = {
                  x: c[0],
                  y: c[1]
                }, e.redrawHint("select", !0), e.redraw()), e.touchData.singleTouchMoved = !1, e.touchData.singleTouchStartTime = +new Date, clearTimeout(e.touchData.tapholdTimeout), e.touchData.tapholdTimeout = setTimeout((function() {
                  !1 !== e.touchData.singleTouchMoved || e.pinching || e.touchData.selecting || t(e.touchData.start, ["taphold"], a, {
                    x: r[0],
                    y: r[1]
                  })
                }), e.tapholdDuration)
              }
              if (a.touches.length >= 1) {
                for (var E = e.touchData.startPosition = [], F = 0; F < r.length; F++) E[F] = i[F] = r[F];
                var L = a.touches[0];
                e.touchData.startGPosition = [L.clientX, L.clientY]
              }
            }
          }, !1), e.registerBinding(window, "touchmove", A = function(a) {
            var n = e.touchData.capture;
            if (n || v(a)) {
              var r = e.selection,
                c = e.cy,
                o = e.touchData.now,
                s = e.touchData.earlier,
                d = c.zoom();
              if (a.touches[0]) {
                var h = e.projectIntoViewport(a.touches[0].clientX, a.touches[0].clientY);
                o[0] = h[0], o[1] = h[1]
              }
              if (a.touches[1]) {
                h = e.projectIntoViewport(a.touches[1].clientX, a.touches[1].clientY);
                o[2] = h[0], o[3] = h[1]
              }
              if (a.touches[2]) {
                h = e.projectIntoViewport(a.touches[2].clientX, a.touches[2].clientY);
                o[4] = h[0], o[5] = h[1]
              }
              var m, g = e.touchData.startGPosition;
              if (n && a.touches[0] && g) {
                for (var p = [], y = 0; y < o.length; y++) p[y] = o[y] - s[y];
                var f = a.touches[0].clientX - g[0],
                  D = f * f,
                  U = a.touches[0].clientY - g[1];
                m = D + U * U >= e.touchTapThreshold2
              }
              if (n && e.touchData.cxt) {
                a.preventDefault();
                var P = a.touches[0].clientX - I,
                  k = a.touches[0].clientY - T,
                  A = a.touches[1].clientX - I,
                  R = a.touches[1].clientY - T,
                  E = V(P, k, A, R);
                if (E / B >= 2.25 || E >= 22500) {
                  e.touchData.cxt = !1, e.data.bgActivePosistion = void 0, e.redrawHint("select", !0);
                  var F = {
                    originalEvent: a,
                    type: "cxttapend",
                    position: {
                      x: o[0],
                      y: o[1]
                    }
                  };
                  e.touchData.start ? (e.touchData.start.unactivate().emit(F), e.touchData.start = null) : c.emit(F)
                }
              }
              if (n && e.touchData.cxt) {
                F = {
                  originalEvent: a,
                  type: "cxtdrag",
                  position: {
                    x: o[0],
                    y: o[1]
                  }
                };
                e.data.bgActivePosistion = void 0, e.redrawHint("select", !0), e.touchData.start ? e.touchData.start.emit(F) : c.emit(F), e.touchData.start && (e.touchData.start._private.grabbed = !1), e.touchData.cxtDragged = !0;
                var L = e.findNearestElement(o[0], o[1], !0, !0);
                e.touchData.cxtOver && L === e.touchData.cxtOver || (e.touchData.cxtOver && e.touchData.cxtOver.emit({
                  originalEvent: a,
                  type: "cxtdragout",
                  position: {
                    x: o[0],
                    y: o[1]
                  }
                }), e.touchData.cxtOver = L, L && L.emit({
                  originalEvent: a,
                  type: "cxtdragover",
                  position: {
                    x: o[0],
                    y: o[1]
                  }
                }))
              } else if (n && a.touches[2] && c.boxSelectionEnabled()) a.preventDefault(), e.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date, e.touchData.selecting || c.emit({
                originalEvent: a,
                type: "boxstart",
                position: {
                  x: o[0],
                  y: o[1]
                }
              }), e.touchData.selecting = !0, e.touchData.didSelect = !0, r[4] = 1, r && 0 !== r.length && void 0 !== r[0] ? (r[2] = (o[0] + o[2] + o[4]) / 3, r[3] = (o[1] + o[3] + o[5]) / 3) : (r[0] = (o[0] + o[2] + o[4]) / 3, r[1] = (o[1] + o[3] + o[5]) / 3, r[2] = (o[0] + o[2] + o[4]) / 3 + 1, r[3] = (o[1] + o[3] + o[5]) / 3 + 1), e.redrawHint("select", !0), e.redraw();
              else if (n && a.touches[1] && !e.touchData.didSelect && c.zoomingEnabled() && c.panningEnabled() && c.userZoomingEnabled() && c.userPanningEnabled()) {
                if (a.preventDefault(), e.data.bgActivePosistion = void 0, e.redrawHint("select", !0), ee = e.dragData.touchDragEles) {
                  e.redrawHint("drag", !0);
                  for (var z = 0; z < ee.length; z++) {
                    var W = ee[z]._private;
                    W.grabbed = !1, W.rscratch.inDragLayer = !1
                  }
                }
                var j = e.touchData.start,
                  O = (P = a.touches[0].clientX - I, k = a.touches[0].clientY - T, A = a.touches[1].clientX - I, R = a.touches[1].clientY - T, G(P, k, A, R)),
                  H = O / N;
                if (M) {
                  var Q = (P - _ + (A - b)) / 2,
                    q = (k - S + (R - C)) / 2,
                    Z = c.zoom(),
                    K = Z * H,
                    Y = c.pan(),
                    X = x[0] * Z + Y.x,
                    J = x[1] * Z + Y.y,
                    $ = {
                      x: -K / Z * (X - Y.x - Q) + X,
                      y: -K / Z * (J - Y.y - q) + J
                    };
                  if (j && j.active()) {
                    var ee = e.dragData.touchDragEles;
                    u(ee), e.redrawHint("drag", !0), e.redrawHint("eles", !0), j.unactivate().emit("freeon"), ee.emit("free"), e.dragData.didDrag && (j.emit("dragfreeon"), ee.emit("dragfree"))
                  }
                  c.viewport({
                    zoom: K,
                    pan: $,
                    cancelOnFailedZoom: !0
                  }), N = O, _ = P, S = k, b = A, C = R, e.pinching = !0
                }
                if (a.touches[0]) {
                  h = e.projectIntoViewport(a.touches[0].clientX, a.touches[0].clientY);
                  o[0] = h[0], o[1] = h[1]
                }
                if (a.touches[1]) {
                  h = e.projectIntoViewport(a.touches[1].clientX, a.touches[1].clientY);
                  o[2] = h[0], o[3] = h[1]
                }
                if (a.touches[2]) {
                  h = e.projectIntoViewport(a.touches[2].clientX, a.touches[2].clientY);
                  o[4] = h[0], o[5] = h[1]
                }
              } else if (a.touches[0] && !e.touchData.didSelect) {
                var ae = e.touchData.start,
                  te = e.touchData.last;
                if (e.hoverData.draggingEles || e.swipePanning || (L = e.findNearestElement(o[0], o[1], !0, !0)), n && null != ae && a.preventDefault(), n && null != ae && e.nodeIsDraggable(ae))
                  if (m) {
                    ee = e.dragData.touchDragEles;
                    var ne = !e.dragData.didDrag;
                    ne && l(ee, {
                      inDragLayer: !0
                    }), e.dragData.didDrag = !0;
                    var re = {
                      x: 0,
                      y: 0
                    };
                    if (w(p[0]) && w(p[1]))
                      if (re.x += p[0], re.y += p[1], ne) e.redrawHint("eles", !0), (ie = e.touchData.dragDelta) && w(ie[0]) && w(ie[1]) && (re.x += ie[0], re.y += ie[1]);
                    e.hoverData.draggingEles = !0, ee.silentShift(re).emit("position drag"), e.redrawHint("drag", !0), e.touchData.startPosition[0] == s[0] && e.touchData.startPosition[1] == s[1] && e.redrawHint("eles", !0), e.redraw()
                  } else {
                    var ie;
                    0 === (ie = e.touchData.dragDelta = e.touchData.dragDelta || []).length ? (ie.push(p[0]), ie.push(p[1])) : (ie[0] += p[0], ie[1] += p[1])
                  } if (t(ae || L, ["touchmove", "tapdrag", "vmousemove"], a, {
                    x: o[0],
                    y: o[1]
                  }), ae && ae.grabbed() || L == te || (te && te.emit({
                    originalEvent: a,
                    type: "tapdragout",
                    position: {
                      x: o[0],
                      y: o[1]
                    }
                  }), L && L.emit({
                    originalEvent: a,
                    type: "tapdragover",
                    position: {
                      x: o[0],
                      y: o[1]
                    }
                  })), e.touchData.last = L, n)
                  for (z = 0; z < o.length; z++) o[z] && e.touchData.startPosition[z] && m && (e.touchData.singleTouchMoved = !0);
                if (n && (null == ae || ae.pannable()) && c.panningEnabled() && c.userPanningEnabled()) {
                  i(ae, e.touchData.starts) && (a.preventDefault(), e.data.bgActivePosistion || (e.data.bgActivePosistion = je(e.touchData.startPosition)), e.swipePanning ? c.panBy({
                    x: p[0] * d,
                    y: p[1] * d
                  }) : m && (e.swipePanning = !0, c.panBy({
                    x: f * d,
                    y: U * d
                  }), ae && (ae.unactivate(), e.redrawHint("select", !0), e.touchData.start = null)));
                  h = e.projectIntoViewport(a.touches[0].clientX, a.touches[0].clientY);
                  o[0] = h[0], o[1] = h[1]
                }
              }
              for (y = 0; y < o.length; y++) s[y] = o[y];
              n && a.touches.length > 0 && !e.hoverData.draggingEles && !e.swipePanning && null != e.data.bgActivePosistion && (e.data.bgActivePosistion = void 0, e.redrawHint("select", !0), e.redraw())
            }
          }, !1), e.registerBinding(window, "touchcancel", R = function(a) {
            var t = e.touchData.start;
            e.touchData.capture = !1, t && t.unactivate()
          }), e.registerBinding(window, "touchend", E = function(n) {
            var r = e.touchData.start;
            if (e.touchData.capture) {
              0 === n.touches.length && (e.touchData.capture = !1), n.preventDefault();
              var i = e.selection;
              e.swipePanning = !1, e.hoverData.draggingEles = !1;
              var c, o = e.cy,
                s = o.zoom(),
                l = e.touchData.now,
                d = e.touchData.earlier;
              if (n.touches[0]) {
                var h = e.projectIntoViewport(n.touches[0].clientX, n.touches[0].clientY);
                l[0] = h[0], l[1] = h[1]
              }
              if (n.touches[1]) {
                h = e.projectIntoViewport(n.touches[1].clientX, n.touches[1].clientY);
                l[2] = h[0], l[3] = h[1]
              }
              if (n.touches[2]) {
                h = e.projectIntoViewport(n.touches[2].clientX, n.touches[2].clientY);
                l[4] = h[0], l[5] = h[1]
              }
              if (r && r.unactivate(), e.touchData.cxt) {
                if (c = {
                    originalEvent: n,
                    type: "cxttapend",
                    position: {
                      x: l[0],
                      y: l[1]
                    }
                  }, r ? r.emit(c) : o.emit(c), !e.touchData.cxtDragged) {
                  var m = {
                    originalEvent: n,
                    type: "cxttap",
                    position: {
                      x: l[0],
                      y: l[1]
                    }
                  };
                  r ? r.emit(m) : o.emit(m)
                }
                return e.touchData.start && (e.touchData.start._private.grabbed = !1), e.touchData.cxt = !1, e.touchData.start = null, void e.redraw()
              }
              if (!n.touches[2] && o.boxSelectionEnabled() && e.touchData.selecting) {
                e.touchData.selecting = !1;
                var g = o.collection(e.getAllInBox(i[0], i[1], i[2], i[3]));
                i[0] = void 0, i[1] = void 0, i[2] = void 0, i[3] = void 0, i[4] = 0, e.redrawHint("select", !0), o.emit({
                  type: "boxend",
                  originalEvent: n,
                  position: {
                    x: l[0],
                    y: l[1]
                  }
                });
                g.emit("box").stdFilter((function(e) {
                  return e.selectable() && !e.selected()
                })).select().emit("boxselect"), g.nonempty() && e.redrawHint("eles", !0), e.redraw()
              }
              if (null != r && r.unactivate(), n.touches[2]) e.data.bgActivePosistion = void 0, e.redrawHint("select", !0);
              else if (n.touches[1]);
              else if (n.touches[0]);
              else if (!n.touches[0]) {
                e.data.bgActivePosistion = void 0, e.redrawHint("select", !0);
                var p = e.dragData.touchDragEles;
                if (null != r) {
                  var y = r._private.grabbed;
                  u(p), e.redrawHint("drag", !0), e.redrawHint("eles", !0), y && (r.emit("freeon"), p.emit("free"), e.dragData.didDrag && (r.emit("dragfreeon"), p.emit("dragfree"))), t(r, ["touchend", "tapend", "vmouseup", "tapdragout"], n, {
                    x: l[0],
                    y: l[1]
                  }), r.unactivate(), e.touchData.start = null
                } else {
                  var f = e.findNearestElement(l[0], l[1], !0, !0);
                  t(f, ["touchend", "tapend", "vmouseup", "tapdragout"], n, {
                    x: l[0],
                    y: l[1]
                  })
                }
                var v = e.touchData.startPosition[0] - l[0],
                  _ = v * v,
                  S = e.touchData.startPosition[1] - l[1],
                  b = (_ + S * S) * s * s;
                e.touchData.singleTouchMoved || (r || o.$(":selected").unselect(["tapunselect"]), t(r, ["tap", "vclick"], n, {
                  x: l[0],
                  y: l[1]
                })), null != r && !e.dragData.didDrag && r._private.selectable && b < e.touchTapThreshold2 && !e.pinching && ("single" === o.selectionType() ? (o.$(a).unmerge(r).unselect(["tapunselect"]), r.select(["tapselect"])) : r.selected() ? r.unselect(["tapunselect"]) : r.select(["tapselect"]), e.redrawHint("eles", !0)), e.touchData.singleTouchMoved = !0
              }
              for (var w = 0; w < l.length; w++) d[w] = l[w];
              e.dragData.didDrag = !1, 0 === n.touches.length && (e.touchData.dragDelta = [], e.touchData.startPosition = null, e.touchData.startGPosition = null, e.touchData.didSelect = !1), n.touches.length < 2 && (1 === n.touches.length && (e.touchData.startGPosition = [n.touches[0].clientX, n.touches[0].clientY]), e.pinching = !1, e.redrawHint("eles", !0), e.redraw())
            }
          }, !1), "undefined" == typeof TouchEvent) {
          var F = [],
            L = function(e) {
              return {
                clientX: e.clientX,
                clientY: e.clientY,
                force: 1,
                identifier: e.pointerId,
                pageX: e.pageX,
                pageY: e.pageY,
                radiusX: e.width / 2,
                radiusY: e.height / 2,
                screenX: e.screenX,
                screenY: e.screenY,
                target: e.target
              }
            },
            z = function(e) {
              F.push(function(e) {
                return {
                  event: e,
                  touch: L(e)
                }
              }(e))
            },
            W = function(e) {
              for (var a = 0; a < F.length; a++) {
                if (F[a].event.pointerId === e.pointerId) return void F.splice(a, 1)
              }
            },
            j = function(e) {
              e.touches = F.map((function(e) {
                return e.touch
              }))
            },
            O = function(e) {
              return "mouse" === e.pointerType || 4 === e.pointerType
            };
          e.registerBinding(e.container, "pointerdown", (function(e) {
            O(e) || (e.preventDefault(), z(e), j(e), k(e))
          })), e.registerBinding(e.container, "pointerup", (function(e) {
            O(e) || (W(e), j(e), E(e))
          })), e.registerBinding(e.container, "pointercancel", (function(e) {
            O(e) || (W(e), j(e), R())
          })), e.registerBinding(e.container, "pointermove", (function(e) {
            O(e) || (e.preventDefault(), function(e) {
              var a = F.filter((function(a) {
                return a.event.pointerId === e.pointerId
              }))[0];
              a.event = e, a.touch = L(e)
            }(e), j(e), A(e))
          }))
        }
      };
      var Hc = {
        generatePolygon: function(e, a) {
          return this.nodeShapes[e] = {
            renderer: this,
            name: e,
            points: a,
            draw: function(e, a, t, n, r) {
              this.renderer.nodeShapeImpl("polygon", e, a, t, n, r, this.points)
            },
            intersectLine: function(e, a, t, n, r, i, c) {
              return ba(r, i, this.points, e, a, t / 2, n / 2, c)
            },
            checkPoint: function(e, a, t, n, r, i, c) {
              return ga(e, a, this.points, i, c, n, r, [0, -1], t)
            }
          }
        }
      };
      Hc.generateEllipse = function() {
        return this.nodeShapes.ellipse = {
          renderer: this,
          name: "ellipse",
          draw: function(e, a, t, n, r) {
            this.renderer.nodeShapeImpl(this.name, e, a, t, n, r)
          },
          intersectLine: function(e, a, t, n, r, i, c) {
            return function(e, a, t, n, r, i) {
              var c = t - e,
                o = n - a;
              c /= r, o /= i;
              var s = Math.sqrt(c * c + o * o),
                l = s - 1;
              if (l < 0) return [];
              var d = l / s;
              return [(t - e) * d + e, (n - a) * d + a]
            }(r, i, e, a, t / 2 + c, n / 2 + c)
          },
          checkPoint: function(e, a, t, n, r, i, c) {
            return fa(e, a, n, r, i, c, t)
          }
        }
      }, Hc.generateRoundPolygon = function(e, a) {
        for (var t = new Array(2 * a.length), n = 0; n < a.length / 2; n++) {
          var r = 2 * n,
            i = void 0;
          i = n < a.length / 2 - 1 ? 2 * (n + 1) : 0, t[4 * n] = a[r], t[4 * n + 1] = a[r + 1];
          var c = a[i] - a[r],
            o = a[i + 1] - a[r + 1],
            s = Math.sqrt(c * c + o * o);
          t[4 * n + 2] = c / s, t[4 * n + 3] = o / s
        }
        return this.nodeShapes[e] = {
          renderer: this,
          name: e,
          points: t,
          draw: function(e, a, t, n, r) {
            this.renderer.nodeShapeImpl("round-polygon", e, a, t, n, r, this.points)
          },
          intersectLine: function(e, a, t, n, r, i, c) {
            return function(e, a, t, n, r, i, c, o) {
              for (var s, l = [], d = new Array(t.length), u = i / 2, h = c / 2, m = xa(i, c), g = 0; g < t.length / 4; g++) {
                var p, y = void 0;
                y = 0 === g ? t.length - 2 : 4 * g - 2, p = 4 * g + 2;
                var f = n + u * t[4 * g],
                  v = r + h * t[4 * g + 1],
                  _ = -t[y] * t[p] - t[y + 1] * t[p + 1],
                  S = m / Math.tan(Math.acos(_) / 2),
                  b = f - S * t[y],
                  w = v - S * t[y + 1],
                  C = f + S * t[p],
                  N = v + S * t[p + 1];
                0 === g ? (d[t.length - 2] = b, d[t.length - 1] = w) : (d[4 * g - 2] = b, d[4 * g - 1] = w), d[4 * g] = C, d[4 * g + 1] = N;
                var B = t[y + 1],
                  D = -t[y];
                B * t[p] + D * t[p + 1] < 0 && (B *= -1, D *= -1), 0 !== (s = va(e, a, n, r, b + B * m, w + D * m, m)).length && l.push(s[0], s[1])
              }
              for (var x = 0; x < d.length / 4; x++) 0 !== (s = Sa(e, a, n, r, d[4 * x], d[4 * x + 1], d[4 * x + 2], d[4 * x + 3], !1)).length && l.push(s[0], s[1]);
              if (l.length > 2) {
                for (var I = [l[0], l[1]], T = Math.pow(I[0] - e, 2) + Math.pow(I[1] - a, 2), U = 1; U < l.length / 2; U++) {
                  var P = Math.pow(l[2 * U] - e, 2) + Math.pow(l[2 * U + 1] - a, 2);
                  P <= T && (I[0] = l[2 * U], I[1] = l[2 * U + 1], T = P)
                }
                return I
              }
              return l
            }(r, i, this.points, e, a, t, n)
          },
          checkPoint: function(e, a, t, n, r, i, c) {
            return function(e, a, t, n, r, i, c) {
              for (var o = new Array(t.length), s = i / 2, l = c / 2, d = xa(i, c), u = d * d, h = 0; h < t.length / 4; h++) {
                var m, g = void 0;
                g = 0 === h ? t.length - 2 : 4 * h - 2, m = 4 * h + 2;
                var p = n + s * t[4 * h],
                  y = r + l * t[4 * h + 1],
                  f = -t[g] * t[m] - t[g + 1] * t[m + 1],
                  v = d / Math.tan(Math.acos(f) / 2),
                  _ = p - v * t[g],
                  S = y - v * t[g + 1],
                  b = p + v * t[m],
                  w = y + v * t[m + 1];
                o[4 * h] = _, o[4 * h + 1] = S, o[4 * h + 2] = b, o[4 * h + 3] = w;
                var C = t[g + 1],
                  N = -t[g];
                C * t[m] + N * t[m + 1] < 0 && (C *= -1, N *= -1);
                var B = _ + C * d,
                  D = S + N * d;
                if (Math.pow(B - e, 2) + Math.pow(D - a, 2) <= u) return !0
              }
              return ma(e, a, o)
            }(e, a, this.points, i, c, n, r)
          }
        }
      }, Hc.generateRoundRectangle = function() {
        return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
          renderer: this,
          name: "round-rectangle",
          points: Ca(4, 0),
          draw: function(e, a, t, n, r) {
            this.renderer.nodeShapeImpl(this.name, e, a, t, n, r)
          },
          intersectLine: function(e, a, t, n, r, i, c) {
            return sa(r, i, e, a, t, n, c)
          },
          checkPoint: function(e, a, t, n, r, i, c) {
            var o = Da(n, r),
              s = 2 * o;
            return !!ga(e, a, this.points, i, c, n, r - s, [0, -1], t) || (!!ga(e, a, this.points, i, c, n - s, r, [0, -1], t) || (!!fa(e, a, s, s, i - n / 2 + o, c - r / 2 + o, t) || (!!fa(e, a, s, s, i + n / 2 - o, c - r / 2 + o, t) || (!!fa(e, a, s, s, i + n / 2 - o, c + r / 2 - o, t) || !!fa(e, a, s, s, i - n / 2 + o, c + r / 2 - o, t)))))
          }
        }
      }, Hc.generateCutRectangle = function() {
        return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
          renderer: this,
          name: "cut-rectangle",
          cornerLength: 8,
          points: Ca(4, 0),
          draw: function(e, a, t, n, r) {
            this.renderer.nodeShapeImpl(this.name, e, a, t, n, r)
          },
          generateCutTrianglePts: function(e, a, t, n) {
            var r = this.cornerLength,
              i = a / 2,
              c = e / 2,
              o = t - c,
              s = t + c,
              l = n - i,
              d = n + i;
            return {
              topLeft: [o, l + r, o + r, l, o + r, l + r],
              topRight: [s - r, l, s, l + r, s - r, l + r],
              bottomRight: [s, d - r, s - r, d, s - r, d - r],
              bottomLeft: [o + r, d, o, d - r, o + r, d - r]
            }
          },
          intersectLine: function(e, a, t, n, r, i, c) {
            var o = this.generateCutTrianglePts(t + 2 * c, n + 2 * c, e, a),
              s = [].concat.apply([], [o.topLeft.splice(0, 4), o.topRight.splice(0, 4), o.bottomRight.splice(0, 4), o.bottomLeft.splice(0, 4)]);
            return ba(r, i, s, e, a)
          },
          checkPoint: function(e, a, t, n, r, i, c) {
            if (ga(e, a, this.points, i, c, n, r - 2 * this.cornerLength, [0, -1], t)) return !0;
            if (ga(e, a, this.points, i, c, n - 2 * this.cornerLength, r, [0, -1], t)) return !0;
            var o = this.generateCutTrianglePts(n, r, i, c);
            return ma(e, a, o.topLeft) || ma(e, a, o.topRight) || ma(e, a, o.bottomRight) || ma(e, a, o.bottomLeft)
          }
        }
      }, Hc.generateBarrel = function() {
        return this.nodeShapes.barrel = {
          renderer: this,
          name: "barrel",
          points: Ca(4, 0),
          draw: function(e, a, t, n, r) {
            this.renderer.nodeShapeImpl(this.name, e, a, t, n, r)
          },
          intersectLine: function(e, a, t, n, r, i, c) {
            var o = this.generateBarrelBezierPts(t + 2 * c, n + 2 * c, e, a),
              s = function(e) {
                var a = Xe({
                    x: e[0],
                    y: e[1]
                  }, {
                    x: e[2],
                    y: e[3]
                  }, {
                    x: e[4],
                    y: e[5]
                  }, .15),
                  t = Xe({
                    x: e[0],
                    y: e[1]
                  }, {
                    x: e[2],
                    y: e[3]
                  }, {
                    x: e[4],
                    y: e[5]
                  }, .5),
                  n = Xe({
                    x: e[0],
                    y: e[1]
                  }, {
                    x: e[2],
                    y: e[3]
                  }, {
                    x: e[4],
                    y: e[5]
                  }, .85);
                return [e[0], e[1], a.x, a.y, t.x, t.y, n.x, n.y, e[4], e[5]]
              },
              l = [].concat(s(o.topLeft), s(o.topRight), s(o.bottomRight), s(o.bottomLeft));
            return ba(r, i, l, e, a)
          },
          generateBarrelBezierPts: function(e, a, t, n) {
            var r = a / 2,
              i = e / 2,
              c = t - i,
              o = t + i,
              s = n - r,
              l = n + r,
              d = Ia(e, a),
              u = d.heightOffset,
              h = d.widthOffset,
              m = d.ctrlPtOffsetPct * e,
              g = {
                topLeft: [c, s + u, c + m, s, c + h, s],
                topRight: [o - h, s, o - m, s, o, s + u],
                bottomRight: [o, l - u, o - m, l, o - h, l],
                bottomLeft: [c + h, l, c + m, l, c, l - u]
              };
            return g.topLeft.isTop = !0, g.topRight.isTop = !0, g.bottomLeft.isBottom = !0, g.bottomRight.isBottom = !0, g
          },
          checkPoint: function(e, a, t, n, r, i, c) {
            var o = Ia(n, r),
              s = o.heightOffset,
              l = o.widthOffset;
            if (ga(e, a, this.points, i, c, n, r - 2 * s, [0, -1], t)) return !0;
            if (ga(e, a, this.points, i, c, n - 2 * l, r, [0, -1], t)) return !0;
            for (var d = this.generateBarrelBezierPts(n, r, i, c), u = function(e, a, t) {
                var n, r, i = t[4],
                  c = t[2],
                  o = t[0],
                  s = t[5],
                  l = t[1],
                  d = Math.min(i, o),
                  u = Math.max(i, o),
                  h = Math.min(s, l),
                  m = Math.max(s, l);
                if (d <= e && e <= u && h <= a && a <= m) {
                  var g = [(n = i) - 2 * (r = c) + o, 2 * (r - n), n],
                    p = function(e, a, t, n) {
                      var r = a * a - 4 * e * (t -= n);
                      if (r < 0) return [];
                      var i = Math.sqrt(r),
                        c = 2 * e;
                      return [(-a + i) / c, (-a - i) / c]
                    }(g[0], g[1], g[2], e).filter((function(e) {
                      return 0 <= e && e <= 1
                    }));
                  if (p.length > 0) return p[0]
                }
                return null
              }, h = Object.keys(d), m = 0; m < h.length; m++) {
              var g = d[h[m]],
                p = u(e, a, g);
              if (null != p) {
                var y = g[5],
                  f = g[3],
                  v = g[1],
                  _ = Ye(y, f, v, p);
                if (g.isTop && _ <= a) return !0;
                if (g.isBottom && a <= _) return !0
              }
            }
            return !1
          }
        }
      }, Hc.generateBottomRoundrectangle = function() {
        return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
          renderer: this,
          name: "bottom-round-rectangle",
          points: Ca(4, 0),
          draw: function(e, a, t, n, r) {
            this.renderer.nodeShapeImpl(this.name, e, a, t, n, r)
          },
          intersectLine: function(e, a, t, n, r, i, c) {
            var o = a - (n / 2 + c),
              s = Sa(r, i, e, a, e - (t / 2 + c), o, e + (t / 2 + c), o, !1);
            return s.length > 0 ? s : sa(r, i, e, a, t, n, c)
          },
          checkPoint: function(e, a, t, n, r, i, c) {
            var o = Da(n, r),
              s = 2 * o;
            if (ga(e, a, this.points, i, c, n, r - s, [0, -1], t)) return !0;
            if (ga(e, a, this.points, i, c, n - s, r, [0, -1], t)) return !0;
            var l = n / 2 + 2 * t,
              d = r / 2 + 2 * t;
            return !!ma(e, a, [i - l, c - d, i - l, c, i + l, c, i + l, c - d]) || (!!fa(e, a, s, s, i + n / 2 - o, c + r / 2 - o, t) || !!fa(e, a, s, s, i - n / 2 + o, c + r / 2 - o, t))
          }
        }
      }, Hc.registerNodeShapes = function() {
        var e = this.nodeShapes = {},
          a = this;
        this.generateEllipse(), this.generatePolygon("triangle", Ca(3, 0)), this.generateRoundPolygon("round-triangle", Ca(3, 0)), this.generatePolygon("rectangle", Ca(4, 0)), e.square = e.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
        var t = [0, 1, 1, 0, 0, -1, -1, 0];
        this.generatePolygon("diamond", t), this.generateRoundPolygon("round-diamond", t), this.generatePolygon("pentagon", Ca(5, 0)), this.generateRoundPolygon("round-pentagon", Ca(5, 0)), this.generatePolygon("hexagon", Ca(6, 0)), this.generateRoundPolygon("round-hexagon", Ca(6, 0)), this.generatePolygon("heptagon", Ca(7, 0)), this.generateRoundPolygon("round-heptagon", Ca(7, 0)), this.generatePolygon("octagon", Ca(8, 0)), this.generateRoundPolygon("round-octagon", Ca(8, 0));
        var n = new Array(20),
          r = Ba(5, 0),
          i = Ba(5, Math.PI / 5),
          c = .5 * (3 - Math.sqrt(5));
        c *= 1.57;
        for (var o = 0; o < i.length / 2; o++) i[2 * o] *= c, i[2 * o + 1] *= c;
        for (o = 0; o < 5; o++) n[4 * o] = r[2 * o], n[4 * o + 1] = r[2 * o + 1], n[4 * o + 2] = i[2 * o], n[4 * o + 3] = i[2 * o + 1];
        n = Na(n), this.generatePolygon("star", n), this.generatePolygon("vee", [-1, -1, 0, -.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, .333, -1, 1, 1, -.333, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -.95, -.75, 0, -1, .95, 1, .95, .75, 0, 1, -.95]);
        var s = [-1, -1, .25, -1, 1, 0, .25, 1, -1, 1];
        this.generatePolygon("tag", s), this.generateRoundPolygon("round-tag", s), e.makePolygon = function(e) {
          var t, n = "polygon-" + e.join("$");
          return (t = this[n]) ? t : a.generatePolygon(n, e)
        }
      };
      var Qc = {
          timeToRender: function() {
            return this.redrawTotalTime / this.redrawCount
          },
          redraw: function(e) {
            e = e || pe();
            var a = this;
            void 0 === a.averageRedrawTime && (a.averageRedrawTime = 0), void 0 === a.lastRedrawTime && (a.lastRedrawTime = 0), void 0 === a.lastDrawTime && (a.lastDrawTime = 0), a.requestedFrame = !0, a.renderOptions = e
          },
          beforeRender: function(e, a) {
            if (!this.destroyed) {
              null == a && le("Priority is not optional for beforeRender");
              var t = this.beforeRenderCallbacks;
              t.push({
                fn: e,
                priority: a
              }), t.sort((function(e, a) {
                return a.priority - e.priority
              }))
            }
          }
        },
        qc = function(e, a, t) {
          for (var n = e.beforeRenderCallbacks, r = 0; r < n.length; r++) n[r].fn(a, t)
        };
      Qc.startRenderLoop = function() {
        var e = this,
          a = e.cy;
        if (!e.renderLoopStarted) {
          e.renderLoopStarted = !0;
          q((function t(n) {
            if (!e.destroyed) {
              if (a.batching());
              else if (e.requestedFrame && !e.skipFrame) {
                qc(e, !0, n);
                var r = Z();
                e.render(e.renderOptions);
                var i = e.lastDrawTime = Z();
                void 0 === e.averageRedrawTime && (e.averageRedrawTime = i - r), void 0 === e.redrawCount && (e.redrawCount = 0), e.redrawCount++, void 0 === e.redrawTotalTime && (e.redrawTotalTime = 0);
                var c = i - r;
                e.redrawTotalTime += c, e.lastRedrawTime = c, e.averageRedrawTime = e.averageRedrawTime / 2 + c / 2, e.requestedFrame = !1
              } else qc(e, !1, n);
              e.skipFrame = !1, q(t)
            }
          }))
        }
      };
      var Zc = function(e) {
          this.init(e)
        },
        Kc = Zc.prototype;
      Kc.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"], Kc.init = function(e) {
        var a = this;
        a.options = e, a.cy = e.cy;
        var t = a.container = e.cy.container();
        if (u) {
          var n = u.document,
            r = n.head,
            i = "__________cytoscape_container",
            c = null != n.getElementById("__________cytoscape_stylesheet");
          if (t.className.indexOf(i) < 0 && (t.className = (t.className || "") + " " + i), !c) {
            var o = n.createElement("style");
            o.id = "__________cytoscape_stylesheet", o.innerHTML = "." + i + " { position: relative; }", r.insertBefore(o, r.children[0])
          }
          "static" === u.getComputedStyle(t).getPropertyValue("position") && ue("A Cytoscape container has style position:static and so can not use UI extensions properly")
        }
        a.selection = [void 0, void 0, void 0, void 0, 0], a.bezierProjPcts = [.05, .225, .4, .5, .6, .775, .95], a.hoverData = {
          down: null,
          last: null,
          downTime: null,
          triggerMode: null,
          dragging: !1,
          initialPan: [null, null],
          capture: !1
        }, a.dragData = {
          possibleDragElements: []
        }, a.touchData = {
          start: null,
          capture: !1,
          startPosition: [null, null, null, null, null, null],
          singleTouchStartTime: null,
          singleTouchMoved: !0,
          now: [null, null, null, null, null, null],
          earlier: [null, null, null, null, null, null]
        }, a.redraws = 0, a.showFps = e.showFps, a.debug = e.debug, a.hideEdgesOnViewport = e.hideEdgesOnViewport, a.textureOnViewport = e.textureOnViewport, a.wheelSensitivity = e.wheelSensitivity, a.motionBlurEnabled = e.motionBlur, a.forcedPixelRatio = w(e.pixelRatio) ? e.pixelRatio : null, a.motionBlur = e.motionBlur, a.motionBlurOpacity = e.motionBlurOpacity, a.motionBlurTransparency = 1 - a.motionBlurOpacity, a.motionBlurPxRatio = 1, a.mbPxRBlurry = 1, a.minMbLowQualFrames = 4, a.fullQualityMb = !1, a.clearedForMotionBlur = [], a.desktopTapThreshold = e.desktopTapThreshold, a.desktopTapThreshold2 = e.desktopTapThreshold * e.desktopTapThreshold, a.touchTapThreshold = e.touchTapThreshold, a.touchTapThreshold2 = e.touchTapThreshold * e.touchTapThreshold, a.tapholdDuration = 500, a.bindings = [], a.beforeRenderCallbacks = [], a.beforeRenderPriorities = {
          animations: 400,
          eleCalcs: 300,
          eleTxrDeq: 200,
          lyrTxrDeq: 150,
          lyrTxrSkip: 100
        }, a.registerNodeShapes(), a.registerArrowShapes(), a.registerCalculationListeners()
      }, Kc.notify = function(e, a) {
        var t = this,
          n = t.cy;
        this.destroyed || ("init" !== e ? "destroy" !== e ? (("add" === e || "remove" === e || "move" === e && n.hasCompoundNodes() || "load" === e || "zorder" === e || "mount" === e) && t.invalidateCachedZSortedEles(), "viewport" === e && t.redrawHint("select", !0), "load" !== e && "resize" !== e && "mount" !== e || (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container)), t.redrawHint("eles", !0), t.redrawHint("drag", !0), this.startRenderLoop(), this.redraw()) : t.destroy() : t.load())
      }, Kc.destroy = function() {
        var e = this;
        e.destroyed = !0, e.cy.stopAnimationLoop();
        for (var a = 0; a < e.bindings.length; a++) {
          var t = e.bindings[a],
            n = t.target;
          (n.off || n.removeEventListener).apply(n, t.args)
        }
        if (e.bindings = [], e.beforeRenderCallbacks = [], e.onUpdateEleCalcsFns = [], e.removeObserver && e.removeObserver.disconnect(), e.styleObserver && e.styleObserver.disconnect(), e.resizeObserver && e.resizeObserver.disconnect(), e.labelCalcDiv) try {
          document.body.removeChild(e.labelCalcDiv)
        } catch (e) {}
      }, Kc.isHeadless = function() {
        return !1
      }, [xc, Wc, jc, Oc, Hc, Qc].forEach((function(e) {
        F(Kc, e)
      }));
      var Yc = function(e) {
          return function() {
            var a = this,
              t = this.renderer;
            if (!a.dequeueingSetup) {
              a.dequeueingSetup = !0;
              var n = r((function() {
                  t.redrawHint("eles", !0), t.redrawHint("drag", !0), t.redraw()
                }), e.deqRedrawThreshold),
                i = e.priority || se;
              t.beforeRender((function(r, i) {
                var c = Z(),
                  o = t.averageRedrawTime,
                  s = t.lastRedrawTime,
                  l = [],
                  d = t.cy.extent(),
                  u = t.getPixelRatio();
                for (r || t.flushRenderedStyleQueue();;) {
                  var h = Z(),
                    m = h - c,
                    g = h - i;
                  if (s < 1e3 / 60) {
                    var p = 1e3 / 60 - (r ? o : 0);
                    if (g >= e.deqFastCost * p) break
                  } else if (r) {
                    if (m >= e.deqCost * s || m >= e.deqAvgCost * o) break
                  } else if (g >= e.deqNoDrawCost * (1e3 / 60)) break;
                  var y = e.deq(a, u, d);
                  if (!(y.length > 0)) break;
                  for (var f = 0; f < y.length; f++) l.push(y[f])
                }
                l.length > 0 && (e.onDeqd(a, l), !r && e.shouldRedraw(a, l, u, d) && n())
              }), i(a))
            }
          }
        },
        Xc = function() {
          function e(a) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ce;
            o(this, e), this.idsByKey = new be, this.keyForId = new be, this.cachesByLvl = new be, this.lvls = [], this.getKey = a, this.doesEleInvalidateKey = t
          }
          return l(e, [{
            key: "getIdsFor",
            value: function(e) {
              null == e && le("Can not get id list for null key");
              var a = this.idsByKey,
                t = this.idsByKey.get(e);
              return t || (t = new Ce, a.set(e, t)), t
            }
          }, {
            key: "addIdForKey",
            value: function(e, a) {
              null != e && this.getIdsFor(e).add(a)
            }
          }, {
            key: "deleteIdForKey",
            value: function(e, a) {
              null != e && this.getIdsFor(e).delete(a)
            }
          }, {
            key: "getNumberOfIdsForKey",
            value: function(e) {
              return null == e ? 0 : this.getIdsFor(e).size
            }
          }, {
            key: "updateKeyMappingFor",
            value: function(e) {
              var a = e.id(),
                t = this.keyForId.get(a),
                n = this.getKey(e);
              this.deleteIdForKey(t, a), this.addIdForKey(n, a), this.keyForId.set(a, n)
            }
          }, {
            key: "deleteKeyMappingFor",
            value: function(e) {
              var a = e.id(),
                t = this.keyForId.get(a);
              this.deleteIdForKey(t, a), this.keyForId.delete(a)
            }
          }, {
            key: "keyHasChangedFor",
            value: function(e) {
              var a = e.id();
              return this.keyForId.get(a) !== this.getKey(e)
            }
          }, {
            key: "isInvalid",
            value: function(e) {
              return this.keyHasChangedFor(e) || this.doesEleInvalidateKey(e)
            }
          }, {
            key: "getCachesAt",
            value: function(e) {
              var a = this.cachesByLvl,
                t = this.lvls,
                n = a.get(e);
              return n || (n = new be, a.set(e, n), t.push(e)), n
            }
          }, {
            key: "getCache",
            value: function(e, a) {
              return this.getCachesAt(a).get(e)
            }
          }, {
            key: "get",
            value: function(e, a) {
              var t = this.getKey(e),
                n = this.getCache(t, a);
              return null != n && this.updateKeyMappingFor(e), n
            }
          }, {
            key: "getForCachedKey",
            value: function(e, a) {
              var t = this.keyForId.get(e.id());
              return this.getCache(t, a)
            }
          }, {
            key: "hasCache",
            value: function(e, a) {
              return this.getCachesAt(a).has(e)
            }
          }, {
            key: "has",
            value: function(e, a) {
              var t = this.getKey(e);
              return this.hasCache(t, a)
            }
          }, {
            key: "setCache",
            value: function(e, a, t) {
              t.key = e, this.getCachesAt(a).set(e, t)
            }
          }, {
            key: "set",
            value: function(e, a, t) {
              var n = this.getKey(e);
              this.setCache(n, a, t), this.updateKeyMappingFor(e)
            }
          }, {
            key: "deleteCache",
            value: function(e, a) {
              this.getCachesAt(a).delete(e)
            }
          }, {
            key: "delete",
            value: function(e, a) {
              var t = this.getKey(e);
              this.deleteCache(t, a)
            }
          }, {
            key: "invalidateKey",
            value: function(e) {
              var a = this;
              this.lvls.forEach((function(t) {
                return a.deleteCache(e, t)
              }))
            }
          }, {
            key: "invalidate",
            value: function(e) {
              var a = e.id(),
                t = this.keyForId.get(a);
              this.deleteKeyMappingFor(e);
              var n = this.doesEleInvalidateKey(e);
              return n && this.invalidateKey(t), n || 0 === this.getNumberOfIdsForKey(t)
            }
          }]), e
        }(),
        Jc = {
          dequeue: "dequeue",
          downscale: "downscale",
          highQuality: "highQuality"
        },
        $c = ye({
          getKey: null,
          doesEleInvalidateKey: ce,
          drawElement: null,
          getBoundingBox: null,
          getRotationPoint: null,
          getRotationOffset: null,
          isVisible: ie,
          allowEdgeTxrCaching: !0,
          allowParentTxrCaching: !0
        }),
        eo = function(e, a) {
          this.renderer = e, this.onDequeues = [];
          var t = $c(a);
          F(this, t), this.lookup = new Xc(t.getKey, t.doesEleInvalidateKey), this.setupDequeueing()
        },
        ao = eo.prototype;
      ao.reasons = Jc, ao.getTextureQueue = function(e) {
        return this.eleImgCaches = this.eleImgCaches || {}, this.eleImgCaches[e] = this.eleImgCaches[e] || []
      }, ao.getRetiredTextureQueue = function(e) {
        var a = this.eleImgCaches.retired = this.eleImgCaches.retired || {};
        return a[e] = a[e] || []
      }, ao.getElementQueue = function() {
        return this.eleCacheQueue = this.eleCacheQueue || new i((function(e, a) {
          return a.reqs - e.reqs
        }))
      }, ao.getElementKeyToQueue = function() {
        return this.eleKeyToCacheQueue = this.eleKeyToCacheQueue || {}
      }, ao.getElement = function(e, a, t, n, r) {
        var i = this,
          c = this.renderer,
          o = c.cy.zoom(),
          s = this.lookup;
        if (0 === a.w || 0 === a.h || isNaN(a.w) || isNaN(a.h) || !e.visible()) return null;
        if (!i.allowEdgeTxrCaching && e.isEdge() || !i.allowParentTxrCaching && e.isParent()) return null;
        if (null == n && (n = Math.ceil(He(o * t))), n < -4) n = -4;
        else if (o >= 7.99 || n > 3) return null;
        var l = Math.pow(2, n),
          d = a.h * l,
          u = a.w * l,
          h = c.eleTextBiggerThanMin(e, l);
        if (!this.isVisible(e, h)) return null;
        var m, g = s.get(e, n);
        if (g && g.invalidated && (g.invalidated = !1, g.texture.invalidatedWidth -= g.width), g) return g;
        if (m = d <= 25 ? 25 : d <= 50 ? 50 : 50 * Math.ceil(d / 50), d > 1024 || u > 1024) return null;
        var p = i.getTextureQueue(m),
          y = p[p.length - 2],
          f = function() {
            return i.recycleTexture(m, u) || i.addTexture(m, u)
          };
        y || (y = p[p.length - 1]), y || (y = f()), y.width - y.usedWidth < u && (y = f());
        for (var v, _ = function(e) {
            return e && e.scaledLabelShown === h
          }, S = r && r === Jc.dequeue, b = r && r === Jc.highQuality, w = r && r === Jc.downscale, C = n + 1; C <= 3; C++) {
          var N = s.get(e, C);
          if (N) {
            v = N;
            break
          }
        }
        var B = v && v.level === n + 1 ? v : null,
          D = function() {
            y.context.drawImage(B.texture.canvas, B.x, 0, B.width, B.height, y.usedWidth, 0, u, d)
          };
        if (y.context.setTransform(1, 0, 0, 1, 0, 0), y.context.clearRect(y.usedWidth, 0, u, m), _(B)) D();
        else if (_(v)) {
          if (!b) return i.queueElement(e, v.level - 1), v;
          for (var x = v.level; x > n; x--) B = i.getElement(e, a, t, x, Jc.downscale);
          D()
        } else {
          var I;
          if (!S && !b && !w)
            for (var T = n - 1; T >= -4; T--) {
              var U = s.get(e, T);
              if (U) {
                I = U;
                break
              }
            }
          if (_(I)) return i.queueElement(e, n), I;
          y.context.translate(y.usedWidth, 0), y.context.scale(l, l), this.drawElement(y.context, e, a, h, !1), y.context.scale(1 / l, 1 / l), y.context.translate(-y.usedWidth, 0)
        }
        return g = {
          x: y.usedWidth,
          texture: y,
          level: n,
          scale: l,
          width: u,
          height: d,
          scaledLabelShown: h
        }, y.usedWidth += Math.ceil(u + 8), y.eleCaches.push(g), s.set(e, n, g), i.checkTextureFullness(y), g
      }, ao.invalidateElements = function(e) {
        for (var a = 0; a < e.length; a++) this.invalidateElement(e[a])
      }, ao.invalidateElement = function(e) {
        var a = this.lookup,
          t = [];
        if (a.isInvalid(e)) {
          for (var n = -4; n <= 3; n++) {
            var r = a.getForCachedKey(e, n);
            r && t.push(r)
          }
          if (a.invalidate(e))
            for (var i = 0; i < t.length; i++) {
              var c = t[i],
                o = c.texture;
              o.invalidatedWidth += c.width, c.invalidated = !0, this.checkTextureUtility(o)
            }
          this.removeFromQueue(e)
        }
      }, ao.checkTextureUtility = function(e) {
        e.invalidatedWidth >= .2 * e.width && this.retireTexture(e)
      }, ao.checkTextureFullness = function(e) {
        var a = this.getTextureQueue(e.height);
        e.usedWidth / e.width > .8 && e.fullnessChecks >= 10 ? fe(a, e) : e.fullnessChecks++
      }, ao.retireTexture = function(e) {
        var a = e.height,
          t = this.getTextureQueue(a),
          n = this.lookup;
        fe(t, e), e.retired = !0;
        for (var r = e.eleCaches, i = 0; i < r.length; i++) {
          var c = r[i];
          n.deleteCache(c.key, c.level)
        }
        ve(r), this.getRetiredTextureQueue(a).push(e)
      }, ao.addTexture = function(e, a) {
        var t = {};
        return this.getTextureQueue(e).push(t), t.eleCaches = [], t.height = e, t.width = Math.max(1024, a), t.usedWidth = 0, t.invalidatedWidth = 0, t.fullnessChecks = 0, t.canvas = this.renderer.makeOffscreenCanvas(t.width, t.height), t.context = t.canvas.getContext("2d"), t
      }, ao.recycleTexture = function(e, a) {
        for (var t = this.getTextureQueue(e), n = this.getRetiredTextureQueue(e), r = 0; r < n.length; r++) {
          var i = n[r];
          if (i.width >= a) return i.retired = !1, i.usedWidth = 0, i.invalidatedWidth = 0, i.fullnessChecks = 0, ve(i.eleCaches), i.context.setTransform(1, 0, 0, 1, 0, 0), i.context.clearRect(0, 0, i.width, i.height), fe(n, i), t.push(i), i
        }
      }, ao.queueElement = function(e, a) {
        var t = this.getElementQueue(),
          n = this.getElementKeyToQueue(),
          r = this.getKey(e),
          i = n[r];
        if (i) i.level = Math.max(i.level, a), i.eles.merge(e), i.reqs++, t.updateItem(i);
        else {
          var c = {
            eles: e.spawn().merge(e),
            level: a,
            reqs: 1,
            key: r
          };
          t.push(c), n[r] = c
        }
      }, ao.dequeue = function(e) {
        for (var a = this.getElementQueue(), t = this.getElementKeyToQueue(), n = [], r = this.lookup, i = 0; i < 1 && a.size() > 0; i++) {
          var c = a.pop(),
            o = c.key,
            s = c.eles[0],
            l = r.hasCache(s, c.level);
          if (t[o] = null, !l) {
            n.push(c);
            var d = this.getBoundingBox(s);
            this.getElement(s, d, e, c.level, Jc.dequeue)
          }
        }
        return n
      }, ao.removeFromQueue = function(e) {
        var a = this.getElementQueue(),
          t = this.getElementKeyToQueue(),
          n = this.getKey(e),
          r = t[n];
        null != r && (1 === r.eles.length ? (r.reqs = re, a.updateItem(r), a.pop(), t[n] = null) : r.eles.unmerge(e))
      }, ao.onDequeue = function(e) {
        this.onDequeues.push(e)
      }, ao.offDequeue = function(e) {
        fe(this.onDequeues, e)
      }, ao.setupDequeueing = Yc({
        deqRedrawThreshold: 100,
        deqCost: .15,
        deqAvgCost: .1,
        deqNoDrawCost: .9,
        deqFastCost: .9,
        deq: function(e, a, t) {
          return e.dequeue(a, t)
        },
        onDeqd: function(e, a) {
          for (var t = 0; t < e.onDequeues.length; t++) {
            (0, e.onDequeues[t])(a)
          }
        },
        shouldRedraw: function(e, a, t, n) {
          for (var r = 0; r < a.length; r++)
            for (var i = a[r].eles, c = 0; c < i.length; c++) {
              var o = i[c].boundingBox();
              if (ia(o, n)) return !0
            }
          return !1
        },
        priority: function(e) {
          return e.renderer.beforeRenderPriorities.eleTxrDeq
        }
      });
      var to = function(e) {
          var a = this,
            t = a.renderer = e,
            n = t.cy;
          a.layersByLevel = {}, a.firstGet = !0, a.lastInvalidationTime = Z() - 500, a.skipping = !1, a.eleTxrDeqs = n.collection(), a.scheduleElementRefinement = r((function() {
            a.refineElementTextures(a.eleTxrDeqs), a.eleTxrDeqs.unmerge(a.eleTxrDeqs)
          }), 50), t.beforeRender((function(e, t) {
            t - a.lastInvalidationTime <= 250 ? a.skipping = !0 : a.skipping = !1
          }), t.beforeRenderPriorities.lyrTxrSkip);
          a.layersQueue = new i((function(e, a) {
            return a.reqs - e.reqs
          })), a.setupDequeueing()
        },
        no = to.prototype,
        ro = 0,
        io = Math.pow(2, 53) - 1;
      no.makeLayer = function(e, a) {
        var t = Math.pow(2, a),
          n = Math.ceil(e.w * t),
          r = Math.ceil(e.h * t),
          i = this.renderer.makeOffscreenCanvas(n, r),
          c = {
            id: ro = ++ro % io,
            bb: e,
            level: a,
            width: n,
            height: r,
            canvas: i,
            context: i.getContext("2d"),
            eles: [],
            elesQueue: [],
            reqs: 0
          },
          o = c.context,
          s = -c.bb.x1,
          l = -c.bb.y1;
        return o.scale(t, t), o.translate(s, l), c
      }, no.getLayers = function(e, a, t) {
        var n = this,
          r = n.renderer.cy.zoom(),
          i = n.firstGet;
        if (n.firstGet = !1, null == t)
          if ((t = Math.ceil(He(r * a))) < -4) t = -4;
          else if (r >= 3.99 || t > 2) return null;
        n.validateLayersElesOrdering(t, e);
        var c, o, s = n.layersByLevel,
          l = Math.pow(2, t),
          d = s[t] = s[t] || [];
        if (n.levelIsComplete(t, e)) return d;
        ! function() {
          var a = function(a) {
              if (n.validateLayersElesOrdering(a, e), n.levelIsComplete(a, e)) return o = s[a], !0
            },
            r = function(e) {
              if (!o)
                for (var n = t + e; - 4 <= n && n <= 2 && !a(n); n += e);
            };
          r(1), r(-1);
          for (var i = d.length - 1; i >= 0; i--) {
            var c = d[i];
            c.invalid && fe(d, c)
          }
        }();
        var u = function(a) {
          var r = (a = a || {}).after;
          if (function() {
              if (!c) {
                c = $e();
                for (var a = 0; a < e.length; a++) t = c, n = e[a].boundingBox(), t.x1 = Math.min(t.x1, n.x1), t.x2 = Math.max(t.x2, n.x2), t.w = t.x2 - t.x1, t.y1 = Math.min(t.y1, n.y1), t.y2 = Math.max(t.y2, n.y2), t.h = t.y2 - t.y1
              }
              var t, n
            }(), c.w * l * (c.h * l) > 16e6) return null;
          var i = n.makeLayer(c, t);
          if (null != r) {
            var o = d.indexOf(r) + 1;
            d.splice(o, 0, i)
          } else(void 0 === a.insert || a.insert) && d.unshift(i);
          return i
        };
        if (n.skipping && !i) return null;
        for (var h = null, m = e.length / 1, g = !i, p = 0; p < e.length; p++) {
          var y = e[p],
            f = y._private.rscratch,
            v = f.imgLayerCaches = f.imgLayerCaches || {},
            _ = v[t];
          if (_) h = _;
          else {
            if ((!h || h.eles.length >= m || !oa(h.bb, y.boundingBox())) && !(h = u({
                insert: !0,
                after: h
              }))) return null;
            o || g ? n.queueLayer(h, y) : n.drawEleInLayer(h, y, t, a), h.eles.push(y), v[t] = h
          }
        }
        return o || (g ? null : d)
      }, no.getEleLevelForLayerLevel = function(e, a) {
        return e
      }, no.drawEleInLayer = function(e, a, t, n) {
        var r = this.renderer,
          i = e.context,
          c = a.boundingBox();
        0 !== c.w && 0 !== c.h && a.visible() && (t = this.getEleLevelForLayerLevel(t, n), r.setImgSmoothing(i, !1), r.drawCachedElement(i, a, null, null, t, !0), r.setImgSmoothing(i, !0))
      }, no.levelIsComplete = function(e, a) {
        var t = this.layersByLevel[e];
        if (!t || 0 === t.length) return !1;
        for (var n = 0, r = 0; r < t.length; r++) {
          var i = t[r];
          if (i.reqs > 0) return !1;
          if (i.invalid) return !1;
          n += i.eles.length
        }
        return n === a.length
      }, no.validateLayersElesOrdering = function(e, a) {
        var t = this.layersByLevel[e];
        if (t)
          for (var n = 0; n < t.length; n++) {
            for (var r = t[n], i = -1, c = 0; c < a.length; c++)
              if (r.eles[0] === a[c]) {
                i = c;
                break
              } if (i < 0) this.invalidateLayer(r);
            else {
              var o = i;
              for (c = 0; c < r.eles.length; c++)
                if (r.eles[c] !== a[o + c]) {
                  this.invalidateLayer(r);
                  break
                }
            }
          }
      }, no.updateElementsInLayers = function(e, a) {
        for (var t = B(e[0]), n = 0; n < e.length; n++)
          for (var r = t ? null : e[n], i = t ? e[n] : e[n].ele, c = i._private.rscratch, o = c.imgLayerCaches = c.imgLayerCaches || {}, s = -4; s <= 2; s++) {
            var l = o[s];
            l && (r && this.getEleLevelForLayerLevel(l.level) !== r.level || a(l, i, r))
          }
      }, no.haveLayers = function() {
        for (var e = !1, a = -4; a <= 2; a++) {
          var t = this.layersByLevel[a];
          if (t && t.length > 0) {
            e = !0;
            break
          }
        }
        return e
      }, no.invalidateElements = function(e) {
        var a = this;
        0 !== e.length && (a.lastInvalidationTime = Z(), 0 !== e.length && a.haveLayers() && a.updateElementsInLayers(e, (function(e, t, n) {
          a.invalidateLayer(e)
        })))
      }, no.invalidateLayer = function(e) {
        if (this.lastInvalidationTime = Z(), !e.invalid) {
          var a = e.level,
            t = e.eles,
            n = this.layersByLevel[a];
          fe(n, e), e.elesQueue = [], e.invalid = !0, e.replacement && (e.replacement.invalid = !0);
          for (var r = 0; r < t.length; r++) {
            var i = t[r]._private.rscratch.imgLayerCaches;
            i && (i[a] = null)
          }
        }
      }, no.refineElementTextures = function(e) {
        var a = this;
        a.updateElementsInLayers(e, (function(e, t, n) {
          var r = e.replacement;
          if (r || ((r = e.replacement = a.makeLayer(e.bb, e.level)).replaces = e, r.eles = e.eles), !r.reqs)
            for (var i = 0; i < r.eles.length; i++) a.queueLayer(r, r.eles[i])
        }))
      }, no.enqueueElementRefinement = function(e) {
        this.eleTxrDeqs.merge(e), this.scheduleElementRefinement()
      }, no.queueLayer = function(e, a) {
        var t = this.layersQueue,
          n = e.elesQueue,
          r = n.hasId = n.hasId || {};
        if (!e.replacement) {
          if (a) {
            if (r[a.id()]) return;
            n.push(a), r[a.id()] = !0
          }
          e.reqs ? (e.reqs++, t.updateItem(e)) : (e.reqs = 1, t.push(e))
        }
      }, no.dequeue = function(e) {
        for (var a = this.layersQueue, t = [], n = 0; n < 1 && 0 !== a.size();) {
          var r = a.peek();
          if (r.replacement) a.pop();
          else if (r.replaces && r !== r.replaces.replacement) a.pop();
          else if (r.invalid) a.pop();
          else {
            var i = r.elesQueue.shift();
            i && (this.drawEleInLayer(r, i, r.level, e), n++), 0 === t.length && t.push(!0), 0 === r.elesQueue.length && (a.pop(), r.reqs = 0, r.replaces && this.applyLayerReplacement(r), this.requestRedraw())
          }
        }
        return t
      }, no.applyLayerReplacement = function(e) {
        var a = this.layersByLevel[e.level],
          t = e.replaces,
          n = a.indexOf(t);
        if (!(n < 0 || t.invalid)) {
          a[n] = e;
          for (var r = 0; r < e.eles.length; r++) {
            var i = e.eles[r]._private,
              c = i.imgLayerCaches = i.imgLayerCaches || {};
            c && (c[e.level] = e)
          }
          this.requestRedraw()
        }
      }, no.requestRedraw = r((function() {
        var e = this.renderer;
        e.redrawHint("eles", !0), e.redrawHint("drag", !0), e.redraw()
      }), 100), no.setupDequeueing = Yc({
        deqRedrawThreshold: 50,
        deqCost: .15,
        deqAvgCost: .1,
        deqNoDrawCost: .9,
        deqFastCost: .9,
        deq: function(e, a) {
          return e.dequeue(a)
        },
        onDeqd: se,
        shouldRedraw: ie,
        priority: function(e) {
          return e.renderer.beforeRenderPriorities.lyrTxrDeq
        }
      });
      var co, oo = {};

      function so(e, a) {
        for (var t = 0; t < a.length; t++) {
          var n = a[t];
          e.lineTo(n.x, n.y)
        }
      }

      function lo(e, a, t) {
        for (var n, r = 0; r < a.length; r++) {
          var i = a[r];
          0 === r && (n = i), e.lineTo(i.x, i.y)
        }
        e.quadraticCurveTo(t.x, t.y, n.x, n.y)
      }

      function uo(e, a, t) {
        e.beginPath && e.beginPath();
        for (var n = a, r = 0; r < n.length; r++) {
          var i = n[r];
          e.lineTo(i.x, i.y)
        }
        var c = t,
          o = t[0];
        e.moveTo(o.x, o.y);
        for (r = 1; r < c.length; r++) {
          i = c[r];
          e.lineTo(i.x, i.y)
        }
        e.closePath && e.closePath()
      }

      function ho(e, a, t, n) {
        e.arc(a, t, n, 0, 2 * Math.PI, !1)
      }
      oo.arrowShapeImpl = function(e) {
        return (co || (co = {
          polygon: so,
          "triangle-backcurve": lo,
          "triangle-tee": uo,
          "triangle-cross": uo,
          circle: ho
        }))[e]
      };
      var mo = {
          drawElement: function(e, a, t, n, r, i) {
            a.isNode() ? this.drawNode(e, a, t, n, r, i) : this.drawEdge(e, a, t, n, r, i)
          },
          drawElementOverlay: function(e, a) {
            a.isNode() ? this.drawNodeOverlay(e, a) : this.drawEdgeOverlay(e, a)
          },
          drawCachedElementPortion: function(e, a, t, n, r, i, c, o) {
            var s = this,
              l = t.getBoundingBox(a);
            if (0 !== l.w && 0 !== l.h) {
              var d = t.getElement(a, l, n, r, i);
              if (null != d) {
                var u = o(s, a);
                if (0 === u) return;
                var h, m, g, p, y, f, v = c(s, a),
                  _ = l.x1,
                  S = l.y1,
                  b = l.w,
                  w = l.h;
                if (0 !== v) {
                  var C = t.getRotationPoint(a);
                  g = C.x, p = C.y, e.translate(g, p), e.rotate(v), (y = s.getImgSmoothing(e)) || s.setImgSmoothing(e, !0);
                  var N = t.getRotationOffset(a);
                  h = N.x, m = N.y
                } else h = _, m = S;
                1 !== u && (f = e.globalAlpha, e.globalAlpha = f * u), e.drawImage(d.texture.canvas, d.x, 0, d.width, d.height, h, m, b, w), 1 !== u && (e.globalAlpha = f), 0 !== v && (e.rotate(-v), e.translate(-g, -p), y || s.setImgSmoothing(e, !1))
              } else t.drawElement(e, a)
            }
          }
        },
        go = function() {
          return 0
        },
        po = function(e, a) {
          return e.getTextAngle(a, null)
        },
        yo = function(e, a) {
          return e.getTextAngle(a, "source")
        },
        fo = function(e, a) {
          return e.getTextAngle(a, "target")
        },
        vo = function(e, a) {
          return a.effectiveOpacity()
        },
        _o = function(e, a) {
          return a.pstyle("text-opacity").pfValue * a.effectiveOpacity()
        };
      mo.drawCachedElement = function(e, a, t, n, r, i) {
        var c = this,
          o = c.data,
          s = o.eleTxrCache,
          l = o.lblTxrCache,
          d = o.slbTxrCache,
          u = o.tlbTxrCache,
          h = a.boundingBox(),
          m = !0 === i ? s.reasons.highQuality : null;
        if (0 !== h.w && 0 !== h.h && a.visible() && (!n || ia(h, n))) {
          var g = a.isEdge(),
            p = a.element()._private.rscratch.badLine;
          c.drawCachedElementPortion(e, a, s, t, r, m, go, vo), g && p || c.drawCachedElementPortion(e, a, l, t, r, m, po, _o), g && !p && (c.drawCachedElementPortion(e, a, d, t, r, m, yo, _o), c.drawCachedElementPortion(e, a, u, t, r, m, fo, _o)), c.drawElementOverlay(e, a)
        }
      }, mo.drawElements = function(e, a) {
        for (var t = 0; t < a.length; t++) {
          var n = a[t];
          this.drawElement(e, n)
        }
      }, mo.drawCachedElements = function(e, a, t, n) {
        for (var r = 0; r < a.length; r++) {
          var i = a[r];
          this.drawCachedElement(e, i, t, n)
        }
      }, mo.drawCachedNodes = function(e, a, t, n) {
        for (var r = 0; r < a.length; r++) {
          var i = a[r];
          i.isNode() && this.drawCachedElement(e, i, t, n)
        }
      }, mo.drawLayeredElements = function(e, a, t, n) {
        var r = this.data.lyrTxrCache.getLayers(a, t);
        if (r)
          for (var i = 0; i < r.length; i++) {
            var c = r[i],
              o = c.bb;
            0 !== o.w && 0 !== o.h && e.drawImage(c.canvas, o.x1, o.y1, o.w, o.h)
          } else this.drawCachedElements(e, a, t, n)
      };
      var So = {
          drawEdge: function(e, a, t) {
            var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              i = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              c = this,
              o = a._private.rscratch;
            if ((!i || a.visible()) && !o.badLine && null != o.allpts && !isNaN(o.allpts[0])) {
              var s;
              t && (s = t, e.translate(-s.x1, -s.y1));
              var l = i ? a.pstyle("opacity").value : 1,
                d = a.pstyle("line-style").value,
                u = a.pstyle("width").pfValue,
                h = a.pstyle("line-cap").value,
                m = function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                  e.lineWidth = u, e.lineCap = h, c.eleStrokeStyle(e, a, t), c.drawEdgePath(a, e, o.allpts, d), e.lineCap = "butt"
                },
                g = function() {
                  r && c.drawEdgeOverlay(e, a)
                },
                p = function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                  c.drawArrowheads(e, a, t)
                },
                y = function() {
                  c.drawElementText(e, a, null, n)
                };
              e.lineJoin = "round";
              var f = "yes" === a.pstyle("ghost").value;
              if (f) {
                var v = a.pstyle("ghost-offset-x").pfValue,
                  _ = a.pstyle("ghost-offset-y").pfValue,
                  S = a.pstyle("ghost-opacity").value,
                  b = l * S;
                e.translate(v, _), m(b), p(b), e.translate(-v, -_)
              }
              m(), p(), g(), y(), t && e.translate(s.x1, s.y1)
            }
          },
          drawEdgeOverlay: function(e, a) {
            if (a.visible()) {
              var t = a.pstyle("overlay-opacity").value;
              if (0 !== t) {
                var n = this,
                  r = n.usePaths(),
                  i = a._private.rscratch,
                  c = 2 * a.pstyle("overlay-padding").pfValue,
                  o = a.pstyle("overlay-color").value;
                e.lineWidth = c, "self" !== i.edgeType || r ? e.lineCap = "round" : e.lineCap = "butt", n.colorStrokeStyle(e, o[0], o[1], o[2], t), n.drawEdgePath(a, e, i.allpts, "solid")
              }
            }
          },
          drawEdgePath: function(e, a, t, n) {
            var r, i = e._private.rscratch,
              c = a,
              o = !1,
              s = this.usePaths(),
              l = e.pstyle("line-dash-pattern").pfValue,
              d = e.pstyle("line-dash-offset").pfValue;
            if (s) {
              var u = t.join("$");
              i.pathCacheKey && i.pathCacheKey === u ? (r = a = i.pathCache, o = !0) : (r = a = new Path2D, i.pathCacheKey = u, i.pathCache = r)
            }
            if (c.setLineDash) switch (n) {
              case "dotted":
                c.setLineDash([1, 1]);
                break;
              case "dashed":
                c.setLineDash(l), c.lineDashOffset = d;
                break;
              case "solid":
                c.setLineDash([])
            }
            if (!o && !i.badLine) switch (a.beginPath && a.beginPath(), a.moveTo(t[0], t[1]), i.edgeType) {
              case "bezier":
              case "self":
              case "compound":
              case "multibezier":
                for (var h = 2; h + 3 < t.length; h += 4) a.quadraticCurveTo(t[h], t[h + 1], t[h + 2], t[h + 3]);
                break;
              case "straight":
              case "segments":
              case "haystack":
                for (var m = 2; m + 1 < t.length; m += 2) a.lineTo(t[m], t[m + 1])
            }
            a = c, s ? a.stroke(r) : a.stroke(), a.setLineDash && a.setLineDash([])
          },
          drawArrowheads: function(e, a, t) {
            var n = a._private.rscratch,
              r = "haystack" === n.edgeType;
            r || this.drawArrowhead(e, a, "source", n.arrowStartX, n.arrowStartY, n.srcArrowAngle, t), this.drawArrowhead(e, a, "mid-target", n.midX, n.midY, n.midtgtArrowAngle, t), this.drawArrowhead(e, a, "mid-source", n.midX, n.midY, n.midsrcArrowAngle, t), r || this.drawArrowhead(e, a, "target", n.arrowEndX, n.arrowEndY, n.tgtArrowAngle, t)
          },
          drawArrowhead: function(e, a, t, n, r, i, c) {
            if (!(isNaN(n) || null == n || isNaN(r) || null == r || isNaN(i) || null == i)) {
              var o = a.pstyle(t + "-arrow-shape").value;
              if ("none" !== o) {
                var s = "hollow" === a.pstyle(t + "-arrow-fill").value ? "both" : "filled",
                  l = a.pstyle(t + "-arrow-fill").value,
                  d = a.pstyle("width").pfValue,
                  u = a.pstyle("opacity").value;
                void 0 === c && (c = u);
                var h = e.globalCompositeOperation;
                1 === c && "hollow" !== l || (e.globalCompositeOperation = "destination-out", this.colorFillStyle(e, 255, 255, 255, 1), this.colorStrokeStyle(e, 255, 255, 255, 1), this.drawArrowShape(a, e, s, d, o, n, r, i), e.globalCompositeOperation = h);
                var m = a.pstyle(t + "-arrow-color").value;
                this.colorFillStyle(e, m[0], m[1], m[2], c), this.colorStrokeStyle(e, m[0], m[1], m[2], c), this.drawArrowShape(a, e, l, d, o, n, r, i)
              }
            }
          },
          drawArrowShape: function(e, a, t, n, r, i, c, o) {
            var s, l = this,
              d = this.usePaths() && "triangle-cross" !== r,
              u = !1,
              h = a,
              m = {
                x: i,
                y: c
              },
              g = e.pstyle("arrow-scale").value,
              p = this.getArrowWidth(n, g),
              y = l.arrowShapes[r];
            if (d) {
              var f = l.arrowPathCache = l.arrowPathCache || [],
                v = J(r),
                _ = f[v];
              null != _ ? (s = a = _, u = !0) : (s = a = new Path2D, f[v] = s)
            }
            a.beginPath && a.beginPath(), u || (d ? y.draw(a, 1, 0, {
              x: 0,
              y: 0
            }, 1) : y.draw(a, p, o, m, n)), a.closePath && a.closePath(), a = h, d && (a.translate(i, c), a.rotate(o), a.scale(p, p)), "filled" !== t && "both" !== t || (d ? a.fill(s) : a.fill()), "hollow" !== t && "both" !== t || (a.lineWidth = (y.matchEdgeWidth ? n : 1) / (d ? p : 1), a.lineJoin = "miter", d ? a.stroke(s) : a.stroke()), d && (a.scale(1 / p, 1 / p), a.rotate(-o), a.translate(-i, -c))
          }
        },
        bo = {
          safeDrawImage: function(e, a, t, n, r, i, c, o, s, l) {
            r <= 0 || i <= 0 || s <= 0 || l <= 0 || e.drawImage(a, t, n, r, i, c, o, s, l)
          },
          drawInscribedImage: function(e, a, t, n, r) {
            var i = this,
              c = t.position(),
              o = c.x,
              s = c.y,
              l = t.cy().style(),
              d = l.getIndexedStyle.bind(l),
              u = d(t, "background-fit", "value", n),
              h = d(t, "background-repeat", "value", n),
              m = t.width(),
              g = t.height(),
              p = 2 * t.padding(),
              y = m + ("inner" === d(t, "background-width-relative-to", "value", n) ? 0 : p),
              f = g + ("inner" === d(t, "background-height-relative-to", "value", n) ? 0 : p),
              v = t._private.rscratch,
              _ = "node" === d(t, "background-clip", "value", n),
              S = d(t, "background-image-opacity", "value", n) * r,
              b = a.width || a.cachedW,
              w = a.height || a.cachedH;
            null != b && null != w || (document.body.appendChild(a), b = a.cachedW = a.width || a.offsetWidth, w = a.cachedH = a.height || a.offsetHeight, document.body.removeChild(a));
            var C = b,
              N = w;
            if ("auto" !== d(t, "background-width", "value", n) && (C = "%" === d(t, "background-width", "units", n) ? d(t, "background-width", "pfValue", n) * y : d(t, "background-width", "pfValue", n)), "auto" !== d(t, "background-height", "value", n) && (N = "%" === d(t, "background-height", "units", n) ? d(t, "background-height", "pfValue", n) * f : d(t, "background-height", "pfValue", n)), 0 !== C && 0 !== N) {
              if ("contain" === u) C *= B = Math.min(y / C, f / N), N *= B;
              else if ("cover" === u) {
                var B;
                C *= B = Math.max(y / C, f / N), N *= B
              }
              var D = o - y / 2,
                x = d(t, "background-position-x", "units", n),
                I = d(t, "background-position-x", "pfValue", n);
              D += "%" === x ? (y - C) * I : I;
              var T = d(t, "background-offset-x", "units", n),
                U = d(t, "background-offset-x", "pfValue", n);
              D += "%" === T ? (y - C) * U : U;
              var P = s - f / 2,
                M = d(t, "background-position-y", "units", n),
                k = d(t, "background-position-y", "pfValue", n);
              P += "%" === M ? (f - N) * k : k;
              var A = d(t, "background-offset-y", "units", n),
                R = d(t, "background-offset-y", "pfValue", n);
              P += "%" === A ? (f - N) * R : R, v.pathCache && (D -= o, P -= s, o = 0, s = 0);
              var E = e.globalAlpha;
              if (e.globalAlpha = S, "no-repeat" === h) _ && (e.save(), v.pathCache ? e.clip(v.pathCache) : (i.nodeShapes[i.getNodeShape(t)].draw(e, o, s, y, f), e.clip())), i.safeDrawImage(e, a, 0, 0, b, w, D, P, C, N), _ && e.restore();
              else {
                var G = e.createPattern(a, h);
                e.fillStyle = G, i.nodeShapes[i.getNodeShape(t)].draw(e, o, s, y, f), e.translate(D, P), e.fill(), e.translate(-D, -P)
              }
              e.globalAlpha = E
            }
          }
        },
        wo = {};

      function Co(e, a, t, n, r) {
        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5;
        e.beginPath(), e.moveTo(a + i, t), e.lineTo(a + n - i, t), e.quadraticCurveTo(a + n, t, a + n, t + i), e.lineTo(a + n, t + r - i), e.quadraticCurveTo(a + n, t + r, a + n - i, t + r), e.lineTo(a + i, t + r), e.quadraticCurveTo(a, t + r, a, t + r - i), e.lineTo(a, t + i), e.quadraticCurveTo(a, t, a + i, t), e.closePath(), e.fill()
      }
      wo.eleTextBiggerThanMin = function(e, a) {
        if (!a) {
          var t = e.cy().zoom(),
            n = this.getPixelRatio(),
            r = Math.ceil(He(t * n));
          a = Math.pow(2, r)
        }
        return !(e.pstyle("font-size").pfValue * a < e.pstyle("min-zoomed-font-size").pfValue)
      }, wo.drawElementText = function(e, a, t, n, r) {
        var i = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          c = this;
        if (null == n) {
          if (i && !c.eleTextBiggerThanMin(a)) return
        } else if (!1 === n) return;
        if (a.isNode()) {
          var o = a.pstyle("label");
          if (!o || !o.value) return;
          var s = c.getLabelJustification(a);
          e.textAlign = s, e.textBaseline = "bottom"
        } else {
          var l = a.element()._private.rscratch.badLine,
            d = a.pstyle("label"),
            u = a.pstyle("source-label"),
            h = a.pstyle("target-label");
          if (l || (!d || !d.value) && (!u || !u.value) && (!h || !h.value)) return;
          e.textAlign = "center", e.textBaseline = "bottom"
        }
        var m, g = !t;
        t && (m = t, e.translate(-m.x1, -m.y1)), null == r ? (c.drawText(e, a, null, g, i), a.isEdge() && (c.drawText(e, a, "source", g, i), c.drawText(e, a, "target", g, i))) : c.drawText(e, a, r, g, i), t && e.translate(m.x1, m.y1)
      }, wo.getFontCache = function(e) {
        var a;
        this.fontCaches = this.fontCaches || [];
        for (var t = 0; t < this.fontCaches.length; t++)
          if ((a = this.fontCaches[t]).context === e) return a;
        return a = {
          context: e
        }, this.fontCaches.push(a), a
      }, wo.setupTextStyle = function(e, a) {
        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          n = a.pstyle("font-style").strValue,
          r = a.pstyle("font-size").pfValue + "px",
          i = a.pstyle("font-family").strValue,
          c = a.pstyle("font-weight").strValue,
          o = t ? a.effectiveOpacity() * a.pstyle("text-opacity").value : 1,
          s = a.pstyle("text-outline-opacity").value * o,
          l = a.pstyle("color").value,
          d = a.pstyle("text-outline-color").value;
        e.font = n + " " + c + " " + r + " " + i, e.lineJoin = "round", this.colorFillStyle(e, l[0], l[1], l[2], o), this.colorStrokeStyle(e, d[0], d[1], d[2], s)
      }, wo.getTextAngle = function(e, a) {
        var t = e._private.rscratch,
          n = a ? a + "-" : "",
          r = e.pstyle(n + "text-rotation"),
          i = _e(t, "labelAngle", a);
        return "autorotate" === r.strValue ? e.isEdge() ? i : 0 : "none" === r.strValue ? 0 : r.pfValue
      }, wo.drawText = function(e, a, t) {
        var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          i = a._private,
          c = i.rscratch,
          o = r ? a.effectiveOpacity() : 1;
        if (!r || 0 !== o && 0 !== a.pstyle("text-opacity").value) {
          "main" === t && (t = null);
          var s, l, d = _e(c, "labelX", t),
            u = _e(c, "labelY", t),
            h = this.getLabelText(a, t);
          if (null != h && "" !== h && !isNaN(d) && !isNaN(u)) {
            this.setupTextStyle(e, a, r);
            var m, g = t ? t + "-" : "",
              p = _e(c, "labelWidth", t),
              y = _e(c, "labelHeight", t),
              f = a.pstyle(g + "text-margin-x").pfValue,
              v = a.pstyle(g + "text-margin-y").pfValue,
              _ = a.isEdge(),
              S = a.pstyle("text-halign").value,
              b = a.pstyle("text-valign").value;
            switch (_ && (S = "center", b = "center"), d += f, u += v, 0 !== (m = n ? this.getTextAngle(a, t) : 0) && (s = d, l = u, e.translate(s, l), e.rotate(m), d = 0, u = 0), b) {
              case "top":
                break;
              case "center":
                u += y / 2;
                break;
              case "bottom":
                u += y
            }
            var w = a.pstyle("text-background-opacity").value,
              C = a.pstyle("text-border-opacity").value,
              N = a.pstyle("text-border-width").pfValue,
              B = a.pstyle("text-background-padding").pfValue;
            if (w > 0 || N > 0 && C > 0) {
              var D = d - B;
              switch (S) {
                case "left":
                  D -= p;
                  break;
                case "center":
                  D -= p / 2
              }
              var x = u - y - B,
                I = p + 2 * B,
                T = y + 2 * B;
              if (w > 0) {
                var U = e.fillStyle,
                  P = a.pstyle("text-background-color").value;
                e.fillStyle = "rgba(" + P[0] + "," + P[1] + "," + P[2] + "," + w * o + ")";
                var M = a.pstyle("text-background-shape").strValue;
                0 === M.indexOf("round") ? Co(e, D, x, I, T, 2) : e.fillRect(D, x, I, T), e.fillStyle = U
              }
              if (N > 0 && C > 0) {
                var k = e.strokeStyle,
                  A = e.lineWidth,
                  R = a.pstyle("text-border-color").value,
                  E = a.pstyle("text-border-style").value;
                if (e.strokeStyle = "rgba(" + R[0] + "," + R[1] + "," + R[2] + "," + C * o + ")", e.lineWidth = N, e.setLineDash) switch (E) {
                  case "dotted":
                    e.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    e.setLineDash([4, 2]);
                    break;
                  case "double":
                    e.lineWidth = N / 4, e.setLineDash([]);
                    break;
                  case "solid":
                    e.setLineDash([])
                }
                if (e.strokeRect(D, x, I, T), "double" === E) {
                  var G = N / 2;
                  e.strokeRect(D + G, x + G, I - 2 * G, T - 2 * G)
                }
                e.setLineDash && e.setLineDash([]), e.lineWidth = A, e.strokeStyle = k
              }
            }
            var V = 2 * a.pstyle("text-outline-width").pfValue;
            if (V > 0 && (e.lineWidth = V), "wrap" === a.pstyle("text-wrap").value) {
              var F = _e(c, "labelWrapCachedLines", t),
                L = _e(c, "labelLineHeight", t),
                z = p / 2,
                W = this.getLabelJustification(a);
              switch ("auto" === W || ("left" === S ? "left" === W ? d += -p : "center" === W && (d += -z) : "center" === S ? "left" === W ? d += -z : "right" === W && (d += z) : "right" === S && ("center" === W ? d += z : "right" === W && (d += p))), b) {
                case "top":
                  u -= (F.length - 1) * L;
                  break;
                case "center":
                case "bottom":
                  u -= (F.length - 1) * L
              }
              for (var j = 0; j < F.length; j++) V > 0 && e.strokeText(F[j], d, u), e.fillText(F[j], d, u), u += L
            } else V > 0 && e.strokeText(h, d, u), e.fillText(h, d, u);
            0 !== m && (e.rotate(-m), e.translate(-s, -l))
          }
        }
      };
      var No = {
          drawNode: function(e, a, t) {
            var n, r, i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              c = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              s = this,
              l = a._private,
              d = l.rscratch,
              u = a.position();
            if (w(u.x) && w(u.y) && (!o || a.visible())) {
              var h, m, g = o ? a.effectiveOpacity() : 1,
                p = s.usePaths(),
                y = !1,
                f = a.padding();
              n = a.width() + 2 * f, r = a.height() + 2 * f, t && (m = t, e.translate(-m.x1, -m.y1));
              for (var v = a.pstyle("background-image"), _ = v.value, S = new Array(_.length), b = new Array(_.length), C = 0, N = 0; N < _.length; N++) {
                var B = _[N],
                  D = S[N] = null != B && "none" !== B;
                if (D) {
                  var x = a.cy().style().getIndexedStyle(a, "background-image-crossorigin", "value", N);
                  C++, b[N] = s.getCachedImage(B, x, (function() {
                    l.backgroundTimestamp = Date.now(), a.emitAndNotify("background")
                  }))
                }
              }
              var I = a.pstyle("background-blacken").value,
                T = a.pstyle("border-width").pfValue,
                U = a.pstyle("background-opacity").value * g,
                P = a.pstyle("border-color").value,
                M = a.pstyle("border-style").value,
                k = a.pstyle("border-opacity").value * g;
              e.lineJoin = "miter";
              var A = function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U;
                  s.eleFillStyle(e, a, t)
                },
                R = function() {
                  var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
                  s.colorStrokeStyle(e, P[0], P[1], P[2], a)
                },
                E = a.pstyle("shape").strValue,
                G = a.pstyle("shape-polygon-points").pfValue;
              if (p) {
                e.translate(u.x, u.y);
                var V = s.nodePathCache = s.nodePathCache || [],
                  F = $("polygon" === E ? E + "," + G.join(",") : E, "" + r, "" + n),
                  L = V[F];
                null != L ? (h = L, y = !0, d.pathCache = h) : (h = new Path2D, V[F] = d.pathCache = h)
              }
              var z = function() {
                  if (!y) {
                    var t = u;
                    p && (t = {
                      x: 0,
                      y: 0
                    }), s.nodeShapes[s.getNodeShape(a)].draw(h || e, t.x, t.y, n, r)
                  }
                  p ? e.fill(h) : e.fill()
                },
                W = function() {
                  for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g, n = l.backgrounding, r = 0, i = 0; i < b.length; i++) S[i] && b[i].complete && !b[i].error && (r++, s.drawInscribedImage(e, b[i], a, i, t));
                  l.backgrounding = !(r === C), n !== l.backgrounding && a.updateStyle(!1)
                },
                j = function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
                  s.hasPie(a) && (s.drawPie(e, a, i), t && (p || s.nodeShapes[s.getNodeShape(a)].draw(e, u.x, u.y, n, r)))
                },
                O = function() {
                  var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                    t = (I > 0 ? I : -I) * a,
                    n = I > 0 ? 0 : 255;
                  0 !== I && (s.colorFillStyle(e, n, n, n, t), p ? e.fill(h) : e.fill())
                },
                H = function() {
                  if (T > 0) {
                    if (e.lineWidth = T, e.lineCap = "butt", e.setLineDash) switch (M) {
                      case "dotted":
                        e.setLineDash([1, 1]);
                        break;
                      case "dashed":
                        e.setLineDash([4, 2]);
                        break;
                      case "solid":
                      case "double":
                        e.setLineDash([])
                    }
                    if (p ? e.stroke(h) : e.stroke(), "double" === M) {
                      e.lineWidth = T / 3;
                      var a = e.globalCompositeOperation;
                      e.globalCompositeOperation = "destination-out", p ? e.stroke(h) : e.stroke(), e.globalCompositeOperation = a
                    }
                    e.setLineDash && e.setLineDash([])
                  }
                },
                Q = function() {
                  c && s.drawNodeOverlay(e, a, u, n, r)
                },
                q = function() {
                  s.drawElementText(e, a, null, i)
                },
                Z = "yes" === a.pstyle("ghost").value;
              if (Z) {
                var K = a.pstyle("ghost-offset-x").pfValue,
                  Y = a.pstyle("ghost-offset-y").pfValue,
                  X = a.pstyle("ghost-opacity").value,
                  J = X * g;
                e.translate(K, Y), A(X * U), z(), W(J), j(0 !== I || 0 !== T), O(J), R(X * k), H(), e.translate(-K, -Y)
              }
              A(), z(), W(), j(0 !== I || 0 !== T), O(), R(), H(), p && e.translate(-u.x, -u.y), q(), Q(), t && e.translate(m.x1, m.y1)
            }
          },
          drawNodeOverlay: function(e, a, t, n, r) {
            if (a.visible()) {
              var i = a.pstyle("overlay-padding").pfValue,
                c = a.pstyle("overlay-opacity").value,
                o = a.pstyle("overlay-color").value;
              if (c > 0) {
                if (t = t || a.position(), null == n || null == r) {
                  var s = a.padding();
                  n = a.width() + 2 * s, r = a.height() + 2 * s
                }
                this.colorFillStyle(e, o[0], o[1], o[2], c), this.nodeShapes.roundrectangle.draw(e, t.x, t.y, n + 2 * i, r + 2 * i), e.fill()
              }
            }
          },
          hasPie: function(e) {
            return (e = e[0])._private.hasPie
          },
          drawPie: function(e, a, t, n) {
            a = a[0], n = n || a.position();
            var r = a.cy().style(),
              i = a.pstyle("pie-size"),
              c = n.x,
              o = n.y,
              s = a.width(),
              l = a.height(),
              d = Math.min(s, l) / 2,
              u = 0;
            this.usePaths() && (c = 0, o = 0), "%" === i.units ? d *= i.pfValue : void 0 !== i.pfValue && (d = i.pfValue / 2);
            for (var h = 1; h <= r.pieBackgroundN; h++) {
              var m = a.pstyle("pie-" + h + "-background-size").value,
                g = a.pstyle("pie-" + h + "-background-color").value,
                p = a.pstyle("pie-" + h + "-background-opacity").value * t,
                y = m / 100;
              y + u > 1 && (y = 1 - u);
              var f = 1.5 * Math.PI + 2 * Math.PI * u,
                v = f + 2 * Math.PI * y;
              0 === m || u >= 1 || u + y > 1 || (e.beginPath(), e.moveTo(c, o), e.arc(c, o, d, f, v), e.closePath(), this.colorFillStyle(e, g[0], g[1], g[2], p), e.fill(), u += y)
            }
          }
        },
        Bo = {};
      Bo.getPixelRatio = function() {
        var e = this.data.contexts[0];
        if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
        var a = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / a
      }, Bo.paintCache = function(e) {
        for (var a, t = this.paintCaches = this.paintCaches || [], n = !0, r = 0; r < t.length; r++)
          if ((a = t[r]).context === e) {
            n = !1;
            break
          } return n && (a = {
          context: e
        }, t.push(a)), a
      }, Bo.createGradientStyleFor = function(e, a, t, n, r) {
        var i, c = this.usePaths(),
          o = t.pstyle(a + "-gradient-stop-colors").value,
          s = t.pstyle(a + "-gradient-stop-positions").pfValue;
        if ("radial-gradient" === n)
          if (t.isEdge()) {
            var l = t.sourceEndpoint(),
              d = t.targetEndpoint(),
              u = t.midpoint(),
              h = qe(l, u),
              m = qe(d, u);
            i = e.createRadialGradient(u.x, u.y, 0, u.x, u.y, Math.max(h, m))
          } else {
            var g = c ? {
                x: 0,
                y: 0
              } : t.position(),
              p = t.paddedWidth(),
              y = t.paddedHeight();
            i = e.createRadialGradient(g.x, g.y, 0, g.x, g.y, Math.max(p, y))
          }
        else if (t.isEdge()) {
          var f = t.sourceEndpoint(),
            v = t.targetEndpoint();
          i = e.createLinearGradient(f.x, f.y, v.x, v.y)
        } else {
          var _ = c ? {
              x: 0,
              y: 0
            } : t.position(),
            S = t.paddedWidth() / 2,
            b = t.paddedHeight() / 2;
          switch (t.pstyle("background-gradient-direction").value) {
            case "to-bottom":
              i = e.createLinearGradient(_.x, _.y - b, _.x, _.y + b);
              break;
            case "to-top":
              i = e.createLinearGradient(_.x, _.y + b, _.x, _.y - b);
              break;
            case "to-left":
              i = e.createLinearGradient(_.x + S, _.y, _.x - S, _.y);
              break;
            case "to-right":
              i = e.createLinearGradient(_.x - S, _.y, _.x + S, _.y);
              break;
            case "to-bottom-right":
            case "to-right-bottom":
              i = e.createLinearGradient(_.x - S, _.y - b, _.x + S, _.y + b);
              break;
            case "to-top-right":
            case "to-right-top":
              i = e.createLinearGradient(_.x - S, _.y + b, _.x + S, _.y - b);
              break;
            case "to-bottom-left":
            case "to-left-bottom":
              i = e.createLinearGradient(_.x + S, _.y - b, _.x - S, _.y + b);
              break;
            case "to-top-left":
            case "to-left-top":
              i = e.createLinearGradient(_.x + S, _.y + b, _.x - S, _.y - b)
          }
        }
        if (!i) return null;
        for (var w = s.length === o.length, C = o.length, N = 0; N < C; N++) i.addColorStop(w ? s[N] : N / (C - 1), "rgba(" + o[N][0] + "," + o[N][1] + "," + o[N][2] + "," + r + ")");
        return i
      }, Bo.gradientFillStyle = function(e, a, t, n) {
        var r = this.createGradientStyleFor(e, "background", a, t, n);
        if (!r) return null;
        e.fillStyle = r
      }, Bo.colorFillStyle = function(e, a, t, n, r) {
        e.fillStyle = "rgba(" + a + "," + t + "," + n + "," + r + ")"
      }, Bo.eleFillStyle = function(e, a, t) {
        var n = a.pstyle("background-fill").value;
        if ("linear-gradient" === n || "radial-gradient" === n) this.gradientFillStyle(e, a, n, t);
        else {
          var r = a.pstyle("background-color").value;
          this.colorFillStyle(e, r[0], r[1], r[2], t)
        }
      }, Bo.gradientStrokeStyle = function(e, a, t, n) {
        var r = this.createGradientStyleFor(e, "line", a, t, n);
        if (!r) return null;
        e.strokeStyle = r
      }, Bo.colorStrokeStyle = function(e, a, t, n, r) {
        e.strokeStyle = "rgba(" + a + "," + t + "," + n + "," + r + ")"
      }, Bo.eleStrokeStyle = function(e, a, t) {
        var n = a.pstyle("line-fill").value;
        if ("linear-gradient" === n || "radial-gradient" === n) this.gradientStrokeStyle(e, a, n, t);
        else {
          var r = a.pstyle("line-color").value;
          this.colorStrokeStyle(e, r[0], r[1], r[2], t)
        }
      }, Bo.matchCanvasSize = function(e) {
        var a = this,
          t = a.data,
          n = a.findContainerClientCoords(),
          r = n[2],
          i = n[3],
          c = a.getPixelRatio(),
          o = a.motionBlurPxRatio;
        e !== a.data.bufferCanvases[a.MOTIONBLUR_BUFFER_NODE] && e !== a.data.bufferCanvases[a.MOTIONBLUR_BUFFER_DRAG] || (c = o);
        var s, l = r * c,
          d = i * c;
        if (l !== a.canvasWidth || d !== a.canvasHeight) {
          a.fontCaches = null;
          var u = t.canvasContainer;
          u.style.width = r + "px", u.style.height = i + "px";
          for (var h = 0; h < a.CANVAS_LAYERS; h++)(s = t.canvases[h]).width = l, s.height = d, s.style.width = r + "px", s.style.height = i + "px";
          for (h = 0; h < a.BUFFER_COUNT; h++)(s = t.bufferCanvases[h]).width = l, s.height = d, s.style.width = r + "px", s.style.height = i + "px";
          a.textureMult = 1, c <= 1 && (s = t.bufferCanvases[a.TEXTURE_BUFFER], a.textureMult = 2, s.width = l * a.textureMult, s.height = d * a.textureMult), a.canvasWidth = l, a.canvasHeight = d
        }
      }, Bo.renderTo = function(e, a, t, n) {
        this.render({
          forcedContext: e,
          forcedZoom: a,
          forcedPan: t,
          drawAllLayers: !0,
          forcedPxRatio: n
        })
      }, Bo.render = function(e) {
        var a = (e = e || pe()).forcedContext,
          t = e.drawAllLayers,
          n = e.drawOnlyNodeLayer,
          r = e.forcedZoom,
          i = e.forcedPan,
          c = this,
          o = void 0 === e.forcedPxRatio ? this.getPixelRatio() : e.forcedPxRatio,
          s = c.cy,
          l = c.data,
          d = l.canvasNeedsRedraw,
          u = c.textureOnViewport && !a && (c.pinching || c.hoverData.dragging || c.swipePanning || c.data.wheelZooming),
          h = void 0 !== e.motionBlur ? e.motionBlur : c.motionBlur,
          m = c.motionBlurPxRatio,
          g = s.hasCompoundNodes(),
          p = c.hoverData.draggingEles,
          y = !(!c.hoverData.selecting && !c.touchData.selecting),
          f = h = h && !a && c.motionBlurEnabled && !y;
        a || (c.prevPxRatio !== o && (c.invalidateContainerClientCoordsCache(), c.matchCanvasSize(c.container), c.redrawHint("eles", !0), c.redrawHint("drag", !0)), c.prevPxRatio = o), !a && c.motionBlurTimeout && clearTimeout(c.motionBlurTimeout), h && (null == c.mbFrames && (c.mbFrames = 0), c.mbFrames++, c.mbFrames < 3 && (f = !1), c.mbFrames > c.minMbLowQualFrames && (c.motionBlurPxRatio = c.mbPxRBlurry)), c.clearingMotionBlur && (c.motionBlurPxRatio = 1), c.textureDrawLastFrame && !u && (d[c.NODE] = !0, d[c.SELECT_BOX] = !0);
        var v = s.style(),
          _ = s.zoom(),
          S = void 0 !== r ? r : _,
          b = s.pan(),
          w = {
            x: b.x,
            y: b.y
          },
          C = {
            zoom: _,
            pan: {
              x: b.x,
              y: b.y
            }
          },
          N = c.prevViewport;
        void 0 === N || C.zoom !== N.zoom || C.pan.x !== N.pan.x || C.pan.y !== N.pan.y || p && !g || (c.motionBlurPxRatio = 1), i && (w = i), S *= o, w.x *= o, w.y *= o;
        var B = c.getCachedZSortedEles();

        function D(e, a, t, n, r) {
          var i = e.globalCompositeOperation;
          e.globalCompositeOperation = "destination-out", c.colorFillStyle(e, 255, 255, 255, c.motionBlurTransparency), e.fillRect(a, t, n, r), e.globalCompositeOperation = i
        }

        function x(e, n) {
          var o, s, d, u;
          c.clearingMotionBlur || e !== l.bufferContexts[c.MOTIONBLUR_BUFFER_NODE] && e !== l.bufferContexts[c.MOTIONBLUR_BUFFER_DRAG] ? (o = w, s = S, d = c.canvasWidth, u = c.canvasHeight) : (o = {
            x: b.x * m,
            y: b.y * m
          }, s = _ * m, d = c.canvasWidth * m, u = c.canvasHeight * m), e.setTransform(1, 0, 0, 1, 0, 0), "motionBlur" === n ? D(e, 0, 0, d, u) : a || void 0 !== n && !n || e.clearRect(0, 0, d, u), t || (e.translate(o.x, o.y), e.scale(s, s)), i && e.translate(i.x, i.y), r && e.scale(r, r)
        }
        if (u || (c.textureDrawLastFrame = !1), u) {
          if (c.textureDrawLastFrame = !0, !c.textureCache) {
            c.textureCache = {}, c.textureCache.bb = s.mutableElements().boundingBox(), c.textureCache.texture = c.data.bufferCanvases[c.TEXTURE_BUFFER];
            var I = c.data.bufferContexts[c.TEXTURE_BUFFER];
            I.setTransform(1, 0, 0, 1, 0, 0), I.clearRect(0, 0, c.canvasWidth * c.textureMult, c.canvasHeight * c.textureMult), c.render({
              forcedContext: I,
              drawOnlyNodeLayer: !0,
              forcedPxRatio: o * c.textureMult
            }), (C = c.textureCache.viewport = {
              zoom: s.zoom(),
              pan: s.pan(),
              width: c.canvasWidth,
              height: c.canvasHeight
            }).mpan = {
              x: (0 - C.pan.x) / C.zoom,
              y: (0 - C.pan.y) / C.zoom
            }
          }
          d[c.DRAG] = !1, d[c.NODE] = !1;
          var T = l.contexts[c.NODE],
            U = c.textureCache.texture;
          C = c.textureCache.viewport;
          T.setTransform(1, 0, 0, 1, 0, 0), h ? D(T, 0, 0, C.width, C.height) : T.clearRect(0, 0, C.width, C.height);
          var P = v.core("outside-texture-bg-color").value,
            M = v.core("outside-texture-bg-opacity").value;
          c.colorFillStyle(T, P[0], P[1], P[2], M), T.fillRect(0, 0, C.width, C.height);
          _ = s.zoom();
          x(T, !1), T.clearRect(C.mpan.x, C.mpan.y, C.width / C.zoom / o, C.height / C.zoom / o), T.drawImage(U, C.mpan.x, C.mpan.y, C.width / C.zoom / o, C.height / C.zoom / o)
        } else c.textureOnViewport && !a && (c.textureCache = null);
        var k = s.extent(),
          A = c.pinching || c.hoverData.dragging || c.swipePanning || c.data.wheelZooming || c.hoverData.draggingEles || c.cy.animated(),
          R = c.hideEdgesOnViewport && A,
          E = [];
        if (E[c.NODE] = !d[c.NODE] && h && !c.clearedForMotionBlur[c.NODE] || c.clearingMotionBlur, E[c.NODE] && (c.clearedForMotionBlur[c.NODE] = !0), E[c.DRAG] = !d[c.DRAG] && h && !c.clearedForMotionBlur[c.DRAG] || c.clearingMotionBlur, E[c.DRAG] && (c.clearedForMotionBlur[c.DRAG] = !0), d[c.NODE] || t || n || E[c.NODE]) {
          var G = h && !E[c.NODE] && 1 !== m;
          x(T = a || (G ? c.data.bufferContexts[c.MOTIONBLUR_BUFFER_NODE] : l.contexts[c.NODE]), h && !G ? "motionBlur" : void 0), R ? c.drawCachedNodes(T, B.nondrag, o, k) : c.drawLayeredElements(T, B.nondrag, o, k), c.debug && c.drawDebugPoints(T, B.nondrag), t || h || (d[c.NODE] = !1)
        }
        if (!n && (d[c.DRAG] || t || E[c.DRAG])) {
          G = h && !E[c.DRAG] && 1 !== m;
          x(T = a || (G ? c.data.bufferContexts[c.MOTIONBLUR_BUFFER_DRAG] : l.contexts[c.DRAG]), h && !G ? "motionBlur" : void 0), R ? c.drawCachedNodes(T, B.drag, o, k) : c.drawCachedElements(T, B.drag, o, k), c.debug && c.drawDebugPoints(T, B.drag), t || h || (d[c.DRAG] = !1)
        }
        if (c.showFps || !n && d[c.SELECT_BOX] && !t) {
          if (x(T = a || l.contexts[c.SELECT_BOX]), 1 == c.selection[4] && (c.hoverData.selecting || c.touchData.selecting)) {
            _ = c.cy.zoom();
            var V = v.core("selection-box-border-width").value / _;
            T.lineWidth = V, T.fillStyle = "rgba(" + v.core("selection-box-color").value[0] + "," + v.core("selection-box-color").value[1] + "," + v.core("selection-box-color").value[2] + "," + v.core("selection-box-opacity").value + ")", T.fillRect(c.selection[0], c.selection[1], c.selection[2] - c.selection[0], c.selection[3] - c.selection[1]), V > 0 && (T.strokeStyle = "rgba(" + v.core("selection-box-border-color").value[0] + "," + v.core("selection-box-border-color").value[1] + "," + v.core("selection-box-border-color").value[2] + "," + v.core("selection-box-opacity").value + ")", T.strokeRect(c.selection[0], c.selection[1], c.selection[2] - c.selection[0], c.selection[3] - c.selection[1]))
          }
          if (l.bgActivePosistion && !c.hoverData.selecting) {
            _ = c.cy.zoom();
            var F = l.bgActivePosistion;
            T.fillStyle = "rgba(" + v.core("active-bg-color").value[0] + "," + v.core("active-bg-color").value[1] + "," + v.core("active-bg-color").value[2] + "," + v.core("active-bg-opacity").value + ")", T.beginPath(), T.arc(F.x, F.y, v.core("active-bg-size").pfValue / _, 0, 2 * Math.PI), T.fill()
          }
          var L = c.lastRedrawTime;
          if (c.showFps && L) {
            L = Math.round(L);
            var z = Math.round(1e3 / L);
            T.setTransform(1, 0, 0, 1, 0, 0), T.fillStyle = "rgba(255, 0, 0, 0.75)", T.strokeStyle = "rgba(255, 0, 0, 0.75)", T.lineWidth = 1, T.fillText("1 frame = " + L + " ms = " + z + " fps", 0, 20);
            T.strokeRect(0, 30, 250, 20), T.fillRect(0, 30, 250 * Math.min(z / 60, 1), 20)
          }
          t || (d[c.SELECT_BOX] = !1)
        }
        if (h && 1 !== m) {
          var W = l.contexts[c.NODE],
            j = c.data.bufferCanvases[c.MOTIONBLUR_BUFFER_NODE],
            O = l.contexts[c.DRAG],
            H = c.data.bufferCanvases[c.MOTIONBLUR_BUFFER_DRAG],
            Q = function(e, a, t) {
              e.setTransform(1, 0, 0, 1, 0, 0), t || !f ? e.clearRect(0, 0, c.canvasWidth, c.canvasHeight) : D(e, 0, 0, c.canvasWidth, c.canvasHeight);
              var n = m;
              e.drawImage(a, 0, 0, c.canvasWidth * n, c.canvasHeight * n, 0, 0, c.canvasWidth, c.canvasHeight)
            };
          (d[c.NODE] || E[c.NODE]) && (Q(W, j, E[c.NODE]), d[c.NODE] = !1), (d[c.DRAG] || E[c.DRAG]) && (Q(O, H, E[c.DRAG]), d[c.DRAG] = !1)
        }
        c.prevViewport = C, c.clearingMotionBlur && (c.clearingMotionBlur = !1, c.motionBlurCleared = !0, c.motionBlur = !0), h && (c.motionBlurTimeout = setTimeout((function() {
          c.motionBlurTimeout = null, c.clearedForMotionBlur[c.NODE] = !1, c.clearedForMotionBlur[c.DRAG] = !1, c.motionBlur = !1, c.clearingMotionBlur = !u, c.mbFrames = 0, d[c.NODE] = !0, d[c.DRAG] = !0, c.redraw()
        }), 100)), a || s.emit("render")
      };
      for (var Do = {
          drawPolygonPath: function(e, a, t, n, r, i) {
            var c = n / 2,
              o = r / 2;
            e.beginPath && e.beginPath(), e.moveTo(a + c * i[0], t + o * i[1]);
            for (var s = 1; s < i.length / 2; s++) e.lineTo(a + c * i[2 * s], t + o * i[2 * s + 1]);
            e.closePath()
          },
          drawRoundPolygonPath: function(e, a, t, n, r, i) {
            var c = n / 2,
              o = r / 2,
              s = xa(n, r);
            e.beginPath && e.beginPath();
            for (var l = 0; l < i.length / 4; l++) {
              var d, u = void 0;
              u = 0 === l ? i.length - 2 : 4 * l - 2, d = 4 * l + 2;
              var h = a + c * i[4 * l],
                m = t + o * i[4 * l + 1],
                g = -i[u] * i[d] - i[u + 1] * i[d + 1],
                p = s / Math.tan(Math.acos(g) / 2),
                y = h - p * i[u],
                f = m - p * i[u + 1],
                v = h + p * i[d],
                _ = m + p * i[d + 1];
              0 === l ? e.moveTo(y, f) : e.lineTo(y, f), e.arcTo(h, m, v, _, s)
            }
            e.closePath()
          },
          drawRoundRectanglePath: function(e, a, t, n, r) {
            var i = n / 2,
              c = r / 2,
              o = Da(n, r);
            e.beginPath && e.beginPath(), e.moveTo(a, t - c), e.arcTo(a + i, t - c, a + i, t, o), e.arcTo(a + i, t + c, a, t + c, o), e.arcTo(a - i, t + c, a - i, t, o), e.arcTo(a - i, t - c, a, t - c, o), e.lineTo(a, t - c), e.closePath()
          },
          drawBottomRoundRectanglePath: function(e, a, t, n, r) {
            var i = n / 2,
              c = r / 2,
              o = Da(n, r);
            e.beginPath && e.beginPath(), e.moveTo(a, t - c), e.lineTo(a + i, t - c), e.lineTo(a + i, t), e.arcTo(a + i, t + c, a, t + c, o), e.arcTo(a - i, t + c, a - i, t, o), e.lineTo(a - i, t - c), e.lineTo(a, t - c), e.closePath()
          },
          drawCutRectanglePath: function(e, a, t, n, r) {
            var i = n / 2,
              c = r / 2;
            e.beginPath && e.beginPath(), e.moveTo(a - i + 8, t - c), e.lineTo(a + i - 8, t - c), e.lineTo(a + i, t - c + 8), e.lineTo(a + i, t + c - 8), e.lineTo(a + i - 8, t + c), e.lineTo(a - i + 8, t + c), e.lineTo(a - i, t + c - 8), e.lineTo(a - i, t - c + 8), e.closePath()
          },
          drawBarrelPath: function(e, a, t, n, r) {
            var i = n / 2,
              c = r / 2,
              o = a - i,
              s = a + i,
              l = t - c,
              d = t + c,
              u = Ia(n, r),
              h = u.widthOffset,
              m = u.heightOffset,
              g = u.ctrlPtOffsetPct * h;
            e.beginPath && e.beginPath(), e.moveTo(o, l + m), e.lineTo(o, d - m), e.quadraticCurveTo(o + g, d, o + h, d), e.lineTo(s - h, d), e.quadraticCurveTo(s - g, d, s, d - m), e.lineTo(s, l + m), e.quadraticCurveTo(s - g, l, s - h, l), e.lineTo(o + h, l), e.quadraticCurveTo(o + g, l, o, l + m), e.closePath()
          }
        }, xo = Math.sin(0), Io = Math.cos(0), To = {}, Uo = {}, Po = Math.PI / 40, Mo = 0 * Math.PI; Mo < 2 * Math.PI; Mo += Po) To[Mo] = Math.sin(Mo), Uo[Mo] = Math.cos(Mo);
      Do.drawEllipsePath = function(e, a, t, n, r) {
        if (e.beginPath && e.beginPath(), e.ellipse) e.ellipse(a, t, n / 2, r / 2, 0, 0, 2 * Math.PI);
        else
          for (var i, c, o = n / 2, s = r / 2, l = 0 * Math.PI; l < 2 * Math.PI; l += Po) i = a - o * To[l] * xo + o * Uo[l] * Io, c = t + s * Uo[l] * xo + s * To[l] * Io, 0 === l ? e.moveTo(i, c) : e.lineTo(i, c);
        e.closePath()
      };
      var ko = {};

      function Ao(e) {
        var a = e.indexOf(",");
        return e.substr(a + 1)
      }

      function Ro(e, a, t) {
        var n = function() {
          return a.toDataURL(t, e.quality)
        };
        switch (e.output) {
          case "blob-promise":
            return new Et((function(n, r) {
              try {
                a.toBlob((function(e) {
                  null != e ? n(e) : r(new Error("`canvas.toBlob()` sent a null value in its callback"))
                }), t, e.quality)
              } catch (e) {
                r(e)
              }
            }));
          case "blob":
            return function(e, a) {
              for (var t = atob(e), n = new ArrayBuffer(t.length), r = new Uint8Array(n), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
              return new Blob([n], {
                type: a
              })
            }(Ao(n()), t);
          case "base64":
            return Ao(n());
          case "base64uri":
          default:
            return n()
        }
      }
      ko.createBuffer = function(e, a) {
        var t = document.createElement("canvas");
        return t.width = e, t.height = a, [t, t.getContext("2d")]
      }, ko.bufferCanvasImage = function(e) {
        var a = this.cy,
          t = a.mutableElements().boundingBox(),
          n = this.findContainerClientCoords(),
          r = e.full ? Math.ceil(t.w) : n[2],
          i = e.full ? Math.ceil(t.h) : n[3],
          c = w(e.maxWidth) || w(e.maxHeight),
          o = this.getPixelRatio(),
          s = 1;
        if (void 0 !== e.scale) r *= e.scale, i *= e.scale, s = e.scale;
        else if (c) {
          var l = 1 / 0,
            d = 1 / 0;
          w(e.maxWidth) && (l = s * e.maxWidth / r), w(e.maxHeight) && (d = s * e.maxHeight / i), r *= s = Math.min(l, d), i *= s
        }
        c || (r *= o, i *= o, s *= o);
        var u = document.createElement("canvas");
        u.width = r, u.height = i, u.style.width = r + "px", u.style.height = i + "px";
        var h = u.getContext("2d");
        if (r > 0 && i > 0) {
          h.clearRect(0, 0, r, i), h.globalCompositeOperation = "source-over";
          var m = this.getCachedZSortedEles();
          if (e.full) h.translate(-t.x1 * s, -t.y1 * s), h.scale(s, s), this.drawElements(h, m), h.scale(1 / s, 1 / s), h.translate(t.x1 * s, t.y1 * s);
          else {
            var g = a.pan(),
              p = {
                x: g.x * s,
                y: g.y * s
              };
            s *= a.zoom(), h.translate(p.x, p.y), h.scale(s, s), this.drawElements(h, m), h.scale(1 / s, 1 / s), h.translate(-p.x, -p.y)
          }
          e.bg && (h.globalCompositeOperation = "destination-over", h.fillStyle = e.bg, h.rect(0, 0, r, i), h.fill())
        }
        return u
      }, ko.png = function(e) {
        return Ro(e, this.bufferCanvasImage(e), "image/png")
      }, ko.jpg = function(e) {
        return Ro(e, this.bufferCanvasImage(e), "image/jpeg")
      };
      var Eo = {
          nodeShapeImpl: function(e, a, t, n, r, i, c) {
            switch (e) {
              case "ellipse":
                return this.drawEllipsePath(a, t, n, r, i);
              case "polygon":
                return this.drawPolygonPath(a, t, n, r, i, c);
              case "round-polygon":
                return this.drawRoundPolygonPath(a, t, n, r, i, c);
              case "roundrectangle":
              case "round-rectangle":
                return this.drawRoundRectanglePath(a, t, n, r, i);
              case "cutrectangle":
              case "cut-rectangle":
                return this.drawCutRectanglePath(a, t, n, r, i);
              case "bottomroundrectangle":
              case "bottom-round-rectangle":
                return this.drawBottomRoundRectanglePath(a, t, n, r, i);
              case "barrel":
                return this.drawBarrelPath(a, t, n, r, i)
            }
          }
        },
        Go = Fo,
        Vo = Fo.prototype;

      function Fo(e) {
        var a = this;
        a.data = {
          canvases: new Array(Vo.CANVAS_LAYERS),
          contexts: new Array(Vo.CANVAS_LAYERS),
          canvasNeedsRedraw: new Array(Vo.CANVAS_LAYERS),
          bufferCanvases: new Array(Vo.BUFFER_COUNT),
          bufferContexts: new Array(Vo.CANVAS_LAYERS)
        };
        a.data.canvasContainer = document.createElement("div");
        var t = a.data.canvasContainer.style;
        a.data.canvasContainer.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", t.position = "relative", t.zIndex = "0", t.overflow = "hidden";
        var n = e.cy.container();
        n.appendChild(a.data.canvasContainer), n.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
        var r = {
          "-webkit-user-select": "none",
          "-moz-user-select": "-moz-none",
          "user-select": "none",
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          "outline-style": "none"
        };
        P() && (r["-ms-touch-action"] = "none", r["touch-action"] = "none");
        for (var i = 0; i < Vo.CANVAS_LAYERS; i++) {
          var c = a.data.canvases[i] = document.createElement("canvas");
          a.data.contexts[i] = c.getContext("2d"), Object.keys(r).forEach((function(e) {
            c.style[e] = r[e]
          })), c.style.position = "absolute", c.setAttribute("data-id", "layer" + i), c.style.zIndex = String(Vo.CANVAS_LAYERS - i), a.data.canvasContainer.appendChild(c), a.data.canvasNeedsRedraw[i] = !1
        }
        a.data.topCanvas = a.data.canvases[0], a.data.canvases[Vo.NODE].setAttribute("data-id", "layer" + Vo.NODE + "-node"), a.data.canvases[Vo.SELECT_BOX].setAttribute("data-id", "layer" + Vo.SELECT_BOX + "-selectbox"), a.data.canvases[Vo.DRAG].setAttribute("data-id", "layer" + Vo.DRAG + "-drag");
        for (i = 0; i < Vo.BUFFER_COUNT; i++) a.data.bufferCanvases[i] = document.createElement("canvas"), a.data.bufferContexts[i] = a.data.bufferCanvases[i].getContext("2d"), a.data.bufferCanvases[i].style.position = "absolute", a.data.bufferCanvases[i].setAttribute("data-id", "buffer" + i), a.data.bufferCanvases[i].style.zIndex = String(-i - 1), a.data.bufferCanvases[i].style.visibility = "hidden";
        a.pathsEnabled = !0;
        var o = $e(),
          s = function(e) {
            return {
              x: -e.w / 2,
              y: -e.h / 2
            }
          },
          l = function(e) {
            return e.boundingBox(), e[0]._private.bodyBounds
          },
          d = function(e) {
            return e.boundingBox(), e[0]._private.labelBounds.main || o
          },
          u = function(e) {
            return e.boundingBox(), e[0]._private.labelBounds.source || o
          },
          h = function(e) {
            return e.boundingBox(), e[0]._private.labelBounds.target || o
          },
          m = function(e, a) {
            return a
          },
          g = function(e, a, t) {
            var n = e ? e + "-" : "";
            return {
              x: a.x + t.pstyle(n + "text-margin-x").pfValue,
              y: a.y + t.pstyle(n + "text-margin-y").pfValue
            }
          },
          p = function(e, a, t) {
            var n = e[0]._private.rscratch;
            return {
              x: n[a],
              y: n[t]
            }
          },
          y = a.data.eleTxrCache = new eo(a, {
            getKey: function(e) {
              return e[0]._private.nodeKey
            },
            doesEleInvalidateKey: function(e) {
              var a = e[0]._private;
              return !(a.oldBackgroundTimestamp === a.backgroundTimestamp)
            },
            drawElement: function(e, t, n, r, i) {
              return a.drawElement(e, t, n, !1, !1, i)
            },
            getBoundingBox: l,
            getRotationPoint: function(e) {
              return {
                x: ((a = l(e)).x1 + a.x2) / 2,
                y: (a.y1 + a.y2) / 2
              };
              var a
            },
            getRotationOffset: function(e) {
              return s(l(e))
            },
            allowEdgeTxrCaching: !1,
            allowParentTxrCaching: !1
          }),
          f = a.data.lblTxrCache = new eo(a, {
            getKey: function(e) {
              return e[0]._private.labelStyleKey
            },
            drawElement: function(e, t, n, r, i) {
              return a.drawElementText(e, t, n, r, "main", i)
            },
            getBoundingBox: d,
            getRotationPoint: function(e) {
              return g("", p(e, "labelX", "labelY"), e)
            },
            getRotationOffset: function(e) {
              var a = d(e),
                t = s(d(e));
              if (e.isNode()) {
                switch (e.pstyle("text-halign").value) {
                  case "left":
                    t.x = -a.w;
                    break;
                  case "right":
                    t.x = 0
                }
                switch (e.pstyle("text-valign").value) {
                  case "top":
                    t.y = -a.h;
                    break;
                  case "bottom":
                    t.y = 0
                }
              }
              return t
            },
            isVisible: m
          }),
          v = a.data.slbTxrCache = new eo(a, {
            getKey: function(e) {
              return e[0]._private.sourceLabelStyleKey
            },
            drawElement: function(e, t, n, r, i) {
              return a.drawElementText(e, t, n, r, "source", i)
            },
            getBoundingBox: u,
            getRotationPoint: function(e) {
              return g("source", p(e, "sourceLabelX", "sourceLabelY"), e)
            },
            getRotationOffset: function(e) {
              return s(u(e))
            },
            isVisible: m
          }),
          _ = a.data.tlbTxrCache = new eo(a, {
            getKey: function(e) {
              return e[0]._private.targetLabelStyleKey
            },
            drawElement: function(e, t, n, r, i) {
              return a.drawElementText(e, t, n, r, "target", i)
            },
            getBoundingBox: h,
            getRotationPoint: function(e) {
              return g("target", p(e, "targetLabelX", "targetLabelY"), e)
            },
            getRotationOffset: function(e) {
              return s(h(e))
            },
            isVisible: m
          }),
          S = a.data.lyrTxrCache = new to(a);
        a.onUpdateEleCalcs((function(e, a) {
          y.invalidateElements(a), f.invalidateElements(a), v.invalidateElements(a), _.invalidateElements(a), S.invalidateElements(a);
          for (var t = 0; t < a.length; t++) {
            var n = a[t]._private;
            n.oldBackgroundTimestamp = n.backgroundTimestamp
          }
        }));
        var b = function(e) {
          for (var a = 0; a < e.length; a++) S.enqueueElementRefinement(e[a].ele)
        };
        y.onDequeue(b), f.onDequeue(b), v.onDequeue(b), _.onDequeue(b)
      }
      Vo.CANVAS_LAYERS = 3, Vo.SELECT_BOX = 0, Vo.DRAG = 1, Vo.NODE = 2, Vo.BUFFER_COUNT = 3, Vo.TEXTURE_BUFFER = 0, Vo.MOTIONBLUR_BUFFER_NODE = 1, Vo.MOTIONBLUR_BUFFER_DRAG = 2, Vo.redrawHint = function(e, a) {
        var t = this;
        switch (e) {
          case "eles":
            t.data.canvasNeedsRedraw[Vo.NODE] = a;
            break;
          case "drag":
            t.data.canvasNeedsRedraw[Vo.DRAG] = a;
            break;
          case "select":
            t.data.canvasNeedsRedraw[Vo.SELECT_BOX] = a
        }
      };
      var Lo = "undefined" != typeof Path2D;
      Vo.path2dEnabled = function(e) {
        if (void 0 === e) return this.pathsEnabled;
        this.pathsEnabled = !!e
      }, Vo.usePaths = function() {
        return Lo && this.pathsEnabled
      }, Vo.setImgSmoothing = function(e, a) {
        null != e.imageSmoothingEnabled ? e.imageSmoothingEnabled = a : (e.webkitImageSmoothingEnabled = a, e.mozImageSmoothingEnabled = a, e.msImageSmoothingEnabled = a)
      }, Vo.getImgSmoothing = function(e) {
        return null != e.imageSmoothingEnabled ? e.imageSmoothingEnabled : e.webkitImageSmoothingEnabled || e.mozImageSmoothingEnabled || e.msImageSmoothingEnabled
      }, Vo.makeOffscreenCanvas = function(e, a) {
        var t;
        return "undefined" !== ("undefined" == typeof OffscreenCanvas ? "undefined" : c(OffscreenCanvas)) ? t = new OffscreenCanvas(e, a) : ((t = document.createElement("canvas")).width = e, t.height = a), t
      }, [oo, mo, So, bo, wo, No, Bo, Do, ko, Eo].forEach((function(e) {
        F(Vo, e)
      }));
      var zo = [{
          type: "layout",
          extensions: Cc
        }, {
          type: "renderer",
          extensions: [{
            name: "null",
            impl: Nc
          }, {
            name: "base",
            impl: Zc
          }, {
            name: "canvas",
            impl: Go
          }]
        }],
        Wo = {},
        jo = {};

      function Oo(e, a, t) {
        var n = t,
          r = function(t) {
            le("Can not register `" + a + "` for `" + e + "` since `" + t + "` already exists in the prototype and can not be overridden")
          };
        if ("core" === e) {
          if (Gi.prototype[a]) return r(a);
          Gi.prototype[a] = t
        } else if ("collection" === e) {
          if (ei.prototype[a]) return r(a);
          ei.prototype[a] = t
        } else if ("layout" === e) {
          for (var i = function(e) {
              this.options = e, t.call(this, e), b(this._private) || (this._private = {}), this._private.cy = e.cy, this._private.listeners = [], this.createEmitter()
            }, c = i.prototype = Object.create(t.prototype), o = [], s = 0; s < o.length; s++) {
            var l = o[s];
            c[l] = c[l] || function() {
              return this
            }
          }
          c.start && !c.run ? c.run = function() {
            return this.start(), this
          } : !c.start && c.run && (c.start = function() {
            return this.run(), this
          });
          var d = t.prototype.stop;
          c.stop = function() {
            var e = this.options;
            if (e && e.animate) {
              var a = this.animations;
              if (a)
                for (var t = 0; t < a.length; t++) a[t].stop()
            }
            return d ? d.call(this) : this.emit("layoutstop"), this
          }, c.destroy || (c.destroy = function() {
            return this
          }), c.cy = function() {
            return this._private.cy
          };
          var u = function(e) {
              return e._private.cy
            },
            h = {
              addEventFields: function(e, a) {
                a.layout = e, a.cy = u(e), a.target = e
              },
              bubble: function() {
                return !0
              },
              parent: function(e) {
                return u(e)
              }
            };
          F(c, {
            createEmitter: function() {
              return this._private.emitter = new vr(h, this), this
            },
            emitter: function() {
              return this._private.emitter
            },
            on: function(e, a) {
              return this.emitter().on(e, a), this
            },
            one: function(e, a) {
              return this.emitter().one(e, a), this
            },
            once: function(e, a) {
              return this.emitter().one(e, a), this
            },
            removeListener: function(e, a) {
              return this.emitter().removeListener(e, a), this
            },
            removeAllListeners: function() {
              return this.emitter().removeAllListeners(), this
            },
            emit: function(e, a) {
              return this.emitter().emit(e, a), this
            }
          }), Ft.eventAliasesOn(c), n = i
        } else if ("renderer" === e && "null" !== a && "base" !== a) {
          var m = Ho("renderer", "base"),
            g = m.prototype,
            p = t,
            y = t.prototype,
            f = function() {
              m.apply(this, arguments), p.apply(this, arguments)
            },
            v = f.prototype;
          for (var _ in g) {
            var S = g[_];
            if (null != y[_]) return r(_);
            v[_] = S
          }
          for (var w in y) v[w] = y[w];
          g.clientFunctions.forEach((function(e) {
            v[e] = v[e] || function() {
              le("Renderer does not implement `renderer." + e + "()` on its prototype")
            }
          })), n = f
        }
        return W({
          map: Wo,
          keys: [e, a],
          value: n
        })
      }

      function Ho(e, a) {
        return j({
          map: Wo,
          keys: [e, a]
        })
      }

      function Qo(e, a, t, n, r) {
        return W({
          map: jo,
          keys: [e, a, t, n],
          value: r
        })
      }

      function qo(e, a, t, n) {
        return j({
          map: jo,
          keys: [e, a, t, n]
        })
      }
      var Zo = function() {
        return 2 === arguments.length ? Ho.apply(null, arguments) : 3 === arguments.length ? Oo.apply(null, arguments) : 4 === arguments.length ? qo.apply(null, arguments) : 5 === arguments.length ? Qo.apply(null, arguments) : void le("Invalid extension access syntax")
      };
      Gi.prototype.extension = Zo, zo.forEach((function(e) {
        e.extensions.forEach((function(a) {
          Oo(e.type, a.name, a.impl)
        }))
      }));
      var Ko = function e() {
          if (!(this instanceof e)) return new e;
          this.length = 0
        },
        Yo = Ko.prototype;
      Yo.instanceString = function() {
        return "stylesheet"
      }, Yo.selector = function(e) {
        return this[this.length++] = {
          selector: e,
          properties: []
        }, this
      }, Yo.css = function(e, a) {
        var t = this.length - 1;
        if (v(e)) this[t].properties.push({
          name: e,
          value: a
        });
        else if (b(e))
          for (var n = e, r = Object.keys(n), i = 0; i < r.length; i++) {
            var c = r[i],
              o = n[c];
            if (null != o) {
              var s = Mi.properties[c] || Mi.properties[A(c)];
              if (null != s) {
                var l = s.name,
                  d = o;
                this[t].properties.push({
                  name: l,
                  value: d
                })
              }
            }
          }
        return this
      }, Yo.style = Yo.css, Yo.generateStyle = function(e) {
        var a = new Mi(e);
        return this.appendToStyle(a)
      }, Yo.appendToStyle = function(e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a],
            n = t.selector,
            r = t.properties;
          e.selector(n);
          for (var i = 0; i < r.length; i++) {
            var c = r[i];
            e.css(c.name, c.value)
          }
        }
        return e
      };
      var Xo = function(e) {
        return void 0 === e && (e = {}), b(e) ? new Gi(e) : v(e) ? Zo.apply(Zo, arguments) : void 0
      };
      Xo.use = function(e) {
        var a = Array.prototype.slice.call(arguments, 1);
        return a.unshift(Xo), e.apply(null, a), this
      }, Xo.warnings = function(e) {
        return de(e)
      }, Xo.version = "3.12.1", Xo.stylesheet = Xo.Stylesheet = Ko, e.exports = Xo
    }).call(this, t(127).setImmediate)
  },
  127: function(e, a, t) {
    (function(e) {
      var n = void 0 !== e && e || "undefined" != typeof self && self || window,
        r = Function.prototype.apply;

      function i(e, a) {
        this._id = e, this._clearFn = a
      }
      a.setTimeout = function() {
        return new i(r.call(setTimeout, n, arguments), clearTimeout)
      }, a.setInterval = function() {
        return new i(r.call(setInterval, n, arguments), clearInterval)
      }, a.clearTimeout = a.clearInterval = function(e) {
        e && e.close()
      }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
        this._clearFn.call(n, this._id)
      }, a.enroll = function(e, a) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = a
      }, a.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
      }, a._unrefActive = a.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var a = e._idleTimeout;
        a >= 0 && (e._idleTimeoutId = setTimeout((function() {
          e._onTimeout && e._onTimeout()
        }), a))
      }, t(128), a.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, a.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, t(48))
  },
  128: function(e, a, t) {
    (function(e, a) {
      ! function(e, t) {
        "use strict";
        if (!e.setImmediate) {
          var n, r, i, c, o, s = 1,
            l = {},
            d = !1,
            u = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e);
          h = h && h.setTimeout ? h : e, "[object process]" === {}.toString.call(e.process) ? n = function(e) {
            a.nextTick((function() {
              g(e)
            }))
          } : ! function() {
            if (e.postMessage && !e.importScripts) {
              var a = !0,
                t = e.onmessage;
              return e.onmessage = function() {
                a = !1
              }, e.postMessage("", "*"), e.onmessage = t, a
            }
          }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
            g(e.data)
          }, n = function(e) {
            i.port2.postMessage(e)
          }) : u && "onreadystatechange" in u.createElement("script") ? (r = u.documentElement, n = function(e) {
            var a = u.createElement("script");
            a.onreadystatechange = function() {
              g(e), a.onreadystatechange = null, r.removeChild(a), a = null
            }, r.appendChild(a)
          }) : n = function(e) {
            setTimeout(g, 0, e)
          } : (c = "setImmediate$" + Math.random() + "$", o = function(a) {
            a.source === e && "string" == typeof a.data && 0 === a.data.indexOf(c) && g(+a.data.slice(c.length))
          }, e.addEventListener ? e.addEventListener("message", o, !1) : e.attachEvent("onmessage", o), n = function(a) {
            e.postMessage(c + a, "*")
          }), h.setImmediate = function(e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var a = new Array(arguments.length - 1), t = 0; t < a.length; t++) a[t] = arguments[t + 1];
            var r = {
              callback: e,
              args: a
            };
            return l[s] = r, n(s), s++
          }, h.clearImmediate = m
        }

        function m(e) {
          delete l[e]
        }

        function g(e) {
          if (d) setTimeout(g, 0, e);
          else {
            var a = l[e];
            if (a) {
              d = !0;
              try {
                ! function(e) {
                  var a = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      a();
                      break;
                    case 1:
                      a(n[0]);
                      break;
                    case 2:
                      a(n[0], n[1]);
                      break;
                    case 3:
                      a(n[0], n[1], n[2]);
                      break;
                    default:
                      a.apply(t, n)
                  }
                }(a)
              } finally {
                m(e), d = !1
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, t(48), t(129))
  },
  129: function(e, a) {
    var t, n, r = e.exports = {};

    function i() {
      throw new Error("setTimeout has not been defined")
    }

    function c() {
      throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
      try {
        return t(e, 0)
      } catch (a) {
        try {
          return t.call(null, e, 0)
        } catch (a) {
          return t.call(this, e, 0)
        }
      }
    }! function() {
      try {
        t = "function" == typeof setTimeout ? setTimeout : i
      } catch (e) {
        t = i
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : c
      } catch (e) {
        n = c
      }
    }();
    var s, l = [],
      d = !1,
      u = -1;

    function h() {
      d && s && (d = !1, s.length ? l = s.concat(l) : u = -1, l.length && m())
    }

    function m() {
      if (!d) {
        var e = o(h);
        d = !0;
        for (var a = l.length; a;) {
          for (s = l, l = []; ++u < a;) s && s[u].run();
          u = -1, a = l.length
        }
        s = null, d = !1,
          function(e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === c || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
            try {
              n(e)
            } catch (a) {
              try {
                return n.call(null, e)
              } catch (a) {
                return n.call(this, e)
              }
            }
          }(e)
      }
    }

    function g(e, a) {
      this.fun = e, this.array = a
    }

    function p() {}
    r.nextTick = function(e) {
      var a = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var t = 1; t < arguments.length; t++) a[t - 1] = arguments[t];
      l.push(new g(e, a)), 1 !== l.length || d || o(m)
    }, g.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
      return []
    }, r.binding = function(e) {
      throw new Error("process.binding is not supported")
    }, r.cwd = function() {
      return "/"
    }, r.chdir = function(e) {
      throw new Error("process.chdir is not supported")
    }, r.umask = function() {
      return 0
    }
  },
  130: function(e, a, t) {
    e.exports = t(131)
  },
  131: function(e, a, t) {
    var n, r, i;
    (function() {
      var t, c, o, s, l, d, u, h, m, g, p, y, f, v, _;
      o = Math.floor, g = Math.min, c = function(e, a) {
        return e < a ? -1 : e > a ? 1 : 0
      }, m = function(e, a, t, n, r) {
        var i;
        if (null == t && (t = 0), null == r && (r = c), t < 0) throw new Error("lo must be non-negative");
        for (null == n && (n = e.length); t < n;) r(a, e[i = o((t + n) / 2)]) < 0 ? n = i : t = i + 1;
        return [].splice.apply(e, [t, t - t].concat(a)), a
      }, d = function(e, a, t) {
        return null == t && (t = c), e.push(a), v(e, 0, e.length - 1, t)
      }, l = function(e, a) {
        var t, n;
        return null == a && (a = c), t = e.pop(), e.length ? (n = e[0], e[0] = t, _(e, 0, a)) : n = t, n
      }, h = function(e, a, t) {
        var n;
        return null == t && (t = c), n = e[0], e[0] = a, _(e, 0, t), n
      }, u = function(e, a, t) {
        var n;
        return null == t && (t = c), e.length && t(e[0], a) < 0 && (a = (n = [e[0], a])[0], e[0] = n[1], _(e, 0, t)), a
      }, s = function(e, a) {
        var t, n, r, i, s, l;
        for (null == a && (a = c), s = [], n = 0, r = (i = function() {
            l = [];
            for (var a = 0, t = o(e.length / 2); 0 <= t ? a < t : a > t; 0 <= t ? a++ : a--) l.push(a);
            return l
          }.apply(this).reverse()).length; n < r; n++) t = i[n], s.push(_(e, t, a));
        return s
      }, f = function(e, a, t) {
        var n;
        if (null == t && (t = c), -1 !== (n = e.indexOf(a))) return v(e, 0, n, t), _(e, n, t)
      }, p = function(e, a, t) {
        var n, r, i, o, l;
        if (null == t && (t = c), !(r = e.slice(0, a)).length) return r;
        for (s(r, t), i = 0, o = (l = e.slice(a)).length; i < o; i++) n = l[i], u(r, n, t);
        return r.sort(t).reverse()
      }, y = function(e, a, t) {
        var n, r, i, o, d, u, h, p, y;
        if (null == t && (t = c), 10 * a <= e.length) {
          if (!(i = e.slice(0, a).sort(t)).length) return i;
          for (r = i[i.length - 1], o = 0, u = (h = e.slice(a)).length; o < u; o++) t(n = h[o], r) < 0 && (m(i, n, 0, null, t), i.pop(), r = i[i.length - 1]);
          return i
        }
        for (s(e, t), y = [], d = 0, p = g(a, e.length); 0 <= p ? d < p : d > p; 0 <= p ? ++d : --d) y.push(l(e, t));
        return y
      }, v = function(e, a, t, n) {
        var r, i, o;
        for (null == n && (n = c), r = e[t]; t > a && n(r, i = e[o = t - 1 >> 1]) < 0;) e[t] = i, t = o;
        return e[t] = r
      }, _ = function(e, a, t) {
        var n, r, i, o, s;
        for (null == t && (t = c), r = e.length, s = a, i = e[a], n = 2 * a + 1; n < r;)(o = n + 1) < r && !(t(e[n], e[o]) < 0) && (n = o), e[a] = e[n], n = 2 * (a = n) + 1;
        return e[a] = i, v(e, s, a, t)
      }, t = function() {
        function e(e) {
          this.cmp = null != e ? e : c, this.nodes = []
        }
        return e.push = d, e.pop = l, e.replace = h, e.pushpop = u, e.heapify = s, e.updateItem = f, e.nlargest = p, e.nsmallest = y, e.prototype.push = function(e) {
          return d(this.nodes, e, this.cmp)
        }, e.prototype.pop = function() {
          return l(this.nodes, this.cmp)
        }, e.prototype.peek = function() {
          return this.nodes[0]
        }, e.prototype.contains = function(e) {
          return -1 !== this.nodes.indexOf(e)
        }, e.prototype.replace = function(e) {
          return h(this.nodes, e, this.cmp)
        }, e.prototype.pushpop = function(e) {
          return u(this.nodes, e, this.cmp)
        }, e.prototype.heapify = function() {
          return s(this.nodes, this.cmp)
        }, e.prototype.updateItem = function(e) {
          return f(this.nodes, e, this.cmp)
        }, e.prototype.clear = function() {
          return this.nodes = []
        }, e.prototype.empty = function() {
          return 0 === this.nodes.length
        }, e.prototype.size = function() {
          return this.nodes.length
        }, e.prototype.clone = function() {
          var a;
          return (a = new e).nodes = this.nodes.slice(0), a
        }, e.prototype.toArray = function() {
          return this.nodes.slice(0)
        }, e.prototype.insert = e.prototype.push, e.prototype.top = e.prototype.peek, e.prototype.front = e.prototype.peek, e.prototype.has = e.prototype.contains, e.prototype.copy = e.prototype.clone, e
      }(), r = [], void 0 === (i = "function" == typeof(n = function() {
        return t
      }) ? n.apply(a, r) : n) || (e.exports = i)
    }).call(this)
  },
  319: function(e, a, t) {
    "use strict";
    t.r(a);
    var n, r, i, c, o, s = !1,
      l = {},
      d = [],
      u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

    function h(e, a) {
      for (var t in a) e[t] = a[t];
      return e
    }

    function m(e) {
      var a = e.parentNode;
      a && a.removeChild(e)
    }

    function g(e, a, t) {
      var n, r, i, c, o = arguments;
      if (a = h({}, a), arguments.length > 3)
        for (t = [t], n = 3; n < arguments.length; n++) t.push(o[n]);
      if (null != t && (a.children = t), null != e && null != e.defaultProps)
        for (r in e.defaultProps) void 0 === a[r] && (a[r] = e.defaultProps[r]);
      return c = a.key, null != (i = a.ref) && delete a.ref, null != c && delete a.key, p(e, a, c, i)
    }

    function p(e, a, t, r) {
      var i = {
        type: e,
        props: a,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: null,
        __c: null,
        constructor: void 0
      };
      return n.vnode && n.vnode(i), i
    }

    function y(e) {
      return e.children
    }

    function f(e, a) {
      this.props = e, this.context = a
    }

    function v(e, a) {
      if (null == a) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var t; a < e.__k.length; a++)
        if (null != (t = e.__k[a]) && null != t.__e) return t.__e;
      return "function" == typeof e.type ? v(e) : null
    }

    function _(e) {
      var a, t;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, a = 0; a < e.__k.length; a++)
          if (null != (t = e.__k[a]) && null != t.__e) {
            e.__e = e.__c.base = t.__e;
            break
          } return _(e)
      }
    }

    function S(e) {
      (!e.__d && (e.__d = !0) && 1 === r.push(e) || c !== n.debounceRendering) && ((c = n.debounceRendering) || i)(b)
    }

    function b() {
      var e, a, t, n, i, c, o;
      for (r.sort((function(e, a) {
          return a.__v.__b - e.__v.__b
        })); e = r.pop();) e.__d && (t = void 0, n = void 0, c = (i = (a = e).__v).__e, (o = a.__P) && (t = [], n = x(o, i, h({}, i), a.__n, void 0 !== o.ownerSVGElement, null, t, null == c ? v(i) : c), I(t, i), n != c && _(i)))
    }

    function w(e, a, t, n, r, i, c, o, s) {
      var u, h, g, p, y, f, _, S = t && t.__k || d,
        b = S.length;
      if (o == l && (o = null != i ? i[0] : b ? v(t, 0) : null), u = 0, a.__k = C(a.__k, (function(t) {
          if (null != t) {
            if (t.__ = a, t.__b = a.__b + 1, null === (g = S[u]) || g && t.key == g.key && t.type === g.type) S[u] = void 0;
            else
              for (h = 0; h < b; h++) {
                if ((g = S[h]) && t.key == g.key && t.type === g.type) {
                  S[h] = void 0;
                  break
                }
                g = null
              }
            if (p = x(e, t, g = g || l, n, r, i, c, o, s), (h = t.ref) && g.ref != h && (_ || (_ = []), g.ref && _.push(g.ref, null, t), _.push(h, t.__c || p, t)), null != p) {
              if (null == f && (f = p), null != t.__d) p = t.__d, t.__d = null;
              else if (i == g || p != o || null == p.parentNode) {
                e: if (null == o || o.parentNode !== e) e.appendChild(p);
                  else {
                    for (y = o, h = 0;
                      (y = y.nextSibling) && h < b; h += 2)
                      if (y == p) break e;
                    e.insertBefore(p, o)
                  }
                "option" == a.type && (e.value = "")
              }
              o = p.nextSibling, "function" == typeof a.type && (a.__d = p)
            }
          }
          return u++, t
        })), a.__e = f, null != i && "function" != typeof a.type)
        for (u = i.length; u--;) null != i[u] && m(i[u]);
      for (u = b; u--;) null != S[u] && P(S[u], S[u]);
      if (_)
        for (u = 0; u < _.length; u++) U(_[u], _[++u], _[++u])
    }

    function C(e, a, t) {
      if (null == t && (t = []), null == e || "boolean" == typeof e) a && t.push(a(null));
      else if (Array.isArray(e))
        for (var n = 0; n < e.length; n++) C(e[n], a, t);
      else t.push(a ? a("string" == typeof e || "number" == typeof e ? p(null, e, null, null) : null != e.__e || null != e.__c ? p(e.type, e.props, e.key, null) : e) : e);
      return t
    }

    function N(e, a, t) {
      "-" === a[0] ? e.setProperty(a, t) : e[a] = "number" == typeof t && !1 === u.test(a) ? t + "px" : null == t ? "" : t
    }

    function B(e, a, t, n, r) {
      var i, c, o, s, l;
      if (r ? "className" === a && (a = "class") : "class" === a && (a = "className"), "key" === a || "children" === a);
      else if ("style" === a)
        if (i = e.style, "string" == typeof t) i.cssText = t;
        else {
          if ("string" == typeof n && (i.cssText = "", n = null), n)
            for (c in n) t && c in t || N(i, c, "");
          if (t)
            for (o in t) n && t[o] === n[o] || N(i, o, t[o])
        }
      else "o" === a[0] && "n" === a[1] ? (s = a !== (a = a.replace(/Capture$/, "")), l = a.toLowerCase(), a = (l in e ? l : a).slice(2), t ? (n || e.addEventListener(a, D, s), (e.l || (e.l = {}))[a] = t) : e.removeEventListener(a, D, s)) : "list" !== a && "tagName" !== a && "form" !== a && !r && a in e ? e[a] = null == t ? "" : t : "function" != typeof t && "dangerouslySetInnerHTML" !== a && (a !== (a = a.replace(/^xlink:?/, "")) ? null == t || !1 === t ? e.removeAttributeNS("http://www.w3.org/1999/xlink", a.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", a.toLowerCase(), t) : null == t || !1 === t ? e.removeAttribute(a) : e.setAttribute(a, t))
    }

    function D(e) {
      this.l[e.type](n.event ? n.event(e) : e)
    }

    function x(e, a, t, r, i, c, o, s, l) {
      var d, u, m, g, p, v, _, S, b, N, B = a.type;
      if (void 0 !== a.constructor) return null;
      (d = n.__b) && d(a);
      try {
        e: if ("function" == typeof B) {
          if (S = a.props, b = (d = B.contextType) && r[d.__c], N = d ? b ? b.props.value : d.__ : r, t.__c ? _ = (u = a.__c = t.__c).__ = u.__E : ("prototype" in B && B.prototype.render ? a.__c = u = new B(S, N) : (a.__c = u = new f(S, N), u.constructor = B, u.render = M), b && b.sub(u), u.props = S, u.state || (u.state = {}), u.context = N, u.__n = r, m = u.__d = !0, u.__h = []), null == u.__s && (u.__s = u.state), null != B.getDerivedStateFromProps && (u.__s == u.state && (u.__s = h({}, u.__s)), h(u.__s, B.getDerivedStateFromProps(S, u.__s))), g = u.props, p = u.state, m) null == B.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), null != u.componentDidMount && u.__h.push(u.componentDidMount);
          else {
            if (null == B.getDerivedStateFromProps && null == u.__e && null != u.componentWillReceiveProps && u.componentWillReceiveProps(S, N), !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(S, u.__s, N)) {
              for (u.props = S, u.state = u.__s, u.__d = !1, u.__v = a, a.__e = t.__e, a.__k = t.__k, u.__h.length && o.push(u), d = 0; d < a.__k.length; d++) a.__k[d] && (a.__k[d].__ = a);
              break e
            }
            null != u.componentWillUpdate && u.componentWillUpdate(S, u.__s, N), null != u.componentDidUpdate && u.__h.push((function() {
              u.componentDidUpdate(g, p, v)
            }))
          }
          u.context = N, u.props = S, u.state = u.__s, (d = n.__r) && d(a), u.__d = !1, u.__v = a, u.__P = e, d = u.render(u.props, u.state, u.context), a.__k = C(null != d && d.type == y && null == d.key ? d.props.children : d), null != u.getChildContext && (r = h(h({}, r), u.getChildContext())), m || null == u.getSnapshotBeforeUpdate || (v = u.getSnapshotBeforeUpdate(g, p)), w(e, a, t, r, i, c, o, s, l), u.base = a.__e, u.__h.length && o.push(u), _ && (u.__E = u.__ = null), u.__e = null
        } else a.__e = T(t.__e, a, t, r, i, c, o, l);
        (d = n.diffed) && d(a)
      }
      catch (e) {
        n.__e(e, a, t)
      }
      return a.__e
    }

    function I(e, a) {
      n.__c && n.__c(a, e), e.some((function(a) {
        try {
          e = a.__h, a.__h = [], e.some((function(e) {
            e.call(a)
          }))
        } catch (e) {
          n.__e(e, a.__v)
        }
      }))
    }

    function T(e, a, t, n, r, i, c, o) {
      var s, u, h, m, g, p = t.props,
        y = a.props;
      if (r = "svg" === a.type || r, null == e && null != i)
        for (s = 0; s < i.length; s++)
          if (null != (u = i[s]) && (null === a.type ? 3 === u.nodeType : u.localName === a.type)) {
            e = u, i[s] = null;
            break
          } if (null == e) {
        if (null === a.type) return document.createTextNode(y);
        e = r ? document.createElementNS("http://www.w3.org/2000/svg", a.type) : document.createElement(a.type), i = null
      }
      if (null === a.type) null != i && (i[i.indexOf(e)] = null), p !== y && (e.data = y);
      else if (a !== t) {
        if (null != i && (i = d.slice.call(e.childNodes)), h = (p = t.props || l).dangerouslySetInnerHTML, m = y.dangerouslySetInnerHTML, !o) {
          if (p === l)
            for (p = {}, g = 0; g < e.attributes.length; g++) p[e.attributes[g].name] = e.attributes[g].value;
          (m || h) && (m && h && m.__html == h.__html || (e.innerHTML = m && m.__html || ""))
        }(function(e, a, t, n, r) {
          var i;
          for (i in t) i in a || B(e, i, null, t[i], n);
          for (i in a) r && "function" != typeof a[i] || "value" === i || "checked" === i || t[i] === a[i] || B(e, i, a[i], t[i], n)
        })(e, y, p, r, o), a.__k = a.props.children, m || w(e, a, t, n, "foreignObject" !== a.type && r, i, c, l, o), o || ("value" in y && void 0 !== y.value && y.value !== e.value && (e.value = null == y.value ? "" : y.value), "checked" in y && void 0 !== y.checked && y.checked !== e.checked && (e.checked = y.checked))
      }
      return e
    }

    function U(e, a, t) {
      try {
        "function" == typeof e ? e(a) : e.current = a
      } catch (e) {
        n.__e(e, t)
      }
    }

    function P(e, a, t) {
      var r, i, c;
      if (n.unmount && n.unmount(e), (r = e.ref) && U(r, null, a), t || "function" == typeof e.type || (t = null != (i = e.__e)), e.__e = e.__d = null, null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
          r.componentWillUnmount()
        } catch (e) {
          n.__e(e, a)
        }
        r.base = r.__P = null
      }
      if (r = e.__k)
        for (c = 0; c < r.length; c++) r[c] && P(r[c], a, t);
      null != i && m(i)
    }

    function M(e, a, t) {
      return this.constructor(e, t)
    }

    function k(e, a, t) {
      var r, i, c;
      n.__ && n.__(e, a), i = (r = t === o) ? null : t && t.__k || a.__k, e = g(y, null, [e]), c = [], x(a, (r ? a : t || a).__k = e, i || l, l, void 0 !== a.ownerSVGElement, t && !r ? [t] : i ? null : d.slice.call(a.childNodes), c, t || l, r), I(c, e)
    }
    n = {
      __e: function(e, a) {
        for (var t; a = a.__;)
          if ((t = a.__c) && !t.__) try {
            if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(e));
            else {
              if (null == t.componentDidCatch) continue;
              t.componentDidCatch(e)
            }
            return S(t.__E = t)
          } catch (a) {
            e = a
          }
        throw e
      }
    }, f.prototype.setState = function(e, a) {
      var t;
      t = this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(t, this.props)), e && h(t, e), null != e && this.__v && (this.__e = !1, a && this.__h.push(a), S(this))
    }, f.prototype.forceUpdate = function(e) {
      this.__v && (this.__e = !0, e && this.__h.push(e), S(this))
    }, f.prototype.render = y, r = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = l;
    var A = t(124),
      R = t.n(A),
      E = t(125),
      G = t.n(E);

    function V(e) {
      return function(e) {
        if (Array.isArray(e)) {
          for (var a = 0, t = new Array(e.length); a < e.length; a++) t[a] = e[a];
          return t
        }
      }(e) || function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function F(e, a) {
      for (var t = 0; t < a.length; t++) {
        var n = a[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    var L = function(e) {
        return Object.assign({}, e.data("orgPos"))
      },
      z = function() {
        function e(a) {
          var t = a.cy;
          ! function(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.cy = t, this.bus = new R.a, this.menu = !1, this.nodes = t.nodes(), this.searchMatchNodes = t.collection()
        }
        var a, t, n;
        return a = e, (t = [{
          key: "isMenuOpen",
          value: function() {
            return this.menu
          }
        }, {
          key: "openMenu",
          value: function() {
            this.menu = !0, this.bus.emit("openMenu"), this.bus.emit("toggleMenu", !0)
          }
        }, {
          key: "closeMenu",
          value: function() {
            this.menu = !1, this.bus.emit("closeMenu"), this.bus.emit("toggleMenu", !1)
          }
        }, {
          key: "toggleMenu",
          value: function() {
            this.isMenuOpen() ? this.closeMenu() : this.openMenu()
          }
        }, {
          key: "isInfoShown",
          value: function() {
            return null != this.infoNode
          }
        }, {
          key: "showInfo",
          value: function(e) {
            this.infoNode = e, this.bus.emit("showInfo", e)
          }
        }, {
          key: "hideInfo",
          value: function() {
            this.bus.emit("hideInfo", this.infoNode), this.infoNode = null
          }
        }, {
          key: "hasHighlight",
          value: function() {
            return null != this.lastHighlighted
          }
        }, {
          key: "highlight",
          value: function(e) {
            var a = this,
              t = this.cy;
            if (this.highlightInProgress) return Promise.resolve();
            this.highlightInProgress = !0;
            var n = t.elements(),
              r = this.lastHighlighted = e.closedNeighborhood(),
              i = this.lastUnhighlighted = n.not(r);
            return this.bus.emit("highlight", e), Promise.resolve().then((function() {
              t.batch((function() {
                n.removeClass("faded highlighted hidden"), r.addClass("highlighted"), i.addClass("hidden"), i.positions(L)
              }));
              var e = r.layout({
                name: "preset",
                positions: L,
                fit: !0,
                animate: !0,
                animationDuration: 500,
                animationEasing: "ease",
                padding: 10
              });
              return e.run(), e.promiseOn("layoutstop")
            })).then((function() {
              return e = 500, new Promise((function(a) {
                return setTimeout(a, e)
              }));
              var e
            })).then((function() {
              var a = L(e),
                t = r.layout({
                  name: "concentric",
                  fit: !0,
                  animate: !0,
                  animationDuration: 500,
                  animationEasing: "ease",
                  boundingBox: {
                    x1: a.x - 1,
                    x2: a.x + 1,
                    y1: a.y - 1,
                    y2: a.y + 1
                  },
                  avoidOverlap: !0,
                  concentric: function(a) {
                    return a.same(e) ? 2 : 1
                  },
                  levelWidth: function() {
                    return 1
                  },
                  padding: 10
                }),
                n = t.promiseOn("layoutstop");
              return t.run(), n
            })).then((function() {
              t.batch((function() {
                i.removeClass("hidden").addClass("faded")
              }))
            })).then((function() {
              a.highlightInProgress = !1, a.bus.emit("highlightend", e)
            }))
          }
        }, {
          key: "unhighlight",
          value: function() {
            if (!this.hasHighlight()) return Promise.resolve();
            var e = this.cy,
              a = e.elements(),
              t = e.nodes();
            e.stop(), t.stop();
            var n = this.lastHighlighted,
              r = this.lastUnhighlighted;
            return this.lastHighlighted = this.lastUnhighlighted = null, this.bus.emit("unhighlight"), Promise.resolve().then((function() {
              return r.addClass("hidden"), Promise.resolve()
            })).then((function() {
              return e.batch((function() {
                  r.nodes().positions(L)
                })),
                function(e) {
                  return Promise.all(e.nodes().map((function(e) {
                    return e.animation({
                      position: L(e),
                      duration: 500,
                      easing: "ease"
                    }).play().promise()
                  })))
                }(n.nodes())
            })).then((function() {
              return e.batch((function() {
                a.removeClass("hidden").removeClass("faded").removeClass("highlighted")
              })), Promise.resolve()
            }))
          }
        }, {
          key: "updateSearch",
          value: function(e) {
            var a = this,
              t = function(e) {
                return e.toLowerCase()
              },
              n = function(e) {
                return e.split(/\s+/)
              },
              r = n(t(e)),
              i = function(e, a) {
                a && e.push.apply(e, V(n(t(a))))
              },
              c = function(e) {
                var a = e.data(),
                  t = [];
                i(t, a.name), i(t, a.Synonym), i(t, a.NodeTypeFormatted), i(t, a.Latin), i(t, a.Type), i(t, a.Ecode), e.data("words", t)
              },
              o = function(e, a) {
                return 0 === a.indexOf(e) ? 1 - Math.abs(a.length - e.length) / Math.max(a.length, e.length) : 0
              },
              s = G()((function(e) {
                return function(e, a) {
                  for (var t = e.data("words"), n = 0, r = 0; r < t.length; r++)
                    for (var i = t[r], c = 0; c < a.length; c++) {
                      var s = a[c],
                        l = o(s, i);
                      l > 0 && (n += l)
                    }
                  return n
                }(e, r)
              }), (function(e) {
                return e.id()
              }));
            return this.cachedNodeWords || (this.cy.batch((function() {
              a.nodes.forEach(c)
            })), this.cachedNodeWords = !0), this.searchMatchNodes = this.nodes.filter((function(e) {
              return s(e) > .25
            })).sort((function(e, a) {
              return s(a) - s(e)
            })), this.bus.emit("updateSearch", this.searchMatchNodes), this.searchMatchNodes
          }
        }, {
          key: "getSearchMatchNodes",
          value: function() {
            return this.searchMatchNodes
          }
        }]) && F(a.prototype, t), n && F(a, n), e
      }(),
      W = t(126),
      j = t.n(W),
      O = '\ncore {\n\tactive-bg-color: #fff;\n\tactive-bg-opacity: 0.333;\n}\n\nedge {\n\tcurve-style: bezier;\n\ttarget-arrow-shape: vee;\n\tsource-arrow-shape: vee;\n\tcolor: #000;\n\thaystack-radius: 0;\n\tsource-text-offset: 5;\n\ttarget-text-offset: 5;\n\tfont-size: 3;\n\topacity: 0.7;\n\twidth: 1;\n\tz-index: 0;\n\toverlay-opacity: 0;\n  events: no;\n}\n\nnode {\n\twidth: 40;\n\theight: 34.641;\n\tfont-size: 14;\n\tfont-weight: bold;\n\tmin-zoomed-font-size: 3;\n\tlabel: data(name);\n\ttext-wrap: wrap;\n\ttext-valign: center;\n\ttext-halign: center;\n\tshape:hexagon;\n\ttext-events: yes;\n\tcolor: #fff;\n\ttext-outline-width: 1;\n\ttext-outline-color: #000;\n\ttext-outline-opacity: 1;\n\toverlay-color: #fff;\n}\n\nnode[Type = "过渡金属"] {\n\tbackground-color: #708090;\n\ttext-outline-color: #708090;\n}\n\nnode[Type = "非金属"] {\n\tbackground-color: #4169e1;\n\ttext-outline-color: #4169e1;\n}\n\nnode[Type = "稀有气体"] {\n\tbackground-color: #6495ed;\n\ttext-outline-color: #6495ed;\n}\n\nnode[Type = "碱金属"] {\n\tbackground-color: #9370db;\n\ttext-outline-color: #9370db;\n}\n\nnode[Type = "碱土金属"] {\n\tbackground-color: #40e0d0;\n\ttext-outline-color: #40e0d0;\n}\n\nnode[Type = "类金属"] {\n\tbackground-color: #00ced1;\n\ttext-outline-color: #00ced1;\n}\n\nnode[Type = "卤素"] {\n\tbackground-color: #6a5acd;\n\ttext-outline-color: #6a5acd;\n}\n\nnode[Type = "贫金属"] {\n\tbackground-color: #007ba7;\n\ttext-outline-color: #007ba7;\n}\n\nnode[Type = "镧系元素"] {\n\tbackground-color: #8b008b;\n\ttext-outline-color: #8b008b;\n}\n\nnode[Type = "锕系元素"] {\n\tbackground-color: #1e90ff;\n\ttext-outline-color: #1e90ff;\n}\n\nedge[kind = "亲"] {\n\tline-color: #add8e6;\n\ttarget-arrow-color: #add8e6;\n\tsource-arrow-color: #add8e6;\n}\n\nedge[kind = "爱"] {\n\tline-color: #ffc0cb;\n\ttarget-arrow-color: #ffc0cb;\n\tsource-arrow-color: #ffc0cb;\n}\n\nedge[kind = "友"] {\n\tline-color: #f0e68c;\n\ttarget-arrow-color: #f0e68c;\n\tsource-arrow-color: #f0e68c;\n}\n\nedge[kind = "恨"] {\n\tline-color: #c0c0c0;\n\ttarget-arrow-color: #c0c0c0;\n\tsource-arrow-color: #c0c0c0;\n}\n\nedge[side = "1"] {\n\tsource-arrow-shape: none;\n}\n\nnode.highlighted {\n\tmin-zoomed-font-size: 0;\n  z-index: 10;\n}\n\nedge.highlighted {\n\topacity: 0.95;\n\twidth: 1;\n\tcontent: data(ship);\n\tsource-label: data(tos);\n\ttarget-label: data(tot);\n\tz-index: 999;\n}\n\n.faded {\n  events: no;\n}\n\nnode.faded {\n  opacity: 0.08;\n}\n\nedge.faded {\n  opacity: 0.06;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n',
      H = {
        nodes: [
{data: {id: "1",name: "H 氢",NodeType: "1族",Type: "非金属",Latin: "Hydrogenium",Ecode: "001",Link:"1-第一周期/001-H"},position: {x: 0,y: 0}},
{data: {id: "2",name: "He 氦",NodeType: "18族",Type: "稀有气体",Latin: "Helium",Ecode: "002",Link:"1-第一周期/002-He"},position: {x: 1020,y: 0}},
{data: {id: "3",name: "Li 锂",NodeType: "1族",Type: "碱金属",Latin: "Lithium",Ecode: "003",Link:"2-第二周期/003-Li"},position: {x: 0,y: 69.282}},
{data: {id: "4",name: "Be 铍",NodeType: "2族",Type: "碱土金属",Latin: "Beryllium",Ecode: "004",Link:"2-第二周期/004-Be"},position: {x: 60,y: 69.282}},
{data: {id: "5",name: "B 硼",NodeType: "13族",Type: "类金属",Latin: "Borum",Ecode: "005",Link:"2-第二周期/005-B"},position: {x: 720,y: 69.282}},
{data: {id: "6",name: "C 碳",NodeType: "14族",Type: "非金属",Latin: "Carboneum",Ecode: "006",Link:"2-第二周期/006-C"},position: {x: 780,y: 69.282}},
{data: {id: "7",name: "N 氮",NodeType: "15族",Type: "非金属",Latin: "Nitrogenium",Ecode: "007",Link:"2-第二周期/007-N"},position: {x: 840,y: 69.282}},
{data: {id: "8",name: "O 氧",NodeType: "16族",Type: "非金属",Latin: "Oxygenium",Ecode: "008",Link:"2-第二周期/008-O"},position: {x: 900,y: 69.282}},
{data: {id: "9",name: "F 氟",NodeType: "17族",Type: "卤素",Latin: "Fluorum",Ecode: "009",Link:"2-第二周期/009-F"},position: {x: 960,y: 69.282}},
{data: {id: "10",name: "Ne 氖",NodeType: "18族",Type: "稀有气体",Latin: "Neon",Ecode: "010",Link:"2-第二周期/010-Ne"},position: {x: 1020,y: 69.282}},
{data: {id: "11",name: "Na 钠",NodeType: "1族",Type: "碱金属",Latin: "Natrium",Ecode: "011",Link:"3-第三周期/011-Na"},position: {x: 0,y: 138.564}},
{data: {id: "12",name: "Mg 镁",NodeType: "2族",Type: "碱土金属",Latin: "Magnesium",Ecode: "012",Link:"3-第三周期/012-Mg"},position: {x: 60,y: 138.564}},
{data: {id: "13",name: "Al 铝",NodeType: "13族",Type: "贫金属",Latin: "Aluminium",Ecode: "013",Link:"3-第三周期/013-Al"},position: {x: 720,y: 138.564}},
{data: {id: "14",name: "Si 硅",NodeType: "14族",Type: "类金属",Latin: "Silicium",Ecode: "014",Link:"3-第三周期/014-Si"},position: {x: 780,y: 138.564}},
{data: {id: "15",name: "P 磷",NodeType: "15族",Type: "非金属",Latin: "Phosphorus",Ecode: "015",Link:"3-第三周期/015-P"},position: {x: 840,y: 138.564}},
{data: {id: "16",name: "S 硫",NodeType: "16族",Type: "非金属",Latin: "Sulfur",Ecode: "016",Link:"3-第三周期/016-S"},position: {x: 900,y: 138.564}},
{data: {id: "17",name: "Cl 氯",NodeType: "17族",Type: "卤素",Latin: "Chlorum",Ecode: "017",Link:"3-第三周期/017-Cl"},position: {x: 960,y: 138.564}},
{data: {id: "18",name: "Ar 氩",NodeType: "18族",Type: "稀有气体",Latin: "Argon",Ecode: "018",Link:"3-第三周期/018-Ar"},position: {x: 1020,y: 138.564}},
{data: {id: "19",name: "K 钾",NodeType: "1族",Type: "碱金属",Latin: "Kalium",Ecode: "019",Link:"4-第四周期/019-K"},position: {x: 0,y: 207.846}},
{data: {id: "20",name: "Ca 钙",NodeType: "2族",Type: "碱土金属",Latin: "Calcium",Ecode: "020",Link:"4-第四周期/020-Ca"},position: {x: 60,y: 207.846}},
{data: {id: "21",name: "Sc 钪",NodeType: "3族",Type: "过渡金属",Latin: "Scandium",Ecode: "021",Link:"4-第四周期/021-Sc"},position: {x: 120,y: 207.846}},
{data: {id: "22",name: "Ti 钛",NodeType: "4族",Type: "过渡金属",Latin: "Titanium",Ecode: "022",Link:"4-第四周期/022-Ti"},position: {x: 180,y: 207.846}},
{data: {id: "23",name: "V 钒",NodeType: "5族",Type: "过渡金属",Latin: "Vanadium",Ecode: "023",Link:"4-第四周期/023-V"},position: {x: 240,y: 207.846}},
{data: {id: "24",name: "Cr 铬",NodeType: "6族",Type: "过渡金属",Latin: "Chromium",Ecode: "024",Link:"4-第四周期/024-Cr"},position: {x: 300,y: 207.846}},
{data: {id: "25",name: "Mn 锰",NodeType: "7族",Type: "过渡金属",Latin: "Manganum",Ecode: "025",Link:"4-第四周期/025-Mn"},position: {x: 360,y: 207.846}},
{data: {id: "26",name: "Fe 铁",NodeType: "8族",Type: "过渡金属",Latin: "Ferrum",Ecode: "026",Link:"4-第四周期/026-Fe"},position: {x: 420,y: 207.846}},
{data: {id: "27",name: "Co 钴",NodeType: "9族",Type: "过渡金属",Latin: "Cobaltum",Ecode: "027",Link:"4-第四周期/027-Co"},position: {x: 480,y: 207.846}},
{data: {id: "28",name: "Ni 镍",NodeType: "10族",Type: "过渡金属",Latin: "Niccolum",Ecode: "028",Link:"4-第四周期/028-Ni"},position: {x: 540,y: 207.846}},
{data: {id: "29",name: "Cu 铜",NodeType: "11族",Type: "过渡金属",Latin: "Cuprum",Ecode: "029",Link:"4-第四周期/029-Cu"},position: {x: 600,y: 207.846}},
{data: {id: "30",name: "Zn 锌",NodeType: "12族",Type: "过渡金属",Latin: "Zincum",Ecode: "030",Link:"4-第四周期/030-Zn"},position: {x: 660,y: 207.846}},
{data: {id: "31",name: "Ga 镓",NodeType: "13族",Type: "贫金属",Latin: "Gallium",Ecode: "031",Link:"4-第四周期/031-Ga"},position: {x: 720,y: 207.846}},
{data: {id: "32",name: "Ge 锗",NodeType: "14族",Type: "类金属",Latin: "Germanium",Ecode: "032",Link:"4-第四周期/032-Ge"},position: {x: 780,y: 207.846}},
{data: {id: "33",name: "As 砷",NodeType: "15族",Type: "类金属",Latin: "Arsenicum",Ecode: "033",Link:"4-第四周期/033-As"},position: {x: 840,y: 207.846}},
{data: {id: "34",name: "Se 硒",NodeType: "16族",Type: "非金属",Latin: "Selenium",Ecode: "034",Link:"4-第四周期/034-Se"},position: {x: 900,y: 207.846}},
{data: {id: "35",name: "Br 溴",NodeType: "17族",Type: "卤素",Latin: "Bromum",Ecode: "035",Link:"4-第四周期/035-Br"},position: {x: 960,y: 207.846}},
{data: {id: "36",name: "Kr 氪",NodeType: "18族",Type: "稀有气体",Latin: "Krypton",Ecode: "036",Link:"4-第四周期/036-Kr"},position: {x: 1020,y: 207.846}},
{data: {id: "37",name: "Rb 铷",NodeType: "1族",Type: "碱金属",Latin: "Rubidium",Ecode: "037",Link:"5-第五周期/037-Rb"},position: {x: 0,y: 277.128}},
{data: {id: "38",name: "Sr 锶",NodeType: "2族",Type: "碱土金属",Latin: "Strontium",Ecode: "038",Link:"5-第五周期/038-Sr"},position: {x: 60,y: 277.128}},
{data: {id: "39",name: "Y 钇",NodeType: "3族",Type: "过渡金属",Latin: "Yttrium",Ecode: "039",Link:"5-第五周期/039-Y"},position: {x: 120,y: 277.128}},
{data: {id: "40",name: "Zr 锆",NodeType: "4族",Type: "过渡金属",Latin: "Zirconium",Ecode: "040",Link:"5-第五周期/040-Zr"},position: {x: 180,y: 277.128}},
{data: {id: "41",name: "Nb 铌",NodeType: "5族",Type: "过渡金属",Latin: "Niobium",Ecode: "041",Link:"5-第五周期/041-Nb"},position: {x: 240,y: 277.128}},
{data: {id: "42",name: "Mo 钼",NodeType: "6族",Type: "过渡金属",Latin: "Molybdaenum",Ecode: "042",Link:"5-第五周期/042-Mo"},position: {x: 300,y: 277.128}},
{data: {id: "43",name: "Tc 锝",NodeType: "7族",Type: "过渡金属",Latin: "Technetium",Ecode: "043",Link:"5-第五周期/043-Tc"},position: {x: 360,y: 277.128}},
{data: {id: "44",name: "Ru 钌",NodeType: "8族",Type: "过渡金属",Latin: "Ruthenium",Ecode: "044",Link:"5-第五周期/044-Ru"},position: {x: 420,y: 277.128}},
{data: {id: "45",name: "Rh 铑",NodeType: "9族",Type: "过渡金属",Latin: "Rhodium",Ecode: "045",Link:"5-第五周期/045-Rh"},position: {x: 480,y: 277.128}},
{data: {id: "46",name: "Pd 钯",NodeType: "10族",Type: "过渡金属",Latin: "Palladium",Ecode: "046",Link:"5-第五周期/046-Pd"},position: {x: 540,y: 277.128}},
{data: {id: "47",name: "Ag 银",NodeType: "11族",Type: "过渡金属",Latin: "Argentum",Ecode: "047",Link:"5-第五周期/047-Ag"},position: {x: 600,y: 277.128}},
{data: {id: "48",name: "Cd 镉",NodeType: "12族",Type: "过渡金属",Latin: "Cadmium",Ecode: "048",Link:"5-第五周期/048-Cd"},position: {x: 660,y: 277.128}},
{data: {id: "49",name: "In 铟",NodeType: "13族",Type: "贫金属",Latin: "Indium",Ecode: "049",Link:"5-第五周期/049-In"},position: {x: 720,y: 277.128}},
{data: {id: "50",name: "Sn 锡",NodeType: "14族",Type: "贫金属",Latin: "Stannum",Ecode: "050",Link:"5-第五周期/050-Sn"},position: {x: 780,y: 277.128}},
{data: {id: "51",name: "Sb 锑",NodeType: "15族",Type: "类金属",Latin: "Stibium",Ecode: "051",Link:"5-第五周期/051-Sb"},position: {x: 840,y: 277.128}},
{data: {id: "52",name: "Te 碲",NodeType: "16族",Type: "类金属",Latin: "Tellurium",Ecode: "052",Link:"5-第五周期/052-Te"},position: {x: 900,y: 277.128}},
{data: {id: "53",name: "I 碘",NodeType: "17族",Type: "卤素",Latin: "Iodum",Ecode: "053",Link:"5-第五周期/053-I"},position: {x: 960,y: 277.128}},
{data: {id: "54",name: "Xe 氙",NodeType: "18族",Type: "稀有气体",Latin: "Xenon",Ecode: "054",Link:"5-第五周期/054-Xe"},position: {x: 1020,y: 277.128}},
{data: {id: "55",name: "Cs 铯",NodeType: "1族",Type: "碱金属",Latin: "Cesium",Ecode: "055",Link:"6-第六周期/055-Cs"},position: {x: 0,y: 346.41}},
{data: {id: "56",name: "Ba 钡",NodeType: "2族",Type: "碱土金属",Latin: "Barium",Ecode: "056",Link:"6-第六周期/056-Ba"},position: {x: 60,y: 346.41}},
{data: {id: "57",name: "La 镧",NodeType: "3族",Type: "镧系元素",Latin: "Lanthanum",Ecode: "057",Link:"6-第六周期/057-La"},position: {x: 180,y: 519.615}},
{data: {id: "58",name: "Ce 铈",NodeType: "3族",Type: "镧系元素",Latin: "Cerium",Ecode: "058",Link:"6-第六周期/058-Ce"},position: {x: 240,y: 519.615}},
{data: {id: "59",name: "Pr 镨",NodeType: "3族",Type: "镧系元素",Latin: "Praseodymium",Ecode: "059",Link:"6-第六周期/059-Pr"},position: {x: 300,y: 519.615}},
{data: {id: "60",name: "Nd 钕",NodeType: "3族",Type: "镧系元素",Latin: "Neodymium",Ecode: "060",Link:"6-第六周期/060-Nd"},position: {x: 360,y: 519.615}},
{data: {id: "61",name: "Pm 钷",NodeType: "3族",Type: "镧系元素",Latin: "Promethium",Ecode: "061",Link:"6-第六周期/061-Pm"},position: {x: 420,y: 519.615}},
{data: {id: "62",name: "Sm 钐",NodeType: "3族",Type: "镧系元素",Latin: "Samrium",Ecode: "062",Link:"6-第六周期/062-Sm"},position: {x: 480,y: 519.615}},
{data: {id: "63",name: "Eu 铕",NodeType: "3族",Type: "镧系元素",Latin: "Europium",Ecode: "063",Link:"6-第六周期/063-Eu"},position: {x: 540,y: 519.615}},
{data: {id: "64",name: "Gd 钆",NodeType: "3族",Type: "镧系元素",Latin: "Gadolinium",Ecode: "064",Link:"6-第六周期/064-Gd"},position: {x: 600,y: 519.615}},
{data: {id: "65",name: "Tb 铽",NodeType: "3族",Type: "镧系元素",Latin: "Terbium",Ecode: "065",Link:"6-第六周期/065-Tb"},position: {x: 660,y: 519.615}},
{data: {id: "66",name: "Dy 镝",NodeType: "3族",Type: "镧系元素",Latin: "Dysprosium",Ecode: "066",Link:"6-第六周期/066-Dy"},position: {x: 720,y: 519.615}},
{data: {id: "67",name: "Ho 钬",NodeType: "3族",Type: "镧系元素",Latin: "Holmium",Ecode: "067",Link:"6-第六周期/067-Ho"},position: {x: 780,y: 519.615}},
{data: {id: "68",name: "Er 铒",NodeType: "3族",Type: "镧系元素",Latin: "Erbium",Ecode: "068",Link:"6-第六周期/068-Er"},position: {x: 840,y: 519.615}},
{data: {id: "69",name: "Tm 铥",NodeType: "3族",Type: "镧系元素",Latin: "Thulium",Ecode: "069",Link:"6-第六周期/069-Tm"},position: {x: 900,y: 519.615}},
{data: {id: "70",name: "Yb 镱",NodeType: "3族",Type: "镧系元素",Latin: "Ytterbium",Ecode: "070",Link:"6-第六周期/070-Yb"},position: {x: 960,y: 519.615}},
{data: {id: "71",name: "Lu 镥",NodeType: "3族",Type: "镧系元素",Latin: "Lutetium",Ecode: "071",Link:"6-第六周期/071-Lu"},position: {x: 1020,y: 519.615}},
{data: {id: "72",name: "Hf 铪",NodeType: "4族",Type: "过渡金属",Latin: "Hafnium",Ecode: "072",Link:"6-第六周期/072-Hf"},position: {x: 180,y: 346.41}},
{data: {id: "73",name: "Ta 钽",NodeType: "5族",Type: "过渡金属",Latin: "Tantalum",Ecode: "073",Link:"6-第六周期/073-Ta"},position: {x: 240,y: 346.41}},
{data: {id: "74",name: "W 钨",NodeType: "6族",Type: "过渡金属",Latin: "Wolframium",Ecode: "074",Link:"6-第六周期/074-W"},position: {x: 300,y: 346.41}},
{data: {id: "75",name: "Re 铼",NodeType: "7族",Type: "过渡金属",Latin: "Rhenium",Ecode: "075",Link:"6-第六周期/075-Re"},position: {x: 360,y: 346.41}},
{data: {id: "76",name: "Os 锇",NodeType: "8族",Type: "过渡金属",Latin: "Osmium",Ecode: "076",Link:"6-第六周期/076-Os"},position: {x: 420,y: 346.41}},
{data: {id: "77",name: "Ir 铱",NodeType: "9族",Type: "过渡金属",Latin: "Iridium",Ecode: "077",Link:"6-第六周期/077-Ir"},position: {x: 480,y: 346.41}},
{data: {id: "78",name: "Pt 铂",NodeType: "10族",Type: "过渡金属",Latin: "Platinum",Ecode: "078",Link:"6-第六周期/078-Pt"},position: {x: 540,y: 346.41}},
{data: {id: "79",name: "Au 金",NodeType: "11族",Type: "过渡金属",Latin: "Aurum",Ecode: "079",Link:"6-第六周期/079-Au"},position: {x: 600,y: 346.41}},
{data: {id: "80",name: "Hg 汞",NodeType: "12族",Type: "过渡金属",Latin: "Hydrargyrum",Ecode: "080",Link:"6-第六周期/080-Hg"},position: {x: 660,y: 346.41}},
{data: {id: "81",name: "Tl 铊",NodeType: "13族",Type: "贫金属",Latin: "Thallium",Ecode: "081",Link:"6-第六周期/081-Tl"},position: {x: 720,y: 346.41}},
{data: {id: "82",name: "Pb 铅",NodeType: "14族",Type: "贫金属",Latin: "Plumbum",Ecode: "082",Link:"6-第六周期/082-Pb"},position: {x: 780,y: 346.41}},
{data: {id: "83",name: "Bi 铋",NodeType: "15族",Type: "贫金属",Latin: "Bismuthum",Ecode: "083",Link:"6-第六周期/083-Bi"},position: {x: 840,y: 346.41}},
{data: {id: "84",name: "Po 钋",NodeType: "16族",Type: "贫金属",Latin: "Polonium",Ecode: "084",Link:"6-第六周期/084-Po"},position: {x: 900,y: 346.41}},
{data: {id: "85",name: "At 砹",NodeType: "17族",Type: "卤素",Latin: "Astatium",Ecode: "085",Link:"6-第六周期/085-At"},position: {x: 960,y: 346.41}},
{data: {id: "86",name: "Rn 氡",NodeType: "18族",Type: "稀有气体",Latin: "Radon",Ecode: "086",Link:"6-第六周期/086-Rn"},position: {x: 1020,y: 346.41}},
{data: {id: "87",name: "Fr 钫",NodeType: "1族",Type: "碱金属",Latin: "Francium",Ecode: "087",Link:"7-第七周期/087-Fr"},position: {x: 0,y: 415.692}},
{data: {id: "88",name: "Ra 镭",NodeType: "2族",Type: "碱土金属",Latin: "Radium",Ecode: "088",Link:"7-第七周期/088-Ra"},position: {x: 60,y: 415.692}},
{data: {id: "89",name: "Ac 锕",NodeType: "3族",Type: "锕系元素",Latin: "Actinium",Ecode: "089",Link:"7-第七周期/089-Ac"},position: {x: 180,y: 588.897}},
{data: {id: "90",name: "Th 钍",NodeType: "3族",Type: "锕系元素",Latin: "Thorium",Ecode: "090",Link:"7-第七周期/090-Th"},position: {x: 240,y: 588.897}},
{data: {id: "91",name: "Pa 镤",NodeType: "3族",Type: "锕系元素",Latin: "Protactinium",Ecode: "091",Link:"7-第七周期/091-Pa"},position: {x: 300,y: 588.897}},
{data: {id: "92",name: "U 铀",NodeType: "3族",Type: "锕系元素",Latin: "Uranium",Ecode: "092",Link:"7-第七周期/092-U"},position: {x: 360,y: 588.897}},
{data: {id: "93",name: "Np 镎",NodeType: "3族",Type: "锕系元素",Latin: "Neptunium",Ecode: "093",Link:"7-第七周期/093-Np"},position: {x: 420,y: 588.897}},
{data: {id: "94",name: "Pu 钚",NodeType: "3族",Type: "锕系元素",Latin: "Plutonium",Ecode: "094",Link:"7-第七周期/094-Pu"},position: {x: 480,y: 588.897}},
{data: {id: "95",name: "Am 镅",NodeType: "3族",Type: "锕系元素",Latin: "Americium",Ecode: "095",Link:"7-第七周期/095-Am"},position: {x: 540,y: 588.897}},
{data: {id: "96",name: "Cm 锔",NodeType: "3族",Type: "锕系元素",Latin: "Curium",Ecode: "096",Link:"7-第七周期/096-Cm"},position: {x: 600,y: 588.897}},
{data: {id: "97",name: "Bk 锫",NodeType: "3族",Type: "锕系元素",Latin: "Berkelium",Ecode: "097",Link:"7-第七周期/097-Bk"},position: {x: 660,y: 588.897}},
{data: {id: "98",name: "Cf 锎",NodeType: "3族",Type: "锕系元素",Latin: "Californium",Ecode: "098",Link:"7-第七周期/098-Cf"},position: {x: 720,y: 588.897}},
{data: {id: "99",name: "Es 锿",NodeType: "3族",Type: "锕系元素",Latin: "Einsteinium",Ecode: "099",Link:"7-第七周期/099-Es"},position: {x: 780,y: 588.897}},
{data: {id: "100",name: "Fm 镄",NodeType: "3族",Type: "锕系元素",Latin: "Fermium",Ecode: "100",Link:"7-第七周期/100-Fm"},position: {x: 840,y: 588.897}},
{data: {id: "101",name: "Md 钔",NodeType: "3族",Type: "锕系元素",Latin: "Mendelevium",Ecode: "101",Link:"7-第七周期/101-Md"},position: {x: 900,y: 588.897}},
{data: {id: "102",name: "No 锘",NodeType: "3族",Type: "锕系元素",Latin: "Nobelium",Ecode: "102",Link:"7-第七周期/102-No"},position: {x: 960,y: 588.897}},
{data: {id: "103",name: "Lr 铹",NodeType: "3族",Type: "锕系元素",Latin: "Lawrencium",Ecode: "103",Link:"7-第七周期/103-Lr"},position: {x: 1020,y: 588.897}},
{data: {id: "104",name: "Rf 𬬻",NodeType: "4族",Type: "过渡金属",Latin: "Rutherfordium",Ecode: "104",Link:"7-第七周期/104-Rf"},position: {x: 180,y: 415.692}},
{data: {id: "105",name: "Db 𬭊",NodeType: "5族",Type: "过渡金属",Latin: "Dubnium",Ecode: "105",Link:"7-第七周期/105-Db"},position: {x: 240,y: 415.692}},
{data: {id: "106",name: "Sg 𬭳",NodeType: "6族",Type: "过渡金属",Latin: "Seaborgium",Ecode: "106",Link:"7-第七周期/106-Sg"},position: {x: 300,y: 415.692}},
{data: {id: "107",name: "Bh 𬭛",NodeType: "7族",Type: "过渡金属",Latin: "Bohrium",Ecode: "107",Link:"7-第七周期/107-Bh"},position: {x: 360,y: 415.692}},
{data: {id: "108",name: "Hs 𬭶",NodeType: "8族",Type: "过渡金属",Latin: "Hassium",Ecode: "108",Link:"7-第七周期/108-Hs"},position: {x: 420,y: 415.692}},
{data: {id: "109",name: "Mt 鿏",NodeType: "9族",Type: "过渡金属",Latin: "Meitnerium",Ecode: "109",Link:"7-第七周期/109-Mt"},position: {x: 480,y: 415.692}},
{data: {id: "110",name: "Ds 𫟼",NodeType: "10族",Type: "过渡金属",Latin: "Darmstadtium",Ecode: "110",Link:"7-第七周期/110-Ds"},position: {x: 540,y: 415.692}},
{data: {id: "111",name: "Rg 𬬭",NodeType: "11族",Type: "过渡金属",Latin: "Roentgenium",Ecode: "111",Link:"7-第七周期/111-Rg"},position: {x: 600,y: 415.692}},
{data: {id: "112",name: "Cn 鿔",NodeType: "12族",Type: "过渡金属",Latin: "Copernicium",Ecode: "112",Link:"7-第七周期/112-Cn"},position: {x: 660,y: 415.692}},
{data: {id: "113",name: "Nh 鿭",NodeType: "13族",Type: "贫金属",Latin: "Nihonium",Ecode: "113",Link:"7-第七周期/113-Nh"},position: {x: 720,y: 415.692}},
{data: {id: "114",name: "Fl 𫓧",NodeType: "14族",Type: "贫金属",Latin: "Flerovium",Ecode: "114",Link:"7-第七周期/114-Fl"},position: {x: 780,y: 415.692}},
{data: {id: "115",name: "Mc 镆",NodeType: "15族",Type: "贫金属",Latin: "Moscovium",Ecode: "115",Link:"7-第七周期/115-Mc"},position: {x: 840,y: 415.692}},
{data: {id: "116",name: "Lv 𫟷",NodeType: "16族",Type: "贫金属",Latin: "Livermorium",Ecode: "116",Link:"7-第七周期/116-Lv"},position: {x: 900,y: 415.692}},
{data: {id: "117",name: "Ts 鿬",NodeType: "17族",Type: "卤素",Latin: "Tennessine",Ecode: "117",Link:"7-第七周期/117-Ts"},position: {x: 960,y: 415.692}},
{data: {id: "118",name: "Og 鿫",NodeType: "18族",Type: "稀有气体",Latin: "Oganesson",Ecode: "118",Link:"7-第七周期/118-Og"},position: {x: 1020,y: 415.692}}
],
        edges: [
{data: {id: "2000",source: "1",target: "2",tot: "默许",tos: "追随",ship: "",kind: "爱"},},
{data: {id: "2001",source: "1",target: "3",tot: "信任",tos: "景仰",ship: "",kind: "亲"},},
{data: {id: "2002",source: "1",target: "6",tot: "无奈",tos: "敬爱",ship: "",kind: "爱"},},
{data: {id: "2003",source: "1",target: "7",tot: "体贴",tos: "向往",ship: "",kind: "友"},},
{data: {id: "2004",source: "1",target: "8",tot: "包容",tos: "敬重",ship: "",kind: "爱"},},
{data: {id: "2005",source: "1",target: "9",tot: "棘手",tos: "钦佩",ship: "",kind: "恨"},},
{data: {id: "2006",source: "1",target: "11",tot: "宽容",tos: "崇敬",ship: "",kind: "亲"},},
{data: {id: "2007",source: "1",target: "26",tot: "认可",tos: "尊重",ship: "",kind: "友"},},
{data: {id: "2008",source: "1",target: "46",tot: "头疼",tos: "狂热",ship: "",kind: "友"},},
{data: {id: "2009",source: "1",target: "79",tot: "理解",tos: "敬慕",ship: "",kind: "友"},},
{data: {id: "2010",source: "1",target: "92",tot: "放任",tos: "仰望",ship: "",kind: "友"},},
{data: {id: "2011",source: "1",target: "118",tot: "漠然",tos: "憧憬",ship: "",kind: "恨"},},
{data: {id: "2012",source: "2",target: "3",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2013",source: "2",target: "6",tot: "",tos: "",ship: "点头之交",kind: "友"},},
{data: {id: "2014",source: "2",target: "10",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2015",source: "2",target: "11",tot: "认可",tos: "",ship: "",kind: "友"},},
{data: {id: "2016",source: "2",target: "14",tot: "同情",tos: "",ship: "",kind: "友"},},
{data: {id: "2017",source: "2",target: "18",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2018",source: "2",target: "36",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2019",source: "2",target: "54",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2020",source: "2",target: "79",tot: "苛待",tos: "",ship: "",kind: "恨"},},
{data: {id: "2021",source: "2",target: "86",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2022",source: "2",target: "92",tot: "关注",tos: "",ship: "",kind: "友"},},
{data: {id: "2023",source: "2",target: "118",tot: "否认",tos: "",ship: "",kind: "亲"},},
{data: {id: "2024",source: "3",target: "4",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2025",source: "3",target: "7",tot: "好奇",tos: "",ship: "",kind: "友"},},
{data: {id: "2026",source: "3",target: "8",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2027",source: "3",target: "11",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2028",source: "3",target: "12",tot: "超帅气",tos: "",ship: "",kind: "友"},},
{data: {id: "2029",source: "3",target: "13",tot: "超向往",tos: "",ship: "",kind: "友"},},
{data: {id: "2030",source: "3",target: "19",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2031",source: "3",target: "25",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2032",source: "3",target: "26",tot: "难对付",tos: "",ship: "",kind: "恨"},},
{data: {id: "2033",source: "3",target: "37",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2034",source: "3",target: "42",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2035",source: "3",target: "53",tot: "",tos: "",ship: "挚友",kind: "爱"},},
{data: {id: "2036",source: "3",target: "55",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2037",source: "3",target: "87",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2038",source: "4",target: "5",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2039",source: "4",target: "12",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2040",source: "4",target: "13",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2041",source: "4",target: "20",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2042",source: "4",target: "24",tot: "好朋友",tos: "好家伙",ship: "",kind: "友"},},
{data: {id: "2043",source: "4",target: "29",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2044",source: "4",target: "38",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2045",source: "4",target: "56",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2046",source: "4",target: "88",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2047",source: "5",target: "6",tot: "厉害的",tos: "",ship: "",kind: "友"},},
{data: {id: "2048",source: "5",target: "7",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2049",source: "5",target: "12",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2050",source: "5",target: "13",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2051",source: "5",target: "14",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2052",source: "5",target: "16",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2053",source: "5",target: "24",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2054",source: "5",target: "26",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2055",source: "5",target: "31",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2056",source: "5",target: "49",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2057",source: "5",target: "60",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2058",source: "5",target: "81",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2059",source: "5",target: "113",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2060",source: "6",target: "7",tot: "",tos: "",ship: "友人",kind: "友"},},
{data: {id: "2061",source: "6",target: "8",tot: "",tos: "",ship: "损友",kind: "爱"},},
{data: {id: "2062",source: "6",target: "14",tot: "好兄弟",tos: "大麻烦",ship: "",kind: "亲"},},
{data: {id: "2063",source: "6",target: "16",tot: "熟人",tos: "",ship: "",kind: "友"},},
{data: {id: "2064",source: "6",target: "20",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2065",source: "6",target: "26",tot: "",tos: "",ship: "战友",kind: "友"},},
{data: {id: "2066",source: "6",target: "32",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2067",source: "6",target: "42",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2068",source: "6",target: "50",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2069",source: "6",target: "82",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2070",source: "6",target: "114",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2071",source: "7",target: "8",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2072",source: "7",target: "12",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2073",source: "7",target: "15",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2074",source: "7",target: "16",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2075",source: "7",target: "18",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2076",source: "7",target: "19",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2077",source: "7",target: "33",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2078",source: "7",target: "42",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2079",source: "7",target: "51",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2080",source: "7",target: "83",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2081",source: "7",target: "115",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2082",source: "8",target: "9",tot: "",tos: "",ship: "不想碰面",kind: "恨"},},
{data: {id: "2083",source: "8",target: "14",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2084",source: "8",target: "16",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2085",source: "8",target: "17",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2086",source: "8",target: "20",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2087",source: "8",target: "34",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2088",source: "8",target: "52",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2089",source: "8",target: "84",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2090",source: "8",target: "116",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2091",source: "9",target: "14",tot: "佩服",tos: "崇拜",ship: "意气相投",kind: "爱"},},
{data: {id: "2092",source: "9",target: "17",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2093",source: "9",target: "35",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2094",source: "9",target: "36",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2095",source: "9",target: "53",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2096",source: "9",target: "54",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2097",source: "9",target: "55",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2098",source: "9",target: "85",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2099",source: "9",target: "117",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2100",source: "10",target: "11",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2101",source: "10",target: "18",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2102",source: "10",target: "36",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2103",source: "10",target: "54",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2104",source: "10",target: "86",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2105",source: "10",target: "105",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2106",source: "10",target: "118",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2107",source: "11",target: "12",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2108",source: "11",target: "13",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2109",source: "11",target: "17",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2110",source: "11",target: "19",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2111",source: "11",target: "20",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2112",source: "11",target: "22",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2113",source: "11",target: "24",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2114",source: "11",target: "37",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2115",source: "11",target: "53",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2116",source: "11",target: "55",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2117",source: "11",target: "80",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2118",source: "11",target: "87",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2119",source: "12",target: "13",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2120",source: "12",target: "14",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2121",source: "12",target: "15",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2122",source: "12",target: "19",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2123",source: "12",target: "20",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2124",source: "12",target: "21",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2125",source: "12",target: "22",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2126",source: "12",target: "30",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2127",source: "12",target: "38",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2128",source: "12",target: "56",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2129",source: "12",target: "88",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2130",source: "13",target: "14",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2131",source: "13",target: "21",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2132",source: "13",target: "22",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2133",source: "13",target: "26",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2134",source: "13",target: "27",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2135",source: "13",target: "30",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2136",source: "13",target: "38",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2137",source: "13",target: "31",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2138",source: "13",target: "49",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2139",source: "13",target: "81",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2140",source: "13",target: "113",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2141",source: "14",target: "15",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2142",source: "14",target: "20",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2143",source: "14",target: "24",tot: "烦人",tos: "",ship: "",kind: "恨"},},
{data: {id: "2144",source: "14",target: "31",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2145",source: "14",target: "32",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2146",source: "14",target: "50",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2147",source: "14",target: "82",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2148",source: "14",target: "114",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2149",source: "15",target: "16",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2150",source: "15",target: "17",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2151",source: "15",target: "19",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2152",source: "15",target: "20",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2153",source: "15",target: "42",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2154",source: "15",target: "33",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2155",source: "15",target: "51",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2156",source: "15",target: "61",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2157",source: "15",target: "83",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2158",source: "15",target: "115",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2159",source: "16",target: "17",tot: "",tos: "",ship: "相似",kind: "友"},},
{data: {id: "2160",source: "16",target: "26",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2161",source: "16",target: "29",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2162",source: "16",target: "33",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2163",source: "16",target: "34",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2164",source: "16",target: "47",tot: "关系不错",tos: "",ship: "",kind: "友"},},
{data: {id: "2165",source: "16",target: "52",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2166",source: "16",target: "78",tot: "难相处",tos: "",ship: "",kind: "恨"},},
{data: {id: "2167",source: "16",target: "79",tot: "难相处",tos: "",ship: "",kind: "恨"},},
{data: {id: "2168",source: "16",target: "80",tot: "",tos: "",ship: "到此为止",kind: "恨"},},
{data: {id: "2169",source: "16",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2170",source: "16",target: "84",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2171",source: "16",target: "116",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2172",source: "17",target: "20",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2173",source: "17",target: "22",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2174",source: "17",target: "24",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2175",source: "17",target: "35",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2176",source: "17",target: "47",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2177",source: "17",target: "53",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2178",source: "17",target: "85",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2179",source: "17",target: "117",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2180",source: "18",target: "19",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2181",source: "18",target: "36",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2182",source: "18",target: "54",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2183",source: "18",target: "86",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2184",source: "18",target: "101",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2185",source: "18",target: "118",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2186",source: "19",target: "20",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2187",source: "19",target: "24",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2188",source: "19",target: "37",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2189",source: "19",target: "40",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2190",source: "19",target: "53",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2191",source: "19",target: "55",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2192",source: "19",target: "87",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2193",source: "20",target: "22",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2194",source: "20",target: "29",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2195",source: "20",target: "30",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2196",source: "20",target: "38",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2197",source: "20",target: "56",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2198",source: "20",target: "88",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2199",source: "20",target: "112",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2200",source: "21",target: "22",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2201",source: "21",target: "39",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2202",source: "21",target: "57",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2203",source: "21",target: "64",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2204",source: "21",target: "68",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2205",source: "21",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2206",source: "21",target: "89",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2207",source: "21",target: "103",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2208",source: "22",target: "23",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2209",source: "22",target: "24",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2210",source: "22",target: "26",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2211",source: "22",target: "28",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2212",source: "22",target: "40",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2213",source: "22",target: "41",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2214",source: "22",target: "72",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2215",source: "22",target: "104",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2216",source: "23",target: "24",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2217",source: "23",target: "26",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2218",source: "23",target: "40",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2219",source: "23",target: "41",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2220",source: "23",target: "73",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2221",source: "23",target: "83",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2222",source: "23",target: "105",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2223",source: "24",target: "25",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2224",source: "24",target: "26",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2225",source: "24",target: "27",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2226",source: "24",target: "28",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2227",source: "24",target: "42",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2228",source: "24",target: "48",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2229",source: "24",target: "74",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2230",source: "24",target: "82",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2231",source: "24",target: "92",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2232",source: "24",target: "106",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2233",source: "24",target: "107",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2234",source: "25",target: "26",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2235",source: "25",target: "43",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2236",source: "25",target: "51",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2237",source: "25",target: "75",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2238",source: "25",target: "107",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2239",source: "26",target: "27",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2240",source: "26",target: "28",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2241",source: "26",target: "29",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2242",source: "26",target: "30",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2243",source: "26",target: "34",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2244",source: "26",target: "58",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2245",source: "26",target: "60",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2246",source: "26",target: "80",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2247",source: "26",target: "108",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2248",source: "27",target: "28",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2249",source: "27",target: "33",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2250",source: "27",target: "47",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2251",source: "27",target: "62",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2252",source: "27",target: "109",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2253",source: "28",target: "29",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2254",source: "28",target: "41",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2255",source: "28",target: "42",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2256",source: "28",target: "44",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2257",source: "28",target: "45",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2258",source: "28",target: "76",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2259",source: "28",target: "77",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2260",source: "28",target: "78",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2261",source: "28",target: "83",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2262",source: "28",target: "110",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2263",source: "29",target: "30",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2264",source: "29",target: "47",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2265",source: "29",target: "50",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2266",source: "29",target: "79",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2267",source: "29",target: "80",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2268",source: "29",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2269",source: "29",target: "111",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2270",source: "30",target: "38",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2271",source: "30",target: "48",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2272",source: "30",target: "53",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2273",source: "30",target: "80",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2274",source: "30",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2275",source: "30",target: "112",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2276",source: "31",target: "32",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2277",source: "31",target: "33",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2278",source: "31",target: "49",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2279",source: "31",target: "50",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2280",source: "31",target: "51",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2281",source: "31",target: "80",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2282",source: "31",target: "81",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2283",source: "31",target: "113",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2284",source: "32",target: "33",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2285",source: "32",target: "34",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2286",source: "32",target: "47",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2287",source: "32",target: "49",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2288",source: "32",target: "50",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2289",source: "32",target: "51",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2290",source: "32",target: "82",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2291",source: "32",target: "114",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2292",source: "33",target: "34",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2293",source: "33",target: "35",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2294",source: "33",target: "51",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2295",source: "33",target: "80",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2296",source: "33",target: "81",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2297",source: "33",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2298",source: "33",target: "83",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2299",source: "33",target: "115",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2300",source: "34",target: "35",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2301",source: "34",target: "42",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2302",source: "34",target: "48",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2303",source: "34",target: "52",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2304",source: "34",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2305",source: "34",target: "83",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2306",source: "34",target: "84",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2307",source: "34",target: "112",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2308",source: "34",target: "116",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2309",source: "35",target: "47",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2310",source: "35",target: "53",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2311",source: "35",target: "80",tot: "同类",tos: "",ship: "",kind: "友"},},
{data: {id: "2312",source: "35",target: "85",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2313",source: "35",target: "117",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2314",source: "36",target: "54",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2315",source: "36",target: "86",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2316",source: "36",target: "118",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2317",source: "37",target: "38",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2318",source: "37",target: "51",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2319",source: "37",target: "53",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2320",source: "37",target: "55",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2321",source: "37",target: "87",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2322",source: "38",target: "55",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2323",source: "38",target: "56",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2324",source: "38",target: "88",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2325",source: "39",target: "41",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2326",source: "39",target: "57",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2327",source: "39",target: "58",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2328",source: "39",target: "65",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2329",source: "39",target: "68",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2330",source: "39",target: "70",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2331",source: "39",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2332",source: "39",target: "89",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2333",source: "39",target: "103",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2334",source: "40",target: "41",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2335",source: "40",target: "50",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2336",source: "40",target: "59",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2337",source: "40",target: "72",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2338",source: "40",target: "73",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2339",source: "40",target: "92",tot: "不放心",tos: "",ship: "",kind: "友"},},
{data: {id: "2340",source: "40",target: "104",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2341",source: "41",target: "42",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2342",source: "41",target: "43",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2343",source: "41",target: "44",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2344",source: "41",target: "45",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2345",source: "41",target: "46",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2346",source: "41",target: "50",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2347",source: "41",target: "72",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2348",source: "41",target: "73",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2349",source: "41",target: "74",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2350",source: "41",target: "105",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2351",source: "42",target: "43",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2352",source: "42",target: "72",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2353",source: "42",target: "74",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2354",source: "42",target: "75",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2355",source: "42",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2356",source: "42",target: "106",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2357",source: "43",target: "44",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2358",source: "43",target: "61",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2359",source: "43",target: "75",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2360",source: "43",target: "92",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2361",source: "43",target: "94",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2362",source: "43",target: "107",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2363",source: "44",target: "45",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2364",source: "44",target: "46",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2365",source: "44",target: "76",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2366",source: "44",target: "77",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2367",source: "44",target: "78",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2368",source: "44",target: "79",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2369",source: "44",target: "105",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2370",source: "44",target: "108",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2371",source: "45",target: "46",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2372",source: "45",target: "76",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2373",source: "45",target: "77",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2374",source: "45",target: "78",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2375",source: "45",target: "109",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2376",source: "46",target: "47",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2377",source: "46",target: "76",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2378",source: "46",target: "77",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2379",source: "46",target: "78",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2380",source: "46",target: "110",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2381",source: "47",target: "48",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2382",source: "47",target: "49",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2383",source: "47",target: "53",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2384",source: "47",target: "78",tot: "",tos: "",ship: "",kind: "恨"},},
{data: {id: "2385",source: "47",target: "79",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2386",source: "47",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2387",source: "47",target: "111",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2388",source: "48",target: "49",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2389",source: "48",target: "51",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2390",source: "48",target: "80",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2391",source: "48",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2392",source: "48",target: "112",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2393",source: "49",target: "50",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2394",source: "49",target: "51",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2395",source: "49",target: "52",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2396",source: "49",target: "81",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2397",source: "49",target: "113",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2398",source: "50",target: "51",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2399",source: "50",target: "74",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2400",source: "50",target: "82",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2401",source: "50",target: "83",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2402",source: "50",target: "114",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2403",source: "51",target: "52",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2404",source: "51",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2405",source: "51",target: "83",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2406",source: "51",target: "115",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2407",source: "52",target: "53",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2408",source: "52",target: "79",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2409",source: "52",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2410",source: "52",target: "83",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2411",source: "52",target: "84",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2412",source: "52",target: "116",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2413",source: "53",target: "85",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2414",source: "53",target: "117",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2415",source: "54",target: "86",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2416",source: "54",target: "118",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2417",source: "55",target: "56",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2418",source: "55",target: "79",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2419",source: "55",target: "85",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2420",source: "55",target: "87",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2421",source: "56",target: "57",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2422",source: "56",target: "78",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2423",source: "56",target: "88",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2424",source: "56",target: "91",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2425",source: "56",target: "93",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2426",source: "57",target: "58",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2427",source: "57",target: "59",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2428",source: "57",target: "60",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2429",source: "57",target: "61",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2430",source: "57",target: "62",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2431",source: "57",target: "63",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2432",source: "57",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2433",source: "57",target: "89",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2434",source: "57",target: "90",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2435",source: "57",target: "98",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2436",source: "57",target: "99",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2437",source: "58",target: "59",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2438",source: "58",target: "60",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2439",source: "58",target: "61",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2440",source: "58",target: "62",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2441",source: "58",target: "63",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2442",source: "58",target: "90",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2443",source: "58",target: "97",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2444",source: "59",target: "60",tot: "",tos: "",ship: "双子",kind: "亲"},},
{data: {id: "2445",source: "59",target: "61",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2446",source: "59",target: "62",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2447",source: "59",target: "63",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2448",source: "59",target: "91",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2449",source: "60",target: "61",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2450",source: "60",target: "62",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2451",source: "60",target: "63",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2452",source: "60",target: "92",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2453",source: "61",target: "62",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2454",source: "61",target: "63",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2455",source: "61",target: "93",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2456",source: "62",target: "63",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2457",source: "62",target: "64",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2458",source: "62",target: "94",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2459",source: "62",target: "100",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2460",source: "63",target: "64",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2461",source: "63",target: "65",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2462",source: "63",target: "95",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2463",source: "64",target: "65",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2464",source: "64",target: "66",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2465",source: "64",target: "67",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2466",source: "64",target: "68",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2467",source: "64",target: "69",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2468",source: "64",target: "70",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2469",source: "64",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2470",source: "64",target: "96",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2471",source: "65",target: "66",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2472",source: "65",target: "67",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2473",source: "65",target: "68",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2474",source: "65",target: "69",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2475",source: "65",target: "70",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2476",source: "65",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2477",source: "65",target: "97",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2478",source: "66",target: "67",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2479",source: "66",target: "68",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2480",source: "66",target: "69",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2481",source: "66",target: "70",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2482",source: "66",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2483",source: "66",target: "98",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2484",source: "67",target: "68",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2485",source: "67",target: "69",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2486",source: "67",target: "70",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2487",source: "67",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2488",source: "67",target: "99",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2489",source: "68",target: "69",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2490",source: "68",target: "70",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2491",source: "68",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2492",source: "68",target: "100",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2493",source: "69",target: "70",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2494",source: "69",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2495",source: "69",target: "101",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2496",source: "70",target: "71",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2497",source: "70",target: "102",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2498",source: "71",target: "72",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2499",source: "71",target: "103",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2500",source: "72",target: "73",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2501",source: "72",target: "74",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2502",source: "72",target: "104",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2503",source: "73",target: "74",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2504",source: "73",target: "75",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2505",source: "73",target: "105",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2506",source: "74",target: "75",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2507",source: "74",target: "106",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2508",source: "75",target: "76",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2509",source: "75",target: "78",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2510",source: "75",target: "107",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2511",source: "76",target: "77",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2512",source: "76",target: "78",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2513",source: "76",target: "108",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2514",source: "77",target: "78",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2515",source: "77",target: "79",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2516",source: "77",target: "109",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2517",source: "78",target: "79",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2518",source: "78",target: "110",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2519",source: "79",target: "80",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2520",source: "79",target: "111",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2521",source: "79",target: "112",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2522",source: "80",target: "81",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2523",source: "80",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2524",source: "80",target: "112",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2525",source: "81",target: "82",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2526",source: "81",target: "83",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2527",source: "81",target: "93",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2528",source: "81",target: "113",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2529",source: "82",target: "83",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2530",source: "82",target: "92",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2531",source: "82",target: "108",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2532",source: "82",target: "110",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2533",source: "82",target: "112",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2534",source: "82",target: "114",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2535",source: "83",target: "84",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2536",source: "83",target: "85",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2537",source: "83",target: "107",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2538",source: "83",target: "109",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2539",source: "83",target: "111",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2540",source: "83",target: "115",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2541",source: "84",target: "85",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2542",source: "84",target: "86",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2543",source: "84",target: "88",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2544",source: "84",target: "116",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2545",source: "85",target: "86",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2546",source: "85",target: "87",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2547",source: "85",target: "91",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2548",source: "85",target: "117",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2549",source: "86",target: "87",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2550",source: "86",target: "88",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2551",source: "86",target: "112",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2552",source: "86",target: "118",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2553",source: "87",target: "88",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2554",source: "87",target: "91",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2555",source: "87",target: "117",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2556",source: "88",target: "89",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2557",source: "88",target: "90",tot: "",tos: "",ship: "",kind: "爱"},},
{data: {id: "2558",source: "89",target: "90",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2559",source: "89",target: "91",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2560",source: "89",target: "92",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2561",source: "90",target: "91",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2562",source: "90",target: "92",tot: "兄弟！",tos: "",ship: "",kind: "亲"},},
{data: {id: "2563",source: "90",target: "100",tot: "",tos: "90分",ship: "",kind: "亲"},},
{data: {id: "2564",source: "90",target: "110",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2565",source: "91",target: "92",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2566",source: "91",target: "93",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2567",source: "92",target: "93",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2568",source: "92",target: "94",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2569",source: "92",target: "99",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2570",source: "92",target: "100",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2571",source: "93",target: "94",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2572",source: "93",target: "95",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2573",source: "94",target: "95",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2574",source: "94",target: "96",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2575",source: "94",target: "102",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2576",source: "94",target: "104",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2577",source: "94",target: "114",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2578",source: "95",target: "96",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2579",source: "95",target: "97",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2580",source: "95",target: "98",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2581",source: "95",target: "99",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2582",source: "95",target: "101",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2583",source: "95",target: "103",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2584",source: "95",target: "105",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2585",source: "96",target: "97",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2586",source: "96",target: "98",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2587",source: "96",target: "102",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2588",source: "96",target: "108",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2589",source: "96",target: "109",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2590",source: "96",target: "116",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2591",source: "97",target: "98",tot: "跟随",tos: "",ship: "",kind: "亲"},},
{data: {id: "2592",source: "97",target: "99",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2593",source: "97",target: "117",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2594",source: "98",target: "99",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2595",source: "98",target: "100",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2596",source: "98",target: "102",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2597",source: "98",target: "103",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2598",source: "98",target: "104",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2599",source: "98",target: "105",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2600",source: "98",target: "106",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2601",source: "98",target: "118",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2602",source: "99",target: "100",tot: "",tos: "1分",ship: "",kind: "亲"},},
{data: {id: "2603",source: "99",target: "101",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2604",source: "100",target: "101",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2605",source: "101",target: "102",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2606",source: "101",target: "118",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2607",source: "102",target: "103",tot: "",tos: "",ship: "",kind: "亲"},},
{data: {id: "2608",source: "102",target: "104",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2609",source: "103",target: "105",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2610",source: "103",target: "117",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2611",source: "104",target: "105",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2612",source: "104",target: "110",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2613",source: "104",target: "114",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2614",source: "105",target: "107",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2615",source: "105",target: "115",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2616",source: "106",target: "108",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2617",source: "106",target: "110",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2618",source: "106",target: "118",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2619",source: "107",target: "109",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2620",source: "107",target: "111",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2621",source: "107",target: "113",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2622",source: "107",target: "115",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2623",source: "108",target: "110",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2624",source: "109",target: "111",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2625",source: "109",target: "113",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2626",source: "109",target: "115",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2627",source: "109",target: "117",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2628",source: "110",target: "114",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2629",source: "111",target: "113",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2630",source: "111",target: "115",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2631",source: "112",target: "114",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2632",source: "113",target: "115",tot: "",tos: "",ship: "",kind: "友"},},
{data: {id: "2633",source: "116",target: "118",tot: "",tos: "",ship: "",kind: "友"},}
          ]
      };
    H.nodes.forEach((function(e) {
      var a = e.data;
      a.NodeTypeFormatted = a.NodeType, e.data.orgPos = {
        x: e.position.x,
        y: e.position.y
      }, a.name = a.name.replace(/[-]/g, "-​")
    }));
    var Q = H;

    function q(e) {
      return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Z(e, a) {
      for (var t = 0; t < a.length; t++) {
        var n = a[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function K(e, a) {
      return !a || "object" !== q(a) && "function" != typeof a ? function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : a
    }

    function Y(e) {
      return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function X(e, a) {
      return (X = Object.setPrototypeOf || function(e, a) {
        return e.__proto__ = a, e
      })(e, a)
    }
    var J = function(e) {
      function a(e) {
        return function(e, a) {
          if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }(this, a), K(this, Y(a).call(this, e))
      }
      var t, n, r;
      return function(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), a && X(e, a)
      }(a, e), t = a, (n = [{
        key: "render",
        value: function() {
          return g("div", {
            id: "cy"
          })
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var e = this.props,
            a = e.cy,
            t = e.controller,
            n = document.getElementById("cy");
          a.mount(n), a.fit(10), a.on("tap", this.onTap = function(e) {
            e.target === a ? (t.unhighlight(), t.hideInfo(), t.closeMenu()) : (t.highlight(e.target), t.showInfo(e.target), t.closeMenu())
          })
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.props.cy.removeListener("tap", this.onTap)
        }
      }]) && Z(t.prototype, n), r && Z(t, r), a
    }(f);

    function $(e) {
      return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ee(e, a) {
      for (var t = 0; t < a.length; t++) {
        var n = a[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function ae(e, a) {
      return !a || "object" !== $(a) && "function" != typeof a ? function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : a
    }

    function te(e) {
      return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function ne(e, a) {
      return (ne = Object.setPrototypeOf || function(e, a) {
        return e.__proto__ = a, e
      })(e, a)
    }
    var re = function(e) {
        function a(e) {
          return function(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
          }(this, a), ae(this, te(a).call(this, e))
        }
        var t, n, r;
        return function(e, a) {
          if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), a && ne(e, a)
        }(a, e), t = a, (n = [{
          key: "render",
          value: function() {
            var e = this.props.node.data(),
              a = e.name,
              t = e.NodeTypeFormatted + (e.Type ? " （".concat(e.Type, "）") : ""),
              n = e.Latin,
              r = null != n,
              i = e.Ecode,
              c = null != i,
              o = e.Link;
            return g("div", {
              class: "node-info"
            }, [g("div", {
              class: "node-info-name"
            }, a), g("div", {
              class: "node-info-latin"
            }, n), r ? g("div", {
              class: "node-info-code"
            }, "编码："+i+".") : null, c ? g("div", {
              class: "node-info-type"
            }, t) : null, g("div", {
              class: "node-info-more"
            }, [g("a", {
              target: "_blank",
              href: "https://elecode.wiki/?file=2-%E6%A1%A3%E6%A1%88%E9%99%88%E5%88%97/0".concat(o)
            }, "查看元素档案")])])
          }
        }]) && ee(t.prototype, n), r && ee(t, r), a
      }(f),
      ie = t(90),
      ce = t.n(ie),
      oe = t(89),
      se = t.n(oe);

    function le(e) {
      return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function de(e, a) {
      for (var t = 0; t < a.length; t++) {
        var n = a[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function ue(e, a) {
      return !a || "object" !== le(a) && "function" != typeof a ? function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : a
    }

    function he(e) {
      return (he = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function me(e, a) {
      return (me = Object.setPrototypeOf || function(e, a) {
        return e.__proto__ = a, e
      })(e, a)
    }
    var ge = function(e) {
      function a(e) {
        var t;
        ! function(e, a) {
          if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }(this, a), t = ue(this, he(a).call(this, e));
        var n = e.controller,
          r = n.bus;
        return t.state = {
          open: n.isMenuOpen()
        }, r.on("openMenu", t.onOpenMenu = function() {
          t.setState({
            open: !0
          }), t.focusTextBox()
        }), r.on("closeMenu", t.onOpenMenu = function() {
          t.setState({
            open: !1
          })
        }), r.on("updateSearch", t.onUpdateSearch = function(e) {
          t.setState({
            searchMatchNodes: e
          })
        }), t.debouncedUpdateSearch = se()((function() {
          return t.updateSearch()
        }), 250), t
      }
      var t, n, r;
      return function(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), a && me(e, a)
      }(a, e), t = a, (n = [{
        key: "componentWillUnmount",
        value: function() {
          var e = this.props.controller.bus;
          e.removeListener("openMenu", this.onOpenMenu), e.removeListener("closeMenu", this.onCloseMenu), e.removeListener("updateSearch", this.onUpdateSearch)
        }
      }, {
        key: "open",
        value: function() {
          this.props.controller.openMenu()
        }
      }, {
        key: "updateSearch",
        value: function() {
          var e = this.props.controller,
            a = document.getElementById("menu-search"),
            t = document.getElementById("menu-search-results"),
            n = a.value;
          t.scrollTo(0, 0), e.updateSearch(n)
        }
      }, {
        key: "focusTextBox",
        value: function() {
          var e = document.getElementById("menu-search");
          e && e.focus()
        }
      }, {
        key: "selectNode",
        value: function(e) {
          var a = this.props.controller;
          a.closeMenu(), a.highlight(e), a.showInfo(e)
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            a = this.props.controller,
            t = this.state,
            n = t.open,
            r = t.searchMatchNodes,
            i = !n,
            c = [];
          return r && (c = r.map((function(a) {
            return g("div.menu-node-info", {
              onClick: function() {
                return e.selectNode(a)
              }
            }, [g(re, {
              node: a
            })])
          }))), g("div", {
            class: "menu-parent"
          }, [g("div", {
            class: ce()({
              "menu-toggle": !0,
              "menu-open": n
            }),
            onClick: function() {
              return a.toggleMenu()
            }
          }), g("div", {
            class: ce()({
              menu: !0,
              "menu-closed": i
            })
          }, [g("input", {
            type: "text",
            class: "menu-search",
            placeholder: "搜索",
            id: "menu-search",
            onClick: function() {
              return e.open()
            },
            onKeyDown: function() {
              return e.debouncedUpdateSearch()
            }
          }), g("div", {
            class: "menu-search-results",
            id: "menu-search-results"
          }, c)])])
        }
      }]) && de(t.prototype, n), r && de(t, r), a
    }(f);

    function pe(e) {
      return (pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ye(e, a) {
      for (var t = 0; t < a.length; t++) {
        var n = a[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function fe(e, a) {
      return !a || "object" !== pe(a) && "function" != typeof a ? function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : a
    }

    function ve(e) {
      return (ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function _e(e, a) {
      return (_e = Object.setPrototypeOf || function(e, a) {
        return e.__proto__ = a, e
      })(e, a)
    }
    var Se = function(e) {
        function a(e) {
          var t;
          ! function(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
          }(this, a), t = fe(this, ve(a).call(this, e));
          var n = new j.a({
            elements: Q,
            style: O,
            layout: {
              name: "preset"
            },
            selectionType: "single",
            boxSelectionEnabled: !1
          });
          n.nodes().panify().ungrabify();
          var r = new z({
              cy: n
            }),
            i = r.bus;
          return s && (window.cy = n, window.controller = r), t.state = {
            controller: r,
            cy: n
          }, i.on("showInfo", t.onShowInfo = function(e) {
            t.setState({
              infoNode: e
            })
          }), i.on("hideInfo", t.onHideInfo = function() {
            t.setState({
              infoNode: null
            })
          }), t
        }
        var t, n, r;
        return function(e, a) {
          if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), a && _e(e, a)
        }(a, e), t = a, (n = [{
          key: "componentWillUnmount",
          value: function() {
            var e = this.state.controller.bus;
            e.removeListener("showInfo", this.onShowInfo), e.removeListener("hideInfo", this.onHideInfo)
          }
        }, {
          key: "render",
          value: function() {
            var e = this.state,
              a = e.cy,
              t = e.controller,
              n = e.infoNode;
            return g("div", {
              class: "app"
            }, [g(J, {
              cy: a,
              controller: t
            }), n ? g("div", {
              class: "app-node-info"
            }, [g(re, {
              node: n
            })]) : null, g(ge, {
              controller: t
            })])
          }
        }]) && ye(t.prototype, n), r && ye(t, r), a
      }(f),
      be = document.createElement("div");
    be.setAttribute("id", "root"), document.body.appendChild(be), k(g(Se), be), console.log("你在期待什么？")
  },
  48: function(e, a) {
    var t;
    t = function() {
      return this
    }();
    try {
      t = t || new Function("return this")()
    } catch (e) {
      "object" == typeof window && (t = window)
    }
    e.exports = t
  },
  89: function(e, a, t) {
    (function(a) {
      var t = "Expected a function",
        n = NaN,
        r = "[object Symbol]",
        i = /^\s+|\s+$/g,
        c = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt,
        d = "object" == typeof a && a && a.Object === Object && a,
        u = "object" == typeof self && self && self.Object === Object && self,
        h = d || u || Function("return this")(),
        m = Object.prototype.toString,
        g = Math.max,
        p = Math.min,
        y = function() {
          return h.Date.now()
        };

      function f(e) {
        var a = typeof e;
        return !!e && ("object" == a || "function" == a)
      }

      function v(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
              return !!e && "object" == typeof e
            }(e) && m.call(e) == r
          }(e)) return n;
        if (f(e)) {
          var a = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = f(a) ? a + "" : a
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var t = o.test(e);
        return t || s.test(e) ? l(e.slice(2), t ? 2 : 8) : c.test(e) ? n : +e
      }
      e.exports = function(e, a, n) {
        var r, i, c, o, s, l, d = 0,
          u = !1,
          h = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError(t);

        function _(a) {
          var t = r,
            n = i;
          return r = i = void 0, d = a, o = e.apply(n, t)
        }

        function S(e) {
          var t = e - l;
          return void 0 === l || t >= a || t < 0 || h && e - d >= c
        }

        function b() {
          var e = y();
          if (S(e)) return w(e);
          s = setTimeout(b, function(e) {
            var t = a - (e - l);
            return h ? p(t, c - (e - d)) : t
          }(e))
        }

        function w(e) {
          return s = void 0, m && r ? _(e) : (r = i = void 0, o)
        }

        function C() {
          var e = y(),
            t = S(e);
          if (r = arguments, i = this, l = e, t) {
            if (void 0 === s) return function(e) {
              return d = e, s = setTimeout(b, a), u ? _(e) : o
            }(l);
            if (h) return s = setTimeout(b, a), _(l)
          }
          return void 0 === s && (s = setTimeout(b, a)), o
        }
        return a = v(a) || 0, f(n) && (u = !!n.leading, c = (h = "maxWait" in n) ? g(v(n.maxWait) || 0, a) : c, m = "trailing" in n ? !!n.trailing : m), C.cancel = function() {
          void 0 !== s && clearTimeout(s), d = 0, r = l = i = s = void 0
        }, C.flush = function() {
          return void 0 === s ? o : w(y())
        }, C
      }
    }).call(this, t(48))
  },
  90: function(e, a, t) {
    var n;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
      "use strict";
      var t = {}.hasOwnProperty;

      function r() {
        for (var e = [], a = 0; a < arguments.length; a++) {
          var n = arguments[a];
          if (n) {
            var i = typeof n;
            if ("string" === i || "number" === i) e.push(n);
            else if (Array.isArray(n) && n.length) {
              var c = r.apply(null, n);
              c && e.push(c)
            } else if ("object" === i)
              for (var o in n) t.call(n, o) && n[o] && e.push(o)
          }
        }
        return e.join(" ")
      }
      e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function() {
        return r
      }.apply(a, [])) || (e.exports = n)
    }()
  }
});

// 左下角图例的显示与隐藏
const cBtn = document.getElementById('colorBtn');
const colorInfo = document.getElementById('colorInfo');
const cBtn2 = document.getElementById('colorBtn2');

cBtn.addEventListener('click', () => {
  colorInfo.style.display = 'block';
  cBtn.style.display = 'none';
});

cBtn2.addEventListener('click', () => {
  colorInfo.style.display = 'none';
  cBtn.style.display = 'block';
});
