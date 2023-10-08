import React, { useContext, useEffect, useState } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import { UserContext } from '../../bloghooks/UserContext';

const Header = () => {

  
  // const [username, setUsername] = useState(null)
  const {setUserInform, userInform} = useContext(UserContext);

  useEffect(() => {
    
  fetch("http://localhost:4000/profile",{
    credentials:'include',
  }).then(response => {
    response.json().then((userInfo )=> {
      // setUsername(userInfo.username)
      setUserInform(userInfo)
    })
  })
    
  }, [])

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials:'include',
      method:'POST',
    });
    // setUsername(null);
    setUserInform(null)
  }
  
  const username = userInform?.username

  return (
    <header>
      <div className="">

      
            <nav className="flex sm:justify-center space-x-4">
                  {[
                    ['Our Blogs', '/blog'],
                    ['Home', '/'],
                  
                  ].map(([title, url]) => (
                    <Link to={url} className="rounded-lg px-3 py-2 text-slate-400 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                  ))}
              </nav>
      </div>
            <nav>
            
              {username && (
                <>
                  <Link to="/" className='cursor-pointer hover:bg-slate-100 hover:text-slate-900 rounded-lg px-3 py-2'>{username}</Link>
                  <Link to="/create" className='cursor-pointer hover:bg-slate-100 hover:text-slate-900 rounded-lg px-3 py-2'>Create New Post</Link>
                  <a onClick={logout}  className='cursor-pointer hover:bg-slate-100 hover:text-slate-900 rounded-lg px-3 py-2'>Logout</a>
                </>
              )}

              {!username && (
                <>
                 <Link to="/login" className='cursor-pointer hover:bg-slate-100 hover:text-slate-900 rounded-lg px-3 py-2 '>Login</Link>
                <Link to="/register" className='cursor-pointer hover:bg-slate-100 hover:text-slate-900  rounded-lg px-3 py-2'>Register</Link>
                </>
              )}
            </nav>
    </header>
  )
}

export default Header