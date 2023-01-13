"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header.tsx


const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "bg-gray-200 top-0 fixed w-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "m-3 text-xl text-right font-mono ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "./index.html",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "m-2 hover:underline",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "./program.html",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "m-2 hover:underline",
                            children: "Program"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "http://www.yumebutai.org/access/index.html",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "m-2 hover:underline",
                            children: "Access"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./components/oldLinks.tsx


const OldLinks = ()=>{
    const oldLink = "http://cse.eedept.kobe-u.ac.jp/old_webdata/event/workshop";
    const recentLink = "http://cse.eedept.kobe-u.ac.jp/uww";
    const uwwYears = new Array(15).fill(0).map((v, i)=>v + i + 2007);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center rounded m-2 font-mono",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl underline p-1",
                children: "Links"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-4 p-1",
                children: uwwYears.map((year, i)=>year < 2009 ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: oldLink + year,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "hover:underline",
                            children: [
                                "UWW",
                                year
                            ]
                        })
                    }, i) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: recentLink + year,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "hover:underline",
                            children: [
                                "UWW",
                                year
                            ]
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const oldLinks = (OldLinks);

;// CONCATENATED MODULE: ./components/footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "text-center py-2 w-full bg-gray-200 font-mono",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-center text-lg",
                children: "E-mail: uww2022org [at] ubi.eedept.kobe-u.ac.jp"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(oldLinks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "\xa9 Tsukamoto Terada Lab."
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(8698)));
module.exports = __webpack_exports__;

})();