(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{161:function(e,a,t){"use strict";t.r(a);t(98),t(99),t(266),t(96),t(97);var n=t(0),r=t.n(n),l=t(167),i=t(171),c=t(199),o=t(19);a.default=function(e){var a=Object(n.useState)({trainings:[],category:"all"}),t=a[0],s=a[1];Object(n.useEffect)(function(){switch(e.location.search.split("category=")[1]){case"all":s({trainings:c.a,category:"all"});break;case"middle":var a=c.a.filter(function(e){return"middle"===e.category});s({trainings:a,category:"middle"});break;case"advance":var t=c.a.filter(function(e){return"advance"===e.category});s({trainings:t,category:"advance"});break;case"basic":var n=c.a.filter(function(e){return"basic"===e.category});s({trainings:n,category:"basic"});break;default:s({trainings:c.a,category:"all"})}},[e.location.search]);var u=t.trainings;return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"training_program"}),r.a.createElement("div",{className:"container trainings_page"},r.a.createElement("h1",null,'TRAINING PROGRAMS - "',r.a.createElement("span",null,t.category),'" '),r.a.createElement("div",{className:"search__trainings_block"},r.a.createElement("div",null,r.a.createElement("p",null,"Filter by:"),r.a.createElement("select",{className:"select-css",onChange:function(e){switch(e.target.value){case"all":s({trainings:c.a,category:"all"});break;case"middle":var a=c.a.filter(function(e){return"middle"===e.category});s({trainings:a,category:"level middle"});break;case"free":var n=c.a.filter(function(e){return!0===e.isFree});s({trainings:n,category:"free"});break;case"advance":var r=c.a.filter(function(e){return"advance"===e.category});s({trainings:r,category:"level advance"});break;case"basic":var l=c.a.filter(function(e){return"basic"===e.category});s({trainings:l,category:"level basic"});break;case"low":var i=t.trainings.sort(function(e,a){return e.price-a.price});s({trainings:i,category:t.category});break;case"high":var o=t.trainings.sort(function(e,a){return a.price-e.price});s({trainings:o,category:t.category});break;case"new":var u=t.trainings.sort(function(e,a){return a.date-e.date});s({trainings:u,category:t.category});break;case"old":var g=t.trainings.sort(function(e,a){return e.date-a.date});s({trainings:g,category:t.category});break;default:s({trainings:c.a,category:"all"})}}},r.a.createElement("optgroup",{label:"Price"},r.a.createElement("option",{value:"low"},"low"),r.a.createElement("option",{value:"high"},"high"),r.a.createElement("option",{value:"free"},"free")),r.a.createElement("optgroup",{label:"category"},r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"basic"},"basic"),r.a.createElement("option",{value:"middle"},"middle"),r.a.createElement("option",{value:"advance"},"advance")),r.a.createElement("optgroup",{label:"date"},r.a.createElement("option",{value:"new"},"new"),r.a.createElement("option",{value:"old"},"old")))),r.a.createElement("div",null,r.a.createElement("p",null,"Search by query"),r.a.createElement("input",{onInput:function(e){var a=c.a.filter(function(a){var t=a.category.toLowerCase(),n=a.heading.toLowerCase(),r=a.description.toLowerCase(),l=a.target.toLowerCase(),i=a.level.toLowerCase(),c=e.target.value.toLowerCase();return t.includes(c)||n.includes(c)||r.includes(c)||l.includes(c)||i.includes(c)});s({trainings:a,category:"search"})},type:"text",placeholder:"input search query"}))),r.a.createElement("ul",null,u.length>0&&u.map(function(e){return r.a.createElement("li",{onClick:function(){return a=e._id,void Object(o.navigate)("/ok_kononov/training-programs/training?_id="+a,{state:{e:a}});var a},key:e._id},r.a.createElement("figure",null,r.a.createElement("img",{alt:e.alt,src:e.main_img}),r.a.createElement("figcaption",null,r.a.createElement("p",null,r.a.createElement("small",null,e.description)),e.isFree&&r.a.createElement("span",null,"Бесплатно"),e.old_price&&r.a.createElement(n.Fragment,null,r.a.createElement("span",null,e.price," "),r.a.createElement("span",null,r.a.createElement("del",null,e.old_price))),!e.old_price&&r.a.createElement("span",null,e.price))),r.a.createElement("span",{className:"view_training"},"view"))})),!u.length&&r.a.createElement("p",{className:"nothing_found_in_trainings"},"Ничего не найдено по вашему запросу")))}},266:function(e,a,t){"use strict";var n=t(9),r=t(32),l=t(31),i=t(13),c=[].sort,o=[1,2,3];n(n.P+n.F*(i(function(){o.sort(void 0)})||!i(function(){o.sort(null)})||!t(267)(c)),"Array",{sort:function(e){return void 0===e?c.call(l(this)):c.call(l(this),r(e))}})},267:function(e,a,t){"use strict";var n=t(13);e.exports=function(e,a){return!!e&&n(function(){a?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-training-programs-index-js-3497ac37bf7dabf7c79f.js.map