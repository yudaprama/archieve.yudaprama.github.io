(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return p});t(35);var n=t(0),l=t.n(n),r=t(149),c=t(155),i=t(153),s=t(157),m=t(158),o=t(160);function u(e){var a=e.id,t=e.size,n=e.title,c=e.icon,i=e.summary,s=e.price,u=e.category;return l.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},l.a.createElement(r.a,{to:"/works/"+a.replace(/\./g,"-"),className:"page-app"},l.a.createElement("div",{className:"app-top"},l.a.createElement(o.a,{src:c}),l.a.createElement("div",{className:"app-title"},l.a.createElement("h5",{className:"title"},n),l.a.createElement(m.a,null))),l.a.createElement("div",{className:"app-content"},l.a.createElement("div",{className:"text"},i),l.a.createElement("ul",{className:"app-table"},l.a.createElement("li",null,l.a.createElement("div",{className:"table-title"},"Size"),l.a.createElement("div",{className:"table-content"},t)),l.a.createElement("li",null,l.a.createElement("div",{className:"table-title"},"Kategori"),l.a.createElement("div",{className:"table-content"},u)),l.a.createElement("li",null,l.a.createElement("div",{className:"table-title"},"Price"),l.a.createElement("div",{className:"table-content"},s))))))}function d(e){if(0===e)return"0 Byte";var a=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,a),2)+" "+["Bytes","KB","MB","GB","TB"][a]}a.default=function(e){var a=e.data,t=a.ios,n=a.android;return l.a.createElement(c.a,{headerWhite:!0},l.a.createElement(i.a,{title:"Semua Portofolio"}),l.a.createElement("section",{className:"page"},l.a.createElement(s.a,{appTitle:"Semua Portofolio"}),l.a.createElement("div",{className:"page-bottom pbottom-70"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},n.nodes.map(function(e,a){var t=e.appId,n=e.size,r=e.title,c=e.icon,i=e.summary,s=e.price,m=e.category;return l.a.createElement(u,{key:t,id:t,icon:c,category:m,title:r,size:n,price:s,summary:i})}),t.nodes.map(function(e){var a=e.bundleId,t=e.size,n=e.title,r=e.icon,c=e.summary,i=e.price,s=e.category;return l.a.createElement(u,{key:a,id:a,icon:r,category:s.join(","),title:n,size:d(t),price:0===i?"Free":"$"+i,summary:c.substring(0,150).trim()+"..."})}))))))};var p="574012745"},149:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(33),s=t.n(i);t.d(a,"a",function(){return s.a});t(150);var m=l.a.createContext({}),o=function(e){return l.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile Android iOS"}}}}},152:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(55),s=t(2),m=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},153:function(e,a,t){"use strict";var n=t(154),l=t(0),r=t.n(l),c=t(4),i=t.n(c),s=t(156),m=t.n(s);function o(e){var a=e.description,t=e.lang,l=e.meta,c=e.keywords,i=e.title,s=n.data.site,o=a||s.siteMetadata.description,u=c||s.siteMetadata.keywords;return r.a.createElement(m.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(l)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=o},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile Android iOS",description:"Jasa Aplikasi Mobile Yang Murah dan Cepat, Berkualitas Tinggi, Berpengalaman",author:"yuda prama",keywords:["Jasa pembuatan aplikasi Android","Jasa pembuatan aplikasi iOS","jasa pembuatan aplikasi mobile","mobile app developer indonesia","Android app developer","iOS app developer","Mobile app designer","Jakarta","Indonesia"]}}}}},155:function(e,a,t){"use strict";var n=t(151),l=t(0),r=t.n(l),c=t(4),i=t.n(c),s=t(149),m=t(7),o=t.n(m),u=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={showMenu:!1},a}return o()(a,e),a.prototype.render=function(){var e=this;return r.a.createElement("header",{className:"header-area "+(this.props.headerWhite?"header-white":"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("nav",{className:"main-nav"},r.a.createElement(s.a,{to:"/",className:"logo"},r.a.createElement("img",{src:"/images/orange-logo-white.svg",className:"light-logo",alt:"Gaus"}),r.a.createElement("img",{src:"/images/orange-logo-dark.svg",className:"dark-logo",alt:"Gaus"})),r.a.createElement("ul",{className:"nav",style:this.state.showMenu?{display:"block"}:null},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works"},"SEMUA PORTOFOLIO")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){e.setState({showMenu:!e.state.showMenu}),window.scrollTo(0,document.body.scrollHeight)},className:"btn-nav-line"},"HUBUNGI KAMI"))),r.a.createElement("a",{onClick:function(){return e.setState({showMenu:!e.state.showMenu})},className:"menu-trigger"},r.a.createElement("span",null,"Menu")))))))},a}(l.Component);u.propTypes={siteTitle:i.a.string,headerWhite:i.a.bool},u.defaultProps={siteTitle:"",headerWhite:!1};var d=u,p=function(e){var a=e.children,t=e.headerWhite;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{headerWhite:t,siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,a),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},r.a.createElement("img",{src:"../images/orange-logo-white.svg",className:"logo",alt:""}),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"Kami membantu klien mengembangkan bisnis yang ramping dan gesit dengan mengurangi ",r.a.createElement("b",null,"biaya")," dan ",r.a.createElement("b",null,"waktu")," development sehingga bisa ",r.a.createElement("b",null,"secepatnya release ke pasar dengan biaya yang murah")))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Helpful Links"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Portofolio"))))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Latest Apps"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudaprama-cryptoexplorer"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Crypto Watcher"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudapramadjunaedi-authorized"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"authORIzed"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yuda-movie"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Movie DB"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudapramadjunaedi-inventory"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"SIM"))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/works/com-yudapramadjunaedi-course"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Kursus"))))),r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12"},r.a.createElement("h5",null,"Hubungi Kami"),r.a.createElement("div",{className:"address"},r.a.createElement("p",null,"Jl Tebet Timur Dalam Raya No 26, Tebet, Jakarta"),r.a.createElement("p",null,"WhatsApp: ",r.a.createElement("a",{href:"https://wa.me/6282123603968?text=Saya ingin bertanya perihal jasa aplikasi"},"082123603968"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",{className:"copyright"},"© "+(new Date).getFullYear()+" Gaus. All Rights Reserved."))))))},data:n})};p.propTypes={children:i.a.node.isRequired,headerWhite:i.a.bool},p.defaultProps={headerWhite:!1};a.a=p},157:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(149),s=function(e){var a=e.appTitle;return l.a.createElement("div",{className:"cover","data-image":"assets/images/photos/parallax.jpg"},l.a.createElement("div",{className:"page-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("h1",null,a)),l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",null,l.a.createElement(i.a,{to:"/"},"Home")),"Semua Portofolio"===a?null:l.a.createElement("li",null,l.a.createElement(i.a,{to:"/works"},"Semua Portofolio")),l.a.createElement("li",{className:"active"},a)))))))};s.propTypes={appTitle:c.a.string},a.a=s},158:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("ul",{className:"stars"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-star active"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-star active"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-star active"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-star active"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-star"})),l.a.createElement("li",null,"("+(Math.floor(91*Math.random())+10)+")"))}},160:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),c=function(e){var a=e.src;return l.a.createElement("div",{className:"icon"},l.a.createElement("img",{style:{width:75,height:75,borderRadius:"25%"},src:a,className:"img-fluid",alt:""}))};c.propTypes={src:t.n(r).a.string},a.a=c}}]);
//# sourceMappingURL=component---src-pages-works-js-3e4387423012c66258ce.js.map