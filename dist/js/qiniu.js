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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  function t(n) {
    if (i[n]) return i[n].exports;var r = i[n] = { i: n, l: !1, exports: {} };return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }var i = {};t.m = e, t.c = i, t.d = function (e, i, n) {
    t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: n });
  }, t.n = function (e) {
    var i = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(i, "a", i), i;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 2);
}([function (e, t, i) {
  var n,
      r,
      o,
      s = !0;!function (i, s) {
    var a = function a() {
      var e = {};return s.apply(e, arguments), e.moxie;
    };r = [], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o);
  }(this || window, function () {
    !function (e, t) {
      "use strict";
      function i(e, t) {
        for (var i, n = [], r = 0; r < e.length; ++r) {
          if (!(i = a[e[r]] || o(e[r]))) throw "module definition dependecy not found: " + e[r];n.push(i);
        }t.apply(null, n);
      }function n(e, n, r) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";if (n === t) throw "invalid module definition, dependencies must be specified";if (r === t) throw "invalid module definition, definition function must be specified";i(n, function () {
          a[e] = r.apply(null, arguments);
        });
      }function r(e) {
        return !!a[e];
      }function o(t) {
        for (var i = e, n = t.split(/[.\/]/), r = 0; r < n.length; ++r) {
          if (!i[n[r]]) return;i = i[n[r]];
        }return i;
      }var a = {};n("moxie/core/utils/Basic", [], function () {
        function e(e) {
          return void 0 === e ? "undefined" : null === e ? "null" : e.nodeType ? "node" : {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
        }function t() {
          return s(!1, !1, arguments);
        }function i() {
          return s(!0, !1, arguments);
        }function n() {
          return s(!1, !0, arguments);
        }function r() {
          return s(!0, !0, arguments);
        }function o(i) {
          switch (e(i)) {case "array":
              return Array.prototype.slice.call(i);case "object":
              return t({}, i);}return i;
        }function s(t, i, n) {
          var r = n[0];return u(n, function (n, a) {
            a > 0 && u(n, function (n, a) {
              var u = -1 !== p(e(n), ["array", "object"]);if (void 0 === n || t && void 0 === r[a]) return !0;u && i && (n = o(n)), e(r[a]) === e(n) && u ? s(t, i, [r[a], n]) : r[a] = n;
            });
          }), r;
        }function a(e, t) {
          function i() {
            this.constructor = e;
          }for (var n in t) {
            ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }return i.prototype = t.prototype, e.prototype = new i(), e.__parent__ = t.prototype, e;
        }function u(e, t) {
          var i, n, r;if (e) {
            try {
              i = e.length;
            } catch (e) {
              i = void 0;
            }if (void 0 === i || "number" != typeof i) {
              for (n in e) {
                if (e.hasOwnProperty(n) && !1 === t(e[n], n)) return;
              }
            } else for (r = 0; r < i; r++) {
              if (!1 === t(e[r], r)) return;
            }
          }
        }function l(t) {
          var i;if (!t || "object" !== e(t)) return !0;for (i in t) {
            return !1;
          }return !0;
        }function c(t, i) {
          function n(o) {
            "function" === e(t[o]) && t[o](function (e) {
              ++o < r && !e ? n(o) : i(e);
            });
          }var r = t.length;"function" !== e(i) && (i = function i() {}), t && t.length || i(), n(0);
        }function d(e, t) {
          var i = 0,
              n = e.length,
              r = new Array(n);u(e, function (e, o) {
            e(function (e) {
              if (e) return t(e);var s = [].slice.call(arguments);s.shift(), r[o] = s, ++i === n && (r.unshift(null), t.apply(this, r));
            });
          });
        }function p(e, t) {
          if (t) {
            if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e);for (var i = 0, n = t.length; i < n; i++) {
              if (t[i] === e) return i;
            }
          }return -1;
        }function f(t, i) {
          var n = [];"array" !== e(t) && (t = [t]), "array" !== e(i) && (i = [i]);for (var r in t) {
            -1 === p(t[r], i) && n.push(t[r]);
          }return !!n.length && n;
        }function h(e, t) {
          var i = [];return u(e, function (e) {
            -1 !== p(e, t) && i.push(e);
          }), i.length ? i : null;
        }function m(e) {
          var t,
              i = [];for (t = 0; t < e.length; t++) {
            i[t] = e[t];
          }return i;
        }function g(e) {
          return e ? String.prototype.trim ? String.prototype.trim.call(e) : e.toString().replace(/^\s*/, "").replace(/\s*$/, "") : e;
        }function v(e) {
          if ("string" != typeof e) return e;var t,
              i = { t: 1099511627776, g: 1073741824, m: 1048576, k: 1024 };return e = /^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g, "")), t = e[2], e = +e[1], i.hasOwnProperty(t) && (e *= i[t]), Math.floor(e);
        }function x(t) {
          var i = [].slice.call(arguments, 1);return t.replace(/%[a-z]/g, function () {
            var t = i.shift();return "undefined" !== e(t) ? t : "";
          });
        }function _(e, t) {
          var i = this;setTimeout(function () {
            e.call(i);
          }, t || 1);
        }return { guid: function () {
            var e = 0;return function (t) {
              var i,
                  n = new Date().getTime().toString(32);for (i = 0; i < 5; i++) {
                n += Math.floor(65535 * Math.random()).toString(32);
              }return (t || "o_") + n + (e++).toString(32);
            };
          }(), typeOf: e, extend: t, extendIf: i, extendImmutable: n, extendImmutableIf: r, inherit: a, each: u, isEmptyObj: l, inSeries: c, inParallel: d, inArray: p, arrayDiff: f, arrayIntersect: h, toArray: m, trim: g, sprintf: x, parseSizeStr: v, delay: _ };
      }), n("moxie/core/utils/Encode", [], function () {
        var e = function e(_e) {
          return unescape(encodeURIComponent(_e));
        },
            t = function t(e) {
          return decodeURIComponent(escape(e));
        };return { utf8_encode: e, utf8_decode: t, atob: function atob(e, i) {
            if ("function" == typeof window.atob) return i ? t(window.atob(e)) : window.atob(e);var n,
                r,
                o,
                s,
                a,
                u,
                l,
                c,
                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                p = 0,
                f = 0,
                h = "",
                m = [];if (!e) return e;e += "";do {
              s = d.indexOf(e.charAt(p++)), a = d.indexOf(e.charAt(p++)), u = d.indexOf(e.charAt(p++)), l = d.indexOf(e.charAt(p++)), c = s << 18 | a << 12 | u << 6 | l, n = c >> 16 & 255, r = c >> 8 & 255, o = 255 & c, m[f++] = 64 == u ? String.fromCharCode(n) : 64 == l ? String.fromCharCode(n, r) : String.fromCharCode(n, r, o);
            } while (p < e.length);return h = m.join(""), i ? t(h) : h;
          }, btoa: function btoa(t, i) {
            if (i && (t = e(t)), "function" == typeof window.btoa) return window.btoa(t);var n,
                r,
                o,
                s,
                a,
                u,
                l,
                c,
                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                p = 0,
                f = 0,
                h = "",
                m = [];if (!t) return t;do {
              n = t.charCodeAt(p++), r = t.charCodeAt(p++), o = t.charCodeAt(p++), c = n << 16 | r << 8 | o, s = c >> 18 & 63, a = c >> 12 & 63, u = c >> 6 & 63, l = 63 & c, m[f++] = d.charAt(s) + d.charAt(a) + d.charAt(u) + d.charAt(l);
            } while (p < t.length);h = m.join("");var g = t.length % 3;return (g ? h.slice(0, g - 3) : h) + "===".slice(g || 3);
          } };
      }), n("moxie/core/utils/Env", ["moxie/core/utils/Basic"], function (e) {
        function t(e, t, i) {
          var n = 0,
              r = 0,
              o = 0,
              s = { dev: -6, alpha: -5, a: -5, beta: -4, b: -4, RC: -3, rc: -3, "#": -2, p: 1, pl: 1 },
              a = function a(e) {
            return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8];
          },
              u = function u(e) {
            return e ? isNaN(e) ? s[e] || -7 : parseInt(e, 10) : 0;
          };for (e = a(e), t = a(t), r = Math.max(e.length, t.length), n = 0; n < r; n++) {
            if (e[n] != t[n]) {
              if (e[n] = u(e[n]), t[n] = u(t[n]), e[n] < t[n]) {
                o = -1;break;
              }if (e[n] > t[n]) {
                o = 1;break;
              }
            }
          }if (!i) return o;switch (i) {case ">":case "gt":
              return o > 0;case ">=":case "ge":
              return o >= 0;case "<=":case "le":
              return o <= 0;case "==":case "=":case "eq":
              return 0 === o;case "<>":case "!=":case "ne":
              return 0 !== o;case "":case "<":case "lt":
              return o < 0;default:
              return null;}
        }var i = function (e) {
          var t = "name",
              i = "version",
              n = { has: function has(e, t) {
              return -1 !== t.toLowerCase().indexOf(e.toLowerCase());
            }, lowerize: function lowerize(e) {
              return e.toLowerCase();
            } },
              r = { rgx: function rgx() {
              for (var e, t, i, n, r, o, s, a = 0, u = arguments; a < u.length; a += 2) {
                var l = u[a],
                    c = u[a + 1];if (void 0 === e) {
                  e = {};for (n in c) {
                    r = c[n], "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? e[r[0]] = void 0 : e[r] = void 0;
                  }
                }for (t = i = 0; t < l.length; t++) {
                  if (o = l[t].exec(this.getUA())) {
                    for (n = 0; n < c.length; n++) {
                      s = o[++i], r = c[n], "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? e[r[0]] = r[1].call(this, s) : e[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? e[r[0]] = s ? s.replace(r[1], r[2]) : void 0 : e[r[0]] = s ? r[1].call(this, s, r[2]) : void 0 : 4 == r.length && (e[r[0]] = s ? r[3].call(this, s.replace(r[1], r[2])) : void 0) : e[r] = s || void 0;
                    }break;
                  }
                }if (o) break;
              }return e;
            }, str: function str(e, t) {
              for (var i in t) {
                if ("object" == _typeof(t[i]) && t[i].length > 0) {
                  for (var r = 0; r < t[i].length; r++) {
                    if (n.has(t[i][r], e)) return "?" === i ? void 0 : i;
                  }
                } else if (n.has(t[i], e)) return "?" === i ? void 0 : i;
              }return e;
            } },
              o = { browser: { oldsafari: { major: { 1: ["/8", "/1", "/3"], 2: "/4", "?": "/" }, version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", RT: "ARM" } } } },
              s = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [t, i], [/\s(opr)\/([\w\.]+)/i], [[t, "Opera"], i], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i], [t, i], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[t, "IE"], i], [/(edge)\/((\d+)?[\w\.]+)/i], [t, i], [/(yabrowser)\/([\w\.]+)/i], [[t, "Yandex"], i], [/(comodo_dragon)\/([\w\.]+)/i], [[t, /_/g, " "], i], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i], [t, i], [/(dolfin)\/([\w\.]+)/i], [[t, "Dolphin"], i], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[t, "Chrome"], i], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [i, [t, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [i, [t, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [i, [t, "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [i, [t, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [i, t], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [t, [i, r.str, o.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [t, i], [/(navigator|netscape)\/([\w\.-]+)/i], [[t, "Netscape"], i], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [t, i]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [i, [t, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [t, i], [/rv\:([\w\.]+).*(gecko)/i], [i, t]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [t, i], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [t, [i, r.str, o.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[t, "Windows"], [i, r.str, o.os.windows.version]], [/\((bb)(10);/i], [[t, "BlackBerry"], i], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [t, i], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[t, "Symbian"], i], [/\((series40);/i], [t], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[t, "Firefox OS"], i], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [t, i], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[t, "Chromium OS"], i], [/(sunos)\s?([\w\.]+\d)*/i], [[t, "Solaris"], i], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [t, i], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[t, "iOS"], [i, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[t, "Mac OS"], [i, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [t, i]] };return function (e) {
            var t = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "");this.getBrowser = function () {
              return r.rgx.apply(this, s.browser);
            }, this.getEngine = function () {
              return r.rgx.apply(this, s.engine);
            }, this.getOS = function () {
              return r.rgx.apply(this, s.os);
            }, this.getResult = function () {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS() };
            }, this.getUA = function () {
              return t;
            }, this.setUA = function (e) {
              return t = e, this;
            }, this.setUA(t);
          };
        }(),
            n = function () {
          var t = { define_property: !1, create_canvas: function () {
              var e = document.createElement("canvas");return !(!e.getContext || !e.getContext("2d"));
            }(), return_response_type: function return_response_type(t) {
              try {
                if (-1 !== e.inArray(t, ["", "text", "document"])) return !0;if (window.XMLHttpRequest) {
                  var i = new XMLHttpRequest();if (i.open("get", "/"), "responseType" in i) return i.responseType = t, i.responseType === t;
                }
              } catch (e) {}return !1;
            }, use_data_uri: function () {
              var e = new Image();return e.onload = function () {
                t.use_data_uri = 1 === e.width && 1 === e.height;
              }, setTimeout(function () {
                e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
              }, 1), !1;
            }(), use_data_uri_over32kb: function use_data_uri_over32kb() {
              return t.use_data_uri && ("IE" !== o.browser || o.version >= 9);
            }, use_data_uri_of: function use_data_uri_of(e) {
              return t.use_data_uri && e < 33e3 || t.use_data_uri_over32kb();
            }, use_fileinput: function use_fileinput() {
              if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;var e = document.createElement("input");return e.setAttribute("type", "file"), !e.disabled;
            } };return function (i) {
            var n = [].slice.call(arguments);return n.shift(), "function" === e.typeOf(t[i]) ? t[i].apply(this, n) : !!t[i];
          };
        }(),
            r = new i().getResult(),
            o = { can: n, uaParser: i, browser: r.browser.name, version: r.browser.version, os: r.os.name, osVersion: r.os.version, verComp: t, swf_url: "../flash/Moxie.swf", xap_url: "../silverlight/Moxie.xap", global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent" };return o.OS = o.os, s && (o.debug = { runtime: !0, events: !1 }, o.log = function () {
          var t = arguments[0];if ("string" === e.typeOf(t) && (t = e.sprintf.apply(this, arguments)), window && window.console && window.console.log) window.console.log(t);else if (document) {
            var i = document.getElementById("moxie-console");i || (i = document.createElement("pre"), i.id = "moxie-console", document.body.appendChild(i)), -1 !== e.inArray(e.typeOf(t), ["object", "array"]) ? function (e) {
              i.appendChild(document.createTextNode(e + "\n"));
            }(t) : i.appendChild(document.createTextNode(t + "\n"));
          }
        }), o;
      }), n("moxie/core/Exceptions", ["moxie/core/utils/Basic"], function (e) {
        function t(e, t) {
          var i;for (i in e) {
            if (e[i] === t) return i;
          }return null;
        }return { RuntimeError: function () {
            function i(e, i) {
              this.code = e, this.name = t(n, e), this.message = this.name + (i || ": RuntimeError " + this.code);
            }var n = { NOT_INIT_ERR: 1, EXCEPTION_ERR: 3, NOT_SUPPORTED_ERR: 9, JS_ERR: 4 };return e.extend(i, n), i.prototype = Error.prototype, i;
          }(), OperationNotAllowedException: function () {
            function t(e) {
              this.code = e, this.name = "OperationNotAllowedException";
            }return e.extend(t, { NOT_ALLOWED_ERR: 1 }), t.prototype = Error.prototype, t;
          }(), ImageError: function () {
            function i(e) {
              this.code = e, this.name = t(n, e), this.message = this.name + ": ImageError " + this.code;
            }var n = { WRONG_FORMAT: 1, MAX_RESOLUTION_ERR: 2, INVALID_META_ERR: 3 };return e.extend(i, n), i.prototype = Error.prototype, i;
          }(), FileException: function () {
            function i(e) {
              this.code = e, this.name = t(n, e), this.message = this.name + ": FileException " + this.code;
            }var n = { NOT_FOUND_ERR: 1, SECURITY_ERR: 2, ABORT_ERR: 3, NOT_READABLE_ERR: 4, ENCODING_ERR: 5, NO_MODIFICATION_ALLOWED_ERR: 6, INVALID_STATE_ERR: 7, SYNTAX_ERR: 8 };return e.extend(i, n), i.prototype = Error.prototype, i;
          }(), DOMException: function () {
            function i(e) {
              this.code = e, this.name = t(n, e), this.message = this.name + ": DOMException " + this.code;
            }var n = { INDEX_SIZE_ERR: 1, DOMSTRING_SIZE_ERR: 2, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, INVALID_CHARACTER_ERR: 5, NO_DATA_ALLOWED_ERR: 6, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INUSE_ATTRIBUTE_ERR: 10, INVALID_STATE_ERR: 11, SYNTAX_ERR: 12, INVALID_MODIFICATION_ERR: 13, NAMESPACE_ERR: 14, INVALID_ACCESS_ERR: 15, VALIDATION_ERR: 16, TYPE_MISMATCH_ERR: 17, SECURITY_ERR: 18, NETWORK_ERR: 19, ABORT_ERR: 20, URL_MISMATCH_ERR: 21, QUOTA_EXCEEDED_ERR: 22, TIMEOUT_ERR: 23, INVALID_NODE_TYPE_ERR: 24, DATA_CLONE_ERR: 25 };return e.extend(i, n), i.prototype = Error.prototype, i;
          }(), EventException: function () {
            function t(e) {
              this.code = e, this.name = "EventException";
            }return e.extend(t, { UNSPECIFIED_EVENT_TYPE_ERR: 0 }), t.prototype = Error.prototype, t;
          }() };
      }), n("moxie/core/utils/Dom", ["moxie/core/utils/Env"], function (e) {
        var t = function t(e) {
          return "string" != typeof e ? e : document.getElementById(e);
        },
            i = function i(e, t) {
          return !!e.className && new RegExp("(^|\\s+)" + t + "(\\s+|$)").test(e.className);
        };return { get: t, hasClass: i, addClass: function addClass(e, t) {
            i(e, t) || (e.className = e.className ? e.className.replace(/\s+$/, "") + " " + t : t);
          }, removeClass: function removeClass(e, t) {
            if (e.className) {
              var i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");e.className = e.className.replace(i, function (e, t, i) {
                return " " === t && " " === i ? " " : "";
              });
            }
          }, getStyle: function getStyle(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0;
          }, getPos: function getPos(t, i) {
            function n(e) {
              var t,
                  i,
                  n = 0,
                  r = 0;return e && (i = e.getBoundingClientRect(), t = "CSS1Compat" === l.compatMode ? l.documentElement : l.body, n = i.left + t.scrollLeft, r = i.top + t.scrollTop), { x: n, y: r };
            }var r,
                o,
                s,
                a = 0,
                u = 0,
                l = document;if (t = t, i = i || l.body, t && t.getBoundingClientRect && "IE" === e.browser && (!l.documentMode || l.documentMode < 8)) return o = n(t), s = n(i), { x: o.x - s.x, y: o.y - s.y };for (r = t; r && r != i && r.nodeType;) {
              a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
            }for (r = t.parentNode; r && r != i && r.nodeType;) {
              a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
            }return { x: a, y: u };
          }, getSize: function getSize(e) {
            return { w: e.offsetWidth || e.clientWidth, h: e.offsetHeight || e.clientHeight };
          } };
      }), n("moxie/core/EventTarget", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic"], function (e, t, i) {
        function n() {
          this.uid = i.guid();
        }var r = {};return i.extend(n.prototype, { init: function init() {
            this.uid || (this.uid = i.guid("uid_"));
          }, addEventListener: function addEventListener(e, t, n, o) {
            var s,
                a = this;if (this.hasOwnProperty("uid") || (this.uid = i.guid("uid_")), e = i.trim(e), /\s/.test(e)) return void i.each(e.split(/\s+/), function (e) {
              a.addEventListener(e, t, n, o);
            });e = e.toLowerCase(), n = parseInt(n, 10) || 0, s = r[this.uid] && r[this.uid][e] || [], s.push({ fn: t, priority: n, scope: o || this }), r[this.uid] || (r[this.uid] = {}), r[this.uid][e] = s;
          }, hasEventListener: function hasEventListener(e) {
            var t;return e ? (e = e.toLowerCase(), t = r[this.uid] && r[this.uid][e]) : t = r[this.uid], t || !1;
          }, removeEventListener: function removeEventListener(e, t) {
            var n,
                o,
                s = this;if (e = e.toLowerCase(), /\s/.test(e)) return void i.each(e.split(/\s+/), function (e) {
              s.removeEventListener(e, t);
            });if (n = r[this.uid] && r[this.uid][e]) {
              if (t) {
                for (o = n.length - 1; o >= 0; o--) {
                  if (n[o].fn === t) {
                    n.splice(o, 1);break;
                  }
                }
              } else n = [];n.length || (delete r[this.uid][e], i.isEmptyObj(r[this.uid]) && delete r[this.uid]);
            }
          }, removeAllEventListeners: function removeAllEventListeners() {
            r[this.uid] && delete r[this.uid];
          }, dispatchEvent: function dispatchEvent(n) {
            var o,
                a,
                u,
                l,
                c = {},
                d = !0;if ("string" !== i.typeOf(n)) {
              if (l = n, "string" !== i.typeOf(l.type)) throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);n = l.type, void 0 !== l.total && void 0 !== l.loaded && (c.total = l.total, c.loaded = l.loaded), c.async = l.async || !1;
            }if (-1 !== n.indexOf("::") ? function (e) {
              o = e[0], n = e[1];
            }(n.split("::")) : o = this.uid, n = n.toLowerCase(), a = r[o] && r[o][n]) {
              a.sort(function (e, t) {
                return t.priority - e.priority;
              }), u = [].slice.call(arguments), u.shift(), c.type = n, u.unshift(c), s && e.debug.events && e.log("Event '%s' fired on %u", c.type, o);var p = [];i.each(a, function (e) {
                u[0].target = e.scope, c.async ? p.push(function (t) {
                  setTimeout(function () {
                    t(!1 === e.fn.apply(e.scope, u));
                  }, 1);
                }) : p.push(function (t) {
                  t(!1 === e.fn.apply(e.scope, u));
                });
              }), p.length && i.inSeries(p, function (e) {
                d = !e;
              });
            }return d;
          }, bindOnce: function bindOnce(e, t, i, n) {
            var r = this;r.bind.call(this, e, function i() {
              return r.unbind(e, i), t.apply(this, arguments);
            }, i, n);
          }, bind: function bind() {
            this.addEventListener.apply(this, arguments);
          }, unbind: function unbind() {
            this.removeEventListener.apply(this, arguments);
          }, unbindAll: function unbindAll() {
            this.removeAllEventListeners.apply(this, arguments);
          }, trigger: function trigger() {
            return this.dispatchEvent.apply(this, arguments);
          }, handleEventProps: function handleEventProps(e) {
            var t = this;this.bind(e.join(" "), function (e) {
              var t = "on" + e.type.toLowerCase();"function" === i.typeOf(this[t]) && this[t].apply(this, arguments);
            }), i.each(e, function (e) {
              e = "on" + e.toLowerCase(e), "undefined" === i.typeOf(t[e]) && (t[e] = null);
            });
          } }), n.instance = new n(), n;
      }), n("moxie/runtime/Runtime", ["moxie/core/utils/Env", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/EventTarget"], function (e, t, i, n) {
        function r(n, o, u, l, c) {
          var d,
              p = this,
              f = t.guid(o + "_"),
              h = c || "browser";n = n || {}, a[f] = this, u = t.extend({ access_binary: !1, access_image_binary: !1, display_media: !1, do_cors: !1, drag_and_drop: !1, filter_by_extension: !0, resize_image: !1, report_upload_progress: !1, return_response_headers: !1, return_response_type: !1, return_status_code: !0, send_custom_headers: !1, select_file: !1, select_folder: !1, select_multiple: !0, send_binary_string: !1, send_browser_cookies: !0, send_multipart: !0, slice_blob: !1, stream_upload: !1, summon_file_dialog: !1, upload_filesize: !0, use_http_method: !0 }, u), n.preferred_caps && (h = r.getMode(l, n.preferred_caps, h)), s && e.debug.runtime && e.log("\tdefault mode: %s", h), d = function () {
            var e = {};return { exec: function exec(t, i, n, r) {
                if (d[i] && (e[t] || (e[t] = { context: this, instance: new d[i]() }), e[t].instance[n])) return e[t].instance[n].apply(this, r);
              }, removeInstance: function removeInstance(t) {
                delete e[t];
              }, removeAllInstances: function removeAllInstances() {
                var i = this;t.each(e, function (e, n) {
                  "function" === t.typeOf(e.instance.destroy) && e.instance.destroy.call(e.context), i.removeInstance(n);
                });
              } };
          }(), t.extend(this, { initialized: !1, uid: f, type: o, mode: r.getMode(l, n.required_caps, h), shimid: f + "_container", clients: 0, options: n, can: function can(e, i) {
              var n = arguments[2] || u;if ("string" === t.typeOf(e) && "undefined" === t.typeOf(i) && (e = r.parseCaps(e)), "object" === t.typeOf(e)) {
                for (var o in e) {
                  if (!this.can(o, e[o], n)) return !1;
                }return !0;
              }return "function" === t.typeOf(n[e]) ? n[e].call(this, i) : i === n[e];
            }, getShimContainer: function getShimContainer() {
              var e,
                  n = i.get(this.shimid);return n || (e = i.get(this.options.container) || document.body, n = document.createElement("div"), n.id = this.shimid, n.className = "moxie-shim moxie-shim-" + this.type, t.extend(n.style, { position: "absolute", top: "0px", left: "0px", width: "1px", height: "1px", overflow: "hidden" }), e.appendChild(n), e = null), n;
            }, getShim: function getShim() {
              return d;
            }, shimExec: function shimExec(e, t) {
              var i = [].slice.call(arguments, 2);return p.getShim().exec.call(this, this.uid, e, t, i);
            }, exec: function exec(e, t) {
              var i = [].slice.call(arguments, 2);return p[e] && p[e][t] ? p[e][t].apply(this, i) : p.shimExec.apply(this, arguments);
            }, destroy: function destroy() {
              if (p) {
                var e = i.get(this.shimid);e && e.parentNode.removeChild(e), d && d.removeAllInstances(), this.unbindAll(), delete a[this.uid], this.uid = null, f = p = d = e = null;
              }
            } }), this.mode && n.required_caps && !this.can(n.required_caps) && (this.mode = !1);
        }var o = {},
            a = {};return r.order = "html5,flash,silverlight,html4", r.getRuntime = function (e) {
          return !!a[e] && a[e];
        }, r.addConstructor = function (e, t) {
          t.prototype = n.instance, o[e] = t;
        }, r.getConstructor = function (e) {
          return o[e] || null;
        }, r.getInfo = function (e) {
          var t = r.getRuntime(e);return t ? { uid: t.uid, type: t.type, mode: t.mode, can: function can() {
              return t.can.apply(t, arguments);
            } } : null;
        }, r.parseCaps = function (e) {
          var i = {};return "string" !== t.typeOf(e) ? e || {} : (t.each(e.split(","), function (e) {
            i[e] = !0;
          }), i);
        }, r.can = function (e, t) {
          var i,
              n,
              o = r.getConstructor(e);return !!o && (i = new o({ required_caps: t }), n = i.mode, i.destroy(), !!n);
        }, r.thatCan = function (e, t) {
          var i = (t || r.order).split(/\s*,\s*/);for (var n in i) {
            if (r.can(i[n], e)) return i[n];
          }return null;
        }, r.getMode = function (i, n, r) {
          var o = null;if ("undefined" === t.typeOf(r) && (r = "browser"), n && !t.isEmptyObj(i)) {
            if (t.each(n, function (n, r) {
              if (i.hasOwnProperty(r)) {
                var a = i[r](n);if ("string" == typeof a && (a = [a]), o) {
                  if (!(o = t.arrayIntersect(o, a))) return s && e.debug.runtime && e.log("\t\t%c: %v (conflicting mode requested: %s)", r, n, a), o = !1;
                } else o = a;
              }s && e.debug.runtime && e.log("\t\t%c: %v (compatible modes: %s)", r, n, o);
            }), o) return -1 !== t.inArray(r, o) ? r : o[0];if (!1 === o) return !1;
          }return r;
        }, r.capTrue = function () {
          return !0;
        }, r.capFalse = function () {
          return !1;
        }, r.capTest = function (e) {
          return function () {
            return !!e;
          };
        }, r;
      }), n("moxie/runtime/RuntimeClient", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/Runtime"], function (e, t, i, n) {
        return function () {
          var r;i.extend(this, { connectRuntime: function connectRuntime(o) {
              function a(i) {
                var u, c;return i.length ? (u = i.shift().toLowerCase(), (c = n.getConstructor(u)) ? (s && e.debug.runtime && (e.log("Trying runtime: %s", u), e.log(o)), r = new c(o), r.bind("Init", function () {
                  r.initialized = !0, s && e.debug.runtime && e.log("Runtime '%s' initialized", r.type), setTimeout(function () {
                    r.clients++, l.ruid = r.uid, l.trigger("RuntimeInit", r);
                  }, 1);
                }), r.bind("Error", function () {
                  s && e.debug.runtime && e.log("Runtime '%s' failed to initialize", r.type), r.destroy(), a(i);
                }), r.bind("Exception", function (i, n) {
                  var r = n.name + "(#" + n.code + ")" + (n.message ? ", from: " + n.message : "");s && e.debug.runtime && e.log("Runtime '%s' has thrown an exception: %s", this.type, r), l.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.EXCEPTION_ERR, r));
                }), s && e.debug.runtime && e.log("\tselected mode: %s", r.mode), r.mode ? void r.init() : void r.trigger("Error")) : (s && e.debug.runtime && e.log("Constructor for '%s' runtime is not available.", u), void a(i))) : (l.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)), void (r = null));
              }var u,
                  l = this;if ("string" === i.typeOf(o) ? u = o : "string" === i.typeOf(o.ruid) && (u = o.ruid), u) {
                if (r = n.getRuntime(u)) return l.ruid = u, r.clients++, r;throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR);
              }a((o.runtime_order || n.order).split(/\s*,\s*/));
            }, disconnectRuntime: function disconnectRuntime() {
              r && --r.clients <= 0 && r.destroy(), r = null;
            }, getRuntime: function getRuntime() {
              return r && r.uid ? r : r = null;
            }, exec: function exec() {
              return r ? r.exec.apply(this, arguments) : null;
            }, can: function can(e) {
              return !!r && r.can(e);
            } });
        };
      }), n("moxie/file/Blob", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient"], function (e, t, i) {
        function n(o, s) {
          function a(t, i, o) {
            var s,
                a = r[this.uid];return "string" === e.typeOf(a) && a.length ? (s = new n(null, { type: o, size: i - t }), s.detach(a.substr(t, s.size)), s) : null;
          }i.call(this), o && this.connectRuntime(o), s ? "string" === e.typeOf(s) && (s = { data: s }) : s = {}, e.extend(this, { uid: s.uid || e.guid("uid_"), ruid: o, size: s.size || 0, type: s.type || "", slice: function slice(e, t, i) {
              return this.isDetached() ? a.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), e, t, i);
            }, getSource: function getSource() {
              return r[this.uid] ? r[this.uid] : null;
            }, detach: function detach(e) {
              if (this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy"), this.disconnectRuntime(), this.ruid = null), e = e || "", "data:" == e.substr(0, 5)) {
                var i = e.indexOf(";base64,");this.type = e.substring(5, i), e = t.atob(e.substring(i + 8));
              }this.size = e.length, r[this.uid] = e;
            }, isDetached: function isDetached() {
              return !this.ruid && "string" === e.typeOf(r[this.uid]);
            }, destroy: function destroy() {
              this.detach(), delete r[this.uid];
            } }), s.data ? this.detach(s.data) : r[this.uid] = s;
        }var r = {};return n;
      }), n("moxie/core/I18n", ["moxie/core/utils/Basic"], function (e) {
        var t = {};return { addI18n: function addI18n(i) {
            return e.extend(t, i);
          }, translate: function translate(e) {
            return t[e] || e;
          }, _: function _(e) {
            return this.translate(e);
          }, sprintf: function sprintf(t) {
            var i = [].slice.call(arguments, 1);return t.replace(/%[a-z]/g, function () {
              var t = i.shift();return "undefined" !== e.typeOf(t) ? t : "";
            });
          } };
      }), n("moxie/core/utils/Mime", ["moxie/core/utils/Basic", "moxie/core/I18n"], function (e, t) {
        var i = { mimes: {}, extensions: {}, addMimeType: function addMimeType(e) {
            var t,
                i,
                n,
                r = e.split(/,/);for (t = 0; t < r.length; t += 2) {
              for (n = r[t + 1].split(/ /), i = 0; i < n.length; i++) {
                this.mimes[n[i]] = r[t];
              }this.extensions[r[t]] = n;
            }
          }, extList2mimes: function extList2mimes(t, i) {
            var n,
                r,
                o,
                s,
                a = this,
                u = [];for (r = 0; r < t.length; r++) {
              for (n = t[r].extensions.toLowerCase().split(/\s*,\s*/), o = 0; o < n.length; o++) {
                if ("*" === n[o]) return [];if (s = a.mimes[n[o]], i && /^\w+$/.test(n[o])) u.push("." + n[o]);else if (s && -1 === e.inArray(s, u)) u.push(s);else if (!s) return [];
              }
            }return u;
          }, mimes2exts: function mimes2exts(t) {
            var i = this,
                n = [];return e.each(t, function (t) {
              if ("*" === (t = t.toLowerCase())) return n = [], !1;var r = t.match(/^(\w+)\/(\*|\w+)$/);r && ("*" === r[2] ? e.each(i.extensions, function (e, t) {
                new RegExp("^" + r[1] + "/").test(t) && [].push.apply(n, i.extensions[t]);
              }) : i.extensions[t] && [].push.apply(n, i.extensions[t]));
            }), n;
          }, mimes2extList: function mimes2extList(i) {
            var n = [],
                r = [];return "string" === e.typeOf(i) && (i = e.trim(i).split(/\s*,\s*/)), r = this.mimes2exts(i), n.push({ title: t.translate("Files"), extensions: r.length ? r.join(",") : "*" }), n.mimes = i, n;
          }, getFileExtension: function getFileExtension(e) {
            var t = e && e.match(/\.([^.]+)$/);return t ? t[1].toLowerCase() : "";
          }, getFileMime: function getFileMime(e) {
            return this.mimes[this.getFileExtension(e)] || "";
          } };return i.addMimeType("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe"), i;
      }), n("moxie/file/FileInput", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/I18n", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient"], function (e, t, i, n, r, o, a, u, l) {
        function c(o) {
          s && t.log("Instantiating FileInput...");var c, p, f;if (-1 !== e.inArray(e.typeOf(o), ["string", "node"]) && (o = { browse_button: o }), !(p = n.get(o.browse_button))) throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);f = { accept: [{ title: a.translate("All Files"), extensions: "*" }], multiple: !1, required_caps: !1, container: p.parentNode || document.body }, o = e.extend({}, f, o), "string" == typeof o.required_caps && (o.required_caps = u.parseCaps(o.required_caps)), "string" == typeof o.accept && (o.accept = i.mimes2extList(o.accept)), c = n.get(o.container), c || (c = document.body), "static" === n.getStyle(c, "position") && (c.style.position = "relative"), c = p = null, l.call(this), e.extend(this, { uid: e.guid("uid_"), ruid: null, shimid: null, files: null, init: function init() {
              var t = this;t.bind("RuntimeInit", function (i, r) {
                t.ruid = r.uid, t.shimid = r.shimid, t.bind("Ready", function () {
                  t.trigger("Refresh");
                }, 999), t.bind("Refresh", function () {
                  var t, i, s, a, u;s = n.get(o.browse_button), a = n.get(r.shimid), s && (t = n.getPos(s, n.get(o.container)), i = n.getSize(s), u = parseInt(n.getStyle(s, "z-index"), 10) || 0, a && e.extend(a.style, { top: t.y + "px", left: t.x + "px", width: i.w + "px", height: i.h + "px", zIndex: u + 1 })), a = s = null;
                }), r.exec.call(t, "FileInput", "init", o);
              }), t.connectRuntime(e.extend({}, o, { required_caps: { select_file: !0 } }));
            }, getOption: function getOption(e) {
              return o[e];
            }, setOption: function setOption(e, t) {
              if (o.hasOwnProperty(e)) {
                var n = o[e];switch (e) {case "accept":
                    "string" == typeof t && (t = i.mimes2extList(t));break;case "container":case "required_caps":
                    throw new r.FileException(r.FileException.NO_MODIFICATION_ALLOWED_ERR);}o[e] = t, this.exec("FileInput", "setOption", e, t), this.trigger("OptionChanged", e, t, n);
              }
            }, disable: function disable(t) {
              this.getRuntime() && this.exec("FileInput", "disable", "undefined" === e.typeOf(t) || t);
            }, refresh: function refresh() {
              this.trigger("Refresh");
            }, destroy: function destroy() {
              var t = this.getRuntime();t && (t.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === e.typeOf(this.files) && e.each(this.files, function (e) {
                e.destroy();
              }), this.files = null, this.unbindAll();
            } }), this.handleEventProps(d);
        }var d = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];return c.prototype = o.instance, c;
      }), n("moxie/file/File", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/file/Blob"], function (e, t, i) {
        function n(n, r) {
          r || (r = {}), i.apply(this, arguments), this.type || (this.type = t.getFileMime(r.name));var o;if (r.name) o = r.name.replace(/\\/g, "/"), o = o.substr(o.lastIndexOf("/") + 1);else if (this.type) {
            var s = this.type.split("/")[0];o = e.guid(("" !== s ? s : "file") + "_"), t.extensions[this.type] && (o += "." + t.extensions[this.type][0]);
          }e.extend(this, { name: o || e.guid("file_"), relativePath: "", lastModifiedDate: r.lastModifiedDate || new Date().toLocaleString() });
        }return n.prototype = i.prototype, n;
      }), n("moxie/file/FileDrop", ["moxie/core/I18n", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/file/File", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget", "moxie/core/utils/Mime"], function (e, t, i, n, r, o, a, u, l) {
        function c(i) {
          s && r.log("Instantiating FileDrop...");var o,
              u = this;"string" == typeof i && (i = { drop_zone: i }), o = { accept: [{ title: e.translate("All Files"), extensions: "*" }], required_caps: { drag_and_drop: !0 } }, i = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? n.extend({}, o, i) : o, i.container = t.get(i.drop_zone) || document.body, "static" === t.getStyle(i.container, "position") && (i.container.style.position = "relative"), "string" == typeof i.accept && (i.accept = l.mimes2extList(i.accept)), a.call(u), n.extend(u, { uid: n.guid("uid_"), ruid: null, files: null, init: function init() {
              u.bind("RuntimeInit", function (e, t) {
                u.ruid = t.uid, t.exec.call(u, "FileDrop", "init", i), u.dispatchEvent("ready");
              }), u.connectRuntime(i);
            }, destroy: function destroy() {
              var e = this.getRuntime();e && (e.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null, this.unbindAll();
            } }), this.handleEventProps(d);
        }var d = ["ready", "dragenter", "dragleave", "drop", "error"];return c.prototype = u.instance, c;
      }), n("moxie/file/FileReader", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/runtime/RuntimeClient"], function (e, t, i, n, r, o) {
        function s() {
          function n(e, n) {
            if (this.trigger("loadstart"), this.readyState === s.LOADING) return this.trigger("error", new i.DOMException(i.DOMException.INVALID_STATE_ERR)), void this.trigger("loadend");if (!(n instanceof r)) return this.trigger("error", new i.DOMException(i.DOMException.NOT_FOUND_ERR)), void this.trigger("loadend");if (this.result = null, this.readyState = s.LOADING, n.isDetached()) {
              var o = n.getSource();switch (e) {case "readAsText":case "readAsBinaryString":
                  this.result = o;break;case "readAsDataURL":
                  this.result = "data:" + n.type + ";base64," + t.btoa(o);}this.readyState = s.DONE, this.trigger("load"), this.trigger("loadend");
            } else this.connectRuntime(n.ruid), this.exec("FileReader", "read", e, n);
          }o.call(this), e.extend(this, { uid: e.guid("uid_"), readyState: s.EMPTY, result: null, error: null, readAsBinaryString: function readAsBinaryString(e) {
              n.call(this, "readAsBinaryString", e);
            }, readAsDataURL: function readAsDataURL(e) {
              n.call(this, "readAsDataURL", e);
            }, readAsText: function readAsText(e) {
              n.call(this, "readAsText", e);
            }, abort: function abort() {
              this.result = null, -1 === e.inArray(this.readyState, [s.EMPTY, s.DONE]) && (this.readyState === s.LOADING && (this.readyState = s.DONE), this.exec("FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"));
            }, destroy: function destroy() {
              this.abort(), this.exec("FileReader", "destroy"), this.disconnectRuntime(), this.unbindAll();
            } }), this.handleEventProps(a), this.bind("Error", function (e, t) {
            this.readyState = s.DONE, this.error = t;
          }, 999), this.bind("Load", function (e) {
            this.readyState = s.DONE;
          }, 999);
        }var a = ["loadstart", "progress", "load", "abort", "error", "loadend"];return s.EMPTY = 0, s.LOADING = 1, s.DONE = 2, s.prototype = n.instance, s;
      }), n("moxie/core/utils/Url", ["moxie/core/utils/Basic"], function (e) {
        var t = function t(i, n) {
          var r,
              o = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
              s = o.length,
              a = { http: 80, https: 443 },
              u = {},
              l = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?(\[[\da-fA-F:]+\]|[^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,
              c = l.exec(i || ""),
              d = /^\/\/\w/.test(i);switch (e.typeOf(n)) {case "undefined":
              n = t(document.location.href, !1);break;case "string":
              n = t(n, !1);}for (; s--;) {
            c[s] && (u[o[s]] = c[s]);
          }if (r = !d && !u.scheme, (d || r) && (u.scheme = n.scheme), r) {
            u.host = n.host, u.port = n.port;var p = "";/^[^\/]/.test(u.path) && (p = n.path, p = /\/[^\/]*\.[^\/]*$/.test(p) ? p.replace(/\/[^\/]+$/, "/") : p.replace(/\/?$/, "/")), u.path = p + (u.path || "");
          }return u.port || (u.port = a[u.scheme] || 80), u.port = parseInt(u.port, 10), u.path || (u.path = "/"), delete u.source, u;
        };return { parseUrl: t, resolveUrl: function resolveUrl(e) {
            var i = { http: 80, https: 443 },
                n = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : t(e);return n.scheme + "://" + n.host + (n.port !== i[n.scheme] ? ":" + n.port : "") + n.path + (n.query ? n.query : "");
          }, hasSameOrigin: function hasSameOrigin(e) {
            function i(e) {
              return [e.scheme, e.host, e.port].join("/");
            }return "string" == typeof e && (e = t(e)), i(t()) === i(e);
          } };
      }), n("moxie/runtime/RuntimeTarget", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (e, t, i) {
        function n() {
          this.uid = e.guid("uid_"), t.call(this), this.destroy = function () {
            this.disconnectRuntime(), this.unbindAll();
          };
        }return n.prototype = i.instance, n;
      }), n("moxie/file/FileReaderSync", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/utils/Encode"], function (e, t, i) {
        return function () {
          function n(e, t) {
            if (!t.isDetached()) {
              var n = this.connectRuntime(t.ruid).exec.call(this, "FileReaderSync", "read", e, t);return this.disconnectRuntime(), n;
            }var r = t.getSource();switch (e) {case "readAsBinaryString":
                return r;case "readAsDataURL":
                return "data:" + t.type + ";base64," + i.btoa(r);case "readAsText":
                for (var o = "", s = 0, a = r.length; s < a; s++) {
                  o += String.fromCharCode(r[s]);
                }return o;}
          }t.call(this), e.extend(this, { uid: e.guid("uid_"), readAsBinaryString: function readAsBinaryString(e) {
              return n.call(this, "readAsBinaryString", e);
            }, readAsDataURL: function readAsDataURL(e) {
              return n.call(this, "readAsDataURL", e);
            }, readAsText: function readAsText(e) {
              return n.call(this, "readAsText", e);
            } });
        };
      }), n("moxie/xhr/FormData", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/Blob"], function (e, t, i) {
        function n() {
          var e,
              n = [];t.extend(this, { append: function append(r, o) {
              var s = this,
                  a = t.typeOf(o);o instanceof i ? e = { name: r, value: o } : "array" === a ? (r += "[]", t.each(o, function (e) {
                s.append(r, e);
              })) : "object" === a ? t.each(o, function (e, t) {
                s.append(r + "[" + t + "]", e);
              }) : "null" === a || "undefined" === a || "number" === a && isNaN(o) ? s.append(r, "false") : n.push({ name: r, value: o.toString() });
            }, hasBlob: function hasBlob() {
              return !!this.getBlob();
            }, getBlob: function getBlob() {
              return e && e.value || null;
            }, getBlobName: function getBlobName() {
              return e && e.name || null;
            }, each: function each(i) {
              t.each(n, function (e) {
                i(e.value, e.name);
              }), e && i(e.value, e.name);
            }, destroy: function destroy() {
              e = null, n = [];
            } });
        }return n;
      }), n("moxie/xhr/XMLHttpRequest", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/core/utils/Url", "moxie/runtime/Runtime", "moxie/runtime/RuntimeTarget", "moxie/file/Blob", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/core/utils/Env", "moxie/core/utils/Mime"], function (e, t, i, n, r, o, s, a, u, l, c, d) {
        function p() {
          this.uid = e.guid("uid_");
        }function f() {
          function i(e, t) {
            if (S.hasOwnProperty(e)) return 1 === arguments.length ? c.can("define_property") ? S[e] : T[e] : void (c.can("define_property") ? S[e] = t : T[e] = t);
          }function u(t) {
            function n() {
              b && (b.destroy(), b = null), a.dispatchEvent("loadend"), a = null;
            }function r(r) {
              b.bind("LoadStart", function (e) {
                i("readyState", f.LOADING), a.dispatchEvent("readystatechange"), a.dispatchEvent(e), F && a.upload.dispatchEvent(e);
              }), b.bind("Progress", function (e) {
                i("readyState") !== f.LOADING && (i("readyState", f.LOADING), a.dispatchEvent("readystatechange")), a.dispatchEvent(e);
              }), b.bind("UploadProgress", function (e) {
                F && a.upload.dispatchEvent({ type: "progress", lengthComputable: !1, total: e.total, loaded: e.loaded });
              }), b.bind("Load", function (t) {
                i("readyState", f.DONE), i("status", Number(r.exec.call(b, "XMLHttpRequest", "getStatus") || 0)), i("statusText", h[i("status")] || ""), i("response", r.exec.call(b, "XMLHttpRequest", "getResponse", i("responseType"))), ~e.inArray(i("responseType"), ["text", ""]) ? i("responseText", i("response")) : "document" === i("responseType") && i("responseXML", i("response")), P = r.exec.call(b, "XMLHttpRequest", "getAllResponseHeaders"), a.dispatchEvent("readystatechange"), i("status") > 0 ? (F && a.upload.dispatchEvent(t), a.dispatchEvent(t)) : (k = !0, a.dispatchEvent("error")), n();
              }), b.bind("Abort", function (e) {
                a.dispatchEvent(e), n();
              }), b.bind("Error", function (e) {
                k = !0, i("readyState", f.DONE), a.dispatchEvent("readystatechange"), L = !0, a.dispatchEvent(e), n();
              }), r.exec.call(b, "XMLHttpRequest", "send", { url: v, method: x, async: A, user: _, password: y, headers: I, mimeType: D, encoding: O, responseType: a.responseType, withCredentials: a.withCredentials, options: z }, t);
            }var a = this;w = new Date().getTime(), b = new s(), "string" == typeof z.required_caps && (z.required_caps = o.parseCaps(z.required_caps)), z.required_caps = e.extend({}, z.required_caps, { return_response_type: a.responseType }), t instanceof l && (z.required_caps.send_multipart = !0), e.isEmptyObj(I) || (z.required_caps.send_custom_headers = !0), M || (z.required_caps.do_cors = !0), z.ruid ? r(b.connectRuntime(z)) : (b.bind("RuntimeInit", function (e, t) {
              r(t);
            }), b.bind("RuntimeError", function (e, t) {
              a.dispatchEvent("RuntimeError", t);
            }), b.connectRuntime(z));
          }function g() {
            i("responseText", ""), i("responseXML", null), i("response", null), i("status", 0), i("statusText", ""), w = E = null;
          }var v,
              x,
              _,
              y,
              w,
              E,
              b,
              R,
              T = this,
              S = { timeout: 0, readyState: f.UNSENT, withCredentials: !1, status: 0, statusText: "", responseType: "", responseXML: null, responseText: null, response: null },
              A = !0,
              I = {},
              O = null,
              D = null,
              C = !1,
              N = !1,
              F = !1,
              L = !1,
              k = !1,
              M = !1,
              U = null,
              B = null,
              z = {},
              P = "";e.extend(this, S, { uid: e.guid("uid_"), upload: new p(), open: function open(o, s, a, u, l) {
              var c;if (!o || !s) throw new t.DOMException(t.DOMException.SYNTAX_ERR);if (/[\u0100-\uffff]/.test(o) || n.utf8_encode(o) !== o) throw new t.DOMException(t.DOMException.SYNTAX_ERR);if (~e.inArray(o.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (x = o.toUpperCase()), ~e.inArray(x, ["CONNECT", "TRACE", "TRACK"])) throw new t.DOMException(t.DOMException.SECURITY_ERR);if (s = n.utf8_encode(s), c = r.parseUrl(s), M = r.hasSameOrigin(c), v = r.resolveUrl(s), (u || l) && !M) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);if (_ = u || c.user, y = l || c.pass, !1 === (A = a || !0) && (i("timeout") || i("withCredentials") || "" !== i("responseType"))) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);C = !A, N = !1, I = {}, g.call(this), i("readyState", f.OPENED), this.dispatchEvent("readystatechange");
            }, setRequestHeader: function setRequestHeader(r, o) {
              var s = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];if (i("readyState") !== f.OPENED || N) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if (/[\u0100-\uffff]/.test(r) || n.utf8_encode(r) !== r) throw new t.DOMException(t.DOMException.SYNTAX_ERR);return r = e.trim(r).toLowerCase(), !~e.inArray(r, s) && !/^(proxy\-|sec\-)/.test(r) && (I[r] ? I[r] += ", " + o : I[r] = o, !0);
            }, hasRequestHeader: function hasRequestHeader(e) {
              return e && I[e.toLowerCase()] || !1;
            }, getAllResponseHeaders: function getAllResponseHeaders() {
              return P || "";
            }, getResponseHeader: function getResponseHeader(t) {
              return t = t.toLowerCase(), k || ~e.inArray(t, ["set-cookie", "set-cookie2"]) ? null : P && "" !== P && (R || (R = {}, e.each(P.split(/\r\n/), function (t) {
                var i = t.split(/:\s+/);2 === i.length && (i[0] = e.trim(i[0]), R[i[0].toLowerCase()] = { header: i[0], value: e.trim(i[1]) });
              })), R.hasOwnProperty(t)) ? R[t].header + ": " + R[t].value : null;
            }, overrideMimeType: function overrideMimeType(n) {
              var r, o;if (~e.inArray(i("readyState"), [f.LOADING, f.DONE])) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if (n = e.trim(n.toLowerCase()), /;/.test(n) && (r = n.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (n = r[1], r[2] && (o = r[2])), !d.mimes[n]) throw new t.DOMException(t.DOMException.SYNTAX_ERR);U = n, B = o;
            }, send: function send(i, r) {
              if (z = "string" === e.typeOf(r) ? { ruid: r } : r || {}, this.readyState !== f.OPENED || N) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if (i instanceof a) z.ruid = i.ruid, D = i.type || "application/octet-stream";else if (i instanceof l) {
                if (i.hasBlob()) {
                  var o = i.getBlob();z.ruid = o.ruid, D = o.type || "application/octet-stream";
                }
              } else "string" == typeof i && (O = "UTF-8", D = "text/plain;charset=UTF-8", i = n.utf8_encode(i));this.withCredentials || (this.withCredentials = z.required_caps && z.required_caps.send_browser_cookies && !M), F = !C && this.upload.hasEventListener(), k = !1, L = !i, C || (N = !0), u.call(this, i);
            }, abort: function abort() {
              if (k = !0, C = !1, ~e.inArray(i("readyState"), [f.UNSENT, f.OPENED, f.DONE])) i("readyState", f.UNSENT);else {
                if (i("readyState", f.DONE), N = !1, !b) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);b.getRuntime().exec.call(b, "XMLHttpRequest", "abort", L), L = !0;
              }
            }, destroy: function destroy() {
              b && ("function" === e.typeOf(b.destroy) && b.destroy(), b = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null);
            } }), this.handleEventProps(m.concat(["readystatechange"])), this.upload.handleEventProps(m);
        }var h = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 306: "Reserved", 307: "Temporary Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Request Entity Too Large", 414: "Request-URI Too Long", 415: "Unsupported Media Type", 416: "Requested Range Not Satisfiable", 417: "Expectation Failed", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 426: "Upgrade Required", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 510: "Not Extended" };p.prototype = i.instance;var m = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];return f.UNSENT = 0, f.OPENED = 1, f.HEADERS_RECEIVED = 2, f.LOADING = 3, f.DONE = 4, f.prototype = i.instance, f;
      }), n("moxie/runtime/Transporter", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (e, t, i, n) {
        function r() {
          function n() {
            c = d = 0, l = this.result = null;
          }function o(t, i) {
            var n = this;u = i, n.bind("TransportingProgress", function (t) {
              (d = t.loaded) < c && -1 === e.inArray(n.state, [r.IDLE, r.DONE]) && s.call(n);
            }, 999), n.bind("TransportingComplete", function () {
              d = c, n.state = r.DONE, l = null, n.result = u.exec.call(n, "Transporter", "getAsBlob", t || "");
            }, 999), n.state = r.BUSY, n.trigger("TransportingStarted"), s.call(n);
          }function s() {
            var e,
                i = this,
                n = c - d;p > n && (p = n), e = t.btoa(l.substr(d, p)), u.exec.call(i, "Transporter", "receive", e, c);
          }var a, u, l, c, d, p;i.call(this), e.extend(this, { uid: e.guid("uid_"), state: r.IDLE, result: null, transport: function transport(t, i, r) {
              var s = this;if (r = e.extend({ chunk_size: 204798 }, r), (a = r.chunk_size % 3) && (r.chunk_size += 3 - a), p = r.chunk_size, n.call(this), l = t, c = t.length, "string" === e.typeOf(r) || r.ruid) o.call(s, i, this.connectRuntime(r));else {
                var u = function u(e, t) {
                  s.unbind("RuntimeInit", u), o.call(s, i, t);
                };this.bind("RuntimeInit", u), this.connectRuntime(r);
              }
            }, abort: function abort() {
              var e = this;e.state = r.IDLE, u && (u.exec.call(e, "Transporter", "clear"), e.trigger("TransportingAborted")), n.call(e);
            }, destroy: function destroy() {
              this.unbindAll(), u = null, this.disconnectRuntime(), n.call(this);
            } });
        }return r.IDLE = 0, r.BUSY = 1, r.DONE = 2, r.prototype = n.instance, r;
      }), n("moxie/image/Image", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/file/FileReaderSync", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/runtime/Transporter", "moxie/core/utils/Env", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/core/utils/Encode"], function (e, t, i, n, r, o, s, a, u, l, c, d, p) {
        function f() {
          function n(e) {
            try {
              return e || (e = this.exec("Image", "getInfo")), this.size = e.size, this.width = e.width, this.height = e.height, this.type = e.type, this.meta = e.meta, "" === this.name && (this.name = e.name), !0;
            } catch (e) {
              return this.trigger("error", e.code), !1;
            }
          }function l(t) {
            var n = e.typeOf(t);try {
              if (t instanceof f) {
                if (!t.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);m.apply(this, arguments);
              } else if (t instanceof c) {
                if (!~e.inArray(t.type, ["image/jpeg", "image/png"])) throw new i.ImageError(i.ImageError.WRONG_FORMAT);g.apply(this, arguments);
              } else if (-1 !== e.inArray(n, ["blob", "file"])) l.call(this, new d(null, t), arguments[1]);else if ("string" === n) "data:" === t.substr(0, 5) ? l.call(this, new c(null, { data: t }), arguments[1]) : v.apply(this, arguments);else {
                if ("node" !== n || "img" !== t.nodeName.toLowerCase()) throw new i.DOMException(i.DOMException.TYPE_MISMATCH_ERR);l.call(this, t.src, arguments[1]);
              }
            } catch (e) {
              this.trigger("error", e.code);
            }
          }function m(t, i) {
            var n = this.connectRuntime(t.ruid);this.ruid = n.uid, n.exec.call(this, "Image", "loadFromImage", t, "undefined" === e.typeOf(i) || i);
          }function g(t, i) {
            function n(e) {
              r.ruid = e.uid, e.exec.call(r, "Image", "loadFromBlob", t);
            }var r = this;r.name = t.name || "", t.isDetached() ? (this.bind("RuntimeInit", function (e, t) {
              n(t);
            }), i && "string" == typeof i.required_caps && (i.required_caps = o.parseCaps(i.required_caps)), this.connectRuntime(e.extend({ required_caps: { access_image_binary: !0, resize_image: !0 } }, i))) : n(this.connectRuntime(t.ruid));
          }function v(e, t) {
            var i,
                n = this;i = new r(), i.open("get", e), i.responseType = "blob", i.onprogress = function (e) {
              n.trigger(e);
            }, i.onload = function () {
              g.call(n, i.response, !0);
            }, i.onerror = function (e) {
              n.trigger(e);
            }, i.onloadend = function () {
              i.destroy();
            }, i.bind("RuntimeError", function (e, t) {
              n.trigger("RuntimeError", t);
            }), i.send(null, t);
          }s.call(this), e.extend(this, { uid: e.guid("uid_"), ruid: null, name: "", size: 0, width: 0, height: 0, type: "", meta: {}, clone: function clone() {
              this.load.apply(this, arguments);
            }, load: function load() {
              l.apply(this, arguments);
            }, resize: function resize(t) {
              var n,
                  r,
                  o = this,
                  s = { x: 0, y: 0, width: o.width, height: o.height },
                  a = e.extendIf({ width: o.width, height: o.height, type: o.type || "image/jpeg", quality: 90, crop: !1, fit: !0, preserveHeaders: !0, resample: "default", multipass: !0 }, t);try {
                if (!o.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);if (o.width > f.MAX_RESIZE_WIDTH || o.height > f.MAX_RESIZE_HEIGHT) throw new i.ImageError(i.ImageError.MAX_RESOLUTION_ERR);if (n = o.meta && o.meta.tiff && o.meta.tiff.Orientation || 1, -1 !== e.inArray(n, [5, 6, 7, 8])) {
                  var u = a.width;a.width = a.height, a.height = u;
                }if (a.crop) {
                  switch (r = Math.max(a.width / o.width, a.height / o.height), t.fit ? (s.width = Math.min(Math.ceil(a.width / r), o.width), s.height = Math.min(Math.ceil(a.height / r), o.height), r = a.width / s.width) : (s.width = Math.min(a.width, o.width), s.height = Math.min(a.height, o.height), r = 1), "boolean" == typeof a.crop && (a.crop = "cc"), a.crop.toLowerCase().replace(/_/, "-")) {case "rb":case "right-bottom":
                      s.x = o.width - s.width, s.y = o.height - s.height;break;case "cb":case "center-bottom":
                      s.x = Math.floor((o.width - s.width) / 2), s.y = o.height - s.height;break;case "lb":case "left-bottom":
                      s.x = 0, s.y = o.height - s.height;break;case "lt":case "left-top":
                      s.x = 0, s.y = 0;break;case "ct":case "center-top":
                      s.x = Math.floor((o.width - s.width) / 2), s.y = 0;break;case "rt":case "right-top":
                      s.x = o.width - s.width, s.y = 0;break;case "rc":case "right-center":case "right-middle":
                      s.x = o.width - s.width, s.y = Math.floor((o.height - s.height) / 2);break;case "lc":case "left-center":case "left-middle":
                      s.x = 0, s.y = Math.floor((o.height - s.height) / 2);break;case "cc":case "center-center":case "center-middle":default:
                      s.x = Math.floor((o.width - s.width) / 2), s.y = Math.floor((o.height - s.height) / 2);}s.x = Math.max(s.x, 0), s.y = Math.max(s.y, 0);
                } else r = Math.min(a.width / o.width, a.height / o.height);this.exec("Image", "resize", s, r, a);
              } catch (e) {
                o.trigger("error", e.code);
              }
            }, downsize: function downsize(t) {
              var i,
                  n = { width: this.width, height: this.height, type: this.type || "image/jpeg", quality: 90, crop: !1, preserveHeaders: !0, resample: "default" };i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.extend(n, t) : e.extend(n, { width: arguments[0], height: arguments[1], crop: arguments[2], preserveHeaders: arguments[3] }), this.resize(i);
            }, crop: function crop(e, t, i) {
              this.downsize(e, t, !0, i);
            }, getAsCanvas: function getAsCanvas() {
              if (!u.can("create_canvas")) throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);return this.exec("Image", "getAsCanvas");
            }, getAsBlob: function getAsBlob(e, t) {
              if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);return this.exec("Image", "getAsBlob", e || "image/jpeg", t || 90);
            }, getAsDataURL: function getAsDataURL(e, t) {
              if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);return this.exec("Image", "getAsDataURL", e || "image/jpeg", t || 90);
            }, getAsBinaryString: function getAsBinaryString(e, t) {
              var i = this.getAsDataURL(e, t);return p.atob(i.substring(i.indexOf("base64,") + 7));
            }, embed: function embed(n, r) {
              function o(t, r) {
                var o = this;if (u.can("create_canvas")) {
                  var c = o.getAsCanvas();if (c) return n.appendChild(c), c = null, o.destroy(), void l.trigger("embedded");
                }var d = o.getAsDataURL(t, r);if (!d) throw new i.ImageError(i.ImageError.WRONG_FORMAT);if (u.can("use_data_uri_of", d.length)) n.innerHTML = '<img src="' + d + '" width="' + o.width + '" height="' + o.height + '" />', o.destroy(), l.trigger("embedded");else {
                  var f = new a();f.bind("TransportingComplete", function () {
                    s = l.connectRuntime(this.result.ruid), l.bind("Embedded", function () {
                      e.extend(s.getShimContainer().style, { top: "0px", left: "0px", width: o.width + "px", height: o.height + "px" }), s = null;
                    }, 999), s.exec.call(l, "ImageView", "display", this.result.uid, width, height), o.destroy();
                  }), f.transport(p.atob(d.substring(d.indexOf("base64,") + 7)), t, { required_caps: { display_media: !0 }, runtime_order: "flash,silverlight", container: n });
                }
              }var s,
                  l = this,
                  c = e.extend({ width: this.width, height: this.height, type: this.type || "image/jpeg", quality: 90 }, r);try {
                if (!(n = t.get(n))) throw new i.DOMException(i.DOMException.INVALID_NODE_TYPE_ERR);if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);this.width > f.MAX_RESIZE_WIDTH || (this.height, f.MAX_RESIZE_HEIGHT);var d = new f();return d.bind("Resize", function () {
                  o.call(this, c.type, c.quality);
                }), d.bind("Load", function () {
                  this.downsize(c);
                }), this.meta.thumb && this.meta.thumb.width >= c.width && this.meta.thumb.height >= c.height ? d.load(this.meta.thumb.data) : d.clone(this, !1), d;
              } catch (e) {
                this.trigger("error", e.code);
              }
            }, destroy: function destroy() {
              this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.meta && this.meta.thumb && this.meta.thumb.data.destroy(), this.unbindAll();
            } }), this.handleEventProps(h), this.bind("Load Resize", function () {
            return n.call(this);
          }, 999);
        }var h = ["progress", "load", "error", "resize", "embedded"];return f.MAX_RESIZE_WIDTH = 8192, f.MAX_RESIZE_HEIGHT = 8192, f.prototype = l.instance, f;
      }), n("moxie/runtime/html5/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (e, t, i, n) {
        function o(t) {
          var o = this,
              u = i.capTest,
              l = i.capTrue,
              c = e.extend({ access_binary: u(window.FileReader || window.File && window.File.getAsDataURL), access_image_binary: function access_image_binary() {
              return o.can("access_binary") && !!a.Image;
            }, display_media: u((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")), do_cors: u(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()), drag_and_drop: u(function () {
              var e = document.createElement("div");return ("draggable" in e || "ondragstart" in e && "ondrop" in e) && ("IE" !== n.browser || n.verComp(n.version, 9, ">"));
            }()), filter_by_extension: u(function () {
              return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"));
            }()), return_response_headers: l, return_response_type: function return_response_type(e) {
              return !("json" !== e || !window.JSON) || n.can("return_response_type", e);
            }, return_status_code: l, report_upload_progress: u(window.XMLHttpRequest && new XMLHttpRequest().upload), resize_image: function resize_image() {
              return o.can("access_binary") && n.can("create_canvas");
            }, select_file: function select_file() {
              return n.can("use_fileinput") && window.File;
            }, select_folder: function select_folder() {
              return o.can("select_file") && ("Chrome" === n.browser && n.verComp(n.version, 21, ">=") || "Firefox" === n.browser && n.verComp(n.version, 42, ">="));
            }, select_multiple: function select_multiple() {
              return o.can("select_file") && !("Safari" === n.browser && "Windows" === n.os) && !("iOS" === n.os && n.verComp(n.osVersion, "7.0.0", ">") && n.verComp(n.osVersion, "8.0.0", "<"));
            }, send_binary_string: u(window.XMLHttpRequest && (new XMLHttpRequest().sendAsBinary || window.Uint8Array && window.ArrayBuffer)), send_custom_headers: u(window.XMLHttpRequest), send_multipart: function send_multipart() {
              return !!(window.XMLHttpRequest && new XMLHttpRequest().upload && window.FormData) || o.can("send_binary_string");
            }, slice_blob: u(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)), stream_upload: function stream_upload() {
              return o.can("slice_blob") && o.can("send_multipart");
            }, summon_file_dialog: function summon_file_dialog() {
              return o.can("select_file") && ("Firefox" === n.browser && n.verComp(n.version, 4, ">=") || "Opera" === n.browser && n.verComp(n.version, 12, ">=") || "IE" === n.browser && n.verComp(n.version, 10, ">=") || !!~e.inArray(n.browser, ["Chrome", "Safari", "Edge"]));
            }, upload_filesize: l, use_http_method: l }, arguments[2]);i.call(this, t, arguments[1] || s, c), e.extend(this, { init: function init() {
              this.trigger("Init");
            }, destroy: function (e) {
              return function () {
                e.call(o), e = o = null;
              };
            }(this.destroy) }), e.extend(this.getShim(), a);
        }var s = "html5",
            a = {};return i.addConstructor(s, o), a;
      }), n("moxie/runtime/html5/file/Blob", ["moxie/runtime/html5/Runtime", "moxie/file/Blob"], function (e, t) {
        function i() {
          function e(e, t, i) {
            var n;if (!window.File.prototype.slice) return (n = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? n.call(e, t, i) : null;try {
              return e.slice(), e.slice(t, i);
            } catch (n) {
              return e.slice(t, i - t);
            }
          }this.slice = function () {
            return new t(this.getRuntime().uid, e.apply(this, arguments));
          };
        }return e.Blob = i;
      }), n("moxie/core/utils/Events", ["moxie/core/utils/Basic"], function (e) {
        function t() {
          this.returnValue = !1;
        }function i() {
          this.cancelBubble = !0;
        }var n = {},
            r = "moxie_" + e.guid(),
            o = function o(_o, s, a, u) {
          var l, c;s = s.toLowerCase(), _o.addEventListener ? (l = a, _o.addEventListener(s, l, !1)) : _o.attachEvent && (l = function l() {
            var e = window.event;e.target || (e.target = e.srcElement), e.preventDefault = t, e.stopPropagation = i, a(e);
          }, _o.attachEvent("on" + s, l)), _o[r] || (_o[r] = e.guid()), n.hasOwnProperty(_o[r]) || (n[_o[r]] = {}), c = n[_o[r]], c.hasOwnProperty(s) || (c[s] = []), c[s].push({ func: l, orig: a, key: u });
        },
            s = function s(t, i, o) {
          var s;if (i = i.toLowerCase(), t[r] && n[t[r]] && n[t[r]][i]) {
            s = n[t[r]][i];for (var a = s.length - 1; a >= 0 && (s[a].orig !== o && s[a].key !== o || (t.removeEventListener ? t.removeEventListener(i, s[a].func, !1) : t.detachEvent && t.detachEvent("on" + i, s[a].func), s[a].orig = null, s[a].func = null, s.splice(a, 1), void 0 === o)); a--) {}if (s.length || delete n[t[r]][i], e.isEmptyObj(n[t[r]])) {
              delete n[t[r]];try {
                delete t[r];
              } catch (e) {
                t[r] = void 0;
              }
            }
          }
        };return { addEvent: o, removeEvent: s, removeAllEvents: function removeAllEvents(t, i) {
            t && t[r] && e.each(n[t[r]], function (e, n) {
              s(t, n, i);
            });
          } };
      }), n("moxie/runtime/html5/file/FileInput", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s) {
        function a() {
          var e, a;i.extend(this, { init: function init(u) {
              var l,
                  c,
                  d,
                  p,
                  f,
                  h,
                  m = this,
                  g = m.getRuntime();e = u, d = e.accept.mimes || o.extList2mimes(e.accept, g.can("filter_by_extension")), c = g.getShimContainer(), c.innerHTML = '<input id="' + g.uid + '" type="file" style="font-size:999px;opacity:0;"' + (e.multiple && g.can("select_multiple") ? "multiple" : "") + (e.directory && g.can("select_folder") ? "webkitdirectory directory" : "") + (d ? ' accept="' + d.join(",") + '"' : "") + " />", l = n.get(g.uid), i.extend(l.style, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }), p = n.get(e.browse_button), a = n.getStyle(p, "z-index") || "auto", g.can("summon_file_dialog") && ("static" === n.getStyle(p, "position") && (p.style.position = "relative"), r.addEvent(p, "click", function (e) {
                var t = n.get(g.uid);t && !t.disabled && t.click(), e.preventDefault();
              }, m.uid), m.bind("Refresh", function () {
                f = parseInt(a, 10) || 1, n.get(e.browse_button).style.zIndex = f, this.getRuntime().getShimContainer().style.zIndex = f - 1;
              })), h = g.can("summon_file_dialog") ? p : c, r.addEvent(h, "mouseover", function () {
                m.trigger("mouseenter");
              }, m.uid), r.addEvent(h, "mouseout", function () {
                m.trigger("mouseleave");
              }, m.uid), r.addEvent(h, "mousedown", function () {
                m.trigger("mousedown");
              }, m.uid), r.addEvent(n.get(e.container), "mouseup", function () {
                m.trigger("mouseup");
              }, m.uid), l.onchange = function n(r) {
                if (m.files = [], i.each(this.files, function (i) {
                  var n = "";if (e.directory && "." == i.name) return !0;i.webkitRelativePath && (n = "/" + i.webkitRelativePath.replace(/^\//, "")), i = new t(g.uid, i), i.relativePath = n, m.files.push(i);
                }), "IE" !== s.browser && "IEMobile" !== s.browser) this.value = "";else {
                  var o = this.cloneNode(!0);this.parentNode.replaceChild(o, this), o.onchange = n;
                }m.files.length && m.trigger("change");
              }, m.trigger({ type: "ready", async: !0 }), c = null;
            }, setOption: function setOption(e, t) {
              var i = this.getRuntime(),
                  r = n.get(i.uid);switch (e) {case "accept":
                  if (t) {
                    var s = t.mimes || o.extList2mimes(t, i.can("filter_by_extension"));r.setAttribute("accept", s.join(","));
                  } else r.removeAttribute("accept");break;case "directory":
                  t && i.can("select_folder") ? (r.setAttribute("directory", ""), r.setAttribute("webkitdirectory", "")) : (r.removeAttribute("directory"), r.removeAttribute("webkitdirectory"));break;case "multiple":
                  t && i.can("select_multiple") ? r.setAttribute("multiple", "") : r.removeAttribute("multiple");}
            }, disable: function disable(e) {
              var t,
                  i = this.getRuntime();(t = n.get(i.uid)) && (t.disabled = !!e);
            }, destroy: function destroy() {
              var t = this.getRuntime(),
                  i = t.getShim(),
                  o = t.getShimContainer(),
                  s = e && n.get(e.container),
                  u = e && n.get(e.browse_button);s && r.removeAllEvents(s, this.uid), u && (r.removeAllEvents(u, this.uid), u.style.zIndex = a), o && (r.removeAllEvents(o, this.uid), o.innerHTML = ""), i.removeInstance(this.uid), e = o = s = u = i = null;
            } });
        }return e.FileInput = a;
      }), n("moxie/runtime/html5/file/FileDrop", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime"], function (e, t, i, n, r, o) {
        function s() {
          function e(e) {
            if (!e.dataTransfer || !e.dataTransfer.types) return !1;var t = i.toArray(e.dataTransfer.types || []);return -1 !== i.inArray("Files", t) || -1 !== i.inArray("public.file-url", t) || -1 !== i.inArray("application/x-moz-file", t);
          }function s(e, i) {
            if (u(e)) {
              var n = new t(h, e);n.relativePath = i || "", m.push(n);
            }
          }function a(e) {
            for (var t = [], n = 0; n < e.length; n++) {
              [].push.apply(t, e[n].extensions.split(/\s*,\s*/));
            }return -1 === i.inArray("*", t) ? t : [];
          }function u(e) {
            if (!g.length) return !0;var t = o.getFileExtension(e.name);return !t || -1 !== i.inArray(t, g);
          }function l(e, t) {
            var n = [];i.each(e, function (e) {
              var t = e.webkitGetAsEntry();t && (t.isFile ? s(e.getAsFile(), t.fullPath) : n.push(t));
            }), n.length ? c(n, t) : t();
          }function c(e, t) {
            var n = [];i.each(e, function (e) {
              n.push(function (t) {
                d(e, t);
              });
            }), i.inSeries(n, function () {
              t();
            });
          }function d(e, t) {
            e.isFile ? e.file(function (i) {
              s(i, e.fullPath), t();
            }, function () {
              t();
            }) : e.isDirectory ? p(e, t) : t();
          }function p(e, t) {
            function i(e) {
              r.readEntries(function (t) {
                t.length ? ([].push.apply(n, t), i(e)) : e();
              }, e);
            }var n = [],
                r = e.createReader();i(function () {
              c(n, t);
            });
          }var f,
              h,
              m = [],
              g = [];i.extend(this, { init: function init(t) {
              var n,
                  o = this;f = t, h = o.ruid, g = a(f.accept), n = f.container, r.addEvent(n, "dragover", function (t) {
                e(t) && (t.preventDefault(), t.dataTransfer.dropEffect = "copy");
              }, o.uid), r.addEvent(n, "drop", function (t) {
                e(t) && (t.preventDefault(), m = [], t.dataTransfer.items && t.dataTransfer.items[0].webkitGetAsEntry ? l(t.dataTransfer.items, function () {
                  o.files = m, o.trigger("drop");
                }) : (i.each(t.dataTransfer.files, function (e) {
                  s(e);
                }), o.files = m, o.trigger("drop")));
              }, o.uid), r.addEvent(n, "dragenter", function (e) {
                o.trigger("dragenter");
              }, o.uid), r.addEvent(n, "dragleave", function (e) {
                o.trigger("dragleave");
              }, o.uid);
            }, destroy: function destroy() {
              r.removeAllEvents(f && n.get(f.container), this.uid), h = m = g = f = null;
            } });
        }return e.FileDrop = s;
      }), n("moxie/runtime/html5/file/FileReader", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Encode", "moxie/core/utils/Basic"], function (e, t, i) {
        function n() {
          function e(e) {
            return t.atob(e.substring(e.indexOf("base64,") + 7));
          }var n,
              r = !1;i.extend(this, { read: function read(t, o) {
              var s = this;s.result = "", n = new window.FileReader(), n.addEventListener("progress", function (e) {
                s.trigger(e);
              }), n.addEventListener("load", function (t) {
                s.result = r ? e(n.result) : n.result, s.trigger(t);
              }), n.addEventListener("error", function (e) {
                s.trigger(e, n.error);
              }), n.addEventListener("loadend", function (e) {
                n = null, s.trigger(e);
              }), "function" === i.typeOf(n[t]) ? (r = !1, n[t](o.getSource())) : "readAsBinaryString" === t && (r = !0, n.readAsDataURL(o.getSource()));
            }, abort: function abort() {
              n && n.abort();
            }, destroy: function destroy() {
              n = null;
            } });
        }return e.FileReader = n;
      }), n("moxie/runtime/html5/xhr/XMLHttpRequest", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Url", "moxie/file/File", "moxie/file/Blob", "moxie/xhr/FormData", "moxie/core/Exceptions", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s, a, u) {
        function l() {
          function e(e, t) {
            var i,
                n,
                r = this;i = t.getBlob().getSource(), n = new window.FileReader(), n.onload = function () {
              t.append(t.getBlobName(), new o(null, { type: i.type, data: n.result })), h.send.call(r, e, t);
            }, n.readAsBinaryString(i);
          }function l() {
            return !window.XMLHttpRequest || "IE" === u.browser && u.verComp(u.version, 8, "<") ? function () {
              for (var e = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"], t = 0; t < e.length; t++) {
                try {
                  return new ActiveXObject(e[t]);
                } catch (e) {}
              }
            }() : new window.XMLHttpRequest();
          }function c(e) {
            var t = e.responseXML,
                i = e.responseText;return "IE" === u.browser && i && t && !t.documentElement && /[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type")) && (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.validateOnParse = !1, t.loadXML(i)), t && ("IE" === u.browser && 0 !== t.parseError || !t.documentElement || "parsererror" === t.documentElement.tagName) ? null : t;
          }function d(e) {
            var t = "----moxieboundary" + new Date().getTime(),
                i = "\r\n",
                n = "";if (!this.getRuntime().can("send_binary_string")) throw new a.RuntimeError(a.RuntimeError.NOT_SUPPORTED_ERR);return p.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + t), e.each(function (e, r) {
              n += e instanceof o ? "--" + t + i + 'Content-Disposition: form-data; name="' + r + '"; filename="' + unescape(encodeURIComponent(e.name || "blob")) + '"' + i + "Content-Type: " + (e.type || "application/octet-stream") + i + i + e.getSource() + i : "--" + t + i + 'Content-Disposition: form-data; name="' + r + '"' + i + i + unescape(encodeURIComponent(e)) + i;
            }), n += "--" + t + "--" + i;
          }var p,
              f,
              h = this;t.extend(this, { send: function send(i, r) {
              var a = this,
                  c = "Mozilla" === u.browser && u.verComp(u.version, 4, ">=") && u.verComp(u.version, 7, "<"),
                  h = "Android Browser" === u.browser,
                  m = !1;if (f = i.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), p = l(), p.open(i.method, i.url, i.async, i.user, i.password), r instanceof o) r.isDetached() && (m = !0), r = r.getSource();else if (r instanceof s) {
                if (r.hasBlob()) if (r.getBlob().isDetached()) r = d.call(a, r), m = !0;else if ((c || h) && "blob" === t.typeOf(r.getBlob().getSource()) && window.FileReader) return void e.call(a, i, r);if (r instanceof s) {
                  var g = new window.FormData();r.each(function (e, t) {
                    e instanceof o ? g.append(t, e.getSource()) : g.append(t, e);
                  }), r = g;
                }
              }p.upload ? (i.withCredentials && (p.withCredentials = !0), p.addEventListener("load", function (e) {
                a.trigger(e);
              }), p.addEventListener("error", function (e) {
                a.trigger(e);
              }), p.addEventListener("progress", function (e) {
                a.trigger(e);
              }), p.upload.addEventListener("progress", function (e) {
                a.trigger({ type: "UploadProgress", loaded: e.loaded, total: e.total });
              })) : p.onreadystatechange = function () {
                switch (p.readyState) {case 1:case 2:
                    break;case 3:
                    var e, t;try {
                      n.hasSameOrigin(i.url) && (e = p.getResponseHeader("Content-Length") || 0), p.responseText && (t = p.responseText.length);
                    } catch (i) {
                      e = t = 0;
                    }a.trigger({ type: "progress", lengthComputable: !!e, total: parseInt(e, 10), loaded: t });break;case 4:
                    p.onreadystatechange = function () {}, 0 === p.status ? a.trigger("error") : a.trigger("load");}
              }, t.isEmptyObj(i.headers) || t.each(i.headers, function (e, t) {
                p.setRequestHeader(t, e);
              }), "" !== i.responseType && "responseType" in p && ("json" !== i.responseType || u.can("return_response_type", "json") ? p.responseType = i.responseType : p.responseType = "text"), m ? p.sendAsBinary ? p.sendAsBinary(r) : function () {
                for (var e = new Uint8Array(r.length), t = 0; t < r.length; t++) {
                  e[t] = 255 & r.charCodeAt(t);
                }p.send(e.buffer);
              }() : p.send(r), a.trigger("loadstart");
            }, getStatus: function getStatus() {
              try {
                if (p) return p.status;
              } catch (e) {}return 0;
            }, getResponse: function getResponse(e) {
              var t = this.getRuntime();try {
                switch (e) {case "blob":
                    var n = new r(t.uid, p.response),
                        o = p.getResponseHeader("Content-Disposition");if (o) {
                      var s = o.match(/filename=([\'\"'])([^\1]+)\1/);s && (f = s[2]);
                    }return n.name = f, n.type || (n.type = i.getFileMime(f)), n;case "json":
                    return u.can("return_response_type", "json") ? p.response : 200 === p.status && window.JSON ? JSON.parse(p.responseText) : null;case "document":
                    return c(p);default:
                    return "" !== p.responseText ? p.responseText : null;}
              } catch (e) {
                return null;
              }
            }, getAllResponseHeaders: function getAllResponseHeaders() {
              try {
                return p.getAllResponseHeaders();
              } catch (e) {}return "";
            }, abort: function abort() {
              p && p.abort();
            }, destroy: function destroy() {
              h = f = null;
            } });
        }return e.XMLHttpRequest = l;
      }), n("moxie/runtime/html5/utils/BinaryReader", ["moxie/core/utils/Basic"], function (e) {
        function t(e) {
          e instanceof ArrayBuffer ? i.apply(this, arguments) : n.apply(this, arguments);
        }function i(t) {
          var i = new DataView(t);e.extend(this, { readByteAt: function readByteAt(e) {
              return i.getUint8(e);
            }, writeByteAt: function writeByteAt(e, t) {
              i.setUint8(e, t);
            }, SEGMENT: function SEGMENT(e, n, r) {
              switch (arguments.length) {case 2:
                  return t.slice(e, e + n);case 1:
                  return t.slice(e);case 3:
                  if (null === r && (r = new ArrayBuffer()), r instanceof ArrayBuffer) {
                    var o = new Uint8Array(this.length() - n + r.byteLength);e > 0 && o.set(new Uint8Array(t.slice(0, e)), 0), o.set(new Uint8Array(r), e), o.set(new Uint8Array(t.slice(e + n)), e + r.byteLength), this.clear(), t = o.buffer, i = new DataView(t);break;
                  }default:
                  return t;}
            }, length: function length() {
              return t ? t.byteLength : 0;
            }, clear: function clear() {
              i = t = null;
            } });
        }function n(t) {
          function i(e, i, n) {
            n = 3 === arguments.length ? n : t.length - i - 1, t = t.substr(0, i) + e + t.substr(n + i);
          }e.extend(this, { readByteAt: function readByteAt(e) {
              return t.charCodeAt(e);
            }, writeByteAt: function writeByteAt(e, t) {
              i(String.fromCharCode(t), e, 1);
            }, SEGMENT: function SEGMENT(e, n, r) {
              switch (arguments.length) {case 1:
                  return t.substr(e);case 2:
                  return t.substr(e, n);case 3:
                  i(null !== r ? r : "", e, n);break;default:
                  return t;}
            }, length: function length() {
              return t ? t.length : 0;
            }, clear: function clear() {
              t = null;
            } });
        }return e.extend(t.prototype, { littleEndian: !1, read: function read(e, t) {
            var i, n, r;if (e + t > this.length()) throw new Error("You are trying to read outside the source boundaries.");for (n = this.littleEndian ? 0 : -8 * (t - 1), r = 0, i = 0; r < t; r++) {
              i |= this.readByteAt(e + r) << Math.abs(n + 8 * r);
            }return i;
          }, write: function write(e, t, i) {
            var n, r;if (e > this.length()) throw new Error("You are trying to write outside the source boundaries.");for (n = this.littleEndian ? 0 : -8 * (i - 1), r = 0; r < i; r++) {
              this.writeByteAt(e + r, t >> Math.abs(n + 8 * r) & 255);
            }
          }, BYTE: function BYTE(e) {
            return this.read(e, 1);
          }, SHORT: function SHORT(e) {
            return this.read(e, 2);
          }, LONG: function LONG(e) {
            return this.read(e, 4);
          }, SLONG: function SLONG(e) {
            var t = this.read(e, 4);return t > 2147483647 ? t - 4294967296 : t;
          }, CHAR: function CHAR(e) {
            return String.fromCharCode(this.read(e, 1));
          }, STRING: function STRING(e, t) {
            return this.asArray("CHAR", e, t).join("");
          }, asArray: function asArray(e, t, i) {
            for (var n = [], r = 0; r < i; r++) {
              n[r] = this[e](t + r);
            }return n;
          } }), t;
      }), n("moxie/runtime/html5/image/JPEGHeaders", ["moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function (e, t) {
        return function i(n) {
          var r,
              o,
              s,
              a = [],
              u = 0;if (r = new e(n), 65496 !== r.SHORT(0)) throw r.clear(), new t.ImageError(t.ImageError.WRONG_FORMAT);for (o = 2; o <= r.length();) {
            if ((s = r.SHORT(o)) >= 65488 && s <= 65495) o += 2;else {
              if (65498 === s || 65497 === s) break;u = r.SHORT(o + 2) + 2, s >= 65505 && s <= 65519 && a.push({ hex: s, name: "APP" + (15 & s), start: o, length: u, segment: r.SEGMENT(o, u) }), o += u;
            }
          }return r.clear(), { headers: a, restore: function restore(t) {
              var i, n, r;for (r = new e(t), o = 65504 == r.SHORT(2) ? 4 + r.SHORT(4) : 2, n = 0, i = a.length; n < i; n++) {
                r.SEGMENT(o, 0, a[n].segment), o += a[n].length;
              }return t = r.SEGMENT(), r.clear(), t;
            }, strip: function strip(t) {
              var n, r, o, s;for (o = new i(t), r = o.headers, o.purge(), n = new e(t), s = r.length; s--;) {
                n.SEGMENT(r[s].start, r[s].length, "");
              }return t = n.SEGMENT(), n.clear(), t;
            }, get: function get(e) {
              for (var t = [], i = 0, n = a.length; i < n; i++) {
                a[i].name === e.toUpperCase() && t.push(a[i].segment);
              }return t;
            }, set: function set(e, t) {
              var i,
                  n,
                  r,
                  o = [];for ("string" == typeof t ? o.push(t) : o = t, i = n = 0, r = a.length; i < r && (a[i].name === e.toUpperCase() && (a[i].segment = o[n], a[i].length = o[n].length, n++), !(n >= o.length)); i++) {}
            }, purge: function purge() {
              this.headers = a = [];
            } };
        };
      }), n("moxie/runtime/html5/image/ExifParser", ["moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function (e, i, n) {
        function r(o) {
          function s(i, r) {
            var o,
                s,
                a,
                u,
                l,
                p,
                f,
                h,
                m = this,
                g = [],
                v = {},
                x = { 1: "BYTE", 7: "UNDEFINED", 2: "ASCII", 3: "SHORT", 4: "LONG", 5: "RATIONAL", 9: "SLONG", 10: "SRATIONAL" },
                _ = { BYTE: 1, UNDEFINED: 1, ASCII: 1, SHORT: 2, LONG: 4, RATIONAL: 8, SLONG: 4, SRATIONAL: 8 };for (o = m.SHORT(i), s = 0; s < o; s++) {
              if (g = [], f = i + 2 + 12 * s, (a = r[m.SHORT(f)]) !== t) {
                if (u = x[m.SHORT(f += 2)], l = m.LONG(f += 2), !(p = _[u])) throw new n.ImageError(n.ImageError.INVALID_META_ERR);if (f += 4, p * l > 4 && (f = m.LONG(f) + d.tiffHeader), f + p * l >= this.length()) throw new n.ImageError(n.ImageError.INVALID_META_ERR);"ASCII" !== u ? (g = m.asArray(u, f, l), h = 1 == l ? g[0] : g, c.hasOwnProperty(a) && "object" != (typeof h === "undefined" ? "undefined" : _typeof(h)) ? v[a] = c[a][h] : v[a] = h) : v[a] = e.trim(m.STRING(f, l).replace(/\0$/, ""));
              }
            }return v;
          }function a(e, t, i) {
            var n,
                r,
                o,
                s = 0;if ("string" == typeof t) {
              var a = l[e.toLowerCase()];for (var u in a) {
                if (a[u] === t) {
                  t = u;break;
                }
              }
            }n = d[e.toLowerCase() + "IFD"], r = this.SHORT(n);for (var c = 0; c < r; c++) {
              if (o = n + 12 * c + 2, this.SHORT(o) == t) {
                s = o + 8;break;
              }
            }if (!s) return !1;try {
              this.write(s, i, 4);
            } catch (e) {
              return !1;
            }return !0;
          }var u, l, c, d, p, f;if (i.call(this, o), l = { tiff: { 274: "Orientation", 270: "ImageDescription", 271: "Make", 272: "Model", 305: "Software", 34665: "ExifIFDPointer", 34853: "GPSInfoIFDPointer" }, exif: { 36864: "ExifVersion", 40961: "ColorSpace", 40962: "PixelXDimension", 40963: "PixelYDimension", 36867: "DateTimeOriginal", 33434: "ExposureTime", 33437: "FNumber", 34855: "ISOSpeedRatings", 37377: "ShutterSpeedValue", 37378: "ApertureValue", 37383: "MeteringMode", 37384: "LightSource", 37385: "Flash", 37386: "FocalLength", 41986: "ExposureMode", 41987: "WhiteBalance", 41990: "SceneCaptureType", 41988: "DigitalZoomRatio", 41992: "Contrast", 41993: "Saturation", 41994: "Sharpness" }, gps: { 0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude" }, thumb: { 513: "JPEGInterchangeFormat", 514: "JPEGInterchangeFormatLength" } }, c = { ColorSpace: { 1: "sRGB", 0: "Uncalibrated" }, MeteringMode: { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }, LightSource: { 1: "Daylight", 2: "Fliorescent", 3: "Tungsten", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 -5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }, Flash: { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }, ExposureMode: { 0: "Auto exposure", 1: "Manual exposure", 2: "Auto bracket" }, WhiteBalance: { 0: "Auto white balance", 1: "Manual white balance" }, SceneCaptureType: { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene" }, Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" }, Saturation: { 0: "Normal", 1: "Low saturation", 2: "High saturation" }, Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" }, GPSLatitudeRef: { N: "North latitude", S: "South latitude" }, GPSLongitudeRef: { E: "East longitude", W: "West longitude" } }, d = { tiffHeader: 10 }, p = d.tiffHeader, u = { clear: this.clear }, e.extend(this, { read: function read() {
              try {
                return r.prototype.read.apply(this, arguments);
              } catch (e) {
                throw new n.ImageError(n.ImageError.INVALID_META_ERR);
              }
            }, write: function write() {
              try {
                return r.prototype.write.apply(this, arguments);
              } catch (e) {
                throw new n.ImageError(n.ImageError.INVALID_META_ERR);
              }
            }, UNDEFINED: function UNDEFINED() {
              return this.BYTE.apply(this, arguments);
            }, RATIONAL: function RATIONAL(e) {
              return this.LONG(e) / this.LONG(e + 4);
            }, SRATIONAL: function SRATIONAL(e) {
              return this.SLONG(e) / this.SLONG(e + 4);
            }, ASCII: function ASCII(e) {
              return this.CHAR(e);
            }, TIFF: function TIFF() {
              return f || null;
            }, EXIF: function EXIF() {
              var t = null;if (d.exifIFD) {
                try {
                  t = s.call(this, d.exifIFD, l.exif);
                } catch (e) {
                  return null;
                }if (t.ExifVersion && "array" === e.typeOf(t.ExifVersion)) {
                  for (var i = 0, n = ""; i < t.ExifVersion.length; i++) {
                    n += String.fromCharCode(t.ExifVersion[i]);
                  }t.ExifVersion = n;
                }
              }return t;
            }, GPS: function GPS() {
              var t = null;if (d.gpsIFD) {
                try {
                  t = s.call(this, d.gpsIFD, l.gps);
                } catch (e) {
                  return null;
                }t.GPSVersionID && "array" === e.typeOf(t.GPSVersionID) && (t.GPSVersionID = t.GPSVersionID.join("."));
              }return t;
            }, thumb: function thumb() {
              if (d.IFD1) try {
                var e = s.call(this, d.IFD1, l.thumb);if ("JPEGInterchangeFormat" in e) return this.SEGMENT(d.tiffHeader + e.JPEGInterchangeFormat, e.JPEGInterchangeFormatLength);
              } catch (e) {}return null;
            }, setExif: function setExif(e, t) {
              return ("PixelXDimension" === e || "PixelYDimension" === e) && a.call(this, "exif", e, t);
            }, clear: function clear() {
              u.clear(), o = l = c = f = d = u = null;
            } }), 65505 !== this.SHORT(0) || "EXIF\0" !== this.STRING(4, 5).toUpperCase()) throw new n.ImageError(n.ImageError.INVALID_META_ERR);if (this.littleEndian = 18761 == this.SHORT(p), 42 !== this.SHORT(p += 2)) throw new n.ImageError(n.ImageError.INVALID_META_ERR);d.IFD0 = d.tiffHeader + this.LONG(p += 2), f = s.call(this, d.IFD0, l.tiff), "ExifIFDPointer" in f && (d.exifIFD = d.tiffHeader + f.ExifIFDPointer, delete f.ExifIFDPointer), "GPSInfoIFDPointer" in f && (d.gpsIFD = d.tiffHeader + f.GPSInfoIFDPointer, delete f.GPSInfoIFDPointer), e.isEmptyObj(f) && (f = null);var h = this.LONG(d.IFD0 + 12 * this.SHORT(d.IFD0) + 2);h && (d.IFD1 = d.tiffHeader + h);
        }return r.prototype = i.prototype, r;
      }), n("moxie/runtime/html5/image/JPEG", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEGHeaders", "moxie/runtime/html5/utils/BinaryReader", "moxie/runtime/html5/image/ExifParser"], function (e, t, i, n, r) {
        function o(o) {
          function s(e) {
            var t,
                i,
                n = 0;for (e || (e = u); n <= e.length();) {
              if ((t = e.SHORT(n += 2)) >= 65472 && t <= 65475) return n += 5, { height: e.SHORT(n), width: e.SHORT(n += 2) };i = e.SHORT(n += 2), n += i - 2;
            }return null;
          }function a() {
            c && l && u && (c.clear(), l.purge(), u.clear(), d = l = c = u = null);
          }var u, l, c, d;if (u = new n(o), 65496 !== u.SHORT(0)) throw new t.ImageError(t.ImageError.WRONG_FORMAT);l = new i(o);try {
            c = new r(l.get("app1")[0]);
          } catch (e) {}d = s.call(this), e.extend(this, { type: "image/jpeg", size: u.length(), width: d && d.width || 0, height: d && d.height || 0, setExif: function setExif(t, i) {
              if (!c) return !1;"object" === e.typeOf(t) ? e.each(t, function (e, t) {
                c.setExif(t, e);
              }) : c.setExif(t, i), l.set("app1", c.SEGMENT());
            }, writeHeaders: function writeHeaders() {
              return arguments.length ? l.restore(arguments[0]) : l.restore(o);
            }, stripHeaders: function stripHeaders(e) {
              return l.strip(e);
            }, purge: function purge() {
              a.call(this);
            } }), c && (this.meta = { tiff: c.TIFF(), exif: c.EXIF(), gps: c.GPS(), thumb: function () {
              var e,
                  t,
                  i = c.thumb();return i && (e = new n(i), t = s(e), e.clear(), t) ? (t.data = i, t) : null;
            }() });
        }return o;
      }), n("moxie/runtime/html5/image/PNG", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function (e, t, i) {
        function n(n) {
          function r() {
            var e, t;return e = s.call(this, 8), "IHDR" == e.type ? (t = e.start, { width: a.LONG(t), height: a.LONG(t += 4) }) : null;
          }function o() {
            a && (a.clear(), n = c = u = l = a = null);
          }function s(e) {
            var t, i, n, r;return t = a.LONG(e), i = a.STRING(e += 4, 4), n = e += 4, r = a.LONG(e + t), { length: t, type: i, start: n, CRC: r };
          }var a, u, l, c;a = new i(n), function () {
            var t = 0,
                i = 0,
                n = [35152, 20039, 3338, 6666];for (i = 0; i < n.length; i++, t += 2) {
              if (n[i] != a.SHORT(t)) throw new e.ImageError(e.ImageError.WRONG_FORMAT);
            }
          }(), c = r.call(this), t.extend(this, { type: "image/png", size: a.length(), width: c.width, height: c.height, purge: function purge() {
              o.call(this);
            } }), o.call(this);
        }return n;
      }), n("moxie/runtime/html5/image/ImageInfo", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEG", "moxie/runtime/html5/image/PNG"], function (e, t, i, n) {
        return function (r) {
          var o,
              s = [i, n];o = function () {
            for (var e = 0; e < s.length; e++) {
              try {
                return new s[e](r);
              } catch (e) {}
            }throw new t.ImageError(t.ImageError.WRONG_FORMAT);
          }(), e.extend(this, { type: "", size: 0, width: 0, height: 0, setExif: function setExif() {}, writeHeaders: function writeHeaders(e) {
              return e;
            }, stripHeaders: function stripHeaders(e) {
              return e;
            }, purge: function purge() {
              r = null;
            } }), e.extend(this, o), this.purge = function () {
            o.purge(), o = null;
          };
        };
      }), n("moxie/runtime/html5/image/ResizerCanvas", [], function () {
        function e(i, n) {
          var r = i.width,
              o = Math.floor(r * n),
              s = !1;(n < .5 || n > 2) && (n = n < .5 ? .5 : 2, s = !0);var a = t(i, n);return s ? e(a, o / a.width) : a;
        }function t(e, t) {
          var i = e.width,
              n = e.height,
              r = Math.floor(i * t),
              o = Math.floor(n * t),
              s = document.createElement("canvas");return s.width = r, s.height = o, s.getContext("2d").drawImage(e, 0, 0, i, n, 0, 0, r, o), e = null, s;
        }return { scale: e };
      }), n("moxie/runtime/html5/image/Image", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/utils/Encode", "moxie/file/Blob", "moxie/file/File", "moxie/runtime/html5/image/ImageInfo", "moxie/runtime/html5/image/ResizerCanvas", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s, a, u, l) {
        function c() {
          function e() {
            if (!x && !g) throw new i.ImageError(i.DOMException.INVALID_STATE_ERR);return x || g;
          }function l() {
            var t = e();return "canvas" == t.nodeName.toLowerCase() ? t : (x = document.createElement("canvas"), x.width = t.width, x.height = t.height, x.getContext("2d").drawImage(t, 0, 0), x);
          }function c(e) {
            return n.atob(e.substring(e.indexOf("base64,") + 7));
          }function d(e, t) {
            return "data:" + (t || "") + ";base64," + n.btoa(e);
          }function p(e) {
            var t = this;g = new Image(), g.onerror = function () {
              m.call(this), t.trigger("error", i.ImageError.WRONG_FORMAT);
            }, g.onload = function () {
              t.trigger("load");
            }, g.src = "data:" == e.substr(0, 5) ? e : d(e, y.type);
          }function f(e, t) {
            var n,
                r = this;if (!window.FileReader) return t.call(this, e.getAsDataURL());n = new FileReader(), n.onload = function () {
              t.call(r, this.result);
            }, n.onerror = function () {
              r.trigger("error", i.ImageError.WRONG_FORMAT);
            }, n.readAsDataURL(e);
          }function h(e, i) {
            var n = Math.PI / 180,
                r = document.createElement("canvas"),
                o = r.getContext("2d"),
                s = e.width,
                a = e.height;switch (t.inArray(i, [5, 6, 7, 8]) > -1 ? (r.width = a, r.height = s) : (r.width = s, r.height = a), i) {case 2:
                o.translate(s, 0), o.scale(-1, 1);break;case 3:
                o.translate(s, a), o.rotate(180 * n);break;case 4:
                o.translate(0, a), o.scale(1, -1);break;case 5:
                o.rotate(90 * n), o.scale(1, -1);break;case 6:
                o.rotate(90 * n), o.translate(0, -a);break;case 7:
                o.rotate(90 * n), o.translate(s, -a), o.scale(-1, 1);break;case 8:
                o.rotate(-90 * n), o.translate(-s, 0);}return o.drawImage(e, 0, 0, s, a), r;
          }function m() {
            v && (v.purge(), v = null), _ = g = x = y = null, E = !1;
          }var g,
              v,
              x,
              _,
              y,
              w = this,
              E = !1,
              b = !0;t.extend(this, { loadFromBlob: function loadFromBlob(e) {
              var t = this.getRuntime(),
                  n = !(arguments.length > 1) || arguments[1];if (!t.can("access_binary")) throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);if (y = e, e.isDetached()) return _ = e.getSource(), void p.call(this, _);f.call(this, e.getSource(), function (e) {
                n && (_ = c(e)), p.call(this, e);
              });
            }, loadFromImage: function loadFromImage(e, t) {
              this.meta = e.meta, y = new o(null, { name: e.name, size: e.size, type: e.type }), p.call(this, t ? _ = e.getAsBinaryString() : e.getAsDataURL());
            }, getInfo: function getInfo() {
              var t,
                  i = this.getRuntime();return !v && _ && i.can("access_image_binary") && (v = new s(_)), t = { width: e().width || 0, height: e().height || 0, type: y.type || u.getFileMime(y.name), size: _ && _.length || y.size || 0, name: y.name || "", meta: null }, b && (t.meta = v && v.meta || this.meta || {}, !t.meta || !t.meta.thumb || t.meta.thumb.data instanceof r || (t.meta.thumb.data = new r(null, { type: "image/jpeg", data: t.meta.thumb.data }))), t;
            }, resize: function resize(t, i, n) {
              var r = document.createElement("canvas");if (r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(e(), t.x, t.y, t.width, t.height, 0, 0, r.width, r.height), x = a.scale(r, i), !(b = n.preserveHeaders)) {
                var o = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1;x = h(x, o);
              }this.width = x.width, this.height = x.height, E = !0, this.trigger("Resize");
            }, getAsCanvas: function getAsCanvas() {
              return x || (x = l()), x.id = this.uid + "_canvas", x;
            }, getAsBlob: function getAsBlob(e, t) {
              return e !== this.type ? (E = !0, new o(null, { name: y.name || "", type: e, data: w.getAsDataURL(e, t) })) : new o(null, { name: y.name || "", type: e, data: w.getAsBinaryString(e, t) });
            }, getAsDataURL: function getAsDataURL(e) {
              var t = arguments[1] || 90;if (!E) return g.src;if (l(), "image/jpeg" !== e) return x.toDataURL("image/png");try {
                return x.toDataURL("image/jpeg", t / 100);
              } catch (e) {
                return x.toDataURL("image/jpeg");
              }
            }, getAsBinaryString: function getAsBinaryString(e, t) {
              if (!E) return _ || (_ = c(w.getAsDataURL(e, t))), _;if ("image/jpeg" !== e) _ = c(w.getAsDataURL(e, t));else {
                var i;t || (t = 90), l();try {
                  i = x.toDataURL("image/jpeg", t / 100);
                } catch (e) {
                  i = x.toDataURL("image/jpeg");
                }_ = c(i), v && (_ = v.stripHeaders(_), b && (v.meta && v.meta.exif && v.setExif({ PixelXDimension: this.width, PixelYDimension: this.height }), _ = v.writeHeaders(_)), v.purge(), v = null);
              }return E = !1, _;
            }, destroy: function destroy() {
              w = null, m.call(this), this.getRuntime().getShim().removeInstance(this.uid);
            } });
        }return e.Image = c;
      }), n("moxie/runtime/flash/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (e, t, i, n, o) {
        function a() {
          var e;try {
            e = navigator.plugins["Shockwave Flash"], e = e.description;
          } catch (t) {
            try {
              e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
            } catch (t) {
              e = "0.0";
            }
          }return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1]);
        }function u(e) {
          var n = i.get(e);n && "OBJECT" == n.nodeName && ("IE" === t.browser ? (n.style.display = "none", function t() {
            4 == n.readyState ? l(e) : setTimeout(t, 10);
          }()) : n.parentNode.removeChild(n));
        }function l(e) {
          var t = i.get(e);if (t) {
            for (var n in t) {
              "function" == typeof t[n] && (t[n] = null);
            }t.parentNode.removeChild(t);
          }
        }function c(l) {
          var c,
              f = this;l = e.extend({ swf_url: t.swf_url }, l), o.call(this, l, d, { access_binary: function access_binary(e) {
              return e && "browser" === f.mode;
            }, access_image_binary: function access_image_binary(e) {
              return e && "browser" === f.mode;
            }, display_media: o.capTest(r("moxie/image/Image")), do_cors: o.capTrue, drag_and_drop: !1, report_upload_progress: function report_upload_progress() {
              return "client" === f.mode;
            }, resize_image: o.capTrue, return_response_headers: !1, return_response_type: function return_response_type(t) {
              return !("json" !== t || !window.JSON) || !e.arrayDiff(t, ["", "text", "document"]) || "browser" === f.mode;
            }, return_status_code: function return_status_code(t) {
              return "browser" === f.mode || !e.arrayDiff(t, [200, 404]);
            }, select_file: o.capTrue, select_multiple: o.capTrue, send_binary_string: function send_binary_string(e) {
              return e && "browser" === f.mode;
            }, send_browser_cookies: function send_browser_cookies(e) {
              return e && "browser" === f.mode;
            }, send_custom_headers: function send_custom_headers(e) {
              return e && "browser" === f.mode;
            }, send_multipart: o.capTrue, slice_blob: function slice_blob(e) {
              return e && "browser" === f.mode;
            }, stream_upload: function stream_upload(e) {
              return e && "browser" === f.mode;
            }, summon_file_dialog: !1, upload_filesize: function upload_filesize(t) {
              return e.parseSizeStr(t) <= 2097152 || "client" === f.mode;
            }, use_http_method: function use_http_method(t) {
              return !e.arrayDiff(t, ["GET", "POST"]);
            } }, { access_binary: function access_binary(e) {
              return e ? "browser" : "client";
            }, access_image_binary: function access_image_binary(e) {
              return e ? "browser" : "client";
            }, report_upload_progress: function report_upload_progress(e) {
              return e ? "browser" : "client";
            }, return_response_type: function return_response_type(t) {
              return e.arrayDiff(t, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"];
            }, return_status_code: function return_status_code(t) {
              return e.arrayDiff(t, [200, 404]) ? "browser" : ["client", "browser"];
            }, send_binary_string: function send_binary_string(e) {
              return e ? "browser" : "client";
            }, send_browser_cookies: function send_browser_cookies(e) {
              return e ? "browser" : "client";
            }, send_custom_headers: function send_custom_headers(e) {
              return e ? "browser" : "client";
            }, slice_blob: function slice_blob(e) {
              return e ? "browser" : "client";
            }, stream_upload: function stream_upload(e) {
              return e ? "client" : "browser";
            }, upload_filesize: function upload_filesize(t) {
              return e.parseSizeStr(t) >= 2097152 ? "client" : "browser";
            } }, "client"), a() < 11.3 && (s && t.debug.runtime && t.log("\tFlash didn't meet minimal version requirement (11.3)."), this.mode = !1), e.extend(this, { getShim: function getShim() {
              return i.get(this.uid);
            }, shimExec: function shimExec(e, t) {
              var i = [].slice.call(arguments, 2);return f.getShim().exec(this.uid, e, t, i);
            }, init: function init() {
              var i, r, o;o = this.getShimContainer(), e.extend(o.style, { position: "absolute", top: "-8px", left: "-8px", width: "9px", height: "9px", overflow: "hidden" }), i = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + l.swf_url + '" ', "IE" === t.browser && (i += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), i += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + l.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + t.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', "IE" === t.browser ? (r = document.createElement("div"), o.appendChild(r), r.outerHTML = i, r = o = null) : o.innerHTML = i, c = setTimeout(function () {
                f && !f.initialized && (f.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR)), s && t.debug.runtime && t.log("\tFlash failed to initialize within a specified period of time (typically 5s)."));
              }, 5e3);
            }, destroy: function (e) {
              return function () {
                u(f.uid), e.call(f), clearTimeout(c), l = c = e = f = null;
              };
            }(this.destroy) }, p);
        }var d = "flash",
            p = {};return o.addConstructor(d, c), p;
      }), n("moxie/runtime/flash/file/Blob", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (e, t) {
        var i = { slice: function slice(e, i, n, r) {
            var o = this.getRuntime();return i < 0 ? i = Math.max(e.size + i, 0) : i > 0 && (i = Math.min(i, e.size)), n < 0 ? n = Math.max(e.size + n, 0) : n > 0 && (n = Math.min(n, e.size)), e = o.shimExec.call(this, "Blob", "slice", i, n, r || ""), e && (e = new t(o.uid, e)), e;
          } };return e.Blob = i;
      }), n("moxie/runtime/flash/file/FileInput", ["moxie/runtime/flash/Runtime", "moxie/file/File", "moxie/core/utils/Basic"], function (e, t, i) {
        var n = { init: function init(e) {
            var n = this,
                r = this.getRuntime();this.bind("Change", function () {
              var e = r.shimExec.call(n, "FileInput", "getFiles");n.files = [], i.each(e, function (e) {
                n.files.push(new t(r.uid, e));
              });
            }, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", { accept: e.accept, multiple: e.multiple }), this.trigger("ready");
          } };return e.FileInput = n;
      }), n("moxie/runtime/flash/file/FileReader", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (e, t) {
        function i(e, i) {
          switch (i) {case "readAsText":
              return t.atob(e, "utf8");case "readAsBinaryString":
              return t.atob(e);case "readAsDataURL":
              return e;}return null;
        }var n = { read: function read(e, t) {
            var n = this;return n.result = "", "readAsDataURL" === e && (n.result = "data:" + (t.type || "") + ";base64,"), n.bind("Progress", function (t, r) {
              r && (n.result += i(r, e));
            }, 999), n.getRuntime().shimExec.call(this, "FileReader", "readAsBase64", t.uid);
          } };return e.FileReader = n;
      }), n("moxie/runtime/flash/file/FileReaderSync", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (e, t) {
        function i(e, i) {
          switch (i) {case "readAsText":
              return t.atob(e, "utf8");case "readAsBinaryString":
              return t.atob(e);case "readAsDataURL":
              return e;}return null;
        }var n = { read: function read(e, t) {
            var n;return (n = this.getRuntime().shimExec.call(this, "FileReaderSync", "readAsBase64", t.uid)) ? ("readAsDataURL" === e && (n = "data:" + (t.type || "") + ";base64," + n), i(n, e, t.type)) : null;
          } };return e.FileReaderSync = n;
      }), n("moxie/runtime/flash/runtime/Transporter", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (e, t) {
        var i = { getAsBlob: function getAsBlob(e) {
            var i = this.getRuntime(),
                n = i.shimExec.call(this, "Transporter", "getAsBlob", e);return n ? new t(i.uid, n) : null;
          } };return e.Transporter = i;
      }), n("moxie/runtime/flash/xhr/XMLHttpRequest", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileReaderSync", "moxie/runtime/flash/file/FileReaderSync", "moxie/xhr/FormData", "moxie/runtime/Transporter", "moxie/runtime/flash/runtime/Transporter"], function (e, t, i, n, r, o, s, a, u) {
        var l = { send: function send(e, n) {
            function r() {
              e.transport = c.mode, c.shimExec.call(l, "XMLHttpRequest", "send", e, n);
            }function o(e, t) {
              c.shimExec.call(l, "XMLHttpRequest", "appendBlob", e, t.uid), n = null, r();
            }function u(e, t) {
              var i = new a();i.bind("TransportingComplete", function () {
                t(this.result);
              }), i.transport(e.getSource(), e.type, { ruid: c.uid });
            }var l = this,
                c = l.getRuntime();if (t.isEmptyObj(e.headers) || t.each(e.headers, function (e, t) {
              c.shimExec.call(l, "XMLHttpRequest", "setRequestHeader", t, e.toString());
            }), n instanceof s) {
              var d;if (n.each(function (e, t) {
                e instanceof i ? d = t : c.shimExec.call(l, "XMLHttpRequest", "append", t, e);
              }), n.hasBlob()) {
                var p = n.getBlob();p.isDetached() ? u(p, function (e) {
                  p.destroy(), o(d, e);
                }) : o(d, p);
              } else n = null, r();
            } else n instanceof i ? n.isDetached() ? u(n, function (e) {
              n.destroy(), n = e.uid, r();
            }) : (n = n.uid, r()) : r();
          }, getResponse: function getResponse(e) {
            var i,
                o,
                s = this.getRuntime();if (o = s.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
              if (o = new n(s.uid, o), "blob" === e) return o;try {
                if (i = new r(), ~t.inArray(e, ["", "text"])) return i.readAsText(o);if ("json" === e && window.JSON) return JSON.parse(i.readAsText(o));
              } finally {
                o.destroy();
              }
            }return null;
          }, abort: function abort(e) {
            this.getRuntime().shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort");
          } };return e.XMLHttpRequest = l;
      }), n("moxie/runtime/flash/image/Image", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/runtime/Transporter", "moxie/file/Blob", "moxie/file/FileReaderSync"], function (e, t, i, n, r) {
        var o = { loadFromBlob: function loadFromBlob(e) {
            function t(e) {
              r.shimExec.call(n, "Image", "loadFromBlob", e.uid), n = r = null;
            }var n = this,
                r = n.getRuntime();if (e.isDetached()) {
              var o = new i();o.bind("TransportingComplete", function () {
                t(o.result.getSource());
              }), o.transport(e.getSource(), e.type, { ruid: r.uid });
            } else t(e.getSource());
          }, loadFromImage: function loadFromImage(e) {
            return this.getRuntime().shimExec.call(this, "Image", "loadFromImage", e.uid);
          }, getInfo: function getInfo() {
            var e = this.getRuntime(),
                t = e.shimExec.call(this, "Image", "getInfo");return t.meta && t.meta.thumb && t.meta.thumb.data && !(e.meta.thumb.data instanceof n) && (t.meta.thumb.data = new n(e.uid, t.meta.thumb.data)), t;
          }, getAsBlob: function getAsBlob(e, t) {
            var i = this.getRuntime(),
                r = i.shimExec.call(this, "Image", "getAsBlob", e, t);return r ? new n(i.uid, r) : null;
          }, getAsDataURL: function getAsDataURL() {
            var e,
                t = this.getRuntime(),
                i = t.Image.getAsBlob.apply(this, arguments);return i ? (e = new r(), e.readAsDataURL(i)) : null;
          } };return e.Image = o;
      }), n("moxie/runtime/silverlight/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (e, t, i, n, o) {
        function a(e) {
          var t,
              i,
              n,
              r,
              o,
              s = !1,
              a = null,
              u = 0;try {
            try {
              a = new ActiveXObject("AgControl.AgControl"), a.IsVersionSupported(e) && (s = !0), a = null;
            } catch (a) {
              var l = navigator.plugins["Silverlight Plug-In"];if (l) {
                for (t = l.description, "1.0.30226.2" === t && (t = "2.0.30226.2"), i = t.split("."); i.length > 3;) {
                  i.pop();
                }for (; i.length < 4;) {
                  i.push(0);
                }for (n = e.split("."); n.length > 4;) {
                  n.pop();
                }do {
                  r = parseInt(n[u], 10), o = parseInt(i[u], 10), u++;
                } while (u < n.length && r === o);r <= o && !isNaN(r) && (s = !0);
              }
            }
          } catch (e) {
            s = !1;
          }return s;
        }function u(u) {
          var d,
              p = this;u = e.extend({ xap_url: t.xap_url }, u), o.call(this, u, l, { access_binary: o.capTrue, access_image_binary: o.capTrue, display_media: o.capTest(r("moxie/image/Image")), do_cors: o.capTrue, drag_and_drop: !1, report_upload_progress: o.capTrue, resize_image: o.capTrue, return_response_headers: function return_response_headers(e) {
              return e && "client" === p.mode;
            }, return_response_type: function return_response_type(e) {
              return "json" !== e || !!window.JSON;
            }, return_status_code: function return_status_code(t) {
              return "client" === p.mode || !e.arrayDiff(t, [200, 404]);
            }, select_file: o.capTrue, select_multiple: o.capTrue, send_binary_string: o.capTrue, send_browser_cookies: function send_browser_cookies(e) {
              return e && "browser" === p.mode;
            }, send_custom_headers: function send_custom_headers(e) {
              return e && "client" === p.mode;
            }, send_multipart: o.capTrue, slice_blob: o.capTrue, stream_upload: !0, summon_file_dialog: !1, upload_filesize: o.capTrue, use_http_method: function use_http_method(t) {
              return "client" === p.mode || !e.arrayDiff(t, ["GET", "POST"]);
            } }, { return_response_headers: function return_response_headers(e) {
              return e ? "client" : "browser";
            }, return_status_code: function return_status_code(t) {
              return e.arrayDiff(t, [200, 404]) ? "client" : ["client", "browser"];
            }, send_browser_cookies: function send_browser_cookies(e) {
              return e ? "browser" : "client";
            }, send_custom_headers: function send_custom_headers(e) {
              return e ? "client" : "browser";
            }, use_http_method: function use_http_method(t) {
              return e.arrayDiff(t, ["GET", "POST"]) ? "client" : ["client", "browser"];
            } }), a("2.0.31005.0") && "Opera" !== t.browser || (s && t.debug.runtime && t.log("\tSilverlight is not installed or minimal version (2.0.31005.0) requirement not met (not likely)."), this.mode = !1), e.extend(this, { getShim: function getShim() {
              return i.get(this.uid).content.Moxie;
            }, shimExec: function shimExec(e, t) {
              var i = [].slice.call(arguments, 2);return p.getShim().exec(this.uid, e, t, i);
            }, init: function init() {
              var e;e = this.getShimContainer(), e.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + u.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + t.global_event_dispatcher + '"/></object>', d = setTimeout(function () {
                p && !p.initialized && (p.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR)), s && t.debug.runtime && t.log("Silverlight failed to initialize within a specified period of time (5-10s)."));
              }, "Windows" !== t.OS ? 1e4 : 5e3);
            }, destroy: function (e) {
              return function () {
                e.call(p), clearTimeout(d), u = d = e = p = null;
              };
            }(this.destroy) }, c);
        }var l = "silverlight",
            c = {};return o.addConstructor(l, u), c;
      }), n("moxie/runtime/silverlight/file/Blob", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/Blob"], function (e, t, i) {
        return e.Blob = t.extend({}, i);
      }), n("moxie/runtime/silverlight/file/FileInput", ["moxie/runtime/silverlight/Runtime", "moxie/file/File", "moxie/core/utils/Basic"], function (e, t, i) {
        function n(e) {
          for (var t = "", i = 0; i < e.length; i++) {
            t += ("" !== t ? "|" : "") + e[i].title + " | *." + e[i].extensions.replace(/,/g, ";*.");
          }return t;
        }var r = { init: function init(e) {
            var r = this,
                o = this.getRuntime();this.bind("Change", function () {
              var e = o.shimExec.call(r, "FileInput", "getFiles");r.files = [], i.each(e, function (e) {
                r.files.push(new t(o.uid, e));
              });
            }, 999), o.shimExec.call(this, "FileInput", "init", n(e.accept), e.multiple), this.trigger("ready");
          }, setOption: function setOption(e, t) {
            "accept" == e && (t = n(t)), this.getRuntime().shimExec.call(this, "FileInput", "setOption", e, t);
          } };return e.FileInput = r;
      }), n("moxie/runtime/silverlight/file/FileDrop", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Dom", "moxie/core/utils/Events"], function (e, t, i) {
        var n = { init: function init() {
            var e,
                n = this,
                r = n.getRuntime();return e = r.getShimContainer(), i.addEvent(e, "dragover", function (e) {
              e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy";
            }, n.uid), i.addEvent(e, "dragenter", function (e) {
              e.preventDefault(), t.get(r.uid).dragEnter(e) && e.stopPropagation();
            }, n.uid), i.addEvent(e, "drop", function (e) {
              e.preventDefault(), t.get(r.uid).dragDrop(e) && e.stopPropagation();
            }, n.uid), r.shimExec.call(this, "FileDrop", "init");
          } };return e.FileDrop = n;
      }), n("moxie/runtime/silverlight/file/FileReader", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReader"], function (e, t, i) {
        return e.FileReader = t.extend({}, i);
      }), n("moxie/runtime/silverlight/file/FileReaderSync", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReaderSync"], function (e, t, i) {
        return e.FileReaderSync = t.extend({}, i);
      }), n("moxie/runtime/silverlight/runtime/Transporter", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/runtime/Transporter"], function (e, t, i) {
        return e.Transporter = t.extend({}, i);
      }), n("moxie/runtime/silverlight/xhr/XMLHttpRequest", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/xhr/XMLHttpRequest", "moxie/runtime/silverlight/file/FileReaderSync", "moxie/runtime/silverlight/runtime/Transporter"], function (e, t, i, n, r) {
        return e.XMLHttpRequest = t.extend({}, i);
      }), n("moxie/runtime/silverlight/image/Image", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/runtime/flash/image/Image"], function (e, t, i, n) {
        return e.Image = t.extend({}, n, { getInfo: function getInfo() {
            var e = this.getRuntime(),
                n = ["tiff", "exif", "gps", "thumb"],
                r = { meta: {} },
                o = e.shimExec.call(this, "Image", "getInfo");return o.meta && (t.each(n, function (e) {
              var t,
                  i,
                  n,
                  s,
                  a = o.meta[e];if (a && a.keys) for (r.meta[e] = {}, i = 0, n = a.keys.length; i < n; i++) {
                t = a.keys[i], (s = a[t]) && (/^(\d|[1-9]\d+)$/.test(s) ? s = parseInt(s, 10) : /^\d*\.\d+$/.test(s) && (s = parseFloat(s)), r.meta[e][t] = s);
              }
            }), r.meta && r.meta.thumb && r.meta.thumb.data && !(e.meta.thumb.data instanceof i) && (r.meta.thumb.data = new i(e.uid, r.meta.thumb.data))), r.width = parseInt(o.width, 10), r.height = parseInt(o.height, 10), r.size = parseInt(o.size, 10), r.type = o.type, r.name = o.name, r;
          }, resize: function resize(e, t, i) {
            this.getRuntime().shimExec.call(this, "Image", "resize", e.x, e.y, e.width, e.height, t, i.preserveHeaders, i.resample);
          } });
      }), n("moxie/runtime/html4/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (e, t, i, n) {
        function o(t) {
          var o = this,
              u = i.capTest,
              l = i.capTrue;i.call(this, t, s, { access_binary: u(window.FileReader || window.File && File.getAsDataURL), access_image_binary: !1, display_media: u((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")), do_cors: !1, drag_and_drop: !1, filter_by_extension: u(function () {
              return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"));
            }()), resize_image: function resize_image() {
              return a.Image && o.can("access_binary") && n.can("create_canvas");
            }, report_upload_progress: !1, return_response_headers: !1, return_response_type: function return_response_type(t) {
              return !("json" !== t || !window.JSON) || !!~e.inArray(t, ["text", "document", ""]);
            }, return_status_code: function return_status_code(t) {
              return !e.arrayDiff(t, [200, 404]);
            }, select_file: function select_file() {
              return n.can("use_fileinput");
            }, select_multiple: !1, send_binary_string: !1, send_custom_headers: !1, send_multipart: !0, slice_blob: !1, stream_upload: function stream_upload() {
              return o.can("select_file");
            }, summon_file_dialog: function summon_file_dialog() {
              return o.can("select_file") && ("Firefox" === n.browser && n.verComp(n.version, 4, ">=") || "Opera" === n.browser && n.verComp(n.version, 12, ">=") || "IE" === n.browser && n.verComp(n.version, 10, ">=") || !!~e.inArray(n.browser, ["Chrome", "Safari"]));
            }, upload_filesize: l, use_http_method: function use_http_method(t) {
              return !e.arrayDiff(t, ["GET", "POST"]);
            } }), e.extend(this, { init: function init() {
              this.trigger("Init");
            }, destroy: function (e) {
              return function () {
                e.call(o), e = o = null;
              };
            }(this.destroy) }), e.extend(this.getShim(), a);
        }var s = "html4",
            a = {};return i.addConstructor(s, o), a;
      }), n("moxie/runtime/html4/file/FileInput", ["moxie/runtime/html4/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s) {
        function a() {
          function e() {
            var o,
                l,
                d,
                p,
                f,
                h,
                m = this,
                g = m.getRuntime();h = i.guid("uid_"), o = g.getShimContainer(), a && (d = n.get(a + "_form")) && i.extend(d.style, { top: "100%" }), p = document.createElement("form"), p.setAttribute("id", h + "_form"), p.setAttribute("method", "post"), p.setAttribute("enctype", "multipart/form-data"), p.setAttribute("encoding", "multipart/form-data"), i.extend(p.style, { overflow: "hidden", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }), f = document.createElement("input"), f.setAttribute("id", h), f.setAttribute("type", "file"), f.setAttribute("accept", c.join(",")), i.extend(f.style, { fontSize: "999px", opacity: 0 }), p.appendChild(f), o.appendChild(p), i.extend(f.style, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }), "IE" === s.browser && s.verComp(s.version, 10, "<") && i.extend(f.style, { filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)" }), f.onchange = function () {
              var i;if (this.value) {
                if (this.files) {
                  if (i = this.files[0], 0 === i.size) return void p.parentNode.removeChild(p);
                } else i = { name: this.value };i = new t(g.uid, i), this.onchange = function () {}, e.call(m), m.files = [i], f.setAttribute("id", i.uid), p.setAttribute("id", i.uid + "_form"), m.trigger("change"), f = p = null;
              }
            }, g.can("summon_file_dialog") && (l = n.get(u.browse_button), r.removeEvent(l, "click", m.uid), r.addEvent(l, "click", function (e) {
              f && !f.disabled && f.click(), e.preventDefault();
            }, m.uid)), a = h, o = d = l = null;
          }var a,
              u,
              l,
              c = [];i.extend(this, { init: function init(t) {
              var i,
                  s = this,
                  a = s.getRuntime();u = t, c = t.accept.mimes || o.extList2mimes(t.accept, a.can("filter_by_extension")), i = a.getShimContainer(), function () {
                var e, o, c;e = n.get(t.browse_button), l = n.getStyle(e, "z-index") || "auto", a.can("summon_file_dialog") && ("static" === n.getStyle(e, "position") && (e.style.position = "relative"), s.bind("Refresh", function () {
                  o = parseInt(l, 10) || 1, n.get(u.browse_button).style.zIndex = o, this.getRuntime().getShimContainer().style.zIndex = o - 1;
                })), c = a.can("summon_file_dialog") ? e : i, r.addEvent(c, "mouseover", function () {
                  s.trigger("mouseenter");
                }, s.uid), r.addEvent(c, "mouseout", function () {
                  s.trigger("mouseleave");
                }, s.uid), r.addEvent(c, "mousedown", function () {
                  s.trigger("mousedown");
                }, s.uid), r.addEvent(n.get(t.container), "mouseup", function () {
                  s.trigger("mouseup");
                }, s.uid), e = null;
              }(), e.call(this), i = null, s.trigger({ type: "ready", async: !0 });
            }, setOption: function setOption(e, t) {
              var i,
                  r = this.getRuntime();"accept" == e && (c = t.mimes || o.extList2mimes(t, r.can("filter_by_extension"))), (i = n.get(a)) && i.setAttribute("accept", c.join(","));
            }, disable: function disable(e) {
              var t;(t = n.get(a)) && (t.disabled = !!e);
            }, destroy: function destroy() {
              var e = this.getRuntime(),
                  t = e.getShim(),
                  i = e.getShimContainer(),
                  o = u && n.get(u.container),
                  s = u && n.get(u.browse_button);o && r.removeAllEvents(o, this.uid), s && (r.removeAllEvents(s, this.uid), s.style.zIndex = l), i && (r.removeAllEvents(i, this.uid), i.innerHTML = ""), t.removeInstance(this.uid), a = c = u = i = o = s = t = null;
            } });
        }return e.FileInput = a;
      }), n("moxie/runtime/html4/file/FileReader", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/file/FileReader"], function (e, t) {
        return e.FileReader = t;
      }), n("moxie/runtime/html4/xhr/XMLHttpRequest", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Url", "moxie/core/Exceptions", "moxie/core/utils/Events", "moxie/file/Blob", "moxie/xhr/FormData"], function (e, t, i, n, r, o, s, a) {
        function u() {
          function e(e) {
            var t,
                n,
                r,
                s,
                a = this,
                u = !1;if (c) {
              if (t = c.id.replace(/_iframe$/, ""), n = i.get(t + "_form")) {
                for (r = n.getElementsByTagName("input"), s = r.length; s--;) {
                  switch (r[s].getAttribute("type")) {case "hidden":
                      r[s].parentNode.removeChild(r[s]);break;case "file":
                      u = !0;}
                }r = [], u || n.parentNode.removeChild(n), n = null;
              }setTimeout(function () {
                o.removeEvent(c, "load", a.uid), c.parentNode && c.parentNode.removeChild(c);var t = a.getRuntime().getShimContainer();t.children.length || t.parentNode.removeChild(t), t = c = null, e();
              }, 1);
            }
          }var u, l, c;t.extend(this, { send: function send(d, p) {
              var f,
                  h,
                  m,
                  g,
                  v = this,
                  x = v.getRuntime();if (u = l = null, p instanceof a && p.hasBlob()) {
                if (g = p.getBlob(), f = g.uid, m = i.get(f), !(h = i.get(f + "_form"))) throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);
              } else f = t.guid("uid_"), h = document.createElement("form"), h.setAttribute("id", f + "_form"), h.setAttribute("method", d.method), h.setAttribute("enctype", "multipart/form-data"), h.setAttribute("encoding", "multipart/form-data"), x.getShimContainer().appendChild(h);h.setAttribute("target", f + "_iframe"), p instanceof a && p.each(function (e, i) {
                if (e instanceof s) m && m.setAttribute("name", i);else {
                  var n = document.createElement("input");t.extend(n, { type: "hidden", name: i, value: e }), m ? h.insertBefore(n, m) : h.appendChild(n);
                }
              }), h.setAttribute("action", d.url), function () {
                var i = x.getShimContainer() || document.body,
                    r = document.createElement("div");r.innerHTML = '<iframe id="' + f + '_iframe" name="' + f + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', c = r.firstChild, i.appendChild(c), o.addEvent(c, "load", function () {
                  var i;try {
                    i = c.contentWindow.document || c.contentDocument || window.frames[c.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(i.title) ? u = i.title.replace(/^(\d+).*$/, "$1") : (u = 200, l = t.trim(i.body.innerHTML), v.trigger({ type: "progress", loaded: l.length, total: l.length }), g && v.trigger({ type: "uploadprogress", loaded: g.size || 1025, total: g.size || 1025 }));
                  } catch (t) {
                    if (!n.hasSameOrigin(d.url)) return void e.call(v, function () {
                      v.trigger("error");
                    });u = 404;
                  }e.call(v, function () {
                    v.trigger("load");
                  });
                }, v.uid);
              }(), h.submit(), v.trigger("loadstart");
            }, getStatus: function getStatus() {
              return u;
            }, getResponse: function getResponse(e) {
              if ("json" === e && "string" === t.typeOf(l) && window.JSON) try {
                return JSON.parse(l.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""));
              } catch (e) {
                return null;
              }return l;
            }, abort: function abort() {
              var t = this;c && c.contentWindow && (c.contentWindow.stop ? c.contentWindow.stop() : c.contentWindow.document.execCommand ? c.contentWindow.document.execCommand("Stop") : c.src = "about:blank"), e.call(this, function () {
                t.dispatchEvent("abort");
              });
            } });
        }return e.XMLHttpRequest = u;
      }), n("moxie/runtime/html4/image/Image", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/image/Image"], function (e, t) {
        return e.Image = t;
      }), function (i) {
        for (var n = 0; n < i.length; n++) {
          for (var r = e, o = i[n], s = o.split(/[.\/]/), u = 0; u < s.length - 1; ++u) {
            r[s[u]] === t && (r[s[u]] = {}), r = r[s[u]];
          }r[s[s.length - 1]] = a[o];
        }
      }(["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Dom", "moxie/core/EventTarget", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/file/Blob", "moxie/core/I18n", "moxie/core/utils/Mime", "moxie/file/FileInput", "moxie/file/File", "moxie/file/FileDrop", "moxie/file/FileReader", "moxie/core/utils/Url", "moxie/runtime/RuntimeTarget", "moxie/xhr/FormData", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Transporter", "moxie/image/Image", "moxie/core/utils/Events", "moxie/runtime/html5/image/ResizerCanvas"]);
    }(this);
  });
}, function (e, t, i) {
  var n, r, o;!function (s, a) {
    var u = function u() {
      var e = {};return a.apply(e, arguments), e.plupload;
    };r = [i(0)], n = u, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o);
  }(this || window, function (e) {
    !function (e, t, i) {
      function n(e) {
        function t(e, t, i) {
          var r = { chunks: "slice_blob", jpgresize: "send_binary_string", pngresize: "send_binary_string", progress: "report_upload_progress", multi_selection: "select_multiple", dragdrop: "drag_and_drop", drop_element: "drag_and_drop", headers: "send_custom_headers", urlstream_upload: "send_binary_string", canSendBinary: "send_binary", triggerDialog: "summon_file_dialog" };r[e] ? n[r[e]] = t : i || (n[e] = t);
        }var i = e.required_features,
            n = {};return "string" == typeof i ? u.each(i.split(/\s*,\s*/), function (e) {
          t(e, !0);
        }) : "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? u.each(i, function (e, i) {
          t(i, e);
        }) : !0 === i && (e.chunk_size && e.chunk_size > 0 && (n.slice_blob = !0), u.isEmptyObj(e.resize) && !1 !== e.multipart || (n.send_binary_string = !0), e.http_method && (n.use_http_method = e.http_method), u.each(e, function (e, i) {
          t(i, !!e, !0);
        })), n;
      }var r = window.setTimeout,
          o = {},
          s = t.core.utils,
          a = t.runtime.Runtime,
          u = { VERSION: "2.3.1", STOPPED: 1, STARTED: 2, QUEUED: 1, UPLOADING: 2, FAILED: 4, DONE: 5, GENERIC_ERROR: -100, HTTP_ERROR: -200, IO_ERROR: -300, SECURITY_ERROR: -400, INIT_ERROR: -500, FILE_SIZE_ERROR: -600, FILE_EXTENSION_ERROR: -601, FILE_DUPLICATE_ERROR: -602, IMAGE_FORMAT_ERROR: -700, MEMORY_ERROR: -701, IMAGE_DIMENSIONS_ERROR: -702, mimeTypes: s.Mime.mimes, ua: s.Env, typeOf: s.Basic.typeOf, extend: s.Basic.extend, guid: s.Basic.guid, getAll: function getAll(e) {
          var t,
              i = [];"array" !== u.typeOf(e) && (e = [e]);for (var n = e.length; n--;) {
            (t = u.get(e[n])) && i.push(t);
          }return i.length ? i : null;
        }, get: s.Dom.get, each: s.Basic.each, getPos: s.Dom.getPos, getSize: s.Dom.getSize, xmlEncode: function xmlEncode(e) {
          var t = { "<": "lt", ">": "gt", "&": "amp", '"': "quot", "'": "#39" },
              i = /[<>&\"\']/g;return e ? ("" + e).replace(i, function (e) {
            return t[e] ? "&" + t[e] + ";" : e;
          }) : e;
        }, toArray: s.Basic.toArray, inArray: s.Basic.inArray, inSeries: s.Basic.inSeries, addI18n: t.core.I18n.addI18n, translate: t.core.I18n.translate, sprintf: s.Basic.sprintf, isEmptyObj: s.Basic.isEmptyObj, hasClass: s.Dom.hasClass, addClass: s.Dom.addClass, removeClass: s.Dom.removeClass, getStyle: s.Dom.getStyle, addEvent: s.Events.addEvent, removeEvent: s.Events.removeEvent, removeAllEvents: s.Events.removeAllEvents, cleanName: function cleanName(e) {
          var t, i;for (i = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"], t = 0; t < i.length; t += 2) {
            e = e.replace(i[t], i[t + 1]);
          }return e = e.replace(/\s+/g, "_"), e = e.replace(/[^a-z0-9_\-\.]+/gi, "");
        }, buildUrl: function buildUrl(e, t) {
          var i = "";return u.each(t, function (e, t) {
            i += (i ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(e);
          }), i && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e;
        }, formatSize: function formatSize(e) {
          function t(e, t) {
            return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
          }if (e === i || /\D/.test(e)) return u.translate("N/A");var n = Math.pow(1024, 4);return e > n ? t(e / n, 1) + " " + u.translate("tb") : e > (n /= 1024) ? t(e / n, 1) + " " + u.translate("gb") : e > (n /= 1024) ? t(e / n, 1) + " " + u.translate("mb") : e > 1024 ? Math.round(e / 1024) + " " + u.translate("kb") : e + " " + u.translate("b");
        }, parseSize: s.Basic.parseSizeStr, predictRuntime: function predictRuntime(e, t) {
          var i, n;return i = new u.Uploader(e), n = a.thatCan(i.getOption().required_features, t || e.runtimes), i.destroy(), n;
        }, addFileFilter: function addFileFilter(e, t) {
          o[e] = t;
        } };u.addFileFilter("mime_types", function (e, t, i) {
        e.length && !e.regexp.test(t.name) ? (this.trigger("Error", { code: u.FILE_EXTENSION_ERROR, message: u.translate("File extension error."), file: t }), i(!1)) : i(!0);
      }), u.addFileFilter("max_file_size", function (e, t, i) {
        e = u.parseSize(e), void 0 !== t.size && e && t.size > e ? (this.trigger("Error", { code: u.FILE_SIZE_ERROR, message: u.translate("File size error."), file: t }), i(!1)) : i(!0);
      }), u.addFileFilter("prevent_duplicates", function (e, t, i) {
        if (e) for (var n = this.files.length; n--;) {
          if (t.name === this.files[n].name && t.size === this.files[n].size) return this.trigger("Error", { code: u.FILE_DUPLICATE_ERROR, message: u.translate("Duplicate file error."), file: t }), void i(!1);
        }i(!0);
      }), u.Uploader = function (e) {
        function s() {
          var e,
              t,
              i = 0;if (this.state == u.STARTED) {
            for (t = 0; t < D.length; t++) {
              e || D[t].status != u.QUEUED ? i++ : (e = D[t], this.trigger("BeforeUpload", e) && (e.status = u.UPLOADING, this.trigger("UploadFile", e)));
            }i == D.length && (this.state !== u.STOPPED && (this.state = u.STOPPED, this.trigger("StateChanged")), this.trigger("UploadComplete", D));
          }
        }function l(e) {
          e.percent = e.size > 0 ? Math.ceil(e.loaded / e.size * 100) : 100, c();
        }function c() {
          var e,
              t,
              n,
              r = 0;for (A.reset(), e = 0; e < D.length; e++) {
            t = D[e], t.size !== i ? (A.size += t.origSize, n = t.loaded * t.origSize / t.size, (!t.completeTimestamp || t.completeTimestamp > S) && (r += n), A.loaded += n) : A.size = i, t.status == u.DONE ? A.uploaded++ : t.status == u.FAILED ? A.failed++ : A.queued++;
          }A.size === i ? A.percent = D.length > 0 ? Math.ceil(A.uploaded / D.length * 100) : 0 : (A.bytesPerSec = Math.ceil(r / ((+new Date() - S || 1) / 1e3)), A.percent = A.size > 0 ? Math.ceil(A.loaded / A.size * 100) : 0);
        }function d() {
          var e = N[0] || F[0];return !!e && e.getRuntime().uid;
        }function p(e, t) {
          if (e.ruid) {
            var i = a.getInfo(e.ruid);if (i) return i.can(t);
          }return !1;
        }function f() {
          this.bind("FilesAdded FilesRemoved", function (e) {
            e.trigger("QueueChanged"), e.refresh();
          }), this.bind("CancelUpload", w), this.bind("BeforeUpload", v), this.bind("UploadFile", x), this.bind("UploadProgress", _), this.bind("StateChanged", y), this.bind("QueueChanged", c), this.bind("Error", b), this.bind("FileUploaded", E), this.bind("Destroy", R);
        }function h(e, i) {
          var n = this,
              r = 0,
              o = [],
              s = { runtime_order: e.runtimes, required_caps: e.required_features, preferred_caps: C, swf_url: e.flash_swf_url, xap_url: e.silverlight_xap_url };u.each(e.runtimes.split(/\s*,\s*/), function (t) {
            e[t] && (s[t] = e[t]);
          }), e.browse_button && u.each(e.browse_button, function (i) {
            o.push(function (o) {
              var l = new t.file.FileInput(u.extend({}, s, { accept: e.filters.mime_types, name: e.file_data_name, multiple: e.multi_selection, container: e.container, browse_button: i }));l.onready = function () {
                var e = a.getInfo(this.ruid);u.extend(n.features, { chunks: e.can("slice_blob"), multipart: e.can("send_multipart"), multi_selection: e.can("select_multiple") }), r++, N.push(this), o();
              }, l.onchange = function () {
                n.addFile(this.files);
              }, l.bind("mouseenter mouseleave mousedown mouseup", function (t) {
                L || (e.browse_button_hover && ("mouseenter" === t.type ? u.addClass(i, e.browse_button_hover) : "mouseleave" === t.type && u.removeClass(i, e.browse_button_hover)), e.browse_button_active && ("mousedown" === t.type ? u.addClass(i, e.browse_button_active) : "mouseup" === t.type && u.removeClass(i, e.browse_button_active)));
              }), l.bind("mousedown", function () {
                n.trigger("Browse");
              }), l.bind("error runtimeerror", function () {
                l = null, o();
              }), l.init();
            });
          }), e.drop_element && u.each(e.drop_element, function (e) {
            o.push(function (i) {
              var o = new t.file.FileDrop(u.extend({}, s, { drop_zone: e }));o.onready = function () {
                var e = a.getInfo(this.ruid);u.extend(n.features, { chunks: e.can("slice_blob"), multipart: e.can("send_multipart"), dragdrop: e.can("drag_and_drop") }), r++, F.push(this), i();
              }, o.ondrop = function () {
                n.addFile(this.files);
              }, o.bind("error runtimeerror", function () {
                o = null, i();
              }), o.init();
            });
          }), u.inSeries(o, function () {
            "function" == typeof i && i(r);
          });
        }function m(e, n, r) {
          var o = new t.image.Image();try {
            o.onload = function () {
              if (n.width > this.width && n.height > this.height && n.quality === i && n.preserve_headers && !n.crop) return this.destroy(), r(e);o.downsize(n.width, n.height, n.crop, n.preserve_headers);
            }, o.onresize = function () {
              r(this.getAsBlob(e.type, n.quality)), this.destroy();
            }, o.onerror = function () {
              r(e);
            }, o.load(e);
          } catch (t) {
            r(e);
          }
        }function g(e, i, r) {
          function o(e, i, n) {
            var r = T[e];switch (e) {case "max_file_size":
                "max_file_size" === e && (T.max_file_size = T.filters.max_file_size = i);break;case "chunk_size":
                (i = u.parseSize(i)) && (T[e] = i, T.send_file_name = !0);break;case "multipart":
                T[e] = i, i || (T.send_file_name = !0);break;case "http_method":
                T[e] = "PUT" === i.toUpperCase() ? "PUT" : "POST";break;case "unique_names":
                T[e] = i, i && (T.send_file_name = !0);break;case "filters":
                "array" === u.typeOf(i) && (i = { mime_types: i }), n ? u.extend(T.filters, i) : T.filters = i, i.mime_types && ("string" === u.typeOf(i.mime_types) && (i.mime_types = t.core.utils.Mime.mimes2extList(i.mime_types)), i.mime_types.regexp = function (e) {
                  var t = [];return u.each(e, function (e) {
                    u.each(e.extensions.split(/,/), function (e) {
                      /^\s*\*\s*$/.test(e) ? t.push("\\.*") : t.push("\\." + e.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"));
                    });
                  }), new RegExp("(" + t.join("|") + ")$", "i");
                }(i.mime_types), T.filters.mime_types = i.mime_types);break;case "resize":
                T.resize = !!i && u.extend({ preserve_headers: !0, crop: !1 }, i);break;case "prevent_duplicates":
                T.prevent_duplicates = T.filters.prevent_duplicates = !!i;break;case "container":case "browse_button":case "drop_element":
                i = "container" === e ? u.get(i) : u.getAll(i);case "runtimes":case "multi_selection":case "flash_swf_url":case "silverlight_xap_url":
                T[e] = i, n || (l = !0);break;default:
                T[e] = i;}n || s.trigger("OptionChanged", e, i, r);
          }var s = this,
              l = !1;"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? u.each(e, function (e, t) {
            o(t, e, r);
          }) : o(e, i, r), r ? (T.required_features = n(u.extend({}, T)), C = n(u.extend({}, T, { required_features: !0 }))) : l && (s.trigger("Destroy"), h.call(s, T, function (e) {
            e ? (s.runtime = a.getInfo(d()).type, s.trigger("Init", { runtime: s.runtime }), s.trigger("PostInit")) : s.trigger("Error", { code: u.INIT_ERROR, message: u.translate("Init error.") });
          }));
        }function v(e, t) {
          if (e.settings.unique_names) {
            var i = t.name.match(/\.([^.]+)$/),
                n = "part";i && (n = i[1]), t.target_name = t.id + "." + n;
          }
        }function x(e, i) {
          function n() {
            d-- > 0 ? r(o, 1e3) : (i.loaded = h, e.trigger("Error", { code: u.HTTP_ERROR, message: u.translate("HTTP Error."), file: i, response: I.responseText, status: I.status, responseHeaders: I.getAllResponseHeaders() }));
          }function o() {
            var t,
                n,
                r = {};i.status === u.UPLOADING && e.state !== u.STOPPED && (e.settings.send_file_name && (r.name = i.target_name || i.name), c && f.chunks && a.size > c ? (n = Math.min(c, a.size - h), t = a.slice(h, h + n)) : (n = a.size, t = a), c && f.chunks && (e.settings.send_chunk_number ? (r.chunk = Math.ceil(h / c), r.chunks = Math.ceil(a.size / c)) : (r.offset = h, r.total = a.size)), e.trigger("BeforeChunkUpload", i, r, t, h) && s(r, t, n));
          }function s(s, c, p) {
            var m;I = new t.xhr.XMLHttpRequest(), I.upload && (I.upload.onprogress = function (t) {
              i.loaded = Math.min(i.size, h + t.loaded), e.trigger("UploadProgress", i);
            }), I.onload = function () {
              if (I.status >= 400) return void n();d = e.settings.max_retries, p < a.size ? (c.destroy(), h += p, i.loaded = Math.min(h, a.size), e.trigger("ChunkUploaded", i, { offset: i.loaded, total: a.size, response: I.responseText, status: I.status, responseHeaders: I.getAllResponseHeaders() }), "Android Browser" === u.ua.browser && e.trigger("UploadProgress", i)) : i.loaded = i.size, c = m = null, !h || h >= a.size ? (i.size != i.origSize && (a.destroy(), a = null), e.trigger("UploadProgress", i), i.status = u.DONE, i.completeTimestamp = +new Date(), e.trigger("FileUploaded", i, { response: I.responseText, status: I.status, responseHeaders: I.getAllResponseHeaders() })) : r(o, 1);
            }, I.onerror = function () {
              n();
            }, I.onloadend = function () {
              this.destroy(), I = null;
            }, e.settings.multipart && f.multipart ? (I.open(e.settings.http_method, l, !0), u.each(e.settings.headers, function (e, t) {
              I.setRequestHeader(t, e);
            }), m = new t.xhr.FormData(), u.each(u.extend(s, e.settings.multipart_params), function (e, t) {
              m.append(t, e);
            }), m.append(e.settings.file_data_name, c), I.send(m, { runtime_order: e.settings.runtimes, required_caps: e.settings.required_features, preferred_caps: C, swf_url: e.settings.flash_swf_url, xap_url: e.settings.silverlight_xap_url })) : (l = u.buildUrl(e.settings.url, u.extend(s, e.settings.multipart_params)), I.open(e.settings.http_method, l, !0), u.each(e.settings.headers, function (e, t) {
              I.setRequestHeader(t, e);
            }), I.hasRequestHeader("Content-Type") || I.setRequestHeader("Content-Type", "application/octet-stream"), I.send(c, { runtime_order: e.settings.runtimes, required_caps: e.settings.required_features, preferred_caps: C, swf_url: e.settings.flash_swf_url, xap_url: e.settings.silverlight_xap_url }));
          }var a,
              l = e.settings.url,
              c = e.settings.chunk_size,
              d = e.settings.max_retries,
              f = e.features,
              h = 0;i.loaded && (h = i.loaded = c ? c * Math.floor(i.loaded / c) : 0), a = i.getSource(), !u.isEmptyObj(e.settings.resize) && p(a, "send_binary_string") && -1 !== u.inArray(a.type, ["image/jpeg", "image/png"]) ? m.call(this, a, e.settings.resize, function (e) {
            a = e, i.size = e.size, o();
          }) : o();
        }function _(e, t) {
          l(t);
        }function y(e) {
          if (e.state == u.STARTED) S = +new Date();else if (e.state == u.STOPPED) for (var t = e.files.length - 1; t >= 0; t--) {
            e.files[t].status == u.UPLOADING && (e.files[t].status = u.QUEUED, c());
          }
        }function w() {
          I && I.abort();
        }function E(e) {
          c(), r(function () {
            s.call(e);
          }, 1);
        }function b(e, t) {
          t.code === u.INIT_ERROR ? e.destroy() : t.code === u.HTTP_ERROR && (t.file.status = u.FAILED, t.file.completeTimestamp = +new Date(), l(t.file), e.state == u.STARTED && (e.trigger("CancelUpload"), r(function () {
            s.call(e);
          }, 1)));
        }function R(e) {
          e.stop(), u.each(D, function (e) {
            e.destroy();
          }), D = [], N.length && (u.each(N, function (e) {
            e.destroy();
          }), N = []), F.length && (u.each(F, function (e) {
            e.destroy();
          }), F = []), C = {}, L = !1, S = I = null, A.reset();
        }var T,
            S,
            A,
            I,
            O = u.guid(),
            D = [],
            C = {},
            N = [],
            F = [],
            L = !1;T = { chunk_size: 0, file_data_name: "file", filters: { mime_types: [], prevent_duplicates: !1, max_file_size: 0 }, flash_swf_url: "js/Moxie.swf", http_method: "POST", max_retries: 0, multipart: !0, multi_selection: !0, resize: !1, runtimes: a.order, send_file_name: !0, send_chunk_number: !0, silverlight_xap_url: "js/Moxie.xap" }, g.call(this, e, null, !0), A = new u.QueueProgress(), u.extend(this, { id: O, uid: O, state: u.STOPPED, features: {}, runtime: null, files: D, settings: T, total: A, init: function init() {
            var e,
                t,
                i = this;return e = i.getOption("preinit"), "function" == typeof e ? e(i) : u.each(e, function (e, t) {
              i.bind(t, e);
            }), f.call(i), u.each(["container", "browse_button", "drop_element"], function (e) {
              if (null === i.getOption(e)) return t = { code: u.INIT_ERROR, message: u.sprintf(u.translate("%s specified, but cannot be found."), e) }, !1;
            }), t ? i.trigger("Error", t) : T.browse_button || T.drop_element ? void h.call(i, T, function (e) {
              var t = i.getOption("init");"function" == typeof t ? t(i) : u.each(t, function (e, t) {
                i.bind(t, e);
              }), e ? (i.runtime = a.getInfo(d()).type, i.trigger("Init", { runtime: i.runtime }), i.trigger("PostInit")) : i.trigger("Error", { code: u.INIT_ERROR, message: u.translate("Init error.") });
            }) : i.trigger("Error", { code: u.INIT_ERROR, message: u.translate("You must specify either browse_button or drop_element.") });
          }, setOption: function setOption(e, t) {
            g.call(this, e, t, !this.runtime);
          }, getOption: function getOption(e) {
            return e ? T[e] : T;
          }, refresh: function refresh() {
            N.length && u.each(N, function (e) {
              e.trigger("Refresh");
            }), this.trigger("Refresh");
          }, start: function start() {
            this.state != u.STARTED && (this.state = u.STARTED, this.trigger("StateChanged"), s.call(this));
          }, stop: function stop() {
            this.state != u.STOPPED && (this.state = u.STOPPED, this.trigger("StateChanged"), this.trigger("CancelUpload"));
          }, disableBrowse: function disableBrowse() {
            L = arguments[0] === i || arguments[0], N.length && u.each(N, function (e) {
              e.disable(L);
            }), this.trigger("DisableBrowse", L);
          }, getFile: function getFile(e) {
            var t;for (t = D.length - 1; t >= 0; t--) {
              if (D[t].id === e) return D[t];
            }
          }, addFile: function addFile(e, i) {
            function n(e, t) {
              var i = [];u.each(l.settings.filters, function (t, n) {
                o[n] && i.push(function (i) {
                  o[n].call(l, t, e, function (e) {
                    i(!e);
                  });
                });
              }), u.inSeries(i, t);
            }function s(e) {
              var o = u.typeOf(e);if (e instanceof t.file.File) {
                if (!e.ruid && !e.isDetached()) {
                  if (!a) return !1;e.ruid = a, e.connectRuntime(a);
                }s(new u.File(e));
              } else e instanceof t.file.Blob ? (s(e.getSource()), e.destroy()) : e instanceof u.File ? (i && (e.name = i), c.push(function (t) {
                n(e, function (i) {
                  i || (D.push(e), p.push(e), l.trigger("FileFiltered", e)), r(t, 1);
                });
              })) : -1 !== u.inArray(o, ["file", "blob"]) ? s(new t.file.File(null, e)) : "node" === o && "filelist" === u.typeOf(e.files) ? u.each(e.files, s) : "array" === o && (i = null, u.each(e, s));
            }var a,
                l = this,
                c = [],
                p = [];a = d(), s(e), c.length && u.inSeries(c, function () {
              p.length && l.trigger("FilesAdded", p);
            });
          }, removeFile: function removeFile(e) {
            for (var t = "string" == typeof e ? e : e.id, i = D.length - 1; i >= 0; i--) {
              if (D[i].id === t) return this.splice(i, 1)[0];
            }
          }, splice: function splice(e, t) {
            var n = D.splice(e === i ? 0 : e, t === i ? D.length : t),
                r = !1;return this.state == u.STARTED && (u.each(n, function (e) {
              if (e.status === u.UPLOADING) return r = !0, !1;
            }), r && this.stop()), this.trigger("FilesRemoved", n), u.each(n, function (e) {
              e.destroy();
            }), r && this.start(), n;
          }, dispatchEvent: function dispatchEvent(e) {
            var t, i;if (e = e.toLowerCase(), t = this.hasEventListener(e)) {
              t.sort(function (e, t) {
                return t.priority - e.priority;
              }), i = [].slice.call(arguments), i.shift(), i.unshift(this);for (var n = 0; n < t.length; n++) {
                if (!1 === t[n].fn.apply(t[n].scope, i)) return !1;
              }
            }return !0;
          }, bind: function bind(e, t, i, n) {
            u.Uploader.prototype.bind.call(this, e, t, n, i);
          }, destroy: function destroy() {
            this.trigger("Destroy"), T = A = null, this.unbindAll();
          } });
      }, u.Uploader.prototype = t.core.EventTarget.instance, u.File = function () {
        function e(e) {
          u.extend(this, { id: u.guid(), name: e.name || e.fileName, type: e.type || "", size: e.size || e.fileSize, origSize: e.size || e.fileSize, loaded: 0, percent: 0, status: u.QUEUED, lastModifiedDate: e.lastModifiedDate || new Date().toLocaleString(), completeTimestamp: 0, getNative: function getNative() {
              var e = this.getSource().getSource();return -1 !== u.inArray(u.typeOf(e), ["blob", "file"]) ? e : null;
            }, getSource: function getSource() {
              return t[this.id] ? t[this.id] : null;
            }, destroy: function destroy() {
              var e = this.getSource();e && (e.destroy(), delete t[this.id]);
            } }), t[this.id] = e;
        }var t = {};return e;
      }(), u.QueueProgress = function () {
        var e = this;e.size = 0, e.loaded = 0, e.uploaded = 0, e.failed = 0, e.queued = 0, e.percent = 0, e.bytesPerSec = 0, e.reset = function () {
          e.size = e.loaded = e.uploaded = e.failed = e.queued = e.percent = e.bytesPerSec = 0;
        };
      }, e.plupload = u;
    }(this, e);
  });
}, function (module, exports, __webpack_require__) {
  var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (global) {
    function createCookie(e, t, i) {
      var n = new Date();n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);var r = "; expires=" + n.toGMTString();document.cookie = e + "=" + t + r + "; path=/";
    }function readCookie(e) {
      for (var t = e + "=", i = document.cookie.split(";"), n = 0, r = i.length; n < r; n++) {
        for (var o = i[n]; " " === o.charAt(0);) {
          o = o.substring(1, o.length);
        }if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
      }return null;
    }function QiniuJsSDK() {
      function log(e, t) {
        for (var i = "[qiniu-js-sdk][" + e + "]", n = i, r = 0; r < t.length; r++) {
          "string" == typeof t[r] ? n += " " + t[r] : n += " " + that.stringifyJSON(t[r]);
        }that.detectIEVersion() ? console.log(n) : (t.unshift(i), console.log.apply(console, t)), document.getElementById("qiniu-js-sdk-log") && (document.getElementById("qiniu-js-sdk-log").innerHTML += "<p>" + n + "</p>");
      }function makeLogFunc(e) {
        var t = e.toLowerCase();logger[t] = function () {
          if (window.console && window.console.log && logger.level >= logger[e]) {
            var i = Array.prototype.slice.call(arguments);log(t, i);
          }
        };
      }function StatisticsLogger() {
        function e() {
          for (var e = [], i = 0; i < n.length; i++) {
            n[i].status !== r.finished && e.push(n[i]), n[i].status === r.waiting && t(n[i]);
          }n = e;
        }function t(e) {
          e.status = r.processing;var t = that.createAjax();t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.setRequestHeader("Authorization", "UpToken " + that.token), t.onreadystatechange = function () {
            4 === t.readyState && (200 === t.status ? (logger.debug("[STATISTICS] successfully report log to server"), e.status = r.finished) : (logger.debug("[STATISTICS] report log to server failed"), e.status = r.waiting));
          }, t.send(e.log);
        }var i = "https://uplog.qbox.me/log/3",
            n = [],
            r = { waiting: 0, processing: 1, finished: 2 };this.log = function (e, t, i, o, s, a, u, l, c, d) {
          var p = Array.prototype.join.call(arguments, ",");n.push({ log: p, status: r.waiting }), logger.debug("[STATISTICS] send log to statistics server", p);
        }, setInterval(e, 1e3);
      }var moxie = __webpack_require__(0);window.moxie = moxie;var plupload = __webpack_require__(1);window.plupload = plupload;var that = this;this.detectIEVersion = function () {
        for (var e = 4, t = document.createElement("div"), i = t.getElementsByTagName("i"); t.innerHTML = "\x3c!--[if gt IE " + e + "]><i></i><![endif]--\x3e", i[0];) {
          e++;
        }return e > 4 && e;
      };var logger = { MUTE: 0, FATA: 1, ERROR: 2, WARN: 3, INFO: 4, DEBUG: 5, TRACE: 6, level: 0 };for (var property in logger) {
        logger.hasOwnProperty(property) && "number" == typeof logger[property] && !logger.hasOwnProperty(property.toLowerCase()) && makeLogFunc(property);
      }var qiniuUploadUrl;qiniuUploadUrl = "https:" === window.location.protocol ? "https://upload.qiniup.com" : "http://upload.qiniup.com";var qiniuUploadUrls = ["http://upload.qiniup.com", "http://up.qiniup.com"],
          qiniuUpHosts = { http: ["http://upload.qiniup.com", "http://up.qiniup.com"], https: ["https://upload.qiniup.com"] },
          changeUrlTimes = 0,
          statisticsLogger = new StatisticsLogger(),
          ExtraErrors = { ZeroSizeFile: -6, InvalidToken: -5, InvalidArgument: -4, InvalidFile: -3, Cancelled: -2, NetworkError: -1, UnknownError: 0, TimedOut: -1001, UnknownHost: -1003, CannotConnectToHost: -1004, NetworkConnectionLost: -1005 };this.resetUploadUrl = function (e) {
        if (logger.debug("num: " + e), 0 == e) {
          logger.debug("use main uphost");var t = qiniuUpHosts.main;qiniuUploadUrl = "https:" === window.location.protocol ? "https://" + t[0] : "http://" + t[0];
        } else {
          logger.debug("use backup uphost");var t = qiniuUpHosts.backup;qiniuUploadUrl = e % 2 == 0 ? "https:" === window.location.protocol ? "https://" + t[1] : "http://" + t[1] : "https:" === window.location.protocol ? "https://" + t[0] : "http://" + t[0];
        }logger.debug("resetUploadUrl: " + qiniuUploadUrl);
      }, this.isImage = function (e) {
        return e = e.split(/[?#]/)[0], /\.(png|jpg|jpeg|gif|bmp)$/i.test(e);
      }, this.getFileExtension = function (e) {
        var t = e.split(".");return 1 === t.length || "" === t[0] && 2 === t.length ? "" : t.pop().toLowerCase();
      }, this.utf8_encode = function (e) {
        if (null === e || void 0 === e) return "";var t,
            i,
            n = e + "",
            r = "",
            o = 0;t = i = 0, o = n.length;for (var s = 0; s < o; s++) {
          var a = n.charCodeAt(s),
              u = null;if (a < 128) i++;else if (a > 127 && a < 2048) u = String.fromCharCode(a >> 6 | 192, 63 & a | 128);else if (63488 & a ^ !0) u = String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128);else {
            if (64512 & a ^ !0) throw new RangeError("Unmatched trail surrogate at " + s);var l = n.charCodeAt(++s);if (64512 & l ^ !0) throw new RangeError("Unmatched lead surrogate at " + (s - 1));a = ((1023 & a) << 10) + (1023 & l) + 65536, u = String.fromCharCode(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128);
          }null !== u && (i > t && (r += n.slice(t, i)), r += u, t = i = s + 1);
        }return i > t && (r += n.slice(t, o)), r;
      }, this.base64_decode = function (e) {
        var t,
            i,
            n,
            r,
            o,
            s,
            a,
            u,
            l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            c = 0,
            d = 0,
            p = [];if (!e) return e;e += "";do {
          r = l.indexOf(e.charAt(c++)), o = l.indexOf(e.charAt(c++)), s = l.indexOf(e.charAt(c++)), a = l.indexOf(e.charAt(c++)), u = r << 18 | o << 12 | s << 6 | a, t = u >> 16 & 255, i = u >> 8 & 255, n = 255 & u, p[d++] = 64 === s ? String.fromCharCode(t) : 64 === a ? String.fromCharCode(t, i) : String.fromCharCode(t, i, n);
        } while (c < e.length);return p.join("");
      }, this.base64_encode = function (e) {
        var t,
            i,
            n,
            r,
            o,
            s,
            a,
            u,
            l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            c = 0,
            d = 0,
            p = "",
            f = [];if (!e) return e;e = this.utf8_encode(e + "");do {
          t = e.charCodeAt(c++), i = e.charCodeAt(c++), n = e.charCodeAt(c++), u = t << 16 | i << 8 | n, r = u >> 18 & 63, o = u >> 12 & 63, s = u >> 6 & 63, a = 63 & u, f[d++] = l.charAt(r) + l.charAt(o) + l.charAt(s) + l.charAt(a);
        } while (c < e.length);switch (p = f.join(""), e.length % 3) {case 1:
            p = p.slice(0, -2) + "==";break;case 2:
            p = p.slice(0, -1) + "=";}return p;
      }, this.URLSafeBase64Encode = function (e) {
        return e = this.base64_encode(e), e.replace(/\//g, "_").replace(/\+/g, "-");
      }, this.URLSafeBase64Decode = function (e) {
        return e = e.replace(/_/g, "/").replace(/-/g, "+"), this.base64_decode(e);
      }, this.createAjax = function (e) {
        return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      }, this.parseJSON = function (data) {
        if (window.JSON && window.JSON.parse) return window.JSON.parse(data);var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            text = String(data);return rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
          return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
        })), eval("(" + text + ")");
      }, this.stringifyJSON = function (e) {
        if (window.JSON && window.JSON.stringify) return window.JSON.stringify(e);switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "string":
            return '"' + e.replace(/(["\\])/g, "\\$1") + '"';case "array":
            return "[" + e.map(that.stringifyJSON).join(",") + "]";case "object":
            if (e instanceof Array) {
              for (var t = [], i = e.length, n = 0; n < i; n++) {
                t.push(that.stringifyJSON(e[n]));
              }return "[" + t.join(",") + "]";
            }if (null === e) return "null";var r = [];for (var o in e) {
              e.hasOwnProperty(o) && r.push(that.stringifyJSON(o) + ":" + that.stringifyJSON(e[o]));
            }return "{" + r.join(",") + "}";case "number":case !1:case "boolean":
            return e;}
      }, this.trim = function (e) {
        return null === e ? "" : e.replace(/^\s+|\s+$/g, "");
      }, this.uploader = function (e) {
        var t = function t(e) {
          var t = e.split(":"),
              i = t[0],
              n = that.parseJSON(that.URLSafeBase64Decode(t[2]));return n.ak = i, n.scope.indexOf(":") >= 0 ? (n.bucket = n.scope.split(":")[0], n.key = n.scope.split(":")[1]) : n.bucket = n.scope, n;
        },
            i = function i(_i) {
          var n = t(_i),
              r = window.location.protocol + "//api.qiniu.com/v2/query?ak=" + n.ak + "&bucket=" + n.bucket;logger.debug("putPolicy: ", n), logger.debug("get uphosts from: ", r);var o,
              s = that.detectIEVersion();s && s <= 9 ? (o = new moxie.xhr.XMLHttpRequest(), moxie.core.utils.Env.swf_url = e.flash_swf_url) : o = that.createAjax(), o.open("GET", r, !1);var a = function a() {
            if (logger.debug("ajax.readyState: ", o.readyState), 4 === o.readyState) if (logger.debug("ajax.status: ", o.status), o.status < 400) {
              var e = that.parseJSON(o.responseText);qiniuUpHosts.main = e.up.acc.main, qiniuUpHosts.backup = e.up.acc.backup, logger.debug("get new uphosts: ", qiniuUpHosts), that.resetUploadUrl(0);
            } else logger.error("get uphosts error: ", o.responseText);
          };s && s <= 9 ? o.bind("readystatechange", a) : o.onreadystatechange = a, o.send();
        },
            n = function n(t) {
          return !that.token || e.uptoken_url && that.tokenInfo.isExpired() ? r(t) : that.token;
        },
            r = function r(t) {
          if (e.uptoken) that.token = e.uptoken;else if (e.uptoken_url) {
            logger.debug("get uptoken from: ", that.uptoken_url);var n = that.createAjax();if (n.open("GET", that.uptoken_url, !1), n.send(), 200 === n.status) {
              var r = that.parseJSON(n.responseText);that.token = r.uptoken;var o = that.token.split(":"),
                  s = that.parseJSON(that.URLSafeBase64Decode(o[2]));that.tokenMap || (that.tokenMap = {});var a = function a(e) {
                return Math.ceil(e.getTime() / 1e3);
              },
                  u = a(new Date(n.getResponseHeader("date"))),
                  l = a(new Date());that.tokenInfo = { serverDelay: l - u, deadline: s.deadline, isExpired: function isExpired() {
                  return this.deadline - a(new Date()) + this.serverDelay < 600;
                } }, logger.debug("get new uptoken: ", that.token), logger.debug("get token info: ", that.tokenInfo);
            } else logger.error("get uptoken error: ", n.responseText);
          } else e.uptoken_func ? (logger.debug("get uptoken from uptoken_func"), that.token = e.uptoken_func(t), logger.debug("get new uptoken: ", that.token)) : logger.error("one of [uptoken, uptoken_url, uptoken_func] settings in options is required!");return that.token && i(that.token), that.token;
        },
            o = function o(t, i, n) {
          var r = "",
              o = !1;if (!e.save_key) if (o = t.getOption && t.getOption("unique_names"), o = o || t.settings && t.settings.unique_names) {
            var s = that.getFileExtension(i.name);r = s ? i.id + "." + s : i.id;
          } else r = "function" == typeof n ? n(t, i) : i.name;return r;
        },
            s = function s(e) {
          if (e && e.match) {
            var t = e.match(/^https?:\/\/([^:^\/]*)/);return t ? t[1] : "";
          }return "";
        },
            a = function a(e) {
          if (e && e.match) {
            var t = e.match(/(^https?)/);if (!t) return "";var i = t[1];return t = e.match(/^https?:\/\/([^:^\/]*):(\d*)/), t ? t[2] : "http" === i ? "80" : "443";
          }return "";
        };if (e.log_level && (logger.level = e.log_level), !e.domain) throw "domain setting in options is required!";if (!e.browse_button) throw "browse_button setting in options is required!";if (!e.uptoken && !e.uptoken_url && !e.uptoken_func) throw "one of [uptoken, uptoken_url, uptoken_func] settings in options is required!";logger.debug("init uploader start"), logger.debug("environment: ", moxie.core.utils.Env), logger.debug("userAgent: ", navigator.userAgent);var u = {},
            l = e.init && e.init.Error,
            c = e.init && e.init.FileUploaded;e.init.Error = function () {}, e.init.FileUploaded = function () {}, that.uptoken_url = e.uptoken_url, that.token = "", that.key_handler = "function" == typeof e.init.Key ? e.init.Key : "", this.domain = e.domain;var d = "",
            p = { isResumeUpload: !1, resumeFilesize: 0, startTime: "", currentTime: "" };!function () {
          var t,
              i,
              n = that.detectIEVersion(),
              r = "Safari" === moxie.core.utils.Env.browser && moxie.core.utils.Env.version <= 5 && "Windows" === moxie.core.utils.Env.os && "7" === moxie.core.utils.Env.osVersion || "Safari" === moxie.core.utils.Env.browser && "iOS" === moxie.core.utils.Env.os && "7" === moxie.core.utils.Env.osVersion;n && n < 9 && e.chunk_size && e.runtimes.indexOf("flash") >= 0 ? e.chunk_size = 0 : r ? e.chunk_size = 0 : (t = 20, i = 4 << t, plupload.parseSize(e.chunk_size) > i && (e.chunk_size = i));
        }(), logger.debug("invoke reset_chunk_size()"), logger.debug("op.chunk_size: ", e.chunk_size);var f = { url: qiniuUploadUrl, multipart_params: { token: "" } },
            h = that.detectIEVersion();h && h <= 9 && (f.multipart_params.accept = "text/plain; charset=utf-8", logger.debug("add accept text/plain in multipart params")), plupload.extend(u, e, f), logger.debug("option: ", u);var m = new plupload.Uploader(u);logger.debug("new plupload.Uploader(option)"), m.bind("Init", function (t, i) {
          logger.debug("Init event activated"), e.get_new_uptoken || r(null);
        }), logger.debug("bind Init event"), m.bind("FilesAdded", function (e, t) {
          logger.debug("FilesAdded event activated");var i = e.getOption && e.getOption("auto_start");i = i || e.settings && e.settings.auto_start, logger.debug("auto_start: ", i), logger.debug("files: ", t);if (function () {
            return "ios" === moxie.core.utils.Env.OS.toLowerCase();
          }()) for (var n = 0; n < t.length; n++) {
            var r = t[n],
                o = that.getFileExtension(r.name);r.name = r.id + "." + o;
          }i && setTimeout(function () {
            e.start(), logger.debug("invoke up.start()");
          }, 0), e.refresh();
        }), logger.debug("bind FilesAdded event"), m.bind("BeforeUpload", function (t, i) {
          logger.debug("BeforeUpload event activated"), i._start_at = new Date(), i.speed = i.speed || 0, d = "", e.get_new_uptoken && r(i);var s = function s(t, i, n) {
            p.startTime = new Date().getTime();var r;r = e.save_key ? { token: that.token } : { key: o(t, i, n), token: that.token };var s = that.detectIEVersion();s && s <= 9 && (r.accept = "text/plain; charset=utf-8", logger.debug("add accept text/plain in multipart params")), logger.debug("directUpload multipart_params_obj: ", r);var u = e.x_vars;if (void 0 !== u && "object" == (typeof u === "undefined" ? "undefined" : _typeof(u))) for (var l in u) {
              u.hasOwnProperty(l) && ("function" == typeof u[l] ? r["x:" + l] = u[l](t, i) : "object" != _typeof(u[l]) && (r["x:" + l] = u[l]));
            }t.setOption({ url: qiniuUploadUrl, multipart: !0, chunk_size: a() ? e.max_file_size : void 0, multipart_params: r });
          },
              a = function a() {
            var e = navigator.userAgent.toLowerCase();return !(!e.match(/MicroMessenger/i) && "QQBrowser" !== moxie.core.utils.Env.browser && !e.match(/V1_AND_SQ/i) || "android" !== moxie.core.utils.Env.OS.toLowerCase());
          },
              u = t.getOption && t.getOption("chunk_size");if (u = u || t.settings && t.settings.chunk_size, logger.debug("uploader.runtime: ", m.runtime), logger.debug("chunk_size: ", u), "html5" !== m.runtime && "flash" !== m.runtime || !u) logger.debug("directUpload because uploader.runtime !== 'html5' || uploader.runtime !== 'flash' || !chunk_size"), s(t, i, that.key_handler);else if (i.size < u || a()) logger.debug("directUpload because file.size < chunk_size || is_android_weixin_or_qq()"), s(t, i, that.key_handler);else {
            var l = localStorage.getItem(i.name),
                c = u;if (l) {
              l = that.parseJSON(l);var f = new Date().getTime(),
                  h = l.time || 0;f - h < 864e5 && 100 !== l.percent && i.size === l.total ? (i.percent = l.percent, i.loaded = l.offset, d = l.ctx, p.isResumeUpload = !0, p.resumeFilesize = l.offset, l.offset + c > i.size && (c = i.size - l.offset)) : localStorage.removeItem(i.name);
            }p.startTime = new Date().getTime();var g = {},
                v = that.detectIEVersion();v && v <= 9 && (g.accept = "text/plain; charset=utf-8", logger.debug("add accept text/plain in multipart params")), t.setOption({ url: qiniuUploadUrl + "/mkblk/" + c, multipart: !1, chunk_size: u, required_features: "chunks", headers: { Authorization: "UpToken " + n(i) }, multipart_params: g });
          }
        }), logger.debug("bind BeforeUpload event"), m.bind("UploadProgress", function (e, t) {
          logger.trace("UploadProgress event activated"), p.currentTime = new Date().getTime();var i = p.currentTime - p.startTime,
              n = t.loaded || 0;p.isResumeUpload && (n = t.loaded - p.resumeFilesize), t.speed = (n / i * 1e3).toFixed(0) || 0;
        }), logger.debug("bind UploadProgress event"), m.bind("ChunkUploaded", function (e, t, i) {
          logger.debug("ChunkUploaded event activated"), logger.debug("ChunkUploaded file: ", t), logger.debug("ChunkUploaded info: ", i);var r = that.parseJSON(i.response);logger.debug("ChunkUploaded res: ", r), d = d ? d + "," + r.ctx : r.ctx;var o = i.total - i.offset,
              s = e.getOption && e.getOption("chunk_size");s = s || e.settings && e.settings.chunk_size, o < s && (e.setOption({ url: qiniuUploadUrl + "/mkblk/" + o }), logger.debug("up.setOption url: ", qiniuUploadUrl + "/mkblk/" + o)), e.setOption({ headers: { Authorization: "UpToken " + n(t) } }), localStorage.setItem(t.name, that.stringifyJSON({ ctx: d, percent: t.percent, total: i.total, offset: i.offset, time: new Date().getTime() }));
        }), logger.debug("bind ChunkUploaded event");var g = e.max_retries,
            v = function v(e) {
          return g-- > 0 ? (setTimeout(function () {
            that.resetUploadUrl(g), e.status = plupload.QUEUED, m.stop(), m.start();
          }, 0), !0) : (g = qiniuUploadUrls.length, !1);
        };return m.bind("Error", function (t) {
          return function (i, n) {
            logger.error("Error event activated"), logger.error("err: ", n);var r = new Date(),
                o = "",
                u = n.file;if (u) {
              switch (n.code) {case plupload.FAILED:
                  o = "上传失败。请稍后再试。";break;case plupload.FILE_SIZE_ERROR:
                  var l = i.getOption && i.getOption("max_file_size");l = l || i.settings && i.settings.max_file_size, o = "浏览器最大可上传" + l + "。更大文件请使用命令行工具。";break;case plupload.FILE_EXTENSION_ERROR:
                  o = "文件验证失败。请稍后重试。";break;case plupload.HTTP_ERROR:
                  if ("" === n.response) {
                    if (o = n.message || "未知网络错误。", !v(u)) return;break;
                  }var c = that.parseJSON(n.response),
                      d = c.error;switch (n.status) {case 400:
                      o = "请求报文格式错误。";break;case 401:
                      o = "客户端认证授权失败。请重试或提交反馈。";break;case 405:
                      o = "客户端请求错误。请重试或提交反馈。";break;case 579:
                      o = "资源上传成功，但回调失败。";break;case 599:
                      if (o = "网络连接异常。请重试或提交反馈。", !v(u)) return;break;case 614:
                      o = "文件已存在。";try {
                        c = that.parseJSON(c.error), d = c.error || "file exists";
                      } catch (e) {
                        d = c.error || "file exists";
                      }break;case 631:
                      o = "指定空间不存在。";break;case 701:
                      o = "上传数据块校验出错。请重试或提交反馈。";break;default:
                      if (o = "未知错误。", !v(u)) return;}o = o + "(" + n.status + "：" + d + ")";break;case plupload.SECURITY_ERROR:
                  o = "安全配置错误。请联系网站管理员。";break;case plupload.GENERIC_ERROR:case plupload.IO_ERROR:
                  o = "上传失败。请稍后再试。";break;case plupload.INIT_ERROR:
                  o = "网站配置错误。请联系网站管理员。", m.destroy();break;default:
                  if (o = n.message + n.details, !v(u)) return;}t && t(i, n, o);
            }if (i.refresh(), !e.disable_statistics_report) {
              var p = n && n.responseHeaders && n.responseHeaders.match ? n.responseHeaders.match(/(X-Reqid\:\ )([\w\.\%-]*)/) : [];console.log(n);var f = p[2].replace(/[\r\n]/g, ""),
                  h = plupload.HTTP_ERROR ? n.status : n.code,
                  g = u._start_at ? u._start_at.getTime() : r.getTime();statisticsLogger.log(0 === h ? ExtraErrors.NetworkError : h, f, s(i.settings.url), void 0, a(i.settings.url), (r.getTime() - g) / 1e3, parseInt(g / 1e3), n.file.size * (n.file.percent / 100), "jssdk-" + i.runtime, u.size);
            }
          };
        }(l)), logger.debug("bind Error event"), m.bind("FileUploaded", function (t) {
          return function (i, n, r) {
            logger.debug("FileUploaded event activated"), logger.debug("FileUploaded file: ", n), logger.debug("FileUploaded info: ", r);var u = new Date(),
                l = function l(i, n, r) {
              if (logger.debug("FileUploaded last step:", r), e.downtoken_url) {
                var o = that.createAjax();o.open("POST", e.downtoken_url, !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.onreadystatechange = function () {
                  if (4 === o.readyState) if (200 === o.status) {
                    var e;try {
                      e = that.parseJSON(o.responseText);
                    } catch (e) {
                      throw "invalid json format";
                    }var s = {};plupload.extend(s, that.parseJSON(r.response), e), r.response = that.stringifyJSON(s), t && t(i, n, r);
                  } else m.trigger("Error", { status: o.status, response: o.responseText, file: n, code: plupload.HTTP_ERROR });
                }, o.send("key=" + that.parseJSON(r.response).key + "&domain=" + e.domain);
              } else t && t(i, n, r);
            },
                c = that.parseJSON(r.response);if (d = d || c.ctx, logger.debug("ctx: ", d), d) {
              var p = "";logger.debug("save_key: ", e.save_key), e.save_key || (p = o(i, n, that.key_handler), p = p ? "/key/" + that.URLSafeBase64Encode(p) : "");var f = "/fname/" + that.URLSafeBase64Encode(n.name);logger.debug("op.x_vars: ", e.x_vars);var h = e.x_vars,
                  g = "",
                  v = "";if (void 0 !== h && "object" == (typeof h === "undefined" ? "undefined" : _typeof(h))) for (var x in h) {
                h.hasOwnProperty(x) && ("function" == typeof h[x] ? g = that.URLSafeBase64Encode(h[x](i, n)) : "object" != _typeof(h[x]) && (g = that.URLSafeBase64Encode(h[x])), v += "/x:" + x + "/" + g);
              }var _,
                  y = qiniuUploadUrl + "/mkfile/" + n.size + p + f + v,
                  w = that.detectIEVersion();w && w <= 9 ? (_ = new moxie.xhr.XMLHttpRequest(), moxie.core.utils.Env.swf_url = e.flash_swf_url) : _ = that.createAjax(), _.open("POST", y, !0), _.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), console.log("uptoken:" + that.token), _.setRequestHeader("Authorization", "UpToken " + that.token);var E = function E() {
                if (logger.debug("ajax.readyState: ", _.readyState), 4 === _.readyState) {
                  localStorage.removeItem(n.name);var e;200 === _.status ? (e = { status: _.status, response: _.responseText, responseHeaders: _.getAllResponseHeaders() }, logger.debug("mkfile is success: ", e), l(i, n, e)) : (e = { status: _.status, response: _.responseText, file: n, code: -200, responseHeaders: _.getAllResponseHeaders() }, logger.debug("mkfile is error: ", e), m.trigger("Error", e));
                }
              };w && w <= 9 ? _.bind("readystatechange", E) : _.onreadystatechange = E, _.send(d), logger.debug("mkfile: ", y);
            } else l(i, n, r);if (!e.disable_statistics_report) {
              console.log(r.responseHeaders);var b = r.responseHeaders.match(/(X-Reqid\:\ )([\w\.\%-]*)/i)[2].replace(/[\r\n]/g, ""),
                  R = n._start_at ? n._start_at.getTime() : u.getTime();statisticsLogger.log(r.status, b, s(i.settings.url), void 0, a(i.settings.url), (u.getTime() - R) / 1e3, parseInt(R / 1e3), n.size, "jssdk-" + i.runtime, n.size);
            }
          };
        }(c)), logger.debug("bind FileUploaded event"), m.bind("FilesRemoved", function (t, i) {
          var n = new Date();if (!e.disable_statistics_report) for (var r = 0; r < i.length; r++) {
            statisticsLogger.log(ExtraErrors.Cancelled, void 0, s(t.settings.url), void 0, a(t.settings.url), (n.getTime() - i[r]._start_at.getTime()) / 1e3, i[r]._start_at.getTime() / 1e3, i[r].size * i[r].percent / 100, "jssdk-" + t.runtime, i[r].size);
          }
        }), logger.debug("bind FilesRemoved event"), m.init(), logger.debug("invoke uploader.init()"), logger.debug("init uploader end"), m;
      }, this.getUrl = function (e) {
        if (!e) return !1;e = encodeURI(e);var t = this.domain;return "/" !== t.slice(t.length - 1) && (t += "/"), t + e;
      };
    }window.localStorage || (window.localStorage = { setItem: function setItem(e, t) {
        createCookie(e, t, 30);
      }, getItem: function getItem(e) {
        return readCookie(e);
      }, removeItem: function removeItem(e) {
        createCookie(e, "", -1);
      } });var Qiniu = new QiniuJsSDK();global.Qiniu = Qiniu, global.QiniuJsSDK = QiniuJsSDK, void 0 !== module && module.exports ? module.exports = QiniuJsSDK : (__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return QiniuJsSDK;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }(window);
}]);

/***/ })

/******/ });