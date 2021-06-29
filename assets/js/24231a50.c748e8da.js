(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84316],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),k=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=k(e.components);return n.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=k(a),c=r,N=d["".concat(i,".").concat(c)]||d[c]||o[c]||p;return a?n.createElement(N,m(m({ref:t},s),{},{components:a})):n.createElement(N,m({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,m=new Array(p);m[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,m[1]=l;for(var k=2;k<p;k++)m[k]=a[k];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97415:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return m},metadata:function(){return l},toc:function(){return i},default:function(){return s}});var n=a(74034),r=a(79973),p=(a(67294),a(3905)),m={id:"knex.databasetable",title:"Class: DatabaseTable",sidebar_label:"DatabaseTable",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/classes/knex.databasetable",id:"version-4.5/api/classes/knex.databasetable",isDocsHomePage:!1,title:"Class: DatabaseTable",description:"knex.DatabaseTable",source:"@site/versioned_docs/version-4.5/api/classes/knex.databasetable.md",sourceDirName:"api/classes",slug:"/api/classes/knex.databasetable",permalink:"/docs/api/classes/knex.databasetable",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1625000930,formattedLastUpdatedAt:"6/29/2021",sidebar_label:"DatabaseTable",frontMatter:{id:"knex.databasetable",title:"Class: DatabaseTable",sidebar_label:"DatabaseTable",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: DatabaseSchema",permalink:"/docs/api/classes/knex.databaseschema"},next:{title:"Class: EntityManager<D\\>",permalink:"/docs/api/classes/knex.entitymanager"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"columns",id:"columns",children:[]},{value:"foreignKeys",id:"foreignkeys",children:[]},{value:"indexes",id:"indexes",children:[]},{value:"name",id:"name",children:[]},{value:"schema",id:"schema",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getColumn",id:"getcolumn",children:[]},{value:"getColumns",id:"getcolumns",children:[]},{value:"getEntityDeclaration",id:"getentitydeclaration",children:[]},{value:"getIndexes",id:"getindexes",children:[]},{value:"getPropertyDeclaration",id:"getpropertydeclaration",children:[]},{value:"getPropertyDefaultValue",id:"getpropertydefaultvalue",children:[]},{value:"getPropertyName",id:"getpropertyname",children:[]},{value:"getPropertyType",id:"getpropertytype",children:[]},{value:"getReferenceType",id:"getreferencetype",children:[]},{value:"init",id:"init",children:[]}]}],k={toc:i};function s(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".DatabaseTable"),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new DatabaseTable"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"schema?"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,p.kt)("em",{parentName:"a"},"DatabaseTable"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"schema?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,p.kt)("em",{parentName:"a"},"DatabaseTable"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L9"},"packages/knex/src/schema/DatabaseTable.ts:9")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"columns"},"columns"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("strong",{parentName:"p"},"columns"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L7"},"packages/knex/src/schema/DatabaseTable.ts:7")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"foreignkeys"},"foreignKeys"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("strong",{parentName:"p"},"foreignKeys"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.foreignkey"},(0,p.kt)("em",{parentName:"a"},"ForeignKey")),">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L9"},"packages/knex/src/schema/DatabaseTable.ts:9")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"indexes"},"indexes"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("strong",{parentName:"p"},"indexes"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.index"},(0,p.kt)("em",{parentName:"a"},"Index")),"[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L8"},"packages/knex/src/schema/DatabaseTable.ts:8")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"name"},"name"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"schema"},"schema"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"schema"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"getcolumn"},"getColumn"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getColumn"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column"))),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L18"},"packages/knex/src/schema/DatabaseTable.ts:18")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getcolumns"},"getColumns"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getColumns"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),"[]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),"[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L14"},"packages/knex/src/schema/DatabaseTable.ts:14")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getentitydeclaration"},"getEntityDeclaration"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getEntityDeclaration"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"namingStrategy"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},(0,p.kt)("em",{parentName:"a"},"NamingStrategy")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"schemaHelper"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper")),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">"),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"namingStrategy")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.namingstrategy"},(0,p.kt)("em",{parentName:"a"},"NamingStrategy")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"schemaHelper")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L58"},"packages/knex/src/schema/DatabaseTable.ts:58")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getindexes"},"getIndexes"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getIndexes"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.index"},(0,p.kt)("em",{parentName:"a"},"Index")),"[]",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.index"},(0,p.kt)("em",{parentName:"a"},"Index")),"[]",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L22"},"packages/knex/src/schema/DatabaseTable.ts:22")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getpropertydeclaration"},"getPropertyDeclaration"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"getPropertyDeclaration"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"namingStrategy"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},(0,p.kt)("em",{parentName:"a"},"NamingStrategy")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"schemaHelper"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"compositeFkIndexes"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<{ ",(0,p.kt)("inlineCode",{parentName:"p"},"keyName"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"  }",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"schema"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entityschema"},(0,p.kt)("em",{parentName:"a"},"EntitySchema")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",", undefined",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"column")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"namingStrategy")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.namingstrategy"},(0,p.kt)("em",{parentName:"a"},"NamingStrategy")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"schemaHelper")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"compositeFkIndexes")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<{ ",(0,p.kt)("inlineCode",{parentName:"td"},"keyName"),": ",(0,p.kt)("em",{parentName:"td"},"string"),"  }",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"schema")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entityschema"},(0,p.kt)("em",{parentName:"a"},"EntitySchema")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",", undefined",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L91"},"packages/knex/src/schema/DatabaseTable.ts:91")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getpropertydefaultvalue"},"getPropertyDefaultValue"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"getPropertyDefaultValue"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"schemaHelper"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"propType"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"raw?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"schemaHelper")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper"))),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"column")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column"))),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"propType")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"raw")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L157"},"packages/knex/src/schema/DatabaseTable.ts:157")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getpropertyname"},"getPropertyName"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"getPropertyName"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),"): ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"column")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L133"},"packages/knex/src/schema/DatabaseTable.ts:133")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getpropertytype"},"getPropertyType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"getPropertyType"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"namingStrategy"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},(0,p.kt)("em",{parentName:"a"},"NamingStrategy")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"schemaHelper"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"defaultType?"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"namingStrategy")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.namingstrategy"},(0,p.kt)("em",{parentName:"a"},"NamingStrategy"))),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"schemaHelper")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.schemahelper"},(0,p.kt)("em",{parentName:"a"},"SchemaHelper"))),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"column")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column"))),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"defaultType")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"'string'")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L143"},"packages/knex/src/schema/DatabaseTable.ts:143")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getreferencetype"},"getReferenceType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"getReferenceType"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/enums/core.referencetype"},(0,p.kt)("em",{parentName:"a"},"ReferenceType"))),(0,p.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"column")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/enums/core.referencetype"},(0,p.kt)("em",{parentName:"a"},"ReferenceType"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L121"},"packages/knex/src/schema/DatabaseTable.ts:121")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"init"},"init"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"init"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"cols"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),"[], ",(0,p.kt)("inlineCode",{parentName:"p"},"indexes"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.index"},(0,p.kt)("em",{parentName:"a"},"Index")),"[], ",(0,p.kt)("inlineCode",{parentName:"p"},"pks"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"[], ",(0,p.kt)("inlineCode",{parentName:"p"},"fks"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.foreignkey"},(0,p.kt)("em",{parentName:"a"},"ForeignKey")),">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"enums"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<string[]",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"cols")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.column"},(0,p.kt)("em",{parentName:"a"},"Column")),"[]")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"indexes")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.index"},(0,p.kt)("em",{parentName:"a"},"Index")),"[]")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"pks")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"),"[]")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"fks")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.foreignkey"},(0,p.kt)("em",{parentName:"a"},"ForeignKey")),">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"enums")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<string[]",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseTable.ts#L35"},"packages/knex/src/schema/DatabaseTable.ts:35")))}s.isMDXComponent=!0}}]);