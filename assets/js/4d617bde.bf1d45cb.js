(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[605],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4019:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"core.transactioneventargs",title:"Interface: TransactionEventArgs",sidebar_label:"TransactionEventArgs",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.transactioneventargs",id:"version-4.5/api/interfaces/core.transactioneventargs",isDocsHomePage:!1,title:"Interface: TransactionEventArgs",description:"core.TransactionEventArgs",source:"@site/versioned_docs/version-4.5/api/interfaces/core.transactioneventargs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.transactioneventargs",permalink:"/docs/api/interfaces/core.transactioneventargs",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1625000930,formattedLastUpdatedAt:"6/29/2021",sidebar_label:"TransactionEventArgs",frontMatter:{id:"core.transactioneventargs",title:"Interface: TransactionEventArgs",sidebar_label:"TransactionEventArgs",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: Settings",permalink:"/docs/api/interfaces/core.settings"},next:{title:"Interface: UniqueOptions<T\\>",permalink:"/docs/api/interfaces/core.uniqueoptions"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"em",id:"em",children:[]},{value:"transaction",id:"transaction",children:[]},{value:"uow",id:"uow",children:[]}]}],p={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TransactionEventArgs"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Omit"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,i.kt)("em",{parentName:"a"},"EventArgs")),"<unknown",">",", ",(0,i.kt)("em",{parentName:"p"},"entity")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"changeSet"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"TransactionEventArgs")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"em"},"em"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Inherited from: void"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L8"},"packages/core/src/events/EventSubscriber.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transaction"},"transaction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"transaction"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L17"},"packages/core/src/events/EventSubscriber.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uow"},"uow"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"uow"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.unitofwork"},(0,i.kt)("em",{parentName:"a"},"UnitOfWork"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L18"},"packages/core/src/events/EventSubscriber.ts:18")))}l.isMDXComponent=!0}}]);