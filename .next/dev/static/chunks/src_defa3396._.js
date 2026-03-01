(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/home/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PREMIUM_EASE = [
    0.25,
    0.1,
    0.25,
    1
];
function fadeUp(delay) {
    return {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            ease: PREMIUM_EASE,
            delay
        }
    };
}
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "9d2df6bbef784def23ef433036f09bbe510104ef163e3341ebdbd0bfebca949b") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9d2df6bbef784def23ef433036f09bbe510104ef163e3341ebdbd0bfebca949b";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] !== shouldReduceMotion) {
        t0 = ({
            "Hero[motionProps]": (delay)=>shouldReduceMotion ? {
                    initial: {
                        opacity: 1,
                        y: 0
                    }
                } : fadeUp(delay)
        })["Hero[motionProps]"];
        $[1] = shouldReduceMotion;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const motionProps = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-[0.03]",
            style: {
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px"
            },
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== shouldReduceMotion) {
        t2 = shouldReduceMotion ? {
            width: 80
        } : {
            width: 0
        };
        $[4] = shouldReduceMotion;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            width: 80
        };
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== shouldReduceMotion) {
        t4 = shouldReduceMotion ? {
            duration: 0
        } : {
            duration: 0.8,
            ease: PREMIUM_EASE
        };
        $[7] = shouldReduceMotion;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t2 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
            className: "mx-auto mb-8 h-[2px] bg-accent-500",
            initial: t2,
            animate: t3,
            transition: t4,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== motionProps) {
        t6 = motionProps(0.2);
        $[12] = motionProps;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== shouldReduceMotion) {
        t7 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : fadeUp(0.2).animate;
        $[14] = shouldReduceMotion;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t6 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].p, {
            className: "mb-6 text-overline font-bold uppercase tracking-widest text-accent-500",
            ...t6,
            animate: t7,
            children: "St Katharine Rural Connect"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== motionProps) {
        t9 = motionProps(0.4);
        $[19] = motionProps;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== shouldReduceMotion) {
        t10 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : fadeUp(0.4).animate;
        $[21] = shouldReduceMotion;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].h1, {
            className: "mx-auto mb-6 max-w-4xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-display",
            ...t9,
            animate: t10,
            children: "Strengthening rural communities through support, connection, and care"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t9;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== motionProps) {
        t12 = motionProps(0.55);
        $[26] = motionProps;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== shouldReduceMotion) {
        t13 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : fadeUp(0.55).animate;
        $[28] = shouldReduceMotion;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t12 || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].p, {
            className: "mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-100",
            ...t12,
            animate: t13,
            children: "We serve farmers, offshore workers, families, and community members by creating accessible pathways to wellness, practical resources, and meaningful belonging."
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== motionProps) {
        t15 = motionProps(0.7);
        $[33] = motionProps;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== shouldReduceMotion) {
        t16 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : fadeUp(0.7).animate;
        $[35] = shouldReduceMotion;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    let t18;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact",
            className: "inline-flex rounded-md bg-accent-500 px-8 py-3 font-medium text-primary-950 transition-colors duration-300 hover:bg-accent-400",
            children: "Get in Touch"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/events",
            className: "inline-flex rounded-md border-2 border-white px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white/10",
            children: "See What's On"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t18;
    } else {
        t17 = $[37];
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t15 || $[40] !== t16) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
            className: "mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row",
            ...t15,
            animate: t16,
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[39] = t15;
        $[40] = t16;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== motionProps) {
        t20 = motionProps(0.85);
        $[42] = motionProps;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== shouldReduceMotion) {
        t21 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : fadeUp(0.85).animate;
        $[44] = shouldReduceMotion;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].phoneHref,
            className: "font-medium text-stone-100 underline decoration-stone-400 underline-offset-2 transition-colors duration-200 hover:text-accent-400 hover:decoration-accent-400",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].phone
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t20 || $[48] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].p, {
            className: "text-sm text-stone-300",
            ...t20,
            animate: t21,
            children: [
                "Need to talk now? Call",
                " ",
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[47] = t20;
        $[48] = t21;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== t11 || $[51] !== t14 || $[52] !== t19 || $[53] !== t23 || $[54] !== t5 || $[55] !== t8) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800",
                "aria-label": "Welcome to St Katharine Rural Connect",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-6xl px-4 py-24 text-center md:py-32 lg:py-40",
                        children: [
                            t5,
                            t8,
                            t11,
                            t14,
                            t19,
                            t23
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Hero.tsx",
                        lineNumber: 263,
                        columnNumber: 180
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Hero.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[50] = t11;
        $[51] = t14;
        $[52] = t19;
        $[53] = t23;
        $[54] = t5;
        $[55] = t8;
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    return t24;
}
_s(Hero, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/homepage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "impactStats",
    ()=>impactStats,
    "selfIdCards",
    ()=>selfIdCards,
    "servicePillars",
    ()=>servicePillars
]);
const servicePillars = [
    {
        id: "wellbeing",
        title: "Supporting Your Wellbeing",
        description: "Whether you're dealing with stress, loneliness, or just a difficult season, we're here to listen and help you find the right support.",
        icon: "Heart",
        slug: "supporting-your-wellbeing",
        color: "accent-500"
    },
    {
        id: "farm-life",
        title: "Supporting Farm Life",
        description: "Farming is more than a job -- it's a way of life. We offer practical support, peer connection, and help navigating the pressures of life on the land.",
        icon: "Wheat",
        slug: "supporting-farm-life",
        color: "accent-500"
    },
    {
        id: "work-away",
        title: "Supporting Those Who Work Away",
        description: "For offshore, rotational, and remote workers -- and the families who hold things together back home. We're here wherever you are.",
        icon: "Anchor",
        slug: "supporting-those-who-work-away",
        color: "accent-500"
    },
    {
        id: "community",
        title: "Strengthening Our Community",
        description: "Community doesn't just happen -- it takes people showing up. Join us for events, workshops, volunteering, and everything in between.",
        icon: "Users",
        slug: "strengthening-our-community",
        color: "accent-500"
    }
];
const selfIdCards = [
    {
        id: "farmer",
        label: "Farmer",
        description: "Find support tailored to life on the farm.",
        href: "/who-we-serve#farmers",
        icon: "Tractor"
    },
    {
        id: "offshore",
        label: "Offshore Worker",
        description: "Stay connected to support, wherever you're working.",
        href: "/who-we-serve#offshore",
        icon: "Ship"
    },
    {
        id: "family",
        label: "Family Member",
        description: "Support for those holding things together at home.",
        href: "/who-we-serve#families",
        icon: "Home"
    },
    {
        id: "community",
        label: "Community Member",
        description: "Get involved, connect, and be part of something good.",
        href: "/who-we-serve#community",
        icon: "HandHeart"
    }
];
const impactStats = [
    {
        id: "people-supported",
        value: 500,
        suffix: "+",
        label: "People Supported"
    },
    {
        id: "events-hosted",
        value: 50,
        suffix: "+",
        label: "Events Hosted"
    },
    {
        id: "community-partners",
        value: 20,
        suffix: "+",
        label: "Community Partners"
    },
    {
        id: "service-areas",
        value: 4,
        label: "Service Areas"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/GoldAccentLine.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoldAccentLine",
    ()=>GoldAccentLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function GoldAccentLine(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "9a8c7618e92be47010d97041b09c67b5e4b520037de7173304e0381a44bf17a8") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a8c7618e92be47010d97041b09c67b5e4b520037de7173304e0381a44bf17a8";
    }
    const { orientation: t1, width, thickness, className, animated: t2 } = t0;
    const orientation = t1 === undefined ? "horizontal" : t1;
    const animated = t2 === undefined ? false : t2;
    const isHorizontal = orientation === "horizontal";
    const defaultWidth = isHorizontal ? "w-full" : undefined;
    const defaultThickness = isHorizontal ? "h-[2px]" : "w-[2px]";
    const t3 = width ?? defaultWidth;
    const t4 = thickness ?? defaultThickness;
    let t5;
    if ($[1] !== animated || $[2] !== isHorizontal) {
        t5 = animated && isHorizontal && [
            "scale-x-0 origin-left",
            "transition-transform duration-400 ease-premium",
            "group-hover:scale-x-100"
        ];
        $[1] = animated;
        $[2] = isHorizontal;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] !== animated || $[5] !== isHorizontal) {
        t6 = animated && !isHorizontal && [
            "scale-y-0 origin-top",
            "transition-transform duration-400 ease-premium",
            "group-hover:scale-y-100"
        ];
        $[4] = animated;
        $[5] = isHorizontal;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== className || $[8] !== t3 || $[9] !== t4 || $[10] !== t5 || $[11] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-accent-500", t3, t4, t5, t6, className);
        $[7] = className;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/GoldAccentLine.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
}
_c = GoldAccentLine;
var _c;
__turbopack_context__.k.register(_c, "GoldAccentLine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/SelfIdCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelfIdCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tractor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tractor.js [app-client] (ecmascript) <export default as Tractor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ship.js [app-client] (ecmascript) <export default as Ship>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-heart.js [app-client] (ecmascript) <export default as HandHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$homepage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/homepage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GoldAccentLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/GoldAccentLine.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ICON_MAP = {
    Tractor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tractor$3e$__["Tractor"],
    Ship: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"],
    Home: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    HandHeart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__["HandHeart"]
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
function SelfIdCards() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "b1bf7fdffe879c2cf0b55e0274f23e084bd83934de7926939c7dd1cb8057cec2") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b1bf7fdffe879c2cf0b55e0274f23e084bd83934de7926939c7dd1cb8057cec2";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 text-overline font-bold uppercase tracking-widest text-accent-600",
                    children: "I Am A..."
                }, void 0, false, {
                    fileName: "[project]/src/components/home/SelfIdCards.tsx",
                    lineNumber: 41,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-heading text-4xl font-semibold text-text-primary",
                    children: "Find Support For You"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/SelfIdCards.tsx",
                    lineNumber: 41,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/SelfIdCards.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            margin: "-100px"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = shouldReduceMotion ? 0 : 0.12;
    let t3;
    if ($[3] !== t2) {
        t3 = {
            staggerChildren: t2
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== shouldReduceMotion) {
        t4 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$homepage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selfIdCards"].map({
            "SelfIdCards[selfIdCards.map()]": (card)=>{
                const Icon = ICON_MAP[card.icon];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                    variants: shouldReduceMotion ? {
                        hidden: {
                            opacity: 1,
                            y: 0
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    } : cardVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: card.href,
                        className: "group relative block overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GoldAccentLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoldAccentLine"], {
                                className: "absolute left-0 top-0",
                                animated: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/SelfIdCards.tsx",
                                lineNumber: 81,
                                columnNumber: 211
                            }, this),
                            Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-10 w-10 text-accent-500",
                                strokeWidth: 1.5,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/SelfIdCards.tsx",
                                lineNumber: 81,
                                columnNumber: 288
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-3 font-heading text-xl font-semibold text-text-primary",
                                children: card.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/SelfIdCards.tsx",
                                lineNumber: 81,
                                columnNumber: 372
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-text-muted",
                                children: card.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/SelfIdCards.tsx",
                                lineNumber: 81,
                                columnNumber: 463
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors duration-200 group-hover:text-accent-500",
                                children: [
                                    "Learn more",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/SelfIdCards.tsx",
                                        lineNumber: 81,
                                        columnNumber: 688
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/SelfIdCards.tsx",
                                lineNumber: 81,
                                columnNumber: 529
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/SelfIdCards.tsx",
                        lineNumber: 81,
                        columnNumber: 27
                    }, this)
                }, card.id, false, {
                    fileName: "[project]/src/components/home/SelfIdCards.tsx",
                    lineNumber: 72,
                    columnNumber: 16
                }, this);
            }
        }["SelfIdCards[selfIdCards.map()]"]);
        $[5] = shouldReduceMotion;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-stone-100 py-16 md:py-24",
            "aria-label": "Find support for you",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                        className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: t1,
                        transition: t3,
                        children: t4
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/SelfIdCards.tsx",
                        lineNumber: 91,
                        columnNumber: 137
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/SelfIdCards.tsx",
                lineNumber: 91,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/SelfIdCards.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(SelfIdCards, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = SelfIdCards;
var _c;
__turbopack_context__.k.register(_c, "SelfIdCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ServicePillars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicePillars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wheat.js [app-client] (ecmascript) <export default as Wheat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$homepage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/homepage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GoldAccentLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/GoldAccentLine.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ICON_MAP = {
    Heart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    Wheat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__["Wheat"],
    Anchor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"],
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
function ServicePillars() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "19df8a125f776943f462469857a6145e935c0b07d9efc0cdd71798db0679a616") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19df8a125f776943f462469857a6145e935c0b07d9efc0cdd71798db0679a616";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 text-overline font-bold uppercase tracking-widest text-accent-600",
                    children: "Our Services"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ServicePillars.tsx",
                    lineNumber: 41,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 font-heading text-4xl font-semibold text-text-primary",
                    children: "Four Pillars of Support"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ServicePillars.tsx",
                    lineNumber: 41,
                    columnNumber: 147
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto max-w-2xl text-text-muted",
                    children: "Whether you need someone to talk to, practical help on the farm, or a place to feel part of something -- we're here for you."
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ServicePillars.tsx",
                    lineNumber: 41,
                    columnNumber: 250
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/ServicePillars.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            margin: "-100px"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = shouldReduceMotion ? 0 : 0.12;
    let t3;
    if ($[3] !== t2) {
        t3 = {
            staggerChildren: t2
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== shouldReduceMotion) {
        t4 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$homepage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicePillars"].map({
            "ServicePillars[servicePillars.map()]": (pillar)=>{
                const Icon = ICON_MAP[pillar.icon];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                    variants: shouldReduceMotion ? {
                        hidden: {
                            opacity: 1,
                            y: 0
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    } : cardVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/services/${pillar.slug}`,
                        className: "group relative block overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GoldAccentLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoldAccentLine"], {
                                className: "absolute left-0 top-0",
                                animated: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ServicePillars.tsx",
                                lineNumber: 81,
                                columnNumber: 228
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-primary-700",
                                children: Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-6 w-6",
                                    strokeWidth: 1.5,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ServicePillars.tsx",
                                    lineNumber: 81,
                                    columnNumber: 408
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ServicePillars.tsx",
                                lineNumber: 81,
                                columnNumber: 296
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-4 font-heading text-2xl font-semibold text-text-primary",
                                children: pillar.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ServicePillars.tsx",
                                lineNumber: 81,
                                columnNumber: 480
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 line-clamp-3 text-base text-text-body",
                                children: pillar.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ServicePillars.tsx",
                                lineNumber: 81,
                                columnNumber: 574
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors duration-200 group-hover:text-accent-500",
                                children: [
                                    "Learn more",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ServicePillars.tsx",
                                        lineNumber: 81,
                                        columnNumber: 815
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ServicePillars.tsx",
                                lineNumber: 81,
                                columnNumber: 656
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ServicePillars.tsx",
                        lineNumber: 81,
                        columnNumber: 27
                    }, this)
                }, pillar.id, false, {
                    fileName: "[project]/src/components/home/ServicePillars.tsx",
                    lineNumber: 72,
                    columnNumber: 16
                }, this);
            }
        }["ServicePillars[servicePillars.map()]"]);
        $[5] = shouldReduceMotion;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-stone-50 py-16 md:py-24",
            "aria-label": "Our services",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                        className: "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: t1,
                        transition: t3,
                        children: t4
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ServicePillars.tsx",
                        lineNumber: 91,
                        columnNumber: 128
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ServicePillars.tsx",
                lineNumber: 91,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/ServicePillars.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(ServicePillars, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ServicePillars;
var _c;
__turbopack_context__.k.register(_c, "ServicePillars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ImpactStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpactStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$homepage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/homepage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AnimatedCounter(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "14349952371a0bafc6878b636b65a0d40449973c87437d1f1545b54fb637faaf") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14349952371a0bafc6878b636b65a0d40449973c87437d1f1545b54fb637faaf";
    }
    const { value, suffix: t1, duration: t2 } = t0;
    const suffix = t1 === undefined ? "" : t1;
    const duration = t2 === undefined ? 2 : t2;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t3);
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rounded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(motionValue, _AnimatedCounterUseTransform);
    let t4;
    let t5;
    if ($[2] !== duration || $[3] !== inView || $[4] !== motionValue || $[5] !== shouldReduceMotion || $[6] !== suffix || $[7] !== value) {
        t4 = ({
            "AnimatedCounter[useEffect()]": ()=>{
                if (shouldReduceMotion) {
                    if (ref.current) {
                        ref.current.textContent = `${value}${suffix}`;
                    }
                    return;
                }
                if (inView) {
                    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(motionValue, value, {
                        duration,
                        ease: "easeOut"
                    });
                    return controls.stop;
                }
            }
        })["AnimatedCounter[useEffect()]"];
        t5 = [
            inView,
            value,
            duration,
            motionValue,
            shouldReduceMotion,
            suffix
        ];
        $[2] = duration;
        $[3] = inView;
        $[4] = motionValue;
        $[5] = shouldReduceMotion;
        $[6] = suffix;
        $[7] = value;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[10] !== rounded || $[11] !== shouldReduceMotion || $[12] !== suffix) {
        t6 = ({
            "AnimatedCounter[useEffect()]": ()=>{
                if (shouldReduceMotion) {
                    return;
                }
                const unsubscribe = rounded.on("change", {
                    "AnimatedCounter[useEffect() > rounded.on()]": (v_0)=>{
                        if (ref.current) {
                            ref.current.textContent = `${v_0}${suffix}`;
                        }
                    }
                }["AnimatedCounter[useEffect() > rounded.on()]"]);
                return unsubscribe;
            }
        })["AnimatedCounter[useEffect()]"];
        t7 = [
            rounded,
            suffix,
            shouldReduceMotion
        ];
        $[10] = rounded;
        $[11] = shouldReduceMotion;
        $[12] = suffix;
        $[13] = t6;
        $[14] = t7;
    } else {
        t6 = $[13];
        t7 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const t8 = shouldReduceMotion ? `${value}${suffix}` : `0${suffix}`;
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: ref,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/home/ImpactStats.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    return t9;
}
_s(AnimatedCounter, "UHipaL8TjP2FztcG3Jzzq9s/I64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AnimatedCounter;
function _AnimatedCounterUseTransform(v) {
    return Math.round(v);
}
function ImpactStats() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "14349952371a0bafc6878b636b65a0d40449973c87437d1f1545b54fb637faaf") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14349952371a0bafc6878b636b65a0d40449973c87437d1f1545b54fb637faaf";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] !== shouldReduceMotion) {
        t0 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 20
        };
        $[1] = shouldReduceMotion;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            once: true,
            margin: "-100px"
        };
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    let t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            duration: 0.6,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-4 text-overline font-bold uppercase tracking-widest text-accent-500",
            children: "Our Impact"
        }, void 0, false, {
            fileName: "[project]/src/components/home/ImpactStats.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto h-[1px] w-[60px] bg-accent-500 opacity-60",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/home/ImpactStats.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t0) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
            className: "mb-10 text-center",
            initial: t0,
            whileInView: t1,
            viewport: t2,
            transition: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/ImpactStats.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[8] = t0;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$homepage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["impactStats"].map(_ImpactStatsImpactStatsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/home/ImpactStats.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-primary-900 py-16 md:py-24",
            "aria-label": "Our impact in numbers",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ImpactStats.tsx",
                lineNumber: 189,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/ImpactStats.tsx",
            lineNumber: 189,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    return t8;
}
_s1(ImpactStats, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = ImpactStats;
function _ImpactStatsImpactStatsMap(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `text-center ${index < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$homepage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["impactStats"].length - 1 ? "md:border-r md:border-primary-700" : ""}`,
        role: "figure",
        "aria-label": `${stat.value}${stat.suffix ?? ""} ${stat.label}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-heading text-5xl font-light text-white md:text-display",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                    value: stat.value,
                    suffix: stat.suffix,
                    duration: 2
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ImpactStats.tsx",
                    lineNumber: 198,
                    columnNumber: 284
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/ImpactStats.tsx",
                lineNumber: 198,
                columnNumber: 209
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-base text-stone-300",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/components/home/ImpactStats.tsx",
                lineNumber: 198,
                columnNumber: 360
            }, this)
        ]
    }, stat.id, true, {
        fileName: "[project]/src/components/home/ImpactStats.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "ImpactStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/testimonials.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testimonials",
    ()=>testimonials
]);
const testimonials = [
    {
        id: "testi-farmer",
        quote: "Running a farm can be overwhelming, especially when everything feels like it depends on you. St Katharine Rural Connect gave us more than information -- they gave us support we could actually use, and people who understood the pressures we were under. It made us feel less alone.",
        firstName: "James",
        identifier: "dairy farmer near Huntly",
        segment: "farmer"
    },
    {
        id: "testi-offshore",
        quote: "When you work away for long periods, it can feel like you're disconnected from everything at home. Having access to support that understood our lifestyle made a real difference for me and my family. It reminded us that we still had a community behind us.",
        firstName: "Craig",
        identifier: "offshore engineer, North Sea",
        segment: "offshore-worker"
    },
    {
        id: "testi-community",
        quote: "The events and programs have created a stronger sense of connection in our area. People are meeting, talking, and supporting one another in ways that weren't happening before. It feels like something positive and lasting is being built.",
        firstName: "Helen",
        identifier: "community member, rural Aberdeenshire",
        segment: "community"
    },
    {
        id: "testi-family",
        quote: "As the spouse of a rotational worker, I often felt like I was carrying things on my own. Through St Katharine Rural Connect, I found resources, encouragement, and people who truly understood the strain that comes with this kind of life.",
        firstName: "Laura",
        identifier: "spouse of an offshore worker",
        segment: "family"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/FeaturedTestimonial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedTestimonial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/testimonials.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PREMIUM_EASE = [
    0.25,
    0.1,
    0.25,
    1
];
function FeaturedTestimonial(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "b236ea2bc5e5b64dd96ee277ef6b34ec2dce941ec666ebf2478c739f10d0c765") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b236ea2bc5e5b64dd96ee277ef6b34ec2dce941ec666ebf2478c739f10d0c765";
    }
    const { index: t1 } = t0;
    const index = t1 === undefined ? 0 : t1;
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const testimonial = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"][index];
    if (!testimonial) {
        return null;
    }
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 1,
            y: 0,
            scale: 1
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const noMotion = t2;
    let t3;
    if ($[2] !== shouldReduceMotion) {
        t3 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 20
        };
        $[2] = shouldReduceMotion;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            once: true,
            margin: "-100px"
        };
        t6 = {
            duration: 0.6,
            ease: PREMIUM_EASE
        };
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    let t8;
    if ($[7] !== shouldReduceMotion) {
        t7 = shouldReduceMotion ? noMotion : {
            opacity: 0,
            scale: 0.8
        };
        t8 = shouldReduceMotion ? noMotion : {
            opacity: 0.3,
            scale: 1
        };
        $[7] = shouldReduceMotion;
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            once: true,
            margin: "-100px"
        };
        t10 = {
            duration: 0.6,
            ease: PREMIUM_EASE
        };
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] !== t7 || $[13] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
            className: "mb-6 select-none font-heading text-[6rem] leading-none text-accent-500 opacity-30 md:text-[8rem]",
            initial: t7,
            whileInView: t8,
            viewport: t9,
            transition: t10,
            "aria-hidden": "true",
            children: "“"
        }, void 0, false, {
            fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[12] = t7;
        $[13] = t8;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== shouldReduceMotion) {
        t12 = shouldReduceMotion ? noMotion : {
            opacity: 0,
            y: 20
        };
        $[15] = shouldReduceMotion;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            opacity: 1,
            y: 0
        };
        t14 = {
            once: true,
            margin: "-100px"
        };
        $[17] = t13;
        $[18] = t14;
    } else {
        t13 = $[17];
        t14 = $[18];
    }
    const t15 = shouldReduceMotion ? 0 : 0.2;
    let t16;
    if ($[19] !== t15) {
        t16 = {
            duration: 0.6,
            ease: PREMIUM_EASE,
            delay: t15
        };
        $[19] = t15;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] !== t12 || $[22] !== t16 || $[23] !== testimonial.quote) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].p, {
            className: "mx-auto max-w-prose font-heading text-2xl font-normal italic leading-relaxed text-text-primary md:text-3xl",
            initial: t12,
            whileInView: t13,
            viewport: t14,
            transition: t16,
            children: testimonial.quote
        }, void 0, false, {
            fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t16;
        $[23] = testimonial.quote;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== shouldReduceMotion) {
        t18 = shouldReduceMotion ? noMotion : {
            opacity: 0,
            y: 20
        };
        $[25] = shouldReduceMotion;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    let t20;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            opacity: 1,
            y: 0
        };
        t20 = {
            once: true,
            margin: "-100px"
        };
        $[27] = t19;
        $[28] = t20;
    } else {
        t19 = $[27];
        t20 = $[28];
    }
    const t21 = shouldReduceMotion ? 0 : 0.4;
    let t22;
    if ($[29] !== t21) {
        t22 = {
            duration: 0.6,
            ease: PREMIUM_EASE,
            delay: t21
        };
        $[29] = t21;
        $[30] = t22;
    } else {
        t22 = $[30];
    }
    let t23;
    if ($[31] !== testimonial.firstName || $[32] !== testimonial.identifier) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
            className: "not-italic text-base text-text-muted",
            children: [
                "— ",
                testimonial.firstName,
                ", ",
                testimonial.identifier
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[31] = testimonial.firstName;
        $[32] = testimonial.identifier;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mt-6 h-[1px] w-10 bg-accent-500",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    if ($[35] !== t18 || $[36] !== t22 || $[37] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].footer, {
            className: "mt-6",
            initial: t18,
            whileInView: t19,
            viewport: t20,
            transition: t22,
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[35] = t18;
        $[36] = t22;
        $[37] = t23;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== t17 || $[40] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
            className: "-mt-16 md:-mt-20",
            children: [
                t17,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[39] = t17;
        $[40] = t25;
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    let t27;
    if ($[42] !== t11 || $[43] !== t26 || $[44] !== t3) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-stone-100 py-16 md:py-24",
            "aria-label": "Testimonial",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                className: "mx-auto max-w-4xl px-4 text-center",
                initial: t3,
                whileInView: t4,
                viewport: t5,
                transition: t6,
                children: [
                    t11,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
                lineNumber: 250,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/FeaturedTestimonial.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[42] = t11;
        $[43] = t26;
        $[44] = t3;
        $[45] = t27;
    } else {
        t27 = $[45];
    }
    return t27;
}
_s(FeaturedTestimonial, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = FeaturedTestimonial;
var _c;
__turbopack_context__.k.register(_c, "FeaturedTestimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "events",
    ()=>events
]);
const events = [
    {
        slug: "farm-wellbeing-workshop",
        title: "Farm Wellbeing Workshop",
        description: "Join us for a morning focused on wellbeing for those working the land. We'll share practical tools for managing stress during the busy season, with tea, coffee, and plenty of time to connect with fellow farmers. No pressure, just honest conversation.",
        date: "2026-04-12",
        time: "10:00 AM",
        endTime: "12:30 PM",
        location: "Huntly Community Centre",
        audience: [
            "farmers"
        ],
        type: "workshop",
        format: "in-person",
        featured: true
    },
    {
        slug: "offshore-peer-support",
        title: "Offshore Workers Peer Support Circle",
        description: "Whether you're at home between rotations or connecting from offshore, this monthly peer support circle is a space to share experiences with people who understand the unique pressures of rotational work. Available both in person and online.",
        date: "2026-04-19",
        time: "7:00 PM",
        endTime: "8:30 PM",
        location: "Online + Inverurie Library",
        audience: [
            "offshore"
        ],
        type: "support",
        format: "hybrid",
        featured: true
    },
    {
        slug: "spring-community-gathering",
        title: "Spring Community Gathering",
        description: "A relaxed afternoon for the whole community. Bring the family for live music, local food stalls, and a chance to meet your neighbours. It's about building connections and enjoying the start of spring together.",
        date: "2026-04-26",
        time: "2:00 PM",
        endTime: "5:00 PM",
        location: "Turriff Recreation Ground",
        audience: [
            "community",
            "farmers",
            "families"
        ],
        type: "social",
        format: "in-person"
    },
    {
        slug: "family-resilience-workshop",
        title: "Family Resilience Workshop",
        description: "This virtual workshop explores practical strategies for families navigating the challenges of having a loved one who works away. We'll cover communication tools, routine building, and supporting children through periods of separation.",
        date: "2026-05-03",
        time: "6:30 PM",
        endTime: "8:00 PM",
        location: "Online (Zoom)",
        audience: [
            "families"
        ],
        type: "workshop",
        format: "virtual"
    },
    {
        slug: "countryside-volunteer-day",
        title: "Countryside Volunteer Day",
        description: "Roll up your sleeves and help maintain the trails that connect our rural communities. Tools and refreshments provided. A wonderful way to get outdoors, meet new folk, and give something back to the landscape we all share.",
        date: "2026-05-10",
        time: "9:00 AM",
        endTime: "1:00 PM",
        location: "Bennachie Forest Trails",
        audience: [
            "community"
        ],
        type: "volunteer",
        format: "in-person"
    },
    {
        slug: "managing-farm-finances",
        title: "Managing Farm Finances",
        description: "Join us for a practical session on farm financial planning, including access to grants, budgeting during uncertain seasons, and connecting with specialist advisors. Bring your questions -- this is a judgement-free zone.",
        date: "2026-05-17",
        time: "10:00 AM",
        endTime: "1:00 PM",
        location: "Oldmeldrum Town Hall",
        audience: [
            "farmers"
        ],
        type: "workshop",
        format: "in-person"
    },
    {
        slug: "rotational-family-support",
        title: "Rotational Worker Family Support Evening",
        description: "An evening for families of offshore and rotational workers to connect, share experiences, and access support. Whether your partner is currently away or you're preparing for the next rotation, you're welcome here.",
        date: "2026-05-24",
        time: "6:00 PM",
        endTime: "7:30 PM",
        location: "Peterhead Community Centre",
        audience: [
            "offshore",
            "families"
        ],
        type: "support",
        format: "in-person"
    },
    {
        slug: "rural-skills-swap",
        title: "Rural Skills Swap",
        description: "Bring a skill, learn a skill. From fencing and dry-stone walling to baking and basic mechanics, this is a day for sharing knowledge across generations. All abilities welcome -- the only requirement is curiosity.",
        date: "2026-06-07",
        time: "11:00 AM",
        endTime: "3:00 PM",
        location: "Alford Heritage Centre",
        audience: [
            "community",
            "farmers"
        ],
        type: "social",
        format: "in-person"
    },
    {
        slug: "stress-burnout-recovery",
        title: "Stress and Burnout Recovery",
        description: "A confidential virtual session for anyone experiencing the weight of sustained pressure. Led by a trained facilitator, we'll explore recognising burnout, practical recovery steps, and when to seek additional support. You don't need to be in crisis to attend.",
        date: "2026-06-14",
        time: "7:00 PM",
        endTime: "8:30 PM",
        location: "Online (Zoom)",
        audience: [
            "farmers",
            "offshore"
        ],
        type: "support",
        format: "virtual",
        featured: true
    },
    {
        slug: "community-garden-volunteer",
        title: "Community Garden Volunteer Morning",
        description: "Help us plant and maintain the community garden that provides fresh produce for local families. A brilliant morning out for adults and children alike. No gardening experience needed -- just enthusiasm and wellies.",
        date: "2026-06-21",
        time: "10:00 AM",
        endTime: "12:00 PM",
        location: "St Katharine Community Garden",
        audience: [
            "community",
            "families"
        ],
        type: "volunteer",
        format: "in-person"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/EventsPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/events.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
const FORMAT_STYLES = {
    "in-person": "bg-accent-100 text-accent-600",
    virtual: "bg-secondary-100 text-primary-700",
    hybrid: "bg-stone-200 text-text-body"
};
function formatEventDate(dateStr) {
    const date = new Date(dateStr + "T00:00:00");
    const day = new Intl.DateTimeFormat("en-GB", {
        day: "numeric"
    }).format(date);
    const month = new Intl.DateTimeFormat("en-GB", {
        month: "short"
    }).format(date);
    return {
        day,
        month: month.toUpperCase()
    };
}
function formatLabel(format) {
    const labels = {
        "in-person": "In Person",
        virtual: "Virtual",
        hybrid: "Hybrid"
    };
    return labels[format];
}
function EventsPreview() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "d40523a54a0fa8fe0ca9fca1f0324f617b39a00bd31c402b51befa4cfab00715") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d40523a54a0fa8fe0ca9fca1f0324f617b39a00bd31c402b51befa4cfab00715";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let T0;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== shouldReduceMotion) {
        const upcomingEvents = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["events"]
        ].sort(_EventsPreviewAnonymous).slice(0, 3);
        t8 = "bg-stone-50 py-16 md:py-24";
        t9 = "Upcoming events";
        t6 = "mx-auto max-w-6xl px-4";
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-overline font-bold uppercase tracking-widest text-accent-600",
                        children: "Upcoming Events"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                        lineNumber: 75,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 font-heading text-4xl font-semibold text-text-primary",
                        children: "What's Coming Up"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                        lineNumber: 75,
                        columnNumber: 152
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-muted",
                        children: "Join us at our upcoming events and workshops."
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                        lineNumber: 75,
                        columnNumber: 248
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/EventsPreview.tsx",
                lineNumber: 75,
                columnNumber: 12
            }, this);
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div;
        t0 = "grid grid-cols-1 gap-6 md:grid-cols-3";
        t1 = "hidden";
        t2 = "visible";
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = {
                once: true,
                margin: "-100px"
            };
            $[14] = t3;
        } else {
            t3 = $[14];
        }
        const t10 = shouldReduceMotion ? 0 : 0.12;
        if ($[15] !== t10) {
            t4 = {
                staggerChildren: t10
            };
            $[15] = t10;
            $[16] = t4;
        } else {
            t4 = $[16];
        }
        t5 = upcomingEvents.map({
            "EventsPreview[upcomingEvents.map()]": (event)=>{
                const { day, month } = formatEventDate(event.date);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                    variants: shouldReduceMotion ? {
                        hidden: {
                            opacity: 1,
                            y: 0
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    } : cardVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/events/${event.slug}`,
                        className: "group block overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-primary-800 p-4 text-center text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-heading text-3xl font-bold",
                                        children: day
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 271
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm uppercase tracking-wide",
                                        children: month
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 327
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/EventsPreview.tsx",
                                lineNumber: 118,
                                columnNumber: 212
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block rounded-full px-3 py-1 text-xs font-medium ${FORMAT_STYLES[event.format]}`,
                                        children: formatLabel(event.format)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 412
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-3 font-heading text-xl font-semibold text-text-primary",
                                        children: event.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 553
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-1.5 text-sm text-text-muted",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-3.5 w-3.5 shrink-0",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 742
                                                    }, this),
                                                    event.time,
                                                    event.endTime && ` – ${event.endTime}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/EventsPreview.tsx",
                                                lineNumber: 118,
                                                columnNumber: 677
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-1.5 text-sm text-text-muted",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "h-3.5 w-3.5 shrink-0",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 924
                                                    }, this),
                                                    event.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/EventsPreview.tsx",
                                                lineNumber: 118,
                                                columnNumber: 859
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 645
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/EventsPreview.tsx",
                                lineNumber: 118,
                                columnNumber: 391
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                        lineNumber: 118,
                        columnNumber: 27
                    }, this)
                }, event.slug, false, {
                    fileName: "[project]/src/components/home/EventsPreview.tsx",
                    lineNumber: 109,
                    columnNumber: 16
                }, this);
            }
        }["EventsPreview[upcomingEvents.map()]"]);
        $[1] = shouldReduceMotion;
        $[2] = T0;
        $[3] = t0;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        T0 = $[2];
        t0 = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[17] !== T0 || $[18] !== t0 || $[19] !== t1 || $[20] !== t2 || $[21] !== t3 || $[22] !== t4 || $[23] !== t5) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t0,
            initial: t1,
            whileInView: t2,
            viewport: t3,
            transition: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/home/EventsPreview.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[17] = T0;
        $[18] = t0;
        $[19] = t1;
        $[20] = t2;
        $[21] = t3;
        $[22] = t4;
        $[23] = t5;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/events",
                className: "group inline-flex items-center gap-1.5 font-medium text-accent-600 transition-colors duration-200 hover:text-accent-500",
                children: [
                    "View All Events",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/EventsPreview.tsx",
                        lineNumber: 162,
                        columnNumber: 214
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/EventsPreview.tsx",
                lineNumber: 162,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/EventsPreview.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t6 || $[28] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/EventsPreview.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t6;
        $[28] = t7;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== t12 || $[31] !== t8 || $[32] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t8,
            "aria-label": t9,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/home/EventsPreview.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t8;
        $[32] = t9;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    return t13;
}
_s(EventsPreview, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = EventsPreview;
function _EventsPreviewAnonymous(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
}
var _c;
__turbopack_context__.k.register(_c, "EventsPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/GetInvolved.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GetInvolved
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$helping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHelping$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-helping.js [app-client] (ecmascript) <export default as HandHelping>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GoldAccentLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/GoldAccentLine.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const engagementCards = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$helping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHelping$3e$__["HandHelping"],
        title: "Volunteer With Us",
        description: "Give your time and skills to help strengthen your community. From events to mentoring, there's a role for everyone.",
        ctaText: "Find Out How",
        ctaHref: "/get-involved",
        ctaVariant: "secondary"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
        title: "Become a Partner",
        description: "Join a network of organisations committed to rural wellbeing. Together, we can reach more people and make a bigger impact.",
        ctaText: "Partner With Us",
        ctaHref: "/partnerships",
        ctaVariant: "secondary"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        title: "Support Our Work",
        description: "Your donation helps us keep services free and accessible for everyone who needs them. Every contribution counts.",
        ctaText: "Donate Today",
        ctaHref: "/contact",
        ctaVariant: "primary"
    }
];
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
function GetInvolved() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "0b99230c15a573d426ad807b6790803f9c37e96f4feb66346ba125df8b8344d2") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b99230c15a573d426ad807b6790803f9c37e96f4feb66346ba125df8b8344d2";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 text-overline font-bold uppercase tracking-widest text-accent-600",
                    children: "Get Involved"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/GetInvolved.tsx",
                    lineNumber: 64,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 font-heading text-4xl font-semibold text-text-primary",
                    children: "Be Part of Something Meaningful"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/GetInvolved.tsx",
                    lineNumber: 64,
                    columnNumber: 147
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto max-w-2xl text-text-muted",
                    children: "There are many ways to support rural communities — and every contribution makes a difference."
                }, void 0, false, {
                    fileName: "[project]/src/components/home/GetInvolved.tsx",
                    lineNumber: 64,
                    columnNumber: 258
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/GetInvolved.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            margin: "-100px"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = shouldReduceMotion ? 0 : 0.12;
    let t3;
    if ($[3] !== t2) {
        t3 = {
            staggerChildren: t2
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== shouldReduceMotion) {
        t4 = engagementCards.map({
            "GetInvolved[engagementCards.map()]": (card)=>{
                const Icon = card.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                    className: "group relative overflow-hidden rounded-lg bg-white p-8 text-center shadow-sm transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-md",
                    variants: shouldReduceMotion ? {
                        hidden: {
                            opacity: 1,
                            y: 0
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    } : cardVariants,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GoldAccentLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoldAccentLine"], {
                            className: "absolute left-0 top-0",
                            animated: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/GetInvolved.tsx",
                            lineNumber: 104,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-primary-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-7 w-7",
                                strokeWidth: 1.5,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/GetInvolved.tsx",
                                lineNumber: 104,
                                columnNumber: 206
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/GetInvolved.tsx",
                            lineNumber: 104,
                            columnNumber: 95
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-4 font-heading text-2xl font-semibold text-text-primary",
                            children: card.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/GetInvolved.tsx",
                            lineNumber: 104,
                            columnNumber: 277
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-base text-text-body",
                            children: card.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/GetInvolved.tsx",
                            lineNumber: 104,
                            columnNumber: 369
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: card.ctaHref,
                            className: `mt-6 inline-block rounded-md px-6 py-2.5 font-medium transition-colors duration-300 ${card.ctaVariant === "primary" ? "bg-accent-500 text-primary-950 hover:bg-accent-400" : "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"}`,
                            children: card.ctaText
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/GetInvolved.tsx",
                            lineNumber: 104,
                            columnNumber: 436
                        }, this)
                    ]
                }, card.title, true, {
                    fileName: "[project]/src/components/home/GetInvolved.tsx",
                    lineNumber: 95,
                    columnNumber: 16
                }, this);
            }
        }["GetInvolved[engagementCards.map()]"]);
        $[5] = shouldReduceMotion;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-stone-100 py-16 md:py-24",
            "aria-label": "Get involved",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                        className: "grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: t1,
                        transition: t3,
                        children: t4
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/GetInvolved.tsx",
                        lineNumber: 114,
                        columnNumber: 129
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/GetInvolved.tsx",
                lineNumber: 114,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/GetInvolved.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(GetInvolved, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = GetInvolved;
var _c;
__turbopack_context__.k.register(_c, "GetInvolved");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/Newsletter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Newsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function Newsletter() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "9d9f883008984dc78673611f6612bffb7a90e91908f3732de7090dd8f76f5d62") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9d9f883008984dc78673611f6612bffb7a90e91908f3732de7090dd8f76f5d62";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const honeypotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] !== email) {
        t0 = function handleSubmit(e) {
            e.preventDefault();
            if (honeypotRef.current?.value) {
                setStatus("success");
                setEmail("");
                return;
            }
            if (!email || !isValidEmail(email)) {
                setStatus("error");
                return;
            }
            setStatus("success");
            setEmail("");
        };
        $[1] = email;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleSubmit = t0;
    let t1;
    if ($[3] !== shouldReduceMotion) {
        t1 = shouldReduceMotion ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 20
        };
        $[3] = shouldReduceMotion;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            once: true,
            margin: "-100px"
        };
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    let t4;
    let t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            duration: 0.6,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-4 font-heading text-4xl font-semibold text-text-primary",
            children: "Stay in the Loop"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-8 text-text-muted",
            children: "Get updates on events, workshops, and community news delivered to your inbox. No spam, just the good stuff."
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "newsletter-email",
            className: "sr-only",
            children: "Email address"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== status) {
        t8 = ({
            "Newsletter[<input>.onChange]": (e_0)=>{
                setEmail(e_0.target.value);
                if (status !== "idle") {
                    setStatus("idle");
                }
            }
        })["Newsletter[<input>.onChange]"];
        $[11] = status;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== email || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "newsletter-email",
            type: "email",
            required: true,
            placeholder: "Your email address",
            autoComplete: "email",
            value: email,
            onChange: t8,
            className: "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-base text-text-body placeholder:text-text-muted focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 sm:rounded-l-lg sm:rounded-r-none"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[13] = email;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: honeypotRef,
            type: "text",
            name: "website",
            className: "hidden",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-3 rounded-lg bg-accent-500 px-8 py-3 font-medium text-primary-950 transition-colors duration-300 hover:bg-accent-400 sm:mt-0 sm:rounded-l-none sm:rounded-r-lg",
            children: "Subscribe"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
    } else {
        t10 = $[16];
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row",
            children: [
                t7,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[18] = t9;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== status) {
        t13 = status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-success",
            children: "Thanks for subscribing! We'll be in touch."
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 144,
            columnNumber: 35
        }, this);
        $[20] = status;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== status) {
        t14 = status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-error",
            children: "Please enter a valid email address."
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 152,
            columnNumber: 33
        }, this);
        $[22] = status;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== t13 || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-live": "polite",
            className: "mt-4 min-h-[1.5rem]",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== handleSubmit || $[28] !== t12 || $[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            "aria-label": "Newsletter signup",
            className: "mx-auto max-w-lg",
            children: [
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[27] = handleSubmit;
        $[28] = t12;
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== t1 || $[32] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-stone-50 py-16 md:py-24",
            "aria-label": "Newsletter signup",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                className: "mx-auto max-w-2xl px-4 text-center",
                initial: t1,
                whileInView: t2,
                viewport: t3,
                transition: t4,
                children: [
                    t5,
                    t6,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Newsletter.tsx",
                lineNumber: 179,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Newsletter.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[31] = t1;
        $[32] = t16;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    return t17;
}
_s(Newsletter, "+WgIRDiILzVeQPnOgblDslLinh0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Newsletter;
var _c;
__turbopack_context__.k.register(_c, "Newsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/partners.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "partners",
    ()=>partners,
    "partnershipApproach",
    ()=>partnershipApproach
]);
const partners = [
    {
        id: "partner-1",
        name: "RSABI",
        logoUrl: "/images/partners/rsabi.svg",
        description: "Royal Scottish Agricultural Benevolent Institution",
        url: "https://rsabi.org.uk"
    },
    {
        id: "partner-2",
        name: "Farming Community Network",
        logoUrl: "/images/partners/fcn.svg",
        description: "Supporting farming families across the UK"
    },
    {
        id: "partner-3",
        name: "NHS Grampian",
        logoUrl: "/images/partners/nhs-grampian.svg",
        description: "Regional health services"
    },
    {
        id: "partner-4",
        name: "Aberdeenshire Council",
        logoUrl: "/images/partners/aberdeenshire.svg",
        description: "Local government services and community support"
    },
    {
        id: "partner-5",
        name: "SAMH",
        logoUrl: "/images/partners/samh.svg",
        description: "Scottish Association for Mental Health"
    },
    {
        id: "partner-6",
        name: "Rural Support NI",
        logoUrl: "/images/partners/rural-support.svg",
        description: "Supporting rural communities in Northern Ireland"
    }
];
const partnershipApproach = [
    "Community organisations, agricultural networks, and mental health providers",
    "Local service agencies, municipalities, and faith communities",
    "Education and training partners, and businesses committed to rural wellbeing"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/PartnerLogos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartnerLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/partners.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PartnerLogos() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "f7bcc7c279ea7f4286b81984a78f9e08f129c3cbaad0972e7c6ace8d80e8446e") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7bcc7c279ea7f4286b81984a78f9e08f129c3cbaad0972e7c6ace8d80e8446e";
    }
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mb-10 h-[1px] max-w-4xl bg-accent-500 opacity-20",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/home/PartnerLogos.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== shouldReduceMotion) {
        t1 = shouldReduceMotion ? {
            opacity: 1
        } : {
            opacity: 0
        };
        $[2] = shouldReduceMotion;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 1
        };
        t3 = {
            once: true,
            margin: "-50px"
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            duration: 0.6,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-8 text-sm font-bold uppercase tracking-widest text-text-muted",
            children: "Supported By"
        }, void 0, false, {
            fileName: "[project]/src/components/home/PartnerLogos.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-8 md:gap-12",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partners"].map(_PartnerLogosPartnersMap)
        }, void 0, false, {
            fileName: "[project]/src/components/home/PartnerLogos.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t1) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-stone-100 py-12 md:py-16",
            "aria-label": "Our partners and supporters",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
                    className: "mx-auto max-w-6xl px-4 text-center",
                    initial: t1,
                    whileInView: t2,
                    viewport: t3,
                    transition: t4,
                    children: [
                        t5,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/PartnerLogos.tsx",
                    lineNumber: 73,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/PartnerLogos.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_s(PartnerLogos, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = PartnerLogos;
function _PartnerLogosPartnersMap(partner) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-lg text-text-muted opacity-50 transition-opacity duration-300 hover:opacity-100",
        children: partner.name
    }, partner.id, false, {
        fileName: "[project]/src/components/home/PartnerLogos.tsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PartnerLogos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_defa3396._.js.map