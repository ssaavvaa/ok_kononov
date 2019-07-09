import React, { useState, useEffect }  from "react";
import CardInfo from '../../templates-info/training_program';
import { navigate } from '@reach/router';
import { prefix } from '../../components/helpers';






const CoursesSection = () => {


  const [current, setCurrent] = useState(0)
  const [lang, setLang] = useState()

useEffect(() => {
    setCurrent(0)
    setLang(localStorage.getItem('lang'))
  },[])


 const toRight = () => {
  return current !== CardInfo.length - 1
         ?setCurrent(current + 1)
         :setCurrent(0)
 }

const toLeft = () => {
    return current !== 0
         ?setCurrent(current - 1)
         :setCurrent(CardInfo.length - 1)
}

const navigateTo = e => {
  navigate(`${prefix}/training-programs/training?_id=${e}`,{state:{e}});
}

const { _id , heading , description , target , level , main_img ,
            isFree , price , alt , old_price
          } = CardInfo[current]

    return(
        <div className = "container courses_wrapper">
         <h2>
           {lang === 'russian'?'Выбери свою программу':'Choose your program'}
         </h2>
        <figure  className="card-lesson">
         <img alt= {alt}  src={main_img}/>
         <figcaption>
           <h3>{heading}</h3>
           <p><small>{description}</small></p>
           <p><strong ><u>Цель:</u>{" "}</strong><small>{target}</small></p>
           <p><strong ><u>Уровень:</u>{" "} </strong><small>{level}</small></p>
           {!isFree
            ?<div>
                <span>${price}</span>{" "}
                <span ><del>{old_price && `${old_price}`}</del></span>
             </div>
           :<p>Бесплатно</p>}
           <button onClick={() => navigateTo(_id)}>
             <small>
              {lang === 'russian'?'Подробнее':'more'}
            </small></button>
           </figcaption>
      </figure>
      <button className='arrow-right' onClick = {() => toRight()}><i className="fas fa-chevron-right "></i></button>
      <button className='arrow-left' onClick = {() => toLeft()}><i className="fas fa-chevron-left"></i></button>
      </div>
    )
  }


export default CoursesSection;