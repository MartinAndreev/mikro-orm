(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),m=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=m(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=m(a),o=r,O=d["".concat(c,".").concat(o)]||d[o]||s[o]||b;return a?n.a.createElement(O,p(p({ref:t},i),{},{components:a})):n.a.createElement(O,p({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=o;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},545:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),b=(a(0),a(1026)),c={id:"knex.knex-1.typepreservingaggregation",title:"Interface: TypePreservingAggregation<TRecord, TResult, TValue>",sidebar_label:"TypePreservingAggregation",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.knex-1.typepreservingaggregation",id:"version-4.5/api/interfaces/knex.knex-1.typepreservingaggregation",isDocsHomePage:!1,title:"Interface: TypePreservingAggregation<TRecord, TResult, TValue>",description:"Interface: TypePreservingAggregation",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.typepreservingaggregation.md",slug:"/api/interfaces/knex.knex-1.typepreservingaggregation",permalink:"/docs/api/interfaces/knex.knex-1.typepreservingaggregation",editUrl:null,version:"4.5",lastUpdatedBy:"Haralan Dobrev",lastUpdatedAt:1618946412,formattedLastUpdatedAt:"4/20/2021",sidebar_label:"TypePreservingAggregation",sidebar:"version-4.5/API",previous:{title:"Interface: Transaction<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.transaction"},next:{title:"Interface: Union<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.union"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],i={toc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-typepreservingaggregationtrecord-tresult-tvalue"},"Interface: TypePreservingAggregation<TRecord, TResult, TValue",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".TypePreservingAggregation"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TValue")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"TypePreservingAggregation"),"<TKey, TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly TKey[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TKey")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol")),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult",">"," ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps",">"," ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & ",Object(b.b)("em",{parentName:"td"},"Dict"),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">","[TKey]",">",", TUnionProps",">"," : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, never, ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", Dict<",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">","[TKey]",">",", never",">"," : ",Object(b.b)("em",{parentName:"td"},"Dict"),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">","[TKey]",">",">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",{parentName:"tr",align:"left"},"readonly TKey[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1343"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"TypePreservingAggregation"),"<TAliases, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"aliases"),": TAliases): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TAliases")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"Readonly"),"<Record<string, string ","|"," string[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">",">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult",">"," ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps",">"," ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & { ","[K in string ","|"," number ","|"," symbol]","?: K extends keyof TRecord ? TRecord","[K]"," : TValue}, TUnionProps",">"," : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, never, ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", { ","[K in string ","|"," number ","|"," symbol]","?: K extends keyof TRecord ? TRecord","[K]"," : TValue}, never",">"," : { ","[K in string ","|"," number ","|"," symbol]","?: K extends keyof TRecord ? TRecord","[K]"," : TValue}",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"aliases")),Object(b.b)("td",{parentName:"tr",align:"left"},"TAliases")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1349"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"TypePreservingAggregation"),"<TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">"," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<Record<string, string ","|"," readonly string[] ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">",">",">",")[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult",">"," ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps",">"," ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue",">",", TUnionProps",">"," : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, never, ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", Dict<TValue",">",", never",">"," : ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue",">",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",{parentName:"tr",align:"left"},"readonly (",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">"," ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<Record<string, string ","|"," readonly string[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<any",">",">",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1359"))}m.isMDXComponent=!0}}]);