(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1051:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=s(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=s(t),m=n,d=b["".concat(o,".").concat(m)]||b[m]||l[m]||c;return t?a.a.createElement(d,i(i({ref:r},p),{},{components:t})):a.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},230:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(8),c=(t(0),t(1051)),o={id:"knex.querytype",title:"Enumeration: QueryType",sidebar_label:"QueryType",hide_title:!0},i={unversionedId:"api/enums/knex.querytype",id:"version-4.4/api/enums/knex.querytype",isDocsHomePage:!1,title:"Enumeration: QueryType",description:"Enumeration: QueryType",source:"@site/versioned_docs/version-4.4/api/enums/knex.querytype.md",slug:"/api/enums/knex.querytype",permalink:"/docs/api/enums/knex.querytype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/enums/knex.querytype.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1613908389,sidebar_label:"QueryType",sidebar:"version-4.4/API",previous:{title:"Enumeration: ReferenceType",permalink:"/docs/api/enums/core.referencetype"},next:{title:"Class: CLIConfigurator",permalink:"/docs/api/classes/cli.cliconfigurator"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"COUNT",id:"count",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"INSERT",id:"insert",children:[]},{value:"SELECT",id:"select",children:[]},{value:"TRUNCATE",id:"truncate",children:[]},{value:"UPDATE",id:"update",children:[]}]}],p={toc:u};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"enumeration-querytype"},"Enumeration: QueryType"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".QueryType"),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"count"},"COUNT"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"COUNT"),': = "COUNT"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L4"},"packages/knex/src/query/enums.ts:4")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"DELETE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DELETE"),': = "DELETE"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L7"},"packages/knex/src/query/enums.ts:7")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"insert"},"INSERT"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"INSERT"),': = "INSERT"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L5"},"packages/knex/src/query/enums.ts:5")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"select"},"SELECT"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"SELECT"),': = "SELECT"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L3"},"packages/knex/src/query/enums.ts:3")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"truncate"},"TRUNCATE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"TRUNCATE"),': = "TRUNCATE"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L2"},"packages/knex/src/query/enums.ts:2")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"UPDATE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"UPDATE"),': = "UPDATE"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L6"},"packages/knex/src/query/enums.ts:6")))}s.isMDXComponent=!0}}]);