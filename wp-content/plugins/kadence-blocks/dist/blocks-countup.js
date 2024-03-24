(()=>{var e={4184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var r=i.apply(null,a);r&&e.push(r)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var l in a)n.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},8273:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CountUp:()=>i});var n=function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,a){var i=this;this.endVal=t,this.options=a,this.version="2.2.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(t/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,a,n,o,r=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var l=(t+="").split(".");if(a=l[0],n=l.length>1?i.options.decimal+l[1]:"",i.options.useGrouping){o="";for(var s=0,u=a.length;s<u;++s)0!==s&&s%3==0&&(o=i.options.separator+o),o=a[u-s-1]+o;a=o}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),r+i.options.prefix+a+n+i.options.suffix},this.easeOutExpo=function(e,t,a,n){return a*(1-Math.pow(2,-10*e/n))*1024/1023+t},this.options=n(n({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",void 0!==window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,a=e.el.offsetTop+e.el.offsetHeight;a<t&&a>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>a&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold){this.finalEndVal=e;var a=this.countDown?1:-1;this.endVal=e+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},7857:(e,t,a)=>{"use strict";var n=a(9196),i=a(8273);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(n);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;function g(e){var t=n.useRef(e);return c((function(){t.current=e})),n.useCallback((function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.current.apply(void 0,a)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},b=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,a=e.redraw,o=e.containerProps,l=e.children,u=e.style,c=p(e,b),v=r.default.useRef(null),y=r.default.useRef(!1),h=function(e){var t=n.useMemo((function(){return s(s({},f),e)}),[e]),a=t.ref,o=t.startOnMount,r=t.enableReinitialize,l=t.delay,u=t.onEnd,d=t.onStart,c=t.onPauseResume,b=t.onReset,v=t.onUpdate,y=p(t,m),h=n.useRef(),T=n.useRef(),k=n.useRef(!1),S=g((function(){return function(e,t){var a=t.decimal,n=t.decimals,o=t.duration,r=t.easingFn,l=t.end,s=t.formattingFn,u=t.numerals,d=t.prefix,p=t.separator,c=t.start,g=t.suffix,m=t.useEasing,f=t.enableScrollSpy,b=t.scrollSpyDelay;return new i.CountUp(e,l,{startVal:c,duration:o,decimal:a,decimalPlaces:n,easingFn:r,formattingFn:s,numerals:u,separator:p,prefix:d,suffix:g,useEasing:m,useGrouping:!!p,enableScrollSpy:f,scrollSpyDelay:b})}("string"==typeof a?a:a.current,y)})),O=g((function(e){var t=h.current;if(t&&!e)return t;var a=S();return h.current=a,a})),M=g((function(){var e=function(){return O(!0).start((function(){null==u||u({pauseResume:x,reset:E,start:P,update:w})}))};l&&l>0?T.current=setTimeout(e,1e3*l):e(),null==d||d({pauseResume:x,reset:E,update:w})})),x=g((function(){O().pauseResume(),null==c||c({reset:E,start:P,update:w})})),E=g((function(){T.current&&clearTimeout(T.current),O().reset(),null==b||b({pauseResume:x,start:P,update:w})})),w=g((function(e){O().update(e),null==v||v({pauseResume:x,reset:E,start:P})})),P=g((function(){E(),M()})),C=g((function(e){o&&(e&&E(),M())}));return n.useEffect((function(){k.current?r&&C(!0):(k.current=!0,C())}),[r,k,C,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),n.useEffect((function(){return function(){E()}}),[E]),{start:P,pauseResume:x,reset:E,update:w,getCountUp:O}}(s(s({},c),{},{ref:v,startOnMount:"function"!=typeof l||0===e.delay,enableReinitialize:!1})),T=h.start,k=h.reset,S=h.update,O=h.pauseResume,M=h.getCountUp,x=g((function(){T()})),E=g((function(t){e.preserveValue||k(),S(t)})),w=g((function(){"function"!=typeof e.children||v.current instanceof Element?M():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));n.useEffect((function(){w()}),[w]),n.useEffect((function(){y.current&&E(e.end)}),[e.end,E]);var P=a&&e;return n.useEffect((function(){a&&y.current&&x()}),[x,a,P]),n.useEffect((function(){!a&&y.current&&x()}),[x,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),n.useEffect((function(){y.current=!0}),[]),"function"==typeof l?l({countUpRef:v,start:T,reset:k,update:S,pauseResume:O,getCountUp:M}):r.default.createElement("span",d({className:t,ref:v,style:u},o),e.start?M().formattingFn(e.start):"")}},9196:e=>{"use strict";e.exports=window.React}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";a.r(n);const e=window.kadence.icons;var t=a(9196);const i=window.kadence.components,o=window.wp.i18n,r=window.wp.element,l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Count Up","name":"kadence/countup","category":"kadence-blocks","description":"","attributes":{"uniqueID":{"type":"string","default":""},"title":{"type":"string","default":""},"displayTitle":{"type":"boolean","default":true},"titleFont":{"type":"array","default":[{"level":4,"htmlTag":"div","size":["","",""],"sizeType":"px","lineHeight":["","",""],"lineType":"","letterSpacing":"","textTransform":"","family":"","google":false,"style":"","weight":"","variant":"","subset":"","loadGoogle":true}]},"titlePaddingType":{"type":"string","default":"px"},"titlePadding":{"type":"array","default":["","","",""]},"titleTabletPadding":{"type":"array","default":["","","",""]},"titleMobilePadding":{"type":"array","default":["","","",""]},"titleMarginType":{"type":"string","default":"px"},"titleMargin":{"type":"array","default":["","","",""]},"titleTabletMargin":{"type":"array","default":["","","",""]},"titleMobileMargin":{"type":"array","default":["","","",""]},"titleAlign":{"type":"array","default":["","",""]},"titleColor":{"type":"string","default":""},"titleHoverColor":{"type":"string","default":""},"titleMinHeight":{"type":"array","default":["","",""]},"numberFont":{"type":"array","default":[{"size":["50","",""],"sizeType":"px","lineHeight":["","",""],"lineType":"px","letterSpacing":"","textTransform":"","family":"","google":false,"style":"","weight":"","variant":"","subset":"","loadGoogle":true}]},"numberPaddingType":{"type":"string","default":"px"},"numberPadding":{"type":"array","default":["","","",""]},"numberTabletPadding":{"type":"array","default":["","","",""]},"numberMobilePadding":{"type":"array","default":["","","",""]},"numberMarginType":{"type":"string","default":"px"},"numberMargin":{"type":"array","default":["","","",""]},"numberTabletMargin":{"type":"array","default":["","","",""]},"numberMobileMargin":{"type":"array","default":["","","",""]},"numberAlign":{"type":"array","default":["","",""]},"numberColor":{"type":"string","default":""},"numberHoverColor":{"type":"string","default":""},"numberMinHeight":{"type":"array","default":["","",""]},"start":{"type":"number","default":0},"end":{"type":"number","default":100},"startDecimal":{"type":"string"},"endDecimal":{"type":"string"},"prefix":{"type":"string","default":""},"suffix":{"type":"string","default":""},"duration":{"type":"number","default":2.5},"separator":{"type":"string","default":""},"decimal":{"type":"string","default":""},"decimalSpaces":{"type":"number","default":2}},"supports":{"kbMetadata":true}}'),s=window.wp.components,u=function({attributes:e,setAttributes:a,numberPaddingMouseOver:n,numberMarginMouseOver:u,titlePaddingMouseOver:d,titleMarginMouseOver:p}){const[c,g]=(0,r.useState)("general"),{end:m,start:f,prefix:b,suffix:v,duration:y,separator:h,displayTitle:T,titleFont:k,titleAlign:S,titleColor:O,titleMinHeight:M,titlePadding:x,titleMobilePadding:E,titleMobileMargin:w,titleTabletMargin:P,titleTabletPadding:C,titleMargin:V,titlePaddingType:F,titleMarginType:z,numberColor:_,numberMinHeight:N,numberFont:A,numberAlign:D,numberPadding:H,numberMobilePadding:R,numberMobileMargin:j,numberTabletMargin:B,numberTabletPadding:I,numberMargin:U,numberPaddingType:L,numberMarginType:G,decimalSpaces:q,decimal:K}=e,W=e=>{const t=k.map(((t,a)=>(0===a&&(t={...t,...e}),t)));a({titleFont:t})},$=e=>{const t=A.map(((t,a)=>(0===a&&(t={...t,...e}),t)));a({numberFont:t})};let Y=!0===h?",":h;Y=!1===Y?"":Y;let Z=1;if(K&&q)switch(q){case 1:Z=.1;break;case 2:Z=.01;break;case 3:Z=.001;break;case 4:Z=1e-4;break;case 5:Z=1e-5;break;case 6:Z=1e-6;break;case 7:Z=1e-7;break;case 8:Z=1e-8;break;default:Z=1}return(0,t.createElement)(i.KadenceInspectorControls,{blockSlug:"kadence/countup"},(0,t.createElement)(i.InspectorControlTabs,{panelName:"countup",setActiveTab:e=>g(e),activeTab:c}),"general"===c&&(0,t.createElement)(r.Fragment,null,(0,t.createElement)(i.KadencePanelBody,{title:(0,o.__)("Count Up Settings"),initialOpen:!0,panelName:"kb-inspector-countup-settings"},(0,t.createElement)("div",{className:"kt-columns-control"},(0,t.createElement)("div",{style:{marginBottom:"15px"}},(0,t.createElement)(s.__experimentalNumberControl,{label:(0,o.__)("Starting Number","kadence-blocks"),value:f,onChange:e=>a({start:parseFloat(e)}),min:0,step:Z,isShiftStepEnabled:!0,shiftStep:10})),(0,t.createElement)("div",{style:{marginBottom:"15px"}},(0,t.createElement)(s.__experimentalNumberControl,{label:(0,o.__)("Ending Number","kadence-blocks"),value:m,onChange:e=>{a({end:parseFloat(e)})},min:0,step:Z,isShiftStepEnabled:!0,shiftStep:10})),(0,t.createElement)(s.TextControl,{label:(0,o.__)("Number Prefix","kadence-blocks"),value:b,onChange:e=>a({prefix:e})}),(0,t.createElement)(s.TextControl,{label:(0,o.__)("Number Suffix","kadence-blocks"),value:v,onChange:e=>a({suffix:e})}),(0,t.createElement)(i.RangeControl,{label:(0,o.__)("Animation Duration","kadence-blocks"),value:y,onChange:e=>a({duration:e}),min:.1,max:25,step:.1}),(0,t.createElement)(s.SelectControl,{label:(0,o.__)("Thousand Separator","kadence-blocks"),value:Y,options:[{value:"",label:(0,o.__)("None","kadence-blocks")},{value:",",label:","},{value:".",label:"."}],onChange:e=>a({separator:e})}),(0,t.createElement)(s.SelectControl,{label:(0,o.__)("Decimal","kadence-blocks"),value:K,options:[{value:"",label:(0,o.__)("None","kadence-blocks")},{value:".",label:"."},{value:",",label:","}],onChange:e=>a({decimal:e})}),K&&(0,t.createElement)(i.RangeControl,{label:(0,o.__)("Decimal Spaces","kadence-blocks"),value:q,onChange:e=>a({decimalSpaces:e}),min:1,max:8,step:1})))),"style"===c&&(0,t.createElement)(r.Fragment,null,(0,t.createElement)(i.KadencePanelBody,{title:(0,o.__)("Title Settings","kadence-blocks"),panelName:"titleStyle",blockSlug:"kadence/countup"},(0,t.createElement)(s.ToggleControl,{label:(0,o.__)("Show Title","kadence-blocks"),checked:T,onChange:e=>a({displayTitle:e})}),T&&(0,t.createElement)(r.Fragment,null,(0,t.createElement)(i.PopColorControl,{label:(0,o.__)("Title Color","kadence-blocks"),value:O||"",default:"",onChange:e=>a({titleColor:e})}),(0,t.createElement)(i.ResponsiveAlignControls,{label:(0,o.__)("Text Alignment","kadence-blocks"),value:S&&S[0]?S[0]:"",mobileValue:S&&S[2]?S[2]:"",tabletValue:S&&S[1]?S[1]:"",onChange:e=>a({titleAlign:[e,S&&S[1]?S[1]:"",S&&S[2]?S[2]:""]}),onChangeTablet:e=>a({titleAlign:[S&&S[0]?S[0]:"",e,S&&S[2]?S[2]:""]}),onChangeMobile:e=>a({titleAlign:[S&&S[0]?S[0]:"",S&&S[1]?S[1]:"",e]})}),(0,t.createElement)("h2",{className:"kt-heading-size-title"},(0,o.__)("Min Height")),(0,t.createElement)(s.TabPanel,{className:"kt-size-tabs",activeClass:"active-tab",tabs:[{name:"desk",title:(0,t.createElement)(s.Dashicon,{icon:"desktop"}),className:"kt-desk-tab"},{name:"tablet",title:(0,t.createElement)(s.Dashicon,{icon:"tablet"}),className:"kt-tablet-tab"},{name:"mobile",title:(0,t.createElement)(s.Dashicon,{icon:"smartphone"}),className:"kt-mobile-tab"}]},(e=>{let n;return e.name&&(n="mobile"===e.name?(0,t.createElement)(i.RangeControl,{value:void 0!==M&&void 0!==M[2]?M[2]:"",onChange:e=>a({titleMinHeight:[void 0!==M&&void 0!==M[0]?M[0]:"",void 0!==M&&void 0!==M[1]?M[1]:"",e]}),step:1,min:0,max:600}):"tablet"===e.name?(0,t.createElement)(i.RangeControl,{value:void 0!==M&&void 0!==M[1]?M[1]:"",onChange:e=>a({titleMinHeight:[void 0!==M&&void 0!==M[0]?M[0]:"",e,void 0!==M&&void 0!==M[2]?M[2]:""]}),step:1,min:0,max:600}):(0,t.createElement)(i.RangeControl,{value:void 0!==M&&void 0!==M[0]?M[0]:"",onChange:e=>a({titleMinHeight:[e,void 0!==M&&void 0!==M[1]?M[1]:"",void 0!==M&&void 0!==M[2]?M[2]:""]}),step:1,min:0,max:600})),(0,t.createElement)("div",{className:e.className,key:e.className},n)})),(0,t.createElement)(i.TypographyControls,{fontGroup:"heading",tagLowLevel:2,tagHighLevel:7,otherTags:{p:!0,span:!0,div:!0},tagLevel:k[0].level,htmlTag:k[0].htmlTag,onTagLevel:e=>W({level:e}),onTagLevelHTML:(e,t)=>{W({level:e,htmlTag:t})},fontSize:k[0].size,onFontSize:e=>W({size:e}),fontSizeType:k[0].sizeType,onFontSizeType:e=>W({sizeType:e}),lineHeight:k[0].lineHeight,onLineHeight:e=>W({lineHeight:e}),lineHeightType:k[0].lineType,onLineHeightType:e=>{W({lineType:e})},letterSpacing:k[0].letterSpacing,onLetterSpacing:e=>W({letterSpacing:e}),fontFamily:k[0].family,textTransform:k[0].textTransform,onTextTransform:e=>W({textTransform:e}),onFontFamily:e=>W({family:e}),onFontChange:e=>{W({family:e.value,google:e.google})},onFontArrayChange:e=>W(e),googleFont:k[0].google,onGoogleFont:e=>W({google:e}),loadGoogleFont:k[0].loadGoogle,onLoadGoogleFont:e=>W({loadGoogle:e}),fontVariant:k[0].variant,onFontVariant:e=>W({variant:e}),fontWeight:k[0].weight,onFontWeight:e=>W({weight:e}),fontStyle:k[0].style,onFontStyle:e=>W({style:e}),fontSubset:k[0].subset,onFontSubset:e=>W({subset:e})}),(0,t.createElement)(i.ResponsiveMeasureRangeControl,{label:(0,o.__)("Title Padding","kadence-blocks"),value:x,tabletValue:C,mobileValue:E,onChange:e=>a({titlePadding:e}),onChangeTablet:e=>a({titleTabletPadding:e}),onChangeMobile:e=>a({titleMobilePadding:e}),min:0,max:"em"===F||"rem"===F?12:200,step:"em"===F||"rem"===F?.1:1,unit:F,units:["px","em","rem","%"],onUnit:e=>a({titlePaddingType:e}),onMouseOver:d.onMouseOver,onMouseOut:d.onMouseOut}),(0,t.createElement)(i.ResponsiveMeasureRangeControl,{label:(0,o.__)("Title Margin","kadence-blocks"),value:V,tabletValue:P,mobileValue:w,onChange:e=>a({titleMargin:e}),onChangeTablet:e=>a({titleTabletMargin:e}),onChangeMobile:e=>a({titleMobileMargin:e}),min:"em"===z||"rem"===z?-12:-200,max:"em"===z||"rem"===z?12:200,step:"em"===z||"rem"===z?.1:1,unit:z,units:["px","em","rem","%","vh"],onUnit:e=>a({titleMarginType:e}),onMouseOver:p.onMouseOver,onMouseOut:p.onMouseOut,allowAuto:!0}))),(0,t.createElement)(i.KadencePanelBody,{title:(0,o.__)("Number Settings","kadence-blocks"),initialOpen:!1,panelName:"numberStyle",blockSlug:"kadence/countup"},(0,t.createElement)(i.PopColorControl,{label:(0,o.__)("Number Color","kadence-blocks"),value:_||"",default:"",onChange:e=>a({numberColor:e})}),(0,t.createElement)(i.ResponsiveAlignControls,{label:(0,o.__)("Text Alignment","kadence-blocks"),value:D&&D[0]?D[0]:"",mobileValue:D&&D[2]?D[2]:"",tabletValue:D&&D[1]?D[1]:"",onChange:e=>a({numberAlign:[e,D&&D[1]?D[1]:"",D&&D[2]?D[2]:""]}),onChangeTablet:e=>a({numberAlign:[D&&D[0]?D[0]:"",e,D&&D[2]?D[2]:""]}),onChangeMobile:e=>a({numberAlign:[D&&D[0]?D[0]:"",D&&D[1]?D[1]:"",e]})}),(0,t.createElement)("h2",{className:"kt-heading-size-title"},(0,o.__)("Min Height")),(0,t.createElement)(s.TabPanel,{className:"kt-size-tabs",activeClass:"active-tab",tabs:[{name:"desk",title:(0,t.createElement)(s.Dashicon,{icon:"desktop"}),className:"kt-desk-tab"},{name:"tablet",title:(0,t.createElement)(s.Dashicon,{icon:"tablet"}),className:"kt-tablet-tab"},{name:"mobile",title:(0,t.createElement)(s.Dashicon,{icon:"smartphone"}),className:"kt-mobile-tab"}]},(e=>{let n;return e.name&&(n="mobile"===e.name?(0,t.createElement)(i.RangeControl,{value:void 0!==N&&void 0!==N[2]?N[2]:"",onChange:e=>a({numberMinHeight:[void 0!==N&&void 0!==N[0]?N[0]:"",void 0!==N&&void 0!==N[1]?N[1]:"",e]}),step:1,min:0,max:600}):"tablet"===e.name?(0,t.createElement)(i.RangeControl,{value:void 0!==N&&void 0!==N[1]?N[1]:"",onChange:e=>a({numberMinHeight:[void 0!==N&&void 0!==N[0]?N[0]:"",e,void 0!==N&&void 0!==N[2]?N[2]:""]}),step:1,min:0,max:600}):(0,t.createElement)(i.RangeControl,{value:void 0!==N&&void 0!==N[0]?N[0]:"",onChange:e=>a({numberMinHeight:[e,void 0!==N&&void 0!==N[1]?N[1]:"",void 0!==N&&void 0!==N[2]?N[2]:""]}),step:1,min:0,max:600})),(0,t.createElement)("div",{className:e.className,key:e.className},n)})),(0,t.createElement)(i.TypographyControls,{fontGroup:"body",fontSize:A[0].size,onFontSize:e=>$({size:e}),fontSizeType:A[0].sizeType,onFontSizeType:e=>$({sizeType:e}),lineHeight:A[0].lineHeight,onLineHeight:e=>$({lineHeight:e}),lineHeightType:A[0].lineType,onLineHeightType:e=>$({lineType:e}),letterSpacing:A[0].letterSpacing,onLetterSpacing:e=>$({letterSpacing:e}),fontFamily:A[0].family,onFontFamily:e=>$({family:e}),onFontChange:e=>{$({family:e.value,google:e.google})},onFontArrayChange:e=>$(e),googleFont:A[0].google,onGoogleFont:e=>$({google:e}),loadGoogleFont:A[0].loadGoogle,onLoadGoogleFont:e=>$({loadGoogle:e}),fontVariant:A[0].variant,onFontVariant:e=>$({variant:e}),fontWeight:A[0].weight,onFontWeight:e=>$({weight:e}),fontStyle:A[0].style,onFontStyle:e=>$({style:e}),fontSubset:A[0].subset,onFontSubset:e=>$({subset:e})}),(0,t.createElement)(i.ResponsiveMeasureRangeControl,{label:(0,o.__)("Padding","kadence-blocks"),value:H,tabletValue:I,mobileValue:R,onChange:e=>a({numberPadding:e}),onChangeTablet:e=>a({numberTabletPadding:e}),onChangeMobile:e=>a({numberMobilePadding:e}),min:0,max:"em"===L||"rem"===L?12:200,step:"em"===L||"rem"===L?.1:1,unit:L,units:["px","em","rem","%"],onUnit:e=>a({numberPaddingType:e}),onMouseOver:n.onMouseOver,onMouseOut:n.onMouseOut}),(0,t.createElement)(i.ResponsiveMeasureRangeControl,{label:(0,o.__)("Margin","kadence-blocks"),value:U,tabletValue:B,mobileValue:j,onChange:e=>a({numberMargin:e}),onChangeTablet:e=>a({numberTabletMargin:e}),onChangeMobile:e=>a({numberMobileMargin:e}),min:"em"===G||"rem"===G?-12:-200,max:"em"===G||"rem"===G?12:200,step:"em"===G||"rem"===G?.1:1,unit:G,units:["px","em","rem","%","vh"],onUnit:e=>a({numberMarginType:e}),onMouseOver:u.onMouseOver,onMouseOut:u.onMouseOut,allowAuto:!0}))),"advanced"===c&&(0,t.createElement)(r.Fragment,null,(0,t.createElement)(i.KadenceBlockDefaults,{attributes:e,defaultAttributes:l.attributes,blockSlug:l.name,excludedAttrs:["start","end","endDecimal","title"]})))},d=window.kadence.helpers;var p=a(7857),c=a(4184),g=a.n(c);const m=window.wp.blockEditor,f=window.wp.data,{RichText:b,useBlockProps:v}=wp.blockEditor,y=[{attributes:{uniqueID:{type:"string",default:""},title:{type:"string",default:""},displayTitle:{type:"boolean",default:!0},titleFont:{type:"array",default:[{level:4,htmlTag:"div",size:["","",""],sizeType:"px",lineHeight:["","",""],lineType:"",letterSpacing:"",textTransform:"",family:"",google:!1,style:"",weight:"",variant:"",subset:"",loadGoogle:!0}]},titlePaddingType:{type:"string",default:"px"},titlePadding:{type:"array",default:["","","",""]},titleTabletPadding:{type:"array",default:["","","",""]},titleMobilePadding:{type:"array",default:["","","",""]},titleMarginType:{type:"string",default:"px"},titleMargin:{type:"array",default:["","","",""]},titleTabletMargin:{type:"array",default:["","","",""]},titleMobileMargin:{type:"array",default:["","","",""]},titleAlign:{type:"array",default:["","",""]},titleColor:{type:"string",default:""},titleHoverColor:{type:"string",default:""},titleMinHeight:{type:"array",default:["","",""]},numberFont:{type:"array",default:[{size:["50","",""],sizeType:"px",lineHeight:["","",""],lineType:"px",letterSpacing:"",textTransform:"",family:"",google:!1,style:"",weight:"",variant:"",subset:"",loadGoogle:!0}]},numberPaddingType:{type:"string",default:"px"},numberPadding:{type:"array",default:["","","",""]},numberTabletPadding:{type:"array",default:["","","",""]},numberMobilePadding:{type:"array",default:["","","",""]},numberMarginType:{type:"string",default:"px"},numberMargin:{type:"array",default:["","","",""]},numberTabletMargin:{type:"array",default:["","","",""]},numberMobileMargin:{type:"array",default:["","","",""]},numberAlign:{type:"array",default:["","",""]},numberColor:{type:"string",default:""},numberHoverColor:{type:"string",default:""},numberMinHeight:{type:"array",default:["","",""]},start:{type:"number",default:0},end:{type:"number",default:100},prefix:{type:"string",default:""},suffix:{type:"string",default:""},duration:{type:"number",default:2.5},separator:{type:"boolean",default:!1}},save:({attributes:e})=>{const{uniqueID:a,title:n,start:i,end:o,prefix:r,suffix:l,duration:s,separator:u,titleFont:d,displayTitle:p,decimal:c,decimalSpaces:m}=e,f=g()({[`kb-count-up-${a}`]:a,"kb-count-up":!0}),y=d[0].htmlTag&&"heading"!==d[0].htmlTag?d[0].htmlTag:"h"+d[0].level,h=v.save({className:f});return(0,t.createElement)("div",{...h,"data-start":i,"data-end":o,"data-prefix":r,"data-suffix":l,"data-duration":s,"data-separator":u,"data-decimal":c||void 0,"data-decimal-spaces":c?m:void 0},(0,t.createElement)("div",{className:"kb-count-up-process kb-count-up-number"}),n&&p&&(0,t.createElement)(b.Content,{tagName:y,className:"kb-count-up-title",value:n}))}},{attributes:{uniqueID:{type:"string",default:""},title:{type:"string",default:""},displayTitle:{type:"boolean",default:!0},titleFont:{type:"array",default:[{level:4,htmlTag:"div",size:["","",""],sizeType:"px",lineHeight:["","",""],lineType:"px",letterSpacing:"",textTransform:"",family:"",google:!1,style:"",weight:"",variant:"",subset:"",loadGoogle:!0}]},titlePaddingType:{type:"string",default:"px"},titlePadding:{type:"array",default:["","","",""]},titleTabletPadding:{type:"array",default:["","","",""]},titleMobilePadding:{type:"array",default:["","","",""]},titleMarginType:{type:"string",default:"px"},titleMargin:{type:"array",default:["","","",""]},titleTabletMargin:{type:"array",default:["","","",""]},titleMobileMargin:{type:"array",default:["","","",""]},titleAlign:{type:"array",default:["","",""]},titleColor:{type:"string",default:""},titleHoverColor:{type:"string",default:""},titleMinHeight:{type:"array",default:["","",""]},numberFont:{type:"array",default:[{size:["50","",""],sizeType:"px",lineHeight:["","",""],lineType:"px",letterSpacing:"",textTransform:"",family:"",google:!1,style:"",weight:"",variant:"",subset:"",loadGoogle:!0}]},numberPaddingType:{type:"string",default:"px"},numberPadding:{type:"array",default:["","","",""]},numberTabletPadding:{type:"array",default:["","","",""]},numberMobilePadding:{type:"array",default:["","","",""]},numberMarginType:{type:"string",default:"px"},numberMargin:{type:"array",default:["","","",""]},numberTabletMargin:{type:"array",default:["","","",""]},numberMobileMargin:{type:"array",default:["","","",""]},numberAlign:{type:"array",default:["","",""]},numberColor:{type:"string",default:""},numberHoverColor:{type:"string",default:""},numberMinHeight:{type:"array",default:["","",""]},start:{type:"number",default:0},end:{type:"number",default:100},prefix:{type:"string",default:""},suffix:{type:"string",default:""},duration:{type:"number",default:2.5},separator:{type:"boolean",default:!1}},save:({attributes:e})=>{const{uniqueID:a,title:n,start:i,end:o,prefix:r,suffix:l,duration:s,separator:u,titleFont:d,displayTitle:p}=e,c=g()({[`kb-count-up-${a}`]:a,"kb-count-up":!0}),m=d[0].htmlTag&&"heading"!==d[0].htmlTag?d[0].htmlTag:"h"+d[0].level;return(0,t.createElement)("div",{className:c,"data-start":i,"data-end":o,"data-prefix":r,"data-suffix":l,"data-duration":s,"data-separator":u},(0,t.createElement)("div",{className:"kb-count-up-process kb-count-up-number"}),n&&p&&(0,t.createElement)(b.Content,{tagName:m,className:"kb-count-up-title",value:n}))}}];(0,window.wp.blocks.registerBlockType)("kadence/countup",{...l,title:(0,o._x)("Count Up","block title","kadence-blocks"),description:(0,o._x)("An animated count up or down to a specific value.","block description","kadence-blocks"),keywords:[(0,o.__)("count down","kadence-blocks"),(0,o.__)("count up","kadence-blocks"),(0,o.__)("counter","kadence-blocks"),(0,o.__)("number","kadence-blocks"),"KB"],icon:{src:e.countUpIcon},edit:function(e){const{clientId:a,attributes:n,className:s,isSelected:c,setAttributes:b}=e,{uniqueID:v,title:y,start:h,end:T,startDecimal:k,endDecimal:S,prefix:O,suffix:M,duration:x,separator:E,displayTitle:w,titleFont:P,titleAlign:C,titleColor:V,titleMinHeight:F,numberFont:z,numberAlign:_,numberColor:N,numberMinHeight:A,numberPadding:D,numberMobilePadding:H,numberMobileMargin:R,numberTabletMargin:j,numberTabletPadding:B,numberMargin:I,numberPaddingType:U,numberMarginType:L,titlePadding:G,titleMobilePadding:q,titleMobileMargin:K,titleTabletMargin:W,titleTabletPadding:$,titleMargin:Y,titlePaddingType:Z,titleMarginType:J,decimal:Q,decimalSpaces:X}=n,{addUniqueID:ee}=(0,f.useDispatch)("kadenceblocks/data"),{isUniqueID:te,isUniqueBlock:ae,previewDevice:ne,parentData:ie}=(0,f.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,a)=>e("kadenceblocks/data").isUniqueBlock(t,a),previewDevice:e("kadenceblocks/data").getPreviewDeviceType(),parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId(a)),postId:e("core/editor")?.getCurrentPostId()?e("core/editor")?.getCurrentPostId():"",reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName(a,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}})),[a]);(0,r.useEffect)((()=>{(0,d.setBlockDefaults)("kadence/countup",n);const t=(0,d.getPostOrFseId)(e,ie),i=(0,d.getUniqueId)(v,a,te,ae,t);i!==v?(n.uniqueID=i,b({uniqueID:i}),ee(i,a)):ee(v,a)}),[]);const oe=P[0].htmlTag&&"heading"!==P[0].htmlTag?P[0].htmlTag:"h"+P[0].level,re={google:{families:[P[0].family+(P[0].variant?":"+P[0].variant:"")]}},le=P[0].google?re:"",se={google:{families:[z[0].family+(z[0].variant?":"+z[0].variant:"")]}},ue=z[0].google?se:"",de=(0,d.getPreviewSize)(ne,void 0!==C[0]?C[0]:"",void 0!==C[1]?C[1]:"",void 0!==C[2]?C[2]:""),pe=(0,d.getPreviewSize)(ne,void 0!==_[0]?_[0]:"",void 0!==_[1]?_[1]:"",void 0!==_[2]?_[2]:""),ce=(0,d.getPreviewSize)(ne,void 0!==I&&void 0!==I[0]?I[0]:"",void 0!==j&&void 0!==j[0]?j[0]:"",void 0!==R&&void 0!==R[0]?R[0]:""),ge=(0,d.getPreviewSize)(ne,void 0!==I&&void 0!==I[1]?I[1]:"",void 0!==j&&void 0!==j[1]?j[1]:"",void 0!==R&&void 0!==R[1]?R[1]:""),me=(0,d.getPreviewSize)(ne,void 0!==I&&void 0!==I[2]?I[2]:"",void 0!==j&&void 0!==j[2]?j[2]:"",void 0!==R&&void 0!==R[2]?R[2]:""),fe=(0,d.getPreviewSize)(ne,void 0!==I&&void 0!==I[3]?I[3]:"",void 0!==j&&void 0!==j[3]?j[3]:"",void 0!==R&&void 0!==R[3]?R[3]:""),be=(0,d.getPreviewSize)(ne,void 0!==D&&void 0!==D[0]?D[0]:"",void 0!==B&&void 0!==B[0]?B[0]:"",void 0!==H&&void 0!==H[0]?H[0]:""),ve=(0,d.getPreviewSize)(ne,void 0!==D&&void 0!==D[1]?D[1]:"",void 0!==B&&void 0!==B[1]?B[1]:"",void 0!==H&&void 0!==H[1]?H[1]:""),ye=(0,d.getPreviewSize)(ne,void 0!==D&&void 0!==D[2]?D[2]:"",void 0!==B&&void 0!==B[2]?B[2]:"",void 0!==H&&void 0!==H[2]?H[2]:""),he=(0,d.getPreviewSize)(ne,void 0!==D&&void 0!==D[3]?D[3]:"",void 0!==B&&void 0!==B[3]?B[3]:"",void 0!==H&&void 0!==H[3]?H[3]:""),Te=(0,d.getPreviewSize)(ne,void 0!==Y&&void 0!==Y[0]?Y[0]:"",void 0!==W&&void 0!==W[0]?W[0]:"",void 0!==K&&void 0!==K[0]?K[0]:""),ke=(0,d.getPreviewSize)(ne,void 0!==Y&&void 0!==Y[1]?Y[1]:"",void 0!==W&&void 0!==W[1]?W[1]:"",void 0!==K&&void 0!==K[1]?K[1]:""),Se=(0,d.getPreviewSize)(ne,void 0!==Y&&void 0!==Y[2]?Y[2]:"",void 0!==W&&void 0!==W[2]?W[2]:"",void 0!==K&&void 0!==K[2]?K[2]:""),Oe=(0,d.getPreviewSize)(ne,void 0!==Y&&void 0!==Y[3]?Y[3]:"",void 0!==W&&void 0!==W[3]?W[3]:"",void 0!==K&&void 0!==K[3]?K[3]:""),Me=(0,d.getPreviewSize)(ne,void 0!==G&&void 0!==G[0]?G[0]:"",void 0!==$&&void 0!==$[0]?$[0]:"",void 0!==q&&void 0!==q[0]?q[0]:""),xe=(0,d.getPreviewSize)(ne,void 0!==G&&void 0!==G[1]?G[1]:"",void 0!==$&&void 0!==$[1]?$[1]:"",void 0!==q&&void 0!==q[1]?q[1]:""),Ee=(0,d.getPreviewSize)(ne,void 0!==G&&void 0!==G[2]?G[2]:"",void 0!==$&&void 0!==$[2]?$[2]:"",void 0!==q&&void 0!==q[2]?q[2]:""),we=(0,d.getPreviewSize)(ne,void 0!==G&&void 0!==G[3]?G[3]:"",void 0!==$&&void 0!==$[3]?$[3]:"",void 0!==q&&void 0!==q[3]?q[3]:""),Pe=(0,d.mouseOverVisualizer)(),Ce=(0,d.mouseOverVisualizer)(),Ve=(0,d.mouseOverVisualizer)(),Fe=(0,d.mouseOverVisualizer)(),ze=g()({[`kb-count-up-${v}`]:v,"kb-count-up":!0});let _e=!0===E?",":E;_e=!1===_e?"":_e;const Ne=(0,m.useBlockProps)({});return(0,t.createElement)("div",{...Ne},c&&(0,t.createElement)(r.Fragment,null,(0,t.createElement)(m.BlockControls,null,(0,t.createElement)(i.CopyPasteAttributes,{attributes:n,excludedAttrs:["start","end","endDecimal","title","suffix","prefix"],defaultAttributes:l.attributes,blockSlug:l.name,onPaste:e=>b(e)})),(0,t.createElement)(u,{setAttributes:b,attributes:n,numberPaddingMouseOver:Pe,numberMarginMouseOver:Ce,titlePaddingMouseOver:Ve,titleMarginMouseOver:Fe})),w&&P[0].google&&(0,t.createElement)(i.WebfontLoader,{config:le}),z[0].google&&(0,t.createElement)(i.WebfontLoader,{config:ue}),(0,t.createElement)("div",{className:ze},(0,t.createElement)("div",{className:"kb-count-up-number",style:{fontWeight:z[0].weight,fontStyle:z[0].style,color:(0,d.KadenceColorOutput)(N),fontSize:(0,d.getFontSizeOptionOutput)(z[0].size[0],z[0].sizeType),lineHeight:z[0].lineHeight&&z[0].lineHeight[0]?z[0].lineHeight[0]+z[0].lineType:void 0,letterSpacing:z[0].letterSpacing+"px",fontFamily:z[0].family?z[0].family:"",minHeight:void 0!==A&&void 0!==A[0]?A[0]+"px":void 0,textAlign:pe,paddingTop:""!==be?(0,d.getSpacingOptionOutput)(be,U):void 0,paddingRight:""!==ve?(0,d.getSpacingOptionOutput)(ve,U):void 0,paddingBottom:""!==ye?(0,d.getSpacingOptionOutput)(ye,U):void 0,paddingLeft:""!==he?(0,d.getSpacingOptionOutput)(he,U):void 0,marginTop:ce?(0,d.getSpacingOptionOutput)(ce,L):void 0,marginRight:ge?(0,d.getSpacingOptionOutput)(ge,L):void 0,marginBottom:me?(0,d.getSpacingOptionOutput)(me,L):void 0,marginLeft:fe?(0,d.getSpacingOptionOutput)(fe,L):void 0}},(0,t.createElement)(p.ZP,{start:h,end:T,duration:x,separator:_e,decimal:Q||void 0,decimals:Q&&X?X:void 0,prefix:O,suffix:M}),(0,t.createElement)(i.SpacingVisualizer,{type:"outside",forceShow:Ce.isMouseOver,spacing:[(0,d.getSpacingOptionOutput)(ce,L),(0,d.getSpacingOptionOutput)(ge,L),(0,d.getSpacingOptionOutput)(me,L),(0,d.getSpacingOptionOutput)(fe,L)]}),(0,t.createElement)(i.SpacingVisualizer,{type:"inside",forceShow:Pe.isMouseOver,spacing:[(0,d.getSpacingOptionOutput)(be,U),(0,d.getSpacingOptionOutput)(ve,U),(0,d.getSpacingOptionOutput)(ye,U),(0,d.getSpacingOptionOutput)(he,U)]})),w&&(0,t.createElement)(oe,{className:"kb-count-up-wrap",style:{position:"relative",paddingTop:""!==Me?(0,d.getSpacingOptionOutput)(Me,Z):void 0,paddingRight:""!==xe?(0,d.getSpacingOptionOutput)(xe,Z):void 0,paddingBottom:""!==Ee?(0,d.getSpacingOptionOutput)(Ee,Z):void 0,paddingLeft:""!==we?(0,d.getSpacingOptionOutput)(we,Z):void 0,marginTop:Te?(0,d.getSpacingOptionOutput)(Te,J):void 0,marginRight:ke?(0,d.getSpacingOptionOutput)(ke,J):void 0,marginBottom:Se?(0,d.getSpacingOptionOutput)(Se,J):void 0,marginLeft:Oe?(0,d.getSpacingOptionOutput)(Oe,J):void 0,textTransform:P[0].textTransform?P[0].textTransform:void 0}},(0,t.createElement)(m.RichText,{tagName:"span",className:"kb-count-up-title",value:y,onChange:e=>b({title:e}),placeholder:(0,o.__)("Type Here...","kadence-blocks"),style:{display:"block",fontWeight:P[0].weight,fontStyle:P[0].style,color:(0,d.KadenceColorOutput)(V),fontSize:(0,d.getFontSizeOptionOutput)(P[0].size[0],P[0].sizeType),lineHeight:P[0].lineHeight&&P[0].lineHeight[0]?P[0].lineHeight[0]+P[0].lineType:void 0,letterSpacing:P[0].letterSpacing+"px",fontFamily:P[0].family?P[0].family:"",minHeight:void 0!==F&&void 0!==F[0]?F[0]+"px":void 0,textTransform:P[0].textTransform?P[0].textTransform:void 0,textAlign:de}}),(0,t.createElement)(i.SpacingVisualizer,{type:"outside",forceShow:Fe.isMouseOver,spacing:[(0,d.getSpacingOptionOutput)(Te,L),(0,d.getSpacingOptionOutput)(ke,L),(0,d.getSpacingOptionOutput)(Se,L),(0,d.getSpacingOptionOutput)(Oe,L)]}),(0,t.createElement)(i.SpacingVisualizer,{type:"inside",forceShow:Ve.isMouseOver,spacing:[(0,d.getSpacingOptionOutput)(Me,U),(0,d.getSpacingOptionOutput)(xe,U),(0,d.getSpacingOptionOutput)(Ee,U),(0,d.getSpacingOptionOutput)(we,U)]}))))},save:function({attributes:e}){const{uniqueID:a,title:n,start:i,end:o,startDecimal:r,endDecimal:l,prefix:s,suffix:u,duration:d,separator:p,titleFont:c,displayTitle:f,decimal:b,decimalSpaces:v}=e,y=g()({[`kb-count-up-${a}`]:a,"kb-count-up":!0}),h=c[0].htmlTag&&"heading"!==c[0].htmlTag?c[0].htmlTag:"h"+c[0].level;let T=o;0===o&&l&&(T=l);const k=m.useBlockProps.save({className:y});return(0,t.createElement)("div",{...k,"data-start":i,"data-end":T,"data-prefix":s,"data-suffix":u,"data-duration":d,"data-separator":p,"data-decimal":b||void 0,"data-decimal-spaces":b?v:void 0},(0,t.createElement)("div",{className:"kb-count-up-process kb-count-up-number"}),n&&f&&(0,t.createElement)(m.RichText.Content,{tagName:h,className:"kb-count-up-title",value:n}))},deprecated:y,example:{attributes:{title:(0,o.__)("My count up title","kadence-blocks")}}})})(),(this.kadence=this.kadence||{})["blocks-countup"]=n})();