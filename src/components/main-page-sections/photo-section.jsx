import React, { Fragment } from "react";
import { useInView } from 'react-intersection-observer';
import ImagesMainSection from '../../templates/Image_mainSection';
import ImagesInfo from '../../templates-info/Image-mainSection';

const PhotoSection = () => {

    const [ref, inView] = useInView({
        triggerOnce:true,
        threshold: 0,
        rootMargin:"50px"
      })

    return(
      <Fragment>
        <h2 className = " instagram-header">FOLLOW ME ON INSTAGRAM</h2>
        <div ref={ref} className = "section images-section">

         {ImagesInfo.map(info => (
        <ImagesMainSection key={info.id}  src={inView?info.src:"#"} alt={info.alt} inst ={info.link_inst} />
         ))}
      </div>
      </Fragment>
    )
}

export default PhotoSection;