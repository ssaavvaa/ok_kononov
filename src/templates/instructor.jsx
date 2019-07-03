import React from 'react';

const Instructor = ({ img, alt, name, family_name, position, description }) => {
    return (
        <li>
            <img alt={alt} src ={img} />
            <h3>{name}{" "}{family_name}</h3>
            <p><small>{position}</small></p>
            <p>{description}</p>
        </li>
    )
}

export default Instructor;
