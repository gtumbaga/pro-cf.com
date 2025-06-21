(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/SpreadshirtEmbed.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SpreadshirtEmbed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SpreadshirtEmbed() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpreadshirtEmbed.useEffect": ()=>{
            // Set global config
            window.spread_shop_config = {
                shopName: 'cfprod',
                locale: 'us_US',
                prefix: '//shop.spreadshirt.com',
                baseId: 'myShop'
            };
            // Inject script
            const script = document.createElement('script');
            script.src = '//shop.spreadshirt.com/shopfiles/shopclient/shopclient.nocache.js';
            script.type = 'text/javascript';
            script.async = true;
            document.body.appendChild(script);
            return ({
                "SpreadshirtEmbed.useEffect": ()=>{
                    document.body.removeChild(script);
                }
            })["SpreadshirtEmbed.useEffect"];
        }
    }["SpreadshirtEmbed.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "m80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "myShop",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "//shop.spreadshirt.com/cfprod",
                children: "cfprod"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SpreadshirtEmbed.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/SpreadshirtEmbed.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/SpreadshirtEmbed.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(SpreadshirtEmbed, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SpreadshirtEmbed;
var _c;
__turbopack_context__.k.register(_c, "SpreadshirtEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_SpreadshirtEmbed_tsx_5c8c8c67._.js.map