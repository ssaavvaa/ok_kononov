import React  from "react";
import SEO from "../../components/seo"
import Layout from "../../components/layout";
import Calendar from '../../templates-info/calendar';
import CalendarItem from '../../templates/Calendar-item';


const CalendarPage = () => {

    return (
        <Layout>
        <SEO title="training_program" />
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


