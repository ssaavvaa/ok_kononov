import React from "react"
import { useInView } from 'react-intersection-observer';
import { navigate } from '@reach/router';
import { prefix } from '../components/helpers';


const BlogItem = ({alt, src , link , date , heading , description}) => {

  const [ref, inView] = useInView({
    triggerOnce:true,
    threshold: 0,
    rootMargin:"50px"
  })

  const redirectToArticle = e => {
    navigate(`${prefix}/blog/${e}`);
  }

    return(
       <figure className='blog__item-wrapper' onClick = {() => redirectToArticle(link)}>
         <div>
        <img alt={alt} ref={ref} src={inView?src:''}></img>
        </div>
        <figcaption>
        <p><small>{date}</small></p>
        <h3>{heading}</h3>
        <p><small>{description}</small></p>
        </figcaption>
       </figure>
  
    )
}

export default BlogItem;