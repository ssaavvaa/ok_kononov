import React from "react";
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
      <div className="insta_photos_section">
        <h2 className = " instagram-header">FOLLOW ME ON INSTAGRAM</h2>
        <div ref={ref} className = " images-section">
    
         {ImagesInfo.map(info => (
        <ImagesMainSection key={info.id}  src={inView?info.src:"#"} alt={info.alt} inst ={info.link_inst} />
         ))}
      </div>
      </div>
    )
}

export default PhotoSection;