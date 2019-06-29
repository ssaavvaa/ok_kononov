import React from "react"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const HeadSection = () => {
    return(
        <section className="main__page-1">
        <div className = "container main__page-1-container">
        <Zoom>
        <h4>OLEKSYI KONONOV TEAM</h4>
        </Zoom>
        <Fade bottom>
        <h1>РАЗВИВАЯ СЕБЯ ПОБУЖДАЮ К ДЕЙСТВИЮ ТЕБЯ.</h1>
        <h3>Статьи, Программы Тренировок, Тренинги от Гимнаста и Артиста <strong>Cirque DuSoleil</strong> Алексея Кононова</h3>
        </Fade>
        </div>
      
        <i className="fas fa-arrow-down arrow__down"/>
      </section>
    )
}

export default HeadSection;