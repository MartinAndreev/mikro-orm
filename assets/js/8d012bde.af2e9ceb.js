(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,y=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?o.a.createElement(y,s(s({ref:t},l),{},{components:n})):o.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},631:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(8),a=(n(0),n(1110)),i={title:"Creating Custom Driver"},s={unversionedId:"custom-driver",id:"version-4.5/custom-driver",isDocsHomePage:!1,title:"Creating Custom Driver",description:"If you want to use database that is not currently supported, you can implement your own driver.",source:"@site/versioned_docs/version-4.5/custom-driver.md",slug:"/custom-driver",permalink:"/docs/custom-driver",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/custom-driver.md",version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1616705805,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-4.5/docs",previous:{title:"Using AsyncLocalStorage",permalink:"/docs/async-local-storage"}},c=[{value:"Platform",id:"platform",children:[]},{value:"SchemaHelper",id:"schemahelper",children:[]},{value:"Connection",id:"connection",children:[]},{value:"Driver",id:"driver",children:[]}],l={toc:c};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you want to use database that is not currently supported, you can implement your own driver.\nTo do so, you will need to design 4 classes:"),Object(a.b)("h2",{id:"platform"},"Platform"),Object(a.b)("p",null,"Platform is a class that provides information about available features of given driver: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Platform } from '@mikro-orm/core';\n\nexport class MyCustomPlatform extends Platform {\n  \n  protected abstract schemaHelper: MyCustomSchemaHelper;\n\n  // here you can override default settings\n  usesPivotTable(): boolean;\n  supportsTransactions(): boolean;\n  supportsSavePoints(): boolean;\n  getNamingStrategy(): { new (): NamingStrategy; };\n  getIdentifierQuoteCharacter(): string;\n  getParameterPlaceholder(index?: number): string;\n  usesReturningStatement(): boolean;\n  normalizePrimaryKey<T = number | string>(data: IPrimaryKey): T;\n  denormalizePrimaryKey(data: IPrimaryKey): IPrimaryKey;\n  getSerializedPrimaryKeyField(field: string): string;\n\n}\n")),Object(a.b)("h2",{id:"schemahelper"},"SchemaHelper"),Object(a.b)("p",null,"Part of platform is a ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaHelper"),", that provides information about how to build schema."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { SchemaHelper } from '@mikro-orm/core';\n\nexport class MyCustomSchemaHelper extends SchemaHelper {\n  \n  // here you can override default settings\n  getIdentifierQuoteCharacter(): string;\n  getSchemaBeginning(): string;\n  getSchemaEnd(): string;\n  getSchemaTableEnd(): string;\n  getAutoIncrementStatement(meta: EntityMetadata): string;\n  getPrimaryKeySubtype(meta: EntityMetadata): string;\n  getTypeDefinition(prop: EntityProperty, types?: Record<string, string>, lengths?: Record<string, number>): string;\n  getUnsignedSuffix(prop: EntityProperty): string;\n  supportsSchemaConstraints(): boolean;\n  supportsSchemaMultiAlter(): boolean;\n  supportsSequences(): boolean;\n  quoteIdentifier(field: string): string;\n  dropTable(meta: EntityMetadata): string;\n  indexForeignKeys(): boolean;\n\n}\n")),Object(a.b)("h2",{id:"connection"},"Connection"),Object(a.b)("p",null,"Next part is connection wrapper, that will be responsible for querying the database:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Connection } from '@mikro-orm/core';\n\nexport class MyCustomConnection extends Connection {\n  \n  // implement abstract methods\n  connect(): Promise<void>;\n  isConnected(): Promise<boolean>;\n  close(force?: boolean): Promise<void>;\n  getDefaultClientUrl(): string;\n  execute(query: string, params?: any[], method?: 'all' | 'get' | 'run'): Promise<QueryResult | any | any[]>;\n\n}\n")),Object(a.b)("h2",{id:"driver"},"Driver"),Object(a.b)("p",null,"Last part is driver, that is responsible for using the connection to persist changes to\ndatabase. If you are building SQL driver, it might be handy to extend ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractSqlDriver"),",\nif not, extend ",Object(a.b)("inlineCode",{parentName:"p"},"DatabaseDriver")," abstract class. "),Object(a.b)("p",null,"If you want to have absolute control, you can implement the whole driver yourself via\n",Object(a.b)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { DatabaseDriver } from '@mikro-orm/core';\n\nexport class MyCustomSchemaHelper extends DatabaseDriver {\n\n  // initialize connection and platform\n  protected readonly connection = new MyCustomConnection(this.config);\n  protected readonly platform = new MyCustomPlatform;\n\n  // and implement abstract methods\n  find<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, populate?: string[], orderBy?: Record<string, QueryOrder>, limit?: number, offset?: number): Promise<T[]>;\n  findOne<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | string, populate: string[]): Promise<T | null>;\n  nativeInsert<T extends AnyEntityType<T>>(entityName: string, data: EntityData<T>): Promise<QueryResult>;\n  nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | IPrimaryKey, data: EntityData<T>): Promise<QueryResult>;\n  nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | IPrimaryKey): Promise<QueryResult>;\n  count<T extends AnyEntity>(entityName: string, where: FilterQuery<T>): Promise<number>;\n\n}\n")))}m.isMDXComponent=!0}}]);