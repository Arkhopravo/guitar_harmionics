import React,{useState,useEffect, useContext} from 'react'
import './HomeNavbar.scss'
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../../pages/Blog/bloghooks/UserContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const LearnNav = () => {
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {setUserInform, userInform} = useContext(UserContext);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
  
    const toggleDesktopMenu = ()=> {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

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
    

    

    const navigate = useNavigate(true);



  
 

  return (
    <>
    {/* <nav className='homenavbar'>
         <div className="logo">
         <Link to="/">
                    <img src="/images/logo_300x300.png" alt='guiterlogo' style={{height:"50px" ,width:"120px"}}/>
         </Link>
         </div>

         <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>

            <ul className='left-menu'>
            <li>
            <Link to="/learning" style={{textDecoration:"none", color:"white"}}>Learning</Link>
            </li>
            <li>
            <Link to="/tune" style={{textDecoration:"none", color:"white"}}>Tuning</Link>
            </li>
            <li>
            <Link to="/matronome" style={{textDecoration:"none", color:"white"}}>Matronome</Link>
            </li>
            <li>
            <Link to="/ecommercehome" style={{textDecoration:"none", color:"white"}}>Store</Link>
            </li>
            
            

            
            
            
             </ul>

            
            
            <ul className="right-menu">
            <li>
            <Link to="/">
                <div >Home</div>
                </Link>
            </li>
            <li>
            <Link to="/blog">
                <div >About</div>
                </Link>
                
            </li>
            <li>
                <div >Services</div>
            </li>
            <li>
                <div >Contact</div>
            </li>
            </ul>

            </div>


        
        <div className="mr-20 ">

        {username && (
          <>
            <div className="gap-5-x justify-between flex ">

                  <Link to="/" className='cursor-pointer' >{username}</Link>
                  <div className='w-10' />
                  <a onClick={logout}  className='cursor-pointer' >Logout</a>
            </div>
                </>
              )}

              {!username && (
                <>
                 <Link to="/login" className='cursor-pointer' >Login</Link>
                 <div className=""></div>
                <Link to="/register" className='cursor-pointer' >Register</Link>
                </>
              )}

          </div>

            <div className="mobile-toggle" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            </div>
    </nav> */}


    <nav className='bg-black-900 p-4 '>

    {/* Desktop */}
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
       <span>Guitar Harmionics</span>
      </Link>
        <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                    {[
                ['Learning', '/learning'],
                ['Tuning', '/tune'],
                ['Matronome', '/matronome'],
                ['Store', '/ecommercehome'],
            ].map(([title, url]) => (
                <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            ))}
        </nav>
                    <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                    {[
                ['Home', '/'],
                ['About', '/blog'],
                ['Subscription', '/subscriptions'],
                ['Contact', '/'],
                
            ].map(([title, url]) => (
                <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            ))}

        </nav>
        <nav>
      
            {username && (
              <>
                  {[
                      [`${username}`, '/profile'],
                                   
                            
                        ].map(([title, url]) => (
                            <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                  ))}
                   <a onClick={logout}  className='cursor-pointer rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900' >Logout</a>
              </>
            )}

            {!username && (
              <>
                 {[
                ['Login', '/login'],
                ['Register', '/register'],
            
                
                  ].map(([title, url]) => (
                      <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                  ))}
              </>
            )}
        </nav>
        {/* Mobile menu button */}
        
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-gray-300"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>


  

    {/* Mobile */}
    {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-3/4 bg-slate-800 text-white p-6 z-50">
             <button
                onClick={toggleDesktopMenu}
                className="md:hidden text-white hover:text-gray-300"
                >
                {isMobileMenuOpen ? <FaTimes />   :  <FaBars />}
            </button>
          <nav className="flex flex-col space-y-4">
          {[
                ['Learning', '/learning'],
                ['Tuning', '/tune'],
                ['Matronome', '/matronome'],
                ['Store', '/ecommercehome'],
                
            ].map(([title, url]) => (
                <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            ))}
          </nav>
          <nav className="flex flex-col space-y-4">
          {[
                ['Home', '/'],
                ['About', '/blog'],
                ['Subscription', '/subscriptions'],
                ['Contact', '/'],
                
            ].map(([title, url]) => (
                <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            ))}
          </nav>
        
        </div>
      )}

    </nav>
    
</>
  )
}

export default LearnNav

