import { createContext, useState } from "react";

export const LoginContext = createContext({currentUser:false})

export const LoginContextProvider =({children}) =>{
    const [currentUser, setCurrentUser] = useState(false);
    
   
    return <LoginContext.Provider value={{currentUser:currentUser, setCurrentUser:setCurrentUser}}>
        {children}
        </LoginContext.Provider>
}