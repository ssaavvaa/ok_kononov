import React from "react"
import CalendarItem from '../../templates/Calendar-item';
import Calendar from '../../templates-info/calendar';


const CalendarSection = () => {

    return(
        <section className="main__paige-6">
          <div className = 'container'>
        <h2>Календарь Oleksiy Kononov Team</h2>
        <h3>Шоу, Семинары, Тренинги, Персональные Тренировки 2019 - 2020</h3>
        {Calendar.map( item => (
        <CalendarItem from={item.from} to={item.to} city={item.city} country={item.country} img={item.img} />
        ))}
        </div>
       </section>
    )
}

export default CalendarSection;