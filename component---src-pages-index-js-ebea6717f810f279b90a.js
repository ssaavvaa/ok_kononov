(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=function(){return i.a.createElement("section",{className:"section header"},i.a.createElement("h4",null,"OLEKSYI KONONOV TEAM"),i.a.createElement("h1",null,"Развивая себя побуждаю к действию Тебя."),i.a.createElement("h3",null,"Статьи, Программы Тренировок, Тренинги от Гимнаста и Артиста ",i.a.createElement("strong",null,"Cirque DuSoleil")," Алексея Кононова"),i.a.createElement("div",{className:"header__desc"},i.a.createElement("div",{className:"fresh__news"}),i.a.createElement("figure",{className:"Alex__photo"},i.a.createElement("img",{alt:"dawfawf",src:a(262)}),i.a.createElement("figcaption",null,"тут о том какой Алексей Кононов масте фломастер супер гимнасти и мега человек"))),i.a.createElement("button",{onClick:function(){document.querySelector(".main__page-2").scrollIntoView({block:"start",behavior:"smooth"})},className:"arrow__down"},i.a.createElement("i",{className:"fas fa-arrow-down "})))},c=function(){return i.a.createElement("div",{className:"main__page-2"},i.a.createElement("div",{className:"secondSection__block"},i.a.createElement("h3",null,"Моя Миссия - вовлекать как можно больше людей в здоровый образ жизни. Своим примером мотивировать к переменам.")),i.a.createElement("div",{className:"secondSection__block"},i.a.createElement("h2",null,"Общая Физическая подготовка"),i.a.createElement("p",null,"Программа Тренировок по Гимнастике для Любителей на 4 недели. Начни сейчас"),i.a.createElement("button",null,"Начать тренировки бесплатно")))},l=a(8),s=a.n(l),o=a(175),d=a(19),g=a(173),p=a(286),m=a(287),u=a(288),f=new p.a,h=(m.a,u.a,function(e){function t(t){var a;return(a=e.call(this,t)||this).state={current:0},a}s()(t,e);var a=t.prototype;return a.flash=function(){f.to(this.image,0,{opacity:.2}).to(this.image,1.5,{opacity:1})},a.toRight=function(){return this.state.current!==o.a.length-1?this.setState({current:this.state.current+1}):this.setState({current:0})},a.toLeft=function(){return 0!==this.state.current?this.setState({current:this.state.current-1}):this.setState({current:o.a.length-1})},a.onEnter=function(){var e=document.querySelector(".arrow-right"),t=document.querySelector(".arrow-left");e.style.backgroundColor="rgba(0, 0, 0, 0.151)",t.style.backgroundColor="rgba(0, 0, 0, 0.151)"},a.onLeave=function(){var e=document.querySelector(".arrow-right"),t=document.querySelector(".arrow-left");e.style.backgroundColor="transparent",t.style.backgroundColor="transparent"},a.render=function(){var e=this,t=o.a[this.state.current],a=t._id,n=t.heading,r=t.description,c=t.target,l=t.level,s=t.main_img,p=t.isFree,m=t.price,u=t.alt,f=t.old_price;return i.a.createElement("div",{className:"container courses_wrapper",onMouseEnter:this.onEnter.bind(this),onMouseLeave:this.onLeave.bind(this)},i.a.createElement("h2",null,"Choose your program"),i.a.createElement("figure",{ref:function(t){return e.image=t},className:"card-lesson"},i.a.createElement("img",{alt:u,src:s}),i.a.createElement("figcaption",null,i.a.createElement("h3",null,n),i.a.createElement("p",null,i.a.createElement("small",null,r)),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("u",null,"Цель:")," "),i.a.createElement("small",null,c)),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("u",null,"Уровень:")," "," "),i.a.createElement("small",null,l)),p?i.a.createElement("p",null,"Бесплатно"):i.a.createElement("div",null,i.a.createElement("span",null,"$",m)," ",i.a.createElement("span",null,i.a.createElement("del",null,f&&""+f))),i.a.createElement("button",{onClick:function(){return e=a,void Object(d.navigate)(g.a+"/training-programs/training?_id="+e,{state:{e:e}});var e}},i.a.createElement("small",null,"Подробнее")))),i.a.createElement("button",{className:"arrow-right",onClick:this.toRight.bind(this)},i.a.createElement("i",{className:"fas fa-chevron-right "})),i.a.createElement("button",{className:"arrow-left",onClick:this.toLeft.bind(this)},i.a.createElement("i",{className:"fas fa-chevron-left"})))},t}(i.a.Component)),y=a(196),_=function(e){var t=e.alt,r=e.src,c=e.inst;return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"image-item"},i.a.createElement("img",{alt:t,src:r,inst:c}),i.a.createElement("div",{className:"image_links"},i.a.createElement("img",{alt:"instagram_logo",src:a(264)}))))},E=[{id:"dq239ffawf3g8s8dg",alt:"alexey kononov",src:a(265),link_inst:"#"},{id:"983qffawfh4a8hg-94h",alt:"alexey kononov",src:a(266),link_inst:"#"},{id:"93wtfawffgw38th32th",alt:"alexey kononov",src:a(267),link_inst:"#"},{id:"8f4e0fafawghz74h",alt:"alexey kononov",src:a(268),link_inst:"#"}],v=function(){var e=Object(y.a)({triggerOnce:!0,threshold:0,rootMargin:"50px"}),t=e[0],a=e[1];return i.a.createElement("div",{className:"insta_photos_section"},i.a.createElement("h2",{className:" instagram-header"},"FOLLOW ME ON INSTAGRAM"),i.a.createElement("div",{ref:t,className:" images-section"},E.map(function(e){return i.a.createElement(_,{key:e.id,src:a?e.src:"#",alt:e.alt,inst:e.link_inst})})))},z=(a(215),function(e){var t=e.alt,a=e.src,n=e.link,r=e.date,c=e.heading,l=e.description,s=Object(y.a)({triggerOnce:!0,threshold:0,rootMargin:"50px"}),o=s[0],p=s[1];return i.a.createElement("figure",{className:"blog__item-wrapper",onClick:function(){return e=n,void Object(d.navigate)(g.a+"/blog/"+e);var e}},i.a.createElement("div",null,i.a.createElement("img",{alt:t,ref:o,src:p?a:""})),i.a.createElement("figcaption",null,i.a.createElement("p",null,i.a.createElement("small",null,r)),i.a.createElement("h3",null,c),i.a.createElement("p",null,i.a.createElement("small",null,l))))}),k=[{id:"dmvca-48-48ah4",alt:"sport-rules",img_src:a(270),date:"THURSDAY, JUNE 27",heading:"5 правил Спортсмена",link:"five_rules/",description:"Хочешь крутых результатов как у профессиональных спортсменов? Мысли как они."},{id:"dcmc08942-v43h",alt:"success skills",img_src:a(271),date:"SUNDAY, JUNE 23",heading:"7 навыков Успешного тренера ",link:"success-coach-skills/",description:"Мысли Стивена Кови подойдут для любого кто хочет жить на полную."},{id:"dam938f-gaf7a4hg4",alt:"fitness-industry",img_src:a(272),date:"SATURDAY, JUNE 22",link:"fitness-history",heading:"История зарождения Фитнес индустрии ",description:"или Страх лучший двигатель прогресса "},{id:"dc38f-4g4e8yh",img_src:a(273),alt:"training-target",date:"SATURDAY, JUNE 22",heading:"Как поставить цель в тренировках?",description:"Чтоб почувствовать себя счастливым, нужно как можно точнее определить Критерии счастья."},{id:"dacw3c183wrh273t2",alt:"team-work",img_src:a(274),date:"FRIDAY, JUNE 21",link:"team-work",heading:"5 правил работы в команде",description:"по стандартам Cirque Du Soleil."},{id:"dmzf84f93f4a94e",alt:"my-history",img_src:a(275),date:"FRIDAY, JUNE 21",heading:"Моя История",description:"Свет прожекторов, 12 метров над землей, Montreal. На меня с восторгом смотрит 5000 человек, которые не знают русского языка, но прекрасно понимают. "}],b=function(){return i.a.createElement("section",{className:"section blog-wrapper"},i.a.createElement("h2",null,"VISIT MY BLOG"),i.a.createElement("div",{className:"container blog-wrapper-container"},k.map(function(e){return i.a.createElement(z,{key:e.id,link:e.link,src:e.img_src,heading:e.heading,date:e.date,description:e.description})}).slice(0,2)),i.a.createElement("div",{className:"redirect_page"},i.a.createElement("p",{onClick:function(){Object(d.navigate)(g.a+"/blog/")}},"GO TO PAGE")))},w=function(){return i.a.createElement("form",{className:"subscribe-form"},i.a.createElement("h2",null,"Подпишись на Обновления"),i.a.createElement("p",null,"Тренировочные комплексы, Статьи, Влоги, Подарки из закрытой Базы Знаний. Самая свежая информация из головы Артиста Cirque Du Soleil."),i.a.createElement("div",null,i.a.createElement("input",{type:"email",placeholder:"Ваш Email"}),i.a.createElement("button",null,"Подписаться")))},x=function(){return i.a.createElement("div",{className:"product__promotion"},i.a.createElement("div",{className:"divider_promotion"},i.a.createElement("img",{alt:"product_image",src:a(276)})),i.a.createElement("div",{className:"divider_promotion"},i.a.createElement("button",null,"Go To Store"),i.a.createElement("h2",null,"CHECK OUT KONONOV'S BEST SELLER FEATURED FITNESS BALLS!")))},N=(a(195),a(198)),j=function(e){var t=e.url_name,a=e.img,n=e.alt,r=e.name,c=e.family_name,l=e.position,s=e.description;return i.a.createElement("li",{onClick:function(){return e=t,void Object(d.navigate)(g.a+"/instructor?name="+e,{state:e});var e}},i.a.createElement("img",{alt:n,src:a}),i.a.createElement("h3",null,r," ",c),i.a.createElement("p",null,i.a.createElement("small",null,l)),i.a.createElement("p",null,s),i.a.createElement("div",{className:"hider_instructor"},r," инфо"))},O=function(){return i.a.createElement("section",{className:"container instructors-section"},i.a.createElement("h2",null,"Знакомьтесь, Oleksiy Kononov Team"),i.a.createElement("h3",null,"Крутые Ребята, которые работают каждый день, чтоб создать для вас Бомбезные Программы Тренировок и Сделать вас хотя бы чуточку счастливее."),i.a.createElement("ul",null,N.a.map(function(e){return i.a.createElement(j,{url_name:e.url_name,key:e._id,name:e.name,family_name:e.family_name,position:e.position,description:e.description,img:e.img,alt:e.alt})})))},S=function(){return i.a.createElement("section",{className:" contacts__container"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,"Наши Контакты"),i.a.createElement("h3",null,"Есть вопрос? Звони, пиши нам. Мы открыты для общения и рады вам."),i.a.createElement("div",{className:"contacts__info"},i.a.createElement("div",null,i.a.createElement("p",null,"+38 050 101 72 55"),i.a.createElement("p",null,"oleksiykononovb2c@gmail.com"),i.a.createElement("p",null,i.a.createElement("small",null,"8400 2nd Avenue, 22, Montreal, QC H1Z 4M6 Alegria")),i.a.createElement("div",null,i.a.createElement("i",{className:"fab fa-facebook-f"}),i.a.createElement("i",{className:"fab fa-instagram"}),i.a.createElement("i",{className:"fab fa-vk"}))),i.a.createElement("form",null,i.a.createElement("input",{type:"email",placeholder:"Твой Email"}),i.a.createElement("input",{type:"text",placeholder:"Как могу к тебе обращаться?"}),i.a.createElement("input",{type:"textarea",placeholder:"Коментарий"}),i.a.createElement("button",null,"Отправить")))))},C=a(169),F=a(277),A=a(168),T={width:"55px",height:"55px",padding:"4px",focus:"none",outline:"none",border:"0px",boxShadow:"0px 0px 2px 2px black",zIndex:100};t.default=function(){return i.a.createElement(C.a,null,i.a.createElement(A.a,{title:"Home"}),i.a.createElement(F.CircleArrow,{style:T}),i.a.createElement(r,null),i.a.createElement(c,null),i.a.createElement(h,null),i.a.createElement(x,null),i.a.createElement(v,null),i.a.createElement(b,null),i.a.createElement(w,null),i.a.createElement(O,null),i.a.createElement(S,null))}},170:function(e,t,a){e.exports=a.p+"static/single_page-bd461a05f0844f14c2eab61acfb5261c.png"},171:function(e,t,a){e.exports=a.p+"static/1-a296f5cf42bde1f7332f7d016b02265b.png"},172:function(e,t,a){e.exports=a.p+"static/1-be5a1f7121c7d9192676f5dc3643087c.png"},175:function(e,t,a){"use strict";t.a=[{_id:"d0awy087tdaw322",alt:"handstand",category:"basic",main_img:a(170),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:23,old_price:null,date:1562310623075,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"Программа Тренировок с собственным весом тела на 42 дня",includes:"В программе ты найдешь Тренировки по Гимнастике, подготовительные мастер классы для укрепления плеч и рук, восстановительные тренировки и Кардио.Тебя ждут 42 увлекательных дня.",images:[{alt:"basic_hand_stando-1",src:a(170)},{alt:"basic_hand_stand-2",src:a(176)},{alt:"basic_hand_stand-3",src:a(177)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmgze4wv3va4et87gahe"},{p:"Четкая дозировка",key:"vz0rvz7he4zg40eht7zegb"},{p:"Журнал Тренировок",key:"czrze4hg04e7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"fasegzrhh55rjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgzee4hza3t-8tz88da"},{p:"Виртуальный помощник",key:"dnzvlgnh4h5rpzgdrguzdnh"}],course_for:[{key:"vmzrg4yze4hje48zyhe4zy",heading:"Занимаешься CrossFit",description:"Хочешь побед на соревнованиях, технично стоять и ходить на руках?"},{key:"vzlze4gzl4g4gz5eye48",heading:"Любишь Гимнастику",description:"Занимаешься профессианально или как любитель?"},{key:"vznfsege4zhgzspeugfb4t",heading:"Занимаешься WorkOut",description:"Хочешь быть Круче всех выполняя технично стойку на улице?"},{key:"dzmgzpg4-tz4teey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzpee4gsgpxywzwt4ey",heading:"42 тренировочных дня",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"cvmosept4ygoesgeogose",heading:"Более 50 оригинальных упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"dawflvzg48ghe4zhze8yh",heading:"5 видов тренировок",description:"Тренировки по Гимнастике, укрепление рук и плечевого пояса, а также кардио и восстановительные занятия."},{key:"vmzgzze48sg-e4y8z558",heading:"Личный кабинет",description:"Вся информация структурированна в одном месте, удобно для использования на компьютере и телефоне"},{key:"nvzsgzge48eh4ez4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgzeeg4yze4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedwawm,cgydpawf7aw",heading:"Подготовительный цикл",description:"Этот цикл будет логическим продолжением первой программы, основной акцент сделан на адаптацию мышц кора."},{key:"cnezswt,cgyjzw3tgw3tw38",heading:"Основной Цикл",description:"На этом тренировочном отрезке ты укрепишь плечи, кисти. Особое внимание будет уделено выходу в стойку."},{key:"aawf72jgcycgk2037thg499",heading:"Предстартовый Цикл",description:"На этом тренировочном отрезке ты большую часть времени проведешь стоя на руках, освоишь как ловить баланс и корректировать стойку."}]}},{_id:"d0awydawncabwd2524",alt:"handstand",category:"basic",main_img:a(171),heading:"Стойка на Руках PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:56,isFree:!1,old_price:109,date:1562310623021,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"Программа Тренировок с собственным весом тела на 42 дня",includes:"В программе ты найдешь Тренировки по Гимнастике, подготовительные мастер классы для укрепления плеч и рук, восстановительные тренировки и Кардио.Тебя ждут 42 увлекательных дня.",images:[{alt:"hand_stand_pro-1",src:a(171)},{alt:"hand_stand_pro-2",src:a(178)},{alt:"hand_stand_pro-3",src:a(179)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmwv3va4et87gahe"},{p:"Четкая дозировка",key:"vz0rvz7g40eht7zegb"},{p:"Журнал Тренировок",key:"czrg04e7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"fasegzrhrjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgza3t-8tz88da"},{p:"Виртуальный помощник",key:"dnzvlgnrpzgdrguzdnh"}],course_for:[{key:"vmzrg4y-e48zyhe4zy",heading:"Занимаешься CrossFit",description:"Хочешь побед на соревнованиях, технично стоять и ходить на руках?"},{key:"vzlgzl4g4gz5eye48",heading:"Любишь Гимнастику",description:"Занимаешься профессианально или как любитель?"},{key:"vznfsegzspeugfb4t",heading:"Занимаешься WorkOut",description:"Хочешь быть Круче всех выполняя технично стойку на улице?"},{key:"dzmgzpg4-eey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzp4gsgpxywzwt4ey",heading:"42 тренировочных дня",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"cvmosepgoesgeogose",heading:"Более 50 оригинальных упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"dawflvzg48gze8yh",heading:"5 видов тренировок",description:"Тренировки по Гимнастике, укрепление рук и плечевого пояса, а также кардио и восстановительные занятия."},{key:"vmzgz8sg-e4y8z558",heading:"Личный кабинет",description:"Вся информация структурированна в одном месте, удобно для использования на компьютере и телефоне"},{key:"nvzsgzge48e4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgg4yze4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedwawdpawf7aw",heading:"Подготовительный цикл",description:"Этот цикл будет логическим продолжением первой программы, основной акцент сделан на адаптацию мышц кора."},{key:"cnezswtzw3tgw3tw38",heading:"Основной Цикл",description:"На этом тренировочном отрезке ты укрепишь плечи, кисти. Особое внимание будет уделено выходу в стойку."},{key:"aawf722037thg499",heading:"Предстартовый Цикл",description:"На этом тренировочном отрезке ты большую часть времени проведешь стоя на руках, освоишь как ловить баланс и корректировать стойку."}]}},{_id:"d0daw6adw9d87a",alt:"abdomen-exercise",category:"basic",main_img:a(172),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:30,isFree:!1,old_price:44,date:1562310343021,single_page:{instructor:"Виктория Кононова",link_instructor:"viktorya_kononova",short_description:"Программ Тренировок от Мастера Спорта по Художественной Гимнастике",includes:"В программе для тебя Тренировки по Гимнастике, Подготовительные мастер классы, Pilates и Кардио. Тебя ждут 42 увлекательных дня.",images:[{alt:"hand_stand_pro-1",src:a(172)},{alt:"hand_stand_pro-2",src:a(180)},{alt:"hand_stand_pro-3",src:a(181)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmwvjsfshjzdrn87gahe"},{p:"Четкая дозировка",key:"vz0rvhzdr5jzdjzeht7zegb"},{p:"Журнал Тренировок",key:"czhzdrhzdrh7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"faszzzzzrhrjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgzahzdrht-8tz88da"}],course_for:[{key:"vmzg4hrg4y-e48zyhe4zy",heading:"ЗАНИМАЕШЬСЯ В ТРЕНАЖЕРНОМ ЗАЛЕ ИЛИ CROSSFIT",description:"Любишь силовые тренировки, но не знаешь как растягиваться после них?"},{key:"vzhxdlgzl4g4gz5eye48",heading:"ЛЮБИШЬ ГИМНАСТИКУ ИЛИ POLE DANCE",description:"Для достижения цели твоем арсенале не хватает упражнений из профессионального спорта?"},{key:"vznfseghk6zspeugfb4t",heading:"ХОЧЕШЬ УДИВИТЬ СВОЮ ПОЛОВИНКУ",description:"Не знаешь как внести разнообразие в личную жизнь?"},{key:"dzmgzpg47546-eey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzp4gsgpxq346ywzwt4ey",heading:"Онлайн поддержка 24/7",description:"Ты можешь написать мне в любое время в директ Инстаграм и получить подробный ответ или помощь"},{key:"cvmoq346sepgoesgeogose",heading:"Пилатес тренировки",description:"Релакс тренировки на вытяжение и укрепление мышц кора и позвоночного столба"},{key:"da6wflvzg48g7w45ze8yh",heading:"36 тренировочных дней",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"vmzgz8sg-e4y8z6w47558",heading:"36 уникальных упражнений для быстрого прогресса",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"nve466zsgzge48e4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgg4yzgz4e4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedr5dgsewawdpawf7aw",heading:"LEVEL 1",description:"На этом тренировочном отрезке ты подготовишь суставы к стрейчингу Освоишь базовые гимнастические упражнения.."},{key:"cnezswurdtzw3tgw3tw38",heading:"LEVEL 2",description:"На этом тренировочном отрезке ты увеличишь эластичность мышц. Особое внимание уделишь технике и положению тела для выполнения продольного и поперечного шпагатов."},{key:"aawf7220h537thg499",heading:"LEVEL 3",description:"На этом тренировочном отрезке ты большую часть времени проведешь сидя на шпагатах разных уровней сложности. И будешь готов взять свою цель."}]}},{_id:"d0adawaw4wydawncabwd2524",alt:"exercise",category:"basic",main_img:a(182),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",price:null,isFree:!0,old_price:null,date:1562310623091,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"4-х недельная Программа тренировок Артиста Cirque Du SoleilАлексея Кононова.",includes:"Оставляй заявку и получи 4 недельную программу тренировок по Общей Физической Подготовке, абсолютно БЕСПЛАТНО.",images:null,includes_list:null,course_for:[{key:"vmzrg4y-e48za2fa2yhe4zy",heading:"НЕТ ДИСЦИПЛИНЫ",description:"Много раз начинал заниматься и бросал. Первые сложности сбивают тебя с намеченного пути."},{key:"vzlgzl4g4gz5dawfaweye48",heading:"НЕ ХВАТАЕТ ЭНЕРГИИ",description:"Нет энергии на тренировки и складывается ощущение, что нет энергии вообще. Жизнь замедляет ход."},{key:"vznfsegzdafspeugfb4t",heading:"НЕТ НУЖНОГО МОМЕНТА",description:"Никак не наступает тот самый день, та самая неделя, чтоб начать заниматься. Всегда чего-то не хватает."},{key:"dzmgzpg4-eey-4eay-ey",heading:"НЕТ МОТИВАЦИИ",description:"Не можешь найти мощный толчок, чтоб начать перемены в жизни. Хотя чувствуешь, что нужно, что-то менять."}],customer_receive:[{key:"vzp4gsgpxywzwt4ey",heading:"Более 50 упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"cvmosepgoesgeogose",heading:"3 уровня сложности",description:"Програма адаптированна под разные уровни подготовки. Ты сможешь подобрать себе упражнения по силам."},{key:"dawflvzg48gze8yh",heading:"Контроль техники выполнения",description:"Мое скурпулезное внимание к деталям, помогут сделать твои движения филигранными."},{key:"vmzgz8sg-e4y8z558",heading:"Закрытую Группу Telegram",description:"Доступ в чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками, а также получать рекомендации по технике"},{key:"nvzsgzge48e4ybe4y",heading:"Виртуального Тренера 24/7",description:"С тобой будет работать мой виртуальный помощник, он будет вести по программе, мотивировать, собирать обратную связь"},{key:"vnzgg4yze4ye4y04ey",heading:"3 образовательных вебинара",description:"Доступ к секретной информации для тренеров, которая поможет борьбу с мифами и сделает твои тренировки более осознанными."}],course_steps:null}},{_id:"d0awyfFg087tdaw322",alt:"handstand",category:"middle",main_img:a(183),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:30,old_price:29,date:1562320623021},{_id:"d0awydj6tawncabwd2524",alt:"handstand",category:"middle",main_img:a(184),heading:"Стойка на Руках Уровеь PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:19,isFree:!1,old_price:29},{_id:"d0djs6rjaw6adw9d87a",alt:"abdomen-exercise",category:"middle",main_img:a(185),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:14,isFree:!1,old_price:29},{_id:"camwcnjsmfyaw8da5w43",alt:"abdomen-exercise",category:"middle",main_img:a(186),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",isFree:!0,price:"",old_price:"",date:1562310623051},{_id:"d0dfFg023523tdaw322",alt:"handstand",category:"advance",main_img:a(187),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:48,old_price:29,date:1562310623081},{_id:"d0awh65679wncabwd2524",alt:"handstand",category:"advance",main_img:a(188),heading:"Стойка на Руках Уровеь PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:10,isFree:!1,old_price:29,date:1562230623021},{_id:"d0djs6r64879w6adw9d87a",alt:"abdomen-exercise",category:"advance",main_img:a(189),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:100,isFree:!1,old_price:29,date:1561310623021},{_id:"camwcn57e458jnxfyaw8da5w43",alt:"abdomen-exercise",category:"advance",main_img:a(190),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",isFree:!0,price:"",old_price:"",date:1562310628021}]},176:function(e,t,a){e.exports=a.p+"static/2-67b32f6c399e5d1ea451787d3eddc55a.png"},177:function(e,t,a){e.exports=a.p+"static/3-af7cb0762a0d44134c8a107cd2548b7b.png"},178:function(e,t,a){e.exports=a.p+"static/2-ce161d3133d533a238c54ae52ad897fc.png"},179:function(e,t,a){e.exports=a.p+"static/3-b33121c45ff19ff69b06b77ced00f9dd.png"},180:function(e,t,a){e.exports=a.p+"static/2-bccf4ce41e2872824ca49e782918cf4e.png"},181:function(e,t,a){e.exports=a.p+"static/3-af7cb0762a0d44134c8a107cd2548b7b.png"},182:function(e,t,a){e.exports=a.p+"static/1-bd3e03b50f81331fe93c6e792b09a2ae.png"},183:function(e,t,a){e.exports=a.p+"static/1-3f97d7ec601574f4abde3ba8c46dde95.jpg"},184:function(e,t,a){e.exports=a.p+"static/2-7ee019e595cfbaad23817f07b5e52df8.jpg"},185:function(e,t,a){e.exports=a.p+"static/3-efa58147e33ed362a3a5674b934a8ad7.jpg"},186:function(e,t,a){e.exports=a.p+"static/4-e936ef970829df61cc3d16c4ec5eb33f.jpg"},187:function(e,t,a){e.exports=a.p+"static/1-c13a6063ecc90794b7710bb5c752a212.jpg"},188:function(e,t,a){e.exports=a.p+"static/2-843d5f6fe533ace20043b2b07afe6698.jpg"},189:function(e,t,a){e.exports=a.p+"static/3-d4fd91cbcd8ea6054caf9f3896566422.jpg"},190:function(e,t,a){e.exports=a.p+"static/4-07571e90b3110f9e755001353c1f0790.jpg"},198:function(e,t,a){"use strict";t.a=[{_id:"wff7e93223g87sEGg",gender:"female",img:a(199),single_page_img:a(192),alt:"kononova",name:"Виктория",url_name:"viktorya_kononova",family_name:"Кононова",position:"Методист OK Team",description:"Мастер Спорта по Художественной Гимнастике.",p_1:"  Привет. Меня зовут Вика, со мной на ты.",p_2:"Я профессиональный спортсмен, Мастер Спорта по художественной гимнастике. А также сертифицированный тренер таких направлений , как стретчинг, пилатес и fly йога.",p_3:"А ещё я реабилитолог по образованию, но в этой области моим главным достижением есть Я сама. После профессионального спорта остаются многочисленные травмы и болевые ощущения, от которых я самостоятельно избавилась всего за год с помощью пилатеса и фитнес стрейчинга.",p_4:"Именно поэтому я создала свою авторскую программу «Шпагат за 6 недель» , которая будет направленна на достижение подтянутости и рельефности вашего тела, увеличения амплитуды в суставах и эластичности мышц, улучшение координации.... Но, в первую очередь - НА ЗДОРОВЬЕ"},{_id:"wff7e9gsg87sEGg",gender:"male",img:a(200),single_page_img:a(191),alt:"kononov",url_name:"alex_kononov",name:"Алексей",family_name:"Кононов",position:"Просто Хороший Парень",description:"Мастер Спорта по Спортивной Гимнастике.",p_1:"Привет, Спортик.",p_2:"Я - Артист Cirque Du Soleil а это значит, что каждый день я делаю невероятные трюки в одном из лучших шоу Мира Alegria, этим напоминаю себе и тебе, что человеческие возможности безграничны. ",p_3:"В период с 1991 по 2007 гг. я был Гимнастом. Звания Мастера Спорта и тренировки в составе Олимпийской Сборной Команды Украины дали бесценный опыт, а именно: опыт использования своего тела на высочайшем уровене и опыт построения тренировочного процесса для достижения результата.",p_4:"Давай тренироваться вместе."},{_id:"wff7eda2f29gsg87sEGg",gender:"male",img:a(201),single_page_img:a(194),alt:"Aleksandr",name:"Александр",url_name:"aleksandr_okhotenko",family_name:"Охотенко",position:"Методист OK Team",description:"Мастер Спорта по Спортивной Гимнастике."},{_id:"wffcnbawad67eda2f29gsg87sEGg",img:a(202),single_page_img:a(193),alt:"Alexey",gender:"male",url_name:"alex_koltakov",name:"Алексей",family_name:"Колтаков",position:"Видео Дизайнер OK Team",description:"Мастер Спорта по Спортивной Гимнастике."}]},199:function(e,t,a){e.exports=a.p+"static/kononova-9c936e991449e084e0827412182b8ddb.png"},200:function(e,t,a){e.exports=a.p+"static/kononov-58545c353d5998fa98effa87678d46d6.png"},201:function(e,t,a){e.exports=a.p+"static/okhotenko-d724dc297776e9ecc2cd3330567b9677.png"},202:function(e,t,a){e.exports=a.p+"static/koltakov-39d1918806071f93e4c2411bc6a3fd7d.png"},262:function(e,t,a){e.exports=a.p+"static/konon-2-5c85276acb6761b17458e44f8818dc5b.jpg"},264:function(e,t,a){e.exports=a.p+"static/logo_instagram-8bed099ffbf95985d5184831b0c05dcc.png"},265:function(e,t,a){e.exports=a.p+"static/gymnastic-1-969393b353dfff6b7a5e5e39f6f44859.png"},266:function(e,t,a){e.exports=a.p+"static/dusik_2-f416e7f321169cc0d2b39cec8c0d7f6e.jpg"},267:function(e,t,a){e.exports=a.p+"static/gymnastic-3-7e53195099e6c3bff23b5c276f638051.png"},268:function(e,t,a){e.exports=a.p+"static/dusik-c665fc0728f21840edfacbde00eb7af0.jpg"},270:function(e,t,a){e.exports=a.p+"static/blog_photo-1-888d3440eb551b3d1ddc77271fb0e188.png"},271:function(e,t,a){e.exports=a.p+"static/blog_photo-2-aa2a60fabdf4c4cb1971d168208043b2.png"},272:function(e,t,a){e.exports=a.p+"static/blog_photo-3-94444b62355e4204dcc7db7bf7f00ac2.png"},273:function(e,t,a){e.exports=a.p+"static/blog_photo-4-f2d02a2ef58369cc1c370054f0783123.png"},274:function(e,t,a){e.exports=a.p+"static/blog_photo-5-a424f0f47ad635cc20e85d0dc02bac45.png"},275:function(e,t,a){e.exports=a.p+"static/blog_photo-6-c0ab39d55bad6886959c4f89e82c20c4.png"},276:function(e,t,a){e.exports=a.p+"static/sell-014525df1384176183eb4a8d35368553.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-ebea6717f810f279b90a.js.map