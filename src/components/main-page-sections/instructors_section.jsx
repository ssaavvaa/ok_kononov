import React from 'react';
import Instructors from '../../templates-info/instructor-info';
import Instructor from '../../templates/instructor';

const InstructorsSection = () => {
    return (
        <section className="container instructors-section">
                 <h2>Знакомьтесь, Oleksiy Kononov Team</h2>
                 <h3>Крутые Ребята, которые работают каждый день, чтоб создать для вас
                     Бомбезные Программы Тренировок и Сделать вас хотя бы чуточку счастливее.
                 </h3>
                 <ul>
                 {Instructors.map(info => (
                  <Instructor 
                  url_name={info.url_name}
                  key={info._id} 
                  name={info.name} 
                  family_name={info.family_name}
                  position = {info.position}
                  description ={info.description}
                  img={info.img}
                  alt={info.alt}
                   />
                 ))}
                 </ul>
             
        </section>
   
    )
}

export default InstructorsSection;
