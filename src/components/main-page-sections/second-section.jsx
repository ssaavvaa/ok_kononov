import React, { Fragment, useState, useEffect }  from "react";



const SecondSection = () => {

    const [lang, setLang] = useState()

    useEffect(() => {
      setLang(localStorage.getItem('lang'))
    }, [])

    return(
        <Fragment>
        {lang === 'russian'
          ?<div className="main__page-2" >
              <div className='secondSection__block'>
               <h3> Моя Миссия - вовлекать как можно больше людей в здоровый образ жизни. Своим примером мотивировать к переменам.</h3>
             </div>
             <div className='secondSection__block'>
               <h2>Общая Физическая подготовка</h2>
               <p>Программа Тренировок по Гимнастике для Любителей на 4 недели. Начни сейчас</p>
               <button>Начать тренировки бесплатно</button>
             </div>
           </div>
       :<div className="main__page-2" >
           <div className='secondSection__block'>
             <h3>
My mission is to involve as many people as possible in a healthy lifestyle. By example, motivate for change.</h3>
           </div>
           <div className='secondSection__block'>
              <h2>General physical preparation</h2>
              <p>Training program for beginners Gymnastics for 4 weeks. Start now</p>
             <button>Start training for Free</button>
            </div>
        </div>}
        </Fragment>
    )
}

export default SecondSection;