(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{6789:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var a=r(6042),i=r(9396),l=r(5893),t=r(3600),s=r.n(t),o=r(8252),c=r(1058),u=r(1225);function d(e){var n=e.id,r=e.mobileImageSrc,t=e.buttonProps,d=e.pressed,h=e.label,m=e.labelMobile,f=e.onClick,_=(0,u.Z)("(max-width:780px)");return(0,l.jsxs)("div",{id:n,className:s().card,children:[_&&void 0!=m?(0,l.jsx)("h2",{className:s().header,children:m}):(0,l.jsx)("h2",{children:h}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:s().buttonContainer,children:(0,l.jsx)(o.Z,(0,i.Z)((0,a.Z)({},t),{pressed:d,onClick:f,fontSize:1,label:"Mehr"}))}),(0,l.jsx)("div",{className:s().arrow+" "+(d?s().pressed:""),children:(0,l.jsx)(c.Z,{layout:"fill",unoptimized:!0,objectFit:"contain",src:"/images/arrow-down-white.png"})})]}),_&&(0,l.jsx)("div",{className:s().image,children:(0,l.jsx)(c.Z,{src:r,layout:"fill",objectFit:"contain"})}),_&&(0,l.jsx)("div",{className:s().wrapShadow})]})}},9305:function(e,n,r){"use strict";r.d(n,{Z:function(){return M}});var a=r(828),i=r(5893),l=r(7294),t=r(8252),s=r(9098),o=r(5867),c=r.n(o),u=r(5130),d=r(1120),h=r(4924),m=r(6042),f=r(9396),_=r(7568),x=r(4051),p=r.n(x),b=r(6332);function v(e,n,r,a){return fetch("https://api.propstack.de/v1/contacts?api_key=".concat(b.aJ),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client:{email:e,first_name:null!==n&&void 0!==n?n:"",last_name:null!==r&&void 0!==r?r:"",salutation:null!==a&&void 0!==a?a:""}})})}function j(){return(j=(0,_.Z)(p().mark((function e(n,r){var a,i,l,t,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(n.email,null!==(a=n.firstName)&&void 0!==a?a:"",null!==(i=n.lastName)&&void 0!==i?i:"",null!==(l=n.salutation)&&void 0!==l?l:"");case 3:if(201===(t=e.sent).status){e.next=6;break}throw new Error("Could not create contact");case 6:return e.next=8,t.json();case 8:return s=e.sent.id,e.abrupt("return",fetch("https://api.propstack.de/v1/saved_queries?api_key=".concat(b.ob),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({saved_query:(0,f.Z)((0,m.Z)({},r),{client_id:s})})}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=r(4817),Z=r.n(g),y=r(9243),N=r(2853),w=r(1163),C=r.n(w),S=r(3380),k=r.n(S),F=r(6240),E=r(3090),z=r(7056),A=r(7937),D=r(3225),L=r(1877),P=r(1362);function J(e){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e)}var O=function(e){var n=e.onFinished,r=(0,a.Z)(l.useState(!1),2),s=r[0],o=r[1],c=(0,l.useState)(!1),u=c[0],_=(c[1],(0,a.Z)(l.useState(!1),2)),x=_[0],p=_[1],b=(0,a.Z)(l.useState(!1),2),v=b[0],g=b[1],w=(0,a.Z)(l.useState(!1),2),S=w[0],O=w[1],M=(0,l.useState)({living_space:[0,200],price:[0,1e6],number_of_rooms:[0,10],number_of_bedrooms:[0,10],base_rent:[0,2e3],floor:[0,10],plot_area:[0,1e3],construction_year:[1900,2023],lift:"",balcony:"",garden:"",built_in_kitchen:"",cellar:"",rented:"",marketing_type:"BUY"}),R=M[0],I=M[1],T=l.forwardRef((function(e,n){return(0,i.jsx)(N.Z,(0,m.Z)({elevation:6,ref:n,variant:"filled"},e))}));l.useEffect((function(){if(S){I({living_space:[0,200],price:[0,1e6],number_of_rooms:[0,10],number_of_bedrooms:[0,10],base_rent:[0,2e3],floor:[0,10],plot_area:[0,1e3],construction_year:[1900,2023],lift:"",balcony:"",garden:"",built_in_kitchen:"",cellar:"",rented:"",marketing_type:"BUY"});var e=setInterval((function(){n&&n()}),4500);return function(){return clearInterval(e)}}}),[S]);var H=function(e){return function(n,r){I((function(n){return(0,f.Z)((0,m.Z)({},n),(0,h.Z)({},e,r))}))}},B=function(e){var n=e.target,r=n.name,a=n.value;I((function(e){return(0,f.Z)((0,m.Z)({},e),(0,h.Z)({},r,a))}))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.Z,{anchorOrigin:{horizontal:"center",vertical:"bottom"},onClose:function(){p(!1)},severity:"error",open:x,autoHideDuration:6e3,children:(0,i.jsx)(T,{onClose:function(){p(!1)},severity:"error",sx:{width:"100%"},children:"Ein Fehler ist aufgetreten. Bitte versuchen Sie es sp\xe4ter erneut."})}),(0,i.jsx)(y.Z,{anchorOrigin:{horizontal:"center",vertical:"bottom"},onClose:function(){g(!1)},severity:"success",open:v,autoHideDuration:6e3,children:(0,i.jsx)(T,{onClose:function(){g(!1)},severity:"success",sx:{width:"100%"},children:"Das Suchprofil wurde erfolgreich erstellt."})}),(0,i.jsxs)("form",{className:Z().suchprofil,onSubmit:function(e){e.preventDefault(),o(!0),function(e,n){return j.apply(this,arguments)}({email:R.email,firstName:R.firstName,lastName:R.lastName,salutation:R.salutation},function(e){var n={};for(var r in e){var i=e[r];if(Array.isArray(i)){var l=(0,a.Z)(i,2),t=l[0],s=l[1],o=r.replace("_to","");n["".concat(o)]=t,n["".concat(o,"_to")]=s}else n[r]=i}return n}(R)).then((function(e){201==e.status?(console.log("SUCCESS"),g(!0),O(!0),C().push("#success")):(console.log("ERROR"+e.status),p(!0))})).catch((function(e){console.log("ERROR "+e),p(!0)})).finally((function(){o(!1)}))},children:[(0,i.jsx)("h2",{children:"Suchauftrag erstellen"}),(0,i.jsx)("div",{children:(0,i.jsxs)(F.Z,{children:[(0,i.jsx)("label",{htmlFor:"marketing_type",children:"Mieten/Kaufen?"}),(0,i.jsxs)(E.Z,{id:"marketing_type",name:"marketing_type",value:R.marketing_type,onChange:B,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"RENT",children:"Mieten"}),(0,i.jsx)(z.Z,{value:"BUY",children:"Kaufen"})]})]})}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"living_space",children:["Wohnfl\xe4che ",R.living_space[0]+" - "+R.living_space[1]," m",(0,i.jsx)("sup",{children:"2"})," "]}),(0,i.jsx)(A.ZP,{className:Z().slider,id:"living_space",valueLabelFormat:function(e){return"".concat(e," m\xb2")},value:R.living_space,onChange:H("living_space"),valueLabelDisplay:"auto","aria-labelledby":"range-slider",color:"warning",max:200})]}),("BUY"===R.marketing_type||""===R.marketing_type)&&(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"price",children:["Preis ",J(R.price[0])+" - "+J(R.price[1])]}),(0,i.jsx)(A.ZP,{id:"price",step:1e4,color:"warning",valueLabelFormat:function(e){return"".concat(new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e))},value:R.price,onChange:H("price"),valueLabelDisplay:"auto","aria-labelledby":"range-slider",max:15e5})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"number_of_rooms",children:["Zimmer ",R.number_of_rooms[0]+" - "+R.number_of_rooms[1]]}),(0,i.jsx)(A.ZP,{id:"number_of_rooms",valueLabelFormat:function(e){return"".concat(e," Zimmer")},value:R.number_of_rooms,onChange:H("number_of_rooms"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:10})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"number_of_bedrooms",children:["Schlafzimmer ",R.number_of_bedrooms[0]+" - "+R.number_of_bedrooms[1]," "]}),(0,i.jsx)(A.ZP,{id:"number_of_bedrooms",valueLabelFormat:function(e){return"".concat(e," Zimmer")},value:R.number_of_bedrooms,onChange:H("number_of_bedrooms"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:10})]}),("RENT"===R.marketing_type||""===R.marketing_type)&&(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"base_rent",children:["Kaltmiete ",J(R.base_rent[0])+" - "+J(R.base_rent[1])]}),(0,i.jsx)(A.ZP,{id:"base_rent",valueLabelFormat:function(e){return"".concat(e," \u20ac")},value:R.base_rent,onChange:H("base_rent"),valueLabelDisplay:"auto",color:"warning",step:50,"aria-labelledby":"range-slider",max:2e3})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"floor",children:["Etage ",R.floor[0]+" - "+R.floor[1]]}),(0,i.jsx)(A.ZP,{id:"floor",valueLabelFormat:function(e){return"".concat(e,". Etage")},value:R.floor,onChange:H("floor"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:10})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"plot_area",children:["Grundst\xfccksfl\xe4che ",R.plot_area[0]+" - "+R.plot_area[1]," m",(0,i.jsx)("sup",{children:"2"})]}),(0,i.jsx)(A.ZP,{id:"plot_area",valueLabelFormat:function(e){return"".concat(e," m\xb2")},value:R.plot_area,onChange:H("plot_area"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:1e3})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"construction_year",children:["Baujahr ",R.construction_year[0]+" - "+R.construction_year[1]]}),(0,i.jsx)(A.ZP,{id:"construction_year",valueLabelFormat:function(e){return"Jahr ".concat(e)},value:R.construction_year,onChange:H("construction_year"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",min:1900,max:2023})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsxs)(F.Z,{children:[(0,i.jsx)("label",{htmlFor:"salutation",children:"Anrede"}),(0,i.jsxs)(E.Z,{id:"salutation",name:"salutation",value:R.salutation,onChange:B,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"Herr",children:"Herr"}),(0,i.jsx)(z.Z,{value:"Frau",children:"Frau"})]})]}),(0,i.jsx)(D.Z,{label:"Vorname",name:"firstName",value:R.firstName,onChange:B}),(0,i.jsx)(D.Z,{label:"Nachname",name:"lastName",value:R.lastName,onChange:B}),(0,i.jsx)(D.Z,{label:"Email",name:"email",type:"email",value:R.email,onChange:B})]}),u&&(0,i.jsxs)("div",{children:[(0,i.jsxs)(F.Z,{children:[(0,i.jsx)("label",{htmlFor:"lift",children:"Muss einen Fahrstuhl haben?"}),(0,i.jsxs)(E.Z,{id:"lift",name:"lift",value:R.lift,onChange:B,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]}),(0,i.jsx)(L.Z,{className:Z()["inline-block"]+" "+Z().checkbox,control:(0,i.jsx)(P.Z,{name:"balcony",checked:"true"===R.balcony,onChange:B}),label:"Muss ein Balkon haben?"}),(0,i.jsx)(L.Z,{className:Z()["inline-block"]+" "+Z().checkbox,control:(0,i.jsx)(P.Z,{name:"garden",checked:"true"===R.garden,onChange:B}),label:"Muss einen Garten haben?"}),(0,i.jsxs)(F.Z,{className:Z().field,children:[(0,i.jsx)("label",{htmlFor:"built_in_kitchen",children:"Einbauk\xfcche?"}),(0,i.jsxs)(E.Z,{id:"built_in_kitchen",name:"built_in_kitchen",className:Z().select,value:R.built_in_kitchen,onChange:B,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]}),(0,i.jsxs)(F.Z,{className:Z().field,children:[(0,i.jsx)("label",{htmlFor:"cellar",children:"Keller?"}),(0,i.jsxs)(E.Z,{className:Z().select,id:"cellar",name:"cellar",value:R.cellar,onChange:B,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]}),(0,i.jsxs)(F.Z,{className:Z().field,children:[(0,i.jsx)("label",{htmlFor:"rented",children:"Soll das Objekt vermietet sein?"}),(0,i.jsxs)(E.Z,{className:Z().select,id:"rented",name:"rented",value:R.rented,onChange:B,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]})]}),(0,i.jsxs)("div",{className:Z().submit+" flex gap-1",children:[!S&&(0,i.jsx)(t.Z,{type:"submit",fontSize:1.2,disabled:s,label:s?"sendet...":"Absenden",color:"primary"}),(0,i.jsxs)("div",{className:"sweet-loading "+Z().loader,children:["  ",(0,i.jsx)(k(),{loading:s,size:50})]})]}),S&&(0,i.jsx)(d.tJ,{once:!0,duration:.9,children:(0,i.jsxs)("div",{className:Z().success,children:[(0,i.jsx)("h2",{children:"Suchprofil erstellt!"}),(0,i.jsx)("p",{children:"Sobald wir etwas Passendes f\xfcr Sie gefunden haben, melden wir uns bei Ihnen."})]})})]})]})};function M(e){var n=e.rents,r=e.buys,o=(0,a.Z)(l.useState("kaufen"),2),h=o[0],m=o[1],f=(0,a.Z)(l.useState(!1),2),_=f[0],x=f[1],p=(0,a.Z)(l.useState(!1),2),b=p[0],v=p[1];return(0,i.jsxs)("div",{className:c().wrapper,children:[(0,i.jsxs)("div",{className:c().options,children:[(0,i.jsx)("h2",{id:"#immobilien-angebote",children:"Filter: "}),(0,i.jsx)(t.Z,{pressed:"kaufen"==h,fontSize:1,variant:"text",label:"Kaufen",onClick:function(){m("kaufen")}}),(0,i.jsx)(t.Z,{pressed:"mieten"==h,fontSize:1,variant:"text",label:"Mieten",onClick:function(){m("mieten")}}),(0,i.jsx)(t.Z,{fontSize:1,variant:"text",label:"Suchauftrag",onClick:function(){return x(!0)}})]}),_&&(0,i.jsx)(d.tJ,{once:!0,duration:.9,children:(0,i.jsx)("div",{id:"suchauftrag",className:c().suchauftrag,children:(0,i.jsx)(O,{onFinished:function(){return x(!1)}})})}),(0,i.jsx)("div",{className:c().list,children:"mieten"==h?function(e){return e.map((function(e,n){return n%2==0?(0,i.jsx)(u.OD,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.base_rent,rooms:e.number_of_rooms,space:e.living_space},n+"rents")},n+"revrents"):(0,i.jsx)(u.I2,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.base_rent,rooms:e.number_of_rooms,space:e.living_space},n+"rents")},n+"revrents")}))}(n):function(e){return e.map((function(e,n){return n%2==0?(0,i.jsx)(u.OD,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.price,rooms:e.number_of_rooms,space:e.living_space},n+"buys")},n+"revbuys"):(0,i.jsx)(u.I2,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.price,rooms:e.number_of_rooms,space:e.living_space},n+"buys")},n+"revbuys")}))}(r)}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Nichts dabei gewesen?"}),(0,i.jsx)("p",{children:"Dann erstellen Sie doch gerne einen Suchauftrag und wir kommen auf Sie zur\xfcck, sobald wir etwas Passendes f\xfcr Sie gefunden haben!"}),b&&(0,i.jsx)(d.tJ,{once:!0,duration:.9,children:(0,i.jsx)("div",{id:"suchauftrag",className:c().suchauftrag,children:(0,i.jsx)(O,{onFinished:function(){return v(!1)}})})}),!b&&(0,i.jsx)(t.Z,{fontSize:1,variant:"text",label:"Suchauftrag erstellen",onClick:function(){return v(!0)}})]})]})}},3:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var a=r(5893),i=r(4581),l=r.n(i),t=r(1058);function s(e){var n=e.title,r=e.text,i=e.src,s=e.iconSize;return(0,a.jsxs)("div",{className:l().card,children:[(0,a.jsx)("div",{className:l().icon,style:{width:s,height:s},children:(0,a.jsx)(t.Z,{src:i,alt:"icon f\xfcr illustration",layout:"fill",objectFit:"contain"})}),(0,a.jsxs)("div",{className:l().text,children:[(0,a.jsx)("h3",{children:n}),(0,a.jsxs)("p",{children:[" ",r]})]})]})}},5240:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var a=r(828),i=r(5893),l=r(5153),t=r.n(l),s=r(7294),o=r(1058),c=r(4960),u=r(8821);function d(e){var n=e.children,r=e.amountVisible,l=(0,a.Z)(s.useState(0),2),d=l[0],h=l[1],m=(0,c.c)(-300),f=function(e){return e+1>=n.length?Math.abs(e+1-n.length):e+1};return(0,i.jsxs)("div",{className:t().wrapper,children:[(0,i.jsx)("div",{className:t().back,onClick:function(){var e;m.set(-300),h((e=d)-1<0?n.length-Math.abs(e-1):e-1)},children:(0,i.jsx)(o.Z,{className:t().arrow,alt:"Arrow Icon n",src:"/images/arrow-down-white.png",layout:"fill",objectFit:"contain"})}),(0,i.jsx)("div",{className:t().elementWrapper,children:function(){for(var e,a=[],l=0;l<r;l++)a.push((e=[f(d+l-1)],(0,i.jsx)(u.E.div,{layout:!0,initial:{x:m.get(),opacity:0},animate:{x:0,opacity:1,transition:{duration:.6,type:"tween"}},exit:{opacity:1},transition:{type:"tween",layout:{duration:.6}},children:n[e]},e+"-slider-element")));return a}()}),(0,i.jsx)("div",{className:t().forward,onClick:function(){m.set(300),h(f(d))},children:(0,i.jsx)(o.Z,{className:t().arrow,alt:"Arrow Icon n",src:"/images/arrow-down-white.png",layout:"fill",objectFit:"contain"})})]})}},4817:function(e){e.exports={suchprofil:"Suchprofil_suchprofil__UV_kw",success:"Suchprofil_success__Cm3pO",flex:"Suchprofil_flex___j3AK",checkbox:"Suchprofil_checkbox__0LjZ7",person:"Suchprofil_person__VvrEF",sliderContainer:"Suchprofil_sliderContainer__qzsQB",field:"Suchprofil_field__StJMl",submit:"Suchprofil_submit__G9akr",select:"Suchprofil_select__m_mpi"}},3600:function(e){e.exports={card:"AnotherCard_card__kWo6x",pressed:"AnotherCard_pressed__PZpO7",buttonContainer:"AnotherCard_buttonContainer__pYCpd",arrow:"AnotherCard_arrow__gvxJN",wrapShadow:"AnotherCard_wrapShadow__1CkWD",image:"AnotherCard_image__xmk0S",header:"AnotherCard_header__cFfTm"}},5153:function(e){e.exports={forward:"HorizontalSlider_forward__iVq5Y",back:"HorizontalSlider_back__XN2fd",wrapper:"HorizontalSlider_wrapper__fnQl3",elementWrapper:"HorizontalSlider_elementWrapper__vb99l",element:"HorizontalSlider_element__gsxgN"}},4581:function(e){e.exports={icon:"TextCard_icon__7CpZE",card:"TextCard_card__LMxz_",text:"TextCard_text__jw5ck"}}}]);