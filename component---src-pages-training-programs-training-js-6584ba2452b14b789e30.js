(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{163:function(e,a,n){"use strict";n.r(a);n(98),n(99),n(197),n(96),n(97);var t=n(0),i=n.n(t),r=n(168),c=n(169),s=n(175),g=n(205),d={training:{},current_picture:"",alt_current_picture:""};a.default=function(e){var a=e.location,n=a.search.split("_id=")[1],l=Object(t.useState)(d),o=l[0],p=l[1];Object(t.useEffect)(function(){var e=s.a.find(function(e){return e._id===a.search.split("_id=")[1]});void 0!==e&&p({training:e,current_picture:e.main_img,alt_current_picture:e.alt})},[]);var u=o.training,m=u.single_page,y=u.heading,_=u.isFree,h=u.price,z=u.old_price,f=o.alt_current_picture,v=o.current_picture;return n?m?i.a.createElement(c.a,null,i.a.createElement(r.a,{title:"training_program"}),i.a.createElement("div",{className:"container container_landing_training"},m&&i.a.createElement(t.Fragment,null,y&&i.a.createElement("h1",null,y),i.a.createElement("div",{className:"images_presentation"},i.a.createElement("div",{className:"img_presentation_wrapper"},v&&i.a.createElement("div",null,i.a.createElement("img",{src:v,alt:f})),i.a.createElement("ul",null,o.training.single_page.images&&o.training.single_page.images.map(function(e){return i.a.createElement("li",{key:e.alt},i.a.createElement("img",{onClick:function(){return a=e.src,t=e.alt,i=s.a.find(function(e){return e._id===n}),void p({training:i,current_picture:a,alt_current_picture:t});var a,t,i},src:e.src,alt:e.alt}))}))),i.a.createElement("div",{className:"program_aside_picture_info"},y&&i.a.createElement("h3",null,y),o.training.single_page.short_description&&i.a.createElement("p",null,o.training.single_page.short_description),o.training.single_page.instructor&&i.a.createElement(t.Fragment,null,i.a.createElement("h3",null,"Инструктор"),i.a.createElement("p",{onClick:function(){return e=o.training.single_page.link_instructor,void Object(g.b)("/instructor?name="+e,{state:e});var e},style:{color:"blue",textDecoration:"underline",cursor:"pointer"}},o.training.single_page.instructor)),_?i.a.createElement("span",null,"Бесплатно"):i.a.createElement("div",null,i.a.createElement("span",null,"$",h),"  ",i.a.createElement("span",null,i.a.createElement("del",null,"$",z))),!_&&i.a.createElement(t.Fragment,null,i.a.createElement("button",null,"Добавить в корзину"),i.a.createElement("div",null)),i.a.createElement("p",null,o.training.single_page.includes),o.training.single_page.includes_list&&i.a.createElement("h3",null,"А так же:"),i.a.createElement("ul",null,o.training.single_page.includes_list&&o.training.single_page.includes_list.map(function(e){return i.a.createElement("li",{key:e.key}," ",i.a.createElement("p",null," - ",i.a.createElement("small",null,e.p)," "))})),_&&i.a.createElement("div",null,i.a.createElement(g.a,{to:"/contacts/"},"Go to contacts page")))),o.training.single_page.course_for&&i.a.createElement("h2",{className:"h2_training"},"ДЛЯ КОГО ЭТА ПРОГРАММА"),i.a.createElement("ul",{className:"target_people_trainings"},o.training.single_page.course_for&&o.training.single_page.course_for.map(function(e){return i.a.createElement("li",{key:e.key},i.a.createElement("h3",null,e.heading),i.a.createElement("p",null,e.description))})),o.training.single_page.customer_receive&&i.a.createElement("h2",{className:"h2_training"},"ЧТО ТЫ ПОЛУЧИШЬ:"),i.a.createElement("ul",{className:"customer_receive_training-wrapper"},o.training.single_page.customer_receive&&o.training.single_page.customer_receive.map(function(e,a){return i.a.createElement("li",{key:e.key,className:"customer_receive_training"},i.a.createElement("span",{className:"customer_receive_training-digit"},a+1),i.a.createElement("h3",null,e.heading),i.a.createElement("p",null,e.description))})),o.training.single_page.course_steps&&i.a.createElement("h2",{className:"h2_training-last"},"Этапы программы:"),i.a.createElement("ul",{className:"program_steps"},o.training.single_page.course_steps&&o.training.single_page.course_steps.map(function(e,a){return i.a.createElement("li",{key:e.key,className:""},i.a.createElement("fieldset",null,i.a.createElement("legend",null,a+1),i.a.createElement("h3",null,e.heading),i.a.createElement("p",null,e.description)))}))))):i.a.createElement("div",{className:"container container_landing_training",style:{textAlign:"center"}},i.a.createElement("h2",null,"Item with this Id was not created yet"),i.a.createElement("p",null,"Please go and pick 'Basic' category"),i.a.createElement(g.a,{to:"/training-programs?category=basic"},"Go to training page")):i.a.createElement("div",{className:"container container_landing_training",style:{textAlign:"center"}},i.a.createElement("h2",null,"You have to choose a training to view this page"),i.a.createElement(g.a,{to:"/training-programs/"},"Go to training page"))}},170:function(e,a,n){e.exports=n.p+"static/single_page-bd461a05f0844f14c2eab61acfb5261c.png"},171:function(e,a,n){e.exports=n.p+"static/1-a296f5cf42bde1f7332f7d016b02265b.png"},172:function(e,a,n){e.exports=n.p+"static/1-be5a1f7121c7d9192676f5dc3643087c.png"},175:function(e,a,n){"use strict";a.a=[{_id:"d0awy087tdaw322",alt:"handstand",category:"basic",main_img:n(170),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:23,old_price:null,date:1562310623075,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"Программа Тренировок с собственным весом тела на 42 дня",includes:"В программе ты найдешь Тренировки по Гимнастике, подготовительные мастер классы для укрепления плеч и рук, восстановительные тренировки и Кардио.Тебя ждут 42 увлекательных дня.",images:[{alt:"basic_hand_stando-1",src:n(170)},{alt:"basic_hand_stand-2",src:n(176)},{alt:"basic_hand_stand-3",src:n(177)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmgze4wv3va4et87gahe"},{p:"Четкая дозировка",key:"vz0rvz7he4zg40eht7zegb"},{p:"Журнал Тренировок",key:"czrze4hg04e7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"fasegzrhh55rjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgzee4hza3t-8tz88da"},{p:"Виртуальный помощник",key:"dnzvlgnh4h5rpzgdrguzdnh"}],course_for:[{key:"vmzrg4yze4hje48zyhe4zy",heading:"Занимаешься CrossFit",description:"Хочешь побед на соревнованиях, технично стоять и ходить на руках?"},{key:"vzlze4gzl4g4gz5eye48",heading:"Любишь Гимнастику",description:"Занимаешься профессианально или как любитель?"},{key:"vznfsege4zhgzspeugfb4t",heading:"Занимаешься WorkOut",description:"Хочешь быть Круче всех выполняя технично стойку на улице?"},{key:"dzmgzpg4-tz4teey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzpee4gsgpxywzwt4ey",heading:"42 тренировочных дня",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"cvmosept4ygoesgeogose",heading:"Более 50 оригинальных упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"dawflvzg48ghe4zhze8yh",heading:"5 видов тренировок",description:"Тренировки по Гимнастике, укрепление рук и плечевого пояса, а также кардио и восстановительные занятия."},{key:"vmzgzze48sg-e4y8z558",heading:"Личный кабинет",description:"Вся информация структурированна в одном месте, удобно для использования на компьютере и телефоне"},{key:"nvzsgzge48eh4ez4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgzeeg4yze4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedwawm,cgydpawf7aw",heading:"Подготовительный цикл",description:"Этот цикл будет логическим продолжением первой программы, основной акцент сделан на адаптацию мышц кора."},{key:"cnezswt,cgyjzw3tgw3tw38",heading:"Основной Цикл",description:"На этом тренировочном отрезке ты укрепишь плечи, кисти. Особое внимание будет уделено выходу в стойку."},{key:"aawf72jgcycgk2037thg499",heading:"Предстартовый Цикл",description:"На этом тренировочном отрезке ты большую часть времени проведешь стоя на руках, освоишь как ловить баланс и корректировать стойку."}]}},{_id:"d0awydawncabwd2524",alt:"handstand",category:"basic",main_img:n(171),heading:"Стойка на Руках PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:56,isFree:!1,old_price:109,date:1562310623021,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"Программа Тренировок с собственным весом тела на 42 дня",includes:"В программе ты найдешь Тренировки по Гимнастике, подготовительные мастер классы для укрепления плеч и рук, восстановительные тренировки и Кардио.Тебя ждут 42 увлекательных дня.",images:[{alt:"hand_stand_pro-1",src:n(171)},{alt:"hand_stand_pro-2",src:n(178)},{alt:"hand_stand_pro-3",src:n(179)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmwv3va4et87gahe"},{p:"Четкая дозировка",key:"vz0rvz7g40eht7zegb"},{p:"Журнал Тренировок",key:"czrg04e7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"fasegzrhrjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgza3t-8tz88da"},{p:"Виртуальный помощник",key:"dnzvlgnrpzgdrguzdnh"}],course_for:[{key:"vmzrg4y-e48zyhe4zy",heading:"Занимаешься CrossFit",description:"Хочешь побед на соревнованиях, технично стоять и ходить на руках?"},{key:"vzlgzl4g4gz5eye48",heading:"Любишь Гимнастику",description:"Занимаешься профессианально или как любитель?"},{key:"vznfsegzspeugfb4t",heading:"Занимаешься WorkOut",description:"Хочешь быть Круче всех выполняя технично стойку на улице?"},{key:"dzmgzpg4-eey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzp4gsgpxywzwt4ey",heading:"42 тренировочных дня",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"cvmosepgoesgeogose",heading:"Более 50 оригинальных упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"dawflvzg48gze8yh",heading:"5 видов тренировок",description:"Тренировки по Гимнастике, укрепление рук и плечевого пояса, а также кардио и восстановительные занятия."},{key:"vmzgz8sg-e4y8z558",heading:"Личный кабинет",description:"Вся информация структурированна в одном месте, удобно для использования на компьютере и телефоне"},{key:"nvzsgzge48e4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgg4yze4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedwawdpawf7aw",heading:"Подготовительный цикл",description:"Этот цикл будет логическим продолжением первой программы, основной акцент сделан на адаптацию мышц кора."},{key:"cnezswtzw3tgw3tw38",heading:"Основной Цикл",description:"На этом тренировочном отрезке ты укрепишь плечи, кисти. Особое внимание будет уделено выходу в стойку."},{key:"aawf722037thg499",heading:"Предстартовый Цикл",description:"На этом тренировочном отрезке ты большую часть времени проведешь стоя на руках, освоишь как ловить баланс и корректировать стойку."}]}},{_id:"d0daw6adw9d87a",alt:"abdomen-exercise",category:"basic",main_img:n(172),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:30,isFree:!1,old_price:44,date:1562310343021,single_page:{instructor:"Виктория Кононова",link_instructor:"viktorya_kononova",short_description:"Программ Тренировок от Мастера Спорта по Художественной Гимнастике",includes:"В программе для тебя Тренировки по Гимнастике, Подготовительные мастер классы, Pilates и Кардио. Тебя ждут 42 увлекательных дня.",images:[{alt:"hand_stand_pro-1",src:n(172)},{alt:"hand_stand_pro-2",src:n(180)},{alt:"hand_stand_pro-3",src:n(181)}],includes_list:[{p:"Наглядные видео инструкции",key:"vzmwvjsfshjzdrn87gahe"},{p:"Четкая дозировка",key:"vz0rvhzdr5jzdjzeht7zegb"},{p:"Журнал Тренировок",key:"czhzdrhzdrh7te0zrgh"},{p:"Чат единомышленников (более 300)",key:"faszzzzzrhrjh5rusjx"},{p:"Бонус Вебинары",key:"dcmzgzahzdrht-8tz88da"}],course_for:[{key:"vmzg4hrg4y-e48zyhe4zy",heading:"ЗАНИМАЕШЬСЯ В ТРЕНАЖЕРНОМ ЗАЛЕ ИЛИ CROSSFIT",description:"Любишь силовые тренировки, но не знаешь как растягиваться после них?"},{key:"vzhxdlgzl4g4gz5eye48",heading:"ЛЮБИШЬ ГИМНАСТИКУ ИЛИ POLE DANCE",description:"Для достижения цели твоем арсенале не хватает упражнений из профессионального спорта?"},{key:"vznfseghk6zspeugfb4t",heading:"ХОЧЕШЬ УДИВИТЬ СВОЮ ПОЛОВИНКУ",description:"Не знаешь как внести разнообразие в личную жизнь?"},{key:"dzmgzpg47546-eey-4eay-ey",heading:"Мечта Детства",description:"Давно откладываешь желаемую цель, но чувствуешь, что еще есть порох?"}],customer_receive:[{key:"vzp4gsgpxq346ywzwt4ey",heading:"Онлайн поддержка 24/7",description:"Ты можешь написать мне в любое время в директ Инстаграм и получить подробный ответ или помощь"},{key:"cvmoq346sepgoesgeogose",heading:"Пилатес тренировки",description:"Релакс тренировки на вытяжение и укрепление мышц кора и позвоночного столба"},{key:"da6wflvzg48g7w45ze8yh",heading:"36 тренировочных дней",description:"Полную дорожную карту на 3 тренировочных цикла по 2 недели каждый."},{key:"vmzgz8sg-e4y8z6w47558",heading:"36 уникальных упражнений для быстрого прогресса",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"nve466zsgzge48e4ybe4y",heading:"Закрытая Telegram группа",description:"Чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками."},{key:"vnzgg4yzgz4e4ye4y04ey",heading:"Мотивационные вебинары",description:"Секреты спортивной психологии, которые работают лучше любого допинга."}],course_steps:[{key:"vnfsedr5dgsewawdpawf7aw",heading:"LEVEL 1",description:"На этом тренировочном отрезке ты подготовишь суставы к стрейчингу Освоишь базовые гимнастические упражнения.."},{key:"cnezswurdtzw3tgw3tw38",heading:"LEVEL 2",description:"На этом тренировочном отрезке ты увеличишь эластичность мышц. Особое внимание уделишь технике и положению тела для выполнения продольного и поперечного шпагатов."},{key:"aawf7220h537thg499",heading:"LEVEL 3",description:"На этом тренировочном отрезке ты большую часть времени проведешь сидя на шпагатах разных уровней сложности. И будешь готов взять свою цель."}]}},{_id:"d0adawaw4wydawncabwd2524",alt:"exercise",category:"basic",main_img:n(182),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",price:null,isFree:!0,old_price:null,date:1562310623091,single_page:{instructor:"Алексей Кононов",link_instructor:"alex_kononov",short_description:"4-х недельная Программа тренировок Артиста Cirque Du SoleilАлексея Кононова.",includes:"Оставляй заявку и получи 4 недельную программу тренировок по Общей Физической Подготовке, абсолютно БЕСПЛАТНО.",images:null,includes_list:null,course_for:[{key:"vmzrg4y-e48za2fa2yhe4zy",heading:"НЕТ ДИСЦИПЛИНЫ",description:"Много раз начинал заниматься и бросал. Первые сложности сбивают тебя с намеченного пути."},{key:"vzlgzl4g4gz5dawfaweye48",heading:"НЕ ХВАТАЕТ ЭНЕРГИИ",description:"Нет энергии на тренировки и складывается ощущение, что нет энергии вообще. Жизнь замедляет ход."},{key:"vznfsegzdafspeugfb4t",heading:"НЕТ НУЖНОГО МОМЕНТА",description:"Никак не наступает тот самый день, та самая неделя, чтоб начать заниматься. Всегда чего-то не хватает."},{key:"dzmgzpg4-eey-4eay-ey",heading:"НЕТ МОТИВАЦИИ",description:"Не можешь найти мощный толчок, чтоб начать перемены в жизни. Хотя чувствуешь, что нужно, что-то менять."}],customer_receive:[{key:"vzp4gsgpxywzwt4ey",heading:"Более 50 упражнений",description:"Оригинальные гимнастические упражнения, с весом собственного тела, которые можно делать дома."},{key:"cvmosepgoesgeogose",heading:"3 уровня сложности",description:"Програма адаптированна под разные уровни подготовки. Ты сможешь подобрать себе упражнения по силам."},{key:"dawflvzg48gze8yh",heading:"Контроль техники выполнения",description:"Мое скурпулезное внимание к деталям, помогут сделать твои движения филигранными."},{key:"vmzgz8sg-e4y8z558",heading:"Закрытую Группу Telegram",description:"Доступ в чат обратной связи, где ты сможешь писать свои вопросы и общаться с другими участниками, а также получать рекомендации по технике"},{key:"nvzsgzge48e4ybe4y",heading:"Виртуального Тренера 24/7",description:"С тобой будет работать мой виртуальный помощник, он будет вести по программе, мотивировать, собирать обратную связь"},{key:"vnzgg4yze4ye4y04ey",heading:"3 образовательных вебинара",description:"Доступ к секретной информации для тренеров, которая поможет борьбу с мифами и сделает твои тренировки более осознанными."}],course_steps:null}},{_id:"d0awyfFg087tdaw322",alt:"handstand",category:"middle",main_img:n(183),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:30,old_price:29,date:1562320623021},{_id:"d0awydj6tawncabwd2524",alt:"handstand",category:"middle",main_img:n(184),heading:"Стойка на Руках Уровеь PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:19,isFree:!1,old_price:29},{_id:"d0djs6rjaw6adw9d87a",alt:"abdomen-exercise",category:"middle",main_img:n(185),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:14,isFree:!1,old_price:29},{_id:"camwcnjsmfyaw8da5w43",alt:"abdomen-exercise",category:"middle",main_img:n(186),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",isFree:!0,price:"",old_price:"",date:1562310623051},{_id:"d0dfFg023523tdaw322",alt:"handstand",category:"advance",main_img:n(187),heading:"Стойка на Руках Базовый Уровень",description:"Программа Тренировок по Гимнастике для Любителей нв 6 недель",target:"Цель: Стойка на руках. Укрепление мыщц Кора и Развитие Координации",level:"базовый",isFree:!1,price:48,old_price:29,date:1562310623081},{_id:"d0awh65679wncabwd2524",alt:"handstand",category:"advance",main_img:n(188),heading:"Стойка на Руках Уровеь PRO",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Стойка на Руках. Развитие Силы и Координации",level:"Подготовленный",price:10,isFree:!1,old_price:29,date:1562230623021},{_id:"d0djs6r64879w6adw9d87a",alt:"abdomen-exercise",category:"advance",main_img:n(189),heading:"Шпагат за 6 недель",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Развитие Гибкости. Освоить Шпагат.",level:"Базовый",price:100,isFree:!1,old_price:29,date:1561310623021},{_id:"camwcn57e458jnxfyaw8da5w43",alt:"abdomen-exercise",category:"advance",main_img:n(190),heading:"Общая Физическая подготовка",description:"Программа Тренировок по Гимнастике для Любителей на 6 недель",target:"Укрпепление Тела. Снижение Веса",level:"Базовый",isFree:!0,price:"",old_price:"",date:1562310628021}]},176:function(e,a,n){e.exports=n.p+"static/2-67b32f6c399e5d1ea451787d3eddc55a.png"},177:function(e,a,n){e.exports=n.p+"static/3-af7cb0762a0d44134c8a107cd2548b7b.png"},178:function(e,a,n){e.exports=n.p+"static/2-ce161d3133d533a238c54ae52ad897fc.png"},179:function(e,a,n){e.exports=n.p+"static/3-b33121c45ff19ff69b06b77ced00f9dd.png"},180:function(e,a,n){e.exports=n.p+"static/2-bccf4ce41e2872824ca49e782918cf4e.png"},181:function(e,a,n){e.exports=n.p+"static/3-af7cb0762a0d44134c8a107cd2548b7b.png"},182:function(e,a,n){e.exports=n.p+"static/1-bd3e03b50f81331fe93c6e792b09a2ae.png"},183:function(e,a,n){e.exports=n.p+"static/1-3f97d7ec601574f4abde3ba8c46dde95.jpg"},184:function(e,a,n){e.exports=n.p+"static/2-7ee019e595cfbaad23817f07b5e52df8.jpg"},185:function(e,a,n){e.exports=n.p+"static/3-efa58147e33ed362a3a5674b934a8ad7.jpg"},186:function(e,a,n){e.exports=n.p+"static/4-e936ef970829df61cc3d16c4ec5eb33f.jpg"},187:function(e,a,n){e.exports=n.p+"static/1-c13a6063ecc90794b7710bb5c752a212.jpg"},188:function(e,a,n){e.exports=n.p+"static/2-843d5f6fe533ace20043b2b07afe6698.jpg"},189:function(e,a,n){e.exports=n.p+"static/3-d4fd91cbcd8ea6054caf9f3896566422.jpg"},190:function(e,a,n){e.exports=n.p+"static/4-07571e90b3110f9e755001353c1f0790.jpg"}}]);
//# sourceMappingURL=component---src-pages-training-programs-training-js-6584ba2452b14b789e30.js.map