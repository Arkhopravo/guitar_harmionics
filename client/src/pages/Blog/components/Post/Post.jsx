import React from 'react'
import './Post.scss'
import { formatISO9075 } from 'date-fns';
import { Link } from 'react-router-dom';

const Post = ({_id, title, summary, cover, content,createdAt,author}) => {
  return (
    <div className="post">
    <div className='image'>
      
          <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/' + cover} alt="post images" className='rounded-xl' />
          </Link> 
        
    </div>
     
     <div className="text">
        <Link to={`/post/${_id}`}>
              {/* <h2>EcoFlow teases full-house battery backup coming later this year</h2> */}
              <h2>{title}</h2>
              <p className="info">
              {author && (
                <a href="" className="author ">
                    {author.username}
                  </a>
                )}
                {/* <time>10-09-2021 16:45</time> */}
                <time>{ formatISO9075(new Date(createdAt))}</time>
              </p>
              {/* <p className='summary'>Today at CES in Las Vegas, hidden among all its other news, a spokesperson for the company told TechCrunch it is also planning to release full-house battery backup power solutions to go with its more portable battery backup systems, and its RV-focused solutions. The company was tight-lipped about exactly what it was releasing, or when, but it’ll be interesting to see what the battery backup powerhouse comes up with later in the year.</p> */}
              <p className='summary'>{summary}</p>
          </Link>
     </div>
    </div>
  )
}

export default Post