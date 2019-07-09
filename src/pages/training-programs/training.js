import React , {Fragment, useState, useEffect }  from "react";
import SEO from "../../components/seo"
import Layout from "../../components/layout";
import trainingCard from '../../templates-info/training_program';
import { Link , navigate } from "gatsby";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const scroll_button = {
    width:'55px',
    height:'55px',
    padding:"4px",
    focus:'none',
    outline:'none',
    border:'0px',
    boxShadow:'0px 0px 2px 2px black',
    zIndex:100
  }



const initialState = {
    training:{},
    current_picture:'',
    alt_current_picture:''
}



const Training = ({location}) => {


    const navigateToInstructors = e => {
        navigate(`/instructor?name=${e}`,{state:e});
      }

    const id = location.search.split('_id=')[1];

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const training = trainingCard.find(x => x._id === location.search.split('_id=')[1]);
        if(training !== undefined){
            setState({
                training,
                current_picture:training.main_img,
                alt_current_picture:training.alt,
            });
        }
       },[]);

const setImage = (e,b) => {
    const card = trainingCard.find(x => x._id === id)
    setState({
        training:card,
        current_picture:e,
        alt_current_picture:b
    });
}

const { single_page , heading , isFree , price , old_price } = state.training;
const alt = state.alt_current_picture;
const { current_picture } = state


if(!id){
return (
    <div className = 'container container_landing_training' style={{textAlign:'center'}}>
   <h2 >You have to choose a training to view this page</h2>
   <Link to='/training-programs/'>Go to training page</Link>
</div>
)
}

 if(!single_page){
    return (
        <div className = 'container container_landing_training' style={{textAlign:'center'}}>
        <h2 >Item with this Id was not created yet</h2>
        <p>Please go and pick 'Basic' category</p>
        <Link to='/training-programs?category=basic'>Go to training page</Link>
     </div>
    )
 }
 


    return (
        <Layout>
        <SEO title="training_program" />
        <ScrollUpButton style={scroll_button} />
        <div className = 'container container_landing_training'>
        {single_page &&
        <Fragment>
        {heading && <h1>{heading}</h1>}
        <div className= "images_presentation">
            <div className="img_presentation_wrapper">
                 {current_picture && <div><img src = {current_picture} alt ={alt} /></div>}  
                   <ul>
                    {state.training.single_page.images &&  state.training.single_page.images.map(img => (
                           <li  key ={img.alt}>
                               <img  onClick={() => setImage(img.src, img.alt , id)}  src = {img.src} alt = {img.alt} />
                           </li>
                       ))}
                   </ul>
            </div>
            <div className="program_aside_picture_info">
             {heading && <h3>{heading}</h3>} 
         {state.training.single_page.short_description && <p>{ state.training.single_page.short_description}</p>}
         {state.training.single_page.instructor && 
                      <Fragment>
                          <h3>Инструктор</h3>
                          <p onClick ={() => navigateToInstructors(state.training.single_page.link_instructor)}
                          style={{color:'blue', textDecoration:'underline', cursor:'pointer'}}>
                          {state.training.single_page.instructor}
                          </p>
                      </Fragment>}
              {isFree
                ?<span>Бесплатно</span>
                :<div>
                    <span>${price}</span>{"  "}<span><del>${old_price}</del></span>
                 </div>}
              {!isFree && <Fragment>
                  <button>Добавить в корзину</button>
                  <div></div>
                  </Fragment>}
              <p>{ state.training.single_page.includes }</p>
             {state.training.single_page.includes_list && <h3>А так же:</h3> } 
              <ul>
                {state.training.single_page.includes_list && state.training.single_page.includes_list.map(p => (
                      <li key={p.key}> <p> - <small>{p.p}</small> </p></li>
                  ))}
              </ul>
              {isFree && 
                   <div>
                       <Link to="/contacts/">Go to contacts page</Link>
                   </div>
              }
           </div>
        </div>

       {state.training.single_page.course_for && <h2 className = 'h2_training' >ДЛЯ КОГО ЭТА ПРОГРАММА</h2>} 
        <ul className="target_people_trainings">
              {state.training.single_page.course_for  && state.training.single_page.course_for.map(p => (
                <li key={p.key}>
                    <h3>{p.heading}</h3>
                    <p>{p.description}</p>
                </li>
            ))}
        </ul>
           {state.training.single_page.customer_receive && <h2 className = 'h2_training'>ЧТО ТЫ ПОЛУЧИШЬ:</h2>} 
            <ul className= 'customer_receive_training-wrapper'>
            {state.training.single_page.customer_receive && state.training.single_page.customer_receive.map((p,idx) => (
                <li key={p.key} className="customer_receive_training">
                    <span className='customer_receive_training-digit'>{idx + 1}</span>
                    <h3>{p.heading}</h3>
                    <p>{p.description}</p>
                </li>
            ))}

        </ul>
       {state.training.single_page.course_steps && <h2 className = 'h2_training-last'>Этапы программы:</h2>} 
        <ul className = 'program_steps'>
            { state.training.single_page.course_steps && state.training.single_page.course_steps.map((p,idx) => (
                <li key={p.key} className="">
                    <fieldset>
                           <legend>{idx + 1}</legend>
                           <h3>{p.heading}</h3>
                           <p>{p.description}</p>
               </fieldset>
                </li>
            ))}

        </ul>
        </Fragment>
}

      </div>
    </Layout>
    )

}

export default Training
