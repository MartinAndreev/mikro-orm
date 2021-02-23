(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{1051:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return t?a.a.createElement(m,c(c({ref:n},b),{},{components:t})):a.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},492:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),o=(t(0),t(1051)),i={id:"knex.knex.logger",title:"Interface: Logger",sidebar_label:"Logger",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.logger",id:"version-4.4/api/interfaces/knex.knex.logger",isDocsHomePage:!1,title:"Interface: Logger",description:"Interface: Logger",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.logger.md",slug:"/api/interfaces/knex.knex.logger",permalink:"/docs/api/interfaces/knex.knex.logger",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.logger.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1614074407,sidebar_label:"Logger",sidebar:"version-4.4/API",previous:{title:"Interface: JoinRaw<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.joinraw"},next:{title:"Interface: MariaSqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.mariasqlconnectionconfig"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"debug",id:"debug",children:[]},{value:"deprecate",id:"deprecate",children:[]},{value:"enableColors",id:"enablecolors",children:[]},{value:"error",id:"error",children:[]},{value:"inspectionDepth",id:"inspectiondepth",children:[]},{value:"warn",id:"warn",children:[]}]}],b={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-logger"},"Interface: Logger"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Logger"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Logger"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"debug"},"debug"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"debug"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#logfn"},Object(o.b)("em",{parentName:"a"},"LogFn"))),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2097"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"deprecate"},"deprecate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"deprecate"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(o.b)("inlineCode",{parentName:"p"},"method"),": ",Object(o.b)("em",{parentName:"p"},"string"),", ",Object(o.b)("inlineCode",{parentName:"p"},"alternative"),": ",Object(o.b)("em",{parentName:"p"},"string"),") => ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2100"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"enablecolors"},"enableColors"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"enableColors"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2099"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"error"},"error"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"error"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#logfn"},Object(o.b)("em",{parentName:"a"},"LogFn"))),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2096"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"inspectiondepth"},"inspectionDepth"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"inspectionDepth"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2098"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"warn"},"warn"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"warn"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#logfn"},Object(o.b)("em",{parentName:"a"},"LogFn"))),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2095"))}l.isMDXComponent=!0}}]);