(()=>{var n={402:(n,e,i)=>{"use strict";i.d(e,{Z:()=>l});var t=i(81),r=i.n(t),o=i(645),c=i.n(o)()(r());c.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: #e5e5e5;\n  max-width: 100vw;\n  max-height: 100vh;\n  overflow-y: hidden;\n  display: grid;\n  grid-template-columns: 20% 70% 10%;\n}\n\n.main-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  border-left: 1px solid rgba(66, 86, 122, 0.1);\n  border-right: 1px solid rgba(66, 86, 122, 0.1);\n  position: relative;\n}\n.main-block .main-block__vector {\n  position: absolute;\n  left: -1px;\n  top: 15%;\n}\n.main-block .main-block__title {\n  position: absolute;\n  width: 25%;\n  height: 15%;\n  left: 5%;\n  top: 15%;\n  font-family: "PT Sans";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 54px;\n  line-height: 120%;\n  color: #42567a;\n}\n.main-block .main-block__years {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  gap: 7%;\n  width: 100%;\n  height: 15%;\n  font-family: "PT Sans";\n  font-style: normal;\n  font-weight: 700;\n  line-height: 160px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #5d5fef;\n  animation: fadeInFromNone 1s ease-in-out;\n}\n.main-block .main-block__years .main-block__years1,\n.main-block .main-block__years .main-block__years2 {\n  font-size: 198px;\n}\n.main-block .main-block__years .main-block__years2 {\n  color: #ef5da8;\n}\n.main-block .main-block__middleVerticalLine {\n  position: absolute;\n  height: 100%;\n  opacity: 0.1;\n  border: 1px solid #42567a;\n}\n.main-block .main-block__middleHorizontalLine {\n  position: absolute;\n  width: 100%;\n  opacity: 0.1;\n  border: 1px solid #42567a;\n}\n.main-block .circle {\n  box-sizing: border-box;\n  position: absolute;\n  width: 530px;\n  height: 530px;\n  border: 1px solid rgba(66, 86, 122, 0.2);\n  border-radius: 50%;\n}\n.main-block .circle .circle__number {\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  font-family: "PT Sans";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19.8px;\n  line-height: 30px;\n  color: #42567a;\n}\n.main-block .circle .circle__points {\n  position: relative;\n  top: 50%;\n  left: 50%;\n}\n.main-block .circle .circle__wrapper-el1 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  bottom: 201.49px;\n  left: -160.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__wrapper-el1:focus .circle__el1 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__el1 {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el1:hover .circle__el1 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el1:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el2 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  left: -293px;\n  top: -28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el2 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el2:hover .circle__el2 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el2:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el3 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  top: 201.49px;\n  left: -160.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el3 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el3:hover .circle__el3 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el3:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el4 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  top: 201.49px;\n  left: 104.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el4 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el4:hover .circle__el4 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el4:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el5 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  left: 237px;\n  top: -28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el5 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el5:hover .circle__el5 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el5:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el6 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  bottom: 201.49px;\n  left: 104.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el6 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el6:hover .circle__el6 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el6:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .main-block__bigNavigation {\n  position: absolute;\n  left: 5%;\n  top: 70%;\n  display: flex;\n  flex-direction: column;\n  width: 120px;\n  height: 88px;\n  justify-content: space-between;\n}\n.main-block .main-block__pagination {\n  width: 36px;\n  height: 18px;\n  font-family: "PT Sans";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14.4px;\n  line-height: 18px;\n  color: #42567a;\n}\n.main-block .main-block__buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main-block .main-block__prev,\n.main-block .main-block__next {\n  background: #e5e5e5;\n  width: 50px;\n  height: 50px;\n  border: 1px solid rgba(66, 86, 122, 0.5);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .main-block__prev:hover,\n.main-block .main-block__next:hover {\n  background: #fff;\n  transition: 0.8s;\n}\n.main-block .main-block__png {\n  rotate: 180deg;\n}\n.main-block .main-block__nav-1 {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 135px;\n  top: 80%;\n  animation: fadeInFromNone 1s ease-in-out;\n}\n.main-block .main-block__nav-6 {\n  position: absolute;\n  width: 100%;\n  height: 135px;\n  top: 80%;\n  animation: fadeInFromNone 1s ease-in-out;\n}\n.main-block .swiper-button-disabled {\n  display: none;\n}\n.main-block .swiper {\n  width: 100%;\n  height: 100%;\n}\n.main-block .swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.main-block .swiper-title {\n  width: 320px;\n  height: 30px;\n  text-align: left;\n  font-family: "Bebas Neue";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 25.2px;\n  line-height: 120%;\n  text-transform: uppercase;\n  color: #3877ee;\n}\n.main-block .swiper-page {\n  width: 320px;\n  height: 90px;\n  text-align: left;\n  font-family: "PT Sans";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19.8px;\n  line-height: 30px;\n  color: #42567a;\n}\n.main-block .swiper-slide {\n  width: 320px;\n  height: 135px;\n}\n.main-block .swiper-button-next,\n.main-block .swiper-button-prev {\n  background: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n}\n.main-block .swiper-button-next::after,\n.main-block .swiper-button-prev::after {\n  font-size: 9.9px;\n  font-weight: 900;\n}\n.main-block :root {\n  --swiper-navigation-size: 10px;\n  --swiper-theme-color: #3877ee;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n  1% {\n    display: block;\n    opacity: 0;\n  }\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 600px) {\n  body {\n    display: block;\n  }\n  .main-block {\n    border: none;\n  }\n  .main-block .main-block__vector {\n    display: none;\n  }\n  .main-block .main-block__title {\n    font-size: 54px;\n  }\n  .main-block .main-block__years {\n    top: 30%;\n  }\n  .main-block .main-block__years .main-block__years1,\n  .main-block .main-block__years .main-block__years2 {\n    font-size: 54px;\n  }\n  .main-block .circle {\n    display: none;\n  }\n  .main-block .main-block__middleVerticalLine {\n    display: none;\n  }\n  .main-block .main-block__middleHorizontalLine {\n    width: 90%;\n  }\n  .main-block .main-block__bigNavigation {\n    width: 60px;\n    height: 50px;\n    top: 80%;\n  }\n  .main-block .main-block__pagination {\n    font-size: 14.4px;\n    width: 100%;\n    height: 100%;\n  }\n  .main-block .main-block__prev,\n  .main-block .main-block__next {\n    width: 25px;\n    height: 25px;\n  }\n  .main-block .main-block__nav-1 {\n    top: 55%;\n    left: 5%;\n  }\n  .main-block .main-block__nav-6 {\n    top: 55%;\n    left: 5%;\n  }\n  .main-block .swiper {\n    width: 100%;\n    height: 100%;\n  }\n  .main-block .swiper-slide {\n    text-align: center;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main-block .swiper-title {\n    width: 160px;\n    height: 30px;\n    text-align: left;\n    font-family: "Bebas Neue";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 25.2px;\n    line-height: 120%;\n    text-transform: uppercase;\n    color: #3877ee;\n  }\n  .main-block .swiper-page {\n    width: 160px;\n    height: 90px;\n    text-align: left;\n    font-family: "PT Sans";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 19.8px;\n    line-height: 30px;\n    color: #42567a;\n  }\n  .main-block .swiper-slide {\n    width: 160px;\n    height: 135px;\n  }\n  .main-block .swiper-button-next,\n  .main-block .swiper-button-prev {\n    display: none;\n  }\n}',""]);const l=c},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var i="",t=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),t&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=n(e),t&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(n,i,t,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(c[a]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);t&&c[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function i(n){for(var i=-1,t=0;t<e.length;t++)if(e[t].identifier===n){i=t;break}return i}function t(n,t){for(var o={},c=[],l=0;l<n.length;l++){var a=n[l],s=t.base?a[0]+t.base:a[0],p=o[s]||0,d="".concat(s," ").concat(p);o[s]=p+1;var m=i(d),b={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==m)e[m].references++,e[m].updater(b);else{var u=r(b,t);t.byIndex=l,e.splice(l,0,{identifier:d,updater:u,references:1})}c.push(d)}return c}function r(n,e){var i=e.domAPI(e);return i.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;i.update(n=e)}else i.remove()}}n.exports=function(n,r){var o=t(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<o.length;c++){var l=i(o[c]);e[l].references--}for(var a=t(n,r),s=0;s<o.length;s++){var p=i(o[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=a}}},569:n=>{"use strict";var e={};n.exports=function(n,i){var t=function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(i)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,i)=>{"use strict";n.exports=function(n){var e=i.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(i){!function(n,e,i){var t="";i.supports&&(t+="@supports (".concat(i.supports,") {")),i.media&&(t+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(t+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),t+=i.css,r&&(t+="}"),i.media&&(t+="}"),i.supports&&(t+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},96:()=>{let n=document.querySelector(".circle");for(let e=1;e<=6;e++)document.querySelector(`.circle__wrapper-el${e}`).addEventListener("click",(i=>{document.querySelector(".main-block__one").innerHTML=e,n.style.rotate="60"*e+"deg",n.style.transition="1s";for(let n=1;n<=6;n++){let i=document.querySelector(`.circle__wrapper-el${n}`);i.style.rotate=-60*e+"deg",i.style.transition="1s"}}));document.querySelector(".main-block__prev").addEventListener("click",(function(){let n=document.querySelector(".main-block__one");1!=n.innerHTML&&document.querySelector(".circle__wrapper-el"+--n.innerHTML).click()})),document.querySelector(".main-block__next").addEventListener("click",(function(){let n=document.querySelector(".main-block__one");6!=n.innerHTML&&document.querySelector(".circle__wrapper-el"+ ++n.innerHTML).click()}))},639:()=>{new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:2,spaceBetween:25},653:{slidesPerView:3,spaceBetween:0}}})},696:()=>{document.querySelector(".circle__wrapper-el1").addEventListener("click",(function(){document.querySelector(".main-block__nav-1").style.display="block",document.querySelector(".main-block__nav-1").style.transition="1s",document.querySelector(".main-block__nav-6").style.display="none",document.querySelector(".main-block__nav-6").style.transition="1s",document.querySelector(".main-block__years1").innerHTML="1999",document.querySelector(".main-block__years1").transition="1s",document.querySelector(".main-block__years2").innerHTML="2004",document.querySelector(".main-block__years2").transition="1s"})),document.querySelector(".circle__wrapper-el6").addEventListener("click",(function(){document.querySelector(".main-block__nav-1").style.display="none",document.querySelector(".main-block__nav-1").style.transition="1s",document.querySelector(".main-block__nav-6").style.display="block",document.querySelector(".main-block__nav-6").style.transition="1s",document.querySelector(".main-block__years1").innerHTML="2015",document.querySelector(".main-block__years1").transition="1s",document.querySelector(".main-block__years2").innerHTML="2020",document.querySelector(".main-block__years2").transition="1s"}))}},e={};function i(t){var r=e[t];if(void 0!==r)return r.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,i),o.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i.nc=void 0,(()=>{"use strict";i(639),i(96),i(696);var n=i(379),e=i.n(n),t=i(795),r=i.n(t),o=i(569),c=i.n(o),l=i(565),a=i.n(l),s=i(216),p=i.n(s),d=i(589),m=i.n(d),b=i(402),u={};u.styleTagTransform=m(),u.setAttributes=a(),u.insert=c().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=p(),e()(b.Z,u),b.Z&&b.Z.locals&&b.Z.locals,i.p,i.p})()})();