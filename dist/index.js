(()=>{var n={402:(n,r,e)=>{"use strict";e.d(r,{Z:()=>l});var t=e(81),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@keyframes fadeInFromNone {\r\n  0% {\r\n    display: none;\r\n    opacity: 0;\r\n  }\r\n\r\n  1% {\r\n    display: block;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    display: block;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Style for dekstop */\r\n@media screen and (min-width: 653px) {\r\n  body {\r\n    background: #e5e5e5;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n    position: relative;\r\n    overflow-y: hidden;\r\n  }\r\n  .mobile-size {\r\n    display: none;\r\n  }\r\n\r\n  /* Style main block  */\r\n\r\n  .main-block {\r\n    z-index: 1;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 1440px;\r\n    height: 100vh;\r\n    left: 320px;\r\n    top: 0px;\r\n    border-left: 1px solid rgba(66, 86, 122, 0.1);\r\n    border-right: 1px solid rgba(66, 86, 122, 0.1);\r\n  }\r\n  .main-block__vector {\r\n    position: absolute;\r\n    height: 120px;\r\n    left: -1px;\r\n    top: 177px;\r\n  }\r\n  .main-block__title {\r\n    position: absolute;\r\n    width: 353px;\r\n    height: 134px;\r\n    left: 78px;\r\n    top: 170px;\r\n\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 56px;\r\n    line-height: 120%;\r\n    color: #42567a;\r\n  }\r\n  .main-block__years {\r\n    position: absolute;\r\n    width: 973px;\r\n    height: 160px;\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 200px;\r\n    line-height: 160px;\r\n    text-align: center;\r\n    letter-spacing: -0.02em;\r\n    color: #5d5fef;\r\n    animation: fadeInFromNone 1s ease-in-out;\r\n  }\r\n\r\n  .main-block__middleVerticalLine {\r\n    position: absolute;\r\n    width: 0px;\r\n    height: 100%;\r\n    top: 0px;\r\n    opacity: 0.1;\r\n    border: 1px solid #42567a;\r\n  }\r\n  .main-block__middleHorizontalLine {\r\n    position: absolute;\r\n    width: 1440px;\r\n    height: 0px;\r\n\r\n    opacity: 0.1;\r\n    border: 1px solid #42567a;\r\n  }\r\n  .main-block__years2 {\r\n    color: #ef5da8;\r\n  }\r\n\r\n  /* Style circle and points */\r\n  .circle {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    width: 530px;\r\n    height: 530px;\r\n    /* opacity: 0.2; */\r\n    border: 1px solid rgba(66, 86, 122, 0.2);\r\n    border-radius: 50%;\r\n  }\r\n  .circle__number {\r\n    display: none;\r\n    width: 11px;\r\n    height: 30px;\r\n\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n    color: #42567a;\r\n  }\r\n  .circle__points {\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n  }\r\n  .circle__wrapper-el1 {\r\n    position: absolute;\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    bottom: 201.49px;\r\n    left: -160.5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .circle__wrapper-el1:focus .circle__el1 {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n  }\r\n  .circle__el1 {\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #42567a;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el1:hover .circle__el1 {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n  }\r\n  .circle__wrapper-el1:hover .circle__number {\r\n    display: inline;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el2 {\r\n    position: absolute;\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    left: -293px;\r\n    top: -28px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .circle__el2 {\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #42567a;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el2:hover .circle__el2 {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n  }\r\n  .circle__wrapper-el2:hover .circle__number {\r\n    display: inline;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el3 {\r\n    position: absolute;\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    top: 201.49px;\r\n    left: -160.5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .circle__el3 {\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #42567a;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el3:hover .circle__el3 {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n  }\r\n  .circle__wrapper-el3:hover .circle__number {\r\n    display: inline;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el4 {\r\n    position: absolute;\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    top: 201.49px;\r\n    left: 104.5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .circle__el4 {\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #42567a;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el4:hover .circle__el4 {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n  }\r\n  .circle__wrapper-el4:hover .circle__number {\r\n    display: inline;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el5 {\r\n    position: absolute;\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    left: 237px;\r\n    top: -28px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .circle__el5 {\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #42567a;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el5:hover .circle__el5 {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n  }\r\n  .circle__wrapper-el5:hover .circle__number {\r\n    display: inline;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el6 {\r\n    position: absolute;\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    bottom: 201.49px;\r\n    left: 104.5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .circle__el6 {\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #42567a;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 1s;\r\n  }\r\n  .circle__wrapper-el6:hover .circle__el6 {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n  }\r\n  .circle__wrapper-el6:hover .circle__number {\r\n    display: inline;\r\n    transition: 1s;\r\n  }\r\n  #circle__flag {\r\n    display: none;\r\n  }\r\n  #circle__flag:checked + label {\r\n    width: 56px;\r\n    height: 56px;\r\n    background: #f4f5f9;\r\n    transition: 1s;\r\n    z-index: 100;\r\n    border: 1px solid rgba(48, 62, 88, 0.5);\r\n    border-radius: 50%;\r\n  }\r\n  /* Style navigation and swiper*/\r\n  .main-block__bigNavigation {\r\n    position: absolute;\r\n    left: 80px;\r\n    top: 697px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 120px;\r\n    height: 88px;\r\n  }\r\n  .main-block__prev,\r\n  .main-block__next {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 1px solid rgba(66, 86, 122, 0.5);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .main-block__prev:hover,\r\n  .main-block__next:hover {\r\n    background: #fff;\r\n    transition: 0.8s;\r\n  }\r\n  .main-block__png {\r\n    rotate: 180deg;\r\n  }\r\n  .main-block__nav-1 {\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 135px;\r\n    top: 780px;\r\n    animation: fadeInFromNone 1s ease-in-out;\r\n  }\r\n  .main-block__nav-6 {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 135px;\r\n    top: 780px;\r\n    animation: fadeInFromNone 1s ease-in-out;\r\n  }\r\n  .swiper-button-disabled {\r\n    display: none;\r\n  }\r\n  .swiper {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .swiper-slide {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .swiper-title {\r\n    width: 320px;\r\n    height: 30px;\r\n    left: 400px;\r\n    top: 841px;\r\n    text-align: left;\r\n    font-family: "Bebas Neue";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 25px;\r\n    line-height: 120%;\r\n    text-transform: uppercase;\r\n    color: #3877ee;\r\n  }\r\n  .swiper-page {\r\n    width: 320px;\r\n    height: 90px;\r\n    left: 400px;\r\n    top: 886px;\r\n    text-align: left;\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n    color: #42567a;\r\n  }\r\n  .swiper-slide {\r\n    width: 320px;\r\n    height: 135px;\r\n  }\r\n  .swiper-button-next,\r\n  .swiper-button-prev {\r\n    background: #fff;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 20px;\r\n  }\r\n  .swiper-button-next::after,\r\n  .swiper-button-prev::after {\r\n    font-size: 10px;\r\n    font-weight: 900;\r\n  }\r\n  :root {\r\n    --swiper-navigation-size: 10px;\r\n    --swiper-theme-color: #3877ee;\r\n  }\r\n  .small-nav {\r\n    position: absolute;\r\n\r\n    width: 120px;\r\n    height: 88px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .swiper-button-next-small .swiper-button-disabled {\r\n    display: block;\r\n  }\r\n  .swiper-pagination {\r\n    z-index: 12;\r\n    left: 50px;\r\n    bottom: 170px;\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    width: 36px;\r\n    height: 18px;\r\n    color: #42567a;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 652px) {\r\n  body {\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n    background: #e5e5e5;\r\n  }\r\n  .mobile-size {\r\n    display: block;\r\n  }\r\n  .dekstop-size {\r\n    display: none;\r\n  }\r\n  /* Style main block  */\r\n  .main-block {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n  }\r\n  .main-block__title {\r\n    position: absolute;\r\n    width: 123px;\r\n    height: 48px;\r\n    left: 20px;\r\n    top: 59px;\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 120%;\r\n    color: #42567a;\r\n  }\r\n  .main-block__years {\r\n    position: absolute;\r\n    width: 273px;\r\n    height: 73px;\r\n    left: 20px;\r\n    top: 163px;\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 56px;\r\n    line-height: 72px;\r\n    letter-spacing: -0.02em;\r\n    color: #3877ee;\r\n  }\r\n  .main-block__years2 {\r\n    color: #ef5da8;\r\n  }\r\n  .main-block__vector {\r\n    position: absolute;\r\n    width: 280px;\r\n    height: 0px;\r\n    left: 20px;\r\n    top: 293px;\r\n\r\n    border: 1px solid #c7cdd9;\r\n  }\r\n  .mobile-nav {\r\n    position: absolute;\r\n    width: 90%;\r\n    height: 250px;\r\n    left: 20px;\r\n    top: 313px;\r\n  }\r\n  .swiper-horizontal > .swiper-pagination-bullets,\r\n  .swiper-pagination-bullets.swiper-pagination-horizontal,\r\n  .swiper-pagination-custom,\r\n  .swiper-pagination-fraction {\r\n    top: 200px;\r\n  }\r\n  .swiper-slide {\r\n    height: 300px;\r\n  }\r\n  .swiper-title {\r\n    width: 26px;\r\n    height: 19px;\r\n    font-family: "Bebas Neue";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 120%;\r\n    text-transform: uppercase;\r\n    color: #3877ee;\r\n  }\r\n  .swiper-page {\r\n    width: 166px;\r\n    height: 80px;\r\n    font-family: "PT Sans";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 145%;\r\n    color: #42567a;\r\n  }\r\n  .swiper-slide {\r\n    flex-shrink: 1;\r\n  }\r\n}\r\n',""]);const l=a},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);t&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),r.push(p))}},r}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var o={},a=[],l=0;l<n.length;l++){var s=n[l],c=t.base?s[0]+t.base:s[0],p=o[c]||0,d="".concat(c," ").concat(p);o[c]=p+1;var u=e(d),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(h);else{var f=i(h,t);t.byIndex=l,r.splice(l,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function i(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var l=e(o[a]);r[l].references--}for(var s=t(n,i),c=0;c<o.length;c++){var p=e(o[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}o=s}}},569:n=>{"use strict";var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{"use strict";n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},96:()=>{let n=document.querySelector(".circle");for(let r=1;r<=6;r++)document.querySelector(`.circle__wrapper-el${r}`).addEventListener("click",(function(){n.style.rotate="60"*r+"deg",n.style.transition="1s";for(let n=1;n<=6;n++){let e=document.querySelector(`.circle__wrapper-el${n}`);e.style.rotate=-60*r+"deg",e.style.transition="1s"}}))},639:()=>{new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:2,spaceBetween:25},653:{slidesPerView:3,spaceBetween:0}}})},696:()=>{document.querySelector(".circle__wrapper-el1").addEventListener("click",(function(){document.querySelector(".main-block__years").style.display="none",document.querySelector(".main-block__nav-1").style.display="block",document.querySelector(".main-block__nav-1").style.transition="1s",document.querySelector(".main-block__nav-6").style.display="none",document.querySelector(".main-block__nav-6").style.transition="1s",document.querySelector(".main-block__years1").innerHTML="1999",document.querySelector(".main-block__years1").transition="1s",document.querySelector(".main-block__years2").innerHTML="2004",document.querySelector(".main-block__years2").transition="1s",document.querySelector(".main-block__years").style.display="block"})),document.querySelector(".circle__wrapper-el6").addEventListener("click",(function(){document.querySelector(".main-block__years").style.display="none",document.querySelector(".main-block__nav-1").style.display="none",document.querySelector(".main-block__nav-1").style.transition="1s",document.querySelector(".main-block__nav-6").style.display="block",document.querySelector(".main-block__nav-6").style.transition="1s",document.querySelector(".main-block__years1").innerHTML="2015",document.querySelector(".main-block__years1").transition="1s",document.querySelector(".main-block__years2").innerHTML="2020",document.querySelector(".main-block__years2").transition="1s",document.querySelector(".main-block__years").style.display="block"}))}},r={};function e(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&!n;)n=t[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{"use strict";e(639),e(96),e(696);var n=e(379),r=e.n(n),t=e(795),i=e.n(t),o=e(569),a=e.n(o),l=e(565),s=e.n(l),c=e(216),p=e.n(c),d=e(589),u=e.n(d),h=e(402),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),r()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals,e.p,e.p})()})();