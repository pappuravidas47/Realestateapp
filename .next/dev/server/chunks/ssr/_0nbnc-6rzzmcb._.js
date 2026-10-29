(()=>{"use strict";module.exports = [
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const links = [
    {
        href: "/properties",
        label: "Properties"
    },
    {
        href: "/about",
        label: "Our story"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
function Header({ overlay = false }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const textColor = overlay ? "text-white" : "text-ink";
    const desktopBorder = overlay ? "border-white/15" : "border-slate-200";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: overlay ? "absolute inset-x-0 top-0 z-30" : "relative z-30 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mx-auto flex h-20 w-[min(100%-2rem,1200px)] items-center justify-between border-b ${desktopBorder} sm:w-[min(100%-4rem,1200px)]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: `group flex items-center gap-3 ${textColor}`,
                        onClick: ()=>setIsOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grid size-8 place-items-center border border-current text-xs font-bold tracking-tighter",
                                children: "H"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "display-font text-xl tracking-[0.08em]",
                                children: "HAVENLY"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-9 md:flex",
                        "aria-label": "Main navigation",
                        children: [
                            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `text-sm transition hover:text-gold ${textColor}`,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: `border px-4 py-2 text-xs font-bold tracking-[0.12em] uppercase transition hover:bg-white hover:text-ink ${overlay ? "border-white text-white" : "border-ink text-ink hover:border-ink"}`,
                                children: "Book a viewing"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": isOpen ? "Close navigation" : "Open navigation",
                        "aria-expanded": isOpen,
                        onClick: ()=>setIsOpen(!isOpen),
                        className: `grid size-10 place-items-center md:hidden ${textColor}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative block h-3 w-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-0 h-px w-5 bg-current transition ${isOpen ? "top-1.5 rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-1.5 h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-3 h-px w-5 bg-current transition ${isOpen ? "top-1.5 -rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-20 border-b border-slate-200 bg-white p-6 shadow-xl md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mx-auto flex w-[min(100%,1200px)] flex-col gap-5",
                    "aria-label": "Mobile navigation",
                    children: [
                        links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: ()=>setIsOpen(false),
                                className: "display-font text-2xl text-ink",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            onClick: ()=>setIsOpen(false),
                            className: "mt-2 w-fit bg-ink px-5 py-3 text-xs font-bold tracking-[0.12em] text-white uppercase",
                            children: "Book a viewing"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/HeroSlider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$properties$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/properties.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const slides = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$properties$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["properties"].filter((property)=>property.featured).slice(0, 3);
function HeroSlider() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setInterval(()=>setActive((current)=>(current + 1) % slides.length), 6000);
        return ()=>window.clearInterval(timer);
    }, []);
    const slide = slides[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[680px] overflow-hidden bg-ink sm:min-h-[720px]",
        children: [
            slides.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                    src: item.image,
                    alt: index === active ? `${item.title}, ${item.location}` : "",
                    fill: true,
                    priority: index === 0,
                    sizes: "100vw",
                    className: `object-cover transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`
                }, item.slug, false, {
                    fileName: "[project]/components/HeroSlider.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-shade absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/components/HeroSlider.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page relative flex min-h-[680px] items-end pb-24 pt-36 sm:min-h-[720px] sm:pb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-5 text-xs font-bold tracking-[0.18em] text-[#dec4a4] uppercase",
                            children: [
                                "Featured residence · ",
                                slide.neighborhood
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSlider.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "display-font text-5xl leading-[0.98] sm:text-6xl lg:text-7xl",
                            children: [
                                "A place that feels like ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "font-normal text-[#e5c59e]",
                                    children: "yours."
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSlider.tsx",
                                    lineNumber: 38,
                                    columnNumber: 112
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSlider.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-lg text-sm leading-7 text-white/80 sm:text-base",
                            children: slide.summary
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSlider.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/properties/${slide.slug}`,
                                    className: "bg-white px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-ink uppercase transition hover:bg-[#e9d2b3]",
                                    children: "Discover the home"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSlider.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/85",
                                    children: [
                                        slide.beds,
                                        " beds · ",
                                        slide.baths,
                                        " baths · ",
                                        slide.area.toLocaleString(),
                                        " sq ft"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSlider.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSlider.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSlider.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroSlider.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-4 z-10 flex items-center gap-4 sm:right-8 lg:right-[max(2rem,calc((100vw-1200px)/2))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive((active - 1 + slides.length) % slides.length),
                        className: "grid size-11 place-items-center border border-white/40 text-xl text-white transition hover:bg-white hover:text-ink",
                        "aria-label": "Previous featured property",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        "aria-label": "Choose featured property",
                        children: slides.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActive(index),
                                className: `h-1 transition-all ${index === active ? "w-8 bg-white" : "w-4 bg-white/45 hover:bg-white/80"}`,
                                "aria-label": `View ${item.title}`,
                                "aria-current": index === active
                            }, item.slug, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive((active + 1) % slides.length),
                        className: "grid size-11 place-items-center border border-white/40 text-xl text-white transition hover:bg-white hover:text-ink",
                        "aria-label": "Next featured property",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSlider.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroSlider.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/properties.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPrice",
    ()=>formatPrice,
    "getProperty",
    ()=>getProperty,
    "properties",
    ()=>properties
]);
const properties = [
    {
        slug: "marina-crest-villa",
        title: "Marina Crest Villa",
        location: "Palm Jumeirah, Dubai",
        neighborhood: "Palm Jumeirah",
        price: 4200000,
        type: "For sale",
        category: "Villa",
        beds: 5,
        baths: 6,
        area: 4820,
        year: 2024,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85"
        ],
        summary: "A waterfront sanctuary with sunset terraces and private beach access.",
        description: "Designed around the water, this contemporary villa pairs generous entertaining spaces with quietly refined private rooms. Floor-to-ceiling glazing opens the living spaces to the marina, while stone, oak, and linen lend a warm, lasting material palette.",
        features: [
            "Private beach access",
            "Infinity pool",
            "Chef's kitchen",
            "Three-car garage",
            "Smart home system",
            "24-hour security"
        ],
        coordinates: "25.1124° N, 55.1390° E",
        featured: true
    },
    {
        slug: "hillside-house",
        title: "Hillside House",
        location: "Al Barari, Dubai",
        neighborhood: "Al Barari",
        price: 2950000,
        type: "For sale",
        category: "House",
        beds: 4,
        baths: 5,
        area: 3650,
        year: 2023,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85"
        ],
        summary: "An architectural garden home defined by light, calm, and indoor-outdoor living.",
        description: "Tucked among mature planting, Hillside House is a calm counterpoint to the city. The open kitchen and living room flow to a shaded garden terrace, and each bedroom is arranged to capture greenery and soft morning light.",
        features: [
            "Landscaped garden",
            "Outdoor kitchen",
            "Home office",
            "Maids room",
            "Solar-ready roof",
            "Gated community"
        ],
        coordinates: "25.1035° N, 55.3080° E",
        featured: true
    },
    {
        slug: "skyline-residence",
        title: "Skyline Residence",
        location: "Downtown Dubai",
        neighborhood: "Downtown",
        price: 14500,
        type: "For rent",
        category: "Apartment",
        beds: 2,
        baths: 3,
        area: 1780,
        year: 2022,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85"
        ],
        summary: "A polished city apartment with uninterrupted Burj Khalifa views.",
        description: "Set high above Downtown, this fully furnished residence offers an elegant, turnkey city base. A refined neutral palette and oversized windows frame the skyline, while the building's resort-style amenities are moments from your door.",
        features: [
            "Fully furnished",
            "Gym and spa",
            "Valet parking",
            "Concierge",
            "Balcony",
            "Weekly housekeeping available"
        ],
        coordinates: "25.1973° N, 55.2742° E",
        featured: true
    },
    {
        slug: "desert-courtyard-estate",
        title: "Desert Courtyard Estate",
        location: "Arabian Ranches, Dubai",
        neighborhood: "Arabian Ranches",
        price: 3350000,
        type: "For sale",
        category: "Villa",
        beds: 6,
        baths: 7,
        area: 5340,
        year: 2021,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
        ],
        summary: "A family-scale desert retreat organised around a sunlit central courtyard.",
        description: "This expansive home combines generous family proportions with a resort-like garden. The central courtyard connects formal entertaining rooms, an open family kitchen, and a private guest wing with natural ease.",
        features: [
            "Central courtyard",
            "Pool and cabana",
            "Cinema room",
            "Golf course views",
            "Staff accommodation",
            "Double-height entry"
        ],
        coordinates: "25.0580° N, 55.2814° E"
    },
    {
        slug: "canal-loft",
        title: "Canal Loft",
        location: "Business Bay, Dubai",
        neighborhood: "Business Bay",
        price: 9800,
        type: "For rent",
        category: "Apartment",
        beds: 1,
        baths: 2,
        area: 1120,
        year: 2024,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
        ],
        summary: "A richly textured loft for an effortless work-and-weekend rhythm.",
        description: "Canal Loft has been considered down to its smallest detail: warm timber, tailored storage, a quiet home office nook, and a wide living room made for city evenings. The canal promenade is directly outside.",
        features: [
            "Canal views",
            "Co-working lounge",
            "Rooftop pool",
            "Pet-friendly",
            "Dedicated parking",
            "24-hour reception"
        ],
        coordinates: "25.1841° N, 55.2638° E"
    },
    {
        slug: "azure-penthouse",
        title: "Azure Penthouse",
        location: "Dubai Marina, Dubai",
        neighborhood: "Dubai Marina",
        price: 6800000,
        type: "For sale",
        category: "Penthouse",
        beds: 4,
        baths: 5,
        area: 4280,
        year: 2025,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=85"
        ],
        summary: "A top-floor escape with wraparound terraces and a full horizon of water.",
        description: "Azure Penthouse occupies an entire private floor, wrapped by broad terraces that follow the marina from sunrise through the evening. Inside, a gallery-like living room, statement kitchen, and separate family room make it as liveable as it is memorable.",
        features: [
            "Private lift lobby",
            "Wraparound terrace",
            "Wine room",
            "Four parking bays",
            "Private gym",
            "Panoramic marina views"
        ],
        coordinates: "25.0839° N, 55.1400° E",
        featured: true
    }
];
const formatPrice = (price, type)=>type === "For rent" ? `AED ${price.toLocaleString("en-US")}/mo` : `AED ${(price / 1000000).toFixed(price % 1000000 === 0 ? 0 : 1)}M`;
const getProperty = (slug)=>properties.find((property)=>property.slug === slug);
}),
];})()

//# sourceMappingURL=_0nbnc-6rzzmcb._.js.map