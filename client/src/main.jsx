import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store, persistor} from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';



import { Provider } from 'react-redux'

import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  
  <React.StrictMode>

    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  
      
      {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    {/* <UserContextProvider> */}
      <App />
    {/* </UserContextProvider> */}
    <ToastContainer />

        {/* </StateProvider> */}
        
      </PersistGate>
     </Provider>
  </GoogleOAuthProvider>
  </React.StrictMode>
        
   
)
