(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{5406:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return i(3837)}])},4260:function(e,n,i){"use strict";i.d(n,{Z:function(){return l}});var t=i(5893),s=i(8913),r=i(1117),a=i(1225),o=i(1120);function l(e){var n=e.viewportAmount,i=void 0===n?.5:n,l=e.children,c=(e.once,e.variant),d=void 0===c?"default":c;(0,a.Z)("(max-width:780px)"),(0,s.v)().scrollYProgress,(0,r.Y)({margin:"0px 0px 100vh 0px"});return"default"==d?(0,t.jsx)(o.tJ,{once:!0,offset:50,amount:i,duration:.9,children:l}):(0,t.jsx)("div",{})}},2655:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(5893),s=i(9814),r=i.n(s),a=i(1120);function o(e){var n=e.children,i=e.size;return(0,t.jsxs)("div",{className:r().wrapper,children:[(0,t.jsx)(a.I2,{offset:50,duration:.6,children:n}),(0,t.jsx)(a.OD,{parentCssClass:r().marginTop,offset:50,duration:.6,children:(0,t.jsx)("div",{className:r().underscore+" "+r()[i]})})]})}},1120:function(e,n,i){"use strict";i.d(n,{I2:function(){return l},OD:function(){return c},fY:function(){return r},tJ:function(){return a},zf:function(){return o}});var t=i(5893),s=i(8821);function r(e){var n=e.children,i=e.amount,r=void 0===i?.3:i,a=e.delay,o=e.duration;return(0,t.jsx)(s.E.div,{viewport:{once:!1,amount:r},whileInView:"whileInView",initial:"initial",children:(0,t.jsx)(s.E.div,{transition:{delay:a,duration:o,ease:"easeInOut"},variants:{whileInView:{y:0,opacity:1},initial:{y:-100,opacity:0}},children:n})})}function a(e){var n=e.children,i=e.delay,r=e.once,a=e.amount,o=e.duration,l=e.offset,c={whileInView:{y:0,opacity:1},initial:{y:void 0===l?100:l,opacity:0}};return(0,t.jsx)(s.E.div,{viewport:{once:r,amount:a},whileInView:"whileInView",initial:"initial",children:(0,t.jsx)(s.E.div,{transition:{delay:i,duration:o,ease:"easeInOut"},variants:c,children:n})})}function o(e){var n=e.children,i=e.delay,r=e.duration;return(0,t.jsx)(s.E.div,{viewport:{once:!1,amount:.3},whileInView:"whileInView",initial:"initial",children:(0,t.jsx)(s.E.div,{transition:{delay:i,duration:r,ease:"easeInOut"},variants:{whileInView:{opacity:1},initial:{opacity:0}},children:n})})}function l(e){var n=e.children,i=e.delay,r=e.duration;return(0,t.jsx)(s.E.div,{viewport:{once:!1,amount:.3},whileInView:"whileInView",initial:"initial",children:(0,t.jsx)(s.E.div,{transition:{delay:i,duration:r,ease:"easeInOut"},variants:{whileInView:{x:0,opacity:1},initial:{x:-100,opacity:0}},children:n})})}function c(e){var n=e.children,i=e.delay,r=e.duration,a=e.amount,o=void 0===a?.3:a,l=e.parentCssClass;return(0,t.jsx)(s.E.div,{className:l,viewport:{once:!1,amount:o},whileInView:"whileInView",initial:"initial",children:(0,t.jsx)(s.E.div,{transition:{delay:i,duration:r,ease:"easeInOut"},variants:{whileInView:{x:0,opacity:1},initial:{x:100,opacity:0}},children:n})})}},8252:function(e,n,i){"use strict";i.d(n,{Z:function(){return l}});var t=i(5893),s=i(8495),r=i.n(s),a=i(7294),o=i(1225);function l(e){var n,i=e.disabled,s=e.type,l=void 0===s?"button":s,c=e.value,d=e.action,u=e.label,h=e.fontSize,_=e.fontSizeMobile,m=e.compact,x=e.variant,j=e.layout,b=e.onClick,v=e.pressed,p=e.scrollToOnClick,g=(0,o.Z)("(max-width:780px)"),f=function(e){var n=document.getElementById("".concat(e));void 0!=n&&n.scrollIntoView({behavior:"smooth"})},w=function(){b&&b(),p&&f(p)};n=g&&void 0!=_?{fontSize:_+"vw"}:{fontSize:g?2.5*h+"vw":h+"vw"};return"text"==x?(0,t.jsx)("div",{className:r().filter+" "+r()[j],onClick:b,children:(0,t.jsx)("button",{type:l,className:r().button+" "+(m?r().compact:"")+" "+(v?r().pressed:""),onClick:w,children:(0,t.jsx)("h2",{style:n,children:u})})}):(0,t.jsx)(a.Fragment,{children:"outlined"==x?(0,t.jsx)("div",{className:r().outlined+" "+r()[j],onClick:w,children:(0,t.jsx)("button",{disabled:i,inputMode:"email",value:c,formAction:d,type:l,children:(0,t.jsx)("h2",{style:n,children:u})})}):(0,t.jsx)("div",{className:r().background+" "+r()[j],onClick:b,children:(0,t.jsx)("button",{disabled:i,inputMode:"email",value:c,formAction:d,type:l,className:r().button+" "+(m?r().compact:"")+" "+(v?r().pressed:""),onClick:w,children:(0,t.jsx)("h2",{style:n,children:u})})})})}},1790:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var t=i(5893),s=(i(7294),i(7248)),r=i.n(s);function a(e){var n=e.label,i=(e.helperText,e.error),s=e.onChange,a=e.checked;return(0,t.jsx)("div",{className:r().wrapper,children:(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{className:r().label,children:n}),(0,t.jsx)("input",{className:i?r().error:"",checked:a,onChange:s,type:"checkbox"})]})})}},4395:function(e,n,i){"use strict";i.d(n,{Z:function(){return p}});var t=i(6042),s=i(9396),r=i(828),a=i(5893),o=i(7294),l=i(2121),c=i.n(l),d=i(1790),u=i(4349),h=i(8252),_=i(3380),m=i.n(_),x=i(9243),j=i(2853),b=i(1225),v=o.forwardRef((function(e,n){return(0,a.jsx)(j.Z,(0,t.Z)({elevation:6,ref:n,variant:"filled"},e))}));function p(e){var n=e.messageAddition,i=e.defaultMessage,l=e.extraButtons,_=e.title,j=function(e){return(0,t.Z)({},M[e])},p=(0,r.Z)(o.useState(""),2),g=p[0],f=p[1],w=(0,r.Z)(o.useState(""),2),y=w[0],N=w[1],A=(0,r.Z)(o.useState(""),2),Z=A[0],U=A[1],S=(0,r.Z)(o.useState(""),2),k=S[0],C=S[1],I=(0,r.Z)(o.useState(""),2),F=I[0],T=I[1],z=(0,r.Z)(o.useState(!1),2),O=z[0],P=z[1],V=(0,r.Z)(o.useState(!1),2),H=V[0],B=V[1],E=(0,r.Z)(o.useState(!1),2),W=E[0],D=E[1],R=(0,r.Z)(o.useState([]),2),M=R[0],G=R[1],J=(0,r.Z)(o.useState(""),2),K=J[0],Y=J[1],L=(0,r.Z)(o.useState(""),2),q=L[0],Q=L[1],X=(0,b.Z)("(max-width:780px)");return(0,a.jsxs)("div",{children:[(0,a.jsx)(x.Z,{anchorOrigin:{horizontal:"center",vertical:X?"top":"bottom"},severity:"success",open:H,autoHideDuration:6e3,onClose:function(){B(!1)},children:(0,a.jsx)(v,{onClose:function(){B(!1)},severity:"success",sx:{width:"100%"},children:K})}),(0,a.jsx)(x.Z,{anchorOrigin:{horizontal:"center",vertical:X?"top":"bottom"},onClose:function(){D(!1)},severity:"error",open:W,autoHideDuration:6e3,children:(0,a.jsx)(v,{onClose:function(){D(!1)},severity:"error",sx:{width:"100%"},children:K})}),(0,a.jsxs)("form",{style:{backgroundColor:"white"},className:c().form,children:[(0,a.jsx)("h3",{className:c().title,children:_}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"Anrede*"}),(0,a.jsxs)("div",{className:c().anrede,children:[(0,a.jsx)(d.Z,(0,s.Z)((0,t.Z)({},j("anrede")),{checked:"Frau"==g,onChange:function(e){f("Frau"==g?"":"Frau")},label:"Frau"})),(0,a.jsx)(d.Z,(0,s.Z)((0,t.Z)({},j("anrede")),{checked:"Herr"==g,onChange:function(e){f("Herr"==g?"":"Herr")},label:"Herr"})),(0,a.jsx)(d.Z,(0,s.Z)((0,t.Z)({},j("anrede")),{checked:"Divers"==g,onChange:function(e){f("Divers"==g?"":"Divers")},label:"Divers"}))]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"Name*\xa0\xa0\xa0"}),(0,a.jsx)(u.Z,(0,s.Z)((0,t.Z)({},j("vorname")),{value:y,onChange:function(e){N(e.target.value)},label:"Vorname*"})),(0,a.jsx)(u.Z,(0,s.Z)((0,t.Z)({},j("nachname")),{value:Z,onChange:function(e){U(e.target.value)},label:"Nachname*"}))]}),(0,a.jsxs)("div",{className:c().mail,children:[(0,a.jsx)("h4",{children:"Kontakt*"}),(0,a.jsx)(u.Z,(0,s.Z)((0,t.Z)({},j("mail")),{fullWidth:!0,value:k,onChange:function(e){C(e.target.value)},label:"Email*"})),(0,a.jsx)(u.Z,(0,s.Z)((0,t.Z)({type:"tel"},j("phoneNumber")),{value:q,onChange:function(e){Q(e.target.value)},label:"Telefonnummer*"}))]}),(0,a.jsx)("div",{children:(0,a.jsx)("h4",{className:c().invisible+" "+c().onlyDesktop,children:"T"})}),(0,a.jsxs)("div",{className:c().msg,children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("span",{className:c().invisible}),"Text"]}),(0,a.jsx)(u.Z,(0,s.Z)((0,t.Z)({},j("message")),{width:"big",variant:"outlined",multiline:!0,rows:3,value:F,onChange:function(e){T(e.target.value)},label:null===i?"Nachricht":i}))]}),(0,a.jsx)("div",{children:(0,a.jsx)("h4",{className:c().invisible,children:"T"})}),(0,a.jsxs)("div",{className:c().actions,children:[l,(0,a.jsx)(h.Z,{disabled:O,onClick:function(){O||(!function(){var e;null!==F&&void 0!==F&&""!==F&&(e=F.split("\n").join("<br>"));var i={anrede:g,vorname:y,nachname:Z,message:null!==e?e+n:F+n,mail:k,phoneNumber:q,to:"contact"},t={anrede:g,vorname:y,nachname:Z,mail:k,phoneNumber:q},s=[],r=!0,a=!1,o=void 0;try{for(var l,c=Object.keys(t)[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var d=l.value;""==i[d]&&(s[d]={helperText:"",error:!0})}}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}0!=Object.keys(s).length?(G(s),D(!0),setTimeout((function(){P(!1)}),1),Y("Angaben sind nicht vollst\xe4ndig.")):(G([]),D(!1),B(!1),Y("Nachricht erfolgreich verschickt!"),fetch("https://hausverwaltung.dydo-contact.workers.dev/",{method:"POST",mode:"no-cors",contentType:"application/json",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return console.log("RESPONSE: "+JSON.stringify(e)),console.log("RESPONSE: "+e),console.log("RESPONSE OK: "+e.ok),{status:200}})).then((function(e){P(!1),200==e.status?(console.log("Success:",e),B(!0)):D(!0)})).catch((function(e){console.error("Error:",e),P(!1),D(!0)})))}(),P(!0))},fontSize:1,label:O?"wird verschickt...":"Anfrage Abschicken"}),O&&(0,a.jsxs)("div",{className:"sweet-loading",children:["  ",(0,a.jsx)(m(),{loading:O,size:50})]})]})]},1)]})}},4349:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(5893),s=i(385),r=i.n(s),a=i(3225);function o(e){var n=e.helperText,i=e.error,s=e.ref,o=e.width,l=void 0===o?"medium":o,c=e.size,d=void 0===c?"small":c,u=e.rows,h=e.multiline,_=e.label,m=e.type,x=void 0===m?"text":m,j=e.onChange,b=e.min,v=e.max,p=e.variant,g=void 0===p?"outlined":p,f=(e.step,e.value);return(0,t.jsx)("div",{className:r().wrapper+" "+r()[l],children:(0,t.jsx)(a.Z,{ref:s,helperText:n,error:i,fullWidth:!0,size:d,variant:g,rows:u,multiline:h,onChange:j,min:b,max:v,value:f,type:x,label:_})})}},8533:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var t=i(5893),s=i(9556),r=i.n(s);function a(e){var n=e.children;return(0,t.jsx)("div",{className:r().container,children:n})}},5240:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var t=i(828),s=i(5893),r=i(5153),a=i.n(r),o=i(7294),l=i(1058),c=i(4960),d=i(8821);function u(e){var n=e.children,i=e.amountVisible,r=(0,t.Z)(o.useState(0),2),u=r[0],h=r[1],_=(0,c.c)(-300),m=function(e){return e+1>=n.length?Math.abs(e+1-n.length):e+1};return(0,s.jsxs)("div",{className:a().wrapper,children:[(0,s.jsx)("div",{className:a().back,onClick:function(){var e;_.set(-300),h((e=u)-1<0?n.length-Math.abs(e-1):e-1)},children:(0,s.jsx)(l.Z,{className:a().arrow,alt:"Arrow Icon n",src:"/images/arrow-down-white.png",layout:"fill",objectFit:"contain"})}),(0,s.jsx)("div",{className:a().elementWrapper,children:function(){for(var e,t=[],r=0;r<i;r++)t.push((e=[m(u+r-1)],(0,s.jsx)(d.E.div,{layout:!0,initial:{x:_.get(),opacity:0},animate:{x:0,opacity:1,transition:{duration:.6,type:"tween"}},exit:{opacity:1},transition:{type:"tween",layout:{duration:.6}},children:n[e]},e+"-slider-element")));return t}()}),(0,s.jsx)("div",{className:a().forward,onClick:function(){_.set(300),h(m(u))},children:(0,s.jsx)(l.Z,{className:a().arrow,alt:"Arrow Icon n",src:"/images/arrow-down-white.png",layout:"fill",objectFit:"contain"})})]})}},2643:function(e,n,i){"use strict";i.d(n,{Z:function(){return d}});var t=i(5893),s=i(5809),r=i.n(s),a=i(1058),o=i(4260),l=i(2655),c=i(1225);function d(e){var n=e.id,i=e.revealViewPortAmount,s=e.children,d=e.margin,u=e.imageRight,h=e.withAnimation,_=void 0===h||h,m=e.title,x=(0,c.Z)("(max-width:780px)");return _?void 0==u||x?(0,t.jsx)(o.Z,{viewportAmount:i||.1,once:!1,children:(0,t.jsxs)("section",{style:{margin:d},className:r().section,children:[(0,t.jsx)(l.Z,{size:"medium",children:(0,t.jsx)("h1",{id:n,children:m})}),(0,t.jsx)("div",{className:r().maxContent,children:s})]})}):(0,t.jsx)(o.Z,{viewportAmount:i||.1,once:!1,children:(0,t.jsxs)("section",{style:{margin:d},className:r().section,children:[(0,t.jsx)("div",{className:r().shadow}),(0,t.jsxs)("div",{className:r().split,children:[(0,t.jsxs)("div",{className:r().content,children:[(0,t.jsx)(l.Z,{size:"medium",children:(0,t.jsx)("h1",{id:n,children:m})}),s]}),(0,t.jsx)("div",{className:r().image,children:(0,t.jsx)(a.Z,{layout:"fill",objectFit:"contain",src:u})})]})]})}):void 0==u||x?(0,t.jsxs)("section",{style:{margin:d},className:r().section,children:[(0,t.jsx)(l.Z,{size:"medium",children:(0,t.jsx)("h1",{id:n,children:m})}),(0,t.jsx)("div",{className:r().maxContent,children:s})]}):(0,t.jsxs)("section",{style:{margin:d},className:r().section,children:[(0,t.jsx)("div",{className:r().shadow}),(0,t.jsxs)("div",{className:r().split,children:[(0,t.jsxs)("div",{className:r().content,children:[(0,t.jsx)(l.Z,{size:"medium",children:(0,t.jsx)("h1",{id:n,children:m})}),s]}),(0,t.jsx)("div",{className:r().image,children:(0,t.jsx)(a.Z,{layout:"fill",objectFit:"contain",src:u})})]})]})}},3837:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return j}});var t=i(5893),s=i(8533),r=i(4260),a=i(2603),o=i.n(a),l=i(1058),c=(i(4298),i(8252)),d=i(4395),u=i(2643),h=i(5240),_=i(1225),m=i(9008),x=i.n(m);function j(){var e=(0,_.Z)("(max-width:780px)");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x(),{children:(0,t.jsx)("title",{children:"\xdcber uns | dydo"})}),(0,t.jsxs)("div",{className:o().wrapper,children:[(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(u.Z,{title:"Willkommen bei dydo!",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:"grotesque",children:"dydo "}),"Immobilien & Hausverwaltung ist ein seit 2011 langj\xe4hrig erfahrene und\xa0qualifizierte\xa0Hausverwaltung mit Vermietung, Verkauf sowie Finanzierung von Immobilien. Mit \xfcber 10 Mitarbeitern, die sich t\xe4glich um mehr als 3000 Wohn- und Gewerbeeinheiten k\xfcmmern und 6 Mitarbeiter im Vertrieb, ",(0,t.jsx)("b",{children:"bilden wir ein starkes Team!"})]}),(0,t.jsx)("p",{children:"Neben der fundierten Immobilienbewertung und Platzierung der uns zum Verkauf oder Vermietung gestellten Objekte am regionalen und \xfcberregionalen Immobilienmarkt liegt uns auch die Nachbetreuung unserer Kunden sehr am Herzen."}),(0,t.jsx)("p",{children:"Wir kennen die Bed\xfcrfnisse und Anspr\xfcche unserer Kundschaft sehr gut und vermitteln daher die Immobilien / Grundst\xfccke als w\xe4ren es unsere Eigenen!"}),(0,t.jsx)("div",{className:o().cta,children:(0,t.jsx)(c.Z,{fontSize:1,scrollToOnClick:"#about-us-formular",label:"Zum Kontaktformular"})})]})}),(0,t.jsx)(u.Z,{title:"Was zeichnet uns aus?",once:!0,children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:"Schnelle Reaktionszeiten und \xfcberdurchschnittliches Engagement! "}),"Partnerschaftliche Umgangsformen und Fairness sind Grundtugenden, die f\xfcr uns als famili\xe4r gef\xfchrtes Unternehmen Selbstverst\xe4ndlichkeit sind."]}),(0,t.jsxs)("p",{children:["Wir handeln transparent und zuverl\xe4ssig und sind zudem Ausbildungsbetrieb im Beruf der Immobilienkauffrau und des Immobilienkaufmann. ",(0,t.jsx)("b",{children:"Testen Sie unser Leistungsverm\xf6gen unverbindlich und nehmen Sie Kontakt zu uns auf."})]})]})})]}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(u.Z,{title:"Das sind wir!",children:(0,t.jsxs)("div",{className:o().aboutGallery,children:[(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:o().person,children:[(0,t.jsx)("div",{className:o().aboutPic,children:(0,t.jsx)(l.Z,{alt:"Portr\xe4t von Joachim Smarslik",src:"/images/joachimblue.jpg",layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:o().personDetails,children:[(0,t.jsx)("p",{className:o().personTitle,children:(0,t.jsx)("b",{children:"Joachim Smarslik"})}),(0,t.jsx)("p",{className:o().personRole,children:"Gesch\xe4ftsleitung"}),(0,t.jsxs)("p",{className:o().personSubject,children:["Hausverwaltung, ",(0,t.jsx)("br",{}),"Verkauf, Finanzierung"]})]})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:o().person,children:[(0,t.jsx)("div",{className:o().aboutPic,children:(0,t.jsx)(l.Z,{alt:"Portr\xe4t von Sandra Smarslik",src:"/images/sandrablue.jpg",layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:o().personDetails,children:[(0,t.jsx)("p",{className:o().personTitle,children:(0,t.jsx)("b",{children:"Sandra Smarslik"})}),(0,t.jsx)("p",{className:o().personRole,children:"Gesch\xe4ftsleitung"}),(0,t.jsxs)("p",{className:o().personSubject,children:["Vermietung, Personal,",(0,t.jsx)("br",{})," Marketing"]})]})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:o().person,children:[(0,t.jsx)("div",{className:o().aboutPic,children:(0,t.jsx)(l.Z,{alt:"Portr\xe4t von Marcel Smarslik",src:"/images/marcelblue.jpg",layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:o().personDetails,children:[(0,t.jsx)("p",{className:o().personTitle,children:(0,t.jsx)("b",{children:"Marcel Smarslik"})}),(0,t.jsx)("p",{className:o().personRole,children:"Abteilungsleiter Verkauf"}),(0,t.jsxs)("p",{className:o().personSubject,children:["Akquise, Organisation,",(0,t.jsx)("br",{})," Controlling"]})]})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:o().person,children:[(0,t.jsx)("div",{className:o().aboutPic,children:(0,t.jsx)(l.Z,{alt:"Portr\xe4t von Timo Smarslik",src:"/images/timoblue.jpg",layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:o().personDetails,children:[(0,t.jsx)("p",{className:o().personTitle,children:(0,t.jsx)("b",{children:"Timo Smarslik"})}),(0,t.jsxs)("p",{className:o().personRole,children:["Abteilungsleiter ",(0,t.jsx)("br",{})," Vermietung"]}),(0,t.jsx)("p",{className:o().personSubject,children:"Immobilienkaufmann (IHK)"})]})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:o().person,children:[(0,t.jsx)("div",{className:o().aboutPic,children:(0,t.jsx)(l.Z,{alt:"Portr\xe4t von Justin Barz",src:"/images/justinbarz.jpg",layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:o().personDetails,children:[(0,t.jsx)("p",{className:o().personTitle,children:(0,t.jsx)("b",{children:"Justin Barz"})}),(0,t.jsxs)("p",{className:o().personRole,children:["Abteilungsleiter",(0,t.jsx)("br",{}),"Hausverwaltung"]}),(0,t.jsx)("p",{className:o().personSubject,children:"Immobilienfachwirt (IHK)"})]})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:o().person,children:[(0,t.jsx)("div",{className:o().aboutPic,children:(0,t.jsx)(l.Z,{alt:"Portr\xe4t von Christoph Spieler",src:"/images/Christoph_Spieler.jpg",layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:o().personDetails,children:[(0,t.jsx)("p",{className:o().personTitle,children:(0,t.jsx)("b",{children:"Christoph Spieler"})}),(0,t.jsxs)("p",{className:o().personRole,children:["stellv. Abteilungsleiter",(0,t.jsx)("br",{}),"Hausverwaltung"]}),(0,t.jsx)("p",{className:o().personSubject,children:"Immobilienkaufmann (IHK)"})]})]})})]})})}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(u.Z,{title:"Unser B\xfcro",children:(0,t.jsxs)(h.Z,{amountVisible:e?1:2,children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:o().buroPic,children:(0,t.jsx)(l.Z,{alt:"Foto des Empfangs",layout:"fill",objectFit:"cover",src:"/images/Empfang.jpg"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:o().buroPic,children:(0,t.jsx)(l.Z,{alt:"Foto des Konferenzzimmers",layout:"fill",objectFit:"cover",src:"/images/Konferenzzimmer.webp"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:o().buroPic,children:(0,t.jsx)(l.Z,{alt:"Foto von der Hausansicht der Hausverwaltung",layout:"fill",objectFit:"cover",src:"/images/Hausansicht.jpg"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:o().buroPic,children:(0,t.jsx)(l.Z,{alt:"Foto von der R\xfcckansicht der Hausverwaltung",layout:"fill",objectFit:"cover",src:"/images/R\xfcckansicht.webp"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:o().buroPic,children:(0,t.jsx)(l.Z,{alt:"Foto vom Treppenhaus Hausverwaltung",layout:"fill",objectFit:"cover",src:"/images/Treppenhaus.jpg"})})})]})})}),(0,t.jsx)(r.Z,{children:(0,t.jsx)("div",{className:o().bgWhite,children:(0,t.jsx)(s.Z,{children:(0,t.jsxs)("div",{className:o().siegelGallery,children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{alt:"Immoscout-siegel",src:"/images/immoscoutsiegel.png",layout:"fill",objectFit:"contain"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{alt:"immowelt-siegel",src:"/images/immoweltsiegel.jpg",layout:"fill",objectFit:"contain"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{alt:"ihk-siegel",src:"/images/ihksiegel.jpg",layout:"fill",objectFit:"contain"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{alt:"ivd-siegel",src:"/images/ivdsiegel.jpg",layout:"fill",objectFit:"contain"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{alt:"schufa-siegel",src:"/images/schufasiegel.jpg",layout:"fill",objectFit:"contain"})})]})})})}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(u.Z,{title:"Kontaktformular",children:(0,t.jsx)("div",{id:"#about-us-formular",className:o().contactContainer,children:(0,t.jsx)(d.Z,{})})})})]})]})}},2603:function(e){e.exports={flex:"AboutUs_flex__djmIP",aboutPic:"AboutUs_aboutPic__p0Vyh",wrapper:"AboutUs_wrapper__JITSu",cta:"AboutUs_cta__GHlwk",aboutUs:"AboutUs_aboutUs__M077y",aboutGallery:"AboutUs_aboutGallery__o2TJK",person:"AboutUs_person__BkmmX",personDetails:"AboutUs_personDetails__JH_7e",personTitle:"AboutUs_personTitle__PaJGu",personRole:"AboutUs_personRole__DP9e7",personSubject:"AboutUs_personSubject__o1oKQ",contactContainer:"AboutUs_contactContainer__ria1B",form:"AboutUs_form__gn9An",bgWhite:"AboutUs_bgWhite__O6P2w",siegelGallery:"AboutUs_siegelGallery__L1zqt",splitImage:"AboutUs_splitImage__cft_Z",contrast:"AboutUs_contrast__r6j0h",gradientOverlay:"AboutUs_gradientOverlay__V3SZZ",headerBg:"AboutUs_headerBg__5n972",dydoMockup:"AboutUs_dydoMockup__9mOQY",title:"AboutUs_title___Goss",mainContainer:"AboutUs_mainContainer__8B1ja",red:"AboutUs_red___6hHe",center:"AboutUs_center__nzi6y",contentConstraint:"AboutUs_contentConstraint__136bQ",alignCenter:"AboutUs_alignCenter__9VvJe",constrainWidth:"AboutUs_constrainWidth__Dgozl",dydoInfo:"AboutUs_dydoInfo__MmmGj",dydoLogoContainer:"AboutUs_dydoLogoContainer__22Tic",glowEffectContainer:"AboutUs_glowEffectContainer__kE4Dj",grotesque:"AboutUs_grotesque__tYu7D",home:"AboutUs_home__vyqJv",backgroundWhite:"AboutUs_backgroundWhite__Mbb1I",contact:"AboutUs_contact__eHEYP",footer:"AboutUs_footer__ektIu",footerContainer:"AboutUs_footerContainer__oiP47",logo:"AboutUs_logo__KHc4B",factsSection:"AboutUs_factsSection__XZWoy",split:"AboutUs_split__U0QXL",aboutDydoSection:"AboutUs_aboutDydoSection__EXhyl",highlightSection:"AboutUs_highlightSection__Hlga9",splitAlignVertical:"AboutUs_splitAlignVertical__cHoZw",collapseButtons:"AboutUs_collapseButtons__2JVq6",infoLead:"AboutUs_infoLead__jIWW0",angebotsButtons:"AboutUs_angebotsButtons__CEv6c",numbersAndFactsSection:"AboutUs_numbersAndFactsSection__pFvsJ",contactSection:"AboutUs_contactSection__6CVsM",factsList:"AboutUs_factsList__54peM",wasBietenWirImage:"AboutUs_wasBietenWirImage__FtKGd",importantBox:"AboutUs_importantBox__EccdD",plusCards:"AboutUs_plusCards__2hf2J",bulletPoint:"AboutUs_bulletPoint__VobRA",image:"AboutUs_image__9bk_L",angebotsListe:"AboutUs_angebotsListe__WY90K",illustration:"AboutUs_illustration__Gt8yf",illustrationAlignedWithHeader:"AboutUs_illustrationAlignedWithHeader__cQ5Rj",illustrationAlignedWithHeader3:"AboutUs_illustrationAlignedWithHeader3__lFOgv",financeSection:"AboutUs_financeSection__hFDB6",verwaltungSection:"AboutUs_verwaltungSection__wOC8O",illustrationAlignedWithHeader2:"AboutUs_illustrationAlignedWithHeader2__SUMOV",coolExtraInfo:"AboutUs_coolExtraInfo__UV1ty",immoAngebote:"AboutUs_immoAngebote__GXdNc",arrow:"AboutUs_arrow__2GeSj",selected:"AboutUs_selected__mQFZ4",gradient1:"AboutUs_gradient1__IlTg_",gradient2:"AboutUs_gradient2__kTC4j",buroPic:"AboutUs_buroPic__vyiKX",leadWrapper:"AboutUs_leadWrapper___xxm3",mainInfo:"AboutUs_mainInfo__6mvG_",mc:"AboutUs_mc__T73TH",header:"AboutUs_header__BBWev",dydoMoodContainer:"AboutUs_dydoMoodContainer__8koAG",content:"AboutUs_content__Bs0Ef",mainContainerWrapShadow:"AboutUs_mainContainerWrapShadow__RbOmC",ratings:"AboutUs_ratings__jGgMg"}},8495:function(e){e.exports={button:"Button_button__HxzDS",font:"Button_font__iBFap",pressed:"Button_pressed__QpYIp",compact:"Button_compact__Dd_jO",glow:"Button_glow__FTlyq",background:"Button_background___yxcY",filter:"Button_filter__Kswh4",outlined:"Button_outlined__TS_a1"}},7248:function(e){e.exports={wrapper:"CheckBox_wrapper__2D0Rn",error:"CheckBox_error__eHwJv"}},2121:function(e){e.exports={form:"FastContact_form__8VVOY",mail:"FastContact_mail__1ldhI",msg:"FastContact_msg__JDOt9",invisible:"FastContact_invisible__RmjuO",anrede:"FastContact_anrede__na2xr",onlyDesktop:"FastContact_onlyDesktop__vPROe",actions:"FastContact_actions__eKrxj"}},5153:function(e){e.exports={forward:"HorizontalSlider_forward__iVq5Y",back:"HorizontalSlider_back__XN2fd",wrapper:"HorizontalSlider_wrapper__fnQl3",elementWrapper:"HorizontalSlider_elementWrapper__vb99l",element:"HorizontalSlider_element__gsxgN"}},5809:function(e){e.exports={section:"Section_section__FwSbd",split:"Section_split__bbUoU",content:"Section_content__16AZB",maxContent:"Section_maxContent__QYyra",image:"Section_image__eqjzD",shadow:"Section_shadow__IcBwi"}},385:function(e){e.exports={wrapper:"TextInput_wrapper__YJLYP",medium:"TextInput_medium__T8aon",small:"TextInput_small__kqWR5",big:"TextInput_big__BY4wn"}},9814:function(e){e.exports={wrapper:"Underscore_wrapper__Ddsg0",underscore:"Underscore_underscore__TRgMO",marginTop:"Underscore_marginTop___uR2o",small:"Underscore_small__Of1NQ",medium:"Underscore_medium__lcNgj",big:"Underscore_big__U9Oea",full:"Underscore_full__tgxwJ"}},9556:function(e){e.exports={container:"Container_container___sAOK"}},4960:function(e,n,i){"use strict";i.d(n,{c:function(){return o}});var t=i(7294),s=i(3234),r=i(6014),a=i(6681);function o(e){const n=(0,a.h)((()=>(0,s.B)(e))),{isStatic:i}=(0,t.useContext)(r._);if(i){const[,i]=(0,t.useState)(e);(0,t.useEffect)((()=>n.onChange(i)),[])}return n}}},function(e){e.O(0,[328,425,774,888,179],(function(){return n=5406,e(e.s=n);var n}));var n=e.O();_N_E=n}]);