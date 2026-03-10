(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/types/event.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Event type definitions for /events pages
__turbopack_context__.s([
    "AUDIENCE_LABELS",
    ()=>AUDIENCE_LABELS,
    "FORMAT_LABELS",
    ()=>FORMAT_LABELS,
    "TYPE_LABELS",
    ()=>TYPE_LABELS
]);
const AUDIENCE_LABELS = {
    farmers: "Farmers",
    offshore: "Offshore Workers",
    families: "Families",
    community: "All Community"
};
const TYPE_LABELS = {
    workshop: "Workshop",
    social: "Social",
    volunteer: "Volunteer",
    support: "Support"
};
const FORMAT_LABELS = {
    "in-person": "In Person",
    virtual: "Virtual",
    hybrid: "Hybrid"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/events/EventFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventFilters",
    ()=>EventFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/event.ts [app-client] (ecmascript)");
"use client";
;
;
;
function toggleItem(items, item) {
    return items.includes(item) ? items.filter((i)=>i !== item) : [
        ...items,
        item
    ];
}
function FilterGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "0e5f029cbd36ac5e35e7bca95b41485f8f9b7a4f81caf3a2ee7dbc5817d98c8f") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e5f029cbd36ac5e35e7bca95b41485f8f9b7a4f81caf3a2ee7dbc5817d98c8f";
    }
    const { label, options, selected, onChange } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 font-body text-sm font-semibold uppercase tracking-wider text-text-body",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== label) {
        t2 = label.toLowerCase();
        $[3] = label;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = `Filter by ${t2}`;
    let t4;
    if ($[5] !== onChange || $[6] !== options || $[7] !== selected) {
        t4 = Object.entries(options).map({
            "FilterGroup[(anonymous)()]": (t5)=>{
                const [key, display] = t5;
                const isSelected = selected.includes(key);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-pressed": isSelected,
                    onClick: {
                        "FilterGroup[(anonymous)() > <button>.onClick]": ()=>onChange(toggleItem(selected, key))
                    }["FilterGroup[(anonymous)() > <button>.onClick]"],
                    className: `rounded-full border px-4 py-1.5 font-body text-sm font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
                ${isSelected ? "border-primary-900 bg-primary-900 text-stone-50" : "border-stone-200 bg-stone-100 text-text-body hover:border-stone-300 hover:bg-stone-200"}`,
                    children: display
                }, key, false, {
                    fileName: "[project]/src/components/events/EventFilters.tsx",
                    lineNumber: 56,
                    columnNumber: 16
                }, this);
            }
        }["FilterGroup[(anonymous)()]"]);
        $[5] = onChange;
        $[6] = options;
        $[7] = selected;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            role: "group",
            "aria-label": t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t1 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = FilterGroup;
