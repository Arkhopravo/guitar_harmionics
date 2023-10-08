import React from 'react'
import './HomeCard.scss'
import {Link} from 'react-router-dom'
import TuneIcon from '@mui/icons-material/Tune';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';


function HomeCard() {
  return (
    <div className='homecard'>
        <div className="options">
          

        

          <Link to="/tune"
          style={{textDecoration:"none", color: "white"}}
          >
         <div className="wrapper">
               <img src="https://media.istockphoto.com/id/178111842/photo/guitar.jpg?s=612x612&w=0&k=20&c=5S9_zCTjvFKhkyIIXcpccJL_z_eKlbC_RwJcLNmw4ms=" alt="" />
               
            <h1 className="text-slate-300 mt-1 text-lg font-semibold sm:text-slate-400 md:text-2xl ">Guitar Tune</h1>
               <button >Tuner 
               <TuneIcon/>

               </button>
         </div>
          </Link>
          

         <Link to="/learning"
         style={{textDecoration:"none", color: "white"}}
         >
         <div className="wrapper ">
                <img src="https://wallpaperaccess.com/full/3807776.jpg" alt="" />
            <h1 className="text-slate-300 mt-1 text-lg font-semibold sm:text-slate-400 md:text-2xl">Let's Learn</h1>
                <button >Learn

                <MusicVideoIcon/>
                </button>
         </div>
         </Link>
         <Link to="/matronome"
         style={{textDecoration:"none", color: "white"}}
         >
         <div className="wrapper ">
      <img src="https://guitartopreview.com/wp-content/uploads/2020/02/practice-guitar-with-a-metronome.jpg" alt="" />
      <h1 className="text-slate-300 mt-1 text-lg font-semibold sm:text-slate-400 md:text-2xl">Matronome</h1>
      <button >Click Me

      
      </button>
         </div>
         </Link>
         <Link to="/ecommercehome" 
         style={{textDecoration:"none", color: "white"}}
         >
         <div className="wrapper ">
          <img src="https://c1.wallpaperflare.com/preview/216/661/239/wall-display-black-and-white-guitar.jpg" alt="" />
          <h1 className="text-slate-300 mt-1 text-lg font-semibold sm:text-slate-400 md:text-2xl">Guitar Store</h1>
          <button className='button'>Shop Now
          <svg class="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
          </button>
         </div>
         </Link>
         
      </div>
    </div>
    // <div className=""></div>
  )
}

export default HomeCard