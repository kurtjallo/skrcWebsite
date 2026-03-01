module.exports = [
"[project]/src/lib/schemas/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIENCE_OPTIONS",
    ()=>AUDIENCE_OPTIONS,
    "contactSchema",
    ()=>contactSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const AUDIENCE_OPTIONS = [
    {
        value: "farmer",
        label: "Farmer"
    },
    {
        value: "offshore-worker",
        label: "Offshore Worker"
    },
    {
        value: "family",
        label: "Family Member"
    },
    {
        value: "community",
        label: "Community Member"
    },
    {
        value: "other",
        label: "Other"
    }
];
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "We'd like to know what to call you").max(100, "Name must be 100 characters or fewer"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "We need your email so we can get back to you").email("Please enter a valid email address so we can reach you"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20, "Phone number is too long").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    audience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "farmer",
        "offshore-worker",
        "family",
        "community",
        "other"
    ]).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Let us know how we can help").max(5000, "Message must be 5000 characters or fewer"),
    honeypot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(0, "Bot detected").optional()
});
}),
"[project]/src/app/contact/_actions/submit-contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6079979a25d0654c7767256e10e983bb87a897a2f9":"submitContact"},"",""] */ __turbopack_context__.s([
    "submitContact",
    ()=>submitContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas/contact.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function submitContact(_prevState, formData) {
    const raw = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        audience: formData.get("audience"),
        message: formData.get("message"),
        honeypot: formData.get("honeypot")
    };
    // Honeypot check -- reject silently if filled
    // Return fake success so bots cannot detect rejection
    if (raw.honeypot) {
        console.log("[SPAM] Honeypot triggered:", {
            timestamp: new Date().toISOString(),
            name: raw.name,
            email: raw.email
        });
        return {
            success: true,
            message: "Thank you for getting in touch. We'll get back to you as soon as we can."
        };
    }
    // Server-side validation with the shared zod schema
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactSchema"].safeParse(raw);
    if (!result.success) {
        const fieldErrors = {};
        for (const issue of result.error.issues){
            const field = issue.path[0];
            if (!fieldErrors[field]) {
                fieldErrors[field] = [];
            }
            fieldErrors[field].push(issue.message);
        }
        return {
            success: false,
            message: "Please check the form below and try again.",
            errors: fieldErrors
        };
    }
    // MVP: Log to console (email service integration deferred)
    console.log("[CONTACT] New submission:", {
        timestamp: new Date().toISOString(),
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || "Not provided",
        audience: result.data.audience || "Not specified",
        message: result.data.message
    });
    // TODO: Send email notification (e.g., Resend, SendGrid)
    // TODO: Store in database if needed
    return {
        success: true,
        message: "Thank you for getting in touch. We'll get back to you as soon as we can."
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContact
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContact, "6079979a25d0654c7767256e10e983bb87a897a2f9", null);
}),
"[project]/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/contact/_actions/submit-contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$submit$2d$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contact/_actions/submit-contact.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/contact/_actions/submit-contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "6079979a25d0654c7767256e10e983bb87a897a2f9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$submit$2d$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContact"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$contact$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$submit$2d$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/contact/_actions/submit-contact.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$submit$2d$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contact/_actions/submit-contact.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_9de14252._.js.map