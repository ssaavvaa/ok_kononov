(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{164:function(e,t,n){"use strict";n.r(t);n(98),n(99),n(101),n(102),n(104),n(67),n(43),n(105),n(288),n(178),n(96),n(97);var a=n(0),i=n.n(a),r=n(172),o=n(173),s=n(180),c=n(202),l=n(169),d={width:"55px",height:"55px",padding:"4px",focus:"none",outline:"none",border:"0px",boxShadow:"0px 0px 2px 2px black",zIndex:100},u={training:{},current_picture:"",alt_current_picture:"",counter:1};t.default=function(e){var t=e.location,n=t.search.split("_id=")[1],g=Object(a.useState)(u),p=g[0],h=g[1];Object(a.useEffect)(function(){var e=s.a.find(function(e){return e._id===t.search.split("_id=")[1]});h({training:e,current_picture:e.main_img,alt_current_picture:e.alt,counter:1,id:n})},[]);var m=p.training,f=m.single_page,y=m.heading,v=m.isFree,_=m.price,w=m.old_price,z=p.alt_current_picture,b=p.current_picture,k=p.counter;return n?f?i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"training_program"}),i.a.createElement(l.CircleArrow,{style:d}),i.a.createElement("div",{className:"container container_landing_training"},f&&i.a.createElement(a.Fragment,null,y&&i.a.createElement("h1",null,y),i.a.createElement("div",{className:"images_presentation"},i.a.createElement("div",{className:"img_presentation_wrapper"},b&&i.a.createElement("div",null,i.a.createElement("img",{src:b,alt:z})),i.a.createElement("ul",null,p.training.single_page.images&&p.training.single_page.images.map(function(e){return i.a.createElement("li",{key:e.alt},i.a.createElement("img",{onClick:function(){return t=e.src,a=e.alt,i=s.a.find(function(e){return e._id===n}),void h({training:i,current_picture:t,alt_current_picture:a});var t,a,i},src:e.src,alt:e.alt}))}))),i.a.createElement("div",{className:"program_aside_picture_info"},y&&i.a.createElement("h3",null,y),p.training.single_page.short_description&&i.a.createElement("p",null,p.training.single_page.short_description),p.training.single_page.instructor&&i.a.createElement(a.Fragment,null,i.a.createElement("h3",null,"Инструктор"),i.a.createElement("p",{onClick:function(){return e=p.training.single_page.link_instructor,void Object(c.b)("/instructor?name="+e,{state:e});var e},style:{color:"blue",textDecoration:"underline",cursor:"pointer"}},p.training.single_page.instructor)),i.a.createElement("p",null,p.training.single_page.includes),p.training.single_page.includes_list&&i.a.createElement("h3",null,"А так же:"),i.a.createElement("ul",null,p.training.single_page.includes_list&&p.training.single_page.includes_list.map(function(e){return i.a.createElement("li",{key:e.key}," ",i.a.createElement("p",null," - ",i.a.createElement("small",null,e.p)," "))})),!v&&i.a.createElement("div",{className:"number"},i.a.createElement("span",{className:"minus",onClick:function(){1!==p.counter&&h({training:p.training,current_picture:p.current_picture,alt_current_picture:p.alt_current_picture,counter:p.counter-1})}},"-"),i.a.createElement("input",{type:"text",value:k,disabled:!0}),i.a.createElement("span",{className:"plus",onClick:function(){h({training:p.training,current_picture:p.current_picture,alt_current_picture:p.alt_current_picture,counter:p.counter+1})}},"+")),v&&i.a.createElement("div",null,i.a.createElement(c.a,{to:"/contacts/"},"Go to contacts page")),v?i.a.createElement("span",null,"Бесплатно"):i.a.createElement("div",null,i.a.createElement("span",null,"$",_),"  ",i.a.createElement("span",null,i.a.createElement("del",null,"$",w))),!v&&i.a.createElement(a.Fragment,null,i.a.createElement("button",{onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("cart"))||[];e.length&&e.forEach(function(t){return t.id===n?t.quantity+=p.counter:e=[].concat(e,[{id:n,quantity:p.counter}])}),e.length||(e=[].concat({id:n,quantity:p.counter}));var t=[],a=new Map,i=e,r=Array.isArray(i),o=0;for(i=r?i:i[Symbol.iterator]();;){var s;if(r){if(o>=i.length)break;s=i[o++]}else{if((o=i.next()).done)break;s=o.value}var c=s;a.has(c.id)||(a.set(c.id,!0),t.push({id:c.id,quantity:c.quantity}))}localStorage.setItem("cart",JSON.stringify(t)),h({training:p.training,current_picture:p.current_picture,alt_current_picture:p.alt_current_picture,counter:1})}()}},"Добавить в корзину"),i.a.createElement("div",null)))),p.training.single_page.course_for&&i.a.createElement("h2",{className:"h2_training"},"ДЛЯ КОГО ЭТА ПРОГРАММА"),i.a.createElement("ul",{className:"target_people_trainings"},p.training.single_page.course_for&&p.training.single_page.course_for.map(function(e){return i.a.createElement("li",{key:e.key},i.a.createElement("h3",null,e.heading),i.a.createElement("p",null,e.description))})),p.training.single_page.customer_receive&&i.a.createElement("h2",{className:"h2_training"},"ЧТО ТЫ ПОЛУЧИШЬ:"),i.a.createElement("ul",{className:"customer_receive_training-wrapper"},p.training.single_page.customer_receive&&p.training.single_page.customer_receive.map(function(e,t){return i.a.createElement("li",{key:e.key,className:"customer_receive_training"},i.a.createElement("span",{className:"customer_receive_training-digit"},t+1),i.a.createElement("h3",null,e.heading),i.a.createElement("p",null,e.description))})),p.training.single_page.course_steps&&i.a.createElement("h2",{className:"h2_training-last"},"Этапы программы:"),i.a.createElement("ul",{className:"program_steps"},p.training.single_page.course_steps&&p.training.single_page.course_steps.map(function(e,t){return i.a.createElement("li",{key:e.key,className:""},i.a.createElement("fieldset",null,i.a.createElement("legend",null,t+1),i.a.createElement("h3",null,e.heading),i.a.createElement("p",null,e.description)))}))))):i.a.createElement("div",{className:"container container_landing_training",style:{textAlign:"center"}},i.a.createElement("h2",null,"Item with this Id was not created yet"),i.a.createElement("p",null,"Please go and pick 'Basic' category"),i.a.createElement(c.a,{to:"/training-programs?category=basic"},"Go to training page")):i.a.createElement("div",{className:"container container_landing_training",style:{textAlign:"center"}},i.a.createElement("h2",null,"You have to choose a training to view this page"),i.a.createElement(c.a,{to:"/training-programs/"},"Go to training page"))}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VerticleButton=t.CircleArrow=t.TinyButton=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=l(n(0)),o=l(n(170)),s=l(n(5)),c=l(n(171));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={ToggleScrollUp:""},n.Animation={StartPosition:0,CurrentAnimationTime:0,StartTime:null,AnimationFrame:null},n.HandleScroll=n.HandleScroll.bind(n),n.StopScrollingFrame=n.StopScrollingFrame.bind(n),n.ScrollingFrame=n.ScrollingFrame.bind(n),n.HandleClick=n.HandleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),i(t,[{key:"componentDidMount",value:function(){this.HandleScroll(),window.addEventListener("scroll",this.HandleScroll),window.addEventListener("wheel",this.StopScrollingFrame,!!c.default.hasSupport&&{passive:!0}),window.addEventListener("touchstart",this.StopScrollingFrame,!!c.default.hasSupport&&{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.HandleScroll),window.removeEventListener("wheel",this.StopScrollingFrame,!1),window.removeEventListener("touchstart",this.StopScrollingFrame,!1)}},{key:"HandleScroll",value:function(){var e=this.props,t=e.ShowAtPosition,n=e.TransitionClassName;window.pageYOffset>t?this.setState({ToggleScrollUp:n}):this.setState({ToggleScrollUp:""})}},{key:"HandleClick",value:function(){this.StopScrollingFrame(),this.Animation.StartPosition=window.pageYOffset,this.Animation.CurrentAnimationTime=0,this.Animation.StartTime=null,this.Animation.AnimationFrame=window.requestAnimationFrame(this.ScrollingFrame)}},{key:"ScrollingFrame",value:function(){var e=this.props,t=e.StopPosition,n=e.EasingType,a=e.AnimationDuration,i=Math.floor(Date.now());if(this.Animation.StartTime||(this.Animation.StartTime=i),this.Animation.CurrentAnimationTime=i-this.Animation.StartTime,window.pageYOffset<=t)this.StopScrollingFrame();else{var r=o.default[n](this.Animation.CurrentAnimationTime,this.Animation.StartPosition,t,a);r<=t&&(r=t),window.scrollTo(0,r),this.Animation.AnimationFrame=window.requestAnimationFrame(this.ScrollingFrame)}}},{key:"StopScrollingFrame",value:function(){window.cancelAnimationFrame(this.Animation.AnimationFrame)}},{key:"render",value:function(){var e=this,t={MainStyle:{backgroundColor:"rgba(50, 50, 50, 0.5)",height:50,position:"fixed",bottom:20,width:50,WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-50,zIndex:1e3},SvgStyle:{display:"inline-block",width:"100%",height:"100%",strokeWidth:0,stroke:"white",fill:"white"},ToggledStyle:{opacity:1,right:20}},n=this.props,i=n.children,o=n.style,s=n.ToggledStyle,c=n.ContainerClassName,l=this.state.ToggleScrollUp;if(i){var d=r.default.Children.map(i,function(t){return r.default.cloneElement(t,{className:e.className})});return r.default.createElement("aside",{role:"button","aria-label":"Scroll to top of page",tabIndex:l?0:-1,"data-testid":"react-scroll-up-button",style:a({},o,l&&s),className:c+" "+l,onClick:this.HandleClick,onKeyPress:this.HandleClick},d)}return r.default.createElement("aside",{role:"button","aria-label":"Scroll to top of page",tabIndex:l?0:-1,"data-testid":"react-scroll-up-button",className:c+" "+l,style:a({},t.MainStyle,o,l&&t.ToggledStyle,l&&s),onClick:this.HandleClick,onKeyPress:this.HandleClick},r.default.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",xmlSpace:"preserve",style:t.SvgStyle},r.default.createElement("path",{transform:"scale(1.4) translate(1,-5)",d:"M19.196 23.429q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411zM19.196 16.571q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z"})))}}]),t}();t.default=d;t.TinyButton=function(e){var t={backgroundColor:"rgb(87, 86, 86)",height:30,position:"fixed",bottom:20,width:30,WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-75,zIndex:1e3,fill:"#292929",paddingBottom:1,paddingLeft:1,paddingRight:1},n={opacity:1,right:30},i=e.style,o=e.ToggledStyle;return r.default.createElement(d,a({},e,{style:a({},t,i),ToggledStyle:a({},n,o)}),r.default.createElement("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",xmlSpace:"preserve"},r.default.createElement("path",{d:"M26.297 20.797l-2.594 2.578c-0.391 0.391-1.016 0.391-1.406 0l-8.297-8.297-8.297 8.297c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.578c-0.391-0.391-0.391-1.031 0-1.422l11.594-11.578c0.391-0.391 1.016-0.391 1.406 0l11.594 11.578c0.391 0.391 0.391 1.031 0 1.422z"})))},t.CircleArrow=function(e){var t={backgroundColor:"rgb(255, 255, 255)",borderRadius:"50%",border:"5px solid black",height:50,position:"fixed",bottom:20,width:50,WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-75},n={opacity:1,right:20},i=e.style,o=e.ToggledStyle;return r.default.createElement(d,a({},e,{style:a({},t,i),ToggledStyle:a({},n,o)}),r.default.createElement("svg",{viewBox:"0 0 32 32"},r.default.createElement("path",{d:"M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"})))},t.VerticleButton=function(e){var t={backgroundColor:"rgb(58, 56, 56)",position:"fixed",bottom:40,padding:"5px 10px",WebkitTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",transitionProperty:"opacity, right",cursor:"pointer",opacity:0,right:-75,transform:"rotate(-90deg)"},n={opacity:1,right:10},i=e.style,o=e.ToggledStyle;return r.default.createElement(d,a({},e,{style:a({},t,i),ToggledStyle:a({},n,o)}),r.default.createElement("span",{style:{fontSize:23,color:"white"}},"UP →"))};d.defaultProps={ContainerClassName:"ScrollUpButton__Container",StopPosition:0,ShowAtPosition:150,EasingType:"easeOutCubic",AnimationDuration:500,TransitionClassName:"ScrollUpButton__Toggled",style:{},ToggledStyle:{},children:null},d.propTypes={children:s.default.oneOfType([s.default.arrayOf(s.default.node),s.default.node]),StopPosition:function(e,t,n){var a=e.ShowAtPosition;if(e[t]){var i=e[t];return"number"==typeof i?i>=a?new Error(t+" ("+i+") in "+n+" must be less then prop: ShowAtPosition ("+a+")"):null:new Error(t+" in "+n+" must be a number.")}return null},ShowAtPosition:s.default.number,EasingType:s.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),AnimationDuration:s.default.number,style:s.default.object,ToggledStyle:s.default.object,ContainerClassName:s.default.string,TransitionClassName:s.default.string}},170:function(e,t,n){"use strict";var a={linear:function(e,t,n,a){return(n-t)*e/a+t},easeInQuad:function(e,t,n,a){return(n-t)*(e/=a)*e+t},easeOutQuad:function(e,t,n,a){return-(n-t)*(e/=a)*(e-2)+t},easeInOutQuad:function(e,t,n,a){var i=n-t;return(e/=a/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,a){return(n-t)*(e/=a)*e*e+t},easeOutCubic:function(e,t,n,a){return(n-t)*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,a){var i=n-t;return(e/=a/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,a){return(n-t)*(e/=a)*e*e*e+t},easeOutQuart:function(e,t,n,a){return-(n-t)*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,a){var i=n-t;return(e/=a/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,a){return(n-t)*(e/=a)*e*e*e*e+t},easeOutQuint:function(e,t,n,a){return(n-t)*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,a){var i=n-t;return(e/=a/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,a){var i=n-t;return-i*Math.cos(e/a*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,a){return(n-t)*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(e,t,n,a){return-(n-t)/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(e,t,n,a){return 0==e?t:(n-t)*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(e,t,n,a){var i=n-t;return e==a?t+i:i*(1-Math.pow(2,-10*e/a))+t},easeInOutExpo:function(e,t,n,a){var i=n-t;return 0===e?t:e===a?t+i:(e/=a/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(e,t,n,a){return-(n-t)*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(e,t,n,a){return(n-t)*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(e,t,n,a){var i=n-t;return(e/=a/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,a){var i,r,o,s=n-t;return o=1.70158,0===e?t:1==(e/=a)?t+s:((r=0)||(r=.3*a),(i=s)<Math.abs(s)?(i=s,o=r/4):o=r/(2*Math.PI)*Math.asin(s/i),-i*Math.pow(2,10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/r)+t)},easeOutElastic:function(e,t,n,a){var i,r,o,s=n-t;return o=1.70158,0===e?t:1==(e/=a)?t+s:((r=0)||(r=.3*a),(i=s)<Math.abs(s)?(i=s,o=r/4):o=r/(2*Math.PI)*Math.asin(s/i),i*Math.pow(2,-10*e)*Math.sin((e*a-o)*(2*Math.PI)/r)+s+t)},easeInOutElastic:function(e,t,n,a){var i,r,o,s=n-t;return o=1.70158,0===e?t:2==(e/=a/2)?t+s:((r=0)||(r=a*(.3*1.5)),(i=s)<Math.abs(s)?(i=s,o=r/4):o=r/(2*Math.PI)*Math.asin(s/i),e<1?i*Math.pow(2,10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/r)*-.5+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/r)*.5+s+t)},easeInBack:function(e,t,n,a,i){return void 0===i&&(i=1.70158),(n-t)*(e/=a)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,a,i){return void 0===i&&(i=1.70158),(n-t)*((e=e/a-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,a,i){var r=n-t;return void 0===i&&(i=1.70158),(e/=a/2)<1?r/2*(e*e*((1+(i*=1.525))*e-i))+t:r/2*((e-=2)*e*((1+(i*=1.525))*e+i)+2)+t},easeInBounce:function(e,t,n,i){var r=n-t;return r-a.easeOutBounce(i-e,0,r,i)+t},easeOutBounce:function(e,t,n,a){var i=n-t;return(e/=a)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,i){var r=n-t;return e<i/2?.5*a.easeInBounce(2*e,0,r,i)+t:.5*a.easeOutBounce(2*e-i,0,r,i)+.5*r+t}};e.exports=a},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={update:function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),a.hasSupport=e}}};a.update(),t.default=a},174:function(e,t,n){e.exports=n.p+"static/single_page-bd461a05f0844f14c2eab61acfb5261c.png"},175:function(e,t,n){e.exports=n.p+"static/1-e116d5af9d559b8cb613ee438eeb8fff.png"},176:function(e,t,n){e.exports=n.p+"static/1-be24d05ab796d20d230d99009efaf64e.png"},180:function(e,t,n){"use strict";t.a=[{_id:"d0awy087tdaw322",alt:"handstand",category:"basic",main_img:n(174),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:23,old_price:null,date:1562310623075,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"Программа Тренировок с собственным весом тела на 42 дня",includes:"В программе ты найдешь Тренировки по Гимнастике, подготовительные мастер классы для укрепления плеч и рук, восстановительные тренировки и Кардио.Тебя ждут 42 увлекательных дня.",images:[{alt:"basic_hand_stando-1",src:n(174)},{alt:"basic_hand_stand-2",src:n(181)},{alt:"basic_hand_stand-3",src:n(182)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmgze4wv3va4et87gahe"},{p:"Четкая дозировка",key:"vz0rvz7he4zg40eht7zegb"},{p:"Журнал Тренировок",key:"czrze4hg04e7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"fasegzrhh55rjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgzee4hza3t-8tz88da"},{p:"Виртуальный помощник",key:"dnzvlgnh4h5rpzgdrguzdnh"}],course_for:[{key:"vmzrg4yze4hje48zyhe4zy",heading:"Занимаешься CrossFit",description:"Хочешь побед на соревнованиях, технично стоять и ходить на руках?"},{key:"vzlze4gzl4g4gz5eye48",heading:"Любишь Гимнастику",description:"Занимаешься профессианально или как любитель?"},{key:"vznfsege4zhgzspeugfb4t",heading:"Занимаешься WorkOut",description:"Хочешь быть Круче всех выполняя технично стойку на улице?"},{key:"dzmgzpg4-tz4teey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzpee4gsgpxywzwt4ey",heading:"42 тренировочных дня",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"cvmosept4ygoesgeogose",heading:"Более 50 оригинальных упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"dawflvzg48ghe4zhze8yh",heading:"5 видов тренировок",description:"Тренировки по Гимнастике, укрепление рук и плечевого пояса, а также кардио и восстановительные занятия."},{key:"vmzgzze48sg-e4y8z558",heading:"Личный кабинет",description:"Вся информация структурированна в одном месте, удобно для использования на компьютере и телефоне"},{key:"nvzsgzge48eh4ez4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgzeeg4yze4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedwawm,cgydpawf7aw",heading:"Подготовительный цикл",description:"Этот цикл будет логическим продолжением первой программы, основной акцент сделан на адаптацию мышц кора."},{key:"cnezswt,cgyjzw3tgw3tw38",heading:"Основной Цикл",description:"На этом тренировочном отрезке ты укрепишь плечи, кисти. Особое внимание будет уделено выходу в стойку."},{key:"aawf72jgcycgk2037thg499",heading:"Предстартовый Цикл",description:"На этом тренировочном отрезке ты большую часть времени проведешь стоя на руках, освоишь как ловить баланс и корректировать стойку."}]}},{_id:"d0awydawncabwd2524",alt:"handstand",category:"basic",main_img:n(175),heading:"Стойка на Руках PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:56,isFree:!1,old_price:109,date:1562310623021,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"Программа Тренировок с собственным весом тела на 42 дня",includes:"В программе ты найдешь Тренировки по Гимнастике, подготовительные мастер классы для укрепления плеч и рук, восстановительные тренировки и Кардио.Тебя ждут 42 увлекательных дня.",images:[{alt:"hand_stand_pro-1",src:n(175)},{alt:"hand_stand_pro-2",src:n(183)},{alt:"hand_stand_pro-3",src:n(184)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmwv3va4et87gahe"},{p:"Четкая дозировка",key:"vz0rvz7g40eht7zegb"},{p:"Журнал Тренировок",key:"czrg04e7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"fasegzrhrjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgza3t-8tz88da"},{p:"Виртуальный помощник",key:"dnzvlgnrpzgdrguzdnh"}],course_for:[{key:"vmzrg4y-e48zyhe4zy",heading:"Занимаешься CrossFit",description:"Хочешь побед на соревнованиях, технично стоять и ходить на руках?"},{key:"vzlgzl4g4gz5eye48",heading:"Любишь Гимнастику",description:"Занимаешься профессианально или как любитель?"},{key:"vznfsegzspeugfb4t",heading:"Занимаешься WorkOut",description:"Хочешь быть Круче всех выполняя технично стойку на улице?"},{key:"dzmgzpg4-eey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzp4gsgpxywzwt4ey",heading:"42 тренировочных дня",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"cvmosepgoesgeogose",heading:"Более 50 оригинальных упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"dawflvzg48gze8yh",heading:"5 видов тренировок",description:"Тренировки по Гимнастике, укрепление рук и плечевого пояса, а также кардио и восстановительные занятия."},{key:"vmzgz8sg-e4y8z558",heading:"Личный кабинет",description:"Вся информация структурированна в одном месте, удобно для использования на компьютере и телефоне"},{key:"nvzsgzge48e4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgg4yze4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedwawdpawf7aw",heading:"Подготовительный цикл",description:"Этот цикл будет логическим продолжением первой программы, основной акцент сделан на адаптацию мышц кора."},{key:"cnezswtzw3tgw3tw38",heading:"Основной Цикл",description:"На этом тренировочном отрезке ты укрепишь плечи, кисти. Особое внимание будет уделено выходу в стойку."},{key:"aawf722037thg499",heading:"Предстартовый Цикл",description:"На этом тренировочном отрезке ты большую часть времени проведешь стоя на руках, освоишь как ловить баланс и корректировать стойку."}]}},{_id:"d0daw6adw9d87a",alt:"abdomen-exercise",category:"basic",main_img:n(176),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:30,isFree:!1,old_price:44,date:1562310343021,single_page:{instructor:"Виктория Кононова",link_instructor:"viktorya_kononova",short_description:"Программ Тренировок от Мастера Спорта по Художественной Гимнастике",includes:"В программе для тебя Тренировки по Гимнастике, Подготовительные мастер классы, Pilates и Кардио. Тебя ждут 42 увлекательных дня.",images:[{alt:"hand_stand_pro-1",src:n(176)},{alt:"hand_stand_pro-2",src:n(185)},{alt:"hand_stand_pro-3",src:n(186)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmwvjsfshjzdrn87gahe"},{p:"Четкая дозировка",key:"vz0rvhzdr5jzdjzeht7zegb"},{p:"Журнал Тренировок",key:"czhzdrhzdrh7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"faszzzzzrhrjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgzahzdrht-8tz88da"}],course_for:[{key:"vmzg4hrg4y-e48zyhe4zy",heading:"ЗАНИМАЕШЬСЯ В ТРЕНАЖЕРНОМ ЗАЛЕ ИЛИ CROSSFIT",description:"Любишь силовые тренировки, но не знаешь как растягиваться после них?"},{key:"vzhxdlgzl4g4gz5eye48",heading:"ЛЮБИШЬ ГИМНАСТИКУ ИЛИ POLE DANCE",description:"Для достижения цели твоем арсенале не хватает упражнений из профессионального спорта?"},{key:"vznfseghk6zspeugfb4t",heading:"ХОЧЕШЬ УДИВИТЬ СВОЮ ПОЛОВИНКУ",description:"Не знаешь как внести разнообразие в личную жизнь?"},{key:"dzmgzpg47546-eey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzp4gsgpxq346ywzwt4ey",heading:"Онлайн поддержка 24/7",description:"Ты можешь написать мне в любое время в директ Инстаграм и получить подробный ответ или помощь"},{key:"cvmoq346sepgoesgeogose",heading:"Пилатес тренировки",description:"Релакс тренировки на вытяжение и укрепление мышц кора и позвоночного столба"},{key:"da6wflvzg48g7w45ze8yh",heading:"36 тренировочных дней",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"vmzgz8sg-e4y8z6w47558",heading:"36 уникальных упражнений для быстрого прогресса",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"nve466zsgzge48e4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgg4yzgz4e4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedr5dgsewawdpawf7aw",heading:"LEVEL 1",description:"На этом тренировочном отрезке ты подготовишь суставы к стрейчингу Освоишь базовые гимнастические упражнения.."},{key:"cnezswurdtzw3tgw3tw38",heading:"LEVEL 2",description:"На этом тренировочном отрезке ты увеличишь эластичность мышц. Особое внимание уделишь технике и положению тела для выполнения продольного и поперечного шпагатов."},{key:"aawf7220h537thg499",heading:"LEVEL 3",description:"На этом тренировочном отрезке ты большую часть времени проведешь сидя на шпагатах разных уровней сложности. И будешь готов взять свою цель."}]}},{_id:"d0adawaw4wydawncabwd2524",alt:"exercise",category:"basic",main_img:n(187),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",price:null,isFree:!0,old_price:null,date:1562310623091,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"4-х недельная Программа тренировок Артиста Cirque Du SoleilАлексея Кононова.",includes:"Оставляй заявку и получи 4 недельную программу тренировок по Общей Физической Подготовке, абсолютно БЕСПЛАТНО.",images:null,includes_list:null,course_for:[{key:"vmzrg4y-e48za2fa2yhe4zy",heading:"НЕТ ДИСЦИПЛИНЫ",description:"Много раз начинал заниматься и бросал. Первые сложности сбивают тебя с намеченного пути."},{key:"vzlgzl4g4gz5dawfaweye48",heading:"НЕ ХВАТАЕТ ЭНЕРГИИ",description:"Нет энергии на тренировки и складывается ощущение, что нет энергии вообще. Жизнь замедляет ход."},{key:"vznfsegzdafspeugfb4t",heading:"НЕТ НУЖНОГО МОМЕНТА",description:"Никак не наступает тот самый день, та самая неделя, чтоб начать заниматься. Всегда чего-то не хватает."},{key:"dzmgzpg4-eey-4eay-ey",heading:"НЕТ МОТИВАЦИИ",description:"Не можешь найти мощный толчок, чтоб начать перемены в жизни. Хотя чувствуешь, что нужно, что-то менять."}],customer_receive:[{key:"vzp4gsgpxywzwt4ey",heading:"Более 50 упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"cvmosepgoesgeogose",heading:"3 уровня сложности",description:"Програма адаптированна под разные уровни подготовки. Ты сможешь подобрать себе упражнения по силам."},{key:"dawflvzg48gze8yh",heading:"Контроль техники выполнения",description:"Мое скурпулезное внимание к деталям, помогут сделать твои движения филигранными."},{key:"vmzgz8sg-e4y8z558",heading:"Закрытую Группу Telegram",description:"Доступ в чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками, а также получать рекомендации по технике"},{key:"nvzsgzge48e4ybe4y",heading:"Виртуального Тренера 24/7",description:"С тобой будет работать мой виртуальный помощник, он будет вести по программе, мотивировать, собирать обратную связь"},{key:"vnzgg4yze4ye4y04ey",heading:"3 образовательных вебинара",description:"Доступ к секретной информации для тренеров, которая поможет борьбу с мифами и сделает твои тренировки более осознанными."}],course_steps:null}},{_id:"d0awyfFg087tdaw322",alt:"handstand",category:"middle",main_img:n(188),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:30,old_price:29,date:1562320623021},{_id:"d0awydj6tawncabwd2524",alt:"handstand",category:"middle",main_img:n(189),heading:"Стойка на Руках Уровеь PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:19,isFree:!1,old_price:29},{_id:"d0djs6rjaw6adw9d87a",alt:"abdomen-exercise",category:"middle",main_img:n(190),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:14,isFree:!1,old_price:29},{_id:"camwcnjsmfyaw8da5w43",alt:"abdomen-exercise",category:"middle",main_img:n(191),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",isFree:!0,price:"",old_price:"",date:1562310623051},{_id:"d0dfFg023523tdaw322",alt:"handstand",category:"advance",main_img:n(192),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:48,old_price:29,date:1562310623081},{_id:"d0awh65679wncabwd2524",alt:"handstand",category:"advance",main_img:n(193),heading:"Стойка на Руках Уровеь PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:10,isFree:!1,old_price:29,date:1562230623021},{_id:"d0djs6r64879w6adw9d87a",alt:"abdomen-exercise",category:"advance",main_img:n(194),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:100,isFree:!1,old_price:29,date:1561310623021},{_id:"camwcn57e458jnxfyaw8da5w43",alt:"abdomen-exercise",category:"advance",main_img:n(195),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",isFree:!0,price:"",old_price:"",date:1562310628021}]},181:function(e,t,n){e.exports=n.p+"static/2-67b32f6c399e5d1ea451787d3eddc55a.png"},182:function(e,t,n){e.exports=n.p+"static/3-af7cb0762a0d44134c8a107cd2548b7b.png"},183:function(e,t,n){e.exports=n.p+"static/2-ce161d3133d533a238c54ae52ad897fc.png"},184:function(e,t,n){e.exports=n.p+"static/3-b33121c45ff19ff69b06b77ced00f9dd.png"},185:function(e,t,n){e.exports=n.p+"static/2-bccf4ce41e2872824ca49e782918cf4e.png"},186:function(e,t,n){e.exports=n.p+"static/3-af7cb0762a0d44134c8a107cd2548b7b.png"},187:function(e,t,n){e.exports=n.p+"static/1-567cdab2d46e7e07b48d20683d7adcd5.png"},188:function(e,t,n){e.exports=n.p+"static/1-3f97d7ec601574f4abde3ba8c46dde95.jpg"},189:function(e,t,n){e.exports=n.p+"static/2-7ee019e595cfbaad23817f07b5e52df8.jpg"},190:function(e,t,n){e.exports=n.p+"static/3-efa58147e33ed362a3a5674b934a8ad7.jpg"},191:function(e,t,n){e.exports=n.p+"static/4-e936ef970829df61cc3d16c4ec5eb33f.jpg"},192:function(e,t,n){e.exports=n.p+"static/1-c13a6063ecc90794b7710bb5c752a212.jpg"},193:function(e,t,n){e.exports=n.p+"static/2-843d5f6fe533ace20043b2b07afe6698.jpg"},194:function(e,t,n){e.exports=n.p+"static/3-d4fd91cbcd8ea6054caf9f3896566422.jpg"},195:function(e,t,n){e.exports=n.p+"static/4-07571e90b3110f9e755001353c1f0790.jpg"},288:function(e,t,n){"use strict";var a=n(106),i=n(68);e.exports=n(107)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=a.getEntry(i(this,"Map"),e);return t&&t.v},set:function(e,t){return a.def(i(this,"Map"),0===e?0:e,t)}},a,!0)}}]);
//# sourceMappingURL=component---src-pages-training-programs-training-js-8d973be49058054b53ec.js.map