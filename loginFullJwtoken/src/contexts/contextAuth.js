import { createContext, useContext, useState } from "react";


const contextAuthUser = createContext()

// function que usa el contexto
export function useContextAuth() {
    
    return useContext(contextAuthUser)
}



const authUserProvider = ({children}) => {
    const [user,setUser]= useState(null)
    
    return (
        <contextAuthUser.Provider value={{user,setUser}}>
            {children}
        </contextAuthUser.Provider>
    )
}