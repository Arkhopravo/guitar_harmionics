import React from 'react'
import './HomeBlog.scss'
import { Link } from 'react-router-dom'
import { posts } from '../../datablog'
import HomeBlogCards from '../HomeBlogCards/HomeBlogCards'

function HomeBlog() {
  return (
    <>
   <div className="headingblog">
   <h1>Our Blogs</h1>
    <span>Last Update</span>
   </div>
   <div className='homeblog'>
      {posts.map(post=>(
        <HomeBlogCards post={post}/>
        ))}
   </div>

  
    </>
  )
}

export default HomeBlog

