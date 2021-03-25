(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},593:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),c=(n(0),n(1110)),i={id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.foreignkey",id:"version-4.5/api/interfaces/knex.foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"Interface: ForeignKey",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.foreignkey.md",slug:"/api/interfaces/knex.foreignkey",permalink:"/docs/api/interfaces/knex.foreignkey",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1616705805,formattedLastUpdatedAt:"3/25/2021",sidebar_label:"ForeignKey",sidebar:"version-4.5/API",previous:{title:"Interface: Column",permalink:"/docs/api/interfaces/knex.column"},next:{title:"Interface: ICriteriaNode",permalink:"/docs/api/interfaces/knex.icriterianode"}},p=[{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"constraintName",id:"constraintname",children:[]},{value:"deleteRule",id:"deleterule",children:[]},{value:"referencedColumnName",id:"referencedcolumnname",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"updateRule",id:"updaterule",children:[]}]}],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-foreignkey"},"Interface: ForeignKey"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".ForeignKey"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"columnname"},"columnName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"columnName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"constraintname"},"constraintName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"constraintName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"deleterule"},"deleteRule"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"deleteRule"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L50"},"packages/knex/src/typings.ts:50")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"referencedcolumnname"},"referencedColumnName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"referencedColumnName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L48"},"packages/knex/src/typings.ts:48")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"referencedtablename"},"referencedTableName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"referencedTableName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L47"},"packages/knex/src/typings.ts:47")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"updaterule"},"updateRule"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"updateRule"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L49"},"packages/knex/src/typings.ts:49")))}l.isMDXComponent=!0}}]);