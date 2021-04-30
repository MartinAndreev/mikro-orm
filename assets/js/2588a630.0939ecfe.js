(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,O=m["".concat(c,".").concat(d)]||m[d]||l[d]||b;return a?n.a.createElement(O,o(o({ref:t},p),{},{components:a})):n.a.createElement(O,o({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},205:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),b=(a(0),a(1026)),c={id:"core.configurationloader",title:"Class: ConfigurationLoader",sidebar_label:"ConfigurationLoader",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.configurationloader",id:"version-4.5/api/classes/core.configurationloader",isDocsHomePage:!1,title:"Class: ConfigurationLoader",description:"Class: ConfigurationLoader",source:"@site/versioned_docs/version-4.5/api/classes/core.configurationloader.md",slug:"/api/classes/core.configurationloader",permalink:"/docs/api/classes/core.configurationloader",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1619802453,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"ConfigurationLoader",sidebar:"version-4.5/API",previous:{title:"Class: Configuration<D>",permalink:"/docs/api/classes/core.configuration"},next:{title:"Class: Connection",permalink:"/docs/api/classes/core.connection"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getConfigPaths",id:"getconfigpaths",children:[]},{value:"getConfiguration",id:"getconfiguration",children:[]},{value:"getPackageConfig",id:"getpackageconfig",children:[]},{value:"getSettings",id:"getsettings",children:[]},{value:"getTsConfig",id:"gettsconfig",children:[]},{value:"loadEnvironmentVars",id:"loadenvironmentvars",children:[]},{value:"registerTsNode",id:"registertsnode",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-configurationloader"},"Class: ConfigurationLoader"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ConfigurationLoader"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new ConfigurationLoader"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configurationloader"},Object(b.b)("em",{parentName:"a"},"ConfigurationLoader"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configurationloader"},Object(b.b)("em",{parentName:"a"},"ConfigurationLoader"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getconfigpaths"},"getConfigPaths"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getConfigPaths"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<string[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<string[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L47"},"packages/core/src/utils/ConfigurationLoader.ts:47")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getconfiguration"},"getConfiguration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getConfiguration"),"<D",">","(",Object(b.b)("inlineCode",{parentName:"p"},"validate?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"validate")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:"left"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L12"},"packages/core/src/utils/ConfigurationLoader.ts:12")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpackageconfig"},"getPackageConfig"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getPackageConfig"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L34"},"packages/core/src/utils/ConfigurationLoader.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getsettings"},"getSettings"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getSettings"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.settings"},Object(b.b)("em",{parentName:"a"},"Settings")),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.settings"},Object(b.b)("em",{parentName:"a"},"Settings")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L42"},"packages/core/src/utils/ConfigurationLoader.ts:42")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettsconfig"},"getTsConfig"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getTsConfig"),"(",Object(b.b)("inlineCode",{parentName:"p"},"tsConfigPath"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"tsConfigPath")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L89"},"packages/core/src/utils/ConfigurationLoader.ts:89")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadenvironmentvars"},"loadEnvironmentVars"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"loadEnvironmentVars"),"<D",">","(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">","): ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),", D",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L94"},"packages/core/src/utils/ConfigurationLoader.ts:94")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registertsnode"},"registerTsNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"registerTsNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"configPath?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"configPath")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:"left"},"'tsconfig.json'")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L67"},"packages/core/src/utils/ConfigurationLoader.ts:67")))}s.isMDXComponent=!0}}]);