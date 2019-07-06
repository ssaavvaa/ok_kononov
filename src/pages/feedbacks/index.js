import React  from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import FeedbackInfo from '../../templates-info/feedbacks';

const Feedbacks = () => (
    <Layout>
      <SEO title="Home" />

<div className="container container_feedback">
  <h1>Отзывы</h1>
   <ul>
    {FeedbackInfo.map((info,idx) => (

         <li key={idx} className={idx % 2 === 0?'even_feedback':'uneven_feedback'} >
         <img alt={info.author} src={info.img} />
           <div className={idx % 2 !== 0?"talk-bubble":"talk-bubble_2"}>
              <h3>{info.author}</h3>
                <p><small>{info.author_position}</small></p>
                <p>{info.author_msg}</p>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
           </div>
         </li>

    ))}
   </ul>
</div>

    </Layout>
  )

  export default Feedbacks;