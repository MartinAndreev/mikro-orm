(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(r),O=a,d=m["".concat(o,".").concat(O)]||m[O]||s[O]||b;return r?n.a.createElement(d,c(c({ref:t},i),{},{components:r})):n.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,o=new Array(b);o[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<b;i++)o[i]=r[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},639:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(8),b=(r(0),r(1110)),o={id:"core.onetooneoptions",title:"Interface: OneToOneOptions<T, O>",sidebar_label:"OneToOneOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.onetooneoptions",id:"version-4.5/api/interfaces/core.onetooneoptions",isDocsHomePage:!1,title:"Interface: OneToOneOptions<T, O>",description:"Interface: OneToOneOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.onetooneoptions.md",slug:"/api/interfaces/core.onetooneoptions",permalink:"/docs/api/interfaces/core.onetooneoptions",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616830543,formattedLastUpdatedAt:"3/27/2021",sidebar_label:"OneToOneOptions",sidebar:"version-4.5/API",previous:{title:"Interface: Node",permalink:"/docs/api/interfaces/core.node"},next:{title:"Interface: PoolConfig",permalink:"/docs/api/interfaces/core.poolconfig"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cascade",id:"cascade",children:[]},{value:"columnType",id:"columntype",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"entity",id:"entity",children:[]},{value:"fieldName",id:"fieldname",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"formula",id:"formula",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"inverseJoinColumn",id:"inversejoincolumn",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"inversedBy",id:"inversedby",children:[]},{value:"joinColumn",id:"joincolumn",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"mapToPk",id:"maptopk",children:[]},{value:"mappedBy",id:"mappedby",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"onUpdateIntegrity",id:"onupdateintegrity",children:[]},{value:"orphanRemoval",id:"orphanremoval",children:[]},{value:"owner",id:"owner",children:[]},{value:"persist",id:"persist",children:[]},{value:"primary",id:"primary",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"version",id:"version",children:[]},{value:"wrappedReference",id:"wrappedreference",children:[]}]}],i={toc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-onetooneoptionst-o"},"Interface: OneToOneOptions<T, O",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".OneToOneOptions"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"O"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("em",{parentName:"p"},"Partial"),"<Omit<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#onetomanyoptions"},Object(b.b)("em",{parentName:"a"},"OneToManyOptions")),"<T, O",">",", ",Object(b.b)("em",{parentName:"p"},"orderBy"),">",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"OneToOneOptions")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"cascade"},"cascade"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"cascade"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/enums/core.cascade"},Object(b.b)("em",{parentName:"a"},"Cascade")),"[]"),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L67"},"packages/core/src/decorators/Property.ts:67")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"columntype"},"columnType"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"columnType"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L42"},"packages/core/src/decorators/Property.ts:42")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"comment"},"comment"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"comment"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L62"},"packages/core/src/decorators/Property.ts:62")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"customtype"},"customType"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"customType"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<any, any",">"),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L41"},"packages/core/src/decorators/Property.ts:41")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"default"},"default"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"default"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("em",{parentName:"p"},"number"),"[]"),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L47"},"packages/core/src/decorators/Property.ts:47")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"defaultraw"},"defaultRaw"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"defaultRaw"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L48"},"packages/core/src/decorators/Property.ts:48")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"eager"},"eager"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"eager"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L68"},"packages/core/src/decorators/Property.ts:68")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"entity"},"entity"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"entity"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," () => ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entityname"},Object(b.b)("em",{parentName:"a"},"EntityName")),"<T",">"," & ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," () => ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entityname"},Object(b.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L66"},"packages/core/src/decorators/Property.ts:66")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fieldname"},"fieldName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fieldName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L39"},"packages/core/src/decorators/Property.ts:39")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fieldnames"},"fieldNames"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fieldNames"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L40"},"packages/core/src/decorators/Property.ts:40")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"formula"},"formula"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"formula"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(b.b)("em",{parentName:"p"},"string"),") => ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L49"},"packages/core/src/decorators/Property.ts:49")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hidden"},"hidden"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"hidden"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L53"},"packages/core/src/decorators/Property.ts:53")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"index"},"index"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"index"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L55"},"packages/core/src/decorators/Property.ts:55")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inversejoincolumn"},"inverseJoinColumn"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"inverseJoinColumn"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToMany.ts#L46"},"packages/core/src/decorators/OneToMany.ts:46")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToMany.ts#L47"},"packages/core/src/decorators/OneToMany.ts:47")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inversedby"},"inversedBy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"inversedBy"),": ",Object(b.b)("em",{parentName:"p"},"string")," & keyof T ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"e"),": T) => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToOne.ts#L15"},"packages/core/src/decorators/OneToOne.ts:15")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joincolumn"},"joinColumn"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"joinColumn"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToMany.ts#L44"},"packages/core/src/decorators/OneToMany.ts:44")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joincolumns"},"joinColumns"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToMany.ts#L45"},"packages/core/src/decorators/OneToMany.ts:45")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"lazy"},"lazy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"lazy"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L57"},"packages/core/src/decorators/Property.ts:57")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"length"},"length"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"length"),": ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L44"},"packages/core/src/decorators/Property.ts:44")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"maptopk"},"mapToPk"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"mapToPk"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToOne.ts#L18"},"packages/core/src/decorators/OneToOne.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"mappedby"},"mappedBy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"mappedBy"),": ",Object(b.b)("em",{parentName:"p"},"string")," & keyof T ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"e"),": T) => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToMany.ts#L49"},"packages/core/src/decorators/OneToMany.ts:49")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"name"},"name"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L38"},"packages/core/src/decorators/Property.ts:38")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nullable"},"nullable"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"nullable"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L50"},"packages/core/src/decorators/Property.ts:50")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"oncreate"},"onCreate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onCreate"),": (",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": O) => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": O): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"O")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L45"},"packages/core/src/decorators/Property.ts:45")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L45"},"packages/core/src/decorators/Property.ts:45")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondelete"},"onDelete"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onDelete"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToOne.ts#L19"},"packages/core/src/decorators/OneToOne.ts:19")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onupdate"},"onUpdate"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onUpdate"),": (",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": O) => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": O): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"O")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L46"},"packages/core/src/decorators/Property.ts:46")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L46"},"packages/core/src/decorators/Property.ts:46")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onupdateintegrity"},"onUpdateIntegrity"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onUpdateIntegrity"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToOne.ts#L20"},"packages/core/src/decorators/OneToOne.ts:20")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"orphanremoval"},"orphanRemoval"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"orphanRemoval"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToMany.ts#L42"},"packages/core/src/decorators/OneToMany.ts:42")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"owner"},"owner"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"owner"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToOne.ts#L14"},"packages/core/src/decorators/OneToOne.ts:14")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"persist"},"persist"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"persist"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L52"},"packages/core/src/decorators/Property.ts:52")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"primary"},"primary"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"primary"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Overrides: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToOne.ts#L17"},"packages/core/src/decorators/OneToOne.ts:17")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"referencecolumnname"},"referenceColumnName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"referenceColumnName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToMany.ts#L48"},"packages/core/src/decorators/OneToMany.ts:48")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializedname"},"serializedName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializedName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L61"},"packages/core/src/decorators/Property.ts:61")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializedPrimaryKey"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L59"},"packages/core/src/decorators/Property.ts:59")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"serializer"},"serializer"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"serializer"),": (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L60"},"packages/core/src/decorators/Property.ts:60")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L60"},"packages/core/src/decorators/Property.ts:60")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"strategy"},"strategy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"strategy"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy"},Object(b.b)("em",{parentName:"a"},"LoadStrategy"))),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L69"},"packages/core/src/decorators/Property.ts:69")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"type"),": ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L43"},"packages/core/src/decorators/Property.ts:43")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unique"},"unique"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"unique"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L56"},"packages/core/src/decorators/Property.ts:56")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unsigned"},"unsigned"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"unsigned"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L51"},"packages/core/src/decorators/Property.ts:51")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"version"},"version"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"version"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L54"},"packages/core/src/decorators/Property.ts:54")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wrappedreference"},"wrappedReference"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"wrappedReference"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/OneToOne.ts#L16"},"packages/core/src/decorators/OneToOne.ts:16")))}l.isMDXComponent=!0}}]);