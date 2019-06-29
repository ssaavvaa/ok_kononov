import React from "react"
import { useInView } from 'react-intersection-observer';
import Zoom from 'react-reveal/Zoom';


const CalendarItem = ({ from , to , city , country , img}) => {

  const [ref, inView] = useInView({
    triggerOnce:true,
    threshold: 0,
    rootMargin:"50px"
  })

    return(
      <Zoom>
       <article className='calendarItem__wrapper'>
          <div className="eventDate">
            <span><strong>{from}</strong></span>
            <span><strong>{to}</strong></span>
          </div>
          <div className="eventCity">
          <img ref={ref}  src={inView?img:""}></img>
            <span >{city}, {country}</span>
            </div>
       </article>
       </Zoom>
    )
}

export default CalendarItem;