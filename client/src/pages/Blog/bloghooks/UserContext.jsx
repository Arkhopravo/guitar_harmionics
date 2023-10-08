
import  {useState, createContext} from 'react';


export const UserContext = createContext({})



export const UserContextProvider = ({children}) =>{
    const [userInform, setUserInform] = useState({})

    return (
        <UserContext.Provider value={{userInform, setUserInform}}>
            
            {children}
        </UserContext.Provider>
    )
}