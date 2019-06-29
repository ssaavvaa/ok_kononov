import React from "react"
import Fade from 'react-reveal/Fade';


const ThirdSection = () => {
    return(
        <section className="main__page-3">
          <Fade>
           <div className="container main__page-3_container">
            <h2 style={{fontSize:"3em"}}>Общая Физическая подготовка</h2>
            <p>Программа Тренировок по Гимнастике для Любителей на 4 недели. Начни сейчас</p>
            <button>Начать тренировки бесплатно</button>
           </div>
        </Fade>
      </section>
    )
}

export default ThirdSection;