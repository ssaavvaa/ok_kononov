
import React , { useState, useEffect }  from "react";
import instructor from '../../templates-info/instructor-info';
import Layout from "../../components/layout";
import SEO from "../../components/seo";




const Instructor = (props) => {



    const [state, setState] = useState({
        instructor:{}
    });

    useEffect(() => {
        switch(props.location.search.split('name=')[1]){
            case 'viktorya_kononova':
                const kononova = instructor.find(x => x.url_name === 'viktorya_kononova');
                setState({instructor:kononova})
                break;
            case 'alex_kononov':
                const kononov = instructor.find(x => x.url_name === 'alex_kononov');
                setState({instructor:kononov})
                break;
            case 'alex_koltakov':
                const koltakov = instructor.find(x => x.url_name === 'alex_koltakov');
                setState({instructor:koltakov})
                break;
            case 'aleksandr_okhotenko':
                const okhotenko = instructor.find(x => x.url_name === 'aleksandr_okhotenko');
                setState({instructor:okhotenko})
                break;
          default: setState({instructor:instructor.find(x => x.url_name === 'alex_kononov')})
        }

       },[props.location.search]);

const { name , family_name,  single_page_img ,p_1 , p_2 , p_3 , p_4 , gender } = state.instructor

    return (
        <Layout>
        <SEO title="Instructor" />
        <div className="container container_instructor">

            <h1 className = { gender === 'female'?'shapka_female':'shapka_male'}>{name}{" "}{family_name}</h1>
            <img src ={single_page_img} alt="instructor_photo" />
            {p_1 && <h3>{p_1}</h3>}
            {p_2 && <p>{p_2}</p>}
            {p_3 && <p>{p_3}</p>}
            {p_4 && <p>{p_4}</p>}
            {!p_1 && <h2>Тут будет какая-то информация</h2>}
            
        </div>
        </Layout>
    )
}

export default Instructor;
