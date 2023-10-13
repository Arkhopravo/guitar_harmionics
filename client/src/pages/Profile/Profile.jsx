import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Blog/bloghooks/UserContext'

const Profile = () => {
  const {userInform, setUserInform} = useContext(UserContext);

  useEffect(() => {
      
    fetch("https://guitar-harmionics-apiblog.onrender.com/profile",{
      credentials:'include',
    }).then(response => {
      response.json().then((userInfo )=> {
        // setUsername(userInfo.username)
        setUserInform(userInfo)
      })
    })
      
    }, [])

    const username = userInform?.username
    const email = userInform?.email

  return (

<div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
<div className="relative py-3 sm:max-w-xl sm:mx-auto">
  <div className="relative px-4 py-10 bg-slate-800 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
    <div className="max-w-md mx-auto">
      <div className="flex items-center space-x-5">
        <div className="h-14 w-14 bg-blue-100 rounded-full flex flex-shrink-0 justify-center items-center text-blue-500 text-2xl font-mono">
          {/* {username}
           */}
          <form class="flex items-center space-x-6">
  <div class="flex-shrink-0">
    <div class="h-16 w-16 relative">
      <img class="h-full w-full object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
      <label class="absolute bottom-0 right-0 bg-white rounded-full cursor-pointer p-2">
        <span class="sr-only">Choose profile photo</span>
        <input type="file" class="hidden" />
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-violet-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </label>
    </div>
  </div>
</form>


        </div>
        <div className="block pl-2 font-semibold text-3xl self-start text-gray-400">
          <h2 className="leading-relaxed">{username}</h2>
          <p className="text-sm text-gray-400 font-normal leading-relaxed">{email}</p>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <p>{/* Add more user information here */}</p>
        </div>
        <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
          <p>Additional Profile Information</p>
          <p className="text-gray-500">Additional Information about the User. The Description will be add here</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Profile