import React, { Fragment, useState, useEffect }  from "react";

const Subscribe = ( ) => {

    const [lang, setLang] = useState()

    useEffect(() => {
      setLang(localStorage.getItem('lang'))
    },[])

    return(
        <Fragment>
        {lang === 'russian'
         ? <form className="section subscribe-form">
             <h2>Подпишись на Обновления</h2>
             <p>Тренировочные комплексы, Статьи, Влоги, Подарки из закрытой Базы Знаний. 
             Самая свежая информация из головы Артиста Cirque Du Soleil.</p>
             <div>
             <input type="email" placeholder="Ваш Email"/><button>Подписаться</button>
             </div>
             </form>
         : <form className="section subscribe-form">
              <h2>Subscribe for News</h2>
              <p>Training complexes, Articles, Vlogs, Gifts from the closed Knowledge Base.
                 The latest information from the head Artist Cirque Du Soleil.</p>
              <div>
                 <input type="email" placeholder="Your Email"/><button>Subscribe</button>
               </div>
             </form>
        }
       </Fragment>
    )
}


export default Subscribe;