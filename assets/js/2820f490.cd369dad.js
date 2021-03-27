(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1110:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=o.a.createContext({}),p=function(t){var e=o.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},m=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?o.a.createElement(b,s(s({ref:e},u),{},{components:r})):o.a.createElement(b,s({ref:e},u))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},230:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return s})),r.d(e,"toc",(function(){return l})),r.d(e,"default",(function(){return p}));var n=r(3),o=r(8),a=(r(0),r(1110)),i={title:"Property Validation"},s={unversionedId:"property-validation",id:"property-validation",isDocsHomePage:!1,title:"Property Validation",description:"Since v4.0.3 the validation needs to be explicitly enabled via validate: true.",source:"@site/docs/property-validation.md",slug:"/property-validation",permalink:"/docs/next/property-validation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/property-validation.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616830543,formattedLastUpdatedAt:"3/27/2021",sidebar:"docs",previous:{title:"Naming Strategy",permalink:"/docs/next/naming-strategy"},next:{title:"Migrations",permalink:"/docs/next/migrations"}},l=[],u={toc:l};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Since v4.0.3 the validation needs to be explicitly enabled via ",Object(a.b)("inlineCode",{parentName:"p"},"validate: true"),".\nIt has performance implications and usually should not be needed, as long as\nyou don't modify your entities via ",Object(a.b)("inlineCode",{parentName:"p"},"Object.assign()"),".")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MirkoORM")," will validate your properties before actual persisting happens. It will try to fix wrong\ndata types for you automatically. If automatic conversion fails, it will throw an error. You can\nenable strict mode to disable this feature and let ORM throw errors instead. Validation is triggered\nwhen persisting the entity. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// number instead of string will throw\nconst author = new Author('test', 'test');\nwrap(author).assign({ name: 111, email: 222 });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.name of type 'string' to '111' of type 'number'\"\n\n// string date with unknown format will throw\nwrap(author).assign(author, { name: '333', email: '444', born: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.born of type 'date' to 'asd' of type 'string'\"\n\n// string date with correct format will be auto-corrected\nwrap(author).assign({ name: '333', email: '444', born: '2018-01-01' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// Date object will be ok\nwrap(author).assign({ born: new Date() });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// null will be ok\nwrap(author).assign({ born: null });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born); // null\n\n// string number with correct format will be auto-corrected\nwrap(author).assign({ age: '21' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.age); // number 21\n\n// string instead of number with will throw\nwrap(author).assign({ age: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'asd' of type 'string'\"\nwrap(author).assign({ age: new Date() });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to '2019-01-17T21:14:23.875Z' of type 'date'\"\nwrap(author).assign({ age: false });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'false' of type 'boolean'\"\n")))}p.isMDXComponent=!0}}]);