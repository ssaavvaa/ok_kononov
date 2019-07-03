import React  from "react"


const NavBar = () => {
    return(
        <nav className="navbar">
          <img alt="logo" src={require('../images/logo.png')} />
          <ul>
       <li>
         Главная
       </li>
       <li>
         Курсы
         <ul className="aside_ul">
           <li>All</li>
           <li>New</li>
           <li>Beginner</li>
           <li>Advance</li>
           <li>Pro</li>
         </ul>
       </li>
       <li>Магазин
          <ul className="aside_ul">
             <li>All</li>
             <li>все по 5</li>
             <li>шарики</li>
             <li>Женское</li>
             <li>Pro</li>
         </ul>

       </li>
       <li>
         Блог
       </li>
       <li>
        Календарь
       </li>
       <li>
        Команда
        <ul className="aside_ul">
             <li>Alex Kononov</li>
             <li>Viktoriya Kononova</li>
             <li>Alexey Koltakov</li>
             <li>Aleksandr Okhotenko</li>
         </ul>
       </li>
       <li>
        Контакты
       </li>
       </ul>
       <div className="sign_in">
       <span> sign in</span>
       <i class="fas fa-sign-in-alt fa-rotate-180"></i>
       </div>
       <div className="sign_out">
         <span>sign out</span>
       <i class="fas fa-sign-in-alt "></i>
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
      </nav>
    )
}



export default NavBar;