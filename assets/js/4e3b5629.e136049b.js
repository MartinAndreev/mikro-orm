(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=o(n),d=a,O=s["".concat(c,".").concat(d)]||s[d]||m[d]||b;return n?r.a.createElement(O,p(p({ref:t},l),{},{components:n})):r.a.createElement(O,p({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<b;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),b=(n(0),n(1051)),c={id:"knex.knex.seeder",title:"Class: Seeder",sidebar_label:"Seeder",hide_title:!0},p={unversionedId:"api/classes/knex.knex.seeder",id:"version-4.4/api/classes/knex.knex.seeder",isDocsHomePage:!1,title:"Class: Seeder",description:"Class: Seeder",source:"@site/versioned_docs/version-4.4/api/classes/knex.knex.seeder.md",slug:"/api/classes/knex.knex.seeder",permalink:"/docs/api/classes/knex.knex.seeder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/knex.knex.seeder.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1613908389,sidebar_label:"Seeder",sidebar:"version-4.4/API",previous:{title:"Class: QueryBuilder<TRecord, TResult>",permalink:"/docs/api/classes/knex.knex.querybuilder"},next:{title:"Class: AbstractSqlConnection",permalink:"/docs/api/classes/knex.abstractsqlconnection"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"make",id:"make",children:[]},{value:"run",id:"run",children:[]},{value:"setConfig",id:"setconfig",children:[]}]}],l={toc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-seeder"},"Class: Seeder"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Seeder"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Seeder"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Seeder"),"(",Object(b.b)("inlineCode",{parentName:"p"},"knex"),": ",Object(b.b)("em",{parentName:"p"},"Knex"),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"unknown"),"[]",">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.seeder"},Object(b.b)("em",{parentName:"a"},"Seeder"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"knex")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"Knex"),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"unknown"),"[]",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.seeder"},Object(b.b)("em",{parentName:"a"},"Seeder"))),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2152"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"make"},"make"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"make"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2156"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"run"},"run"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"run"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<[",Object(b.b)("em",{parentName:"p"},"string"),"[]]",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<[",Object(b.b)("em",{parentName:"p"},"string"),"[]]",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2155"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setconfig"},"setConfig"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setConfig"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2154"))}o.isMDXComponent=!0}}]);