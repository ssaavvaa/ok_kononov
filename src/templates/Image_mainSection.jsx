import React, {Fragment} from "react";




const ImagesMainSection = ({ alt , src , inst }) => {
    return (
        <Fragment>
            <div className="image-item">
            <img alt={alt}  src={src} inst = {inst} />
            <div className ='image_links'>
                <img alt='instagram_logo' src = {require('../images/icons/logo_instagram.png')}>
                </img>

            </div>
            </div>
        </Fragment>
    )
}

export default ImagesMainSection;
