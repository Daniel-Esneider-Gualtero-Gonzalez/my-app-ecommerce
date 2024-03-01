import { useEffect, useState } from "react";

import { authUser } from "../api/auth";
import { useContextAuth } from "../contexts/contextAuth";

import { saveToken } from "../utils/utilsAuth";
import { decodeToken } from "../utils/utilsAuth";
import { getCommunHeaders } from "../api/config";



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
    const clearError = ()=> setError(null)
 


    return {loading,error,clearError,thereUser,getAuthUser}
    
}

// hook para registrar el usuario

export function useRegisterUser() {
    
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [isRegister,setIsregister] = useState(false)

    const headers = new Headers()

    headers.append('Content-Type', 'application/json')
    
    // definir si al endpoint login o auth0
    async function handleRegisterUser(data) {
        const optionsFetch = {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(data)
        }
    
        setLoading(true)
        const response = await fetch("http://localhost:3000/singup/",optionsFetch)
        if(!response.ok){
            if(response.status === 409){
                setError("El correo esta en uso")
            }else{
                setError("Error al registrar el usuario")
            }
           
        }else{
            setIsregister(true)
        }
        setLoading(false)

       
        
    }

    const clearError = ()=> setError(null)
 


    return {loading,error,clearError,isRegister,handleRegisterUser}
    
}