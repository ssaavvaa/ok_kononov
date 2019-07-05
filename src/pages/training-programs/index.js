import React , { Fragment, useState, useEffect } from "react";
import SEO from "../../components/seo"
import Layout from "../../components/layout";
import trainingCard from '../../templates-info/training_program';
import { navigate } from '@reach/router';




const TrainingPrograms = (props) => {


  const [state, setState] = useState({
    trainings:[],
    category:'all'
  });
 
  useEffect(() => {
  switch(props.location.search.split('category=')[1]){
      case 'all':
          setState({trainings:trainingCard,category:'all'})
          break;
      case 'middle':
          const middle = trainingCard.filter(x => x.category === 'middle');
          setState({trainings:middle,category:'middle'})
          break;
      case 'advance':
           const advance = trainingCard.filter(x => x.category === 'advance');
           setState({trainings:advance,category:'advance'})
           break;
      case 'basic':
            const basic = trainingCard.filter(x => x.category === 'basic');
            setState({trainings:basic,category:'basic'})
            break;
    default:
        setState({trainings:trainingCard,category:'all'});
        break;
  }
  },[props.location.search])


  const onChangeSelect = e => {
    switch(e.target.value){
      case 'all':
          setState({trainings:trainingCard,category:'all'})
          break;
      case 'middle':
          const middle = trainingCard.filter(x => x.category === 'middle');
          setState({trainings:middle,category:'level middle'})
          break;
      case 'free':
              const free = trainingCard.filter(x => x.isFree === true);
              setState({trainings:free,category:"free"})
              break;
      case 'advance':
           const advance = trainingCard.filter(x => x.category === 'advance');
           setState({trainings:advance,category:'level advance'})
           break;
      case 'basic':
            const basic = trainingCard.filter(x => x.category === 'basic');
            setState({trainings:basic,category:'level basic'})
            break;
      case 'low':
              const sortedByLow = state.trainings.sort((x , y) => x.price - y.price)
              setState({trainings:sortedByLow,category:state.category})
              break;
      case 'high':
              const sortedByHigh = state.trainings.sort((x , y) => y.price - x.price)
              setState({trainings:sortedByHigh,category:state.category})
              break;
      case 'new':
              const sortedByNew = state.trainings.sort((x , y) => y.date - x.date)
              setState({trainings:sortedByNew,category:state.category})
              break;
      case 'old':
              const sortedByOld = state.trainings.sort((x , y) => x.date - y.date)
              setState({trainings:sortedByOld,category:state.category})
              break;
    default:
        setState({trainings:trainingCard,category:'all'});
        break;
  }
}

const onInput = e => {

   const search = trainingCard.filter(x => {
     let category = x.category.toLowerCase();
     let heading = x.heading.toLowerCase();
     let description = x.description.toLowerCase();
     let target = x.target.toLowerCase();
     let level = x.level.toLowerCase();
     let query = e.target.value.toLowerCase()

    return category.includes(query) || heading.includes(query)
            || description.includes(query) || target.includes(query)
            || level.includes(query)
   })
   setState({trainings:search,category:'search'})
}

const navigateTo = e => {
  navigate(`/training-programs/training?_id=${e}`,{state:{e}});
}



const {trainings} = state;

return(
  <Layout>
    <SEO title="training_program" />
    <div className="container trainings_page">
    <h1>TRAINING PROGRAMS - "<span >{state.category}</span>" </h1>
    <div className="search__trainings_block">
    <div>
      <p>Filter by:</p>
        <select className="select-css" onChange = {onChangeSelect}>
        <optgroup label="Price">
              <option value="low">low</option>
              <option value="high">high</option>
              <option value="free">free</option>
        </optgroup>
        <optgroup label="category">
              <option value="all">all</option>
              <option value="basic">basic</option>
              <option value="middle">middle</option>
              <option value="advance">advance</option>
        </optgroup>
        <optgroup label="date">
              <option value="new">new</option>
              <option value="old">old</option>
        </optgroup>
        </select>
    </div>
    <div>
    <p>Search by query</p>
       <input onInput = {onInput} type="text" placeholder="input search query" />
    </div>
    </div>

    <ul>
    {trainings.length > 0 &&
     trainings.map(training => (
      <li onClick={() => navigateTo(training._id)} key={training._id}>
      <figure>
      <img  alt={training.alt} src = {training.main_img} />
      <figcaption>
        <p><small>{training.description}</small></p>
      {training.isFree && <span>Бесплатно</span>}
      {training.old_price && <Fragment><span>{training.price}{" "}</span><span><del>{training.old_price}</del></span></Fragment>}
      {!training.old_price && <span>{training.price}</span>}
      </figcaption>
      </figure>
      <span className="view_training">view</span>
      </li>
    ))
  }
    </ul>
    {!trainings.length  && 
  <p className="nothing_found_in_trainings">Ничего не найдено по вашему запросу</p>
  }
    </div>
  </Layout>
)
 }



export default TrainingPrograms;