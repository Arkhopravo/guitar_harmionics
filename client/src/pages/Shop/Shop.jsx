import React, { useEffect, useState } from 'react'
// import getBlockchain from './ethereum'
import Store from './components/Store'

const Shop = () => {
  

    if(typeof window.ethereum === "undefined") {
        return (
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Let's Shop with MetaMask
              </h1>
              <p className="text-lg text-gray-600">
                You need to install the latest version of MetaMask.
              </p>
              <a
                href="#"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition duration-300 ease-in-out"
              >
                Install MetaMask
              </a>
            </div>
          </div>
        )
    }

  return (
    <div className="bg-black-900 h-screen flex items-center justify-center">
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold text-gray-300 mb-6">
        Let's Shop with MetaMask
      </h1>
      <div className="mb-8">
        <Store />
      </div>
      <p className="text-lg text-gray-400">
        You need to install the latest version of MetaMask.
      </p>
      <a
        href="#"
        className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition duration-300 ease-in-out"
      >
        Install MetaMask
      </a>
    </div>
  </div>
  )
}

export default Shop