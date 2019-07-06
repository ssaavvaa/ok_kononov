import SEO from "../../components/seo"
import React from "react";
import Layout from "../../components/layout";


const style ={
    fontSize:'30px'
}

const ContactsPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="contacts__container" style={{minHeight:'100vh',display:'flex',alignItems:'center'}}>
            <div className="container">
            <h2>Наши Контакты</h2>
            <h3>Есть вопрос? Звони, пиши нам. Мы открыты для общения и рады вам.</h3>
            <div className="contacts__info">
            <div>
                <p>+38 050 101 72 55</p>
                <p>oleksiykononovb2c@gmail.com</p>
                <p><small>8400 2nd Avenue, 22, Montreal, QC H1Z 4M6 Alegria</small></p>
                <div>
                <i className="fab fa-facebook-f" style={style}></i>
                <i className="fab fa-instagram" style={style}></i>
                <i className="fab fa-vk" style={style}></i>

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

        </section>
  </Layout>
);

export default ContactsPage;
