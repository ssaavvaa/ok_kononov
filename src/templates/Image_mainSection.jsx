import React, {Fragment} from "react";




const ImagesMainSection = ({ alt , src , inst }) => {
    return (
        <Fragment>
            <div className="image-item">
            <img alt={alt}  src={src} inst = {inst} />
            </div>
        </Fragment>
    )
}

export default ImagesMainSection;
