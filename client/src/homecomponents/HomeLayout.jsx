import React from 'react'
import HomeFooter from './HomeFooter/HomeFooter'
import HomeNavbar from './HomeNavbar/HomeNavbar'

const HomeLayout = ({children}) => {
  return (
    <div>
        <HomeNavbar/>
        <div className="bg-white h-1"></div>
        {children}
        <HomeFooter/>    
    </div>
  )
}

export default HomeLayout