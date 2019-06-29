import React  from "react"
import { useInView } from 'react-intersection-observer';

const Lesson_card = props => {

  
  const [ref, inView] = useInView({
    triggerOnce:true,
    threshold: 0,
    rootMargin:"50px"
  })

    return(
        <article className="card-lesson">
         <img ref={ref} src={inView?props.src:""}/>
           <h3>{props.heading}</h3>
           <p>{props.description}</p>
           <p><strong><u>Цель</u>:</strong> {props.target}</p>
           <p><strong><u>Уровень</u>: </strong>{props.level}</p>
           {props.free === false
           ?<div>
             <span>${props.price} </span>
             <span style={{textDecoration:'line-through', color:'grey'}}>${props.old_price}</span>
           </div>
           :<p>Бесплатно</p>}
           <button>Подробнее</button>
      </article>
    )
}

export default Lesson_card;