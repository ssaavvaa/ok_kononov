import React, { useState, useEffect }  from "react";
import { Link } from "gatsby";
import { navigate } from '@reach/router';
import { prefix } from '../components/helpers';
import $ from "jquery";



const NavBar = () => {


  const [lang, setLang] = useState()

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

const showAsideUl = e => {
if($( window ).width() < 1024){
   $(e.target).siblings().find(".aside_ul").hide()
   $(e.target).find(".aside_ul").slideToggle()
}}


  return(
    <aside className="navbar">

      <nav>
      <img alt="logo" src={require('../images/logo.png')} />
      <ul>
          <li><Link to="/">{lang === 'russian'?'Главная':'Main'}</Link></li>
   <li onClick ={showAsideUl}>
     {lang === 'russian'?'Тренеровки':'Trainings'}
     <ul className="aside_ul">
     <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="logo_company" />
       <li onClick = {() => navigateToTraining('all')}>
       {lang === 'russian'?'Все...':'All...'}
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
   <li onClick ={showAsideUl}>
      {lang === 'russian'?'Магазин':'Store'}
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
   <Link to="/blog">{lang === 'russian'?'Блог':'Blog'}</Link>
   </li>
   <li><Link to="/calendar">{lang === 'russian'?'Календарь':'Calendar'}</Link></li>
   <li onClick ={showAsideUl}>
   {lang === 'russian'?'Наша Команда':'Our Team'}
    <ul className="aside_ul">
      <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="dawf" />
         <li onClick = {() => navigateToInstructor('alex_kononov')}>
         {lang === 'russian'?'Алексей Кононов':'Oleksyi Kononov'}
           <div className="sub_li_desc">
         <img alt="kononov" src ={require('../images/instructors/kononov_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('viktorya_kononova')}>
         {lang === 'russian'?'Виктория Кононова':'Viktoriya Kononova'}
           <div className="sub_li_desc">
         <img alt="kononova" src ={require('../images/instructors/kononova_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('alex_koltakov')}>
         {lang === 'russian'?'Алексей Колтаков':'Oleksyi Koltakov'}
           <div className="sub_li_desc">
         <img alt="koltakov" src ={require('../images/instructors/koltakov_big.png')} />
         </div>
           </li>
         <li onClick = {() => navigateToInstructor('aleksandr_okhotenko')}>
         {lang === 'russian'?'Александр Охотенко':'Aleksandr Okhotenko'}
           <div className="sub_li_desc">
         <img alt="okhotenko" src ={require('../images/instructors/okhotenko_big.png')} />
         </div>
           </li>
     </ul>
   </li>
   <li><Link to="/feedbacks">{lang === 'russian'?'Отзывы':'Feedbacks'}</Link></li>
   <li><Link to="/contacts">
       {lang === 'russian'?'Контакты':'Contacts'}
       </Link></li>
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
          <option value="">{lang === 'russian'?'Язык':'Language'}</option>
          <option value="russian">{lang === 'russian'?'Русский':'Russian'}</option>
          <option  value="engish">{lang === 'russian'?'Английский':'English'}</option>
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