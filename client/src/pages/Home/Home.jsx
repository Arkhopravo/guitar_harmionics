import React from 'react'
import './Home.scss'

import HomeNavbar from '../../homecomponents/HomeNavbar/HomeNavbar'
import { Link } from 'react-router-dom'
import HomeCard from '../../homecomponents/HomeCard/HomeCard'
import HomeAbout from '../../homecomponents/HomeAbout/HomeAbout'
import HomeBlog from '../../homecomponents/HomeBlog/HomeBlog'
import HomeContactUs from '../../homecomponents/HomeContactUs/HomeContactUs'
import HomeFooter from '../../homecomponents/HomeFooter/HomeFooter'
import HomeLayout from '../../homecomponents/HomeLayout'

function Home() {


  return (
    <div className='mainhome'>

      {/* <HomeNavbar/> */}
      <HomeLayout>

      <HomeCard/>
     
      <HomeAbout />
      <HomeBlog/>
      
      <HomeContactUs/>
      </HomeLayout>
      
      {/* <HomeFooter/> */}
    </div>
  )
}

export default Home