(self.webpackChunkdw_website=self.webpackChunkdw_website||[]).push([[946],{1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),o=r(a(5354)),s=r(a(7316)),d=r(a(7154)),l=r(a(7294)),c=r(a(5697)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+o+s+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(k,(0,d.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,i(r),s):s})),k=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,L=e.draggable,I=g||h;if(!I)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,Z=(0,d.default)({opacity:R?1:0,transition:P?"opacity "+v+"ms":"none"},s),O="boolean"==typeof b?"lightgray":b,N={transitionDelay:v+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},P&&N,s,f),V={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:w},H=this.state.isHydrated?m(I):I[0];if(g)return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&N)}),H.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:I,generateSources:z}),H.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:I,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(I),l.default.createElement(k,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:Z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,d.default)({alt:a,title:t,loading:S},H,{imageVariants:I}))}}));if(h){var j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},P&&N)}),H.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:I,generateSources:z}),H.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:I,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(I),l.default.createElement(k,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:Z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,d.default)({alt:a,title:t,loading:S},H,{imageVariants:I}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),Z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function O(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}R.propTypes={resolutions:P,sizes:Z,fixed:O(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:O(c.default.oneOfType([Z,c.default.arrayOf(Z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=R;t.Z=N},3899:function(e,t,a){"use strict";var r=a(7294),i=a(9),n=a(5444);t.Z=function(e){var t=e.categories,a=e.showLabel;return r.createElement("div",null,a?r.createElement(s,null,"Categorized under "):"",t&&t.map((function(e){return r.createElement(o,{key:e},r.createElement(n.Link,{to:"/categories/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var o=i.ZP.span.withConfig({displayName:"categories__Category",componentId:"sc-2yqpc4-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"]),s=i.ZP.span.withConfig({displayName:"categories__CategoriesLabel",componentId:"sc-2yqpc4-1"})(["margin-right:0.25rem;vertical-align:middle;"])},1621:function(e,t,a){"use strict";var r=a(7294),i=a(9),n=a(5444);t.Z=function(e){var t=e.tags,a=e.showLabel;return r.createElement(s,null,a?r.createElement(d,null,"Tagged with"):"",t&&t.map((function(e){return r.createElement(o,{key:e},r.createElement(n.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var o=i.ZP.span.withConfig({displayName:"tags__Tag",componentId:"by516m-0"})(["margin-top:0.3rem;margin-bottom:0.3rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(68,100,173,0.4);text-decoration:none;padding:0.2rem 0.2rem;color:inherit;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"]),s=i.ZP.div.withConfig({displayName:"tags__StyledTags",componentId:"by516m-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-top:2rem;margin-bottom:2rem;"]),d=i.ZP.span.withConfig({displayName:"tags__TagsLabel",componentId:"by516m-2"})(["margin-right:0.25rem;vertical-align:middle;"])},4436:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(7294),i=a(5444),n=a(1496),o=a(6480),s=a(9),d=a(1621),l=a(3899),c="graphcomment",u=function(){return(0,r.useEffect)((function(){window.gc_params={graphcomment_id:"davidwesst-com",fixed_header_height:0};var e=document.createElement("script");e.src="https://graphcomment.com/js/integration.js?"+Date.now(),e.async=!0;var t=document.getElementById(c);return t&&t.appendChild(e),function(){var e=document.getElementById(c);e&&(e.innerHTML="")}}),[]),r.createElement("div",{id:c})},f=function(e){var t=e.data,a=t.markdownRemark,s=a.frontmatter,c=a.html,f=a.fields,y=t.prev,w=t.next,E=s.social_image?r.createElement(h,null,r.createElement(n.Z,{fluid:s.social_image.childImageSharp.fluid})):"";return r.createElement(o.Z,{title:s.title,description:s.excerpt||s.description,socialImage:s.social_image?s.social_image.publicURL:""},r.createElement(p,null,r.createElement("article",null,r.createElement(m,null,s.title),r.createElement(g,null,s.date),r.createElement(l.Z,{categories:s.categories,showLabel:!0}),E,r.createElement(b,{dangerouslySetInnerHTML:{__html:c}}),r.createElement(d.Z,{tags:s.tags})),r.createElement(u,{slug:f.slug}),r.createElement(v,null,y&&r.createElement("div",null,r.createElement("span",null,"previous"),r.createElement(i.Link,{to:y.fields.slug}," ",y.frontmatter.title)),w&&r.createElement("div",null,r.createElement("span",null,"next"),r.createElement(i.Link,{to:w.fields.slug}," ",w.frontmatter.title)))))},p=s.ZP.div.withConfig({displayName:"post-template__PostWrapper",componentId:"sc-1tulhbb-0"})(["padding-top:var(--size-900);padding-bottom:var(--size-900);margin-left:auto;margin-right:auto;max-width:70ch;word-wrap:break-word;"]),m=s.ZP.h1.withConfig({displayName:"post-template__PostTitle",componentId:"sc-1tulhbb-1"})(["font-size:var(--size-700);"]),g=s.ZP.span.withConfig({displayName:"post-template__PostDate",componentId:"sc-1tulhbb-2"})(["font-size:var(--size-400);padding-top:1rem;text-transform:uppercase;"]),h=s.ZP.div.withConfig({displayName:"post-template__PostImage",componentId:"sc-1tulhbb-3"})(["margin-top:1rem;margin-bottom:1rem;"]),b=s.ZP.section.withConfig({displayName:"post-template__PostContent",componentId:"sc-1tulhbb-4"})(["padding-top:var(--size-800);& > * + *{margin-top:var(--size-300);}& > p + p{margin-top:var(--size-700);}* + h1,* + h2,* + h3{margin-top:var(--size-900);}h1{font-size:var(--size-700);}h2{font-size:var(--size-600);}h3{font-size:var(--size-500);}b,strong{font-weight:600;}a{color:inherit;text-decoration:underline;text-decoration-thickness:0.125rem;}blockquote{padding-left:var(--size-400);border-left:5px solid;font-style:italic;}code{font-family:'Source Sans Pro',monospace;overflow-x:auto;white-space:pre-wrap;}pre{overflow-x:auto;white-space:pre-wrap;max-width:100%;}"]),v=s.ZP.nav.withConfig({displayName:"post-template__PostPagination",componentId:"sc-1tulhbb-5"})(["display:flex;flex-wrap:wrap;margin-top:var(--size-900);& > *{position:relative;flex:1;display:flex;flex-direction:column;padding:1rem;padding-top:0.5rem;padding-bottom:0.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);margin:0.5rem;}& > *:hover{background-color:rgba(255,255,255,0.5);}& span{text-transform:uppercase;opacity:0.6;font-size:var(--size-400);padding-bottom:var(--size-500);}& a{color:inherit;text-decoration:none;font-size:var(--size-400);text-transform:capitalize;}& a::after{content:'';position:absolute;left:0;right:0;top:0;bottom:0;}"])}}]);
//# sourceMappingURL=component---src-templates-post-template-js-193e71f7439249802267.js.map