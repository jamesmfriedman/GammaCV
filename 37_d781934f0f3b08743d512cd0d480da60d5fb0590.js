webpackJsonp([37],{163:function(e,t,a){"use strict";var n=a(64),r=a.n(n),i=a(70),l=a.n(i),o=a(68),c=a.n(o),s=a(69),p=a.n(s),m=a(71),u=a.n(m),d=a(72),_=a.n(d),h=a(16),f=a.n(h),y=a(17),g=a.n(y),x=a(90),b=a(73),v=a.n(b),E=a(250),k=a(220),w=a(255),j=a.n(w),T=function(e){function t(){return c()(this,t),u()(this,(t.__proto__||l()(t)).apply(this,arguments))}return _()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.check(),this.unlisten=k.a.listen(this.check.bind(this))}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"getOpts",value:function(){return{behavior:(this.props.smooth,"instant"),block:"start"}}},{key:"check",value:function(){decodeURIComponent(window.location.hash)===this.props.to&&this.node.scrollIntoView(this.getOpts())}},{key:"render",value:function(){var e=this;return f.a.createElement(x.a,{to:this.props.to,className:v()(this.props.className,j.a.link),onClick:function(){return e.node.scrollIntoView(e.getOpts())}},f.a.createElement("span",{className:j.a.wrapper,ref:function(t){e.node=t}},this.props.children,f.a.createElement(E.a,{className:j.a.anchor})))}}]),t}(h.Component);T.propTypes=r()({},x.a.propTypes,{smooth:g.a.bool}),T.defaultProps=r()({},x.a.defaultProps,{smooth:!1}),t.a=T},165:function(e,t){e.exports={Tensor:"tensor#Tensor",Session:"session#Session"}},166:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=a(260),c=a(276),s=a.n(c),p=function(e){return r.a.createElement("div",{className:s.a.main},e.data.map(function(e,t){return r.a.createElement(o.a,{data:e,key:t})}))};p.propTypes={data:l.a.arrayOf(l.a.object)},p.defaultProps={data:[]},t.a=p},167:function(e,t,a){"use strict";var n=a(261);a.d(t,"f",function(){return n.a});var r=a(262);a.d(t,"g",function(){return r.a});var i=a(263);a.d(t,"e",function(){return i.a});var l=a(264);a.d(t,"c",function(){return l.a});var o=a(265);a.d(t,"a",function(){return o.a});var c=a(266);a.d(t,"m",function(){return c.a});var s=a(267);a.d(t,"i",function(){return s.a});var p=a(268);a.d(t,"d",function(){return p.a});var m=a(269);a.d(t,"j",function(){return m.a});var u=a(272);a.d(t,"k",function(){return u.a});var d=a(273);a.d(t,"l",function(){return d.a});var _=a(274);a.d(t,"h",function(){return _.a});var h=a(275);a.d(t,"b",function(){return h.a})},168:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"l",function(){return r}),a.d(t,"j",function(){return i}),a.d(t,"k",function(){return l}),a.d(t,"b",function(){return o}),a.d(t,"t",function(){return c}),a.d(t,"f",function(){return s}),a.d(t,"i",function(){return p}),a.d(t,"c",function(){return m}),a.d(t,"n",function(){return u}),a.d(t,"g",function(){return d}),a.d(t,"m",function(){return _}),a.d(t,"h",function(){return h}),a.d(t,"a",function(){return f}),a.d(t,"o",function(){return y}),a.d(t,"r",function(){return g}),a.d(t,"s",function(){return x}),a.d(t,"q",function(){return b}),a.d(t,"p",function(){return v}),a.d(t,"d",function(){return E});var n="heading",r="paragraph",i="list",l="list-item",o="code",c="text",s="image",p="link",m="codespan",u="strong",d="italic",_="space",h="line",f="blockquote",y="table",g="table-header-raw",x="table-raw",b="table-head-cell",v="table-cell",E="documentation"},232:function(e,t,a){"use strict";var n=a(96),r=a.n(n),i=a(16),l=a.n(i),o=a(17),c=a.n(o),s=a(73),p=a.n(s),m=a(76),u=(a.n(m),a(163)),d=a(257),_=a(166),h=a(169),f=a.n(h),y=a(278),g=a.n(y),x=function(e,t){return e.examples&&e.examples.length?l.a.createElement("div",{key:"examples",className:g.a.examples},(n=t,((a=e)&&a.examples||[]).map(function(e,t){return l.a.createElement("div",{className:g.a.example_item,key:t},n?null:l.a.createElement(m.Typography,{className:g.a.descr_title,color:"grey",type:""},e.title.toUpperCase()),l.a.createElement(m.HighlightCode,{lang:"js"},e.description))}))):null;var a,n},b=function(e,t){return Array.isArray(e.params)&&e.params.length?l.a.createElement("div",{key:"params",className:g.a.props},l.a.createElement(d.b,{removeTitle:t,data:e.params})):null},v=function e(t,a){var n=a.intl,i=a.theme,o=t.data,c=t.inner;return o?l.a.createElement("div",{className:p()(g.a.section_wrapper,r()({},g.a.inner,c)),id:encodeURIComponent(o.name)},l.a.createElement("div",{className:g.a.title_block},l.a.createElement(u.a,{smooth:!0,to:"#"+encodeURIComponent(o.name)},o.static?l.a.createElement(m.Typography,{color:"grey",type:t.inner?"h4":"h2",mobileType:"b1",className:g.a.label},"Static"):null,function(e,t){return e.type&&"method"!==e.type?l.a.createElement(m.Typography,{color:"grey",type:t?"h4":"h2",mobileType:"b1",className:g.a.label},(a=e.type.toLowerCase())[0].toUpperCase()+a.slice(1)):null;var a}(o,c),l.a.createElement(m.Typography,{className:g.a.title,color:"black",type:t.inner?"h4":"h2",mobileType:t.inner?"h4":"h3"},l.a.createElement("span",{className:g.a.title_text},o.name||"NONAME"),c&&o.params?l.a.createElement("span",{className:g.a.title_text},"(",o.params.map(function(e){return e.name+(e.optional?"?":"")+(e.rest?", ...":"")}).join(", "),")"):null),o.return?l.a.createElement(m.Typography,{className:g.a.in_place_params,color:"grey",type:t.inner?"h4":"h2",mobileType:t.inner?"h4":"h3"},"=>"," ",l.a.createElement(d.a,{type:t.inner?"h4":"h2",color:"grey",data:(o.returns||o.return).type})," ",(o.returns||o.return).description?"("+(o.returns||o.return).description+")":null):null)),function(e,t,a){return e.description?l.a.createElement("div",{className:g.a.description},t?null:l.a.createElement(m.Typography,{className:g.a.descr_title,color:"grey",type:""},a.getText("Operations.DescrTitle")||""),(n=e.description,l.a.createElement(_.a,{data:n}))):null;var n}(o,c,n),c?[b(o,c),x(o,c)]:[x(o,c),b(o,c)],Array.isArray(o.methods)?l.a.createElement("div",{className:g.a.methods},l.a.createElement(m.Typography,{className:g.a.descr_title,color:"grey",type:""},"METHODS"),o.methods.map(function(t){return l.a.createElement(e,{inner:!0,data:t,key:t.name})})):null):function(e,t){return l.a.createElement("div",{className:g.a.section_wrapper},l.a.createElement(m.Typography,{className:g.a.title,color:"black",type:"h2"},e.getText("Operations.ContributionTitle")),l.a.createElement("div",{className:g.a.description},l.a.createElement(m.Typography,{className:g.a.descr_title,color:"grey",type:""},e.getText("Operations.Visit")," ",l.a.createElement("a",{href:f.a.repository.url,className:t.text_primary},"GitHub"))))}(n,i)};v.propTypes={data:c.a.object,inner:c.a.bool},v.defaultProps={data:{},inner:!1},v.contextTypes={intl:c.a.object,theme:c.a.object};var E=function(e){return e.data.filter(function(e){return e.name||e.class}).map(function(e){return l.a.createElement(v,{key:""+(e.name||e.class),data:e})})};E.propTypes={data:c.a.arrayOf(c.a.object)},E.defaultProps={data:[]},t.a=E},250:function(e,t,a){"use strict";t.a=function(e){return l.a.createElement("svg",r()({viewBox:"0 0 333 333"},e),l.a.createElement("path",{d:"M139.254 205.865l-16.56-16.56c-20.545-20.545-20.545-53.979 0-74.529l99.368-99.368c20.544-20.545 53.978-20.545 74.528 0l16.56 16.56c20.544 20.545 20.544 53.978 0 74.522l-51.068 51.068-8.279-8.28 51.067-51.062c15.977-15.982 15.977-41.993 0-57.964l-16.56-16.559c-15.981-15.976-41.981-15.976-57.963 0l-99.374 99.356c-15.982 15.982-15.982 41.987 0 57.97l16.559 16.559-8.278 8.287z",fill:"#030303"}),l.a.createElement("path",{d:"M36.798 317.971l-16.559-16.559c-20.545-20.545-20.545-53.979 0-74.523l51.062-51.062 8.28 8.28-51.062 51.062c-15.981 15.976-15.981 41.987 0 57.958l16.56 16.559c15.976 15.982 41.987 15.982 57.958 0l99.367-99.361c15.977-15.977 15.977-41.987 0-57.964l-16.56-16.554 8.28-8.279 16.56 16.559c20.545 20.545 20.545 53.978 0 74.523l-99.368 99.361c-20.54 20.557-53.973 20.557-74.518 0z",fill:"#030303"}))};var n=a(64),r=a.n(n),i=a(16),l=a.n(i)},255:function(e,t,a){var n=a(256);"string"==typeof n&&(n=[[e.i,n,""]]),a(66)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},256:function(e,t,a){(t=e.exports=a(65)(!1)).push([e.i,".link_27_g6{color:inherit;font:inherit;font-weight:inherit;font-size:inherit;line-height:inherit;text-decoration:inherit!important}.wrapper_3wrP7{display:inline-block;position:relative}.wrapper_3wrP7 .anchor_KvPoJ{width:20px;opacity:0;position:absolute;top:50%;transform:translateY(-50%);right:calc(100% + 10px)}.wrapper_3wrP7:hover .anchor_KvPoJ{opacity:1}@media (max-width:768px),(max-width:812px) and (max-height:375px){.wrapper_3wrP7 .anchor_KvPoJ{right:calc(100% + 2px)}}",""]),t.locals={link:"link_27_g6",wrapper:"wrapper_3wrP7",anchor:"anchor_KvPoJ"}},257:function(e,t,a){"use strict";a.d(t,"a",function(){return y});var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=a(76),c=(a.n(o),a(90)),s=a(102),p=a(258),m=a.n(p),u=a(165),d=a.n(u),_=function(e,t){var a,n,i=(a=e)[0].toUpperCase()+a.slice(1)||"";return d.a[e]?(n=/^https?:\/\//.test(d.a[e])?d.a[e]:s.a+"/docs/"+d.a[e],r.a.createElement(c.a,{onClick:function(e){return e.stopPropagation()},className:t.text_primary,to:n},i)):i},h=function e(t,a){var i=a.theme,l=t.data,c=void 0;if(!Array.isArray(l))return null;c=[];for(var s=l.map(function(a,n){return t.onlyText?_(a.type,i):r.a.createElement(o.Typography,{className:m.a.type,type:t.type||"b2",color:t.color||("mobile"!==t.deviceType?"dark_grey":"grey"),key:n},_(a.type,i),a.applications?r.a.createElement("span",{className:m.a.applications},".",r.a.createElement("span",null,"<"),r.a.createElement(e,{type:t.type,color:t.color,data:a.applications,onlyText:!0}),r.a.createElement("span",null,">")):null)}),p=0;p<s.length;p+=1)p>0&&c.push(r.a.createElement("span",{key:"|_"+p}," | ")),c.push(s[p]);return r.a.createElement(n.Fragment,null,c)};h.propTypes={deviceType:l.a.string,type:l.a.string,color:l.a.string,data:l.a.oneOfType([l.a.array,l.a.object]),onlyText:l.a.bool},h.contextTypes={theme:l.a.object},h.defaultProps={deviceType:"",data:{},type:"",color:"",onlyText:!1};var f=function(e,t){var a=t.intl,n=t.device,i=e.data,l=e.title,c=e.removeTitle;return r.a.createElement("table",{className:m.a.table},c?null:r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(o.Typography,{color:"grey",type:""},l||a.getText("Operations.Params"))))),r.a.createElement("tbody",null,i.map(function(e,t){var a=e.name,i=e.description,l=e.type,c=e.optional,s=r.a.createElement(h,{deviceType:n.type,data:l});return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(o.Typography,{color:"dark_grey",type:"h6"},a||"",c?"?":"",e.rest?", ...":""),"mobile"===n.type&&s),r.a.createElement("td",{style:{display:"mobile"===n.type?"none":null}},s||""),r.a.createElement("td",null,r.a.createElement(o.Typography,{className:m.a.type,color:"dark_grey",type:"b2"},i||"")))})))};f.propTypes={data:l.a.arrayOf(l.a.object),title:l.a.string,removeTitle:l.a.bool},f.defaultProps={data:{},title:"",removeTitle:!1},f.contextTypes={intl:l.a.object,device:l.a.object,theme:l.a.object};var y=h;t.b=f},258:function(e,t,a){var n=a(259);"string"==typeof n&&(n=[[e.i,n,""]]),a(66)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},259:function(e,t,a){(t=e.exports=a(65)(!1)).push([e.i,".table_1Pnkr{width:100%}.table_1Pnkr th{padding:15px 0;white-space:nowrap}.table_1Pnkr td{padding:20px 10px 20px 0;border-top:1px solid #f6f6f6;width:20%;vertical-align:top}.table_1Pnkr td:nth-child(2){width:30%}.table_1Pnkr td:last-child{width:60px}.table_1Pnkr tr:last-child td{border-bottom:1px solid #f6f6f6}.applications_2HZLh,.optional_jxRpw,.type_2h7n8{display:inline-block}.optional_jxRpw{text-transform:uppercase;padding:3px;margin-top:5px}@media (max-width:768px),(max-width:812px) and (max-height:375px){.table_1Pnkr td{padding:21px 0 30px}.table_1Pnkr td:first-child{width:35%}.type_2h7n8:nth-child(2){margin-top:11px}}",""]),t.locals={table:"table_1Pnkr",type:"type_2h7n8",applications:"applications_2HZLh",optional:"optional_jxRpw"}},260:function(e,t,a){"use strict";var n=a(132),r=a.n(n),i=a(16),l=a.n(i),o=a(17),c=a.n(o),s=a(167),p=a(168),m=function e(t){var a=t.data,n=a.type,i=a.children,o=a.items,c=a.href,m=a.alt,u=a.title,d=a.lang,_=a.depth,h=a.file,f=i||o,y="string"==typeof f,g=function(){return f?y?f:f.map(function(t,a){return"string"==typeof t?t:l.a.createElement(e,{data:t,key:a})}):null};return n===p.e?l.a.createElement(s.m,{type:"h"+_},g()):n===p.l?l.a.createElement(s.m,{type:"b1"},g()):n===p.c?l.a.createElement(s.m,{type:"code"},g()):n===p.n?l.a.createElement(s.m,{type:"strong"},g()):n===p.g?l.a.createElement(s.m,{type:"i"},g()):n===p.a?l.a.createElement(s.m,{type:"blockquote"},g()):n===p.i?l.a.createElement(s.e,{href:c,title:u},g()):n===p.f?l.a.createElement(s.c,{href:c,alt:m,title:u},g()):n===p.b?l.a.createElement(s.a,{lang:d},g()):n===p.j?l.a.createElement(s.f,null,g()):n===p.k?l.a.createElement(s.g,null,g()):n===p.t?l.a.createElement(s.m,null,g()):n===p.m?l.a.createElement(s.i,null):n===p.h?l.a.createElement(s.d,null):n===p.o?l.a.createElement(s.j,{align:t.data.align},g()):n===p.r||n===p.s?l.a.createElement(s.l,null,g()):n===p.q||n===p.p?l.a.createElement(s.k,{head:n===p.q,align:t.data.align},g()):n===p.d?l.a.createElement("div",null,r()(h).map(function(e,t){return l.a.createElement(s.b,{data:h[e],key:t})})):l.a.createElement("div",null,"NEED PARSE TYPE - ",n)};m.propTypes={data:c.a.shape({type:c.a.string.isRequired,children:c.a.oneOfType([c.a.array,c.a.string]),items:c.a.oneOfType([c.a.array,c.a.string]),ordered:c.a.bool,href:c.a.string,alt:c.a.string,title:c.a.string,lang:c.a.string,depth:c.a.number,file:c.a.oneOfType([c.a.object]),align:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.any)])})},m.defaultProps={data:{type:"",children:"",align:[]}},t.a=m},261:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=function(e){var t=e.ordered,a=e.children;return r.a.createElement(t?"ol":"ul",{},a)};o.propTypes={children:l.a.node,ordered:l.a.bool},o.defaultProps={children:null,ordered:!1},t.a=o},262:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=function(e){var t=e.children;return r.a.createElement("li",null,t)};o.propTypes={children:l.a.node},o.defaultProps={children:null},t.a=o},263:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=a(90),c=function(e,t){var a=t.theme,n=e.children,i=e.href,l=e.title;return/^https?:\/\//.test(i)?r.a.createElement("a",{href:i,title:l,className:a.text_primary},n):r.a.createElement(o.a,{to:i,title:l,className:a.text_primary},n)};c.propTypes={children:l.a.node,href:l.a.string,title:l.a.string},c.contextTypes={theme:l.a.object},c.defaultProps={children:null,href:"",title:""},t.a=c},264:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=a(76),c=(a.n(o),function(e){var t=e.alt,a=e.href,n=e.title;return r.a.createElement(o.ProgressiveImage,{src:a},function(e,a){return r.a.createElement("img",{src:e,alt:t,title:n,style:{display:"block",filter:a?"blur(5px)":"none"}})})});c.propTypes={alt:l.a.string,href:l.a.string,title:l.a.string},c.defaultProps={alt:"",href:"",title:""},t.a=c},265:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=a(76),c=(a.n(o),function(e){var t=e.children,a=e.lang;return r.a.createElement(o.HighlightCode,{className:"highlight",lang:a.toLowerCase()},t)});c.propTypes={children:l.a.node,lang:l.a.string},c.defaultProps={children:null,lang:"none"},t.a=c},266:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=a(76),c=(a.n(o),a(163)),s=function(e,t){var a=t.theme,n=e.children,i=e.type;if("strong"===i||"i"===i||"blockquote"===i||"code"===i){var l={};return"blockquote"===i&&(l.className=a.fill_light_grey),"code"===i&&(l.className=a.fill_light_grey,l.style={padding:"0px 7px",display:"inline-block",borderRadius:"3px"}),r.a.createElement(i,l,n)}return/h\d/.test(i)&&Array.isArray(n)&&"string"==typeof n[0]?r.a.createElement(o.Typography,{type:i||"b1"},r.a.createElement(c.a,{smooth:!0,to:"#"+n[0]},n)):r.a.createElement(o.Typography,{type:i||"b1"},n)};s.propTypes={children:l.a.node,type:l.a.oneOf(["h1","h2","h3","h4","h5","h6","b1","strong","i","blockquote","","code"])},s.defaultProps={children:null,type:""},s.contextTypes={theme:l.a.object},t.a=s},267:function(e,t,a){"use strict";var n=a(16),r=a.n(n);t.a=function(){return r.a.createElement("br",null)}},268:function(e,t,a){"use strict";var n=a(16),r=a.n(n);t.a=function(){return r.a.createElement("hr",null)}},269:function(e,t,a){"use strict";var n=a(64),r=a.n(n),i=a(16),l=a.n(i),o=a(17),c=a.n(o),s=a(168),p=a(270);function m(e,t){return l.a.cloneElement(t,r()({},t.props,{data:r()({},t.props.data,{children:t.props.data.children.map(function(t,a){return r()({},t,{align:e[a]||""})})})}))}a.n(p);var u=function(e){var t=e.children,a=e.align,n=[],r=[];return t.forEach(function(e){return e.props.data.type===s.r?n.push(m(a,e)):r.push(m(a,e))}),l.a.createElement("table",{className:p.table},n.length&&l.a.createElement("thead",null,n),r.length&&l.a.createElement("tbody",null,r))};u.propTypes={children:c.a.node,align:c.a.arrayOf(c.a.any)},u.defaultProps={children:null,align:[]},t.a=u},270:function(e,t,a){var n=a(271);"string"==typeof n&&(n=[[e.i,n,""]]),a(66)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},271:function(e,t,a){(t=e.exports=a(65)(!1)).push([e.i,".table_1FBIQ{width:100%}.table_1FBIQ th{padding:15px 0;white-space:nowrap}.table_1FBIQ td{padding:20px 10px 20px 0;border-top:1px solid #f6f6f6;width:20%;vertical-align:top}.table_1FBIQ td:last-child{width:60px}",""]),t.locals={table:"table_1FBIQ"}},272:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=function(e){var t=e.children,a=e.head,n=e.align;return r.a.createElement(a?"th":"td",{style:{textAlign:n||""}},t)};o.propTypes={children:l.a.node,head:l.a.bool,align:l.a.string},o.defaultProps={children:null,head:!1,align:""},t.a=o},273:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=function(e){var t=e.children;return r.a.createElement("tr",null,t)};o.propTypes={children:l.a.node},o.defaultProps={children:null},t.a=o},274:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=function(e){var t=e.children;return r.a.createElement("div",{className:"pad_left"},t)};o.propTypes={children:l.a.node},o.defaultProps={children:null},t.a=o},275:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(17),l=a.n(i),o=a(167),c=function(e){var t=e.data,a=t.description,n=t.kind,i=t.methods,l=t.name,c=t.params;return r.a.createElement("div",null,r.a.createElement("br",null),n&&r.a.createElement(o.m,{type:"code"},n),l&&r.a.createElement(o.m,{type:"h2"},l),a&&r.a.createElement(o.m,{type:"p"},a),c.length?r.a.createElement("div",null,r.a.createElement(o.m,{type:"h3"},"Arguments"),r.a.createElement(o.f,null,c.map(function(e){return r.a.createElement(o.g,null,r.a.createElement(o.m,{type:"strong"},e.name," (",e.types.join("|"),")"),e.description&&r.a.createElement(o.m,null," - ",e.description))}))):null,i.length?r.a.createElement("div",null,r.a.createElement(o.m,{type:"h3"},"Methods"),i.map(function(e){return r.a.createElement(o.m,null,r.a.createElement(o.m,{type:"code"},r.a.createElement(o.m,{type:"strong"},e.name,"(",e.params&&e.params.map(function(e){return e.name}).join(", "),")")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.h,null,e.description&&r.a.createElement(o.m,{type:"p"},e.description),e.params&&r.a.createElement(o.f,null,e.params.map(function(e){return r.a.createElement(o.g,null,r.a.createElement(o.m,{type:"strong"},e.name," (",e.types.join("|"),")"),e.description&&r.a.createElement(o.m,null," - ",e.description))}))))})):null,r.a.createElement(o.d,null))};c.propTypes={data:l.a.shape({description:l.a.string,kind:l.a.string,methods:l.a.arrayOf(l.a.object),name:l.a.string,params:l.a.arrayOf(l.a.object),properties:l.a.arrayOf(l.a.object)})},c.defaultProps={data:{description:"",kind:"",methods:[],name:"",params:[],properties:[]}},t.a=c},276:function(e,t,a){var n=a(277);"string"==typeof n&&(n=[[e.i,n,""]]),a(66)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},277:function(e,t,a){(t=e.exports=a(65)(!1)).push([e.i,".main_3VmJk{max-width:900px;width:100%;display:inline-block}.main_3VmJk h1,.main_3VmJk h2,.main_3VmJk h3,.main_3VmJk h4,.main_3VmJk h5,.main_3VmJk h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}.main_3VmJk ol,.main_3VmJk ul{padding-left:2em}.main_3VmJk ol ol,.main_3VmJk ol ul,.main_3VmJk ul ol,.main_3VmJk ul ul{margin-top:0;margin-bottom:0}.main_3VmJk li>p{margin-top:16px}.main_3VmJk li+li{margin-top:.25em}.main_3VmJk dl,.main_3VmJk ol,.main_3VmJk p,.main_3VmJk pre,.main_3VmJk table,.main_3VmJk ul{margin-top:0;margin-bottom:16px}.main_3VmJk blockquote{margin:0;padding:1em}.main_3VmJk blockquote>p{margin:0}.main_3VmJk blockquote :first-child{margin-top:0}.main_3VmJk blockquote :first-child :last-child{margin-bottom:0}.main_3VmJk a{background-color:transparent;-webkit-text-decoration-skip:objects;text-decoration:none}.main_3VmJk a:hover{text-decoration:underline}.main_3VmJk a:active,.main_3VmJk a:hover{outline-width:0}@media (max-width:768px),(max-width:812px) and (max-height:375px){.main_3VmJk{width:100%}}",""]),t.locals={main:"main_3VmJk"}},278:function(e,t,a){var n=a(279);"string"==typeof n&&(n=[[e.i,n,""]]),a(66)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},279:function(e,t,a){(t=e.exports=a(65)(!1)).push([e.i,".content_wrapper_3GiRd{height:calc(100% - 80px);padding:115px 150px;overflow:auto;display:inline-block;vertical-align:top;-webkit-overflow-scrolling:touch}.title_block_3u1Gn{margin-bottom:55px}.title_2ZPYm{position:relative}.label_3tuNc,.title_2ZPYm{vertical-align:bottom;display:inline-block}.label_3tuNc{margin-right:10px}.args_390Tm{margin-left:10px}.args_390Tm,.title_text_2db2O{display:inline-block;vertical-align:middle}.description_2AdlD{margin-bottom:65px}.descr_title_jM-uV{margin-bottom:5px}.examples_2fwC6{margin-bottom:73px}.section_wrapper_1RkN7{max-width:900px}.section_wrapper_1RkN7+.section_wrapper_1RkN7{margin-top:75px}.example_item_11aEZ{margin-bottom:10px}.example_item_11aEZ:last-child{margin-bottom:0}.methods_2OoXe{margin-top:75px}.inner_16rf5.section_wrapper_1RkN7{margin-top:65px}.inner_16rf5 .title_block_3u1Gn{margin-bottom:15px}.inner_16rf5 .description_2AdlD{margin-bottom:34px}.inner_16rf5 .examples_2fwC6{margin:50px 0 0}.in_place_params_3a_mS{display:inline-block;margin-left:5px}@media (max-width:768px),(max-width:812px) and (max-height:375px){.content_wrapper_3GiRd{width:100%;padding:114px 30px 80px}.title_2ZPYm{display:block}.label_3tuNc{padding:0}}",""]),t.locals={content_wrapper:"content_wrapper_3GiRd",title_block:"title_block_3u1Gn",title:"title_2ZPYm",label:"label_3tuNc",args:"args_390Tm",title_text:"title_text_2db2O",description:"description_2AdlD",descr_title:"descr_title_jM-uV",examples:"examples_2fwC6",section_wrapper:"section_wrapper_1RkN7",example_item:"example_item_11aEZ",methods:"methods_2OoXe",inner:"inner_16rf5",in_place_params:"in_place_params_3a_mS"}},280:function(e,t,a){"use strict";var n=a(70),r=a.n(n),i=a(68),l=a.n(i),o=a(69),c=a.n(o),s=a(71),p=a.n(s),m=a(72),u=a.n(m),d=a(16),_=a.n(d),h=a(17),f=a.n(h),y=a(90),g=a(76),x=(a.n(g),a(73)),b=a.n(x),v=a(102),E=a(222),k=a(159),w=a.n(k),j=a(281),T=a.n(j),N=function(e){if(e.name)return e.name.toLowerCase().split(" ").join("_");var t=/(\w+)\/?((?=index.js)|\.js$)/.exec(e.path);return t&&t[1]?t[1]:e.path.split(/[./]/).filter(function(e){return e}).join("_")},P=function(e){function t(){var e,a,n,i;l()(this,t);for(var o=arguments.length,c=Array(o),s=0;s<o;s++)c[s]=arguments[s];return a=n=p()(this,(e=t.__proto__||r()(t)).call.apply(e,[this].concat(c))),n.state={searchValue:""},i=a,p()(n,i)}return u()(t,e),c()(t,[{key:"onSearch",value:function(e){this.setState({searchValue:e.target.value})}},{key:"clearSearhField",value:function(e){27===e.keyCode&&this.setState({searchValue:""})}},{key:"renderGroupElement",value:function(e){var t=this.context.theme,a=this.state.searchValue,n=(w.a[N(e)]||e.name).split(RegExp("("+a+")","gi"));return _.a.createElement(y.b,{to:v.a+"/docs/"+N(e),key:N(e),className:b()(T.a.item,t.text_black,t.b2)},n.map(function(e,n){return e.toLowerCase()===a.toLowerCase()?_.a.createElement("mark",{key:n,className:t.fill_secondary},e):e}))}},{key:"renderGroup",value:function(e){var t=this,a=this.state.searchValue,n=Object(E.a)(e.items,a,function(e){return w.a[N(e)]+"\n"+e.name});return n.length?_.a.createElement("div",{className:T.a.sub_list,key:e.group},_.a.createElement(g.Typography,{color:"grey",type:"c1",className:T.a.title},e.group.toUpperCase()),n.map(function(e){return t.renderGroupElement(e)})):null}},{key:"renderContent",value:function(){var e=this,t=this.state.searchValue,a=this.props.docsList,n=this.context.intl,r=a.map(function(t){return e.renderGroup(t)}).filter(function(e){return e});return r.length?r.map(function(e){return e}):_.a.createElement("div",{className:b()(T.a.sub_list,T.a.empty)},_.a.createElement(g.Typography,{color:"grey",type:"b3",align:"center",className:b()(T.a.title,T.a.search_value)},t),_.a.createElement(g.Typography,{color:"grey",type:"b3",align:"center",className:T.a.title},n.getText("Operations.NoResults")))}},{key:"render",value:function(){var e=this.context.intl,t=this.state.searchValue;return _.a.createElement("div",{className:b()(T.a.sidebar_wrapper)},_.a.createElement("div",{className:T.a.search_container},_.a.createElement(g.TextField,{onChange:this.onSearch.bind(this),onKeyDown:this.clearSearhField.bind(this),color:"light_grey",value:t,className:T.a.search_field,size:"large",placeholder:e.getText("Operations.Search"),inputProps:{style:{borderRadius:20,height:40,padding:"0 20px"}}})),_.a.createElement("div",{className:T.a.nav},this.renderContent()))}}]),t}(d.Component);P.propTypes={docsList:f.a.arrayOf(f.a.object)},P.contextTypes={intl:f.a.object,theme:f.a.object},P.contextTypes={intl:f.a.object,theme:f.a.object},P.defaultProps={docsList:[]},t.a=P},281:function(e,t,a){var n=a(282);"string"==typeof n&&(n=[[e.i,n,""]]),a(66)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},282:function(e,t,a){(t=e.exports=a(65)(!1)).push([e.i,".sidebar_wrapper_5cBw5{width:350px;border-right:1px solid rgba(203,207,215,.15);height:100%;display:inline-block;vertical-align:top;padding:0;background-color:rgba(244,245,249,.5)}.parts_list_F4Dcl{padding:64px 48px 0}.empty_yhAWO{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.search_container_3MT2i{padding:25px 25px 55px}.search_value_3pvwu{white-space:nowrap;overflow:hidden;max-width:250px;text-overflow:ellipsis}.line_3XDDw{margin:15px 40px 15px 20px;height:1px}.nav_1hS3s{position:relative;height:calc(100% - 125px);overflow:auto;padding:0 0 60px;-webkit-overflow-scrolling:touch}.sub_list_FX-Xz{padding:0 48px;margin-bottom:35px}.sub_list_FX-Xz:last-child{margin-bottom:0}.title_1I0_O{margin-bottom:5px}.item_4eU3u{line-height:30px!important;transition:opacity .2s;cursor:pointer;display:block}.item_4eU3u:focus,.item_4eU3u:hover{opacity:.6}.active_sub_link_1Wdco{font-weight:600!important}.active_link_1lqCH,.active_sub_link_1Wdco{cursor:default!important;pointer-events:none!important;opacity:1!important}.active_link_1lqCH{color:#373d4d!important}@media (max-width:1200px) and (min-width:769px) and (min-height:376px){.sidebar_wrapper_5cBw5{width:280px}}",""]),t.locals={sidebar_wrapper:"sidebar_wrapper_5cBw5",parts_list:"parts_list_F4Dcl",empty:"empty_yhAWO",search_container:"search_container_3MT2i",search_value:"search_value_3pvwu",line:"line_3XDDw",nav:"nav_1hS3s",sub_list:"sub_list_FX-Xz",title:"title_1I0_O",item:"item_4eU3u",active_sub_link:"active_sub_link_1Wdco",active_link:"active_link_1lqCH"}},285:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){if(e.route)return e.route;if(e.name)return e.name.toLowerCase().split(" ").join("_");var t=/(\w+)\/?((?=index.js)|\.js$)/.exec(e.path);return t&&t[1]?t[1]:e.path.split(/[./]/).filter(function(e){return e}).join("_")}},286:function(e,t,a){var n=a(287);"string"==typeof n&&(n=[[e.i,n,""]]),a(66)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},287:function(e,t,a){(t=e.exports=a(65)(!1)).push([e.i,".main_wrapper_1CalU{height:100%;width:calc(100% - 350px);display:inline-block;overflow:auto;-webkit-overflow-scrolling:touch;vertical-align:top}.md_wrapper_3R-OY{padding:91px 150px;min-height:calc(100% - 81px)}@media (max-width:768px),(max-width:812px) and (max-height:375px){.main_wrapper_1CalU{width:100%}.md_wrapper_3R-OY{padding:90px 30px 77px;width:100%;height:auto;min-height:calc(100% - 120px)}}@media (max-width:1200px) and (min-width:769px) and (min-height:376px){.md_wrapper_3R-OY{padding:91px 70px}.main_wrapper_1CalU{width:calc(100% - 280px)}}",""]),t.locals={main_wrapper:"main_wrapper_1CalU",md_wrapper:"md_wrapper_3R-OY"}},288:function(e,t,a){var n={"./Contributing.json":[481,60],"./Create operation.json":[482,59],"./GLSL Chunks.json":[483,58],"./Get Started.json":[484,57],"./______lib_ops_canny_edges_index_js.json":[485,56],"./______lib_ops_cast_index_js.json":[486,55],"./______lib_ops_color_segmentation_index_js.json":[487,54],"./______lib_ops_concat_index_js.json":[488,53],"./______lib_ops_downsample_index_js.json":[489,52],"./______lib_ops_gaussian_blur_index_js.json":[490,51],"./______lib_ops_grayscale_index_js.json":[491,50],"./______lib_ops_hog_index_js.json":[492,49],"./______lib_ops_hsv_color_index_js.json":[493,48],"./______lib_ops_mean_std_index_js.json":[494,47],"./______lib_ops_minmax_index_js.json":[495,46],"./______lib_ops_motion_detect_index_js.json":[496,45],"./______lib_ops_norm_index_js.json":[497,44],"./______lib_ops_skin_test_index_js.json":[498,43],"./______lib_ops_sliding_window_index_js.json":[499,42],"./______lib_ops_sobel_operator_index_js.json":[500,41],"./______lib_ops_swt_index_js.json":[501,40],"./______lib_program_session_js.json":[502,39],"./______lib_program_tensor_js.json":[503,38],"./names.json":[159],"./namespace.json":[165]};function r(e){var t=n[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){return a(t[0])}):Promise.reject(Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(n)},r.id=288,e.exports=r},52:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(16),r=a.n(n),i=a(90),l=a(17),o=a.n(l),c=a(214),s=a.n(c),p=a(232),m=a(166),u=a(280),d=a(170),_=a(102),h=a(223),f=a.n(h),y=a(171),g=a(285),x=a(286),b=a.n(x),v=f.a.docs.reduce(function(e,t){return e.concat(t.items)},[]),E=v.map(function(e){return s()({loader:function(){return a(288)("./"+(e.name||e.path.split(/[/.]/).join("_"))+".json").then(function(t){return function(){return r.a.createElement("div",{className:b.a.main_wrapper},r.a.createElement("div",{className:b.a.md_wrapper},/\.jsx?$/.test(e.path)?r.a.createElement(p.a,{data:t}):r.a.createElement(m.a,{data:t})),r.a.createElement(d.a,null))}}).catch(y.a)},loading:function(){return null}})}),k=function(e,t){var a=t.device;return r.a.createElement(n.Fragment,null,"mobile"!==a.type&&r.a.createElement(u.a,{docsList:f.a.docs}),r.a.createElement(i.f,null,v.map(function(e,t){return r.a.createElement(i.d,{exact:!0,key:e.name||e.path.split(/[/.]/).join("_"),path:_.a+"/docs/"+Object(g.a)(e),component:E[t]})}),r.a.createElement(i.c,{from:_.a+"/docs",to:_.a+"/docs/get_started"})))};k.contextTypes={device:o.a.object},t.default=k}});