import React from 'react';
import { navigate } from '@reach/router';
import { prefix } from '../components/helpers';





const Instructor = ({ url_name, img, alt, name, family_name, position, description }) => {

    const navigateToInstructor = e => {
        navigate(`${prefix}/instructor?name=${e}`, {state:e});
      }

    return (
        <li onClick = {() => navigateToInstructor(url_name)}>
            <img alt={alt} src ={img} />
            <h3>{name}{" "}{family_name}</h3>
            <p><small>{position}</small></p>
            <p>{description}</p>
            <div className="hider_instructor">
            {name} инфо
            </div>
        </li>
    )
}

export default Instructor;
