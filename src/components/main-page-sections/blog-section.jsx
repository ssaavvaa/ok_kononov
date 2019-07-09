import React, { useState, useEffect }  from "react";
import BlogItem from '../../templates/blog-item';
import BlogInfo from '../../templates-info/blog';
import { navigate } from '@reach/router';
import { prefix } from '../../components/helpers';
import Slide from 'react-reveal/Slide';

const BlogSection = () => {

  const [lang, setLang] = useState()

  
  useEffect(() => {
    setLang(localStorage.getItem('lang'))
  },[])
  
  const redirectToBlog = () => {
    navigate(`${prefix}/blog/`);
  }


    return(
        <section className="section blog-wrapper">
          <h2>
           {lang === 'russian'
             ?'ПОСЕТИ МОЙ БЛОГ'
             :'VISIT MY BLOG'}
           </h2>
          <div className = 'container blog-wrapper-container'>
        {BlogInfo.map(item => (
           <Slide key={item.id} left>
            <BlogItem  link = {item.link} src={item.img_src} heading = {item.heading} 
                       date={item.date} description={item.description}/>
                        </Slide>
        )).slice(0,2)}
        </div>
        <div className="redirect_page">
        <p onClick ={() => redirectToBlog()}>
        {lang === 'russian'
             ?'НА СТРАНИЦУ'
             :'GO TO PAGE'
        }
        </p>
        </div>
       </section>
    )
}

export default BlogSection;