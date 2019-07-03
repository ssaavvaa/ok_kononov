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
          <div className="eventDate">
            <span><strong>{from}</strong></span>
            <span><strong>{to}</strong></span>
          </div>
          <div className="eventCity">
          <img alt={city} ref={ref}  src={inView?img:"#"}></img>
          <div>
          <div>
            <span >{city}, {country}</span>
            </div>
            </div>
            </div>
       </li>
    )
}

export default CalendarItem;