module.exports = [
"[project]/src/lib/metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMetadata",
    ()=>createMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
function createMetadata({ title, description, path = "" }) {
    const fullTitle = `${title} | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].name}`;
    return {
        title: fullTitle,
        description,
        openGraph: {
            title: fullTitle,
            description,
            url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].url}${path}`,
            siteName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].name,
            locale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].locale,
            type: "website"
        }
    };
}
}),
"[project]/src/app/events/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/metadata.ts [app-rsc] (ecmascript)");
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMetadata"])({
    title: "Events",
    description: "Find workshops, support groups, community gatherings, and volunteering opportunities from St Katharine Rural Connect. Filter by audience, type, or format.",
    path: "/events"
});
function EventsLayout({ children }) {
    return children;
}
}),
];

//# sourceMappingURL=src_cdf0450b._.js.map