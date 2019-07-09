import React, { useState, useEffect }  from "react";
import $ from "jquery";


const HeadSection = () => {


  const [lang, setLang] = useState()

  useEffect(() => {
    setLang(localStorage.getItem('lang'))
  }, [])



const scroll_toSectionDown = () => {
    const scroll = document.querySelector(".main__page-2");
    $('html, body').animate({
    scrollTop: parseInt($(scroll).offset().top)
   }, 1000);
}

    return(
        <section className = "section header">
        <h4>OLEKSYI KONONOV TEAM</h4>
        <h1>
        {lang === 'russian'
        ?'Развивая себя побуждаю к действию Тебя.'
        :'By developing myself I urge you to act.'}
          </h1>
        <h3>
        {lang === 'russian'
        ?'Статьи, Программы Тренировок, Тренинги от Гимнаста и Артиста Cirque DuSoleil Алексея Кононова'
        :'Articles, Training Programs, Training from Gymnast and Actor Cirque DuSoleil Oleksyi Kononov'}
          </h3>
        <div className="header__desc">
           <div className="fresh__news">

           </div>
           <figure className="Alex__photo">
             <img alt="Alex_kononov" src={require('../../images/konon-2.jpg')} />
             <figcaption>тут о том какой Алексей Кононов масте фломастер супер гимнасти и мега человек</figcaption>
           </figure>
        </div>
  
        <img alt="arrow_down" onClick ={scroll_toSectionDown} className="arrow__down" src={require('../../images/icons/arrow_down.svg')} />
      </section>
    )
}



export default HeadSection;