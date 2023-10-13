

import { endpoints } from "./config"
import { ERRORS } from "../constants/errorMessages"

export async function authUser(credentials) {
    console.log("credencital antes del fecth en stringifuy",JSON.stringify({daniel:"hola"}))

    
    try {
        const authUser = await fetch("http://localhost:3000/api/auth0/",{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(credentials),
            
        })
        const status = authUser.status
        let errorObjet = null
        if(status===401){
            errorObjet = {message:ERRORS.UNAUTHORIZETH,statuscode:status}
            throw errorObjet
        }

        if(status==404){
            errorObjet = {message:ERRORS.NOTFOUND,statuscode: status}
            throw errorObjet
        }

        if(status===500){
            errorObjet = {message:ERRORS.SERVER_ERROR, statuscode:status}
            throw errorObjet
        }
        
        
        const token = await authUser.json()

        return token
        
    } catch (error) {

        const  isConexion = error instanceof TypeError
        console.log(error)
        
        return {error:{isConexion:isConexion ,...error}}
    }
     
    
}


