(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{6789:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var a=r(6042),i=r(9396),t=r(5893),l=r(3600),s=r.n(l),o=r(8252),c=r(1058),d=r(1225);function u(e){var n=e.id,r=e.mobileImageSrc,l=e.buttonProps,u=e.pressed,h=e.label,m=e.labelMobile,f=e.onClick,_=(0,d.Z)("(max-width:780px)");return(0,t.jsxs)("div",{id:n,className:s().card,children:[_&&void 0!=m?(0,t.jsx)("h2",{className:s().header,children:m}):(0,t.jsx)("h2",{children:h}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:s().buttonContainer,children:(0,t.jsx)(o.Z,(0,i.Z)((0,a.Z)({},l),{pressed:u,onClick:f,fontSize:1,label:"Mehr"}))}),(0,t.jsx)("div",{className:s().arrow+" "+(u?s().pressed:""),children:(0,t.jsx)(c.Z,{layout:"fill",unoptimized:!0,objectFit:"contain",src:"/images/arrow-down-white.png"})})]}),_&&(0,t.jsx)("div",{className:s().image,children:(0,t.jsx)(c.Z,{src:r,layout:"fill",objectFit:"contain"})}),_&&(0,t.jsx)("div",{className:s().wrapShadow})]})}},9305:function(e,n,r){"use strict";r.d(n,{Z:function(){return M}});var a=r(828),i=r(5893),t=r(7294),l=r(8252),s=r(9098),o=r(5867),c=r.n(o),d=r(5130),u=r(1120),h=r(4924),m=r(6042),f=r(9396),_=r(7568),p=r(4051),x=r.n(p),b=r(6332);function v(e,n,r,a){return fetch("https://api.propstack.de/v1/contacts?api_key=".concat(b.aJ),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client:{email:e,first_name:null!==n&&void 0!==n?n:"",last_name:null!==r&&void 0!==r?r:"",salutation:null!==a&&void 0!==a?a:""}})})}function j(){return(j=(0,_.Z)(x().mark((function e(n,r){var a,i,t,l,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(n.email,null!==(a=n.firstName)&&void 0!==a?a:"",null!==(i=n.lastName)&&void 0!==i?i:"",null!==(t=n.salutation)&&void 0!==t?t:"");case 3:if(201===(l=e.sent).status){e.next=6;break}throw new Error("Could not create contact");case 6:return e.next=8,l.json();case 8:return s=e.sent.id,e.abrupt("return",fetch("https://api.propstack.de/v1/saved_queries?api_key=".concat(b.ob),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({saved_query:(0,f.Z)((0,m.Z)({},r),{client_id:s})})}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=r(4817),Z=r.n(g),y=r(9243),w=r(2853),N=r(1163),C=r.n(N),S=r(3380),k=r.n(S),F=r(6240),E=r(3090),z=r(7056),D=r(7937),L=r(3225),A=r(1877),P=r(1362);function O(e){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e)}var J=function(e){var n=e.onFinished,r=(0,a.Z)(t.useState(!1),2),s=r[0],o=r[1],c=(0,t.useState)(!1),d=c[0],_=(c[1],(0,a.Z)(t.useState(!1),2)),p=_[0],x=_[1],b=(0,a.Z)(t.useState(!1),2),v=b[0],g=b[1],N=(0,a.Z)(t.useState(!1),2),S=N[0],J=N[1],M=(0,t.useState)({living_space:[0,200],price:[0,1e6],number_of_rooms:[0,10],number_of_bedrooms:[0,10],base_rent:[0,2e3],floor:[0,10],plot_area:[0,1e3],construction_year:[1900,2023],lift:"",balcony:"",garden:"",built_in_kitchen:"",cellar:"",rented:"",marketing_type:"BUY"}),H=M[0],R=M[1],I=t.forwardRef((function(e,n){return(0,i.jsx)(w.Z,(0,m.Z)({elevation:6,ref:n,variant:"filled"},e))}));t.useEffect((function(){if(S){R({living_space:[0,200],price:[0,1e6],number_of_rooms:[0,10],number_of_bedrooms:[0,10],base_rent:[0,2e3],floor:[0,10],plot_area:[0,1e3],construction_year:[1900,2023],lift:"",balcony:"",garden:"",built_in_kitchen:"",cellar:"",rented:"",marketing_type:"BUY"});var e=setInterval((function(){n&&n()}),4500);return function(){return clearInterval(e)}}}),[S]);var T=function(e){return function(n,r){R((function(n){return(0,f.Z)((0,m.Z)({},n),(0,h.Z)({},e,r))}))}},U=function(e){var n=e.target,r=n.name,a=n.value;R((function(e){return(0,f.Z)((0,m.Z)({},e),(0,h.Z)({},r,a))}))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.Z,{anchorOrigin:{horizontal:"center",vertical:"bottom"},onClose:function(){x(!1)},severity:"error",open:p,autoHideDuration:6e3,children:(0,i.jsx)(I,{onClose:function(){x(!1)},severity:"error",sx:{width:"100%"},children:"Ein Fehler ist aufgetreten. Bitte versuchen Sie es sp\xe4ter erneut."})}),(0,i.jsx)(y.Z,{anchorOrigin:{horizontal:"center",vertical:"bottom"},onClose:function(){g(!1)},severity:"success",open:v,autoHideDuration:6e3,children:(0,i.jsx)(I,{onClose:function(){g(!1)},severity:"success",sx:{width:"100%"},children:"Das Suchprofil wurde erfolgreich erstellt."})}),(0,i.jsxs)("form",{className:Z().suchprofil,onSubmit:function(e){e.preventDefault(),o(!0),function(e,n){return j.apply(this,arguments)}({email:H.email,firstName:H.firstName,lastName:H.lastName,salutation:H.salutation},function(e){var n={};for(var r in e){var i=e[r];if(Array.isArray(i)){var t=(0,a.Z)(i,2),l=t[0],s=t[1],o=r.replace("_to","");n["".concat(o)]=l,n["".concat(o,"_to")]=s}else n[r]=i}return n}(H)).then((function(e){201==e.status?(console.log("SUCCESS"),g(!0),J(!0),C().push("#success")):(console.log("ERROR"+e.status),x(!0))})).catch((function(e){console.log("ERROR "+e),x(!0)})).finally((function(){o(!1)}))},children:[(0,i.jsx)("h2",{children:"Suchauftrag erstellen"}),(0,i.jsx)("div",{children:(0,i.jsxs)(F.Z,{children:[(0,i.jsx)("label",{htmlFor:"marketing_type",children:"Mieten/Kaufen?"}),(0,i.jsxs)(E.Z,{id:"marketing_type",name:"marketing_type",value:H.marketing_type,onChange:U,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"RENT",children:"Mieten"}),(0,i.jsx)(z.Z,{value:"BUY",children:"Kaufen"})]})]})}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"living_space",children:["Wohnfl\xe4che ",H.living_space[0]+" - "+H.living_space[1]," m",(0,i.jsx)("sup",{children:"2"})," "]}),(0,i.jsx)(D.ZP,{className:Z().slider,id:"living_space",valueLabelFormat:function(e){return"".concat(e," m\xb2")},value:H.living_space,onChange:T("living_space"),valueLabelDisplay:"auto","aria-labelledby":"range-slider",color:"warning",max:200})]}),("BUY"===H.marketing_type||""===H.marketing_type)&&(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"price",children:["Preis ",O(H.price[0])+" - "+O(H.price[1])]}),(0,i.jsx)(D.ZP,{id:"price",step:1e4,color:"warning",valueLabelFormat:function(e){return"".concat(new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e))},value:H.price,onChange:T("price"),valueLabelDisplay:"auto","aria-labelledby":"range-slider",max:15e5})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"number_of_rooms",children:["Zimmer ",H.number_of_rooms[0]+" - "+H.number_of_rooms[1]]}),(0,i.jsx)(D.ZP,{id:"number_of_rooms",valueLabelFormat:function(e){return"".concat(e," Zimmer")},value:H.number_of_rooms,onChange:T("number_of_rooms"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:10})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"number_of_bedrooms",children:["Schlafzimmer ",H.number_of_bedrooms[0]+" - "+H.number_of_bedrooms[1]," "]}),(0,i.jsx)(D.ZP,{id:"number_of_bedrooms",valueLabelFormat:function(e){return"".concat(e," Zimmer")},value:H.number_of_bedrooms,onChange:T("number_of_bedrooms"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:10})]}),("RENT"===H.marketing_type||""===H.marketing_type)&&(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"base_rent",children:["Kaltmiete ",O(H.base_rent[0])+" - "+O(H.base_rent[1])]}),(0,i.jsx)(D.ZP,{id:"base_rent",valueLabelFormat:function(e){return"".concat(e," \u20ac")},value:H.base_rent,onChange:T("base_rent"),valueLabelDisplay:"auto",color:"warning",step:50,"aria-labelledby":"range-slider",max:2e3})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"floor",children:["Etage ",H.floor[0]+" - "+H.floor[1]]}),(0,i.jsx)(D.ZP,{id:"floor",valueLabelFormat:function(e){return"".concat(e,". Etage")},value:H.floor,onChange:T("floor"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:10})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"plot_area",children:["Grundst\xfccksfl\xe4che ",H.plot_area[0]+" - "+H.plot_area[1]," m",(0,i.jsx)("sup",{children:"2"})]}),(0,i.jsx)(D.ZP,{id:"plot_area",valueLabelFormat:function(e){return"".concat(e," m\xb2")},value:H.plot_area,onChange:T("plot_area"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",max:1e3})]}),(0,i.jsxs)("div",{className:Z().sliderContainer,children:[(0,i.jsxs)("label",{htmlFor:"construction_year",children:["Baujahr ",H.construction_year[0]+" - "+H.construction_year[1]]}),(0,i.jsx)(D.ZP,{id:"construction_year",valueLabelFormat:function(e){return"Jahr ".concat(e)},value:H.construction_year,onChange:T("construction_year"),valueLabelDisplay:"auto",color:"warning","aria-labelledby":"range-slider",min:1900,max:2023})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsxs)(F.Z,{children:[(0,i.jsx)("label",{htmlFor:"salutation",children:"Anrede"}),(0,i.jsxs)(E.Z,{id:"salutation",name:"salutation",value:H.salutation,onChange:U,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"Herr",children:"Herr"}),(0,i.jsx)(z.Z,{value:"Frau",children:"Frau"})]})]}),(0,i.jsx)(L.Z,{label:"Vorname",name:"firstName",value:H.firstName,onChange:U}),(0,i.jsx)(L.Z,{label:"Nachname",name:"lastName",value:H.lastName,onChange:U}),(0,i.jsx)(L.Z,{label:"Email",name:"email",type:"email",value:H.email,onChange:U})]}),d&&(0,i.jsxs)("div",{children:[(0,i.jsxs)(F.Z,{children:[(0,i.jsx)("label",{htmlFor:"lift",children:"Muss einen Fahrstuhl haben?"}),(0,i.jsxs)(E.Z,{id:"lift",name:"lift",value:H.lift,onChange:U,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]}),(0,i.jsx)(A.Z,{className:Z()["inline-block"]+" "+Z().checkbox,control:(0,i.jsx)(P.Z,{name:"balcony",checked:"true"===H.balcony,onChange:U}),label:"Muss ein Balkon haben?"}),(0,i.jsx)(A.Z,{className:Z()["inline-block"]+" "+Z().checkbox,control:(0,i.jsx)(P.Z,{name:"garden",checked:"true"===H.garden,onChange:U}),label:"Muss einen Garten haben?"}),(0,i.jsxs)(F.Z,{className:Z().field,children:[(0,i.jsx)("label",{htmlFor:"built_in_kitchen",children:"Einbauk\xfcche?"}),(0,i.jsxs)(E.Z,{id:"built_in_kitchen",name:"built_in_kitchen",className:Z().select,value:H.built_in_kitchen,onChange:U,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]}),(0,i.jsxs)(F.Z,{className:Z().field,children:[(0,i.jsx)("label",{htmlFor:"cellar",children:"Keller?"}),(0,i.jsxs)(E.Z,{className:Z().select,id:"cellar",name:"cellar",value:H.cellar,onChange:U,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]}),(0,i.jsxs)(F.Z,{className:Z().field,children:[(0,i.jsx)("label",{htmlFor:"rented",children:"Soll das Objekt vermietet sein?"}),(0,i.jsxs)(E.Z,{className:Z().select,id:"rented",name:"rented",value:H.rented,onChange:U,children:[(0,i.jsx)(z.Z,{value:"",children:"Egal"}),(0,i.jsx)(z.Z,{value:"true",children:"Ja"}),(0,i.jsx)(z.Z,{value:"false",children:"Nein"})]})]})]}),(0,i.jsxs)("div",{className:Z().submit+" flex gap-1",children:[!S&&(0,i.jsx)(l.Z,{type:"submit",fontSize:1.2,disabled:s,label:s?"sendet...":"Absenden",color:"primary"}),(0,i.jsxs)("div",{className:"sweet-loading "+Z().loader,children:["  ",(0,i.jsx)(k(),{loading:s,size:50})]})]}),S&&(0,i.jsx)(u.tJ,{once:!0,duration:.9,children:(0,i.jsxs)("div",{className:Z().success,children:[(0,i.jsx)("h2",{children:"Suchprofil erstellt!"}),(0,i.jsx)("p",{children:"Sobald wir etwas Passendes f\xfcr Sie gefunden haben, melden wir uns bei Ihnen."})]})})]})]})};function M(e){var n=e.rents,r=e.buys,o=(0,a.Z)(t.useState("kaufen"),2),h=o[0],m=o[1],f=(0,a.Z)(t.useState(!1),2),_=f[0],p=f[1],x=(0,a.Z)(t.useState(!1),2),b=x[0],v=x[1];return(0,i.jsxs)("div",{className:c().wrapper,children:[_&&(0,i.jsx)(u.tJ,{once:!0,duration:.9,children:(0,i.jsx)("div",{id:"suchauftrag",className:c().suchauftrag,children:(0,i.jsx)(J,{onFinished:function(){return p(!1)}})})}),(0,i.jsxs)("div",{className:c().options,children:[(0,i.jsx)("h2",{id:"#immobilien-angebote",children:"Filter: "}),(0,i.jsx)(l.Z,{pressed:"kaufen"==h,fontSize:1,variant:"text",label:"Kaufen",onClick:function(){m("kaufen")}}),(0,i.jsx)(l.Z,{pressed:"mieten"==h,fontSize:1,variant:"text",label:"Mieten",onClick:function(){m("mieten")}}),(0,i.jsx)(l.Z,{fontSize:1,variant:"text",label:"Suchauftrag",onClick:function(){return p(!0)}})]}),(0,i.jsx)("div",{className:c().list,children:"mieten"==h?function(e){return e.map((function(e,n){return n%2==0?(0,i.jsx)(d.OD,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.base_rent,rooms:e.number_of_rooms,space:e.living_space},n+"rents")},n+"revrents"):(0,i.jsx)(d.I2,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.base_rent,rooms:e.number_of_rooms,space:e.living_space},n+"rents")},n+"revrents")}))}(n):function(e){return e.map((function(e,n){return n%2==0?(0,i.jsx)(d.OD,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.price,rooms:e.number_of_rooms,space:e.living_space},n+"buys")},n+"revbuys"):(0,i.jsx)(d.I2,{once:!0,viewportAmount:.2,children:(0,i.jsx)(s.Z,{id:e.id,type:h,address:e.zip_code+" "+e.city,imageSrc:0!=e.images.length&&e.images[0].medium,header:e.title,price:e.price,rooms:e.number_of_rooms,space:e.living_space},n+"buys")},n+"revbuys")}))}(r)}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Nichts dabei gewesen?"}),(0,i.jsx)("p",{children:"Dann erstellen Sie doch gerne einen Suchauftrag und wir kommen auf Sie zur\xfcck, sobald wir etwas Passendes f\xfcr Sie gefunden haben!"}),b&&(0,i.jsx)(u.tJ,{once:!0,duration:.9,children:(0,i.jsx)("div",{id:"suchauftrag",className:c().suchauftrag,children:(0,i.jsx)(J,{onFinished:function(){return v(!1)}})})}),!b&&(0,i.jsx)(l.Z,{fontSize:1,variant:"text",label:"Suchauftrag erstellen",onClick:function(){return v(!0)}})]})]})}},4191:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var a=r(5893),i=r(7294),t=r(4298),l=r.n(t),s=r(341),o=r.n(s);function c(){return i.useEffect((function(){"undefined"!=typeof FisherWidget&&FisherWidget.init({apiKey:"2d6c8d2df5484fb5a423811d0d456dcc",iframe:"#fisher-widget",textColor:"222222",activeColor:"aabbcc"})})),(0,a.jsxs)("div",{className:o().wrapper,children:[(0,a.jsx)(l(),{id:"hubble",Script:!0,src:"https://fisher.pricehubble.com/widget.js",type:"text/javascript",onLoad:function(){FisherWidget.init({apiKey:"2d6c8d2df5484fb5a423811d0d456dcc",iframe:"#fisher-widget",textColor:"222222",activeColor:"aabbcc",consentGranted:!1})}}),(0,a.jsx)("iframe",{id:"fisher-widget",scrolling:"no",className:o().widget,name:"fisher-widget"})]})}},3:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var a=r(5893),i=r(4581),t=r.n(i),l=r(1058);function s(e){var n=e.title,r=e.text,i=e.src,s=e.iconSize;return(0,a.jsxs)("div",{className:t().card,children:[(0,a.jsx)("div",{className:t().icon,style:{width:s,height:s},children:(0,a.jsx)(l.Z,{src:i,alt:"icon f\xfcr illustration",layout:"fill",objectFit:"contain"})}),(0,a.jsxs)("div",{className:t().text,children:[(0,a.jsx)("h3",{children:n}),(0,a.jsxs)("p",{children:[" ",r]})]})]})}},5240:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var a=r(828),i=r(5893),t=r(5153),l=r.n(t),s=r(7294),o=r(1058),c=r(4960),d=r(8821);function u(e){var n=e.children,r=e.amountVisible,t=(0,a.Z)(s.useState(0),2),u=t[0],h=t[1],m=(0,c.c)(-300),f=function(e){return e+1>=n.length?Math.abs(e+1-n.length):e+1};return(0,i.jsxs)("div",{className:l().wrapper,children:[(0,i.jsx)("div",{className:l().back,onClick:function(){var e;m.set(-300),h((e=u)-1<0?n.length-Math.abs(e-1):e-1)},children:(0,i.jsx)(o.Z,{className:l().arrow,alt:"Arrow Icon n",src:"/images/arrow-down-white.png",layout:"fill",objectFit:"contain"})}),(0,i.jsx)("div",{className:l().elementWrapper,children:function(){for(var e,a=[],t=0;t<r;t++)a.push((e=[f(u+t-1)],(0,i.jsx)(d.E.div,{layout:!0,initial:{x:m.get(),opacity:0},animate:{x:0,opacity:1,transition:{duration:.6,type:"tween"}},exit:{opacity:1},transition:{type:"tween",layout:{duration:.6}},children:n[e]},e+"-slider-element")));return a}()}),(0,i.jsx)("div",{className:l().forward,onClick:function(){m.set(300),h(f(u))},children:(0,i.jsx)(o.Z,{className:l().arrow,alt:"Arrow Icon n",src:"/images/arrow-down-white.png",layout:"fill",objectFit:"contain"})})]})}},4817:function(e){e.exports={suchprofil:"Suchprofil_suchprofil__UV_kw",success:"Suchprofil_success__Cm3pO",flex:"Suchprofil_flex___j3AK",checkbox:"Suchprofil_checkbox__0LjZ7",person:"Suchprofil_person__VvrEF",sliderContainer:"Suchprofil_sliderContainer__qzsQB",field:"Suchprofil_field__StJMl",submit:"Suchprofil_submit__G9akr",select:"Suchprofil_select__m_mpi"}},3600:function(e){e.exports={card:"AnotherCard_card__kWo6x",pressed:"AnotherCard_pressed__PZpO7",buttonContainer:"AnotherCard_buttonContainer__pYCpd",arrow:"AnotherCard_arrow__gvxJN",wrapShadow:"AnotherCard_wrapShadow__1CkWD",image:"AnotherCard_image__xmk0S",header:"AnotherCard_header__cFfTm"}},5153:function(e){e.exports={forward:"HorizontalSlider_forward__iVq5Y",back:"HorizontalSlider_back__XN2fd",wrapper:"HorizontalSlider_wrapper__fnQl3",elementWrapper:"HorizontalSlider_elementWrapper__vb99l",element:"HorizontalSlider_element__gsxgN"}},341:function(e){e.exports={wrapper:"PriceHubble_wrapper__Z5yZP",widget:"PriceHubble_widget__O0UDo"}},4581:function(e){e.exports={icon:"TextCard_icon__7CpZE",card:"TextCard_card__LMxz_",text:"TextCard_text__jw5ck"}}}]);