import { createContext, useContext, useState } from "react";
import { autoVerifyAutoRefrest, deleteTokenStorage, getTokenStorage, verifyTokenExpiration } from "../utils/utilsAuth";


const contextAuthUser = createContext()

// function que usa el contexto
export function useContextAuth() {
    
    return useContext(contextAuthUser)
}



export const ContextUserProvider = ({children}) => {
    const [user,setUser]= useState(null)
    
    
    if(getTokenStorage()) {
        const {isvencido} = verifyTokenExpiration()

        if(isvencido){
            deleteTokenStorage()
        }else{
            if(!user) setUser(getTokenStorage())
            // iniciamos al auto refrest
            
        }
        // sin no esta vencido ejecutamos 
        if(!isvencido) autoVerifyAutoRefrest(setUser) 
    }
    
    return (
        <contextAuthUser.Provider value={{user,setUser}}>
            {children}
        </contextAuthUser.Provider>
    )
}