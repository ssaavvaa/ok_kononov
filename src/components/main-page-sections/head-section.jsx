import React from "react"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const HeadSection = () => {
    return(
        <section className="main__page-1">
        <div className = "container main__page-1-container">
        <Zoom>
        <h3>OLEKSYI KONONOV TEAM</h3>
        </Zoom>
        <Fade bottom>
        <h1>РАЗВИВАЯ СЕБЯ ПОБУЖДАЮ К ДЕЙСТВИЮ ТЕБЯ.</h1>
        <p>Статьи, Программы Тренировок, Тренинги от Гимнаста и Артиста <strong>Cirque DuSoleil</strong> Алексея Кононова</p>
        </Fade>
        </div>
      
        <i className="fas fa-arrow-down arrow__down"/>
      </section>
    )
}

export default HeadSection;