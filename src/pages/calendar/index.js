import React  from "react";
import SEO from "../../components/seo"
import Layout from "../../components/layout";
import Calendar from '../../templates-info/calendar';
import CalendarItem from '../../templates/Calendar-item';
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";



const scroll_button = {
    width:'55px',
    height:'55px',
    padding:"4px",
    focus:'none',
    outline:'none',
    border:'0px',
    boxShadow:'0px 0px 2px 2px black',
    zIndex:100
  }

const CalendarPage = () => {

    return (
        <Layout>
        <SEO title="training_program" />
        <ScrollUpButton style={scroll_button} />
        <section className=" container calendar__wrapper container">
        <h2>Календарь Oleksiy Kononov Team</h2>
        <h3>Шоу, Семинары, Тренинги, Персональные Тренировки 2019 - 2020</h3>
        <ul className="contacts_wrapper">
        {Calendar.map( item => (
        <CalendarItem key={item.id} from={item.from} to={item.to} city={item.city} country={item.country} img={item.img} />
        ))}
        </ul>
       </section>
        </Layout>
    )
};

export default CalendarPage;


