import React, { useEffect, useState } from 'react'

import './BlogApp.scss'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Post from '../Components/Post/Post'
import Review from '../components/Review'

const BlogApp = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch(`https://guitar-harmionics-apiblog.onrender.com/post`).then((response) => {
      response.json().then(posts => {
        setPosts(posts)
      });
    })
  }, [])
  return (
    <div className='blog'>
      <Header/>      
     
     {posts.length > 0 && posts.map(post => (
            <Post {...post}/>
     ))}
   
        
        <Review/>
      
    </div>
  )
}

export default BlogApp