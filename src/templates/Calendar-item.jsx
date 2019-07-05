import React from "react"
import { useInView } from 'react-intersection-observer';



const CalendarItem = ({ from , to , city , country , img}) => {

  const [ref, inView] = useInView({
    triggerOnce:true,
    threshold: 0,
    rootMargin:"50px"
  })

    return(
       <li className='calendarItem__wrapper'>
         <figure>
          <figcaption className="eventDate">
            <p><strong>{from}</strong></p>
            
            <p><strong>{to}</strong></p>
          </figcaption>

          <img alt={city} ref={ref}  src={inView?img:"#"}></img>
         <figcaption>
            <span>{city}{", "} {country}</span>
           
            </figcaption>
            </figure>
       </li>
    )
}

export default CalendarItem;