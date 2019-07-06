import React, { useState, useEffect }  from "react";
import { Link } from "gatsby";
import { navigate } from '@reach/router';
import { prefix } from '../components/helpers';



const NavBar = () => {



  const [lang, setLang] = useState(undefined)

  useEffect(() => {
    setLang(localStorage.getItem('lang'))
  }, [])


const languageChange = (e) => {
  localStorage.setItem('lang', e.target.value)
 window.location.reload()
}

const navigateToTraining = e => {
  navigate(`${prefix}/training-programs?category=${e}`);
}

const navigateToInstructor = e => {
  navigate(`${prefix}/instructor?name=${e}`, {state:e});
}

const navigateToStore = e => {
  navigate(`${prefix}/store/`, {state:e});
}





if( lang === 'Russian'){
  return(
    <aside className="navbar">
      <nav>
      <img alt="logo" src={require('../images/logo.png')} />
      <ul>
        <li><Link to="/">Главная</Link></li>
   <li>
     Тренировки
     <ul className="aside_ul">
     <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="logo_company" />
       <li onClick = {() => navigateToTraining('all')}>
         Все...
         </li>
       <li onClick = {() => navigateToTraining('basic')}>
         Basic
         <div className="sub_li_desc">
         <img alt="beginner" src ={require('../images/icons/beginner.png')} />
         </div>
         </li>
       <li onClick = {() => navigateToTraining('middle')}>
         Middle
         <div className="sub_li_desc">
         <img alt="medium_level" src ={require('../images/icons/medium.png')} />
         </div>
         </li>
       <li onClick = {() => navigateToTraining('advance')}>
         Advance
         <div className="sub_li_desc">
         <img alt="advance_level" src ={require('../images/icons/advance.png')} />
         </div>
         </li>
     </ul>
   </li>
   <li  >
     Магазин
      <ul className="aside_ul">
      <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="dawf" />
         <li onClick = {() => navigateToStore()}>Все...</li>
         <li onClick = {() => navigateToStore()}>Fitness дома</li>
         <li onClick = {() => navigateToStore()}>Fitness для всех</li>
         <li onClick = {() => navigateToStore()}>Pro Fitness</li>
         <li onClick = {() => navigateToStore()}>Другое</li>
     </ul>

   </li>
   <li>
   <Link to="/blog">Блог</Link>
   </li>
   <li><Link to="/calendar">Календарь</Link></li>
   <li >
   Команда
    <ul className="aside_ul">
      <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="dawf" />
         <li onClick = {() => navigateToInstructor('alex_kononov')}>
           Алексей Кононов
           <div className="sub_li_desc">
         <img alt="kononov" src ={require('../images/instructors/kononov_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('viktorya_kononova')}>
           Виктория Кононова
           <div className="sub_li_desc">
         <img alt="kononova" src ={require('../images/instructors/kononova_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('alex_koltakov')}>
           Алексей Колтакое
           <div className="sub_li_desc">
         <img alt="koltakov" src ={require('../images/instructors/koltakov_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('aleksandr_okhotenko')}>
           Александр Охотенко
           <div className="sub_li_desc">
         <img alt="okhotenko" src ={require('../images/instructors/okhotenko_big.png')} />
         </div>
           </li>
     </ul>
   </li>
   <li><Link to="/feedbacks">Отзывы</Link></li>
   <li><Link to="/contacts">Контакты</Link></li>
   </ul>
   </nav>
   <div className="aside_bottom_block">
   <div className="sign_in">
   <span> sign in</span>
   <i className="fas fa-sign-in-alt fa-rotate-180"></i>
   </div>
   <div className="sign_out">
     <span>sign out</span>
   <i className="fas fa-sign-in-alt "></i>
   </div>
   <div className="aside_bottom">
   <select placeholder="language" onChange={languageChange}>
          <option value="">language</option>
          <option value="Russian">Русский</option>
          <option value="Engish">Англ</option>
    </select>
   <div>
            <i className="fab fa-facebook-f" ></i>
            <i className="fab fa-instagram" ></i>
            <i className="fab fa-vk" ></i>
        </div>
   </div>
   </div>
  </aside>
)
}

  return(
    <aside className="navbar">
      <nav>
      <img alt="logo" src={require('../images/logo.png')} />
      <ul>
          <li><Link to="/">Main</Link></li>
   <li>
     Trainings
     <ul className="aside_ul">
     <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="logo_company" />
       <li onClick = {() => navigateToTraining('all')}>
         All...
         </li>
       <li onClick = {() => navigateToTraining('basic')}>
         Basic
         <div className="sub_li_desc">
         <img alt="beginner" src ={require('../images/icons/beginner.png')} />
         </div>
         </li>
       <li onClick = {() => navigateToTraining('middle')}>
         Middle
         <div className="sub_li_desc">
         <img alt="medium_level" src ={require('../images/icons/medium.png')} />
         </div>
         </li>
       <li onClick = {() => navigateToTraining('advance')}>
         Advance
         <div className="sub_li_desc">
         <img alt="advance_level" src ={require('../images/icons/advance.png')} />
         </div>
         </li>
     </ul>
   </li>
   <li>
     Store
      <ul className="aside_ul">
      <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="dawf" />
         <li onClick = {() => navigateToStore()}>All...</li>
         <li onClick = {() => navigateToStore()}>Fitness дома</li>
         <li onClick = {() => navigateToStore()}>Fitness для всех</li>
         <li onClick = {() => navigateToStore()}>Pro Fitness</li>
         <li onClick = {() => navigateToStore()}>Other</li>
     </ul>

   </li>
   <li>
   <Link to="/blog">Blog</Link>
   </li>
   <li><Link to="/calendar">Calendar</Link></li>
   <li>
   Our Team
    <ul className="aside_ul">
      <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="dawf" />
         <li onClick = {() => navigateToInstructor('alex_kononov')}>
           Alex Kononov
           <div className="sub_li_desc">
         <img alt="kononov" src ={require('../images/instructors/kononov_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('viktorya_kononova')}>
           Viktoriya Kononova
           <div className="sub_li_desc">
         <img alt="kononova" src ={require('../images/instructors/kononova_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('alex_koltakov')}>
           Alexey Koltakov
           <div className="sub_li_desc">
         <img alt="koltakov" src ={require('../images/instructors/koltakov_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('aleksandr_okhotenko')}>
           Aleksandr Okhotenko
           <div className="sub_li_desc">
         <img alt="okhotenko" src ={require('../images/instructors/okhotenko_big.png')} />
         </div>
           </li>
     </ul>
   </li>
   <li><Link to="/feedbacks">Feedbacks</Link></li>
   <li><Link to="/contacts">Contacts</Link></li>
   </ul>
   </nav>
   <div className="aside_bottom_block">
   <div className="sign_in">
   <span> sign in</span>
   <i className="fas fa-sign-in-alt fa-rotate-180"></i>
   </div>
   <div className="sign_out">
     <span>sign out</span>
   <i className="fas fa-sign-in-alt "></i>
   </div>
   <div className="aside_bottom">
   <select placeholder="language" onChange={languageChange}>
          <option value="">language</option>
          <option value="Russian">Russian</option>
          <option value="Engish">English</option>
    </select>
   <div>
            <i className="fab fa-facebook-f" ></i>
            <i className="fab fa-instagram" ></i>
            <i className="fab fa-vk" ></i>
        </div>
   </div>
   </div>
  </aside>
)

}





export default NavBar;