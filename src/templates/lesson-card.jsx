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
           <p><strong>Цель:</strong> {props.target}</p>
           <p><strong>Уровень: </strong>{props.level}</p>
           {props.free === false
           ?<div>
             <span style={{fontSize:'1.3rem'}}>${props.price} </span>
             <span style={{textDecoration:'line-through', fontSize:'1.2em', color:'grey'}}>${props.old_price}</span>
           </div>
           :<span style={{fontSize:'1.2rem'}}>Бесплатно</span>}
           <button>Подробнее</button>
      </article>
    )
}

export default Lesson_card;