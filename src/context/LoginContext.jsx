import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginContextProvider =({children}) =>{
    const [currentUser, setCurrentUser] = useState(false);
    
   
    return <LoginContext.Provider value={{currentUser, setCurrentUser}}>{children}</LoginContext.Provider>
}