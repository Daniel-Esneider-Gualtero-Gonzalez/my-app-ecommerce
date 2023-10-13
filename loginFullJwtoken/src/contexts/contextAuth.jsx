import { createContext, useContext, useState } from "react";
import { getUserStorage } from "../utils/utilsAuth";


const contextAuthUser = createContext()

// function que usa el contexto
export function useContextAuth() {
    
    return useContext(contextAuthUser)
}



export const ContextUserProvider = ({children}) => {
    const [user,setUser]= useState(null)
    
    // si el user esta en el storage y el user actual esta vacio
    if(getUserStorage() && !user) setUser(getUserStorage())
    
    return (
        <contextAuthUser.Provider value={{user,setUser}}>
            {children}
        </contextAuthUser.Provider>
    )
}