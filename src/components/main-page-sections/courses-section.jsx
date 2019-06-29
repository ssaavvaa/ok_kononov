import React from "react"
import CardInfo from '../../templates-info/lesson_card';
import Lesson_card from '../../templates/lesson-card';



const CoursesSection = () => {




    return(
        <section className="main__paige-4">
           {CardInfo.map(item => (
             <Lesson_card  key={item._id} heading ={item.heading} description ={item.description}
                          target ={item.target} level={item.level}
                          src={item.img_src}
                          free={item.free} price={item.price} old_price={item.old_price} />
           ))}
      </section>
    )
}

export default CoursesSection;