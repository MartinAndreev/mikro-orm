(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{1253:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return d}));var b=t(0),n=t.n(b);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);a&&(b=b.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,b)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,b,n=function(e,a){if(null==e)return{};var t,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)t=r[b],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)t=r[b],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),m=function(e){var a=n.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=m(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},O=n.a.forwardRef((function(e,a){var t=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=m(t),O=b,d=i["".concat(c,".").concat(O)]||i[O]||o[O]||r;return t?n.a.createElement(d,s(s({ref:a},l),{},{components:t})):n.a.createElement(d,s({ref:a},l))}));function d(e,a){var t=arguments,b=a&&a.mdxType;if("string"==typeof e||b){var r=t.length,c=new Array(r);c[0]=O;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:b,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},700:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return m}));var b=t(3),n=t(7),r=(t(0),t(1253)),c={id:"knex.databaseschema",title:"Class: DatabaseSchema",sidebar_label:"DatabaseSchema",hide_title:!0},s={unversionedId:"api/classes/knex.databaseschema",id:"version-4.4/api/classes/knex.databaseschema",isDocsHomePage:!1,title:"Class: DatabaseSchema",description:"Class: DatabaseSchema",source:"@site/versioned_docs/version-4.4/api/classes/knex.databaseschema.md",slug:"/api/classes/knex.databaseschema",permalink:"/docs/api/classes/knex.databaseschema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/knex.databaseschema.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612033727,sidebar_label:"DatabaseSchema",sidebar:"version-4.4/API",previous:{title:"Class: CriteriaNodeFactory",permalink:"/docs/api/classes/knex.criterianodefactory"},next:{title:"Class: DatabaseTable",permalink:"/docs/api/classes/knex.databasetable"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"tables",id:"tables",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addTable",id:"addtable",children:[]},{value:"getTable",id:"gettable",children:[]},{value:"getTables",id:"gettables",children:[]},{value:"create",id:"create",children:[]}]}],l={toc:p};function m(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-databaseschema"},"Class: DatabaseSchema"),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".DatabaseSchema"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"DatabaseSchema"))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new DatabaseSchema"),"(): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databaseschema"}),Object(r.b)("em",{parentName:"a"},"DatabaseSchema"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databaseschema"}),Object(r.b)("em",{parentName:"a"},"DatabaseSchema"))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"tables"},"tables"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"tables"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseSchema.ts#L9"}),"packages/knex/src/schema/DatabaseSchema.ts:9")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"addtable"},"addTable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"addTable"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"schema"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schema")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"td"},"null")," ","|"," ",Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseSchema.ts#L11"}),"packages/knex/src/schema/DatabaseSchema.ts:11")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"gettable"},"getTable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getTable"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseSchema.ts#L22"}),"packages/knex/src/schema/DatabaseSchema.ts:22")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"gettables"},"getTables"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getTables"),"(): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseSchema.ts#L18"}),"packages/knex/src/schema/DatabaseSchema.ts:18")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create"},"create"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"create"),"(",Object(r.b)("inlineCode",{parentName:"p"},"connection"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.abstractsqlconnection"}),Object(r.b)("em",{parentName:"a"},"AbstractSqlConnection")),", ",Object(r.b)("inlineCode",{parentName:"p"},"helper"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")),", ",Object(r.b)("inlineCode",{parentName:"p"},"config"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(r.b)("em",{parentName:"a"},"Configuration")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databaseschema"}),Object(r.b)("em",{parentName:"a"},"DatabaseSchema")),">"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"connection")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/knex.abstractsqlconnection"}),Object(r.b)("em",{parentName:"a"},"AbstractSqlConnection")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"helper")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"config")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.configuration"}),Object(r.b)("em",{parentName:"a"},"Configuration")),"<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databaseschema"}),Object(r.b)("em",{parentName:"a"},"DatabaseSchema")),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseSchema.ts#L26"}),"packages/knex/src/schema/DatabaseSchema.ts:26")))}m.isMDXComponent=!0}}]);