
import { endpoints } from "./config"
import { ERRORS } from "../constants/errorMessages"

export async function authUser(credentials) {
    
    try {
        const authUser = await fetch("http://localhost:3000/prueba")
        console.log("messsage server error",ERRORS.SERVER_ERROR)
        if(authUser.status === 500) throw Error(ERRORS.SERVER_ERROR)
        // if(authUser.status === 404) throw 
        // const data = await authUser.json()
        // console.log("data",authUser)
        // // cuando tengamos el token lo guardamos en localstorage
        // saveToken(data)
        // return {succes:"Inicio de sesion exitoso"}
    } catch (error) {
        if(error instanceof TypeError){
            return ERRORS.NETWORK_ERROR
        }
        return {error}
    }
}



function saveToken(token) {
    window.localStorage.setItem("token",JSON.stringify(token))
    return
}



export async function handleLogin(credential,stateError) {
    
    const login = await authUser()
    console.log("loginhanlde", login.error)
    if(login.error) return stateError("hola mundo")
}