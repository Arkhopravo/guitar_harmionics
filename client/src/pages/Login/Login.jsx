import React,{useState, useEffect, useContext} from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Login.scss'
import { FacebookOutlined } from '@mui/icons-material';
import { BsSpotify } from 'react-icons/bs';
// import { loginUrl } from '../Music/Spotify';
// import { getTokenFromUrl } from '../Music/Spotify';
import SpotifyWebAPi from 'spotify-web-api-js'
import Music from '../Music/Music';
// import { useStateValue } from '../Music/StateProvider';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';


import {  Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../Blog/bloghooks/UserContext';





function Login() {
 

  const [flag, setFlag] = useState(false)
  const [name, setName] = useState()

  const nagivate = useNavigate();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  const Userlogin = async(ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
      credentials:'include',
    });

    if(response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        console.log(userInfo)
      })
      setRedirect(true);
      
    } else {
      alert('wrong credentials')
    }

  }

  if(redirect) {
    return <Navigate to={"/"}/>
  }
  

  return (
    <div className="login">


<div class="container">
    <div class="heading">Sign In</div>
    <form action="" class="form" onSubmit={Userlogin}>
      <input 
          required="" 
          class="input" 
          type="email" 
          name="email" 
          id="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={ev => setEmail(ev.target.value)}/>
      <input 
          required="" 
          class="input" 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Password"  
          value={password}
          onChange={ev => setPassword(ev.target.value)}/>
      
      <span class="forgot-password">
        <a href="#">Forgot Password ?</a>
      </span>
      <input class="login-button" type="submit" value="Sign In"/>
      
      
    </form>
   
      
      
  </div>


    

  </div>
  )
}

export default Login