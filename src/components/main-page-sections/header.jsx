import React  from "react"


const HeadSection = () => {

const scroll_toSectionDown = () => {
  const scroll = document.querySelector(".main__page-2");
  scroll.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  console.log('aaa')
}

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
        <button onClick ={scroll_toSectionDown} className ='arrow__down'><i className="fas fa-arrow-down "></i></button>
      </section>
    )
}



export default HeadSection;