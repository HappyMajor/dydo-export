(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[598],{6977:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(3366),o=n(7462),i=n(7294),a=n(6010),s=n(4780),c=n(6622),l=n(3562),u=n(6446),p=n(1625),d=n(4771),f=n(9766),h=n(5578);const m=["sx"];function y(e){const{sx:t}=e,n=(0,r.Z)(e,m),{systemProps:i,otherProps:a}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{h.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let s;return s=Array.isArray(t)?[i,...t]:"function"===typeof t?(...e)=>{const n=t(...e);return(0,f.P)(n)?(0,o.Z)({},i,n):i}:(0,o.Z)({},i,t),(0,o.Z)({},a,{sx:s})}var b=n(7621),v=n(1588);function g(e){return(0,b.Z)("MuiTypography",e)}(0,v.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var x=n(5893);const w=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],O=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,c.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),C={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var k=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTypography"}),i=(e=>S[e]||e)(n.color),l=y((0,o.Z)({},n,{color:i})),{align:p="inherit",className:d,component:f,gutterBottom:h=!1,noWrap:m=!1,paragraph:b=!1,variant:v="body1",variantMapping:k=C}=l,P=(0,r.Z)(l,w),j=(0,o.Z)({},l,{align:p,color:i,className:d,component:f,gutterBottom:h,noWrap:m,paragraph:b,variant:v,variantMapping:k}),E=f||(b?"p":k[v]||C[v])||"span",_=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,c.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,g,a)})(j);return(0,x.jsx)(O,(0,o.Z)({as:E,ref:t,ownerState:j,className:(0,a.Z)(_.root,d)},P))}));function P(e){return(0,b.Z)("MuiLink",e)}var j=(0,v.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),E=n(4844),_=n(1796);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var B=({theme:e,ownerState:t})=>{const n=(e=>Z[e]||e)(t.color),r=(0,E.D)(e,`palette.${n}`,!1)||t.color,o=(0,E.D)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,_.Fq)(r,.4)};const R=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],A=(0,l.ZP)(k,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,c.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:B({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${j.focusVisible}`]:{outline:"auto"}})));var M=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiLink"}),{className:l,color:f="primary",component:h="a",onBlur:m,onFocus:y,TypographyClasses:b,underline:v="always",variant:g="inherit",sx:w}=n,O=(0,r.Z)(n,R),{isFocusVisibleRef:C,onBlur:S,onFocus:k,ref:j}=(0,p.Z)(),[E,_]=i.useState(!1),B=(0,d.Z)(t,j),M=(0,o.Z)({},n,{color:f,component:h,focusVisible:E,underline:v,variant:g}),N=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root",`underline${(0,c.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(i,P,t)})(M);return(0,x.jsx)(A,(0,o.Z)({color:f,className:(0,a.Z)(N.root,l),classes:b,component:h,onBlur:e=>{S(e),!1===C.current&&_(!1),m&&m(e)},onFocus:e=>{k(e),!0===C.current&&_(!0),y&&y(e)},ref:B,ownerState:M,variant:g,sx:[...Object.keys(Z).includes(f)?[]:[{color:f}],...Array.isArray(w)?w:[w]]},O))}))},1655:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(3366),o=n(7462),i=n(7294),a=n(6010),s=n(917),c=n(4780);function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var p=n(1796),d=n(3562),f=n(6446),h=n(7621);function m(e){return(0,h.Z)("MuiSkeleton",e)}(0,n(1588).Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var y=n(5893);const b=["animation","className","component","height","style","variant","width"];let v,g,x,w,O=e=>e;const C=(0,s.F4)(v||(v=O`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,s.F4)(g||(g=O`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),k=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const n=l(e.shape.borderRadius)||"px",r=u(e.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,p.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(x||(x=O`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),C)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(w||(w=O`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),S,(t.vars||t).palette.action.hover)));var P=i.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:l="span",height:u,style:p,variant:d="text",width:h}=n,v=(0,r.Z)(n,b),g=(0,o.Z)({},n,{animation:i,component:l,variant:d,hasChildren:Boolean(v.children)}),x=(e=>{const{classes:t,variant:n,animation:r,hasChildren:o,width:i,height:a}=e,s={root:["root",n,r,o&&"withChildren",o&&!i&&"fitContent",o&&!a&&"heightAuto"]};return(0,c.Z)(s,m,t)})(g);return(0,y.jsx)(k,(0,o.Z)({as:l,ref:t,className:(0,a.Z)(x.root,s),ownerState:g},v,{style:(0,o.Z)({width:h,height:u},p)}))}))},6808:function(e,t,n){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=a,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(l){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in i)i[c]&&(s+="; "+c,!0!==i[c]&&(s+="="+i[c].split(";")[0]));return document.cookie=t+"="+n+s}}function a(e,n){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var s=i[a].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(s[0]);if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(u){}if(o[l]=c,e===l)break}catch(u){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},143:function(e,t,n){"use strict";var r=n(6808),o=n.n(r),i=n(7294),a=function(e){var t=e.condition,n=e.wrapper,r=e.children;return t?n(r):r};function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}var l,u="top",p="bottom";!function(e){e.STRICT="strict",e.LAX="lax",e.NONE="none"}(l||(l={}));var d="hidden",f="byCookieValue",h="CookieConsent",m=["children"],y={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:p,visible:f,onAccept:function(e){},onDecline:function(){},cookieName:h,cookieValue:"true",declineCookieValue:"false",setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:l.LAX,ButtonComponent:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,m);return i.createElement("button",Object.assign({},n),t)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{},customDeclineButtonProps:{},customButtonWrapperAttributes:{},style:{},buttonStyle:{},declineButtonStyle:{},contentStyle:{},overlayStyle:{}},b={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},v=function(e){return e+"-legacy"},g=function(e){var t,n;function r(){var t;return(t=e.apply(this,arguments)||this).state=b,t.handleScroll=function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,r=document.body,o="scrollTop",i="scrollHeight";(n[o]||r[o])/((n[i]||r[i])-n.clientHeight)*100>e&&t.accept(!0)},t.removeScrollListener=function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,c(t,n);var m=r.prototype;return m.componentDidMount=function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))},m.componentWillUnmount=function(){this.removeScrollListener()},m.accept=function(e){var t;void 0===e&&(e=!1);var n=this.props,r=n.cookieName,o=n.cookieValue,i=n.hideOnAccept,a=n.onAccept;this.setCookie(r,o),a(null!=(t=e)&&t),i&&(this.setState({visible:!1}),this.removeScrollListener())},m.overlayClick=function(){var e=this.props,t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()},m.decline=function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,r=e.hideOnDecline,o=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),o(),r&&this.setState({visible:!1})},m.setCookie=function(e,t){var n=this.props,r=n.extraCookieOptions,i=n.expires,a=n.sameSite,c=this.props.cookieSecurity;void 0===c&&(c=!window.location||"https:"===window.location.protocol);var u=s({expires:i},r,{sameSite:a,secure:c});a===l.NONE&&o().set(v(e),t,u),o().set(e,t,u)},m.getCookieValue=function(){return function(e){void 0===e&&(e=h);var t=o().get(e);return void 0===t?o().get(v(e)):t}(this.props.cookieName)},m.render=function(){var e=this;switch(this.props.visible){case d:return null;case f:if(!this.state.visible)return null}var t=this.props,n=t.location,r=t.style,o=t.buttonStyle,c=t.declineButtonStyle,l=t.contentStyle,h=t.disableStyles,m=t.buttonText,y=t.declineButtonText,b=t.containerClasses,v=t.contentClasses,g=t.buttonClasses,x=t.buttonWrapperClasses,w=t.declineButtonClasses,O=t.buttonId,C=t.declineButtonId,S=t.disableButtonStyles,k=t.enableDeclineButton,P=t.flipButtons,j=t.ButtonComponent,E=t.overlay,_=t.overlayClasses,Z=t.overlayStyle,B=t.ariaAcceptLabel,R=t.ariaDeclineLabel,A=t.customContainerAttributes,M=t.customContentAttributes,N=t.customButtonProps,D=t.customDeclineButtonProps,I=t.customButtonWrapperAttributes,T={},L={},W={},$={},F={};switch(h?(T=Object.assign({},r),L=Object.assign({},o),W=Object.assign({},c),$=Object.assign({},l),F=Object.assign({},Z)):(T=Object.assign({},s({},this.state.style,r)),$=Object.assign({},s({},this.state.contentStyle,l)),F=Object.assign({},s({},this.state.overlayStyle,Z)),S?(L=Object.assign({},o),W=Object.assign({},c)):(L=Object.assign({},s({},this.state.buttonStyle,o)),W=Object.assign({},s({},this.state.declineButtonStyle,c)))),n){case u:T.top="0";break;case p:T.bottom="0"}var V=[];return k&&V.push(i.createElement(j,Object.assign({key:"declineButton",style:W,className:w,id:C,"aria-label":R,onClick:function(){e.decline()}},D),y)),V.push(i.createElement(j,Object.assign({key:"acceptButton",style:L,className:g,id:O,"aria-label":B,onClick:function(){e.accept()}},N),m)),P&&V.reverse(),i.createElement(a,{condition:E,wrapper:function(t){return i.createElement("div",{style:F,className:_,onClick:function(){e.overlayClick()}},t)}},i.createElement("div",Object.assign({className:""+b,style:T},A),i.createElement("div",Object.assign({style:$,className:v},M),this.props.children),i.createElement("div",Object.assign({className:""+x},I),V.map((function(e){return e})))))},r}(i.Component);g.defaultProps=y,t.ZP=g},3616:function(e,t,n){"use strict";var r=n(5263),o=n(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(434)),a=o(n(8416)),s=o(n(215)),c=r(n(7294)),l=n(5697),u=o(n(3512));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=e.isOpen,n=e.onRest,r=e.style,o=e.transition,a=e.className,l=(0,s.default)(e,["isOpen","onRest","style","transition","className"]),p=(0,c.useRef)(null),f=(0,u.default)({isOpen:t,content:p}),h=f.setIsExpandedStyle,m=f.setIsCollapsedStyle,y=f.style,b=d(d({willChange:"height",transition:o},r),y);return c.default.createElement("div",(0,i.default)({ref:p,style:b,className:a,onTransitionEnd:function(e){e.target===p.current&&"height"===e.propertyName&&(t?h():m(),n&&n())}},l))}f.defaultProps={isOpen:!1,onRest:null,style:null,className:"react-css-collapse-transition",transition:"height 250ms cubic-bezier(0.4, 0, 0.2, 1)"},f.propTypes={isOpen:l.bool,onRest:l.func,style:(0,l.shape)({}),className:l.string,transition:l.string};var h=f;t.default=h},2193:function(e,t,n){"use strict";var r=n(4836);t.ZP=void 0;var o=r(n(3616)),i=r(n(3512)),a=o.default;t.ZP=a},3512:function(e,t,n){"use strict";var r=n(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(7424)),i=n(7294);function a(e){return e&&e.current&&e.current.scrollHeight?"".concat(e.current.scrollHeight,"px"):"0px"}var s=function(e){var t=e.isOpen,n=e.content,r=(0,i.useState)("0"),s=(0,o.default)(r,2),c=s[0],l=s[1],u=(0,i.useState)("hidden"),p=(0,o.default)(u,2),d=p[0],f=p[1],h=(0,i.useState)("hidden"),m=(0,o.default)(h,2),y=m[0],b=m[1],v=(0,i.useState)(!0),g=(0,o.default)(v,2),x=g[0],w=g[1];return(0,i.useEffect)((function(){t?(b("visible"),x?(l("auto"),f("visible")):l(a(n))):x||(l(a(n)),window.requestAnimationFrame((function(){setTimeout((function(){l("0"),f("hidden")}))})))}),[t]),(0,i.useEffect)((function(){w(!1)}),[]),{setIsExpandedStyle:function(){l("auto"),f("visible"),b("visible")},setIsCollapsedStyle:function(){b("hidden")},style:{overflow:d,visibility:y,height:c}}};t.default=s},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},5372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:function(e,t,n){var r=n(8698).default;function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var c=a?Object.getOwnPropertyDescriptor(e,s):null;c&&(c.get||c.set)?Object.defineProperty(i,s,c):i[s]=e[s]}return i.default=e,n&&n.set(e,i),i},e.exports.__esModule=!0,e.exports.default=e.exports},8872:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},2218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,n){var r=n(7071);e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},7424:function(e,t,n){var r=n(5372),o=n(8872),i=n(6116),a=n(2218);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var r=n(3897);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},7568:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function s(e){r(a,o,i,s,c,"next",e)}function c(e){r(a,o,i,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return o}})},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(943);var o=n(3375);var i=n(1566);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5820:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var r=n(7294),o=n(9304),i=n(4735),a=n(8868);function s(){const e=(0,r.useRef)(!1);return(0,a.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var c=n(240),l=n(6681);class u extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function p({children:e,isPresent:t}){const n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:e,height:r,top:a,left:s}=i.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${a}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[t]),r.createElement(u,{isPresent:t,childRef:o,sizeRef:i},r.cloneElement(e,{ref:o}))}const d=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:s})=>{const u=(0,l.h)(f),d=(0,r.useId)(),h=(0,r.useMemo)((()=>({id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;o&&o()},register:e=>(u.set(e,!1),()=>u.delete(e))})),a?void 0:[n]);return(0,r.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[n]),r.useEffect((()=>{!n&&!u.size&&o&&o()}),[n]),"popLayout"===s&&(e=r.createElement(p,{isPresent:n},e)),r.createElement(c.O.Provider,{value:h},e)};function f(){return new Map}var h=n(5364),m=n(5411),y=n(6034);const b=e=>e.key||"";const v=({children:e,custom:t,initial:n=!0,onExitComplete:c,exitBeforeEnter:l,presenceAffectsLayout:u=!0,mode:p="sync"})=>{l&&(p="wait",(0,y.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[f]=function(){const e=s(),[t,n]=(0,r.useState)(0),o=(0,r.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,r.useCallback)((()=>i.ZP.postRender(o)),[o]),t]}();const v=(0,r.useContext)(h.p).forceRender;v&&(f=v);const g=s(),x=function(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}(e);let w=x;const O=new Set,C=(0,r.useRef)(w),S=(0,r.useRef)(new Map).current,k=(0,r.useRef)(!0);if((0,a.L)((()=>{k.current=!1,function(e,t){e.forEach((e=>{const n=b(e);t.set(n,e)}))}(x,S),C.current=w})),(0,m.z)((()=>{k.current=!0,S.clear(),O.clear()})),k.current)return r.createElement(r.Fragment,null,w.map((e=>r.createElement(d,{key:b(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:p},e))));w=[...w];const P=C.current.map(b),j=x.map(b),E=P.length;for(let r=0;r<E;r++){const e=P[r];-1===j.indexOf(e)&&O.add(e)}return"wait"===p&&O.size&&(w=[]),O.forEach((e=>{if(-1!==j.indexOf(e))return;const n=S.get(e);if(!n)return;const o=P.indexOf(e);w.splice(o,0,r.createElement(d,{key:b(n),isPresent:!1,onExitComplete:()=>{S.delete(e),O.delete(e);const t=C.current.findIndex((t=>t.key===e));if(C.current.splice(t,1),!O.size){if(C.current=x,!1===g.current)return;f(),c&&c()}},custom:t,presenceAffectsLayout:u,mode:p},n))})),w=w.map((e=>{const t=e.key;return O.has(t)?e:r.createElement(d,{key:b(e),isPresent:!0,presenceAffectsLayout:u,mode:p},e)})),"production"!==o.O&&"wait"===p&&w.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),r.createElement(r.Fragment,null,O.size?w:w.map((e=>(0,r.cloneElement)(e))))}}}]);