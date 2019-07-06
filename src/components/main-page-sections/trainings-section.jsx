import React  from "react"
import CardInfo from '../../templates-info/training_program';
import { navigate } from '@reach/router';
import { prefix } from '../../components/helpers';
import { TimelineLite , CSSPlugin, ScrollToPlugin, } from 'gsap/all';

const animate = new TimelineLite();

//eslint-disable-next-line
const plugins = [CSSPlugin, ScrollToPlugin]; 


const navigateTo = e => {
  navigate(`${prefix}/training-programs/training?_id=${e}`,{state:{e}});
}

class CoursesSection extends React.Component {

constructor(props){
  super(props);
  this.state={
    current:0,
    interval:''
  }
  this.image = React.createRef();
}

flash(){
  animate.to(this.image, 0, { opacity:0.2 })
      .to(this.image, 1.5, { opacity:1  });
}

interval(){
  let interval = setInterval(() => {
    if(this.state.current !== CardInfo.length - 1 ){
     this.flash();
       return this.setState({current:this.state.current + 1});
      }
      this.flash();
      return this.setState({current:0});
  },3000);
  this.setState({interval})
}

componentDidMount(){
   this.interval();
}

 toRight(){
  return this.state.current !== CardInfo.length - 1
         ?this.setState({current:this.state.current + 1})
         :this.setState({current:0});
 }

 toLeft(){
    return this.state.current !== 0
        ?this.setState({current:this.state.current - 1})
        :this.setState({current:CardInfo.length - 1});
}

onEnter(){
   clearInterval(this.state.interval);
   let right = document.querySelector('.arrow-right');
   let left = document.querySelector('.arrow-left');
   right.style.backgroundColor = 'rgba(0, 0, 0, 0.151)'
   left.style.backgroundColor = 'rgba(0, 0, 0, 0.151)'
}

onLeave(){
   this.interval();
   let right = document.querySelector('.arrow-right');
   let left = document.querySelector('.arrow-left');
   right.style.backgroundColor = 'transparent';
   left.style.backgroundColor =  'transparent';
}

componentWillUnmount(){
  clearInterval(this.state.interval);
}

  render(){
    const { _id , heading , description , target , level , main_img , 
            isFree , price , alt , old_price 
          } = CardInfo[this.state.current]


    return(
        <div className = "container courses_wrapper" onMouseEnter={this.onEnter.bind(this)} onMouseLeave={this.onLeave.bind(this)} >
         <h2>Choose your program</h2>
        <figure ref={img => this.image = img} className="card-lesson">
         <img alt= {alt}  src={main_img}/>
         <figcaption>
           <h3>{heading}</h3>
           <p><small>{description}</small></p>
           <p><strong ><u>Цель:</u>{" "}</strong><small>{target}</small></p>
           <p><strong ><u>Уровень:</u>{" "} </strong><small>{level}</small></p>
           {!isFree
            ?<div>
                <span>${price}</span>{" "}
                <span ><del>{old_price && `${old_price}`}</del></span>
             </div>
           :<p>Бесплатно</p>}
           <button onClick={() => navigateTo(_id)}><small>Подробнее</small></button>
           </figcaption>
      </figure>
      <button className='arrow-right' onClick = {this.toRight.bind(this)}><i className="fas fa-chevron-right "></i></button>
      <button className='arrow-left' onClick = {this.toLeft.bind(this)}><i className="fas fa-chevron-left"></i></button>
      </div>
    )
  }
}

export default CoursesSection;