function EventFilters(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "0e5f029cbd36ac5e35e7bca95b41485f8f9b7a4f81caf3a2ee7dbc5817d98c8f") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e5f029cbd36ac5e35e7bca95b41485f8f9b7a4f81caf3a2ee7dbc5817d98c8f";
    }
    const { selectedAudiences, selectedTypes, selectedFormats, onAudienceChange, onTypeChange, onFormatChange, onClearAll, activeFilterCount } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "sr-only",
            children: "Filter Events"
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onAudienceChange || $[3] !== selectedAudiences) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
            label: "Audience",
            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIENCE_LABELS"],
            selected: selectedAudiences,
            onChange: onAudienceChange
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[2] = onAudienceChange;
        $[3] = selectedAudiences;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== onTypeChange || $[6] !== selectedTypes) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
            label: "Event Type",
            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_LABELS"],
            selected: selectedTypes,
            onChange: onTypeChange
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[5] = onTypeChange;
        $[6] = selectedTypes;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== onFormatChange || $[9] !== selectedFormats) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
            label: "Format",
            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMAT_LABELS"],
            selected: selectedFormats,
            onChange: onFormatChange
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[8] = onFormatChange;
        $[9] = selectedFormats;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t2 || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== activeFilterCount || $[16] !== onClearAll) {
        t6 = activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 border-t border-stone-200 pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClearAll,
                className: "font-body text-sm font-medium text-accent-600 underline hover:text-accent-500",
                children: [
                    "Clear all filters",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 inline-flex items-center rounded-full bg-accent-100 px-2 py-0.5 font-body text-xs font-bold text-accent-600",
                        children: activeFilterCount
                    }, void 0, false, {
                        fileName: "[project]/src/components/events/EventFilters.tsx",
                        lineNumber: 154,
                        columnNumber: 238
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/events/EventFilters.tsx",
                lineNumber: 154,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 154,
            columnNumber: 35
        }, this);
        $[15] = activeFilterCount;
        $[16] = onClearAll;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t5 || $[19] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 rounded-xl border border-stone-200 bg-white p-6",
            children: [
                t1,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventFilters.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    return t7;
}
_c1 = EventFilters;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilterGroup");
__turbopack_context__.k.register(_c1, "EventFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/events/EventCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventCard",
    ()=>EventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/event.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const TYPE_TAG_STYLES = {
    workshop: "bg-accent-100 text-accent-600",
    social: "bg-secondary-100 text-secondary-700",
    volunteer: "bg-emerald-50 text-emerald-700",
    support: "bg-blue-50 text-blue-700"
};
const FORMAT_ICONS = {
    virtual: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
    "in-person": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
    hybrid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
};
function EventCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "f5d92c5aa87ff9f7405daa1f4ab4c3f12cab21528e0f0a8de7efe556fe922ff0") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f5d92c5aa87ff9f7405daa1f4ab4c3f12cab21528e0f0a8de7efe556fe922ff0";
    }
    const { event } = t0;
    let monthAbbr;
    let t1;
    if ($[1] !== event.date) {
        const eventDate = new Date(event.date + "T00:00:00");
        monthAbbr = eventDate.toLocaleDateString("en-GB", {
            month: "short"
        }).toUpperCase();
        t1 = eventDate.getDate();
        $[1] = event.date;
        $[2] = monthAbbr;
        $[3] = t1;
    } else {
        monthAbbr = $[2];
        t1 = $[3];
    }
    const day = t1;
    const FormatIcon = FORMAT_ICONS[event.format];
    const timeDisplay = event.endTime ? `${event.time} \u2013 ${event.endTime}` : event.time;
    const t2 = `/events/${event.slug}`;
    let t3;
    if ($[4] !== monthAbbr) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-body text-xs font-bold text-accent-600",
            children: monthAbbr
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[4] = monthAbbr;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== day) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-heading text-2xl font-semibold text-primary-900",
            children: day
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[6] = day;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== event.date || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
            dateTime: event.date,
            className: "flex w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-stone-100 p-2",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[8] = event.date;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== event.title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-heading text-xl font-semibold text-primary-900 transition-colors group-hover:text-primary-700",
            children: event.title
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[12] = event.title;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "h-3.5 w-3.5",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== timeDisplay) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5",
            children: [
                t7,
                timeDisplay
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[15] = timeDisplay;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "h-3.5 w-3.5",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== event.location) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5",
            children: [
                t9,
                event.location
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[18] = event.location;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-sm text-text-muted",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t8;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    const t12 = `inline-flex items-center rounded-full px-2.5 py-0.5 font-body text-xs font-medium ${TYPE_TAG_STYLES[event.type]}`;
    const t13 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_LABELS"][event.type];
    let t14;
    if ($[23] !== t12 || $[24] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== FormatIcon) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormatIcon, {
            className: "h-3 w-3",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[26] = FormatIcon;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    const t16 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMAT_LABELS"][event.format];
    let t17;
    if ($[28] !== t15 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 font-body text-xs font-medium text-text-muted",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== event.audience) {
        t18 = event.audience.map(_EventCardEventAudienceMap);
        $[31] = event.audience;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== t14 || $[34] !== t17 || $[35] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex flex-wrap gap-1.5",
            children: [
                t14,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[33] = t14;
        $[34] = t17;
        $[35] = t18;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t11 || $[38] !== t19 || $[39] !== t6) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                t6,
                t11,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[37] = t11;
        $[38] = t19;
        $[39] = t6;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== t2 || $[42] !== t20 || $[43] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-5\n        transition-all duration-300 ease-premium\n        hover:shadow-lg motion-safe:hover:-translate-y-1\n        before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full\n        before:origin-left before:scale-x-0 before:bg-accent-500\n        before:transition-transform before:duration-400 before:ease-premium\n        group-hover:before:scale-x-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t2,
                className: "flex flex-col gap-4 sm:flex-row",
                children: [
                    t5,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/events/EventCard.tsx",
                lineNumber: 186,
                columnNumber: 485
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventCard.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[41] = t2;
        $[42] = t20;
        $[43] = t5;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    return t21;
}
_c = EventCard;
function _EventCardEventAudienceMap(audience) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full bg-stone-200 px-2.5 py-0.5 font-body text-xs font-medium text-text-muted",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIENCE_LABELS"][audience]
    }, audience, false, {
        fileName: "[project]/src/components/events/EventCard.tsx",
        lineNumber: 197,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "EventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/events/EventGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventGrid",
    ()=>EventGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-x.js [app-client] (ecmascript) <export default as CalendarX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/events/EventCard.tsx [app-client] (ecmascript)");
;
;
;
;
function EventGrid(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "3d3d24b91546e34b2469042a277ff2dd73e56df9606c10c7b2302e727eae4a07") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d3d24b91546e34b2469042a277ff2dd73e56df9606c10c7b2302e727eae4a07";
    }
    const { events, onClearFilters } = t0;
    if (events.length === 0) {
        let t1;
        let t2;
        let t3;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarX$3e$__["CalendarX"], {
                className: "mx-auto mb-4 text-stone-300",
                size: 48,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/events/EventGrid.tsx",
                lineNumber: 26,
                columnNumber: 12
            }, this);
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 font-heading text-xl text-primary-900",
                children: "No events match your filters"
            }, void 0, false, {
                fileName: "[project]/src/components/events/EventGrid.tsx",
                lineNumber: 27,
                columnNumber: 12
            }, this);
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 font-body text-text-muted",
                children: "Try adjusting your filters to find events that interest you."
            }, void 0, false, {
                fileName: "[project]/src/components/events/EventGrid.tsx",
                lineNumber: 28,
                columnNumber: 12
            }, this);
            $[1] = t1;
            $[2] = t2;
            $[3] = t3;
        } else {
            t1 = $[1];
            t2 = $[2];
            t3 = $[3];
        }
        let t4;
        if ($[4] !== onClearFilters) {
            t4 = onClearFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClearFilters,
                className: "font-body font-medium text-accent-600 underline hover:text-accent-500",
                children: "Clear all filters"
            }, void 0, false, {
                fileName: "[project]/src/components/events/EventGrid.tsx",
                lineNumber: 39,
                columnNumber: 30
            }, this);
            $[4] = onClearFilters;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        let t5;
        if ($[6] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-16 text-center",
                children: [
                    t1,
                    t2,
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/events/EventGrid.tsx",
                lineNumber: 47,
                columnNumber: 12
            }, this);
            $[6] = t4;
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        return t5;
    }
    let t1;
    if ($[8] !== events) {
        t1 = events.map(_EventGridEventsMap);
        $[8] = events;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    let t2;
    if ($[10] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-6 md:grid-cols-2",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/events/EventGrid.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    return t2;
}
_c = EventGrid;
function _EventGridEventsMap(event) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventCard"], {
        event: event
    }, event.slug, false, {
        fileName: "[project]/src/components/events/EventGrid.tsx",
        lineNumber: 74,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "EventGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/events/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/events/EventFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/events/EventGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EventsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "11ff456049c5363c74f97517c1bdb1f07da1042d73fc9fc4194c3a273a65614c") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11ff456049c5363c74f97517c1bdb1f07da1042d73fc9fc4194c3a273a65614c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedAudiences, setSelectedAudiences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [selectedTypes, setSelectedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [selectedFormats, setSelectedFormats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] !== selectedAudiences || $[5] !== selectedFormats || $[6] !== selectedTypes) {
        t3 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["events"].filter({
            "EventsPage[events.filter()]": (event)=>{
                const audienceMatch = selectedAudiences.length === 0 || event.audience.some({
                    "EventsPage[events.filter() > event.audience.some()]": (a)=>selectedAudiences.includes(a)
                }["EventsPage[events.filter() > event.audience.some()]"]);
                const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(event.type);
                const formatMatch = selectedFormats.length === 0 || selectedFormats.includes(event.format);
                return audienceMatch && typeMatch && formatMatch;
            }
        }["EventsPage[events.filter()]"]);
        $[4] = selectedAudiences;
        $[5] = selectedFormats;
        $[6] = selectedTypes;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const filteredEvents = t3;
    const activeFilterCount = selectedAudiences.length + selectedTypes.length + selectedFormats.length;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "EventsPage[handleClearAll]": ()=>{
                setSelectedAudiences([]);
                setSelectedTypes([]);
                setSelectedFormats([]);
            }
        })["EventsPage[handleClearAll]"];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleClearAll = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 font-body text-sm font-bold uppercase tracking-wider text-accent-600",
                    children: "What’s On"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.tsx",
                    lineNumber: 78,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mb-4 font-heading text-4xl font-semibold text-primary-900 sm:text-5xl",
                    children: "Events Calendar"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.tsx",
                    lineNumber: 78,
                    columnNumber: 135
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-2xl font-body text-lg text-text-body",
                    children: "Find workshops, support groups, community gatherings, and volunteering opportunities near you. Filter by who it’s for, what type, or how it’s held."
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.tsx",
                    lineNumber: 78,
                    columnNumber: 241
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/page.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== activeFilterCount || $[11] !== selectedAudiences || $[12] !== selectedFormats || $[13] !== selectedTypes) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventFilters"], {
            selectedAudiences: selectedAudiences,
            selectedTypes: selectedTypes,
            selectedFormats: selectedFormats,
            onAudienceChange: setSelectedAudiences,
            onTypeChange: setSelectedTypes,
            onFormatChange: setSelectedFormats,
            onClearAll: handleClearAll,
            activeFilterCount: activeFilterCount
        }, void 0, false, {
            fileName: "[project]/src/app/events/page.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = activeFilterCount;
        $[11] = selectedAudiences;
        $[12] = selectedFormats;
        $[13] = selectedTypes;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== filteredEvents.length) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-4 font-body text-sm text-text-muted",
            children: [
                "Showing ",
                filteredEvents.length,
                " of ",
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["events"].length,
                " events"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[15] = filteredEvents.length;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== filteredEvents) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventGrid"], {
            events: filteredEvents,
            onClearFilters: handleClearAll
        }, void 0, false, {
            fileName: "[project]/src/app/events/page.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[17] = filteredEvents;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t6 || $[20] !== t7 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-stone-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8",
                children: [
                    t5,
                    t6,
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/page.tsx",
                lineNumber: 112,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/events/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[19] = t6;
        $[20] = t7;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(EventsPage, "tBz9OpsHSvSaBT13iK90rWe34lo=");
_c = EventsPage;
var _c;
__turbopack_context__.k.register(_c, "EventsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar-x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CalendarX
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "m14 14-4 4",
            key: "rymu2i"
        }
    ],
    [
        "path",
        {
            d: "m10 14 4 4",
            key: "3sz06r"
        }
    ]
];
const CalendarX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar-x", __iconNode);
;
 //# sourceMappingURL=calendar-x.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar-x.js [app-client] (ecmascript) <export default as CalendarX>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarX",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-x.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Monitor
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2",
            key: "48i651"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "21",
            y2: "21",
            key: "1svkeh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "21",
            key: "vw1qmm"
        }
    ]
];
const Monitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("monitor", __iconNode);
;
 //# sourceMappingURL=monitor.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Monitor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Wifi
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 20h.01",
            key: "zekei9"
        }
    ],
    [
        "path",
        {
            d: "M2 8.82a15 15 0 0 1 20 0",
            key: "dnpr2z"
        }
    ],
    [
        "path",
        {
            d: "M5 12.859a10 10 0 0 1 14 0",
            key: "1x1e6c"
        }
    ],
    [
        "path",
        {
            d: "M8.5 16.429a5 5 0 0 1 7 0",
            key: "1bycff"
        }
    ]
];
const Wifi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("wifi", __iconNode);
;
 //# sourceMappingURL=wifi.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wifi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_928b8f31._.js.map