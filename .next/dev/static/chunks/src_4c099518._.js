(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/schemas/contact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIENCE_OPTIONS",
    ()=>AUDIENCE_OPTIONS,
    "contactSchema",
    ()=>contactSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
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
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "We'd like to know what to call you").max(100, "Name must be 100 characters or fewer"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "We need your email so we can get back to you").email("Please enter a valid email address so we can reach you"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20, "Phone number is too long").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    audience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "farmer",
        "offshore-worker",
        "family",
        "community",
        "other"
    ]).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Let us know how we can help").max(5000, "Message must be 5000 characters or fewer"),
    honeypot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(0, "Bot detected").optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/contact/_actions/data:982ec9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitContact",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6079979a25d0654c7767256e10e983bb87a897a2f9":"submitContact"},"src/app/contact/_actions/submit-contact.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6079979a25d0654c7767256e10e983bb87a897a2f9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitContact");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VibWl0LWNvbnRhY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNvbnRhY3RTY2hlbWEsIHR5cGUgQ29udGFjdEZvcm1TdGF0ZSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzL2NvbnRhY3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdENvbnRhY3QoXG4gIF9wcmV2U3RhdGU6IENvbnRhY3RGb3JtU3RhdGUsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxDb250YWN0Rm9ybVN0YXRlPiB7XG4gIGNvbnN0IHJhdyA9IHtcbiAgICBuYW1lOiBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZyxcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nLFxuICAgIHBob25lOiBmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSBhcyBzdHJpbmcsXG4gICAgYXVkaWVuY2U6IGZvcm1EYXRhLmdldChcImF1ZGllbmNlXCIpIGFzIHN0cmluZyxcbiAgICBtZXNzYWdlOiBmb3JtRGF0YS5nZXQoXCJtZXNzYWdlXCIpIGFzIHN0cmluZyxcbiAgICBob25leXBvdDogZm9ybURhdGEuZ2V0KFwiaG9uZXlwb3RcIikgYXMgc3RyaW5nLFxuICB9O1xuXG4gIC8vIEhvbmV5cG90IGNoZWNrIC0tIHJlamVjdCBzaWxlbnRseSBpZiBmaWxsZWRcbiAgLy8gUmV0dXJuIGZha2Ugc3VjY2VzcyBzbyBib3RzIGNhbm5vdCBkZXRlY3QgcmVqZWN0aW9uXG4gIGlmIChyYXcuaG9uZXlwb3QpIHtcbiAgICBjb25zb2xlLmxvZyhcIltTUEFNXSBIb25leXBvdCB0cmlnZ2VyZWQ6XCIsIHtcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgbmFtZTogcmF3Lm5hbWUsXG4gICAgICBlbWFpbDogcmF3LmVtYWlsLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBcIlRoYW5rIHlvdSBmb3IgZ2V0dGluZyBpbiB0b3VjaC4gV2UnbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgd2UgY2FuLlwiLFxuICAgIH07XG4gIH1cblxuICAvLyBTZXJ2ZXItc2lkZSB2YWxpZGF0aW9uIHdpdGggdGhlIHNoYXJlZCB6b2Qgc2NoZW1hXG4gIGNvbnN0IHJlc3VsdCA9IGNvbnRhY3RTY2hlbWEuc2FmZVBhcnNlKHJhdyk7XG5cbiAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgIGNvbnN0IGZpZWxkRXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuICAgIGZvciAoY29uc3QgaXNzdWUgb2YgcmVzdWx0LmVycm9yLmlzc3Vlcykge1xuICAgICAgY29uc3QgZmllbGQgPSBpc3N1ZS5wYXRoWzBdIGFzIHN0cmluZztcbiAgICAgIGlmICghZmllbGRFcnJvcnNbZmllbGRdKSB7XG4gICAgICAgIGZpZWxkRXJyb3JzW2ZpZWxkXSA9IFtdO1xuICAgICAgfVxuICAgICAgZmllbGRFcnJvcnNbZmllbGRdLnB1c2goaXNzdWUubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJQbGVhc2UgY2hlY2sgdGhlIGZvcm0gYmVsb3cgYW5kIHRyeSBhZ2Fpbi5cIixcbiAgICAgIGVycm9yczogZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIC8vIE1WUDogTG9nIHRvIGNvbnNvbGUgKGVtYWlsIHNlcnZpY2UgaW50ZWdyYXRpb24gZGVmZXJyZWQpXG4gIGNvbnNvbGUubG9nKFwiW0NPTlRBQ1RdIE5ldyBzdWJtaXNzaW9uOlwiLCB7XG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgbmFtZTogcmVzdWx0LmRhdGEubmFtZSxcbiAgICBlbWFpbDogcmVzdWx0LmRhdGEuZW1haWwsXG4gICAgcGhvbmU6IHJlc3VsdC5kYXRhLnBob25lIHx8IFwiTm90IHByb3ZpZGVkXCIsXG4gICAgYXVkaWVuY2U6IHJlc3VsdC5kYXRhLmF1ZGllbmNlIHx8IFwiTm90IHNwZWNpZmllZFwiLFxuICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gIH0pO1xuXG4gIC8vIFRPRE86IFNlbmQgZW1haWwgbm90aWZpY2F0aW9uIChlLmcuLCBSZXNlbmQsIFNlbmRHcmlkKVxuICAvLyBUT0RPOiBTdG9yZSBpbiBkYXRhYmFzZSBpZiBuZWVkZWRcblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgbWVzc2FnZTpcbiAgICAgIFwiVGhhbmsgeW91IGZvciBnZXR0aW5nIGluIHRvdWNoLiBXZSdsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyB3ZSBjYW4uXCIsXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRTQUlzQiwwTEFBQSJ9
}),
"[project]/src/components/contact/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas/contact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$data$3a$982ec9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/contact/_actions/data:982ec9 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(101);
    if ($[0] !== "e21025b22836b2bff9eec825869095ae7bcaa75cfd5a13dec7a32fc25406714d") {
        for(let $i = 0; $i < 101; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e21025b22836b2bff9eec825869095ae7bcaa75cfd5a13dec7a32fc25406714d";
    }
    const [state, formAction, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contact$2f$_actions$2f$data$3a$982ec9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitContact"], initialState);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactSchema"]),
            defaultValues: {
                name: "",
                email: "",
                phone: "",
                audience: "",
                message: "",
                honeypot: ""
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { register, handleSubmit, formState: t1, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(t0);
    const { errors } = t1;
    let t2;
    if ($[2] !== reset || $[3] !== state.message || $[4] !== state.success) {
        t2 = ({
            "ContactForm[useEffect()]": ()=>{
                if (state.success && state.message) {
                    setShowSuccess(true);
                    reset();
                }
            }
        })["ContactForm[useEffect()]"];
        $[2] = reset;
        $[3] = state.message;
        $[4] = state.success;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== reset || $[7] !== state) {
        t3 = [
            state,
            reset
        ];
        $[6] = reset;
        $[7] = state;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ContactForm[onSubmit]": ()=>{
                formRef.current?.requestSubmit();
            }
        })["ContactForm[onSubmit]"];
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const onSubmit = t4;
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ContactForm[handleSendAnother]": ()=>{
                setShowSuccess(false);
            }
        })["ContactForm[handleSendAnother]"];
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handleSendAnother = t5;
    let t6;
    if ($[11] !== errors || $[12] !== state.errors) {
        t6 = state.errors || Object.keys(errors).length > 0;
        $[11] = errors;
        $[12] = state.errors;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const hasErrors = !!t6;
    if (showSuccess) {
        let t7;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-success/30 bg-success/10 p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-6 w-6 text-success",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/contact/ContactForm.tsx",
                            lineNumber: 116,
                            columnNumber: 195
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 116,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-heading text-2xl font-semibold text-text-primary",
                        children: "Thank you for getting in touch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 116,
                        columnNumber: 269
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 font-body text-text-body",
                        children: "We’ll get back to you as soon as we can."
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 116,
                        columnNumber: 374
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleSendAnother,
                        className: "mt-6 font-body text-sm font-medium text-accent-600 underline underline-offset-4 transition-colors hover:text-accent-500",
                        children: "Send another message"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact/ContactForm.tsx",
                        lineNumber: 116,
                        columnNumber: 463
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 116,
                columnNumber: 12
            }, this);
            $[14] = t7;
        } else {
            t7 = $[14];
        }
        return t7;
    }
    let t7;
    if ($[15] !== handleSubmit) {
        t7 = ({
            "ContactForm[<form>.onSubmit]": (e)=>{
                e.preventDefault();
                handleSubmit(onSubmit)(e);
            }
        })["ContactForm[<form>.onSubmit]"];
        $[15] = handleSubmit;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== hasErrors) {
        t8 = hasErrors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-error/30 bg-error/10 p-4",
            role: "alert",
            "aria-live": "polite",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-sm font-medium text-error",
                children: "Please check the form below and try again."
            }, void 0, false, {
                fileName: "[project]/src/components/contact/ContactForm.tsx",
                lineNumber: 138,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 138,
            columnNumber: 23
        }, this);
        $[17] = hasErrors;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "name",
            className: "block font-body text-sm font-medium text-text-primary",
            children: [
                "Name ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-error",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 146,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== register) {
        t10 = register("name");
        $[20] = register;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const t11 = !!errors.name;
    const t12 = errors.name ? "name-error" : undefined;
    let t13;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ...t10,
            type: "text",
            id: "name",
            autoComplete: "name",
            "aria-invalid": t11,
            "aria-describedby": t12,
            className: INPUT_BASE,
            placeholder: "Your name"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== errors.name) {
        t14 = errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: "name-error",
            className: "mt-1.5 font-body text-sm text-error",
            role: "alert",
            children: errors.name.message
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 173,
            columnNumber: 26
        }, this);
        $[26] = errors.name;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t13 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-body text-sm font-medium text-text-primary",
            children: [
                "Email ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-error",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 190,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== register) {
        t17 = register("email");
        $[32] = register;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    const t18 = !!errors.email;
    const t19 = errors.email ? "email-error" : undefined;
    let t20;
    if ($[34] !== t17 || $[35] !== t18 || $[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ...t17,
            type: "email",
            id: "email",
            autoComplete: "email",
            "aria-invalid": t18,
            "aria-describedby": t19,
            className: INPUT_BASE,
            placeholder: "your@email.com"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[34] = t17;
        $[35] = t18;
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== errors.email) {
        t21 = errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: "email-error",
            className: "mt-1.5 font-body text-sm text-error",
            role: "alert",
            children: errors.email.message
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 217,
            columnNumber: 27
        }, this);
        $[38] = errors.email;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] !== t20 || $[41] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[40] = t20;
        $[41] = t21;
        $[42] = t22;
    } else {
        t22 = $[42];
    }
    let t23;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "phone",
            className: "block font-body text-sm font-medium text-text-primary",
            children: [
                "Phone",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-normal text-text-muted",
                    children: "(optional)"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 234,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] !== register) {
        t24 = register("phone");
        $[44] = register;
        $[45] = t24;
    } else {
        t24 = $[45];
    }
    const t25 = !!errors.phone;
    const t26 = errors.phone ? "phone-error" : undefined;
    let t27;
    if ($[46] !== t24 || $[47] !== t25 || $[48] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ...t24,
            type: "tel",
            id: "phone",
            autoComplete: "tel",
            "aria-invalid": t25,
            "aria-describedby": t26,
            className: INPUT_BASE,
            placeholder: "Your phone number"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[46] = t24;
        $[47] = t25;
        $[48] = t26;
        $[49] = t27;
    } else {
        t27 = $[49];
    }
    let t28;
    if ($[50] !== errors.phone) {
        t28 = errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: "phone-error",
            className: "mt-1.5 font-body text-sm text-error",
            role: "alert",
            children: errors.phone.message
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 261,
            columnNumber: 27
        }, this);
        $[50] = errors.phone;
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    let t29;
    if ($[52] !== t27 || $[53] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[52] = t27;
        $[53] = t28;
        $[54] = t29;
    } else {
        t29 = $[54];
    }
    let t30;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "audience",
            className: "block font-body text-sm font-medium text-text-primary",
            children: [
                "I am a…",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-normal text-text-muted",
                    children: "(optional)"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 278,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] !== register) {
        t31 = register("audience");
        $[56] = register;
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    const t32 = !!errors.audience;
    const t33 = errors.audience ? "audience-error" : undefined;
    let t34;
    let t35;
    let t36;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B635A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")"
        };
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select if you’d like…"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        t36 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIENCE_OPTIONS"].map(_ContactFormAUDIENCE_OPTIONSMap);
        $[58] = t34;
        $[59] = t35;
        $[60] = t36;
    } else {
        t34 = $[58];
        t35 = $[59];
        t36 = $[60];
    }
    let t37;
    if ($[61] !== t31 || $[62] !== t32 || $[63] !== t33) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            ...t31,
            id: "audience",
            autoComplete: "off",
            "aria-invalid": t32,
            "aria-describedby": t33,
            className: `${INPUT_BASE} appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat`,
            style: t34,
            children: [
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[61] = t31;
        $[62] = t32;
        $[63] = t33;
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] !== errors.audience) {
        t38 = errors.audience && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: "audience-error",
            className: "mt-1.5 font-body text-sm text-error",
            role: "alert",
            children: errors.audience.message
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 322,
            columnNumber: 30
        }, this);
        $[65] = errors.audience;
        $[66] = t38;
    } else {
        t38 = $[66];
    }
    let t39;
    if ($[67] !== t37 || $[68] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t30,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[67] = t37;
        $[68] = t38;
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "message",
            className: "block font-body text-sm font-medium text-text-primary",
            children: [
                "Message ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-error",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 339,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[70] = t40;
    } else {
        t40 = $[70];
    }
    let t41;
    if ($[71] !== register) {
        t41 = register("message");
        $[71] = register;
        $[72] = t41;
    } else {
        t41 = $[72];
    }
    const t42 = !!errors.message;
    const t43 = errors.message ? "message-error" : undefined;
    let t44;
    if ($[73] !== t41 || $[74] !== t42 || $[75] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            ...t41,
            id: "message",
            rows: 5,
            autoComplete: "off",
            "aria-invalid": t42,
            "aria-describedby": t43,
            className: `${INPUT_BASE} resize-y`,
            placeholder: "How can we help?"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[73] = t41;
        $[74] = t42;
        $[75] = t43;
        $[76] = t44;
    } else {
        t44 = $[76];
    }
    let t45;
    if ($[77] !== errors.message) {
        t45 = errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: "message-error",
            className: "mt-1.5 font-body text-sm text-error",
            role: "alert",
            children: errors.message.message
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 366,
            columnNumber: 29
        }, this);
        $[77] = errors.message;
        $[78] = t45;
    } else {
        t45 = $[78];
    }
    let t46;
    if ($[79] !== t44 || $[80] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t40,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[79] = t44;
        $[80] = t45;
        $[81] = t46;
    } else {
        t46 = $[81];
    }
    let t47;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "honeypot",
            children: "Leave this empty"
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[82] = t47;
    } else {
        t47 = $[82];
    }
    let t48;
    if ($[83] !== register) {
        t48 = register("honeypot");
        $[83] = register;
        $[84] = t48;
    } else {
        t48 = $[84];
    }
    let t49;
    if ($[85] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-[-9999px]",
            "aria-hidden": "true",
            children: [
                t47,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...t48,
                    type: "text",
                    id: "honeypot",
                    tabIndex: -1,
                    autoComplete: "off"
                }, void 0, false, {
                    fileName: "[project]/src/components/contact/ContactForm.tsx",
                    lineNumber: 398,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[85] = t48;
        $[86] = t49;
    } else {
        t49 = $[86];
    }
    let t50;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body text-sm text-text-muted",
            children: "Your information is confidential. We will only use it to respond to your message."
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[87] = t50;
    } else {
        t50 = $[87];
    }
    const t51 = isPending ? "Sending..." : "Send Message";
    let t52;
    if ($[88] !== isPending || $[89] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: isPending,
            className: "w-full rounded-md bg-primary-900 px-8 py-3.5 font-body text-base font-medium text-text-on-dark transition-all duration-300 ease-premium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[88] = isPending;
        $[89] = t51;
        $[90] = t52;
    } else {
        t52 = $[90];
    }
    let t53;
    if ($[91] !== t15 || $[92] !== t22 || $[93] !== t29 || $[94] !== t39 || $[95] !== t46 || $[96] !== t49 || $[97] !== t52 || $[98] !== t7 || $[99] !== t8) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            ref: formRef,
            action: formAction,
            onSubmit: t7,
            className: "relative space-y-6",
            noValidate: true,
            children: [
                t8,
                t15,
                t22,
                t29,
                t39,
                t46,
                t49,
                t50,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact/ContactForm.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[91] = t15;
        $[92] = t22;
        $[93] = t29;
        $[94] = t39;
        $[95] = t46;
        $[96] = t49;
        $[97] = t52;
        $[98] = t7;
        $[99] = t8;
        $[100] = t53;
    } else {
        t53 = $[100];
    }
    return t53;
}
_s(ContactForm, "GA97O7+mu+dwosXKv2J3IO7glo4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ContactForm;
function _ContactFormAUDIENCE_OPTIONSMap(t0) {
    const { value, label } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: value,
        children: label
    }, value, false, {
        fileName: "[project]/src/components/contact/ContactForm.tsx",
        lineNumber: 444,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4c099518._.js.map