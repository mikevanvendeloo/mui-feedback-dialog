!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@material-ui/core"),require("@material-ui/core/SvgIcon")):"function"==typeof define&&define.amd?define("mui-feedback-dialog",["react","@material-ui/core","@material-ui/core/SvgIcon"],t):"object"==typeof exports?exports["mui-feedback-dialog"]=t(require("react"),require("@material-ui/core"),require("@material-ui/core/SvgIcon")):e["mui-feedback-dialog"]=t(e.react,e["@material-ui/core"],e["@material-ui/core/SvgIcon"])}(window,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(t,n){t.exports=e},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default.memo(i.default.forwardRef((function(t,n){return i.default.createElement(a.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=a.default.muiName,n};var o=r(n(11)),i=r(n(0)),a=r(n(5))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.attachHandlers=void 0,t.attachHandlers=(e,t,n,r,o)=>{const i=e=>{const n=(e=e||window.event).relatedTarget||e.toElement;n&&"HTML"!==n.nodeName&&n!==t.current||o(e)};return e.current.addEventListener("mousedown",n),t.current.addEventListener("mousemove",r),t.current.addEventListener("mouseup",o),t.current.addEventListener("mouseout",i),e.current.addEventListener("touchstart",n),t.current.addEventListener("touchmove",r),t.current.addEventListener("touchend",o),t.current.addEventListener("touchcancel",o),()=>{e.current&&(e.current.removeEventListener("mousedown",n),t.current.removeEventListener("mousemove",r),t.current.removeEventListener("mouseup",o),t.current.removeEventListener("mouseout",i),e.current.removeEventListener("touchstart",n),t.current.removeEventListener("touchmove",r),t.current.removeEventListener("touchend",o),t.current.removeEventListener("touchcancel",o))}}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useFeedbackDialogController=void 0;const r=n(0),o=n(15),i=n(17),a=n(18),u=n(19);t.useFeedbackDialogController=function({onClose:e,open:t,onSubmit:n,useScreencapture:c,attachScreenshotOnOpen:l=!1}){const[s,d]=r.useState(!1),[f,h]=r.useState(""),[m,p]=r.useState(""),[g,v]=r.useState(l),y=r.useRef(null),b=r.useRef(null),w=r.useRef(null),x=r.useRef(null),[E,P]=r.useState("pen"),C=()=>{d(!1);return Promise.resolve().then(()=>c?o.takeScreenshotCanvas(y.current):Promise.reject()).catch(()=>o.createHTMLImageCanvas(y.current)).catch(()=>v(!1)).then(()=>{b.current.width=y.current.width,b.current.height=y.current.height,b.current.style.width=y.current.style.width,b.current.getContext("2d").setTransform(y.current.getContext("2d").getTransform()),d(!0)})};i.usePencil("pen"===E&&b,x,w),u.useBlackBox("blackbox"===E&&b,x,w),a.useEraser("eraser"===E&&b,x,w),r.useEffect(()=>(t&&(h(""),p(""),v(l),y.current&&(y.current.getContext("2d").clearRect(0,0,y.current.clientWidth,y.current.clientHeight),b.current.getContext("2d").clearRect(0,0,y.current.clientWidth,y.current.clientHeight)),l?C().catch(()=>{v(!1),d(!0)}):d(!0)),()=>{v(!1),d(!1)}),[t]);const M=e=>{w.current&&(w.current.style.visibility="rectangle"===e?"hidden":"visible",w.current.style.width=("eraser"===e?10:3)+"px",w.current.style.border="pen"===e?"none":"solid 1px black",w.current.style.height=("eraser"===e?10:3)+"px",w.current.style.borderRadius="pen"===e?"50%":"0",w.current.style.backgroundColor="pen"===e?"red":"white"),P(e)};return{canSubmit:f.length,description:f,email:m,onEmailChange:e=>p(e.target.value),onDescriptionChange:e=>h(e.target.value),includeSS:g,closeDialog:e,submit:()=>{if(f.length){let t=null;if(g){y.current.getContext("2d").drawImage(b.current,0,0),t=y.current.toDataURL("webp",.9)}n&&n({description:f,screenshot:t,email:m}),e()}},canvasRef:y,penRef:w,dialogRef:x,drawCanvasRef:b,onSSChange:e=>{const t=e.target.checked;C().then(()=>{v(t)})},resetDrawing:()=>{if(b.current){b.current.getContext("2d").clearRect(0,0,b.current.width,b.current.height)}},useEraser:()=>M("eraser"),useBlackBox:()=>M("blackbox"),usePen:()=>M("pen"),isBlackboxActive:"blackbox"===E,isPenActive:"pen"===E,isEraserActive:"eraser"===E,dialogVisible:s}}},function(e,t,n){e.exports=n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);Object.defineProperty(t,"FeedbackDialog",{enumerable:!0,get:function(){return r.FeedbackDialog}});var o=n(6);Object.defineProperty(t,"useFeedbackDialogController",{enumerable:!0,get:function(){return o.useFeedbackDialogController}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackDialog=void 0;const o=r(n(0)),i=n(4),a=r(n(10)),u=r(n(12)),c=n(13),l=r(n(14)),s=n(6),d=r(n(20)),f=n(4),h={title:"Give Feedback",cancel:"Cancel",submit:"Submit Feedback",contentText:"Thank you for giving feedback. Please describe any issue as detailed as possible. If it is okay to contact you for more details, please write down your email address as well.",feedbackLabel:"Description",emailLabel:"Email Address",emailError:"Please enter a valid email address.",includeScreenshot:"Attach Screenshot",tooltipPen:"Pen",tooltipEraser:"Eraser",tooltipBlackbox:"Black Rectangle",tooltipReset:"Reset Drawings",tooltipSubmit:"Please enter a short description.",screenshotInfo:'If you select "Attach Screenshot", the browser will ask you to share your screen. Please select the current browser tab, of which a single screenshot will be taken and displayed for preview below.'},m=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;t.FeedbackDialog=({open:e,onClose:t,attachScreenshotOnOpen:n,text:r,onSubmit:p,className:g,noScreenshot:v,useScreencapture:y})=>{const{closeDialog:b,dialogVisible:w,submit:x,canSubmit:E,includeSS:P,onSSChange:C,canvasRef:M,drawCanvasRef:k,dialogRef:S,resetDrawing:L,useEraser:D,usePen:R,isPenActive:T,isEraserActive:_,isBlackboxActive:B,useBlackBox:j,description:A,onDescriptionChange:O,email:I,onEmailChange:H,penRef:U}=s.useFeedbackDialogController({onClose:t,open:e,onSubmit:p,useScreencapture:!v&&y,attachScreenshotOnOpen:!v&&n}),F={...h,...r||{}};return o.default.createElement(i.Dialog,{open:e,maxWidth:"md",onClose:b,ref:S,style:{marginTop:48,visibility:w?"visible":"hidden"},classes:{container:g}},o.default.createElement(i.DialogTitle,null,F.title),o.default.createElement(i.DialogContent,null,o.default.createElement(i.DialogContentText,null,F.contentText),o.default.createElement(i.TextField,{style:{marginBottom:8},autoFocus:!0,value:I,onChange:H,error:Boolean(I)&&!m.test(I),helperText:I&&!m.test(I)&&F.emailError,margin:"dense",id:"email",InputLabelProps:{shrink:!0},label:F.emailLabel,fullWidth:!0}),o.default.createElement(i.TextField,{style:{overflowY:"visible",height:"auto"},autoFocus:!0,value:A,onChange:O,margin:"dense",id:"description",InputLabelProps:{shrink:!0},label:F.feedbackLabel,multiline:!0,required:!0,rows:4,fullWidth:!0}),!v&&y&&!P&&o.default.createElement(i.Box,{style:{display:"flex",padding:8,margin:"8px 0",background:f.colors.blue[50],color:f.colors.blue[900]}},o.default.createElement(d.default,{style:{marginRight:8}}),o.default.createElement(i.Typography,null,F.screenshotInfo)),!v&&o.default.createElement(i.Box,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:4}},o.default.createElement(i.FormControlLabel,{control:o.default.createElement(i.Checkbox,{checked:P,onChange:C,name:"checkedB",color:"primary"}),label:F.includeScreenshot}),P&&o.default.createElement(i.ButtonGroup,{size:"small"},o.default.createElement(i.Tooltip,{arrow:!0,title:F.tooltipPen},o.default.createElement(i.Button,{onClick:R,variant:T?"contained":"outlined",color:T?"primary":"default",disableElevation:!0,disableRipple:!0},o.default.createElement(a.default,null))),o.default.createElement(i.Tooltip,{arrow:!0,title:F.tooltipEraser},o.default.createElement(i.Button,{onClick:D,variant:_?"contained":"outlined",color:_?"primary":"default",disableElevation:!0,disableRipple:!0},o.default.createElement(c.EraserIcon,null))),o.default.createElement(i.Tooltip,{arrow:!0,title:F.tooltipBlackbox},o.default.createElement(i.Button,{onClick:j,variant:B?"contained":"outlined",color:B?"primary":"default",disableElevation:!0,disableRipple:!0},o.default.createElement(l.default,null))),o.default.createElement(i.Tooltip,{arrow:!0,title:F.tooltipReset},o.default.createElement(i.Button,{onClick:L},o.default.createElement(u.default,null))))),o.default.createElement(i.Collapse,{in:P,timeout:"auto",enter:!1,style:{display:"flex",justifyContent:"center"}},o.default.createElement("div",{style:{cursor:"none",border:"solid 1px black",position:"relative",overflow:"hidden"}},o.default.createElement("div",{ref:U,style:{position:"absolute",pointerEvents:"none",zIndex:1,transform:"translate(-50%, -50%)",visibility:"visible",width:3,height:3,borderRadius:"50%",backgroundColor:"red"}}),o.default.createElement("canvas",{ref:M,width:550,height:350}),o.default.createElement("canvas",{style:{position:"absolute",top:0,left:0},ref:k,width:550,height:350})))),o.default.createElement(i.DialogActions,null,o.default.createElement(i.Button,{onClick:b,color:"default",className:"cancel-button"},F.cancel),o.default.createElement(i.Tooltip,{arrow:!0,title:F.tooltipSubmit,placement:"top",disableFocusListener:!!E,disableHoverListener:!!E,disableTouchListener:!!E},o.default.createElement(i.Button,{onClick:x,disabled:!E||I&&!m.test(I),component:"div",color:"primary",className:"submit-button"},F.submit))))}},function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,r(n(2)).default)(o.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.default=i},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,r(n(2)).default)(o.default.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=i},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.EraserIcon=void 0;const o=r(n(5)),i=r(n(0));t.EraserIcon=e=>i.default.createElement(o.default,Object.assign({viewBox:"0 0 500 500",width:"24",height:"24"},e),i.default.createElement("g",{style:{strokeLinecap:"round",fill:"currentColor",stroke:"currentColor",strokeWidth:20}},i.default.createElement("path",{d:"M 185.739 20.927 L 335.739 20.927 C 343.664 21.146 351.694 22.962 359.03 26.012 C 366.367 29.062 373.011 33.347 378.165 38.501 C 383.32 43.655 387.604 50.299 390.654 57.636 C 391.113 58.739 393.006 66.806 394.09 80.254 L 398.169 389.619 C 284.959 503.246 403.401 384.4 295.646 492.952 L 185.739 490.927 C 177.814 490.709 169.784 488.893 162.448 485.842 C 155.111 482.792 148.467 478.507 143.313 473.353 C 138.158 468.199 133.874 461.555 130.824 454.218 C 127.774 446.881 125.957 438.852 125.739 430.927 L 125.739 80.927 C 125.957 73.002 127.774 64.972 130.824 57.636 C 133.874 50.299 138.158 43.655 143.313 38.501 C 148.467 33.346 155.111 29.062 162.448 26.012 C 169.784 22.962 177.814 21.145 185.739 20.927 Z M 377.517 245.011 L 145.334 250.737 L 145.739 430.927 C 145.521 436.809 146.503 441.933 148.513 446.56 C 150.523 451.187 153.561 455.317 157.455 459.211 C 161.349 463.105 166.289 465.333 170.916 467.343 C 175.543 469.354 179.857 471.145 185.739 470.927 L 287.951 471.737 C 378.273 381.036 289.307 470.752 378.979 379.899 L 377.517 245.011 Z",transform:"matrix(0.707107, 0.707106, -0.707106, 0.707107, 248.084396, -109.411057)"})))},function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,r(n(2)).default)(o.default.createElement("path",{d:"M6 6h12v12H6z"}),"Stop");t.default=i},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createHTMLImageCanvas=t.takeScreenshotCanvas=void 0;const o=r(n(16));async function i(){const e=screen.width*(window.devicePixelRatio||1),t=screen.height*(window.devicePixelRatio||1),n=[];let r;try{r=await function(e){const t=navigator;if(t.mediaDevices&&t.mediaDevices.getDisplayMedia)return t.mediaDevices.getDisplayMedia(e);if(t.getDisplayMedia)return t.getDisplayMedia(e);if(t.webkitGetDisplayMedia)return t.webkitGetDisplayMedia(e);if(t.mozGetDisplayMedia)return t.mozGetDisplayMedia(e);throw new Error("getDisplayMedia is not defined")}({audio:!1,video:{displaySurface:"browser",width:e,height:t,frameRate:4}})}catch(e){n.push(e)}try{r=await function(e){const t=navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia)return t.mediaDevices.getUserMedia(e);if(t.getUserMedia)return t.getUserMedia(e);if(t.webkitGetUserMedia)return t.webkitGetUserMedia(e);if(t.mozGetUserMedia)return t.mozGetUserMedia(e);throw new Error("getUserMedia is not defined")}({audio:!1,video:{mandatory:{chromeMediaSource:"tab",minWidth:e,maxWidth:e,minHeight:t,maxHeight:t}}})}catch(e){n.push(e)}return n.length&&console.debug(...n),r}t.takeScreenshotCanvas=async function(e){const t=await i();if(!t)return Promise.reject();const n=document.createElement("video"),r=await new Promise(r=>{n.onloadedmetadata=async()=>{n.play(),await new Promise(e=>setTimeout(e,251)),n.pause();const t=e.getContext("2d");e.width=n.videoWidth,e.height=n.videoHeight,t.drawImage(n,0,0,n.videoWidth,n.videoHeight),n.videoWidth>n.videoHeight?e.style.width="100%":e.style.width=Math.ceil(450/n.videoHeight*n.videoWidth)+"px",r(e)},n.srcObject=t});return t.getTracks().forEach((function(e){e.stop()})),r},t.createHTMLImageCanvas=async function(e){const t=document.documentElement,n=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),i=await o.default.toPng(t);return new Promise(t=>{const o=new Image;o.onload=function(){const i=e.getContext("2d");e.width=n,e.height=r,i.drawImage(o,0,0),e.style.width=n>r?"100%":Math.ceil(450/r*n)+"px",t(e)},o.src=i})}},function(e,t,n){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n=t(e).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){u.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise((function(t){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(n?t(n):i("cannot fetch resource: "+e+", status: "+r.status));var o=new FileReader;o.onloadend=function(){var e=o.result.split(/,/)[1];t(e)},o.readAsDataURL(r.response)},r.ontimeout=function(){n?t(n):i("timeout of 30000ms occured while fetching resource: "+e)},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send(),u.impl.options.imagePlaceholder){var o=u.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(n=o[1])}function i(e){console.error(e),t("")}}))},uid:(e=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,i){return function(){return!t(e)}()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r}))},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){return o instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o)},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),a={imagePlaceholder:void 0,cacheBust:!1},u={toSvg:c,toPng:function(e,t){return l(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return l(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return l(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return l(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function c(e,t){return function(e){void 0===e.imagePlaceholder?u.impl.options.imagePlaceholder=a.imagePlaceholder:u.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?u.impl.options.cacheBust=a.cacheBust:u.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return function e(t,r,o){return o||!r||r(t)?Promise.resolve(t).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(e){return i(t,e,r)})).then((function(e){return function(e,t){return t instanceof Element?Promise.resolve().then(r).then(o).then(i).then(a).then((function(){return t})):t;function r(){var r,o;r=window.getComputedStyle(e),o=t.style,r.cssText?o.cssText=r.cssText:function(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}(r,o)}function o(){[":before",":after"].forEach((function(r){!function(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""===i||"none"===i)return;var a=n.uid();t.className=t.className+" "+a;var u=document.createElement("style");u.appendChild(function(e,t,r){var o="."+e+":"+t,i=r.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(r):function(e){return n.asArray(e).map((function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")})).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(a,r,o)),t.appendChild(u)}(r)}))}function i(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function a(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))}}(t,e)})):Promise.resolve();function i(t,r,o){var i=t.childNodes;return 0===i.length?Promise.resolve(r):a(r,n.asArray(i),o).then((function(){return r}));function a(t,n,r){var o=Promise.resolve();return n.forEach((function(n){o=o.then((function(){return e(n,r)})).then((function(e){e&&t.appendChild(e)}))})),o}}}(e,t.filter,!0)})).then(s).then(d).then((function(e){t.bgcolor&&(e.style.backgroundColor=t.bgcolor);t.width&&(e.style.width=t.width+"px");t.height&&(e.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]}));return e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||n.width(e),t.height||n.height(e))}))}function l(e,t){return c(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function s(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function d(e){return i.inlineAll(e).then((function(){return e}))}e.exports=u}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePencil=void 0;const r=n(0),o=n(3);t.usePencil=(e,t,n)=>{let i=null;r.useEffect(()=>{if(e.current){const r=e.current.getContext("2d"),a=t=>{const{top:n,left:r,width:o}=e.current.getBoundingClientRect(),i=o/e.current.width,a=t.touches?t.touches[0].clientX:t.clientX,u=t.touches?t.touches[0].clientY:t.clientY;return{x:(a-r)/i,y:(u-n)/i,unscaled:{x:a-r,y:u-n}}},u=e=>{0===e.button&&(e.preventDefault(),e.stopPropagation(),i=a(e))},c=e=>{if(i&&(s(i,a(e)),i=a(e)),n.current){const{unscaled:t}=a(e);n.current.style.left=t.x+"px",n.current.style.top=t.y+"px"}},l=e=>{c(e),i=null},s=(t,{x:n,y:o})=>{const i=e.current.getBoundingClientRect().width/e.current.width;r.save(),r.lineJoin="round",r.lineCap="round",r.beginPath(),r.lineWidth=2/i,r.strokeStyle="red",r.globalCompositeOperation="source-over",r.moveTo(t.x,t.y),r.lineTo(n,o),r.closePath(),r.stroke(),r.restore()};return o.attachHandlers(e,t,u,c,l)}},[e&&e.current,t&&t.current])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useEraser=void 0;const r=n(0),o=n(3);t.useEraser=(e,t,n)=>{let i=null;r.useEffect(()=>{if(e.current){const r=e.current.getContext("2d"),a=t=>{const{top:n,left:r,width:o}=e.current.getBoundingClientRect(),i=o/e.current.width,a=t.touches?t.touches[0].clientX:t.clientX,u=t.touches?t.touches[0].clientY:t.clientY;return{x:(a-r)/i,y:(u-n)/i,unscaled:{x:a-r,y:u-n}}},u=e=>{0===e.button&&(e.preventDefault(),e.stopPropagation(),i=a(e))},c=e=>{if(i&&(s(i,a(e)),i=a(e)),n.current){const{unscaled:t}=a(e);n.current.style.left=t.x+"px",n.current.style.top=t.y+"px"}},l=e=>{c(e),i=null},s=(t,{x:n,y:o})=>{const i=10/(e.current.getBoundingClientRect().width/e.current.width),a=t.x-n,u=t.y-o,c=i/2;if(Math.abs(a)>Math.abs(u)){const e=t.x<n?t.x:n,a=Math.round(t.x<n?n:t.x),u=t.x<n?t.y:o,l=(Math.round(t.x<n?o:t.y)-u)/(a-e);if(0===Math.round(l*(a-e)))r.clearRect(e-c,u-c,a-e+i,i);else{let t=0,n=0,o=e,s=Math.round(u);for(;e+t<a;)t+=1,s!==Math.round(l*t+u)&&(r.clearRect(o-c,s-c,t-n+c,i),s=Math.round(l*t+u),o+=t-n,n=t);t!==n&&r.clearRect(o-c,s-c,t-n+c,i)}}else{const e=t.y<o?t.x:n,a=Math.round(t.y<o?n:t.x),u=t.y<o?t.y:o,l=Math.round(t.y<o?o:t.y),s=(a-e)/(l-u);if(0===s)r.clearRect(e-c,u-c,i,l-u+i);else{let t=0,n=0,o=Math.round(e),a=u;for(;u+t<l;)t+=1,o!==Math.round(s*t+e)&&(r.clearRect(o-c,a-c,i,t-n+c),o=Math.round(s*t+e),a+=t-n,n=t);t!==n&&r.clearRect(o-c,a-c,i,t-n+c)}}};return o.attachHandlers(e,t,u,c,l)}},[e&&e.current,t&&t.current])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useBlackBox=void 0;const r=n(0),o=n(3);t.useBlackBox=(e,t,n)=>{let i=null,a=null;r.useEffect(()=>{if(e.current){const r=e.current.getContext("2d"),u=t=>{const{top:n,left:r,width:o}=e.current.getBoundingClientRect(),i=o/e.current.width,a=t.touches?t.touches[0].clientX:t.clientX,u=t.touches?t.touches[0].clientY:t.clientY;return{x:(a-r)/i,y:(u-n)/i,unscaled:{x:a-r,y:u-n}}},c=t=>{0===t.button&&(t.preventDefault(),t.stopPropagation(),i=u(t),a=r.getImageData(0,0,e.current.width,e.current.height))},l=e=>{if(i&&(r.putImageData(a,0,0),d(u(e))),n.current){const{unscaled:t}=u(e);n.current.style.left=t.x+"px",n.current.style.top=t.y+"px"}},s=e=>{l(e),i=null,a=null},d=({x:e,y:t})=>{const n=e<i.x?e:i.x,o=t<i.y?t:i.y,a=Math.abs(i.x-e),u=Math.abs(i.y-t);r.save(),r.fillStyle="black",r.fillRect(n,o,a,u),r.restore()};return o.attachHandlers(e,t,c,l,s)}},[e&&e.current,t&&t.current])}},function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,r(n(2)).default)(o.default.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.default=i}])}));
//# sourceMappingURL=index.js.map