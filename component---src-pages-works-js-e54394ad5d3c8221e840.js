(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return E});t(35);var l=t(0),n=t.n(l),r=t(148),c=t(154),i=t(152),s=t(156),m=t(157),o=t(159);function u(e){var a=e.id,t=e.size,l=e.title,c=e.icon,i=e.summary,s=e.price,u=e.category;return n.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},n.a.createElement(r.a,{to:"/works/"+a.replace(/\./g,"-"),className:"page-app"},n.a.createElement("div",{className:"app-top"},n.a.createElement(o.a,{src:c}),n.a.createElement("div",{className:"app-title"},n.a.createElement("h5",{className:"title"},l),n.a.createElement(m.a,null))),n.a.createElement("div",{className:"app-content"},n.a.createElement("div",{className:"text"},i),n.a.createElement("ul",{className:"app-table"},n.a.createElement("li",null,n.a.createElement("div",{className:"table-title"},"Size"),n.a.createElement("div",{className:"table-content"},t)),n.a.createElement("li",null,n.a.createElement("div",{className:"table-title"},"Kategori"),n.a.createElement("div",{className:"table-content"},u)),n.a.createElement("li",null,n.a.createElement("div",{className:"table-title"},"Price"),n.a.createElement("div",{className:"table-content"},s))))))}function d(e){if(0===e)return"0 Byte";var a=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,a),2)+" "+["Bytes","KB","MB","GB","TB"][a]}a.default=function(e){var a=e.data,t=a.ios,l=a.android;return n.a.createElement(c.a,{headerWhite:!0},n.a.createElement(i.a,{title:"Semua Portofolio"}),n.a.createElement("section",{className:"page"},n.a.createElement(s.a,{appTitle:"Semua Portofolio"}),n.a.createElement("div",{className:"page-bottom pbottom-70"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},l.nodes.map(function(e){var a=e.appId,t=e.size,l=e.title,r=e.icon,c=e.summary,i=e.price,s=e.category;return n.a.createElement(u,{id:a,icon:r,category:s,title:l,size:t,price:i,summary:c})}),t.nodes.map(function(e){var a=e.bundleId,t=e.size,l=e.title,r=e.icon,c=e.summary,i=e.price,s=e.category;return n.a.createElement(u,{id:a,icon:r,category:s.join(","),title:l,size:d(t),price:0===i?"Free":"$"+i,summary:c.substring(0,150).trim()+"..."})}))))))};var E="574012745"},148:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var l=t(0),n=t.n(l),r=t(4),c=t.n(r),i=t(33),s=t.n(i);t.d(a,"a",function(){return s.a});t(149);var m=n.a.createContext({}),o=function(e){return n.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,a,t){var l;e.exports=(l=t(151))&&l.default||l},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile"}}}}},151:function(e,a,t){"use strict";t.r(a);t(34);var l=t(0),n=t.n(l),r=t(4),c=t.n(r),i=t(55),s=t(2),m=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?n.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},152:function(e,a,t){"use strict";var l=t(153),n=t(0),r=t.n(n),c=t(4),i=t.n(c),s=t(155),m=t.n(s);function o(e){var a=e.description,t=e.lang,n=e.meta,c=e.keywords,i=e.title,s=l.data.site,o=a||s.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(n)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=o},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},154:function(e,a,t){"use strict";var l=t(150),n=t(0),r=t.n(n),c=t(4),i=t.n(c),s=t(148),m=function(e){e.siteTitle;var a=e.headerWhite;return r.a.createElement("header",{className:"header-area "+(a?"header-white":"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("nav",{className:"main-nav"},r.a.createElement(s.a,{to:"/",className:"logo"},r.a.createElement("img",{src:"../images/orange-logo-white.svg",className:"light-logo",alt:"Gaus"}),r.a.createElement("img",{src:"../images/orange-logo-dark.svg",className:"dark-logo",alt:"Gaus"})),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works"},"SEMUA PORTOFOLIO")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return window.scrollTo(0,document.body.scrollHeight)},className:"btn-nav-line"},"HUBUNGI KAMI"))),r.a.createElement("a",{className:"menu-trigger"},r.a.createElement("span",null,"Menu")))))))};m.propTypes={siteTitle:i.a.string,headerWhite:i.a.bool},m.defaultProps={siteTitle:"",headerWhite:!1};var o=m,u=function(e){var a=e.children,t=e.headerWhite;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{headerWhite:t,siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,a),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},r.a.createElement("img",{src:"../images/orange-logo-white.svg",className:"logo",alt:""}),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"Kami membantu klien mengembangkan bisnis yang ramping dan gesit dengan mengurangi ",r.a.createElement("b",null,"biaya")," dan ",r.a.createElement("b",null,"waktu")," development sehingga bisa ",r.a.createElement("b",null,"secepatnya release ke pasar dengan biaya yang murah")))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Helpful Links"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Portofolio"))))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Latest Apps"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudaprama-cryptoexplorer"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Crypto Watcher"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudapramadjunaedi-authorized"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"authORIzed"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yuda-movie"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Movie DB"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudapramadjunaedi-inventory"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"SIM"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudapramadjunaedi-course"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Kursus"))))),r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12"},r.a.createElement("h5",null,"Hubungi Kami"),r.a.createElement("div",{className:"address"},r.a.createElement("p",null,"Jl Tebet Timur Dalam Raya No 26, Tebet, Jakarta"),r.a.createElement("p",null,"WhatsApp: ",r.a.createElement("a",{href:"tel:+6282123603968"},"082123603968"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",{className:"copyright"},"© "+(new Date).getFullYear()+" Gaus. All Rights Reserved."))))))},data:l})};u.propTypes={children:i.a.node.isRequired,headerWhite:i.a.bool},u.defaultProps={headerWhite:!1};a.a=u},156:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(4),c=t.n(r),i=t(148),s=function(e){var a=e.appTitle;return n.a.createElement("div",{className:"cover","data-image":"assets/images/photos/parallax.jpg"},n.a.createElement("div",{className:"page-top"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("h1",null,a)),n.a.createElement("div",{className:"col-lg-12 text-center"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",null,n.a.createElement(i.a,{to:"/"},"Home")),"Semua Portofolio"===a?null:n.a.createElement("li",null,n.a.createElement(i.a,{to:"/works"},"Semua Portofolio")),n.a.createElement("li",{className:"active"},a)))))))};s.propTypes={appTitle:c.a.string},a.a=s},157:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){return n.a.createElement("ul",{className:"stars"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star"})),n.a.createElement("li",null,"("+(Math.floor(91*Math.random())+10)+")"))}},159:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(4),c=function(e){var a=e.src;return n.a.createElement("div",{className:"icon"},n.a.createElement("img",{style:{width:75,height:75,borderRadius:"25%"},src:a,className:"img-fluid",alt:""}))};c.propTypes={src:t.n(r).a.string},a.a=c}}]);
//# sourceMappingURL=component---src-pages-works-js-e54394ad5d3c8221e840.js.map