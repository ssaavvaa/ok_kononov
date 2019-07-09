import React, {  useState, useEffect, Fragment }  from "react";
import Instructors from '../../templates-info/instructor-info';
import Instructor from '../../templates/instructor';
import Slide from 'react-reveal/Slide';

const InstructorsSection = () => {

    const [lang, setLang] = useState()

    useEffect(() => {
      setLang(localStorage.getItem('lang'))
    },[])


    return (
        <section className="container instructors-section">
        {lang === 'russian'
         ? <Fragment>
              <h2>Знакомьтесь, Oleksiy Kononov Team</h2>
                 <h3>Крутые Ребята, которые работают каждый день, чтоб создать для вас
                     Бомбезные Программы Тренировок и Сделать вас хотя бы чуточку счастливее.
                 </h3>
                 <ul>
                 {Instructors.map(info => (
                        <Slide key={info._id}  up>
                  <Instructor 
                  url_name={info.url_name}
                  name={info.name} 
                  family_name={info.family_name}
                  position = {info.position}
                  description ={info.description}
                  img={info.img}
                  alt={info.alt}
                   />
                      </Slide>
                 ))}
                 </ul>
           </Fragment>
         :  <Fragment>
             <h2>Meet Oleksiy Kononov's Team</h2>
               <h3>Cool guys who work every day to create for you
                   Bombing Training Programs and Make you at least a little happier.
               </h3>
               <ul>
               {Instructors.map(info => (
                     <Slide key={info._id}  up>
               <Instructor 
                url_name={info.url_name}
                name={info.name} 
                family_name={info.family_name}
                position = {info.position}
                description ={info.description}
                img={info.img}
                alt={info.alt}
                 />
                  </Slide>
                 ))}
                </ul>
               </Fragment>
        }

        </section>
    
    )
}

export default InstructorsSection;
