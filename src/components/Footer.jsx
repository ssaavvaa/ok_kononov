import React, { useState, useEffect, Fragment } from "react";



const Footer = () => {

const [lang, setLang] = useState()

useEffect(() => {
setLang(localStorage.getItem('lang'))
},[])

return (
<footer className="section">
    {lang === 'russian'
    ?<Fragment>
        <span>© 2019 Oleksiy Kononov Team</span>
        <ul>
            <li>Конфеденциальность</li>
            <li>Согласие с рассылкой</li>
            <li>Договор оферты</li>
            <li>Ответственность</li>
            <li>Оплата</li>
        </ul>
        <span>Вернутся к началу</span>
    </Fragment>
    :<Fragment>
        <span>© 2019 Oleksiy Kononov Team</span>
        <ul>
            <li>Confidentiality</li>
            <li>Consent to the newsletter</li>
            <li>Contract offer</li>
            <li>Responsibility</li>
            <li>Payment</li>
        </ul>
        <span>To Start</span>
    </Fragment>
    }

</footer>
)
}

export default Footer;