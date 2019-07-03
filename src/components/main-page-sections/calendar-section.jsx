import React,{ useState } from "react";
import CalendarItem from '../../templates/Calendar-item';
import Calendar from '../../templates-info/calendar';


const CalendarSection = () => {

  const [length , setLength ] = useState(1)

  const showMore =() => {
   return setLength(length + 1)
  }
   
    return(
        <section className=" container calendar__wrapper container">
        
        <h2>Календарь Oleksiy Kononov Team</h2>
        <h3>Шоу, Семинары, Тренинги, Персональные Тренировки 2019 - 2020</h3>
        <ul>
        {Calendar.map( item => (
        <CalendarItem key={item.id} from={item.from} to={item.to} city={item.city} country={item.country} img={item.img} />
        )).slice(0,length)}
        </ul>
         {length !== Calendar.length && <button onClick = {() => showMore()}>show more</button>}  
       
       </section>
    )
}

export default CalendarSection;