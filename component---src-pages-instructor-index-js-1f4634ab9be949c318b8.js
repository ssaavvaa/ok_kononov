(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(e,t,n){"use strict";n.r(t);n(198),n(210),n(96),n(97);var a=n(0),r=n.n(a),i=n(201),o=n(172),l=n(168);t.default=function(e){var t=Object(a.useState)({instructor:{}}),n=t[0],c=t[1];Object(a.useEffect)(function(){switch(e.location.search.split("name=")[1]){case"viktorya_kononova":var t=i.a.find(function(e){return"viktorya_kononova"===e.url_name});c({instructor:t});break;case"alex_kononov":var n=i.a.find(function(e){return"alex_kononov"===e.url_name});c({instructor:n});break;case"alex_koltakov":var a=i.a.find(function(e){return"alex_koltakov"===e.url_name});c({instructor:a});break;case"aleksandr_okhotenko":var r=i.a.find(function(e){return"aleksandr_okhotenko"===e.url_name});c({instructor:r});break;default:c({instructor:i.a.find(function(e){return"alex_kononov"===e.url_name})})}},[e.location.search]);var s=n.instructor,u=s.name,m=s.family_name,f=s.single_page_img,g=s.p_1,p=s.p_2,A=s.p_3,d=s.p_4;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Instructor"}),r.a.createElement("div",{className:"container container_instructor"},r.a.createElement("h1",null,u," ",m),r.a.createElement("img",{src:f,alt:"instructor_photo"}),g&&r.a.createElement("h3",null,g),p&&r.a.createElement("p",null,p),A&&r.a.createElement("p",null,A),d&&r.a.createElement("p",null,d),!g&&r.a.createElement("h2",null,"Тут будет какая-то информация")))}},165:function(e,t){e.exports="data:image/png;base64,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"},166:function(e,t,n){var a;e.exports=(a=n(176))&&a.default||a},167:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="/ok_kononov/"},168:function(e,t,n){"use strict";var a=n(174),r=n(0),i=n.n(r),o=n(5),l=n.n(o),c=n(178),s=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,l=a.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)},i.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.3.1/js/all.js"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap",rel:"stylesheet"}),i.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}),i.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"}))}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},169:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAACFElEQVRYR+2X7Y3CMAxAkwmADWAC2KAwAYwAExQmACYAJigjwATABjABMEFhgpxepVYp/YhLq7s/Z6lSpSR+dmI7jjbGGCWQ1+uljsejul6v0WfLYDBQfOPxWLXbbYE2pbQLfD6f1WKxyMCKtGPAZrNRw+Gw1IBCMF4BBPyNAMYADMmTXPB+v4+gbG8dYduBT6fTjJoMGOhsNqvDy6wNgiADT4GrQvv9fiqYOJ73+51r9Cc8AbNoNBqJthfg4XBQ3W43BeFcL5dLLphtP51OyZkn4LJFtqZWq6Uej0du2rh0MA4cicBELt5KhFzF2zxxgVkDmHkRmJC/3W4Srloul2q1WiVz+V+v16K1TIq91vf73fR6PfHCumBAYRgqHQSBkaQPZ8vOkJN2XpIJfEhZVNueEeHa932z2+2cHnue56xikjMG5Pu+0p7nmaIUsK2RgEmv5/MpcqJRsNbaCWUCTojBscYmgutvwdLgatLjKLik6dQkOEqnMAxNp9MRBQWTmjjjqID8dsnkZqPQVL4k6nqcuiTi4i0pJHXAdhFKNQKUvKIOom5wUeu5fuPmr3LrQ1m0Ow+aAj6XFLY+8cKqfZcLyLiz2bPh8/ncue0uKNu73W5l7W2sjJAHLgm4PAMIJKCVGnpbEQGBAdLWiDwF+PUT5tMLXhU0eWWPtslk0tyjzXWO3447X4vfKnat+we7dqix8R//grGn93k7agAAAABJRU5ErkJggg=="},170:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAACgUlEQVRYR+2XTa7BUBTHT1eAHbACrKAsQLABYWpSpkZmhpiaFCvABrACrKB2UOaSvvyaXKFuv4j3Ju8mBtLe+ztf/3NPDc/zPEmwLpeLrNdrOR6P/u9xlUol4Vev1yWbzSY4TcSIA+92O+n3+y+wsNMxYDweS6VSiTQgFIxXAAG/swBjAIbolhY8n899KOH9ZBF24O12++WYFzDQTqfzCe9lr23bL/An8Degyoog/A4mp9Vq9ePwhoWKsG+323vO72CKYb/fa/dlMhk/VBRKPp/XvnM+n/3KJ2rX61X7DgzgLB9M5eKtbpmmKavVKrE+KUgAp9NJex5gnvtgPNG9iKd4kqQp3G43mc1m0u12/XQRGZ3nsA6HgxiO43iFQkFrnWVZMplMElX4YDCQ0Wgkm81GarWa9Ho9mU6n2r2u64ph27YXJh+dDPCG91XbVI2CqCyXS2m1Wj4sSiGca1iW5YVZpvKhzAZKdFSxKQAhdRznKSVRdUMkDdM0vbBqDoIbjcb9klB5xxjyhud4qVZcwaYCUzDIajgcPuWO/4vFwvf618F4iwK+AsZb0oIcHkNdLpcFvacKddriIty5XO7e9IEhj6DeY4vrHTmhUXVPU1RoPdhkYuXkuq6HB7qVpoEE98c2kKiWiRdBfSZpY4SdvOsGiWKx6Esy9pJAo+g5Sb/GKKDNZjN0Rnu6JNgQdS0CTXMtho1MVL6qjadBAHjYXZokxFHv0GaBquHv70cfZe035q7YYe8Rjhw+DTvhReOJxlsFp+SBh91ccTmnkICmGugfD6UgMCBshgoagE4Bvv0JEzwQiTD0RX20cV8n1XvsR1tcSN99/g9+N3Kp9/1ZqH8Aoq0RtmNcbtcAAAAASUVORK5CYII="},171:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAACZElEQVRYR+2X77XxQBCHdytAB1SACkIFdIAKQgV0gApCBagAHVBBqCBUkPc8e87mbDb/Fvd1v9w5x4d7M9lndua3sxMZx3EsHOzxeIjD4SAul4v6mdbpdAS/wWAg6vW6w2pCyCrw6XQSs9ksAytanQCWy6Xo9XqlARSC2RVAwO8YYAIgkDzLBW82GwUlvZ8YaQc+Ho8zy2TAQCeTySe8zLtBEGTgKfD/gOoobHgCpqb9fv/j9BalirQfj8ek5gkYMZzP5x9Nsb0YDOCYAqNcdvsNA0wACozkr9frN7gKClyGYRi3Wi0nqOd5qcZwu93Edrt1etd0iqJIyCAIYvP40Pb2+33iZ5ZhOByK3W6XAkkpk7/n87lYLBaFz02FS9/34/V6nXIOw1A0m83kf6bwdI30Qw2u1WqCDJi9ukg7vu8L6XlebKt5NBoJzrQ2c4EisL1bul6321XB2EbJcsE42rsmzdxOeeB2u525RGiTRfUvBdv1ZAcsRibMdOJHXc3LoKoDloLZtb07V/kS2PP5LHRX4Dxx6TdYgJS7Xu76vbI046PEZR+nsjbnumP8yuBcGDKKorjRaJSuSR1xzts5gPv9rs63/bwIrhqIa8tEPIiIBmOaricQgjMNQdIPzHrrE/DyJQHIVLA5GtFozFkL8Gq1SgWTuiR48o1rETXrQFODAPCyY/CKuGxfWipQna3fH310hFVd551dVw57Jnw6nX6cdtKLuJzGWw1n+AP+7hyGkIC+NNCb6UQQBOA6GnFOAb79CWPXkjPJZFL20UaHc+3rlR9t74jJ5Z0/sEuWfsTn11L9D/6Yvac+UK6xAAAAAElFTkSuQmCC"},172:function(e,t,n){"use strict";var a=n(175),r=n(0),i=n.n(r),o=n(5),l=n.n(o),c=n(173),s=n(19),u=n(167),m=function(){var e=function(e){Object(s.navigate)(u.a+"/training-programs?category="+e)},t=function(e){Object(s.navigate)(u.a+"/instructor?name="+e,{state:e})},a=function(e){Object(s.navigate)(u.a+"/store/",{state:e})};return i.a.createElement("aside",{className:"navbar"},i.a.createElement("img",{alt:"logo",src:n(177)}),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.a,{to:"/"},"Главная")),i.a.createElement("li",null,"Тренировки",i.a.createElement("ul",{className:"aside_ul"},i.a.createElement("img",{className:"sideBar_logo",src:n(165),alt:"dawf"}),i.a.createElement("li",{onClick:function(){return e("all")}},"Все..."),i.a.createElement("li",{onClick:function(){return e("basic")}},"Basic"),i.a.createElement("li",{onClick:function(){return e("middle")}},"Middle"),i.a.createElement("li",{onClick:function(){return e("advance")}},"Advance"))),i.a.createElement("li",null,"Магазин",i.a.createElement("ul",{className:"aside_ul"},i.a.createElement("img",{className:"sideBar_logo",src:n(165),alt:"dawf"}),i.a.createElement("li",{onClick:function(){return a()}},"Все..."),i.a.createElement("li",{onClick:function(){return a()}},"Fitness дома"),i.a.createElement("li",{onClick:function(){return a()}},"Fitness для всех"),i.a.createElement("li",{onClick:function(){return a()}},"Pro Fitness"),i.a.createElement("li",{onClick:function(){return a()}},"Другое"))),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/blog"},"Блог")),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/calendar"},"Календарь")),i.a.createElement("li",null,"Команда",i.a.createElement("ul",{className:"aside_ul"},i.a.createElement("img",{className:"sideBar_logo",src:n(165),alt:"dawf"}),i.a.createElement("li",{onClick:function(){return t("alex_kononov")}},"Alex Kononov"),i.a.createElement("li",{onClick:function(){return t("viktorya_kononova")}},"Viktoriya Kononova"),i.a.createElement("li",{onClick:function(){return t("alex_koltakov")}},"Alexey Koltakov"),i.a.createElement("li",{onClick:function(){return t("aleksandr_okhotenko")}},"Aleksandr Okhotenko"))),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/feedback"},"Отзывы")),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/contacts"},"Контакты")))),i.a.createElement("div",{className:"aside_bottom_block"},i.a.createElement("div",{className:"sign_in"},i.a.createElement("span",null," sign in"),i.a.createElement("i",{className:"fas fa-sign-in-alt fa-rotate-180"})),i.a.createElement("div",{className:"sign_out"},i.a.createElement("span",null,"sign out"),i.a.createElement("i",{className:"fas fa-sign-in-alt "})),i.a.createElement("div",{className:"aside_bottom"},i.a.createElement("select",null,i.a.createElement("option",{value:"Russian"},"Russian"),i.a.createElement("option",{value:"Engish"},"English")),i.a.createElement("div",null,i.a.createElement("img",{alt:"facebook_logo",src:n(169)}),i.a.createElement("img",{alt:"instagram_logo",src:n(170)}),i.a.createElement("img",{alt:"vk_logo",src:n(171)})))))},f=function(e){e.siteTitle;return i.a.createElement("header",null)};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var g=f,p=function(){return i.a.createElement("footer",{className:"section "},i.a.createElement("span",null,"© 2019 Oleksiy Kononov Team"),i.a.createElement("ul",null,i.a.createElement("li",null,"Конфеденциальность"),i.a.createElement("li",null,"Согласие с рассылкой"),i.a.createElement("li",null,"Договор оферты"),i.a.createElement("li",null,"Ответственность"),i.a.createElement("li",null,"Оплата")),i.a.createElement("span",null,"Вернутся к началу"))},A=(n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),function(e){var t=e.children,n=a.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:n.site.siteMetadata.title}),i.a.createElement(m,null),i.a.createElement("main",null,t,i.a.createElement(p,null)))});A.propTypes={children:l.a.node.isRequired};t.a=A},173:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(41),c=n.n(l);n.d(t,"a",function(){return c.a}),n.d(t,"b",function(){return l.navigate});n(166),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},176:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(65),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},177:function(e,t,n){e.exports=n.p+"static/logo-3f217f460a6304ee675e72149d79e9d5.png"},198:function(e,t,n){var a=n(12).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},201:function(e,t,n){"use strict";t.a=[{_id:"wff7e93223g87sEGg",img:n(202),single_page_img:n(203),alt:"kononova",name:"Виктория",url_name:"viktorya_kononova",family_name:"Кононова",position:"Методист OK Team",description:"Мастер Спорта по Художественной Гимнастике.",p_1:"  Привет. Меня зовут Вика, со мной на ты.",p_2:"Я профессиональный спортсмен, Мастер Спорта по художественной гимнастике. А также сертифицированный тренер таких направлений , как стретчинг, пилатес и fly йога.",p_3:"А ещё я реабилитолог по образованию, но в этой области моим главным достижением есть Я сама. После профессионального спорта остаются многочисленные травмы и болевые ощущения, от которых я самостоятельно избавилась всего за год с помощью пилатеса и фитнес стрейчинга.",p_4:"Именно поэтому я создала свою авторскую программу «Шпагат за 6 недель» , которая будет направленна на достижение подтянутости и рельефности вашего тела, увеличения амплитуды в суставах и эластичности мышц, улучшение координации.... Но, в первую очередь - НА ЗДОРОВЬЕ"},{_id:"wff7e9gsg87sEGg",img:n(204),single_page_img:n(205),alt:"kononov",url_name:"alex_kononov",name:"Алексей",family_name:"Кононов",position:"Просто Хороший Парень",description:"Мастер Спорта по Спортивной Гимнастике.",p_1:"Привет, Спортик.",p_2:"Я - Артист Cirque Du Soleil а это значит, что каждый день я делаю невероятные трюки в одном из лучших шоу Мира Alegria, этим напоминаю себе и тебе, что человеческие возможности безграничны. ",p_3:"В период с 1991 по 2007 гг. я был Гимнастом. Звания Мастера Спорта и тренировки в составе Олимпийской Сборной Команды Украины дали бесценный опыт, а именно: опыт использования своего тела на высочайшем уровене и опыт построения тренировочного процесса для достижения результата.",p_4:"Давай тренироваться вместе."},{_id:"wff7eda2f29gsg87sEGg",img:n(206),single_page_img:n(207),alt:"Aleksandr",name:"Александр",url_name:"aleksandr_okhotenko",family_name:"Охотенко",position:"Методист OK Team",description:"Мастер Спорта по Спортивной Гимнастике."},{_id:"wffcnbawad67eda2f29gsg87sEGg",img:n(208),single_page_img:n(209),alt:"Alexey",url_name:"alex_koltakov",name:"Алексей",family_name:"Колтаков",position:"Видео Дизайнер OK Team",description:"Мастер Спорта по Спортивной Гимнастике."}]},202:function(e,t,n){e.exports=n.p+"static/kononova-9c936e991449e084e0827412182b8ddb.png"},203:function(e,t,n){e.exports=n.p+"static/kononova_big-8abf4f8f79798a0b815309247d7f0c67.png"},204:function(e,t,n){e.exports=n.p+"static/kononov-58545c353d5998fa98effa87678d46d6.png"},205:function(e,t,n){e.exports=n.p+"static/kononov_big-246ccdde3f796e48842734fc65f08b80.png"},206:function(e,t,n){e.exports=n.p+"static/okhotenko-d724dc297776e9ecc2cd3330567b9677.png"},207:function(e,t,n){e.exports=n.p+"static/okhotenko_big-53d011fd3e628f8d42f21625467dfae8.png"},208:function(e,t,n){e.exports=n.p+"static/koltakov-39d1918806071f93e4c2411bc6a3fd7d.png"},209:function(e,t,n){e.exports=n.p+"static/koltakov_big-e77cff539c50dc10fde1382bc591ebf5.png"},210:function(e,t,n){"use strict";var a=n(9),r=n(211)(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),a(a.P+a.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(67)("find")},211:function(e,t,n){var a=n(20),r=n(66),i=n(31),o=n(17),l=n(212);e.exports=function(e,t){var n=1==e,c=2==e,s=3==e,u=4==e,m=6==e,f=5==e||m,g=t||l;return function(t,l,p){for(var A,d,E=i(t),v=r(E),k=a(l,p,3),b=o(v.length),C=0,R=n?g(t,b):c?g(t,0):void 0;b>C;C++)if((f||C in v)&&(d=k(A=v[C],C,E),e))if(n)R[C]=d;else if(d)switch(e){case 3:return!0;case 5:return A;case 6:return C;case 2:R.push(A)}else if(u)return!1;return m?-1:s||u?u:R}}},212:function(e,t,n){var a=n(213);e.exports=function(e,t){return new(a(e))(t)}},213:function(e,t,n){var a=n(7),r=n(100),i=n(3)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}}}]);
//# sourceMappingURL=component---src-pages-instructor-index-js-1f4634ab9be949c318b8.js.map