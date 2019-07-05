import React  from "react";
import { Link } from "gatsby";
import { navigate } from '@reach/router';




const NavBar = () => {





const navigateToTraining = e => {
  navigate(`/training-programs?category=${e}`);
}

const navigateToInstructor = e => {
  navigate(`/instructor?name=${e}`, {state:e});
}

const navigateToStore = e => {
  navigate(`/store/`, {state:e});
}

    return(
        <aside className="navbar">
          <img alt="logo" src={require('../images/logo.png')} />
          <nav>
          <ul>
          <li><Link to="/">Главная</Link></li>
       <li>
         Тренировки
         <ul className="aside_ul">
         <img className='sideBar_logo' src ={require('../images/icons/fitness.png')} alt="dawf" />
           <li onClick = {() => navigateToTraining('all')}>Все...</li>
           <li onClick = {() => navigateToTraining('basic')}>Basic</li>
           <li onClick = {() => navigateToTraining('middle')}>Middle</li>
           <li onClick = {() => navigateToTraining('advance')}>Advance</li>
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
             <li onClick = {() => navigateToInstructor('alex_kononov')}>Alex Kononov</li>
             <li onClick = {() => navigateToInstructor('viktorya_kononova')}>Viktoriya Kononova</li>
             <li onClick = {() => navigateToInstructor('alex_koltakov')}>Alexey Koltakov</li>
             <li onClick = {() => navigateToInstructor('aleksandr_okhotenko')}>Aleksandr Okhotenko</li>
         </ul>
       </li>
       <li><Link to="/feedback">Отзывы</Link></li>
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
       <select>
              <option value="Russian">Russian</option>
              <option value="Engish">English</option>
        </select>
       <div>
            <img alt="facebook_logo" src={require('../images/icons/facebook.png')} />
            <img alt="instagram_logo" src ={require('../images/icons/insta.png')} />
            <img alt="vk_logo" src={require('../images/icons/vk.png')} />
            </div>
       </div>
       </div>
      </aside>
    )
}



export default NavBar;