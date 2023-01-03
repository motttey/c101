In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w0=function(){},d5={},bl={},xl=null,Nl={mark:w0,measure:w0};try{typeof window<"u"&&(d5=window),typeof document<"u"&&(bl=document),typeof MutationObserver<"u"&&(xl=MutationObserver),typeof performance<"u"&&(Nl=performance)}catch{}var O$=d5.navigator||{},k0=O$.userAgent,A0=k0===void 0?"":k0,h2=d5,e1=bl,_0=xl,Y3=Nl;h2.document;var s2=!!e1.documentElement&&!!e1.head&&typeof e1.addEventListener=="function"&&typeof e1.createElement=="function",Sl=~A0.indexOf("MSIE")||~A0.indexOf("Trident/"),X3,J3,Q3,c4,a4,J1="___FONT_AWESOME___",O6=16,yl="fa",wl="svg-inline--fa",A2="data-fa-i2svg",I6="data-fa-pseudo-element",I$="data-fa-pseudo-element-pending",L5="data-prefix",g5="data-icon",P0="fontawesome-i2svg",j$="async",W$=["HTML","HEAD","STYLE","SCRIPT"],kl=function(){try{return!0}catch{return!1}}(),a1="classic",l1="sharp",b5=[a1,l1];function E3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[a1]}})}var g3=E3((X3={},v1(X3,a1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),v1(X3,l1,{fa:"solid",fass:"solid","fa-solid":"solid"}),X3)),b3=E3((J3={},v1(J3,a1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v1(J3,l1,{solid:"fass"}),J3)),x3=E3((Q3={},v1(Q3,a1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v1(Q3,l1,{fass:"fa-solid"}),Q3)),G$=E3((c4={},v1(c4,a1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v1(c4,l1,{"fa-solid":"fass"}),c4)),Z$=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Al="fa-layers-text",$$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,K$=E3((a4={},v1(a4,a1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v1(a4,l1,{900:"fass"}),a4)),_l=[1,2,3,4,5,6,7,8,9,10],Y$=_l.concat([11,12,13,14,15,16,17,18,19,20]),X$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N3=new Set;Object.keys(b3[a1]).map(N3.add.bind(N3));Object.keys(b3[l1]).map(N3.add.bind(N3));var J$=[].concat(b5,F3(N3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x2.GROUP,x2.SWAP_OPACITY,x2.PRIMARY,x2.SECONDARY]).concat(_l.map(function(c){return"".concat(c,"x")})).concat(Y$.map(function(c){return"w-".concat(c)})),z3=h2.FontAwesomeConfig||{};function Q$(c){var a=e1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function cK(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e1&&typeof e1.querySelector=="function"){var aK=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];aK.forEach(function(c){var a=C5(c,2),e=a[0],s=a[1],r=cK(Q$(e));r!=null&&(z3[s]=r)})}var Pl={styleDefault:"solid",familyDefault:"classic",cssPrefix:yl,replacementClass:wl,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z3.familyPrefix&&(z3.cssPrefix=z3.familyPrefix);var Y2=A(A({},Pl),z3);Y2.autoReplaceSvg||(Y2.observeMutations=!1);var T={};Object.keys(Pl).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){Y2[c]=e,u3.forEach(function(s){return s(T)})},get:function(){return Y2[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){Y2.cssPrefix=a,u3.forEach(function(e){return e(T)})},get:function(){return Y2.cssPrefix}});h2.FontAwesomeConfig=T;var u3=[];function eK(c){return u3.push(c),function(){u3.splice(u3.indexOf(c),1)}}var n2=O6,G1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sK(c){if(!(!c||!s2)){var a=e1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e1.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return e1.head.insertBefore(a,s),c}}var rK="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S3(){for(var c=12,a="";c-- >0;)a+=rK[Math.random()*62|0];return a}function e3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function x5(c){return c.classList?e3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Tl(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iK(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Tl(c[e]),'" ')},"").trim()}function a6(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function N5(c){return c.size!==G1.size||c.x!==G1.x||c.y!==G1.y||c.rotate!==G1.rotate||c.flipX||c.flipY}function nK(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(l)},o={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:f,path:o}}function lK(c){var a=c.transform,e=c.width,s=e===void 0?O6:e,r=c.height,i=r===void 0?O6:r,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&Sl?f+="translate(".concat(a.x/n2-s/2,"em, ").concat(a.y/n2-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/n2,"em), calc(-50% + ").concat(a.y/n2,"em)) "):f+="translate(".concat(a.x/n2,"em, ").concat(a.y/n2,"em) "),f+="scale(".concat(a.size/n2*(a.flipX?-1:1),", ").concat(a.size/n2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var fK=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bl(){var c=yl,a=wl,e=T.cssPrefix,s=T.replacementClass,r=fK;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(s))}return r}var T0=!1;function C6(){T.autoAddCss&&!T0&&(sK(Bl()),T0=!0)}var oK={mixout:function(){return{dom:{css:Bl,insertCss:C6}}},hooks:function(){return{beforeDOMElementCreation:function(){C6()},beforeI2svg:function(){C6()}}}},Q1=h2||{};Q1[J1]||(Q1[J1]={});Q1[J1].styles||(Q1[J1].styles={});Q1[J1].hooks||(Q1[J1].hooks={});Q1[J1].shims||(Q1[J1].shims=[]);var E1=Q1[J1],Fl=[],tK=function c(){e1.removeEventListener("DOMContentLoaded",c),d4=1,Fl.map(function(a){return a()})},d4=!1;s2&&(d4=(e1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e1.readyState),d4||e1.addEventListener("DOMContentLoaded",tK));function mK(c){!s2||(d4?setTimeout(c,0):Fl.push(c))}function R3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?Tl(c):"<".concat(a," ").concat(iK(s),">").concat(i.map(R3).join(""),"</").concat(a,">")}function B0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var vK=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},d6=function(a,e,s,r){var i=Object.keys(a),n=i.length,l=r!==void 0?vK(e,r):e,f,o,t;for(s===void 0?(f=1,t=a[i[0]]):(f=0,t=s);f<n;f++)o=i[f],t=l(t,a[o],o,a);return t};function hK(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function j6(c){var a=hK(c);return a.length===1?a[0].toString(16):null}function zK(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function F0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function W6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=F0(a);typeof E1.hooks.addPack=="function"&&!r?E1.hooks.addPack(c,F0(a)):E1.styles[c]=A(A({},E1.styles[c]||{}),i),c==="fas"&&W6("fa",a)}var e4,s4,r4,F2=E1.styles,uK=E1.shims,HK=(e4={},v1(e4,a1,Object.values(x3[a1])),v1(e4,l1,Object.values(x3[l1])),e4),S5=null,El={},Rl={},Dl={},ql={},Ul={},pK=(s4={},v1(s4,a1,Object.keys(g3[a1])),v1(s4,l1,Object.keys(g3[l1])),s4);function VK(c){return~J$.indexOf(c)}function MK(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!VK(r)?r:null}var Ol=function(){var a=function(i){return d6(F2,function(n,l,f){return n[f]=d6(l,i,{}),n},{})};El=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=n})}return r}),Rl=a(function(r,i,n){if(r[n]=n,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=n})}return r}),Ul=a(function(r,i,n){var l=i[2];return r[n]=n,l.forEach(function(f){r[f]=n}),r});var e="far"in F2||T.autoFetchSvg,s=d6(uK,function(r,i){var n=i[0],l=i[1],f=i[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(r.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});Dl=s.names,ql=s.unicodes,S5=e6(T.styleDefault,{family:T.familyDefault})};eK(function(c){S5=e6(c.styleDefault,{family:T.familyDefault})});Ol();function y5(c,a){return(El[c]||{})[a]}function CK(c,a){return(Rl[c]||{})[a]}function N2(c,a){return(Ul[c]||{})[a]}function Il(c){return Dl[c]||{prefix:null,iconName:null}}function dK(c){var a=ql[c],e=y5("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function z2(){return S5}var w5=function(){return{prefix:null,iconName:null,rest:[]}};function e6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?a1:e,r=g3[s][c],i=b3[s][c]||b3[s][r],n=c in E1.styles?c:null;return i||n||null}var E0=(r4={},v1(r4,a1,Object.keys(x3[a1])),v1(r4,l1,Object.keys(x3[l1])),r4);function s6(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},v1(a,a1,"".concat(T.cssPrefix,"-").concat(a1)),v1(a,l1,"".concat(T.cssPrefix,"-").concat(l1)),a),n=null,l=a1;(c.includes(i[a1])||c.some(function(o){return E0[a1].includes(o)}))&&(l=a1),(c.includes(i[l1])||c.some(function(o){return E0[l1].includes(o)}))&&(l=l1);var f=c.reduce(function(o,t){var m=MK(T.cssPrefix,t);if(F2[t]?(t=HK[l].includes(t)?G$[l][t]:t,n=t,o.prefix=t):pK[l].indexOf(t)>-1?(n=t,o.prefix=e6(t,{family:l})):m?o.iconName=m:t!==T.replacementClass&&t!==i[a1]&&t!==i[l1]&&o.rest.push(t),!r&&o.prefix&&o.iconName){var u=n==="fa"?Il(o.iconName):{},H=N2(o.prefix,o.iconName);u.prefix&&(n=null),o.iconName=u.iconName||H||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!F2.far&&F2.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},w5());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===l1&&(F2.fass||T.autoFetchSvg)&&(f.prefix="fass",f.iconName=N2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=z2()||"fas"),f}var LK=function(){function c(){T$(this,c),this.definitions={}}return B$(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=A(A({},e.definitions[l]||{}),n[l]),W6(l,n[l]);var f=x3[a1][l];f&&W6(f,n[l]),Ol()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],l=n.prefix,f=n.iconName,o=n.icon,t=o[2];e[l]||(e[l]={}),t.length>0&&t.forEach(function(m){typeof m=="string"&&(e[l][m]=o)}),e[l][f]=o}),e}}]),c}(),R0=[],E2={},I2={},gK=Object.keys(I2);function bK(c,a){var e=a.mixoutsTo;return R0=c,E2={},Object.keys(I2).forEach(function(s){gK.indexOf(s)===-1&&delete I2[s]}),R0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),C4(r[n])==="object"&&Object.keys(r[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=r[n][l]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){E2[n]||(E2[n]=[]),E2[n].push(i[n])})}s.provides&&s.provides(I2)}),e}function G6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=E2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function _2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=E2[c]||[];r.forEach(function(i){i.apply(null,e)})}function c2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return I2[c]?I2[c].apply(null,a):void 0}function Z6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||z2();if(!!a)return a=N2(e,a)||a,B0(jl.definitions,e,a)||B0(E1.styles,e,a)}var jl=new LK,xK=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,_2("noAuto")},NK={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s2?(_2("beforeI2svg",a),c2("pseudoElements2svg",a),c2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,mK(function(){yK({autoReplaceSvgRoot:e}),_2("watch",a)})}},SK={icon:function(a){if(a===null)return null;if(C4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:N2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=e6(a[0]);return{prefix:s,iconName:N2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(Z$))){var r=s6(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||z2(),iconName:N2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=z2();return{prefix:i,iconName:N2(i,a)||a}}}},y1={noAuto:xK,config:T,dom:NK,parse:SK,library:jl,findIconDefinition:Z6,toHtml:R3},yK=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?e1:e;(Object.keys(E1.styles).length>0||T.autoFetchSvg)&&s2&&T.autoReplaceSvg&&y1.dom.i2svg({node:s})};function r6(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return R3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!s2){var s=e1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function wK(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(N5(n)&&e.found&&!s.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};r.style=a6(A(A({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function kK(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},r),{},{id:n}),children:s}]}]}function k5(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,f=c.title,o=c.maskId,t=c.titleId,m=c.extra,u=c.watchable,H=u===void 0?!1:u,M=s.found?s:e,N=M.width,R=M.height,p=r==="fak",z=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(G){return m.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(m.classes).join(" "),C={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:z,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(R)})},k=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/R*16*.0625,"em")}:{};H&&(C.attributes[A2]=""),f&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(t||S3())},children:[f]}),delete C.attributes.title);var _=A(A({},C),{},{prefix:r,iconName:i,main:e,mask:s,maskId:o,transform:n,symbol:l,styles:A(A({},k),m.styles)}),q=s.found&&e.found?c2("generateAbstractMask",_)||{children:[],attributes:{}}:c2("generateAbstractIcon",_)||{children:[],attributes:{}},U=q.children,E=q.attributes;return _.children=U,_.attributes=E,l?kK(_):wK(_)}function D0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,o=A(A(A({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(o[A2]="");var t=A({},n.styles);N5(r)&&(t.transform=lK({transform:r,startCentered:!0,width:e,height:s}),t["-webkit-transform"]=t.transform);var m=a6(t);m.length>0&&(o.style=m);var u=[];return u.push({tag:"span",attributes:o,children:[a]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function AK(c){var a=c.content,e=c.title,s=c.extra,r=A(A(A({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=a6(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var L6=E1.styles;function $6(c){var a=c[0],e=c[1],s=c.slice(4),r=C5(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var _K={found:!1,width:512,height:512};function PK(c,a){!kl&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function K6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=z2()),new Promise(function(s,r){if(c2("missingIconAbstract"),e==="fa"){var i=Il(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&L6[a]&&L6[a][c]){var n=L6[a][c];return s($6(n))}PK(c,a),s(A(A({},_K),{},{icon:T.showMissingIcons&&c?c2("missingIconAbstract")||{}:{}}))})}var q0=function(){},Y6=T.measurePerformance&&Y3&&Y3.mark&&Y3.measure?Y3:{mark:q0,measure:q0},i3='FA "6.2.1"',TK=function(a){return Y6.mark("".concat(i3," ").concat(a," begins")),function(){return Wl(a)}},Wl=function(a){Y6.mark("".concat(i3," ").concat(a," ends")),Y6.measure("".concat(i3," ").concat(a),"".concat(i3," ").concat(a," begins"),"".concat(i3," ").concat(a," ends"))},A5={begin:TK,end:Wl},f4=function(){};function U0(c){var a=c.getAttribute?c.getAttribute(A2):null;return typeof a=="string"}function BK(c){var a=c.getAttribute?c.getAttribute(L5):null,e=c.getAttribute?c.getAttribute(g5):null;return a&&e}function FK(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function EK(){if(T.autoReplaceSvg===!0)return o4.replace;var c=o4[T.autoReplaceSvg];return c||o4.replace}function RK(c){return e1.createElementNS("http://www.w3.org/2000/svg",c)}function DK(c){return e1.createElement(c)}function Gl(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?RK:DK:e;if(typeof c=="string")return e1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(Gl(n,{ceFn:s}))}),r}function qK(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var o4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Gl(r),e)}),e.getAttribute(A2)===null&&T.keepOriginalSource){var s=e1.createComment(qK(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~x5(e).indexOf(T.replacementClass))return o4.replace(a);var r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(l,f){return f===T.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(l){return R3(l)}).join(`
`);e.setAttribute(A2,""),e.innerHTML=n}};function O0(c){c()}function Zl(c,a){var e=typeof a=="function"?a:f4;if(c.length===0)e();else{var s=O0;T.mutateApproach===j$&&(s=h2.requestAnimationFrame||O0),s(function(){var r=EK(),i=A5.begin("mutate");c.map(r),i(),e()})}}var _5=!1;function $l(){_5=!0}function X6(){_5=!1}var L4=null;function I0(c){if(!!_0&&!!T.observeMutations){var a=c.treeCallback,e=a===void 0?f4:a,s=c.nodeCallback,r=s===void 0?f4:s,i=c.pseudoElementsCallback,n=i===void 0?f4:i,l=c.observeMutationsRoot,f=l===void 0?e1:l;L4=new _0(function(o){if(!_5){var t=z2();e3(o).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!U0(m.addedNodes[0])&&(T.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&U0(m.target)&&~X$.indexOf(m.attributeName))if(m.attributeName==="class"&&BK(m.target)){var u=s6(x5(m.target)),H=u.prefix,M=u.iconName;m.target.setAttribute(L5,H||t),M&&m.target.setAttribute(g5,M)}else FK(m.target)&&r(m.target)})}}),s2&&L4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function UK(){!L4||L4.disconnect()}function OK(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(s[n]=l.join(":").trim()),s},{})),e}function IK(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=s6(x5(c));return r.prefix||(r.prefix=z2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=CK(r.prefix,c.innerText)||y5(r.prefix,j6(c.innerText))),!r.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function jK(c){var a=e3(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(s||S3()):(a["aria-hidden"]="true",a.focusable="false")),a}function WK(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=IK(c),s=e.iconName,r=e.prefix,i=e.rest,n=jK(c),l=G6("parseNodeAttributes",{},c),f=a.styleParser?OK(c):[];return A({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:G1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},l)}var GK=E1.styles;function Kl(c){var a=T.autoReplaceSvg==="nest"?j0(c,{styleParser:!1}):j0(c);return~a.extra.classes.indexOf(Al)?c2("generateLayersText",c,a):c2("generateSvgReplacementMutation",c,a)}var u2=new Set;b5.map(function(c){u2.add("fa-".concat(c))});Object.keys(g3[a1]).map(u2.add.bind(u2));Object.keys(g3[l1]).map(u2.add.bind(u2));u2=F3(u2);function W0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s2)return Promise.resolve();var e=e1.documentElement.classList,s=function(m){return e.add("".concat(P0,"-").concat(m))},r=function(m){return e.remove("".concat(P0,"-").concat(m))},i=T.autoFetchSvg?u2:b5.map(function(t){return"fa-".concat(t)}).concat(Object.keys(GK));i.includes("fa")||i.push("fa");var n=[".".concat(Al,":not([").concat(A2,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(A2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=e3(c.querySelectorAll(n))}catch{}if(l.length>0)s("pending"),r("complete");else return Promise.resolve();var f=A5.begin("onTree"),o=l.reduce(function(t,m){try{var u=Kl(m);u&&t.push(u)}catch(H){kl||H.name==="MissingIcon"&&console.error(H)}return t},[]);return new Promise(function(t,m){Promise.all(o).then(function(u){Zl(u,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(u){f(),m(u)})})}function ZK(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kl(c).then(function(e){e&&Zl([e],a)})}function $K(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:Z6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Z6(r||{})),c(s,A(A({},e),{},{mask:r}))}}var KK=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?G1:s,i=e.symbol,n=i===void 0?!1:i,l=e.mask,f=l===void 0?null:l,o=e.maskId,t=o===void 0?null:o,m=e.title,u=m===void 0?null:m,H=e.titleId,M=H===void 0?null:H,N=e.classes,R=N===void 0?[]:N,p=e.attributes,z=p===void 0?{}:p,C=e.styles,k=C===void 0?{}:C;if(!!a){var _=a.prefix,q=a.iconName,U=a.icon;return r6(A({type:"icon"},a),function(){return _2("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(u?z["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(M||S3()):(z["aria-hidden"]="true",z.focusable="false")),k5({icons:{main:$6(U),mask:f?$6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:q,transform:A(A({},G1),r),symbol:n,title:u,maskId:t,titleId:M,extra:{attributes:z,styles:k,classes:R}})})}},YK={mixout:function(){return{icon:$K(KK)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=W0,e.nodeCallback=ZK,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?e1:s,i=e.callback,n=i===void 0?function(){}:i;return W0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,l=s.prefix,f=s.transform,o=s.symbol,t=s.mask,m=s.maskId,u=s.extra;return new Promise(function(H,M){Promise.all([K6(r,l),t.iconName?K6(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var R=C5(N,2),p=R[0],z=R[1];H([e,k5({icons:{main:p,mask:z},prefix:l,iconName:r,transform:f,symbol:o,maskId:m,title:i,titleId:n,extra:u,watchable:!0})])}).catch(M)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,l=e.styles,f=a6(l);f.length>0&&(r.style=f);var o;return N5(n)&&(o=c2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(o||i.icon),{children:s,attributes:r}}}},XK={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return r6({type:"layer"},function(){_2("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(F3(i)).join(" ")},children:n}]})}}}},JK={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,l=n===void 0?[]:n,f=s.attributes,o=f===void 0?{}:f,t=s.styles,m=t===void 0?{}:t;return r6({type:"counter",content:e},function(){return _2("beforeDOMElementCreation",{content:e,params:s}),AK({content:e.toString(),title:i,extra:{attributes:o,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(F3(l))}})})}}}},QK={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?G1:r,n=s.title,l=n===void 0?null:n,f=s.classes,o=f===void 0?[]:f,t=s.attributes,m=t===void 0?{}:t,u=s.styles,H=u===void 0?{}:u;return r6({type:"text",content:e},function(){return _2("beforeDOMElementCreation",{content:e,params:s}),D0({content:e,transform:A(A({},G1),i),title:l,extra:{attributes:m,styles:H,classes:["".concat(T.cssPrefix,"-layers-text")].concat(F3(o))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,l=null,f=null;if(Sl){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();l=t.width/o,f=t.height/o}return T.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,D0({content:e.innerHTML,width:l,height:f,transform:i,title:r,extra:n,watchable:!0})])}}},cY=new RegExp('"',"ug"),G0=[1105920,1112319];function aY(c){var a=c.replace(cY,""),e=zK(a,0),s=e>=G0[0]&&e<=G0[1],r=a.length===2?a[0]===a[1]:!1;return{value:j6(r?a[0]:a),isSecondary:s||r}}function Z0(c,a){var e="".concat(I$).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=e3(c.children),n=i.filter(function(U){return U.getAttribute(I6)===a})[0],l=h2.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match($$),o=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),s();if(f&&t!=="none"&&t!==""){var m=l.getPropertyValue("content"),u=~["Sharp"].indexOf(f[2])?l1:a1,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?b3[u][f[2].toLowerCase()]:K$[u][o],M=aY(m),N=M.value,R=M.isSecondary,p=f[0].startsWith("FontAwesome"),z=y5(H,N),C=z;if(p){var k=dK(N);k.iconName&&k.prefix&&(z=k.iconName,H=k.prefix)}if(z&&!R&&(!n||n.getAttribute(L5)!==H||n.getAttribute(g5)!==C)){c.setAttribute(e,C),n&&c.removeChild(n);var _=WK(),q=_.extra;q.attributes[I6]=a,K6(z,H).then(function(U){var E=k5(A(A({},_),{},{icons:{main:U,mask:w5()},prefix:H,iconName:C,extra:q,watchable:!0})),G=e1.createElement("svg");a==="::before"?c.insertBefore(G,c.firstChild):c.appendChild(G),G.outerHTML=E.map(function($){return R3($)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function eY(c){return Promise.all([Z0(c,"::before"),Z0(c,"::after")])}function sY(c){return c.parentNode!==document.head&&!~W$.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(I6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function $0(c){if(!!s2)return new Promise(function(a,e){var s=e3(c.querySelectorAll("*")).filter(sY).map(eY),r=A5.begin("searchPseudoElements");$l(),Promise.all(s).then(function(){r(),X6(),a()}).catch(function(){r(),X6(),e()})})}var rY={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=$0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?e1:s;T.searchPseudoElements&&$0(r)}}},K0=!1,iY={mixout:function(){return{dom:{unwatch:function(){$l(),K0=!0}}}},hooks:function(){return{bootstrap:function(){I0(G6("mutationObserverCallbacks",{}))},noAuto:function(){UK()},watch:function(e){var s=e.observeMutationsRoot;K0?X6():I0(G6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Y0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],l=i.slice(1).join("-");if(n&&l==="h")return s.flipX=!0,s;if(n&&l==="v")return s.flipY=!0,s;if(l=parseFloat(l),isNaN(l))return s;switch(n){case"grow":s.size=s.size+l;break;case"shrink":s.size=s.size-l;break;case"left":s.x=s.x-l;break;case"right":s.x=s.x+l;break;case"up":s.y=s.y-l;break;case"down":s.y=s.y+l;break;case"rotate":s.rotate=s.rotate+l;break}return s},e)},nY={mixout:function(){return{parse:{transform:function(e){return Y0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=Y0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),t="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(o," ").concat(t)},u={transform:"translate(".concat(n/2*-1," -256)")},H={outer:l,inner:m,path:u};return{tag:"g",attributes:A({},H.outer),children:[{tag:"g",attributes:A({},H.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:A(A({},s.icon.attributes),H.path)}]}]}}}},g6={x:0,y:0,width:"100%",height:"100%"};function X0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function lY(c){return c.tag==="g"?c.children:[c]}var fY={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?s6(r.split(" ").map(function(n){return n.trim()})):w5();return i.prefix||(i.prefix=z2()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,l=e.maskId,f=e.transform,o=i.width,t=i.icon,m=n.width,u=n.icon,H=nK({transform:f,containerWidth:m,iconWidth:o}),M={tag:"rect",attributes:A(A({},g6),{},{fill:"white"})},N=t.children?{children:t.children.map(X0)}:{},R={tag:"g",attributes:A({},H.inner),children:[X0(A({tag:t.tag,attributes:A(A({},t.attributes),H.path)},N))]},p={tag:"g",attributes:A({},H.outer),children:[R]},z="mask-".concat(l||S3()),C="clip-".concat(l||S3()),k={tag:"mask",attributes:A(A({},g6),{},{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,p]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:lY(u)},k]};return s.push(_,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(z,")")},g6)}),{children:s,attributes:r}}}},oY={provides:function(a){var e=!1;h2.matchMedia&&(e=h2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=A(A({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(l),s.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:A(A({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},tY={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},mY=[oK,YK,XK,JK,QK,rY,iY,nY,fY,oY,tY];bK(mY,{mixoutsTo:y1});y1.noAuto;var Yl=y1.config,vY=y1.library;y1.dom;var g4=y1.parse;y1.findIconDefinition;y1.toHtml;var hY=y1.icon;y1.layer;var zY=y1.text;y1.counter;function J0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function F1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?J0(Object(e),!0).forEach(function(s){L1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):J0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function b4(c){return b4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b4(c)}function L1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function uY(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function HY(c,a){if(c==null)return{};var e=uY(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function J6(c){return pY(c)||VY(c)||MY(c)||CY()}function pY(c){if(Array.isArray(c))return Q6(c)}function VY(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function MY(c,a){if(!!c){if(typeof c=="string")return Q6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Q6(c,a)}}function Q6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function CY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dY=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xl={exports:{}};(function(c){(function(a){var e=function(p,z,C){if(!o(z)||m(z)||u(z)||H(z)||f(z))return z;var k,_=0,q=0;if(t(z))for(k=[],q=z.length;_<q;_++)k.push(e(p,z[_],C));else{k={};for(var U in z)Object.prototype.hasOwnProperty.call(z,U)&&(k[p(U,C)]=e(p,z[U],C))}return k},s=function(p,z){z=z||{};var C=z.separator||"_",k=z.split||/(?=[A-Z])/;return p.split(k).join(C)},r=function(p){return M(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(z,C){return C?C.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},i=function(p){var z=r(p);return z.substr(0,1).toUpperCase()+z.substr(1)},n=function(p,z){return s(p,z).toLowerCase()},l=Object.prototype.toString,f=function(p){return typeof p=="function"},o=function(p){return p===Object(p)},t=function(p){return l.call(p)=="[object Array]"},m=function(p){return l.call(p)=="[object Date]"},u=function(p){return l.call(p)=="[object RegExp]"},H=function(p){return l.call(p)=="[object Boolean]"},M=function(p){return p=p-0,p===p},N=function(p,z){var C=z&&"process"in z?z.process:z;return typeof C!="function"?p:function(k,_){return C(k,p,_)}},R={camelize:r,decamelize:n,pascalize:i,depascalize:n,camelizeKeys:function(p,z){return e(N(r,z),p)},decamelizeKeys:function(p,z){return e(N(n,z),p,z)},pascalizeKeys:function(p,z){return e(N(i,z),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=R:a.humps=R})(dY)})(Xl);var LY=Xl.exports,gY=["class","style"];function bY(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var s=e.indexOf(":"),r=LY.camelize(e.slice(0,s)),i=e.slice(s+1).trim();return a[r]=i,a},{})}function xY(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function P5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var s=(c.children||[]).map(function(f){return P5(f)}),r=Object.keys(c.attributes||{}).reduce(function(f,o){var t=c.attributes[o];switch(o){case"class":f.class=xY(t);break;case"style":f.style=bY(t);break;default:f.attrs[o]=t}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,n=i===void 0?{}:i,l=HY(e,gY);return L3(c.tag,F1(F1(F1({},a),{},{class:r.class,style:F1(F1({},r.style),n)},r.attrs),l),s)}var Jl=!1;try{Jl=!0}catch{}function NY(){if(!Jl&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function H3(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?L1({},c,a):{}}function SY(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},L1(a,"fa-".concat(c.size),c.size!==null),L1(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),L1(a,"fa-pull-".concat(c.pull),c.pull!==null),L1(a,"fa-swap-opacity",c.swapOpacity),L1(a,"fa-bounce",c.bounce),L1(a,"fa-shake",c.shake),L1(a,"fa-beat",c.beat),L1(a,"fa-fade",c.fade),L1(a,"fa-beat-fade",c.beatFade),L1(a,"fa-flash",c.flash),L1(a,"fa-spin-pulse",c.spinPulse),L1(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(s){return e[s]?s:null}).filter(function(s){return s})}function Q0(c){if(c&&b4(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(g4.icon)return g4.icon(c);if(c===null)return null;if(b4(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var yY=M1({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var s=e.attrs,r=H1(function(){return Q0(a.icon)}),i=H1(function(){return H3("classes",SY(a))}),n=H1(function(){return H3("transform",typeof a.transform=="string"?g4.transform(a.transform):a.transform)}),l=H1(function(){return H3("mask",Q0(a.mask))}),f=H1(function(){return hY(r.value,F1(F1(F1(F1({},i.value),n.value),l.value),{},{symbol:a.symbol,title:a.title}))});i4(f,function(t){if(!t)return NY("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var o=H1(function(){return f.value?P5(f.value.abstract[0],{},s):null});return function(){return o.value}}});M1({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(a,e){var s=e.slots,r=Yl.familyPrefix,i=H1(function(){return["".concat(r,"-layers")].concat(J6(a.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return L3("div",{class:i.value},s.default?s.default():[])}}});M1({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(a){return["bottom-left","bottom-right","top-left","top-right"].indexOf(a)>-1}}},setup:function(a,e){var s=e.attrs,r=Yl.familyPrefix,i=H1(function(){return H3("classes",[].concat(J6(a.counter?["".concat(r,"-layers-counter")]:[]),J6(a.position?["".concat(r,"-layers-").concat(a.position)]:[])))}),n=H1(function(){return H3("transform",typeof a.transform=="string"?g4.transform(a.transform):a.transform)}),l=H1(function(){var o=zY(a.value.toString(),F1(F1({},n.value),i.value)),t=o.abstract;return a.counter&&(t[0].attributes.class=t[0].attributes.class.replace("fa-layers-text","")),t[0]}),f=H1(function(){return P5(l.value,{},s)});return function(){return f.value}}});const wY=a3(c=>{vY.add(P$,ld),c.vueApp.component("font-awesome-icon",yY)}),kY=[Qm,ov,gv,xv,Nv,wY],c7={__name:"nuxt-root",setup(c){const a=vo(()=>u9(()=>import("./error-component.f669e0f9.js"),[],import.meta.url).then(i=>i.default||i)),e=V1(),s=()=>e.callHook("app:suspense:resolve");T7("_route",Bm()),e.hooks.callHookWith(i=>i.map(n=>n()),"vue:setup");const r=x8();return D7((i,n,l)=>{e.hooks.callHook("vue:error",i,n,l).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),Pm(i)&&(i.fatal||i.unhandled)&&h3(e,Am,[i])}),(i,n)=>{const l=C8("App");return u1(),n4(no,{onResolve:s},{default:_7(()=>[t2(r)?(u1(),n4(t2(a),{key:0,error:t2(r)},null,8,["error"])):(u1(),n4(l,{key:1}))]),_:1})}}},AY=""+new URL("FS_hyousi_middle.eaaf5783.jpg",import.meta.url).href,_Y=""+new URL("book1.38f3c640.jpg",import.meta.url).href,PY=""+new URL("book2.a20ba62d.jpg",import.meta.url).href,TY=""+new URL("hyoushi.d0bb9595.jpg",import.meta.url).href,BY=""+new URL("map.f6e273b1.jpg",import.meta.url).href,FY=""+new URL("postcard.e675ea83.jpg",import.meta.url).href,EY=""+new URL("01.4e5f4a56.jpg",import.meta.url).href,RY=""+new URL("02.ee0d9b4d.jpg",import.meta.url).href,DY=""+new URL("03.e35de865.jpg",import.meta.url).href,qY=""+new URL("04.82e4fa3f.jpg",import.meta.url).href,UY=""+new URL("05.73b8432e.jpg",import.meta.url).href,OY=""+new URL("06.ffd0ec40.jpg",import.meta.url).href,IY=""+new URL("07.049bfe49.jpg",import.meta.url).href,jY=""+new URL("08.972f6209.jpg",import.meta.url).href,WY=""+new URL("09.f3666ce4.jpg",import.meta.url).href,GY=""+new URL("10.3251bfd8.jpg",import.meta.url).href,ZY=""+new URL("11.1db8dc0c.jpg",import.meta.url).href,$Y=""+new URL("01.011e8eca.jpg",import.meta.url).href,KY=""+new URL("02.8f340f16.jpg",import.meta.url).href,YY=""+new URL("03.59ac3187.jpg",import.meta.url).href,XY=""+new URL("04.ed5cecd2.jpg",import.meta.url).href,JY=""+new URL("05.e1eb5861.jpg",import.meta.url).href,QY=""+new URL("06.164f97b0.jpg",import.meta.url).href,cX=""+new URL("07.494b94bd.jpg",import.meta.url).href,aX=""+new URL("08.9c670996.jpg",import.meta.url).href,eX=""+new URL("09.23ca75cc.jpg",import.meta.url).href,sX=""+new URL("10.2b32ac56.jpg",import.meta.url).href,rX=""+new URL("11.357551ad.jpg",import.meta.url).href,iX=M1({async setup(){const c=[{id:1,name:"\u3042\u3093\u3058\u3085",description:"\u8AAC\u660E1",twitter:"https://twitter.com/apple_pie_0321",src:"01",pixiv:"https://www.pixiv.net/users/4036156"},{id:2,name:"\u30A4\u30BB",description:"\u8AAC\u660E2",twitter:"https://twitter.com/tasu_hiku_",src:"02",pixiv:"https://www.pixiv.net/users/3014124"},{id:3,name:"\u30BF\u30AF\u3048\u3082\u3093",description:"\u8AAC\u660E3",twitter:"https://twitter.com/DoraTakubou",src:"03",pixiv:"https://www.pixiv.net/users/11660552"},{id:4,name:"\u30C4\u30A4\u30FC\u30C8\u304A\u3058\u3055\u3093",description:"\u8AAC\u660E4",twitter:"https://twitter.com/co9EZOLIX4dRRG0",src:"04",pixiv:"https://www.pixiv.net/users/12512382"},{id:5,name:"\u3068\u308A\u304B",description:"\u8AAC\u660E5",twitter:"https://twitter.com/t0rika",src:"05",pixiv:"https://www.pixiv.net/users/2638861"},{id:6,name:"\u540D\u7121\u3057\u306E\u30B4\u30F3\u30B9\u30B1",description:"\u8AAC\u660E6",twitter:"https://twitter.com/nanashigonsuke",src:"06",pixiv:"https://www.pixiv.net/users/45100114"},{id:7,name:"\u30DE\u30B5\u3048\u3082\u3093",description:"\u8AAC\u660E7",twitter:"https://twitter.com/masa7819",src:"07",pixiv:"https://www.pixiv.net/users/3942792"},{id:8,name:"\u6795\u3055\u3093",description:"\u8AAC\u660E8",twitter:"https://twitter.com/makura8711",src:"08",pixiv:"https://www.pixiv.net/users/3106182"},{id:9,name:"\u671B\u6708\u7530\u543E\u4F5C",description:"\u8AAC\u660E9",twitter:"https://twitter.com/mt_tg",src:"09",pixiv:"https://www.pixiv.net/users/415546"},{id:10,name:"\u77E2\u5CF6\u3068\u3082\u3042\u304D",description:"\u8AAC\u660E10",twitter:"https://twitter.com/yjmtomoaki",src:"10",pixiv:"https://www.pixiv.net/users/6451424"},{id:11,name:"\u697D\u6765\u4E00\u77E5",description:"\u8AAC\u660E11",twitter:"https://twitter.com/rakurai_66UFO",src:"11",pixiv:"https://www.pixiv.net/users/474750"}],a=[{id:1,name:"\u590F\u8272",description:"\u6795\u3055\u3093 (@makura8711)\u306B\u3088\u308B\u3001Twitter\u306B\u63B2\u8F09\u3057\u305F\u590F\u304C\u30C6\u30FC\u30DE\u306E\u30A4\u30E9\u30B9\u30C8\u3092\u30DD\u30B9\u30C8\u30AB\u30FC\u30C9\u306B\u3057\u307E\u3057\u305F\u30021\u30BB\u30C3\u30C83\u679A\u5165\u308A\u3002",subdescription:"",src:"postcard",url:"https://twitter.com/makura8711/status/1604460429945999362",new:!0,size:"\u30DD\u30B9\u30C8\u30AB\u30FC\u30C9",pages:"",price:"100\u5186",onlineOrderUrl:""},{id:2,name:"THE BOOK OF CIRCLES",description:"\u671B\u6708\u7530\u543E\u4F5C (@mt_tg)\u306B\u3088\u308B\u30D5\u30EB\u30AB\u30E9\u30FC\u30C9\u30E9\u3048\u3082\u3093\u30A4\u30E9\u30B9\u30C8\u7DCF\u96C6\u7DE8",subdescription:"2018\u5E74-2022\u5E74\u306B\u63CF\u304B\u308C\u305F\u300C\u30C9\u30E9\u3048\u3082\u3093\u300D\u3092\u4E2D\u5FC3\u3068\u3057\u305F\u30A4\u30E9\u30B9\u30C8\u3092\u53CE\u9332\u3002\u518D\u9332\u4F5C\u3082\u9069\u5B9C\u52A0\u7B46\u4FEE\u6B63\u3057\u3066\u3044\u307E\u3059",src:"book1",url:"https://www.pixiv.net/artworks/103332022",new:!0,size:"B5",pages:"36\u30DA\u30FC\u30B8",price:"800\u5186",onlineOrderUrl:"https://motitago.booth.pm/items/4441457"},{id:3,name:"Perfect Blue",description:"\u671B\u6708\u7530\u543E\u4F5C (@mt_tg)\u304CC93\u3067\u9812\u5E03\u3057\u305F\u30D5\u30EB\u30AB\u30E9\u30FC\u30C9\u30E9\u3048\u3082\u3093\u30A4\u30E9\u30B9\u30C8\u672C",subdescription:"2017\u5E74\u307E\u3067\u306B\u63CF\u304B\u308C\u305F\u300C\u9752\u80CC\u666F\u30C9\u30E9\u3048\u3082\u3093\u300D\u3092\u4E2D\u5FC3\u3068\u3057\u305F\u30A4\u30E9\u30B9\u30C8\u3092\u53CE\u9332",src:"book2",url:"https://www.pixiv.net/artworks/66256659",new:!1,size:"B5",pages:"32\u30DA\u30FC\u30B8",price:"700\u5186",onlineOrderUrl:"https://motitago.booth.pm/items/4441438"}],e=y2(c.map(l=>!1));return{authorArr:c,contentArr:a,hoveredArr:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})},getImageUrl:l=>new URL(Object.assign({"./assets/FS_hyousi_middle.jpg":AY,"./assets/book1.jpg":_Y,"./assets/book2.jpg":PY,"./assets/hyoushi.jpg":TY,"./assets/map.jpg":BY,"./assets/postcard.jpg":FY})[`./assets/${l}.jpg`],self.location).href,getAuthorImageUrl:l=>new URL(Object.assign({"./assets/authors/01.jpg":EY,"./assets/authors/02.jpg":RY,"./assets/authors/03.jpg":DY,"./assets/authors/04.jpg":qY,"./assets/authors/05.jpg":UY,"./assets/authors/06.jpg":OY,"./assets/authors/07.jpg":IY,"./assets/authors/08.jpg":jY,"./assets/authors/09.jpg":WY,"./assets/authors/10.jpg":GY,"./assets/authors/11.jpg":ZY})[`./assets/authors/${l}.jpg`],self.location).href,getAuthorAltImageUrl:l=>new URL(Object.assign({"./assets/authors-alt/01.jpg":$Y,"./assets/authors-alt/02.jpg":KY,"./assets/authors-alt/03.jpg":YY,"./assets/authors-alt/04.jpg":XY,"./assets/authors-alt/05.jpg":JY,"./assets/authors-alt/06.jpg":QY,"./assets/authors-alt/07.jpg":cX,"./assets/authors-alt/08.jpg":aX,"./assets/authors-alt/09.jpg":eX,"./assets/authors-alt/10.jpg":sX,"./assets/authors-alt/11.jpg":rX})[`./assets/authors-alt/${l}.jpg`],self.location).href}}}),nX=""+new URL("FS_hyousi_middle.eaaf5783.jpg",import.meta.url).href,lX=""+new URL("hyoushi.d0bb9595.jpg",import.meta.url).href,fX=""+new URL("map.f6e273b1.jpg",import.meta.url).href;const oX=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},tX={ref:"scrollTopButton",class:"fixed w-full flex justify-end bottom-0 pb-3 pr-5 transition"},mX={class:"text-gray-800 p-2 hover:text-blue-400 bg-white/50 rounded transition"},vX=w("div",{class:"scroll-smooth"},[w("div",{class:"bg-blue-100 border-t-4 border-blue-500 text-gray-700 px-4 py-3 my-2",role:"alert"},[w("p",{class:"font-bold"},"\u30AB\u30F3\u30C5\u30E1\u30AB\u30F3\u304B\u3089\u306E\u304A\u77E5\u3089\u305B"),w("p",{class:"text-sm"},[z1("FS\u306E\u901A\u8CA9\u3092\u958B\u59CB\u3057\u307E\u3057\u305F\u3002 "),w("a",{class:"text-blue-600",href:"https://yjmtomoaki.booth.pm/"},"[\u77E2\u5CF6\u3068\u3082\u3042\u304D\u306EBOOTH]"),z1("\u3088\u308A\u8CFC\u5165\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002 ")]),w("p",{class:"text-sm"},[z1("\u671B\u6708\u306B\u3088\u308B\u30C9\u30E9\u3048\u3082\u3093\u672C\u306E\u901A\u8CA9\u3092\u958B\u59CB\u3057\u307E\u3057\u305F\u3002 "),w("a",{class:"text-blue-600",href:"https://motitago.booth.pm/"},"[\u671B\u6708\u7530\u543E\u4F5C\u306EBOOTH]"),z1("\u3088\u308A\u8CFC\u5165\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002 ")])]),w("div",{class:"flex flex-row justify-center items-center",id:"abstract"},[w("div",{class:"grid grid-cols-1 sm:grid-cols-2"},[w("div",{class:"h-72 sm:h-screen items-center text-center"},[w("img",{class:"cover-img w-full h-full sm:h-screen object-center object-cover",loading:"lazy",src:nX,alt:"FS\u8868\u7D19\u753B\u50CF"})]),w("div",{class:"p-6 mx-8 my-6 items-center align-middle bg-[url('~/assets/fs.svg')] bg-contain bg-no-repeat max-w-none"},[w("h2",{class:"text-lg md:text-2xl font-bold"},"\u85E4\u5B50\u4E0D\u4E8C\u96C4\u30AA\u30DE\u30FC\u30B8\u30E5\u30DE\u30AC\u30B8\u30F3"),w("h1",{class:"text-2xl md:text-3xl font-bold"},"\u30D5\u30B8\u30B3\u30FB\u30B9\u30D4\u30EA\u30C3\u30C8"),w("p",{class:"text-right text-md md:text-lg font-semibold max-w-lg"},[z1("by "),w("a",{class:"text-blue-600",href:"https://webcatalog-free.circle.ms/Circle/16802791"},"\u30AB\u30F3\u30C5\u30E1\u30AB\u30F3")]),w("blockquote",{class:"text-md text-gray-900 dark:text-white my-10"},[w("svg",{"aria-hidden":"true",class:"w-8 h-8 text-gray-400",viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",fill:"currentColor"})]),w("p",{class:"text-justify text-sm font-semibold max-w-lg"},[z1(" \u65E5\u672C\u3092\u4EE3\u8868\u3059\u308B\u30C8\u30C3\u30D7\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC\u306E\u591A\u304F\u306F\u3001\u30A4\u30F3\u30BF\u30D3\u30E5\u30FC\u7B49\u3092\u901A\u3057\u3066\u300C\u81EA\u5206\u306E\u5275\u4F5C\u6D3B\u52D5\u306E\u539F\u4F53\u9A13\u306F\u85E4\u5B50\u4E0D\u4E8C\u96C4\u4F5C\u54C1\u306B\u3042\u308B\u300D\u3068\u8A9E\u3063\u3066\u3044\u307E\u3059\u3002"),w("br"),z1(" \u672C\u66F8\u300C\u30D5\u30B8\u30B3\u30FB\u30B9\u30D4\u30EA\u30C3\u30C8\u300D\u3067\u306F\u3001SNS\u3067\u6D3B\u52D5\u3055\u308C\u308B\u85E4\u5B50\u4F5C\u54C1\u3092\u611B\u3057\u3066\u3084\u307E\u306A\u304411\u540D\u306E\u5275\u4F5C\u5BB6\u306B\u3088\u308B\u6F2B\u753B\u30FB\u30A4\u30E9\u30B9\u30C8\u30FB\u5C0F\u8AAC\u3092\u30AA\u30E0\u30CB\u30D0\u30B9\u5F62\u5F0F\u3067\u63B2\u8F09\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3057\u305F\u3002 ")]),w("p",{class:"text-right text-md font-bold max-w-lg"},[z1(" \u2015 \u77E2\u5CF6\u3068\u3082\u3042\u304D ("),w("a",{class:"text-blue-600",href:"https://twitter.com/yjmtomoaki",target:"_blank"},"@yjmtomoaki"),z1(") ")])]),w("img",{class:"my-4 items-center text-center max-w-sm w-full object-full",src:lX,alt:"FS\u306E\u3068\u8868\u7D19/\u88CF\u8868\u7D19"}),w("h2",{class:"my-4 text-xl md:text-2xl font-medium"}," \u8A73\u7D30\u60C5\u5831 "),w("ul",{class:"space-y-1 max-w-md text-sm list-disc list-inside"},[w("li",null," \u30B3\u30DF\u30C3\u30AF\u30DE\u30FC\u30B1\u30C3\u30C8101 (C101) "),w("li",null,[z1(" \u9812\u5E03\u5834\u6240: "),w("span",{class:"font-semibold"},"1\u65E5\u76EE \u6771\u30CF-50a \u30AB\u30F3\u30C5\u30E1\u30AB\u30F3")]),w("li",null,[z1(" \u9812\u5E03\u4FA1\u683C: "),w("span",{class:"font-semibold"},"500\u5186")]),w("li",null,[z1(" \u5185\u5BB9: "),w("span",{class:"font-semibold"},"A5 48\u30DA\u30FC\u30B8")]),w("li",null,[z1(" \u901A\u8CA9: "),w("span",{class:"font-semibold"},[w("a",{class:"text-blue-600",href:"https://yjmtomoaki.booth.pm/items/4446490"},"[BOOTH]")])])])])])])],-1),hX={class:"scroll-smooth my-8"},zX={id:"authors"},uX=w("div",{class:"my-4 text-center lign-middle"},[w("h1",null,[w("span",{class:"text-2xl md:text-3xl items-center font-medium"},"\u53C2\u52A0\u8005\u4E00\u89A7")])],-1),HX={class:"flex justify-center items-center align-middle"},pX={class:"mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center align-middle"},VX=["src","alt","onMouseover","onMouseout","onTouchstart","onTouchend"],MX={class:"mx-7 mt-5"},CX={class:"font-bold text-xl mb-2"},dX={class:"px-6 pt-4 pb-2"},LX={key:0,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},gX=["href"],bX={key:1,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},xX=["href"],NX={class:"scroll-smooth my-8"},SX={id:"distributions"},yX={class:"mx-5 md:mx-15 my-12 text-center lign-middle"},wX=w("h1",{class:"text-3xl items-center font-medium"},"\u305D\u306E\u4ED6\u306E\u9812\u5E03\u7269",-1),kX={class:"flex justify-center items-center align-middle"},AX={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch align-middle"},_X=["href"],PX=["src","alt"],TX={class:"mx-5 mt-5"},BX={class:"font-bold text-lg mb-2 text-left"},FX={class:"text-gray-700 text-sm text-left"},EX={key:0,class:"text-gray-700 text-sm text-left mt-2"},RX={class:"text-gray-700 text-sm text-left"},DX=["href"],qX={key:1,class:"text-gray-700 text-sm text-left"},UX=["href"],OX={class:"px-6 pt-4 pb-2 text-left"},IX={key:0,class:"inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"},jX={key:1,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},WX={key:2,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2"},GX=Wo('<div class="flex flex-row min-h-screen justify-center items-center" id="access"><div class="items-center align-middle"><div class="relative top-48 left-5 right-5"><p class="text-2xl md:text-3xl text-white font-medium">2022/12/30 (\u91D1) \u6771\u4EAC\u30D3\u30C3\u30B0\u30B5\u30A4\u30C8</p><p class="text-2xl md:text-3xl text-white font-medium">\u67715\u30DB\u30FC\u30EB \u30CF-50a \u300C\u30AB\u30F3\u30C5\u30E1\u30AB\u30F3\u300D</p></div><img class="place-doraemon-img w-screen max-w-screen-xl h-screen object-cover" loading="lazy" src="'+fX+'" alt="\u30C9\u30E9\u3048\u3082\u3093\u304C\u7A7A\u3092\u98DB\u3093\u3067\u3044\u308B\u80CC\u666F\u753B\u50CF"><div class="self-end space-y-4 bg-gray-800" id="footer"><p class="text-1xl inline-block align-bottom text-white">\xA9 2022 Tagosaku Mochiduki</p></div></div></div>',1);function ZX(c,a,e,s,r,i){const n=C8("font-awesome-icon");return u1(),w1(b1,null,[w("div",tX,[w("div",mX,[w("button",{id:"scrollToTopButton",onClick:a[0]||(a[0]=(...l)=>c.scrollToTop&&c.scrollToTop(...l))}," Scroll to top ")])],512),vX,w("div",hX,[w("div",zX,[uX,w("div",HX,[w("div",pX,[(u1(!0),w1(b1,null,J5(c.authorArr,(l,f)=>(u1(),w1("div",{class:"max-w-sm my-6 mx-4 rounded overflow-hidden shadow-lg",key:f},[w("img",{class:"author-img w-full h-48 object-cover",src:c.hoveredArr[f]?c.getAuthorAltImageUrl(l.src):c.getAuthorImageUrl(l.src),alt:l.name,loading:"lazy",onMouseover:o=>c.hoveredArr[f]=!0,onMouseout:o=>c.hoveredArr[f]=!1,onTouchstart:o=>c.hoveredArr[f]=!0,onTouchend:o=>c.hoveredArr[f]=!1},null,40,VX),w("div",MX,[w("div",CX,M2(l.name),1)]),w("div",dX,[l.twitter?(u1(),w1("span",LX,[w("a",{href:l.twitter},[i1(n,{icon:"fa-brands fa-twitter"}),z1(" Twitter")],8,gX)])):d2("",!0),l.pixiv?(u1(),w1("span",bX,[w("a",{href:l.pixiv},[i1(n,{icon:["fas","image"]}),z1(" Pixiv ")],8,xX)])):d2("",!0)])]))),128))])])])]),w("div",NX,[w("div",SX,[w("div",yX,[wX,w("div",kX,[w("div",AX,[(u1(!0),w1(b1,null,J5(c.contentArr,(l,f)=>(u1(),w1("div",{class:"max-w-sm my-6 mx-5 rounded overflow-hidden shadow-lg",key:f},[w("a",{href:l.url,target:"\u201D_blank\u201D"},[w("img",{class:"publish-content-img w-full h-84 max-h-84 object-cover",src:c.getImageUrl(l.src),alt:l.name,loading:"lazy"},null,8,PX)],8,_X),w("div",TX,[w("div",BX,M2(l.name),1),w("p",FX,M2(l.description),1),l.subdescription?(u1(),w1("p",EX,M2(l.subdescription),1)):d2("",!0),w("p",RX,[w("a",{class:"text-blue-600",href:l.url,target:"\u201D_blank\u201D"},"[\u8A73\u7D30\u60C5\u5831]",8,DX)]),l.onlineOrderUrl?(u1(),w1("p",qX,[w("a",{class:"text-blue-600",href:l.onlineOrderUrl,target:"\u201D_blank\u201D"},"[\u30AA\u30F3\u30E9\u30A4\u30F3\u8CA9\u58F2]",8,UX)])):d2("",!0)]),w("div",OX,[l.new?(u1(),w1("span",IX," \u65B0\u520A ")):d2("",!0),l.size||l.pages?(u1(),w1("span",jX,M2(l.size)+" "+M2(l.pages),1)):d2("",!0),l.price?(u1(),w1("span",WX,M2(l.price),1)):d2("",!0)])]))),128))])])])])]),GX],64)}const $X=oX(iX,[["render",ZX]]);globalThis.$fetch||(globalThis.$fetch=tm.create({baseURL:vm()}));let a7;const KX=Sm(kY);a7=async function(){var r;const e=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?xt(c7):bt(c7);e.component("App",$X);const s=bm({vueApp:e});s.hooks.hookOnce("app:suspense:resolve",()=>{s.isHydrating=!1});try{await Nm(s,KX)}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}try{await s.hooks.callHook("app:created",e),await s.hooks.callHook("app:beforeMount",e),e.mount("#__nuxt"),await s.hooks.callHook("app:mounted",e),await S7()}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}},a7().catch(c=>{console.error("Error while mounting app:",c)});export{u9 as _,oX as a,N8 as b,n4 as c,vo as d,w1 as e,w as f,jo as g,i1 as h,z1 as i,QX as j,JX as k,YX as n,u1 as o,XX as p,M2 as t,t2 as u,_7 as w};