import { useEffect, useState } from "react";

import { authUser } from "../api/auth";
import { useContextAuth } from "../contexts/contextAuth";

import { saveToken } from "../utils/utilsAuth";
import { decodeToken } from "../utils/utilsAuth";



export function useAuthUser() {
    // set user del contexto
    const {setUser} = useContextAuth()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [thereUser,setThereUser] = useState(false)

    // definir si al endpoint login o auth0
    async function getAuthUser(credential) {
        setLoading(true)
        const getAuthToken = await authUser(credential)
        setLoading(false)

        if(getAuthToken.error) setError(getAuthToken.error)

        if(!getAuthToken.error){
            saveToken(getAuthToken.token)
            const tokenDecode = decodeToken(getAuthToken.token)
            if(tokenDecode){
                // añade los datos del usuario al contexto global
                setUser(tokenDecode)
                setThereUser(true)
                
            }
        }

        
        

        
       
       
        
    }
 


    return {loading,error,thereUser,getAuthUser}
    
}