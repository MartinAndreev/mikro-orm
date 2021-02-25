(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1051:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),m=function(e){var r=o.a.useContext(b),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=m(e.components);return o.a.createElement(b.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},l=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=m(n),l=t,d=s["".concat(a,".").concat(l)]||s[l]||u[l]||c;return n?o.a.createElement(d,i(i({ref:r},b),{},{components:n})):o.a.createElement(d,i({ref:r},b))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=l;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var b=2;b<c;b++)a[b]=n[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},249:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return m}));var t=n(3),o=n(8),c=(n(0),n(1051)),a={id:"core.referencetype",title:"Enumeration: ReferenceType",sidebar_label:"ReferenceType",hide_title:!0},i={unversionedId:"api/enums/core.referencetype",id:"version-4.4/api/enums/core.referencetype",isDocsHomePage:!1,title:"Enumeration: ReferenceType",description:"Enumeration: ReferenceType",source:"@site/versioned_docs/version-4.4/api/enums/core.referencetype.md",slug:"/api/enums/core.referencetype",permalink:"/docs/api/enums/core.referencetype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/enums/core.referencetype.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1614253499,sidebar_label:"ReferenceType",sidebar:"version-4.4/API",previous:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/api/enums/core.queryordernumeric"},next:{title:"Enumeration: QueryType",permalink:"/docs/api/enums/knex.querytype"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"EMBEDDED",id:"embedded",children:[]},{value:"MANY_TO_MANY",id:"many_to_many",children:[]},{value:"MANY_TO_ONE",id:"many_to_one",children:[]},{value:"ONE_TO_MANY",id:"one_to_many",children:[]},{value:"ONE_TO_ONE",id:"one_to_one",children:[]},{value:"SCALAR",id:"scalar",children:[]}]}],b={toc:p};function m(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},b,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"enumeration-referencetype"},"Enumeration: ReferenceType"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ReferenceType"),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"embedded"},"EMBEDDED"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"EMBEDDED"),': = "embedded"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L74"},"packages/core/src/enums.ts:74")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"many_to_many"},"MANY","_","TO","_","MANY"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"MANY","_","TO","_","MANY"),': = "m:n"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L73"},"packages/core/src/enums.ts:73")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"many_to_one"},"MANY","_","TO","_","ONE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"MANY","_","TO","_","ONE"),': = "m:1"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L72"},"packages/core/src/enums.ts:72")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"one_to_many"},"ONE","_","TO","_","MANY"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ONE","_","TO","_","MANY"),': = "1:m"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L71"},"packages/core/src/enums.ts:71")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"one_to_one"},"ONE","_","TO","_","ONE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ONE","_","TO","_","ONE"),': = "1:1"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L70"},"packages/core/src/enums.ts:70")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"scalar"},"SCALAR"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"SCALAR"),': = "scalar"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L69"},"packages/core/src/enums.ts:69")))}m.isMDXComponent=!0}}]);