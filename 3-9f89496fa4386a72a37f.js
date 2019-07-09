(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VerticleButton=t.CircleArrow=t.TinyButton=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n(0)),a=u(n(170)),s=u(n(5)),l=u(n(171));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={ToggleScrollUp:""},n.Animation={StartPosition:0,CurrentAnimationTime:0,StartTime:null,AnimationFrame:null},n.HandleScroll=n.HandleScroll.bind(n),n.StopScrollingFrame=n.StopScrollingFrame.bind(n),n.ScrollingFrame=n.ScrollingFrame.bind(n),n.HandleClick=n.HandleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.HandleScroll(),window.addEventListener("scroll",this.HandleScroll),window.addEventListener("wheel",this.StopScrollingFrame,!!l.default.hasSupport&&{passive:!0}),window.addEventListener("touchstart",this.StopScrollingFrame,!!l.default.hasSupport&&{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.HandleScroll),window.removeEventListener("wheel",this.StopScrollingFrame,!1),window.removeEventListener("touchstart",this.StopScrollingFrame,!1)}},{key:"HandleScroll",value:function(){var e=this.props,t=e.ShowAtPosition,n=e.TransitionClassName;window.pageYOffset>t?this.setState({ToggleScrollUp:n}):this.setState({ToggleScrollUp:""})}},{key:"HandleClick",value:function(){this.StopScrollingFrame(),this.Animation.StartPosition=window.pageYOffset,this.Animation.CurrentAnimationTime=0,this.Animation.StartTime=null,this.Animation.AnimationFrame=window.requestAnimationFrame(this.ScrollingFrame)}},{key:"ScrollingFrame",value:function(){var e=this.props,t=e.StopPosition,n=e.EasingType,r=e.AnimationDuration,o=Math.floor(Date.now());if(this.Animation.StartTime||(this.Animation.StartTime=o),this.Animation.CurrentAnimationTime=o-this.Animation.StartTime,window.pageYOffset<=t)this.StopScrollingFrame();else{var i=a.default[n](this.Animation.CurrentAnimationTime,this.Animation.StartPosition,t,r);i<=t&&(i=t),window.scrollTo(0,i),this.Animation.AnimationFrame=window.requestAnimationFrame(this.ScrollingFrame)}}},{key:"StopScrollingFrame",value:function(){window.cancelAnimationFrame(this.Animation.AnimationFrame)}},{key:"render",value:function(){var e=this,t={MainStyle:{backgroundColor:"rgba(50, 50, 50, 0.5)",height:50,position:"fixed",bottom:20,width:50,WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-50,zIndex:1e3},SvgStyle:{display:"inline-block",width:"100%",height:"100%",strokeWidth:0,stroke:"white",fill:"white"},ToggledStyle:{opacity:1,right:20}},n=this.props,o=n.children,a=n.style,s=n.ToggledStyle,l=n.ContainerClassName,u=this.state.ToggleScrollUp;if(o){var c=i.default.Children.map(o,function(t){return i.default.cloneElement(t,{className:e.className})});return i.default.createElement("aside",{role:"button","aria-label":"Scroll to top of page",tabIndex:u?0:-1,"data-testid":"react-scroll-up-button",style:r({},a,u&&s),className:l+" "+u,onClick:this.HandleClick,onKeyPress:this.HandleClick},c)}return i.default.createElement("aside",{role:"button","aria-label":"Scroll to top of page",tabIndex:u?0:-1,"data-testid":"react-scroll-up-button",className:l+" "+u,style:r({},t.MainStyle,a,u&&t.ToggledStyle,u&&s),onClick:this.HandleClick,onKeyPress:this.HandleClick},i.default.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",xmlSpace:"preserve",style:t.SvgStyle},i.default.createElement("path",{transform:"scale(1.4) translate(1,-5)",d:"M19.196 23.429q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411zM19.196 16.571q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z"})))}}]),t}();t.default=c;t.TinyButton=function(e){var t={backgroundColor:"rgb(87, 86, 86)",height:30,position:"fixed",bottom:20,width:30,WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-75,zIndex:1e3,fill:"#292929",paddingBottom:1,paddingLeft:1,paddingRight:1},n={opacity:1,right:30},o=e.style,a=e.ToggledStyle;return i.default.createElement(c,r({},e,{style:r({},t,o),ToggledStyle:r({},n,a)}),i.default.createElement("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",xmlSpace:"preserve"},i.default.createElement("path",{d:"M26.297 20.797l-2.594 2.578c-0.391 0.391-1.016 0.391-1.406 0l-8.297-8.297-8.297 8.297c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.578c-0.391-0.391-0.391-1.031 0-1.422l11.594-11.578c0.391-0.391 1.016-0.391 1.406 0l11.594 11.578c0.391 0.391 0.391 1.031 0 1.422z"})))},t.CircleArrow=function(e){var t={backgroundColor:"rgb(255, 255, 255)",borderRadius:"50%",border:"5px solid black",height:50,position:"fixed",bottom:20,width:50,WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-75},n={opacity:1,right:20},o=e.style,a=e.ToggledStyle;return i.default.createElement(c,r({},e,{style:r({},t,o),ToggledStyle:r({},n,a)}),i.default.createElement("svg",{viewBox:"0 0 32 32"},i.default.createElement("path",{d:"M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"})))},t.VerticleButton=function(e){var t={backgroundColor:"rgb(58, 56, 56)",position:"fixed",bottom:40,padding:"5px 10px",WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-75,transform:"rotate(-90deg)"},n={opacity:1,right:10},o=e.style,a=e.ToggledStyle;return i.default.createElement(c,r({},e,{style:r({},t,o),ToggledStyle:r({},n,a)}),i.default.createElement("span",{style:{fontSize:23,color:"white"}},"UP →"))};c.defaultProps={ContainerClassName:"ScrollUpButton__Container",StopPosition:0,ShowAtPosition:150,EasingType:"easeOutCubic",AnimationDuration:500,TransitionClassName:"ScrollUpButton__Toggled",style:{},ToggledStyle:{},children:null},c.propTypes={children:s.default.oneOfType([s.default.arrayOf(s.default.node),s.default.node]),StopPosition:function(e,t,n){var r=e.ShowAtPosition;if(e[t]){var o=e[t];return"number"==typeof o?o>=r?new Error(t+" ("+o+") in "+n+" must be less then prop: ShowAtPosition ("+r+")"):null:new Error(t+" in "+n+" must be a number.")}return null},ShowAtPosition:s.default.number,EasingType:s.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),AnimationDuration:s.default.number,style:s.default.object,ToggledStyle:s.default.object,ContainerClassName:s.default.string,TransitionClassName:s.default.string}},170:function(e,t,n){"use strict";var r={linear:function(e,t,n,r){return(n-t)*e/r+t},easeInQuad:function(e,t,n,r){return(n-t)*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){return-(n-t)*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var o=n-t;return(e/=r/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){return(n-t)*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){return(n-t)*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var o=n-t;return(e/=r/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){return(n-t)*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){return-(n-t)*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var o=n-t;return(e/=r/2)<1?o/2*e*e*e*e+t:-o/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){return(n-t)*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){return(n-t)*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var o=n-t;return(e/=r/2)<1?o/2*e*e*e*e*e+t:o/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var o=n-t;return-o*Math.cos(e/r*(Math.PI/2))+o+t},easeOutSine:function(e,t,n,r){return(n-t)*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){return-(n-t)/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){return 0==e?t:(n-t)*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var o=n-t;return e==r?t+o:o*(1-Math.pow(2,-10*e/r))+t},easeInOutExpo:function(e,t,n,r){var o=n-t;return 0===e?t:e===r?t+o:(e/=r/2)<1?o/2*Math.pow(2,10*(e-1))+t:o/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(e,t,n,r){return-(n-t)*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){return(n-t)*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var o=n-t;return(e/=r/2)<1?-o/2*(Math.sqrt(1-e*e)-1)+t:o/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var o,i,a,s=n-t;return a=1.70158,0===e?t:1==(e/=r)?t+s:((i=0)||(i=.3*r),(o=s)<Math.abs(s)?(o=s,a=i/4):a=i/(2*Math.PI)*Math.asin(s/o),-o*Math.pow(2,10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/i)+t)},easeOutElastic:function(e,t,n,r){var o,i,a,s=n-t;return a=1.70158,0===e?t:1==(e/=r)?t+s:((i=0)||(i=.3*r),(o=s)<Math.abs(s)?(o=s,a=i/4):a=i/(2*Math.PI)*Math.asin(s/o),o*Math.pow(2,-10*e)*Math.sin((e*r-a)*(2*Math.PI)/i)+s+t)},easeInOutElastic:function(e,t,n,r){var o,i,a,s=n-t;return a=1.70158,0===e?t:2==(e/=r/2)?t+s:((i=0)||(i=r*(.3*1.5)),(o=s)<Math.abs(s)?(o=s,a=i/4):a=i/(2*Math.PI)*Math.asin(s/o),e<1?o*Math.pow(2,10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/i)*-.5+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/i)*.5+s+t)},easeInBack:function(e,t,n,r,o){return void 0===o&&(o=1.70158),(n-t)*(e/=r)*e*((o+1)*e-o)+t},easeOutBack:function(e,t,n,r,o){return void 0===o&&(o=1.70158),(n-t)*((e=e/r-1)*e*((o+1)*e+o)+1)+t},easeInOutBack:function(e,t,n,r,o){var i=n-t;return void 0===o&&(o=1.70158),(e/=r/2)<1?i/2*(e*e*((1+(o*=1.525))*e-o))+t:i/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+t},easeInBounce:function(e,t,n,o){var i=n-t;return i-r.easeOutBounce(o-e,0,i,o)+t},easeOutBounce:function(e,t,n,r){var o=n-t;return(e/=r)<1/2.75?o*(7.5625*e*e)+t:e<2/2.75?o*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?o*(7.5625*(e-=2.25/2.75)*e+.9375)+t:o*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,o){var i=n-t;return e<o/2?.5*r.easeInBounce(2*e,0,i,o)+t:.5*r.easeOutBounce(2*e-o,0,i,o)+.5*i+t}};e.exports=r},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={update:function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),r.hasSupport=e}}};r.update(),t.default=r},215:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(0),s=n(16),l=n.n(s);n.d(t,"a",function(){return m});var u=new Map,c=new Map,d=new Map,h=0;function f(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,o=r.root,i=r.rootMargin,a=r.threshold;if(l()(!u.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e),e){var s=function(e){return e?d.has(e)?d.get(e):(h+=1,d.set(e,h.toString()),d.get(e)+"_"):""}(o)+(i?a.toString()+"_"+i:a.toString()),f=c.get(s);f||(f=new IntersectionObserver(g,n),s&&c.set(s,f));var p={callback:t,element:e,inView:!1,observerId:s,observer:f,thresholds:f.thresholds||(Array.isArray(a)?a:[a])};return u.set(e,p),f.observe(e),p}}function p(e){if(e){var t=u.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var i=!1,a=!1;n&&u.forEach(function(t,r){r!==e&&(t.observerId===n&&(i=!0,a=!0),t.observer.root===o&&(a=!0))}),!a&&o&&d.delete(o),r&&!i&&r.disconnect(),u.delete(e)}}}function g(e){e.forEach(function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=u.get(r);if(o&&n>=0){var i=o.thresholds.some(function(e){return o.inView?n>e:n>=e});void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}})}var v=function(e){var t,n;function s(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return i(o(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),i(o(t),"node",null),i(o(t),"handleNode",function(e){t.node&&p(t.node),t.node=e||null,t.observeNode()}),i(o(t),"handleChange",function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)}),t}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=s.prototype;return l.componentDidMount=function(){0},l.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(p(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(p(this.node),this.node=null)},l.componentWillUnmount=function(){this.node&&(p(this.node),this.node=null)},l.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},l.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,i=o.children,s=o.as,l=o.tag,u=(o.triggerOnce,o.threshold,o.root,o.rootMargin,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin"]));return Object(a.createElement)(s||l||"div",r({ref:this.handleNode},u),i)},s}(a.Component);function m(e){void 0===e&&(e={});var t=Object(a.useState)(null),n=t[0],r=t[1],o=Object(a.useState)({inView:!1,entry:void 0}),i=o[0],s=o[1];return Object(a.useEffect)(function(){if(n)return f(n,function(t,r){s({inView:t,entry:r}),t&&e.triggerOnce&&p(n)},e),function(){p(n)}},[n,e.threshold,e.root,e.rootMargin,e.triggerOnce]),Object(a.useDebugValue)(i.inView),[r,i.inView,i.entry]}i(v,"displayName","InView"),i(v,"defaultProps",{threshold:0,triggerOnce:!1})}}]);
//# sourceMappingURL=3-9f89496fa4386a72a37f.js.map