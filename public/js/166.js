"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[166],{3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},3166:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(821),o=["disabled"],i=(0,r.createElementVNode)("div",{class:"mt-8 space-y-2"},[(0,r.createElementVNode)("div",{class:"dark:text-white"}," Are you sure want to empty the recycle bin? ")],-1),a={class:"mt-8"};var u=n(853);const l=(0,r.defineComponent)({components:{Modal:u.Z},props:{disabled:Boolean},data:function(){return{isOpen:(0,r.ref)(!1)}},methods:{openModal:function(){this.isOpen=!0},closeModal:function(){this.isOpen=!1},empty:function(){var e=this;this.$inertia.delete(route("trash.empty"),{onSuccess:function(){return e.isOpen=!1}})}}});const s=(0,n(3744).Z)(l,[["render",function(e,t,n,u,l,s){var c=(0,r.resolveComponent)("modal");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("button",{onClick:t[0]||(t[0]=function(){return e.openModal&&e.openModal.apply(e,arguments)}),disabled:e.disabled,class:(0,r.normalizeClass)([{"opacity-25":e.disabled},"px-4 py-2 text-white transition bg-gray-800 rounded-xl active:hover:scale-95"])}," Delete all ",10,o),(0,r.createVNode)(c,{title:"Empty Recycle Bin",onClose:e.closeModal,show:e.isOpen},{default:(0,r.withCtx)((function(){return[i,(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("button",{onClick:t[1]||(t[1]=function(){return e.empty&&e.empty.apply(e,arguments)}),type:"button",class:"px-4 py-2 text-white transition bg-gray-800 rounded-xl active:hover:scale-95"}," Delete all ")])]})),_:1},8,["onClose","show"])],64)}]])},853:(e,t,n)=>{n.d(t,{Z:()=>ye});var r,o,i=n(821),a={class:"fixed inset-0 z-10 overflow-hidden"},u={class:"min-h-screen px-4 text-center"},l=(0,i.createElementVNode)("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"},"​",-1),s={class:"inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-gray-900"};function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function v(e,t){if(e in t){for(var n=t[e],r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return"function"==typeof n?n.apply(void 0,o):n}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,v),a}function m(e){var t,n,i=e.visible,a=void 0===i||i,u=e.features,l=void 0===u?r.None:u,s=d(e,["visible","features"]);return a||l&r.Static&&s.props.static?h(s):l&r.RenderStrategy?v(null==(t=s.props.unmount)||t?o.Unmount:o.Hidden,((n={})[o.Unmount]=function(){return null},n[o.Hidden]=function(){return h(c({},s,{props:c({},s.props,{hidden:!0,style:{display:"none"}})}))},n)):h(s)}function h(e){var t,n=e.props,r=e.attrs,o=e.slots,a=e.slot,u=e.name,l=function(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),o=p(t);!(n=o()).done;){var i=n.value;i in r&&delete r[i]}return r}(n,["unmount","static"]),s=l.as,c=d(l,["as"]),f=null==o.default?void 0:o.default(a);if("template"===s){if(Object.keys(c).length>0||Object.keys(r).length>0){var v=null!=f?f:[],m=v[0],h=v.slice(1);if(null==(t=m)||"string"!=typeof t.type&&"object"!=typeof t.type&&"function"!=typeof t.type||h.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+u+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(r)).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneVNode)(m,c)}return Array.isArray(f)&&1===f.length?f[0]:f}return(0,i.h)(s,c,f)}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}));var y=0;function g(){return++y}function b(e){var t;return null==e||null==e.value?null:null!=(t=e.value.$el)?t:e.value}var w,E,S=Symbol("Context");function C(){return(0,i.inject)(S,null)}function O(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=p(e.splice(0));!(t=n()).done;){var r=t.value;r()}}};return t}function A(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function x(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function T(e,t,n,r,o,i){var a,u,l=O(),s=void 0!==i?(a=i,u={called:!1},function(){if(!u.called)return u.called=!0,a.apply(void 0,arguments)}):function(){};return x.apply(void 0,[e].concat(o)),A.apply(void 0,[e].concat(t,n)),l.nextFrame((function(){x.apply(void 0,[e].concat(n)),A.apply(void 0,[e].concat(r)),l.add(function(e,t){var n=O();if(!e)return n.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),i=o[0],a=o[1];return 0!==i?n.setTimeout((function(){return t(E.Finished)}),i+a):t(E.Finished),n.add((function(){return t(E.Cancelled)})),n.dispose}(e,(function(n){return x.apply(void 0,[e].concat(r,t)),A.apply(void 0,[e].concat(o)),s(n)})))})),l.add((function(){return x.apply(void 0,[e].concat(t,n,r,o))})),l.add((function(){return s(E.Cancelled)})),l.dispose}function F(e){return void 0===e&&(e=""),e.split(" ").filter((function(e){return e.trim().length>1}))}!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(w||(w={})),function(e){e.Finished="finished",e.Cancelled="cancelled"}(E||(E={}));var k,D=Symbol("TransitionContext");!function(e){e.Visible="visible",e.Hidden="hidden"}(k||(k={}));var j=Symbol("NestingContext");function N(e){return"children"in e?N(e.children):e.value.filter((function(e){return e.state===k.Visible})).length>0}function L(e){var t=(0,i.ref)([]),n=(0,i.ref)(!1);function r(r,i){var a;void 0===i&&(i=o.Hidden);var u=t.value.findIndex((function(e){return e.id===r}));-1!==u&&(v(i,((a={})[o.Unmount]=function(){t.value.splice(u,1)},a[o.Hidden]=function(){t.value[u].state=k.Hidden},a)),!N(t)&&n.value&&(null==e||e()))}return(0,i.onMounted)((function(){return n.value=!0})),(0,i.onUnmounted)((function(){return n.value=!1})),{children:t,register:function(e){var n=t.value.find((function(t){return t.id===e}));return n?n.state!==k.Visible&&(n.state=k.Visible):t.value.push({id:e,state:k.Visible}),function(){return r(e,o.Unmount)}},unregister:r}}var R,V=r.RenderStrategy,$=(0,i.defineComponent)({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:function(){return!0},afterEnter:function(){return!0},beforeLeave:function(){return!0},afterLeave:function(){return!0}},render:function(){var e=this;if(this.renderAsRoot)return(0,i.h)(P,c({},this.$props,{onBeforeEnter:function(){return e.$emit("beforeEnter")},onAfterEnter:function(){return e.$emit("afterEnter")},onBeforeLeave:function(){return e.$emit("beforeLeave")},onAfterLeave:function(){return e.$emit("afterLeave")}}),this.$slots);return m({props:c({},d(this.$props,["appear","show","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),{ref:"el"}),slot:{},slots:this.$slots,attrs:this.$attrs,features:V,visible:this.state===k.Visible,name:"TransitionChild"})},setup:function(e,t){var n=t.emit;if(null===(0,i.inject)(D,null)&&null!==C())return{renderAsRoot:!0};var r=(0,i.ref)(null),a=(0,i.ref)(k.Visible),u=(0,i.computed)((function(){return e.unmount?o.Unmount:o.Hidden})),l=function(){var e=(0,i.inject)(D,null);if(null===e)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}(),s=l.show,c=l.appear,d=function(){var e=(0,i.inject)(j,null);if(null===e)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}(),f=d.register,p=d.unregister,m={value:!0},h=g(),y={value:!1},O=L((function(){y.value||(a.value=k.Hidden,p(h),n("afterLeave"))}));(0,i.onMounted)((function(){var e=f(h);(0,i.onUnmounted)(e)})),(0,i.watchEffect)((function(){var e;u.value===o.Hidden&&h&&(s&&a.value!==k.Visible?a.value=k.Visible:v(a.value,((e={})[k.Hidden]=function(){return p(h)},e[k.Visible]=function(){return f(h)},e)))}));var A,x=F(e.enter),R=F(e.enterFrom),V=F(e.enterTo),$=F(e.entered),P=F(e.leave),B=F(e.leaveFrom),H=F(e.leaveTo);return(0,i.onMounted)((function(){(0,i.watchEffect)((function(){if(a.value===k.Visible){var e=b(r);if(e instanceof Comment&&""===e.data)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}}))})),(0,i.onMounted)((function(){(0,i.watch)([s,c],(function(e,t,o){!function(e){var t=m.value&&!c.value,o=b(r);o&&o instanceof HTMLElement&&(t||(y.value=!0,s.value&&n("beforeEnter"),s.value||n("beforeLeave"),e(s.value?T(o,x,R,V,$,(function(e){y.value=!1,e===E.Finished&&n("afterEnter")})):T(o,P,B,H,$,(function(e){y.value=!1,e===E.Finished&&(N(O)||(a.value=k.Hidden,p(h),n("afterLeave")))})))))}(o),m.value=!1}),{immediate:!0})})),(0,i.provide)(j,O),A=(0,i.computed)((function(){var e;return v(a.value,((e={})[k.Visible]=w.Open,e[k.Hidden]=w.Closed,e))})),(0,i.provide)(S,A),{el:r,renderAsRoot:!1,state:a}}}),P=(0,i.defineComponent)({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:function(){return!0},afterEnter:function(){return!0},beforeLeave:function(){return!0},afterLeave:function(){return!0}},render:function(){var e=this,t=this.$props,n=t.unmount,r=d(t,["show","appear","unmount"]),o={unmount:n};return m({props:c({},o,{as:"template"}),slot:{},slots:c({},this.$slots,{default:function(){return[(0,i.h)($,c({onBeforeEnter:function(){return e.$emit("beforeEnter")},onAfterEnter:function(){return e.$emit("afterEnter")},onBeforeLeave:function(){return e.$emit("beforeLeave")},onAfterLeave:function(){return e.$emit("afterLeave")}},e.$attrs,o,r),e.$slots.default)]}}),attrs:{},features:V,visible:this.state===k.Visible,name:"Transition"})},setup:function(e){var t=C(),n=(0,i.computed)((function(){var n;return null===e.show&&null!==t?v(t.value,((n={})[w.Open]=!0,n[w.Closed]=!1,n)):e.show}));(0,i.watchEffect)((function(){if(![!0,!1].includes(n.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')}));var r=(0,i.ref)(n.value?k.Visible:k.Hidden),o=L((function(){r.value=k.Hidden})),a={value:!0},u={show:n,appear:(0,i.computed)((function(){return e.appear||!a.value}))};return(0,i.onMounted)((function(){(0,i.watchEffect)((function(){a.value=!1,n.value?r.value=k.Visible:N(o)||(r.value=k.Hidden)}))})),(0,i.provide)(j,o),(0,i.provide)(D,u),{state:r,show:n}}});function B(e,t,n){"undefined"!=typeof window&&(0,i.watchEffect)((function(r){window.addEventListener(e,t,n),r((function(){window.removeEventListener(e,t,n)}))}))}function H(e,t){for(var n,r=p(e);!(n=r()).done;){if(n.value.contains(t))return!0}return!1}!function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(R||(R={}));var M,U,I,z,_=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function q(e){null==e||e.focus({preventScroll:!0})}function W(e,t){var n=Array.isArray(e)?e:function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(_))}(e),r=document.activeElement,o=function(){if(t&(M.First|M.Next))return I.Next;if(t&(M.Previous|M.Last))return I.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=function(){if(t&M.First)return 0;if(t&M.Previous)return Math.max(0,n.indexOf(r))-1;if(t&M.Next)return Math.max(0,n.indexOf(r))+1;if(t&M.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),a=t&M.NoScroll?{preventScroll:!0}:{},u=0,l=n.length,s=void 0;do{var c;if(u>=l||u+l<=0)return U.Error;var d=i+u;if(t&M.WrapAround)d=(d+l)%l;else{if(d<0)return U.Underflow;if(d>=l)return U.Overflow}null==(c=s=n[d])||c.focus(a),u+=o}while(s!==document.activeElement);return s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),U.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(M||(M={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(U||(U={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(I||(I={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(z||(z={}));var Z="body > *",G=new Set,Y=new Map;function K(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function J(e){var t=Y.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var Q,X=Symbol("StackContext");function ee(){return(0,i.inject)(X,(function(){}))}function te(e){var t=ee();(0,i.provide)(X,(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];null==e||e.apply(void 0,r),t.apply(void 0,r)}))}!function(e){e[e.AddElement=0]="AddElement",e[e.RemoveElement=1]="RemoveElement"}(Q||(Q={}));var ne=Symbol("ForcePortalRootContext");var re=(0,i.defineComponent)({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=t.attrs;return(0,i.provide)(ne,e.force),function(){return m({props:d(e,["force"]),slot:{},slots:n,attrs:r,name:"ForcePortalRoot"})}}});function oe(){var e=document.getElementById("headlessui-portal-root");if(e)return e;var t=document.createElement("div");return t.setAttribute("id","headlessui-portal-root"),document.body.appendChild(t)}var ie=(0,i.defineComponent)({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup:function(e,t){var n=t.slots,r=t.attrs,o=(0,i.inject)(ne,!1),a=(0,i.inject)(ae,null),u=(0,i.ref)(!0===o||null===a?oe():a.resolveTarget());(0,i.watchEffect)((function(){o||null!==a&&(u.value=a.resolveTarget())}));var l=(0,i.ref)(null);return function(e){var t=ee();(0,i.watchEffect)((function(n){var r=null==e?void 0:e.value;r&&(t(Q.AddElement,r),n((function(){return t(Q.RemoveElement,r)})))}))}(l),(0,i.onUnmounted)((function(){var e,t=document.getElementById("headlessui-portal-root");t&&(u.value===t&&u.value.children.length<=0&&(null==(e=u.value.parentElement)||e.removeChild(u.value)))})),te(),function(){if(null===u.value)return null;var t={ref:l};return(0,i.h)(i.Teleport,{to:u.value},m({props:c({},e,t),slot:{},attrs:r,slots:n,name:"Portal"}))}}}),ae=Symbol("PortalGroupContext"),ue=(0,i.defineComponent)({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup:function(e,t){var n=t.attrs,r=t.slots,o=(0,i.reactive)({resolveTarget:function(){return e.target}});return(0,i.provide)(ae,o),function(){return m({props:d(e,["target"]),slot:{},attrs:n,slots:r,name:"PortalGroup"})}}}),le=Symbol("DescriptionContext");var se;!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(se||(se={}));var ce=Symbol("DialogContext");function de(e){var t=(0,i.inject)(ce,null);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Dialog /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,de),n}return t}var fe="DC8F892D-2EBD-447C-A4C8-A03058436FF4",pe=(0,i.defineComponent)({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:fe},initialFocus:{type:Object,default:null}},emits:{close:function(e){return!0}},render:function(){var e=this,t=c({},this.$attrs,{ref:"el",id:this.id,role:"dialog","aria-modal":this.dialogState===se.Open||void 0,"aria-labelledby":this.titleId,"aria-describedby":this.describedby,onClick:this.handleClick}),n=d(this.$props,["open","initialFocus"]),o={open:this.dialogState===se.Open};return(0,i.h)(re,{force:!0},(function(){return(0,i.h)(ie,(function(){return(0,i.h)(ue,{target:e.dialogRef},(function(){return(0,i.h)(re,{force:!1},(function(){return m({props:c({},n,t),slot:o,attrs:e.$attrs,slots:e.$slots,visible:e.visible,features:r.RenderStrategy|r.Static,name:"Dialog"})}))}))}))}))},setup:function(e,t){var n=t.emit,r=(0,i.ref)(new Set),o=C(),a=(0,i.computed)((function(){var t;return e.open===fe&&null!==o?v(o.value,((t={})[w.Open]=!0,t[w.Closed]=!1,t)):e.open}));if(!(e.open!==fe||null!==o))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if("boolean"!=typeof a.value)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+(a.value===fe?void 0:e.open));var u=(0,i.computed)((function(){return e.open?se.Open:se.Closed})),l=(0,i.computed)((function(){return null!==o?o.value===w.Open:u.value===se.Open})),s=(0,i.ref)(null),c=(0,i.ref)(u.value===se.Open);(0,i.onUpdated)((function(){c.value=u.value===se.Open}));var d="headlessui-dialog-"+g(),f=(0,i.computed)((function(){return{initialFocus:e.initialFocus}}));!function(e,t,n){void 0===t&&(t=(0,i.ref)(!0)),void 0===n&&(n=(0,i.ref)({}));var r=(0,i.ref)("undefined"!=typeof window?document.activeElement:null),o=(0,i.ref)(null);function a(){if(t.value&&1===e.value.size){var i=n.value.initialFocus,a=document.activeElement;if(i){if(i===a)return}else if(H(e.value,a))return;if(r.value=a,i)q(i);else{for(var u,l=!1,s=p(e.value);!(u=s()).done;)if(W(u.value,M.First)===U.Success){l=!0;break}l||console.warn("There are no focusable elements inside the <FocusTrap />")}o.value=document.activeElement}}function u(){q(r.value),r.value=null,o.value=null}(0,i.watchEffect)(a),(0,i.onUpdated)((function(){t.value?a():u()})),(0,i.onUnmounted)(u),B("keydown",(function(n){if(t.value&&n.key===R.Tab&&document.activeElement&&1===e.value.size){n.preventDefault();for(var r,i=p(e.value);!(r=i()).done;)if(W(r.value,(n.shiftKey?M.Previous:M.Next)|M.WrapAround)===U.Success){o.value=document.activeElement;break}}})),B("focus",(function(n){if(t.value&&1===e.value.size){var r=o.value;if(r){var i=n.target;i&&i instanceof HTMLElement?H(e.value,i)?(o.value=i,q(i)):(n.preventDefault(),n.stopPropagation(),q(r)):q(o.value)}}}),!0)}(r,c,f),function(e,t){void 0===t&&(t=(0,i.ref)(!0)),(0,i.watchEffect)((function(n){if(t.value&&e.value){var r=e.value;G.add(r);for(var o,i=p(Y.keys());!(o=i()).done;){var a=o.value;a.contains(r)&&(J(a),Y.delete(a))}document.querySelectorAll(Z).forEach((function(e){if(e instanceof HTMLElement){for(var t,n=p(G);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===G.size&&(Y.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),K(e))}})),n((function(){if(G.delete(r),G.size>0)document.querySelectorAll(Z).forEach((function(e){if(e instanceof HTMLElement&&!Y.has(e)){for(var t,n=p(G);!(t=n()).done;){var r=t.value;if(e.contains(r))return}Y.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),K(e)}}));else for(var e,t=p(Y.keys());!(e=t()).done;){var n=e.value;J(n),Y.delete(n)}}))}}))}(s,c),te((function(e,t){var n;return v(e,((n={})[Q.AddElement]=function(){r.value.add(t)},n[Q.RemoveElement]=function(){r.value.delete(t)},n))}));var m=function(e){var t=void 0===e?{}:e,n=t.slot,r=void 0===n?(0,i.ref)({}):n,o=t.name,a=void 0===o?"Description":o,u=t.props,l=void 0===u?{}:u,s=(0,i.ref)([]);return(0,i.provide)(le,{register:function(e){return s.value.push(e),function(){var t=s.value.indexOf(e);-1!==t&&s.value.splice(t,1)}},slot:r,name:a,props:l}),(0,i.computed)((function(){return s.value.length>0?s.value.join(" "):void 0}))}({name:"DialogDescription",slot:(0,i.computed)((function(){return{open:a.value}}))}),h=(0,i.ref)(null),y={titleId:h,dialogState:u,setTitleId:function(e){h.value!==e&&(h.value=e)},close:function(){n("close",!1)}};return(0,i.provide)(ce,y),B("mousedown",(function(e){var t=e.target;u.value===se.Open&&1===r.value.size&&(H(r.value,t)||(y.close(),(0,i.nextTick)((function(){return null==t?void 0:t.focus()}))))})),B("keydown",(function(e){e.key===R.Escape&&u.value===se.Open&&(r.value.size>1||(e.preventDefault(),e.stopPropagation(),y.close()))})),(0,i.watchEffect)((function(e){if(u.value===se.Open){var t=document.documentElement.style.overflow,n=document.documentElement.style.paddingRight,r=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=r+"px",e((function(){document.documentElement.style.overflow=t,document.documentElement.style.paddingRight=n}))}})),(0,i.watchEffect)((function(e){if(u.value===se.Open){var t=b(s);if(t){var n=new IntersectionObserver((function(e){for(var t,n=p(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&y.close()}}));n.observe(t),e((function(){return n.disconnect()}))}}})),{id:d,el:s,dialogRef:s,containers:r,dialogState:u,titleId:h,describedby:m,visible:l,open:a,handleClick:function(e){e.stopPropagation()}}}}),ve=(0,i.defineComponent)({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},render:function(){var e=de("DialogOverlay"),t={ref:"el",id:this.id,"aria-hidden":!0,onClick:this.handleClick};return m({props:c({},this.$props,t),slot:{open:e.dialogState.value===se.Open},attrs:this.$attrs,slots:this.$slots,name:"DialogOverlay"})},setup:function(){var e=de("DialogOverlay");return{id:"headlessui-dialog-overlay-"+g(),handleClick:function(t){t.target===t.currentTarget&&(t.preventDefault(),t.stopPropagation(),e.close())}}}}),me=(0,i.defineComponent)({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},render:function(){var e=de("DialogTitle"),t={id:this.id};return m({props:c({},this.$props,t),slot:{open:e.dialogState.value===se.Open},attrs:this.$attrs,slots:this.$slots,name:"DialogTitle"})},setup:function(){var e=de("DialogTitle"),t="headlessui-dialog-title-"+g();return(0,i.onMounted)((function(){e.setTitleId(t),(0,i.onUnmounted)((function(){return e.setTitleId(null)}))})),{id:t}}});const he={components:{TransitionRoot:P,TransitionChild:$,Dialog:pe,DialogOverlay:ve,DialogTitle:me},props:{title:String,isOpen:!1},setup:function(){return{closeModal:function(){this.$emit("close")}}}};const ye=(0,n(3744).Z)(he,[["render",function(e,t,n,r,o,c){var d=(0,i.resolveComponent)("DialogOverlay"),f=(0,i.resolveComponent)("TransitionChild"),p=(0,i.resolveComponent)("DialogTitle"),v=(0,i.resolveComponent)("Dialog"),m=(0,i.resolveComponent)("TransitionRoot");return(0,i.openBlock)(),(0,i.createBlock)(m,{show:n.isOpen,appear:"",as:"template"},{default:(0,i.withCtx)((function(){return[(0,i.createVNode)(v,{as:"div"},{default:(0,i.withCtx)((function(){return[(0,i.createElementVNode)("div",a,[(0,i.createElementVNode)("div",u,[(0,i.createVNode)(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,i.withCtx)((function(){return[(0,i.createVNode)(d,{class:"fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur"})]})),_:1}),l,(0,i.createVNode)(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:(0,i.withCtx)((function(){return[(0,i.createElementVNode)("div",s,[(0,i.createVNode)(p,{class:"text-2xl font-medium leading-6 text-gray-900 dark:text-gray-50"},{default:(0,i.withCtx)((function(){return[(0,i.createTextVNode)((0,i.toDisplayString)(n.title),1)]})),_:1}),(0,i.renderSlot)(e.$slots,"default")])]})),_:3})])])]})),_:3})]})),_:3},8,["show"])}]])}}]);