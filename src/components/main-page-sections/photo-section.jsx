import React from "react";
import images from '../../templates-info/images__5-section';
import { useInView } from 'react-intersection-observer';


const PhotoSection = () => {

    const [ref, inView] = useInView({
        triggerOnce:true,
        threshold: 0,
        rootMargin:"50px"
      })

    return(
        <section className="main__page-5">
           {images.map(img => (
             <img key={img.id} ref={ref} src={inView?img.src:""}></img>
           ))}
      </section>
    )
}

export default PhotoSection;