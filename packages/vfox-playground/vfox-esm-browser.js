var __create = Object.create
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getProtoOf = Object.getPrototypeOf
var __hasOwnProp = Object.prototype.hasOwnProperty
var __markAsModule = target => __defProp(target, '__esModule', { value: true })
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    )
  }
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
var __reExport = (target, module, copyDefault, desc) => {
  if ((module && typeof module === 'object') || typeof module === 'function') {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== 'default'))
        __defProp(target, key, {
          get: () => module[key],
          enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
        })
  }
  return target
}
var __toESM = (module, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module != null ? __create(__getProtoOf(module)) : {},
        'default',
        !isNodeMode && module && module.__esModule
          ? { get: () => module.default, enumerable: true }
          : { value: module, enumerable: true }
      )
    ),
    module
  )
}

// node_modules/.pnpm/safe-area-insets@1.4.1/node_modules/safe-area-insets/out/index.js
var require_out = __commonJS({
  'node_modules/.pnpm/safe-area-insets@1.4.1/node_modules/safe-area-insets/out/index.js'(
    exports,
    module
  ) {
    'use strict'
    var attrs = ['top', 'left', 'right', 'bottom']
    var inited
    var elementComputedStyle = {}
    var support
    function getSupport() {
      if (!('CSS' in window) || typeof CSS.supports != 'function') {
        support = ''
      } else if (CSS.supports('top: env(safe-area-inset-top)')) {
        support = 'env'
      } else if (CSS.supports('top: constant(safe-area-inset-top)')) {
        support = 'constant'
      } else {
        support = ''
      }
      return support
    }
    function init2() {
      support = typeof support === 'string' ? support : getSupport()
      if (!support) {
        attrs.forEach(function (attr) {
          elementComputedStyle[attr] = 0
        })
        return
      }
      function setStyle(el, style) {
        var elStyle = el.style
        Object.keys(style).forEach(function (key) {
          var val = style[key]
          elStyle[key] = val
        })
      }
      var cbs = []
      function parentReady(callback) {
        if (callback) {
          cbs.push(callback)
        } else {
          cbs.forEach(function (cb) {
            cb()
          })
        }
      }
      var passiveEvents = false
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function () {
            passiveEvents = { passive: true }
          }
        })
        window.addEventListener('test', null, opts)
      } catch (e) {}
      function addChild(parent, attr) {
        var a1 = document.createElement('div')
        var a2 = document.createElement('div')
        var a1Children = document.createElement('div')
        var a2Children = document.createElement('div')
        var W = 100
        var MAX = 1e4
        var aStyle = {
          position: 'absolute',
          width: W + 'px',
          height: '200px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          paddingBottom: support + '(safe-area-inset-' + attr + ')'
        }
        setStyle(a1, aStyle)
        setStyle(a2, aStyle)
        setStyle(a1Children, {
          transition: '0s',
          animation: 'none',
          width: '400px',
          height: '400px'
        })
        setStyle(a2Children, {
          transition: '0s',
          animation: 'none',
          width: '250%',
          height: '250%'
        })
        a1.appendChild(a1Children)
        a2.appendChild(a2Children)
        parent.appendChild(a1)
        parent.appendChild(a2)
        parentReady(function () {
          a1.scrollTop = a2.scrollTop = MAX
          var a1LastScrollTop = a1.scrollTop
          var a2LastScrollTop = a2.scrollTop
          function onScroll() {
            if (
              this.scrollTop ===
              (this === a1 ? a1LastScrollTop : a2LastScrollTop)
            ) {
              return
            }
            a1.scrollTop = a2.scrollTop = MAX
            a1LastScrollTop = a1.scrollTop
            a2LastScrollTop = a2.scrollTop
            attrChange(attr)
          }
          a1.addEventListener('scroll', onScroll, passiveEvents)
          a2.addEventListener('scroll', onScroll, passiveEvents)
        })
        var computedStyle = getComputedStyle(a1)
        Object.defineProperty(elementComputedStyle, attr, {
          configurable: true,
          get: function () {
            return parseFloat(computedStyle.paddingBottom)
          }
        })
      }
      var parentDiv = document.createElement('div')
      setStyle(parentDiv, {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '0',
        height: '0',
        zIndex: '-1',
        overflow: 'hidden',
        visibility: 'hidden'
      })
      attrs.forEach(function (key) {
        addChild(parentDiv, key)
      })
      document.body.appendChild(parentDiv)
      parentReady()
      inited = true
    }
    function getAttr(attr) {
      if (!inited) {
        init2()
      }
      return elementComputedStyle[attr]
    }
    var changeAttrs = []
    function attrChange(attr) {
      if (!changeAttrs.length) {
        setTimeout(function () {
          var style = {}
          changeAttrs.forEach(function (attr2) {
            style[attr2] = elementComputedStyle[attr2]
          })
          changeAttrs.length = 0
          callbacks3.forEach(function (callback) {
            callback(style)
          })
        }, 0)
      }
      changeAttrs.push(attr)
    }
    var callbacks3 = []
    function onChange(callback) {
      if (!getSupport()) {
        return
      }
      if (!inited) {
        init2()
      }
      if (typeof callback === 'function') {
        callbacks3.push(callback)
      }
    }
    function offChange(callback) {
      var index = callbacks3.indexOf(callback)
      if (index >= 0) {
        callbacks3.splice(index, 1)
      }
    }
    var safeAreaInsets2 = {
      get support() {
        return (
          (typeof support === 'string' ? support : getSupport()).length != 0
        )
      },
      get top() {
        return getAttr('top')
      },
      get left() {
        return getAttr('left')
      },
      get right() {
        return getAttr('right')
      },
      get bottom() {
        return getAttr('bottom')
      },
      onChange,
      offChange
    }
    module.exports = safeAreaInsets2
  }
})

// node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  'node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/dayjs.min.js'(
    exports,
    module
  ) {
    !(function (t, e) {
      typeof exports == 'object' && typeof module != 'undefined'
        ? (module.exports = e())
        : typeof define == 'function' && define.amd
        ? define(e)
        : ((t =
            typeof globalThis != 'undefined' ? globalThis : t || self).dayjs =
            e())
    })(exports, function () {
      'use strict'
      var t = 1e3,
        e = 6e4,
        n = 36e5,
        r = 'millisecond',
        i = 'second',
        s = 'minute',
        u = 'hour',
        a = 'day',
        o = 'week',
        f = 'month',
        h3 = 'quarter',
        c = 'year',
        d = 'date',
        $ = 'Invalid Date',
        l =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        y =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        M = {
          name: 'en',
          weekdays:
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
              '_'
            ),
          months:
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_'
            )
        },
        m = function (t2, e2, n2) {
          var r2 = String(t2)
          return !r2 || r2.length >= e2
            ? t2
            : '' + Array(e2 + 1 - r2.length).join(n2) + t2
        },
        g = {
          s: m,
          z: function (t2) {
            var e2 = -t2.utcOffset(),
              n2 = Math.abs(e2),
              r2 = Math.floor(n2 / 60),
              i2 = n2 % 60
            return (e2 <= 0 ? '+' : '-') + m(r2, 2, '0') + ':' + m(i2, 2, '0')
          },
          m: function t2(e2, n2) {
            if (e2.date() < n2.date()) return -t2(n2, e2)
            var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()),
              i2 = e2.clone().add(r2, f),
              s2 = n2 - i2 < 0,
              u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f)
            return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0)
          },
          a: function (t2) {
            return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2)
          },
          p: function (t2) {
            return (
              { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h3 }[
                t2
              ] ||
              String(t2 || '')
                .toLowerCase()
                .replace(/s$/, '')
            )
          },
          u: function (t2) {
            return t2 === void 0
          }
        },
        D = 'en',
        v = {}
      v[D] = M
      var p = function (t2) {
          return t2 instanceof _
        },
        S = function (t2, e2, n2) {
          var r2
          if (!t2) return D
          if (typeof t2 == 'string')
            v[t2] && (r2 = t2), e2 && ((v[t2] = e2), (r2 = t2))
          else {
            var i2 = t2.name
            ;(v[i2] = t2), (r2 = i2)
          }
          return !n2 && r2 && (D = r2), r2 || (!n2 && D)
        },
        w = function (t2, e2) {
          if (p(t2)) return t2.clone()
          var n2 = typeof e2 == 'object' ? e2 : {}
          return (n2.date = t2), (n2.args = arguments), new _(n2)
        },
        O = g
      ;(O.l = S),
        (O.i = p),
        (O.w = function (t2, e2) {
          return w(t2, {
            locale: e2.$L,
            utc: e2.$u,
            x: e2.$x,
            $offset: e2.$offset
          })
        })
      var _ = (function () {
          function M2(t2) {
            ;(this.$L = S(t2.locale, null, true)), this.parse(t2)
          }
          var m2 = M2.prototype
          return (
            (m2.parse = function (t2) {
              ;(this.$d = (function (t3) {
                var e2 = t3.date,
                  n2 = t3.utc
                if (e2 === null) return new Date(NaN)
                if (O.u(e2)) return new Date()
                if (e2 instanceof Date) return new Date(e2)
                if (typeof e2 == 'string' && !/Z$/i.test(e2)) {
                  var r2 = e2.match(l)
                  if (r2) {
                    var i2 = r2[2] - 1 || 0,
                      s2 = (r2[7] || '0').substring(0, 3)
                    return n2
                      ? new Date(
                          Date.UTC(
                            r2[1],
                            i2,
                            r2[3] || 1,
                            r2[4] || 0,
                            r2[5] || 0,
                            r2[6] || 0,
                            s2
                          )
                        )
                      : new Date(
                          r2[1],
                          i2,
                          r2[3] || 1,
                          r2[4] || 0,
                          r2[5] || 0,
                          r2[6] || 0,
                          s2
                        )
                  }
                }
                return new Date(e2)
              })(t2)),
                (this.$x = t2.x || {}),
                this.init()
            }),
            (m2.init = function () {
              var t2 = this.$d
              ;(this.$y = t2.getFullYear()),
                (this.$M = t2.getMonth()),
                (this.$D = t2.getDate()),
                (this.$W = t2.getDay()),
                (this.$H = t2.getHours()),
                (this.$m = t2.getMinutes()),
                (this.$s = t2.getSeconds()),
                (this.$ms = t2.getMilliseconds())
            }),
            (m2.$utils = function () {
              return O
            }),
            (m2.isValid = function () {
              return !(this.$d.toString() === $)
            }),
            (m2.isSame = function (t2, e2) {
              var n2 = w(t2)
              return this.startOf(e2) <= n2 && n2 <= this.endOf(e2)
            }),
            (m2.isAfter = function (t2, e2) {
              return w(t2) < this.startOf(e2)
            }),
            (m2.isBefore = function (t2, e2) {
              return this.endOf(e2) < w(t2)
            }),
            (m2.$g = function (t2, e2, n2) {
              return O.u(t2) ? this[e2] : this.set(n2, t2)
            }),
            (m2.unix = function () {
              return Math.floor(this.valueOf() / 1e3)
            }),
            (m2.valueOf = function () {
              return this.$d.getTime()
            }),
            (m2.startOf = function (t2, e2) {
              var n2 = this,
                r2 = !!O.u(e2) || e2,
                h4 = O.p(t2),
                $2 = function (t3, e3) {
                  var i2 = O.w(
                    n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3),
                    n2
                  )
                  return r2 ? i2 : i2.endOf(a)
                },
                l2 = function (t3, e3) {
                  return O.w(
                    n2
                      .toDate()
                      [t3].apply(
                        n2.toDate('s'),
                        (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)
                      ),
                    n2
                  )
                },
                y2 = this.$W,
                M3 = this.$M,
                m3 = this.$D,
                g2 = 'set' + (this.$u ? 'UTC' : '')
              switch (h4) {
                case c:
                  return r2 ? $2(1, 0) : $2(31, 11)
                case f:
                  return r2 ? $2(1, M3) : $2(0, M3 + 1)
                case o:
                  var D2 = this.$locale().weekStart || 0,
                    v2 = (y2 < D2 ? y2 + 7 : y2) - D2
                  return $2(r2 ? m3 - v2 : m3 + (6 - v2), M3)
                case a:
                case d:
                  return l2(g2 + 'Hours', 0)
                case u:
                  return l2(g2 + 'Minutes', 1)
                case s:
                  return l2(g2 + 'Seconds', 2)
                case i:
                  return l2(g2 + 'Milliseconds', 3)
                default:
                  return this.clone()
              }
            }),
            (m2.endOf = function (t2) {
              return this.startOf(t2, false)
            }),
            (m2.$set = function (t2, e2) {
              var n2,
                o2 = O.p(t2),
                h4 = 'set' + (this.$u ? 'UTC' : ''),
                $2 = ((n2 = {}),
                (n2[a] = h4 + 'Date'),
                (n2[d] = h4 + 'Date'),
                (n2[f] = h4 + 'Month'),
                (n2[c] = h4 + 'FullYear'),
                (n2[u] = h4 + 'Hours'),
                (n2[s] = h4 + 'Minutes'),
                (n2[i] = h4 + 'Seconds'),
                (n2[r] = h4 + 'Milliseconds'),
                n2)[o2],
                l2 = o2 === a ? this.$D + (e2 - this.$W) : e2
              if (o2 === f || o2 === c) {
                var y2 = this.clone().set(d, 1)
                y2.$d[$2](l2),
                  y2.init(),
                  (this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d)
              } else $2 && this.$d[$2](l2)
              return this.init(), this
            }),
            (m2.set = function (t2, e2) {
              return this.clone().$set(t2, e2)
            }),
            (m2.get = function (t2) {
              return this[O.p(t2)]()
            }),
            (m2.add = function (r2, h4) {
              var d2,
                $2 = this
              r2 = Number(r2)
              var l2 = O.p(h4),
                y2 = function (t2) {
                  var e2 = w($2)
                  return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2)
                }
              if (l2 === f) return this.set(f, this.$M + r2)
              if (l2 === c) return this.set(c, this.$y + r2)
              if (l2 === a) return y2(1)
              if (l2 === o) return y2(7)
              var M3 =
                  ((d2 = {}), (d2[s] = e), (d2[u] = n), (d2[i] = t), d2)[l2] ||
                  1,
                m3 = this.$d.getTime() + r2 * M3
              return O.w(m3, this)
            }),
            (m2.subtract = function (t2, e2) {
              return this.add(-1 * t2, e2)
            }),
            (m2.format = function (t2) {
              var e2 = this,
                n2 = this.$locale()
              if (!this.isValid()) return n2.invalidDate || $
              var r2 = t2 || 'YYYY-MM-DDTHH:mm:ssZ',
                i2 = O.z(this),
                s2 = this.$H,
                u2 = this.$m,
                a2 = this.$M,
                o2 = n2.weekdays,
                f2 = n2.months,
                h4 = function (t3, n3, i3, s3) {
                  return (t3 && (t3[n3] || t3(e2, r2))) || i3[n3].substr(0, s3)
                },
                c2 = function (t3) {
                  return O.s(s2 % 12 || 12, t3, '0')
                },
                d2 =
                  n2.meridiem ||
                  function (t3, e3, n3) {
                    var r3 = t3 < 12 ? 'AM' : 'PM'
                    return n3 ? r3.toLowerCase() : r3
                  },
                l2 = {
                  YY: String(this.$y).slice(-2),
                  YYYY: this.$y,
                  M: a2 + 1,
                  MM: O.s(a2 + 1, 2, '0'),
                  MMM: h4(n2.monthsShort, a2, f2, 3),
                  MMMM: h4(f2, a2),
                  D: this.$D,
                  DD: O.s(this.$D, 2, '0'),
                  d: String(this.$W),
                  dd: h4(n2.weekdaysMin, this.$W, o2, 2),
                  ddd: h4(n2.weekdaysShort, this.$W, o2, 3),
                  dddd: o2[this.$W],
                  H: String(s2),
                  HH: O.s(s2, 2, '0'),
                  h: c2(1),
                  hh: c2(2),
                  a: d2(s2, u2, true),
                  A: d2(s2, u2, false),
                  m: String(u2),
                  mm: O.s(u2, 2, '0'),
                  s: String(this.$s),
                  ss: O.s(this.$s, 2, '0'),
                  SSS: O.s(this.$ms, 3, '0'),
                  Z: i2
                }
              return r2.replace(y, function (t3, e3) {
                return e3 || l2[t3] || i2.replace(':', '')
              })
            }),
            (m2.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }),
            (m2.diff = function (r2, d2, $2) {
              var l2,
                y2 = O.p(d2),
                M3 = w(r2),
                m3 = (M3.utcOffset() - this.utcOffset()) * e,
                g2 = this - M3,
                D2 = O.m(this, M3)
              return (
                (D2 =
                  ((l2 = {}),
                  (l2[c] = D2 / 12),
                  (l2[f] = D2),
                  (l2[h3] = D2 / 3),
                  (l2[o] = (g2 - m3) / 6048e5),
                  (l2[a] = (g2 - m3) / 864e5),
                  (l2[u] = g2 / n),
                  (l2[s] = g2 / e),
                  (l2[i] = g2 / t),
                  l2)[y2] || g2),
                $2 ? D2 : O.a(D2)
              )
            }),
            (m2.daysInMonth = function () {
              return this.endOf(f).$D
            }),
            (m2.$locale = function () {
              return v[this.$L]
            }),
            (m2.locale = function (t2, e2) {
              if (!t2) return this.$L
              var n2 = this.clone(),
                r2 = S(t2, e2, true)
              return r2 && (n2.$L = r2), n2
            }),
            (m2.clone = function () {
              return O.w(this.$d, this)
            }),
            (m2.toDate = function () {
              return new Date(this.valueOf())
            }),
            (m2.toJSON = function () {
              return this.isValid() ? this.toISOString() : null
            }),
            (m2.toISOString = function () {
              return this.$d.toISOString()
            }),
            (m2.toString = function () {
              return this.$d.toUTCString()
            }),
            M2
          )
        })(),
        b = _.prototype
      return (
        (w.prototype = b),
        [
          ['$ms', r],
          ['$s', i],
          ['$m', s],
          ['$H', u],
          ['$W', a],
          ['$M', f],
          ['$y', c],
          ['$D', d]
        ].forEach(function (t2) {
          b[t2[1]] = function (e2) {
            return this.$g(e2, t2[0], t2[1])
          }
        }),
        (w.extend = function (t2, e2) {
          return t2.$i || (t2(e2, _, w), (t2.$i = true)), w
        }),
        (w.locale = S),
        (w.isDayjs = p),
        (w.unix = function (t2) {
          return w(1e3 * t2)
        }),
        (w.en = v[D]),
        (w.Ls = v),
        (w.p = {}),
        w
      )
    })
  }
})

// node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/toArray.js
var require_toArray = __commonJS({
  'node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/toArray.js'(
    exports,
    module
  ) {
    !(function (t, e) {
      typeof exports == 'object' && typeof module != 'undefined'
        ? (module.exports = e())
        : typeof define == 'function' && define.amd
        ? define(e)
        : ((t =
            typeof globalThis != 'undefined'
              ? globalThis
              : t || self).dayjs_plugin_toArray = e())
    })(exports, function () {
      'use strict'
      return function (t, e) {
        e.prototype.toArray = function () {
          return [
            this.$y,
            this.$M,
            this.$D,
            this.$H,
            this.$m,
            this.$s,
            this.$ms
          ]
        }
      }
    })
  }
})

// node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  'node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/customParseFormat.js'(
    exports,
    module
  ) {
    !(function (t, e) {
      typeof exports == 'object' && typeof module != 'undefined'
        ? (module.exports = e())
        : typeof define == 'function' && define.amd
        ? define(e)
        : ((t =
            typeof globalThis != 'undefined'
              ? globalThis
              : t || self).dayjs_plugin_customParseFormat = e())
    })(exports, function () {
      'use strict'
      var t = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A'
        },
        e =
          /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
        n = /\d\d/,
        r = /\d\d?/,
        i = /\d*[^\s\d-_:/()]+/,
        o = {},
        s = function (t2) {
          return (t2 = +t2) + (t2 > 68 ? 1900 : 2e3)
        }
      var a = function (t2) {
          return function (e2) {
            this[t2] = +e2
          }
        },
        f = [
          /[+-]\d\d:?(\d\d)?|Z/,
          function (t2) {
            ;(this.zone || (this.zone = {})).offset = (function (t3) {
              if (!t3) return 0
              if (t3 === 'Z') return 0
              var e2 = t3.match(/([+-]|\d\d)/g),
                n2 = 60 * e2[1] + (+e2[2] || 0)
              return n2 === 0 ? 0 : e2[0] === '+' ? -n2 : n2
            })(t2)
          }
        ],
        u = function (t2) {
          var e2 = o[t2]
          return e2 && (e2.indexOf ? e2 : e2.s.concat(e2.f))
        },
        h3 = function (t2, e2) {
          var n2,
            r2 = o.meridiem
          if (r2) {
            for (var i2 = 1; i2 <= 24; i2 += 1)
              if (t2.indexOf(r2(i2, 0, e2)) > -1) {
                n2 = i2 > 12
                break
              }
          } else n2 = t2 === (e2 ? 'pm' : 'PM')
          return n2
        },
        d = {
          A: [
            i,
            function (t2) {
              this.afternoon = h3(t2, false)
            }
          ],
          a: [
            i,
            function (t2) {
              this.afternoon = h3(t2, true)
            }
          ],
          S: [
            /\d/,
            function (t2) {
              this.milliseconds = 100 * +t2
            }
          ],
          SS: [
            n,
            function (t2) {
              this.milliseconds = 10 * +t2
            }
          ],
          SSS: [
            /\d{3}/,
            function (t2) {
              this.milliseconds = +t2
            }
          ],
          s: [r, a('seconds')],
          ss: [r, a('seconds')],
          m: [r, a('minutes')],
          mm: [r, a('minutes')],
          H: [r, a('hours')],
          h: [r, a('hours')],
          HH: [r, a('hours')],
          hh: [r, a('hours')],
          D: [r, a('day')],
          DD: [n, a('day')],
          Do: [
            i,
            function (t2) {
              var e2 = o.ordinal,
                n2 = t2.match(/\d+/)
              if (((this.day = n2[0]), e2))
                for (var r2 = 1; r2 <= 31; r2 += 1)
                  e2(r2).replace(/\[|\]/g, '') === t2 && (this.day = r2)
            }
          ],
          M: [r, a('month')],
          MM: [n, a('month')],
          MMM: [
            i,
            function (t2) {
              var e2 = u('months'),
                n2 =
                  (
                    u('monthsShort') ||
                    e2.map(function (t3) {
                      return t3.substr(0, 3)
                    })
                  ).indexOf(t2) + 1
              if (n2 < 1) throw new Error()
              this.month = n2 % 12 || n2
            }
          ],
          MMMM: [
            i,
            function (t2) {
              var e2 = u('months').indexOf(t2) + 1
              if (e2 < 1) throw new Error()
              this.month = e2 % 12 || e2
            }
          ],
          Y: [/[+-]?\d+/, a('year')],
          YY: [
            n,
            function (t2) {
              this.year = s(t2)
            }
          ],
          YYYY: [/\d{4}/, a('year')],
          Z: f,
          ZZ: f
        }
      function c(n2) {
        var r2, i2
        ;(r2 = n2), (i2 = o && o.formats)
        for (
          var s2 = (n2 = r2.replace(
              /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
              function (e2, n3, r3) {
                var o2 = r3 && r3.toUpperCase()
                return (
                  n3 ||
                  i2[r3] ||
                  t[r3] ||
                  i2[o2].replace(
                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                    function (t2, e3, n4) {
                      return e3 || n4.slice(1)
                    }
                  )
                )
              }
            )).match(e),
            a2 = s2.length,
            f2 = 0;
          f2 < a2;
          f2 += 1
        ) {
          var u2 = s2[f2],
            h4 = d[u2],
            c2 = h4 && h4[0],
            l = h4 && h4[1]
          s2[f2] = l ? { regex: c2, parser: l } : u2.replace(/^\[|\]$/g, '')
        }
        return function (t2) {
          for (var e2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = s2[n3]
            if (typeof i3 == 'string') r3 += i3.length
            else {
              var o2 = i3.regex,
                f3 = i3.parser,
                u3 = t2.substr(r3),
                h5 = o2.exec(u3)[0]
              f3.call(e2, h5), (t2 = t2.replace(h5, ''))
            }
          }
          return (
            (function (t3) {
              var e3 = t3.afternoon
              if (e3 !== void 0) {
                var n4 = t3.hours
                e3 ? n4 < 12 && (t3.hours += 12) : n4 === 12 && (t3.hours = 0),
                  delete t3.afternoon
              }
            })(e2),
            e2
          )
        }
      }
      return function (t2, e2, n2) {
        ;(n2.p.customParseFormat = true),
          t2 && t2.parseTwoDigitYear && (s = t2.parseTwoDigitYear)
        var r2 = e2.prototype,
          i2 = r2.parse
        r2.parse = function (t3) {
          var e3 = t3.date,
            r3 = t3.utc,
            s2 = t3.args
          this.$u = r3
          var a2 = s2[1]
          if (typeof a2 == 'string') {
            var f2 = s2[2] === true,
              u2 = s2[3] === true,
              h4 = f2 || u2,
              d2 = s2[2]
            u2 && (d2 = s2[2]),
              (o = this.$locale()),
              !f2 && d2 && (o = n2.Ls[d2]),
              (this.$d = (function (t4, e4, n3) {
                try {
                  if (['x', 'X'].indexOf(e4) > -1)
                    return new Date((e4 === 'X' ? 1e3 : 1) * t4)
                  var r4 = c(e4)(t4),
                    i3 = r4.year,
                    o2 = r4.month,
                    s3 = r4.day,
                    a3 = r4.hours,
                    f3 = r4.minutes,
                    u3 = r4.seconds,
                    h5 = r4.milliseconds,
                    d3 = r4.zone,
                    l2 = new Date(),
                    m2 = s3 || (i3 || o2 ? 1 : l2.getDate()),
                    M2 = i3 || l2.getFullYear(),
                    Y = 0
                  ;(i3 && !o2) || (Y = o2 > 0 ? o2 - 1 : l2.getMonth())
                  var p = a3 || 0,
                    v = f3 || 0,
                    D = u3 || 0,
                    g = h5 || 0
                  return d3
                    ? new Date(
                        Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)
                      )
                    : n3
                    ? new Date(Date.UTC(M2, Y, m2, p, v, D, g))
                    : new Date(M2, Y, m2, p, v, D, g)
                } catch (t5) {
                  return new Date('')
                }
              })(e3, a2, r3)),
              this.init(),
              d2 && d2 !== true && (this.$L = this.locale(d2).$L),
              h4 && e3 != this.format(a2) && (this.$d = new Date('')),
              (o = {})
          } else if (a2 instanceof Array)
            for (var l = a2.length, m = 1; m <= l; m += 1) {
              s2[1] = a2[m - 1]
              var M = n2.apply(this, s2)
              if (M.isValid()) {
                ;(this.$d = M.$d), (this.$L = M.$L), this.init()
                break
              }
              m === l && (this.$d = new Date(''))
            }
          else i2.call(this, t3)
        }
      }
    })
  }
})

// src/components/install.ts
var install_exports = {}
__export(install_exports, {
  ActionSheet: () => install53,
  ActivityIndicator: () => install11,
  Avatar: () => install91,
  AvatarGroup: () => install92,
  BackTop: () => install58,
  Badge: () => install23,
  Button: () => install2,
  ButtonGroup: () => install3,
  Calendar: () => install37,
  CalendarPopup: () => install36,
  CalendarView: () => install35,
  Cascader: () => install27,
  CascaderPopup: () => install25,
  Cell: () => install38,
  Checkbox: () => install17,
  CheckboxGroup: () => install18,
  CircleProgress: () => install99,
  Col: () => install82,
  Collapse: () => install84,
  CollapseItem: () => install85,
  Copy: () => install100,
  CountDown: () => install87,
  CountUp: () => install98,
  DatePicker: () => install48,
  DatePickerPopup: () => install47,
  DatePickerView: () => install49,
  Dialog: () => install45,
  Divider: () => install83,
  Drawer: () => install7,
  Dropdown: () => install9,
  Empty: () => install30,
  Fixed: () => install70,
  FlatList: () => install74,
  Form: () => install20,
  FormFooter: () => install22,
  FormItem: () => install21,
  Group: () => install67,
  Icon: () => install,
  Image: () => install4,
  ImagePreview: () => install44,
  ImageUploader: () => install46,
  IndexView: () => install68,
  IndexViewItem: () => install69,
  Input: () => install19,
  LoadMore: () => install73,
  Modal: () => install8,
  NavBar: () => install6,
  NoticeBar: () => install51,
  Notify: () => install52,
  NumberKeyboard: () => install41,
  Order: () => install42,
  Pagination: () => install71,
  Picker: () => install33,
  PickerPopup: () => install32,
  PickerView: () => install31,
  PopDialog: () => install54,
  PopMenu: () => install59,
  Popover: () => install5,
  Price: () => install90,
  Progress: () => install86,
  Radio: () => install15,
  RadioGroup: () => install16,
  Range: () => install50,
  Rate: () => install28,
  Result: () => install96,
  Row: () => install81,
  ScrollTab: () => install65,
  ScrollTabItem: () => install66,
  ScrollView: () => install12,
  SearchBar: () => install40,
  SideTab: () => install56,
  Skeleton: () => install75,
  SkeletonAvatar: () => install76,
  SkeletonButton: () => install79,
  SkeletonImage: () => install80,
  SkeletonParagraph: () => install78,
  SkeletonTitle: () => install77,
  Slider: () => install14,
  Step: () => install89,
  Stepper: () => install29,
  Steps: () => install88,
  Sticky: () => install62,
  StickyView: () => install63,
  StickyViewItem: () => install64,
  Stopwatch: () => install95,
  SwipeCell: () => install55,
  Swiper: () => install43,
  SwiperItem: () => install72,
  Switch: () => install13,
  Tab: () => install24,
  TabBar: () => install57,
  TabView: () => install60,
  TabViewItem: () => install61,
  Tag: () => install39,
  TimeAgo: () => install97,
  Timeline: () => install93,
  TimelineItem: () => install94,
  Toast: () => install34
})

// src/helpers/util.ts
function camelCase2KebabCase(name) {
  const arr = []
  for (let i = 0; i < name.length; i++) {
    let letter = name[i]
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      letter = letter.toLowerCase()
      if (i !== 0) {
        arr.push('-')
      }
    }
    arr.push(letter)
  }
  return arr.join('')
}
function isObject(object) {
  return typeof object === 'object' && object !== null
}
function isNumber(object) {
  return typeof object === 'number' && isFinite(object)
}
var isNumeric = object => {
  return (
    isNumber(object) ||
    (typeof object === 'string' && isNumber(parseFloat(object)))
  )
}
function isInteger(object) {
  return isNumber(object) && object % 1 === 0
}
var isEmptyObject = object => {
  return typeof object === 'object' && JSON.stringify(object) === '{}'
}
var isStringNumberMix = object => {
  return typeof object === 'string' || typeof object === 'number'
}
var createArrayValidator = itemValidator => {
  const validator = object => {
    let is = false
    if (Array.isArray(object)) {
      is = true
      for (let i = 0; i < object.length; i++) {
        if (!itemValidator(object[i])) {
          is = false
          break
        }
      }
    }
    return is
  }
  return validator
}
var isNumberArray = createArrayValidator(object => typeof object === 'number')
var isStringArray = createArrayValidator(object => typeof object === 'string')
var stringMix2StringArray = object => {
  return isStringArray(object)
    ? object
    : typeof object === 'string'
    ? [object]
    : []
}
var isStringNumberMixArray = createArrayValidator(object =>
  isStringNumberMix(object)
)
var isDateArray = createArrayValidator(object => object instanceof Date)
function isSameArray(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] instanceof Date && b[i] instanceof Date) {
        if (!isSameDate(a[i], b[i])) {
          return false
        }
      } else {
        if (a[i] != b[i]) {
          return false
        }
      }
    }
  } else {
    return false
  }
  return true
}
function isSameDate(a, b) {
  return a.getTime() === b.getTime()
}
var isEmpty = object => {
  return (
    object == null ||
    object === '' ||
    object === '0' ||
    object === false ||
    (typeof object === 'number' && (object == 0 || isNaN(object))) ||
    (Array.isArray(object) && object.length === 0) ||
    isEmptyObject(object)
  )
}
var noop = function () {}
function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key)
}
function objectForEach(object, callback) {
  if (isObject(object)) {
    const obj2 = object
    for (const k in obj2) {
      if (hasOwnProperty(obj2, k)) {
        callback(obj2[k], k)
      }
    }
  }
}
function cloneData(object) {
  return JSON.parse(JSON.stringify(object))
}
function capitalize(value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
function rangeNumber(number, min, max) {
  return Math.min(max, Math.max(min, number))
}
function rangeInteger(number, min, max) {
  let num
  if (typeof number === 'string') {
    if (isNumeric(number)) {
      num = parseFloat(number)
    } else {
      num = min
    }
  } else {
    num = number
  }
  return rangeNumber(Math.round(num), Math.ceil(min), Math.floor(max))
}
var isInNumberRange = (number, min, max) => {
  return isNumber(number) && number >= min && number <= max
}
var isPromiseLike = object => {
  return (
    (isObject(object) || typeof object === 'function') &&
    typeof object.then === 'function'
  )
}
var isURL = object => {
  return (
    typeof object === 'string' &&
    /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?(@?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(
      object
    )
  )
}
function thousands(number) {
  const str = number.toString()
  return str.replace(
    str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g,
    '$1,'
  )
}
function simpleNumber(number) {
  if (!isNumber(number)) {
    return '0'
  }
  function toFixed(number2) {
    return number2.toString().substr(0, 4).replace(/\.$/, '')
  }
  number = Math.floor(number)
  if (number > 1e8) {
    number = number / 1e8
    if (number > 999) {
      return '999y+'
    }
    return toFixed(number) + 'y'
  } else if (number > 1e4) {
    return toFixed(number / 1e4) + 'w'
  }
  return number.toString()
}

// src/helpers/with-install.ts
var withInstall = function (component) {
  const _component = Object.assign(component, {
    install(app) {
      app.component(component.name, component)
    }
  })
  return _component
}
var multiWithInstall = function (component, moreComponents) {
  const _component = Object.assign(component, {
    install(app) {
      app.component(component.name, component)
      moreComponents.forEach(moreComponent => {
        app.component(moreComponent.name, moreComponent)
      })
    }
  })
  return _component
}
var withNoopInstall = function (component) {
  const _component = Object.assign(component, {
    install: noop
  })
  return _component
}

// vue:./Button.vue
import {
  inject as inject2,
  defineComponent as defineComponent3,
  computed as computed3
} from 'vue'

// vue:./Icon.vue
import { computed as computed2, defineComponent as defineComponent2 } from 'vue'

// vue:./SvgIcon.vue
import { computed, defineComponent } from 'vue'

// src/Icon/icons.js
var commonjsGlobal =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : typeof self !== 'undefined'
    ? self
    : {}
var deepmerge = { exports: {} }
;(function (module, exports) {
  ;(function (root, factory) {
    {
      module.exports = factory()
    }
  })(commonjsGlobal, function () {
    function isMergeableObject(val) {
      var nonNullObject = val && typeof val === 'object'
      return (
        nonNullObject &&
        Object.prototype.toString.call(val) !== '[object RegExp]' &&
        Object.prototype.toString.call(val) !== '[object Date]'
      )
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {}
    }
    function cloneIfNecessary(value, optionsArgument) {
      var clone2 = optionsArgument && optionsArgument.clone === true
      return clone2 && isMergeableObject(value)
        ? deepmerge2(emptyTarget(value), value, optionsArgument)
        : value
    }
    function defaultArrayMerge(target, source, optionsArgument) {
      var destination = target.slice()
      source.forEach(function (e, i) {
        if (typeof destination[i] === 'undefined') {
          destination[i] = cloneIfNecessary(e, optionsArgument)
        } else if (isMergeableObject(e)) {
          destination[i] = deepmerge2(target[i], e, optionsArgument)
        } else if (target.indexOf(e) === -1) {
          destination.push(cloneIfNecessary(e, optionsArgument))
        }
      })
      return destination
    }
    function mergeObject(target, source, optionsArgument) {
      var destination = {}
      if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
          destination[key] = cloneIfNecessary(target[key], optionsArgument)
        })
      }
      Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
          destination[key] = cloneIfNecessary(source[key], optionsArgument)
        } else {
          destination[key] = deepmerge2(
            target[key],
            source[key],
            optionsArgument
          )
        }
      })
      return destination
    }
    function deepmerge2(target, source, optionsArgument) {
      var array = Array.isArray(source)
      var options = optionsArgument || { arrayMerge: defaultArrayMerge }
      var arrayMerge = options.arrayMerge || defaultArrayMerge
      if (array) {
        return Array.isArray(target)
          ? arrayMerge(target, source, optionsArgument)
          : cloneIfNecessary(source, optionsArgument)
      } else {
        return mergeObject(target, source, optionsArgument)
      }
    }
    deepmerge2.all = function deepmergeAll(array, optionsArgument) {
      if (!Array.isArray(array) || array.length < 2) {
        throw new Error(
          'first argument should be an array with at least two elements'
        )
      }
      return array.reduce(function (prev, next) {
        return deepmerge2(prev, next, optionsArgument)
      })
    }
    return deepmerge2
  })
})(deepmerge)
var merge = deepmerge.exports
function mitt(all) {
  all = all || /* @__PURE__ */ Object.create(null)
  return {
    on: function on2(type, handler) {
      ;(all[type] || (all[type] = [])).push(handler)
    },
    off: function off2(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1)
      }
    },
    emit: function emit(type, evt) {
      ;(all[type] || []).map(function (handler) {
        handler(evt)
      })
      ;(all['*'] || []).map(function (handler) {
        handler(type, evt)
      })
    }
  }
}
var namespaces$1 = { exports: {} }
;(function (module, exports) {
  const namespaces2 = {
    svg: {
      name: 'xmlns',
      uri: 'http://www.w3.org/2000/svg'
    },
    xlink: {
      name: 'xmlns:xlink',
      uri: 'http://www.w3.org/1999/xlink'
    }
  }
  exports.default = namespaces2
  module.exports = exports.default
})(namespaces$1, namespaces$1.exports)
var namespaces = namespaces$1.exports
function objectToAttrsString(attrs) {
  return Object.keys(attrs)
    .map(attr => {
      const value = attrs[attr].toString().replace(/"/g, '&quot;')
      return `${attr}="${value}"`
    })
    .join(' ')
}
var { svg: svg$1, xlink: xlink$1 } = namespaces
var defaultAttrs = {
  [svg$1.name]: svg$1.uri,
  [xlink$1.name]: xlink$1.uri
}
function wrapInSvgString(content = '', attributes) {
  const attrs = merge(defaultAttrs, attributes || {})
  const attrsRendered = objectToAttrsString(attrs)
  return `<svg ${attrsRendered}>${content}</svg>`
}
var { svg, xlink } = namespaces
var defaultConfig$1 = {
  attrs: {
    [svg.name]: svg.uri,
    [xlink.name]: xlink.uri,
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),
    'aria-hidden': 'true'
  }
}
var Sprite = class {
  constructor(config) {
    this.config = merge(defaultConfig$1, config || {})
    this.symbols = []
  }
  add(symbol2) {
    const { symbols } = this
    const existing = this.find(symbol2.id)
    if (existing) {
      symbols[symbols.indexOf(existing)] = symbol2
      return false
    }
    symbols.push(symbol2)
    return true
  }
  remove(id) {
    const { symbols } = this
    const symbol2 = this.find(id)
    if (symbol2) {
      symbols.splice(symbols.indexOf(symbol2), 1)
      symbol2.destroy()
      return true
    }
    return false
  }
  find(id) {
    return this.symbols.filter(s => s.id === id)[0] || null
  }
  has(id) {
    return this.find(id) !== null
  }
  stringify() {
    const { attrs } = this.config
    const stringifiedSymbols = this.symbols.map(s => s.stringify()).join('')
    return wrapInSvgString(stringifiedSymbols, attrs)
  }
  toString() {
    return this.stringify()
  }
  destroy() {
    this.symbols.forEach(s => s.destroy())
  }
}
var SpriteSymbol = class {
  constructor({ id, viewBox, content }) {
    this.id = id
    this.viewBox = viewBox
    this.content = content
  }
  stringify() {
    return this.content
  }
  toString() {
    return this.stringify()
  }
  destroy() {
    ;['id', 'viewBox', 'content'].forEach(prop => delete this[prop])
  }
}
function parse(content) {
  const hasImportNode = !!document.importNode
  const doc = new DOMParser().parseFromString(
    content,
    'image/svg+xml'
  ).documentElement
  if (hasImportNode) {
    return document.importNode(doc, true)
  }
  return doc
}
var BrowserSpriteSymbol = class extends SpriteSymbol {
  get isMounted() {
    return !!this.node
  }
  static createFromExistingNode(node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    })
  }
  destroy() {
    if (this.isMounted) {
      this.unmount()
    }
    super.destroy()
  }
  mount(target) {
    if (this.isMounted) {
      return this.node
    }
    const mountTarget =
      typeof target === 'string' ? document.querySelector(target) : target
    const node = this.render()
    this.node = node
    mountTarget.appendChild(node)
    return node
  }
  render() {
    const content = this.stringify()
    return parse(wrapInSvgString(content)).childNodes[0]
  }
  unmount() {
    this.node.parentNode.removeChild(this.node)
  }
}
var defaultConfig = {
  autoConfigure: true,
  mountTo: 'body',
  syncUrlsWithBaseTag: false,
  listenLocationChangeEvent: true,
  locationChangeEvent: 'locationChange',
  locationChangeAngularEmitter: false,
  usagesToUpdate: 'use[*|href]',
  moveGradientsOutsideSymbol: false
}
function arrayFrom(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0)
}
var browser = {
  isChrome: () => /chrome/i.test(navigator.userAgent),
  isFirefox: () => /firefox/i.test(navigator.userAgent),
  isIE: () =>
    /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent),
  isEdge: () => /edge/i.test(navigator.userAgent)
}
function dispatchEvent(name, data) {
  const event = document.createEvent('CustomEvent')
  event.initCustomEvent(name, false, false, data)
  window.dispatchEvent(event)
}
function evalStylesIEWorkaround(node) {
  const updatedNodes = []
  arrayFrom(node.querySelectorAll('style')).forEach(style => {
    style.textContent += ''
    updatedNodes.push(style)
  })
  return updatedNodes
}
function getUrlWithoutFragment(url) {
  return (url || window.location.href).split('#')[0]
}
function locationChangeAngularEmitter(eventName) {
  angular.module('ng').run([
    '$rootScope',
    $rootScope => {
      $rootScope.$on('$locationChangeSuccess', (e, newUrl, oldUrl) => {
        dispatchEvent(eventName, { oldUrl, newUrl })
      })
    }
  ])
}
var defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath'
function moveGradientsOutsideSymbol(svg2, selector = defaultSelector) {
  arrayFrom(svg2.querySelectorAll('symbol')).forEach(symbol2 => {
    arrayFrom(symbol2.querySelectorAll(selector)).forEach(node => {
      symbol2.parentNode.insertBefore(node, symbol2)
    })
  })
  return svg2
}
function selectAttributes(nodes, matcher) {
  const attrs = arrayFrom(nodes).reduce((acc, node) => {
    if (!node.attributes) {
      return acc
    }
    const arrayfied = arrayFrom(node.attributes)
    const matched = matcher ? arrayfied.filter(matcher) : arrayfied
    return acc.concat(matched)
  }, [])
  return attrs
}
var xLinkNS = namespaces.xlink.uri
var xLinkAttrName = 'xlink:href'
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g
function encoder(url) {
  return url.replace(specialUrlCharsPattern, match => {
    return `%${match[0].charCodeAt(0).toString(16).toUpperCase()}`
  })
}
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(node => {
    const href = node.getAttribute(xLinkAttrName)
    if (href && href.indexOf(startsWith) === 0) {
      const newUrl = href.replace(startsWith, replaceWith)
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl)
    }
  })
  return nodes
}
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
]
var attSelector = attList.map(attr => `[${attr}]`).join(',')
function updateUrls(svg2, references, startsWith, replaceWith) {
  const startsWithEncoded = encoder(startsWith)
  const replaceWithEncoded = encoder(replaceWith)
  const nodes = svg2.querySelectorAll(attSelector)
  const attrs = selectAttributes(nodes, ({ localName, value }) => {
    return (
      attList.indexOf(localName) !== -1 &&
      value.indexOf(`url(${startsWithEncoded}`) !== -1
    )
  })
  attrs.forEach(
    attr =>
      (attr.value = attr.value.replace(
        new RegExp(escapeRegExp(startsWithEncoded), 'g'),
        replaceWithEncoded
      ))
  )
  updateReferences(references, startsWithEncoded, replaceWithEncoded)
}
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
}
var BrowserSprite = class extends Sprite {
  constructor(cfg = {}) {
    super(merge(defaultConfig, cfg))
    const emitter = mitt()
    this._emitter = emitter
    this.node = null
    const { config } = this
    if (config.autoConfigure) {
      this._autoConfigure(cfg)
    }
    if (config.syncUrlsWithBaseTag) {
      const baseUrl = document
        .getElementsByTagName('base')[0]
        .getAttribute('href')
      emitter.on(Events.MOUNT, () => this.updateUrls('#', baseUrl))
    }
    const handleLocationChange = this._handleLocationChange.bind(this)
    this._handleLocationChange = handleLocationChange
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange)
    }
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent)
    }
    emitter.on(Events.MOUNT, spriteNode => {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode)
      }
    })
    emitter.on(Events.SYMBOL_MOUNT, symbolNode => {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode)
      }
      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode)
      }
    })
  }
  get isMounted() {
    return !!this.node
  }
  _autoConfigure(cfg) {
    const { config } = this
    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag =
        typeof document.getElementsByTagName('base')[0] !== 'undefined'
    }
    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter =
        typeof window.angular !== 'undefined'
    }
    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox()
    }
  }
  _handleLocationChange(event) {
    const { oldUrl, newUrl } = event.detail
    this.updateUrls(oldUrl, newUrl)
  }
  add(symbol2) {
    const sprite2 = this
    const isNewSymbol = super.add(symbol2)
    if (this.isMounted && isNewSymbol) {
      symbol2.mount(sprite2.node)
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol2.node)
    }
    return isNewSymbol
  }
  attach(target) {
    const sprite2 = this
    if (sprite2.isMounted) {
      return sprite2.node
    }
    const node =
      typeof target === 'string' ? document.querySelector(target) : target
    sprite2.node = node
    this.symbols.forEach(symbol2 => {
      symbol2.mount(sprite2.node)
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol2.node)
    })
    arrayFrom(node.querySelectorAll('symbol')).forEach(symbolNode => {
      const symbol2 = BrowserSpriteSymbol.createFromExistingNode(symbolNode)
      symbol2.node = symbolNode
      sprite2.add(symbol2)
    })
    this._emitter.emit(Events.MOUNT, node)
    return node
  }
  destroy() {
    const { config, symbols, _emitter } = this
    symbols.forEach(s => s.destroy())
    _emitter.off('*')
    window.removeEventListener(
      config.locationChangeEvent,
      this._handleLocationChange
    )
    if (this.isMounted) {
      this.unmount()
    }
  }
  mount(target = this.config.mountTo, prepend = false) {
    const sprite2 = this
    if (sprite2.isMounted) {
      return sprite2.node
    }
    const mountNode =
      typeof target === 'string' ? document.querySelector(target) : target
    const node = sprite2.render()
    this.node = node
    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0])
    } else {
      mountNode.appendChild(node)
    }
    this._emitter.emit(Events.MOUNT, node)
    return node
  }
  render() {
    return parse(this.stringify())
  }
  unmount() {
    this.node.parentNode.removeChild(this.node)
  }
  updateUrls(oldUrl, newUrl) {
    if (!this.isMounted) {
      return false
    }
    const usages = document.querySelectorAll(this.config.usagesToUpdate)
    updateUrls(
      this.node,
      usages,
      `${getUrlWithoutFragment(oldUrl)}#`,
      `${getUrlWithoutFragment(newUrl)}#`
    )
    return true
  }
}
var spriteNodeId = '__SVG_SPRITE_NODE__'
var spriteGlobalVarName = '__SVG_SPRITE__'
var loadSprite = () => {
  const existing = document.getElementById(spriteNodeId)
  if (existing) {
    sprite.attach(existing)
  } else {
    sprite.mount(document.body, true)
  }
}
var createDomReady = () => {
  var fns = [],
    listener,
    doc = document,
    hack = doc.documentElement.doScroll,
    domContentLoaded = 'DOMContentLoaded',
    loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
  if (!loaded)
    doc.addEventListener(
      domContentLoaded,
      (listener = function () {
        doc.removeEventListener(domContentLoaded, listener)
        loaded = 1
        while ((listener = fns.shift())) listener()
      })
    )
  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }
}
var sprite = new BrowserSprite({
  attrs: {
    id: spriteNodeId,
    'aria-hidden': 'true'
  },
  autoConfigure: typeof document !== 'undefined',
  listenLocationChangeEvent: typeof window !== 'undefined'
})
var init = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }
  if (window[spriteGlobalVarName]) {
    sprite = window[spriteGlobalVarName]
  } else {
    window[spriteGlobalVarName] = sprite
  }
  if (document.body) {
    loadSprite()
  } else {
    createDomReady()(loadSprite)
  }
}
init()
var symbol$K = new BrowserSpriteSymbol({
  id: 'fx-CheckCircleFilled',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CheckCircleFilled"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$K)
var require_context_module_0_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$K
})
var symbol$J = new BrowserSpriteSymbol({
  id: 'fx-CheckSquareFilled',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CheckSquareFilled"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM695.5 365.7l-210.6 292a31.8 31.8 0 01-51.7 0L308.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H689c6.5 0 10.3 7.4 6.5 12.7z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$J)
var require_context_module_0_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$J
})
var symbol$I = new BrowserSpriteSymbol({
  id: 'fx-CloseCircleFilled',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CloseCircleFilled"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$I)
var require_context_module_0_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$I
})
var symbol$H = new BrowserSpriteSymbol({
  id: 'fx-HeartFilled',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-HeartFilled"><path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$H)
var require_context_module_0_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$H
})
var symbol$G = new BrowserSpriteSymbol({
  id: 'fx-InfoCircleFilled',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-InfoCircleFilled"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$G)
var require_context_module_0_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$G
})
var symbol$F = new BrowserSpriteSymbol({
  id: 'fx-StarFilled',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-StarFilled"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$F)
var require_context_module_0_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$F
})
var symbol$E = new BrowserSpriteSymbol({
  id: 'fx-WarningFilled',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-WarningFilled"><path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$E)
var require_context_module_0_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$E
})
var symbol$D = new BrowserSpriteSymbol({
  id: 'fx-BackspaceOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-BackspaceOutlined"><path fill-rule="evenodd" clip-rule="evenodd" d="M898,264H336.7L113.6,512l223.2,248H898V264z M336.7,202.1c-17.6,0-34.3,7.5-46.1,20.5l-223.2,248c-21.2,23.6-21.2,59.4,0,82.9l223.2,248c11.8,13.1,28.5,20.5,46.1,20.5H898c34.2,0,62-27.8,62-62V264c0-34.2-27.8-62-62-62H336.7z" /><path d="M743.7,376.7c0-3.7-3-6.7-6.7-6.7l-55.1,0.3l-83,99l-82.9-98.9l-55.2-0.3c-3.7,0-6.7,2.9-6.7,6.7c0,1.6,0.6,3.1,1.6,4.3l108.7,129.5L455.6,640c-1,1.3-1.6,2.8-1.6,4.3c0,3.7,3,6.7,6.7,6.7l55.2-0.3l82.9-99l82.9,98.9l55.1,0.3c3.7,0,6.7-2.9,6.7-6.7c0-1.6-0.6-3.1-1.6-4.3L633.5,510.5L742.2,381C743.2,379.9,743.7,378.3,743.7,376.7z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$D)
var require_context_module_0_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$D
})
var symbol$C = new BrowserSpriteSymbol({
  id: 'fx-BorderOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-BorderOutlined"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$C)
var require_context_module_0_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$C
})
var symbol$B = new BrowserSpriteSymbol({
  id: 'fx-CheckCircleOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CheckCircleOutlined"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" /><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$B)
var require_context_module_0_9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$B
})
var symbol$A = new BrowserSpriteSymbol({
  id: 'fx-CheckSquareOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CheckSquareOutlined"><path d="M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z" /><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$A)
var require_context_module_0_10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$A
})
var symbol$z = new BrowserSpriteSymbol({
  id: 'fx-CheckOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CheckOutlined"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$z)
var require_context_module_0_11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$z
})
var symbol$y = new BrowserSpriteSymbol({
  id: 'fx-CircleOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CircleOutlined"><path d="M512,140c50.3,0,99,9.8,144.8,29.2c44.3,18.7,84.1,45.6,118.3,79.8c34.2,34.2,61,74,79.8,118.3C874.2,413,884,461.7,884,512s-9.8,99-29.2,144.8c-18.7,44.3-45.6,84.1-79.8,118.3c-34.2,34.2-74,61-118.3,79.8C611,874.2,562.3,884,512,884s-99-9.8-144.8-29.2c-44.3-18.7-84.1-45.6-118.3-79.8c-34.2-34.2-61-74-79.8-118.3C149.8,611,140,562.3,140,512s9.8-99,29.2-144.8c18.7-44.3,45.6-84.1,79.8-118.3c34.2-34.2,74-61,118.3-79.8C413,149.8,461.7,140,512,140 M512,64C264.6,64,64,264.6,64,512s200.6,448,448,448s448-200.6,448-448S759.4,64,512,64L512,64z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$y)
var require_context_module_0_12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$y
})
var symbol$x = new BrowserSpriteSymbol({
  id: 'fx-CloseCircleOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CloseCircleOutlined"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" /><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$x)
var require_context_module_0_13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$x
})
var symbol$w = new BrowserSpriteSymbol({
  id: 'fx-CloseOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-CloseOutlined"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$w)
var require_context_module_0_14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$w
})
var symbol$v = new BrowserSpriteSymbol({
  id: 'fx-DeleteOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-DeleteOutlined"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$v)
var require_context_module_0_15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$v
})
var symbol$u = new BrowserSpriteSymbol({
  id: 'fx-DownCircleOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-DownCircleOutlined"><path d="M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z" /><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$u)
var require_context_module_0_16 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$u
})
var symbol$t = new BrowserSpriteSymbol({
  id: 'fx-DownOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-DownOutlined"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$t)
var require_context_module_0_17 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$t
})
var symbol$s = new BrowserSpriteSymbol({
  id: 'fx-EditOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-EditOutlined"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$s)
var require_context_module_0_18 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$s
})
var symbol$r = new BrowserSpriteSymbol({
  id: 'fx-ExclamationCircleOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ExclamationCircleOutlined"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$r)
var require_context_module_0_19 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$r
})
var symbol$q = new BrowserSpriteSymbol({
  id: 'fx-ExclamationOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ExclamationOutlined"><path d="M448 804a64 64 0 10128 0 64 64 0 10-128 0zm32-168h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$q)
var require_context_module_0_20 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$q
})
var symbol$p = new BrowserSpriteSymbol({
  id: 'fx-HeartOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-HeartOutlined"><path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$p)
var require_context_module_0_21 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$p
})
var symbol$o = new BrowserSpriteSymbol({
  id: 'fx-HomeOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-HomeOutlined"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$o)
var require_context_module_0_22 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$o
})
var symbol$n = new BrowserSpriteSymbol({
  id: 'fx-ImageBreakOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ImageBreakOutlined">\n    <path d="M304,280c-48.6,0-88,39.4-88,88c0,48.6,39.4,88,88,88s88-39.4,88-88C392,319.4,352.6,280,304,280z M928,160H525.3l-58,72\n	H888v430.2L664.2,396.8c-3.2-3.8-9-3.8-12.2,0l-62.7,74.3l174.9,214.4L624.6,864H928c17.7,0,32-14.3,32-32V192\n	C960,174.3,945.7,160,928,160z M536.8,533.3L424.6,666.4l-144-170.7c-3.2-3.8-9-3.8-12.2,0L136,652.7V232h245.3l58-72H96\n	c-17.7,0-32,14.3-32,32v640c0,17.7,14.3,32,32,32h427l138.8-177.5L536.8,533.3z M304,280c-48.6,0-88,39.4-88,88\n	c0,48.6,39.4,88,88,88s88-39.4,88-88C392,319.4,352.6,280,304,280z M304,280c-48.6,0-88,39.4-88,88c0,48.6,39.4,88,88,88\n	s88-39.4,88-88C392,319.4,352.6,280,304,280z" />\n</symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$n)
var require_context_module_0_23 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$n
})
var symbol$m = new BrowserSpriteSymbol({
  id: 'fx-ImageOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ImageOutlined"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z" p-id="8469" /><path d="M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$m)
var require_context_module_0_24 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$m
})
var symbol$l = new BrowserSpriteSymbol({
  id: 'fx-InfoCircleOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-InfoCircleOutlined"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$l)
var require_context_module_0_25 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$l
})
var symbol$k = new BrowserSpriteSymbol({
  id: 'fx-InfoOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-InfoOutlined"><path d="M448 224a64 64 0 10128 0 64 64 0 10-128 0zm96 168h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$k)
var require_context_module_0_26 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$k
})
var symbol$j = new BrowserSpriteSymbol({
  id: 'fx-KeyboardOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-KeyboardOutlined"><path d="M903.94,800.26H119.06A56.13,56.13,0,0,1,63,744.2V295.69a56.13,56.13,0,0,1,56.06-56.07H903.94A56.13,56.13,0,0,1,960,295.69V744.2A56.13,56.13,0,0,1,903.94,800.26ZM119.06,295.69h0l0,448.51H903.94V295.69Z" /><rect class="cls-1" x="203.15" y="379.78" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="315.28" y="379.78" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="427.4" y="379.78" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="539.53" y="379.78" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="651.65" y="379.78" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="763.78" y="379.78" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="259.21" y="491.91" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="371.34" y="491.91" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="483.46" y="491.91" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="595.59" y="491.91" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="707.71" y="491.91" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="203.15" y="604.03" width="56.06" height="56.06" rx="14.02" /><rect class="cls-1" x="315.28" y="604.03" width="392.44" height="56.06" rx="14.02" /><rect class="cls-1" x="763.78" y="604.03" width="56.06" height="56.06" rx="14.02" /><path class="cls-1" d="M512,912.38l-60.69-84.1H572.69Z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$j)
var require_context_module_0_27 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$j
})
var symbol$i = new BrowserSpriteSymbol({
  id: 'fx-LeftOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-LeftOutlined"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$i)
var require_context_module_0_28 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$i
})
var symbol$h = new BrowserSpriteSymbol({
  id: 'fx-LoadingOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-LoadingOutlined"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$h)
var require_context_module_0_29 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$h
})
var symbol$g = new BrowserSpriteSymbol({
  id: 'fx-ManOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ManOutlined"><path d="M874 120H622c-3.3 0-6 2.7-6 6v56c0 3.3 2.7 6 6 6h160.4L583.1 387.3c-50-38.5-111-59.3-175.1-59.3-76.9 0-149.3 30-203.6 84.4S120 539.1 120 616s30 149.3 84.4 203.6C258.7 874 331.1 904 408 904s149.3-30 203.6-84.4C666 765.3 696 692.9 696 616c0-64.1-20.8-124.9-59.2-174.9L836 241.9V402c0 3.3 2.7 6 6 6h56c3.3 0 6-2.7 6-6V150c0-16.5-13.5-30-30-30zM408 828c-116.9 0-212-95.1-212-212s95.1-212 212-212 212 95.1 212 212-95.1 212-212 212z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$g)
var require_context_module_0_30 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$g
})
var symbol$f = new BrowserSpriteSymbol({
  id: 'fx-MenuOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-MenuOutlined"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$f)
var require_context_module_0_31 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$f
})
var symbol$e = new BrowserSpriteSymbol({
  id: 'fx-MinusOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-MinusOutlined"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$e)
var require_context_module_0_32 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$e
})
var symbol$d = new BrowserSpriteSymbol({
  id: 'fx-PlusOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-PlusOutlined"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" /><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$d)
var require_context_module_0_33 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$d
})
var symbol$c = new BrowserSpriteSymbol({
  id: 'fx-ReloadOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ReloadOutlined"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$c)
var require_context_module_0_34 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$c
})
var symbol$b = new BrowserSpriteSymbol({
  id: 'fx-RightOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-RightOutlined"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$b)
var require_context_module_0_35 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$b
})
var symbol$a = new BrowserSpriteSymbol({
  id: 'fx-ScanOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ScanOutlined"><path d="M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$a)
var require_context_module_0_36 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$a
})
var symbol$9 = new BrowserSpriteSymbol({
  id: 'fx-SearchOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-SearchOutlined"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$9)
var require_context_module_0_37 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$9
})
var symbol$8 = new BrowserSpriteSymbol({
  id: 'fx-SettingOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-SettingOutlined"><path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$8)
var require_context_module_0_38 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$8
})
var symbol$7 = new BrowserSpriteSymbol({
  id: 'fx-ShareAltOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-ShareAltOutlined"><path d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$7)
var require_context_module_0_39 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$7
})
var symbol$6 = new BrowserSpriteSymbol({
  id: 'fx-SoundOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-SoundOutlined"><path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$6)
var require_context_module_0_40 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$6
})
var symbol$5 = new BrowserSpriteSymbol({
  id: 'fx-StarOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-StarOutlined"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$5)
var require_context_module_0_41 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$5
})
var symbol$4 = new BrowserSpriteSymbol({
  id: 'fx-StopOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-StopOutlined"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$4)
var require_context_module_0_42 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$4
})
var symbol$3 = new BrowserSpriteSymbol({
  id: 'fx-UpCircleOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-UpCircleOutlined"><path d="M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z" /><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$3)
var require_context_module_0_43 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$3
})
var symbol$2 = new BrowserSpriteSymbol({
  id: 'fx-UpOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-UpOutlined"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$2)
var require_context_module_0_44 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$2
})
var symbol$1 = new BrowserSpriteSymbol({
  id: 'fx-UserOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-UserOutlined"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol$1)
var require_context_module_0_45 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol$1
})
var symbol = new BrowserSpriteSymbol({
  id: 'fx-WomanOutlined',
  content:
    '<symbol viewBox="0 0 1024 1024" id="fx-WomanOutlined"><path d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8 0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9 7.3 9.4 15.2 18.3 23.7 26.9 8.5 8.5 17.5 16.4 26.8 23.7 39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z" /></symbol>',
  viewBox: '0 0 1024 1024'
})
sprite.add(symbol)
var require_context_module_0_46 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: symbol
})
var req = (function () {
  var map = {
    './filled/check-circle.svg': require_context_module_0_0,
    './filled/check-square.svg': require_context_module_0_1,
    './filled/close-circle.svg': require_context_module_0_2,
    './filled/heart.svg': require_context_module_0_3,
    './filled/info-circle.svg': require_context_module_0_4,
    './filled/star.svg': require_context_module_0_5,
    './filled/warning.svg': require_context_module_0_6,
    './outlined/backspace.svg': require_context_module_0_7,
    './outlined/border.svg': require_context_module_0_8,
    './outlined/check-circle.svg': require_context_module_0_9,
    './outlined/check-square.svg': require_context_module_0_10,
    './outlined/check.svg': require_context_module_0_11,
    './outlined/circle.svg': require_context_module_0_12,
    './outlined/close-circle.svg': require_context_module_0_13,
    './outlined/close.svg': require_context_module_0_14,
    './outlined/delete.svg': require_context_module_0_15,
    './outlined/down-circle.svg': require_context_module_0_16,
    './outlined/down.svg': require_context_module_0_17,
    './outlined/edit.svg': require_context_module_0_18,
    './outlined/exclamation-circle.svg': require_context_module_0_19,
    './outlined/exclamation.svg': require_context_module_0_20,
    './outlined/heart.svg': require_context_module_0_21,
    './outlined/home.svg': require_context_module_0_22,
    './outlined/image-break.svg': require_context_module_0_23,
    './outlined/image.svg': require_context_module_0_24,
    './outlined/info-circle.svg': require_context_module_0_25,
    './outlined/info.svg': require_context_module_0_26,
    './outlined/keyboard.svg': require_context_module_0_27,
    './outlined/left.svg': require_context_module_0_28,
    './outlined/loading.svg': require_context_module_0_29,
    './outlined/man.svg': require_context_module_0_30,
    './outlined/menu.svg': require_context_module_0_31,
    './outlined/minus.svg': require_context_module_0_32,
    './outlined/plus.svg': require_context_module_0_33,
    './outlined/reload.svg': require_context_module_0_34,
    './outlined/right.svg': require_context_module_0_35,
    './outlined/scan.svg': require_context_module_0_36,
    './outlined/search.svg': require_context_module_0_37,
    './outlined/setting.svg': require_context_module_0_38,
    './outlined/share-alt.svg': require_context_module_0_39,
    './outlined/sound.svg': require_context_module_0_40,
    './outlined/star.svg': require_context_module_0_41,
    './outlined/stop.svg': require_context_module_0_42,
    './outlined/up-circle.svg': require_context_module_0_43,
    './outlined/up.svg': require_context_module_0_44,
    './outlined/user.svg': require_context_module_0_45,
    './outlined/woman.svg': require_context_module_0_46
  }
  var req2 = function req3(key) {
    return (
      map[key] ||
      (function () {
        throw new Error("Cannot find module '" + key + "'.")
      })()
    )
  }
  req2.keys = function () {
    return Object.keys(map)
  }
  return req2
})()
var obj = {}
req
  .keys()
  .map(req)
  .forEach(v => {
    obj[v.default.id] = v.default
  })

// vue:./SvgIcon.vue
import {
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock
} from 'vue'
var _sfc_script = defineComponent({
  name: 'fx-svg-icon',
  props: {
    iconName: {
      type: String
    }
  },
  setup(props) {
    const useName = computed(() => {
      return `#${obj['fx-' + props.iconName] ? 'fx-' : ''}${props.iconName}`
    })
    return {
      useName
    }
  }
})
var _hoisted_1 = ['xlink:href']
function render(_ctx, _cache) {
  return (
    _openBlock(),
    _createElementBlock('svg', null, [
      _createElementVNode(
        'use',
        { 'xlink:href': _ctx.useName },
        null,
        8,
        _hoisted_1
      )
    ])
  )
}
_sfc_script.render = render
_sfc_script.__file = 'src/Icon/SvgIcon.vue'

// src/helpers/dom.ts
function removeEl($el) {
  $el.parentNode && $el.parentNode.removeChild($el)
}
function addClassName($el, className) {
  $el.classList.add(className)
}
function removeClassName($el, className) {
  $el.classList.remove(className)
}
function hasClassName($el, className) {
  return [].slice.call($el.classList, 0).includes(className)
}
function getViewPosition(viewPosition) {
  var _a
  const viewPositionMap = /* @__PURE__ */ new Map([
    ['start', 0],
    ['center', 0.5],
    ['end', 1],
    [0, 0],
    [0.5, 0.5],
    [1, 1]
  ])
  return (_a = viewPositionMap.get(viewPosition != null ? viewPosition : 0)) !=
    null
    ? _a
    : 0
}
function getRelativeOffset($el, $relativeEl = document, viewPosition = 0) {
  if ($el === document) {
    return { offsetTop: 0, offsetLeft: 0 }
  }
  $el = $el
  $relativeEl =
    $relativeEl === document ? document.documentElement : $relativeEl
  let offsetTop = $el.offsetTop
  let offsetLeft = $el.offsetLeft
  const transform = window.getComputedStyle($el).transform
  if (transform && transform !== 'none') {
    const transformMatrix = transform.slice(7, transform.length - 1).split(', ')
    offsetLeft += parseFloat(transformMatrix[4])
    offsetTop += parseFloat(transformMatrix[5])
  }
  if ($el.offsetParent && $el.offsetParent !== $relativeEl) {
    const parent = getRelativeOffset($el.offsetParent, $relativeEl)
    offsetTop += parent.offsetTop
    offsetLeft += parent.offsetLeft
  }
  const viewPosition2 = getViewPosition(viewPosition)
  if (viewPosition2) {
    if (viewPosition2 === 1) {
      offsetTop -= $relativeEl.clientHeight - $el.clientHeight
      offsetLeft -= $relativeEl.clientWidth - $el.clientWidth
    } else {
      offsetTop -= $relativeEl.clientHeight / 2 - $el.clientHeight / 2
      offsetLeft -= $relativeEl.clientWidth / 2 - $el.clientWidth / 2
    }
  }
  return { offsetTop, offsetLeft }
}
function getSizeValue(size, defaultValue = 0) {
  if (isNumber(size)) {
    return size
  } else if (typeof size === 'string') {
    const matches = size.match(/^([\d.]+)((px)|(vw)|(vh)|)$/)
    if (matches) {
      let sizeNum = parseFloat(matches[1])
      if (matches[2] === 'vw') {
        sizeNum *= document.documentElement.clientWidth / 100
      } else if (matches[2] === 'vh') {
        sizeNum *= document.documentElement.clientHeight / 100
      }
      return sizeNum
    }
  }
  return defaultValue
}
function querySelector(selector) {
  let $el = null
  if (selector instanceof HTMLElement) {
    $el = selector
  } else if (typeof selector === 'string') {
    $el = document.querySelector(selector)
  } else if (selector === document) {
    $el = document.documentElement
  }
  return $el != null ? $el : null
}
function isDocument($el) {
  return $el === document || $el === document.documentElement
}
function getScrollTop($el = document) {
  if (isDocument($el)) {
    return document.documentElement.scrollTop || document.body.scrollTop
  }
  return $el.scrollTop
}
function setScrollTop($el, scrollTop) {
  if (isDocument($el)) {
    document.documentElement.scrollTop = scrollTop
    document.body.scrollTop = scrollTop
  } else {
    $el.scrollTop = scrollTop
  }
}
function scrollTo($el, scrollNumber, animated = true) {
  const options = Object.assign(
    {
      behavior: animated ? 'smooth' : 'auto'
    },
    typeof scrollNumber === 'number'
      ? {
          top: scrollNumber,
          left: 0
        }
      : scrollNumber
  )
  if (isDocument($el)) {
    document.documentElement.scrollTo(options)
    document.body.scrollTo(options)
  } else {
    $el.scrollTo(options)
  }
}
function styleObject2CssText(object) {
  const arr = []
  objectForEach(object, (v, k) => {
    arr.push(`${camelCase2KebabCase(k)}: ${v}`)
  })
  return arr.join('; ')
}
function getParentTarget($el, className) {
  while ($el) {
    if (hasClassName($el, className)) {
      return $el
    }
    $el = $el.parentElement
  }
  return null
}

// node_modules/.pnpm/colorfuls@1.0.2/node_modules/colorfuls/lib/index.esm.js
function number2Percentage(number) {
  return (number * 100).toFixed(0) + '%'
}
function isNumeric2(object) {
  return (
    (typeof object === 'number' && isFinite(object)) ||
    (typeof object === 'string' &&
      !isNaN(parseFloat(object)) &&
      isFinite(parseFloat(object)))
  )
}
function isPercentage(object) {
  return typeof object === 'string' && /^([\d.]+)%$/.test(object)
}
function isLimitPercentage(object, min = 0, max = 100) {
  if (isPercentage(object)) {
    const value = parseFloat(object)
    return value >= min && value <= max
  }
  return false
}
function decimal2Hex(num, width) {
  num = Math.round(num * 255)
  const hex = '0123456789abcdef'
  let s = ''
  while (num) {
    s = hex.charAt(num % 16) + s
    num = Math.floor(num / 16)
  }
  if (typeof width === 'undefined' || width <= s.length) {
    return s.toUpperCase()
  }
  let delta = width - s.length
  let padding = ''
  while (delta-- > 0) {
    padding += '0'
  }
  return (padding + s).toUpperCase()
}
function numberRange(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}
function percentage2Length(value) {
  if (isPercentage(value)) {
    return parseFloat(value) / 100
  }
  return parseFloat(value)
}
function rgb2Gray(r, g, b) {
  return (r * 38 + g * 75 + b * 15) >> 7
}
var hexRegex = /^#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3});?$/i
var rgbRegex =
  /^rgb[a]?[(][\s]*(100%|[0-9]{1,2}%|2[0-4][0-9]|25[0-5]|[01]?[0-9]?[0-9])[\s]*,[\s]*(100%|[0-9]{1,2}%|2[0-4][0-9]|25[0-5]|[01]?[0-9]?[0-9])[\s]*,[\s]*(100%|[0-9]{1,2}%|2[0-4][0-9]|25[0-5]|[01]?[0-9]?[0-9])[\s]*,?[\s]*(0?\.\d{1,16}|1|0|100%|[0-9]{1,2}%)?[)];?$/i
var hslRegex =
  /^hsl[a]?[(][\s]*(360|3[0-5][0-9]|[012]?[0-9][0-9]?)(deg)*[\s]*,[\s]*(100%|[0-9]{1,2}%)[\s]*,[\s]*(100%|[0-9]{1,2}%)[\s]*,?[\s]*(0?\.\d{1,16}|1|0|100%|[0-9]{1,2}%)?[)];?$/i
function isHexString(color) {
  return typeof color === 'string' && hexRegex.test(color.trim())
}
function isRgbString(color) {
  return typeof color === 'string' && rgbRegex.test(color.trim())
}
function isHslString(color) {
  return typeof color === 'string' && hslRegex.test(color.trim())
}
function _rgb2hsl(r, g, b) {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h3
  let s
  const l = (max + min) / 2
  if (l === 0 || max === min) {
    h3 = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) {
      h3 = (g - b) / d + (g < b ? 6 : 0)
    } else if (max === g) {
      h3 = (b - r) / d + 2
    } else {
      h3 = (r - g) / d + 4
    }
    h3 = h3 / 6
  }
  return {
    h: h3,
    s,
    l
  }
}
function _rgb2hsv(r, g, b) {
  let h3 = 0
  let s = 0
  let v = 0
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  v = max
  if (max === 0) {
    s = 0
  } else {
    s = 1 - min / max
  }
  const d = max - min
  if (max === min) {
    h3 = 0
  } else if (max === r && g >= b) {
    h3 = (60 * (g - b)) / d + 0
  } else if (max === r && g < b) {
    h3 = (60 * (g - b)) / d + 360
  } else if (max === g) {
    h3 = (60 * (b - r)) / d + 120
  } else if (max === b) {
    h3 = h3 = (60 * (r - g)) / d + 240
  }
  h3 = h3 / 360
  return {
    h: h3,
    s,
    v
  }
}
function _hsv2rgb(h3, s, v) {
  let r = 0
  let g = 0
  let b = 0
  const i = Math.floor((h3 * 6) % 6)
  const f = h3 * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - s * f)
  const t = v * (1 - s * (1 - f))
  switch (i) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }
  return {
    r,
    g,
    b
  }
}
function _hsv2hsl(h3, s, v) {
  return {
    h: h3,
    s: (s * v) / ((h3 = (2 - s) * v) < 1 ? h3 : 2 - h3) || 0,
    l: h3 / 2
  }
}
function _rgb2hex(r, g, b) {
  r = Math.round(r * 255)
  g = Math.round(g * 255)
  b = Math.round(b * 255)
  let str = ((r << 16) | (g << 8) | b).toString(16)
  for (let i = 0, len = 6 - str.length; i < len; i++) {
    str = '0' + str
  }
  return '#' + str.toUpperCase()
}
function _hsl2rgb(h3, s, l) {
  let r, g, b
  if (s === 0) {
    r = g = b = l
  } else {
    const p2 = l < 0.5 ? l * (s + 1) : l + s - l * s
    const p1 = l * 2 - p2
    r = hue2rgb(p1, p2, h3 + 1 / 3)
    g = hue2rgb(p1, p2, h3)
    b = hue2rgb(p1, p2, h3 - 1 / 3)
  }
  return {
    r,
    g,
    b
  }
}
function _cmyk2rgb(c, m, y, k) {
  const t = 1 - k
  return {
    r: (1 - c) * t,
    g: (1 - m) * t,
    b: (1 - y) * t
  }
}
function _rgb2cmyk(r, g, b) {
  const k = 1 - Math.max(r, g, b)
  return {
    c: (1 - r - k) / (1 - k),
    m: (1 - g - k) / (1 - k),
    y: (1 - b - k) / (1 - k),
    k
  }
}
function parseAlpha(value) {
  let opacity = 1
  if (isNumeric2(value)) {
    opacity = channel2Length(value)
  }
  return opacity
}
function channel2Length(value) {
  return numberRange(percentage2Length(value))
}
function channelDown(channel, ratio) {
  if (!isNumeric2(ratio)) {
    throwPercentageLikeError(ratio)
  }
  return numberRange(channel * (1 - percentage2Length(ratio)))
}
function channelUp(channel, ratio) {
  if (!isNumeric2(ratio)) {
    throwPercentageLikeError(ratio)
  }
  return numberRange(channel * (1 + percentage2Length(ratio)))
}
function throwPercentageLikeError(value) {
  throw new Error(
    `Parameter should be number/percentage instead of ${typeof value}`
  )
}
function setRatio(color, key, value) {
  if (isNumeric2(value)) {
    color[key] = channel2Length(value)
  } else {
    throwPercentageLikeError(value)
  }
  return color
}
function getChannel(color, key) {
  return Math.round(color[key] * 255)
}
function setChannel(color, key, value) {
  if (isNumeric2(value)) {
    color[key] = isPercentage(value)
      ? channel2Length(value)
      : numberRange(parseFloat(value) / 255)
  } else {
    throwPercentageLikeError(value)
  }
  return color
}
var BaseColor = class {
  constructor(a, raw = false) {
    this._a = 1
    if (raw) {
      this._a = a
    } else {
      this.setAlpha(a)
    }
  }
  getAlpha() {
    return parseFloat(this._a.toFixed(2))
  }
  setAlpha(value) {
    if (typeof value === 'undefined') {
      this._a = 1
    } else if (isNumeric2(value)) {
      this._a = parseAlpha(value)
    } else {
      throwPercentageLikeError(value)
    }
    return this
  }
  getRawAlpha() {
    return this._a
  }
  fadeOut(ratio) {
    this._a = channelDown(this._a, ratio)
    return this
  }
  fadeIn(ratio) {
    this._a = channelUp(this._a, ratio)
    return this
  }
  fade(ratio) {
    return this.fadeOut(ratio)
  }
  opaque(ratio) {
    return this.fadeIn(ratio)
  }
}
var RGBColor = class extends BaseColor {
  constructor(r, g, b, a, raw = false) {
    super(a, raw)
    this._r = r
    this._g = g
    this._b = b
    if (!raw) {
      this.setRed(r)
      this.setGreen(g)
      this.setBlue(b)
    }
  }
  getRed() {
    return getChannel(this, '_r')
  }
  setRed(value) {
    return setChannel(this, '_r', value)
  }
  getGreen() {
    return getChannel(this, '_g')
  }
  setGreen(value) {
    return setChannel(this, '_g', value)
  }
  getBlue() {
    return getChannel(this, '_b')
  }
  setBlue(value) {
    return setChannel(this, '_b', value)
  }
  rgb() {
    return this
  }
  hsl() {
    const { h: h3, s, l } = _rgb2hsl(this._r, this._g, this._b)
    return new HSLColor(h3, s, l, this._a, true)
  }
  hsv() {
    const { h: h3, s, v } = _rgb2hsv(this._r, this._g, this._b)
    return new HSVColor(h3, s, v, this._a, true)
  }
  hex() {
    return new HEXColor(this._r, this._g, this._b, this._a, true)
  }
  cmyk() {
    const { c, m, y, k } = _rgb2cmyk(this._r, this._g, this._b)
    return new CMYKColor(c, m, y, k, this._a, true)
  }
  toRgb() {
    return `rgb(${this.toArray().slice(0, 3).join(', ')})`
  }
  toRgba() {
    return `rgba(${this.toArray().join(', ')})`
  }
  toString() {
    return this.toRgba()
  }
  toArray() {
    return [this.getRed(), this.getGreen(), this.getBlue(), this.getAlpha()]
  }
  toObject() {
    const [r, g, b, a] = this.toArray()
    return { r, g, b, a }
  }
  toRawArray() {
    return [this._r, this._g, this._b, this._a]
  }
  toRawObject() {
    const [r, g, b, a] = this.toRawArray()
    return { r, g, b, a }
  }
  isDark() {
    return rgb2Gray(this.getRed(), this.getGreen(), this.getBlue()) < 192
  }
  isLight() {
    return !this.isDark()
  }
}
var HSA = class extends BaseColor {
  constructor(h3, s, a, raw = false) {
    super(a, raw)
    this._h = h3
    this._s = s
    if (!raw) {
      this.setHue(h3)
      this.setSaturation(s)
    }
  }
  getHue() {
    return `${Math.round(this._h * 360)}deg`
  }
  setHue(degree) {
    if (isNumeric2(degree)) {
      this._h = numberRange(parseFloat(degree), 0, 360) / 360
    } else {
      throw new Error(`Parameter should be number instead of ${typeof degree}`)
    }
    return this
  }
  getSaturation() {
    return number2Percentage(this._s)
  }
  setSaturation(value) {
    return setRatio(this, '_s', value)
  }
  rotate(degree) {
    if (isNumeric2(degree)) {
      this._h = (this._h + degree / 360 + 1) % 1
    } else {
      throw new Error(`Parameter should be number instead of ${typeof degree}`)
    }
    return this
  }
  saturate(ratio) {
    this._s = channelUp(this._s, ratio)
    return this
  }
  desaturate(ratio) {
    this._s = channelDown(this._s, ratio)
    return this
  }
}
var HSLColor = class extends HSA {
  constructor(h3, s, l, a, raw = false) {
    super(h3, s, a, raw)
    this._l = l
    if (!raw) {
      this.setLightness(l)
    }
  }
  getLightness() {
    return number2Percentage(this._l)
  }
  setLightness(value) {
    return setRatio(this, '_l', value)
  }
  lighten(ratio) {
    this._l = channelUp(this._l, ratio)
    return this
  }
  darken(ratio) {
    this._l = channelDown(this._l, ratio)
    return this
  }
  hsl() {
    return this
  }
  rgb() {
    const { r, g, b } = _hsl2rgb(this._h, this._s, this._l)
    return new RGBColor(r, g, b, this._a, true)
  }
  hex() {
    return this.rgb().hex()
  }
  cmyk() {
    return this.rgb().cmyk()
  }
  hsv() {
    return this.rgb().hsv()
  }
  toHsl() {
    return `hsl(${this.toArray().slice(0, 3).join(', ')})`
  }
  toHsla() {
    return `hsla(${this.toArray().join(', ')})`
  }
  toString() {
    return this.toHsla()
  }
  toArray() {
    return [
      this.getHue(),
      this.getSaturation(),
      this.getLightness(),
      this.getAlpha()
    ]
  }
  toObject() {
    const [h3, s, l, a] = this.toArray()
    return { h: h3, s, l, a }
  }
  toRawArray() {
    return [this._h, this._s, this._l, this._a]
  }
  toRawObject() {
    const [h3, s, l, a] = this.toRawArray()
    return { h: h3, s, l, a }
  }
  isDark() {
    return this.rgb().isDark()
  }
  isLight() {
    return this.rgb().isLight()
  }
}
var HSVColor = class extends HSA {
  constructor(h3, s, v, a, raw = false) {
    super(h3, s, a, raw)
    this._v = v
    if (!raw) {
      this.setValue(v)
    }
  }
  getValue() {
    return number2Percentage(this._v)
  }
  setValue(value) {
    return setRatio(this, '_v', value)
  }
  hsv() {
    return this
  }
  rgb() {
    const { r, g, b } = _hsv2rgb(this._h, this._s, this._v)
    return new RGBColor(r, g, b, this._a, true)
  }
  hex() {
    return this.rgb().hex()
  }
  cmyk() {
    return this.rgb().cmyk()
  }
  hsl() {
    const { h: h3, s, l } = _hsv2hsl(this._h, this._s, this._v)
    return new HSLColor(h3, s, l, this._a, true)
  }
  toHsv() {
    return this.toArray().slice(0, 3).join(', ')
  }
  toHsva() {
    return this.toArray().join(', ')
  }
  toString() {
    return this.toHsva()
  }
  toArray() {
    return [
      this.getHue(),
      this.getSaturation(),
      this.getValue(),
      this.getAlpha()
    ]
  }
  toObject() {
    const [h3, s, v, a] = this.toArray()
    return { h: h3, s, v, a }
  }
  toRawArray() {
    return [this._h, this._s, this._v, this._a]
  }
  toRawObject() {
    const [h3, s, v, a] = this.toRawArray()
    return { h: h3, s, v, a }
  }
  isDark() {
    return this.rgb().isDark()
  }
  isLight() {
    return this.rgb().isLight()
  }
}
var HEXColor = class extends BaseColor {
  constructor(r, g, b, a, raw = false) {
    super(a, raw)
    this._r = r
    this._g = g
    this._b = b
    this._hex = _rgb2hex(r, g, b)
  }
  getAlphaHex() {
    return decimal2Hex(this._a, 2)
  }
  setAlphaHex(value) {
    this.setAlpha(parseInt('0x' + value) / 255)
  }
  hex() {
    return this
  }
  rgb() {
    return new RGBColor(this._r, this._g, this._b, this._a, true)
  }
  hsl() {
    return this.rgb().hsl()
  }
  hsv() {
    return this.rgb().hsv()
  }
  cmyk() {
    return this.rgb().cmyk()
  }
  toHex() {
    return this._hex
  }
  toHexa() {
    return this._hex + this.getAlphaHex()
  }
  toString() {
    return this.toHexa()
  }
  toArray() {
    return [
      this._hex.slice(1, 3),
      this._hex.slice(3, 5),
      this._hex.slice(5, 7),
      this.getAlphaHex()
    ]
  }
  toObject() {
    const [r, g, b, a] = this.toArray()
    return { r, g, b, a }
  }
  toRawArray() {
    return [this._r, this._g, this._b, this._a]
  }
  toRawObject() {
    const [r, g, b, a] = this.toRawArray()
    return { r, g, b, a }
  }
  isDark() {
    return this.rgb().isDark()
  }
  isLight() {
    return this.rgb().isLight()
  }
}
var CMYKColor = class extends BaseColor {
  constructor(c, m, y, k, a, raw = false) {
    super(a, raw)
    this._c = c
    this._m = m
    this._y = y
    this._k = k
    if (!raw) {
      this.setCyan(c)
      this.setMagenta(m)
      this.setYellow(y)
      this.setBlack(k)
    }
  }
  getCyan() {
    return number2Percentage(this._c)
  }
  setCyan(value) {
    return setRatio(this, '_c', value)
  }
  getMagenta() {
    return number2Percentage(this._m)
  }
  setMagenta(value) {
    return setRatio(this, '_m', value)
  }
  getYellow() {
    return number2Percentage(this._y)
  }
  setYellow(value) {
    return setRatio(this, '_y', value)
  }
  getBlack() {
    return number2Percentage(this._k)
  }
  setBlack(value) {
    return setRatio(this, '_k', value)
  }
  cmyk() {
    return this
  }
  rgb() {
    const { r, g, b } = _cmyk2rgb(this._c, this._m, this._y, this._k)
    return new RGBColor(r, g, b, this._a, true)
  }
  hsl() {
    return this.rgb().hsl()
  }
  hsv() {
    return this.rgb().hsv()
  }
  hex() {
    return this.rgb().hex()
  }
  toCmyk() {
    return this.toArray().join(', ')
  }
  toString() {
    return this.toCmyk()
  }
  toArray() {
    return [
      this.getCyan(),
      this.getMagenta(),
      this.getYellow(),
      this.getBlack()
    ]
  }
  toObject() {
    const [c, m, y, k] = this.toArray()
    return { c, m, y, k }
  }
  toRawArray() {
    return [this._c, this._m, this._y, this._k]
  }
  toRawObject() {
    const [c, m, y, k] = this.toRawArray()
    return { c, m, y, k }
  }
  isDark() {
    return this.rgb().isDark()
  }
  isLight() {
    return this.rgb().isLight()
  }
}
function rgb2RGBColor(rgba) {
  if (isRgbString(rgba)) {
    const matches = rgbRegex.exec(rgba.trim()).slice(1, 5)
    return new RGBColor(matches[0], matches[1], matches[2], matches[3])
  } else if (
    typeof rgba === 'object' &&
    isNumeric2(rgba.r) &&
    isNumeric2(rgba.g) &&
    isNumeric2(rgba.b)
  ) {
    return new RGBColor(rgba.r, rgba.g, rgba.b, rgba.a)
  }
  throw new Error('It is not a valid rgb/rgba string')
}
function hex2HEXColor(hexa) {
  if (!isHexString(hexa)) {
    throw new Error('It is not a valid hex/hexa string')
  }
  let rH, gH, bH, aH
  hexa = hexa.trim()
  if (hexa.length === 4) {
    rH = hexa.slice(1, 2) + hexa.slice(1, 2)
    gH = hexa.slice(2, 3) + hexa.slice(2, 3)
    bH = hexa.slice(3, 4) + hexa.slice(3, 4)
  } else {
    rH = hexa.slice(1, 3)
    gH = hexa.slice(3, 5)
    bH = hexa.slice(5, 7)
  }
  if (hexa.length === 9) {
    aH = hexa.slice(7, 9)
  } else {
    aH = 'ff'
  }
  return new HEXColor(
    hex2Length(rH),
    hex2Length(gH),
    hex2Length(bH),
    hex2Length(aH)
  )
}
function hex2Length(channel) {
  return parseInt('0x' + channel) / 255
}
function hue2rgb(p1, p2, hue) {
  if (hue < 0) {
    hue = hue + 1
  }
  if (hue > 1) {
    hue = hue - 1
  }
  if (hue * 6 < 1) {
    return p1 + (p2 - p1) * 6 * hue
  }
  if (hue * 2 < 1) {
    return p2
  }
  if (hue * 3 < 2) {
    return p1 + (p2 - p1) * (2 / 3 - hue) * 6
  }
  return p1
}
function hsl2HSLColor(hsla) {
  if (isHslString(hsla)) {
    const matches = hslRegex.exec(hsla.trim()).slice(1, 6)
    return new HSLColor(matches[0], matches[2], matches[3], matches[4])
  } else if (
    typeof hsla === 'object' &&
    isNumeric2(hsla.h) &&
    isNumeric2(hsla.s) &&
    isNumeric2(hsla.l)
  ) {
    return new HSLColor(hsla.h, hsla.s, hsla.l, hsla.a)
  }
  throw new Error('It is not a valid hsl/hsla string')
}
function hsv2HSVColor(hsva) {
  if (
    typeof hsva === 'object' &&
    isNumeric2(hsva.h) &&
    isNumeric2(hsva.s) &&
    isNumeric2(hsva.v)
  ) {
    return new HSVColor(hsva.h, hsva.s, hsva.v, isNumeric2(hsva.a) ? hsva.a : 1)
  } else {
    throw new Error('It is not a valid hsv/hsva object')
  }
}
function cmyk2CMYK(cmyk) {
  if (
    typeof cmyk === 'object' &&
    isNumeric2(cmyk.c) &&
    isNumeric2(cmyk.m) &&
    isNumeric2(cmyk.y) &&
    isNumeric2(cmyk.k)
  ) {
    return new CMYKColor(cmyk.c, cmyk.m, cmyk.y, cmyk.k)
  } else {
    throw new Error('It is not a valid cmyk object')
  }
}
function clone(object) {
  if (object instanceof RGBColor) {
    return new RGBColor(object._r, object._g, object._b, object._a, true)
  } else if (object instanceof HSLColor) {
    return new HSLColor(object._h, object._s, object._l, object._a, true)
  } else if (object instanceof HSVColor) {
    return new HSVColor(object._h, object._s, object._v, object._a, true)
  } else if (object instanceof HEXColor) {
    return new HEXColor(object._r, object._g, object._b, object._a, true)
  } else if (object instanceof CMYKColor) {
    return new CMYKColor(
      object._c,
      object._m,
      object._y,
      object._k,
      object._a,
      true
    )
  }
  return object
}
function Color(value) {
  if (typeof value === 'object') {
    if (
      value instanceof RGBColor ||
      value instanceof HSLColor ||
      value instanceof HEXColor ||
      value instanceof HSVColor ||
      value instanceof CMYKColor
    ) {
      return clone(value)
    } else if (
      isNumeric2(value.r) &&
      isNumeric2(value.g) &&
      isNumeric2(value.b)
    ) {
      return rgb2RGBColor(value)
    } else if (isNumeric2(value.h) && isLimitPercentage(value.s)) {
      if (isLimitPercentage(value.l)) {
        return hsl2HSLColor(value)
      } else if (isLimitPercentage(value.v)) {
        return hsv2HSVColor(value)
      }
    } else if (
      isNumeric2(value.c) &&
      isNumeric2(value.m) &&
      isNumeric2(value.y) &&
      isNumeric2(value.k)
    ) {
      return cmyk2CMYK(value)
    }
  } else if (isHexString(value)) {
    return hex2HEXColor(value)
  } else if (isRgbString(value)) {
    return rgb2RGBColor(value)
  } else if (isHslString(value)) {
    return hsl2HSLColor(value)
  }
  throw new Error('Invalid color value.')
}
function mix(color1, color2, weight) {
  const c1 = Color(color1).rgb()
  const c2 = Color(color2).rgb()
  const p =
    typeof weight === 'undefined' ? 0.5 : numberRange(percentage2Length(weight))
  const w = p * 2 - 1
  const a = c1.getRawAlpha() - c2.getRawAlpha()
  const w1 = (w * a === -1 ? w : (w + a) / (w * a + 1) + 1) / 2
  const w2 = 1 - w1
  return rgb2RGBColor({
    r: w1 * c1.getRed() + w2 * c2.getRed(),
    g: w1 * c1.getGreen() + w2 * c2.getGreen(),
    b: w1 * c1.getBlue() + w2 * c2.getBlue(),
    a: c1.getRawAlpha() * p + c2.getRawAlpha() * (1 - p)
  })
}
function invert(value) {
  const color = Color(value).rgb()
  return color
    .setRed(255 - color.getRed())
    .setGreen(255 - color.getGreen())
    .setBlue(255 - color.getBlue())
}
function complement(value) {
  return Color(value).hsl().rotate(180)
}
function isDark(value) {
  return Color(value).isDark()
}
function isLight(value) {
  return Color(value).isLight()
}
function grayscale(value) {
  const color = Color(value).rgb()
  const gray = Math.round(
    rgb2Gray(color.getRed(), color.getGreen(), color.getBlue())
  )
  return color.setRed(gray).setGreen(gray).setBlue(gray)
}
function decimal2Ratio(number) {
  return (Math.round(number / 2.55) / 100).toFixed(2)
}
function translate(color) {
  const rgba = Color(color).rgb()
  const { r, g, b } = rgba.toObject()
  const a = (rgba._a * 255).toFixed(0)
  const rR = decimal2Ratio(r)
  const rG = decimal2Ratio(g)
  const rB = decimal2Ratio(b)
  const rA = rgba._a.toFixed(2)
  const ahex = '#' + rgba.hex().getAlphaHex() + rgba.hex().toHex().substr(1)
  return {
    RGB: rgba.toArray().slice(0, 3).join(', '),
    RGBA: rgba.toArray().join(', '),
    HEXA: rgba.hex().toHexa(),
    AHEX: ahex,
    HEX: rgba.hex().toHex(),
    HSL: rgba.hsl().toArray().slice(0, 3).join(', '),
    HSLA: rgba.hsl().toArray().join(', '),
    HSV: rgba.hsv().toHsv(),
    HSB: rgba.hsv().toHsv(),
    CMYK: rgba.cmyk().toCmyk(),
    WEB: {
      HEX: rgba.hex().toHex(),
      HEXA: rgba.hex().toHexa(),
      RGB: rgba.toRgb(),
      RGBA: rgba.toRgba(),
      HSL: rgba.hsl().toHsl(),
      HSLA: rgba.hsl().toHsla()
    },
    Java: `new Color(${r}, ${g}, ${b}, ${a})`,
    '.Net': `Color.FromArgb(${a}, ${r}, ${g}, ${b})`,
    Android: `Color.argb(${a}, ${r}, ${g}, ${b})`,
    Unity3D: `new Color(${rR}f, ${rG}f, ${rB}f, ${rA}f)`,
    OpenGL: `glColor4f(${rR}f, ${rG}f, ${rB}f, ${rA}f)`,
    Flutter: `Color(0x${ahex.substr(1)})`,
    Swift: `UIColor(red:${rR}, green:${rG}, blue:${rB}, alpha:${rA})`
  }
}
var Colorfuls = function Colorfuls2(color) {
  return Color(color)
}
Colorfuls.Color = Color
Colorfuls.mix = mix
Colorfuls.invert = invert
Colorfuls.complement = complement
Colorfuls.isDark = isDark
Colorfuls.isLight = isLight
Colorfuls.grayscale = grayscale
Colorfuls.translate = translate

// src/helpers/color.ts
var hueStep = 2
var saturationStep = 0.16
var saturationStep2 = 0.05
var brightnessStep1 = 0.05
var brightnessStep2 = 0.15
var lightColorCount = 5
var darkColorCount = 4
function getColorGroups(primaryColor) {
  const colors = []
  const hsv = Colorfuls(primaryColor).hsv().toRawObject()
  for (let i = 1; i <= 10; i++) {
    const isLight2 = i <= 6
    const j = isLight2 ? lightColorCount + 1 - i : i - lightColorCount - 1
    colors.push(
      Colorfuls({
        h: getHue(hsv.h * 360, j, isLight2),
        s: getSaturation(hsv.s, j, isLight2) * 100 + '%',
        v: getValue(hsv.v, j, isLight2) * 100 + '%'
      })
        .hex()
        .toHex()
    )
  }
  return colors
}
function getHue(h3, i, isLight2) {
  let hue
  if (h3 >= 60 && h3 <= 240) {
    hue = isLight2 ? h3 - hueStep * i : h3 + hueStep * i
  } else {
    hue = isLight2 ? h3 + hueStep * i : h3 - hueStep * i
  }
  if (hue < 0) {
    hue += 360
  } else if (hue >= 360) {
    hue -= 360
  }
  return hue
}
function getSaturation(s, i, isLight2) {
  let saturation
  if (isLight2) {
    saturation = s - saturationStep * i
  } else if (i == darkColorCount) {
    saturation = s + saturationStep
  } else {
    saturation = s + saturationStep2 * i
  }
  if (saturation > 1) {
    saturation = 1
  }
  if (isLight2 && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1
  }
  if (saturation < 0.06) {
    saturation = 0.06
  }
  return saturation
}
function getValue(v, i, isLight2) {
  let value
  if (isLight2) {
    value = v + brightnessStep1 * i
  } else {
    value = v - brightnessStep2 * i
  }
  if (value > 1) {
    value = 1
  } else if (value < 0) {
    value += 1
  }
  return value
}
function isColorValue(value) {
  try {
    Colorfuls(value)
    return true
  } catch (e) {
    return false
  }
}
function isDarkColor(value) {
  return Colorfuls(value).isDark()
}
function getColorObject(color) {
  if (color && isColorValue(color)) {
    const hex = Colorfuls(color).hex()
    const groups = getColorGroups(hex)
    const isDark2 = isDarkColor(hex)
    return {
      hasColor: true,
      groups,
      isDark: isDark2,
      varColor: groups[5],
      varBlackColor: groups[9],
      varFrontColor: isDark2 ? '#ffffff' : groups[9],
      varBackgroundColor: groups[5]
    }
  }
  return {
    hasColor: false,
    groups: [],
    isDark: false,
    varColor: '',
    varBlackColor: '',
    varFrontColor: '',
    varBackgroundColor: ''
  }
}

// src/helpers/exception.ts
var TYPE = {
  DEFAULT: 'fail',
  PARAM_ERROR: 'Invalid param',
  CONFIG_ERROR: 'Invalid config',
  PROP_ERROR: 'Invalid Prop'
}
var _Exception = class extends Error {
  constructor(error, type = TYPE.DEFAULT, source = 'Exception') {
    let msg = 'unknown'
    if (error instanceof _Exception || error instanceof Error) {
      msg = error.message
    } else if (error != null) {
      msg = error.toString()
    }
    super(msg)
    if (error instanceof _Exception) {
      this.source = error.source
      this.type = error.type
    } else {
      this.source = source
      this.type = type
    }
  }
  getMessage() {
    return this.message
  }
  toString() {
    return `[${this.source}] ${this.type}: ${this.getMessage()}`
  }
  getFailError() {
    return {
      errMsg: `${this.type}: ${this.getMessage()}`
    }
  }
  toLocaleString() {
    return this.toString()
  }
}
var Exception = _Exception
Exception.TYPE = TYPE
var exception_default = Exception

// src/helpers/validator.ts
var selectorValidator = value => {
  return (
    typeof value === 'string' ||
    value instanceof HTMLElement ||
    value instanceof Document
  )
}
var stringNumberArrayMixValidator = value => {
  return (
    isStringNumberMixArray(value) ||
    typeof value === 'string' ||
    isNumber(value)
  )
}
var sizeValidator = value => {
  return getSizeValue(value, Infinity) !== Infinity
}
var createEnumsValidator = enums => {
  const validator = value => {
    return enums.includes(value)
  }
  return validator
}
function getEnumsValue(enums, value) {
  return enums.includes(value) ? value : enums[0]
}
function isSvgComponent(value) {
  if (isObject(value)) {
    const obj2 = value
    if (
      typeof obj2.template === 'string' ||
      typeof obj2.render === 'function'
    ) {
      return true
    } else if (obj2.__file && obj2.__file.indexOf('.svg') > -1) {
      return true
    }
  }
  return false
}
var iconValidator = value => {
  return (typeof value === 'string' && !isURL(value)) || isSvgComponent(value)
}
var colorValidator = value => {
  return value == null || value === '' || isColorValue(value)
}
var emitEventValidator = e => e instanceof Event
var emitErrorValidator = e => e instanceof exception_default
var emitTypeValidator = payload => payload && typeof payload.type === 'string'

// vue:./Icon.vue
import {
  resolveDynamicComponent as _resolveDynamicComponent,
  normalizeClass as _normalizeClass,
  normalizeStyle as _normalizeStyle,
  openBlock as _openBlock2,
  createBlock as _createBlock
} from 'vue'
var _sfc_script2 = defineComponent2({
  name: 'fx-icon',
  props: {
    icon: {
      type: [String, Object],
      validator: iconValidator,
      required: true
    },
    spin: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const iconStyles = computed2(() => {
      const obj2 = {}
      props.color && (obj2['--fx-icon-color'] = props.color)
      if (props.width > 0 && props.height > 0) {
        obj2.width = props.width + 'px'
        obj2.height = props.height + 'px'
      } else if (props.size > 0) {
        obj2['--fx-icon-size'] = props.size + 'px'
      }
      return obj2
    })
    const component = computed2(() => {
      return isSvgComponent(props.icon) ? props.icon : _sfc_script
    })
    const iconName = computed2(() => {
      return isSvgComponent(props.icon) ? null : props.icon
    })
    return {
      iconName,
      iconStyles,
      component
    }
  }
})
function render2(_ctx, _cache) {
  return (
    _openBlock2(),
    _createBlock(
      _resolveDynamicComponent(_ctx.component),
      {
        class: _normalizeClass(['fx-icon', { spin: _ctx.spin }]),
        style: _normalizeStyle(_ctx.iconStyles),
        iconName: _ctx.iconName
      },
      null,
      8,
      ['class', 'style', 'iconName']
    )
  )
}
_sfc_script2.render = render2
_sfc_script2.__file = 'src/Icon/Icon.vue'

// src/Icon/index.ts
var install = withInstall(_sfc_script2)
var Icon_default = _sfc_script2

// src/helpers/constants.ts
var PLACEMENT_TYPES = ['bottom', 'top', 'left', 'right']
var STATE_TYPES = ['default', 'primary', 'warning', 'danger', 'success']
var SIZE_TYPES = ['large', 'middle', 'small']

// src/Button/button.ts
var BUTTON_SHAPE_TYPES = ['rectangle', 'round', 'circle', 'square']
var BUTTON_PATTERN_TYPES = [
  'default',
  'solid',
  'dashed',
  'borderless',
  'gradient'
]

// src/hooks/use-group.ts
import { inject, onBeforeUnmount, provide, reactive } from 'vue'
function getKey(name) {
  return `fx${capitalize(name)}Group`
}
function useGroup(name) {
  const children = reactive([])
  provide(getKey(name), {
    addChild(obj2) {
      children.push(obj2)
    },
    removeChild(obj2) {
      children.splice(children.indexOf(obj2), 1)
    }
  })
  return {
    children
  }
}
function useGroupItem(name, object) {
  const group = inject(getKey(name), null)
  group && group.addChild(object)
  onBeforeUnmount(() => {
    group && group.removeChild(object)
  })
  return {}
}

// vue:./Button.vue
import {
  resolveComponent as _resolveComponent,
  openBlock as _openBlock3,
  createBlock as _createBlock2,
  createCommentVNode as _createCommentVNode,
  renderSlot as _renderSlot,
  createTextVNode as _createTextVNode,
  createElementVNode as _createElementVNode2,
  normalizeClass as _normalizeClass2,
  normalizeStyle as _normalizeStyle2,
  createElementBlock as _createElementBlock2
} from 'vue'
var FORM_TYPES = ['button', 'submit', 'reset']
var _sfc_script3 = defineComponent3({
  name: 'fx-button',
  components: { Icon: _sfc_script2 },
  props: {
    size: {
      type: String,
      validator: createEnumsValidator(SIZE_TYPES),
      default: null
    },
    type: {
      type: String,
      validator: createEnumsValidator(STATE_TYPES),
      default: null
    },
    pattern: {
      type: String,
      validator: createEnumsValidator(BUTTON_PATTERN_TYPES),
      default: null
    },
    shape: {
      type: String,
      validator: createEnumsValidator(BUTTON_SHAPE_TYPES),
      default: null
    },
    formType: {
      type: String,
      validator: createEnumsValidator(FORM_TYPES),
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [String, Object],
      validator: iconValidator
    },
    ghost: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const buttonGroupOptions = inject2('fxButtonGroupOptions', null)
    const classNames = computed3(() => {
      const { size, pattern, shape } = buttonGroupOptions || props
      return [
        'type--' +
          (props.color && isColorValue(props.color)
            ? STATE_TYPES[1]
            : getEnumsValue(STATE_TYPES, props.type)),
        'pattern--' + getEnumsValue(BUTTON_PATTERN_TYPES, pattern),
        'size--' + getEnumsValue(SIZE_TYPES, size),
        'shape--' + getEnumsValue(BUTTON_SHAPE_TYPES, shape)
      ]
    })
    const realFormType = computed3(() => {
      return getEnumsValue(FORM_TYPES, props.formType)
    })
    const styles = computed3(() => {
      const obj2 = {}
      if (props.color && isColorValue(props.color)) {
        const colors = getColorGroups(props.color)
        const isDark2 = isDarkColor(props.color)
        const pattern = getEnumsValue(
          BUTTON_PATTERN_TYPES,
          (buttonGroupOptions == null ? void 0 : buttonGroupOptions.pattern) ||
            props.pattern
        )
        obj2[`--fx-color`] = colors[5]
        obj2[`--fx-dark-color`] = colors[6]
        obj2[`--fx-light-color`] = colors[4]
        if (!isDark2 && (pattern === 'default' || pattern === 'gradient')) {
          obj2[`--fx-front-color`] = colors[9]
        }
      }
      return obj2
    })
    useGroupItem('button', Symbol('uid'))
    return {
      realFormType,
      classNames,
      styles
    }
  }
})
var _hoisted_12 = ['disabled', 'type']
var _hoisted_2 = /* @__PURE__ */ _createTextVNode('button')
function render3(_ctx, _cache) {
  const _component_Icon = _resolveComponent('Icon')
  return (
    _openBlock3(),
    _createElementBlock2(
      'button',
      {
        class: _normalizeClass2([
          'fx-button',
          [
            _ctx.classNames,
            {
              'has--icon': _ctx.loading || _ctx.icon,
              ghost: !!_ctx.ghost,
              transparent: !!_ctx.transparent
            }
          ]
        ]),
        disabled: _ctx.disabled,
        type: _ctx.realFormType,
        style: _normalizeStyle2(_ctx.styles)
      },
      [
        _ctx.loading
          ? (_openBlock3(),
            _createBlock2(_component_Icon, {
              key: 0,
              icon: 'LoadingOutlined',
              spin: true
            }))
          : _ctx.icon
          ? (_openBlock3(),
            _createBlock2(
              _component_Icon,
              {
                key: 1,
                icon: _ctx.icon
              },
              null,
              8,
              ['icon']
            ))
          : _createCommentVNode('v-if', true),
        _createElementVNode2('span', null, [
          _renderSlot(_ctx.$slots, 'default', {}, () => [_hoisted_2])
        ])
      ],
      14,
      _hoisted_12
    )
  )
}
_sfc_script3.render = render3
_sfc_script3.__file = 'src/Button/Button.vue'

// vue:./ButtonGroup.vue
import {
  defineComponent as defineComponent4,
  provide as provide2,
  reactive as reactive2,
  watch
} from 'vue'
import {
  renderSlot as _renderSlot2,
  normalizeClass as _normalizeClass3,
  openBlock as _openBlock4,
  createElementBlock as _createElementBlock3
} from 'vue'
var _sfc_script4 = defineComponent4({
  name: 'fx-button-group',
  props: {
    size: {
      type: String,
      validator: createEnumsValidator(SIZE_TYPES)
    },
    pattern: {
      type: String,
      validator: createEnumsValidator(BUTTON_PATTERN_TYPES)
    },
    shape: {
      type: String,
      validator: createEnumsValidator(BUTTON_SHAPE_TYPES)
    }
  },
  setup(props) {
    const { children } = useGroup('button')
    const options = reactive2({
      size: getEnumsValue(SIZE_TYPES),
      pattern: getEnumsValue(BUTTON_PATTERN_TYPES),
      shape: getEnumsValue(BUTTON_SHAPE_TYPES)
    })
    watch(
      props,
      val => {
        options.size = getEnumsValue(SIZE_TYPES, val.size)
        options.pattern = getEnumsValue(BUTTON_PATTERN_TYPES, val.pattern)
        options.shape = getEnumsValue(BUTTON_SHAPE_TYPES, val.shape)
      },
      {
        immediate: true
      }
    )
    provide2('fxButtonGroupOptions', options)
    return { children, options }
  }
})
function render4(_ctx, _cache) {
  return (
    _openBlock4(),
    _createElementBlock3(
      'div',
      {
        class: _normalizeClass3([
          'fx-button-group',
          [
            'size--' + _ctx.options.size,
            'pattern--' + _ctx.options.pattern,
            'shape--' + _ctx.options.shape,
            'count--' + (_ctx.children.length || 1)
          ]
        ])
      },
      [_renderSlot2(_ctx.$slots, 'default')],
      2
    )
  )
}
_sfc_script4.render = render4
_sfc_script4.__file = 'src/Button/ButtonGroup.vue'

// src/Button/index.ts
var Button_default = _sfc_script3
var install2 = multiWithInstall(_sfc_script3, [_sfc_script4])

// src/ButtonGroup/index.ts
var ButtonGroup_default = _sfc_script4
var install3 = withNoopInstall(_sfc_script4)

// vue:./Image.vue
import {
  defineComponent as defineComponent5,
  onMounted,
  ref,
  watch as watch2,
  onBeforeUnmount as onBeforeUnmount2,
  computed as computed4
} from 'vue'

// src/Image/load-image.ts
var DEFAULT_EVENTS = [
  'scroll',
  'wheel',
  'mousewheel',
  'resize',
  'animationend',
  'transitionend',
  'touchmove'
]
function loadNow(vm) {
  loadImageAsync(
    vm,
    res => {
      vm.onLoad(res)
    },
    e => {
      vm.onError(e)
    }
  )
}
function loadImageAsync(item, resolve, reject) {
  const image = new Image()
  if (!item || !item.src) {
    const err = new exception_default(
      'src is required',
      exception_default.TYPE.DEFAULT,
      'Image'
    )
    return reject(err)
  }
  image.src = item.src
  image.onload = function (e) {
    resolve({
      naturalHeight: image.naturalHeight,
      naturalWidth: image.naturalWidth,
      src: item.src,
      event: e
    })
  }
  image.onerror = function () {
    reject(
      new exception_default(
        `src "${item.src}" not found`,
        exception_default.TYPE.DEFAULT,
        'Image'
      )
    )
  }
}
var ListenerQueue = []
function lazyCheck(vm) {
  if (vm.checkInView()) {
    loadImageAsync(
      vm,
      res => {
        removeComponentFromLazy(vm.uid)
        vm.onLoad(res)
      },
      e => {
        removeComponentFromLazy(vm.uid)
        vm.onError(e)
      }
    )
  }
}
function removeComponentFromLazy(uid2) {
  const index = lazyQueueIndexOf(uid2)
  if (index > -1) {
    ListenerQueue.splice(index, 1)
  }
  if (ListenerQueue.length === 0) {
    clearTimeout(offTimer)
    offTimer = window.setTimeout(off, 1e3)
  }
}
function lazyQueueIndexOf(uid2) {
  for (let i = 0; i < ListenerQueue.length; i++) {
    if (ListenerQueue[i].uid === uid2) {
      return i
    }
  }
  return -1
}
function addLazyQueue(vm) {
  const index = lazyQueueIndexOf(vm.uid)
  if (index === -1) {
    ListenerQueue.push(vm)
  } else {
    ListenerQueue[index] = vm
  }
  lazyCheck(vm)
  on()
}
function checkQueue() {
  ListenerQueue.forEach(vm => {
    lazyCheck(vm)
  })
}
var isOn = false
var offTimer
function on() {
  clearTimeout(offTimer)
  if (!isOn) {
    DEFAULT_EVENTS.forEach(eventName => {
      window.addEventListener(eventName, checkQueue, false)
    })
  }
}
function off() {
  if (ListenerQueue.length === 0) {
    DEFAULT_EVENTS.forEach(eventName => {
      window.removeEventListener(eventName, checkQueue, false)
    })
    isOn = false
  }
}

// vue:./Image.vue
import {
  normalizeStyle as _normalizeStyle3,
  openBlock as _openBlock5,
  createElementBlock as _createElementBlock4,
  createCommentVNode as _createCommentVNode2,
  resolveComponent as _resolveComponent2,
  createVNode as _createVNode,
  normalizeClass as _normalizeClass4
} from 'vue'
var MODE_NAMES = [
  'scaleToFill',
  'aspectFit',
  'aspectFill',
  'widthFix',
  'top',
  'bottom',
  'left',
  'right',
  'top left',
  'top right',
  'bottom left',
  'bottom right'
]
var LAZY_PRELOAD = 1.3
var _sfc_script5 = defineComponent5({
  name: 'fx-image',
  components: { Icon: _sfc_script2 },
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      validator: createEnumsValidator(MODE_NAMES),
      default: null
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: Number,
      default: null
    },
    draggable: {
      type: Boolean,
      default: true
    },
    loadingIcon: {
      type: [String, Object],
      validator: iconValidator,
      default: 'ImageOutlined'
    },
    errorIcon: {
      type: [String, Object],
      validator: iconValidator,
      default: 'ImageBreakOutlined'
    },
    iconSize: {
      type: Number,
      default: null
    }
  },
  emits: {
    load: payload =>
      payload &&
      payload.width > 0 &&
      payload.height > 0 &&
      typeof payload.src === 'string',
    error: emitErrorValidator
  },
  setup(props, { emit }) {
    const loading = ref(true)
    const error = ref(false)
    const root = ref()
    const currentSrc = ref(null)
    const uid2 = Symbol()
    function load() {
      const loadObject = {
        src: props.src,
        uid: uid2,
        checkInView,
        onLoad,
        onError
      }
      props.lazyLoad ? addLazyQueue(loadObject) : loadNow(loadObject)
    }
    function checkInView() {
      const { top, right, bottom, left } = root.value.getBoundingClientRect()
      return (
        top < window.innerHeight * LAZY_PRELOAD &&
        bottom > 0 &&
        left < window.innerWidth * LAZY_PRELOAD &&
        right > 0
      )
    }
    function onLoad(res) {
      if (res.src === props.src) {
        loading.value = false
        error.value = false
        currentSrc.value = res.src
      }
      emit('load', {
        width: res.naturalWidth,
        height: res.naturalHeight,
        src: res.src
      })
    }
    function onError(e) {
      loading.value = false
      error.value = true
      emit('error', e)
    }
    function onDrag(e) {
      if (!props.draggable) {
        e.preventDefault()
      }
    }
    onMounted(() => props.src && load())
    onBeforeUnmount2(() => removeComponentFromLazy(uid2))
    watch2(() => props.src, load)
    const modeClassName = computed4(() => {
      return (
        'mode--' + getEnumsValue(MODE_NAMES, props.mode).replace(/\s+/g, '-')
      )
    })
    return {
      currentSrc,
      modeClassName,
      loading,
      error,
      root,
      onDrag
    }
  }
})
var _hoisted_13 = {
  class: 'fx-image',
  ref: 'root'
}
var _hoisted_22 = {
  key: 1,
  class: 'fx-image_loading'
}
var _hoisted_3 = {
  key: 2,
  class: 'fx-image_error'
}
var _hoisted_4 = ['src']
function render5(_ctx, _cache) {
  const _component_Icon = _resolveComponent2('Icon')
  return (
    _openBlock5(),
    _createElementBlock4(
      'div',
      _hoisted_13,
      [
        _ctx.aspectRatio != null && _ctx.aspectRatio > 0
          ? (_openBlock5(),
            _createElementBlock4(
              'span',
              {
                key: 0,
                class: 'fx-image_ratio',
                style: _normalizeStyle3({
                  paddingTop: _ctx.aspectRatio * 100 + '%'
                })
              },
              null,
              4
            ))
          : _createCommentVNode2('v-if', true),
        _ctx.loading
          ? (_openBlock5(),
            _createElementBlock4('i', _hoisted_22, [
              _createVNode(
                _component_Icon,
                {
                  icon: _ctx.loadingIcon,
                  size: _ctx.iconSize
                },
                null,
                8,
                ['icon', 'size']
              )
            ]))
          : _createCommentVNode2('v-if', true),
        _ctx.error
          ? (_openBlock5(),
            _createElementBlock4('i', _hoisted_3, [
              _createVNode(
                _component_Icon,
                {
                  icon: _ctx.errorIcon,
                  size: _ctx.iconSize
                },
                null,
                8,
                ['icon', 'size']
              )
            ]))
          : _createCommentVNode2('v-if', true),
        _ctx.currentSrc
          ? (_openBlock5(),
            _createElementBlock4(
              'img',
              {
                key: 3,
                class: _normalizeClass4(['fx-image_img', [_ctx.modeClassName]]),
                src: _ctx.currentSrc,
                onDragstart:
                  _cache[0] ||
                  (_cache[0] = (...args) => _ctx.onDrag && _ctx.onDrag(...args))
              },
              null,
              42,
              _hoisted_4
            ))
          : _createCommentVNode2('v-if', true)
      ],
      512
    )
  )
}
_sfc_script5.render = render5
_sfc_script5.__file = 'src/Image/Image.vue'

// src/Image/index.ts
var install4 = withInstall(_sfc_script5)
var Image_default = _sfc_script5

// vue:./Popover.vue
import { defineComponent as defineComponent6 } from 'vue'

// src/Popover/use-popover.ts
import {
  computed as computed6,
  ref as ref4,
  nextTick,
  watch as watch4
} from 'vue'

// src/hooks/use-resize.ts
import {
  onBeforeMount,
  onBeforeUnmount as onBeforeUnmount3,
  ref as ref2
} from 'vue'
var clientCache = { w: 0, h: 0 }
var callbacks = []
var callbackTimer
function onCallback() {
  clearTimeout(callbackTimer)
  callbackTimer = window.setTimeout(() => {
    clientCache.w = document.documentElement.clientWidth
    clientCache.h = document.documentElement.clientHeight
    callbacks.forEach(v => {
      v(clientCache.w, clientCache.h)
    })
  }, 100)
}
function addCallback(fn) {
  callbacks.push(fn)
  if (callbacks.length === 1) {
    window.addEventListener('resize', onCallback)
  }
  return function removeCallback() {
    callbacks.splice(callbacks.indexOf(fn), 1)
    if (callbacks.length === 0) {
      window.removeEventListener('resize', onCallback)
    }
  }
}
function useResize() {
  if (typeof document !== 'undefined') {
    onCallback()
  }
  const client = ref2({
    width: clientCache.w,
    height: clientCache.h
  })
  let stopHandle
  onBeforeMount(
    () =>
      (stopHandle = addCallback((w, h3) => {
        client.value = {
          width: w,
          height: h3
        }
      }))
  )
  onBeforeUnmount3(() => stopHandle && stopHandle())
  return {
    client
  }
}

// src/popup/use-popup.ts
import {
  computed as computed5,
  onMounted as onMounted2,
  ref as ref3,
  watch as watch3,
  inject as inject3
} from 'vue'

// src/helpers/layer.ts
var popupZIndex = 2e3
var widgetZIndex = 1e3

// src/helpers/device.ts
var isBrowser = typeof window !== 'undefined'
var isMobile = isBrowser
  ? /(iPhone|iPod|iPad|Android|ios)/i.test(navigator.userAgent) ||
    'ontouchstart' in document.documentElement
  : false
var isIOS = isMobile && /(iPhone|iPod|iPad|ios)/i.test(navigator.userAgent)

// src/helpers/events.ts
var euid = 0
var callbacks2 = {}
function onEvent(e) {
  const currentTarget = e.currentTarget
  const type = e.type
  const uid2 = currentTarget._euid
  if (uid2 && callbacks2[type] && callbacks2[type][uid2]) {
    const currentCallbacks = callbacks2[type][uid2]
    const $el =
      currentTarget === document ? document.documentElement : currentTarget
    currentCallbacks.forEach(callback => {
      callback.call(callback, e, $el)
    })
  }
}
function addEvent(type, callback, $el = document) {
  if (!(typeof callback === 'function') || !type) {
    return
  }
  const target = $el === document.documentElement ? document : $el
  if (!target._euid) {
    target._euid = ++euid
  }
  const uid2 = target._euid
  if (!callbacks2[type]) {
    callbacks2[type] = {}
  }
  if (!callbacks2[type][uid2]) {
    callbacks2[type][uid2] = []
    target.addEventListener(type, onEvent, false)
  }
  callbacks2[type][uid2].push(callback)
}
function removeEvent(type, callback, $el = document) {
  const target = $el === document.documentElement ? document : $el
  const uid2 = target._euid
  if (callbacks2[type] && callbacks2[type][uid2]) {
    const currentCallbacks = callbacks2[type][uid2]
    let index = -1
    for (let i = 0; i < currentCallbacks.length; i++) {
      if (currentCallbacks[i] == callback) {
        index = i
        break
      }
    }
    if (index > -1) {
      currentCallbacks.splice(index, 1)
      if (currentCallbacks.length === 0) {
        target.removeEventListener(type, onEvent, false)
        delete callbacks2[type][uid2]
      }
    }
  }
}
var passiveSupported = false
try {
  const options = Object.defineProperty({}, 'passive', {
    get: function () {
      return (passiveSupported = true)
    }
  })
  window.addEventListener('test', function () {}, options)
} catch (err) {}
var touchstart = isMobile ? 'touchstart' : 'mousedown'
var touchmove = isMobile ? 'touchmove' : 'mousemove'
var touchend = isMobile ? 'touchend' : 'mouseup'
var touchOptions = passiveSupported ? { passive: false } : false
function getStretchOffset(offset) {
  return Math.ceil(offset / Math.log(Math.abs(offset)))
}
var touchEvent = {
  touchstart,
  touchmove,
  touchend,
  getStretchOffset,
  addListeners($el, object) {
    $el.addEventListener(touchstart, object, touchOptions)
    $el.addEventListener(touchmove, object, touchOptions)
    $el.addEventListener(touchend, object, touchOptions)
    if (touchend === 'mouseup') {
      $el.addEventListener('mouseleave', object, touchOptions)
    }
  },
  removeListeners($el, object) {
    $el.removeEventListener(touchstart, object, false)
    $el.removeEventListener(touchmove, object, false)
    $el.removeEventListener(touchend, object, false)
    if (touchend === 'mouseup') {
      $el.removeEventListener('mouseleave', object, false)
    }
  },
  getTouch(e) {
    const { pageX, pageY, clientX, clientY } =
      touchstart === 'touchstart'
        ? e.targetTouches[0] || {
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0
          }
        : e
    return {
      pageX,
      pageY,
      clientX,
      clientY
    }
  }
}
function addLongPressEvent($el, callback) {
  let coords
  const object = {
    handleEvent(e) {
      switch (e.type) {
        case touchstart:
          this.onStart(e)
          break
        case touchmove:
          this.onMove(e)
          break
        case touchend:
          this.onEnd(e)
          break
        case 'mouseleave':
          this.onEnd(e)
          break
        default:
          break
      }
    },
    onStart(e) {
      const { pageX, pageY } = touchEvent.getTouch(e)
      coords = {
        startX: pageX,
        startY: pageY,
        timeStamp: e.timeStamp
      }
    },
    onMove(e) {
      if (!coords) {
        return
      }
      const { pageX, pageY } = touchEvent.getTouch(e)
      if (
        Math.abs(pageX - coords.startX) >= 10 ||
        Math.abs(pageY - coords.startY) >= 10
      ) {
        coords = null
      }
    },
    onEnd(e) {
      if (coords) {
        typeof callback === 'function' &&
          callback({
            type: e.timeStamp - coords.timeStamp >= 800 ? 'long-press' : 'click'
          })
      }
      coords = null
    }
  }
  touchEvent.addListeners($el, object)
  return function removeLongPressEvent() {
    touchEvent.removeListeners($el, object)
  }
}

// src/hooks/use-blur.ts
import { onBeforeUnmount as onBeforeUnmount4 } from 'vue'
function useBlur(callback) {
  let off2 = null
  function addEvent2() {
    if (!off2) {
      addEvent('click', callback, document)
      off2 = () => removeEvent('click', callback, document)
    }
  }
  function removeEvent2() {
    if (off2) {
      off2()
      off2 = null
    }
  }
  onBeforeUnmount4(() => removeEvent2)
  return { addEvent: addEvent2, removeEvent: removeEvent2 }
}

// src/popup/use-popup.ts
var zIndex = popupZIndex
function getNewZIndex() {
  return zIndex++
}
function useApiHook(emit) {
  const apis = inject3('fxApis', {})
  const emitHook = (event, res) => {
    apis.in ? apis.in(event, res) : emit(event, res)
  }
  function cancelHook(customCancel) {
    apis.out && apis.out('customCancel', customCancel)
  }
  return {
    emitHook,
    cancelHook
  }
}
function usePopup(props, ctx, useOptions) {
  const { emitHook, cancelHook } = useApiHook(ctx.emit)
  const isShow = ref3(false)
  const zIndex2 = ref3(popupZIndex)
  const visible2 = ref3(false)
  const top = ref3(null)
  const position = ref3(null)
  let isShowing = false
  let isHiding = false
  let visibleTimer
  const visibleBlur = useBlur(onBlur)
  function doShow(callback) {
    if (isShowing) {
      return false
    }
    isHiding = false
    isShowing = true
    clearTimeout(visibleTimer)
    if (useOptions.forbidScroll !== false) {
      addClassName(document.body, 'fx-overflow-hidden')
    } else {
      position.value = 'absolute'
      top.value = getScrollTop() + 'px'
    }
    if (useOptions.enableUseBlur) {
      visibleBlur.addEvent()
    }
    zIndex2.value = getNewZIndex()
    isShow.value = true
    visibleTimer = window.setTimeout(() => {
      visible2.value = true
      visibleTimer = window.setTimeout(() => {
        isShowing = false
        callback()
      }, 210)
    }, 17)
    if (!props.visible) {
      emitHook('update:visible', true)
    }
    return true
  }
  function show() {
    const isSuccess = doShow(() => {
      emitVisibleState('shown')
    })
    if (isSuccess) {
      emitVisibleState('show')
      afterCall('afterShow')
    }
  }
  function _doHide(callback) {
    if (isHiding) {
      return false
    }
    isHiding = true
    isShowing = false
    removeClassName(document.body, 'fx-overflow-hidden')
    visible2.value = false
    clearTimeout(visibleTimer)
    visibleTimer = window.setTimeout(() => {
      isShow.value = false
      isHiding = false
      position.value = null
      top.value = null
      callback && typeof callback === 'function' && callback()
    }, 210)
    if (props.visible) {
      emitHook('update:visible', false)
    }
    return true
  }
  function hide(lifeName) {
    const isSuccess = _doHide(() => {
      emitVisibleState('hidden')
      afterCall('afterHidden')
    })
    if (isSuccess) {
      lifeName && afterCall(lifeName)
      emitVisibleState('hide')
    }
    visibleBlur.removeEvent()
  }
  function afterCall(lifeName) {
    if (typeof useOptions[lifeName] === 'function') {
      useOptions[lifeName]()
    }
  }
  function emitVisibleState(state) {
    emitHook('visible-state-change', {
      state
    })
  }
  function onBlur() {
    customCancel('blur')
  }
  function onMaskClick() {
    if (!props.maskClosable) {
      return
    }
    customCancel('maskClick')
  }
  function onCloseClick() {
    customCancel('closeClick')
  }
  function onCancelClick() {
    customCancel('cancelClick')
  }
  const customCancel = (key, focus = false) => {
    if (isShowing && !focus) {
      return
    }
    emitHook('cancel', { source: key })
    hide('afterCancel')
  }
  const customConfirm = detail => {
    emitHook('confirm', detail)
    hide('afterConfirm')
  }
  onMounted2(() => {
    props.visible && show()
  })
  const popupStyles = computed5(() => {
    const styles = {
      zIndex: zIndex2.value
    }
    if (top.value != null) {
      styles.top = top.value
    }
    if (position.value != null) {
      styles.position = position.value
    }
    return styles
  })
  watch3(
    () => props.visible,
    val => {
      val ? show() : hide()
    }
  )
  cancelHook(customCancel)
  return {
    isShow,
    visible2,
    zIndex: zIndex2,
    popupStyles,
    show,
    hide,
    customConfirm,
    customCancel,
    noop,
    onMaskClick,
    onCloseClick,
    onCancelClick
  }
}
function usePopupExtend(ctx) {
  const popup = ref3()
  const { emitHook, cancelHook } = useApiHook(ctx.emit)
  const customCancel = (key, focus = false) => {
    popup.value && popup.value.customCancel(key, focus)
  }
  const customConfirm = detail => {
    popup.value && popup.value.customConfirm(detail)
  }
  const onVisibleStateChange = e => {
    emitHook('visible-state-change', e)
  }
  function onCancelClick() {
    customCancel('cancelClick')
  }
  const onCancel = res => {
    emitHook('cancel', res)
  }
  function onConfirm(res) {
    emitHook('confirm', res)
  }
  function onUpdateVisible(value) {
    emitHook('update:visible', value)
  }
  cancelHook(customCancel)
  return {
    popup,
    customCancel,
    customConfirm,
    onUpdateVisible,
    onVisibleStateChange,
    onCancelClick,
    onCancel,
    onConfirm
  }
}

// src/Popover/use-popover.ts
var DEFAULT_POS = {
  t: null,
  r: null,
  b: null,
  l: null,
  at: null,
  ar: null,
  ab: null,
  al: null
}
function usePopover(props, ctx) {
  const padding = 8
  const innerEl = ref4()
  const isShow = ref4(false)
  let pos = cloneData(DEFAULT_POS)
  const popupOptions = {
    afterShow() {
      nextTick(() => {
        updatePos()
      })
    },
    afterHidden() {
      pos = cloneData(DEFAULT_POS)
      isShow.value = false
    },
    forbidScroll: true,
    enableUseBlur: false
  }
  const popup = usePopup(props, ctx, popupOptions)
  const { client } = useResize()
  function updatePos() {
    const $target = querySelector(props.selector)
    if (!$target) {
      return
    }
    const placement = getEnumsValue(PLACEMENT_TYPES, props.placement)
    const rect = $target.getBoundingClientRect()
    const { clientWidth: iw, clientHeight: ih } = innerEl.value
    const { width: dw, height: dh } = client.value
    pos = cloneData(DEFAULT_POS)
    if (placement === 'top' || placement === 'bottom') {
      pos.al = rect.left + rect.width / 2 - 5
      pos.l = rect.left + rect.width / 2 - iw / 2
      if (pos.l < padding) {
        pos.l = padding
      } else if (pos.l + iw > dw - padding) {
        pos.l -= pos.l + iw - (dw - padding)
      }
      pos.al = pos.al - pos.l
      if (placement === 'bottom') {
        pos.at = -4
        pos.t = rect.bottom + 7
      } else {
        pos.ab = -4
        pos.b = dh - rect.top + 7
      }
    } else {
      pos.at = rect.top + rect.height / 2 - 5
      pos.t = rect.top + rect.height / 2 - ih / 2
      if (pos.t < padding) {
        pos.t = padding
      } else if (pos.t + ih > dh - padding) {
        pos.t -= pos.t + ih - (dh - padding)
      }
      pos.at = pos.at - pos.t
      if (placement === 'right') {
        pos.al = -4
        pos.l = rect.right + 7
      } else {
        pos.ar = -4
        pos.r = dw - rect.left + 7
      }
    }
    isShow.value = true
  }
  const arrowStyles = computed6(() => {
    if (!isShow.value) {
      return { left: '200vw', top: '200vh' }
    }
    const styles = {}
    pos.at != null && (styles.top = pos.at + 'px')
    pos.ar != null && (styles.right = pos.ar + 'px')
    pos.ab != null && (styles.bottom = pos.ab + 'px')
    pos.al != null && (styles.left = pos.al + 'px')
    return styles
  })
  const innerStyles = computed6(() => {
    const { width, height } = client.value
    const styles = {
      maxWidth: width - padding * 2 + 'px',
      maxHeight: height - padding * 2 + 'px'
    }
    if (!isShow.value) {
      return styles
    }
    pos.t != null && (styles.top = pos.t + 'px')
    pos.r != null && (styles.right = pos.r + 'px')
    pos.b != null && (styles.bottom = pos.b + 'px')
    pos.l != null && (styles.left = pos.l + 'px')
    return styles
  })
  watch4(
    () => props.showMask,
    val => {
      popupOptions.forbidScroll = !!val
      popupOptions.enableUseBlur = !val
    },
    {
      immediate: true
    }
  )
  return {
    ...popup,
    innerEl,
    arrowStyles,
    innerStyles
  }
}

// src/popup/popup.ts
var VISIBLE_STATE_TYPES = ['show', 'shown', 'hide', 'hidden']
var popupProps = {
  visible: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  }
}
var popupEmits = {
  'visible-state-change': payload =>
    payload && VISIBLE_STATE_TYPES.includes(payload.state),
  'update:visible': visible => typeof visible === 'boolean',
  cancel: payload => payload && typeof payload.source === 'string',
  confirm: payload => !!payload
}
var popupExtendProps = {
  visible: {
    type: Boolean,
    default: false
  }
}

// src/Popover/popover.ts
var popoverProps = {
  ...popupProps,
  selector: {
    type: [String, Object],
    validator: selectorValidator,
    required: true
  },
  placement: {
    type: String,
    validator: createEnumsValidator(PLACEMENT_TYPES),
    default: getEnumsValue(PLACEMENT_TYPES)
  },
  showMask: {
    type: Boolean,
    default: true
  }
}
var popoverEmits = { ...popupEmits }

// vue:./Popover.vue
import {
  createElementVNode as _createElementVNode3,
  normalizeStyle as _normalizeStyle4,
  renderSlot as _renderSlot3,
  toDisplayString as _toDisplayString,
  vShow as _vShow,
  mergeProps as _mergeProps,
  withDirectives as _withDirectives,
  Teleport as _Teleport,
  openBlock as _openBlock6,
  createBlock as _createBlock3
} from 'vue'
var _sfc_script6 = defineComponent6({
  name: 'fx-popover',
  props: {
    ...popoverProps,
    content: {
      type: String,
      default: ''
    }
  },
  emits: { ...popoverEmits },
  setup(props, ctx) {
    const popoverHook = usePopover(props, ctx)
    return {
      ...popoverHook
    }
  }
})
var _hoisted_14 = { class: 'fx-popover_content' }
var _hoisted_23 = { class: 'fx-popover_text' }
function render6(_ctx, _cache) {
  return (
    _openBlock6(),
    _createBlock3(_Teleport, { to: 'body' }, [
      _withDirectives(
        _createElementVNode3(
          'div',
          _mergeProps(
            {
              class: [
                'fx-popover fx-popup',
                { visible: _ctx.visible2, 'no--mask': !_ctx.showMask }
              ],
              style: _ctx.popupStyles
            },
            _ctx.$attrs
          ),
          [
            _createElementVNode3('div', {
              class: 'fx-mask',
              onClick:
                _cache[0] ||
                (_cache[0] = (...args) =>
                  _ctx.onMaskClick && _ctx.onMaskClick(...args))
            }),
            _createElementVNode3(
              'div',
              {
                class: 'fx-popover_inner',
                ref: 'innerEl',
                style: _normalizeStyle4(_ctx.innerStyles)
              },
              [
                _createElementVNode3(
                  'i',
                  {
                    class: 'fx-popover_arrow',
                    style: _normalizeStyle4(_ctx.arrowStyles)
                  },
                  null,
                  4
                ),
                _createElementVNode3('div', _hoisted_14, [
                  _renderSlot3(_ctx.$slots, 'default', {}, () => [
                    _createElementVNode3(
                      'div',
                      _hoisted_23,
                      _toDisplayString(_ctx.content),
                      1
                    )
                  ])
                ])
              ],
              4
            )
          ],
          16
        ),
        [[_vShow, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script6.render = render6
_sfc_script6.__file = 'src/Popover/Popover.vue'

// src/popup/api.ts
import { createApp } from 'vue'

// src/apis/callback.ts
function getCallbackFns(options) {
  return {
    success:
      typeof options.success === 'function'
        ? options.success
        : noop.bind(options),
    fail(error) {
      if (typeof options.fail === 'function') {
        options.fail(new exception_default(error))
      } else {
        console.error(error)
      }
    },
    complete:
      typeof options.complete === 'function'
        ? options.complete
        : noop.bind(options)
  }
}

// src/popup/api.ts
var $refs = {}
function createShowPopup({
  apiName,
  createHook,
  component,
  singleMode,
  hookOptions
}) {
  return function show(object) {
    let options
    if (typeof object === 'string') {
      options = {
        title: object
      }
    } else if (!isObject(object)) {
      options = {}
    } else {
      options = object
    }
    if (hookOptions) {
      options = hookOptions(options)
    }
    const { success, fail, complete } = getCallbackFns(options)
    return new Promise(function (resolve, reject) {
      try {
        const key = apiName.replace('show', '')
        const hook = createHook(function (res) {
          success(res)
          complete()
          resolve(res)
        })
        singleMode && clear(key)
        const fns = {}
        const propsData = {}
        objectForEach(options, (v, k) => {
          if (!['success', 'fail', 'complete'].includes(k)) {
            if (k === 'mode') {
              propsData.initialMode = v
            } else if (k === 'value') {
              propsData.modelValue = v
            } else {
              propsData[k] = v
            }
          }
        })
        const app = createApp(
          component,
          Object.assign(propsData, {
            visible: true
          })
        )
        app.provide('fxApis', {
          in(hookEvent, res) {
            if (
              hookEvent === 'visible-state-change' &&
              res.state === 'hidden'
            ) {
              app.unmount()
              singleMode && remove(key, $ref.uid)
            }
            hook && hook(hookEvent, res)
          },
          out(key2, value) {
            fns[key2] = value
          }
        })
        if (typeof document !== 'undefined') {
          app.mount(document.createElement('div'))
        }
        const $ref = {
          uid: app._uid,
          fns
        }
        singleMode && ($refs[key] = $ref)
        return app
      } catch (e) {
        fail(new exception_default(e))
        complete()
        reject(new exception_default(e))
      }
    })
  }
}
function clear(key) {
  if ($refs[key]) {
    const fns = $refs[key].fns
    fns.customCancel && fns.customCancel('clear', true)
    delete $refs[key]
  }
}
function remove(key, uid2) {
  if ($refs[key] && $refs[key].uid === uid2) {
    delete $refs[key]
  }
}
function createHidePopup({ apiName }) {
  return function hide(object) {
    const { success, fail, complete } = getCallbackFns(
      isObject(object) ? object : {}
    )
    return new Promise((resolve, reject) => {
      try {
        clear(apiName.replace('hide', ''))
        success({})
        complete()
        resolve({})
      } catch (e) {
        fail(new exception_default(e))
        complete()
        reject(new exception_default(e))
      }
    })
  }
}
function createConfirmHook(done) {
  const hook = (hookEvent, args) => {
    if (hookEvent === 'cancel') {
      done({
        cancel: true,
        ...args
      })
    } else if (hookEvent === 'confirm') {
      done({
        confirm: true,
        detail: args
      })
    }
  }
  return hook
}
function createAlertHook(done) {
  const hook = (hookEvent, args) => {
    if (hookEvent === 'visible-state-change' && args.state === 'shown') {
      done({})
    }
  }
  return hook
}

// src/Popover/index.ts
var showPopover = createShowPopup({
  apiName: 'showPopover',
  component: _sfc_script6,
  createHook: createAlertHook
})
var Popover_default = _sfc_script6
var install5 = withInstall(_sfc_script6)

// vue:./Drawer.vue
import {
  defineComponent as defineComponent8,
  computed as computed7,
  toRef,
  watch as watch5
} from 'vue'

// vue:./NavBar.vue
import { defineComponent as defineComponent7 } from 'vue'

// src/Locale/index.ts
import { ref as ref5 } from 'vue'

// src/Locale/lang/zh-CN.ts
var zh_CN_default = {
  lang: 'zh-CN',
  actionSheetCancelText: '\u53D6\u6D88',
  calendarConfirmText: '\u786E\u5B9A',
  calendarWeekDayTexts: {
    0: '\u65E5',
    1: '\u4E00',
    2: '\u4E8C',
    3: '\u4E09',
    4: '\u56DB',
    5: '\u4E94',
    6: '\u516D'
  },
  calendarMaxRangeTips:
    '\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7{{maxRange}}\u5929',
  calendarMonthCaption: 'YYYY\u5E74MM\u6708',
  calendarSelectedStartText: '\u5F00\u59CB',
  calendarSelectedEndText: '\u7ED3\u675F',
  cascaderDefaultTitle: '\u8BF7\u9009\u62E9',
  copyText: '\u590D\u5236',
  countDownDayUnit: '\u5929',
  datePickerConfirmText: '\u786E\u5B9A',
  datePickerCancelText: '\u53D6\u6D88',
  dialogConfirmText: '\u786E\u5B9A',
  dialogCancelText: '\u53D6\u6D88',
  flatListLoadingText: '\u6B63\u5728\u52A0\u8F7D',
  imageUploaderDeleteContent:
    '\u8981\u5220\u9664\u8FD9\u5F20\u56FE\u7247\u5417\uFF1F',
  imageUploaderDeleteConfirmText: '\u5220\u9664',
  navBarBackButtonText: '\u8FD4\u56DE',
  navBarHomeButtonText: '\u9996\u9875',
  numberKeyboardConfirmText: '\u5B8C\u6210',
  orderDeleteButtonText: '\u62D6\u52A8\u5230\u6B64\u5904\u5220\u9664',
  orderDeleteButtonActiveText: '\u677E\u624B\u5373\u53EF\u5220\u9664',
  pickerConfirmText: '\u786E\u5B9A',
  pickerCancelText: '\u53D6\u6D88',
  pickerEmptyText: '\u6682\u65E0\u9009\u62E9\u53EF\u9009',
  popDialogConfirmText: '\u786E\u5B9A',
  popDialogCancelText: '\u53D6\u6D88',
  resultConfirmText: '\u786E\u5B9A',
  resultBackText: '\u8FD4\u56DE',
  scrollViewRefreshingText: '\u6B63\u5728\u5237\u65B0',
  scrollViewHoldingText: '\u677E\u5F00\u5237\u65B0',
  scrollViewPullingTexts: {
    '': '\u4E0B\u62C9\u5237\u65B0',
    up: '\u4E0A\u62C9\u5237\u65B0',
    down: '\u4E0B\u62C9\u5237\u65B0',
    left: '\u5DE6\u62C9\u5237\u65B0',
    right: '\u53F3\u62C9\u5237\u65B0'
  },
  searchBarCancelText: '\u53D6\u6D88'
}

// src/Locale/index.ts
function useLocale() {
  const packs2 = {
    'zh-CN': zh_CN_default
  }
  const locale2 = ref5(zh_CN_default)
  function langExist(lang) {
    if (!packs2[lang]) {
      console.error(
        new exception_default(
          `The ${lang} pack does not exist. You must join manually.`,
          exception_default.TYPE.PARAM_ERROR,
          'Locale'
        )
      )
      return false
    }
    return true
  }
  function add2(lang, newPack) {
    packs2[lang] = newPack
  }
  function use2(lang, newPack) {
    if (newPack && lang) {
      add2(lang, newPack)
    } else if (!langExist(lang)) {
      return
    }
    locale2.value = packs2[lang]
  }
  function merge3(lang, newPack) {
    if (!langExist(lang)) {
      return
    }
    packs2[lang] = { ...packs2[lang], ...newPack }
    use2(lang)
  }
  return {
    packs: packs2,
    locale: locale2,
    add: add2,
    use: use2,
    merge: merge3
  }
}
var { packs, locale, add, use, merge: merge2 } = useLocale()

// vue:./NavBar.vue
import {
  renderSlot as _renderSlot4,
  createCommentVNode as _createCommentVNode3,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock7,
  createElementBlock as _createElementBlock5,
  toDisplayString as _toDisplayString2,
  createTextVNode as _createTextVNode2,
  resolveComponent as _resolveComponent3,
  withCtx as _withCtx,
  createBlock as _createBlock4,
  createElementVNode as _createElementVNode4
} from 'vue'
var buttonsValidator = items => {
  return (
    Array.isArray(items) &&
    items.filter(item => {
      return !(
        (item && typeof item.text === 'string') ||
        iconValidator(item.icon)
      )
    }).length === 0
  )
}
var emitClickValidator = (payload, buttonEl) =>
  payload &&
  typeof payload.index === 'number' &&
  payload.item &&
  typeof payload.item.text === 'string' &&
  buttonEl instanceof HTMLElement
var emitTitleDbClickValidator = titleEl => titleEl instanceof HTMLElement
var _sfc_script7 = defineComponent7({
  name: 'fx-nav-bar',
  components: { Button: _sfc_script3, ButtonGroup: _sfc_script4 },
  props: {
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: false
    },
    showHome: {
      type: Boolean,
      default: false
    },
    leftButtons: {
      type: Array,
      validator: buttonsValidator,
      default: () => []
    },
    rightButtons: {
      type: Array,
      validator: buttonsValidator,
      default: () => []
    },
    iconOnly: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    'back-click': emitClickValidator,
    'home-click': emitClickValidator,
    'title-dbclick': emitTitleDbClickValidator,
    'left-button-click': emitClickValidator,
    'right-button-click': emitClickValidator
  },
  setup(props, { emit }) {
    function emitClick(type, item, $el) {
      emit(type, item, $el)
    }
    function onBack(e) {
      emitClick(
        'back-click',
        {
          index: 0,
          item: {
            text: 'back'
          }
        },
        e.currentTarget
      )
    }
    function onBackHome(e) {
      emitClick(
        'home-click',
        {
          item: {
            text: 'home'
          },
          index: props.showBack ? 1 : 0
        },
        e.currentTarget
      )
    }
    function onLeftIconClick(e, item, index) {
      emitClick(
        'left-button-click',
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
      )
    }
    function onRightIconClick(e, item, index) {
      emitClick(
        'right-button-click',
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
      )
    }
    let dbClickTag = null
    let dbClickTimer
    function onTitleStart(e) {
      if (!dbClickTag) {
        dbClickTag = e.type
        dbClickTimer = window.setTimeout(() => {
          dbClickTag = null
        }, 300)
      } else if (dbClickTag === e.type) {
        clearTimeout(dbClickTimer)
        dbClickTag = null
        emit('title-dbclick', e.currentTarget)
      }
    }
    return {
      onBack,
      onBackHome,
      onLeftIconClick,
      onRightIconClick,
      onTitleStart,
      locale
    }
  }
})
var _hoisted_15 = { class: 'fx-nav-bar fx-horizontal-hairline' }
var _hoisted_24 = { class: 'fx-nav-bar_inner' }
var _hoisted_32 = { class: 'fx-nav-bar_left' }
var _hoisted_42 = { class: 'fx-nav-bar_right' }
function render7(_ctx, _cache) {
  const _component_Button = _resolveComponent3('Button')
  const _component_ButtonGroup = _resolveComponent3('ButtonGroup')
  return (
    _openBlock7(),
    _createElementBlock5('div', _hoisted_15, [
      _createElementVNode4('div', _hoisted_24, [
        _createElementVNode4('div', _hoisted_32, [
          _ctx.$slots.left
            ? _renderSlot4(_ctx.$slots, 'left', { key: 0 })
            : _ctx.leftButtons.length > 0 || _ctx.showBack || _ctx.showHome
            ? (_openBlock7(),
              _createBlock4(
                _component_ButtonGroup,
                {
                  key: 1,
                  class: 'fx-nav-bar_button-group',
                  shape: _ctx.iconOnly ? 'square' : 'rectangle',
                  pattern: 'borderless'
                },
                {
                  default: _withCtx(() => [
                    _ctx.leftButtons.length > 0
                      ? (_openBlock7(true),
                        _createElementBlock5(
                          _Fragment,
                          { key: 0 },
                          _renderList(_ctx.leftButtons, (item, index) => {
                            return (
                              _openBlock7(),
                              _createBlock4(
                                _component_Button,
                                {
                                  class: 'fx-nav-bar_button',
                                  transparent: '',
                                  type: item.type || 'default',
                                  icon: item.icon,
                                  key: index,
                                  onClick: $event =>
                                    _ctx.onLeftIconClick($event, item, index)
                                },
                                {
                                  default: _withCtx(() => [
                                    _createTextVNode2(
                                      _toDisplayString2(item.text),
                                      1
                                    )
                                  ]),
                                  _: 2
                                },
                                1032,
                                ['type', 'icon', 'onClick']
                              )
                            )
                          }),
                          128
                        ))
                      : (_openBlock7(),
                        _createElementBlock5(
                          _Fragment,
                          { key: 1 },
                          [
                            _ctx.showBack
                              ? (_openBlock7(),
                                _createBlock4(
                                  _component_Button,
                                  {
                                    key: 0,
                                    class: 'fx-nav-bar_button',
                                    type: 'default',
                                    icon: 'LeftOutlined',
                                    transparent: '',
                                    onClick: _ctx.onBack
                                  },
                                  {
                                    default: _withCtx(() => [
                                      _createTextVNode2(
                                        _toDisplayString2(
                                          _ctx.locale.navBarBackButtonText
                                        ),
                                        1
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['onClick']
                                ))
                              : _createCommentVNode3('v-if', true),
                            _ctx.showHome
                              ? (_openBlock7(),
                                _createBlock4(
                                  _component_Button,
                                  {
                                    key: 1,
                                    class: 'fx-nav-bar_button',
                                    type: 'default',
                                    icon: 'HomeOutlined',
                                    transparent: '',
                                    onClick: _ctx.onBackHome
                                  },
                                  {
                                    default: _withCtx(() => [
                                      _createTextVNode2(
                                        _toDisplayString2(
                                          _ctx.locale.navBarHomeButtonText
                                        ),
                                        1
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['onClick']
                                ))
                              : _createCommentVNode3('v-if', true)
                          ],
                          64
                        ))
                  ]),
                  _: 1
                },
                8,
                ['shape']
              ))
            : _createCommentVNode3('v-if', true)
        ]),
        _createElementVNode4(
          'div',
          {
            class: 'fx-nav-bar_title',
            onMousedown:
              _cache[0] ||
              (_cache[0] = (...args) =>
                _ctx.onTitleStart && _ctx.onTitleStart(...args)),
            onTouchstart:
              _cache[1] ||
              (_cache[1] = (...args) =>
                _ctx.onTitleStart && _ctx.onTitleStart(...args))
          },
          _toDisplayString2(_ctx.title),
          33
        ),
        _createElementVNode4('div', _hoisted_42, [
          _ctx.$slots.right
            ? _renderSlot4(_ctx.$slots, 'right', { key: 0 })
            : (_openBlock7(),
              _createElementBlock5(
                _Fragment,
                { key: 1 },
                [
                  _ctx.rightButtons.length > 0
                    ? (_openBlock7(),
                      _createBlock4(
                        _component_ButtonGroup,
                        {
                          key: 0,
                          class: 'fx-nav-bar_button-group',
                          shape: _ctx.iconOnly ? 'square' : 'rectangle',
                          pattern: 'borderless'
                        },
                        {
                          default: _withCtx(() => [
                            (_openBlock7(true),
                            _createElementBlock5(
                              _Fragment,
                              null,
                              _renderList(_ctx.rightButtons, (item, index) => {
                                return (
                                  _openBlock7(),
                                  _createBlock4(
                                    _component_Button,
                                    {
                                      class: 'fx-nav-bar_button',
                                      type: item.type || 'default',
                                      icon: item.icon,
                                      key: index,
                                      transparent: '',
                                      onClick: $event =>
                                        _ctx.onRightIconClick(
                                          $event,
                                          item,
                                          index
                                        )
                                    },
                                    {
                                      default: _withCtx(() => [
                                        _createTextVNode2(
                                          _toDisplayString2(item.text),
                                          1
                                        )
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['type', 'icon', 'onClick']
                                  )
                                )
                              }),
                              128
                            ))
                          ]),
                          _: 1
                        },
                        8,
                        ['shape']
                      ))
                    : _createCommentVNode3('v-if', true)
                ],
                2112
              ))
        ])
      ])
    ])
  )
}
_sfc_script7.render = render7
_sfc_script7.__file = 'src/NavBar/NavBar.vue'

// src/NavBar/index.ts
var install6 = withInstall(_sfc_script7)
var NavBar_default = _sfc_script7

// src/hooks/use-safe-area-insets.ts
var import_safe_area_insets = __toESM(require_out())
import {
  onMounted as onMounted3,
  reactive as reactive3,
  onBeforeUnmount as onBeforeUnmount5
} from 'vue'
function useSafeAreaInsets(enable) {
  const data = reactive3({
    support: import_safe_area_insets.default.support,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  })
  function updateSafeAreaInsets() {
    if (enable) {
      data.top = import_safe_area_insets.default.top
      data.left = import_safe_area_insets.default.left
      data.right = import_safe_area_insets.default.right
      data.bottom = import_safe_area_insets.default.bottom
    } else {
      data.top = 0
      data.left = 0
      data.right = 0
      data.bottom = 0
    }
  }
  onMounted3(() =>
    import_safe_area_insets.default.onChange(updateSafeAreaInsets)
  )
  onBeforeUnmount5(() =>
    import_safe_area_insets.default.offChange(updateSafeAreaInsets)
  )
  return data
}

// vue:./Drawer.vue
import {
  createElementVNode as _createElementVNode5,
  renderSlot as _renderSlot5,
  resolveComponent as _resolveComponent4,
  openBlock as _openBlock8,
  createBlock as _createBlock5,
  createCommentVNode as _createCommentVNode4,
  normalizeClass as _normalizeClass5,
  normalizeStyle as _normalizeStyle5,
  vShow as _vShow2,
  mergeProps as _mergeProps2,
  withDirectives as _withDirectives2,
  Teleport as _Teleport2
} from 'vue'
var _sfc_script8 = defineComponent8({
  name: 'fx-drawer',
  components: { NavBar: _sfc_script7 },
  props: {
    ...popupProps,
    title: {
      type: String,
      default: null
    },
    placement: {
      type: String,
      validator: createEnumsValidator(PLACEMENT_TYPES),
      default: getEnumsValue(PLACEMENT_TYPES)
    },
    showClose: {
      type: Boolean,
      default: false
    },
    enableSafeAreaInsets: {
      type: Boolean,
      default: true
    },
    showMask: {
      type: Boolean,
      default: true
    }
  },
  emits: { ...popupEmits },
  setup(props, ctx) {
    const popupOptions = {
      enableUseBlur: false
    }
    const popup = usePopup(props, ctx, popupOptions)
    const safeAreaInsets2 = useSafeAreaInsets(
      toRef(props, 'enableSafeAreaInsets')
    )
    const alignClassName = computed7(
      () => 'placement--' + getEnumsValue(PLACEMENT_TYPES, props.placement)
    )
    const hasHeader = computed7(
      () => props.title || props.showClose || ctx.slots.header
    )
    const innerStyles = computed7(() => {
      const placement = getEnumsValue(PLACEMENT_TYPES, props.placement)
      let left = safeAreaInsets2.left
      let top = safeAreaInsets2.top
      let right = safeAreaInsets2.right
      let bottom = safeAreaInsets2.bottom
      if (placement === 'top') {
        bottom = 0
      } else if (placement === 'bottom') {
        top = 0
      } else if (placement === 'left') {
        right = 0
      } else if (placement === 'right') {
        left = 0
      }
      return {
        padding: top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px'
      }
    })
    function onHeaderRightClick() {
      if (props.showClose) {
        popup.onCloseClick()
      }
    }
    watch5(
      () => props.showMask,
      val => (popupOptions.enableUseBlur = !val),
      { immediate: true }
    )
    return {
      ...popup,
      alignClassName,
      hasHeader,
      innerStyles,
      onHeaderRightClick
    }
  }
})
var _hoisted_16 = { class: 'fx-drawer_body' }
function render8(_ctx, _cache) {
  const _component_NavBar = _resolveComponent4('NavBar')
  return (
    _openBlock8(),
    _createBlock5(_Teleport2, { to: 'body' }, [
      _withDirectives2(
        _createElementVNode5(
          'div',
          _mergeProps2(
            {
              class: [
                'fx-drawer fx-popup',
                { visible: _ctx.visible2, 'no--mask': !_ctx.showMask }
              ],
              style: _ctx.popupStyles
            },
            _ctx.$attrs
          ),
          [
            _createElementVNode5('div', {
              class: 'fx-mask',
              onClick:
                _cache[0] ||
                (_cache[0] = (...args) =>
                  _ctx.onMaskClick && _ctx.onMaskClick(...args))
            }),
            _createElementVNode5(
              'div',
              {
                class: _normalizeClass5([
                  'fx-drawer_inner fx-horizontal-hairline',
                  [_ctx.alignClassName, { 'has--header': _ctx.hasHeader }]
                ]),
                style: _normalizeStyle5(_ctx.innerStyles)
              },
              [
                _renderSlot5(_ctx.$slots, 'header', {}, () => [
                  _ctx.hasHeader
                    ? (_openBlock8(),
                      _createBlock5(
                        _component_NavBar,
                        {
                          key: 0,
                          class: 'fx-drawer_header',
                          title: _ctx.title,
                          rightButtons: _ctx.showClose
                            ? [{ icon: 'CloseOutlined', text: 'close' }]
                            : [],
                          'icon-only': true,
                          onRightButtonClick: _ctx.onHeaderRightClick
                        },
                        null,
                        8,
                        ['title', 'rightButtons', 'onRightButtonClick']
                      ))
                    : _createCommentVNode4('v-if', true)
                ]),
                _createElementVNode5('div', _hoisted_16, [
                  _renderSlot5(_ctx.$slots, 'default')
                ])
              ],
              6
            )
          ],
          16
        ),
        [[_vShow2, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script8.render = render8
_sfc_script8.__file = 'src/Drawer/Drawer.vue'

// src/Drawer/index.ts
var install7 = withInstall(_sfc_script8)
var Drawer_default = _sfc_script8

// vue:./Modal.vue
import { defineComponent as defineComponent9 } from 'vue'
import {
  createElementVNode as _createElementVNode6,
  renderSlot as _renderSlot6,
  resolveComponent as _resolveComponent5,
  createVNode as _createVNode2,
  openBlock as _openBlock9,
  createElementBlock as _createElementBlock6,
  createCommentVNode as _createCommentVNode5,
  normalizeStyle as _normalizeStyle6,
  vShow as _vShow3,
  mergeProps as _mergeProps3,
  withDirectives as _withDirectives3,
  Teleport as _Teleport3,
  createBlock as _createBlock6
} from 'vue'
var _sfc_script9 = defineComponent9({
  name: 'fx-modal',
  components: { Icon: _sfc_script2 },
  props: {
    ...popupProps,
    width: {
      type: String,
      default: null
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  emits: { ...popupEmits },
  setup(props, ctx) {
    const popup = usePopup(props, ctx, {})
    return {
      ...popup
    }
  }
})
var _hoisted_17 = { class: 'fx-modal_box-inner' }
function render9(_ctx, _cache) {
  const _component_Icon = _resolveComponent5('Icon')
  return (
    _openBlock9(),
    _createBlock6(_Teleport3, { to: 'body' }, [
      _withDirectives3(
        _createElementVNode6(
          'div',
          _mergeProps3(
            {
              class: ['fx-modal fx-popup', { visible: _ctx.visible2 }],
              style: _ctx.popupStyles
            },
            _ctx.$attrs
          ),
          [
            _createElementVNode6('div', {
              class: 'fx-mask',
              onClick:
                _cache[0] ||
                (_cache[0] = (...args) =>
                  _ctx.onMaskClick && _ctx.onMaskClick(...args))
            }),
            _createElementVNode6(
              'div',
              {
                class: 'fx-modal_box',
                style: _normalizeStyle6({
                  width: _ctx.width
                })
              },
              [
                _createElementVNode6('div', _hoisted_17, [
                  _renderSlot6(_ctx.$slots, 'default')
                ]),
                _ctx.showClose
                  ? (_openBlock9(),
                    _createElementBlock6(
                      'i',
                      {
                        key: 0,
                        class: 'fx-modal_close',
                        onClick:
                          _cache[1] ||
                          (_cache[1] = (...args) =>
                            _ctx.onCloseClick && _ctx.onCloseClick(...args))
                      },
                      [
                        _createVNode2(_component_Icon, {
                          icon: 'CloseCircleFilled'
                        })
                      ]
                    ))
                  : _createCommentVNode5('v-if', true)
              ],
              4
            )
          ],
          16
        ),
        [[_vShow3, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script9.render = render9
_sfc_script9.__file = 'src/Modal/Modal.vue'

// src/Modal/index.ts
var install8 = withInstall(_sfc_script9)
var Modal_default = _sfc_script9

// vue:./Dropdown.vue
import {
  defineComponent as defineComponent10,
  computed as computed8,
  ref as ref6,
  nextTick as nextTick2
} from 'vue'
import {
  createElementVNode as _createElementVNode7,
  renderSlot as _renderSlot7,
  vShow as _vShow4,
  mergeProps as _mergeProps4,
  withDirectives as _withDirectives4,
  Teleport as _Teleport4,
  openBlock as _openBlock10,
  createBlock as _createBlock7
} from 'vue'
var _sfc_script10 = defineComponent10({
  name: 'fx-dropdown',
  props: {
    ...popupProps,
    selector: {
      validator: selectorValidator,
      required: true
    }
  },
  emits: { ...popupEmits },
  setup(props, ctx) {
    const top = ref6(-1)
    const height = ref6(0)
    const popupEl = ref6()
    function updatePos() {
      const $target = querySelector(props.selector)
      if (!$target) {
        console.error(
          new exception_default(
            'Cannot find element through "selector"',
            exception_default.TYPE.PROP_ERROR,
            'Dropdown'
          )
        )
        return
      }
      const { bottom } = $target.getBoundingClientRect()
      top.value = bottom
      nextTick2(() => {
        var _a, _b
        height.value =
          (_b = (_a = popupEl.value) == null ? void 0 : _a.offsetHeight) != null
            ? _b
            : 0
      })
    }
    const popupHook = usePopup(props, ctx, {
      afterShow: updatePos,
      afterHidden() {
        top.value = -1
      }
    })
    const popupStyles = computed8(() => {
      return {
        zIndex: popupHook.zIndex.value,
        top: top.value === -1 ? '100vh' : top.value + 'px'
      }
    })
    return {
      ...popupHook,
      popupStyles,
      top,
      height,
      popupEl
    }
  }
})
var _hoisted_18 = { class: 'fx-dropdown_inner' }
function render10(_ctx, _cache) {
  return (
    _openBlock10(),
    _createBlock7(_Teleport4, { to: 'body' }, [
      _withDirectives4(
        _createElementVNode7(
          'div',
          _mergeProps4(
            {
              class: ['fx-dropdown fx-popup', { visible: _ctx.visible2 }],
              style: _ctx.popupStyles
            },
            _ctx.$attrs,
            { ref: 'popupEl' }
          ),
          [
            _createElementVNode7('div', {
              class: 'fx-mask',
              onClick:
                _cache[0] ||
                (_cache[0] = (...args) =>
                  _ctx.onMaskClick && _ctx.onMaskClick(...args))
            }),
            _createElementVNode7('div', _hoisted_18, [
              _renderSlot7(_ctx.$slots, 'default', { height: _ctx.height })
            ])
          ],
          16
        ),
        [[_vShow4, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script10.render = render10
_sfc_script10.__file = 'src/Dropdown/Dropdown.vue'

// src/Dropdown/index.ts
var install9 = withInstall(_sfc_script10)
var Dropdown_default = _sfc_script10

// vue:./ScrollView.vue
import {
  defineComponent as defineComponent13,
  computed as computed10,
  ref as ref7,
  onMounted as onMounted5,
  watch as watch6,
  reactive as reactive4,
  provide as provide3
} from 'vue'

// vue:./ActivityIndicator.vue
import {
  computed as computed9,
  defineComponent as defineComponent12
} from 'vue'

// vue:./LoadingIcon.vue
import { defineComponent as defineComponent11 } from 'vue'
import {
  normalizeStyle as _normalizeStyle7,
  createElementVNode as _createElementVNode8,
  openBlock as _openBlock11,
  createElementBlock as _createElementBlock7
} from 'vue'
var _sfc_script11 = defineComponent11({
  name: 'fx-loading-icon',
  props: {
    rate: {
      type: Number,
      default: 0,
      required: true
    },
    size: {
      type: Number,
      default: 100
    },
    strokeWidth: {
      type: Number,
      default: 5.37
    },
    color: {
      type: String,
      validator: colorValidator
    },
    backgroundColor: {
      type: String,
      validator: colorValidator
    }
  }
})
var _hoisted_19 = ['height', 'width']
var _hoisted_25 = ['stroke-width']
var _hoisted_33 = ['stroke', 'stroke-dasharray', 'stroke-width']
function render11(_ctx, _cache) {
  return (
    _openBlock11(),
    _createElementBlock7(
      'svg',
      {
        class: 'fx-loading-icon',
        height: _ctx.size,
        width: _ctx.size,
        viewBox: '0 0 1024 1024'
      },
      [
        _createElementVNode8(
          'circle',
          {
            class: 'fx-loading-icon_track',
            r: '448',
            cx: '512',
            cy: '512',
            'stroke-width': (_ctx.strokeWidth / _ctx.size) * 896,
            fill: 'none',
            style: _normalizeStyle7({ stroke: _ctx.backgroundColor })
          },
          null,
          12,
          _hoisted_25
        ),
        _createElementVNode8(
          'circle',
          {
            class: 'fx-loading-icon_thumb',
            r: '448',
            cx: '512',
            cy: '512',
            stroke: _ctx.color,
            'stroke-dasharray': 314 * 8.96 * _ctx.rate + ',' + 314 * 8.96,
            'stroke-width': (_ctx.strokeWidth / _ctx.size) * 896,
            fill: 'none',
            transform: 'rotate(-90,512,512)',
            'stroke-linecap': 'round',
            style: _normalizeStyle7({ stroke: _ctx.color })
          },
          null,
          12,
          _hoisted_33
        )
      ],
      8,
      _hoisted_19
    )
  )
}
_sfc_script11.render = render11
_sfc_script11.__file = 'src/LoadingIcon/LoadingIcon.vue'

// src/LoadingIcon/index.ts
var install10 = withNoopInstall(_sfc_script11)

// vue:./ActivityIndicator.vue
import {
  resolveComponent as _resolveComponent6,
  normalizeClass as _normalizeClass6,
  openBlock as _openBlock12,
  createBlock as _createBlock8
} from 'vue'
var _sfc_script12 = defineComponent12({
  name: 'fx-activity-indicator',
  components: { LoadingIcon: _sfc_script11 },
  props: {
    animated: {
      type: Boolean,
      default: true
    },
    size: {
      type: [Number, String],
      default: 20
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    return {
      nSize: computed9(() => {
        return parseFloat(props.size)
      })
    }
  }
})
function render12(_ctx, _cache) {
  const _component_LoadingIcon = _resolveComponent6('LoadingIcon')
  return (
    _openBlock12(),
    _createBlock8(
      _component_LoadingIcon,
      {
        class: _normalizeClass6([
          'fx-activity-indicator',
          { animated: _ctx.animated }
        ]),
        size: _ctx.nSize,
        rate: 0.2,
        strokeWidth: 0.0537 * _ctx.nSize,
        color: _ctx.color
      },
      null,
      8,
      ['class', 'size', 'rate', 'strokeWidth', 'color']
    )
  )
}
_sfc_script12.render = render12
_sfc_script12.__file = 'src/ActivityIndicator/ActivityIndicator.vue'

// src/ActivityIndicator/index.ts
var install11 = withInstall(_sfc_script12)
var ActivityIndicator_default = _sfc_script12

// src/hooks/use-touch.ts
import {
  onBeforeUnmount as onBeforeUnmount6,
  onMounted as onMounted4
} from 'vue'
var {
  touchstart: touchstart2,
  touchmove: touchmove2,
  touchend: touchend2,
  addListeners,
  removeListeners,
  getTouch
} = touchEvent
function useTouch({ el, onTouchStart, onTouchMove, onTouchEnd }) {
  const object = {
    handleEvent(e) {
      e.touchObject = getTouch(e)
      switch (e.type) {
        case touchstart2:
          onTouchStart(e)
          break
        case touchmove2:
          onTouchMove(e)
          break
        case touchend2:
          onTouchEnd(e)
          break
        case 'mouseleave':
          onTouchEnd(e)
          break
        default:
          break
      }
    }
  }
  onMounted4(() => addListeners(el.value, object))
  onBeforeUnmount6(() => removeListeners(el.value, object))
  return {}
}

// src/ScrollView/scrollView.ts
var emitScrollValidator = payload =>
  payload &&
  typeof payload.scrollTop === 'number' &&
  typeof payload.scrollLeft === 'number'
var emitRefreshingValidator = (payload, loadComplete) =>
  payload &&
  typeof payload.pullDirection === 'string' &&
  typeof loadComplete === 'function'
var emitScrollToUpperValidator = payload =>
  payload && ['top', 'left'].includes(payload.direction)
var emitScrollToLowerValidator = payload =>
  payload && ['bottom', 'right'].includes(payload.direction)

// vue:./ScrollView.vue
import {
  renderSlot as _renderSlot8,
  resolveComponent as _resolveComponent7,
  openBlock as _openBlock13,
  createBlock as _createBlock9,
  createCommentVNode as _createCommentVNode6,
  toDisplayString as _toDisplayString3,
  createElementVNode as _createElementVNode9,
  normalizeClass as _normalizeClass7,
  normalizeStyle as _normalizeStyle8,
  createElementBlock as _createElementBlock8
} from 'vue'
var ScrollState = {
  Center: 0,
  Upper: 1,
  Lower: 2
}
var PullRefreshState = {
  Pulling: 0,
  Holding: 1,
  Refreshing: 2
}
var _sfc_script13 = defineComponent13({
  name: 'fx-scroll-view',
  components: { Icon: _sfc_script2, ActivityIndicator: _sfc_script12 },
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: false
    },
    scrollAnimated: {
      type: Boolean,
      default: false
    },
    upperThreshold: {
      type: Number,
      default: 50
    },
    lowerThreshold: {
      type: Number,
      default: 50
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    },
    enablePullDirections: {
      type: [String, Array],
      validator: val => typeof val === 'string' || isStringArray(val),
      default: null
    },
    pullRefreshThreshold: {
      type: Number,
      default: 48
    }
  },
  emits: {
    'scroll-to-upper': emitScrollToUpperValidator,
    'scroll-to-lower': emitScrollToLowerValidator,
    scroll: emitScrollValidator,
    refreshing: emitRefreshingValidator
  },
  setup(props, ctx) {
    const { emit } = ctx
    let _isToLowerOrUpperY = ScrollState.Upper
    let _isToLowerOrUpperX = ScrollState.Upper
    let _prevY = 0
    let _prevX = 0
    let coords
    const pullRefreshState = ref7(PullRefreshState.Pulling)
    const root = ref7()
    const pullDistance = ref7(0)
    const translateDuration = ref7(0)
    const pullDirection = ref7('')
    const pullIndicatorSafeArea = reactive4({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    })
    function loadComplete() {
      pullRefreshState.value = PullRefreshState.Pulling
      pullDistance.value = 0
    }
    function onScroll() {
      const { upperThreshold, lowerThreshold, scrollX, scrollY } = props
      const {
        scrollTop,
        scrollLeft,
        scrollWidth,
        scrollHeight,
        clientHeight,
        clientWidth
      } = root.value
      let isToLowerY = false
      let isToUpperY = false
      let isToLowerX = false
      let isToUpperX = false
      emit('scroll', {
        scrollTop,
        scrollLeft,
        scrollWidth,
        scrollHeight,
        clientHeight,
        clientWidth
      })
      if (scrollY) {
        if (
          scrollTop + clientHeight + lowerThreshold >= scrollHeight &&
          scrollTop > _prevY
        ) {
          isToLowerY = true
        } else if (scrollTop <= upperThreshold && scrollTop < _prevY) {
          isToUpperY = true
        }
      }
      if (scrollX) {
        if (
          scrollLeft + clientWidth + lowerThreshold >= scrollWidth &&
          scrollLeft > _prevX
        ) {
          isToLowerX = true
        } else if (scrollLeft <= upperThreshold && scrollLeft < _prevX) {
          isToUpperX = true
        }
      }
      if (isToUpperY || isToLowerY) {
        if (_isToLowerOrUpperY === ScrollState.Upper) {
          isToUpperY = false
        } else if (_isToLowerOrUpperY === ScrollState.Lower) {
          isToLowerY = false
        }
      } else {
        _isToLowerOrUpperY = ScrollState.Center
      }
      if (isToUpperX || isToLowerX) {
        if (_isToLowerOrUpperX === ScrollState.Upper) {
          isToUpperX = false
        } else if (_isToLowerOrUpperX === ScrollState.Lower) {
          isToLowerX = false
        }
      } else {
        _isToLowerOrUpperX = ScrollState.Center
      }
      const typeLower = 'scroll-to-lower'
      const typeUpper = 'scroll-to-upper'
      if (isToUpperY) {
        _isToLowerOrUpperY = ScrollState.Upper
        emit(typeUpper, {
          direction: 'top'
        })
      } else if (isToLowerY) {
        _isToLowerOrUpperY = ScrollState.Lower
        emit(typeLower, {
          direction: 'bottom'
        })
      }
      if (isToUpperX) {
        _isToLowerOrUpperX = ScrollState.Upper
        emit(typeUpper, {
          direction: 'left'
        })
      } else if (isToLowerX) {
        _isToLowerOrUpperX = ScrollState.Lower
        emit(typeLower, {
          direction: 'right'
        })
      }
      _prevY = scrollTop
      _prevX = scrollLeft
    }
    function updateScroll() {
      const { scrollY, scrollX } = props
      if ((scrollY || scrollX) && root.value) {
        scrollTo(
          root.value,
          {
            top: scrollY ? props.scrollTop : 0,
            left: scrollX ? props.scrollLeft : 0
          },
          props.scrollAnimated
        )
      }
    }
    onMounted5(() => updateScroll)
    watch6([() => props.scrollLeft, () => props.scrollTop], updateScroll)
    const contentStyles = computed10(() => {
      return {
        transition: `transform ${translateDuration.value}ms`,
        transform: ['up', 'down'].includes(pullDirection.value)
          ? `translate3d(0, ${pullDistance.value}px, 0)`
          : `translate3d(${pullDistance.value}px, 0, 0)`
      }
    })
    const indicatorStyles = computed10(() => {
      return {
        padding: `${pullIndicatorSafeArea.top}px ${pullIndicatorSafeArea.right}px ${pullIndicatorSafeArea.bottom}px ${pullIndicatorSafeArea.left}px`
      }
    })
    useTouch({
      el: root,
      onTouchStart(e) {
        const { pageX, pageY } = e.touchObject
        const $scroll = root.value
        const {
          scrollHeight,
          scrollTop,
          clientHeight,
          scrollLeft,
          scrollWidth,
          clientWidth
        } = $scroll
        coords = {
          pageX,
          pageY,
          scrollX: props.scrollX && scrollWidth > clientWidth,
          scrollY: props.scrollY && scrollHeight > clientHeight,
          stop: null
        }
        if (pullRefreshState.value === PullRefreshState.Refreshing) {
          return
        }
        const allowPullDirections = stringMix2StringArray(
          props.enablePullDirections
        )
        if (allowPullDirections.length === 0) {
          return
        }
        pullDistance.value = 0
        translateDuration.value = 0
        pullDirection.value = ''
        const directions = []
        if (scrollTop === 0 && allowPullDirections.includes('down')) {
          directions.push('down')
        }
        if (
          scrollTop + clientHeight >= scrollHeight &&
          allowPullDirections.includes('up')
        ) {
          directions.push('up')
        }
        if (scrollLeft === 0 && allowPullDirections.includes('right')) {
          directions.push('right')
        }
        if (
          scrollLeft + clientWidth >= scrollWidth &&
          allowPullDirections.includes('left')
        ) {
          directions.push('left')
        }
        if (directions[0]) {
          coords.directions = directions
        }
      },
      onTouchMove(e) {
        if (!coords) {
          return
        }
        const { pageX, pageY } = e.touchObject
        const offsetX = pageX - coords.pageX
        const offsetY = pageY - coords.pageY
        const y = _isToLowerOrUpperY
        const x = _isToLowerOrUpperX
        if (coords.stop == null) {
          if (
            (coords.scrollY &&
              Math.abs(offsetY) >= Math.abs(offsetX) &&
              (y === ScrollState.Center ||
                (y === ScrollState.Upper && offsetY < 0) ||
                (y === ScrollState.Lower && offsetY > 0))) ||
            (coords.scrollX &&
              Math.abs(offsetX) >= Math.abs(offsetY) &&
              (x === ScrollState.Center ||
                (x === ScrollState.Upper && offsetX < 0) ||
                (x === ScrollState.Lower && offsetX > 0)))
          ) {
            coords.stop = true
          } else {
            coords.stop = false
          }
        }
        if (coords.stop) {
          e.stopPropagation()
        }
        if (!coords.directions) {
          return
        }
        let _pullDirection = coords.direction
        if (!_pullDirection) {
          if (Math.abs(offsetY) >= Math.abs(offsetX)) {
            coords.directions = coords.directions.filter(v => {
              return (
                ['up', 'down'].includes(v) &&
                ((v === 'down' && offsetY > 0) || (v === 'up' && offsetY < 0))
              )
            })
          } else {
            coords.directions = coords.directions.filter(v => {
              return (
                ['left', 'right'].includes(v) &&
                ((v === 'right' && offsetX > 0) ||
                  (v === 'left' && offsetX < 0))
              )
            })
          }
          coords.direction = _pullDirection = coords.directions[0]
        }
        if (!_pullDirection) {
          delete coords.directions
          return
        }
        e.preventDefault()
        if (!coords.isSetSafeArea) {
          const $scroll = root.value
          pullIndicatorSafeArea.top = 0
          pullIndicatorSafeArea.right = 0
          pullIndicatorSafeArea.bottom = 0
          pullIndicatorSafeArea.left = 0
          if (['up', 'down'].includes(_pullDirection)) {
            pullIndicatorSafeArea.left = $scroll.scrollLeft
            pullIndicatorSafeArea.right =
              $scroll.scrollWidth - $scroll.scrollLeft - $scroll.clientWidth
          } else {
            pullIndicatorSafeArea.top = $scroll.scrollTop
            pullIndicatorSafeArea.bottom =
              $scroll.scrollHeight - $scroll.scrollTop - $scroll.clientHeight
          }
          coords.isSetSafeArea = true
        }
        pullDirection.value = _pullDirection
        let distance
        if (['up', 'down'].includes(pullDirection.value)) {
          distance = offsetY
        } else {
          distance = offsetX
        }
        distance = Math.abs(distance)
        const pullRefreshThreshold = props.pullRefreshThreshold
        if (distance >= pullRefreshThreshold) {
          if (pullRefreshState.value === PullRefreshState.Pulling) {
            pullRefreshState.value = PullRefreshState.Holding
          }
          distance =
            pullRefreshThreshold +
            Math.ceil(
              (distance - pullRefreshThreshold) /
                Math.log(Math.abs(distance - pullRefreshThreshold) / 2)
            )
        }
        pullDistance.value = ['down', 'right'].includes(pullDirection.value)
          ? distance
          : -distance
      },
      onTouchEnd() {
        if (!coords) {
          return
        }
        coords = null
        translateDuration.value = 200
        if (pullRefreshState.value === PullRefreshState.Holding) {
          pullRefreshState.value = PullRefreshState.Refreshing
          pullDistance.value = ['down', 'right'].includes(pullDirection.value)
            ? props.pullRefreshThreshold
            : -props.pullRefreshThreshold
          emit(
            'refreshing',
            {
              pullDirection: pullDirection.value
            },
            loadComplete
          )
        } else {
          pullDistance.value = 0
        }
      }
    })
    function scrollToOffset(options) {
      var _a
      let behavior = 'smooth'
      let top = 0
      let left = 0
      if (typeof options === 'number') {
        top = options
        behavior = 'auto'
      } else if (options && typeof options.offset === 'number') {
        top = options.offset
        if (options.animated === false) behavior = 'auto'
      }
      if (props.scrollX) {
        top = [left, (left = top)][0]
      }
      ;(_a = root.value) == null
        ? void 0
        : _a.scrollTo({
            top,
            left,
            behavior
          })
    }
    provide3('disableFixed', true)
    return {
      pullRefreshState,
      pullDistance,
      pullDirection,
      root,
      contentStyles,
      indicatorStyles,
      onScroll,
      pullIndicatorSafeArea,
      PullRefreshState,
      scrollTo: scrollToOffset,
      locale
    }
  }
})
var _hoisted_110 = { class: 'fx-scroll-view_inner' }
var _hoisted_26 = { class: 'fx-load-more_content' }
function render13(_ctx, _cache) {
  const _component_ActivityIndicator = _resolveComponent7('ActivityIndicator')
  const _component_Icon = _resolveComponent7('Icon')
  return (
    _openBlock13(),
    _createElementBlock8(
      'div',
      {
        class: _normalizeClass7([
          'fx-scroll-view',
          {
            'scroll-x': _ctx.scrollX,
            'scroll-y': _ctx.scrollY,
            smooth: _ctx.scrollAnimated
          }
        ]),
        ref: 'root',
        onScroll:
          _cache[0] ||
          (_cache[0] = (...args) => _ctx.onScroll && _ctx.onScroll(...args))
      },
      [
        _createElementVNode9('div', _hoisted_110, [
          _createElementVNode9(
            'div',
            {
              class: 'fx-scroll-view_content',
              style: _normalizeStyle8(_ctx.contentStyles)
            },
            [
              _ctx.enablePullDirections && _ctx.enablePullDirections.length > 0
                ? (_openBlock13(),
                  _createElementBlock8(
                    'div',
                    {
                      key: 0,
                      class: _normalizeClass7([
                        'fx-scroll-view_pull-refresh',
                        ['direction--' + (_ctx.pullDirection || 'unknown')]
                      ])
                    },
                    [
                      _renderSlot8(
                        _ctx.$slots,
                        'indicator',
                        {
                          pullDirection: _ctx.pullDirection,
                          pullRefreshState: _ctx.pullRefreshState,
                          pullIndicatorSafeArea: _ctx.pullIndicatorSafeArea
                        },
                        () => [
                          _createElementVNode9(
                            'div',
                            {
                              class: _normalizeClass7([
                                'fx-load-more',
                                {
                                  vertical:
                                    _ctx.pullDirection === 'left' ||
                                    _ctx.pullDirection === 'right'
                                }
                              ]),
                              style: _normalizeStyle8(_ctx.indicatorStyles)
                            },
                            [
                              _ctx.pullRefreshState ===
                              _ctx.PullRefreshState.Refreshing
                                ? (_openBlock13(),
                                  _createBlock9(_component_ActivityIndicator, {
                                    key: 0,
                                    class: 'fx-load-more_icon',
                                    size: 18
                                  }))
                                : (_openBlock13(),
                                  _createBlock9(_component_Icon, {
                                    key: 1,
                                    class: 'fx-load-more_icon',
                                    icon: 'CircleOutlined'
                                  })),
                              _createElementVNode9(
                                'span',
                                _hoisted_26,
                                _toDisplayString3(
                                  _ctx.pullRefreshState ===
                                    _ctx.PullRefreshState.Refreshing
                                    ? _ctx.locale.scrollViewRefreshingText
                                    : _ctx.pullRefreshState ===
                                      _ctx.PullRefreshState.Holding
                                    ? _ctx.locale.scrollViewHoldingText
                                    : _ctx.locale.scrollViewPullingTexts[
                                        _ctx.pullDirection
                                      ]
                                ),
                                1
                              )
                            ],
                            6
                          )
                        ]
                      )
                    ],
                    2
                  ))
                : _createCommentVNode6('v-if', true),
              _renderSlot8(_ctx.$slots, 'default')
            ],
            4
          )
        ])
      ],
      34
    )
  )
}
_sfc_script13.render = render13
_sfc_script13.__file = 'src/ScrollView/ScrollView.vue'

// src/ScrollView/index.ts
var install12 = withInstall(_sfc_script13)
var ScrollView_default = _sfc_script13

// vue:./Switch.vue
import {
  onMounted as onMounted6,
  ref as ref9,
  watch as watch7,
  defineComponent as defineComponent14,
  computed as computed11
} from 'vue'

// src/Form/form.ts
var formItemProps = {
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
var isStringValue = value => typeof value === 'string'
var isNumberValue = value => typeof value === 'number'
var formStringValueEmits = {
  'update:modelValue': isStringValue,
  change: isStringValue,
  input: isStringValue
}
var formNumberValueEmits = {
  'update:modelValue': isNumberValue,
  change: isNumberValue,
  input: isNumberValue
}
var formFocusEmits = {
  focus: emitEventValidator,
  blur: emitEventValidator
}
var formActiveEmits = {
  focus: emitTypeValidator,
  blur: emitTypeValidator
}

// src/Form/use-form.ts
import { ref as ref8 } from 'vue'
function useInput() {
  const input = ref8()
  function setInputChecked(val) {
    input.value && (input.value.checked = val)
  }
  function getInputChecked() {
    var _a
    return ((_a = input.value) == null ? void 0 : _a.checked) ? true : false
  }
  function setInputValue(val) {
    input.value && (input.value.value = val.toString())
  }
  function getInputValue() {
    var _a, _b
    return (_b = (_a = input.value) == null ? void 0 : _a.value) != null
      ? _b
      : ''
  }
  function getInputEl() {
    return input.value
  }
  function setFocus() {
    var _a
    ;(_a = input.value) == null ? void 0 : _a.focus()
  }
  function setBlur() {
    var _a
    ;(_a = input.value) == null ? void 0 : _a.blur()
  }
  return {
    input,
    getInputValue,
    setInputValue,
    getInputChecked,
    setInputChecked,
    getInputEl,
    setFocus,
    setBlur
  }
}

// vue:./Switch.vue
import {
  createElementVNode as _createElementVNode10,
  normalizeClass as _normalizeClass8,
  normalizeStyle as _normalizeStyle9,
  openBlock as _openBlock14,
  createElementBlock as _createElementBlock9
} from 'vue'
var isValue = value => typeof value === 'boolean'
var _sfc_script14 = defineComponent14({
  name: 'fx-switch',
  props: {
    ...formItemProps,
    modelValue: {
      type: Boolean
    },
    color: {
      type: String,
      validator: colorValidator
    },
    activeColor: {
      type: String,
      validator: colorValidator
    },
    size: {
      type: [Number, String]
    }
  },
  emits: {
    'update:modelValue': isValue,
    change: isValue
  },
  setup(props, { emit }) {
    const isValueNull = props.modelValue == null
    const checked = ref9(!!props.modelValue)
    const { input, setInputChecked, getInputChecked } = useInput()
    watch7(
      () => props.modelValue,
      val => {
        val = !!val
        if (val !== checked.value) {
          checked.value = val
          setInputChecked(val)
        }
      }
    )
    function onChange() {
      const value = getInputChecked()
      checked.value = value
      if (props.modelValue !== value) {
        emit('update:modelValue', value)
      }
      emit('change', value)
    }
    onMounted6(() => {
      setInputChecked(checked.value)
    })
    const styles = computed11(() => {
      const obj2 = {}
      props.color && (obj2['--fx-color'] = props.color)
      props.activeColor && (obj2['--fx-active-color'] = props.activeColor)
      props.size != null &&
        props.size > 0 &&
        (obj2['--fx-size'] = parseFloat(props.size) + 'px')
      return obj2
    })
    if (isValueNull) {
      emit('change', checked.value)
    }
    return {
      input,
      checked,
      onChange,
      styles
    }
  }
})
var _hoisted_111 = ['disabled', 'name', 'value']
function render14(_ctx, _cache) {
  return (
    _openBlock14(),
    _createElementBlock9(
      'label',
      {
        class: _normalizeClass8(['fx-switch', { disabled: _ctx.disabled }]),
        style: _normalizeStyle9(_ctx.styles)
      },
      [
        _createElementVNode10(
          'input',
          {
            class: 'fx-switch_checkbox',
            type: 'checkbox',
            disabled: _ctx.disabled,
            name: _ctx.name,
            value: _ctx.checked.toString(),
            onChange:
              _cache[0] ||
              (_cache[0] = (...args) =>
                _ctx.onChange && _ctx.onChange(...args)),
            ref: 'input'
          },
          null,
          40,
          _hoisted_111
        )
      ],
      6
    )
  )
}
_sfc_script14.render = render14
_sfc_script14.__file = 'src/Switch/Switch.vue'

// src/Switch/index.ts
var install13 = withInstall(_sfc_script14)
var Switch_default = _sfc_script14

// vue:./Slider.vue
import {
  ref as ref11,
  defineComponent as defineComponent15,
  watch as watch8,
  nextTick as nextTick3
} from 'vue'

// src/Slider/slide.ts
var slideProps = {
  min: {
    type: [Number, String],
    validator: isNumeric,
    default: 0
  },
  max: {
    type: [Number, String],
    validator: isNumeric,
    default: 100
  },
  step: {
    type: [Number, String],
    validator: isNumeric,
    default: 1
  },
  showValue: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    validator: colorValidator
  }
}

// src/Slider/use-slide.ts
import { computed as computed12, ref as ref10 } from 'vue'
function useSlide(props, { move, end, getValue: getValue2 }) {
  const sliderEl = ref10()
  const thumbW = 24
  let coords
  let tempValue = 0
  function toInteger(number) {
    return Math.round(number)
  }
  function getMinMax() {
    let min = toInteger(props.min)
    let max = toInteger(props.max)
    if (min > max) {
      max = [min, (min = max)][0]
    }
    return { min, max }
  }
  function value2Progress(val) {
    const { min, max } = getMinMax()
    return (val - min) / (max - min)
  }
  function rangeValue(val) {
    const { min, max } = getMinMax()
    return rangeNumber(val, min, max)
  }
  function updateByX(x, { trackW, prevValue, $target }) {
    x = rangeNumber(x, 0, trackW)
    const { min, max } = getMinMax()
    const step2 = toInteger(props.step)
    let newVal = toInteger(((max - min) * x) / trackW + min)
    newVal = toInteger((newVal - prevValue) / step2) * step2 + prevValue
    newVal = rangeNumber(newVal, min, max)
    tempValue = newVal
    move({ value: tempValue, progress: value2Progress(newVal), $target })
  }
  const styles = computed12(() => {
    const obj2 = {}
    props.color && (obj2['--fx-color'] = props.color)
    return obj2
  })
  useTouch({
    el: sliderEl,
    onTouchStart(e) {
      if (props.disabled) {
        return
      }
      const { clientX } = e.touchObject
      const $target = e.target
      const trackRects = sliderEl.value.getClientRects()[0]
      const thumb = !!$target.dataset.thumb
      coords = {
        prevValue: getValue2($target),
        thumb,
        thumbW,
        clientStartX: clientX,
        thumbXInTrack: getRelativeOffset($target, sliderEl.value).offsetLeft,
        trackX: trackRects.left,
        trackW: trackRects.width - thumbW,
        moved: false,
        $target
      }
      if (thumb) {
        addClassName($target, 'active')
      }
      tempValue = coords.prevValue
      e.preventDefault()
    },
    onTouchMove(e) {
      if (!coords) {
        return
      }
      coords.moved = true
      if (!coords.thumb) {
        return
      }
      const { clientX } = e.touchObject
      const { clientStartX, thumbXInTrack } = coords
      updateByX(thumbXInTrack + clientX - clientStartX, coords)
      e.stopPropagation()
    },
    onTouchEnd(e) {
      if (coords) {
        if (!coords.thumb && !coords.moved) {
          updateByX(
            coords.clientStartX - coords.trackX - coords.thumbW / 2,
            coords
          )
        }
        if (coords.thumb) {
          removeClassName(coords.$target, 'active')
        }
        end({
          value: tempValue,
          isChange: coords.prevValue !== tempValue,
          $target: coords.$target
        })
        coords = null
        e.stopPropagation()
      }
    }
  })
  return {
    sliderEl,
    toInteger,
    rangeValue,
    value2Progress,
    getMinMax,
    styles
  }
}

// vue:./Slider.vue
import {
  normalizeStyle as _normalizeStyle10,
  createElementVNode as _createElementVNode11,
  toDisplayString as _toDisplayString4,
  normalizeClass as _normalizeClass9,
  openBlock as _openBlock15,
  createElementBlock as _createElementBlock10
} from 'vue'
var _sfc_script15 = defineComponent15({
  name: 'fx-slider',
  props: {
    ...formItemProps,
    ...slideProps,
    modelValue: {
      type: [Number, String],
      validator: isNumeric
    }
  },
  emits: {
    ...formNumberValueEmits
  },
  setup(props, ctx) {
    const progress = ref11(0)
    const inputValue = ref11(0)
    const { emit } = ctx
    const { sliderEl, toInteger, rangeValue, value2Progress, styles } =
      useSlide(props, {
        getValue() {
          return inputValue.value
        },
        move({ value: newVal, progress: newProgress }) {
          inputValue.value = newVal
          progress.value = newProgress
          emitModel()
          emit('input', inputValue.value)
        },
        end({ isChange }) {
          isChange && emit('change', inputValue.value)
        }
      })
    function emitModel() {
      if (
        props.modelValue == null ||
        inputValue.value !== toInteger(props.modelValue)
      ) {
        emit('update:modelValue', inputValue.value)
        return true
      }
      return false
    }
    function updateValue(val) {
      if (val == null) {
        return
      }
      let newVal = toInteger(val)
      if (isNaN(newVal)) {
        return
      }
      newVal = rangeValue(newVal)
      if (newVal !== inputValue.value) {
        inputValue.value = newVal
        progress.value = value2Progress(newVal)
      }
    }
    watch8(
      () => props.modelValue,
      val => updateValue(val)
    )
    watch8([() => props.min, () => props.max], () => {
      nextTick3(() => {
        updateValue(inputValue.value)
        if (emitModel()) {
          emit('change', inputValue.value)
        }
      })
    })
    updateValue(props.modelValue || 0)
    if (emitModel()) {
      emit('change', inputValue.value)
    }
    return {
      sliderEl,
      progress,
      inputValue,
      styles
    }
  }
})
var _hoisted_112 = {
  class: 'fx-slider_inner',
  ref: 'sliderEl'
}
var _hoisted_27 = { class: 'fx-slider_box' }
var _hoisted_34 = ['name', 'disabled', 'value']
function render15(_ctx, _cache) {
  return (
    _openBlock15(),
    _createElementBlock10(
      'div',
      {
        class: _normalizeClass9(['fx-slider', { disabled: !!_ctx.disabled }]),
        style: _normalizeStyle10(_ctx.styles)
      },
      [
        _createElementVNode11(
          'div',
          _hoisted_112,
          [
            _createElementVNode11('div', _hoisted_27, [
              _createElementVNode11(
                'div',
                {
                  class: 'fx-slider_track',
                  style: _normalizeStyle10({ width: _ctx.progress * 100 + '%' })
                },
                null,
                4
              ),
              _createElementVNode11(
                'div',
                {
                  class: 'fx-slider_thumb',
                  'data-thumb': 'true',
                  style: _normalizeStyle10({ left: _ctx.progress * 100 + '%' })
                },
                _toDisplayString4(_ctx.showValue ? _ctx.inputValue : ''),
                5
              )
            ]),
            _createElementVNode11(
              'input',
              {
                type: 'hidden',
                name: _ctx.name,
                disabled: _ctx.disabled,
                value: _ctx.inputValue,
                ref: 'input'
              },
              null,
              8,
              _hoisted_34
            )
          ],
          512
        )
      ],
      6
    )
  )
}
_sfc_script15.render = render15
_sfc_script15.__file = 'src/Slider/Slider.vue'

// src/Slider/index.ts
var install14 = withInstall(_sfc_script15)
var Slider_default = _sfc_script15

// vue:./Radio.vue
import { defineComponent as defineComponent16 } from 'vue'

// src/Checkbox/checkbox-radio.ts
var checkboxOrRadioGroupProps = {
  ...formItemProps,
  options: {
    type: Array,
    default: () => []
  },
  inline: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String
  }
}
var checkboxOrRadioEmits = {
  'update:checked': checked => typeof checked === 'boolean',
  change: checked => typeof checked === 'boolean'
}
var checkboxOrRadioProps = {
  value: {
    type: [Number, String],
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    validator: colorValidator
  },
  name: {
    type: String,
    default: ''
  }
}

// src/Checkbox/use-checkbox-radio.ts
import {
  computed as computed13,
  onMounted as onMounted7,
  ref as ref12,
  watch as watch9,
  inject as inject4,
  provide as provide4
} from 'vue'
function useCheckboxOrRadio(props, { emit }, name) {
  const uid2 = Symbol()
  const groupOptions = inject4(`fx${capitalize(name)}Options`, null)
  const input = ref12()
  const name2 = computed13(() => {
    return (
      (groupOptions == null ? void 0 : groupOptions.props.name) ||
      props.name ||
      ''
    )
  })
  const disabled2 = computed13(() => {
    var _a
    return (_a = groupOptions == null ? void 0 : groupOptions.props.disabled) !=
      null
      ? _a
      : props.disabled
  })
  function getValue2() {
    return props.value
  }
  function getInputEl() {
    return input.value
  }
  function getInputChecked() {
    return !!getInputEl().checked
  }
  function setChecked(checked = true) {
    getInputEl().checked = checked
  }
  function onChange(e) {
    if (groupOptions) {
      groupOptions.onChange(uid2)
    } else {
      const checked = !!e.target.checked
      emit('update:checked', checked)
      emit('change', checked)
    }
  }
  watch9(
    () => props.checked,
    val => {
      if (groupOptions) {
        return
      }
      const $input = getInputEl()
      const checked = !!val
      if (checked !== $input.checked) {
        $input.checked = checked
      }
    }
  )
  useGroupItem(name, {
    uid: uid2,
    getInputChecked,
    getValue: getValue2,
    setChecked
  })
  onMounted7(() => {
    const $input = getInputEl()
    let checked
    if (groupOptions) {
      checked =
        name === 'checkbox'
          ? Array.isArray(groupOptions.props.modelValue) &&
            groupOptions.props.modelValue.includes(props.value)
          : props.value === groupOptions.props.modelValue
    } else {
      checked = !!props.checked
    }
    if (checked !== $input.checked) {
      $input.checked = $input.defaultChecked = checked
    }
  })
  const styles = computed13(() => {
    const { activeColor } =
      (groupOptions == null ? void 0 : groupOptions.props) || props
    const obj2 = {}
    activeColor && (obj2['--fx-active-color'] = activeColor)
    return obj2
  })
  return {
    input,
    name2,
    disabled2,
    onChange,
    styles
  }
}
function useCheckboxOrRadioGroup(props, { name, updateValue, watchValue }) {
  const root = ref12()
  const { children } = useGroup(name)
  function _updateValue(isChange, uid2) {
    return updateValue({ isChange, children, uid: uid2 })
  }
  function onChange(uid2) {
    _updateValue(true, uid2)
  }
  watch9(
    () => props.modelValue,
    value => {
      watchValue({ children, value })
    },
    {
      deep: true
    }
  )
  const options2 = computed13(() => {
    const ret = []
    if (Array.isArray(props.options)) {
      props.options.forEach(v => {
        if (isStringNumberMix(v)) {
          ret.push({
            value: v,
            label: v.toString()
          })
        } else {
          ret.push({
            value: v.value,
            label: v.label.toString()
          })
        }
      })
    }
    return ret
  })
  onMounted7(() => _updateValue(false))
  provide4(`fx${capitalize(name)}Options`, {
    props,
    onChange
  })
  return {
    root,
    onChange,
    options2
  }
}

// vue:./Radio.vue
import {
  createElementVNode as _createElementVNode12,
  resolveComponent as _resolveComponent8,
  createVNode as _createVNode3,
  renderSlot as _renderSlot9,
  openBlock as _openBlock16,
  createElementBlock as _createElementBlock11,
  createCommentVNode as _createCommentVNode7,
  normalizeClass as _normalizeClass10,
  normalizeStyle as _normalizeStyle11
} from 'vue'
var _sfc_script16 = defineComponent16({
  name: 'fx-radio',
  components: { Icon: _sfc_script2 },
  props: {
    ...checkboxOrRadioProps
  },
  emits: { ...checkboxOrRadioEmits },
  setup(props, ctx) {
    return useCheckboxOrRadio(props, ctx, 'radio')
  }
})
var _hoisted_113 = ['name', 'value', 'disabled']
var _hoisted_28 = { class: 'fx-radio_box' }
var _hoisted_35 = {
  key: 0,
  class: 'fx-radio_text'
}
function render16(_ctx, _cache) {
  const _component_Icon = _resolveComponent8('Icon')
  return (
    _openBlock16(),
    _createElementBlock11(
      'label',
      {
        class: _normalizeClass10([
          'fx-radio fx-horizontal-hairline',
          { disabled: _ctx.disabled2 }
        ]),
        style: _normalizeStyle11(_ctx.styles)
      },
      [
        _createElementVNode12(
          'input',
          {
            class: 'fx-radio_input fx-form-input',
            type: 'radio',
            name: _ctx.name2,
            value: _ctx.value,
            disabled: _ctx.disabled2,
            onChange:
              _cache[0] ||
              (_cache[0] = (...args) =>
                _ctx.onChange && _ctx.onChange(...args)),
            ref: 'input'
          },
          null,
          40,
          _hoisted_113
        ),
        _createElementVNode12('div', _hoisted_28, [
          _createVNode3(_component_Icon, {
            class: 'fx-radio_icon',
            icon: 'CircleOutlined'
          }),
          _createVNode3(_component_Icon, {
            class: 'fx-radio_checked-icon',
            icon: 'CheckCircleFilled'
          }),
          _ctx.$slots.default
            ? (_openBlock16(),
              _createElementBlock11('span', _hoisted_35, [
                _renderSlot9(_ctx.$slots, 'default')
              ]))
            : _createCommentVNode7('v-if', true)
        ])
      ],
      6
    )
  )
}
_sfc_script16.render = render16
_sfc_script16.__file = 'src/Radio/Radio.vue'

// vue:./RadioGroup.vue
import { defineComponent as defineComponent17, ref as ref13 } from 'vue'
import {
  renderSlot as _renderSlot10,
  renderList as _renderList2,
  Fragment as _Fragment2,
  openBlock as _openBlock17,
  createElementBlock as _createElementBlock12,
  toDisplayString as _toDisplayString5,
  createTextVNode as _createTextVNode3,
  resolveComponent as _resolveComponent9,
  withCtx as _withCtx2,
  createBlock as _createBlock10,
  normalizeClass as _normalizeClass11
} from 'vue'
var isValue2 = value => isStringNumberMix(value)
var _sfc_script17 = defineComponent17({
  name: 'fx-radio-group',
  components: { Radio: _sfc_script16 },
  props: {
    ...checkboxOrRadioGroupProps,
    modelValue: {
      type: [Number, String],
      validator: isValue2,
      default: null
    }
  },
  emits: {
    'update:modelValue': isValue2,
    change: isValue2
  },
  setup(props, ctx) {
    const inputValue = ref13('')
    const { emit } = ctx
    const group = useCheckboxOrRadioGroup(props, {
      name: 'radio',
      updateValue({ isChange, uid: uid2, children }) {
        let hasChecked = false
        let value = ''
        children.forEach(child => {
          const checked = uid2 ? uid2 === child.uid : child.getInputChecked()
          if (!hasChecked && checked) {
            hasChecked = true
            value = child.getValue()
            child.setChecked(true)
          } else {
            child.setChecked(false)
          }
        })
        inputValue.value = value
        if (isChange && inputValue.value !== props.modelValue) {
          emit('update:modelValue', value)
        }
        if (isChange) {
          emit('change', value)
        }
        return value
      },
      watchValue({ children, value }) {
        let hasChecked = false
        children.forEach(child => {
          if (!hasChecked && child.getValue() === value) {
            hasChecked = true
            inputValue.value = value
            child.setChecked(true)
          } else {
            child.setChecked(false)
          }
        })
      }
    })
    return {
      ...group
    }
  }
})
function render17(_ctx, _cache) {
  const _component_Radio = _resolveComponent9('Radio')
  return (
    _openBlock17(),
    _createElementBlock12(
      'div',
      {
        class: _normalizeClass11([
          'fx-radio-group',
          { vertical: !_ctx.inline, disabled: !!_ctx.disabled }
        ]),
        ref: 'root'
      },
      [
        _renderSlot10(_ctx.$slots, 'default', {}, () => [
          (_openBlock17(true),
          _createElementBlock12(
            _Fragment2,
            null,
            _renderList2(_ctx.options2, item => {
              return (
                _openBlock17(),
                _createBlock10(
                  _component_Radio,
                  {
                    key: item.value,
                    value: item.value
                  },
                  {
                    default: _withCtx2(() => [
                      _createTextVNode3(_toDisplayString5(item.label), 1)
                    ]),
                    _: 2
                  },
                  1032,
                  ['value']
                )
              )
            }),
            128
          ))
        ])
      ],
      2
    )
  )
}
_sfc_script17.render = render17
_sfc_script17.__file = 'src/Radio/RadioGroup.vue'

// src/Radio/index.ts
var Radio_default = _sfc_script16
var install15 = multiWithInstall(_sfc_script16, [_sfc_script17])

// src/RadioGroup/index.ts
var RadioGroup_default = _sfc_script17
var install16 = withNoopInstall(_sfc_script17)

// vue:./Checkbox.vue
import { defineComponent as defineComponent18 } from 'vue'
import {
  createElementVNode as _createElementVNode13,
  resolveComponent as _resolveComponent10,
  createVNode as _createVNode4,
  renderSlot as _renderSlot11,
  openBlock as _openBlock18,
  createElementBlock as _createElementBlock13,
  createCommentVNode as _createCommentVNode8,
  normalizeClass as _normalizeClass12,
  normalizeStyle as _normalizeStyle12
} from 'vue'
var _sfc_script18 = defineComponent18({
  name: 'fx-checkbox',
  components: { Icon: _sfc_script2 },
  props: {
    ...checkboxOrRadioProps,
    circle: {
      type: Boolean,
      default: false
    }
  },
  emits: { ...checkboxOrRadioEmits },
  setup(props, ctx) {
    return useCheckboxOrRadio(props, ctx, 'checkbox')
  }
})
var _hoisted_114 = ['name', 'value', 'disabled']
var _hoisted_29 = { class: 'fx-checkbox_box' }
var _hoisted_36 = {
  key: 0,
  class: 'fx-checkbox_text'
}
function render18(_ctx, _cache) {
  const _component_Icon = _resolveComponent10('Icon')
  return (
    _openBlock18(),
    _createElementBlock13(
      'label',
      {
        class: _normalizeClass12([
          'fx-checkbox fx-horizontal-hairline',
          { disabled: _ctx.disabled2 }
        ]),
        style: _normalizeStyle12(_ctx.styles)
      },
      [
        _createElementVNode13(
          'input',
          {
            class: 'fx-checkbox_input fx-form-input',
            type: 'checkbox',
            name: _ctx.name2,
            value: _ctx.value,
            disabled: _ctx.disabled2,
            onChange:
              _cache[0] ||
              (_cache[0] = (...args) =>
                _ctx.onChange && _ctx.onChange(...args)),
            ref: 'input'
          },
          null,
          40,
          _hoisted_114
        ),
        _createElementVNode13('div', _hoisted_29, [
          _createVNode4(
            _component_Icon,
            {
              class: 'fx-checkbox_icon',
              icon: _ctx.circle ? 'CircleOutlined' : 'BorderOutlined'
            },
            null,
            8,
            ['icon']
          ),
          _createVNode4(
            _component_Icon,
            {
              class: 'fx-checkbox_checked-icon',
              icon: _ctx.circle ? 'CheckCircleFilled' : 'CheckSquareFilled'
            },
            null,
            8,
            ['icon']
          ),
          _ctx.$slots.default
            ? (_openBlock18(),
              _createElementBlock13('span', _hoisted_36, [
                _renderSlot11(_ctx.$slots, 'default')
              ]))
            : _createCommentVNode8('v-if', true)
        ])
      ],
      6
    )
  )
}
_sfc_script18.render = render18
_sfc_script18.__file = 'src/Checkbox/Checkbox.vue'

// vue:./CheckboxGroup.vue
import { defineComponent as defineComponent19, ref as ref14 } from 'vue'
import {
  renderSlot as _renderSlot12,
  renderList as _renderList3,
  Fragment as _Fragment3,
  openBlock as _openBlock19,
  createElementBlock as _createElementBlock14,
  toDisplayString as _toDisplayString6,
  createTextVNode as _createTextVNode4,
  resolveComponent as _resolveComponent11,
  withCtx as _withCtx3,
  createBlock as _createBlock11,
  normalizeClass as _normalizeClass13
} from 'vue'
var isValue3 = value => isStringNumberMixArray(value)
var _sfc_script19 = defineComponent19({
  name: 'fx-checkbox-group',
  components: { Checkbox: _sfc_script18 },
  props: {
    ...checkboxOrRadioGroupProps,
    modelValue: {
      type: Array,
      validator: isValue3,
      default: () => []
    }
  },
  emits: {
    'update:modelValue': isValue3,
    change: isValue3
  },
  setup(props, ctx) {
    const inputValue = ref14([])
    const { emit } = ctx
    const group = useCheckboxOrRadioGroup(props, {
      name: 'checkbox',
      updateValue({ isChange, children }) {
        const newVal = []
        children.forEach(child => {
          if (child.getInputChecked()) {
            newVal.push(cloneData(child.getValue()))
          }
        })
        inputValue.value = newVal
        if (isChange && !isSameArray(newVal, props.modelValue)) {
          emit('update:modelValue', cloneData(newVal))
        }
        if (isChange) {
          emit('change', cloneData(newVal))
        }
        return newVal
      },
      watchValue({ children, value }) {
        if (
          isStringNumberMixArray(value) &&
          !isSameArray(value, inputValue.value)
        ) {
          const newVal = []
          children.forEach(child => {
            const checked = value.includes(child.getValue())
            child.setChecked(checked)
            checked && newVal.push(child.getValue())
          })
          inputValue.value = newVal
        }
      }
    })
    return {
      ...group
    }
  }
})
function render19(_ctx, _cache) {
  const _component_Checkbox = _resolveComponent11('Checkbox')
  return (
    _openBlock19(),
    _createElementBlock14(
      'div',
      {
        class: _normalizeClass13([
          'fx-checkbox-group',
          { vertical: !_ctx.inline, disabled: !!_ctx.disabled }
        ]),
        ref: 'root'
      },
      [
        _renderSlot12(_ctx.$slots, 'default', {}, () => [
          (_openBlock19(true),
          _createElementBlock14(
            _Fragment3,
            null,
            _renderList3(_ctx.options2, item => {
              return (
                _openBlock19(),
                _createBlock11(
                  _component_Checkbox,
                  {
                    key: item.value,
                    value: item.value
                  },
                  {
                    default: _withCtx3(() => [
                      _createTextVNode4(_toDisplayString6(item.label), 1)
                    ]),
                    _: 2
                  },
                  1032,
                  ['value']
                )
              )
            }),
            128
          ))
        ])
      ],
      2
    )
  )
}
_sfc_script19.render = render19
_sfc_script19.__file = 'src/Checkbox/CheckboxGroup.vue'

// src/Checkbox/index.ts
var Checkbox_default = _sfc_script18
var install17 = multiWithInstall(_sfc_script18, [_sfc_script19])

// src/CheckboxGroup/index.ts
var CheckboxGroup_default = _sfc_script19
var install18 = withNoopInstall(_sfc_script19)

// vue:./Input.vue
import {
  computed as computed14,
  defineComponent as defineComponent20,
  onMounted as onMounted8,
  ref as ref15,
  watch as watch10
} from 'vue'

// src/helpers/input.ts
function formatInputNumber(value, decimalLength = -1) {
  if (value == null || value === '') {
    return ''
  }
  const isNegative = value.toString().indexOf('-') === 0
  const match = value.toString().match(/[\d-.]+/)
  if (match && match[0]) {
    value = match[0].replace(/\.+/g, '.').replace(/-+/g, '')
    if (decimalLength > 0) {
      const arr = value.split('.')
      if (arr[1] && arr[1].length > decimalLength) {
        value = parseFloat(value).toFixed(decimalLength)
      }
    } else if (decimalLength === 0) {
      value = parseInt(value).toString()
    }
    return (isNegative ? '-' : '') + value
  }
  return ''
}
function formatInputDigit(value) {
  if (value == null || value === '') {
    return ''
  }
  const match = value.toString().match(/\d+/)
  return (match && match[0]) || ''
}

// vue:./Input.vue
import {
  renderSlot as _renderSlot13,
  openBlock as _openBlock20,
  createElementBlock as _createElementBlock15,
  createCommentVNode as _createCommentVNode9,
  toDisplayString as _toDisplayString7,
  resolveComponent as _resolveComponent12,
  vShow as _vShow5,
  withModifiers as _withModifiers,
  withDirectives as _withDirectives5,
  createBlock as _createBlock12,
  normalizeClass as _normalizeClass14
} from 'vue'
var TYPE_NAMES = [
  'text',
  'number',
  'digit',
  'tel',
  'password',
  'search',
  'textarea'
]
var _sfc_script20 = defineComponent20({
  name: 'fx-input',
  components: { Icon: _sfc_script2 },
  props: {
    ...formItemProps,
    maxlength: {
      type: [Number, String],
      validator: val => {
        return isNumeric(val) || val === ''
      },
      default: 140
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [Number, String],
      validator: val => isStringNumberMix(val)
    },
    focus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showClear: {
      type: Boolean,
      default: false
    },
    showLimit: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    ...formStringValueEmits,
    ...formFocusEmits
  },
  setup(props, ctx) {
    const active = ref15(false)
    const isShowClear = ref15(false)
    const inputValue = ref15('')
    const { emit } = ctx
    const { input, setFocus, setBlur, getInputValue, setInputValue } =
      useInput()
    function updateValue(value) {
      let newValue = value.toString()
      switch (props.type) {
        case 'digit':
          newValue = formatInputDigit(newValue)
          break
        case 'number':
          newValue = formatInputNumber(newValue)
          break
        default:
          break
      }
      let isChange = false
      if (newValue !== getInputValue()) {
        setInputValue(newValue)
      }
      if (newValue !== inputValue.value) {
        inputValue.value = newValue
        isChange = true
      }
      if (newValue != props.modelValue) {
        emit('update:modelValue', newValue)
      }
      return { value: newValue, isChange }
    }
    function updateInput(newVal) {
      const { value, isChange } = updateValue(newVal)
      isChange && emit('input', value)
    }
    let isComposition = false
    function onCompositionStart() {
      isComposition = true
    }
    function onCompositionEnd() {
      isComposition = false
      updateInput(getInputValue())
    }
    function onFocus(e) {
      active.value = true
      emit('focus', e)
    }
    function onBlur(e) {
      active.value = false
      emit('blur', e)
    }
    function onInput() {
      if (!isComposition) {
        updateInput(getInputValue())
      }
    }
    function onChange() {
      emit('change', inputValue.value)
    }
    function onClear() {
      updateInput('')
      emit('change', inputValue.value)
    }
    const inputType = computed14(() => {
      if (props.type === 'number') {
        return 'text'
      }
      if (props.type === 'digit') {
        return 'tel'
      }
      return getEnumsValue(TYPE_NAMES, props.type)
    })
    const inputMode = computed14(() => {
      let mode = 'none'
      switch (props.type) {
        case 'search':
          mode = 'search'
          break
        case 'digit':
          mode = 'numeric'
          break
        case 'number':
          mode = 'decimal'
          break
        case 'tel':
          mode = 'tel'
          break
        case 'text':
          mode = 'text'
          break
        default:
          break
      }
      return mode
    })
    watch10(
      () => props.modelValue,
      val => {
        val != inputValue.value && updateValue(val != null ? val : '')
      }
    )
    watch10(
      () => props.focus,
      val => {
        val ? setFocus() : setBlur()
      }
    )
    const maxLength = computed14(() => {
      if (isNumber(props.maxlength)) {
        return Math.round(props.maxlength)
      }
      if (isNumeric(props.maxlength)) {
        return Math.round(parseFloat(props.maxlength))
      }
      return 140
    })
    let timer
    watch10([inputValue, active], ([ipVal, isActive]) => {
      clearTimeout(timer)
      if (ipVal && isActive) {
        timer = window.setTimeout(() => (isShowClear.value = true), 200)
      } else {
        isShowClear.value = false
      }
    })
    onMounted8(() => {
      var _a
      updateValue((_a = props.modelValue) != null ? _a : '')
      props.focus && setFocus()
    })
    return {
      input,
      inputValue,
      active,
      onCompositionStart,
      onCompositionEnd,
      onFocus,
      onBlur,
      onInput,
      onChange,
      onClear,
      inputType,
      inputMode,
      maxLength,
      isShowClear
    }
  }
})
var _hoisted_115 = {
  key: 0,
  class: 'fx-input_prepend'
}
var _hoisted_210 = ['name', 'disabled', 'placeholder', 'readonly', 'maxlength']
var _hoisted_37 = [
  'name',
  'type',
  'inputmode',
  'disabled',
  'placeholder',
  'readonly',
  'maxlength'
]
var _hoisted_43 = {
  key: 3,
  class: 'fx-input_limit'
}
var _hoisted_5 = {
  key: 5,
  class: 'fx-input_append'
}
function render20(_ctx, _cache) {
  const _component_Icon = _resolveComponent12('Icon')
  return (
    _openBlock20(),
    _createElementBlock15(
      'label',
      {
        class: _normalizeClass14([
          'fx-input',
          {
            'has--prepend': _ctx.$slots.prepend,
            'has--append': _ctx.$slots.append,
            'fx-textarea': _ctx.type === 'textarea',
            focus: _ctx.active,
            disabled: _ctx.disabled
          }
        ])
      },
      [
        _ctx.$slots.prepend
          ? (_openBlock20(),
            _createElementBlock15('div', _hoisted_115, [
              _renderSlot13(_ctx.$slots, 'prepend')
            ]))
          : _createCommentVNode9('v-if', true),
        _ctx.type === 'textarea'
          ? (_openBlock20(),
            _createElementBlock15(
              'textarea',
              {
                key: 1,
                class: 'fx-input_input fx-input_textarea',
                name: _ctx.name,
                disabled: _ctx.disabled,
                placeholder: _ctx.placeholder,
                readonly: _ctx.readonly,
                maxlength: _ctx.maxLength,
                onInput:
                  _cache[0] ||
                  (_cache[0] = (...args) =>
                    _ctx.onInput && _ctx.onInput(...args)),
                onChange:
                  _cache[1] ||
                  (_cache[1] = (...args) =>
                    _ctx.onChange && _ctx.onChange(...args)),
                onFocus:
                  _cache[2] ||
                  (_cache[2] = (...args) =>
                    _ctx.onFocus && _ctx.onFocus(...args)),
                onBlur:
                  _cache[3] ||
                  (_cache[3] = (...args) =>
                    _ctx.onBlur && _ctx.onBlur(...args)),
                ref: 'input'
              },
              null,
              40,
              _hoisted_210
            ))
          : (_openBlock20(),
            _createElementBlock15(
              'input',
              {
                key: 2,
                class: 'fx-input_input',
                name: _ctx.name,
                type: _ctx.inputType,
                inputmode: _ctx.inputMode,
                disabled: _ctx.disabled,
                placeholder: _ctx.placeholder,
                readonly: _ctx.readonly,
                maxlength: _ctx.maxLength,
                onInput:
                  _cache[4] ||
                  (_cache[4] = (...args) =>
                    _ctx.onInput && _ctx.onInput(...args)),
                onChange:
                  _cache[5] ||
                  (_cache[5] = (...args) =>
                    _ctx.onChange && _ctx.onChange(...args)),
                onFocus:
                  _cache[6] ||
                  (_cache[6] = (...args) =>
                    _ctx.onFocus && _ctx.onFocus(...args)),
                onBlur:
                  _cache[7] ||
                  (_cache[7] = (...args) =>
                    _ctx.onBlur && _ctx.onBlur(...args)),
                onCompositionstart:
                  _cache[8] ||
                  (_cache[8] = (...args) =>
                    _ctx.onCompositionStart &&
                    _ctx.onCompositionStart(...args)),
                onCompositionend:
                  _cache[9] ||
                  (_cache[9] = (...args) =>
                    _ctx.onCompositionEnd && _ctx.onCompositionEnd(...args)),
                ref: 'input'
              },
              null,
              40,
              _hoisted_37
            )),
        _ctx.showLimit && _ctx.maxLength > 0
          ? (_openBlock20(),
            _createElementBlock15(
              'span',
              _hoisted_43,
              _toDisplayString7(_ctx.inputValue.length) +
                '/' +
                _toDisplayString7(_ctx.maxLength),
              1
            ))
          : _createCommentVNode9('v-if', true),
        _ctx.showClear
          ? _withDirectives5(
              (_openBlock20(),
              _createBlock12(
                _component_Icon,
                {
                  key: 4,
                  class: 'fx-input_clear',
                  icon: 'CloseCircleFilled',
                  onMousedown: _withModifiers(_ctx.onClear, ['prevent'])
                },
                null,
                8,
                ['onMousedown']
              )),
              [[_vShow5, _ctx.isShowClear]]
            )
          : _createCommentVNode9('v-if', true),
        _ctx.$slots.append
          ? (_openBlock20(),
            _createElementBlock15('div', _hoisted_5, [
              _renderSlot13(_ctx.$slots, 'append')
            ]))
          : _createCommentVNode9('v-if', true)
      ],
      2
    )
  )
}
_sfc_script20.render = render20
_sfc_script20.__file = 'src/Input/Input.vue'

// src/Input/index.ts
var install19 = withInstall(_sfc_script20)
var Input_default = _sfc_script20

// vue:./Form.vue
import { defineComponent as defineComponent22, h } from 'vue'

// vue:./FormFooter.vue
import { defineComponent as defineComponent21 } from 'vue'
import {
  renderSlot as _renderSlot14,
  openBlock as _openBlock21,
  createElementBlock as _createElementBlock16
} from 'vue'
var _sfc_script21 = defineComponent21({
  name: 'fx-form-footer'
})
var _hoisted_116 = { class: 'fx-form-footer' }
function render21(_ctx, _cache) {
  return (
    _openBlock21(),
    _createElementBlock16('div', _hoisted_116, [
      _renderSlot14(_ctx.$slots, 'default')
    ])
  )
}
_sfc_script21.render = render21
_sfc_script21.__file = 'src/Form/FormFooter.vue'

// vue:./Form.vue
var _sfc_script22 = defineComponent22({
  name: 'fx-form',
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          className: 'fx-form'
        },
        [
          slots.default && slots.default(),
          slots.footer &&
            h(_sfc_script21, null, () => slots.footer && slots.footer())
        ]
      )
  }
})

// vue:./FormItem.vue
import {
  computed as computed15,
  defineComponent as defineComponent23
} from 'vue'
import {
  toDisplayString as _toDisplayString8,
  openBlock as _openBlock22,
  createElementBlock as _createElementBlock17,
  createCommentVNode as _createCommentVNode10,
  createTextVNode as _createTextVNode5,
  renderSlot as _renderSlot15,
  createElementVNode as _createElementVNode14,
  renderList as _renderList4,
  Fragment as _Fragment4,
  normalizeClass as _normalizeClass15
} from 'vue'
var _sfc_script23 = defineComponent23({
  name: 'fx-form-item',
  props: {
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: [String, Array],
      validator: val => typeof val === 'string' || isStringArray(val)
    },
    validateStatus: {
      type: String
    }
  },
  setup(props) {
    const errors = computed15(() => {
      const ret = []
      if (Array.isArray(props.error)) {
        props.error.forEach(v => {
          ret.push(v.toString())
        })
      } else if (props.error != null) {
        ret.push(props.error.toString())
      }
      return ret
    })
    return { errors }
  }
})
var _hoisted_117 = { class: 'fx-cell_header' }
var _hoisted_211 = {
  key: 0,
  class: 'fx-cell_label'
}
var _hoisted_38 = {
  key: 0,
  class: 'fx-form-item_required'
}
var _hoisted_44 = { class: 'fx-cell_content' }
var _hoisted_52 = {
  key: 0,
  class: 'fx-cell_body'
}
function render22(_ctx, _cache) {
  return (
    _openBlock22(),
    _createElementBlock17(
      'label',
      {
        class: _normalizeClass15([
          'fx-form-item fx-cell fx-horizontal-hairline',
          [_ctx.validateStatus]
        ])
      },
      [
        _createElementVNode14('div', _hoisted_117, [
          _ctx.label
            ? (_openBlock22(),
              _createElementBlock17('div', _hoisted_211, [
                _createTextVNode5(_toDisplayString8(_ctx.label) + ' ', 1),
                _ctx.required
                  ? (_openBlock22(),
                    _createElementBlock17('span', _hoisted_38, '*'))
                  : _createCommentVNode10('v-if', true)
              ]))
            : _createCommentVNode10('v-if', true),
          _createElementVNode14('div', _hoisted_44, [
            _renderSlot15(_ctx.$slots, 'default')
          ])
        ]),
        _ctx.errors.length > 0
          ? (_openBlock22(),
            _createElementBlock17('ol', _hoisted_52, [
              (_openBlock22(true),
              _createElementBlock17(
                _Fragment4,
                null,
                _renderList4(_ctx.errors, (error, k) => {
                  return (
                    _openBlock22(),
                    _createElementBlock17(
                      'li',
                      { key: error },
                      _toDisplayString8(
                        _ctx.errors.length > 1 ? k + 1 + '. ' : ''
                      ) + _toDisplayString8(error),
                      1
                    )
                  )
                }),
                128
              ))
            ]))
          : _createCommentVNode10('v-if', true)
      ],
      2
    )
  )
}
_sfc_script23.render = render22
_sfc_script23.__file = 'src/Form/FormItem.vue'

// src/Form/index.ts
var Form_default = _sfc_script22
var install20 = multiWithInstall(_sfc_script22, [_sfc_script23, _sfc_script21])

// src/FormItem/index.ts
var FormItem_default = _sfc_script23
var install21 = withNoopInstall(_sfc_script23)

// src/FormFooter/index.ts
var FormFooter_default = _sfc_script21
var install22 = withNoopInstall(_sfc_script21)

// vue:./Cascader.vue
import { defineComponent as defineComponent28 } from 'vue'

// vue:../Cascader/CascaderPopup.vue
import {
  defineComponent as defineComponent26,
  ref as ref19,
  inject as inject5,
  watch as watch14,
  nextTick as nextTick5
} from 'vue'

// vue:./Tab.vue
import { defineComponent as defineComponent25 } from 'vue'

// vue:./Badge.vue
import {
  computed as computed16,
  defineComponent as defineComponent24,
  onBeforeUnmount as onBeforeUnmount7,
  ref as ref16,
  watch as watch11
} from 'vue'

// src/helpers/animation.ts
var Easing = {
  linear(p) {
    return p
  },
  swing(p) {
    return 0.5 - Math.cos(p * Math.PI) / 2
  }
}
var uid = 0
var AnimationFrameTask = class {
  constructor(ref52, id) {
    this.stop = function () {
      if (ref52.idle) {
        cancelAnimationFrame(ref52.idle)
        ref52.idle = null
        ref52.done()
        return true
      }
      return false
    }
    this.id = id
  }
}
function frameTo(options) {
  const { from, to, duration, progress, complete, easing } = options
  const start = Date.now()
  const end = start + duration
  const id = ++uid
  function done() {
    complete && complete({ current, id })
  }
  const ref52 = { idle: null, id, done }
  let frameIndex = 0
  let current = from
  function step2() {
    ref52.idle = requestAnimationFrame(function () {
      const t = Date.now()
      if (t >= end) {
        current = to
        progress({
          current,
          frameIndex: ++frameIndex,
          id
        })
        done()
      } else {
        const p = Easing[easing || 'swing']((t - start) / duration)
        current = from + (to - from) * p
        progress({
          current,
          frameIndex: ++frameIndex,
          id
        })
        step2()
      }
    })
  }
  progress({
    current,
    frameIndex,
    id
  })
  step2()
  return new AnimationFrameTask(ref52, id)
}
function getStretchOffset2(offset) {
  return Math.ceil(offset / Math.log(Math.abs(offset)))
}

// vue:./Badge.vue
import {
  renderSlot as _renderSlot16,
  toDisplayString as _toDisplayString9,
  createTextVNode as _createTextVNode6,
  normalizeClass as _normalizeClass16,
  normalizeStyle as _normalizeStyle13,
  openBlock as _openBlock23,
  createElementBlock as _createElementBlock18,
  createCommentVNode as _createCommentVNode11
} from 'vue'
var _sfc_script24 = defineComponent24({
  name: 'fx-badge',
  props: {
    content: {
      type: [Number, String],
      default: 0
    },
    maxCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    showZero: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Array,
      default: () => {
        return [0, 0]
      }
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const content2 = ref16(
      typeof props.content === 'string'
        ? props.content
        : typeof props.content === 'number'
        ? rangeInteger(props.content, 0, props.maxCount)
        : 0
    )
    let frameTask
    const showCount = computed16(() => {
      if (typeof content2.value === 'string') {
        return content2.value
      }
      if (props.content > props.maxCount && content2.value === props.maxCount) {
        return content2.value + '+'
      }
      return content2.value.toString()
    })
    const styles = computed16(() => {
      const obj2 = {
        transform: `translate3d(50%, -50%, 0px) scale(${
          (typeof props.content === 'string' && props.content) ||
          props.showZero ||
          props.content > 0
            ? 1
            : 0
        })`,
        right: `${-props.offset[0]}px`,
        top: `${props.offset[1]}px`
      }
      const colorObj = getColorObject(props.color)
      if (colorObj.hasColor) {
        obj2[`--fx-color`] = colorObj.varBackgroundColor
        obj2[`--fx-front-color`] = colorObj.varFrontColor
      }
      return obj2
    })
    watch11(
      () => props.content,
      val => {
        frameTask && frameTask.stop()
        if (typeof val === 'string') {
          content2.value = val
          return
        }
        if (!isNumber(val)) {
          return
        }
        const currentIsShow = props.showZero || content2.value > 0
        const isReadyToHide = !props.showZero && val === 0
        if (!currentIsShow || isReadyToHide) {
          content2.value = val
        } else {
          const to = rangeInteger(val, 0, props.maxCount)
          frameTask = frameTo({
            from: content2.value,
            to,
            duration: Math.min(Math.abs(to - content2.value) * 50, 1e3),
            progress: ({ current, frameIndex }) => {
              if (frameIndex % 3 === 0) {
                content2.value = Math.round(current)
              }
            },
            complete: ({ current }) => {
              content2.value = current
            }
          })
        }
      }
    )
    onBeforeUnmount7(() => frameTask && frameTask.stop())
    return {
      showCount,
      styles
    }
  }
})
function render23(_ctx, _cache) {
  return (
    _openBlock23(),
    _createElementBlock18(
      'div',
      {
        class: _normalizeClass16(['fx-badge', { animated: !!_ctx.animated }])
      },
      [
        _renderSlot16(_ctx.$slots, 'default'),
        _ctx.content != null
          ? (_openBlock23(),
            _createElementBlock18(
              'div',
              {
                key: 0,
                class: _normalizeClass16(['fx-badge_badge', { dot: _ctx.dot }]),
                style: _normalizeStyle13(_ctx.styles)
              },
              [
                _renderSlot16(_ctx.$slots, 'badge', {}, () => [
                  _createTextVNode6(_toDisplayString9(_ctx.showCount), 1)
                ])
              ],
              6
            ))
          : _createCommentVNode11('v-if', true)
      ],
      2
    )
  )
}
_sfc_script24.render = render23
_sfc_script24.__file = 'src/Badge/Badge.vue'

// src/Badge/index.ts
var install23 = withInstall(_sfc_script24)
var Badge_default = _sfc_script24

// src/Tab/tab.ts
var tabEmits = {
  'update:activeValue': payload => isStringNumberMix(payload),
  change: payload =>
    payload &&
    typeof payload.index === 'number' &&
    isStringNumberMix(payload.value)
}
var tabProps = {
  options: {
    type: Array,
    validator: val => {
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          const option = val[i]
          if (typeof option === 'string' || typeof option === 'number') {
          } else if (
            option &&
            typeof option.label === 'string' &&
            isStringNumberMix(option.value)
          ) {
          } else {
            return false
          }
        }
      } else {
        return false
      }
      return true
    },
    required: true,
    default: () => []
  },
  activeValue: {
    type: [Number, String]
  },
  color: {
    type: String,
    validator: colorValidator
  },
  activeColor: {
    type: String,
    validator: colorValidator
  }
}

// src/Tab/use-tab.ts
import {
  getCurrentInstance,
  ref as ref17,
  watch as watch12,
  computed as computed17,
  nextTick as nextTick4
} from 'vue'

// src/Badge/badge.ts
function handleBadge(badge) {
  if (isStringNumberMix(badge)) {
    return {
      content: badge
    }
  } else if (isObject(badge)) {
    return badge
  } else {
    return {}
  }
}

// src/Tab/use-tab.ts
function useTab(props, { emit }, { tabName }) {
  const instance = getCurrentInstance()
  const listEl = ref17()
  const underlineEl = ref17()
  const options2 = ref17([])
  const activeIndex = ref17(-1)
  const hasSub = ref17(false)
  let value2 = props.activeValue
  function updateOptions() {
    const options = []
    let hasActive = false
    hasSub.value = false
    if (Array.isArray(props.options)) {
      props.options.forEach((item, index) => {
        var _a
        let option = null
        if (isNumber(item)) {
          option = {
            label: item.toString(),
            value: item
          }
        } else if (typeof item === 'string') {
          option = {
            label: item,
            value: item
          }
        } else if (isObject(item)) {
          item = item
          if (isStringNumberMix(item.value)) {
            option = {
              label:
                typeof item.label === 'string'
                  ? item.label
                  : item.value.toString(),
              subLabel: typeof item.subLabel === 'string' ? item.subLabel : '',
              value: item.value,
              icon: null
            }
            if (item.icon) {
              if (isURL(item.icon)) {
                option.iconLink = item.icon
                option.activeIconLink = isURL(item.activeIcon)
                  ? item.activeIcon
                  : option.iconLink
              } else {
                option.icon = item.icon
                option.activeIcon =
                  (_a = item.activeIcon) != null ? _a : option.icon
              }
            }
            if (option.subLabel) {
              hasSub.value = true
            }
            option.badge = handleBadge(item.badge)
          }
        }
        if (option) {
          if (option.value === value2) {
            activeIndex.value = index
            hasActive = true
          }
          options.push(option)
        }
      })
    }
    options2.value = options
    if (!hasActive && options[0]) {
      updateActive(options[0].value)
    }
    updatePos()
  }
  function switchTo(value, isProp = false) {
    if (!updateActive(value)) {
      console.error(
        new exception_default(
          'The value is not in "options".',
          isProp
            ? exception_default.TYPE.PROP_ERROR
            : exception_default.TYPE.PARAM_ERROR,
          tabName
        )
      )
    }
  }
  function switchToIndex(index) {
    if (options2.value[index]) {
      updateActive(options2.value[index].value)
    } else {
      console.error(
        new exception_default(
          'The "options[index]" not found.',
          exception_default.TYPE.PARAM_ERROR,
          tabName
        )
      )
    }
  }
  function updateActive(value) {
    if (value === value2) {
      return true
    }
    let hasValue = false
    options2.value.forEach((option, index) => {
      if (option.value === value) {
        value2 = option.value
        activeIndex.value = index
        hasValue = true
      }
    })
    if (!hasValue) {
      activeIndex.value = -1
    }
    afterUpdate({
      hasValue,
      activeIndex: activeIndex.value
    })
    return hasValue
  }
  function afterUpdate({ hasValue }) {
    hasValue && (instance == null ? void 0 : instance.isMounted) && updatePos()
  }
  function onChange(value) {
    if (value === value2) {
      return
    }
    updateActive(value)
    emit('update:activeValue', value)
    emit('change', {
      value,
      index: activeIndex.value
    })
  }
  function updatePos() {
    nextTick4(() => {
      if (tabName === 'TabBar') {
        return
      }
      if (!listEl.value) {
        return
      }
      const $list = listEl.value
      const $activeItem = $list.children[activeIndex.value]
      if (!$activeItem) {
        return
      }
      const vertical = tabName === 'SideTab'
      const sizeKey = !vertical ? 'Width' : 'Height'
      const directionKey = !vertical ? 'Left' : 'Top'
      const offsetSizeKey = 'offset' + sizeKey
      const scrollSizeKey = 'scroll' + sizeKey
      const offsetDirectionKey = 'offset' + directionKey
      const scrollDirectionKey = 'scroll' + directionKey
      const w = $list[offsetSizeKey]
      const ofs = $activeItem[offsetDirectionKey]
      const from = $list[scrollDirectionKey]
      const to =
        $activeItem[offsetSizeKey] > w
          ? ofs
          : Math.max(
              Math.min(
                ofs - (w - $activeItem[offsetSizeKey]) / 2,
                $list[scrollSizeKey] - w
              ),
              0
            )
      frameTo({
        from,
        to,
        duration: 200,
        progress({ current }) {
          $list[scrollDirectionKey] = current
        },
        complete({ current }) {
          $list[scrollDirectionKey] = current
        }
      })
      if (tabName === 'Tab' && underlineEl.value) {
        const $inner = $activeItem.querySelector('.fx-tab_item-inner')
        underlineEl.value.style.width = $inner.offsetWidth + 'px'
        underlineEl.value.style.transform = `translate3d(${
          ofs - to + ($activeItem.offsetWidth - $inner.offsetWidth) / 2
        }px, 0, 0)`
      }
    })
  }
  watch12(
    () => props.activeValue,
    val => val != null && switchTo(val, true)
  )
  watch12(() => props.options, updateOptions, {
    deep: true,
    immediate: true
  })
  const styles = computed17(() => {
    const obj2 = {}
    props.color && (obj2['--fx-color'] = props.color)
    props.activeColor && (obj2['--fx-active-color'] = props.activeColor)
    return obj2
  })
  return {
    listEl,
    underlineEl,
    activeIndex,
    hasSub,
    options2,
    switchTo,
    switchToIndex,
    onChange,
    styles
  }
}

// vue:./Tab.vue
import {
  renderList as _renderList5,
  Fragment as _Fragment5,
  openBlock as _openBlock24,
  createElementBlock as _createElementBlock19,
  resolveComponent as _resolveComponent13,
  createBlock as _createBlock13,
  createCommentVNode as _createCommentVNode12,
  toDisplayString as _toDisplayString10,
  createElementVNode as _createElementVNode15,
  mergeProps as _mergeProps5,
  withCtx as _withCtx4,
  createVNode as _createVNode5,
  normalizeClass as _normalizeClass17
} from 'vue'
var _sfc_script25 = defineComponent25({
  name: 'fx-tab',
  components: { Icon: _sfc_script2, Badge: _sfc_script24 },
  props: {
    ...tabProps,
    scrollThreshold: {
      type: Number,
      default: 4
    }
  },
  emits: { ...tabEmits },
  setup(props, ctx) {
    return {
      ...useTab(props, ctx, { tabName: 'Tab' })
    }
  }
})
var _hoisted_118 = {
  class: 'fx-tab_list',
  ref: 'listEl'
}
var _hoisted_212 = ['onClick']
var _hoisted_39 = { class: 'fx-tab_item-text' }
var _hoisted_45 = {
  key: 0,
  class: 'fx-tab_item-sub-text'
}
var _hoisted_53 = {
  class: 'fx-tab_underline',
  ref: 'underlineEl'
}
function render24(_ctx, _cache) {
  const _component_Icon = _resolveComponent13('Icon')
  const _component_Badge = _resolveComponent13('Badge')
  return (
    _openBlock24(),
    _createElementBlock19(
      'div',
      {
        class: _normalizeClass17([
          'fx-tab',
          {
            'no--scroll': _ctx.options2.length <= _ctx.scrollThreshold,
            'has--sub': _ctx.hasSub
          }
        ])
      },
      [
        _createElementVNode15(
          'ul',
          _hoisted_118,
          [
            (_openBlock24(true),
            _createElementBlock19(
              _Fragment5,
              null,
              _renderList5(_ctx.options2, (item, index) => {
                return (
                  _openBlock24(),
                  _createElementBlock19(
                    'li',
                    {
                      class: _normalizeClass17([
                        'fx-tab_item fx-vertical-hairline',
                        {
                          active: index === _ctx.activeIndex,
                          'active-prev': index === _ctx.activeIndex - 1,
                          'active-next': index === _ctx.activeIndex + 1
                        }
                      ]),
                      key: item.value,
                      onClick: $event => _ctx.onChange(item.value)
                    },
                    [
                      _createVNode5(
                        _component_Badge,
                        _mergeProps5(
                          { class: 'fx-tab_item-inner' },
                          item.badge
                        ),
                        {
                          default: _withCtx4(() => [
                            item.icon
                              ? (_openBlock24(),
                                _createBlock13(
                                  _component_Icon,
                                  {
                                    key: 0,
                                    icon:
                                      index === _ctx.activeIndex
                                        ? item.activeIcon
                                        : item.icon
                                  },
                                  null,
                                  8,
                                  ['icon']
                                ))
                              : _createCommentVNode12('v-if', true),
                            _createElementVNode15(
                              'span',
                              _hoisted_39,
                              _toDisplayString10(item.label),
                              1
                            )
                          ]),
                          _: 2
                        },
                        1040
                      ),
                      _ctx.hasSub
                        ? (_openBlock24(),
                          _createElementBlock19(
                            'span',
                            _hoisted_45,
                            _toDisplayString10(item.subLabel),
                            1
                          ))
                        : _createCommentVNode12('v-if', true)
                    ],
                    10,
                    _hoisted_212
                  )
                )
              }),
              128
            ))
          ],
          512
        ),
        _createElementVNode15('span', _hoisted_53, null, 512)
      ],
      2
    )
  )
}
_sfc_script25.render = render24
_sfc_script25.__file = 'src/Tab/Tab.vue'

// src/Tab/index.ts
var install24 = withInstall(_sfc_script25)
var Tab_default = _sfc_script25

// src/Picker/util.ts
function isSameValue(aVal, bVal) {
  if (Array.isArray(aVal) && Array.isArray(bVal)) {
    return isSameArray(aVal, bVal)
  }
  if (aVal instanceof Date && bVal instanceof Date) {
    return isSameDate(aVal, bVal)
  }
  return aVal === bVal
}
function isSameDetail(a, b) {
  return isSameValue(a.value, b.value)
}
function cloneValue(value) {
  if (value instanceof Date) {
    return new Date(value)
  } else if (isDateArray(value)) {
    const newValue = []
    value.forEach(date => {
      newValue.push(new Date(date))
    })
    return newValue
  }
  return cloneData(value)
}
function cloneDetail(detail) {
  const newDetail = cloneData(detail)
  newDetail.value = cloneValue(detail.value)
  return newDetail
}

// src/Picker/picker.ts
var getDefaultFieldNames = () => {
  return { label: 'label', value: 'value', children: 'children' }
}
var commonProps = {
  modelValue: {
    type: [Date, String, Number, Array]
  },
  options: {
    type: Array,
    default: () => []
  },
  fieldNames: {
    type: Object,
    default: getDefaultFieldNames
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  }
}
var pickerProps = {
  ...formItemProps,
  placeholder: {
    type: String,
    default: ''
  }
}
var isValue4 = value => {
  return isStringNumberMix(value) || value instanceof Date
}
var isModelValue = value => {
  if (Array.isArray(value)) {
    return (
      value.filter(v => {
        return !isValue4(v)
      }).length === 0
    )
  }
  return isValue4(value)
}
var isPickerDetail = detail => {
  return (
    detail && isModelValue(detail.value) && typeof detail.label === 'string'
  )
}
var pickerValueEmits = {
  change: isModelValue,
  'update:modelValue': isModelValue
}
var pickerEmits = { ...pickerValueEmits, ...formActiveEmits }
var pickerPopupProps = {
  title: {
    type: String,
    default: ''
  }
}
var pickerPopupEmits = {
  ...popupEmits,
  ...pickerValueEmits,
  confirm: payload => isPickerDetail(payload)
}
var labelFormatter = labelArray => {
  return labelArray.join('/')
}
var defaultFormatter = (valueArray, labelArray) => {
  return {
    value: valueArray,
    label: labelFormatter(labelArray)
  }
}
var defaultParser = value => {
  if (isNumber(value)) {
    return [value]
  } else if (typeof value === 'string' && value) {
    return [value]
  } else if (isStringNumberMixArray(value)) {
    return cloneValue(value)
  }
  return []
}
function getDefaultDetail() {
  return {
    value: [],
    label: ''
  }
}
function mergeHandlers(...handlersArray) {
  const handlers = {
    formatter: defaultFormatter,
    parser: defaultParser,
    labelFormatter
  }
  handlersArray.forEach(handlersItem => {
    objectForEach(handlersItem, (value, key) => {
      if (value) {
        handlers[key] = value
      }
    })
  })
  return handlers
}
function getColRows(options, indexes) {
  const rows = []
  options.forEach((item, index) => {
    rows.push({
      label: item.label,
      value: item.value,
      hasChildren: item.children && item.children.length > 0,
      indexes: [...indexes, index]
    })
  })
  return rows
}
function parseOptions(options, fieldNames) {
  const newOptions = []
  if (Array.isArray(options)) {
    options.forEach(option => {
      if (Array.isArray(option)) {
        const subOptions = parseOptions(option, fieldNames)
        if (subOptions.length > 0) {
          newOptions.push(subOptions)
        }
      } else if (isNumber(option) || typeof option === 'string') {
        newOptions.push({
          label: option.toString(),
          value: option,
          children: [],
          disabled: false
        })
      } else if (isObject(option)) {
        const newOption = option
        if (isStringNumberMix(newOption[fieldNames.value])) {
          newOptions.push({
            label:
              newOption[fieldNames.label] == null
                ? newOption[fieldNames.value]
                : newOption[fieldNames.label],
            value: newOption[fieldNames.value],
            disabled: newOption.disabled ? true : false,
            children: parseOptions(newOption[fieldNames.children], fieldNames)
          })
        }
      }
    })
  }
  return newOptions
}
function validateCols(values, options) {
  const optionList = Array.isArray(options[0]) ? options : [options]
  let selectCount = 0
  const value = []
  const label = []
  optionList.forEach((subOptionList, colIndex) => {
    for (let i = 0; i < subOptionList.length; i++) {
      const optionItem = subOptionList[i]
      if (optionItem.value == values[colIndex]) {
        selectCount++
        value.push(optionItem.value)
        label.push(optionItem.label)
        break
      }
    }
  })
  return selectCount === optionList.length
    ? {
        valid: true,
        value,
        label
      }
    : {
        valid: false,
        value: [],
        label: []
      }
}
function validateCascadeCols(values, options, virtualHandler) {
  const value = []
  const label = []
  function addData(optionItem) {
    value.push(optionItem.value)
    label.push(optionItem.label)
  }
  function deep(optionList, valueIndex, indexes) {
    const rows = getColRows(optionList, indexes)
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      const optionItem = optionList[i]
      if (row.value === values[valueIndex]) {
        if (row.hasChildren && values[valueIndex + 1]) {
          addData(optionItem)
          return deep(optionItem.children, valueIndex + 1, [...indexes, i])
        } else if (!row.hasChildren && valueIndex + 1 >= values.length) {
          addData(optionItem)
          return true
        } else {
          return false
        }
      }
    }
    return false
  }
  function virtualOptionsDeep(index, valueIndex, parent) {
    function row2OptionItem(row) {
      return {
        label: row.label,
        value: row.value,
        children: [],
        disabled: false
      }
    }
    const rows = virtualHandler(index, parent)
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      const optionItem = row2OptionItem(row)
      if (row.value === values[valueIndex]) {
        if (row.hasChildren && valueIndex + 1 < values.length) {
          addData(optionItem)
          return virtualOptionsDeep(index + 1, valueIndex + 1, row)
        } else if (!row.hasChildren && valueIndex + 1 >= values.length) {
          addData(optionItem)
          return true
        } else {
          return false
        }
      }
    }
    return false
  }
  return (virtualHandler ? virtualOptionsDeep(0, 0) : deep(options, 0, []))
    ? {
        valid: true,
        value,
        label
      }
    : {
        valid: false,
        value: [],
        label: []
      }
}
function printError(message) {
  console.error(
    new exception_default(
      message,
      exception_default.TYPE.PROP_ERROR,
      'Picker/DatePicker/Cascader/Calendar'
    )
  )
}
function validateValues(values, options, isCascade, virtualHandler) {
  let valid = false
  if (values instanceof Error) {
    printError(values.message)
  } else if (values.length === 0) {
    valid = true
  } else {
    const ret = isCascade
      ? validateCascadeCols(values, options, virtualHandler)
      : validateCols(values, options)
    if (!ret.valid) {
      printError('The value is not in "options".')
    } else {
      return ret
    }
  }
  return {
    valid,
    value: [],
    label: []
  }
}
function getFormatOptions(
  options,
  fieldNames,
  virtualHandler,
  cascader = false
) {
  const newFieldNames = getDefaultFieldNames()
  let newOptions = []
  let isCascade = false
  if (virtualHandler == null) {
    if (fieldNames) {
      typeof fieldNames.label === 'string' &&
        fieldNames.label &&
        (newFieldNames.label = fieldNames.label)
      typeof fieldNames.value === 'string' &&
        fieldNames.value &&
        (newFieldNames.value = fieldNames.value)
      typeof fieldNames.children === 'string' &&
        fieldNames.children &&
        (newFieldNames.children = fieldNames.children)
    }
    newOptions = parseOptions(options, newFieldNames)
    if (cascader) {
      isCascade = true
    } else {
      for (let i = 0; i < newOptions.length; i++) {
        const newOption = newOptions[i]
        if (newOption.children && newOption.children[0]) {
          isCascade = true
          break
        }
      }
    }
  } else {
    isCascade = true
  }
  return {
    options: newOptions,
    isCascade,
    fieldNames: newFieldNames
  }
}

// src/Picker/use-picker.ts
import { onMounted as onMounted9, ref as ref18, watch as watch13 } from 'vue'
function usePicker(props, ctx, { name, handlers }) {
  const root = ref18()
  const { emit } = ctx
  const isInitPopup = ref18(false)
  const popupVisible = ref18(true)
  const fieldValue = ref18('')
  const fieldLabel = ref18('')
  const popup = ref18()
  let detail = getDefaultDetail()
  function updateValue(val) {
    if (val == null) {
      return getDetail()
    }
    if (isEmpty(val) && val !== 0) {
      return updateDetail(getDefaultDetail())
    }
    if (popup.value) {
      return updateDetail(popup.value.updateValue(val))
    }
    if (!isSameValue(val, detail.value)) {
      const { options, isCascade } = getFormatOptions(
        props.options || [],
        props.fieldNames || {},
        handlers.optionsHandler,
        name === 'cascader'
      )
      const { value, label, valid } = validateValues(
        parser(val, handlers),
        options,
        isCascade,
        handlers.optionsHandler
      )
      if (valid) {
        return updateDetail(formatter(value, label, handlers))
      }
    }
    return getDetail()
  }
  function updateDetail(newDetail) {
    detail = newDetail
    fieldValue.value = detail.value != null ? detail.value.toString() : ''
    fieldLabel.value = detail.label
    return getDetail()
  }
  function onFieldClick() {
    if (!props.disabled) {
      if (!isInitPopup.value) {
        isInitPopup.value = true
      } else {
        popupVisible.value = true
      }
    }
  }
  function getDetail() {
    return cloneDetail(detail)
  }
  function onChange() {
    popup.value && updateDetail(popup.value.getDetail())
    emit('update:modelValue', getDetail().value)
    emit('change', getDetail().value)
  }
  function onConfirm(_detail) {
    updateDetail(_detail)
    emit('update:modelValue', getDetail().value)
    emit('change', getDetail().value)
  }
  watch13(
    [() => props.modelValue, () => props.options],
    () => updateValue(props.modelValue),
    {
      immediate: true
    }
  )
  watch13([isInitPopup, popupVisible], ([isInit, visible]) => {
    if (isInit && visible) {
      emit('focus', { type: 'focus' })
    } else if (!visible) {
      emit('blur', { type: 'blur' })
    }
  })
  return {
    root,
    popup,
    isInitPopup,
    popupVisible,
    fieldValue,
    fieldLabel,
    updateValue,
    onFieldClick,
    onChange,
    onConfirm
  }
}
function usePickerPopup(props, { emit }, { customConfirm, onCancelClick }) {
  const view = ref18()
  let detail = getDefaultDetail()
  function beforeConfirm() {
    var _a
    const newDetail =
      ((_a = view.value) == null ? void 0 : _a.getDetail()) ||
      getDefaultDetail()
    if (!isSameDetail(newDetail, detail)) {
      detail = newDetail
      emit('update:modelValue', getDetail().value)
      emit('change', getDetail().value)
    }
    return getDetail()
  }
  function onHeaderLeftClick() {
    onCancelClick()
  }
  function onHeaderRightClick() {
    customConfirm(beforeConfirm())
  }
  function getDetail() {
    return cloneDetail(detail)
  }
  function updateValue(val) {
    view.value && (detail = view.value.updateValue(val))
    return getDetail()
  }
  watch13(
    () => props.modelValue,
    val => updateValue(val),
    {
      immediate: true
    }
  )
  watch13(
    () => props.visible,
    val => {
      var _a
      return val && ((_a = view.value) == null ? void 0 : _a.updatePos())
    }
  )
  onMounted9(
    () =>
      (!isEmpty(props.modelValue) || props.modelValue === 0) &&
      updateValue(props.modelValue)
  )
  return {
    view,
    updateValue,
    getDetail,
    onHeaderLeftClick,
    onHeaderRightClick
  }
}
function usePickerView(props, { emit }, { name, afterUpdate, handlers }) {
  const cols = ref18([])
  const options2 = ref18([])
  const isCascade = ref18(false)
  let selectedLabels = []
  let selectedValues = []
  const currentLabels = ref18([])
  const currentValues = ref18([])
  const isPicker = name === 'picker'
  const optionsHandler = handlers.optionsHandler || null
  function updateOptions() {
    const { options, isCascade: isCascade2 } = getFormatOptions(
      props.options,
      props.fieldNames,
      optionsHandler,
      !isPicker
    )
    options2.value = options
    isCascade.value = isCascade2
  }
  function updateOriginalValue(val, forceUpdate = false) {
    const { valid, value: values } = validateValues(
      val,
      options2.value,
      isCascade.value,
      optionsHandler
    )
    if ((valid && !isSameArray(values, currentValues.value)) || forceUpdate) {
      update(values)
      currentLabels.value = values.length > 0 || isPicker ? selectedLabels : []
      currentValues.value = values.length > 0 || isPicker ? selectedValues : []
    }
    return getDetail()
  }
  function updateValue(val, forceUpdate = false) {
    return updateOriginalValue(parser(val, handlers), forceUpdate)
  }
  function getDetail() {
    return formatter(
      cloneData(currentValues.value),
      cloneData(currentLabels.value),
      handlers
    )
  }
  function addCache(item) {
    selectedValues.push(item.value)
    selectedLabels.push(item.label)
  }
  function update(selecteds) {
    !isCascade.value ? updateCols(selecteds) : updateCascadeCols(selecteds)
    if (isPicker) {
      currentLabels.value = selectedLabels
      currentValues.value = selectedValues
    }
    afterUpdate(selectedValues, selectedLabels, cols.value)
  }
  function clearCache() {
    selectedLabels = []
    selectedValues = []
  }
  function updateCols(selecteds) {
    clearCache()
    cols.value = []
    if (options2.value.length === 0) {
      return []
    }
    const options = Array.isArray(options2.value[0])
      ? options2.value
      : [options2.value]
    options.forEach((subOptions, index) => {
      let hasSelected = false
      const rows = []
      for (let i = 0; i < subOptions.length; i++) {
        const optionItem = subOptions[i]
        const row = {
          value: optionItem.value,
          label: optionItem.label,
          hasChildren: false,
          indexes: [i],
          selected: false
        }
        if (optionItem.value == selecteds[index]) {
          hasSelected = true
          row.selected = true
          addCache(optionItem)
        }
        rows.push(row)
      }
      if (!hasSelected) {
        if (subOptions[0]) {
          rows[0].selected = true
          addCache(subOptions[0])
        }
      }
      cols.value.push(rows)
    })
  }
  function updateVirtualOptionsCols(selecteds) {
    clearCache()
    if (selecteds.length === 0) {
      selecteds = getCascadeDefaultSelecteds()
    }
    cols.value = []
    const getRows = optionsHandler
    let colIndex = 0
    let rows = getRows(colIndex)
    let lastGroupSelected = false
    for (let i = 0; i <= selecteds.length; i++) {
      const selected = selecteds[i]
      let nextParent = null
      lastGroupSelected = false
      if (rows) {
        for (let j = 0; j < rows.length; j++) {
          const row = rows[j]
          if (selected != null && row.value === selected) {
            row.selected = true
            lastGroupSelected = true
            if (row.hasChildren) {
              nextParent = row
              colIndex++
            }
            addCache({
              label: row.label,
              value: row.value
            })
          }
        }
        cols.value.push(rows)
      }
      if (!nextParent) {
        break
      } else {
        rows = getRows(colIndex, nextParent)
      }
    }
    if (isPicker && !lastGroupSelected) {
      const index = 0
      let lastColFirstRow = rows[index]
      while (lastColFirstRow) {
        lastColFirstRow.selected = true
        addCache({
          label: lastColFirstRow.label,
          value: lastColFirstRow.value
        })
        if (lastColFirstRow.hasChildren) {
          colIndex++
          rows = getRows(colIndex, lastColFirstRow)
          cols.value.push(rows)
          lastColFirstRow = rows[0]
        } else {
          lastColFirstRow = null
        }
      }
    }
  }
  function updateCascadeCols(selecteds) {
    if (typeof optionsHandler === 'function') {
      updateVirtualOptionsCols(selecteds)
      return
    }
    clearCache()
    cols.value = []
    let optionList = options2.value
    let rows = getColRows(optionList, [])
    if (selecteds.length === 0) {
      selecteds = getCascadeDefaultSelecteds()
    }
    let lastGroupSelected = false
    for (let i = 0; i <= selecteds.length; i++) {
      const selected = selecteds[i]
      let nextParent = null
      let nextParentIndexes = []
      lastGroupSelected = false
      if (rows) {
        for (let j = 0; j < rows.length; j++) {
          const optionItem = optionList[j]
          const row = rows[j]
          if (selected != null && row.value === selected) {
            row.selected = true
            lastGroupSelected = true
            if (row.hasChildren) {
              nextParent = optionItem
              nextParentIndexes = row.indexes
            }
            addCache(optionItem)
          }
        }
        cols.value.push(rows)
      }
      if (!nextParent) {
        break
      } else {
        optionList = nextParent.children
        rows = getColRows(optionList, [...nextParentIndexes])
      }
    }
    if (isPicker && !lastGroupSelected) {
      const index = 0
      let lastGroupFirstItem = optionList[index]
      while (lastGroupFirstItem) {
        const lastColFirstRow = rows[index]
        lastColFirstRow.selected = true
        addCache(lastGroupFirstItem)
        if (lastColFirstRow.hasChildren) {
          optionList = lastGroupFirstItem.children
          rows = getColRows(optionList, [...lastColFirstRow.indexes])
          cols.value.push(rows)
          lastGroupFirstItem = optionList[0]
        } else {
          lastGroupFirstItem = null
        }
      }
    }
  }
  function updateColSelected(colIndex, current) {
    cols.value[colIndex].forEach((row, index) => {
      if (index === current) {
        currentValues.value[colIndex] = row.value
        currentLabels.value[colIndex] = row.label
        row.selected = true
      } else {
        row.selected = false
      }
    })
  }
  function getCascadeDefaultSelecteds() {
    const selecteds = handlers.defaultValueGetter
      ? handlers.defaultValueGetter()
      : []
    if (selecteds.length > 0) {
      return selecteds
    }
    function getFirstSelected(values, optionList) {
      const optionItem = optionList[0]
      if (optionItem) {
        values.push(optionItem.value)
        if (optionItem.children.length > 0) {
          return getFirstSelected(values, optionItem.children)
        }
      }
      return values
    }
    return !isPicker ? [] : getFirstSelected([], options2.value)
  }
  function getValuesByRow(row) {
    if (row.values) {
      return row.values
    }
    const values = []
    const indexes = row.indexes
    let i = 0
    let options = options2.value
    let optionItem = options[indexes[i]]
    while (options.length > 0 && i < indexes.length && optionItem) {
      values.push(optionItem.value)
      options = optionItem.children
      i++
      optionItem = options[indexes[i]]
    }
    return values
  }
  function emitValue() {
    emit('update:modelValue', getDetail().value)
  }
  function onChange() {
    emitValue()
    emit('change', getDetail().value)
  }
  watch13(
    [() => props.options, () => props.fieldNames],
    () => {
      updateOptions()
      updateOriginalValue(currentValues.value, true)
    },
    {
      deep: true
    }
  )
  watch13(
    () => props.modelValue,
    val => updateValue(val),
    {
      deep: true
    }
  )
  updateOptions()
  updateValue(props.modelValue, true)
  if (isPicker) {
    emitValue()
  }
  return {
    cols,
    currentLabels,
    currentValues,
    isCascade,
    getDetail,
    update,
    updateColSelected,
    getValuesByRow,
    updateValue,
    updateOriginalValue,
    onChange
  }
}
var formatter = (valueArray, labelArray, handlers) => {
  var _a
  const defaultLabel = handlers.labelFormatter(labelArray)
  const ret = handlers.formatter(valueArray, labelArray)
  if (ret == null ? void 0 : ret.value) {
    return {
      value: ret.value,
      label: (_a = ret.label) != null ? _a : ''
    }
  }
  return {
    value: ret,
    label: defaultLabel
  }
}
var parser = (val, handlers) => {
  return handlers.parser(val)
}

// vue:../Cascader/CascaderPopup.vue
import {
  resolveComponent as _resolveComponent14,
  createVNode as _createVNode6,
  renderList as _renderList6,
  Fragment as _Fragment6,
  openBlock as _openBlock25,
  createElementBlock as _createElementBlock20,
  toDisplayString as _toDisplayString11,
  createElementVNode as _createElementVNode16,
  normalizeClass as _normalizeClass18,
  normalizeStyle as _normalizeStyle14,
  withCtx as _withCtx5,
  createBlock as _createBlock14
} from 'vue'
var _sfc_script26 = defineComponent26({
  name: 'fx-cascader-popup',
  components: { Drawer: _sfc_script8, Tab: _sfc_script25 },
  props: {
    ...popupExtendProps,
    ...commonProps
  },
  emits: {
    ...pickerPopupEmits
  },
  setup(props, ctx) {
    const selectedTabs = ref19([])
    const tabs = ref19([])
    const tabIndex = ref19(0)
    let tempTabIndex = -1
    const popup = usePopupExtend(ctx)
    function onItemClick(e, item) {
      if (item.disabled) {
        return
      }
      const selecteds = getValuesByRow(item)
      if (item.hasChildren) {
        update(selecteds)
      } else {
        if (!isSameArray(currentValues.value, selecteds)) {
          onSelect(selecteds)
          onChange()
        } else {
          onSelect(selecteds)
        }
      }
    }
    function onSelect(selecteds) {
      const confirmDetail = updateOriginalValue(selecteds)
      popup.customConfirm(confirmDetail)
    }
    const {
      currentValues,
      getDetail,
      cols,
      update,
      getValuesByRow,
      updateValue,
      updateOriginalValue,
      onChange
    } = usePickerView(props, ctx, {
      name: 'cascader',
      afterUpdate(valueArray, labelArray, cols2) {
        selectedTabs.value = []
        labelArray.forEach((v, k) => {
          selectedTabs.value.push({
            label: v,
            value: k
          })
        })
        if (labelArray.length < cols2.length) {
          selectedTabs.value.push({
            label: null,
            value: selectedTabs.value.length
          })
        }
        tempTabIndex = selectedTabs.value.length - 1
      },
      handlers: mergeHandlers(
        {
          formatter: props.formatter,
          parser: props.parser
        },
        inject5('fxPickerHandlers', {})
      )
    })
    watch14(
      [locale, selectedTabs],
      ([newLocale, newOptions]) => {
        tabs.value = newOptions.map(v => {
          return {
            label: v.label == null ? newLocale.cascaderDefaultTitle : v.label,
            value: v.value
          }
        })
        nextTick5(() => {
          if (tempTabIndex !== -1) {
            tabIndex.value = tempTabIndex
            tempTabIndex = -1
          }
        })
      },
      {
        deep: true,
        immediate: true
      }
    )
    return {
      tabIndex,
      tabs,
      ...popup,
      cols,
      getDetail,
      updateValue,
      onItemClick
    }
  }
})
var _hoisted_119 = { class: 'fx-cascader_groups' }
var _hoisted_213 = ['data-index']
var _hoisted_310 = ['data-index', 'onClick']
var _hoisted_46 = { class: 'fx-cascader_item-text' }
function render25(_ctx, _cache) {
  const _component_Tab = _resolveComponent14('Tab')
  const _component_Drawer = _resolveComponent14('Drawer')
  return (
    _openBlock25(),
    _createBlock14(
      _component_Drawer,
      {
        class: 'fx-cascader-popup',
        placement: 'bottom',
        visible: _ctx.visible,
        onVisibleStateChange: _ctx.onVisibleStateChange,
        onConfirm: _ctx.onConfirm,
        onCancel: _ctx.onCancel,
        'onUpdate:visible': _ctx.onUpdateVisible,
        ref: 'popup'
      },
      {
        header: _withCtx5(() => [
          _createVNode6(
            _component_Tab,
            {
              class: 'fx-cascader_tabs',
              options: _ctx.tabs,
              scrollThreshold: 0,
              activeValue: _ctx.tabIndex,
              'onUpdate:activeValue':
                _cache[0] || (_cache[0] = $event => (_ctx.tabIndex = $event))
            },
            null,
            8,
            ['options', 'activeValue']
          )
        ]),
        default: _withCtx5(() => [
          _createElementVNode16('div', _hoisted_119, [
            (_openBlock25(true),
            _createElementBlock20(
              _Fragment6,
              null,
              _renderList6(_ctx.cols, (list, listIndex) => {
                return (
                  _openBlock25(),
                  _createElementBlock20(
                    'div',
                    {
                      class: 'fx-cascader_group fx-vertical-hairline',
                      key: listIndex,
                      style: _normalizeStyle14({
                        zIndex: _ctx.tabIndex == listIndex ? 2 : 1
                      })
                    },
                    [
                      _createElementVNode16(
                        'ul',
                        {
                          class: 'fx-cascader_list',
                          'data-index': listIndex
                        },
                        [
                          (_openBlock25(true),
                          _createElementBlock20(
                            _Fragment6,
                            null,
                            _renderList6(list, (item, index) => {
                              return (
                                _openBlock25(),
                                _createElementBlock20(
                                  'li',
                                  {
                                    class: _normalizeClass18([
                                      'fx-cascader_item fx-horizontal-hairline',
                                      {
                                        selected: item.selected,
                                        disabled: item.disabled
                                      }
                                    ]),
                                    key: item.value,
                                    'data-index': index,
                                    onClick: $event =>
                                      _ctx.onItemClick($event, item)
                                  },
                                  [
                                    _createElementVNode16(
                                      'span',
                                      _hoisted_46,
                                      _toDisplayString11(item.label),
                                      1
                                    )
                                  ],
                                  10,
                                  _hoisted_310
                                )
                              )
                            }),
                            128
                          ))
                        ],
                        8,
                        _hoisted_213
                      )
                    ],
                    4
                  )
                )
              }),
              128
            ))
          ])
        ]),
        _: 1
      },
      8,
      [
        'visible',
        'onVisibleStateChange',
        'onConfirm',
        'onCancel',
        'onUpdate:visible'
      ]
    )
  )
}
_sfc_script26.render = render25
_sfc_script26.__file = 'src/Cascader/CascaderPopup.vue'

// src/CascaderPopup/index.ts
var showCascader = createShowPopup({
  apiName: 'showCascader',
  component: _sfc_script26,
  createHook: createConfirmHook
})
var CascaderPopup_default = _sfc_script26
var install25 = withInstall(_sfc_script26)

// vue:./SelectorField.vue
import { defineComponent as defineComponent27 } from 'vue'
import {
  toDisplayString as _toDisplayString12,
  normalizeClass as _normalizeClass19,
  createElementVNode as _createElementVNode17,
  resolveComponent as _resolveComponent15,
  createVNode as _createVNode7,
  openBlock as _openBlock26,
  createElementBlock as _createElementBlock21
} from 'vue'
var _sfc_script27 = defineComponent27({
  name: 'fx-selector-field',
  components: { Icon: _sfc_script2 },
  props: {
    disabled: Boolean,
    value: String,
    label: String,
    name: String,
    placeholder: String
  },
  emits: { 'field-click': emitEventValidator },
  setup(props, { emit }) {
    function onFieldClick(e) {
      emit('field-click', e)
    }
    return {
      onFieldClick
    }
  }
})
var _hoisted_120 = ['name', 'disabled', 'value']
function render26(_ctx, _cache) {
  const _component_Icon = _resolveComponent15('Icon')
  return (
    _openBlock26(),
    _createElementBlock21(
      'div',
      {
        class: _normalizeClass19([
          'fx-input',
          { 'has--value': _ctx.label, disabled: _ctx.disabled }
        ]),
        onClick:
          _cache[0] ||
          (_cache[0] = (...args) =>
            _ctx.onFieldClick && _ctx.onFieldClick(...args))
      },
      [
        _createElementVNode17(
          'div',
          {
            class: _normalizeClass19([
              'fx-input_input',
              { placeholder: !_ctx.label }
            ])
          },
          _toDisplayString12(_ctx.label || _ctx.placeholder),
          3
        ),
        _createVNode7(_component_Icon, {
          class: 'fx-input_arrow',
          icon: 'RightOutlined'
        }),
        _createElementVNode17(
          'input',
          {
            class: 'fx-input_cover fx-form-input',
            type: 'text',
            readonly: '',
            name: _ctx.name,
            disabled: _ctx.disabled,
            value: _ctx.value
          },
          null,
          8,
          _hoisted_120
        )
      ],
      2
    )
  )
}
_sfc_script27.render = render26
_sfc_script27.__file = 'src/SelectorField/SelectorField.vue'

// src/SelectorField/index.ts
var install26 = withNoopInstall(_sfc_script27)

// vue:./Cascader.vue
import {
  resolveComponent as _resolveComponent16,
  createVNode as _createVNode8,
  openBlock as _openBlock27,
  createBlock as _createBlock15,
  createCommentVNode as _createCommentVNode13,
  normalizeClass as _normalizeClass20,
  createElementBlock as _createElementBlock22
} from 'vue'
var _sfc_script28 = defineComponent28({
  name: 'fx-cascader',
  components: { CascaderPopup: _sfc_script26, SelectorField: _sfc_script27 },
  props: { ...commonProps, ...pickerProps },
  emits: { ...pickerEmits },
  setup(props, ctx) {
    return {
      ...usePicker(props, ctx, {
        name: 'cascader',
        handlers: mergeHandlers({
          formatter: props.formatter,
          parser: props.parser
        })
      })
    }
  }
})
function render27(_ctx, _cache) {
  const _component_SelectorField = _resolveComponent16('SelectorField')
  const _component_CascaderPopup = _resolveComponent16('CascaderPopup')
  return (
    _openBlock27(),
    _createElementBlock22(
      'div',
      {
        class: _normalizeClass20(['fx-cascader', { disabled: _ctx.disabled }]),
        ref: 'root'
      },
      [
        _createVNode8(
          _component_SelectorField,
          {
            label: _ctx.fieldLabel,
            value: _ctx.fieldValue,
            disabled: _ctx.disabled,
            name: _ctx.name,
            placeholder: _ctx.placeholder,
            onFieldClick: _ctx.onFieldClick
          },
          null,
          8,
          ['label', 'value', 'disabled', 'name', 'placeholder', 'onFieldClick']
        ),
        _ctx.isInitPopup
          ? (_openBlock27(),
            _createBlock15(
              _component_CascaderPopup,
              {
                key: 0,
                options: _ctx.options,
                fieldNames: _ctx.fieldNames,
                modelValue: _ctx.modelValue,
                formatter: _ctx.formatter,
                parser: _ctx.parser,
                visible: _ctx.popupVisible,
                'onUpdate:visible':
                  _cache[0] ||
                  (_cache[0] = $event => (_ctx.popupVisible = $event)),
                onConfirm: _ctx.onConfirm,
                ref: 'popup'
              },
              null,
              8,
              [
                'options',
                'fieldNames',
                'modelValue',
                'formatter',
                'parser',
                'visible',
                'onConfirm'
              ]
            ))
          : _createCommentVNode13('v-if', true)
      ],
      2
    )
  )
}
_sfc_script28.render = render27
_sfc_script28.__file = 'src/Cascader/Cascader.vue'

// src/Cascader/index.ts
var Cascader_default = _sfc_script28
var install27 = withInstall(_sfc_script28)

// vue:./Rate.vue
import {
  computed as computed18,
  defineComponent as defineComponent29,
  ref as ref20,
  watch as watch15
} from 'vue'
import {
  createElementVNode as _createElementVNode18,
  renderList as _renderList7,
  Fragment as _Fragment7,
  openBlock as _openBlock28,
  createElementBlock as _createElementBlock23,
  resolveComponent as _resolveComponent17,
  createVNode as _createVNode9,
  normalizeClass as _normalizeClass21,
  normalizeStyle as _normalizeStyle15
} from 'vue'
var isIntegerOrHalf = val => {
  if (isNumeric(val)) {
    if (isInteger(val) || (parseFloat(val) * 10) % 5 === 0) {
      return true
    }
  }
  return false
}
var _sfc_script29 = defineComponent29({
  name: 'fx-rate',
  components: { Icon: _sfc_script2 },
  props: {
    ...formItemProps,
    modelValue: {
      type: [Number, String],
      validator: isIntegerOrHalf,
      default: null
    },
    count: {
      type: [Number, String],
      default: 5
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [String, Object],
      validator: iconValidator,
      default: 'StarOutlined'
    },
    activeIcon: {
      type: [String, Object],
      validator: iconValidator,
      default: 'StarFilled'
    },
    color: {
      type: String,
      validator: colorValidator
    },
    activeColor: {
      type: String,
      validator: colorValidator
    },
    size: {
      type: [Number, String]
    }
  },
  emits: { ...formNumberValueEmits },
  setup(props, ctx) {
    const { emit } = ctx
    const root = ref20()
    const inputValue = ref20(0)
    function change(value, isHalf = false) {
      if (props.allowHalf && isHalf) {
        value -= 0.5
      }
      if (value !== inputValue.value) {
        inputValue.value = value
        emit('update:modelValue', value)
        emit('change', value)
      }
    }
    function onHalfClick(num) {
      if (props.readonly || props.disabled) {
        return
      }
      if (props.allowHalf) {
        num -= 0.5
      }
      change(num)
    }
    function onItemClick(num) {
      if (props.readonly || props.disabled) {
        return
      }
      change(num)
    }
    const styles = computed18(() => {
      const obj2 = {}
      props.color && (obj2['--fx-color'] = props.color)
      props.activeColor && (obj2['--fx-active-color'] = props.activeColor)
      props.size != null &&
        props.size > 0 &&
        (obj2['--fx-size'] = parseFloat(props.size) + 'px')
      return obj2
    })
    const max = computed18(() => {
      return isNumeric(props.count) && Math.round(props.count) > 0
        ? Math.round(props.count)
        : 5
    })
    let coords
    useTouch({
      el: root,
      onTouchStart(e) {
        if (props.disabled) {
          return
        }
        const { clientX } = e.touchObject
        let $target = e.target
        while ($target.tagName !== 'DIV') {
          $target = $target.parentElement
        }
        const value = parseInt($target.dataset.value)
        const rects = $target.getClientRects()[0]
        coords = {
          size: rects.height,
          offsetX: clientX - rects.left,
          startX: clientX,
          current: value,
          isHalf: false,
          isChange: false
        }
        coords.isHalf = coords.offsetX < coords.size / 2
        change(value, coords.isHalf)
        e.preventDefault()
      },
      onTouchMove(e) {
        if (!coords) {
          return
        }
        const { clientX } = e.touchObject
        const { startX, size, offsetX, current } = coords
        const x = clientX - startX
        let offsetCount = 0
        if (x > 0) {
          offsetCount =
            Math.floor(x / size) + (x % size > size - offsetX ? 1 : 0)
        } else if (x < 0) {
          offsetCount = -Math.floor(-x / size) + (-x % size > offsetX ? -1 : 0)
        }
        const isHalf = (offsetX + x) % size < size / 2
        coords.isChange = true
        change(rangeInteger(current + offsetCount, 1, max.value), isHalf)
        e.stopPropagation()
      },
      onTouchEnd(e) {
        if (coords) {
          coords = null
          e.stopPropagation()
        }
      }
    })
    function updateValue() {
      if (!isIntegerOrHalf(props.modelValue)) {
        return
      }
      const value = parseFloat(props.modelValue)
      if (value === inputValue.value) {
        return
      }
      if (value < 0 || value > max.value) {
        return
      }
      if (!props.allowHalf && !isInteger(value)) {
        return
      }
      inputValue.value = value
    }
    updateValue()
    watch15(() => props.modelValue, updateValue)
    return {
      root,
      inputValue,
      styles,
      max,
      onHalfClick,
      onItemClick
    }
  }
})
var _hoisted_121 = ['name', 'value', 'disabled']
var _hoisted_214 = ['data-value']
var _hoisted_311 = { class: 'fx-rate_icon' }
var _hoisted_47 = { class: 'fx-rate_active-icon' }
function render28(_ctx, _cache) {
  const _component_Icon = _resolveComponent17('Icon')
  return (
    _openBlock28(),
    _createElementBlock23(
      'div',
      {
        class: _normalizeClass21([
          'fx-rate',
          { disabled: !!_ctx.disabled, readonly: !!_ctx.readonly }
        ]),
        style: _normalizeStyle15(_ctx.styles),
        ref: 'root'
      },
      [
        _createElementVNode18(
          'input',
          {
            name: _ctx.name,
            type: 'hidden',
            value: _ctx.inputValue,
            disabled: _ctx.disabled,
            ref: 'input'
          },
          null,
          8,
          _hoisted_121
        ),
        (_openBlock28(true),
        _createElementBlock23(
          _Fragment7,
          null,
          _renderList7(_ctx.max, num => {
            return (
              _openBlock28(),
              _createElementBlock23(
                'div',
                {
                  class: _normalizeClass21([
                    'fx-rate_item',
                    {
                      active: num - 0.5 <= _ctx.inputValue,
                      half: _ctx.inputValue - num === -0.5
                    }
                  ]),
                  key: num,
                  'data-value': num
                },
                [
                  _createElementVNode18('i', _hoisted_311, [
                    _createVNode9(
                      _component_Icon,
                      { icon: _ctx.icon },
                      null,
                      8,
                      ['icon']
                    )
                  ]),
                  _createElementVNode18('i', _hoisted_47, [
                    _createVNode9(
                      _component_Icon,
                      { icon: _ctx.activeIcon },
                      null,
                      8,
                      ['icon']
                    )
                  ])
                ],
                10,
                _hoisted_214
              )
            )
          }),
          128
        ))
      ],
      6
    )
  )
}
_sfc_script29.render = render28
_sfc_script29.__file = 'src/Rate/Rate.vue'

// src/Rate/index.ts
var install28 = withInstall(_sfc_script29)
var Rate_default = _sfc_script29

// vue:./Stepper.vue
import {
  onMounted as onMounted10,
  ref as ref21,
  defineComponent as defineComponent30,
  watch as watch16
} from 'vue'
import {
  resolveComponent as _resolveComponent18,
  createVNode as _createVNode10,
  createElementVNode as _createElementVNode19,
  normalizeClass as _normalizeClass22,
  openBlock as _openBlock29,
  createElementBlock as _createElementBlock24
} from 'vue'
var _sfc_script30 = defineComponent30({
  name: 'fx-stepper',
  components: { Button: _sfc_script3 },
  props: {
    ...formItemProps,
    modelValue: {
      type: [Number, String],
      default: null
    },
    disabledMinus: {
      type: Boolean,
      default: false
    },
    disabledPlus: {
      type: Boolean,
      default: false
    },
    disabledInput: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    allowDecimal: {
      type: Boolean,
      default: true
    },
    step: {
      type: Number,
      default: 1
    },
    decimalLength: {
      type: Number,
      default: null
    }
  },
  emits: {
    ...formStringValueEmits,
    ...formFocusEmits,
    'plus-click': emitTypeValidator,
    'minus-click': emitTypeValidator
  },
  setup(props, { emit }) {
    const isValueNull = props.modelValue == null
    const inputValue = ref21('1')
    const { input, setInputValue, getInputValue } = useInput()
    function onMinusOrPlusClick(isPlus = true) {
      let type = 'plus-click'
      if (isPlus) {
        updateValue(parseFloat(inputValue.value) + props.step)
      } else {
        updateValue(parseFloat(inputValue.value) - props.step)
        type = 'minus-click'
      }
      emit(type, { type })
    }
    function updateValue(value, isEventChange = true) {
      const newValue = getRangeNumber(value)
      if (newValue !== inputValue.value) {
        inputValue.value = newValue
        if (isEventChange) {
          emit('change', newValue)
        }
      }
      setInputValue(newValue)
      if (newValue != props.modelValue) {
        emit('update:modelValue', newValue)
      }
      return newValue
    }
    function getRangeNumber(value) {
      value = formateNumber(value)
      if (value === '') {
        value = props.min
      }
      if (props.allowDecimal) {
        value = rangeNumber(parseFloat(value), props.min, props.max)
      } else {
        value = rangeInteger(Math.floor(value), props.min, props.max)
      }
      return value.toString()
    }
    function formateNumber(value) {
      return formatInputNumber(value, props.decimalLength)
    }
    function proxyEvent(e) {
      emit(e.type, e)
    }
    function onChange() {
      updateValue(getInputValue())
    }
    function onInput() {
      const value = formateNumber(getInputValue())
      setInputValue(value)
      emit('input', value)
    }
    watch16(
      () => props.modelValue,
      val => {
        if (
          val != null &&
          parseFloat(val.toString()) !== parseFloat(inputValue.value)
        ) {
          updateValue(val, false)
        }
      }
    )
    onMounted10(() => {
      setInputValue(inputValue.value)
    })
    updateValue(props.modelValue, false)
    if (isValueNull) {
      emit('change', inputValue.value)
    }
    return {
      input,
      inputValue,
      onFocus: proxyEvent,
      onBlur: proxyEvent,
      onChange,
      onInput,
      onMinusOrPlusClick
    }
  }
})
var _hoisted_122 = ['type', 'inputmode', 'name', 'disabled', 'readonly']
function render29(_ctx, _cache) {
  const _component_Button = _resolveComponent18('Button')
  return (
    _openBlock29(),
    _createElementBlock24(
      'div',
      {
        class: _normalizeClass22(['fx-stepper', { disabled: _ctx.disabled }])
      },
      [
        _createVNode10(
          _component_Button,
          {
            icon: 'MinusOutlined',
            shape: 'square',
            size: 'small',
            disabled:
              _ctx.disabled ||
              _ctx.disabledMinus ||
              parseFloat(_ctx.inputValue) <= _ctx.min,
            onClick:
              _cache[0] ||
              (_cache[0] = $event => _ctx.onMinusOrPlusClick(false))
          },
          null,
          8,
          ['disabled']
        ),
        _createElementVNode19(
          'input',
          {
            class: 'fx-stepper_input',
            type: _ctx.allowDecimal ? 'text' : 'tel',
            inputmode: _ctx.allowDecimal ? 'decimal' : 'numeric',
            name: _ctx.name,
            disabled: _ctx.disabled,
            readonly: _ctx.disabledInput,
            onInput:
              _cache[1] ||
              (_cache[1] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
            onFocus:
              _cache[2] ||
              (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
            onBlur:
              _cache[3] ||
              (_cache[3] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
            onChange:
              _cache[4] ||
              (_cache[4] = (...args) =>
                _ctx.onChange && _ctx.onChange(...args)),
            ref: 'input'
          },
          null,
          40,
          _hoisted_122
        ),
        _createVNode10(
          _component_Button,
          {
            icon: 'PlusOutlined',
            shape: 'square',
            size: 'small',
            disabled:
              _ctx.disabled ||
              _ctx.disabledPlus ||
              parseFloat(_ctx.inputValue) >= _ctx.max,
            onClick:
              _cache[5] || (_cache[5] = $event => _ctx.onMinusOrPlusClick(true))
          },
          null,
          8,
          ['disabled']
        )
      ],
      2
    )
  )
}
_sfc_script30.render = render29
_sfc_script30.__file = 'src/Stepper/Stepper.vue'

// src/Stepper/index.ts
var install29 = withInstall(_sfc_script30)
var Stepper_default = _sfc_script30

// vue:../Picker/PickerView.vue
import {
  defineComponent as defineComponent32,
  nextTick as nextTick6,
  ref as ref22,
  inject as inject6
} from 'vue'

// vue:./Empty.vue
import {
  computed as computed19,
  defineComponent as defineComponent31
} from 'vue'

// src/Empty/images.ts
var images = {
  default:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAABLFBMVEUAAAC5u70AAABWWWBVW2Dq6uy3ur1QV2AAAABWWmDv7+9WWmBXWmBWWmAAAAAAAABVWmAAAABVWWHr6+zr6+0AAAAAAADr6+1XW2BVWWBXWmBVWmDr6+sAAAAAAAAAAABXWmEAAAAAAADs7O1XWmAAAABWWWDs7O1VWmDt7e0AAABVWmDn5+4AAAC6u75WWWDr6+25ur63ub3s7OxVVWDt7e0AAAAAAAC4ury5vLxWXGBXWmHq6u8AAACvr7/s7O4AAAC5ur7X2Nq5ub2Nj5Sho6eFio+3t7/r6+y5ur319fVWWmDm5ud+gYXx8fHNztBfY2mNkJTY2dqqq6/f3+GQkpeusLKtr7JcYGbMzM+goqVvcnevsbTg4ePAwcTb292goqaHio13en9pbXFpGLi+AAAASHRSTlMAf3NAv2BgEKaPEN9f71UJ72wfv49kMu/Pv29vQBNAnH9HOd+fK6+fn29QMCAc79/Pv3BQMH98XURfUE8wJBCvkd+fj49/MCBUahNhAAAGiElEQVR42uzYzUrDQBSG4c+zkICQYRbNLiMJZBNopV1IXSgVFxK8//sxVilSG20yxLbhfS7hhXPmRwAAAAAAAAAAAAAAAAAAAMAZqEIuDFeZpcJw9QUHvHnrdKPWzLZmGtPMrNSFuusOePdfAXMzmwsxK9CE/srw6C59BZ5SZa00zJ03y4TeSvvCChzGFTPbSTMaDuCqbxF9Wjmht9zbThB6m5tZldXejMN4kMzMq5VnacqXwgCpWS0MZ9wCo1dgrhFl90lyH9QqvZ/gKVWO/FORJluFFMwu+NenUzArNKJNUjhXJLeSN+fMa2pcUTuN6PYz4EbylucTDDi2ItmqpZKr+iDh4xDJ1AreT28FAgAAAAAAAABwKutl85fFci10WDVHWQkHvS6aoyyehEPWzZEehEOumyMthY6AzHBcQGY4MiAzHBmQGY4MyAxHBmSGFR+Q10hEwOl6XukHAvbyon0E7GetPQRsndXannjAK+0hIAF/Q8BzQ0ACvrNzN61NRFEYxwcmZZgmgRIF09RFwBKVuBCqGxUEcXHJiZraRPElKW2//3doNsO5cKHkkHPp5DznWU22f8JvNWdE84Btmwc8oICb67mRLTePEvB6ZmbLRwk4n5nZ3AN6QMk8YNvmAT2gaB6wbfOAHlA0D9i2eUAPKFoLA1bTcsd9/dts8+PQFrIFnPYJYqt1poBDGnZ23PBfs9tvhzaiu5AnIFGFYOD6lm5y/QNLhICz9YLWWQLWNOYfx0cP7cufZvPvh7cV/c8S8AOdFs0ungW7u6JVloBVhOCTYHg/aZElYNFhBF8Ey1vQMkvAmurm8WWwvEv6nSVgyQgeBcu7okvdgCmCb4LlJQgmAR1BAYKKAcfQCCoELGkIjKBCwKqPjOA+ARnBj7gIxgEdQQGCmgFL6qIguMoSsGAEj4PlMYLKATvUg0VQJeCIEXwaLG+L4EMBHUERgmlAR1CEYBrQERQgqBtwRK9QEdQJOMVFcM+AjOAAFEGlgBNG8G2wvAjBNKAjuAuCv7IEHNBJ83gRLC9CMA3oCAoQ1A54TmeYCMYBHUERgmlAR1CAoHbAokvvIBHcPyAjCPGOESOoHLBHE0gE44BaCD4PlscIJgEdQRGCaUBHUICgfsAenSIiqBewwkRQISAjWAIiqBiwhkQwDugIChDUDMgIVngIKgYshoyg5YsbRlA7YE1jPARVAqZXX++D5cUIxgEdQQGCOQIWHUAEVQPWVMMhqBqwBERQNWBFBIdgHNARFCGYBnQEJQjqBkyvvl4Hy2MEdQNWfTgEtQKmV18gCCoHHMMhGAd0BEUIpgEdQRGCygH54AELQe2AIzQEtQOW1MVCUDtgwQh+Cpa3RTAJ6AjKEFQOmL7r+zlY3hbBLAGnYAgqBuSDByQE9QNOsBCMAzqCUgSzBJzSCRKCcUBHUIpgnoDndAaEoGZARhDjS1BbBLMEHEAheM/OHatEEARBGJ5lhWVwBMM9L9loEwVzc00aETHQ4IQT3/8dbE7m3NSmK6qqR/iDDxa2JzlgR5DiObwTgtuAQjCAICJgs5UHwW1AIfhvBA/pAfvVFw2C24BCMIAgJGCzHQ2CkICTXXO8BOUIQgI6giMLgpiA1fYUz+E5gtuAQjCA4AskoCM4kSB4hAQsMw2CX5iA1RYSBD8wAR94EDz8BRSCEQRfIQHLTHL//2bPmIDVKhuCuQFHlvt/RxAScDJjQ3AoqbugQ3AoQjCIYA8oBIMIQgJOV2wIJgbsV19cCGYHXKxSPIzsCGICjjazIPjeA6YjSPEwsiMICegINioE0wPekCGYHnC0SyoEh5I9MgRPAYVgEMEeUAjGEMQEvOVCMDdg/9eX4v7fEcQEXKkQBAT0gweK+39HsAcUglEEe0AhGEQQE9D/9eVB8DegEAwiiAnoBw88CJ4DCsEQgpiAjiDFm6COICZgs5UGQUhAR5DjYWRHMD1gv/piQbAHFIJBBM8BhWAMQUzAiQfBx9InBEMILgWy1SrF5/ARFXA02xMg+PltrWC2GMfu7wpobTaC7Z6KpmmapmmapmnaT3t1jMIgEEVR9DOVEJhgoZ0MCDZpLK1cgfvfTyYGUqQQTGOKc5Zwi/cAAAAAAAAA4B/dtgO3qLr00QXf5u3ALCAAwPXWnFKeosqlLMFJY9r1EUtT5eCcLvX3e5/aiNIMQ1OCc9p3wE7AH/VpN0bkpjKCp02vE1mjWkp5BAAAAAAAAADAlZ5X9riGUcwcQgAAAABJRU5ErkJggg==',
  error:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAABGlBMVEUAAABWWWBWWGADCRMDCRK5ub3s7O23t7pVWWC6u7xWWmBQV2C4uLzv7+8ABxFVWWC7vL8ACBxWWmCysr+5ur25ur3r6+sCCBO2trhVWmBVWmBUWWACCBK3uL3s7O25ub1WWmBTWGBVW2ACCBS5ur0CCRLp6env7+/V1tjr6+3s7O0CCBO4uLyvr69WW2AECBMCBxIDCRG5ub9VWWDr6+zs7O62t7rv7+9VWGAECBTp6exWWWAFCRJWWmDr6+vq6uqen6S6u7/Nz8/q6uzr6+y5ur1WWmBobHHZ2dvj4+XQ0dOho6bGx8lfY2m/wMOXmZ2rrbBydXp7foPl5ufe3uC8vsCFh4zCw8aOkJWztbjJyszMzc+kpqqdn6MmV5AcAAAARHRSTlMA3x9zpt/fIH+/7xCAIBJw7wivEM+fgGUwML+QnG/vj89QPz2vfHEQ/s+RSEAQj2xTK1/Pv69QMGBdUKAcn0Aw19+fYBionxsAAAsmSURBVHja7NhdU9pAFMbxkzQKJTKKL1UjUkTRKq2jLR1749h2loMEAqKj1dp+/6/RjZSopbo7IRl39PldwGWWw27+AQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHhpLI5YJC2+esAiAQYI2varRae6ThDTnnNjjyCWdTm7QqHmOPsEcVSd2mAfVgnicJwCSQWnSBBHcThAhyCO6iAfNRzhmPYdp1YoyBTjQQaPMU9kveoUq3iIAQAAAAAAAAB4EWwvx8zWwzzPsylldtkakeN75CKMZOdYrexSusqsoUImOuRZO5zjwyoViw8pVStsLdv/cukud5c9MhGzrbNLs5SiLOfUi3Bz7JKBbpZ1UC+JodLkqA7z1zylZY15mojy25O3SmJEwK16nozj8S7lS0LhhPnbFqUi2t/b4lFt7svXIzJNuPy6UOpx8zulwrZ4haQd5Vfoy7c6GecL85VQu+DmJqWhzJ9IeiMe5TOfiBCZJ8uBL5RaTT5NY4IywGFANsWjjpvcFqYOkHa5eSwk5WfoHVEk2QDnS6pv70K+mXmEpTL3W0LJTyHFMsBr4fwmlfePvws0MMOSa/GlULtinolSnGSAtxTza0dHZCcTmiPTyA/SFmptDjrzmeQD/Fl12TDAIb8xML9EhqnopfiSm9fzc8ltfK0Ad4YBFu8aEeMmOK2X4j6f+gtPFeCz80bkNZlGP8WdqUQDfKC4YhTgs27jDjKOp5figH91Pyay5/UC3A8DPDq/GTKOa/GFXoq750s0tmXWCnAvOhg/G3ctkHn0U3w9kUkgwFmtAAfHtwG+JRdgoIrMnV6Kf0zMjb3dPY0An98PsMERjm5LHa0U9/0NGsusXoCD4ZloNe5ZJUNlOdBN8dvxrmPpBbg3GmBpiow1y029FP/uro6105e1Atz/7/w2yFyuxacipL43dd/HD/DgL/yYAZ74QAaTdexp/iqeyYwX4PpzCvAf9s53p4kgiuITdg1RyKZF4kKoopAmGkgIxhAqRD/YbLe0QGmstOD7P4eliJdacc7c/ZOZO3seYbvd3+49554hbb6AUHxJKDa/ydeAEf4kSUa/r58TACYdE4o1D6ib50wAr9ALjB7A3x0BMIxiGhKPb7fZAP4sD8CkEwjF6RTF16/Nr1+yiYzwCcDWf8EtauUthOI+A8U7GIDHfwB87RCAjVE8IBQbAviDTADPobiHobhvguIlDMCDGcYWr1/Nmes3Q/GorddwiuJ1A/cPAvBZ8vDrpfMA/qgcUhEo3iIAgyN89wA8h+IURPFqAR76IoC3lWMit12D4p8XR2iIDfbQFwG8rlzTErntuid+bQP30LUA7jgOYNKSAYqXcwyxuQ5g0js4+Haz/jLPENsigI+UkwLd9g657ToP3Q8Ac9z261XEQ/8/gFMxADZ22xNy2zOE2IbkoTsOYE7w7aK2oQ2x+QNgptueOcQm7/qR284KvlGIje+h7yvHNfUgMwXftow9dBkAzhx8IwAL9dBNUNzBg2/8EJtrHjrbbceDbxRiE+mhM0b8CIrFh9g42uQF3/AQ28ilEFvRwTf5IbZSgm/koX/xGcCkE6PgGx5i67oYYmO67XjwjRVi64sEMDP45pGHXlDwbQX00J8IsdUEAZgXfFsz9dDtBXDUbIRBVLLbPpbjoUeNcKpGVK7bniSrkIc+tH+EH4RxPYrDZl4ovmqDbvs+4qGn9nvoYRjRYSWlBd967W5tWYaHPjuuJArDkoJvpPS9DA+9GcZRPQ4DVZLbThLiobMgwq+ZIQkA8L2iIGw0I6XKGfGTPAmxFea2+xJiK8ptFwFgSHy3na+eIwAGVFDNDFwEYzeAGeIE3/gA7toO4L9lBYrvQmw+jPAzue24h25zFxGgQmpmYA/dSwDrUVyN8NnBN8xzmkj30LO57ZWHnm3EX3noGWtm5BXBcMQPvvkdYuOO+CsA5+W2Sy2CYYjltsstggHF/6ZrY+0AFYCfeBl8ht6BzhbBQOJ3kX99A04BJ84WwUDid5F/a7exmpmzCsD/XuP6hL4H+jrCR6pQwZoZT0f4QBUq6AbfVgB+DOCdxylosGbGKw/dqIscDb755KGbVaGCNTOjCsCPqlBfmXsi/QrAmipUbc1MBWBNFaq2Zsb7B6CmClVfM+P5K4ymChWpmXGqTZEhfhUquNsucxcplypUcLfd4/cYoAoVqpmx73y9YoVXoYI1M54OU5EqVLRmJu9dwPpuKwhah8pmYVWoaM1MvmscUSuYKa4rawVWocI1M7nuAu4F8WldncbBnrJVYBVqD6+ZyXMX8CC4vxGDA2WrsCrUAaNmJusuoBsXEG5iY9TMZN8FnP2FVd3ivzDexNZj1Mxkh0g9DmZqRcpKHVMTm/YwlbFBzUyOu4CHd68xu5ZC+AHA0GEq3Su08W1w4XxHZc7neXdSSqNCNTN+TKepChU8TGV0nvTQmhkfvorJQ0eLYC6TZATWzHiwZEMeOr6H/gNF8fhWvEdMHrpJEcwQP9RFeMySPHSjPfRJBzvURTyKqQrVcA99cI4d6iIcxeShGxfBDGAU9wWjmDx08yKYKYonYPBNrFf8i72zbWkjiKJwM5DG7FoQo6ArpWkRqqX0Q2lFEL9lJhuJb2sSxP//QySReFUc9ujNjDN39vkDLhhySM7JfegUKh7AxAyTugiO4vkpVI7N7A8cxTLbdrBDn9llKgXuVxO4mFkGMOMSW4771eS17dShM2Qqb/CriWvbsQ59XCNT+YFG8fBOWNuO6kRrZCqwX01a204dOvcQzDyK0xu+UYfOkanQmZnUhm8qowDm/Q4dPzNzJWj4Rh06+3foyyhOa/jW59nMdl47M5PS8G1vhTIVOjOTzvDNohOFD8EwpS7RR7GlQ2cegtkE2/b4o1hlTJuZ/cxMEht06tAZAWw7M5NAFFOHzrCZsc7M3Mbdtru0mR3jw7doL2pRh84N4DSjmDp0ZgDz/WpRtu3UoTuymeV90cM3DzpR1RI8fMM79On7b7nvZnKHb1iHXp7zbGbHYodvuE6UJ1NZEzp8gzv0a65M5UTk8I10os5tZnlf4PCN3aG/7Y+JG74pWCc6XoVMRWXShm8FTyd65MivVsUSxXvedaJrooZv1KH7s5lJGr5Rh+7PZiZp+KYyjwFM4MO3wKOYOnSPOlFJwzfq0P3pRCUN36hD96cTlTR8+4gAljR8+4516LNV2swkDd+oQ/cYwJKGb4WlQ4dX5ITrKK4mIUaxMYqzIvfnVxsZMzgIMIozk1sCGFmRe/SrlcYMBgFGcWE2d3dKG+M5U2BFzvarjV9yVj7jrFq0oeG17aplagFW5Owyq55Fik10cFGsTltDK9WCmXObWV5UL7kePufy4SF0iFEM3FJ0azPDlRo3QR6RB87hu9WJIidt6WN4eF/xA+coPehE/yMvwIswVZJffh1+XjB6yuQppXOb2c9/h5PXGS05mAauclnXAA5fA11tJQqb318N4NJm1mtrkDDbduzxXeZgZ0NbCV9p39MAjnWivzXGxqcA6YXwBvRV1xCykamrAVxH4DdtIQInZ6cdwqNb/o1ROCU721vtOVtdK/vOdaK97Uf2Lc+wnrrTtKGhoaGhoeG+vTtGQRgIogA6Mv2CVQ6wZYqNpZDa+x9JDYFYibHJKu8d4cMwv/sAAMAH5jpkXsdOR6/6V3NVg6/ya7VElDG7Xa7r2iVbiUVp2feEbJ+mLbWaU7BX5jlW537nOzvWXgPMYK9pe74XJ+yJHOBZX0pEqU0RVKSPUcZr5lDnAIC/d7q9dYqHIRdDIEAAAAAAAAAAAAAAAPhVd5Wiq/xLx53iAAAAAElFTkSuQmCC',
  network:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAABklBMVEUAAABVWWBWWmBWWmC4uLm5ub1VWGBQUWC5ur2xsbNVWmDv7+/s7O1VWWDv7+9VWmC4ubzr6+zs7O0ECRS6ur25ub3r6+1VWWBWWmC5ur1XWmC5ur26urru7u5VWWC7vL/s7O3r6+tXW2ADCRLq6uy5ur3s7O3r6+xVWWC5ubxXWmBWWWC5ur3r6+wCCBMDCBSqrLC5ubwECBPp6esCCBICChEDCBMADx9UWWACCBICCBHY2doCCRIACxEDCRPU1djs7O2BhInr6+1wc3iNj5UCChHr6+ylpqtfY2mWmJxsb3WQk5ewsbUDCRLU1teUlJnn5+nh4uPW19lsb3WjpKigoqd6f4TIycugoaVwcnjg4eJ3e4CkpqjX19mBg4jr6+y5ur1WWmBobHHY2duho6bi4uRfY2jFx8mztbiOkJV7foO8vcC/wMPS0tTk5eZjZmzn6OmXmZ1xdXrQ0NKqrK/Oz9HLzM6Iio+trrKEh4xydXvCw8bV1dfe3uBdYGaUlpqnqKza2tzCw8V1eH2cnqJvcned9DF3AAAAX3RSTlMAf+/fIN8gEH8QnxDfYCAwX4Dvc+/Pz89vnz+/MDC/P19Av6agj4+/UG+vj69wPGHfT2xRmjInCI9RGNtIDla5r9+fnIov7+/v38Own3xvQCDv7+/avzCnZ2Dfz4+Ab73wamwAABVaSURBVHja7NZda9pwFMfxk7j5Z6lO2rCaZVTaWqoojWBbxaJrYS0Mtm6DXWxXS6PGp7ILaxl0r35J1KbYbUQTU5P8viBeeZEP55xICCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghz2IyIReleC3NCLnwMwW3XhJapCSvcfGY9lVXtwkt4KdpHFG8qd1AcHG/tVwLgm78NlUVgu78IOjOD4Lu/MIveHyZzV4qZKSUy4rXfuEXrGWt6oafaKR46xcBwaNsvVqtZ4+IymKjIZY99YuCoPeAtt8jwYEaPsF61qpmr7DHfnZdTVN9FzxRaMkp5kvk2H6JeO9nT2Df/N4hPyuJDQpS//X7ratG6+RjVeMoBSkHfuoW+VTV+FTEGgUoJ36/Xr0gX1LEUr1SEy8oODnyu7rySbBSEs1qlcAcQYd+vglS46JmGZZOKAg59PNT0DiBby9qJVGhAOTQz1/BunUCA7HDzv2s3tA/i+a/QId+duRHVbFEwWhuv9fkS8oxBSLOsZ99AxH8vPV7mYDfEvyaLfjBbyb//X7CD37j4LdiwQ9+cwS/FQt+8Jujp/d7/owQ/KbFH7aYnxQtPxaXkxInCJl0LKY9jo+lMwWB45JyijnzS/7dT78JmR+L56ViIc3PgMWM3jcnzWqmMwKXl1nU/VgqWSzE7BHbFYR35x8+fjs9PcslEhszD94ada977WF/cNO5/0mmKMkskn5MloQpXaxQlH58/7S+l0uoztJH3dv2nQE5ZczHo+SXurdLC1L+8+HB3uaGulB693Y46EwUOZlFwE+WdnnredPFZOrL9n7OoHPb6Lo9UTRGkYXYLz7BiwlSau3QtPOw1vVwMEYshNKP5YtjvGKSrW3vJ9RlpHfbFuJ52PzYePR4wcDbWRKejTjsqYmzEPkZi2ttFifT1kFO9amw+DFLj88kGc05evC71xNkc3HnfGPAj2SBN2dPZvTkegH0Yxxv3j1pJfSC5ydbq8sxWlvPqStQsPwYlzaHTybaWQm9gPnFOX46fCuwuoHzk3enw3fmCZ/earX06PiZfLxg8B3mFvXq9m7b/f5g0Gx2tId1ms3B4K7fbve6I92tX281/f5wd2Y/bVxRGL/xbmICqdgNMaCaYgJSUV4q8UDbVG2TVk2T7pvsO4tnsbGxsQGHJSFJ/+/emfH4DPbsvmOu+j1UUapOyK/nO+fO+Hxjgi+sd0W+1mn1gJmVG/wuiFMVoSaJIfmdN5tvPmWOX1h8JzIhB7xUpSXIsiQR6w57WdKeRwvW59FVtdWRxOD8MMbxeynEkkLhO+koJgyu1+rUnLzZIBr6LyUZnke3e4IkBuLXfLaJMfd0A7Gi4PjEmvkgmVMEmb/NS7zhj7qnkvSuXq9VrKrX30nSaffo8uaq0X8erah6KZ6U7dWz5Uf8u6tizP3CBkLf+ABeu8/ulgGPRf7oVKpXfKomSd1LDaTizE8ZnR8Gv4ck3M9pCO/+pXfpqUD4JEHtd6+aCOiuLrtSrRJOCr6+aPjmx5n8iGQN4fd3hhBuef3iE2uKbltV61nA7rReGUNn+PptpXJxHITfXpnIRKj8docIt+MYP0oh9CTnTa+jNz2uBfAafPcdkBiHX70RhN96GSRUMRb+uSOEM5twy+tJTy+9Dj+oPB4K7w74gXgFY+7TdTQ5gXsxji0hdP9Lz76nVnV64sC2XQ0eE/yMVSPcO1hDE9YKce9naYS8mp/UGqJ3GW5czCWTybmh31PH5getUPhyoj5O7fTdu+DDuqpgoeebV365mJmdLRQSiQSyKptIFAr7s5nMMhV+4OPkHpqYlmKGe7e8i6/akgLRS+4WS/urWeStKRybQas/HI/JD3ysHEyoCFObxuxdd3WvpBdfTTSHhuSJbjkzC8Xmjx9a+8iWX9UvP5CAMSdv3UdRCspvG6EHbrNXFDhr8V11ax7sSgUoOgr8Tkb44fcvgJ9LEUY4j6H8dtII7X3kho94lxPM4jt659bs8sV9YEeV32VloA//Yox39LL0KEIp4mGyDeXnik/1VXz5DBQedX78rRp/MYXhp3IrQiEXYRGmP9O6H5SfJ74bydm2RYAXPb8E8c5U3A0hFCEfWSeciRvD93MvfKZ3a46lV4JxMRl+xgdegNClCKudHNiY8vRYJOW3kXPFp/CAz4kelN7k+AFCxbUXii2MFfEhoq70jnHrseVefYCPAj2K/AIglKvExp88oG5fj+khc2CPxqnT0AB6E+YH+lU7oAq8xyzp5J5EYd8nH7kcm6H32R9YigWE7p5fdr5yrmqH5rKLiI1bZZo2/szdvqKCcVV2NW8eTnsT5Tc3yo/o/F+C8MSFYEez8cIDeofn2BLY1+5Pqwoi4AtffPT5rdrxI3rTdG+FPEcI59YQFW3iuPZj5xzc24bZcVO3O/GRzkeLXzwcP9B+Hh4mYq7jQrCHsUzJxhjPwOHZZupz/eZ3Jdl5F4qPAr+UAz/Bix8osWz8S6MVQhHaXbNc3qJTgY/QhkP5cRib7u3a42OMn44wCT4WnI8zmCP/XLhPoQfG8eOHtuXXA/de1mzxMchPQ5gxEMo95yLkqwbcPRqHwBj+rjyqGhkenT5KG/cuJxCj/CwIz6EIR6ZIS//FOqW3P87bdT+Vd3RvPoEY5mdBeGZbhCKHX+u/yP1I6f0DscOR7meW31WdonnTM9tGbv1R3KJFmvygF0IROn0qcFwv0aqAb18NndVfQ/nRwKfn1uMxbC/6/AChbLZykGBWJWlNRURD6UX800toECrGLafym5sNEb4eJP5j8Z2px0+/++X7/OHhwcEr3pD0MpdboMgPEOb745irlUEdjCX4VADuBsccxX99DdPDPPt1R/AFOzanSPgacut/7JPc+oLzogg9fqDZpGbj91YbdzEWgB8huEqFYAw/G9i3Z5z9GhdhZgfA2+mHr0mAeHV9CyKW/vnh0PxAmf4safODASwY7qqYmkUUtI3xed++HYezX7Lg27bTU4PwdWIDwtdB+clj8oNW+JbYWOoP4J5RHnW4JqVRfH1R7nLmc4zjkbNfJus/hWjkh1MkhgjbDWH53YTmBz4GG/cwJwI/Q0lERY9x88NgYIn1cO5N3zPyw0szaAOSYOPwEwdGUATgF0zZomHjljgYwBfW0kB0pP3VW/b2nSsFScBOQwqRIj8V4+bzGRROCVKEH65xlbTVkfFYRJSUfrz54RgOf0HLb2UzZuSH0cbHQI8iv2s9wjAdMsKQMQ7V8kisaR5RVEaC6eu//CABC7UXAb9vVmeea6mTqZXQRSjIN9BWI0mFLUs3w/adT3gX384gAQuHFfr8tLuVWk8vw3TYTlg5gstS5wdPxQN1iO1NSwI2Yn5EvMBpB6RUyHFcqd/a5ikgykok/Z39wLtxKL7o+RmSVc3Jv4b42+0On80QdSXmKqDdrI/WFyfZ/wewDRwJv7cDfrB2ip/PhujyUfED7cP1S574zABxuRwtv1ngZ0X4RXCEq0lLfaBIlKn4u8sm+KD1TZofIAxv42QWRaOin8PfdBzwTYgfLYSZyGPteZi+LiHERYJvLSg+/kTudALw6wE/J4Tcs/WgXUrv86soMmWLu/teQYiY9ha6L/2TM3LrmIjj/fM7c+cHaaTgZ41ZdGe6F4MMp8/gOiTRQ/B74P7nSFoa6TDgqkvQDVrKMaYdCEJ4v/TPYFfVc+tcGH63D5hspJHG2qSO+2x+BN7t8LXYDsgPn301zI+NNNIY5We4d8uz9GQjPwzha51fs3767sgnP+EaEz36GTbVPPYmW3+yXoTmIv9Gzn9+GMLX9SZunlcqp178QG+fbmL9OsDQIwhCdvAZ1krcT4pONBOwkB/Ww9fnQfnpg/KwpnAaww7vrwhzbLxrInz5SS37/LDJ7ygQP6L7Tz5O6gxV2VcR8qwWYWoRYyg/R+va5oe9+XVs+Zla28sr+jDiy37SSGuIQS3FcHzGvfxEwSEB681PcOAH+vHJN0ZC1AOhFgThHyLWlO4vou+5eFeB4gN6Qfg1bPnBDWxdO9dgTvY8E3J8jrFxnFqERXSXAHHPGkIMzq/uys+4kNAEhK5BkHXEkFaIfWF6OOCrCtbio8/P1BtvhIL28SxDNl7qh4h94WtAFII6P2+EEM1o8wus2Lj/9dEfO95FAT5Y5afLrwAfM3ghhCCIyMo0julfn7DgOHmd8QG/ZPEwDD/Qaik/grDtFqVpYwKYjZvjRXzP8YZehggs4BvmF/89gR6G5QfK7hsBBvc0EpSgVGaE4ArG0/b9j4cQIuAb5ZdCY/IDFSwM5TPwsdMWfg6xoCUcy9i6F0KIDhHY/N/fBuZXQiB7hpWKZxqp3V9i+wQxocc4fmD7HLjlEUJMxQPzyyBPZWdJP3RNI7XMLfwCYkOb+NuXozmS1xKEEG3D64TfIm1+sHXqnEYSzHfzdFl5H3I6jp9/Xbaoyw3+zzfsmt9uASGdX9qBXyckP0BI9lwcgiA16xJbCTGh1O04WAcSzeDeoVV+V35yeH4gEyFskEMMDt7NU0RMiIzin2H4DrqfeOGEL3p+gFBomuMYBjA825lnw8ZLg0CdxA1yJJe2+CbFDxCeq2DjNn49dO0kG1/MTAJ1r/rdX+Wh+43gmyQ/QKj0ZwkM4Lr1ZMmEdnDzSg8RCw45EojATo4fpJGaWluGASxVQIwcZsgofn/E4aoEKcThEOJE+YGyGTPPRS5es26RszRGNCywmNGo24cQJ88PzoVnmAgGMGMtUNNM3IzR8cP2LWbvjB/4+E3z2ri4yO53s+SPwCCg+QK6U36wg19vDF18ji1+KJu8HI3RZVB4foqqnn0xvb2SorQfX+e1mBpzE9h2Bx02gcPzO8MDLcI3go+7nAzKIOZUsO1+4fn1vrr3VOmpVRPj1PTMGD+cVoQsDmCrSjY5kvD8zjLm4+6TWqfXNuLtJCk7xjgGzSMmlbGmEOnwA0mdHmcEZkMyLDE7gEG70GEo8gOddFSdYbg6TCQZHcDWUWz8gAUq/Ny+32VnG4XPc+0jZpVIgkFo8wPJvbD54AyjA/hWXmo5GxU/EC/r+eBUiPuSOab5gaLkB1tLUy/Q/10R8YM8F3N3FNT5PYqEHyB89n9GSPhNIcr8GPl2KQ9Fz69bHeGnBOIH20KYO2B3Bf+/9s72p2koisN3mw6ZTk06QB1REcSBkwXYQEGJxpf4wRgTjYmf2N1btxUSYAOcDBWN/7e3LdvZlq50Xbve25wnUQJfSJ7cl7L+zjkj9Perjz8/1XO57+/qQP4gjJPjMEDuib+BW2pBFQNvAXKB/DF8twjt+dusKeV6oVBh7BcKZUXOD7IIS2X/LMIbwUH9/XsFDUE7OWBlnTWrTzQFnjL4o/QH49Yb2tJjqAuxUc215qoXZEvbuJp/6YdFeO5vbgB/wbuvy4bj1msKG6yuV7aXL9rQNR6LkUbg7+ffypuO++Pa5NzcJpu3ztjdbeZPi3vtAePVctF8G6sG33GRIHfPX6XHX7mQzZ7fv9fmnqxeb3/8DijqYPWm1hirVDE9EIsNlmET/CC06g/Q/E3Or7breW9mjfhzKH+vXlAfXDxgAsU2aMnf3km3PzKjygN/fZHl4xwUMfRPkXNaW+2WPwD89UU2LsyEFLnQAl33ByVximFCXf/pPBEUl/2Z13NBL/dmTNAPWd33Bxz3VjFAL/ci76/eRuEvdjnJxq1fuclYYJPVk3EIt/Sp5yrmaLXjho9z+/bcbX9sePNNw3Hr08tXkhNZoKeeq8F06v44z2+46S+WXJgmpowvP1QlQj1XI987TIX7BIxj/m73yrlntZqrs6hQ91Zv9XLf5TzDZuLvqQ1/NgGH39VWHNoFXOc3hW/NX6Cfv/yw/swH7R1TWmhfwGf8psjt+8tZ9We/GKnUGqai8Jsi59CfplCvKfzbOUyF+xAbP/7a9Vw7msATvlPkXPpjaLMKFVZlcYT+hgmQK0oWiBNhiHrur7WPxbyAo5QDf2o9l9D+rj7ywJ/JIpwmonDub9J7f+wk1P9G5qchx/D+qiPxB1wR7QK+wN+P4gj9QTFSkoiCBX8MeST+oKYwzk8duiP+jgb2F44+jiwuRgKJMLGBcPevY/5gFlibqWiY+Ban/cEwq+BiIPrtzRdtWkYoMEb8iSv+Eu1hVvpEEqVK6fsPvgzgu+Iv0NLXlVejhUec9Izl3V9Eb8n/0qCdIK9jBLjyF6DBOwSqRLoLmnwQmhzOX9xKE7gbBKZ0dRuUfWXQhr+JcQuNHG8ZrL/WG9+ijwwm3PBHIjRC+lYpVWmBm767wzPlhr8wpWFC5vvVVtNSkZPe2Y4IjBDioD9YgNe3AYMl+M4nV7Ea4Vh12B8JqgsQxkkaLEHBg889Bl857C9B78ICNKJEa/5ZgqrBiqP+yGMagLEkRlRoXeTgrqlB+/6ABzQB56oRde0XnonzWbMFg074g4vpBrm6bYKiZV/2BPq03rpB+/6AEA2TGTOBsv5+ZYeXvrvOGHTCHwhctSDwhKfGsQ4YdMAfCLxvQaAs0is3KwahQtKePzgDEyCw3xmoC4z5ZglqBp3xRyL0lrnAfVrQBAr11teaQfC3a9sfidK75mfgAZVb+b8Y8Q/MYMMJf2SMBsc+mdVR05L2VbDgiyWDw/gDHrA9fM1kB+vH7algyRcLfP3cqNn3ByRoiMxvm86CYxyevx3wE9OxbN6+PyBEb82YLMDqtv4c7Ur2ZS1FvAAMHp7JNv0Bd2gwPAnKeqtY87CDnU/vbkgZ9t8aGTVgEAB/NkbUfQRnhlWssksCydbKi+eSR8sQDII/W4xN0alN05xh3rX8+IYkrSytEw8Ag8Onk8MhqP7tHlT3o7uIJum4v5QkebaBwSD4s2+wVDfo5gQ5Q3cCqM+lrbWVLeIJYBD82Wcs0tONo1jPqTO9NY5cmySVecv+SRvEG8Ag+LNPNMQUVpSaKi9frpTYd3Kvvxhxg60l4g1gEPwNqxCotobs6jlrHz5HA5eSMIBlGJZ/72vN2kq5Sr11pzQV/mbB8ctldfpRB3vNnayYRXAecU/r1tY83VO37mlTVrJdiBMi94yHWUCEWVLcMT7R7Qw3sJ2pLsZM+OeFiCuAQfQ3HOO3dWMCzILjlVb1L3AZHwCHURgXtCGgp0wvJCe0Rni3F/DpD0EQBEEQBEEQBEEQBEEQBEEQRBTWtiSWhiWMZ+l0iiADsiRpZAhJzTKeEWQwUlJmfT0jrRCSnt3YmE0TZDBWdIEpFGiTjKSxxI7AWQYeggPztn2JpNJpPAIRBEEQBEEQBEEQBEEQBEEQBEEQBEEQv/MfSsOKgOxMwnIAAAAASUVORK5CYII=',
  search:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAABVlBMVEUAAAAECRS6ur1WWWBYWGBWWWBWWmBWWmBQVGBWWmBVWWC4uLxWW2BWWmC5ur25u726ur25ub3s7O3r6+zt7e6vr7lWWmBWWmDs7O3r6+tVWWDs7Oy5ur25ur0DCBRVWWFWWmBXW2ADCBLv7+/s7O1WWmC6urq5ub25u71WWmADCBTr6+3r6+26u725ur65ub2+wMEDCRQCCRIEChIACg8CCQ+5ur3t7e4ECBNVV2Dq6uy2trtQWGG4ub3s7O/s7O7r6+wADiTX2Nns7Ozq6up2en7NztB2eX6fn6eIio+kp6qpqq6Ymp53e37h4eJqbnNgZGrg4OLGx8pvc3eMj5N8foLr6+y5ur1WWmDY2dpfY2nP0NKOkJXGx8lobHGhoqbh4uN7foO8vsCXmZ2/wMOqrK/l5ea0tbje3+Do6OnS09VydXrV1tfCw8aEh4zi4uTKy82Iio/oOAafAAAAVnRSTlMAc5/fIKDvvxCffx9Ajz+/73/fwCAQz1/vQDCB389XP69vHRCfTzCPX4Bkz49v399PSjsrEjKvb2xvYDAfjzCvUAfDkDDln5Qg17+ffz/v7+/fv7+vfxt7ws4AABJeSURBVHja7NWxDYAwEAPA/0VSpKSDgJSW/ZciM3wKmjvJnsCSAwAAAAAAAAAAAAB+MFqwo+ezagRVbd5nHkHVnTmvNyjqR2YPqs5sffqRumesmOCmdgUAAB/75tacNBCG4Y3JQKBAoVqKtVKqVq1VR6StVqdqPY2j46WbLyG7OXEoh9L6/2/cTUG0JtBiKGQmzx0zXD287/dtFoiIiIiIiIiIiIiIiLhipM2VZKKUF8UYuIhiPJ5IbqRWUcQY5NRGIh8DX/KljZSMIjyRN9P5fuJKieSPb98+v3+/vbRUwFhVCWkaukX7FtObkcTzSBvxvpyV789e3NsuYC9OSNOxgBPfiPo8RNqKu1KS61/ePd7G4yCGK1HcktAVUnm+g+YS2c1eLLEp33hxHV+QE1unXPnKlXW5Ighz+c33ajrG7KXX0Y1b1/HlILrGxV9RDMtzKTAVd8eZfJdlbxKavMulFLoCHgnC3H3xzfXx8H18XMCToupuk9G02RHm7tc/rr6kjG5ex/+FalCmcNoprDCBaJ6QAtLn0qQAn3ILaAo8f37ncA5HoLwVC0wfx+QpdBYfLqOAqQiMIpP4UhB20dyQEgHSMroRiL7hLKRG9tpCwAEU+szTCJRLAPF1dPdWAQeJSgH0mr2XQQFyWH40NFjcnQuHm6y9+wjdXMJBU9eA1k+VxYfB7t/KHxJfFiuHaKbIaYC4hO6+xVNA7QE41ZqymEHBsvNS6DPr06AkuvF7V8DToQ5A26eKEvAsvMPEVXbLTOOMl/FKDEQWvw94aqgUtHrXVpRckBt5l5XXTeJusbiDZsfW2fJduoQPhokvg+kAGI2aojwNcBQWBaGMZg7fvqy+rwoX8GbX9R6lMIB2LN2wqxeuce+oqgTZY2EeToFSHsR1hG6NS1DTsTQYoFFKh6/AcmwVj6VKgapthYcwuBE488tASQRx7PYlRgc4tOc07erQlVoldcfqAKfjkLEB5gZVmyl8sBzMcXr2f2Nj/vJs/G2PsudoPHOWQU7wn7QajUarf6NvuOmkOhljsMMMNmo8hAtBCJz9CFyNQWnk+jDrFjfjDOU11O4pOa4pA2rHpNo9Mplnyt/ZHNllswda1TWYfRLAMbBcnm2Dub8EGuFPNTQA7Xc3W0dtYive2KR9dKpzh/pIhfrAoJJDoUdy/b0pjLoUtcggeV0mbwyk27TGKOQG1daxwthbRuFGEkf5M7m+wVBrdYniT3ZtbS2rnHFMfo5RqAN1DbqDMMwwfyXWX29/pqENNRx521vbO3j47P5QwsL9zJODxdtKswcABvalxw3WQm9QFiHvuz8IBbD6+lTikbnFXMavgMuZ3NdPfJ34bpIOdMxG6A2WQJR8/JkOQIf09dX+Td4BkzeG7+KIHpsUevjMYPY1Cilb7vl5ySd+mtEv7z/6sgcZdCGSMaDEbz1pYGDTDrPBfYBVhDyfP4zf7TXPl/dSN3pS3n8SEoAmVhVONpQtlmKw7/38a1oADua02so5rmXQpUgCdFS/mwVNxW0lrHNQFiGN0Aufx1Xi0d7JLlFWRaA+Bh2gJj4Nq8E0iLLnAYZog8x0z5d3YcKrHs32WyQOZocZzu2wnahXIOa9QJoA+glmNM5Nv9uZyT8rqGMvqhrYuGErnD0UKiSRD8APnuvDwBzz7/pmc2hykgCG3xg0edDD91z8i7pr6W0iiMEjEpJtlABKIGkaUEENj6pFcKsEqCCEeEgIcUCzXpJNtklIX6Hw/090Jtu6rJ32kpl6fWglLky9tr/P33o9K6aDe3WJ/6IRyV4XHtyDE52WwfCZyo+1kEHz/sug71OFthwPIhuM9eEob2QmsAncpRnF++/FLaWW4MF9NokNEkfhHIpzAySbUOASeMT778FSIqMCEPNJPNQ6Pgv0fFgRgEPg6CfrvxtLiouK4c3UYvPPKRKHL1UuzCJIh+HPY+K/ZYLjTRgkrDa4d/5/3slFElctgjC5dOzUfypowh5Hpy2OTML8sMEyVBgEGaYd18yB/5B8clA8NH49COd2S4m3lunh2ow20rPx4MJ/GPsQLwhBHecGicvQUqpBC6ANjunEif+wqRt8WxiCOWlIqiyF6cPA/v7tyH/49L4sDsF80Omy4dANqiBEBEBcsLJiCR5cEYK3lWgzHJBWwLME/o8/KxdWgUKDC8Ge1nEucMRywAZFYPt7crF/c5RKTfi0ykir45yEYFACygEjgB5J4CfKjVWh1OHakUTr3zkIwRaUKQfsQx8T2DkYlmFli7J4I7nOchCChsNsrJIAjLII/EI5syLAMyrKGBg5HIkPwSKUDIdhAzAKL5iTAohluMHASKR1T3wI1hBCSABOnCcwhuAtBkaGCCOh2DftBVhHCCEB6DqBMQQrXQoje/YhyhYG10wXsk1UQAxAxwGAQPxaZ80e4yiULWs9MhlczzYhe9kAvKEcWxkedWkz+etCDj9XIq0Mj9UuaUL2MQAdIwiGYJk0Q6N5DouGkQAgyA5z9OZNyIGPAEQrQTULxAlAgjgcipQUHhsW3WAh5K+fAEQ2UGtTLj0yD1KyqlWDitogGdzDJsR9ACKMqFXSkI9NJkvO4Sasq3dZ9jBACPGYPAWobhMic2x+Cs7hAICQmDH0sYvz8egxGdpsEZwJxuGqKYGZPv4YYsxgjxMqVWiqumbOkoRyc/gR1NQGaePsL/dNCJXVgm3Szf2yRTA1eVz6IbRUmyNfOvYIISgLtcl7hf78LFKnFAyG7NAW/tQ8dHFU2q9lZbWeRZFeKLYfNjT6bZZ7xciiPWUwFuRGFkV+XiwnD5QwW4MCwRALfPrIfwarAEqqQzhpZFBEahG0IEySBkugZy24AG+yRfDE9CKHYShUlzZSzC6LISN0oPJmD+HxBhFkjK4xkcoEK1BRba57SryyaKTSj7JMcGghLcZyIstWoKV2iAaHGOK5hW/BinrL8Zi/UlGkDOuqw4HwzGsJRGnoYbavHMHJRUi7o2SZcWA32zz1kHl5Az4kBa84OSEKheoJp7CnGoQ3YNHxnDRFKGSloQgG1oFCexHGgQAoxXhv4AHULnFgimkiv7wBUKrOOXAS+u2e8Dx3uVZkGgpVpYkDzYGxE/bOvErwRmnmgU5DoTzGOJBLGe0VhNEKvANtKyJyZH+RAw+9SzHowFWupIRCieAiB069vQ6hDqxf6sD7SpRxDsSibU35tBIE+XKgOTCpOf4deDUrCIW2IguLtvcDowNXLwc1JcqYoj2AyGPK0E5E6Tw50LwSqZOxhGtz4Bo0leJmBKdSHXiqYKo6IwHriWcHokB+N1cONHrgFicB//ZfA1Egp3rggVQHVqCSVTB/WUU6vpYD1ziBfCjZgUYC7nIK5l+/B8ZhT14gj6TyQCMBdzjYm11LJ9KENbXNCeRHUh1YpBKw/gmJ1pHfXhhHxYi+mwrkUueLShC808wzn3qXgPlRsQTAYrFYB54mzV3NzcaMrkECrtBRsRiOrUAuVQ+0PGaV+8Yh9qpII4a0s4c5sY2IVEXazgduERE9wbLtU8EEKKoONx+YhKHU0QQzFdrlpkIPfMIenkU1OBCOQrHDMQFAsMONxh/6nwpdgZqi2lAyB2Gxnxw2odrW3JR+7PGZ41ePbRZDYqmNyLx72tAZsxtHZh7LNs4qdrlJJz2S+kok/VJpi1v3MPXIvHD1RZ18qWQxROpLubQIbtN1D+an589MC7CmdrnPRPRMLgjPydc7zTUjM79FsIUZTD4YkAvCcw1ug1/34I1K4/quOpVibAkUOyOd7pxo8IurvDBBPEZRvWK/ejwIBWOIffTVHbq4qo8Hd583uD2J8inLAuV+JzJv4a2eQLd2xF6Ojeu76OqL8VxJkDodeJ48QUNzazsiL+9FMAC7zM4Jw6dEl8D5uocOH4ITXzmMAUhXX8xCsWLgOQ6X7/J7dCNPB+cDcC9dfSGaBRoL7LoHBoi9heAasPvjfiYWgwUrCbjuYUdTID7G0zvWgQtkhzC7+uKFEmprUPq8Sm9GwX3s7t7N4Rb6D1wVNrKacBJztkV6m9/HnngIwSIwTYgenm9PkvqNyP8bR25pYmPcx+708AV2C/0AYgsh4jH4LAQbi643cn36TdxCTziMKcJSPxHJhuBL9pa32N0+dkTgdZrAyQD2z4QY4dvbMiFId+nPnPbxRYPANIGH5wEo9o0wH4L0NodExy6l/aaZRtgljVBaAf/mAkLSEKw12Fve+no6cbePvYYXOTEc8CDMB4Sk+9i/Lr4u1NWfsGlUQLXFduK2AorWorOqVrmhWSAZ6sgRkd0EeIw32ZEt9FGOAtDc6mX2sVPbNx48chIFm8BfhfoLBn8sB8wJh0Ec+ag1fy+fkwtXN4EFYB2lFOYoVwFoR/ab9Ss8+OCee//pk3QL/ShPFTCVtX7oKzx4w6H/MIEjS2FywwFxSgFK7xfcFwpjfbRMNhjcBGix/osA9ucIkh8OiKwMvieas5G5X3iJHiw2obRu/Mc24OlFTnKnKi9DYrzeiN5wPVvWX1Mt2Kvwu/wN13+yCfxCdBf8r717700aCuM4fgAFnDDcvEx0N+ddR5zXqMliNN5iTIyawNPSC21XYDBB3/8/nlNQ2UY7SgFp+/sm3rNFPjmnT1sSevR02nYRNIj02t5EBPNEmSy7cH/4waL/JLtwncL8bcV5ypvbKNFaanDBUxlnfBSXXZ5vrTgTOHwTpN+CmIHDUzUivRVU8G6aUhu9yw83wSMPcgrLBOm3KR4XOjxJIdJ+7gW5qMtdIsrz7cuvGr0EpZBuYFH2kriF5ZKpESlCcO3suLs3JaavuGb0FgzBO0ketzg7Zdd0mehXg1/VLfr/xmeI0gtZVhTT40TB8E3gQUFxIPfYx2TYvg+EOc5HZ47tXnfBcJ1CHzmZEYLehG3L162FXEbw8Xun4txvRMEQjuA/XRGCnoQykWzYSyPq5dNi855iRcEXF8FOzZOwoRE3fJc7cSbl8ikiylzLsqLYvHER5MfBtnTCa1Q0EjQLuawr3t1MmojS+Q1W3BaTN16CGhf0TrXaJLqUyV/LXTn174uv3FzJb6Z6/7awcb247Vx2xE+wWj4xybQM+ls6lUql//0pk1/5WLx63ll7MxVM0aFSjHcv4XSPzarsJpE94ms1dcVoa//+w6nNMx8+l15uvxph5dnSCIJhBBTXxWTVyn7qSrzl5eXR11zNIk2K6i5mL9Li1U0zqU0UZUF+IJTt8vSyZa6nRFkwmydSprUIJYPI6pbLkRZkKynSprMIbZlkk/8adUF+E2UaR0LVIOp0nd8emEakBfkinPg+rllEWm/57avcJuKC2QUiTa9Njk+XifRu/0y8Uom+YG8fNybIZ/S46mL5xUKQbWQ4oS1NiE8tO7X48ouNIFvJUOBjYdUa4GvucZE4CTqrkIzG2IuvYdAAn1o53LPTJFcjLsjufBf3ohV1DD7VEl9qufE92GEsDoJs8ZNYRppi1vysPUePDLvrwldZushYTATZhfeKRoJDV0fD0w2hp+lS2Wn/4BhfQbw/FR9Bdv3lN9sgkWE11Jq7XbVhteUettATNavmMT7xHnO8BPky3P5qWm1y0gxFb6iqJPXZJEk1G7rS0cipbZndvkG9tVcZyhdDQcaKb5pd1e60yT1NsVWB59TkesP54irIzibVgxp/XaqtK4ahaeQka1q7w9ekKQ1s5gPVPK53blfwxVmQXbxTMNWq5DWR61JV4B2vUBKTN+6CfBnuPuAv54dabUnNZr3en7T1ek2SWj/VvcrwVpecwQtBp1ulQsVPhZ4eBAe6uLO7NhLe2u6Os3MhOARxsfTMS3E1WVrs4UHQo1uLpaVkobC62p+0q6trz5JLd3b+7FoIjh0EPYPg3AVBCPoMgnMXBCHoMwjOXRCEoM8gOHdBEII+g+DcBUEI+gyCcxcEIegzCM5dEISgzyA4d0EQgj6D4NwFQQj6DIIT6/E6BAO1lXjKf3oMwbFbf/7kYeIe1uDYPUkknj96HfpdnKKBZvkxSVv8O2/NZJJYhwUjAvgwsb71fH0Ws5jkchR38dPH/Edia/qCuvNw7IPoCYrWH7FpC+q9v98P40ehzzYh6OLHq4fyw+RnmxB089v/Ec6P459tQtDNLwxP1v3/CUFPP9E5hkYUVAb8QvBw7LlICHr7nbvF0AmC8AsqCL+ggvALKgi/YIIEv0Dl6Qv8AnaD+11+m4Tf2G2X779lLAm/gCXhF1QQfkEF4Rew25U1+CGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhGLfb5qRCG1rEwcMAAAAAElFTkSuQmCC'
}

// vue:./Empty.vue
import {
  renderSlot as _renderSlot17,
  openBlock as _openBlock30,
  createElementBlock as _createElementBlock25,
  toDisplayString as _toDisplayString13,
  vShow as _vShow6,
  createElementVNode as _createElementVNode20,
  withDirectives as _withDirectives6
} from 'vue'
var TYPE_NAMES2 = ['default', 'error', 'network', 'search']
var _sfc_script31 = defineComponent31({
  name: 'fx-empty',
  props: {
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      validator: createEnumsValidator(TYPE_NAMES2),
      default: TYPE_NAMES2[0]
    }
  },
  setup(props) {
    const imageUrl = computed19(() => {
      return images[getEnumsValue(TYPE_NAMES2, props.type)]
    })
    return {
      imageUrl
    }
  }
})
var _hoisted_123 = { class: 'fx-empty' }
var _hoisted_215 = ['src']
function render30(_ctx, _cache) {
  return (
    _openBlock30(),
    _createElementBlock25('div', _hoisted_123, [
      _ctx.$slots.image
        ? _renderSlot17(_ctx.$slots, 'image', { key: 0 })
        : (_openBlock30(),
          _createElementBlock25(
            'img',
            {
              key: 1,
              class: 'fx-empty_image',
              src: _ctx.imageUrl
            },
            null,
            8,
            _hoisted_215
          )),
      _withDirectives6(
        _createElementVNode20(
          'p',
          { class: 'fx-empty_description' },
          _toDisplayString13(_ctx.description),
          513
        ),
        [[_vShow6, _ctx.description]]
      ),
      _renderSlot17(_ctx.$slots, 'default')
    ])
  )
}
_sfc_script31.render = render30
_sfc_script31.__file = 'src/Empty/Empty.vue'

// src/Empty/index.ts
var install30 = withInstall(_sfc_script31)
var Empty_default = _sfc_script31

// vue:../Picker/PickerView.vue
import {
  renderList as _renderList8,
  Fragment as _Fragment8,
  openBlock as _openBlock31,
  createElementBlock as _createElementBlock26,
  toDisplayString as _toDisplayString14,
  normalizeClass as _normalizeClass23,
  withModifiers as _withModifiers2,
  createElementVNode as _createElementVNode21,
  resolveComponent as _resolveComponent19,
  createBlock as _createBlock16,
  createCommentVNode as _createCommentVNode15
} from 'vue'
var _sfc_script32 = defineComponent32({
  name: 'fx-picker-view',
  components: { Empty: _sfc_script31 },
  props: {
    ...commonProps
  },
  emits: { ...pickerValueEmits },
  setup(props, ctx) {
    const root = ref22()
    const defaultItemHeight = 48
    const {
      getDetail,
      cols,
      isCascade,
      update,
      updateColSelected,
      getValuesByRow,
      updateValue,
      onChange
    } = usePickerView(props, ctx, {
      name: 'picker',
      afterUpdate: updatePos,
      handlers: mergeHandlers(
        {
          formatter: props.formatter,
          parser: props.parser
        },
        inject6('fxPickerHandlers', {})
      )
    })
    function updatePos() {
      nextTick6(() => {
        const $picker = root.value
        if ($picker) {
          const $lists = $picker.querySelectorAll(`.fx-picker-view_list`)
          const $firstList = $lists[0]
          if ($firstList && $firstList.firstElementChild) {
            const itemHeight =
              $firstList.firstElementChild.clientHeight || defaultItemHeight
            const $selecteds = $picker.querySelectorAll('.selected')
            $selecteds.forEach(($selected, index) => {
              const itemIndex = parseInt($selected.dataset.index)
              $lists[index].scrollTop = itemHeight * itemIndex
            })
          }
        }
      })
    }
    function onListScroll(e) {
      var _a
      const $list = e.currentTarget
      if ($list.scrolling) {
        return
      }
      clearTimeout($list.scrollTimer)
      const $items = $list.children
      const itemHeight =
        ((_a = $list.firstElementChild) == null ? void 0 : _a.clientHeight) ||
        defaultItemHeight
      const groupIndex = parseInt($list.dataset.index)
      let current = Math.round($list.scrollTop / itemHeight)
      let oldSelectIndex = 0
      for (let i = 0; i < $items.length; i++) {
        if (hasClassName($items[i], 'selected')) {
          oldSelectIndex = i
          break
        }
      }
      let isChange = current !== oldSelectIndex
      if (isChange) {
        while (
          hasClassName($items[current], 'disabled') &&
          current !== oldSelectIndex
        ) {
          if (current > oldSelectIndex) {
            current--
          } else {
            current++
          }
        }
      }
      isChange = current !== oldSelectIndex
      const item = cols.value[groupIndex][current]
      if (current * itemHeight === $list.scrollTop && !isChange) {
      } else {
        $list.scrollTimer = window.setTimeout(() => {
          $list.scrolling = true
          frameTo({
            from: $list.scrollTop,
            to: current * itemHeight,
            duration: 100,
            progress(res) {
              $list.scrollTop = res.current
            },
            complete() {
              $list.scrolling = false
            }
          })
          if (isChange) {
            if (isCascade.value) {
              update(getValuesByRow(item))
            } else {
              updateColSelected(groupIndex, current)
            }
            onChange()
          }
        }, 400)
      }
    }
    return {
      root,
      cols,
      getDetail,
      onListScroll,
      updateValue,
      updatePos,
      locale
    }
  }
})
var _hoisted_124 = {
  class: 'fx-picker-view',
  ref: 'root'
}
var _hoisted_216 = { class: 'fx-picker-view_cols' }
var _hoisted_312 = ['data-index']
var _hoisted_48 = ['data-index']
function render31(_ctx, _cache) {
  const _component_Empty = _resolveComponent19('Empty')
  return (
    _openBlock31(),
    _createElementBlock26(
      'div',
      _hoisted_124,
      [
        _createElementVNode21('div', _hoisted_216, [
          (_openBlock31(true),
          _createElementBlock26(
            _Fragment8,
            null,
            _renderList8(_ctx.cols, (list, listIndex) => {
              return (
                _openBlock31(),
                _createElementBlock26(
                  'div',
                  {
                    class: 'fx-picker-view_col',
                    key: listIndex
                  },
                  [
                    _createElementVNode21(
                      'ul',
                      {
                        class: 'fx-picker-view_list',
                        'data-index': listIndex,
                        onScroll:
                          _cache[0] ||
                          (_cache[0] = _withModifiers2(
                            (...args) =>
                              _ctx.onListScroll && _ctx.onListScroll(...args),
                            ['stop']
                          ))
                      },
                      [
                        (_openBlock31(true),
                        _createElementBlock26(
                          _Fragment8,
                          null,
                          _renderList8(list, (item, index) => {
                            return (
                              _openBlock31(),
                              _createElementBlock26(
                                'li',
                                {
                                  class: _normalizeClass23([
                                    'fx-picker-view_item',
                                    {
                                      selected: item.selected,
                                      disabled: item.disabled
                                    }
                                  ]),
                                  key: item.value,
                                  'data-index': index
                                },
                                _toDisplayString14(item.label),
                                11,
                                _hoisted_48
                              )
                            )
                          }),
                          128
                        ))
                      ],
                      40,
                      _hoisted_312
                    )
                  ]
                )
              )
            }),
            128
          )),
          _ctx.cols.length === 0
            ? (_openBlock31(),
              _createBlock16(
                _component_Empty,
                {
                  key: 0,
                  description: _ctx.locale.pickerEmptyText
                },
                null,
                8,
                ['description']
              ))
            : _createCommentVNode15('v-if', true)
        ])
      ],
      512
    )
  )
}
_sfc_script32.render = render31
_sfc_script32.__file = 'src/Picker/PickerView.vue'

// src/PickerView/index.ts
var install31 = withInstall(_sfc_script32)
var PickerView_default = _sfc_script32

// vue:./Picker.vue
import { defineComponent as defineComponent34 } from 'vue'

// vue:../Picker/PickerPopup.vue
import { defineComponent as defineComponent33 } from 'vue'
import {
  resolveComponent as _resolveComponent20,
  createVNode as _createVNode11,
  withCtx as _withCtx6,
  openBlock as _openBlock32,
  createBlock as _createBlock17
} from 'vue'
var _sfc_script33 = defineComponent33({
  name: 'fx-picker-popup',
  components: {
    PickerView: _sfc_script32,
    Drawer: _sfc_script8,
    NavBar: _sfc_script7
  },
  props: {
    ...popupExtendProps,
    ...commonProps,
    ...pickerPopupProps
  },
  emits: {
    ...pickerPopupEmits
  },
  setup(props, ctx) {
    const popup = usePopupExtend(ctx)
    const pickerPopup = usePickerPopup(props, ctx, popup)
    return {
      ...popup,
      ...pickerPopup,
      locale
    }
  }
})
function render32(_ctx, _cache) {
  const _component_NavBar = _resolveComponent20('NavBar')
  const _component_PickerView = _resolveComponent20('PickerView')
  const _component_Drawer = _resolveComponent20('Drawer')
  return (
    _openBlock32(),
    _createBlock17(
      _component_Drawer,
      {
        class: 'fx-picker-popup',
        placement: 'bottom',
        visible: _ctx.visible,
        onVisibleStateChange: _ctx.onVisibleStateChange,
        onCancel: _ctx.onCancel,
        onConfirm: _ctx.onConfirm,
        'onUpdate:visible': _ctx.onUpdateVisible,
        ref: 'popup'
      },
      {
        header: _withCtx6(() => [
          _createVNode11(
            _component_NavBar,
            {
              class: 'fx-drawer_header',
              title: _ctx.title,
              leftButtons: [
                { text: _ctx.locale.pickerCancelText, type: 'primary' }
              ],
              rightButtons: [
                { text: _ctx.locale.pickerConfirmText, type: 'primary' }
              ],
              iconOnly: false,
              onLeftButtonClick: _ctx.onHeaderLeftClick,
              onRightButtonClick: _ctx.onHeaderRightClick
            },
            null,
            8,
            [
              'title',
              'leftButtons',
              'rightButtons',
              'onLeftButtonClick',
              'onRightButtonClick'
            ]
          )
        ]),
        default: _withCtx6(() => [
          _createVNode11(
            _component_PickerView,
            {
              ref: 'view',
              options: _ctx.options,
              fieldNames: _ctx.fieldNames,
              formatter: _ctx.formatter,
              parser: _ctx.parser
            },
            null,
            8,
            ['options', 'fieldNames', 'formatter', 'parser']
          )
        ]),
        _: 1
      },
      8,
      [
        'visible',
        'onVisibleStateChange',
        'onCancel',
        'onConfirm',
        'onUpdate:visible'
      ]
    )
  )
}
_sfc_script33.render = render32
_sfc_script33.__file = 'src/Picker/PickerPopup.vue'

// src/PickerPopup/index.ts
var showPicker = createShowPopup({
  apiName: 'showPicker',
  component: _sfc_script33,
  createHook: createConfirmHook
})
var PickerPopup_default = _sfc_script33
var install32 = withInstall(_sfc_script33)

// vue:./Picker.vue
import {
  resolveComponent as _resolveComponent21,
  createVNode as _createVNode12,
  openBlock as _openBlock33,
  createBlock as _createBlock18,
  createCommentVNode as _createCommentVNode16,
  normalizeClass as _normalizeClass24,
  createElementBlock as _createElementBlock27
} from 'vue'
var _sfc_script34 = defineComponent34({
  name: 'fx-picker',
  components: { SelectorField: _sfc_script27, PickerPopup: _sfc_script33 },
  props: { ...commonProps, ...pickerProps },
  emits: { ...pickerEmits },
  setup(props, ctx) {
    return {
      ...usePicker(props, ctx, {
        name: 'picker',
        handlers: mergeHandlers({
          formatter: props.formatter,
          parser: props.parser
        })
      })
    }
  }
})
function render33(_ctx, _cache) {
  const _component_SelectorField = _resolveComponent21('SelectorField')
  const _component_PickerPopup = _resolveComponent21('PickerPopup')
  return (
    _openBlock33(),
    _createElementBlock27(
      'div',
      {
        class: _normalizeClass24(['fx-picker', { disabled: _ctx.disabled }]),
        ref: 'root'
      },
      [
        _createVNode12(
          _component_SelectorField,
          {
            label: _ctx.fieldLabel,
            value: _ctx.fieldValue,
            disabled: _ctx.disabled,
            name: _ctx.name,
            placeholder: _ctx.placeholder,
            onFieldClick: _ctx.onFieldClick
          },
          null,
          8,
          ['label', 'value', 'disabled', 'name', 'placeholder', 'onFieldClick']
        ),
        _ctx.isInitPopup
          ? (_openBlock33(),
            _createBlock18(
              _component_PickerPopup,
              {
                key: 0,
                options: _ctx.options,
                fieldNames: _ctx.fieldNames,
                modelValue: _ctx.modelValue,
                title: _ctx.placeholder,
                formatter: _ctx.formatter,
                parser: _ctx.parser,
                visible: _ctx.popupVisible,
                'onUpdate:visible':
                  _cache[0] ||
                  (_cache[0] = $event => (_ctx.popupVisible = $event)),
                onConfirm: _ctx.onConfirm,
                ref: 'popup'
              },
              null,
              8,
              [
                'options',
                'fieldNames',
                'modelValue',
                'title',
                'formatter',
                'parser',
                'visible',
                'onConfirm'
              ]
            ))
          : _createCommentVNode16('v-if', true)
      ],
      2
    )
  )
}
_sfc_script34.render = render33
_sfc_script34.__file = 'src/Picker/Picker.vue'

// src/Picker/index.ts
var Picker_default = _sfc_script34
var install33 = withInstall(_sfc_script34)

// vue:../Calendar/CalendarView.vue
import {
  defineComponent as defineComponent36,
  reactive as reactive5,
  ref as ref23,
  watch as watch17
} from 'vue'

// src/helpers/day.ts
var import_dayjs = __toESM(require_dayjs_min())
var import_toArray = __toESM(require_toArray())
var import_customParseFormat = __toESM(require_customParseFormat())
var newDayjs = import_dayjs.default
newDayjs.extend(import_toArray.default)
newDayjs.extend(import_customParseFormat.default)
var day_default = newDayjs

// vue:./Toast.vue
import {
  defineComponent as defineComponent35,
  computed as computed20,
  onBeforeUnmount as onBeforeUnmount8
} from 'vue'
import {
  resolveComponent as _resolveComponent22,
  openBlock as _openBlock34,
  createBlock as _createBlock19,
  createCommentVNode as _createCommentVNode17,
  toDisplayString as _toDisplayString15,
  createElementVNode as _createElementVNode22,
  normalizeClass as _normalizeClass25,
  vShow as _vShow7,
  mergeProps as _mergeProps6,
  withDirectives as _withDirectives7,
  Teleport as _Teleport5
} from 'vue'
var typeMaps = /* @__PURE__ */ new Map([
  ['default', null],
  ['success', 'CheckCircleOutlined'],
  ['loading', 'LoadingOutlined'],
  ['fail', 'CloseCircleOutlined']
])
var _sfc_script35 = defineComponent35({
  name: 'fx-toast',
  components: { Icon: _sfc_script2, ActivityIndicator: _sfc_script12 },
  props: {
    ...popupProps,
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: val => {
        return typeof typeMaps.get(val) !== 'undefined'
      },
      default: 'default'
    },
    icon: {
      type: [String, Object],
      validator: iconValidator
    },
    showMask: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 0
    }
  },
  emits: { ...popupEmits },
  setup(props, ctx) {
    let durationTimer
    const popup = usePopup(props, ctx, {
      forbidScroll: false,
      afterCancel: removeAutoClose,
      afterShow: setAutoClose
    })
    function removeAutoClose() {
      clearTimeout(durationTimer)
    }
    function setAutoClose() {
      if (props.duration > 0) {
        durationTimer = window.setTimeout(() => {
          popup.customCancel('auto', true)
        }, props.duration)
      }
    }
    const iconName = computed20(() => {
      var _a
      return props.icon || ((_a = typeMaps.get(props.type)) != null ? _a : null)
    })
    onBeforeUnmount8(removeAutoClose)
    return {
      ...popup,
      iconName
    }
  }
})
var _hoisted_125 = { class: 'fx-toast_text' }
function render34(_ctx, _cache) {
  const _component_ActivityIndicator = _resolveComponent22('ActivityIndicator')
  const _component_Icon = _resolveComponent22('Icon')
  return (
    _openBlock34(),
    _createBlock19(_Teleport5, { to: 'body' }, [
      _withDirectives7(
        _createElementVNode22(
          'div',
          _mergeProps6(
            {
              class: [
                'fx-toast fx-popup',
                { visible: _ctx.visible2, 'forbid-click': _ctx.showMask }
              ],
              style: _ctx.popupStyles
            },
            _ctx.$attrs
          ),
          [
            _createElementVNode22(
              'div',
              {
                class: _normalizeClass25([
                  'fx-toast_box',
                  { 'has--icon': !!_ctx.iconName }
                ])
              },
              [
                _ctx.type === 'loading'
                  ? (_openBlock34(),
                    _createBlock19(_component_ActivityIndicator, {
                      key: 0,
                      class: 'fx-toast_icon',
                      size: 21,
                      color: '#ffffff'
                    }))
                  : _ctx.iconName
                  ? (_openBlock34(),
                    _createBlock19(
                      _component_Icon,
                      {
                        key: 1,
                        class: 'fx-toast_icon',
                        icon: _ctx.iconName
                      },
                      null,
                      8,
                      ['icon']
                    ))
                  : _createCommentVNode17('v-if', true),
                _createElementVNode22(
                  'div',
                  _hoisted_125,
                  _toDisplayString15(_ctx.title),
                  1
                )
              ],
              2
            )
          ],
          16
        ),
        [[_vShow7, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script35.render = render34
_sfc_script35.__file = 'src/Toast/Toast.vue'

// src/Toast/index.ts
var showToast = createShowPopup({
  apiName: 'showToast',
  component: _sfc_script35,
  createHook: createAlertHook,
  singleMode: true,
  hookOptions: options => {
    if (options.duration == null) {
      options.duration = 1500
    }
    return options
  }
})
var showLoading = createShowPopup({
  apiName: 'showLoading',
  component: _sfc_script35,
  createHook: createAlertHook,
  singleMode: true,
  hookOptions: options => {
    options.type = 'loading'
    options.duration = 0
    return options
  }
})
var hideToast = createHidePopup({
  apiName: 'hideToast'
})
var hideLoading = createHidePopup({
  apiName: 'hideLoading'
})
var Toast_default = _sfc_script35
var install34 = withInstall(_sfc_script35)

// src/Calendar/calendar.ts
var DEFAULT_MONTH_RANGE = 6
var MODE_NAMES2 = ['single', 'range']
function getDefaultDetail2() {
  return {
    value: [],
    valueArray: [],
    label: '',
    rangeCount: 0
  }
}
var commonProps3 = {
  modelValue: {
    type: [Date, String, Number, Array]
  },
  minDate: {
    type: Date,
    default: () => day_default().startOf('day').toDate()
  },
  maxDate: {
    type: Date,
    default: () =>
      day_default().startOf('day').add(DEFAULT_MONTH_RANGE, 'month').toDate()
  },
  initialMode: {
    type: String,
    validator: createEnumsValidator(MODE_NAMES2),
    default: MODE_NAMES2[0]
  },
  allowSameDay: {
    type: Boolean,
    default: false
  },
  maxRange: {
    type: Number,
    default: Infinity
  },
  dayHandler: {
    type: Function
  },
  firstDayOfWeek: {
    validator: val => {
      return isInteger(val) && isInNumberRange(val, 0, 6)
    },
    default: 0
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  }
}
function printError2(message) {
  console.error(
    new exception_default(
      message,
      exception_default.TYPE.PROP_ERROR,
      'Calendar'
    )
  )
}
var calendarDetailValidator = payload =>
  isPickerDetail(payload) &&
  typeof payload.rangeCount === 'number' &&
  Array.isArray(payload.valueArray)

// src/Calendar/use-calendar.ts
function valueParser(val, mode) {
  const values = []
  if (val == null || val === 0 || val === '') {
    return values
  }
  if (Array.isArray(val)) {
    const s = val[0]
    const e = val[1]
    if (s != null && day_default(s).isValid()) {
      values.push(day_default(s).startOf('day').valueOf())
    }
    if (e != null && day_default(e).isValid()) {
      values.push(day_default(e).startOf('day').valueOf())
    }
  } else if (day_default(val).isValid()) {
    values.push(day_default(val).startOf('day').valueOf())
  }
  if (values[0] && (!values[1] || values[1] < values[0])) {
    values[1] = day_default(values[0]).add(1, 'day').valueOf()
  }
  if (values.length > 0 && mode !== 'range') {
    values[1] = 0
  }
  return values
}
function detailFormatter(timeArray, mode) {
  const detail = getDefaultDetail2()
  const start = timeArray[0]
  const end = timeArray[1]
  if (start) {
    const startDjs = day_default(start)
    if (mode === 'range') {
      if (start && end) {
        const endDjs = day_default(end)
        detail.value.push(startDjs.toDate())
        detail.value.push(endDjs.toDate())
        detail.valueArray.push(startDjs.toArray().slice(0, 3))
        detail.valueArray.push(endDjs.toArray().slice(0, 3))
        if (start === end) {
          detail.label = startDjs.format('YYYY-MM-DD')
        } else {
          detail.label = [
            startDjs.format('MM-DD'),
            endDjs.format('MM-DD')
          ].join(' ~ ')
        }
        detail.rangeCount = Math.floor((end - start) / (24 * 3600 * 1e3)) + 1
      }
    } else {
      detail.value.push(startDjs.toDate())
      detail.valueArray.push(startDjs.toArray().slice(0, 3))
      detail.label = startDjs.format('YYYY-MM-DD')
      detail.rangeCount = 1
    }
  }
  return detail
}
function useHandlers(props, { mode }) {
  const parser2 = function (val) {
    if (props.parser) {
      return props.parser(val, mode).map(d => {
        return d.getTime()
      })
    }
    return valueParser(val, mode)
  }
  const formatter2 = function (valueArray) {
    const detail = detailFormatter(valueArray, mode)
    if (props.formatter) {
      const ret = props.formatter(
        valueArray.map(v => new Date(v)),
        mode
      )
      if (ret == null ? void 0 : ret.label) {
        detail.label = ret.label
        detail.value = ret.value
      } else {
        detail.value = ret
      }
    }
    return detail
  }
  return {
    parser: parser2,
    formatter: formatter2
  }
}

// vue:../Calendar/CalendarView.vue
import {
  renderList as _renderList9,
  Fragment as _Fragment9,
  openBlock as _openBlock35,
  createElementBlock as _createElementBlock28,
  toDisplayString as _toDisplayString16,
  normalizeClass as _normalizeClass26,
  createElementVNode as _createElementVNode23,
  createCommentVNode as _createCommentVNode18,
  createTextVNode as _createTextVNode7
} from 'vue'
var defaultWeekDays = ['0', '1', '2', '3', '4', '5', '6']
var _sfc_script36 = defineComponent36({
  name: 'fx-calendar-view',
  props: { ...commonProps3 },
  emits: {
    ...pickerValueEmits,
    select: calendarDetailValidator
  },
  setup(props, { emit }) {
    const mode = getEnumsValue(MODE_NAMES2, props.initialMode)
    const { formatter: formatter2, parser: parser2 } = useHandlers(props, {
      mode
    })
    const weekDays = ref23([])
    const months = reactive5([])
    let start = getDefaultSelectDay()
    let end = getDefaultSelectDay()
    function getDefaultSelectDay() {
      return {
        dateString: '',
        timestamp: 0,
        monthIndex: 0,
        dayIndex: 0
      }
    }
    function getSelectedInfo(timestamp) {
      for (let i = 0; i < months.length; i++) {
        for (let j = 0; j < months[i].days.length; j++) {
          const day = months[i].days[j]
          if (day.state !== 'disabled') {
            if (timestamp === day.timestamp) {
              return {
                dateString: day.dateString,
                timestamp,
                monthIndex: i,
                dayIndex: j
              }
            }
          }
        }
      }
      return null
    }
    function updateValue(val) {
      return updateOriginalValue(parser2(val))
    }
    function updateOriginalValue(timeArr) {
      if (!isSameArray(timeArr, [start.timestamp, end.timestamp])) {
        if (timeArr.length === 0) {
          setSelected('start', null)
          setSelected('end', null)
          updateStates()
        } else if (mode === 'range') {
          const _start = getSelectedInfo(timeArr[0])
          const _end = getSelectedInfo(timeArr[1])
          if (_start && _end) {
            const { rangeCount, hasDisabled } = getRangeInfo(_start, _end)
            if (hasDisabled) {
              printError2('The range of "modelValue" contains disabled days.')
            } else if (rangeCount > props.maxRange) {
              printError2(
                `The range of "modelValue" contains ${rangeCount} days, no more than ${props.maxRange} days.`
              )
            } else {
              start = _start
              end = _end
              updateStates()
            }
          } else {
            printError2(
              'The range of "modelValue" is not in the optional range.'
            )
          }
        } else {
          const select = getSelectedInfo(timeArr[0])
          if (select) {
            start = select
            setSelected('end', null)
            updateStates()
          } else {
            printError2(
              'The range of "modelValue" is not in the optional range.'
            )
          }
        }
      }
      return getDetail()
    }
    function setSelected(name, day) {
      if (day) {
        name === 'start' ? (start = day) : (end = day)
      } else {
        name === 'start'
          ? (start = getDefaultSelectDay())
          : (end = getDefaultSelectDay())
      }
    }
    function getState(timestamp) {
      let state = ''
      if (
        (mode === 'range' &&
          timestamp >= start.timestamp &&
          timestamp <= end.timestamp) ||
        timestamp === start.timestamp
      ) {
        state = 'selected'
      }
      if (mode === 'range' && state == 'selected') {
        if (timestamp === end.timestamp) {
          state = 'endSelected'
        } else if (timestamp === start.timestamp) {
          state = 'startSelected'
        }
      }
      return state
    }
    function getDayInfo(day, extend) {
      const dateString = day.format('YYYY-MM-DD')
      const state = extend.state
      let dayInfo = {
        topHighlight: false,
        topText:
          state === 'startSelected'
            ? locale.value.calendarSelectedStartText
            : state === 'endSelected'
            ? locale.value.calendarSelectedEndText
            : '',
        state,
        bottomHighlight: false,
        bottomText: '',
        text: day.date().toString(),
        dateString,
        timestamp: day.valueOf()
      }
      if (props.dayHandler) {
        dayInfo.date = day.toDate()
        dayInfo = props.dayHandler(Object.assign(dayInfo, extend))
        delete dayInfo.date
      }
      if (dayInfo.state === 'disabled' && !extend.state) {
        extend.state = 'disabled'
      }
      return Object.assign(dayInfo, extend, {
        dateString,
        timestamp: day.valueOf()
      })
    }
    function getFirstDayOfWeek() {
      return isInNumberRange(props.firstDayOfWeek, 0, 6)
        ? Math.round(props.firstDayOfWeek)
        : 0
    }
    function getStartMonth(day) {
      const month = {
        caption: day.format(locale.value.calendarMonthCaption),
        monthString: day.format('YYYY-MM'),
        days: [],
        startDay: day.date()
      }
      let day2 = day.startOf('month')
      for (let i = 0, len = day2.day() - getFirstDayOfWeek(); i < len; i++) {
        month.days.push({
          cover: true,
          text: '',
          state: 'disabled',
          dateString: '',
          timestamp: 0
        })
      }
      while (day2.date() < month.startDay) {
        month.days.push(getDayInfo(day2, { state: 'disabled' }))
        day2 = day2.add(1, 'day')
      }
      return month
    }
    function updateWeekDays() {
      let i = getFirstDayOfWeek()
      const newWeekDays = []
      let weekDay
      while (newWeekDays.length < 7) {
        weekDay = defaultWeekDays[i]
        newWeekDays.push(weekDay)
        i = (i + 1) % 7
      }
      weekDays.value = newWeekDays
    }
    let minTimestamp = 0
    let maxTimestamp = 0
    function updateOptions() {
      if (props.minDate instanceof Date) {
        minTimestamp = day_default(props.minDate).startOf('day').valueOf()
      } else {
        minTimestamp = day_default().startOf('day').valueOf()
      }
      if (props.maxDate instanceof Date) {
        if (props.maxDate.getTime() < minTimestamp) {
          printError2(
            'The value of "maxDate" cannot be less than the value of "minDate".'
          )
          maxTimestamp = day_default(minTimestamp)
            .add(DEFAULT_MONTH_RANGE, 'month')
            .valueOf()
        } else {
          maxTimestamp = day_default(props.maxDate).startOf('day').valueOf()
        }
      } else {
        maxTimestamp = day_default(minTimestamp)
          .add(DEFAULT_MONTH_RANGE, 'month')
          .valueOf()
      }
      updateWeekDays()
      const maxDay = day_default(maxTimestamp)
      const _months = []
      let day = day_default(minTimestamp)
      let monthKey = day.month()
      let month = getStartMonth(day)
      while (!day.isAfter(maxDay)) {
        if (day.month() !== monthKey) {
          monthKey = day.month()
          _months.push(month)
          month = getStartMonth(day)
        }
        const dayInfo = getDayInfo(day, {
          state: getState(day.valueOf())
        })
        month.days.push(dayInfo)
        day = day.add(1, 'day')
      }
      while (day.month() === monthKey) {
        month.days.push(
          getDayInfo(day, {
            state: 'disabled'
          })
        )
        day = day.add(1, 'day')
      }
      _months.push(month)
      months.splice(0, Infinity, ..._months)
    }
    function dayInfo2SelectDay(day, monthIndex, dayIndex) {
      return {
        dateString: day.dateString,
        timestamp: day.timestamp,
        state: day.state,
        monthIndex,
        dayIndex
      }
    }
    function onDaysClick(e) {
      const target = e.target
      let $day = null
      if (target.tagName === 'SPAN') {
        $day = target.parentElement
      } else if (target !== e.currentTarget) {
        $day = target
      }
      if (!$day) {
        return
      }
      const monthIndex = parseInt(e.currentTarget.dataset.index)
      const dayIndex = parseInt($day.dataset.index)
      const day = months[monthIndex].days[dayIndex]
      if (day.state === 'disabled') {
        return
      }
      if (mode === 'range') {
        if ((start.dateString && end.dateString) || !start.dateString) {
          setSelected('end', null)
        } else {
          if (
            day.timestamp > start.timestamp ||
            (props.allowSameDay && day.timestamp === start.timestamp)
          ) {
            const { rangeCount, hasDisabled } = getRangeInfo(start, {
              monthIndex,
              dayIndex
            })
            if (!hasDisabled) {
              if (rangeCount > props.maxRange) {
                showToast(
                  locale.value.calendarMaxRangeTips.replace(
                    '{{maxRange}}',
                    props.maxRange.toString()
                  )
                )
              } else {
                setSelected('end', dayInfo2SelectDay(day, monthIndex, dayIndex))
                updateStates()
                onSelect()
              }
              return
            }
          }
        }
      } else {
        setSelected('start', dayInfo2SelectDay(day, monthIndex, dayIndex))
        updateStates()
        onSelect()
        return
      }
      setSelected('start', dayInfo2SelectDay(day, monthIndex, dayIndex))
      updateStates()
    }
    function updateStates() {
      for (let i = 0; i < months.length; i++) {
        for (let j = 0; j < months[i].days.length; j++) {
          const day = months[i].days[j]
          if (day.state !== 'disabled') {
            const newState = getState(day.timestamp)
            if (newState !== day.state) {
              months[i].days[j] = getDayInfo(day_default(day.timestamp), {
                state: newState
              })
            }
          }
        }
      }
    }
    function onSelect() {
      emit('update:modelValue', getDetail().value)
      emit('change', getDetail().value)
      emit('select', getDetail())
    }
    function getDetail() {
      return formatter2([start.timestamp, end.timestamp])
    }
    function getRangeInfo(start2, end2) {
      let hasDisabled = false
      let rangeCount =
        start2.monthIndex === end2.monthIndex &&
        start2.dayIndex === end2.dayIndex
          ? 1
          : 2
      for (let i = start2.monthIndex; i <= end2.monthIndex; i++) {
        for (
          let j = i === start2.monthIndex ? start2.dayIndex + 1 : 0,
            len = i === end2.monthIndex ? end2.dayIndex : months[i].days.length;
          j < len;
          j++
        ) {
          const day = months[i].days[j]
          if (!day.cover) {
            if (day.state === 'disabled') {
              hasDisabled = true
            } else {
              rangeCount++
            }
          }
        }
      }
      return {
        hasDisabled,
        rangeCount
      }
    }
    let updateOptionsTimer
    function reset() {
      clearTimeout(updateOptionsTimer)
      updateOptionsTimer = window.setTimeout(() => {
        setSelected('start', null)
        setSelected('end', null)
        updateOptions()
        const values = [start.timestamp, end.timestamp]
        updateOriginalValue(values)
      }, 17)
    }
    watch17([() => props.minDate, () => props.maxDate], reset, {
      deep: true
    })
    watch17(
      () => props.modelValue,
      val => updateValue(val)
    )
    watch17(locale, () => updateOptions())
    updateOptions()
    !isEmpty(props.modelValue) && updateValue(props.modelValue)
    return {
      mode,
      weekDays,
      months,
      onDaysClick,
      getDetail,
      updateValue,
      locale
    }
  }
})
var _hoisted_126 = { class: 'fx-calendar-view' }
var _hoisted_217 = { class: 'fx-calendar-view_header' }
var _hoisted_313 = { class: 'fx-calendar-view_weekdays' }
var _hoisted_49 = { class: 'fx-calendar-view_body' }
var _hoisted_54 = { class: 'fx-calendar-view_month-caption' }
var _hoisted_6 = ['data-index']
var _hoisted_7 = ['data-index']
function render35(_ctx, _cache) {
  return (
    _openBlock35(),
    _createElementBlock28('div', _hoisted_126, [
      _createElementVNode23('div', _hoisted_217, [
        _createElementVNode23('div', _hoisted_313, [
          (_openBlock35(true),
          _createElementBlock28(
            _Fragment9,
            null,
            _renderList9(_ctx.weekDays, weekDay => {
              return (
                _openBlock35(),
                _createElementBlock28(
                  'span',
                  {
                    class: _normalizeClass26([
                      'fx-calendar-view_weekday',
                      { highlight: weekDay === '0' || weekDay === '6' }
                    ]),
                    key: weekDay
                  },
                  _toDisplayString16(_ctx.locale.calendarWeekDayTexts[weekDay]),
                  3
                )
              )
            }),
            128
          ))
        ])
      ]),
      _createElementVNode23('div', _hoisted_49, [
        (_openBlock35(true),
        _createElementBlock28(
          _Fragment9,
          null,
          _renderList9(_ctx.months, (month, monthIndex) => {
            return (
              _openBlock35(),
              _createElementBlock28(
                _Fragment9,
                {
                  key: month.caption
                },
                [
                  _createElementVNode23(
                    'div',
                    _hoisted_54,
                    _toDisplayString16(month.caption),
                    1
                  ),
                  _createElementVNode23(
                    'div',
                    {
                      class: 'fx-calendar-view_days',
                      'data-index': monthIndex,
                      onClick:
                        _cache[0] ||
                        (_cache[0] = (...args) =>
                          _ctx.onDaysClick && _ctx.onDaysClick(...args))
                    },
                    [
                      (_openBlock35(true),
                      _createElementBlock28(
                        _Fragment9,
                        null,
                        _renderList9(month.days, (day, dayIndex) => {
                          return (
                            _openBlock35(),
                            _createElementBlock28(
                              'div',
                              {
                                class: _normalizeClass26([
                                  'fx-calendar-view_day',
                                  {
                                    disabled: day.state === 'disabled',
                                    selected:
                                      day.state === 'selected' ||
                                      day.state === 'startSelected' ||
                                      day.state === 'endSelected',
                                    'in-range':
                                      _ctx.mode === 'range' &&
                                      day.state === 'selected'
                                  }
                                ]),
                                key: dayIndex,
                                'data-index': dayIndex
                              },
                              [
                                day.topText
                                  ? (_openBlock35(),
                                    _createElementBlock28(
                                      'span',
                                      {
                                        key: 0,
                                        class: _normalizeClass26([
                                          'fx-calendar-view_day-top-text',
                                          { highlight: day.topHighlight }
                                        ])
                                      },
                                      _toDisplayString16(day.topText),
                                      3
                                    ))
                                  : _createCommentVNode18('v-if', true),
                                _createTextVNode7(
                                  ' ' + _toDisplayString16(day.text) + ' ',
                                  1
                                ),
                                day.bottomText
                                  ? (_openBlock35(),
                                    _createElementBlock28(
                                      'span',
                                      {
                                        key: 1,
                                        class: _normalizeClass26([
                                          'fx-calendar-view_day-bottom-text',
                                          { highlight: day.bottomHighlight }
                                        ])
                                      },
                                      _toDisplayString16(day.bottomText),
                                      3
                                    ))
                                  : _createCommentVNode18('v-if', true)
                              ],
                              10,
                              _hoisted_7
                            )
                          )
                        }),
                        128
                      ))
                    ],
                    8,
                    _hoisted_6
                  )
                ],
                64
              )
            )
          }),
          128
        ))
      ])
    ])
  )
}
_sfc_script36.render = render35
_sfc_script36.__file = 'src/Calendar/CalendarView.vue'

// src/CalendarView/index.ts
var install35 = withInstall(_sfc_script36)
var CalendarView_default = _sfc_script36

// vue:../Calendar/CalendarPopup.vue
import {
  defineComponent as defineComponent37,
  onMounted as onMounted11,
  ref as ref24
} from 'vue'
import {
  resolveComponent as _resolveComponent23,
  createVNode as _createVNode13,
  toDisplayString as _toDisplayString17,
  createTextVNode as _createTextVNode8,
  withCtx as _withCtx7,
  openBlock as _openBlock36,
  createElementBlock as _createElementBlock29,
  createCommentVNode as _createCommentVNode19,
  createBlock as _createBlock20
} from 'vue'
var _sfc_script37 = defineComponent37({
  name: 'fx-calendar-popup',
  components: {
    CalendarView: _sfc_script36,
    Drawer: _sfc_script8,
    Button: _sfc_script3
  },
  props: {
    ...commonProps3,
    ...popupExtendProps,
    title: {
      type: String,
      default: null
    },
    showConfirm: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    ...pickerPopupEmits,
    confirm: calendarDetailValidator
  },
  setup(props, ctx) {
    const { emit } = ctx
    const calendarView = ref24()
    const valueSize = ref24(0)
    let detail = getDefaultDetail2()
    const popup = usePopupExtend(ctx)
    function onSelect(_detail) {
      updateDetail(_detail)
      if (!props.showConfirm) {
        confirm()
      }
    }
    function onConfirmClick() {
      confirm()
    }
    function confirm() {
      if (!calendarView.value) {
        return
      }
      updateDetail(calendarView.value.getDetail())
      emit('update:modelValue', getDetail().value)
      emit('change', getDetail().value)
      popup.customConfirm(getDetail())
    }
    function getDetail() {
      return cloneDetail(detail)
    }
    function updateDetail(_detail) {
      detail = _detail
      valueSize.value = detail.valueArray.length
    }
    function updateValue(val) {
      return calendarView.value
        ? calendarView.value.updateValue(val)
        : getDefaultDetail2()
    }
    onMounted11(
      () => calendarView.value && updateDetail(calendarView.value.getDetail())
    )
    return {
      ...popup,
      valueSize,
      calendarView,
      onSelect,
      onConfirmClick,
      updateValue,
      locale
    }
  }
})
var _hoisted_127 = {
  key: 0,
  class: 'fx-calendar-popup_confirm'
}
function render36(_ctx, _cache) {
  const _component_CalendarView = _resolveComponent23('CalendarView')
  const _component_Button = _resolveComponent23('Button')
  const _component_Drawer = _resolveComponent23('Drawer')
  return (
    _openBlock36(),
    _createBlock20(
      _component_Drawer,
      {
        class: 'fx-calendar-popup',
        placement: 'bottom',
        visible: _ctx.visible,
        title: _ctx.title,
        showClose: _ctx.showClose,
        onVisibleStateChange: _ctx.onVisibleStateChange,
        onConfirm: _ctx.onConfirm,
        onCancel: _ctx.onCancel,
        'onUpdate:visible': _ctx.onUpdateVisible,
        ref: 'popup'
      },
      {
        default: _withCtx7(() => [
          _createVNode13(
            _component_CalendarView,
            {
              modelValue: _ctx.modelValue,
              minDate: _ctx.minDate,
              maxDate: _ctx.maxDate,
              initialMode: _ctx.initialMode,
              allowSameDay: _ctx.allowSameDay,
              maxRange: _ctx.maxRange,
              dayHandler: _ctx.dayHandler,
              firstDayOfWeek: _ctx.firstDayOfWeek,
              formatter: _ctx.formatter,
              parser: _ctx.parser,
              ref: 'calendarView',
              onSelect: _ctx.onSelect
            },
            null,
            8,
            [
              'modelValue',
              'minDate',
              'maxDate',
              'initialMode',
              'allowSameDay',
              'maxRange',
              'dayHandler',
              'firstDayOfWeek',
              'formatter',
              'parser',
              'onSelect'
            ]
          ),
          _ctx.showConfirm
            ? (_openBlock36(),
              _createElementBlock29('div', _hoisted_127, [
                _createVNode13(
                  _component_Button,
                  {
                    type: 'primary',
                    onClick: _ctx.onConfirmClick,
                    disabled: _ctx.valueSize == 0
                  },
                  {
                    default: _withCtx7(() => [
                      _createTextVNode8(
                        _toDisplayString17(_ctx.locale.calendarConfirmText),
                        1
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['onClick', 'disabled']
                )
              ]))
            : _createCommentVNode19('v-if', true)
        ]),
        _: 1
      },
      8,
      [
        'visible',
        'title',
        'showClose',
        'onVisibleStateChange',
        'onConfirm',
        'onCancel',
        'onUpdate:visible'
      ]
    )
  )
}
_sfc_script37.render = render36
_sfc_script37.__file = 'src/Calendar/CalendarPopup.vue'

// src/CalendarPopup/index.ts
var showCalendar = createShowPopup({
  apiName: 'showCalendar',
  component: _sfc_script37,
  createHook: createConfirmHook
})
var CalendarPopup_default = _sfc_script37
var install36 = withInstall(_sfc_script37)

// vue:./Calendar.vue
import {
  defineComponent as defineComponent38,
  ref as ref25,
  watch as watch18
} from 'vue'
import {
  resolveComponent as _resolveComponent24,
  createVNode as _createVNode14,
  openBlock as _openBlock37,
  createBlock as _createBlock21,
  createCommentVNode as _createCommentVNode20,
  normalizeClass as _normalizeClass27,
  createElementBlock as _createElementBlock30
} from 'vue'
var _sfc_script38 = defineComponent38({
  name: 'fx-calendar',
  components: { SelectorField: _sfc_script27, CalendarPopup: _sfc_script37 },
  props: {
    ...commonProps3,
    ...pickerProps,
    showConfirm: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  emits: { ...pickerEmits },
  setup(props, ctx) {
    const { emit } = ctx
    const isInitPopup = ref25(false)
    const popupVisible = ref25(true)
    const fieldLabel = ref25('')
    const fieldValue = ref25('')
    const popup = ref25()
    const root = ref25()
    const mode = getEnumsValue(MODE_NAMES2, props.initialMode)
    const { formatter: formatter2, parser: parser2 } = useHandlers(props, {
      mode
    })
    let detail = getDefaultDetail2()
    let _changeValue = null
    function updateValue(val) {
      if (popup.value) {
        return updateDetail(popup.value.updateValue(val))
      } else {
        return updateDetail(formatter2(parser2(val)))
      }
    }
    function updateDetail(_detail) {
      detail = _detail
      fieldLabel.value = _detail.label
      fieldValue.value =
        detail.value != null
          ? detail.valueArray.map(v => v.join('-')).join(',')
          : ''
      return getDetail()
    }
    function onFieldClick() {
      if (!props.disabled) {
        if (!isInitPopup.value) {
          isInitPopup.value = true
        } else {
          popupVisible.value = true
        }
      }
    }
    function getDetail() {
      return cloneDetail(detail)
    }
    function onConfirm(_detail) {
      if (isSameValue(detail.value, _detail.value)) {
        return
      }
      updateDetail(_detail)
      _changeValue = getDetail().value
      emit('update:modelValue', getDetail().value)
      emit('change', getDetail().value)
    }
    watch18(
      () => props.modelValue,
      val => {
        if (_changeValue != null && isSameValue(val, _changeValue)) {
          updateValue(val)
        }
        _changeValue = null
      }
    )
    watch18([isInitPopup, popupVisible], ([isInit, visible]) => {
      if (isInit && visible) {
        emit('focus', { type: 'focus' })
      } else if (!visible) {
        emit('blur', { type: 'blur' })
      }
    })
    updateValue(props.modelValue)
    return {
      root,
      isInitPopup,
      popupVisible,
      fieldLabel,
      fieldValue,
      popup,
      onFieldClick,
      onConfirm
    }
  }
})
function render37(_ctx, _cache) {
  const _component_SelectorField = _resolveComponent24('SelectorField')
  const _component_CalendarPopup = _resolveComponent24('CalendarPopup')
  return (
    _openBlock37(),
    _createElementBlock30(
      'div',
      {
        class: _normalizeClass27(['fx-calendar', { disabled: _ctx.disabled }]),
        ref: 'root'
      },
      [
        _createVNode14(
          _component_SelectorField,
          {
            label: _ctx.fieldLabel,
            value: _ctx.fieldValue,
            disabled: _ctx.disabled,
            name: _ctx.name,
            placeholder: _ctx.placeholder,
            onFieldClick: _ctx.onFieldClick
          },
          null,
          8,
          ['label', 'value', 'disabled', 'name', 'placeholder', 'onFieldClick']
        ),
        _ctx.isInitPopup
          ? (_openBlock37(),
            _createBlock21(
              _component_CalendarPopup,
              {
                key: 0,
                modelValue: _ctx.modelValue,
                minDate: _ctx.minDate,
                maxDate: _ctx.maxDate,
                initialMode: _ctx.initialMode,
                allowSameDay: _ctx.allowSameDay,
                maxRange: _ctx.maxRange,
                dayHandler: _ctx.dayHandler,
                firstDayOfWeek: _ctx.firstDayOfWeek,
                title: _ctx.placeholder,
                formatter: _ctx.formatter,
                parser: _ctx.parser,
                visible: _ctx.popupVisible,
                'onUpdate:visible':
                  _cache[0] ||
                  (_cache[0] = $event => (_ctx.popupVisible = $event)),
                onConfirm: _ctx.onConfirm,
                ref: 'popup'
              },
              null,
              8,
              [
                'modelValue',
                'minDate',
                'maxDate',
                'initialMode',
                'allowSameDay',
                'maxRange',
                'dayHandler',
                'firstDayOfWeek',
                'title',
                'formatter',
                'parser',
                'visible',
                'onConfirm'
              ]
            ))
          : _createCommentVNode20('v-if', true)
      ],
      2
    )
  )
}
_sfc_script38.render = render37
_sfc_script38.__file = 'src/Calendar/Calendar.vue'

// src/Calendar/index.ts
var Calendar_default = _sfc_script38
var install37 = withInstall(_sfc_script38)

// vue:./SearchBar.vue
import {
  defineComponent as defineComponent41,
  onBeforeMount as onBeforeMount2,
  onBeforeUnmount as onBeforeUnmount10,
  ref as ref27,
  watch as watch19
} from 'vue'

// vue:./Cell.vue
import {
  computed as computed21,
  defineComponent as defineComponent39
} from 'vue'
import {
  renderSlot as _renderSlot18,
  openBlock as _openBlock38,
  createElementBlock as _createElementBlock31,
  createCommentVNode as _createCommentVNode21,
  resolveComponent as _resolveComponent25,
  createVNode as _createVNode15,
  toDisplayString as _toDisplayString18,
  createTextVNode as _createTextVNode9,
  createElementVNode as _createElementVNode24,
  createBlock as _createBlock22,
  normalizeClass as _normalizeClass28
} from 'vue'
var LINK_ICON_NAMES = ['right', 'up', 'down', 'left']
var _sfc_script39 = defineComponent39({
  name: 'fx-cell',
  components: { Icon: _sfc_script2 },
  props: {
    icon: {
      type: [String, Object],
      validator: iconValidator
    },
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    clickable: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    },
    arrowDirection: {
      type: String,
      validator: createEnumsValidator(LINK_ICON_NAMES),
      default: LINK_ICON_NAMES[0]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    click: emitEventValidator
  },
  setup(props, { emit }) {
    const linkIconName = computed21(() => {
      return `${capitalize(
        getEnumsValue(LINK_ICON_NAMES, props.arrowDirection)
      )}Outlined`
    })
    function onClick(e) {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return {
      linkIconName,
      onClick
    }
  }
})
var _hoisted_128 = { class: 'fx-cell_header' }
var _hoisted_218 = {
  key: 0,
  class: 'fx-cell_icon'
}
var _hoisted_314 = {
  key: 1,
  class: 'fx-cell_icon'
}
var _hoisted_410 = {
  key: 2,
  class: 'fx-cell_label'
}
var _hoisted_55 = {
  key: 0,
  class: 'fx-cell_required'
}
var _hoisted_62 = { class: 'fx-cell_content' }
var _hoisted_72 = {
  key: 0,
  class: 'fx-cell_body'
}
function render38(_ctx, _cache) {
  const _component_Icon = _resolveComponent25('Icon')
  return (
    _openBlock38(),
    _createElementBlock31(
      'div',
      {
        class: _normalizeClass28([
          'fx-cell fx-horizontal-hairline',
          {
            clickable: _ctx.clickable || _ctx.isLink,
            'has--icon': _ctx.$slots.icon || _ctx.icon,
            disabled: !!_ctx.disabled
          }
        ]),
        onClick:
          _cache[0] ||
          (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      },
      [
        _createElementVNode24('div', _hoisted_128, [
          _ctx.$slots.icon
            ? (_openBlock38(),
              _createElementBlock31('div', _hoisted_218, [
                _renderSlot18(_ctx.$slots, 'icon')
              ]))
            : _ctx.icon
            ? (_openBlock38(),
              _createElementBlock31('div', _hoisted_314, [
                _createVNode15(_component_Icon, { icon: _ctx.icon }, null, 8, [
                  'icon'
                ])
              ]))
            : _createCommentVNode21('v-if', true),
          _ctx.label
            ? (_openBlock38(),
              _createElementBlock31('div', _hoisted_410, [
                _createTextVNode9(_toDisplayString18(_ctx.label) + ' ', 1),
                _ctx.required
                  ? (_openBlock38(),
                    _createElementBlock31('span', _hoisted_55, '*'))
                  : _createCommentVNode21('v-if', true)
              ]))
            : _createCommentVNode21('v-if', true),
          _createElementVNode24('div', _hoisted_62, [
            _renderSlot18(_ctx.$slots, 'default', {}, () => [
              _createTextVNode9(_toDisplayString18(_ctx.content), 1)
            ])
          ]),
          _ctx.isLink
            ? (_openBlock38(),
              _createBlock22(
                _component_Icon,
                {
                  key: 3,
                  class: 'fx-cell_link-icon',
                  icon: _ctx.linkIconName
                },
                null,
                8,
                ['icon']
              ))
            : _createCommentVNode21('v-if', true)
        ]),
        _ctx.description
          ? (_openBlock38(),
            _createElementBlock31(
              'div',
              _hoisted_72,
              _toDisplayString18(_ctx.description),
              1
            ))
          : _createCommentVNode21('v-if', true)
      ],
      2
    )
  )
}
_sfc_script39.render = render38
_sfc_script39.__file = 'src/Cell/Cell.vue'

// src/Cell/index.ts
var install38 = withInstall(_sfc_script39)
var Cell_default = _sfc_script39

// vue:./Tag.vue
import {
  computed as computed22,
  defineComponent as defineComponent40,
  ref as ref26
} from 'vue'

// src/hooks/use-long-press.ts
import {
  onBeforeUnmount as onBeforeUnmount9,
  onMounted as onMounted12
} from 'vue'
function useLongPress(el, callback) {
  let longPressOff
  onMounted12(() => {
    longPressOff = addLongPressEvent(el.value, callback)
  })
  onBeforeUnmount9(() => longPressOff())
}

// vue:./Tag.vue
import {
  renderSlot as _renderSlot19,
  resolveComponent as _resolveComponent26,
  withModifiers as _withModifiers3,
  normalizeClass as _normalizeClass29,
  openBlock as _openBlock39,
  createBlock as _createBlock23,
  createCommentVNode as _createCommentVNode22,
  normalizeStyle as _normalizeStyle16,
  createElementBlock as _createElementBlock32
} from 'vue'
var TAG_PATTERN_TYPES = ['light', 'dark', 'plain']
var _sfc_script40 = defineComponent40({
  name: 'fx-tag',
  components: { Icon: _sfc_script2 },
  props: {
    size: {
      type: String,
      validator: createEnumsValidator(SIZE_TYPES)
    },
    type: {
      type: String,
      validator: createEnumsValidator(STATE_TYPES)
    },
    pattern: {
      type: String,
      validator: createEnumsValidator(TAG_PATTERN_TYPES)
    },
    closable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  emits: {
    close: emitTypeValidator,
    click: emitTypeValidator,
    'long-press': emitTypeValidator
  },
  setup(props, { emit }) {
    const root = ref26()
    function onClose() {
      if (!props.disabled) {
        emit('close', {
          type: 'close'
        })
      }
    }
    const classNames = computed22(() => {
      const { hasColor, isDark: isDark2 } = getColorObject(props.color)
      return [
        'type--' +
          (hasColor ? STATE_TYPES[1] : getEnumsValue(STATE_TYPES, props.type)),
        'size--' + getEnumsValue(SIZE_TYPES, props.size),
        'pattern--' +
          (hasColor && props.pattern !== 'plain'
            ? isDark2
              ? 'dark'
              : 'light'
            : getEnumsValue(TAG_PATTERN_TYPES, props.pattern))
      ]
    })
    const styles = computed22(() => {
      const obj2 = {}
      const colorObj = getColorObject(props.color)
      if (colorObj.hasColor) {
        obj2[`--fx-color`] = colorObj.varColor
        obj2[`--fx-black-color`] = colorObj.varBlackColor
      }
      return obj2
    })
    useLongPress(root, e => {
      if (!props.disabled) {
        emit(e.type, e)
      }
    })
    return {
      root,
      classNames,
      noop,
      onClose,
      styles
    }
  }
})
function render39(_ctx, _cache) {
  const _component_Icon = _resolveComponent26('Icon')
  return (
    _openBlock39(),
    _createElementBlock32(
      'div',
      {
        class: _normalizeClass29([
          'fx-tag',
          [_ctx.classNames, { disabled: !!_ctx.disabled }]
        ]),
        style: _normalizeStyle16(_ctx.styles),
        ref: 'root'
      },
      [
        _renderSlot19(_ctx.$slots, 'default'),
        _ctx.closable
          ? (_openBlock39(),
            _createBlock23(
              _component_Icon,
              {
                key: 0,
                icon: 'CloseOutlined',
                class: _normalizeClass29({ disabled: !!_ctx.disabled }),
                onMousedown: _withModifiers3(_ctx.noop, ['stop']),
                onTouchstart: _withModifiers3(_ctx.noop, ['stop']),
                onClick: _ctx.onClose
              },
              null,
              8,
              ['class', 'onMousedown', 'onTouchstart', 'onClick']
            ))
          : _createCommentVNode22('v-if', true)
      ],
      6
    )
  )
}
_sfc_script40.render = render39
_sfc_script40.__file = 'src/Tag/Tag.vue'

// src/Tag/index.ts
var install39 = withInstall(_sfc_script40)
var Tag_default = _sfc_script40

// vue:./SearchBar.vue
import {
  resolveComponent as _resolveComponent27,
  createVNode as _createVNode16,
  normalizeClass as _normalizeClass30,
  withCtx as _withCtx8,
  createElementVNode as _createElementVNode25,
  toDisplayString as _toDisplayString19,
  createTextVNode as _createTextVNode10,
  openBlock as _openBlock40,
  createBlock as _createBlock24,
  createCommentVNode as _createCommentVNode23,
  withModifiers as _withModifiers4,
  normalizeStyle as _normalizeStyle17,
  renderList as _renderList10,
  Fragment as _Fragment10,
  createElementBlock as _createElementBlock33
} from 'vue'
var emitValidator = (payload, setSuggestList) =>
  payload &&
  typeof payload.text === 'string' &&
  typeof setSuggestList === 'function'
var _sfc_script41 = defineComponent41({
  name: 'fx-search-bar',
  components: {
    Icon: _sfc_script2,
    Input: _sfc_script20,
    Button: _sfc_script3,
    Dropdown: _sfc_script10,
    Cell: _sfc_script39,
    Tag: _sfc_script40
  },
  props: {
    ghost: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 100
    },
    background: {
      type: String,
      default: null
    },
    placeholders: {
      type: [String, Array],
      validator: val => typeof val === 'string' || isStringArray(val),
      default: () => []
    },
    placeholderInterval: {
      type: Number,
      default: 5e3
    }
  },
  emits: {
    cancel: emitEventValidator,
    input: emitValidator,
    focus: emitValidator,
    blur: emitValidator,
    search: payload =>
      payload &&
      typeof payload.text === 'string' &&
      typeof payload.source === 'string',
    'field-click': payload => payload && typeof payload.text === 'string'
  },
  setup(props, { emit }) {
    const placeholder = ref27('')
    const searchText = ref27('')
    const enableDropdown = ref27(false)
    const suggestVisible = ref27(false)
    const suggestList = ref27([])
    function proxyEvent(e) {
      emitHook(e.type, searchText.value)
    }
    function onInput(text) {
      emitHook('input', text)
    }
    const emitHook = (type, text) => {
      emit(
        type,
        {
          text
        },
        res => {
          setSuggestList(res, text !== searchText.value)
        }
      )
    }
    function setSuggestList(res, expired) {
      if (expired) {
        return
      }
      const newList = []
      if (Array.isArray(res)) {
        res.forEach(v => {
          if (typeof v === 'string' || typeof v === 'number') {
            newList.push({
              text: v.toString(),
              tags: []
            })
          } else if (v) {
            if (typeof v.text === 'string' || typeof v.text === 'number') {
              v.text = v.text.toString()
              v.tags = isStringArray(v.tags) ? v.tags : []
              newList.push(v)
            }
          }
        })
      }
      suggestList.value = newList
      if (newList.length > 0) {
        enableDropdown.value = true
        suggestVisible.value = true
      } else {
        suggestVisible.value = false
      }
    }
    function onSearch(text, source = 'search') {
      suggestVisible.value = false
      if (text === '' && placeholder.value) {
        searchText.value = text = placeholder.value
      }
      emit('search', {
        text,
        source
      })
    }
    function onSuggestItemClick(text) {
      searchText.value = text.toString()
      onSearch(text.toString(), 'suggest')
    }
    function onCancel(e) {
      emit('cancel', e)
    }
    function onClick() {
      emit('field-click', {
        text: searchText.value || placeholder.value || ''
      })
    }
    let phTimer
    let phIndex = 0
    let phs = []
    let isTimerReady = false
    const phsStart = () => {
      phsStop()
      if (isTimerReady && phs.length > 1) {
        phTimer = window.setTimeout(() => {
          phIndex = (phIndex + 1) % phs.length
          placeholder.value = phs[phIndex]
          phsStart()
        }, props.placeholderInterval)
      }
    }
    const phsStop = () => clearTimeout(phTimer)
    watch19(
      () => props.placeholders,
      val => {
        phsStop()
        if (typeof val === 'string') {
          placeholder.value = val
          phs = [val]
        } else if (isStringArray(val) && val.length > 0) {
          phIndex = 0
          placeholder.value = val[phIndex]
          phs = val
          phsStart()
        } else {
          placeholder.value = ''
          phs = []
        }
      },
      {
        deep: true,
        immediate: true
      }
    )
    onBeforeMount2(() => {
      isTimerReady = true
      phsStart()
    })
    onBeforeUnmount10(() => phsStop())
    return {
      placeholder,
      enableDropdown,
      suggestVisible,
      suggestList,
      searchText,
      proxyEvent,
      onInput,
      onSearch,
      onSuggestItemClick,
      onCancel,
      onClick,
      locale,
      setSuggestList: res => setSuggestList(res, false)
    }
  }
})
var _hoisted_129 = { class: 'fx-search' }
var _hoisted_219 = /* @__PURE__ */ _createElementVNode25(
  'button',
  { class: 'fx-search_button' },
  'Search',
  -1
)
var _hoisted_315 = { class: 'fx-search_suggest-list' }
function render40(_ctx, _cache) {
  const _component_Icon = _resolveComponent27('Icon')
  const _component_Input = _resolveComponent27('Input')
  const _component_Button = _resolveComponent27('Button')
  const _component_Tag = _resolveComponent27('Tag')
  const _component_Cell = _resolveComponent27('Cell')
  const _component_Dropdown = _resolveComponent27('Dropdown')
  return (
    _openBlock40(),
    _createElementBlock33('div', _hoisted_129, [
      _createElementVNode25(
        'form',
        {
          class: _normalizeClass30([
            'fx-search_inner',
            { 'has--cancel': _ctx.showCancel }
          ]),
          onSubmit:
            _cache[1] ||
            (_cache[1] = _withModifiers4(
              $event => _ctx.onSearch(_ctx.searchText),
              ['prevent']
            )),
          ref: 'inner',
          style: _normalizeStyle17({ background: _ctx.background })
        },
        [
          _createVNode16(
            _component_Input,
            {
              class: _normalizeClass30([
                'fx-search_field',
                { ghost: !!_ctx.ghost }
              ]),
              placeholder: _ctx.placeholder,
              type: 'search',
              disabled: _ctx.readonly,
              modelValue: _ctx.searchText,
              'onUpdate:modelValue':
                _cache[0] || (_cache[0] = $event => (_ctx.searchText = $event)),
              focus: _ctx.focus,
              maxlength: _ctx.maxlength,
              showClear: '',
              onInput: _ctx.onInput,
              onFocus: _ctx.proxyEvent,
              onBlur: _ctx.proxyEvent,
              onClick: _ctx.onClick
            },
            {
              prepend: _withCtx8(() => [
                _createVNode16(_component_Icon, { icon: 'SearchOutlined' })
              ]),
              _: 1
            },
            8,
            [
              'class',
              'placeholder',
              'disabled',
              'modelValue',
              'focus',
              'maxlength',
              'onInput',
              'onFocus',
              'onBlur',
              'onClick'
            ]
          ),
          _hoisted_219,
          _ctx.showCancel
            ? (_openBlock40(),
              _createBlock24(
                _component_Button,
                {
                  key: 0,
                  class: 'fx-search_cancel-button',
                  size: 'large',
                  type: 'default',
                  pattern: 'borderless',
                  ghost: _ctx.ghost,
                  transparent: !_ctx.ghost,
                  onClick: _ctx.onCancel
                },
                {
                  default: _withCtx8(() => [
                    _createTextVNode10(
                      _toDisplayString19(_ctx.locale.searchBarCancelText),
                      1
                    )
                  ]),
                  _: 1
                },
                8,
                ['ghost', 'transparent', 'onClick']
              ))
            : _createCommentVNode23('v-if', true)
        ],
        38
      ),
      _ctx.enableDropdown
        ? (_openBlock40(),
          _createBlock24(
            _component_Dropdown,
            {
              key: 0,
              selector: _ctx.$refs.inner,
              visible: _ctx.suggestVisible,
              'onUpdate:visible':
                _cache[2] ||
                (_cache[2] = $event => (_ctx.suggestVisible = $event))
            },
            {
              default: _withCtx8(({ height }) => [
                _createElementVNode25(
                  'div',
                  {
                    class: 'fx-search_suggest fx-horizontal-hairline',
                    style: _normalizeStyle17({ height: height + 'px' })
                  },
                  [
                    _createElementVNode25('div', _hoisted_315, [
                      (_openBlock40(true),
                      _createElementBlock33(
                        _Fragment10,
                        null,
                        _renderList10(_ctx.suggestList, item => {
                          return (
                            _openBlock40(),
                            _createBlock24(
                              _component_Cell,
                              {
                                key: item.text,
                                label: item.text.toString(),
                                class: 'fx-search_suggest-item',
                                clickable: '',
                                onClick: $event =>
                                  _ctx.onSuggestItemClick(item.text)
                              },
                              {
                                default: _withCtx8(() => [
                                  (_openBlock40(true),
                                  _createElementBlock33(
                                    _Fragment10,
                                    null,
                                    _renderList10(item.tags, tag => {
                                      return (
                                        _openBlock40(),
                                        _createBlock24(
                                          _component_Tag,
                                          { key: tag },
                                          {
                                            default: _withCtx8(() => [
                                              _createTextVNode10(
                                                _toDisplayString19(tag),
                                                1
                                              )
                                            ]),
                                            _: 2
                                          },
                                          1024
                                        )
                                      )
                                    }),
                                    128
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              ['label', 'onClick']
                            )
                          )
                        }),
                        128
                      ))
                    ])
                  ],
                  4
                )
              ]),
              _: 1
            },
            8,
            ['selector', 'visible']
          ))
        : _createCommentVNode23('v-if', true)
    ])
  )
}
_sfc_script41.render = render40
_sfc_script41.__file = 'src/SearchBar/SearchBar.vue'

// src/SearchBar/index.ts
var install40 = withInstall(_sfc_script41)
var SearchBar_default = _sfc_script41

// vue:./NumberKeyboard.vue
import {
  computed as computed23,
  defineComponent as defineComponent42
} from 'vue'
import {
  renderList as _renderList11,
  Fragment as _Fragment11,
  openBlock as _openBlock41,
  createElementBlock as _createElementBlock34,
  resolveComponent as _resolveComponent28,
  createBlock as _createBlock25,
  createCommentVNode as _createCommentVNode24,
  toDisplayString as _toDisplayString20,
  createTextVNode as _createTextVNode11,
  createElementVNode as _createElementVNode26,
  normalizeClass as _normalizeClass31,
  createVNode as _createVNode17,
  withModifiers as _withModifiers5,
  withCtx as _withCtx9
} from 'vue'
var TYPE_NAMES3 = ['default', 'rightColumn']
var _sfc_script42 = defineComponent42({
  name: 'fx-number-keyboard',
  components: { Drawer: _sfc_script8, Icon: _sfc_script2 },
  props: {
    ...popupExtendProps,
    modelValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    },
    customKey: {
      type: [Array, String],
      default: () => []
    }
  },
  emits: {
    ...popupEmits,
    ...formStringValueEmits,
    delete: payload => payload && typeof payload.deleteKey === 'string',
    close: payload => payload && typeof payload.source === 'string'
  },
  setup(props, ctx) {
    const { emit } = ctx
    let cacheValue = ''
    const backspaceItem = {
      text: 'backspace',
      type: 'backspace',
      icon: 'BackspaceOutlined'
    }
    const popup = usePopupExtend(ctx)
    const onVisibleStateChange2 = e => {
      popup.onVisibleStateChange(e)
      if (e.state === 'show') {
        cacheValue =
          (typeof props.modelValue === 'string' && props.modelValue) || ''
      }
    }
    const bodyClasses = computed23(() => {
      return [
        `type--${getEnumsValue(TYPE_NAMES3, props.type)}`,
        { 'has--header': showHeaderConfirm.value || props.title }
      ]
    })
    const showHeaderConfirm = computed23(() => {
      return (
        props.type !== 'rightColumn' &&
        (typeof props.customKey === 'string' ||
          (isStringArray(props.customKey) && props.customKey.length > 0))
      )
    })
    const numberList = computed23(() => {
      const list = []
      for (let i = 1; i <= 9; i++) {
        list.push({
          text: i.toString(),
          type: 'text'
        })
      }
      const customKey =
        typeof props.customKey === 'string'
          ? [props.customKey]
          : isStringArray(props.customKey)
          ? props.customKey
          : []
      if (props.type === 'rightColumn') {
        if (customKey.length > 1) {
          list.push(
            {
              text: customKey[0],
              type: 'text'
            },
            { text: '0', type: 'text' },
            {
              text: customKey[1],
              type: 'text'
            }
          )
        } else if (customKey.length > 0) {
          list.push(
            { text: '0', type: 'text', span: 2 },
            {
              text: customKey[0],
              type: 'text'
            }
          )
        } else {
          list.push({ text: '0', type: 'text', span: 3 })
        }
      } else {
        if (customKey.length > 0) {
          list.push(
            {
              text: customKey[0],
              type: 'text'
            },
            { text: '0', type: 'text' }
          )
        } else {
          list.push(
            {
              text: 'confirm',
              type: 'confirm',
              icon: 'KeyboardOutlined'
            },
            { text: '0', type: 'text' }
          )
        }
        list.push(backspaceItem)
      }
      return list
    })
    function onNumberClick(item) {
      if (item.type === 'text') {
        cacheValue += item.text
        emit('input', item.text)
        emit('update:modelValue', cacheValue)
      } else if (item.type === 'backspace') {
        const deleteKey = cacheValue.substr(-1)
        cacheValue = cacheValue.substr(0, cacheValue.length - 1)
        emit('delete', {
          deleteKey
        })
        emit('update:modelValue', cacheValue)
      } else if (item.type === 'confirm') {
        popup.customConfirm({})
      }
    }
    function onConfirmClick() {
      popup.customConfirm({})
    }
    function onConfirm() {
      close('confirm')
    }
    const onCancel = res => {
      close(res.source)
    }
    function close(source) {
      emit('change', cacheValue)
      cacheValue = ''
      emit('close', {
        source
      })
    }
    return {
      ...popup,
      noop,
      onVisibleStateChange2,
      showHeaderConfirm,
      bodyClasses,
      numberList,
      onNumberClick,
      onConfirmClick,
      onConfirm,
      onCancel,
      backspaceItem,
      locale
    }
  }
})
var _hoisted_130 = { class: 'fx-number-keyboard_list' }
var _hoisted_220 = ['onClick']
var _hoisted_316 = {
  key: 0,
  class: 'fx-number-keyboard_right-column'
}
var _hoisted_411 = { class: 'fx-number-keyboard_backspace' }
var _hoisted_56 = { class: 'fx-number-keyboard_confirm' }
function render41(_ctx, _cache) {
  const _component_Icon = _resolveComponent28('Icon')
  const _component_Drawer = _resolveComponent28('Drawer')
  return (
    _openBlock41(),
    _createBlock25(
      _component_Drawer,
      {
        class: 'fx-number-keyboard',
        placement: 'bottom',
        visible: _ctx.visible,
        showMask: false,
        title: _ctx.title,
        showClose: _ctx.showHeaderConfirm,
        onVisibleStateChange: _ctx.onVisibleStateChange2,
        onCancel: _ctx.onCancel,
        onConfirm: _ctx.onConfirm,
        'onUpdate:visible': _ctx.onUpdateVisible,
        ref: 'popup'
      },
      {
        default: _withCtx9(() => [
          _createElementVNode26(
            'div',
            {
              onClick:
                _cache[2] ||
                (_cache[2] = _withModifiers5(
                  (...args) => _ctx.noop && _ctx.noop(...args),
                  ['stop']
                ))
            },
            [
              _createElementVNode26(
                'div',
                {
                  class: _normalizeClass31([
                    'fx-number-keyboard_body',
                    _ctx.bodyClasses
                  ])
                },
                [
                  _createElementVNode26('ul', _hoisted_130, [
                    (_openBlock41(true),
                    _createElementBlock34(
                      _Fragment11,
                      null,
                      _renderList11(_ctx.numberList, (item, index) => {
                        return (
                          _openBlock41(),
                          _createElementBlock34(
                            'li',
                            {
                              class: _normalizeClass31([
                                'fx-number-keyboard_item',
                                ['span-' + (item.span || 1)]
                              ]),
                              key: index
                            },
                            [
                              _createElementVNode26(
                                'div',
                                {
                                  class: 'fx-number-keyboard_button',
                                  onClick: $event => _ctx.onNumberClick(item)
                                },
                                [
                                  item.icon
                                    ? (_openBlock41(),
                                      _createBlock25(
                                        _component_Icon,
                                        {
                                          key: 0,
                                          icon: item.icon
                                        },
                                        null,
                                        8,
                                        ['icon']
                                      ))
                                    : (_openBlock41(),
                                      _createElementBlock34(
                                        _Fragment11,
                                        { key: 1 },
                                        [
                                          _createTextVNode11(
                                            _toDisplayString20(item.text),
                                            1
                                          )
                                        ],
                                        2112
                                      ))
                                ],
                                8,
                                _hoisted_220
                              )
                            ],
                            2
                          )
                        )
                      }),
                      128
                    ))
                  ]),
                  _ctx.type === 'rightColumn'
                    ? (_openBlock41(),
                      _createElementBlock34('div', _hoisted_316, [
                        _createElementVNode26('div', _hoisted_411, [
                          _createElementVNode26(
                            'div',
                            {
                              class: 'fx-number-keyboard_button',
                              onClick:
                                _cache[0] ||
                                (_cache[0] = $event =>
                                  _ctx.onNumberClick(_ctx.backspaceItem))
                            },
                            [
                              _createVNode17(_component_Icon, {
                                icon: 'BackspaceOutlined'
                              })
                            ]
                          )
                        ]),
                        _createElementVNode26('div', _hoisted_56, [
                          _createElementVNode26(
                            'div',
                            {
                              class: 'fx-number-keyboard_confirm-button',
                              onClick:
                                _cache[1] ||
                                (_cache[1] = (...args) =>
                                  _ctx.onConfirmClick &&
                                  _ctx.onConfirmClick(...args))
                            },
                            _toDisplayString20(
                              _ctx.locale.numberKeyboardConfirmText
                            ),
                            1
                          )
                        ])
                      ]))
                    : _createCommentVNode24('v-if', true)
                ],
                2
              )
            ]
          )
        ]),
        _: 1
      },
      8,
      [
        'visible',
        'title',
        'showClose',
        'onVisibleStateChange',
        'onCancel',
        'onConfirm',
        'onUpdate:visible'
      ]
    )
  )
}
_sfc_script42.render = render41
_sfc_script42.__file = 'src/NumberKeyboard/NumberKeyboard.vue'

// src/NumberKeyboard/index.ts
var install41 = withInstall(_sfc_script42)
var NumberKeyboard_default = _sfc_script42

// vue:./ImageUploader.vue
import {
  defineComponent as defineComponent48,
  reactive as reactive8,
  computed as computed24,
  watch as watch23,
  ref as ref33
} from 'vue'

// vue:./Order.vue
import {
  defineComponent as defineComponent43,
  ref as ref28,
  reactive as reactive6,
  onMounted as onMounted13,
  nextTick as nextTick7,
  watch as watch20,
  onBeforeUnmount as onBeforeUnmount11,
  onBeforeMount as onBeforeMount3
} from 'vue'
import {
  renderList as _renderList12,
  Fragment as _Fragment12,
  openBlock as _openBlock42,
  createElementBlock as _createElementBlock35,
  normalizeStyle as _normalizeStyle18,
  createElementVNode as _createElementVNode27,
  renderSlot as _renderSlot20,
  normalizeClass as _normalizeClass32,
  mergeProps as _mergeProps7,
  resolveComponent as _resolveComponent29,
  createVNode as _createVNode18,
  toDisplayString as _toDisplayString21,
  withCtx as _withCtx10
} from 'vue'
var itemsValidator = items => {
  return (
    Array.isArray(items) &&
    items.filter(item => {
      return !(item && isStringNumberMix(item.id))
    }).length === 0
  )
}
var _sfc_script43 = defineComponent43({
  name: 'fx-order',
  components: { Icon: _sfc_script2, Drawer: _sfc_script8 },
  props: {
    items: {
      type: Array,
      validator: itemsValidator,
      required: true,
      default: () => []
    },
    columnNumber: {
      type: Number,
      default: 3
    },
    deletable: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: Number,
      default: 1
    }
  },
  emits: {
    'update:items': itemsValidator,
    delete: payload =>
      payload &&
      typeof payload.index === 'number' &&
      payload.item &&
      isStringNumberMix(payload.item.id)
  },
  setup(props, { emit }) {
    const root = ref28()
    const deleteButtonEl = ref28()
    const positions = reactive6([])
    const dragOn = ref28(false)
    const dragCurrent = ref28(-1)
    const dragDelete = ref28(false)
    const dragFixed = ref28(-1)
    const deleting = ref28(false)
    const orderHeight = ref28(0)
    const drag = {
      on: false,
      current: -1,
      deletable: false
    }
    const imgsMode = {
      itemSize: 0,
      sort: [],
      size: 0,
      moveShift: -1,
      shift: -1,
      moveSort: null
    }
    let deleteAreaY = 0
    let onTimer
    function getNewIndex(sort, index) {
      let newIndex = index
      for (let i = 0; i < sort.length; i++) {
        if (sort[i] === index) {
          newIndex = i
          break
        }
      }
      return newIndex
    }
    function enterDrag(targetObject) {
      const index = drag.current
      if (index === -1 || props.items.length <= 1) {
        return
      }
      imgsMode.size = props.items.length
      drag.targetObject = targetObject
      dragOn.value = true
      dragFixed.value = index
      dragCurrent.value = index
      dragDelete.value = !!props.deletable
      positions[index].left = positions[index].left + targetObject.fixedOffsetX
      positions[index].top = positions[index].top + targetObject.fixedOffsetY
      imgsMode.shift = getNewIndex(imgsMode.sort, index)
    }
    let lazyTimer
    function exitDragDone(callback) {
      lazyTimer = window.setTimeout(() => {
        callback()
        drag.on = false
      }, 220)
    }
    function exitDrag() {
      const end = () => {
        dragOn.value = false
        dragCurrent.value = -1
        dragDelete.value = false
        deleting.value = false
        delete drag.targetObject
        imgsMode.size = 0
        imgsMode.shift = -1
      }
      const restoreFixed = (index, left, top) => {
        addClassName(root.value, 'forbid-animation')
        positions[index].left = left
        positions[index].top = top
        dragFixed.value = -1
      }
      if (dragOn.value) {
        const sort = imgsMode.sort
        const index = drag.current
        const targetObject = drag.targetObject
        if (dragDelete.value && deleting.value) {
          let currentPosition = null
          for (let i = 0; i < sort.length; i++) {
            if (sort[i] === index) {
              positions[sort[i]].deleted = true
              currentPosition = positions[sort[i]]
              sort.splice(i, 1)
              break
            }
          }
          sort.forEach((v, k) => {
            positions[v].left = getItemPos(k).left
            positions[v].top = getItemPos(k).top
          })
          imgsMode.moveSort = null
          imgsMode.moveShift = -1
          if (currentPosition) {
            emit('delete', {
              type: 'delete',
              index,
              item: {
                id: currentPosition.data.id
              }
            })
          }
          exitDragDone(() => {
            dragFixed.value = -1
            updateOrderHeight()
            updateOptions()
          })
        } else if (imgsMode.moveShift !== -1 && imgsMode.moveSort != null) {
          const newIndex = getNewIndex(imgsMode.moveSort, index)
          const { left, top } = getItemPos(newIndex)
          positions[index].left = left + targetObject.fixedOffsetX
          positions[index].top = top + targetObject.fixedOffsetY
          dragCurrent.value = -1
          imgsMode.sort = imgsMode.moveSort
          imgsMode.moveSort = null
          imgsMode.moveShift = -1
          exitDragDone(() => {
            restoreFixed(index, left, top)
            updateOptions()
          })
        } else {
          const newIndex = getNewIndex(sort, index)
          const { left, top } = getItemPos(newIndex)
          positions[index].left = left + targetObject.fixedOffsetX
          positions[index].top = top + targetObject.fixedOffsetY
          exitDragDone(() => {
            restoreFixed(index, left, top)
          })
        }
        end()
      }
    }
    function updateOptions() {
      setTimeout(() => {
        const newOptions = imgsMode.sort.map(v => {
          return props.items[v]
        })
        emit('update:items', newOptions)
      }, 250)
    }
    function getItemPos(index) {
      return {
        left: (index % props.columnNumber) * imgsMode.itemSize,
        top: Math.floor(index / props.columnNumber) * imgsMode.itemSize
      }
    }
    let max = Infinity
    function updateItemsData() {
      if (!root.value) {
        return
      }
      imgsMode.itemSize = root.value.offsetWidth / props.columnNumber
      imgsMode.sort = []
      max = Infinity
      positions.splice(0, Infinity)
      props.items.forEach((v, k) => {
        const position = Object.assign(
          {
            id: v.id,
            data: v,
            deleted: false,
            draggable: !(v.draggable === false)
          },
          getItemPos(k)
        )
        positions.push(position)
        imgsMode.sort.push(k)
        if (!position.draggable && max === Infinity) {
          max = k - 1
        }
      })
      nextTick7(() => {
        updateOrderHeight()
      })
    }
    function updateOrderHeight() {
      var _a
      const $item = (_a = root.value) == null ? void 0 : _a.firstElementChild
      if ($item) {
        orderHeight.value =
          $item.offsetHeight *
          Math.ceil(imgsMode.sort.length / props.columnNumber)
      }
    }
    const onVisibleStateChange = e => {
      if (e.state === 'shown') {
        const rects = deleteButtonEl.value.getClientRects()[0]
        deleteAreaY = rects.top
      }
    }
    useTouch({
      el: root,
      onTouchStart(e) {
        const target = getParentTarget(e.target, 'fx-order_item')
        if (!target || drag.on) {
          return
        }
        const index = parseInt(target.dataset.index)
        const rects = target.getClientRects()[0]
        const position = positions[index]
        if (position.draggable === false) {
          return
        }
        removeClassName(root.value, 'forbid-animation')
        const targetObject = {
          id: position.id,
          index,
          startX: e.touchObject.pageX,
          startY: e.touchObject.pageY,
          left: position.left,
          top: position.top,
          height: target.offsetHeight,
          fixedOffsetX: rects.left - position.left,
          fixedOffsetY: rects.top - position.top,
          rectBottom: rects.bottom
        }
        drag.current = index
        drag.targetObject = targetObject
        clearTimeout(onTimer)
        onTimer = window.setTimeout(() => {
          if (drag.targetObject && drag.targetObject.id === targetObject.id) {
            enterDrag(targetObject)
          }
        }, 500)
      },
      onTouchMove(e) {
        if (!dragOn.value || !drag.targetObject) {
          clearTimeout(onTimer)
          return
        }
        const targetObject = drag.targetObject
        const index = targetObject.index
        const moveX = e.touchObject.pageX - targetObject.startX
        const moveY = e.touchObject.pageY - targetObject.startY
        const left = targetObject.left + moveX
        const top = targetObject.top + moveY
        const itemSize = imgsMode.itemSize
        const sort = cloneData(imgsMode.sort)
        deleting.value = targetObject.rectBottom + moveY + 2 > deleteAreaY
        const shift = rangeNumber(
          Math.round(top / itemSize) * 3 + Math.round(left / itemSize),
          0,
          max
        )
        if (
          (imgsMode.moveShift > 0 && imgsMode.moveShift != shift) ||
          imgsMode.shift != shift
        ) {
          sort.splice(imgsMode.shift, 1)
          sort.splice(shift, 0, index)
          const tempPoss = new Array(sort.length)
          sort.forEach((v, k) => {
            tempPoss[v] = getItemPos(k)
          })
          tempPoss[index].left = left + targetObject.fixedOffsetX
          tempPoss[index].top = top + targetObject.fixedOffsetY
          positions.forEach((v, k) => {
            if (tempPoss[k]) {
              v.left = tempPoss[k].left
              v.top = tempPoss[k].top
            }
          })
          imgsMode.moveShift = shift
          imgsMode.moveSort = sort
        } else {
          positions[index].left = left + targetObject.fixedOffsetX
          positions[index].top = top + targetObject.fixedOffsetY
        }
      },
      onTouchEnd() {
        clearTimeout(onTimer)
        if (dragOn.value) {
          exitDrag()
        }
      }
    })
    watch20(() => props.items, updateItemsData, {
      deep: true
    })
    onBeforeMount3(() => {
      deleteAreaY = document.documentElement.clientHeight
    })
    onMounted13(() => {
      updateItemsData()
    })
    onBeforeUnmount11(() => {
      clearTimeout(onTimer)
      clearTimeout(lazyTimer)
    })
    return {
      root,
      deleteButtonEl,
      dragOn,
      dragCurrent,
      dragDelete,
      dragFixed,
      deleting,
      orderHeight,
      positions,
      onVisibleStateChange,
      locale
    }
  }
})
var _hoisted_131 = ['data-index']
var _hoisted_221 = { class: 'fx-order_item-inner' }
var _hoisted_317 = {
  class: 'fx-order_delete-button',
  ref: 'deleteButtonEl'
}
function render42(_ctx, _cache) {
  const _component_Icon = _resolveComponent29('Icon')
  const _component_Drawer = _resolveComponent29('Drawer')
  return (
    _openBlock42(),
    _createElementBlock35(
      _Fragment12,
      null,
      [
        _createElementVNode27(
          'div',
          _mergeProps7(
            {
              class: ['fx-order', { drag: _ctx.dragOn }],
              style: { height: _ctx.orderHeight + 'px' }
            },
            _ctx.$attrs,
            { ref: 'root' }
          ),
          [
            (_openBlock42(true),
            _createElementBlock35(
              _Fragment12,
              null,
              _renderList12(_ctx.positions, (item, index) => {
                return (
                  _openBlock42(),
                  _createElementBlock35(
                    'div',
                    {
                      class: _normalizeClass32([
                        'fx-order_item',
                        {
                          current: _ctx.dragCurrent === index,
                          deleted: item.deleted,
                          fixed: _ctx.dragFixed === index
                        }
                      ]),
                      style: _normalizeStyle18({
                        left: item.left + 'px',
                        top: item.top + 'px',
                        width: ((1 / _ctx.columnNumber) * 100).toFixed(2) + '%'
                      }),
                      'data-index': index,
                      key: item.id
                    },
                    [
                      _createElementVNode27(
                        'span',
                        {
                          class: 'fx-order_item-ratio',
                          style: _normalizeStyle18({
                            paddingTop: _ctx.aspectRatio * 100 + '%'
                          })
                        },
                        null,
                        4
                      ),
                      _createElementVNode27('div', _hoisted_221, [
                        _renderSlot20(_ctx.$slots, 'default', {
                          item: item.data,
                          index
                        })
                      ])
                    ],
                    14,
                    _hoisted_131
                  )
                )
              }),
              128
            ))
          ],
          16
        ),
        _createVNode18(
          _component_Drawer,
          {
            class: 'fx-order_delete',
            placement: 'bottom',
            visible: _ctx.dragDelete,
            showMask: false,
            onVisibleStateChange: _ctx.onVisibleStateChange
          },
          {
            default: _withCtx10(() => [
              _createElementVNode27(
                'div',
                _hoisted_317,
                [
                  _createVNode18(_component_Icon, { icon: 'DeleteOutlined' }),
                  _createElementVNode27(
                    'span',
                    null,
                    _toDisplayString21(
                      _ctx.deleting
                        ? _ctx.locale.orderDeleteButtonActiveText
                        : _ctx.locale.orderDeleteButtonText
                    ),
                    1
                  )
                ],
                512
              )
            ]),
            _: 1
          },
          8,
          ['visible', 'onVisibleStateChange']
        )
      ],
      64
    )
  )
}
_sfc_script43.render = render42
_sfc_script43.__file = 'src/Order/Order.vue'

// src/Order/index.ts
var install42 = withInstall(_sfc_script43)
var Order_default = _sfc_script43

// vue:./ImagePreview.vue
import {
  defineComponent as defineComponent46,
  reactive as reactive7,
  ref as ref32,
  watch as watch22
} from 'vue'

// vue:./Swiper.vue
import {
  ref as ref30,
  defineComponent as defineComponent44,
  onMounted as onMounted16,
  watch as watch21,
  onBeforeUnmount as onBeforeUnmount14,
  provide as provide6
} from 'vue'

// src/hooks/use-list.ts
import {
  getCurrentInstance as getCurrentInstance2,
  ref as ref29,
  onBeforeUnmount as onBeforeUnmount12,
  provide as provide5,
  onMounted as onMounted14,
  onUnmounted,
  inject as inject7
} from 'vue'
function createUpdateInItem(name) {
  name = capitalize(name)
  return function (lazy = 17) {
    new exception_default(
      `${name}Item is not in ${name}`,
      exception_default.TYPE.DEFAULT,
      name
    )
  }
}
function useList(name, updateCallback) {
  const instance = getCurrentInstance2()
  const listEl = ref29()
  let updateTimer
  function doUpdate() {
    const $items = getItems()
    $items.forEach(($item, index) => {
      $item._fxSetIndex && $item._fxSetIndex(index)
    })
    updateCallback($items)
  }
  function update(lazy = 17) {
    if (!(instance == null ? void 0 : instance.isMounted)) {
      return
    }
    if (lazy === 0) {
      if (!(instance == null ? void 0 : instance.isUnmounted)) {
        doUpdate()
      }
    } else {
      clearTimeout(updateTimer)
      updateTimer = window.setTimeout(() => {
        if (!(instance == null ? void 0 : instance.isUnmounted)) {
          doUpdate()
        }
      }, lazy)
    }
  }
  provide5(`fx${capitalize(name)}Update`, update)
  function getItems() {
    return listEl.value
      ? [].slice.call(
          listEl.value.querySelectorAll(
            `.fx-${camelCase2KebabCase(name)}-item`
          ),
          0
        )
      : []
  }
  onBeforeUnmount12(() => clearTimeout(updateTimer))
  return {
    listEl,
    getItems,
    update
  }
}
function useListItem(name, root) {
  const index = ref29(-1)
  const update = inject7(
    `fx${capitalize(name)}Update`,
    createUpdateInItem(name)
  )
  onMounted14(() => {
    if (root == null ? void 0 : root.value) {
      root.value._fxSetIndex = _index => (index.value = _index)
    }
    update()
  })
  onUnmounted(() => update())
  return {
    index,
    update
  }
}

// src/hooks/use-resize-detector.ts
import {
  onBeforeUnmount as onBeforeUnmount13,
  onMounted as onMounted15
} from 'vue'

// src/helpers/resize-detector.ts
function resizeDetector($el, callback) {
  const object = document.createElement('object')
  object.style.cssText =
    'display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none; visibility: hidden;'
  object.tabIndex = -1
  object.type = 'text/html'
  object.setAttribute('aria-hidden', 'true')
  object.data = 'about:blank'
  object.onload = function () {
    if (!object.destroyed) {
      object.contentDocument.defaultView.addEventListener('resize', callback)
    }
  }
  $el.style.position = 'relative'
  $el.appendChild(object)
  return function off2() {
    object.destroyed = true
    if (object.contentDocument) {
      object.contentDocument.defaultView.removeEventListener('resize', callback)
    }
    removeEl(object)
    $el.style.position = ''
  }
}

// src/hooks/use-resize-detector.ts
function useResizeDetector(ctx, callback) {
  let stopHandle
  onMounted15(() => {
    const $el = ctx.value instanceof HTMLElement ? ctx.value : ctx.value.$el
    stopHandle = resizeDetector($el, callback)
  })
  onBeforeUnmount13(() => stopHandle())
  return {}
}

// src/Swiper/swiper.ts
var emitChangeValidator = payload =>
  payload &&
  typeof payload.activeIndex === 'number' &&
  typeof payload.fromIndex === 'number'

// vue:./Swiper.vue
import {
  renderSlot as _renderSlot21,
  createElementVNode as _createElementVNode28,
  renderList as _renderList13,
  Fragment as _Fragment13,
  openBlock as _openBlock43,
  createElementBlock as _createElementBlock36,
  normalizeClass as _normalizeClass33,
  normalizeStyle as _normalizeStyle19,
  vShow as _vShow8,
  withDirectives as _withDirectives8,
  resolveComponent as _resolveComponent30,
  createVNode as _createVNode19,
  createCommentVNode as _createCommentVNode25
} from 'vue'
var _sfc_script44 = defineComponent44({
  name: 'fx-swiper',
  components: { Icon: _sfc_script2 },
  props: {
    indicatorDots: {
      type: Boolean,
      default: false
    },
    indicatorColor: {
      type: String,
      validator: colorValidator
    },
    indicatorActiveColor: {
      type: String,
      validator: colorValidator
    },
    navigationButtons: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5e3
    },
    duration: {
      type: Number,
      default: null
    },
    initialCircular: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    initialVertical: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:activeIndex': activeIndex => typeof activeIndex === 'number',
    change: emitChangeValidator,
    animated: emitChangeValidator,
    click: emitEventValidator
  },
  setup(props, ctx) {
    const root = ref30()
    const { emit } = ctx
    const index = ref30(0)
    const pagination = ref30([])
    const direction = ref30('x')
    let directionGroup = []
    const circular = !!props.initialCircular
    let prevTranSize = 0
    let $items = []
    let itemSize = 0
    let horizontal = null
    function swipeTo(activeIndex) {
      if (
        isNumber(activeIndex) &&
        activeIndex >= 0 &&
        activeIndex < $items.length
      ) {
        if (activeIndex !== index.value) {
          to(activeIndex, false)
        }
      } else {
        console.error(
          new exception_default(
            'This value of "activeIndex" is out of range.',
            exception_default.TYPE.PROP_ERROR,
            'Swiper'
          )
        )
      }
    }
    function prev(useCircular = false) {
      to(useCircular ? getCircleIndex(-1) : index.value - 1)
    }
    function next(useCircular = false) {
      to(useCircular ? getCircleIndex(1) : index.value + 1)
    }
    function getCircleIndex(step2) {
      const length = $items.length
      return (index.value + length + (step2 % length)) % length
    }
    function updateSwipeLoop(offset) {
      if (!circular) {
        return
      }
      const slideIndex = index.value
      const lastIndex = getLastIndex()
      const itemCount = lastIndex + 1
      $items.forEach(($item, index2) => {
        if (offset != null && offset < 0) {
          if (slideIndex === 0 && index2 === lastIndex) {
            $item.style.transform = getTransformStyleValue(
              -itemSize * itemCount
            )
          } else {
            $item.style.transform = ''
          }
        } else if (offset != null && offset > 0) {
          if (slideIndex === lastIndex && index2 === 0) {
            $item.style.transform = getTransformStyleValue(itemSize * itemCount)
          } else {
            $item.style.transform = ''
          }
        } else {
          if (slideIndex === 0 && index2 === lastIndex) {
            $item.style.transform = getTransformStyleValue(
              -itemSize * itemCount
            )
          } else if (slideIndex === lastIndex && index2 === 0) {
            $item.style.transform = getTransformStyleValue(itemSize * itemCount)
          } else {
            $item.style.transform = ''
          }
        }
      })
      if (offset == null) {
        updateListStyle(-itemSize * slideIndex)
      }
    }
    function getLastIndex() {
      return $items.length - 1
    }
    function getTransformStyleValue(size) {
      return (
        'translate3d(' +
        (direction.value === 'x'
          ? size + 'px, 0px, 0px'
          : '0px, ' + size + 'px, 0px') +
        ')'
      )
    }
    function updateListStyle(transSize, duration = 0) {
      const listStyle = listEl.value.style
      listStyle.transitionDuration = duration + 'ms'
      listStyle.transform = getTransformStyleValue(transSize)
      prevTranSize = transSize
    }
    function onBeforeSlide(toIndex, fromIndex) {
      if (toIndex !== fromIndex) {
        emit('update:activeIndex', toIndex)
        emit('change', {
          activeIndex: toIndex,
          fromIndex
        })
      }
      index.value = toIndex
    }
    function onSlide(toIndex, fromIndex) {
      emit('animated', {
        activeIndex: toIndex,
        fromIndex
      })
    }
    function onClick(e) {
      if (!horizontal) {
        emit('click', e)
      }
    }
    function to(toIndex, animated = true) {
      const lastIndex = getLastIndex()
      let slideIndex = toIndex
      if (lastIndex < 0) {
        return
      }
      if (toIndex >= 0 && toIndex <= lastIndex && toIndex != index.value) {
        slide(toIndex, slideIndex, animated)
      } else {
        if (circular) {
          if (toIndex < 0) {
            slideIndex = -1
            toIndex = lastIndex
          } else if (toIndex > lastIndex) {
            slideIndex = lastIndex + 1
            toIndex = 0
          }
        } else {
          toIndex = index.value
        }
        slide(toIndex, slideIndex, animated)
      }
    }
    let playing = false
    let durationTimer
    function slide(toIndex, slideIndex, animated = true) {
      if (itemSize === 0 || playing) {
        return
      }
      if (!circular) {
        slideIndex = toIndex
      }
      playing = true
      const fromIndex = index.value
      const transSize = -itemSize * slideIndex
      const transSizeOffset = prevTranSize - transSize
      if (fromIndex !== slideIndex) {
        updateSwipeLoop(transSizeOffset)
      }
      onBeforeSlide(toIndex, fromIndex)
      let duration = props.duration
      if (duration == null) {
        duration = Math.abs(transSizeOffset)
        duration = Math.max(100, Math.min(800, duration))
      }
      if (animated === false) {
        duration = 0
      }
      updateListStyle(transSize, duration)
      clearTimeout(durationTimer)
      durationTimer = window.setTimeout(() => {
        updateListStyle(transSize, 0)
        animateDone(transSize, toIndex, fromIndex, 0)
      }, duration)
    }
    function animateDone(transSize, toIndex, fromIndex, frameNumber) {
      durationTimer = requestAnimationFrame(() => {
        const transform = window.getComputedStyle(listEl.value).transform
        const currentSize = transform
          .slice(7, transform.length - 1)
          .split(', ')[direction.value === 'y' ? 5 : 4]
        if (
          parseFloat(currentSize).toFixed(2) === transSize.toFixed(2) ||
          frameNumber > 0
        ) {
          playing = false
          onSlide(toIndex, fromIndex)
          updateSwipeLoop()
        } else {
          animateDone(transSize, toIndex, fromIndex, ++frameNumber)
        }
      })
    }
    let isFirst = true
    function resetItems(res) {
      $items = res
      setSlideStyle()
      const last = getLastIndex()
      if (isFirst) {
        isFirst = false
        if (props.activeIndex !== 0) {
          swipeTo(props.activeIndex)
        }
      } else if (index.value > last) {
        to(last)
      }
    }
    function setSlideStyle() {
      const $root = root.value
      const $list = listEl.value
      const sizeName = directionGroup[2]
      itemSize = $root['client' + sizeName]
      $root.style['overflow' + directionGroup[0]] = 'hidden'
      const styleObj = {
        '--webkit-backface-visibility': 'hidden',
        '--webkit-perspective': '1000'
      }
      styleObj[sizeName.toLowerCase()] = itemSize * $items.length + 'px'
      styleObj.transition = `transform 0ms ease-out`
      $list.style.cssText = styleObject2CssText(styleObj)
      updateListStyle(-itemSize * index.value)
      pagination.value = []
      $items.forEach(($item, i) => {
        $item.dataset.index = i.toString()
        let cssText = `${sizeName.toLowerCase()}: ${itemSize}px;`
        if (direction.value === 'x') {
          cssText += 'float: left;'
        }
        $item.style.cssText = cssText
        pagination.value.push(i)
      })
    }
    let autoplayTimer
    function start() {
      stop()
      props.autoplay &&
        (autoplayTimer = window.setInterval(() => {
          to(getCircleIndex(1))
        }, props.interval))
    }
    function stop() {
      clearTimeout(autoplayTimer)
    }
    function getItemEl(index2) {
      return $items[index2] || null
    }
    const { listEl, update } = useList('swiper', resetItems)
    useResizeDetector(root, () => update(50))
    let coords
    let inMove = false
    useTouch({
      el: root,
      onTouchStart(e) {
        if (e.target.tagName === 'IMG') {
          e.target.ondragstart = function () {
            return false
          }
        }
        if (playing) {
          return
        }
        stop()
        inMove = true
        horizontal = null
        coords = {
          startX: e.touchObject.pageX,
          startY: e.touchObject.pageY,
          stopX: e.touchObject.pageX,
          stopY: e.touchObject.pageY,
          timeStamp: e.timeStamp,
          offset: null
        }
      },
      onTouchMove(e) {
        if (!inMove || !coords) {
          return
        }
        coords.stopX = e.touchObject.pageX
        coords.stopY = e.touchObject.pageY
        let offsetX = coords.startX - coords.stopX
        let offsetY = coords.startY - coords.stopY
        if (direction.value === 'y') {
          offsetX = [offsetY, (offsetY = offsetX)][0]
        }
        const absX = Math.abs(offsetX)
        const absY = Math.abs(offsetY)
        if (horizontal === null) {
          if (offsetX !== 0) {
            e.preventDefault()
          }
        } else {
          if (absX > absY) {
            horizontal = true
            if (offsetX !== 0) {
              e.preventDefault()
            }
          } else {
            coords = null
            horizontal = false
            return
          }
        }
        const active = index.value
        let transSize = active * itemSize
        if (
          !circular &&
          ((active === 0 && offsetX < 0) ||
            (active === getLastIndex() && offsetX > 0))
        ) {
          transSize += getStretchOffset2(offsetX)
        } else {
          transSize += offsetX
        }
        if (absX < itemSize) {
          if (coords.offset == null || offsetX > 0 !== coords.offset) {
            updateSwipeLoop(offsetX)
            coords.offset = offsetX > 0
          }
          updateListStyle(-transSize)
        }
      },
      onTouchEnd(e) {
        if (!inMove) {
          return
        }
        inMove = false
        if (coords) {
          const offsetX =
            direction.value === 'x'
              ? coords.startX - coords.stopX
              : coords.startY - coords.stopY
          let absX = Math.abs(offsetX)
          const active = index.value
          let transIndex
          if (!isNaN(absX) && absX !== 0) {
            if (absX > itemSize) {
              absX = itemSize
            }
            if (absX >= 80 || e.timeStamp - coords.timeStamp < 200) {
              if (offsetX > 0) {
                transIndex = active + 1
              } else {
                transIndex = active - 1
              }
            } else {
              transIndex = active
            }
            to(transIndex)
            coords = null
          }
        }
        start()
      }
    })
    watch21(
      () => props.activeIndex,
      val => swipeTo(val)
    )
    watch21([() => props.autoplay, () => props.interval], () => {
      start()
    })
    onMounted16(() => {
      if (props.initialVertical) {
        direction.value = 'y'
        directionGroup = ['Y', 'X', 'Height', 'Width']
      } else {
        direction.value = 'x'
        directionGroup = ['X', 'Y', 'Width', 'Height']
      }
      start()
    })
    onBeforeUnmount14(() => {
      clearTimeout(durationTimer)
      stop()
      $items = []
    })
    provide6('disableFixed', true)
    return {
      root,
      listEl,
      swipeTo,
      prev,
      next,
      onClick,
      index,
      direction,
      pagination,
      update,
      getItemEl
    }
  }
})
var _hoisted_132 = {
  class: 'fx-swiper_list',
  ref: 'listEl'
}
function render43(_ctx, _cache) {
  const _component_Icon = _resolveComponent30('Icon')
  return (
    _openBlock43(),
    _createElementBlock36(
      'div',
      {
        class: _normalizeClass33([
          'fx-swiper',
          { vertical: _ctx.direction === 'y' }
        ]),
        onClick:
          _cache[2] ||
          (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
        ref: 'root'
      },
      [
        _createElementVNode28(
          'div',
          _hoisted_132,
          [_renderSlot21(_ctx.$slots, 'default')],
          512
        ),
        _withDirectives8(
          _createElementVNode28(
            'div',
            {
              class: _normalizeClass33([
                'fx-swiper_indicators',
                { vertical: _ctx.direction === 'y' }
              ])
            },
            [
              (_openBlock43(true),
              _createElementBlock36(
                _Fragment13,
                null,
                _renderList13(_ctx.pagination, item => {
                  return (
                    _openBlock43(),
                    _createElementBlock36(
                      'span',
                      {
                        key: item,
                        class: _normalizeClass33([
                          'fx-swiper_indicator',
                          { active: item === _ctx.index }
                        ]),
                        style: _normalizeStyle19({
                          background:
                            item === _ctx.index
                              ? _ctx.indicatorActiveColor
                              : _ctx.indicatorColor
                        })
                      },
                      null,
                      6
                    )
                  )
                }),
                128
              ))
            ],
            2
          ),
          [[_vShow8, _ctx.indicatorDots]]
        ),
        _ctx.navigationButtons
          ? _withDirectives8(
              (_openBlock43(),
              _createElementBlock36(
                'button',
                {
                  key: 0,
                  class: 'fx-swiper_prev',
                  onClick: _cache[0] || (_cache[0] = $event => _ctx.prev(true))
                },
                [_createVNode19(_component_Icon, { icon: 'LeftOutlined' })],
                512
              )),
              [[_vShow8, _ctx.pagination.length > 1]]
            )
          : _createCommentVNode25('v-if', true),
        _ctx.navigationButtons
          ? _withDirectives8(
              (_openBlock43(),
              _createElementBlock36(
                'button',
                {
                  key: 1,
                  class: 'fx-swiper_next',
                  onClick: _cache[1] || (_cache[1] = $event => _ctx.next(true))
                },
                [_createVNode19(_component_Icon, { icon: 'RightOutlined' })],
                512
              )),
              [[_vShow8, _ctx.pagination.length > 1]]
            )
          : _createCommentVNode25('v-if', true)
      ],
      2
    )
  )
}
_sfc_script44.render = render43
_sfc_script44.__file = 'src/Swiper/Swiper.vue'

// vue:./SwiperItem.vue
import { ref as ref31, defineComponent as defineComponent45 } from 'vue'
import {
  renderSlot as _renderSlot22,
  openBlock as _openBlock44,
  createElementBlock as _createElementBlock37
} from 'vue'
var _sfc_script45 = defineComponent45({
  name: 'fx-swiper-item',
  setup() {
    const root = ref31()
    useListItem('swiper')
    return {
      root
    }
  }
})
var _hoisted_133 = {
  class: 'fx-swiper-item',
  ref: 'root'
}
function render44(_ctx, _cache) {
  return (
    _openBlock44(),
    _createElementBlock37(
      'div',
      _hoisted_133,
      [_renderSlot22(_ctx.$slots, 'default')],
      512
    )
  )
}
_sfc_script45.render = render44
_sfc_script45.__file = 'src/Swiper/SwiperItem.vue'

// src/Swiper/index.ts
var Swiper_default = _sfc_script44
var install43 = multiWithInstall(_sfc_script44, [_sfc_script45])

// vue:./ImagePreview.vue
import {
  createElementVNode as _createElementVNode29,
  renderList as _renderList14,
  Fragment as _Fragment14,
  openBlock as _openBlock45,
  createElementBlock as _createElementBlock38,
  resolveComponent as _resolveComponent31,
  normalizeClass as _normalizeClass34,
  normalizeStyle as _normalizeStyle20,
  createVNode as _createVNode20,
  withCtx as _withCtx11,
  createBlock as _createBlock26,
  createCommentVNode as _createCommentVNode26,
  toDisplayString as _toDisplayString22,
  renderSlot as _renderSlot23,
  withModifiers as _withModifiers6,
  vShow as _vShow9,
  mergeProps as _mergeProps8,
  withDirectives as _withDirectives9,
  Teleport as _Teleport6
} from 'vue'
var _sfc_script46 = defineComponent46({
  name: 'fx-image-preview',
  components: {
    Button: _sfc_script3,
    Swiper: _sfc_script44,
    SwiperItem: _sfc_script45,
    Image: _sfc_script5
  },
  props: {
    ...popupProps,
    urls: {
      type: Array,
      validator: val => isStringArray(val),
      required: true
    },
    current: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: false
    },
    navigationButtons: {
      type: Boolean,
      default: false
    },
    imageHighRendering: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    ...popupEmits,
    'update:current': current => typeof current === 'string',
    change: payload =>
      payload &&
      typeof payload.activeIndex === 'number' &&
      typeof payload.current === 'string'
  },
  setup(props, ctx) {
    const { emit } = ctx
    const activeIndex = ref32(0)
    const images2 = reactive7([])
    const zoomAnimated = ref32(false)
    const swiperInit = ref32(false)
    const popup = usePopup(props, ctx, {})
    let coords
    function onImageTouchStart(e, item) {
      zoomAnimated.value = false
      if (e.touches.length >= 2) {
        e.preventDefault()
        e.stopPropagation()
        coords = {
          start: {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY
          },
          start2: {
            pageX: e.touches[1].pageX,
            pageY: e.touches[1].pageY
          },
          image: {
            width: item.width,
            height: item.height
          },
          inZoom: true
        }
      } else {
        const { clientWidth, clientHeight } = document.documentElement
        if (item.width <= clientWidth && item.height <= clientHeight) {
        } else {
          coords = {
            start: {
              pageX: e.touches[0].pageX,
              pageY: e.touches[0].pageY
            },
            scroll: {
              top: (item.height - clientHeight) / 2 - item.offsetTop,
              left: (item.width - clientWidth) / 2 - item.offsetLeft,
              maxTop: item.height - clientHeight,
              maxLeft: item.width - clientWidth
            }
          }
        }
      }
    }
    function onImageTouchMove(e, item) {
      if (!coords) {
        return
      }
      if (coords.inZoom) {
        if (!coords.inZoomEnd) {
          coords.hasZoom = true
          const scale =
            getDistance(e.touches[0], e.touches[1]) /
            getDistance(coords.start, coords.start2)
          item.width = coords.image.width * scale
          item.height = coords.image.height * scale
        } else {
        }
        e.preventDefault()
        e.stopPropagation()
      } else {
        const touch = e.touches[0]
        const scroll = coords.scroll
        const offsetX = coords.start.pageX - touch.pageX
        const offsetY = coords.start.pageY - touch.pageY
        if (!coords.inMove) {
          const verticalMove = Math.abs(offsetY) > Math.abs(offsetX)
          if (
            (verticalMove && offsetY > 0 && scroll.top < scroll.maxTop) ||
            (verticalMove && offsetY < 0 && scroll.top > 0) ||
            (!verticalMove && offsetX > 0 && scroll.left < scroll.maxLeft) ||
            (!verticalMove && offsetX < 0 && scroll.left > 0)
          ) {
            coords.inMove = true
          }
        }
        if (coords.inMove) {
          const { offsetTop, offsetLeft } = getUpdateOffset(
            {
              top: Math.max(0, Math.min(scroll.maxTop, scroll.top + offsetY)),
              left: Math.max(
                0,
                Math.min(scroll.maxLeft, scroll.left + offsetX)
              ),
              isScrollValue: true
            },
            item
          )
          item.offsetTop = offsetTop
          item.offsetLeft = offsetLeft
          e.preventDefault()
          e.stopPropagation()
        } else {
          coords = null
        }
      }
    }
    function onImageTouchEnd(e, item) {
      if (!coords) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
      if (coords.hasZoom) {
        zoomAnimated.value = true
        if (item.width < item.initialWidth) {
          item.width = item.initialWidth
        } else if (item.width > item.naturalWidth) {
          item.width = item.naturalWidth
        }
        if (item.height < item.initialHeight) {
          item.height = item.initialHeight
        } else if (item.height > item.naturalHeight) {
          item.height = item.naturalHeight
        }
        const { offsetTop, offsetLeft } = getUpdateOffset(
          {
            top: item.offsetTop,
            left: item.offsetLeft,
            isScrollValue: false
          },
          item
        )
        item.offsetTop = offsetTop
        item.offsetLeft = offsetLeft
      }
      if (e.touches.length > 0) {
        coords.inZoomEnd = true
      } else {
        coords = null
      }
    }
    function getUpdateOffset({ top, left, isScrollValue }, item) {
      const { clientHeight, clientWidth } = document.documentElement
      let offsetTop
      let offsetLeft
      if (item.height <= clientHeight) {
        offsetTop = 0
      } else {
        const diff = (item.height - clientHeight) / 2
        offsetTop = rangeNumber(isScrollValue ? diff - top : top, -diff, diff)
      }
      if (item.width <= clientWidth) {
        offsetLeft = 0
      } else {
        const diff = (item.width - clientWidth) / 2
        offsetLeft = rangeNumber(
          isScrollValue ? diff - left : left,
          -diff,
          diff
        )
      }
      return {
        offsetTop,
        offsetLeft
      }
    }
    function updateCurrent(val) {
      let hasUrl = false
      for (let i = 0, len = images2.length; i < len; i++) {
        if (images2[i].src === val) {
          if (activeIndex.value !== i) {
            activeIndex.value = i
          }
          hasUrl = true
          break
        }
      }
      if (!hasUrl && images2[0]) {
        activeIndex.value = 0
        emit('update:current', images2[0].src)
      }
    }
    function getDistance(p1, p2) {
      const x = p2.pageX - p1.pageX
      const y = p2.pageY - p1.pageY
      return Math.sqrt(x * x + y * y)
    }
    function onSwiperAnimated() {
      images2.forEach((item, index) => {
        if (index !== activeIndex.value) {
          item.width = item.initialWidth
          item.height = item.initialHeight
          item.offsetTop = 0
          item.offsetLeft = 0
        }
      })
    }
    function onSwiperChange({ activeIndex: activeIndex2 }) {
      const current = props.urls[activeIndex2]
      emit('update:current', current)
      emit('change', {
        activeIndex: activeIndex2,
        current
      })
    }
    function onPreviewClick() {
      popup.customCancel('previewClick')
    }
    const onImageLoad = ({ width, height, src }) => {
      if (props.imageHighRendering) {
        const dpr = window.devicePixelRatio || 1
        width = width / dpr
        height = height / dpr
      }
      for (let i = 0; i < images2.length; i++) {
        const image = images2[i]
        if (image.src === src) {
          const { clientWidth } = document.documentElement
          if (width > clientWidth) {
            image.width = clientWidth
            image.height = height * (clientWidth / width)
          } else {
            image.width = width
            image.height = height
          }
          image.naturalWidth = width
          image.naturalHeight = height
          image.initialWidth = image.width
          image.initialHeight = image.height
          image.loaded = true
          break
        }
      }
    }
    watch22(
      () => props.urls,
      () => {
        const map = {}
        images2.forEach(v => {
          map[v.src] = v
        })
        images2.length = 0
        props.urls.forEach(url => {
          if (map[url]) {
            images2.push(map[url])
          } else {
            images2.push({
              src: url,
              width: 0,
              height: 0,
              initialWidth: 0,
              initialHeight: 0,
              naturalWidth: 0,
              naturalHeight: 0,
              offsetTop: 0,
              offsetLeft: 0,
              loaded: false
            })
          }
        })
      },
      {
        immediate: true,
        deep: true
      }
    )
    watch22(
      () => props.current,
      val => updateCurrent(val),
      {
        immediate: true
      }
    )
    watch22(popup.isShow, () => {
      swiperInit.value = true
    })
    return {
      ...popup,
      swiperInit,
      activeIndex,
      images: images2,
      zoomAnimated,
      updateCurrent,
      onImageTouchStart,
      onImageTouchMove,
      onImageTouchEnd,
      onSwiperAnimated,
      onSwiperChange,
      onPreviewClick,
      onImageLoad
    }
  }
})
var _hoisted_134 = /* @__PURE__ */ _createElementVNode29(
  'div',
  { class: 'fx-mask' },
  null,
  -1
)
var _hoisted_222 = { class: 'fx-preview-image_image-container' }
var _hoisted_318 = { class: 'fx-preview-image_pagination' }
var _hoisted_412 = { class: 'fx-preview-image_close' }
function render45(_ctx, _cache) {
  const _component_Image = _resolveComponent31('Image')
  const _component_SwiperItem = _resolveComponent31('SwiperItem')
  const _component_Swiper = _resolveComponent31('Swiper')
  const _component_Button = _resolveComponent31('Button')
  return (
    _openBlock45(),
    _createBlock26(_Teleport6, { to: 'body' }, [
      _withDirectives9(
        _createElementVNode29(
          'div',
          _mergeProps8(
            {
              class: ['fx-preview-image fx-popup', { visible: _ctx.visible2 }],
              style: { zIndex: _ctx.zIndex }
            },
            _ctx.$attrs
          ),
          [
            _hoisted_134,
            _ctx.swiperInit
              ? (_openBlock45(),
                _createBlock26(
                  _component_Swiper,
                  {
                    key: 0,
                    activeIndex: _ctx.activeIndex,
                    'onUpdate:activeIndex':
                      _cache[0] ||
                      (_cache[0] = $event => (_ctx.activeIndex = $event)),
                    'navigation-buttons': _ctx.navigationButtons,
                    onClick: _ctx.onPreviewClick,
                    onChange: _ctx.onSwiperChange,
                    onAnimated: _ctx.onSwiperAnimated
                  },
                  {
                    default: _withCtx11(() => [
                      (_openBlock45(true),
                      _createElementBlock38(
                        _Fragment14,
                        null,
                        _renderList14(_ctx.images, (item, index) => {
                          return (
                            _openBlock45(),
                            _createBlock26(
                              _component_SwiperItem,
                              { key: index },
                              {
                                default: _withCtx11(() => [
                                  _createElementVNode29('div', _hoisted_222, [
                                    _createVNode20(
                                      _component_Image,
                                      {
                                        src: item.src,
                                        mode: 'aspectFit',
                                        onLoad: _ctx.onImageLoad,
                                        class: _normalizeClass34({
                                          animated: _ctx.zoomAnimated
                                        }),
                                        style: _normalizeStyle20({
                                          width: item.width + 'px',
                                          height: item.height + 'px',
                                          'margin-left': item.offsetLeft + 'px',
                                          'margin-top': item.offsetTop + 'px'
                                        }),
                                        onTouchstart: $event =>
                                          _ctx.onImageTouchStart($event, item),
                                        onTouchmove: $event =>
                                          _ctx.onImageTouchMove($event, item),
                                        onTouchend: $event =>
                                          _ctx.onImageTouchEnd($event, item)
                                      },
                                      null,
                                      8,
                                      [
                                        'src',
                                        'onLoad',
                                        'class',
                                        'style',
                                        'onTouchstart',
                                        'onTouchmove',
                                        'onTouchend'
                                      ]
                                    )
                                  ])
                                ]),
                                _: 2
                              },
                              1024
                            )
                          )
                        }),
                        128
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  [
                    'activeIndex',
                    'navigation-buttons',
                    'onClick',
                    'onChange',
                    'onAnimated'
                  ]
                ))
              : _createCommentVNode26('v-if', true),
            _createElementVNode29(
              'div',
              _hoisted_318,
              _toDisplayString22(_ctx.activeIndex + 1) +
                ' / ' +
                _toDisplayString22(_ctx.urls.length),
              1
            ),
            _createElementVNode29('div', _hoisted_412, [
              _renderSlot23(
                _ctx.$slots,
                'close',
                { activeIndex: _ctx.activeIndex },
                () => [
                  _ctx.showClose
                    ? (_openBlock45(),
                      _createBlock26(
                        _component_Button,
                        {
                          key: 0,
                          onClick: _withModifiers6(_ctx.onCloseClick, ['stop']),
                          icon: 'CloseOutlined',
                          size: 'large',
                          pattern: 'borderless',
                          shape: 'square',
                          ghost: true
                        },
                        null,
                        8,
                        ['onClick']
                      ))
                    : _createCommentVNode26('v-if', true)
                ]
              )
            ])
          ],
          16
        ),
        [[_vShow9, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script46.render = render45
_sfc_script46.__file = 'src/ImagePreview/ImagePreview.vue'

// src/ImagePreview/index.ts
var showImagePreview = createShowPopup({
  apiName: 'showImagePreview',
  component: _sfc_script46,
  createHook: createConfirmHook
})
var ImagePreview_default = _sfc_script46
var install44 = withInstall(_sfc_script46)

// vue:./Dialog.vue
import { defineComponent as defineComponent47 } from 'vue'
import {
  toDisplayString as _toDisplayString23,
  openBlock as _openBlock46,
  createElementBlock as _createElementBlock39,
  createCommentVNode as _createCommentVNode27,
  renderSlot as _renderSlot24,
  createElementVNode as _createElementVNode30,
  createTextVNode as _createTextVNode12,
  resolveComponent as _resolveComponent32,
  withCtx as _withCtx12,
  createBlock as _createBlock27,
  createVNode as _createVNode21
} from 'vue'
var _sfc_script47 = defineComponent47({
  name: 'fx-dialog',
  components: {
    Button: _sfc_script3,
    ButtonGroup: _sfc_script4,
    Modal: _sfc_script9
  },
  props: {
    ...popupExtendProps,
    title: {
      type: String,
      default: null
    },
    cancelText: {
      type: String
    },
    confirmText: {
      type: String
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: null
    }
  },
  emits: { ...popupEmits },
  setup(props, ctx) {
    const popup = usePopupExtend(ctx)
    function onConfirmClick() {
      popup.customConfirm({})
    }
    return {
      ...popup,
      onConfirmClick,
      locale
    }
  }
})
var _hoisted_135 = {
  key: 0,
  class: 'fx-dialog_header'
}
var _hoisted_223 = { class: 'fx-dialog_content' }
var _hoisted_319 = {
  key: 0,
  class: 'fx-dialog_content-text'
}
var _hoisted_413 = { class: 'fx-dialog_footer fx-horizontal-hairline' }
function render46(_ctx, _cache) {
  const _component_Button = _resolveComponent32('Button')
  const _component_ButtonGroup = _resolveComponent32('ButtonGroup')
  const _component_Modal = _resolveComponent32('Modal')
  return (
    _openBlock46(),
    _createBlock27(
      _component_Modal,
      {
        class: 'fx-dialog',
        visible: _ctx.visible,
        showClose: false,
        maskClosable: _ctx.maskClosable,
        onVisibleStateChange: _ctx.onVisibleStateChange,
        onConfirm: _ctx.onConfirm,
        onCancel: _ctx.onCancel,
        'onUpdate:visible': _ctx.onUpdateVisible,
        ref: 'popup'
      },
      {
        default: _withCtx12(() => [
          _ctx.title
            ? (_openBlock46(),
              _createElementBlock39(
                'div',
                _hoisted_135,
                _toDisplayString23(_ctx.title),
                1
              ))
            : _createCommentVNode27('v-if', true),
          _createElementVNode30('div', _hoisted_223, [
            _ctx.content
              ? (_openBlock46(),
                _createElementBlock39(
                  'div',
                  _hoisted_319,
                  _toDisplayString23(_ctx.content),
                  1
                ))
              : _renderSlot24(_ctx.$slots, 'default', { key: 1 })
          ]),
          _createElementVNode30('div', _hoisted_413, [
            _createVNode21(
              _component_ButtonGroup,
              {
                class: 'fx-dialog_footer-inner',
                pattern: 'borderless'
              },
              {
                default: _withCtx12(() => [
                  _ctx.showCancel
                    ? (_openBlock46(),
                      _createBlock27(
                        _component_Button,
                        {
                          key: 0,
                          class: 'fx-dialog_button',
                          type: 'default',
                          onClick: _ctx.onCancelClick
                        },
                        {
                          default: _withCtx12(() => [
                            _createTextVNode12(
                              _toDisplayString23(
                                _ctx.cancelText || _ctx.locale.dialogCancelText
                              ),
                              1
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['onClick']
                      ))
                    : _createCommentVNode27('v-if', true),
                  _createVNode21(
                    _component_Button,
                    {
                      class: 'fx-dialog_button',
                      type: 'primary',
                      onClick: _ctx.onConfirmClick
                    },
                    {
                      default: _withCtx12(() => [
                        _createTextVNode12(
                          _toDisplayString23(
                            _ctx.confirmText || _ctx.locale.dialogConfirmText
                          ),
                          1
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['onClick']
                  )
                ]),
                _: 1
              }
            )
          ])
        ]),
        _: 3
      },
      8,
      [
        'visible',
        'maskClosable',
        'onVisibleStateChange',
        'onConfirm',
        'onCancel',
        'onUpdate:visible'
      ]
    )
  )
}
_sfc_script47.render = render46
_sfc_script47.__file = 'src/Dialog/Dialog.vue'

// src/Dialog/index.ts
var showDialog = createShowPopup({
  apiName: 'showDialog',
  component: _sfc_script47,
  createHook: createConfirmHook
})
var Dialog_default = _sfc_script47
var install45 = withInstall(_sfc_script47)

// src/helpers/file.ts
var formatFileSize = number => {
  const map = [
    [1073741824, 'GB'],
    [1048576, 'MB'],
    [1024, 'KB'],
    [0, 'bytes']
  ]
  let size = 0
  let unit = 'bytes'
  for (let i = 0; i < map.length; i++) {
    if (number >= map[i][0]) {
      size = i < map.length - 1 ? number / map[i][0] : number
      unit = map[i][1]
      break
    }
  }
  size = Math.round(size * 10) / 10
  return size + unit
}

// vue:./ImageUploader.vue
import {
  resolveComponent as _resolveComponent33,
  createVNode as _createVNode22,
  createElementVNode as _createElementVNode31,
  withModifiers as _withModifiers7,
  normalizeClass as _normalizeClass35,
  openBlock as _openBlock47,
  createElementBlock as _createElementBlock40,
  createCommentVNode as _createCommentVNode28,
  createBlock as _createBlock28,
  toDisplayString as _toDisplayString24,
  withCtx as _withCtx13,
  mergeProps as _mergeProps9,
  Fragment as _Fragment15
} from 'vue'
var ACCEPT_TYPES = /* @__PURE__ */ new Map([
  ['all', 'image/*'],
  ['png', 'image/png'],
  ['jpeg', 'image/jpeg'],
  ['jpg', 'image/jpeg'],
  ['webp', 'image/webp']
])
function getAccepts(val) {
  const arr = isStringArray(val)
    ? val
    : typeof val === 'string'
    ? val.split(',')
    : []
  let ret = []
  for (let i = 0; i < arr.length; i++) {
    const accept = ACCEPT_TYPES.get(arr[i])
    if (arr[i] === 'all') {
      ret = [accept]
      break
    } else if (accept) {
      ret.push(accept)
    }
  }
  return ret
}
var isValue5 = val => isStringArray(val)
var _sfc_script48 = defineComponent48({
  name: 'fx-image-uploader',
  components: {
    Order: _sfc_script43,
    Icon: _sfc_script2,
    ImagePreview: _sfc_script46,
    Button: _sfc_script3,
    Image: _sfc_script5,
    ActivityIndicator: _sfc_script12
  },
  props: {
    ...formItemProps,
    modelValue: {
      type: Array,
      validator: isValue5,
      default: () => []
    },
    accept: {
      type: [String, Array],
      validator: val => getAccepts(val).length > 0,
      default: 'all'
    },
    columnNumber: {
      type: Number,
      default: 3
    },
    maxCount: {
      type: Number,
      default: 9
    },
    preview: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: true
    },
    imageMode: {
      type: String,
      default: 'aspectFill'
    },
    beforeUpload: {
      type: Function,
      default: () => true
    },
    uploadReady: {
      type: Function,
      default: () => true
    }
  },
  emits: {
    'update:modelValue': isValue5,
    change: isValue5,
    delete: payload => payload && typeof payload.index === 'number'
  },
  setup(props, ctx) {
    const { emit } = ctx
    let uid2 = 1
    const orderItems = reactive8([])
    const formValue = ref33([])
    const previewVisible = ref33(false)
    const previewCurrent = ref33('')
    function onAddFiles(e) {
      const files = e.target.files || []
      for (let i = 0; i < files.length; i++) {
        addFile(files[i])
      }
    }
    function addFile(file) {
      beforePromise(
        props.beforeUpload(file, {
          formatSize: formatFileSize
        })
      ).then(res => {
        if (res instanceof File) {
          file = res
          res = true
        }
        res && uploadFile(file)
      })
    }
    function uploadFile(file) {
      if (orderItems.length - (hasUploadButton() ? 1 : 0) >= props.maxCount) {
        return
      }
      const fileItem = {
        id: ++uid2,
        status: 'reading',
        message: 'Reading'
      }
      orderItems.splice(
        orderItems.length - (hasUploadButton() ? 1 : 0),
        0,
        fileItem
      )
      updateUploadButton()
      props.uploadReady(file, createUploadHandlers(fileItem.id))
    }
    function beforePromise(res) {
      if (res == null) {
        return Promise.resolve(true)
      } else if (typeof res === 'boolean') {
        return Promise.resolve(res)
      } else if (isPromiseLike(res)) {
        return res
          .then(res2 => {
            if (res2 instanceof File) {
              return res2
            }
            return !!res2
          })
          .catch(() => {
            return false
          })
      }
      return Promise.resolve(res instanceof File ? res : true)
    }
    function getFileItemById(id) {
      for (let i = 0; i < orderItems.length; i++) {
        if (orderItems[i].id === id) {
          return orderItems[i]
        }
      }
      return null
    }
    function isDone(fileItem) {
      return fileItem.status === 'failed' || fileItem.status === 'uploaded'
    }
    function createUploadHandlers(id) {
      return {
        getUploadId: () => id,
        formatSize: formatFileSize,
        setUploading(message) {
          const fileItem = getFileItemById(id)
          if (fileItem && !isDone(fileItem)) {
            fileItem.status = 'uploading'
            fileItem.message = message || 'Uploading'
          }
        },
        fail(e) {
          const fileItem = getFileItemById(id)
          if (fileItem && !isDone(fileItem)) {
            if (e instanceof Error) {
              fileItem.message = e.message
            } else if (e) {
              fileItem.message = e.toString()
            } else {
              fileItem.message = 'Failed'
            }
            fileItem.status = 'failed'
          }
        },
        success(url) {
          const fileItem = getFileItemById(id)
          if (fileItem && !isDone(fileItem)) {
            fileItem.url = url
            fileItem.status = 'uploaded'
            fileItem.message = 'Uploaded'
            urlId(url, id)
            updateValue()
          }
        }
      }
    }
    function updateValue() {
      const newVal = []
      orderItems.forEach(fileItem => {
        fileItem = fileItem
        if (fileItem.status === 'uploaded' && fileItem.url) {
          newVal.push(fileItem.url)
        }
      })
      if (!isSameArray(newVal, formValue.value)) {
        formValue.value = newVal
        emit('update:modelValue', cloneData(newVal))
        emit('change', cloneData(newVal))
      }
    }
    function hasUploadButton() {
      if (orderItems.length === 0) {
        return false
      }
      return orderItems[orderItems.length - 1].isAdd || false
    }
    function updateUploadButton() {
      if (hasUploadButton()) {
        if (orderItems.length > props.maxCount) {
          orderItems.splice(orderItems.length - 1, 1)
        }
      } else {
        if (orderItems.length < props.maxCount) {
          orderItems.push({
            id: 1,
            isAdd: true,
            draggable: false
          })
        }
      }
    }
    function isSameUploadedList() {
      const value = cloneData(props.modelValue)
      for (let i = 0; i < orderItems.length; i++) {
        const fileItem = orderItems[i]
        if (fileItem.status === 'uploaded') {
          if (value.length === 0) {
            return false
          }
          if (fileItem.url === value[0]) {
            value.shift()
          } else {
            return false
          }
        }
      }
      return value.length === 0
    }
    function updateUploadedList() {
      if (isSameUploadedList()) {
        return
      }
      const cache2 = []
      orderItems.forEach(v => {
        if (v.status === 'uploading') {
          cache2.push(v)
        }
      })
      orderItems.splice(0, Infinity)
      formValue.value = []
      props.modelValue.forEach(url => {
        orderItems.push({
          id: urlId(url),
          status: 'uploaded',
          url,
          message: 'Uploaded'
        })
        formValue.value.push(url)
      })
      cache2.length > 0 && orderItems.push(...cache2)
      updateUploadButton()
    }
    function onUpdateOptions(_options) {
      orderItems.splice(0, Infinity, ..._options)
      updateUploadButton()
      updateValue()
    }
    const urlIdCache = {}
    function urlId(url, id) {
      url = url.substring(url.length - 100)
      if (id) {
        urlIdCache[url] = id
        return id
      }
      return urlIdCache[url] || (urlIdCache[url] = ++uid2)
    }
    function onItemClick(item) {
      const fileItem = getFileItemById(item.id)
      if (fileItem) {
        if (fileItem.status === 'uploaded') {
          if (props.preview) {
            previewCurrent.value = fileItem.url
            previewVisible.value = true
          }
        } else if (fileItem.status === 'failed') {
          for (let i = 0; i < orderItems.length; i++) {
            if (orderItems[i].id === fileItem.id) {
              orderItems.splice(i, 1)
              updateUploadButton()
            }
          }
        }
      }
    }
    const onDelete = ({ index, item }) => {
      const fileItem = getFileItemById(item.id)
      fileItem &&
        emit('delete', {
          index,
          item: {
            id: fileItem.id,
            status: fileItem.status,
            url: fileItem.url || null
          }
        })
    }
    function onPreviewDelete(activeIndex) {
      const current = formValue.value[activeIndex]
      for (let i = 0, j = 0; i < orderItems.length; i++) {
        const optionItem = orderItems[i]
        if (optionItem.status === 'uploaded') {
          if (j === activeIndex && optionItem.url === current) {
            showDialog({
              content: locale.value.imageUploaderDeleteContent,
              confirmText: locale.value.imageUploaderDeleteConfirmText
            }).then(res => {
              if (res.confirm) {
                orderItems.splice(i, 1)
                updateUploadButton()
                updateValue()
                if (formValue.value.length === 0) {
                  previewVisible.value = false
                }
              }
            })
            break
          }
          j++
        }
      }
    }
    const accept2 = computed24(() => {
      return getAccepts(props.accept).join(', ')
    })
    watch23(() => props.modelValue, updateUploadedList, {
      immediate: true,
      deep: true
    })
    watch23(() => props.maxCount, updateUploadButton)
    updateUploadButton()
    return {
      formValue,
      orderItems,
      accept2,
      onAddFiles,
      onUpdateOptions,
      onItemClick,
      onDelete,
      previewVisible,
      previewCurrent,
      onPreviewDelete,
      noop
    }
  }
})
var _hoisted_136 = ['accept', 'disabled', 'multiple']
var _hoisted_224 = ['onClick']
var _hoisted_320 = {
  key: 0,
  class: 'fx-image-uploader_item-status'
}
var _hoisted_414 = ['name', 'value']
function render47(_ctx, _cache) {
  const _component_Icon = _resolveComponent33('Icon')
  const _component_Image = _resolveComponent33('Image')
  const _component_ActivityIndicator = _resolveComponent33('ActivityIndicator')
  const _component_Order = _resolveComponent33('Order')
  const _component_Button = _resolveComponent33('Button')
  const _component_ImagePreview = _resolveComponent33('ImagePreview')
  return (
    _openBlock47(),
    _createElementBlock40(
      _Fragment15,
      null,
      [
        _createElementVNode31(
          'div',
          _mergeProps9(
            {
              class: ['fx-image-uploader', ['column-' + _ctx.columnNumber]]
            },
            _ctx.$attrs
          ),
          [
            _createVNode22(
              _component_Order,
              {
                columnNumber: _ctx.columnNumber,
                deletable: _ctx.deletable,
                items: _ctx.orderItems,
                onDelete: _ctx.onDelete,
                'onUpdate:items': _ctx.onUpdateOptions
              },
              {
                default: _withCtx13(({ item }) => [
                  item.isAdd
                    ? (_openBlock47(),
                      _createElementBlock40(
                        'div',
                        {
                          key: 0,
                          class: _normalizeClass35([
                            'fx-image-uploader_upload-button',
                            { disabled: !!_ctx.disabled }
                          ]),
                          onContextmenu:
                            _cache[1] ||
                            (_cache[1] = _withModifiers7(
                              (...args) => _ctx.noop && _ctx.noop(...args),
                              ['prevent']
                            ))
                        },
                        [
                          _createVNode22(_component_Icon, {
                            icon: 'PlusOutlined'
                          }),
                          _createElementVNode31(
                            'input',
                            {
                              type: 'file',
                              name: '',
                              accept: _ctx.accept2,
                              disabled: _ctx.disabled,
                              multiple: _ctx.multiple,
                              onChange:
                                _cache[0] ||
                                (_cache[0] = (...args) =>
                                  _ctx.onAddFiles && _ctx.onAddFiles(...args))
                            },
                            null,
                            40,
                            _hoisted_136
                          )
                        ],
                        34
                      ))
                    : (_openBlock47(),
                      _createElementBlock40(
                        'div',
                        {
                          key: 1,
                          class: 'fx-image-uploader_item',
                          onContextmenu:
                            _cache[2] ||
                            (_cache[2] = _withModifiers7(
                              (...args) => _ctx.noop && _ctx.noop(...args),
                              ['prevent']
                            )),
                          onClick: $event => _ctx.onItemClick(item)
                        },
                        [
                          _createVNode22(
                            _component_Image,
                            {
                              src: item.url,
                              draggable: false,
                              mode: _ctx.imageMode
                            },
                            null,
                            8,
                            ['src', 'mode']
                          ),
                          item.status !== 'uploaded' &&
                          item.status !== 'reading'
                            ? (_openBlock47(),
                              _createElementBlock40('div', _hoisted_320, [
                                item.status === 'uploading'
                                  ? (_openBlock47(),
                                    _createBlock28(
                                      _component_ActivityIndicator,
                                      {
                                        key: 0,
                                        size: 40,
                                        color: '#ffffff'
                                      }
                                    ))
                                  : item.status === 'failed'
                                  ? (_openBlock47(),
                                    _createBlock28(_component_Icon, {
                                      key: 1,
                                      icon: 'DeleteOutlined'
                                    }))
                                  : _createCommentVNode28('v-if', true),
                                _createElementVNode31(
                                  'span',
                                  null,
                                  _toDisplayString24(item.message),
                                  1
                                )
                              ]))
                            : _createCommentVNode28('v-if', true)
                        ],
                        40,
                        _hoisted_224
                      ))
                ]),
                _: 1
              },
              8,
              [
                'columnNumber',
                'deletable',
                'items',
                'onDelete',
                'onUpdate:items'
              ]
            ),
            _createElementVNode31(
              'input',
              {
                type: 'hidden',
                name: _ctx.name,
                value: _ctx.formValue,
                ref: 'input'
              },
              null,
              8,
              _hoisted_414
            )
          ],
          16
        ),
        _createVNode22(
          _component_ImagePreview,
          {
            class: 'fx-image-uploader_preview',
            urls: _ctx.formValue,
            visible: _ctx.previewVisible,
            'onUpdate:visible':
              _cache[3] ||
              (_cache[3] = $event => (_ctx.previewVisible = $event)),
            current: _ctx.previewCurrent,
            'onUpdate:current':
              _cache[4] ||
              (_cache[4] = $event => (_ctx.previewCurrent = $event)),
            showClose: ''
          },
          {
            close: _withCtx13(({ activeIndex }) => [
              _createVNode22(
                _component_Button,
                {
                  onClick: _withModifiers7(
                    $event => _ctx.onPreviewDelete(activeIndex),
                    ['stop']
                  ),
                  icon: 'DeleteOutlined',
                  size: 'large',
                  pattern: 'borderless',
                  shape: 'square',
                  ghost: true
                },
                null,
                8,
                ['onClick']
              )
            ]),
            _: 1
          },
          8,
          ['urls', 'visible', 'current']
        )
      ],
      64
    )
  )
}
_sfc_script48.render = render47
_sfc_script48.__file = 'src/ImageUploader/ImageUploader.vue'

// src/ImageUploader/index.ts
var install46 = withInstall(_sfc_script48)
var ImageUploader_default = _sfc_script48

// vue:./DatePicker.vue
import { defineComponent as defineComponent49 } from 'vue'

// src/DatePicker/date.ts
var MODE_NAMES3 = [
  'date',
  'time',
  'datetime',
  'minute-second',
  'hour-minute',
  'hour-minute-second',
  'day-hour',
  'month-day',
  'month-day-hour',
  'month-day-hour-minute',
  'year-month',
  'year-month-day',
  'year-month-day-hour',
  'year-month-day-hour-minute',
  'year-month-day-hour-minute-second'
]
var ModeColMap = /* @__PURE__ */ new Map([
  [
    'date',
    {
      template: 'YYYY-MM-DD',
      isDateTime: false,
      colNames: ['year', 'month', 'day']
    }
  ],
  [
    'time',
    {
      template: 'HH:mm:ss',
      isDateTime: false,
      colNames: ['hour', 'minute', 'second']
    }
  ],
  [
    'datetime',
    {
      template: 'YYYY-MM-DD HH:mm:ss',
      isDateTime: true,
      colNames: ['year', 'month', 'day', 'hour', 'minute', 'second']
    }
  ],
  [
    'minute-second',
    { template: 'mm:ss', isDateTime: false, colNames: ['minute', 'second'] }
  ],
  [
    'hour-minute',
    { template: 'HH:mm', isDateTime: false, colNames: ['hour', 'minute'] }
  ],
  [
    'hour-minute-second',
    {
      template: 'HH:mm:ss',
      isDateTime: false,
      colNames: ['hour', 'minute', 'second']
    }
  ],
  [
    'day-hour',
    { template: 'DD HH', isDateTime: true, colNames: ['day', 'hour'] }
  ],
  [
    'month-day',
    { template: 'MM-DD', isDateTime: false, colNames: ['month', 'day'] }
  ],
  [
    'month-day-hour',
    {
      template: 'MM-DD HH',
      isDateTime: true,
      colNames: ['month', 'day', 'hour']
    }
  ],
  [
    'month-day-hour-minute',
    {
      template: 'MM-DD HH:mm',
      isDateTime: true,
      colNames: ['month', 'day', 'hour', 'minute']
    }
  ],
  [
    'year-month',
    { template: 'YYYY-MM', isDateTime: false, colNames: ['year', 'month'] }
  ],
  [
    'year-month-day',
    {
      template: 'YYYY-MM-DD',
      isDateTime: false,
      colNames: ['year', 'month', 'day']
    }
  ],
  [
    'year-month-day-hour',
    {
      template: 'YYYY-MM-DD HH',
      isDateTime: true,
      colNames: ['year', 'month', 'day', 'hour']
    }
  ],
  [
    'year-month-day-hour-minute',
    {
      template: 'YYYY-MM-DD HH:mm',
      isDateTime: true,
      colNames: ['year', 'month', 'day', 'hour', 'minute']
    }
  ],
  [
    'year-month-day-hour-minute-second',
    {
      template: 'YYYY-MM-DD HH:mm:ss',
      isDateTime: true,
      colNames: ['year', 'month', 'day', 'hour', 'minute', 'second']
    }
  ]
])
function getCopMapItem(mode) {
  return ModeColMap.get(mode)
}
var parseRows = (index, parent, { minDate, maxDate, mode, filter }) => {
  const { colNames } = getCopMapItem(mode)
  const colName = colNames[index]
  const parentIndexes = (parent == null ? void 0 : parent.indexes) || []
  const parentValues = (parent == null ? void 0 : parent.values) || []
  const rows = []
  function pushRow(i, j) {
    if (filter(i, colName) !== false) {
      rows.push({
        label: i.toString(),
        value: i,
        indexes: [...parentIndexes, j],
        values: [...parentValues, i],
        hasChildren: index < colNames.length - 1
      })
    }
  }
  if (colName === 'year') {
    const min = minDate.getFullYear()
    const max = maxDate.getFullYear()
    for (let i = min, j = 0; i <= max; i++, j++) {
      pushRow(i, j)
    }
  } else if (colName === 'month') {
    parent = parent
    const min = 1
    const max = 12
    let djs = day_default()
    if (parentValues.length > 0) {
      djs = djs.year(parentValues[0])
    }
    djs = djs.startOf('year')
    const d = djs.toDate()
    for (let i = min, j = 0; i <= max; i++, j++) {
      d.setMonth(i - 1)
      if (
        d.getTime() >= minDate.getTime() &&
        d.getTime() <= maxDate.getTime()
      ) {
        pushRow(i, j)
      }
    }
  } else if (colName === 'day') {
    let djs = day_default()
    if (parentValues.length > 1) {
      djs = djs.year(parentValues[0]).month(parentValues[1] - 1)
    } else if (parentValues.length > 0) {
      djs = djs.month(parentValues[0] - 1)
    }
    djs = djs.startOf('month')
    const min = 1
    const max = djs.daysInMonth()
    const d = djs.toDate()
    for (let i = min, j = 0; i <= max; i++, j++) {
      d.setDate(i)
      if (
        d.getTime() >= minDate.getTime() &&
        d.getTime() <= maxDate.getTime()
      ) {
        pushRow(i, j)
      }
    }
  } else {
    let djs = day_default()
    if (colName === 'hour') {
      djs = djs.startOf('day')
    } else if (colName === 'minute') {
      if (parentValues.length > 0) {
        djs = djs.hour(parentValues[parentValues.length - 1])
      }
      djs = djs.startOf('hour')
    } else {
      if (parentValues.length > 1) {
        djs = djs.hour(parentValues[parentValues.length - 2])
      }
      if (parentValues.length > 0) {
        djs = djs.minute(parentValues[parentValues.length - 1])
      }
      djs = djs.startOf('minute')
    }
    for (let i = 0, max = colName === 'hour' ? 24 : 60; i < max; i++) {
      if (colName === 'hour') {
        djs = djs.hour(i)
      } else if (colName === 'minute') {
        djs = djs.minute(i)
      } else {
        djs = djs.second(i)
      }
      if (
        djs.valueOf() >= minDate.getTime() &&
        djs.valueOf() <= maxDate.getTime()
      ) {
        pushRow(i, i)
      }
    }
  }
  return rows
}
function array2Date(array, mode) {
  let djs = day_default().millisecond(0)
  const { colNames } = getCopMapItem(mode)
  switch (colNames[colNames.length - 1]) {
    case 'minute': {
      djs = djs.second(0)
      break
    }
    case 'hour': {
      djs = djs.minute(0).second(0)
      break
    }
    case 'day': {
      djs = djs.hour(0).minute(0).second(0)
      break
    }
    case 'month': {
      djs = djs.date(1).hour(0).minute(0).second(0)
      break
    }
    default:
      break
  }
  array.forEach((v, k) => {
    const colName = colNames[k]
    v = v
    djs = djs[colName === 'day' ? 'date' : colName](
      colName === 'month' ? v - 1 : v
    )
  })
  return djs.toDate()
}
function getFormatTemplate(template, mode) {
  let newTemplate = template || void 0
  if (newTemplate == null) {
    newTemplate = getCopMapItem(mode).template
  }
  return newTemplate
}
function day2Array(djs, mode) {
  const dNameIndexes = ['year', 'month', 'day', 'hour', 'minute', 'second']
  const { colNames } = getCopMapItem(mode)
  const valueArray = []
  if (djs && djs.isValid()) {
    const dArray = djs.toArray()
    dArray[1] = dArray[1] + 1
    colNames.forEach(name => {
      valueArray.push(dArray[dNameIndexes.indexOf(name)])
    })
  }
  return valueArray
}

// src/DatePicker/date-picker.ts
var commonProps4 = {
  modelValue: {
    type: [Date, String, Number, Array]
  },
  formatTemplate: {
    type: String,
    default: null
  },
  initialMode: {
    type: String,
    default: MODE_NAMES3[0]
  },
  minDate: {
    type: Date,
    default: () => day_default().startOf('day').subtract(9, 'year').toDate()
  },
  maxDate: {
    type: Date,
    default: () =>
      day_default().add(1, 'day').startOf('day').subtract(1, 'second').toDate()
  },
  filter: {
    type: Function,
    default: () => true
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  }
}

// src/DatePicker/use-date-picker.ts
import { provide as provide7 } from 'vue'
function useHandlers2(props) {
  const mode = getEnumsValue(MODE_NAMES3, props.initialMode)
  const optionsHandler = (index, parent) => {
    let minDate = props.minDate
    let maxDate = props.maxDate
    if (minDate.getTime() > maxDate.getTime()) {
      maxDate = [minDate, (minDate = maxDate)][0]
    }
    return parseRows(index, parent || null, {
      filter: props.filter,
      minDate,
      maxDate,
      mode
    })
  }
  const parser2 = value => {
    if (props.parser) {
      return props.parser(value)
    }
    let djs = null
    if (value instanceof Date) {
      djs = day_default(value)
    } else if (
      props.formatTemplate &&
      value != null &&
      value !== '' &&
      typeof value === 'string'
    ) {
      djs = day_default(value, props.formatTemplate, true)
    }
    return day2Array(djs, mode)
  }
  const defaultValueGetter = () => {
    let min = props.minDate.getTime()
    let max = props.maxDate.getTime()
    if (min > max) {
      max = [min, (min = max)][0]
    }
    return parser2(new Date(rangeNumber(Date.now(), min, max)))
  }
  const labelFormatter2 = array => {
    return array.length === 0
      ? ''
      : day_default(array2Date(array, mode)).format(
          getFormatTemplate(props.formatTemplate, mode)
        )
  }
  const formatter2 = (valueArray, labelArray) => {
    if (props.formatter) {
      return props.formatter(valueArray, labelArray)
    }
    const label = labelFormatter2(labelArray)
    return {
      value: props.formatTemplate ? label : array2Date(valueArray, mode),
      label
    }
  }
  const handlers = {
    optionsHandler,
    formatter: formatter2,
    parser: parser2,
    defaultValueGetter,
    labelFormatter: labelFormatter2
  }
  provide7('fxPickerHandlers', handlers)
  return { handlers }
}

// vue:./DatePicker.vue
import {
  resolveComponent as _resolveComponent34,
  createVNode as _createVNode23,
  openBlock as _openBlock48,
  createBlock as _createBlock29,
  createCommentVNode as _createCommentVNode29,
  normalizeClass as _normalizeClass36,
  createElementBlock as _createElementBlock41
} from 'vue'
var _sfc_script49 = defineComponent49({
  name: 'fx-date-picker',
  components: { SelectorField: _sfc_script27, PickerPopup: _sfc_script33 },
  props: { ...commonProps4, ...pickerProps },
  emits: { ...pickerEmits },
  setup(props, ctx) {
    const { handlers } = useHandlers2(props)
    return {
      ...usePicker(props, ctx, { name: 'picker', handlers })
    }
  }
})
function render48(_ctx, _cache) {
  const _component_SelectorField = _resolveComponent34('SelectorField')
  const _component_PickerPopup = _resolveComponent34('PickerPopup')
  return (
    _openBlock48(),
    _createElementBlock41(
      'div',
      {
        class: _normalizeClass36(['fx-picker', { disabled: _ctx.disabled }]),
        ref: 'root'
      },
      [
        _createVNode23(
          _component_SelectorField,
          {
            label: _ctx.fieldLabel,
            value: _ctx.fieldValue,
            disabled: _ctx.disabled,
            name: _ctx.name,
            placeholder: _ctx.placeholder,
            onFieldClick: _ctx.onFieldClick
          },
          null,
          8,
          ['label', 'value', 'disabled', 'name', 'placeholder', 'onFieldClick']
        ),
        _ctx.isInitPopup
          ? (_openBlock48(),
            _createBlock29(
              _component_PickerPopup,
              {
                key: 0,
                title: _ctx.placeholder,
                formatter: _ctx.formatter,
                parser: _ctx.parser,
                visible: _ctx.popupVisible,
                'onUpdate:visible':
                  _cache[0] ||
                  (_cache[0] = $event => (_ctx.popupVisible = $event)),
                onConfirm: _ctx.onConfirm,
                ref: 'popup'
              },
              null,
              8,
              ['title', 'formatter', 'parser', 'visible', 'onConfirm']
            ))
          : _createCommentVNode29('v-if', true)
      ],
      2
    )
  )
}
_sfc_script49.render = render48
_sfc_script49.__file = 'src/DatePicker/DatePicker.vue'

// vue:../DatePicker/DatePickerPopup.vue
import { defineComponent as defineComponent50 } from 'vue'
import {
  resolveComponent as _resolveComponent35,
  createVNode as _createVNode24,
  withCtx as _withCtx14,
  openBlock as _openBlock49,
  createBlock as _createBlock30
} from 'vue'
var _sfc_script50 = defineComponent50({
  name: 'fx-date-picker-popup',
  components: {
    PickerView: _sfc_script32,
    Drawer: _sfc_script8,
    NavBar: _sfc_script7
  },
  props: {
    ...popupExtendProps,
    ...commonProps4,
    ...pickerPopupProps
  },
  emits: {
    ...pickerPopupEmits
  },
  setup(props, ctx) {
    useHandlers2(props)
    const popup = usePopupExtend(ctx)
    const pickerPopup = usePickerPopup(props, ctx, popup)
    return {
      ...popup,
      ...pickerPopup,
      locale
    }
  }
})
function render49(_ctx, _cache) {
  const _component_NavBar = _resolveComponent35('NavBar')
  const _component_PickerView = _resolveComponent35('PickerView')
  const _component_Drawer = _resolveComponent35('Drawer')
  return (
    _openBlock49(),
    _createBlock30(
      _component_Drawer,
      {
        class: 'fx-picker-popup fx-date-picker-popup',
        placement: 'bottom',
        visible: _ctx.visible,
        onVisibleStateChange: _ctx.onVisibleStateChange,
        onCancel: _ctx.onCancel,
        onConfirm: _ctx.onConfirm,
        'onUpdate:visible': _ctx.onUpdateVisible,
        ref: 'popup'
      },
      {
        header: _withCtx14(() => [
          _createVNode24(
            _component_NavBar,
            {
              class: 'fx-drawer_header',
              title: _ctx.title,
              leftButtons: [
                { text: _ctx.locale.datePickerCancelText, type: 'primary' }
              ],
              rightButtons: [
                { text: _ctx.locale.datePickerConfirmText, type: 'primary' }
              ],
              iconOnly: false,
              onLeftButtonClick: _ctx.onHeaderLeftClick,
              onRightButtonClick: _ctx.onHeaderRightClick
            },
            null,
            8,
            [
              'title',
              'leftButtons',
              'rightButtons',
              'onLeftButtonClick',
              'onRightButtonClick'
            ]
          )
        ]),
        default: _withCtx14(() => [
          _createVNode24(
            _component_PickerView,
            {
              ref: 'view',
              formatter: _ctx.formatter,
              parser: _ctx.parser
            },
            null,
            8,
            ['formatter', 'parser']
          )
        ]),
        _: 1
      },
      8,
      [
        'visible',
        'onVisibleStateChange',
        'onCancel',
        'onConfirm',
        'onUpdate:visible'
      ]
    )
  )
}
_sfc_script50.render = render49
_sfc_script50.__file = 'src/DatePicker/DatePickerPopup.vue'

// src/DatePickerPopup/index.ts
var showDatePicker = createShowPopup({
  apiName: 'showDatePicker',
  component: _sfc_script50,
  createHook: createConfirmHook
})
var DatePickerPopup_default = _sfc_script50
var install47 = withInstall(_sfc_script50)

// src/DatePicker/index.ts
var DatePicker_default = _sfc_script49
var install48 = withInstall(_sfc_script49)

// vue:../DatePicker/DatePickerView.vue
import { defineComponent as defineComponent51 } from 'vue'
import {
  resolveComponent as _resolveComponent36,
  openBlock as _openBlock50,
  createBlock as _createBlock31
} from 'vue'
var _sfc_script51 = defineComponent51({
  name: 'fx-date-picker-view',
  components: { PickerView: _sfc_script32 },
  props: {
    ...commonProps4
  },
  emits: { ...pickerValueEmits },
  setup(props, ctx) {
    const { emit } = ctx
    useHandlers2(props)
    function onChange(e) {
      emit('change', e)
    }
    function onUpdateValue(e) {
      emit('update:modelValue', e)
    }
    return {
      onChange,
      onUpdateValue
    }
  }
})
function render50(_ctx, _cache) {
  const _component_PickerView = _resolveComponent36('PickerView')
  return (
    _openBlock50(),
    _createBlock31(
      _component_PickerView,
      {
        class: 'fx-date-picker-view',
        'onUpdate:modelValue': _ctx.onUpdateValue,
        onChange: _ctx.onChange
      },
      null,
      8,
      ['onUpdate:modelValue', 'onChange']
    )
  )
}
_sfc_script51.render = render50
_sfc_script51.__file = 'src/DatePicker/DatePickerView.vue'

// src/DatePickerView/index.ts
var install49 = withInstall(_sfc_script51)
var DatePickerView_default = _sfc_script51

// vue:./Range.vue
import {
  defineComponent as defineComponent52,
  watch as watch24,
  nextTick as nextTick8,
  reactive as reactive9,
  computed as computed25
} from 'vue'
import {
  normalizeStyle as _normalizeStyle21,
  createElementVNode as _createElementVNode32,
  toDisplayString as _toDisplayString25,
  normalizeClass as _normalizeClass37,
  openBlock as _openBlock51,
  createElementBlock as _createElementBlock42
} from 'vue'
var isValue6 = value => isNumberArray(value)
var _sfc_script52 = defineComponent52({
  name: 'fx-range',
  props: {
    ...formItemProps,
    ...slideProps,
    modelValue: {
      type: Array,
      validator: isValue6
    },
    allowSameValue: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    'update:modelValue': isValue6,
    change: isValue6,
    input: isValue6
  },
  setup(props, ctx) {
    const progress = reactive9([0, 0])
    const progressValue = reactive9([0, 0])
    const { emit } = ctx
    const {
      sliderEl,
      toInteger,
      rangeValue,
      value2Progress,
      getMinMax,
      styles
    } = useSlide(props, {
      getValue($target) {
        const { thumb, index } = $target.dataset
        return thumb ? progressValue[parseInt(index)] : 0
      },
      move({ value: newVal, progress: newProgress, $target }) {
        const { thumb } = $target.dataset
        let index = 0
        if (thumb) {
          index = parseInt($target.dataset.index)
        } else {
          if (
            Math.abs(progressValue[0] - newVal) >
            Math.abs(progressValue[1] - newVal)
          ) {
            index = 1
          }
        }
        if (!props.allowSameValue && newVal === progressValue[1 - index]) {
        } else {
          progressValue[index] = newVal
          progress[index] = newProgress
          emitModel()
          emit('input', getValue2())
        }
      },
      end({ isChange }) {
        isChange && emit('change', getValue2())
      }
    })
    function valueHandler(val) {
      let newVal = []
      if (isNumberArray(val) && val.length > 1) {
        newVal = cloneData(val)
      } else if (typeof val === 'string') {
        newVal = val.split(',').map(v => {
          return toInteger(v)
        })
        if (newVal.length < 2) {
          newVal = []
        }
      }
      return newVal.slice(0, 2).sort(sortBy)
    }
    function getValue2() {
      return valueHandler(progressValue)
    }
    function sortBy(a, b) {
      return a - b
    }
    function emitModel() {
      if (
        props.modelValue == null ||
        getValue2() !== valueHandler(props.modelValue)
      ) {
        emit('update:modelValue', getValue2())
        return true
      }
      return false
    }
    function rangeValues(vals) {
      vals[0] = rangeValue(vals[0])
      vals[1] = rangeValue(vals[1])
      return vals
    }
    function updateValue(val) {
      let newVal = valueHandler(val)
      if (newVal.length === 0) {
        return
      }
      newVal = rangeValues(newVal)
      if (!isSameArray(newVal, getValue2())) {
        progressValue[0] = newVal[0]
        progressValue[1] = newVal[1]
        progress[0] = value2Progress(newVal[0])
        progress[1] = value2Progress(newVal[1])
      }
    }
    watch24(
      () => props.modelValue,
      val => updateValue(val)
    )
    watch24([() => props.min, () => props.max], () => {
      nextTick8(() => {
        updateValue(progressValue)
        if (emitModel()) {
          emit('change', getValue2())
        }
      })
    })
    const inputValue = computed25(() => {
      return getValue2().join(',')
    })
    const { min, max } = getMinMax()
    updateValue([min, max])
    updateValue(props.modelValue)
    if (emitModel()) {
      emit('change', getValue2())
    }
    return {
      inputValue,
      sliderEl,
      progress,
      progressValue,
      styles
    }
  }
})
var _hoisted_137 = {
  class: 'fx-slider_inner',
  ref: 'sliderEl'
}
var _hoisted_225 = { class: 'fx-slider_box' }
var _hoisted_321 = ['name', 'disabled', 'value']
function render51(_ctx, _cache) {
  return (
    _openBlock51(),
    _createElementBlock42(
      'div',
      {
        class: _normalizeClass37([
          'fx-slider fx-range',
          { disabled: !!_ctx.disabled }
        ]),
        style: _normalizeStyle21(_ctx.styles)
      },
      [
        _createElementVNode32(
          'div',
          _hoisted_137,
          [
            _createElementVNode32('div', _hoisted_225, [
              _createElementVNode32(
                'div',
                {
                  class: 'fx-slider_track',
                  style: _normalizeStyle21({
                    left:
                      Math.min(_ctx.progress[0], _ctx.progress[1]) * 100 + '%',
                    width:
                      Math.abs(_ctx.progress[1] - _ctx.progress[0]) * 100 + '%'
                  })
                },
                null,
                4
              ),
              _createElementVNode32(
                'div',
                {
                  class: 'fx-slider_thumb',
                  'data-thumb': 'true',
                  'data-index': '0',
                  style: _normalizeStyle21({
                    left: _ctx.progress[0] * 100 + '%'
                  })
                },
                _toDisplayString25(_ctx.showValue ? _ctx.progressValue[0] : ''),
                5
              ),
              _createElementVNode32(
                'div',
                {
                  class: 'fx-slider_thumb',
                  'data-thumb': 'true',
                  'data-index': '1',
                  style: _normalizeStyle21({
                    left: _ctx.progress[1] * 100 + '%'
                  })
                },
                _toDisplayString25(_ctx.showValue ? _ctx.progressValue[1] : ''),
                5
              )
            ]),
            _createElementVNode32(
              'input',
              {
                type: 'hidden',
                name: _ctx.name,
                disabled: _ctx.disabled,
                value: _ctx.inputValue,
                ref: 'input'
              },
              null,
              8,
              _hoisted_321
            )
          ],
          512
        )
      ],
      6
    )
  )
}
_sfc_script52.render = render51
_sfc_script52.__file = 'src/Range/Range.vue'

// src/Range/index.ts
var install50 = withInstall(_sfc_script52)
var Range_default = _sfc_script52

// vue:./Notify.vue
import {
  defineComponent as defineComponent54,
  onBeforeUnmount as onBeforeUnmount16
} from 'vue'

// vue:./NoticeBar.vue
import {
  defineComponent as defineComponent53,
  computed as computed26,
  onMounted as onMounted17,
  onBeforeUnmount as onBeforeUnmount15,
  inject as inject8,
  ref as ref34,
  watch as watch25
} from 'vue'
import {
  resolveComponent as _resolveComponent37,
  createVNode as _createVNode25,
  openBlock as _openBlock52,
  createElementBlock as _createElementBlock43,
  createCommentVNode as _createCommentVNode30,
  renderSlot as _renderSlot25,
  toDisplayString as _toDisplayString26,
  createTextVNode as _createTextVNode13,
  normalizeClass as _normalizeClass38,
  normalizeStyle as _normalizeStyle22,
  createElementVNode as _createElementVNode33,
  vShow as _vShow10,
  withDirectives as _withDirectives10
} from 'vue'
var modeMaps = /* @__PURE__ */ new Map([
  ['default', ''],
  ['clickable', 'RightOutlined'],
  ['closable', 'CloseOutlined']
])
var _sfc_script53 = defineComponent53({
  name: 'fx-notice-bar',
  components: { Icon: _sfc_script2 },
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      validator: val => modeMaps.get(val) != null,
      default: 'default'
    },
    leftIcon: {
      type: [String, Object],
      validator: iconValidator
    },
    rightIcon: {
      type: [String, Object],
      validator: iconValidator
    },
    color: {
      type: String,
      validator: colorValidator
    },
    marquee: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator: createEnumsValidator(STATE_TYPES),
      default: null
    }
  },
  emits: {
    'update:visible': visible => typeof visible === 'boolean',
    show: emitTypeValidator,
    hide: emitTypeValidator,
    'close-click': emitTypeValidator
  },
  setup(props, ctx) {
    const { emit } = ctx
    const notifyExist = inject8('fxNotifyExist', false)
    const visible2 = ref34(!!props.visible)
    const marqueeX = ref34(0)
    const marqueeDuration = ref34(0)
    const contentEl = ref34()
    let marqueeTimer
    function marqueeStep(x, pW) {
      marqueeX.value = pW
      marqueeDuration.value = 0
      marqueeTimer = window.setTimeout(() => {
        marqueeX.value = -x
        marqueeDuration.value = x / 30
        marqueeTimer = window.setTimeout(() => {
          marqueeStep(x, pW)
        }, (x / 28) * 1e3)
      }, 17)
    }
    function stopMarquee() {
      clearTimeout(marqueeTimer)
      marqueeX.value = 0
      marqueeDuration.value = 0
    }
    function startMarquee() {
      stopMarquee()
      const $content = contentEl.value
      const w = $content.offsetWidth
      const pW = $content.parentElement.offsetWidth
      if (w > pW) {
        marqueeStep(w, pW)
      }
    }
    function resetMarquee() {
      props.marquee ? startMarquee() : stopMarquee()
    }
    function show() {
      if (!visible2.value) {
        emit('update:visible', true)
        visible2.value = true
        emit('show', { type: 'show' })
      }
    }
    function hide() {
      if (visible2.value) {
        emit('update:visible', false)
        visible2.value = false
        emit('hide', { type: 'hide' })
      }
    }
    function onRightIconClick() {
      if (props.mode === 'closable') {
        if (!notifyExist) {
          hide()
        }
        emit('close-click', { type: 'close-click' })
      }
    }
    onMounted17(() => props.marquee && startMarquee())
    onBeforeUnmount15(() => stopMarquee())
    watch25([() => props.marquee, () => props.title], () => {
      resetMarquee()
    })
    const rightIcon2 = computed26(() => {
      return props.rightIcon || modeMaps.get(props.mode) || null
    })
    const styles = computed26(() => {
      const obj2 = {}
      const colorObj = getColorObject(props.color)
      if (colorObj.hasColor) {
        obj2[`--fx-color`] = colorObj.varBackgroundColor
        obj2[`--fx-front-color`] = colorObj.varFrontColor
      }
      return obj2
    })
    const contentStyles = computed26(() => {
      const obj2 = {}
      marqueeX.value !== 0 &&
        (obj2.transform = `translateX(${marqueeX.value}px)`)
      marqueeDuration.value > 0 &&
        (obj2.transitionDuration = `${marqueeDuration.value}s`)
      return obj2
    })
    const typeClassName = computed26(() => {
      return 'type--' + getEnumsValue(STATE_TYPES, props.type)
    })
    watch25(
      () => props.visible,
      val => {
        visible2.value = !!val
      }
    )
    return {
      show,
      hide,
      contentEl,
      visible2,
      rightIcon2,
      styles,
      contentStyles,
      typeClassName,
      onRightIconClick
    }
  }
})
var _hoisted_138 = {
  key: 0,
  class: 'fx-notice-bar_left-icon'
}
var _hoisted_226 = { class: 'fx-notice-bar_content' }
function render52(_ctx, _cache) {
  const _component_Icon = _resolveComponent37('Icon')
  return _withDirectives10(
    (_openBlock52(),
    _createElementBlock43(
      'div',
      {
        class: _normalizeClass38(['fx-notice-bar', [_ctx.typeClassName]]),
        style: _normalizeStyle22(_ctx.styles)
      },
      [
        _ctx.leftIcon
          ? (_openBlock52(),
            _createElementBlock43('div', _hoisted_138, [
              _createVNode25(
                _component_Icon,
                { icon: _ctx.leftIcon },
                null,
                8,
                ['icon']
              )
            ]))
          : _createCommentVNode30('v-if', true),
        _createElementVNode33('div', _hoisted_226, [
          _createElementVNode33(
            'div',
            {
              ref: 'contentEl',
              class: _normalizeClass38([
                'fx-notice-bar_content-inner',
                { marquee: !!_ctx.marquee }
              ]),
              style: _normalizeStyle22(_ctx.contentStyles)
            },
            [
              _renderSlot25(_ctx.$slots, 'default', {}, () => [
                _createTextVNode13(_toDisplayString26(_ctx.title), 1)
              ])
            ],
            6
          )
        ]),
        _ctx.rightIcon2
          ? (_openBlock52(),
            _createElementBlock43(
              'div',
              {
                key: 1,
                class: 'fx-notice-bar_right-icon',
                onClick:
                  _cache[0] ||
                  (_cache[0] = (...args) =>
                    _ctx.onRightIconClick && _ctx.onRightIconClick(...args))
              },
              [
                _createVNode25(
                  _component_Icon,
                  { icon: _ctx.rightIcon2 },
                  null,
                  8,
                  ['icon']
                )
              ]
            ))
          : _createCommentVNode30('v-if', true)
      ],
      6
    )),
    [[_vShow10, _ctx.visible2]]
  )
}
_sfc_script53.render = render52
_sfc_script53.__file = 'src/NoticeBar/NoticeBar.vue'

// src/NoticeBar/index.ts
var install51 = withInstall(_sfc_script53)
var NoticeBar_default = _sfc_script53

// vue:./Notify.vue
import {
  resolveComponent as _resolveComponent38,
  createVNode as _createVNode26,
  vShow as _vShow11,
  mergeProps as _mergeProps10,
  createElementVNode as _createElementVNode34,
  withDirectives as _withDirectives11,
  Teleport as _Teleport7,
  openBlock as _openBlock53,
  createBlock as _createBlock32
} from 'vue'
var _sfc_script54 = defineComponent54({
  name: 'fx-notify',
  components: { NoticeBar: _sfc_script53 },
  provide() {
    return {
      fxNotifyExist: true
    }
  },
  props: {
    ...popupProps,
    closable: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    icon: {
      type: [String, Object],
      validator: iconValidator
    },
    color: {
      type: String
    },
    duration: {
      type: Number,
      default: 0
    },
    type: {
      type: String
    }
  },
  emits: {
    ...popupEmits,
    'close-click': emitTypeValidator
  },
  setup(props, ctx) {
    const { emit } = ctx
    let durationTimer
    const popup = usePopup(props, ctx, {
      forbidScroll: false,
      afterCancel: removeAutoClose,
      afterShow: setAutoClose
    })
    function removeAutoClose() {
      clearTimeout(durationTimer)
    }
    function setAutoClose() {
      if (props.duration > 0) {
        durationTimer = window.setTimeout(() => {
          popup.customCancel('auto', true)
        }, props.duration)
      }
    }
    function onClose() {
      emit('close-click', {
        type: 'close-click'
      })
      popup.customCancel('activeClick', true)
    }
    onBeforeUnmount16(removeAutoClose)
    return {
      ...popup,
      onClose
    }
  }
})
function render53(_ctx, _cache) {
  const _component_NoticeBar = _resolveComponent38('NoticeBar')
  return (
    _openBlock53(),
    _createBlock32(_Teleport7, { to: 'body' }, [
      _withDirectives11(
        _createElementVNode34(
          'div',
          _mergeProps10(
            {
              class: ['fx-notify fx-popup', { visible: _ctx.visible2 }],
              style: _ctx.popupStyles
            },
            _ctx.$attrs
          ),
          [
            _createVNode26(
              _component_NoticeBar,
              {
                class: 'fx-notify_inner',
                type: _ctx.type,
                leftIcon: _ctx.icon,
                title: _ctx.title,
                color: _ctx.color,
                mode: _ctx.closable ? 'closable' : 'default',
                onCloseClick: _ctx.onClose
              },
              null,
              8,
              ['type', 'leftIcon', 'title', 'color', 'mode', 'onCloseClick']
            )
          ],
          16
        ),
        [[_vShow11, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script54.render = render53
_sfc_script54.__file = 'src/Notify/Notify.vue'

// src/Notify/index.ts
var showNotify = createShowPopup({
  apiName: 'showNotify',
  component: _sfc_script54,
  createHook: createAlertHook,
  singleMode: true,
  hookOptions: options => {
    if (options.duration == null) {
      options.duration = 1500
    }
    return options
  }
})
var hideNotify = createHidePopup({
  apiName: 'hideNotify'
})
var Notify_default = _sfc_script54
var install52 = withInstall(_sfc_script54)

// vue:./ActionSheet.vue
import {
  computed as computed27,
  defineComponent as defineComponent55
} from 'vue'
import {
  renderList as _renderList15,
  Fragment as _Fragment16,
  openBlock as _openBlock54,
  createElementBlock as _createElementBlock44,
  toDisplayString as _toDisplayString27,
  createElementVNode as _createElementVNode35,
  createCommentVNode as _createCommentVNode31,
  normalizeClass as _normalizeClass39,
  resolveComponent as _resolveComponent39,
  withCtx as _withCtx15,
  createBlock as _createBlock33
} from 'vue'
var confirmValidator = payload =>
  payload &&
  typeof payload.index === 'number' &&
  payload.item &&
  typeof payload.item.name === 'string'
var _sfc_script55 = defineComponent55({
  name: 'fx-action-sheet',
  components: { Drawer: _sfc_script8 },
  props: {
    ...popupExtendProps,
    title: {
      type: String,
      default: null
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: { ...popupEmits, confirm: confirmValidator },
  setup(props, ctx) {
    const popup = usePopupExtend(ctx)
    function onItemClick(index) {
      popup.customConfirm({
        index,
        item: {
          name: props.options[index].name
        }
      })
    }
    const options2 = computed27(() => {
      const options = []
      if (Array.isArray(props.options)) {
        props.options.forEach(v => {
          options.push(
            isObject(v)
              ? cloneData(v)
              : {
                  name: v.toString()
                }
          )
        })
      }
      return options
    })
    return {
      ...popup,
      options2,
      onItemClick,
      locale
    }
  }
})
var _hoisted_139 = { class: 'fx-action-sheet_list' }
var _hoisted_227 = ['onClick']
var _hoisted_322 = { key: 0 }
var _hoisted_415 = {
  key: 0,
  class: 'fx-action-sheet_list'
}
var _hoisted_57 = { class: 'fx-action-sheet_item-inner align--center' }
function render54(_ctx, _cache) {
  const _component_Drawer = _resolveComponent39('Drawer')
  return (
    _openBlock54(),
    _createBlock33(
      _component_Drawer,
      {
        class: 'fx-action-sheet',
        title: _ctx.title,
        placement: 'bottom',
        visible: _ctx.visible,
        onVisibleStateChange: _ctx.onVisibleStateChange,
        onConfirm: _ctx.onConfirm,
        onCancel: _ctx.onCancel,
        'onUpdate:visible': _ctx.onUpdateVisible,
        ref: 'popup'
      },
      {
        default: _withCtx15(() => [
          _createElementVNode35('ul', _hoisted_139, [
            (_openBlock54(true),
            _createElementBlock44(
              _Fragment16,
              null,
              _renderList15(_ctx.options2, (item, index) => {
                return (
                  _openBlock54(),
                  _createElementBlock44(
                    'li',
                    {
                      class: _normalizeClass39([
                        'fx-action-sheet_item fx-horizontal-hairline',
                        { disabled: !!item.disabled }
                      ]),
                      key: index,
                      onClick: $event => _ctx.onItemClick(index)
                    },
                    [
                      _createElementVNode35(
                        'div',
                        {
                          class: _normalizeClass39([
                            'fx-action-sheet_item-inner',
                            { highlight: item.highlight }
                          ])
                        },
                        [
                          _createElementVNode35(
                            'span',
                            null,
                            _toDisplayString27(item.name),
                            1
                          ),
                          item.description
                            ? (_openBlock54(),
                              _createElementBlock44(
                                'small',
                                _hoisted_322,
                                _toDisplayString27(item.description),
                                1
                              ))
                            : _createCommentVNode31('v-if', true)
                        ],
                        2
                      )
                    ],
                    10,
                    _hoisted_227
                  )
                )
              }),
              128
            ))
          ]),
          _ctx.showCancel
            ? (_openBlock54(),
              _createElementBlock44('ul', _hoisted_415, [
                _createElementVNode35(
                  'li',
                  {
                    class: 'fx-action-sheet_item fx-horizontal-hairline',
                    onClick:
                      _cache[0] ||
                      (_cache[0] = (...args) =>
                        _ctx.onCancelClick && _ctx.onCancelClick(...args))
                  },
                  [
                    _createElementVNode35('div', _hoisted_57, [
                      _createElementVNode35(
                        'span',
                        null,
                        _toDisplayString27(
                          _ctx.cancelText || _ctx.locale.actionSheetCancelText
                        ),
                        1
                      )
                    ])
                  ]
                )
              ]))
            : _createCommentVNode31('v-if', true)
        ]),
        _: 1
      },
      8,
      [
        'title',
        'visible',
        'onVisibleStateChange',
        'onConfirm',
        'onCancel',
        'onUpdate:visible'
      ]
    )
  )
}
_sfc_script55.render = render54
_sfc_script55.__file = 'src/ActionSheet/ActionSheet.vue'

// src/ActionSheet/index.ts
var showActionSheet = createShowPopup({
  apiName: 'showActionSheet',
  component: _sfc_script55,
  createHook: createConfirmHook
})
var ActionSheet_default = _sfc_script55
var install53 = withInstall(_sfc_script55)

// vue:../Popover/PopDialog.vue
import { defineComponent as defineComponent56 } from 'vue'
import {
  createElementVNode as _createElementVNode36,
  normalizeStyle as _normalizeStyle23,
  toDisplayString as _toDisplayString28,
  createTextVNode as _createTextVNode14,
  resolveComponent as _resolveComponent40,
  withCtx as _withCtx16,
  openBlock as _openBlock55,
  createBlock as _createBlock34,
  createCommentVNode as _createCommentVNode32,
  createVNode as _createVNode27,
  vShow as _vShow12,
  mergeProps as _mergeProps11,
  withDirectives as _withDirectives12,
  Teleport as _Teleport8
} from 'vue'
var _sfc_script56 = defineComponent56({
  name: 'fx-pop-dialog',
  components: { Button: _sfc_script3, ButtonGroup: _sfc_script4 },
  props: {
    ...popoverProps,
    content: {
      type: String,
      default: '',
      required: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String
    },
    confirmText: {
      type: String
    }
  },
  emits: { ...popoverEmits },
  setup(props, ctx) {
    const popoverHook = usePopover(props, ctx)
    function onConfirmClick() {
      popoverHook.customConfirm({})
    }
    return {
      ...popoverHook,
      onConfirmClick,
      locale
    }
  }
})
var _hoisted_140 = { class: 'fx-popover_content' }
var _hoisted_228 = { class: 'fx-pop-dialog_body' }
var _hoisted_323 = { class: 'fx-popover_text' }
var _hoisted_416 = { class: 'fx-pop-dialog_footer fx-horizontal-hairline' }
function render55(_ctx, _cache) {
  const _component_Button = _resolveComponent40('Button')
  const _component_ButtonGroup = _resolveComponent40('ButtonGroup')
  return (
    _openBlock55(),
    _createBlock34(_Teleport8, { to: 'body' }, [
      _withDirectives12(
        _createElementVNode36(
          'div',
          _mergeProps11(
            {
              class: [
                'fx-popover fx-popup fx-pop-dialog',
                { visible: _ctx.visible2, 'no--mask': !_ctx.showMask }
              ],
              style: _ctx.popupStyles
            },
            _ctx.$attrs
          ),
          [
            _createElementVNode36('div', {
              class: 'fx-mask',
              onClick:
                _cache[0] ||
                (_cache[0] = (...args) =>
                  _ctx.onMaskClick && _ctx.onMaskClick(...args))
            }),
            _createElementVNode36(
              'div',
              {
                class: 'fx-popover_inner',
                ref: 'innerEl',
                style: _normalizeStyle23(_ctx.innerStyles)
              },
              [
                _createElementVNode36(
                  'i',
                  {
                    class: 'fx-popover_arrow',
                    style: _normalizeStyle23(_ctx.arrowStyles)
                  },
                  null,
                  4
                ),
                _createElementVNode36('div', _hoisted_140, [
                  _createElementVNode36('div', _hoisted_228, [
                    _createElementVNode36(
                      'div',
                      _hoisted_323,
                      _toDisplayString28(_ctx.content),
                      1
                    )
                  ]),
                  _createElementVNode36('div', _hoisted_416, [
                    _createVNode27(
                      _component_ButtonGroup,
                      {
                        class: 'fx-pop-dialog_footer-inner',
                        pattern: 'borderless',
                        size: 'middle'
                      },
                      {
                        default: _withCtx16(() => [
                          _ctx.showCancel
                            ? (_openBlock55(),
                              _createBlock34(
                                _component_Button,
                                {
                                  key: 0,
                                  type: 'default',
                                  onClick: _ctx.onCancelClick
                                },
                                {
                                  default: _withCtx16(() => [
                                    _createTextVNode14(
                                      _toDisplayString28(
                                        _ctx.cancelText ||
                                          _ctx.locale.popDialogCancelText
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['onClick']
                              ))
                            : _createCommentVNode32('v-if', true),
                          _createVNode27(
                            _component_Button,
                            {
                              type: 'primary',
                              onClick: _ctx.onConfirmClick
                            },
                            {
                              default: _withCtx16(() => [
                                _createTextVNode14(
                                  _toDisplayString28(
                                    _ctx.confirmText ||
                                      _ctx.locale.popDialogConfirmText
                                  ),
                                  1
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['onClick']
                          )
                        ]),
                        _: 1
                      }
                    )
                  ])
                ])
              ],
              4
            )
          ],
          16
        ),
        [[_vShow12, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script56.render = render55
_sfc_script56.__file = 'src/Popover/PopDialog.vue'

// src/PopDialog/index.ts
var showPopDialog = createShowPopup({
  apiName: 'showPopDialog',
  component: _sfc_script56,
  createHook: createConfirmHook
})
var PopDialog_default = _sfc_script56
var install54 = withInstall(_sfc_script56)

// vue:./SwipeCell.vue
import {
  ref as ref35,
  defineComponent as defineComponent57,
  computed as computed28,
  reactive as reactive10
} from 'vue'
import {
  renderSlot as _renderSlot26,
  renderList as _renderList16,
  Fragment as _Fragment17,
  openBlock as _openBlock56,
  createElementBlock as _createElementBlock45,
  toDisplayString as _toDisplayString29,
  withModifiers as _withModifiers8,
  normalizeClass as _normalizeClass40,
  normalizeStyle as _normalizeStyle24,
  createElementVNode as _createElementVNode37
} from 'vue'
var _sfc_script57 = defineComponent57({
  name: 'fx-swipe-cell',
  props: {
    buttons: {
      type: Array,
      validator: items => {
        return (
          Array.isArray(items) &&
          items.filter(item => {
            return !(item && typeof item.text === 'string')
          }).length === 0
        )
      },
      default: () => []
    }
  },
  emits: {
    'button-click': payload => payload && typeof payload.index === 'number'
  },
  setup(props, ctx) {
    const root = ref35()
    const buttonsEl = ref35()
    const translateX = ref35(0)
    const duration = ref35(0)
    const buttonTranslateXs = reactive10([])
    let coords
    const swipeBlur = useBlur(hide)
    function show(x) {
      translateX.value = x
      duration.value = 0.6
      buttonTranslateXs.forEach((v, k) => {
        buttonTranslateXs[k] = 0
      })
      swipeBlur.addEvent()
    }
    function hide() {
      translateX.value = 0
      duration.value = 0.6
      buttonTranslateXs.forEach((v, k) => {
        buttonTranslateXs[k] = 0
      })
      swipeBlur.removeEvent()
    }
    function onButtonClick(item, index) {
      ctx.emit('button-click', {
        item: cloneData(item),
        index
      })
      hide()
    }
    const buttons2 = computed28(() => {
      const buttons = []
      if (Array.isArray(props.buttons)) {
        props.buttons.forEach(v => {
          if (v && typeof v.text === 'string') {
            buttons.push({
              text: v.text,
              type: getEnumsValue(STATE_TYPES, v.type)
            })
          }
        })
      }
      return buttons
    })
    useTouch({
      el: root,
      onTouchStart(e) {
        if (props.buttons.length === 0) {
          return
        }
        coords = {
          startX: e.touchObject.clientX,
          buttonsW: buttonsEl.value.clientWidth,
          isShow: translateX.value > 0,
          isSwipe: false
        }
        if (coords.isShow) {
          e.stopPropagation()
        }
      },
      onTouchMove(e) {
        if (!coords) {
          return
        }
        const { startX, buttonsW, isSwipe, isShow } = coords
        let x = startX - e.touchObject.clientX
        if (!isShow && !isSwipe && x < 0) {
          coords = null
          return
        }
        coords.isSwipe = true
        if (isShow) {
          x += buttonsW
        }
        const max = rangeNumber(x, 0, buttonsW)
        const $children = buttonsEl.value.children
        for (let i = 0, len = $children.length; i < len; i++) {
          buttonTranslateXs[i] =
            ($children[i].offsetLeft * (buttonsW - max)) / buttonsW
        }
        translateX.value =
          max + (x > buttonsW ? getStretchOffset2(x - buttonsW) : 0)
        duration.value = 0
        e.stopPropagation()
      },
      onTouchEnd(e) {
        if (coords) {
          const { isSwipe, buttonsW } = coords
          if (isSwipe && translateX.value > buttonsW / 2) {
            show(buttonsW)
          } else {
            hide()
          }
          coords = null
          e.stopPropagation()
        }
      }
    })
    return {
      root,
      buttonsEl,
      buttonTranslateXs,
      translateX,
      duration,
      buttons2,
      noop,
      onButtonClick
    }
  }
})
var _hoisted_141 = {
  class: 'fx-swipe-cell fx-horizontal-hairline',
  ref: 'root'
}
var _hoisted_229 = {
  class: 'fx-swipe-cell_buttons',
  ref: 'buttonsEl'
}
var _hoisted_324 = ['onClick']
function render56(_ctx, _cache) {
  return (
    _openBlock56(),
    _createElementBlock45(
      'div',
      _hoisted_141,
      [
        _createElementVNode37(
          'div',
          {
            class: 'fx-swipe-cell_inner',
            style: _normalizeStyle24({
              transform: 'translate3d(-' + _ctx.translateX + 'px, 0px, 0px)',
              transitionDuration: _ctx.duration + 's'
            })
          },
          [
            _renderSlot26(_ctx.$slots, 'default'),
            _createElementVNode37(
              'div',
              _hoisted_229,
              [
                (_openBlock56(true),
                _createElementBlock45(
                  _Fragment17,
                  null,
                  _renderList16(_ctx.buttons2, (item, index) => {
                    return (
                      _openBlock56(),
                      _createElementBlock45(
                        'button',
                        {
                          class: _normalizeClass40([
                            'fx-swipe-cell_button',
                            ['type--' + item.type]
                          ]),
                          key: index,
                          style: _normalizeStyle24({
                            transform:
                              'translate3d(-' +
                              (_ctx.buttonTranslateXs[index] || 0) +
                              'px, 0px, 0px)',
                            transitionDuration: _ctx.duration + 's'
                          }),
                          onClick: $event => _ctx.onButtonClick(item, index),
                          onMousedown:
                            _cache[0] ||
                            (_cache[0] = _withModifiers8(
                              (...args) => _ctx.noop && _ctx.noop(...args),
                              ['stop']
                            )),
                          onTouchstart:
                            _cache[1] ||
                            (_cache[1] = _withModifiers8(
                              (...args) => _ctx.noop && _ctx.noop(...args),
                              ['stop']
                            ))
                        },
                        _toDisplayString29(item.text),
                        47,
                        _hoisted_324
                      )
                    )
                  }),
                  128
                ))
              ],
              512
            )
          ],
          4
        )
      ],
      512
    )
  )
}
_sfc_script57.render = render56
_sfc_script57.__file = 'src/SwipeCell/SwipeCell.vue'

// src/SwipeCell/index.ts
var install55 = withInstall(_sfc_script57)
var SwipeCell_default = _sfc_script57

// vue:./SideTab.vue
import { defineComponent as defineComponent58 } from 'vue'
import {
  renderList as _renderList17,
  Fragment as _Fragment18,
  openBlock as _openBlock57,
  createElementBlock as _createElementBlock46,
  resolveComponent as _resolveComponent41,
  createBlock as _createBlock35,
  createCommentVNode as _createCommentVNode33,
  toDisplayString as _toDisplayString30,
  createElementVNode as _createElementVNode38,
  mergeProps as _mergeProps12,
  withCtx as _withCtx17,
  createVNode as _createVNode28,
  normalizeClass as _normalizeClass41
} from 'vue'
var _sfc_script58 = defineComponent58({
  name: 'fx-side-tab',
  components: { Icon: _sfc_script2, Badge: _sfc_script24 },
  props: {
    ...tabProps,
    scrollThreshold: {
      type: Number,
      default: 4
    }
  },
  emits: { ...tabEmits },
  setup(props, ctx) {
    return {
      ...useTab(props, ctx, { tabName: 'SideTab' })
    }
  }
})
var _hoisted_142 = { class: 'fx-side-tab' }
var _hoisted_230 = {
  class: 'fx-side-tab_list',
  ref: 'listEl'
}
var _hoisted_325 = ['onClick']
var _hoisted_417 = { class: 'fx-side-tab_item-text' }
function render57(_ctx, _cache) {
  const _component_Icon = _resolveComponent41('Icon')
  const _component_Badge = _resolveComponent41('Badge')
  return (
    _openBlock57(),
    _createElementBlock46('div', _hoisted_142, [
      _createElementVNode38(
        'ul',
        _hoisted_230,
        [
          (_openBlock57(true),
          _createElementBlock46(
            _Fragment18,
            null,
            _renderList17(_ctx.options2, (item, index) => {
              return (
                _openBlock57(),
                _createElementBlock46(
                  'li',
                  {
                    class: _normalizeClass41([
                      'fx-side-tab_item',
                      {
                        active: index === _ctx.activeIndex,
                        'active-prev': index === _ctx.activeIndex - 1,
                        'active-next': index === _ctx.activeIndex + 1
                      }
                    ]),
                    key: item.value,
                    onClick: $event => _ctx.onChange(item.value)
                  },
                  [
                    _createVNode28(
                      _component_Badge,
                      _mergeProps12(
                        { class: 'fx-side-tab_item-inner' },
                        item.badge
                      ),
                      {
                        default: _withCtx17(() => [
                          item.icon
                            ? (_openBlock57(),
                              _createBlock35(
                                _component_Icon,
                                {
                                  key: 0,
                                  icon:
                                    index === _ctx.activeIndex
                                      ? item.activeIcon
                                      : item.icon
                                },
                                null,
                                8,
                                ['icon']
                              ))
                            : _createCommentVNode33('v-if', true),
                          _createElementVNode38(
                            'span',
                            _hoisted_417,
                            _toDisplayString30(item.label),
                            1
                          )
                        ]),
                        _: 2
                      },
                      1040
                    )
                  ],
                  10,
                  _hoisted_325
                )
              )
            }),
            128
          ))
        ],
        512
      )
    ])
  )
}
_sfc_script58.render = render57
_sfc_script58.__file = 'src/SideTab/SideTab.vue'

// src/SideTab/index.ts
var install56 = withInstall(_sfc_script58)
var SideTab_default = _sfc_script58

// vue:./TabBar.vue
import { defineComponent as defineComponent59 } from 'vue'
import {
  renderList as _renderList18,
  Fragment as _Fragment19,
  openBlock as _openBlock58,
  createElementBlock as _createElementBlock47,
  resolveComponent as _resolveComponent42,
  createBlock as _createBlock36,
  createCommentVNode as _createCommentVNode34,
  mergeProps as _mergeProps13,
  withCtx as _withCtx18,
  createVNode as _createVNode29,
  toDisplayString as _toDisplayString31,
  createElementVNode as _createElementVNode39,
  normalizeClass as _normalizeClass42,
  normalizeStyle as _normalizeStyle25
} from 'vue'
var _sfc_script59 = defineComponent59({
  name: 'fx-tab-bar',
  components: { Image: _sfc_script5, Icon: _sfc_script2, Badge: _sfc_script24 },
  props: {
    ...tabProps,
    scrollThreshold: {
      type: Number,
      default: 4
    }
  },
  emits: { ...tabEmits },
  setup(props, ctx) {
    return {
      ...useTab(props, ctx, { tabName: 'TabBar' })
    }
  }
})
var _hoisted_143 = {
  class: 'fx-tab-bar_list',
  ref: 'listEl'
}
var _hoisted_231 = ['onClick']
var _hoisted_326 = { class: 'fx-tab-bar_item-text' }
function render58(_ctx, _cache) {
  const _component_Image = _resolveComponent42('Image')
  const _component_Icon = _resolveComponent42('Icon')
  const _component_Badge = _resolveComponent42('Badge')
  return (
    _openBlock58(),
    _createElementBlock47(
      'div',
      {
        class: 'fx-tab-bar fx-horizontal-hairline',
        style: _normalizeStyle25(_ctx.styles)
      },
      [
        _createElementVNode39(
          'ul',
          _hoisted_143,
          [
            (_openBlock58(true),
            _createElementBlock47(
              _Fragment19,
              null,
              _renderList18(_ctx.options2, (item, index) => {
                return (
                  _openBlock58(),
                  _createElementBlock47(
                    'li',
                    {
                      class: _normalizeClass42([
                        'fx-tab-bar_item',
                        {
                          active: index === _ctx.activeIndex
                        }
                      ]),
                      key: item.value,
                      onClick: $event => _ctx.onChange(item.value)
                    },
                    [
                      _createVNode29(
                        _component_Badge,
                        _mergeProps13(
                          { class: 'fx-tab-bar_item-icon' },
                          item.badge
                        ),
                        {
                          default: _withCtx18(() => [
                            item.iconLink
                              ? (_openBlock58(),
                                _createBlock36(
                                  _component_Image,
                                  {
                                    key: 0,
                                    src:
                                      index === _ctx.activeIndex
                                        ? item.activeIconLink
                                        : item.iconLink
                                  },
                                  null,
                                  8,
                                  ['src']
                                ))
                              : item.icon
                              ? (_openBlock58(),
                                _createBlock36(
                                  _component_Icon,
                                  {
                                    key: 1,
                                    icon:
                                      index === _ctx.activeIndex
                                        ? item.activeIcon
                                        : item.icon
                                  },
                                  null,
                                  8,
                                  ['icon']
                                ))
                              : _createCommentVNode34('v-if', true)
                          ]),
                          _: 2
                        },
                        1040
                      ),
                      _createElementVNode39(
                        'span',
                        _hoisted_326,
                        _toDisplayString31(item.label),
                        1
                      )
                    ],
                    10,
                    _hoisted_231
                  )
                )
              }),
              128
            ))
          ],
          512
        )
      ],
      4
    )
  )
}
_sfc_script59.render = render58
_sfc_script59.__file = 'src/TabBar/TabBar.vue'

// src/TabBar/index.ts
var install57 = withInstall(_sfc_script59)
var TabBar_default = _sfc_script59

// vue:./BackTop.vue
import {
  defineComponent as defineComponent60,
  computed as computed29,
  toRef as toRef2,
  ref as ref36,
  onMounted as onMounted18
} from 'vue'

// src/hooks/use-scroll.ts
import { onBeforeUnmount as onBeforeUnmount17 } from 'vue'
function useScrollEvent($el, callback) {
  const onScroll = (e, $el2) => {
    callback(e, {
      scrollTop: getScrollTop($el2)
    })
  }
  addEvent('scroll', onScroll, $el)
  let isOff = false
  function off2() {
    if (!isOff) {
      isOff = true
      removeEvent('scroll', onScroll, $el)
    }
  }
  onBeforeUnmount17(() => off2)
  return off2
}

// vue:./BackTop.vue
import {
  renderSlot as _renderSlot27,
  resolveComponent as _resolveComponent43,
  createVNode as _createVNode30,
  vShow as _vShow13,
  normalizeStyle as _normalizeStyle26,
  withDirectives as _withDirectives13,
  openBlock as _openBlock59,
  createElementBlock as _createElementBlock48
} from 'vue'
var _sfc_script60 = defineComponent60({
  name: 'fx-back-top',
  components: { Icon: _sfc_script2 },
  props: {
    visibleHeight: {
      type: Number,
      default: 200
    },
    animated: {
      type: Boolean,
      default: true
    },
    offset: {
      type: [Number, Array],
      default: 0
    },
    enableSafeAreaInsets: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    click: emitEventValidator
  },
  setup(props, { emit }) {
    const isShow = ref36(getScrollTop() >= props.visibleHeight)
    function toTop() {
      scrollTo(document, 0, props.animated)
    }
    function onClick(e) {
      toTop()
      emit('click', e)
    }
    const safeAreaInsets2 = useSafeAreaInsets(
      toRef2(props, 'enableSafeAreaInsets')
    )
    const styles = computed29(() => {
      let offset = [0, 0]
      if (isNumber(props.offset)) {
        offset = [props.offset, props.offset]
      } else if (isNumberArray(props.offset) && props.offset.length > 1) {
        offset = props.offset
      }
      return {
        transform: `translate3d(${offset[0]}px, ${
          offset[1] - safeAreaInsets2.bottom
        }px, 0px)`
      }
    })
    onMounted18(() => {
      useScrollEvent(document, (e, { scrollTop }) => {
        isShow.value = scrollTop >= props.visibleHeight
      })
    })
    return {
      toTop,
      onClick,
      isShow,
      styles
    }
  }
})
function render59(_ctx, _cache) {
  const _component_Icon = _resolveComponent43('Icon')
  return _withDirectives13(
    (_openBlock59(),
    _createElementBlock48(
      'button',
      {
        class: 'fx-back-top',
        style: _normalizeStyle26(_ctx.styles),
        onClick:
          _cache[0] ||
          (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      },
      [
        _renderSlot27(_ctx.$slots, 'default', {}, () => [
          _createVNode30(_component_Icon, { icon: 'UpCircleOutlined' })
        ])
      ],
      4
    )),
    [[_vShow13, _ctx.isShow]]
  )
}
_sfc_script60.render = render59
_sfc_script60.__file = 'src/BackTop/BackTop.vue'

// src/BackTop/index.ts
var install58 = withInstall(_sfc_script60)
var BackTop_default = _sfc_script60

// vue:../Popover/PopMenu.vue
import {
  computed as computed30,
  defineComponent as defineComponent61
} from 'vue'
import {
  createElementVNode as _createElementVNode40,
  normalizeStyle as _normalizeStyle27,
  renderList as _renderList19,
  Fragment as _Fragment20,
  openBlock as _openBlock60,
  createElementBlock as _createElementBlock49,
  resolveComponent as _resolveComponent44,
  createBlock as _createBlock37,
  createCommentVNode as _createCommentVNode35,
  toDisplayString as _toDisplayString32,
  normalizeClass as _normalizeClass43,
  vShow as _vShow14,
  mergeProps as _mergeProps14,
  withDirectives as _withDirectives14,
  Teleport as _Teleport9
} from 'vue'
var _sfc_script61 = defineComponent61({
  name: 'fx-pop-menu',
  components: { Icon: _sfc_script2 },
  props: {
    ...popoverProps,
    options: {
      type: Array
    }
  },
  emits: {
    ...popoverEmits,
    confirm: payload =>
      payload &&
      typeof payload.index === 'number' &&
      payload.item &&
      typeof payload.item.name === 'string'
  },
  setup(props, ctx) {
    const popoverHook = usePopover(props, ctx)
    function onItemClick(index) {
      var _a
      const item = (_a = props.options) == null ? void 0 : _a[index]
      if (!item || item.disabled) {
        return
      }
      popoverHook.customConfirm({
        item: {
          name: item.name
        },
        index
      })
    }
    const options2 = computed30(() => {
      const options = []
      if (Array.isArray(props.options)) {
        props.options.forEach(v => {
          isObject(v)
            ? options.push({
                icon: v.icon || null,
                name: v.name,
                disabled: !!v.disabled
              })
            : options.push({
                icon: null,
                name: v.toString(),
                disabled: false
              })
        })
      }
      return options
    })
    return {
      ...popoverHook,
      onItemClick,
      options2
    }
  }
})
var _hoisted_144 = { class: 'fx-popover_content' }
var _hoisted_232 = {
  key: 0,
  class: 'fx-pop-menu_list fx-pop-menu_list'
}
var _hoisted_327 = ['onClick']
function render60(_ctx, _cache) {
  const _component_Icon = _resolveComponent44('Icon')
  return (
    _openBlock60(),
    _createBlock37(_Teleport9, { to: 'body' }, [
      _withDirectives14(
        _createElementVNode40(
          'div',
          _mergeProps14(
            {
              class: [
                'fx-popover fx-popup fx-pop-menu',
                { visible: _ctx.visible2, 'no--mask': !_ctx.showMask }
              ],
              style: _ctx.popupStyles
            },
            _ctx.$attrs
          ),
          [
            _createElementVNode40('div', {
              class: 'fx-mask',
              onClick:
                _cache[0] ||
                (_cache[0] = (...args) =>
                  _ctx.onMaskClick && _ctx.onMaskClick(...args))
            }),
            _createElementVNode40(
              'div',
              {
                class: 'fx-popover_inner',
                ref: 'innerEl',
                style: _normalizeStyle27(_ctx.innerStyles)
              },
              [
                _createElementVNode40(
                  'i',
                  {
                    class: 'fx-popover_arrow',
                    style: _normalizeStyle27(_ctx.arrowStyles)
                  },
                  null,
                  4
                ),
                _createElementVNode40('div', _hoisted_144, [
                  _ctx.options2 && _ctx.options2.length > 0
                    ? (_openBlock60(),
                      _createElementBlock49('ul', _hoisted_232, [
                        (_openBlock60(true),
                        _createElementBlock49(
                          _Fragment20,
                          null,
                          _renderList19(_ctx.options2, (item, index) => {
                            return (
                              _openBlock60(),
                              _createElementBlock49(
                                'li',
                                {
                                  class: _normalizeClass43([
                                    'fx-pop-menu_item fx-horizontal-hairline',
                                    { disabled: item.disabled }
                                  ]),
                                  key: index,
                                  onClick: $event => _ctx.onItemClick(index)
                                },
                                [
                                  _createElementVNode40(
                                    'div',
                                    {
                                      class: _normalizeClass43([
                                        'fx-pop-menu_item-inner',
                                        { 'has--icon': item.icon }
                                      ])
                                    },
                                    [
                                      item.icon
                                        ? (_openBlock60(),
                                          _createBlock37(
                                            _component_Icon,
                                            {
                                              key: 0,
                                              icon: item.icon
                                            },
                                            null,
                                            8,
                                            ['icon']
                                          ))
                                        : _createCommentVNode35('v-if', true),
                                      _createElementVNode40(
                                        'span',
                                        null,
                                        _toDisplayString32(item.name),
                                        1
                                      )
                                    ],
                                    2
                                  )
                                ],
                                10,
                                _hoisted_327
                              )
                            )
                          }),
                          128
                        ))
                      ]))
                    : _createCommentVNode35('v-if', true)
                ])
              ],
              4
            )
          ],
          16
        ),
        [[_vShow14, _ctx.isShow]]
      )
    ])
  )
}
_sfc_script61.render = render60
_sfc_script61.__file = 'src/Popover/PopMenu.vue'

// src/PopMenu/index.ts
var showPopMenu = createShowPopup({
  apiName: 'showPopMenu',
  component: _sfc_script61,
  createHook: createConfirmHook
})
var PopMenu_default = _sfc_script61
var install59 = withInstall(_sfc_script61)

// vue:./TabView.vue
import {
  ref as ref37,
  defineComponent as defineComponent62,
  provide as provide8
} from 'vue'
import {
  resolveComponent as _resolveComponent45,
  openBlock as _openBlock61,
  createBlock as _createBlock38,
  createElementVNode as _createElementVNode41,
  renderSlot as _renderSlot28,
  withCtx as _withCtx19,
  createVNode as _createVNode31,
  normalizeClass as _normalizeClass44,
  createElementBlock as _createElementBlock50
} from 'vue'
var _sfc_script62 = defineComponent62({
  name: 'fx-tab-view',
  components: {
    Tab: _sfc_script25,
    SideTab: _sfc_script58,
    Swiper: _sfc_script44
  },
  props: {
    initialVertical: {
      type: Boolean,
      default: false
    },
    scrollThreshold: {
      type: Number,
      default: 4
    },
    backUpperWhenChange: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    change: emitChangeValidator,
    animated: emitChangeValidator
  },
  setup(props, { emit }) {
    const vertical = ref37(!!props.initialVertical)
    const swiper = ref37()
    const tabList = ref37([])
    const activeIndex = ref37(0)
    function resetItems($items) {
      tabList.value = $items.map(($item, index) => {
        const { name, subName } = $item.dataset
        return {
          value: index,
          label: name || '',
          subLabel: subName || ''
        }
      })
    }
    const { listEl } = useList('tabView', resetItems)
    const onChange = res => {
      var _a
      emit('change', res)
      if (props.backUpperWhenChange) {
        if (!swiper.value) {
          return
        }
        const $viewItem =
          (_a = swiper.value) == null ? void 0 : _a.getItemEl(res.activeIndex)
        if (!$viewItem) {
          return
        }
        $viewItem.scrollTop = 0
        $viewItem.scrollLeft = 0
        const $firstChild = $viewItem.firstElementChild
        if (
          $firstChild &&
          $firstChild.className.indexOf(`fx-scroll-view`) !== -1
        ) {
          scrollTo($firstChild, { top: 0, left: 0 }, false)
        }
      }
    }
    const onAnimated = res => {
      emit('animated', res)
    }
    function swipeTo(activeIndex2) {
      swiper.value && swiper.value.swipeTo(activeIndex2)
    }
    provide8('fxTabViewVertical', vertical.value)
    return {
      activeIndex,
      tabList,
      vertical,
      listEl,
      swiper,
      onChange,
      onAnimated,
      swipeTo
    }
  }
})
var _hoisted_145 = { class: 'fx-tab-view_header fx-horizontal-hairline' }
var _hoisted_233 = {
  class: 'fx-tab-view_body',
  ref: 'listEl'
}
function render61(_ctx, _cache) {
  const _component_SideTab = _resolveComponent45('SideTab')
  const _component_Tab = _resolveComponent45('Tab')
  const _component_Swiper = _resolveComponent45('Swiper')
  return (
    _openBlock61(),
    _createElementBlock50(
      'div',
      {
        class: _normalizeClass44(['fx-tab-view', { vertical: _ctx.vertical }])
      },
      [
        _createElementVNode41('div', _hoisted_145, [
          _ctx.vertical
            ? (_openBlock61(),
              _createBlock38(
                _component_SideTab,
                {
                  key: 0,
                  options: _ctx.tabList,
                  activeValue: _ctx.activeIndex,
                  'onUpdate:activeValue':
                    _cache[0] ||
                    (_cache[0] = $event => (_ctx.activeIndex = $event))
                },
                null,
                8,
                ['options', 'activeValue']
              ))
            : (_openBlock61(),
              _createBlock38(
                _component_Tab,
                {
                  key: 1,
                  options: _ctx.tabList,
                  activeValue: _ctx.activeIndex,
                  'onUpdate:activeValue':
                    _cache[1] ||
                    (_cache[1] = $event => (_ctx.activeIndex = $event)),
                  'scroll-threshold': _ctx.scrollThreshold
                },
                null,
                8,
                ['options', 'activeValue', 'scroll-threshold']
              ))
        ]),
        _createElementVNode41(
          'div',
          _hoisted_233,
          [
            _createVNode31(
              _component_Swiper,
              {
                activeIndex: _ctx.activeIndex,
                'onUpdate:activeIndex':
                  _cache[2] ||
                  (_cache[2] = $event => (_ctx.activeIndex = $event)),
                onChange: _ctx.onChange,
                onAnimated: _ctx.onAnimated,
                ref: 'swiper',
                'initial-vertical': _ctx.vertical
              },
              {
                default: _withCtx19(() => [
                  _renderSlot28(_ctx.$slots, 'default')
                ]),
                _: 3
              },
              8,
              ['activeIndex', 'onChange', 'onAnimated', 'initial-vertical']
            )
          ],
          512
        )
      ],
      2
    )
  )
}
_sfc_script62.render = render61
_sfc_script62.__file = 'src/TabView/TabView.vue'

// vue:./TabViewItem.vue
import {
  ref as ref38,
  defineComponent as defineComponent63,
  inject as inject9
} from 'vue'
import {
  renderSlot as _renderSlot29,
  openBlock as _openBlock62,
  createElementBlock as _createElementBlock51
} from 'vue'
var _sfc_script63 = defineComponent63({
  name: 'fx-tab-view-item',
  props: {
    name: {
      type: String,
      required: true
    },
    subName: {
      type: String,
      default: null
    }
  },
  setup() {
    const root = ref38()
    const vertical = inject9('fxTabViewVertical', false)
    useListItem('swiper')
    useListItem('tabView')
    let coords
    useTouch({
      el: root,
      onTouchStart(e) {
        const {
          scrollHeight,
          scrollTop,
          clientHeight,
          scrollLeft,
          scrollWidth,
          clientWidth
        } = e.currentTarget
        const touch = e.touchObject
        if (
          (vertical &&
            (scrollHeight === scrollTop + clientHeight || scrollTop === 0)) ||
          (!vertical &&
            (scrollWidth === scrollLeft + clientWidth || scrollLeft === 0))
        ) {
          if (scrollHeight !== clientHeight || scrollWidth !== clientWidth) {
            coords = {
              vertical,
              position:
                (vertical && scrollTop === 0) || (!vertical && scrollLeft === 0)
                  ? 1
                  : 2,
              startX: touch.pageX,
              startY: touch.pageY,
              timeStamp: e.timeStamp,
              stop: false
            }
          }
        } else {
          coords = {
            vertical,
            position: 1,
            startX: 0,
            startY: 0,
            timeStamp: e.timeStamp,
            stop: true
          }
        }
      },
      onTouchMove(e) {
        if (!coords) {
          return
        }
        if (coords.stop) {
          e.stopPropagation()
          return
        }
        const { pageX, pageY } = e.touchObject
        const offset = coords.vertical
          ? coords.startY - pageY
          : coords.startX - pageX
        if (
          (coords.position === 1 && offset > 0) ||
          (coords.position === 2 && offset < 0)
        ) {
          coords.stop = true
          e.stopPropagation()
        }
      },
      onTouchEnd() {
        coords = null
      }
    })
    return {
      root
    }
  }
})
var _hoisted_146 = ['data-name', 'data-sub-name']
function render62(_ctx, _cache) {
  return (
    _openBlock62(),
    _createElementBlock51(
      'div',
      {
        class: 'fx-swiper-item fx-tab-view-item',
        'data-name': _ctx.name,
        'data-sub-name': _ctx.subName,
        ref: 'root'
      },
      [_renderSlot29(_ctx.$slots, 'default')],
      8,
      _hoisted_146
    )
  )
}
_sfc_script63.render = render62
_sfc_script63.__file = 'src/TabView/TabViewItem.vue'

// src/TabView/index.ts
var TabView_default = _sfc_script62
var install60 = multiWithInstall(_sfc_script62, [_sfc_script63])

// src/TabViewItem/index.ts
var TabViewItem_default = _sfc_script63
var install61 = withNoopInstall(_sfc_script63)

// vue:./Sticky.vue
import {
  defineComponent as defineComponent64,
  computed as computed31,
  ref as ref39,
  onMounted as onMounted20,
  inject as inject10,
  watch as watch27
} from 'vue'

// src/hooks/use-fixed.ts
import {
  onActivated,
  onBeforeUnmount as onBeforeUnmount18,
  onDeactivated,
  onMounted as onMounted19,
  watch as watch26
} from 'vue'
function useFixed({ fixed, root, inner, disableFixed }) {
  onActivated(() => fixed.value && toBody())
  onDeactivated(recover)
  onMounted19(() => fixed.value && toBody())
  onBeforeUnmount18(recover)
  function toBody() {
    disableFixed && inner.value && document.body.append(inner.value)
  }
  function recover() {
    disableFixed && root.value.append(inner.value)
  }
  watch26(fixed, val => {
    val ? toBody() : recover()
  })
  return {
    toBody,
    backRoot: recover
  }
}

// vue:./Sticky.vue
import {
  renderSlot as _renderSlot30,
  createElementVNode as _createElementVNode42,
  normalizeStyle as _normalizeStyle28,
  openBlock as _openBlock63,
  createElementBlock as _createElementBlock52
} from 'vue'
var _sfc_script64 = defineComponent64({
  name: 'fx-sticky',
  props: {
    containSelector: {
      validator: selectorValidator,
      default: null
    },
    offsetTop: {
      type: [Number, String],
      validator: sizeValidator,
      default: 0
    },
    offsetBottom: {
      type: [Number, String],
      validator: sizeValidator,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const root = ref39()
    const contentEl = ref39()
    const width = ref39(null)
    const height = ref39(null)
    const disableFixed = inject10('disableFixed', false)
    const fixed = ref39(false)
    useFixed({
      disableFixed,
      root,
      inner: contentEl,
      fixed
    })
    function updateFixed(scrollTop) {
      if (!root.value || !$container) {
        return
      }
      if (props.disabled) {
        updateStyles(false)
        return
      }
      if (scrollTop == null) {
        scrollTop = getScrollTop($container)
      }
      const $root = root.value
      const { clientHeight, clientWidth } = $root
      const offsetTop = getRelativeOffset($root, $container).offsetTop
      if (scrollTop >= offsetTop - getSizeValue(props.offsetTop)) {
        height.value = clientHeight
        width.value = clientWidth
        updateStyles(true)
      } else {
        height.value = null
        width.value = null
        updateStyles(false)
      }
    }
    function updateStyles(isFixed) {
      const $root = root.value
      const styles2 = contentEl.value.style
      if (isFixed) {
        const { offsetTop } = getRelativeOffset($container)
        const { offsetLeft } = getRelativeOffset($root)
        styles2.top = offsetTop + getSizeValue(props.offsetTop) + 'px'
        styles2.left = offsetLeft + 'px'
        styles2.width = width.value + 'px'
        if (props.offsetBottom != null) {
          styles2.bottom = getSizeValue(props.offsetBottom) + 'px'
        } else {
          styles2.height = height.value + 'px'
        }
        styles2.zIndex = widgetZIndex.toString()
        styles2.position = 'fixed'
      } else {
        styles2.cssText = ''
      }
      fixed.value = isFixed
    }
    let $container
    let scrollOff
    function resetContainer(containSelector) {
      scrollOff && scrollOff()
      $container = querySelector(containSelector) || document.documentElement
      scrollOff = useScrollEvent($container, (e, { scrollTop }) => {
        updateFixed(scrollTop)
      })
      updateFixed(null)
    }
    const styles = computed31(() => {
      const styles2 = {}
      if (height.value != null) {
        styles2.height = height.value + 'px'
      }
      return styles2
    })
    watch27(
      () => props.disabled,
      () => updateFixed(null)
    )
    onMounted20(() => resetContainer(props.containSelector))
    return {
      root,
      fixed,
      contentEl,
      styles,
      resetContainer
    }
  }
})
var _hoisted_147 = {
  class: 'fx-sticky_content',
  ref: 'contentEl'
}
function render63(_ctx, _cache) {
  return (
    _openBlock63(),
    _createElementBlock52(
      'div',
      {
        class: 'fx-sticky',
        style: _normalizeStyle28(_ctx.styles),
        ref: 'root'
      },
      [
        _createElementVNode42(
          'div',
          _hoisted_147,
          [_renderSlot30(_ctx.$slots, 'default')],
          512
        )
      ],
      4
    )
  )
}
_sfc_script64.render = render63
_sfc_script64.__file = 'src/Sticky/Sticky.vue'

// src/Sticky/index.ts
var install62 = withInstall(_sfc_script64)
var Sticky_default = _sfc_script64

// vue:./StickyView.vue
import {
  computed as computed32,
  defineComponent as defineComponent65,
  onMounted as onMounted21,
  ref as ref40,
  watch as watch28
} from 'vue'

// src/StickyView/stickyView.ts
var emitChangeValidator2 = payload =>
  payload && typeof payload.activeIndex === 'number'

// vue:./StickyView.vue
import {
  renderSlot as _renderSlot31,
  createElementVNode as _createElementVNode43,
  toDisplayString as _toDisplayString33,
  normalizeStyle as _normalizeStyle29,
  resolveComponent as _resolveComponent46,
  withCtx as _withCtx20,
  createVNode as _createVNode32,
  openBlock as _openBlock64,
  createElementBlock as _createElementBlock53
} from 'vue'
var _sfc_script65 = defineComponent65({
  name: 'fx-sticky-view',
  components: { Sticky: _sfc_script64 },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    containSelector: {
      validator: selectorValidator,
      default: null
    },
    offsetTop: {
      type: [Number, String],
      validator: sizeValidator,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:activeIndex': activeIndex => typeof activeIndex === 'number',
    change: emitChangeValidator2,
    'reset-items': items => {
      if (Array.isArray(items)) {
        return (
          items.filter(item => {
            return !(
              item &&
              typeof item.index === 'number' &&
              typeof item.name === 'string'
            )
          }).length === 0
        )
      }
      return false
    }
  },
  setup(props, { emit }) {
    const root = ref40()
    const fixedEl = ref40()
    const sticky = ref40()
    const index = ref40(0)
    const title = ref40('')
    const titleY = ref40(0)
    const isSelfContainer = ref40(false)
    let $items = []
    let isScrollTo = false
    function getItemName(index2) {
      var _a
      return ((_a = $items[index2]) == null ? void 0 : _a.dataset.name) || ''
    }
    let $container
    let scrollOff
    function resetContainer(containSelector) {
      var _a
      scrollOff && scrollOff()
      $container = querySelector(containSelector) || root.value
      if ($container === root.value) {
        isSelfContainer.value = true
      }
      ;(_a = sticky.value) == null ? void 0 : _a.resetContainer($container)
      scrollOff = useScrollEvent($container, (e, { scrollTop }) => {
        updateFixed(scrollTop)
      })
      updateFixed(null)
    }
    function updateFixed(scrollTop) {
      const $fixed = fixedEl.value
      if (!$fixed) {
        return
      }
      const h3 = $fixed.clientHeight
      if ($items.length === 0) {
        title.value = ''
        titleY.value = -h3
        return
      }
      scrollTop = scrollTop == null ? getScrollTop($container) : scrollTop
      const activeIndex = index.value
      const nextIndex = activeIndex + 1
      const offsetTops = getOffsetTops()
      const current = offsetTops[activeIndex]
      const next =
        offsetTops[nextIndex] != null ? offsetTops[nextIndex] : Infinity
      const first = offsetTops[0]
      if (scrollTop < first) {
        title.value = ''
        titleY.value = null
      } else if (scrollTop >= current) {
        if (scrollTop >= next) {
          index.value = nextIndex
          title.value = getItemName(nextIndex)
          titleY.value = 0
          if (
            offsetTops[nextIndex + 1] &&
            scrollTop >= offsetTops[nextIndex + 1]
          ) {
            updateFixed(scrollTop)
          } else {
            if (!isScrollTo) {
              emit('update:activeIndex', index.value)
            }
            emit('change', {
              activeIndex: index.value
            })
          }
        } else if (next - scrollTop < h3) {
          titleY.value = next - scrollTop - h3
        } else {
          title.value = getItemName(activeIndex)
          titleY.value = 0
        }
      } else {
        if (current - scrollTop < h3) {
          title.value = getItemName(activeIndex - 1)
          titleY.value = current - scrollTop - h3
        } else {
          index.value = activeIndex - 1
          title.value = getItemName(index.value)
          titleY.value = 0
          if (
            offsetTops[activeIndex - 1] &&
            offsetTops[activeIndex - 1] > scrollTop
          ) {
            updateFixed(scrollTop)
          } else {
            if (!isScrollTo) {
              emit('update:activeIndex', index.value)
            }
            emit('change', {
              activeIndex: index.value
            })
          }
        }
      }
      isScrollTo = false
    }
    function getOffsetTops() {
      const offset =
        getRelativeOffset(listEl.value, $container).offsetTop -
        getSizeValue(props.offsetTop)
      return $items.map($el => {
        return $el.offsetTop + offset
      })
    }
    function scrollToIndex(options) {
      let _index = 0
      if (typeof options === 'number') {
        _index = options
      } else if (options && typeof options.index === 'number') {
        _index = options.index
      }
      if ($items[_index] && _index != index.value) {
        scrollTo2({
          offset: getRelativeOffset($items[_index], $container).offsetTop
        })
      }
    }
    function scrollTo2(options) {
      let offset = 0
      if (typeof options === 'number') {
        offset = options
      } else if (options && typeof options.offset === 'number') {
        offset = options.offset
      }
      isScrollTo = true
      setScrollTop($container, offset)
    }
    function resetItems(res) {
      $items = res
      updateFixed(null)
      emit(
        'reset-items',
        $items.map((v, k) => {
          return {
            name: getItemName(k),
            index: k
          }
        })
      )
    }
    const { listEl } = useList('stickyView', resetItems)
    const fixedStyles = computed32(() => {
      return {
        transform: `translate3d(0px, ${
          titleY.value === null ? '-100%' : titleY.value + 'px'
        }, 0px)`
      }
    })
    watch28(
      () => props.activeIndex,
      val => scrollToIndex({ index: val })
    )
    onMounted21(() => {
      resetContainer(props.containSelector)
    })
    return {
      root,
      listEl,
      fixedEl,
      sticky,
      index,
      title,
      isSelfContainer,
      fixedStyles,
      resetContainer,
      scrollToIndex,
      scrollTo: scrollTo2
    }
  }
})
var _hoisted_148 = {
  class: 'fx-sticky-view',
  ref: 'root'
}
var _hoisted_234 = {
  class: 'fx-sticky-view_list',
  ref: 'listEl'
}
function render64(_ctx, _cache) {
  const _component_Sticky = _resolveComponent46('Sticky')
  return (
    _openBlock64(),
    _createElementBlock53(
      'div',
      _hoisted_148,
      [
        _createElementVNode43(
          'div',
          _hoisted_234,
          [_renderSlot31(_ctx.$slots, 'default')],
          512
        ),
        _createVNode32(
          _component_Sticky,
          {
            'offset-top': _ctx.offsetTop,
            'contain-selector': _ctx.containSelector,
            disabled: _ctx.disabled,
            class: 'fx-sticky-view_top',
            ref: 'sticky'
          },
          {
            default: _withCtx20(() => [
              _createElementVNode43(
                'div',
                {
                  ref: 'fixedEl',
                  class: 'fx-sticky-view_fixed',
                  style: _normalizeStyle29(_ctx.fixedStyles)
                },
                _toDisplayString33(_ctx.title),
                5
              )
            ]),
            _: 1
          },
          8,
          ['offset-top', 'contain-selector', 'disabled']
        )
      ],
      512
    )
  )
}
_sfc_script65.render = render64
_sfc_script65.__file = 'src/StickyView/StickyView.vue'

// vue:./StickyViewItem.vue
import { defineComponent as defineComponent66 } from 'vue'
import {
  toDisplayString as _toDisplayString34,
  createElementVNode as _createElementVNode44,
  renderSlot as _renderSlot32,
  openBlock as _openBlock65,
  createElementBlock as _createElementBlock54
} from 'vue'
var _sfc_script66 = defineComponent66({
  name: 'fx-sticky-view-item',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    useListItem('stickyView')
    return {}
  }
})
var _hoisted_149 = ['data-name']
var _hoisted_235 = { class: 'fx-sticky-view-item_header' }
var _hoisted_328 = { class: 'fx-sticky-view-item_body' }
function render65(_ctx, _cache) {
  return (
    _openBlock65(),
    _createElementBlock54(
      'div',
      {
        class: 'fx-sticky-view-item',
        'data-name': _ctx.name,
        ref: 'root'
      },
      [
        _createElementVNode44(
          'div',
          _hoisted_235,
          _toDisplayString34(_ctx.name),
          1
        ),
        _createElementVNode44('div', _hoisted_328, [
          _renderSlot32(_ctx.$slots, 'default')
        ])
      ],
      8,
      _hoisted_149
    )
  )
}
_sfc_script66.render = render65
_sfc_script66.__file = 'src/StickyView/StickyViewItem.vue'

// src/StickyView/index.ts
var StickyView_default = _sfc_script65
var install63 = multiWithInstall(_sfc_script65, [_sfc_script66])

// src/StickyViewItem/index.ts
var StickyViewItem_default = _sfc_script66
var install64 = withNoopInstall(_sfc_script66)

// vue:./ScrollTab.vue
import {
  defineComponent as defineComponent67,
  onMounted as onMounted22,
  ref as ref41
} from 'vue'
import {
  resolveComponent as _resolveComponent47,
  createVNode as _createVNode33,
  withCtx as _withCtx21,
  createElementVNode as _createElementVNode45,
  renderSlot as _renderSlot33,
  openBlock as _openBlock66,
  createElementBlock as _createElementBlock55
} from 'vue'
var _sfc_script67 = defineComponent67({
  name: 'fx-scroll-tab',
  components: {
    SideTab: _sfc_script58,
    Sticky: _sfc_script64,
    StickyView: _sfc_script65
  },
  props: {
    stickyOffsetTop: {
      validator: sizeValidator,
      default: 0
    },
    stickyOffsetBottom: {
      validator: sizeValidator,
      default: 0
    }
  },
  emits: {
    change: emitChangeValidator2
  },
  setup(props, { emit }) {
    const side = ref41()
    const body = ref41()
    const tabList = ref41([])
    const activeIndex = ref41(0)
    function resetContainer(containSelector) {
      var _a, _b
      ;(_a = side.value) == null ? void 0 : _a.resetContainer(containSelector)
      ;(_b = body.value) == null ? void 0 : _b.resetContainer(containSelector)
    }
    function onResetItems(items) {
      tabList.value = items.map(item => {
        return {
          value: item.index,
          label: item.name
        }
      })
    }
    const onChange = res => {
      emit('change', res)
    }
    function scrollToIndex(index) {
      body.value && body.value.scrollToIndex(index)
    }
    function scrollTo2(scrollTop) {
      body.value && body.value.scrollTo(scrollTop)
    }
    onMounted22(() => resetContainer(document))
    return {
      side,
      body,
      activeIndex,
      tabList,
      onChange,
      scrollToIndex,
      scrollTo: scrollTo2,
      resetContainer,
      onResetItems
    }
  }
})
var _hoisted_150 = { class: 'fx-scroll-tab' }
var _hoisted_236 = { class: 'fx-scroll-tab_sidebar' }
var _hoisted_329 = { class: 'fx-scroll-tab_body' }
function render66(_ctx, _cache) {
  const _component_SideTab = _resolveComponent47('SideTab')
  const _component_Sticky = _resolveComponent47('Sticky')
  const _component_StickyView = _resolveComponent47('StickyView')
  return (
    _openBlock66(),
    _createElementBlock55('div', _hoisted_150, [
      _createElementVNode45('div', _hoisted_236, [
        _createVNode33(
          _component_Sticky,
          {
            ref: 'side',
            offsetTop: _ctx.stickyOffsetTop,
            offsetBottom: _ctx.stickyOffsetBottom
          },
          {
            default: _withCtx21(() => [
              _createVNode33(
                _component_SideTab,
                {
                  options: _ctx.tabList,
                  activeValue: _ctx.activeIndex,
                  'onUpdate:activeValue':
                    _cache[0] ||
                    (_cache[0] = $event => (_ctx.activeIndex = $event))
                },
                null,
                8,
                ['options', 'activeValue']
              )
            ]),
            _: 1
          },
          8,
          ['offsetTop', 'offsetBottom']
        )
      ]),
      _createElementVNode45('div', _hoisted_329, [
        _createVNode33(
          _component_StickyView,
          {
            offsetTop: _ctx.stickyOffsetTop,
            ref: 'body',
            activeIndex: _ctx.activeIndex,
            'onUpdate:activeIndex':
              _cache[1] || (_cache[1] = $event => (_ctx.activeIndex = $event)),
            onResetItems: _ctx.onResetItems,
            onChange: _ctx.onChange
          },
          {
            default: _withCtx21(() => [_renderSlot33(_ctx.$slots, 'default')]),
            _: 3
          },
          8,
          ['offsetTop', 'activeIndex', 'onResetItems', 'onChange']
        )
      ])
    ])
  )
}
_sfc_script67.render = render66
_sfc_script67.__file = 'src/ScrollTab/ScrollTab.vue'

// vue:./ScrollTabItem.vue
import {
  defineComponent as defineComponent68,
  inject as inject11,
  onMounted as onMounted23,
  onUnmounted as onUnmounted2
} from 'vue'
import {
  toDisplayString as _toDisplayString35,
  createElementVNode as _createElementVNode46,
  renderSlot as _renderSlot34,
  openBlock as _openBlock67,
  createElementBlock as _createElementBlock56
} from 'vue'
var _sfc_script68 = defineComponent68({
  name: 'fx-scroll-tab-item',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const update = inject11(
      'fxStickyViewUpdate',
      createUpdateInItem('scroll-tab')
    )
    onMounted23(update)
    onUnmounted2(update)
    return {}
  }
})
var _hoisted_151 = ['data-name']
var _hoisted_237 = { class: 'fx-sticky-view-item_header' }
var _hoisted_330 = { class: 'fx-sticky-view-item_body' }
function render67(_ctx, _cache) {
  return (
    _openBlock67(),
    _createElementBlock56(
      'div',
      {
        class: 'fx-sticky-view-item fx-scroll-tab-item',
        'data-name': _ctx.name
      },
      [
        _createElementVNode46(
          'div',
          _hoisted_237,
          _toDisplayString35(_ctx.name),
          1
        ),
        _createElementVNode46('div', _hoisted_330, [
          _renderSlot34(_ctx.$slots, 'default')
        ])
      ],
      8,
      _hoisted_151
    )
  )
}
_sfc_script68.render = render67
_sfc_script68.__file = 'src/ScrollTab/ScrollTabItem.vue'

// src/ScrollTab/index.ts
var ScrollTab_default = _sfc_script67
var install65 = multiWithInstall(_sfc_script67, [_sfc_script68])

// src/ScrollTabItem/index.ts
var ScrollTabItem_default = _sfc_script68
var install66 = withNoopInstall(_sfc_script68)

// vue:./IndexView.vue
import {
  defineComponent as defineComponent69,
  onMounted as onMounted24,
  ref as ref42
} from 'vue'
import {
  renderList as _renderList20,
  Fragment as _Fragment21,
  openBlock as _openBlock68,
  createElementBlock as _createElementBlock57,
  toDisplayString as _toDisplayString36,
  normalizeClass as _normalizeClass45,
  createElementVNode as _createElementVNode47,
  renderSlot as _renderSlot35,
  resolveComponent as _resolveComponent48,
  withCtx as _withCtx22,
  createVNode as _createVNode34
} from 'vue'
var _sfc_script69 = defineComponent69({
  name: 'fx-index-view',
  components: { StickyView: _sfc_script65 },
  props: {
    stickyOffsetTop: {
      validator: sizeValidator,
      default: 0
    }
  },
  emits: {
    change: emitChangeValidator2
  },
  setup(props, { emit }) {
    const navEl = ref42()
    const stickyView = ref42()
    const indexList = ref42([])
    const activeIndex = ref42(0)
    function resetContainer(containSelector) {
      var _a
      ;(_a = stickyView.value) == null
        ? void 0
        : _a.resetContainer(containSelector)
    }
    function onResetItems(items) {
      indexList.value = items.map(item => {
        return {
          value: item.index,
          label: item.name
        }
      })
    }
    const onChange = res => {
      emit('change', res)
    }
    function scrollToIndex(index) {
      var _a
      ;(_a = stickyView.value) == null ? void 0 : _a.scrollToIndex(index)
    }
    function scrollTo2(scrollTop) {
      var _a
      ;(_a = stickyView.value) == null ? void 0 : _a.scrollTo(scrollTop)
    }
    let coords
    let changeTimer
    useTouch({
      el: navEl,
      onTouchStart(e) {
        const { clientY } = e.touchObject
        const $target = e.target
        const value = parseInt($target.dataset.value)
        const rects = $target.getClientRects()[0]
        coords = {
          size: rects.height,
          offsetY: clientY - rects.top,
          startY: clientY,
          current: value
        }
        clearTimeout(changeTimer)
        changeTimer = window.setTimeout(() => {
          activeIndex.value = value
        }, 500)
        e.preventDefault()
      },
      onTouchMove(e) {
        if (!coords) {
          return
        }
        const { clientY } = e.touchObject
        const { startY, size, offsetY, current } = coords
        const y = clientY - startY
        let offsetCount = 0
        if (y > 0) {
          offsetCount =
            Math.floor(y / size) + (y % size > size - offsetY ? 1 : 0)
        } else if (y < 0) {
          offsetCount = -Math.floor(-y / size) + (-y % size > offsetY ? -1 : 0)
        }
        if (offsetCount !== 0) {
          clearTimeout(changeTimer)
          coords.isChange = true
          changeTimer = window.setTimeout(() => {
            activeIndex.value = rangeInteger(
              current + offsetCount,
              0,
              indexList.value.length - 1
            )
          }, 100)
        }
        e.stopPropagation()
      },
      onTouchEnd(e) {
        if (coords) {
          if (!coords.isChange) {
            clearTimeout(changeTimer)
            activeIndex.value = coords.current
          }
          coords = null
          e.stopPropagation()
        }
      }
    })
    onMounted24(() => resetContainer(document))
    return {
      navEl,
      stickyView,
      activeIndex,
      indexList,
      onChange,
      scrollToIndex,
      scrollTo: scrollTo2,
      resetContainer,
      onResetItems
    }
  }
})
var _hoisted_152 = { class: 'fx-index-view' }
var _hoisted_238 = { class: 'fx-index-view_sidebar' }
var _hoisted_331 = {
  class: 'fx-index-view_list',
  ref: 'navEl'
}
var _hoisted_418 = ['data-value']
var _hoisted_58 = { class: 'fx-index-view_body' }
function render68(_ctx, _cache) {
  const _component_StickyView = _resolveComponent48('StickyView')
  return (
    _openBlock68(),
    _createElementBlock57('div', _hoisted_152, [
      _createElementVNode47('div', _hoisted_238, [
        _createElementVNode47(
          'ul',
          _hoisted_331,
          [
            (_openBlock68(true),
            _createElementBlock57(
              _Fragment21,
              null,
              _renderList20(_ctx.indexList, item => {
                return (
                  _openBlock68(),
                  _createElementBlock57(
                    'li',
                    {
                      class: _normalizeClass45({
                        active: item.value === _ctx.activeIndex
                      }),
                      'data-value': item.value,
                      key: item.value
                    },
                    _toDisplayString36(item.label),
                    11,
                    _hoisted_418
                  )
                )
              }),
              128
            ))
          ],
          512
        )
      ]),
      _createElementVNode47('div', _hoisted_58, [
        _createVNode34(
          _component_StickyView,
          {
            offsetTop: _ctx.stickyOffsetTop,
            ref: 'stickyView',
            activeIndex: _ctx.activeIndex,
            'onUpdate:activeIndex':
              _cache[0] || (_cache[0] = $event => (_ctx.activeIndex = $event)),
            onResetItems: _ctx.onResetItems,
            onChange: _ctx.onChange
          },
          {
            default: _withCtx22(() => [_renderSlot35(_ctx.$slots, 'default')]),
            _: 3
          },
          8,
          ['offsetTop', 'activeIndex', 'onResetItems', 'onChange']
        )
      ])
    ])
  )
}
_sfc_script69.render = render68
_sfc_script69.__file = 'src/IndexView/IndexView.vue'

// vue:./IndexViewItem.vue
import {
  defineComponent as defineComponent71,
  inject as inject12,
  onMounted as onMounted25,
  onUnmounted as onUnmounted3
} from 'vue'

// vue:./Group.vue
import { defineComponent as defineComponent70 } from 'vue'
import {
  toDisplayString as _toDisplayString37,
  createElementVNode as _createElementVNode48,
  renderSlot as _renderSlot36,
  normalizeClass as _normalizeClass46,
  openBlock as _openBlock69,
  createElementBlock as _createElementBlock58
} from 'vue'
var _sfc_script70 = defineComponent70({
  name: 'fx-group',
  props: {
    title: {
      type: String,
      required: true
    },
    strongHeader: {
      type: Boolean,
      default: false
    }
  }
})
var _hoisted_153 = { class: 'fx-group_header' }
var _hoisted_239 = { class: 'fx-group_title' }
var _hoisted_332 = { class: 'fx-group_more' }
var _hoisted_419 = {
  class: 'fx-group_body fx-horizontal-hairline hairline-reverse'
}
var _hoisted_59 = { class: 'fx-group_body-inner' }
function render69(_ctx, _cache) {
  return (
    _openBlock69(),
    _createElementBlock58(
      'div',
      {
        class: _normalizeClass46([
          'fx-group fx-horizontal-hairline',
          { 'strong-header': !!_ctx.strongHeader }
        ])
      },
      [
        _createElementVNode48('div', _hoisted_153, [
          _createElementVNode48(
            'div',
            _hoisted_239,
            _toDisplayString37(_ctx.title),
            1
          ),
          _createElementVNode48('div', _hoisted_332, [
            _renderSlot36(_ctx.$slots, 'header')
          ])
        ]),
        _createElementVNode48('div', _hoisted_419, [
          _createElementVNode48('div', _hoisted_59, [
            _renderSlot36(_ctx.$slots, 'default')
          ])
        ])
      ],
      2
    )
  )
}
_sfc_script70.render = render69
_sfc_script70.__file = 'src/Group/Group.vue'

// src/Group/index.ts
var install67 = withInstall(_sfc_script70)
var Group_default = _sfc_script70

// vue:./IndexViewItem.vue
import {
  renderSlot as _renderSlot37,
  resolveComponent as _resolveComponent49,
  withCtx as _withCtx23,
  openBlock as _openBlock70,
  createBlock as _createBlock39
} from 'vue'
var _sfc_script71 = defineComponent71({
  name: 'fx-index-view-item',
  components: { Group: _sfc_script70 },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const update = inject12(
      'fxStickyViewUpdate',
      createUpdateInItem('index-view')
    )
    onMounted25(update)
    onUnmounted3(update)
    return {}
  }
})
function render70(_ctx, _cache) {
  const _component_Group = _resolveComponent49('Group')
  return (
    _openBlock70(),
    _createBlock39(
      _component_Group,
      {
        class: 'fx-sticky-view-item fx-index-view-item',
        title: _ctx.name,
        'data-name': _ctx.name
      },
      {
        default: _withCtx23(() => [_renderSlot37(_ctx.$slots, 'default')]),
        _: 3
      },
      8,
      ['title', 'data-name']
    )
  )
}
_sfc_script71.render = render70
_sfc_script71.__file = 'src/IndexView/IndexViewItem.vue'

// src/IndexView/index.ts
var IndexView_default = _sfc_script69
var install68 = multiWithInstall(_sfc_script69, [_sfc_script71])

// src/IndexViewItem/index.ts
var IndexViewItem_default = _sfc_script71
var install69 = withNoopInstall(_sfc_script71)

// vue:./Fixed.vue
import {
  computed as computed33,
  defineComponent as defineComponent72,
  inject as inject13,
  onMounted as onMounted26,
  ref as ref43,
  toRef as toRef3,
  watch as watch29
} from 'vue'
import {
  createCommentVNode as _createCommentVNode37,
  renderSlot as _renderSlot38,
  createElementVNode as _createElementVNode49,
  normalizeClass as _normalizeClass47,
  normalizeStyle as _normalizeStyle30,
  openBlock as _openBlock71,
  createElementBlock as _createElementBlock59
} from 'vue'
var _sfc_script72 = defineComponent72({
  name: 'fx-fixed',
  inject: {
    disableFixed: {
      default: false
    }
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      validator: createEnumsValidator(PLACEMENT_TYPES)
    },
    enableSafeAreaInsets: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: null
    },
    zIndex: {
      type: Number,
      default: 1
    },
    spaceHold: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const root = ref43()
    const innerEl = ref43()
    const contentEl = ref43()
    const disableFixed = inject13('disableFixed', false)
    const safeAreaInsets2 = useSafeAreaInsets(
      toRef3(props, 'enableSafeAreaInsets')
    )
    function updateSize() {
      if (!(root.value && innerEl.value && contentEl.value)) {
        return
      }
      const { offsetWidth, offsetHeight } = contentEl.value
      if (offsetWidth === 0 || offsetHeight === 0) {
        root.value.style.width = ''
        root.value.style.height = ''
        removeClassName(innerEl.value, 'fixed')
        return
      }
      root.value.style.width =
        props.fixed && props.spaceHold ? offsetWidth + 'px' : ''
      root.value.style.height =
        props.fixed && props.spaceHold ? offsetHeight + 'px' : ''
      props.fixed
        ? addClassName(innerEl.value, 'fixed')
        : removeClassName(innerEl.value, 'fixed')
    }
    const placementClassName = computed33(
      () => 'placement--' + getEnumsValue(PLACEMENT_TYPES, props.placement)
    )
    const fixedStyles = computed33(() => {
      const styles = {
        background: props.background
      }
      if (props.fixed) {
        if (props.enableSafeAreaInsets && safeAreaInsets2.support) {
          const placement = getEnumsValue(PLACEMENT_TYPES, props.placement)
          styles['padding' + capitalize(placement)] =
            safeAreaInsets2[placement] + 'px'
        }
        styles.zIndex = props.zIndex.toString()
      }
      return styles
    })
    useResizeDetector(contentEl, updateSize)
    useFixed({
      disableFixed,
      root,
      inner: innerEl,
      fixed: computed33(() => props.fixed)
    })
    watch29([() => props.fixed, () => props.spaceHold], updateSize)
    onMounted26(() => {
      updateSize()
    })
    return {
      root,
      innerEl,
      contentEl,
      placementClassName,
      fixedStyles,
      safeAreaInsets: safeAreaInsets2
    }
  }
})
var _hoisted_154 = {
  class: 'fx-fixed',
  ref: 'root'
}
var _hoisted_240 = {
  class: 'fx-fixed_content-wrapper',
  ref: 'contentEl'
}
function render71(_ctx, _cache) {
  return (
    _openBlock71(),
    _createElementBlock59(
      'div',
      _hoisted_154,
      [
        _createCommentVNode37('fixed start'),
        _createElementVNode49(
          'div',
          {
            class: _normalizeClass47([
              'fx-fixed_inner',
              [_ctx.placementClassName]
            ]),
            style: _normalizeStyle30(_ctx.fixedStyles),
            ref: 'innerEl'
          },
          [
            _createElementVNode49(
              'div',
              _hoisted_240,
              [_renderSlot38(_ctx.$slots, 'default')],
              512
            )
          ],
          6
        ),
        _createCommentVNode37('fixed end')
      ],
      512
    )
  )
}
_sfc_script72.render = render71
_sfc_script72.__file = 'src/Fixed/Fixed.vue'

// src/Fixed/index.ts
var install70 = withInstall(_sfc_script72)
var Fixed_default = _sfc_script72

// vue:./Pagination.vue
import { defineComponent as defineComponent73 } from 'vue'
import {
  renderSlot as _renderSlot39,
  resolveComponent as _resolveComponent50,
  createVNode as _createVNode35,
  createElementVNode as _createElementVNode50,
  toDisplayString as _toDisplayString38,
  createTextVNode as _createTextVNode15,
  openBlock as _openBlock72,
  createElementBlock as _createElementBlock60
} from 'vue'
var _sfc_script73 = defineComponent73({
  name: 'fx-pagination',
  components: { Icon: _sfc_script2 },
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    }
  },
  emits: {
    'update:current': current => typeof current === 'number',
    change: payload =>
      payload &&
      typeof payload.current === 'number' &&
      typeof payload.total === 'number'
  },
  setup(props, { emit }) {
    function onClick(type) {
      const newPageNum = type === 'next' ? props.current + 1 : props.current - 1
      emit('update:current', newPageNum)
      emit('change', {
        current: newPageNum,
        total: props.total
      })
    }
    return { onClick }
  }
})
var _hoisted_155 = { class: 'fx-pagination' }
var _hoisted_241 = ['disabled']
var _hoisted_333 = { class: 'fx-pagination_content' }
var _hoisted_420 = ['disabled']
function render72(_ctx, _cache) {
  const _component_Icon = _resolveComponent50('Icon')
  return (
    _openBlock72(),
    _createElementBlock60('div', _hoisted_155, [
      _createElementVNode50(
        'button',
        {
          class: 'fx-pagination_prev',
          disabled: _ctx.current <= 1,
          onClick: _cache[0] || (_cache[0] = $event => _ctx.onClick('prev'))
        },
        [
          _renderSlot39(_ctx.$slots, 'prev', {}, () => [
            _createVNode35(_component_Icon, { icon: 'LeftOutlined' })
          ])
        ],
        8,
        _hoisted_241
      ),
      _createElementVNode50('div', _hoisted_333, [
        _renderSlot39(
          _ctx.$slots,
          'default',
          {
            current: _ctx.current,
            total: _ctx.total
          },
          () => [
            _createTextVNode15(
              _toDisplayString38(_ctx.current) +
                ' / ' +
                _toDisplayString38(_ctx.total),
              1
            )
          ]
        )
      ]),
      _createElementVNode50(
        'button',
        {
          class: 'fx-pagination_next',
          disabled: _ctx.current >= _ctx.total,
          onClick: _cache[1] || (_cache[1] = $event => _ctx.onClick('next'))
        },
        [
          _renderSlot39(_ctx.$slots, 'next', {}, () => [
            _createVNode35(_component_Icon, { icon: 'RightOutlined' })
          ])
        ],
        8,
        _hoisted_420
      )
    ])
  )
}
_sfc_script73.render = render72
_sfc_script73.__file = 'src/Pagination/Pagination.vue'

// src/Pagination/index.ts
var install71 = withInstall(_sfc_script73)
var Pagination_default = _sfc_script73

// src/SwiperItem/index.ts
var SwiperItem_default = _sfc_script45
var install72 = withNoopInstall(_sfc_script45)

// vue:./FlatList.vue
import {
  computed as computed34,
  defineComponent as defineComponent75,
  onMounted as onMounted27,
  ref as ref44,
  nextTick as nextTick9,
  watch as watch30
} from 'vue'

// vue:./LoadMore.vue
import { defineComponent as defineComponent74 } from 'vue'
import {
  resolveComponent as _resolveComponent51,
  openBlock as _openBlock73,
  createBlock as _createBlock40,
  createCommentVNode as _createCommentVNode38,
  renderSlot as _renderSlot40,
  createElementVNode as _createElementVNode51,
  normalizeClass as _normalizeClass48,
  createElementBlock as _createElementBlock61
} from 'vue'
var _sfc_script74 = defineComponent74({
  name: 'fx-load-more',
  components: { ActivityIndicator: _sfc_script12 },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
})
var _hoisted_156 = { class: 'fx-load-more_content' }
var _hoisted_242 = /* @__PURE__ */ _createElementVNode51(
  'i',
  { class: 'fx-load-more_dot' },
  null,
  -1
)
function render73(_ctx, _cache) {
  const _component_ActivityIndicator = _resolveComponent51('ActivityIndicator')
  return (
    _openBlock73(),
    _createElementBlock61(
      'div',
      {
        class: _normalizeClass48([
          'fx-load-more fx-horizontal-hairline',
          { loading: _ctx.loading, vertical: _ctx.vertical }
        ])
      },
      [
        _ctx.loading
          ? (_openBlock73(),
            _createBlock40(_component_ActivityIndicator, {
              key: 0,
              class: 'fx-load-more_icon',
              size: 18
            }))
          : _createCommentVNode38('v-if', true),
        _createElementVNode51('span', _hoisted_156, [
          _renderSlot40(_ctx.$slots, 'default', {}, () => [_hoisted_242])
        ])
      ],
      2
    )
  )
}
_sfc_script74.render = render73
_sfc_script74.__file = 'src/LoadMore/LoadMore.vue'

// src/LoadMore/index.ts
var install73 = withInstall(_sfc_script74)
var LoadMore_default = _sfc_script74

// vue:./FlatList.vue
import {
  renderSlot as _renderSlot41,
  openBlock as _openBlock74,
  createElementBlock as _createElementBlock62,
  createCommentVNode as _createCommentVNode39,
  renderList as _renderList21,
  Fragment as _Fragment22,
  normalizeStyle as _normalizeStyle31,
  createElementVNode as _createElementVNode52,
  toDisplayString as _toDisplayString39,
  createTextVNode as _createTextVNode16,
  resolveComponent as _resolveComponent52,
  withCtx as _withCtx24,
  createBlock as _createBlock41,
  normalizeClass as _normalizeClass49
} from 'vue'
var _sfc_script75 = defineComponent75({
  name: 'fx-flat-list',
  components: { ScrollView: _sfc_script13, LoadMore: _sfc_script74 },
  props: {
    dataKey: {
      type: String,
      default: 'id'
    },
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    getItemSize: {
      type: Function
    },
    itemSize: {
      type: Number
    },
    initialHorizontal: {
      type: Boolean,
      default: false
    },
    preLoad: {
      type: Number,
      default: 1.5
    },
    endReachedThreshold: {
      type: Number,
      default: 0.5
    },
    enablePullRefresh: {
      type: Boolean,
      default: false
    },
    lowerLoading: {
      type: Boolean,
      default: false
    },
    initialWaterfall: {
      type: Boolean,
      default: false
    },
    waterfallColCount: {
      type: Number,
      validator: val => {
        return isInteger(val) && isInNumberRange(val, 2, 5)
      },
      default: 2
    },
    approvedItemVisibleScale: {
      type: Number,
      default: 0.5
    }
  },
  emits: {
    'end-reached': payload =>
      payload && typeof payload.distanceFromEnd === 'number',
    scroll: emitScrollValidator,
    refreshing: emitRefreshingValidator,
    'visible-items-change': payload => payload && Array.isArray(payload.items)
  },
  setup(props, { emit }) {
    const cols = ref44([])
    const list = ref44([])
    const renderList = ref44([])
    const scrollView = ref44()
    const listEl = ref44()
    const poolEl = ref44()
    const wrapperSize = ref44(0)
    let scrollX = false
    let scrollY = true
    let horizontal = false
    if (props.initialWaterfall) {
      for (
        let i = 0, len = rangeInteger(props.waterfallColCount, 2, 5);
        i < len;
        i++
      ) {
        cols.value.push(0)
      }
    } else {
      cols.value.push(0)
      if (props.initialHorizontal) {
        horizontal = true
      }
    }
    if (horizontal) {
      scrollX = true
      scrollY = false
    }
    function getFixedSize(index) {
      if (typeof props.getItemSize === 'function') {
        try {
          const size = props.getItemSize(index)
          if (isNumber(size)) {
            return size
          }
        } catch (error) {
          console.error(
            new exception_default(
              'The object.size value returned by getItemSize should be a Number type.',
              exception_default.TYPE.PROP_ERROR,
              'FlatList'
            )
          )
        }
      } else if (isNumber(props.itemSize)) {
        return props.itemSize
      }
      return -1
    }
    function dataToList(data) {
      const newList = []
      const dataKey = props.dataKey
      data.forEach((v, k) => {
        const oldItem = list.value[k]
        let newItem = {
          id: v[dataKey],
          data: v,
          index: k,
          size: -1
        }
        if (oldItem && v.id === oldItem.id) {
          newItem = oldItem
          newItem.data = v
        } else {
          newItem.size = getFixedSize(newItem.index)
        }
        newList.push(newItem)
      })
      list.value = newList
      nextTick9(() => {
        updateItemsSize()
        updateItems(null, 'dataChange')
      })
    }
    function getRootEl() {
      var _a
      return (_a = scrollView.value) == null ? void 0 : _a.$el
    }
    function updateSize() {
      wrapperSize.value = getElSize(getRootEl())
    }
    function getElSize($el) {
      return $el[scrollX ? 'offsetWidth' : 'offsetHeight']
    }
    function getScrollSize() {
      return getRootEl()[scrollX ? 'scrollLeft' : 'scrollTop']
    }
    const onRefreshing = (res, loadComplete) => {
      emit('refreshing', res, loadComplete)
    }
    function getItemStyle(offset, otherOffset, itemSize, otherSizePx) {
      const style = {}
      if (cols.value.length > 1) {
        style.height = itemSize + 'px'
        style.width = otherSizePx
        style.transform = `translate3d(${otherOffset}, ${offset}px, 0)`
      } else if (scrollX) {
        style.width = itemSize + 'px'
        style.height = otherSizePx
        style.transform = `translate3d(${offset}px, 0, 0)`
      } else {
        style.height = itemSize + 'px'
        style.width = otherSizePx
        style.transform = `translate3d(0, ${offset}px, 0)`
      }
      return style
    }
    let visibleIndexList = []
    function updateItems(_scrollSize, source) {
      const scrollSize = _scrollSize == null ? getScrollSize() : _scrollSize
      const approvedItemVisibleScale = rangeNumber(
        props.approvedItemVisibleScale,
        0,
        1
      )
      const newList = []
      const newCols = cols.value.map(() => {
        return 0
      })
      const newVisibleIndexList = []
      list.value.forEach(item => {
        const itemSize = item.size
        if (itemSize === -1) {
          return
        }
        let offset = 0
        let colMinIndex = 0
        if (newCols.length > 1) {
          offset = Math.min(...newCols)
          colMinIndex = newCols.indexOf(offset)
        } else {
          colMinIndex = 0
          offset = newCols[colMinIndex]
        }
        if (!isRecycled(offset, scrollSize)) {
          newList.push({
            id: item.id,
            index: item.index,
            data: item.data,
            style: getItemStyle(
              offset,
              `${colMinIndex * 100}%`,
              itemSize,
              newCols.length > 1 ? `calc(100% / ${newCols.length})` : '100%'
            ),
            size: itemSize
          })
          if (
            isVisible(offset, itemSize, scrollSize, approvedItemVisibleScale)
          ) {
            newVisibleIndexList.push(item.index)
          }
        }
        newCols[colMinIndex] += itemSize
      })
      cols.value = newCols
      renderList.value = newList
      const payload = {
        items: []
      }
      newVisibleIndexList.forEach(index => {
        if (!visibleIndexList.includes(index)) {
          payload.items.push({
            index,
            visible: true
          })
        }
      })
      visibleIndexList.forEach(index => {
        if (!newVisibleIndexList.includes(index)) {
          payload.items.push({
            index,
            visible: false
          })
        }
      })
      visibleIndexList = newVisibleIndexList
      if (payload.items.length > 0) {
        payload.items.sort((a, b) => a.index - b.index)
        emit('visible-items-change', payload)
      }
    }
    function isRecycled(offset, scrollSize) {
      return !(
        offset >= scrollSize - wrapperSize.value * props.preLoad &&
        offset <= scrollSize + wrapperSize.value * (props.preLoad + 1)
      )
    }
    function isVisible(offset, itemSize, scrollSize, approvedItemVisibleScale) {
      return (
        scrollSize <= offset + itemSize - itemSize * approvedItemVisibleScale &&
        scrollSize >=
          offset - wrapperSize.value + itemSize * approvedItemVisibleScale
      )
    }
    function updateItemsSize() {
      if (poolEl.value) {
        const $items = poolEl.value.children
        if ($items.length > 0) {
          const newList = list.value
          for (let i = 0; i < $items.length; i++) {
            const $item = $items[i]
            const index = parseInt($item.dataset.index)
            newList[index].size = getElSize($item)
          }
          list.value = newList
        }
      }
    }
    const listStyles = computed34(() => {
      const styles = {}
      styles[scrollX ? 'width' : 'height'] = Math.max(...cols.value) + 'px'
      return styles
    })
    function recordInteraction() {
      updateItems(null, 'recordInteraction')
    }
    function onResize() {
      updateSize()
      updateItems(null, 'resize')
    }
    let scrollTimer
    let scrollCount = 0
    const onScroll = res => {
      const scrollSize = res[scrollX ? 'scrollLeft' : 'scrollTop']
      if (scrollCount > 10) {
        scrollCount = 0
        clearTimeout(scrollTimer)
        updateItems(scrollSize, 'scroll')
      } else {
        clearTimeout(scrollTimer)
        scrollTimer = window.setTimeout(() => {
          scrollCount = 0
          updateItems(scrollSize, 'scroll')
        }, 17)
        scrollCount++
      }
      emit('scroll', res)
    }
    function onScrollToLower() {
      const $el = getRootEl()
      const distanceFromEnd = scrollX
        ? $el.scrollWidth - $el.scrollLeft - $el.offsetWidth
        : $el.scrollHeight - $el.scrollTop - $el.offsetHeight
      emit('end-reached', {
        distanceFromEnd
      })
    }
    function scrollToOffset(options) {
      var _a
      ;(_a = scrollView.value) == null ? void 0 : _a.scrollTo(options)
    }
    function scrollToIndex(options) {
      let index
      let animated = true
      let viewPosition
      if (typeof options === 'number') {
        index = options
        options = {
          index
        }
      } else {
        index = options.index
        animated = !(options.animated === false)
        viewPosition = getViewPosition(options.viewPosition)
      }
      const newCols = cols.value.map(() => {
        return 0
      })
      for (
        let i = 0, len = Math.min(index, list.value.length - 1);
        i <= len;
        i++
      ) {
        const item = list.value[i]
        if (item.size === -1) {
          return
        }
        let offset = 0
        let colMinIndex = 0
        if (newCols.length > 1) {
          offset = Math.min(...newCols)
          colMinIndex = newCols.indexOf(offset)
        } else {
          colMinIndex = 0
          offset = newCols[colMinIndex]
        }
        newCols[colMinIndex] += item.size
        if (i === len) {
          if (viewPosition === 0.5) {
            offset += item.size / 2 - wrapperSize.value / 2
          } else if (viewPosition === 1) {
            offset += item.size - wrapperSize.value
          }
          scrollToOffset({
            offset,
            animated
          })
        }
      }
    }
    function scrollToEnd(animated = false) {
      const $root = getRootEl()
      if (!$root) {
        return
      }
      scrollToOffset({
        offset: scrollX ? $root.scrollWidth : $root.scrollHeight,
        animated
      })
    }
    const lowerThreshold = computed34(() => {
      return wrapperSize.value * props.endReachedThreshold
    })
    const enablePullDirections = computed34(() => {
      if (props.enablePullRefresh) {
        return horizontal ? ['right'] : ['down']
      }
      return []
    })
    watch30(
      () => props.data,
      val => {
        dataToList(val)
      },
      {
        deep: true
      }
    )
    const poolList = computed34(() => {
      const newList = []
      list.value.forEach(item => {
        if (item.size === -1 && !renderList.value.some(v => v.id === item.id)) {
          newList.push(item)
        }
      })
      return newList
    })
    useResizeDetector(scrollView, onResize)
    onMounted27(() => {
      updateSize()
      dataToList(props.data)
    })
    return {
      listEl,
      poolEl,
      poolList,
      renderList,
      listStyles,
      scrollView,
      scrollX,
      scrollY,
      horizontal,
      list,
      cols,
      lowerThreshold,
      enablePullDirections,
      onRefreshing,
      recordInteraction,
      onScroll,
      onScrollToLower,
      scrollTo: scrollToOffset,
      scrollToIndex,
      scrollToEnd,
      locale
    }
  }
})
var _hoisted_157 = {
  key: 0,
  class: 'fx-flat-list_header'
}
var _hoisted_243 = ['data-index']
var _hoisted_334 = {
  class: 'fx-flat-list_list pool',
  ref: 'poolEl'
}
var _hoisted_421 = ['data-index']
var _hoisted_510 = {
  key: 2,
  class: 'fx-flat-list_empty'
}
var _hoisted_63 = {
  key: 3,
  class: 'fx-flat-list_footer'
}
function render74(_ctx, _cache) {
  const _component_LoadMore = _resolveComponent52('LoadMore')
  const _component_ScrollView = _resolveComponent52('ScrollView')
  return (
    _openBlock74(),
    _createBlock41(
      _component_ScrollView,
      {
        class: _normalizeClass49([
          'fx-flat-list',
          { horizontal: _ctx.horizontal }
        ]),
        scrollX: _ctx.scrollX,
        scrollY: _ctx.scrollY,
        lowerThreshold: _ctx.lowerThreshold,
        enablePullDirections: _ctx.enablePullDirections,
        onScroll: _ctx.onScroll,
        onScrollToLower: _ctx.onScrollToLower,
        onRefreshing: _ctx.onRefreshing,
        ref: 'scrollView'
      },
      {
        default: _withCtx24(() => [
          _ctx.$slots.header
            ? (_openBlock74(),
              _createElementBlock62('div', _hoisted_157, [
                _renderSlot41(_ctx.$slots, 'header')
              ]))
            : _createCommentVNode39('v-if', true),
          _createElementVNode52(
            'ul',
            {
              class: 'fx-flat-list_list',
              style: _normalizeStyle31(_ctx.listStyles),
              ref: 'listEl'
            },
            [
              (_openBlock74(true),
              _createElementBlock62(
                _Fragment22,
                null,
                _renderList21(_ctx.renderList, item => {
                  return (
                    _openBlock74(),
                    _createElementBlock62(
                      'li',
                      {
                        class: 'fx-flat-list_item',
                        key: item.data[_ctx.dataKey],
                        'data-index': item.index,
                        style: _normalizeStyle31(item.style)
                      },
                      [
                        _renderSlot41(_ctx.$slots, 'default', {
                          data: item.data,
                          index: item.index
                        }),
                        _renderSlot41(_ctx.$slots, 'separator', {
                          index: item.index
                        })
                      ],
                      12,
                      _hoisted_243
                    )
                  )
                }),
                128
              ))
            ],
            4
          ),
          _createElementVNode52(
            'ul',
            _hoisted_334,
            [
              (_openBlock74(true),
              _createElementBlock62(
                _Fragment22,
                null,
                _renderList21(_ctx.poolList, item => {
                  return (
                    _openBlock74(),
                    _createElementBlock62(
                      'li',
                      {
                        class: 'fx-flat-list_item',
                        key: item.id,
                        'data-index': item.index
                      },
                      [
                        _renderSlot41(_ctx.$slots, 'default', {
                          data: item.data,
                          index: item.index
                        }),
                        _renderSlot41(_ctx.$slots, 'separator', {
                          index: item.index
                        })
                      ],
                      8,
                      _hoisted_421
                    )
                  )
                }),
                128
              ))
            ],
            512
          ),
          _ctx.lowerLoading && _ctx.list.length > 0
            ? (_openBlock74(),
              _createBlock41(
                _component_LoadMore,
                {
                  key: 1,
                  class: 'fx-flat-list_indicator',
                  loading: '',
                  vertical: _ctx.horizontal
                },
                {
                  default: _withCtx24(() => [
                    _createTextVNode16(
                      _toDisplayString39(_ctx.locale.flatListLoadingText),
                      1
                    )
                  ]),
                  _: 1
                },
                8,
                ['vertical']
              ))
            : _createCommentVNode39('v-if', true),
          _ctx.list.length === 0
            ? (_openBlock74(),
              _createElementBlock62('div', _hoisted_510, [
                _renderSlot41(_ctx.$slots, 'empty')
              ]))
            : _createCommentVNode39('v-if', true),
          _ctx.$slots.footer
            ? (_openBlock74(),
              _createElementBlock62('div', _hoisted_63, [
                _renderSlot41(_ctx.$slots, 'footer')
              ]))
            : _createCommentVNode39('v-if', true)
        ]),
        _: 3
      },
      8,
      [
        'class',
        'scrollX',
        'scrollY',
        'lowerThreshold',
        'enablePullDirections',
        'onScroll',
        'onScrollToLower',
        'onRefreshing'
      ]
    )
  )
}
_sfc_script75.render = render74
_sfc_script75.__file = 'src/FlatList/FlatList.vue'

// src/FlatList/index.ts
var install74 = withInstall(_sfc_script75)
var FlatList_default = _sfc_script75

// vue:./Skeleton.vue
import {
  defineComponent as defineComponent80,
  h as h2,
  provide as provide9
} from 'vue'

// vue:./SkeletonLayout.vue
import { defineComponent as defineComponent79 } from 'vue'

// vue:./SkeletonAvatar.vue
import { defineComponent as defineComponent76 } from 'vue'

// src/Skeleton/skeleton.ts
var paragraphDefaultRow = 3
var AVATAR_SHAPE_NAMES = ['default', 'circle']
var BUTTON_SHAPE_NAMES = ['default', 'round']
var propAvatarShape = {
  type: String,
  validator: createEnumsValidator(AVATAR_SHAPE_NAMES)
}
var propButtonShape = {
  type: String,
  validator: createEnumsValidator(BUTTON_SHAPE_NAMES)
}
var propAnimated = {
  type: Boolean,
  default: false
}
var rootProps = {
  avatarShape: propAvatarShape,
  buttonShape: propButtonShape,
  paragraphRow: {
    type: Number
  },
  animated: propAnimated
}

// src/Skeleton/use-skeleton.ts
import { computed as computed35, inject as inject14 } from 'vue'
function useSubSkeleton(props, subName) {
  const skeletonProps = inject14('fxSkeletonProps', null)
  let shapeClassName = null
  let paragraphSize = null
  if (subName === 'avatar') {
    shapeClassName = computed35(() => {
      var _a
      return (
        'shape--' +
        getEnumsValue(
          AVATAR_SHAPE_NAMES,
          (_a = props.shape) != null
            ? _a
            : skeletonProps == null
            ? void 0
            : skeletonProps.avatarShape
        )
      )
    })
  } else if (subName === 'button') {
    shapeClassName = computed35(() => {
      var _a
      return (
        'shape--' +
        getEnumsValue(
          BUTTON_SHAPE_NAMES,
          (_a = props.shape) != null
            ? _a
            : skeletonProps == null
            ? void 0
            : skeletonProps.buttonShape
        )
      )
    })
  }
  if (subName === 'paragraph') {
    paragraphSize = computed35(() => {
      var _a
      const row =
        (_a = props.row) != null
          ? _a
          : skeletonProps == null
          ? void 0
          : skeletonProps.paragraphRow
      return isNumber(row) && row > 0 ? row : paragraphDefaultRow
    })
  }
  const useAnimation = computed35(() => {
    var _a
    return (_a = skeletonProps == null ? void 0 : skeletonProps.animated) !=
      null
      ? _a
      : !!props.animated
  })
  return {
    shapeClassName,
    useAnimation,
    paragraphSize
  }
}

// vue:./SkeletonAvatar.vue
import {
  normalizeClass as _normalizeClass50,
  openBlock as _openBlock75,
  createElementBlock as _createElementBlock63
} from 'vue'
var _sfc_script76 = defineComponent76({
  name: 'fx-skeleton-avatar',
  props: {
    animated: propAnimated,
    shape: propAvatarShape
  },
  setup(props) {
    const { shapeClassName, useAnimation } = useSubSkeleton(props, 'avatar')
    return {
      shapeClassName,
      useAnimation
    }
  }
})
function render75(_ctx, _cache) {
  return (
    _openBlock75(),
    _createElementBlock63(
      'div',
      {
        class: _normalizeClass50([
          'fx-skeleton-avatar',
          [_ctx.shapeClassName, { animated: _ctx.useAnimation }]
        ])
      },
      null,
      2
    )
  )
}
_sfc_script76.render = render75
_sfc_script76.__file = 'src/Skeleton/SkeletonAvatar.vue'

// vue:./SkeletonTitle.vue
import { defineComponent as defineComponent77 } from 'vue'
import {
  normalizeClass as _normalizeClass51,
  openBlock as _openBlock76,
  createElementBlock as _createElementBlock64
} from 'vue'
var _sfc_script77 = defineComponent77({
  name: 'fx-skeleton-title',
  props: {
    animated: propAnimated
  },
  setup(props) {
    const { useAnimation } = useSubSkeleton(props, 'image')
    return {
      useAnimation
    }
  }
})
function render76(_ctx, _cache) {
  return (
    _openBlock76(),
    _createElementBlock64(
      'div',
      {
        class: _normalizeClass51([
          'fx-skeleton-title',
          { animated: _ctx.useAnimation }
        ])
      },
      null,
      2
    )
  )
}
_sfc_script77.render = render76
_sfc_script77.__file = 'src/Skeleton/SkeletonTitle.vue'

// vue:./SkeletonParagraph.vue
import { defineComponent as defineComponent78 } from 'vue'
import {
  renderList as _renderList22,
  Fragment as _Fragment23,
  openBlock as _openBlock77,
  createElementBlock as _createElementBlock65,
  normalizeClass as _normalizeClass52
} from 'vue'
var _sfc_script78 = defineComponent78({
  name: 'fx-skeleton-paragraph',
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    row: {
      type: Number
    }
  },
  setup(props) {
    const { paragraphSize, useAnimation } = useSubSkeleton(props, 'paragraph')
    return {
      paragraphSize,
      useAnimation
    }
  }
})
function render77(_ctx, _cache) {
  return (
    _openBlock77(),
    _createElementBlock65(
      'ul',
      {
        class: _normalizeClass52([
          'fx-skeleton-paragraph',
          { animated: _ctx.useAnimation }
        ])
      },
      [
        (_openBlock77(true),
        _createElementBlock65(
          _Fragment23,
          null,
          _renderList22(_ctx.paragraphSize, num => {
            return _openBlock77(), _createElementBlock65('li', { key: num })
          }),
          128
        ))
      ],
      2
    )
  )
}
_sfc_script78.render = render77
_sfc_script78.__file = 'src/Skeleton/SkeletonParagraph.vue'

// vue:./SkeletonLayout.vue
import {
  renderSlot as _renderSlot42,
  resolveComponent as _resolveComponent53,
  createVNode as _createVNode36,
  openBlock as _openBlock78,
  createElementBlock as _createElementBlock66,
  createCommentVNode as _createCommentVNode40,
  createElementVNode as _createElementVNode53,
  normalizeClass as _normalizeClass53
} from 'vue'
var _sfc_script79 = defineComponent79({
  name: 'fx-skeleton-layout',
  props: { animated: Boolean, avatar: Boolean },
  components: {
    SkeletonAvatar: _sfc_script76,
    SkeletonTitle: _sfc_script77,
    SkeletonParagraph: _sfc_script78
  }
})
var _hoisted_158 = { class: 'fx-skeleton_layout' }
var _hoisted_244 = {
  key: 0,
  class: 'fx-skeleton_layout-left'
}
var _hoisted_335 = { class: 'fx-skeleton_layout-right' }
function render78(_ctx, _cache) {
  const _component_SkeletonAvatar = _resolveComponent53('SkeletonAvatar')
  const _component_SkeletonTitle = _resolveComponent53('SkeletonTitle')
  const _component_SkeletonParagraph = _resolveComponent53('SkeletonParagraph')
  return (
    _openBlock78(),
    _createElementBlock66(
      'div',
      {
        class: _normalizeClass53(['fx-skeleton', { animated: _ctx.animated }])
      },
      [
        _renderSlot42(_ctx.$slots, 'default', {}, () => [
          _createElementVNode53('div', _hoisted_158, [
            _ctx.avatar
              ? (_openBlock78(),
                _createElementBlock66('div', _hoisted_244, [
                  _createVNode36(_component_SkeletonAvatar)
                ]))
              : _createCommentVNode40('v-if', true),
            _createElementVNode53('div', _hoisted_335, [
              _createVNode36(_component_SkeletonTitle),
              _createVNode36(_component_SkeletonParagraph)
            ])
          ])
        ])
      ],
      2
    )
  )
}
_sfc_script79.render = render78
_sfc_script79.__file = 'src/Skeleton/SkeletonLayout.vue'

// vue:./Skeleton.vue
var _sfc_script80 = defineComponent80({
  name: 'fx-skeleton',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    avatar: {
      type: Boolean,
      default: false
    },
    ...rootProps
  },
  setup(props, { slots }) {
    provide9('fxSkeletonProps', props)
    return () => {
      if (!props.loading) {
        return slots.default ? slots.default() : null
      }
      return h2(
        _sfc_script79,
        {
          animated: props.animated,
          avatar: props.avatar
        },
        slots.layout
      )
    }
  }
})

// vue:./SkeletonButton.vue
import { defineComponent as defineComponent81 } from 'vue'
import {
  normalizeClass as _normalizeClass54,
  openBlock as _openBlock79,
  createElementBlock as _createElementBlock67
} from 'vue'
var _sfc_script81 = defineComponent81({
  name: 'fx-skeleton-button',
  props: {
    animated: propAnimated,
    shape: propButtonShape
  },
  setup(props) {
    const { shapeClassName, useAnimation } = useSubSkeleton(props, 'button')
    return {
      shapeClassName,
      useAnimation
    }
  }
})
function render79(_ctx, _cache) {
  return (
    _openBlock79(),
    _createElementBlock67(
      'div',
      {
        class: _normalizeClass54([
          'fx-skeleton-button',
          [_ctx.shapeClassName, { animated: _ctx.useAnimation }]
        ])
      },
      null,
      2
    )
  )
}
_sfc_script81.render = render79
_sfc_script81.__file = 'src/Skeleton/SkeletonButton.vue'

// vue:./SkeletonImage.vue
import { defineComponent as defineComponent82 } from 'vue'
import {
  normalizeClass as _normalizeClass55,
  openBlock as _openBlock80,
  createElementBlock as _createElementBlock68
} from 'vue'
var _sfc_script82 = defineComponent82({
  name: 'fx-skeleton-image',
  props: {
    animated: propAnimated
  },
  setup(props) {
    const { useAnimation } = useSubSkeleton(props, 'image')
    return {
      useAnimation
    }
  }
})
function render80(_ctx, _cache) {
  return (
    _openBlock80(),
    _createElementBlock68(
      'div',
      {
        class: _normalizeClass55([
          'fx-skeleton-image',
          { animated: _ctx.useAnimation }
        ])
      },
      null,
      2
    )
  )
}
_sfc_script82.render = render80
_sfc_script82.__file = 'src/Skeleton/SkeletonImage.vue'

// src/Skeleton/index.ts
var Skeleton_default = _sfc_script80
var install75 = multiWithInstall(_sfc_script80, [
  _sfc_script76,
  _sfc_script77,
  _sfc_script78,
  _sfc_script81,
  _sfc_script82
])

// src/SkeletonAvatar/index.ts
var SkeletonAvatar_default = _sfc_script76
var install76 = withNoopInstall(_sfc_script76)

// src/SkeletonTitle/index.ts
var SkeletonTitle_default = _sfc_script77
var install77 = withNoopInstall(_sfc_script77)

// src/SkeletonParagraph/index.ts
var SkeletonParagraph_default = _sfc_script78
var install78 = withNoopInstall(_sfc_script78)

// src/SkeletonButton/index.ts
var SkeletonButton_default = _sfc_script81
var install79 = withNoopInstall(_sfc_script81)

// src/SkeletonImage/index.ts
var SkeletonImage_default = _sfc_script82
var install80 = withNoopInstall(_sfc_script82)

// vue:./Row.vue
import {
  computed as computed36,
  defineComponent as defineComponent83,
  provide as provide10,
  ref as ref45,
  watch as watch31
} from 'vue'

// src/Row/row.ts
var propGutter = {
  type: [Number, String, Array],
  validator: val => {
    if (isNumberArray(val) && val.length === 2) {
      return true
    } else if (isNumeric(val)) {
      return true
    }
    return false
  },
  default: 0
}
var parseGutter = val => {
  if (isNumeric(val)) {
    return [Math.max(0, parseFloat(val)), 0]
  } else if (isNumberArray(val) && val.length >= 2) {
    return [val[0], val[1]]
  }
  return [0, 0]
}

// vue:./Row.vue
import {
  renderSlot as _renderSlot43,
  normalizeClass as _normalizeClass56,
  normalizeStyle as _normalizeStyle32,
  openBlock as _openBlock81,
  createElementBlock as _createElementBlock69
} from 'vue'
var JUSTIFY_TYPE = ['start', 'end', 'center', 'space-around', 'space-between']
var ALIGN_TYPE = ['top', 'middle', 'bottom']
var _sfc_script83 = defineComponent83({
  name: 'fx-row',
  props: {
    gutter: propGutter,
    justify: {
      type: String,
      validator: createEnumsValidator(JUSTIFY_TYPE),
      default: 'start'
    },
    align: {
      type: String,
      validator: createEnumsValidator(ALIGN_TYPE),
      default: 'top'
    }
  },
  setup(props) {
    const gutter = ref45([0, 0])
    const styles = computed36(() => {
      const [gH, gV] = gutter.value
      const styles2 = {}
      if (gH > 0 || gV > 0) {
        styles2.margin = `-${gV / 2}px -${gH / 2}px ${gV / 2}px `
      }
      return styles2
    })
    const classNames = computed36(() => {
      const arr = [`fx-row`]
      JUSTIFY_TYPE.includes(props.justify) &&
        arr.push(`justify--${props.justify}`)
      ALIGN_TYPE.includes(props.align) && arr.push(`align--${props.align}`)
      return arr
    })
    watch31(
      () => props.gutter,
      val => {
        gutter.value = parseGutter(val)
      },
      {
        immediate: true
      }
    )
    provide10('fxRowGutter', gutter)
    return {
      styles,
      classNames
    }
  }
})
function render81(_ctx, _cache) {
  return (
    _openBlock81(),
    _createElementBlock69(
      'div',
      {
        class: _normalizeClass56(_ctx.classNames),
        style: _normalizeStyle32(_ctx.styles)
      },
      [_renderSlot43(_ctx.$slots, 'default')],
      6
    )
  )
}
_sfc_script83.render = render81
_sfc_script83.__file = 'src/Row/Row.vue'

// src/Row/index.ts
var install81 = withInstall(_sfc_script83)
var Row_default = _sfc_script83

// vue:./Col.vue
import {
  defineComponent as defineComponent84,
  inject as inject15,
  computed as computed37,
  ref as ref46
} from 'vue'
import {
  renderSlot as _renderSlot44,
  normalizeClass as _normalizeClass57,
  normalizeStyle as _normalizeStyle33,
  openBlock as _openBlock82,
  createElementBlock as _createElementBlock70
} from 'vue'
function rangeCol(number) {
  return rangeInteger(number, 0, 24)
}
var _sfc_script84 = defineComponent84({
  name: 'fx-col',
  props: {
    span: {
      type: [Number, String],
      validator: val => isNumeric(val),
      default: 24
    },
    offset: {
      type: [Number, String],
      validator: val => isNumeric(val),
      default: 0
    },
    push: {
      type: [Number, String],
      validator: val => isNumeric(val),
      default: 0
    },
    pull: {
      type: [Number, String],
      validator: val => isNumeric(val),
      default: 0
    }
  },
  setup(props) {
    const rowGutter = inject15('fxRowGutter', null) || ref46([0, 0])
    const styles = computed37(() => {
      const styles2 = {}
      const [gH, gV] = rowGutter.value
      if (gH > 0 || gV > 0) {
        styles2.padding = `${gV / 2}px ${gH / 2}px`
      }
      return styles2
    })
    const classNames = computed37(() => {
      const arr = [`fx-col`, `fx-col-${rangeCol(props.span)}`]
      if (props.offset > 0) {
        arr.push(`fx-col-offset-${Math.min(24, rangeCol(props.offset))}`)
      }
      if (props.push > 0) {
        arr.push(`fx-col-push-${rangeCol(props.push)}`)
      }
      if (props.pull > 0) {
        arr.push(`fx-col-pull-${rangeCol(props.pull)}`)
      }
      return arr
    })
    return {
      styles,
      classNames
    }
  }
})
function render82(_ctx, _cache) {
  return (
    _openBlock82(),
    _createElementBlock70(
      'div',
      {
        class: _normalizeClass57(_ctx.classNames),
        style: _normalizeStyle33(_ctx.styles)
      },
      [_renderSlot44(_ctx.$slots, 'default')],
      6
    )
  )
}
_sfc_script84.render = render82
_sfc_script84.__file = 'src/Col/Col.vue'

// src/Col/index.ts
var install82 = withInstall(_sfc_script84)
var Col_default = _sfc_script84

// vue:./Divider.vue
import { defineComponent as defineComponent85 } from 'vue'
import {
  toDisplayString as _toDisplayString40,
  openBlock as _openBlock83,
  createElementBlock as _createElementBlock71,
  createCommentVNode as _createCommentVNode41,
  normalizeClass as _normalizeClass58
} from 'vue'
var _sfc_script85 = defineComponent85({
  name: 'fx-divider',
  props: {
    title: {
      type: String,
      default: null
    },
    dashed: {
      type: Boolean,
      default: false
    }
  }
})
var _hoisted_159 = { key: 0 }
function render83(_ctx, _cache) {
  return (
    _openBlock83(),
    _createElementBlock71(
      'div',
      {
        class: _normalizeClass58([
          'fx-divider fx-horizontal-hairline',
          { 'has--title': !!_ctx.title, 'border--dashed': _ctx.dashed }
        ])
      },
      [
        _ctx.title
          ? (_openBlock83(),
            _createElementBlock71(
              'span',
              _hoisted_159,
              _toDisplayString40(_ctx.title),
              1
            ))
          : _createCommentVNode41('v-if', true)
      ],
      2
    )
  )
}
_sfc_script85.render = render83
_sfc_script85.__file = 'src/Divider/Divider.vue'

// src/Divider/index.ts
var install83 = withInstall(_sfc_script85)
var Divider_default = _sfc_script85

// vue:./Collapse.vue
import {
  defineComponent as defineComponent86,
  onMounted as onMounted28,
  watch as watch32,
  provide as provide11
} from 'vue'
import {
  renderSlot as _renderSlot45,
  openBlock as _openBlock84,
  createElementBlock as _createElementBlock72
} from 'vue'
var _sfc_script86 = defineComponent86({
  name: 'fx-collapse',
  props: {
    activeNames: {
      type: [Number, String, Array],
      validator: stringNumberArrayMixValidator,
      default: () => []
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:activeNames': payload => stringNumberArrayMixValidator(payload),
    change: payload => payload && isStringNumberMixArray(payload)
  },
  setup(props, { emit }) {
    let activeNames2 = []
    const { children } = useGroup('collapse')
    function updateValue(val) {
      let values = cloneData(
        stringNumberArrayMixValidator(val)
          ? Array.isArray(val)
            ? val
            : [val]
          : []
      )
      if (props.accordion) {
        values = values.slice(0, 1)
      }
      if (Array.isArray(values) && isSameArray(values, activeNames2)) {
        return
      }
      activeNames2 = []
      children.forEach(child => {
        const childName = child.getName()
        if (childName && values.includes(childName)) {
          activeNames2.push(childName)
          child.show()
        } else {
          child.hide()
        }
      })
    }
    function onChange(uid2) {
      activeNames2 = []
      if (props.accordion) {
        children.forEach(child => {
          if (child.uid === uid2) {
            child.getActive() &&
              child.getName() &&
              activeNames2.push(child.getName())
          } else {
            child.hide()
          }
        })
      } else {
        children.forEach(child => {
          child.getActive() &&
            child.getName() &&
            activeNames2.push(child.getName())
        })
      }
      emit('update:activeNames', cloneData(activeNames2))
      emit('change', cloneData(activeNames2))
    }
    onMounted28(() => updateValue(props.activeNames))
    watch32(
      () => props.activeNames,
      val => updateValue(val)
    )
    provide11('fxCollapseChange', onChange)
    return {}
  }
})
var _hoisted_160 = { class: 'fx-collapse' }
function render84(_ctx, _cache) {
  return (
    _openBlock84(),
    _createElementBlock72('div', _hoisted_160, [
      _renderSlot45(_ctx.$slots, 'default')
    ])
  )
}
_sfc_script86.render = render84
_sfc_script86.__file = 'src/Collapse/Collapse.vue'

// vue:./CollapseItem.vue
import {
  defineComponent as defineComponent87,
  ref as ref47,
  inject as inject16
} from 'vue'
import {
  resolveComponent as _resolveComponent54,
  createVNode as _createVNode37,
  renderSlot as _renderSlot46,
  createElementVNode as _createElementVNode54,
  normalizeClass as _normalizeClass59,
  openBlock as _openBlock85,
  createElementBlock as _createElementBlock73
} from 'vue'
var _sfc_script87 = defineComponent87({
  name: 'fx-collapse-item',
  components: { Cell: _sfc_script39 },
  props: {
    icon: {
      type: [String, Object],
      validator: iconValidator
    },
    title: {
      type: String,
      default: ''
    },
    name: {
      type: [Number, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    toggle: payload => payload && typeof payload.spread === 'boolean'
  },
  setup(props, { emit }) {
    const active = ref47(false)
    const bodyEl = ref47()
    const onChange = inject16('fxCollapseChange', collapseItemChange)
    const uid2 = Symbol()
    function collapseItemChange(uid3) {
      new exception_default(
        `CollapseItem is not in Collapse`,
        exception_default.TYPE.DEFAULT,
        'CollapseItem'
      )
    }
    let visibleTimer
    function show(isClick = false) {
      if (active.value) {
        return
      }
      active.value = true
      clearTimeout(visibleTimer)
      const $body = bodyEl.value
      $body.style.cssText = 'position: absolute; opacity: 0;'
      const contentHeight = $body.getBoundingClientRect().height
      $body.style.cssText = 'height: 0px;'
      visibleTimer = window.setTimeout(() => {
        $body.style.cssText = `height: ${contentHeight}px;`
        visibleTimer = window.setTimeout(() => {
          $body.style.cssText = ''
        }, 210)
      }, 17)
      emitToggle(true)
      isClick && onChange(uid2)
    }
    function hide(isClick = false) {
      if (!active.value) {
        return
      }
      active.value = false
      clearTimeout(visibleTimer)
      const $body = bodyEl.value
      $body.style.cssText = `height: ${$body.getBoundingClientRect().height}px;`
      visibleTimer = window.setTimeout(() => {
        $body.style.cssText = 'height: 0px;'
        visibleTimer = window.setTimeout(() => {
          $body.style.cssText = 'display: none;'
        }, 210)
      }, 17)
      emitToggle(false)
      isClick && onChange(uid2)
    }
    function emitToggle(spread) {
      emit('toggle', {
        name: props.name,
        spread
      })
    }
    function onClick() {
      active.value ? hide(true) : show(true)
    }
    useGroupItem('collapse', {
      uid: uid2,
      getName: () => props.name,
      getActive: () => active.value,
      show,
      hide
    })
    return {
      active,
      bodyEl,
      onClick
    }
  }
})
var _hoisted_161 = {
  class: 'fx-collapse-item_body fx-horizontal-hairline',
  style: { display: 'none' },
  ref: 'bodyEl'
}
var _hoisted_245 = { class: 'fx-collapse-item_content' }
function render85(_ctx, _cache) {
  const _component_Cell = _resolveComponent54('Cell')
  return (
    _openBlock85(),
    _createElementBlock73(
      'div',
      {
        class: _normalizeClass59([
          'fx-collapse-item fx-horizontal-hairline',
          { active: _ctx.active }
        ])
      },
      [
        _createVNode37(
          _component_Cell,
          {
            class: 'fx-collapse-item_header',
            label: _ctx.title,
            icon: _ctx.icon,
            disabled: _ctx.disabled,
            isLink: '',
            'arrow-direction': 'down',
            onClick: _ctx.onClick
          },
          null,
          8,
          ['label', 'icon', 'disabled', 'onClick']
        ),
        _createElementVNode54(
          'div',
          _hoisted_161,
          [
            _createElementVNode54('div', _hoisted_245, [
              _renderSlot46(_ctx.$slots, 'default')
            ])
          ],
          512
        )
      ],
      2
    )
  )
}
_sfc_script87.render = render85
_sfc_script87.__file = 'src/Collapse/CollapseItem.vue'

// src/Collapse/index.ts
var Collapse_default = _sfc_script86
var install84 = multiWithInstall(_sfc_script86, [_sfc_script87])

// src/CollapseItem/index.ts
var CollapseItem_default = _sfc_script87
var install85 = withNoopInstall(_sfc_script87)

// vue:./Progress.vue
import {
  computed as computed38,
  defineComponent as defineComponent88
} from 'vue'
import {
  normalizeClass as _normalizeClass60,
  normalizeStyle as _normalizeStyle34,
  createElementVNode as _createElementVNode55,
  renderSlot as _renderSlot47,
  toDisplayString as _toDisplayString41,
  createTextVNode as _createTextVNode17,
  openBlock as _openBlock86,
  createElementBlock as _createElementBlock74,
  createCommentVNode as _createCommentVNode42
} from 'vue'
var _sfc_script88 = defineComponent88({
  name: 'fx-progress',
  props: {
    percentage: {
      type: [Number, String],
      validator: val => {
        return isNumeric(val) && parseFloat(val) >= 0 && parseFloat(val) <= 100
      },
      default: 0,
      required: true
    },
    showText: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    },
    fixedBar: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const styles = computed38(() => {
      const obj2 = {}
      props.color && (obj2['--fx-color'] = props.color)
      return obj2
    })
    return {
      progress: computed38(() => {
        return rangeInteger(props.percentage, 0, 100) + '%'
      }),
      styles
    }
  }
})
var _hoisted_162 = { class: 'fx-progress_bar' }
var _hoisted_246 = {
  key: 0,
  class: 'fx-progress_text'
}
function render86(_ctx, _cache) {
  return (
    _openBlock86(),
    _createElementBlock74(
      'div',
      {
        class: _normalizeClass60([
          'fx-progress',
          { 'fixed-bar': !!_ctx.fixedBar }
        ]),
        style: _normalizeStyle34(_ctx.styles)
      },
      [
        _createElementVNode55('div', _hoisted_162, [
          _createElementVNode55(
            'div',
            {
              class: _normalizeClass60([
                'fx-progress_track',
                { animated: !!_ctx.animated }
              ]),
              style: _normalizeStyle34([{ width: _ctx.progress }])
            },
            null,
            6
          )
        ]),
        _ctx.$slots.default || _ctx.showText
          ? (_openBlock86(),
            _createElementBlock74('div', _hoisted_246, [
              _renderSlot47(
                _ctx.$slots,
                'default',
                { progress: _ctx.progress },
                () => [
                  _createTextVNode17(
                    _toDisplayString41(_ctx.showText ? _ctx.progress : ''),
                    1
                  )
                ]
              )
            ]))
          : _createCommentVNode42('v-if', true)
      ],
      6
    )
  )
}
_sfc_script88.render = render86
_sfc_script88.__file = 'src/Progress/Progress.vue'

// src/Progress/index.ts
var install86 = withInstall(_sfc_script88)
var Progress_default = _sfc_script88

// vue:./CountDown.vue
import { defineComponent as defineComponent89, watch as watch33 } from 'vue'

// src/CountDown/use-count-time.ts
import {
  onBeforeUnmount as onBeforeUnmount19,
  reactive as reactive11
} from 'vue'

// src/CountDown/count-time.ts
function formatNumber(num) {
  return (num > 9 ? '' : '0') + num
}
function cutOne(num, divisor) {
  return Math.floor(num / divisor)
}
function getDefaultCountTime() {
  return {
    time: 0,
    days: '0',
    fullHours: '0',
    thousandsFullHours: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
    milliseconds: '000'
  }
}
function getCountTime(time) {
  const times = getDefaultCountTime()
  times.time = time
  times.milliseconds = (time % 1e3 > 99 ? '' : '0') + formatNumber(time % 1e3)
  time = cutOne(time, 1e3)
  times.seconds = formatNumber(time % 60)
  time = cutOne(time, 60)
  times.minutes = formatNumber(time % 60)
  time = cutOne(time, 60)
  times.fullHours = formatNumber(time)
  times.thousandsFullHours = thousands(time)
  times.hours = formatNumber(time % 24)
  times.days = cutOne(time, 24).toString()
  return times
}

// src/CountDown/use-count-time.ts
function useCountTime(onStep) {
  const times = reactive11(getDefaultCountTime())
  function update(time) {
    Object.assign(times, getCountTime(time))
  }
  let timer
  function start() {
    timer = requestAnimationFrame(() => {
      start()
      onStep({ update, start, stop })
    })
  }
  function stop() {
    cancelAnimationFrame(timer)
  }
  onBeforeUnmount19(stop)
  return {
    times,
    start,
    stop,
    update
  }
}

// vue:./CountDown.vue
import {
  renderSlot as _renderSlot48,
  toDisplayString as _toDisplayString42,
  createTextVNode as _createTextVNode18,
  openBlock as _openBlock87,
  createElementBlock as _createElementBlock75
} from 'vue'
var pauseOrResumeValidator = payload =>
  payload && typeof payload.remainTime === 'number'
var _sfc_script89 = defineComponent89({
  name: 'fx-count-down',
  props: {
    timestamp: {
      type: Number,
      default: 0
    },
    showDays: {
      type: Boolean,
      default: false
    },
    paused: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:timestamp': timestamp => typeof timestamp === 'number',
    end: payload =>
      payload &&
      typeof payload.startTime === 'number' &&
      typeof payload.endTime === 'number',
    pause: pauseOrResumeValidator,
    resume: pauseOrResumeValidator
  },
  setup(props, { emit }) {
    let startTime = 0
    let expiredTime = 0
    let remainTime = 0
    const countTime = useCountTime(({ update, stop }) => {
      remainTime = expiredTime - Date.now()
      if (remainTime > 0) {
        update(remainTime)
        emit('update:timestamp', remainTime)
      } else {
        remainTime = 0
        update(remainTime)
        emit('update:timestamp', remainTime)
        emit('end', {
          startTime,
          endTime: expiredTime
        })
        stop()
      }
    })
    watch33(
      () => props.timestamp,
      val => {
        if (Math.abs(props.timestamp - remainTime) < 1e3) {
          return
        }
        countTime.stop()
        startTime = Date.now()
        expiredTime = val + startTime
        remainTime = val
        countTime.update(remainTime)
        !props.paused && countTime.start()
      },
      {
        immediate: true
      }
    )
    watch33(
      () => props.paused,
      val => {
        if (val) {
          emit('pause', {
            remainTime
          })
          countTime.stop()
        } else {
          emit('resume', {
            remainTime
          })
          expiredTime = remainTime + Date.now()
          countTime.start()
        }
      }
    )
    return {
      countTime: countTime.times,
      locale
    }
  }
})
var _hoisted_163 = { class: 'fx-count-down' }
function render87(_ctx, _cache) {
  return (
    _openBlock87(),
    _createElementBlock75('div', _hoisted_163, [
      _renderSlot48(
        _ctx.$slots,
        'default',
        {
          time: _ctx.countTime.time,
          days: _ctx.countTime.days,
          fullHours: _ctx.countTime.fullHours,
          thousandsFullHours: _ctx.countTime.thousandsFullHours,
          hours: _ctx.countTime.hours,
          minutes: _ctx.countTime.minutes,
          seconds: _ctx.countTime.seconds,
          milliseconds: _ctx.countTime.milliseconds
        },
        () => [
          _createTextVNode18(
            _toDisplayString42(
              _ctx.showDays
                ? _ctx.countTime.days +
                    _ctx.locale.countDownDayUnit +
                    ' ' +
                    _ctx.countTime.hours
                : _ctx.countTime.fullHours
            ) +
              ':' +
              _toDisplayString42(_ctx.countTime.minutes) +
              ':' +
              _toDisplayString42(_ctx.countTime.seconds),
            1
          )
        ]
      )
    ])
  )
}
_sfc_script89.render = render87
_sfc_script89.__file = 'src/CountDown/CountDown.vue'

// src/CountDown/index.ts
var install87 = withInstall(_sfc_script89)
var CountDown_default = _sfc_script89

// vue:./Steps.vue
import {
  defineComponent as defineComponent90,
  provide as provide12,
  toRef as toRef4
} from 'vue'
import {
  renderSlot as _renderSlot49,
  normalizeClass as _normalizeClass61,
  openBlock as _openBlock88,
  createElementBlock as _createElementBlock76
} from 'vue'
var _sfc_script90 = defineComponent90({
  name: 'fx-steps',
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    dot: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:activeIndex': activeIndex => typeof activeIndex === 'number'
  },
  setup(props, { emit }) {
    const { listEl } = useList('steps', $items => {
      if (props.activeIndex >= $items.length) {
        emit('update:activeIndex', $items.length - 1)
      }
    })
    provide12(`fxStepsActiveIndex`, toRef4(props, 'activeIndex'))
    return { listEl }
  }
})
function render88(_ctx, _cache) {
  return (
    _openBlock88(),
    _createElementBlock76(
      'div',
      {
        class: _normalizeClass61([
          'fx-steps',
          { dot: _ctx.dot, horizontal: _ctx.horizontal }
        ]),
        ref: 'listEl'
      },
      [_renderSlot49(_ctx.$slots, 'default')],
      2
    )
  )
}
_sfc_script90.render = render88
_sfc_script90.__file = 'src/Steps/Steps.vue'

// vue:./Step.vue
import {
  computed as computed39,
  defineComponent as defineComponent91,
  inject as inject17,
  ref as ref48
} from 'vue'
import {
  createElementVNode as _createElementVNode56,
  renderSlot as _renderSlot50,
  toDisplayString as _toDisplayString43,
  createTextVNode as _createTextVNode19,
  openBlock as _openBlock89,
  createElementBlock as _createElementBlock77,
  createCommentVNode as _createCommentVNode43,
  normalizeClass as _normalizeClass62
} from 'vue'
var _sfc_script91 = defineComponent91({
  name: 'fx-step',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const activeIndex = inject17(`fxStepsActiveIndex`, ref48(0))
    const root = ref48()
    const { index } = useListItem('steps', root)
    const active = computed39(() => {
      return activeIndex.value === index.value
    })
    const finish = computed39(() => {
      return index.value < activeIndex.value
    })
    return {
      root,
      index,
      active,
      finish
    }
  }
})
var _hoisted_164 = /* @__PURE__ */ _createElementVNode56(
  'div',
  { class: 'fx-step_line' },
  null,
  -1
)
var _hoisted_247 = { class: 'fx-step_index' }
var _hoisted_336 = { class: 'fx-step_inner' }
var _hoisted_422 = {
  key: 0,
  class: 'fx-step_title'
}
var _hoisted_511 = { class: 'fx-step_content' }
function render89(_ctx, _cache) {
  return (
    _openBlock89(),
    _createElementBlock77(
      'div',
      {
        class: _normalizeClass62([
          'fx-step fx-steps-item fx-horizontal-hairline',
          { active: _ctx.active, finish: _ctx.finish }
        ]),
        ref: 'root'
      },
      [
        _hoisted_164,
        _createElementVNode56('div', _hoisted_247, [
          _renderSlot50(
            _ctx.$slots,
            'step',
            {
              index: _ctx.index,
              active: _ctx.active,
              finish: _ctx.finish
            },
            () => [_createTextVNode19(_toDisplayString43(_ctx.index + 1), 1)]
          )
        ]),
        _createElementVNode56('div', _hoisted_336, [
          _ctx.title || _ctx.$slots.title
            ? (_openBlock89(),
              _createElementBlock77('div', _hoisted_422, [
                _renderSlot50(_ctx.$slots, 'title', {}, () => [
                  _createTextVNode19(_toDisplayString43(_ctx.title), 1)
                ])
              ]))
            : _createCommentVNode43('v-if', true),
          _createElementVNode56('div', _hoisted_511, [
            _renderSlot50(_ctx.$slots, 'default')
          ])
        ])
      ],
      2
    )
  )
}
_sfc_script91.render = render89
_sfc_script91.__file = 'src/Steps/Step.vue'

// src/Steps/index.ts
var Steps_default = _sfc_script90
var install88 = multiWithInstall(_sfc_script90, [_sfc_script91])

// src/Step/index.ts
var Step_default = _sfc_script91
var install89 = withNoopInstall(_sfc_script91)

// vue:./Price.vue
import {
  defineComponent as defineComponent92,
  computed as computed40
} from 'vue'
import {
  renderSlot as _renderSlot51,
  toDisplayString as _toDisplayString44,
  openBlock as _openBlock90,
  createElementBlock as _createElementBlock78,
  createCommentVNode as _createCommentVNode44,
  createElementVNode as _createElementVNode57
} from 'vue'
var _sfc_script92 = defineComponent92({
  name: 'fx-price',
  props: {
    price: {
      type: [Number, String],
      validator: isNumeric,
      default: 0,
      required: true
    },
    symbol: {
      type: String,
      default: null
    },
    thousands: {
      type: Boolean,
      default: false
    },
    decimalDigits: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const priceStr = computed40(() => {
      let priceStr2 = Number(0).toFixed(props.decimalDigits)
      if (isNumeric(props.price)) {
        priceStr2 = parseFloat(props.price).toFixed(props.decimalDigits)
      }
      if (props.thousands) {
        priceStr2 = thousands(priceStr2)
      }
      return priceStr2
    })
    return {
      priceStr
    }
  }
})
var _hoisted_165 = { class: 'fx-price' }
var _hoisted_248 = {
  key: 0,
  class: 'fx-price_symbol'
}
var _hoisted_337 = { class: 'fx-price_integer' }
var _hoisted_423 = {
  key: 1,
  class: 'fx-price_decimal'
}
function render90(_ctx, _cache) {
  return (
    _openBlock90(),
    _createElementBlock78('div', _hoisted_165, [
      _renderSlot51(_ctx.$slots, 'default'),
      _ctx.symbol
        ? (_openBlock90(),
          _createElementBlock78(
            'span',
            _hoisted_248,
            _toDisplayString44(_ctx.symbol),
            1
          ))
        : _createCommentVNode44('v-if', true),
      _createElementVNode57(
        'span',
        _hoisted_337,
        _toDisplayString44(_ctx.priceStr.split('.')[0]),
        1
      ),
      _ctx.decimalDigits > 0
        ? (_openBlock90(),
          _createElementBlock78(
            'span',
            _hoisted_423,
            '.' + _toDisplayString44(_ctx.priceStr.split('.')[1]),
            1
          ))
        : _createCommentVNode44('v-if', true)
    ])
  )
}
_sfc_script92.render = render90
_sfc_script92.__file = 'src/Price/Price.vue'

// src/Price/index.ts
var install90 = withInstall(_sfc_script92)
var Price_default = _sfc_script92

// vue:./Avatar.vue
import {
  inject as inject18,
  defineComponent as defineComponent93,
  computed as computed41
} from 'vue'

// src/Avatar/avatar.ts
var SIZE_TYPES2 = ['middle', 'large', 'small']
var avatarProps = {
  size: {
    type: [Number, String],
    default: SIZE_TYPES2[0]
  }
}
var AVATAR_SHAPE_TYPES = ['circle', 'square']
function getAvatarSize(size) {
  if (isNumber(size)) {
    return size
  }
  return getEnumsValue(SIZE_TYPES2, size)
}

// vue:./Avatar.vue
import {
  renderSlot as _renderSlot52,
  resolveComponent as _resolveComponent55,
  createVNode as _createVNode38,
  openBlock as _openBlock91,
  createBlock as _createBlock42,
  createCommentVNode as _createCommentVNode45,
  mergeProps as _mergeProps15,
  withCtx as _withCtx25
} from 'vue'
var GenderNames = ['woman', 'man']
var _sfc_script93 = defineComponent93({
  name: 'fx-avatar',
  components: { Badge: _sfc_script24, Image: _sfc_script5, Icon: _sfc_script2 },
  props: {
    ...avatarProps,
    shape: {
      type: String,
      validator: createEnumsValidator(AVATAR_SHAPE_TYPES),
      default: null
    },
    src: {
      type: String,
      default: null
    },
    badge: {
      type: [Number, String, Object]
    },
    gender: {
      type: String
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const groupOptions = inject18('fxAvatarGroupOptions', null)
    useGroupItem('avatar', Symbol('uid'))
    const size2 = computed41(() => {
      const { size } = groupOptions || props
      return getAvatarSize(size)
    })
    const shape2 = computed41(() => {
      return getEnumsValue(
        AVATAR_SHAPE_TYPES,
        groupOptions ? 'circle' : props.shape
      )
    })
    const styles = computed41(() => {
      const obj2 = {}
      if (isNumber(size2.value)) {
        const size = size2.value
        obj2.width = size + 'px'
        obj2.height = size + 'px'
        obj2.fontSize = size / 2 + 'px'
      }
      const colorObj = getColorObject(props.color)
      if (colorObj.hasColor) {
        obj2[`--fx-color`] = colorObj.varBackgroundColor
        obj2[`--fx-front-color`] = colorObj.varFrontColor
      }
      return obj2
    })
    const badge2 = computed41(() => {
      let badge
      if (props.gender && GenderNames.includes(props.gender)) {
        badge = {
          color: props.gender === 'man' ? '#1890FF' : '#F759AB',
          content: 1
        }
      } else {
        badge = handleBadge(props.badge)
      }
      badge.offset = props.shape === 'circle' ? [-5, 5] : [0, 0]
      return badge
    })
    return {
      size2,
      shape2,
      styles,
      badge2
    }
  }
})
function render91(_ctx, _cache) {
  const _component_Image = _resolveComponent55('Image')
  const _component_Icon = _resolveComponent55('Icon')
  const _component_Badge = _resolveComponent55('Badge')
  return (
    _openBlock91(),
    _createBlock42(
      _component_Badge,
      _mergeProps15(
        {
          class: [
            'fx-avatar',
            ['size--' + _ctx.size2, 'shape--' + _ctx.shape2]
          ],
          style: _ctx.styles
        },
        { ..._ctx.$attrs, ..._ctx.badge2 }
      ),
      {
        badge: _withCtx25(() => [
          _ctx.gender === 'man'
            ? (_openBlock91(),
              _createBlock42(_component_Icon, {
                key: 0,
                icon: 'ManOutlined'
              }))
            : _ctx.gender === 'woman'
            ? (_openBlock91(),
              _createBlock42(_component_Icon, {
                key: 1,
                icon: 'WomanOutlined'
              }))
            : _createCommentVNode45('v-if', true)
        ]),
        default: _withCtx25(() => [
          _renderSlot52(_ctx.$slots, 'default', {}, () => [
            _createVNode38(
              _component_Image,
              {
                class: 'fx-avatar_image',
                src: _ctx.src,
                mode: 'aspectFill',
                loadingIcon: 'UserOutlined'
              },
              null,
              8,
              ['src']
            )
          ])
        ]),
        _: 3
      },
      16,
      ['class', 'style']
    )
  )
}
_sfc_script93.render = render91
_sfc_script93.__file = 'src/Avatar/Avatar.vue'

// vue:./AvatarGroup.vue
import {
  computed as computed42,
  defineComponent as defineComponent94,
  provide as provide13
} from 'vue'
import {
  renderSlot as _renderSlot53,
  toDisplayString as _toDisplayString45,
  normalizeClass as _normalizeClass63,
  createElementVNode as _createElementVNode58,
  resolveComponent as _resolveComponent56,
  withCtx as _withCtx26,
  openBlock as _openBlock92,
  createBlock as _createBlock43,
  createCommentVNode as _createCommentVNode46,
  createElementBlock as _createElementBlock79
} from 'vue'
var _sfc_script94 = defineComponent94({
  name: 'fx-avatar-group',
  components: { Avatar: _sfc_script93 },
  props: {
    ...avatarProps,
    totalCount: {
      type: Number,
      default: null
    },
    countColor: {
      type: String
    }
  },
  setup(props) {
    const { children } = useGroup('avatar')
    provide13('fxAvatarGroupOptions', props)
    const totalCountStr = computed42(() => {
      return simpleNumber(props.totalCount)
    })
    return { children, totalCountStr }
  }
})
function render92(_ctx, _cache) {
  const _component_Avatar = _resolveComponent56('Avatar')
  return (
    _openBlock92(),
    _createElementBlock79(
      'div',
      {
        class: _normalizeClass63([
          'fx-avatar-group',
          ['count--' + (_ctx.children.length || 1)]
        ])
      },
      [
        _renderSlot53(_ctx.$slots, 'default'),
        _ctx.totalCount != null
          ? (_openBlock92(),
            _createBlock43(
              _component_Avatar,
              {
                key: 0,
                class: 'fx-avatar-group_count',
                color: _ctx.countColor
              },
              {
                default: _withCtx26(() => [
                  _createElementVNode58(
                    'span',
                    {
                      class: _normalizeClass63([
                        'fx-avatar-group_count-number',
                        ['size--' + _ctx.totalCountStr.length]
                      ])
                    },
                    _toDisplayString45(_ctx.totalCountStr),
                    3
                  )
                ]),
                _: 1
              },
              8,
              ['color']
            ))
          : _createCommentVNode46('v-if', true)
      ],
      2
    )
  )
}
_sfc_script94.render = render92
_sfc_script94.__file = 'src/Avatar/AvatarGroup.vue'

// src/Avatar/index.ts
var Avatar_default = _sfc_script93
var install91 = multiWithInstall(_sfc_script93, [_sfc_script94])

// src/AvatarGroup/index.ts
var AvatarGroup_default = _sfc_script94
var install92 = withNoopInstall(_sfc_script94)

// vue:./Timeline.vue
import { defineComponent as defineComponent95 } from 'vue'
import {
  renderSlot as _renderSlot54,
  openBlock as _openBlock93,
  createElementBlock as _createElementBlock80
} from 'vue'
var _sfc_script95 = defineComponent95({
  name: 'fx-timeline'
})
var _hoisted_166 = { class: 'fx-timeline' }
function render93(_ctx, _cache) {
  return (
    _openBlock93(),
    _createElementBlock80('div', _hoisted_166, [
      _renderSlot54(_ctx.$slots, 'default')
    ])
  )
}
_sfc_script95.render = render93
_sfc_script95.__file = 'src/Timeline/Timeline.vue'

// vue:./TimelineItem.vue
import { defineComponent as defineComponent96 } from 'vue'
import {
  createElementVNode as _createElementVNode59,
  renderSlot as _renderSlot55,
  normalizeStyle as _normalizeStyle35,
  toDisplayString as _toDisplayString46,
  createTextVNode as _createTextVNode20,
  openBlock as _openBlock94,
  createElementBlock as _createElementBlock81,
  createCommentVNode as _createCommentVNode47
} from 'vue'
var _sfc_script96 = defineComponent96({
  name: 'fx-timeline-item',
  components: {},
  props: {
    dotColor: {
      type: String,
      validator: colorValidator
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
var _hoisted_167 = {
  class: 'fx-timeline-item fx-horizontal-hairline',
  ref: 'root'
}
var _hoisted_249 = /* @__PURE__ */ _createElementVNode59(
  'div',
  { class: 'fx-timeline-item_line' },
  null,
  -1
)
var _hoisted_338 = { class: 'fx-timeline-item_index' }
var _hoisted_424 = { class: 'fx-timeline-item_inner' }
var _hoisted_512 = {
  key: 0,
  class: 'fx-timeline-item_title'
}
var _hoisted_64 = { class: 'fx-timeline-item_content' }
function render94(_ctx, _cache) {
  return (
    _openBlock94(),
    _createElementBlock81(
      'div',
      _hoisted_167,
      [
        _hoisted_249,
        _createElementVNode59('div', _hoisted_338, [
          _renderSlot55(_ctx.$slots, 'dot', {}, () => [
            _createElementVNode59(
              'i',
              {
                class: 'fx-timeline-item_dot',
                style: _normalizeStyle35({ borderColor: _ctx.dotColor })
              },
              null,
              4
            )
          ])
        ]),
        _createElementVNode59('div', _hoisted_424, [
          _ctx.title || _ctx.$slots.title
            ? (_openBlock94(),
              _createElementBlock81('div', _hoisted_512, [
                _renderSlot55(_ctx.$slots, 'title', {}, () => [
                  _createTextVNode20(_toDisplayString46(_ctx.title), 1)
                ])
              ]))
            : _createCommentVNode47('v-if', true),
          _createElementVNode59('div', _hoisted_64, [
            _renderSlot55(_ctx.$slots, 'default')
          ])
        ])
      ],
      512
    )
  )
}
_sfc_script96.render = render94
_sfc_script96.__file = 'src/Timeline/TimelineItem.vue'

// src/Timeline/index.ts
var Timeline_default = _sfc_script95
var install93 = multiWithInstall(_sfc_script95, [_sfc_script96])

// src/TimelineItem/index.ts
var TimelineItem_default = _sfc_script96
var install94 = withNoopInstall(_sfc_script96)

// vue:./Stopwatch.vue
import { defineComponent as defineComponent97 } from 'vue'
import {
  renderSlot as _renderSlot56,
  toDisplayString as _toDisplayString47,
  createTextVNode as _createTextVNode21,
  openBlock as _openBlock95,
  createElementBlock as _createElementBlock82
} from 'vue'
var _sfc_script97 = defineComponent97({
  name: 'fx-stopwatch',
  props: {
    showMilliseconds: {
      type: Boolean,
      default: true
    },
    thousands: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    start: emitTypeValidator,
    reset: emitTypeValidator,
    stop: payload => payload && payload.detail && Array.isArray(payload.laps)
  },
  setup(props, { emit }) {
    let time = 0
    let startTime = 0
    let laps = []
    const countTime = useCountTime(({ update }) => {
      time = Date.now() - startTime
      update(time)
    })
    function doing() {
      return startTime > 0
    }
    function stop() {
      if (doing()) {
        const _laps = cloneData(laps)
        _laps.push(getNextLap())
        emit('stop', {
          detail: getCountTime(time),
          laps: _laps
        })
        startTime = 0
        countTime.stop()
      }
    }
    function start() {
      if (startTime === 0) {
        startTime = Date.now() - time
      }
      emit('start', {
        type: 'start'
      })
      countTime.start()
    }
    function reset() {
      doing() && stop()
      emit('reset', {
        type: 'reset'
      })
      time = 0
      laps = []
      countTime.update(0)
      countTime.stop()
    }
    function getNextLap() {
      let totalTime = 0
      laps.forEach(({ time: time2 }) => {
        totalTime += time2
      })
      return getCountTime(time - totalTime)
    }
    function lap() {
      if (doing()) {
        laps.push(getNextLap())
        return cloneData(laps)
      }
      return []
    }
    countTime.update(0)
    return {
      time,
      countTime: countTime.times,
      stop,
      start,
      reset,
      lap
    }
  }
})
var _hoisted_168 = { class: 'fx-stopwatch' }
function render95(_ctx, _cache) {
  return (
    _openBlock95(),
    _createElementBlock82('div', _hoisted_168, [
      _renderSlot56(
        _ctx.$slots,
        'default',
        {
          time: _ctx.countTime.time,
          days: _ctx.countTime.days,
          fullHours: _ctx.countTime.fullHours,
          thousandsFullHours: _ctx.countTime.thousandsFullHours,
          hours: _ctx.countTime.hours,
          minutes: _ctx.countTime.minutes,
          seconds: _ctx.countTime.seconds,
          milliseconds: _ctx.countTime.milliseconds
        },
        () => [
          _createTextVNode21(
            _toDisplayString47(
              parseInt(_ctx.countTime.fullHours) > 0
                ? (_ctx.thousands
                    ? _ctx.countTime.thousandsFullHours
                    : _ctx.countTime.fullHours) + ':'
                : ''
            ) +
              _toDisplayString47(_ctx.countTime.minutes) +
              ':' +
              _toDisplayString47(_ctx.countTime.seconds) +
              _toDisplayString47(
                _ctx.showMilliseconds ? '.' + _ctx.countTime.milliseconds : ''
              ),
            1
          )
        ]
      )
    ])
  )
}
_sfc_script97.render = render95
_sfc_script97.__file = 'src/Stopwatch/Stopwatch.vue'

// src/Stopwatch/index.ts
var install95 = withInstall(_sfc_script97)
var Stopwatch_default = _sfc_script97

// vue:./Result.vue
import {
  computed as computed43,
  defineComponent as defineComponent98
} from 'vue'
import {
  resolveComponent as _resolveComponent57,
  normalizeClass as _normalizeClass64,
  createVNode as _createVNode39,
  toDisplayString as _toDisplayString48,
  openBlock as _openBlock96,
  createElementBlock as _createElementBlock83,
  createCommentVNode as _createCommentVNode48,
  createElementVNode as _createElementVNode60,
  renderSlot as _renderSlot57,
  createTextVNode as _createTextVNode22,
  withCtx as _withCtx27,
  createBlock as _createBlock44
} from 'vue'
var iconMap = /* @__PURE__ */ new Map([
  ['info', 'InfoCircleFilled'],
  ['warning', 'WarningFilled'],
  ['success', 'CheckCircleFilled'],
  ['fail', 'CloseCircleFilled']
])
var RESULT_TYPES = ['info', 'warning', 'success', 'fail']
var _sfc_script98 = defineComponent98({
  name: 'fx-result',
  components: { Icon: _sfc_script2, Button: _sfc_script3 },
  props: {
    type: {
      type: String,
      validator: createEnumsValidator(RESULT_TYPES),
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: true
    },
    backText: {
      type: String
    },
    confirmText: {
      type: String
    }
  },
  emits: {
    confirm: emitEventValidator,
    back: emitEventValidator
  },
  setup(props, { emit }) {
    const type2 = computed43(() => getEnumsValue(RESULT_TYPES, props.type))
    const icon = computed43(() => iconMap.get(type2.value))
    function onConfirmClick(e) {
      emit('confirm', e)
    }
    function onCancelClick(e) {
      emit('back', e)
    }
    return {
      type2,
      icon,
      onConfirmClick,
      onCancelClick,
      locale
    }
  }
})
var _hoisted_169 = { class: 'fx-result_header' }
var _hoisted_250 = {
  key: 0,
  class: 'fx-result_title'
}
var _hoisted_339 = {
  key: 1,
  class: 'fx-result_description'
}
var _hoisted_425 = { class: 'fx-result_footer' }
function render96(_ctx, _cache) {
  const _component_Icon = _resolveComponent57('Icon')
  const _component_Button = _resolveComponent57('Button')
  return (
    _openBlock96(),
    _createElementBlock83(
      'div',
      {
        class: _normalizeClass64(['fx-result', ['type--' + _ctx.type2]])
      },
      [
        _createElementVNode60('div', _hoisted_169, [
          _createVNode39(
            _component_Icon,
            {
              class: _normalizeClass64([
                'fx-result_icon',
                ['type--' + _ctx.type2]
              ]),
              icon: _ctx.icon
            },
            null,
            8,
            ['class', 'icon']
          ),
          _ctx.title
            ? (_openBlock96(),
              _createElementBlock83(
                'div',
                _hoisted_250,
                _toDisplayString48(_ctx.title),
                1
              ))
            : _createCommentVNode48('v-if', true),
          _ctx.description
            ? (_openBlock96(),
              _createElementBlock83(
                'div',
                _hoisted_339,
                _toDisplayString48(_ctx.description),
                1
              ))
            : _createCommentVNode48('v-if', true)
        ]),
        _renderSlot57(_ctx.$slots, 'default'),
        _createElementVNode60('div', _hoisted_425, [
          _createVNode39(
            _component_Button,
            {
              type: 'primary',
              onClick: _ctx.onConfirmClick
            },
            {
              default: _withCtx27(() => [
                _createTextVNode22(
                  _toDisplayString48(
                    _ctx.confirmText || _ctx.locale.resultConfirmText
                  ),
                  1
                )
              ]),
              _: 1
            },
            8,
            ['onClick']
          ),
          _ctx.showBack
            ? (_openBlock96(),
              _createBlock44(
                _component_Button,
                {
                  key: 0,
                  type: 'default',
                  onClick: _ctx.onCancelClick
                },
                {
                  default: _withCtx27(() => [
                    _createTextVNode22(
                      _toDisplayString48(
                        _ctx.backText || _ctx.locale.resultBackText
                      ),
                      1
                    )
                  ]),
                  _: 1
                },
                8,
                ['onClick']
              ))
            : _createCommentVNode48('v-if', true)
        ])
      ],
      2
    )
  )
}
_sfc_script98.render = render96
_sfc_script98.__file = 'src/Result/Result.vue'

// src/Result/index.ts
var install96 = withInstall(_sfc_script98)
var Result_default = _sfc_script98

// vue:./TimeAgo.vue
import {
  defineComponent as defineComponent99,
  onBeforeMount as onBeforeMount4,
  onBeforeUnmount as onBeforeUnmount20,
  ref as ref49,
  watch as watch34
} from 'vue'

// node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/lang/en_US.js
var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']
function en_US_default(diff, idx) {
  if (idx === 0) return ['just now', 'right now']
  var unit = EN_US[Math.floor(idx / 2)]
  if (diff > 1) unit += 's'
  return [diff + ' ' + unit + ' ago', 'in ' + diff + ' ' + unit]
}

// node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/lang/zh_CN.js
var ZH_CN = [
  '\u79D2',
  '\u5206\u949F',
  '\u5C0F\u65F6',
  '\u5929',
  '\u5468',
  '\u4E2A\u6708',
  '\u5E74'
]
function zh_CN_default2(diff, idx) {
  if (idx === 0) return ['\u521A\u521A', '\u7247\u523B\u540E']
  var unit = ZH_CN[~~(idx / 2)]
  return [diff + ' ' + unit + '\u524D', diff + ' ' + unit + '\u540E']
}

// node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/register.js
var Locales = {}
var register = function (locale2, func) {
  Locales[locale2] = func
}
var getLocale = function (locale2) {
  return Locales[locale2] || Locales['en_US']
}

// node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/utils/date.js
var SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12]
function toDate(input) {
  if (input instanceof Date) return input
  if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input))
  input = (input || '')
    .trim()
    .replace(/\.\d+/, '')
    .replace(/-/, '/')
    .replace(/-/, '/')
    .replace(/(\d)T(\d)/, '$1 $2')
    .replace(/Z/, ' UTC')
    .replace(/([+-]\d\d):?(\d\d)/, ' $1$2')
  return new Date(input)
}
function formatDiff(diff, localeFunc) {
  var agoIn = diff < 0 ? 1 : 0
  diff = Math.abs(diff)
  var totalSec = diff
  var idx = 0
  for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
    diff /= SEC_ARRAY[idx]
  }
  diff = Math.floor(diff)
  idx *= 2
  if (diff > (idx === 0 ? 9 : 1)) idx += 1
  return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString())
}
function diffSec(date, relativeDate) {
  var relDate = relativeDate ? toDate(relativeDate) : new Date()
  return (+relDate - +toDate(date)) / 1e3
}

// node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/format.js
var format = function (date, locale2, opts) {
  var sec = diffSec(date, opts && opts.relativeDate)
  return formatDiff(sec, getLocale(locale2))
}

// node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/index.js
register('en_US', en_US_default)
register('zh_CN', zh_CN_default2)

// src/helpers/timer.ts
var cache = {}
function step(interval) {
  if (cache[interval]) {
    cache[interval].callbacks.forEach(callback => {
      callback()
    })
  }
}
function addTimer(callback, interval = 60) {
  if (cache[interval]) {
    cache[interval].callbacks.push(callback)
  } else {
    cache[interval] = {
      timer: window.setInterval(() => step(interval), interval * 1e3),
      interval,
      callbacks: [callback]
    }
  }
  return function remove2() {
    if (cache[interval]) {
      const { timer, callbacks: callbacks3 } = cache[interval]
      for (let i = 0; i < callbacks3.length; i++) {
        if (callbacks3[i] === callback) {
          callbacks3.splice(i, 1)
        }
      }
      if (callbacks3.length === 0) {
        clearInterval(timer)
        delete cache[interval]
      }
    }
  }
}

// vue:./TimeAgo.vue
import {
  toDisplayString as _toDisplayString49,
  openBlock as _openBlock97,
  createElementBlock as _createElementBlock84
} from 'vue'
var _sfc_script99 = defineComponent99({
  name: 'fx-time-ago',
  props: {
    time: {
      type: [Date, String, Number],
      default: null
    },
    formatTemplate: {
      type: String,
      default: null
    },
    interval: {
      type: Number,
      default: 60
    }
  },
  setup(props) {
    const timeAgo = ref49('')
    function getDate() {
      let djs = null
      if (props.time instanceof Date || typeof props.time === 'number') {
        djs = day_default(props.time)
      } else if (typeof props.time === 'string' && props.formatTemplate) {
        djs = day_default(props.time, props.formatTemplate)
      }
      if (djs && djs.isValid()) {
        return djs.toDate()
      }
      return null
    }
    function update() {
      const d = getDate()
      timeAgo.value =
        d == null ? '' : format(d, locale.value.lang.replace('-', '_'))
    }
    watch34([() => props.time, () => props.formatTemplate], update, {
      immediate: true
    })
    let removeTimer
    watch34(
      () => props.interval,
      val => {
        removeTimer && removeTimer()
        removeTimer = addTimer(update, val)
      }
    )
    watch34(locale, () => update())
    onBeforeMount4(() => (removeTimer = addTimer(update, props.interval)))
    onBeforeUnmount20(() => removeTimer && removeTimer())
    return {
      timeAgo
    }
  }
})
var _hoisted_170 = { class: 'fx-time-ago' }
function render98(_ctx, _cache) {
  return (
    _openBlock97(),
    _createElementBlock84(
      'div',
      _hoisted_170,
      _toDisplayString49(_ctx.timeAgo),
      1
    )
  )
}
_sfc_script99.render = render98
_sfc_script99.__file = 'src/TimeAgo/TimeAgo.vue'

// src/TimeAgo/index.ts
var install97 = withInstall(_sfc_script99)
var TimeAgo_default = _sfc_script99

// vue:./CountUp.vue
import {
  defineComponent as defineComponent100,
  onBeforeUnmount as onBeforeUnmount21,
  ref as ref50,
  watch as watch35
} from 'vue'
import {
  toDisplayString as _toDisplayString50,
  openBlock as _openBlock98,
  createElementBlock as _createElementBlock85
} from 'vue'
var emitValidator2 = payload => {
  return payload && typeof payload.number === 'number'
}
var SpeedMap = /* @__PURE__ */ new Map([
  ['normal', 50],
  ['fast', 10],
  ['slow', 100]
])
var _sfc_script100 = defineComponent100({
  name: 'fx-count-up',
  props: {
    initialNumber: {
      type: Number,
      default: 0
    },
    number: {
      type: Number,
      default: 0
    },
    speed: {
      type: [Number, String],
      validator: val => isNumber(val) || SpeedMap.get(val) != null
    },
    thousands: {
      type: Boolean,
      default: false
    },
    decimalDigits: {
      type: Number,
      default: 0
    }
  },
  emits: { animated: emitValidator2, cancel: emitValidator2 },
  setup(props, { emit }) {
    const content = ref50('')
    let number = props.initialNumber
    function getDuration(diff) {
      if (isNumber(props.speed)) {
        return props.speed
      }
      return Math.max(
        Math.abs(diff) * (SpeedMap.get(props.speed) || SpeedMap.get('normal')),
        1e3
      )
    }
    let frameTask = null
    function cancel2() {
      if (frameTask) {
        frameTask.stop()
        emit('cancel', { number })
      }
    }
    function update(newNumber) {
      cancel2()
      const decimalDigits = props.decimalDigits
      const carry = Math.pow(10, decimalDigits)
      const from = Math.round(number * carry)
      const to = Math.round(newNumber * carry)
      frameTask = frameTo({
        from,
        to,
        duration: getDuration(newNumber - number),
        progress: ({ current }) => {
          number = parseFloat((current / carry).toFixed(decimalDigits))
          content.value = props.thousands
            ? thousands(number.toFixed(decimalDigits))
            : number.toFixed(decimalDigits)
        },
        complete: ({ id }) => {
          if (frameTask && frameTask.id === id) {
            frameTask = null
          }
          emit('animated', { number })
        }
      })
    }
    watch35(
      () => props.number,
      val => update(val),
      { immediate: true }
    )
    onBeforeUnmount21(() => cancel2())
    return {
      content,
      cancel: cancel2
    }
  }
})
var _hoisted_171 = { class: 'fx-count-up' }
function render99(_ctx, _cache) {
  return (
    _openBlock98(),
    _createElementBlock85(
      'div',
      _hoisted_171,
      _toDisplayString50(_ctx.content),
      1
    )
  )
}
_sfc_script100.render = render99
_sfc_script100.__file = 'src/CountUp/CountUp.vue'

// src/CountUp/index.ts
var install98 = withInstall(_sfc_script100)
var CountUp_default = _sfc_script100

// vue:./CircleProgress.vue
import {
  computed as computed44,
  defineComponent as defineComponent101
} from 'vue'
import {
  resolveComponent as _resolveComponent58,
  createVNode as _createVNode40,
  renderSlot as _renderSlot58,
  toDisplayString as _toDisplayString51,
  createTextVNode as _createTextVNode23,
  normalizeStyle as _normalizeStyle36,
  createElementVNode as _createElementVNode61,
  openBlock as _openBlock99,
  createElementBlock as _createElementBlock86
} from 'vue'
var _sfc_script101 = defineComponent101({
  name: 'fx-circle-progress',
  components: { LoadingIcon: _sfc_script11 },
  props: {
    percentage: {
      type: [Number, String],
      validator: val => {
        return isNumeric(val) && parseFloat(val) >= 0 && parseFloat(val) <= 100
      },
      default: 0,
      required: true
    },
    size: {
      type: [Number, String],
      default: 100
    },
    strokeWidth: {
      type: [Number, String],
      default: 5.37
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    return {
      nSize: computed44(() => {
        return parseFloat(props.size)
      }),
      nStrokeWidth: computed44(() => {
        return parseFloat(props.strokeWidth)
      }),
      rate: computed44(() => {
        return rangeInteger(props.percentage, 0, 100) / 100
      }),
      progress: computed44(() => {
        return rangeInteger(props.percentage, 0, 100) + '%'
      })
    }
  }
})
function render100(_ctx, _cache) {
  const _component_LoadingIcon = _resolveComponent58('LoadingIcon')
  return (
    _openBlock99(),
    _createElementBlock86(
      'div',
      {
        class: 'fx-circle-progress',
        style: _normalizeStyle36({
          fontSize: Math.max(9, _ctx.nSize * 0.17 * 0.875) + 'px'
        })
      },
      [
        _createVNode40(
          _component_LoadingIcon,
          {
            class: 'fx-circle-progress_bar',
            size: _ctx.nSize,
            rate: _ctx.rate,
            strokeWidth: _ctx.nStrokeWidth,
            color: _ctx.color
          },
          null,
          8,
          ['size', 'rate', 'strokeWidth', 'color']
        ),
        _createElementVNode61(
          'div',
          {
            class: 'fx-circle-progress_text',
            style: _normalizeStyle36({ padding: _ctx.nStrokeWidth + 'px' })
          },
          [
            _renderSlot58(
              _ctx.$slots,
              'default',
              { progress: _ctx.progress },
              () => [_createTextVNode23(_toDisplayString51(_ctx.progress), 1)]
            )
          ],
          4
        )
      ],
      4
    )
  )
}
_sfc_script101.render = render100
_sfc_script101.__file = 'src/CircleProgress/CircleProgress.vue'

// src/CircleProgress/index.ts
var install99 = withInstall(_sfc_script101)
var CircleProgress_default = _sfc_script101

// vue:./Copy.vue
import { defineComponent as defineComponent102, ref as ref51 } from 'vue'
import {
  createElementVNode as _createElementVNode62,
  renderSlot as _renderSlot59,
  toDisplayString as _toDisplayString52,
  createTextVNode as _createTextVNode24,
  openBlock as _openBlock100,
  createElementBlock as _createElementBlock87
} from 'vue'
var _sfc_script102 = defineComponent102({
  name: 'fx-copy',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  emits: {
    success: payload => typeof payload === 'string',
    error: e => e instanceof Error
  },
  setup(props, { emit }) {
    const inputEl = ref51()
    function onCopy() {
      var _a
      try {
        const $el = inputEl.value
        $el.select()
        document.execCommand('Copy')
        emit('success', (_a = $el.value) != null ? _a : '')
      } catch (error) {
        emit('error', error)
      }
    }
    return {
      inputEl,
      onCopy,
      locale
    }
  }
})
var _hoisted_172 = ['value']
var _hoisted_251 = { class: 'fx-copy_box' }
function render101(_ctx, _cache) {
  return (
    _openBlock100(),
    _createElementBlock87(
      'div',
      {
        class: 'fx-copy',
        onClick:
          _cache[0] ||
          (_cache[0] = (...args) => _ctx.onCopy && _ctx.onCopy(...args))
      },
      [
        _createElementVNode62(
          'input',
          {
            type: 'text',
            value: _ctx.text,
            class: 'fx-copy_input',
            ref: 'inputEl'
          },
          null,
          8,
          _hoisted_172
        ),
        _createElementVNode62('div', _hoisted_251, [
          _renderSlot59(_ctx.$slots, 'default', {}, () => [
            _createTextVNode24(_toDisplayString52(_ctx.locale.copyText), 1)
          ])
        ])
      ]
    )
  )
}
_sfc_script102.render = render101
_sfc_script102.__file = 'src/Copy/Copy.vue'

// src/Copy/index.ts
var install100 = withInstall(_sfc_script102)
var Copy_default = _sfc_script102

// src/index.ts
var Vfox = {
  install(app) {
    Object.values(install_exports).forEach(plugin => {
      app.use(plugin)
    })
  }
}
var src_default = Vfox
export {
  ActionSheet_default as ActionSheet,
  ActivityIndicator_default as ActivityIndicator,
  Avatar_default as Avatar,
  AvatarGroup_default as AvatarGroup,
  BackTop_default as BackTop,
  Badge_default as Badge,
  Button_default as Button,
  ButtonGroup_default as ButtonGroup,
  Calendar_default as Calendar,
  CalendarPopup_default as CalendarPopup,
  CalendarView_default as CalendarView,
  Cascader_default as Cascader,
  CascaderPopup_default as CascaderPopup,
  Cell_default as Cell,
  Checkbox_default as Checkbox,
  CheckboxGroup_default as CheckboxGroup,
  CircleProgress_default as CircleProgress,
  Col_default as Col,
  Collapse_default as Collapse,
  CollapseItem_default as CollapseItem,
  Copy_default as Copy,
  CountDown_default as CountDown,
  CountUp_default as CountUp,
  DatePicker_default as DatePicker,
  DatePickerPopup_default as DatePickerPopup,
  DatePickerView_default as DatePickerView,
  Dialog_default as Dialog,
  Divider_default as Divider,
  Drawer_default as Drawer,
  Dropdown_default as Dropdown,
  Empty_default as Empty,
  Fixed_default as Fixed,
  FlatList_default as FlatList,
  Form_default as Form,
  FormFooter_default as FormFooter,
  FormItem_default as FormItem,
  Group_default as Group,
  Icon_default as Icon,
  Image_default as Image,
  ImagePreview_default as ImagePreview,
  ImageUploader_default as ImageUploader,
  IndexView_default as IndexView,
  IndexViewItem_default as IndexViewItem,
  Input_default as Input,
  LoadMore_default as LoadMore,
  Modal_default as Modal,
  NavBar_default as NavBar,
  NoticeBar_default as NoticeBar,
  Notify_default as Notify,
  NumberKeyboard_default as NumberKeyboard,
  Order_default as Order,
  Pagination_default as Pagination,
  Picker_default as Picker,
  PickerPopup_default as PickerPopup,
  PickerView_default as PickerView,
  PopDialog_default as PopDialog,
  PopMenu_default as PopMenu,
  Popover_default as Popover,
  Price_default as Price,
  Progress_default as Progress,
  Radio_default as Radio,
  RadioGroup_default as RadioGroup,
  Range_default as Range,
  Rate_default as Rate,
  Result_default as Result,
  Row_default as Row,
  ScrollTab_default as ScrollTab,
  ScrollTabItem_default as ScrollTabItem,
  ScrollView_default as ScrollView,
  SearchBar_default as SearchBar,
  SideTab_default as SideTab,
  Skeleton_default as Skeleton,
  SkeletonAvatar_default as SkeletonAvatar,
  SkeletonButton_default as SkeletonButton,
  SkeletonImage_default as SkeletonImage,
  SkeletonParagraph_default as SkeletonParagraph,
  SkeletonTitle_default as SkeletonTitle,
  Slider_default as Slider,
  Step_default as Step,
  Stepper_default as Stepper,
  Steps_default as Steps,
  Sticky_default as Sticky,
  StickyView_default as StickyView,
  StickyViewItem_default as StickyViewItem,
  Stopwatch_default as Stopwatch,
  SwipeCell_default as SwipeCell,
  Swiper_default as Swiper,
  SwiperItem_default as SwiperItem,
  Switch_default as Switch,
  Tab_default as Tab,
  TabBar_default as TabBar,
  TabView_default as TabView,
  TabViewItem_default as TabViewItem,
  Tag_default as Tag,
  TimeAgo_default as TimeAgo,
  Timeline_default as Timeline,
  TimelineItem_default as TimelineItem,
  Toast_default as Toast,
  src_default as default,
  hideLoading,
  hideNotify,
  hideToast,
  showActionSheet,
  showCalendar,
  showCascader,
  showDatePicker,
  showDialog,
  showImagePreview,
  showLoading,
  showNotify,
  showPicker,
  showPopDialog,
  showPopMenu,
  showPopover,
  showToast
}
/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 */
