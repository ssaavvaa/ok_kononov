import React  from "react"


const HeadSection = () => {



    return(
        <section className = "section header">
      
        <h4 >OLEKSYI KONONOV TEAM</h4>
        <h1>Развивая себя побуждаю к действию Тебя.</h1>
        <h3>Статьи, Программы Тренировок, Тренинги от Гимнаста и Артиста <strong>Cirque DuSoleil</strong> Алексея Кононова</h3>
        <div className="header__desc">
           <div className="fresh__news">

           </div>
           <figure className="Alex__photo">
             <img alt="dawfawf" src={require('../../images/konon-2.jpg')} />
             <figcaption>тут о том какой Алексей Кононов масте фломастер супер гимнасти и мега человек</figcaption>
           </figure>
        </div>
      </section>
    )
}



export default HeadSection;