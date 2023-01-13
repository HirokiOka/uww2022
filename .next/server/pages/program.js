"use strict";
(() => {
var exports = {};
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 1324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ program),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/program.tsx






const getStaticProps = async ()=>{
    const dayOnePath = external_path_namespaceObject.join(process.cwd(), "public", "data", "dayOne.json");
    const dayTwoPath = external_path_namespaceObject.join(process.cwd(), "public", "data", "dayTwo.json");
    const videoPresenPath = external_path_namespaceObject.join(process.cwd(), "public", "data", "videoPresen.json");
    const dayOneJSON = external_fs_namespaceObject.readFileSync(dayOnePath).toString();
    const dayTwoJSON = external_fs_namespaceObject.readFileSync(dayTwoPath).toString();
    const videoPresenJSON = external_fs_namespaceObject.readFileSync(videoPresenPath).toString();
    const dayOne = JSON.parse(dayOneJSON);
    const dayTwo = JSON.parse(dayTwoJSON);
    const video = JSON.parse(videoPresenJSON);
    return {
        props: {
            dayOne,
            dayTwo,
            video
        }
    };
};
const Program = ({ dayOne , dayTwo , video  })=>{
    const bussSchedules = [
        [
            [
                "7:00",
                "7:48"
            ],
            [
                "7:30",
                "8:18"
            ],
            [
                "8:00",
                "8:45"
            ],
            [
                "8:30",
                "9:18"
            ],
            [
                "8:55",
                "9:45"
            ],
            [
                "9:30",
                "10:18"
            ], 
        ],
        [
            [
                "17:46",
                "18:32"
            ],
            [
                "18:16",
                "19:02"
            ],
            [
                "19:16",
                "20:02"
            ],
            [
                "20:16",
                "20:58"
            ],
            [
                "21:16",
                "21:58"
            ], 
        ], 
    ];
    const { 0: scene , 1: setScene  } = (0,external_react_.useState)("dayOne");
    const { 0: program , 1: setProgram  } = (0,external_react_.useState)(dayOne);
    function changeScene(newScene) {
        if (scene === newScene) return;
        if (newScene === "dayOne") {
            setScene("dayOne");
            setProgram(dayOne);
        } else if (newScene === "dayTwo") {
            setScene("dayTwo");
            setProgram(dayTwo);
        } else if (newScene === "video") {
            setScene("video");
            setProgram(video);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "UWW2022"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "contents",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "pt-16 text-4xl underline text-center pb-2 font-mono",
                            children: "Program"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "p-2 text-center md:mx-48 rounded",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("table", {
                                    className: "m-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "./img/presenter.png",
                                                    width: "32",
                                                    height: "32"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-center font-bold",
                                                    children: ":発表者"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl",
                                    children: "発表時間: 12分 (目安: 9分発表 + 2分質疑 + 1分転換) "
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-xl text-center md:mx-24",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: scene === "dayOne",
                                    onClick: ()=>changeScene("dayOne"),
                                    className: scene === "dayOne" ? "m-2 p-2 text-center bg-gray-200 rounded underline" : "m-2 p-2 text-center rounded hover:bg-gray-200",
                                    children: "12/23 (金)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: scene === "dayTwo",
                                    onClick: ()=>changeScene("dayTwo"),
                                    className: scene === "dayTwo" ? "m-2 p-2 text-center bg-gray-200 rounded underline" : "m-2 p-2 text-center rounded hover:bg-gray-200",
                                    children: "12/24 (土)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: scene === "video",
                                    onClick: ()=>changeScene("video"),
                                    className: scene === "video" ? "m-2 p-2 text-center bg-gray-200 rounded underline" : "m-2 p-2 text-center rounded hover:bg-gray-200",
                                    children: "ビデオ発表"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                scene === "dayOne" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-center p-2 border-black rounded-lg border-2 md:mx-24",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-2xl font-bold",
                                            children: "23日行き高速バス情報"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center p-2 text-lg",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                                className: "table-auto border text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "border px-3 font-bold",
                                                        children: "三宮発"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "border px-3 font-bold",
                                                        children: "淡路夢舞台着"
                                                    }),
                                                    bussSchedules[0].map((v, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border px-3",
                                                                    children: v[0]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border px-3",
                                                                    children: v[1]
                                                                })
                                                            ]
                                                        }, i))
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://www.yumebutai.co.jp/wp/wp-content/themes/yumebutai/images/access/pdf/bus_timetable_maiko2209.pdf",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:underline text-blue-500",
                                                children: "バス時刻表詳細"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                Object.values(program).map((s, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my-4 md:mx-24 p-2 border-black rounded-lg border-2 justify-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "text-2xl font-bold text-center",
                                                children: s.eventName
                                            }),
                                            scene !== "video" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                    className: "text-xl text-center",
                                                    children: [
                                                        s.startTime,
                                                        " - ",
                                                        s.endTime
                                                    ]
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                            s.isSession ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text-center m-4",
                                                children: [
                                                    scene !== "video" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                        children: [
                                                            "座長: ",
                                                            s.chairperson
                                                        ]
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                    s.presentations.map((p, j)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "list-disc list-inside m-2 p-2 rounded-lg bg-gray-100",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "md:text-xl text-center",
                                                                    children: p.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("table", {
                                                                    className: "m-auto",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "./img/presenter.png",
                                                                                    width: "24",
                                                                                    height: "24"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                    className: "text-center font-bold",
                                                                                    children: [
                                                                                        p.name,
                                                                                        " (",
                                                                                        p.affiliation,
                                                                                        ")"
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "flex mb-1 justify-center",
                                                                    children: p.coauthors.map((ca, idx, ary)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                className: "md:text-sm md:break-words text-xs",
                                                                                children: [
                                                                                    ca.name.length > 4 && ca.name.match(/[a-z]/g) === null ? ca.name.replaceAll(" ", "") : ca.name,
                                                                                    ary[idx + 1] && ary[idx + 1].affiliation === ca.affiliation ? "" : " (" + ca.affiliation + ")",
                                                                                    idx < ary.length - 1 ? "," : "",
                                                                                    "\xa0"
                                                                                ]
                                                                            })
                                                                        }, idx))
                                                                })
                                                            ]
                                                        }, j))
                                                ]
                                            }, i) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {}, i)
                                        ]
                                    }, i)),
                                scene === "dayTwo" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-center p-2 border-black rounded-lg border-2 md:mx-24",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-2xl font-bold",
                                            children: "24日帰り高速バス情報"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center p-2 text-lg",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                                className: "table-auto border text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "border px-3 font-bold",
                                                        children: "淡路夢舞台発"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "border px-3 font-bold",
                                                        children: "三ノ宮着"
                                                    }),
                                                    bussSchedules[1].map((v, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border px-3",
                                                                    children: v[0]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border px-3",
                                                                    children: v[1]
                                                                })
                                                            ]
                                                        }, i))
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://www.yumebutai.co.jp/wp/wp-content/themes/yumebutai/images/access/pdf/bus_timetable_maiko2209.pdf",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:underline text-blue-500",
                                                children: "バス時刻表詳細"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const program = (Program);


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(1324)));
module.exports = __webpack_exports__;

})();