import React from "react"
import { useInView } from 'react-intersection-observer';



const BlogItem = ({alt, src , date , heading , description}) => {

  const [ref, inView] = useInView({
    triggerOnce:true,
    threshold: 0,
    rootMargin:"50px"
  })

    return(
     
       <figure className='blog__item-wrapper'>
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