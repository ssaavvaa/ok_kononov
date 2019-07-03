import React from "react"
import BlogItem from '../../templates/blog-item';
import BlogInfo from '../../templates-info/blog';


const BlogSection = () => {

    return(
        <section className="section blog-wrapper">
          <h2>VISIT MY BLOG</h2>
          <div className = 'container blog-wrapper-container'>
        {BlogInfo.map(item => (
            <BlogItem key={item.id} src={item.img_src} heading = {item.heading} 
                       date={item.date} description={item.description}/>
        )).slice(0,2)}
        </div>
        <div className="redirect_page">
        <p>GO TO PAGE</p>
        </div>
       </section>
    )
}

export default BlogSection;