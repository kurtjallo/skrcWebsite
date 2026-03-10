module.exports = [
"[project]/src/lib/schemas/contact.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIENCE_OPTIONS",
    ()=>AUDIENCE_OPTIONS,
    "contactSchema",
    ()=>contactSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
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
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "We'd like to know what to call you").max(100, "Name must be 100 characters or fewer"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "We need your email so we can get back to you").email("Please enter a valid email address so we can reach you"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20, "Phone number is too long").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    audience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "farmer",
        "offshore-worker",
        "family",
        "community",
        "other"
    ]).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Let us know how we can help").max(5000, "Message must be 5000 characters or fewer"),
    honeypot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(0, "Bot detected").optional()
});
}),
"[project]/src/app/contact/_actions/data:982ec9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitContact",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6079979a25d0654c7767256e10e983bb87a897a2f9":"submitContact"},"src/app/contact/_actions/submit-contact.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6079979a25d0654c7767256e10e983bb87a897a2f9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitContact");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VibWl0LWNvbnRhY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNvbnRhY3RTY2hlbWEsIHR5cGUgQ29udGFjdEZvcm1TdGF0ZSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzL2NvbnRhY3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdENvbnRhY3QoXG4gIF9wcmV2U3RhdGU6IENvbnRhY3RGb3JtU3RhdGUsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxDb250YWN0Rm9ybVN0YXRlPiB7XG4gIGNvbnN0IHJhdyA9IHtcbiAgICBuYW1lOiBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZyxcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nLFxuICAgIHBob25lOiBmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSBhcyBzdHJpbmcsXG4gICAgYXVkaWVuY2U6IGZvcm1EYXRhLmdldChcImF1ZGllbmNlXCIpIGFzIHN0cmluZyxcbiAgICBtZXNzYWdlOiBmb3JtRGF0YS5nZXQoXCJtZXNzYWdlXCIpIGFzIHN0cmluZyxcbiAgICBob25leXBvdDogZm9ybURhdGEuZ2V0KFwiaG9uZXlwb3RcIikgYXMgc3RyaW5nLFxuICB9O1xuXG4gIC8vIEhvbmV5cG90IGNoZWNrIC0tIHJlamVjdCBzaWxlbnRseSBpZiBmaWxsZWRcbiAgLy8gUmV0dXJuIGZha2Ugc3VjY2VzcyBzbyBib3RzIGNhbm5vdCBkZXRlY3QgcmVqZWN0aW9uXG4gIGlmIChyYXcuaG9uZXlwb3QpIHtcbiAgICBjb25zb2xlLmxvZyhcIltTUEFNXSBIb25leXBvdCB0cmlnZ2VyZWQ6XCIsIHtcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgbmFtZTogcmF3Lm5hbWUsXG4gICAgICBlbWFpbDogcmF3LmVtYWlsLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBcIlRoYW5rIHlvdSBmb3IgZ2V0dGluZyBpbiB0b3VjaC4gV2UnbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgd2UgY2FuLlwiLFxuICAgIH07XG4gIH1cblxuICAvLyBTZXJ2ZXItc2lkZSB2YWxpZGF0aW9uIHdpdGggdGhlIHNoYXJlZCB6b2Qgc2NoZW1hXG4gIGNvbnN0IHJlc3VsdCA9IGNvbnRhY3RTY2hlbWEuc2FmZVBhcnNlKHJhdyk7XG5cbiAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgIGNvbnN0IGZpZWxkRXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuICAgIGZvciAoY29uc3QgaXNzdWUgb2YgcmVzdWx0LmVycm9yLmlzc3Vlcykge1xuICAgICAgY29uc3QgZmllbGQgPSBpc3N1ZS5wYXRoWzBdIGFzIHN0cmluZztcbiAgICAgIGlmICghZmllbGRFcnJvcnNbZmllbGRdKSB7XG4gICAgICAgIGZpZWxkRXJyb3JzW2ZpZWxkXSA9IFtdO1xuICAgICAgfVxuICAgICAgZmllbGRFcnJvcnNbZmllbGRdLnB1c2goaXNzdWUubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJQbGVhc2UgY2hlY2sgdGhlIGZvcm0gYmVsb3cgYW5kIHRyeSBhZ2Fpbi5cIixcbiAgICAgIGVycm9yczogZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIC8vIE1WUDogTG9nIHRvIGNvbnNvbGUgKGVtYWlsIHNlcnZpY2UgaW50ZWdyYXRpb24gZGVmZXJyZWQpXG4gIGNvbnNvbGUubG9nKFwiW0NPTlRBQ1RdIE5ldyBzdWJtaXNzaW9uOlwiLCB7XG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgbmFtZTogcmVzdWx0LmRhdGEubmFtZSxcbiAgICBlbWFpbDogcmVzdWx0LmRhdGEuZW1haWwsXG4gICAgcGhvbmU6IHJlc3VsdC5kYXRhLnBob25lIHx8IFwiTm90IHByb3ZpZGVkXCIsXG4gICAgYXVkaWVuY2U6IHJlc3VsdC5kYXRhLmF1ZGllbmNlIHx8IFwiTm90IHNwZWNpZmllZFwiLFxuICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gIH0pO1xuXG4gIC8vIFRPRE86IFNlbmQgZW1haWwgbm90aWZpY2F0aW9uIChlLmcuLCBSZXNlbmQsIFNlbmRHcmlkKVxuICAvLyBUT0RPOiBTdG9yZSBpbiBkYXRhYmFzZSBpZiBuZWVkZWRcblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgbWVzc2FnZTpcbiAgICAgIFwiVGhhbmsgeW91IGZvciBnZXR0aW5nIGluIHRvdWNoLiBXZSdsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyB3ZSBjYW4uXCIsXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRTQUlzQiwwTEFBQSJ9
}),
"[project]/src/components/contact/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas/contact.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$data$3a$982ec9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/contact/_actions/data:982ec9 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
const INPUT_BASE = "mt-1 block w-full rounded-md border border-stone-300 bg-stone-200 px-4 py-3 font-body text-base text-text-primary placeholder:text-text-muted/60 focus:border-accent-500 focus:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition-colors";
const initialState = {
    success: false,
    message: ""
};
function ContactForm() {
    const [state, formAction, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$data$3a$982ec9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitContact"], initialState);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { register, handleSubmit, formState: { errors }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactSchema"]),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            audience: "",
            message: "",
            honeypot: ""
        }
    });
    // Handle server action response
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.success && state.message) {
            setShowSuccess(true);
            reset();
        }
    }, [
        state,
        reset
    ]);
    // Client-side validation passes, trigger server action submission
    const onSubmit = ()=>{
        formRef.current?.requestSubmit();
    };
    const handleSendAnother = ()=>{
        setShowSuccess(false);
    };
    const hasErrors = !!(state.errors || Object.keys(errors).length > 0);
    // ── Success State ──────────────────────────────────────────────
    if (showSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-success/30 bg-success/10 p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-6 w-6 text-success",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-heading text-2xl font-semibold text-text-primary",
                    children: "Thank you for getting in touch"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 font-body text-text-body",
                    children: "We’ll get back to you as soon as we can."
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleSendAnother,
                    className: "mt-6 font-body text-sm font-medium text-accent-600 underline underline-offset-4 transition-colors hover:text-accent-500",
                    children: "Send another message"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    // ── Form State ─────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: formRef,
        action: formAction,
        onSubmit: (e)=>{
            e.preventDefault();
            handleSubmit(onSubmit)(e);
        },
        className: "relative space-y-6",
        noValidate: true,
        children: [
            hasErrors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-error/30 bg-error/10 p-4",
                role: "alert",
                "aria-live": "polite",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-sm font-medium text-error",
                    children: "Please check the form below and try again."
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "name",
                        className: "block font-body text-sm font-medium text-text-primary",
                        children: [
                            "Name ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-error",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact/ContactForm.tsx",
                                lineNumber: 122,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register("name"),
                        type: "text",
                        id: "name",
                        autoComplete: "name",
                        "aria-invalid": !!errors.name,
                        "aria-describedby": errors.name ? "name-error" : undefined,
                        className: INPUT_BASE,
                        placeholder: "Your name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "name-error",
                        className: "mt-1.5 font-body text-sm text-error",
                        role: "alert",
                        children: errors.name.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "email",
                        className: "block font-body text-sm font-medium text-text-primary",
                        children: [
                            "Email ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-error",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact/ContactForm.tsx",
                                lineNumber: 151,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register("email"),
                        type: "email",
                        id: "email",
                        autoComplete: "email",
                        "aria-invalid": !!errors.email,
                        "aria-describedby": errors.email ? "email-error" : undefined,
                        className: INPUT_BASE,
                        placeholder: "your@email.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "email-error",
                        className: "mt-1.5 font-body text-sm text-error",
                        role: "alert",
                        children: errors.email.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "phone",
                        className: "block font-body text-sm font-medium text-text-primary",
                        children: [
                            "Phone",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-normal text-text-muted",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact/ContactForm.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register("phone"),
                        type: "tel",
                        id: "phone",
                        autoComplete: "tel",
                        "aria-invalid": !!errors.phone,
                        "aria-describedby": errors.phone ? "phone-error" : undefined,
                        className: INPUT_BASE,
                        placeholder: "Your phone number"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "phone-error",
                        className: "mt-1.5 font-body text-sm text-error",
                        role: "alert",
                        children: errors.phone.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "audience",
                        className: "block font-body text-sm font-medium text-text-primary",
                        children: [
                            "I am a…",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-normal text-text-muted",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact/ContactForm.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        ...register("audience"),
                        id: "audience",
                        autoComplete: "off",
                        "aria-invalid": !!errors.audience,
                        "aria-describedby": errors.audience ? "audience-error" : undefined,
                        className: `${INPUT_BASE} appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat`,
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B635A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select if you’d like…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact/ContactForm.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUDIENCE_OPTIONS"].map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: value,
                                    children: label
                                }, value, false, {
                                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    errors.audience && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "audience-error",
                        className: "mt-1.5 font-body text-sm text-error",
                        role: "alert",
                        children: errors.audience.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "block font-body text-sm font-medium text-text-primary",
                        children: [
                            "Message ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-error",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact/ContactForm.tsx",
                                lineNumber: 248,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ...register("message"),
                        id: "message",
                        rows: 5,
                        autoComplete: "off",
                        "aria-invalid": !!errors.message,
                        "aria-describedby": errors.message ? "message-error" : undefined,
                        className: `${INPUT_BASE} resize-y`,
                        placeholder: "How can we help?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "message-error",
                        className: "mt-1.5 font-body text-sm text-error",
                        role: "alert",
                        children: errors.message.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[-9999px]",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "honeypot",
                        children: "Leave this empty"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register("honeypot"),
                        type: "text",
                        id: "honeypot",
                        tabIndex: -1,
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-sm text-text-muted",
                children: "Your information is confidential. We will only use it to respond to your message."
            }, void 0, false, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isPending,
                className: "w-full rounded-md bg-primary-900 px-8 py-3.5 font-body text-base font-medium text-text-on-dark transition-all duration-300 ease-premium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
                children: isPending ? "Sending..." : "Send Message"
            }, void 0, false, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/contact/ContactForm.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_a23e1884._.js.map