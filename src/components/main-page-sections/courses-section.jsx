import React  from "react"
import CardInfo from '../../templates-info/lesson_card';


import { TimelineLite } from 'gsap/all';
const animate = new TimelineLite();



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
    const {heading,description,target,level,img_src,isFree,price,alt,old_price} = CardInfo[this.state.current]
    return(
        <div className = "container courses_wrapper" onMouseEnter={this.onEnter.bind(this)} onMouseLeave={this.onLeave.bind(this)} >
         <h2>Choose your program</h2>
        <figure ref={img => this.image = img} className="card-lesson">
         <img alt= {alt}  src={img_src}/>
         <figcaption>
           <h3>{heading}</h3>
           <p><small>{description}</small></p>
           <p><strong style={{fontSize:'1rem'}}><u>Цель:</u>{" "}</strong><small>{target}</small></p>
           <p><strong style={{fontSize:'1rem'}}><u>Уровень:</u>{" "} </strong><small>{level}</small></p>
           {!isFree
            ?<div>
                <span>${price}</span>{" "}
                <span style={{fontSize:'1.2rem', color:'grey'}}><del>{old_price && `${old_price}`}</del></span>
             </div>
           :<p>Бесплатно</p>}
           <button><small>Подробнее</small></button>
           </figcaption>
      </figure>
      <img alt='arrow-right' src={require('../../images/arrow-right.png')} className = "arrow-right" onClick = {this.toRight.bind(this)}></img>
           <img alt='arrow-left' src={require('../../images/arrow-left.png')} className = "arrow-left" onClick = {this.toLeft.bind(this)}></img>
      </div>
  
    )
  }
}

export default CoursesSection;