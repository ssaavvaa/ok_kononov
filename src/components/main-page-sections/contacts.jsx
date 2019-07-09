import React, {  useState, useEffect }  from "react";

const Contacts = () => {


    const [lang, setLang] = useState()

    useEffect(() => {
      setLang(localStorage.getItem('lang'))
    },[])


    return (
        <section className=" contacts__container">
            {lang === 'russian'
            ?   <div className="container">
            <h2>Наши Контакты</h2>
            <h3>Есть вопрос?</h3> 
            <p >Звони, пиши нам. Мы открыты для общения и рады вам.</p>
            <div className="contacts__info">
            <div>
                <p>+38 050 101 72 55</p>
                <p>oleksiykononovb2c@gmail.com</p>
                <p><small>8400 2nd Avenue, 22, Montreal, QC H1Z 4M6 Alegria</small></p>
                <div>
            <i className="fab fa-facebook-f" ></i>
            <i className="fab fa-instagram" ></i>
            <i className="fab fa-vk" ></i>
        </div>
            </div>
            <form>
                <input type="email" placeholder="Твой Email" />
                <input type="text" placeholder="Как могу к тебе обращаться?" />
                <input type="textarea" placeholder="Коментарий" />
                <button>Отправить</button>
            </form>
            </div>
            </div>
          : <div className="container">
          <h2>Our Contacts</h2>
          <h3>Have a question</h3> 
          <p>Call us, text us. We are open for communication and welcome to you.</p>
          <div className="contacts__info">
          <div>
              <p>+38 050 101 72 55</p>
              <p>oleksiykononovb2c@gmail.com</p>
              <p><small>8400 2nd Avenue, 22, Montreal, QC H1Z 4M6 Alegria</small></p>
              <div>
          <i className="fab fa-facebook-f" ></i>
          <i className="fab fa-instagram" ></i>
          <i className="fab fa-vk" ></i>
      </div>
          </div>
          <form>
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="How can i call you?" />
              <input type="textarea" placeholder="Comment" />
              <button>Send</button>
          </form>
          </div>
          </div>
        }

        </section>
    )
}

export default Contacts;
