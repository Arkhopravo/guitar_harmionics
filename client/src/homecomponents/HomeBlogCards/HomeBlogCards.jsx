import React from 'react'

import "./HomeBlogCards.scss"
import { Link } from 'react-router-dom'



function HomeBlogCards({post}) {
  return (
    <div className="card">
  
      <div className="card2">

      <img src={post.img} alt="" className="img" />
      <p className="blogdesc">{post.desc}</p>
      <Link to="/blog">
      <button className="custom-btn btn-2">Read More</button>
      </Link>
      </div>
    
  </div>
  
  )
}

export default HomeBlogCards