(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,O=m["".concat(i,".").concat(d)]||m[d]||s[d]||b;return a?n.a.createElement(O,c(c({ref:t},l),{},{components:a})):n.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<b;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},652:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),b=(a(0),a(1110)),i={id:"migrations",title:"Module: migrations",sidebar_label:"migrations",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/modules/migrations",id:"api/modules/migrations",isDocsHomePage:!1,title:"Module: migrations",description:"Module: migrations",source:"@site/docs/api/modules/migrations.md",slug:"/api/modules/migrations",permalink:"/docs/next/api/modules/migrations",editUrl:null,version:"current",sidebar_label:"migrations",sidebar:"API",previous:{title:"Module: knex",permalink:"/docs/next/api/modules/knex"},next:{title:"Module: reflection",permalink:"/docs/next/api/modules/reflection"}},o=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Classes",id:"classes",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"MigrateOptions",id:"migrateoptions",children:[]},{value:"MigrationResult",id:"migrationresult",children:[]},{value:"MigrationRow",id:"migrationrow",children:[]},{value:"Query",id:"query",children:[]},{value:"UmzugMigration",id:"umzugmigration",children:[]}]}],l={toc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"module-migrations"},"Module: migrations"),Object(b.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(b.b)("h3",{id:"classes"},"Classes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migration"},"Migration")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrationgenerator"},"MigrationGenerator")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrationrunner"},"MigrationRunner")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrationstorage"},"MigrationStorage")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/migrations.migrator"},"Migrator"))),Object(b.b)("h2",{id:"type-aliases"},"Type aliases"),Object(b.b)("h3",{id:"migrateoptions"},"MigrateOptions"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"MigrateOptions"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"from"),"?"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"migrations"),"?"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"to"),"?"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"transaction"),"?"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#transaction"},Object(b.b)("em",{parentName:"a"},"Transaction")))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b14cdcb/packages/migrations/src/typings.ts#L4"},"packages/migrations/src/typings.ts:4")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"migrationresult"},"MigrationResult"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"MigrationResult"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"code")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"diff")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"fileName")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b14cdcb/packages/migrations/src/typings.ts#L5"},"packages/migrations/src/typings.ts:5")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"migrationrow"},"MigrationRow"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"MigrationRow"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"executed_at")),Object(b.b)("td",{parentName:"tr",align:"left"},"Date")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b14cdcb/packages/migrations/src/typings.ts#L6"},"packages/migrations/src/typings.ts:6")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"query"},"Query"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"Query"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b14cdcb/packages/migrations/src/Migration.ts#L4"},"packages/migrations/src/Migration.ts:4")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"umzugmigration"},"UmzugMigration"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"UmzugMigration"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"type-declaration-3"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"file")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"name"),"?"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"path"),"?"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b14cdcb/packages/migrations/src/typings.ts#L3"},"packages/migrations/src/typings.ts:3")))}p.isMDXComponent=!0}}]);