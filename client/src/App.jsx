import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/Home/Home'
import Tune from './pages/Tune/Tune'
import Login from './pages/Login/Login'
import Matronome from './pages/Matronome/Matronome'
import LearningHome from './pages/Learning/LearningHome/LearningHome'
import { EcommerceHome,EcommerceProducts,EcommerceProduct } from './pages/Ecommerce'
import Lessons from './pages/Learning/Lessons/Lessons'

import Music from './pages/Music/Music'

import BlogApp from './pages/Blog/BlogApp/BlogApp'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import { UserContext, UserContextProvider } from './pages/Blog/bloghooks/UserContext'
import CreatePost from './pages/Blog/pages/CreatePost'
import PostPage from './pages/Blog/pages/PostPage'
import EditPost from './pages/Blog/pages/EditPost'
import SubscriptionPanel from './pages/Subscription/SubscriptionPanel'
import Shop from './pages/Shop/Shop'




const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/login",
    element:<Login/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/shop",
    element:<Shop/>
  },
  
  {
    path:"/subscriptions",
    element:<SubscriptionPanel/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/matronome",
    element:<Matronome/>
  },{
    path:"/learning",
    element:<LearningHome/>
  },{
    path:"/lessons/:id",
    element:<Lessons/>
  },
 
  
      {
        path:"/ecommercehome",
        element:<EcommerceHome/>
      },
      {
        path:"/ecommerceproducts/:id",
        element:<EcommerceProducts/>
      },{
      path:"/ecommerceproduct/:id",
      element:<EcommerceProduct/>
    },
    {
      path:'/tune',
      element:<Tune/>
  },
 
  {
    path:'/music',
    element:<Music/>
    
  },
 
  
  
  {
    path:'/music',
    element:<Music/>
    
  },
 
  
  {
    path:'/blog',
    element:<BlogApp/>
    
  },
  {
    path:'/create',
    element:<CreatePost/>
    
  },
  {
    path:'/post/:id',
    element:<PostPage/>
    
  },
  {
    path:'/edit/:id',
    element:<EditPost/>
    
  },
])

function App() {
  return (
    <div>
      <UserContextProvider>

      <RouterProvider router= {router}/>
      </UserContextProvider>
    </div>
  )
}

export default App

{/* <Routes>
              <Route path="/" element={<Discover />} />
              <Route path:"/top-artists" element:<TopArtists />
              <Route path:"/top-charts" element:<TopCharts />
              <Route path:"/around-you" element:<AroundYou />
              <Route path:"/artists/:id", element:<ArtistDetails />
              <Route path:"/songs/:songid", element:<SongDetails />
              <Route path:"/search/:searchTerm", element:<Search />
            </Routes> */}