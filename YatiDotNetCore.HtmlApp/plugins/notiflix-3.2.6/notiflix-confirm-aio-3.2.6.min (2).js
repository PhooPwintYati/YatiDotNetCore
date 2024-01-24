/* Notiflix Confirm AIO (https://notiflix.github.io) - Version: 3.2.6 - Author: Furkan (https://github.com/furcan) - Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT) */

(function(a,b){"function"==typeof define&&define.amd?define([],function(){return b(a)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=b(a):a.Notiflix=b(a)})("undefined"==typeof global?"undefined"==typeof window?this:window:global,function(a){'use strict';if("undefined"==typeof a&&"undefined"==typeof a.document)return!1;var b,c={Show:"Show",Ask:"Ask",Prompt:"Prompt"},d={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},e=function(a){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+a+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},f=function(b){return b||(b="head"),null!==a.document[b]||(e("\nNotiflix needs to be appended to the \"<"+b+">\" element, but you called it before the \"<"+b+">\" element has been created."),!1)},g=function(b,c){if(!f("head"))return!1;if(null!==b()&&!a.document.getElementById(c)){var d=a.document.createElement("style");d.id=c,d.innerHTML=b(),a.document.head.appendChild(d)}},h=function(){var a={},b=!1,c=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],c++);for(var d=function(c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=b&&"[object Object]"===Object.prototype.toString.call(c[d])?h(a[d],c[d]):c[d])};c<arguments.length;c++)d(arguments[c]);return a},i=function(b){var c=a.document.createElement("div");return c.innerHTML=b,c.textContent||c.innerText||""},j=function(){return"[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*=\"-overlay\"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*=\"-content\"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*=\"-content\"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}"},k=function(e,g,j,k,m,n,o,p,q){if(!f("body"))return!1;b||l.Confirm.init({});var r=h(!0,b,{});"object"!=typeof q||Array.isArray(q)||(b=h(!0,b,q)),"string"!=typeof g&&(g="Notiflix Confirm"),"string"!=typeof j&&(j="Do you agree with me?"),"string"!=typeof m&&(m="Yes"),"string"!=typeof n&&(n="No"),"function"!=typeof o&&(o=void 0),"function"!=typeof p&&(p=void 0),b.plainText&&(g=i(g),j=i(j),m=i(m),n=i(n)),b.plainText||(g.length>b.titleMaxLength&&(g="Possible HTML Tags Error",j="The \"plainText\" option is \"false\" and the title content length is more than \"titleMaxLength\" option.",m="Okay",n="..."),j.length>b.messageMaxLength&&(g="Possible HTML Tags Error",j="The \"plainText\" option is \"false\" and the message content length is more than \"messageMaxLength\" option.",m="Okay",n="..."),(m.length||n.length)>b.buttonsMaxLength&&(g="Possible HTML Tags Error",j="The \"plainText\" option is \"false\" and the buttons content length is more than \"buttonsMaxLength\" option.",m="Okay",n="...")),g.length>b.titleMaxLength&&(g=g.substring(0,b.titleMaxLength)+"..."),j.length>b.messageMaxLength&&(j=j.substring(0,b.messageMaxLength)+"..."),m.length>b.buttonsMaxLength&&(m=m.substring(0,b.buttonsMaxLength)+"..."),n.length>b.buttonsMaxLength&&(n=n.substring(0,b.buttonsMaxLength)+"..."),b.cssAnimation||(b.cssAnimationDuration=0);var s=a.document.createElement("div");s.id=d.ID,s.className=b.className+(b.cssAnimation?" nx-with-animation nx-"+b.cssAnimationStyle:""),s.style.zIndex=b.zindex,s.style.padding=b.distance,b.rtl&&(s.setAttribute("dir","rtl"),s.classList.add("nx-rtl-on"));var t="string"==typeof b.position?b.position.trim():"center";s.classList.add("nx-position-"+t),s.style.fontFamily="\""+b.fontFamily+"\", "+"-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif";var u="";b.backOverlay&&(u="<div class=\""+b.className+"-overlay"+(b.cssAnimation?" nx-with-animation":"")+"\" style=\"background:"+b.backOverlayColor+";animation-duration:"+b.cssAnimationDuration+"ms;\"></div>");var v="";"function"==typeof o&&(v="<a id=\"NXConfirmButtonCancel\" class=\"nx-confirm-button-cancel\" style=\"color:"+b.cancelButtonColor+";background:"+b.cancelButtonBackground+";font-size:"+b.buttonsFontSize+";\">"+n+"</a>");var w="",x=null,y=void 0;if(e===c.Ask||e===c.Prompt){x=k||"";var z=e===c.Ask?Math.ceil(1.5*x.length):200<x.length?Math.ceil(1.5*x.length):250,A=e===c.Prompt?"value=\""+x+"\"":"";w="<div><input id=\"NXConfirmValidationInput\" type=\"text\" "+A+" maxlength=\""+z+"\" style=\"font-size:"+b.messageFontSize+";border-radius: "+b.borderRadius+";\" autocomplete=\"off\" spellcheck=\"false\" autocapitalize=\"none\" /></div>"}if(s.innerHTML=u+"<div class=\""+b.className+"-content\" style=\"width:"+b.width+"; background:"+b.backgroundColor+"; animation-duration:"+b.cssAnimationDuration+"ms; border-radius: "+b.borderRadius+";\"><div class=\""+b.className+"-head\"><h5 style=\"color:"+b.titleColor+";font-size:"+b.titleFontSize+";\">"+g+"</h5><div style=\"color:"+b.messageColor+";font-size:"+b.messageFontSize+";\">"+j+w+"</div></div><div class=\""+b.className+"-buttons\"><a id=\"NXConfirmButtonOk\" class=\"nx-confirm-button-ok"+("function"==typeof o?"":" nx-full")+"\" style=\"color:"+b.okButtonColor+";background:"+b.okButtonBackground+";font-size:"+b.buttonsFontSize+";\">"+m+"</a>"+v+"</div></div>",!a.document.getElementById(s.id)){a.document.body.appendChild(s);var B=a.document.getElementById(s.id),C=a.document.getElementById("NXConfirmButtonOk"),D=a.document.getElementById("NXConfirmValidationInput");if(D&&(D.focus(),D.setSelectionRange(0,(D.value||"").length),D.addEventListener("keyup",function(a){var b=a.target.value;if(e===c.Ask&&b!==x)a.preventDefault(),D.classList.add("nx-validation-failure"),D.classList.remove("nx-validation-success");else{e===c.Ask&&(D.classList.remove("nx-validation-failure"),D.classList.add("nx-validation-success"));var d="enter"===(a.key||"").toLocaleLowerCase("en")||13===a.keyCode;d&&C.dispatchEvent(new Event("click"))}})),C.addEventListener("click",function(a){if(e===c.Ask&&x&&D){var d=(D.value||"").toString();if(d!==x)return D.focus(),D.classList.add("nx-validation-failure"),a.stopPropagation(),a.preventDefault(),a.returnValue=!1,a.cancelBubble=!0,!1;D.classList.remove("nx-validation-failure")}"function"==typeof o&&(e===c.Prompt&&D&&(y=D.value||""),o(y)),B.classList.add("nx-remove");var f=setTimeout(function(){null!==B.parentNode&&(B.parentNode.removeChild(B),clearTimeout(f))},b.cssAnimationDuration)}),"function"==typeof o){var E=a.document.getElementById("NXConfirmButtonCancel");E.addEventListener("click",function(){"function"==typeof p&&(e===c.Prompt&&D&&(y=D.value||""),p(y)),B.classList.add("nx-remove");var a=setTimeout(function(){null!==B.parentNode&&(B.parentNode.removeChild(B),clearTimeout(a))},b.cssAnimationDuration)})}}b=h(!0,b,r)},l={Confirm:{init:function(a){b=h(!0,d,a),g(j,"NotiflixConfirmInternalCSS")},merge:function(a){return b?void(b=h(!0,b,a)):(e("You have to initialize the Confirm module before call Merge function."),!1)},show:function(a,b,d,e,f,g,h){k(c.Show,a,b,null,d,e,f,g,h)},ask:function(a,b,d,e,f,g,h,i){k(c.Ask,a,b,d,e,f,g,h,i)},prompt:function(a,b,d,e,f,g,h,i){k(c.Prompt,a,b,d,e,f,g,h,i)}}};return"object"==typeof a.Notiflix?h(!0,a.Notiflix,{Confirm:l.Confirm}):{Confirm:l.Confirm}});