
import { endpoints } from "../api/config"
import { getCommunHeaders } from "../api/config"


export function saveToken(token) {

    window.localStorage.setItem("token",JSON.stringify(token))
    return
}

// trae el usario que esta codificado en el token del storage
export function getTokenStorage() {
    const tokenStorage =  window.localStorage.getItem("token")
    const token = decodeToken(tokenStorage)
    

    return token
    
}

export function deleteTokenStorage() {
    window.localStorage.removeItem("token") 
}





export function decodeToken(token) {
    try {
        const tokenDecode = JSON.parse(atob(token.split(".")[1]))

        return tokenDecode
    } catch (error) {
        
        return null
    }
}





//  verifica si el token expiro , si debemos hacer el refrest, si esta vencido
export function verifyTokenExpiration() {

    // si no hay toquen  
    if(!getTokenStorage()){
        
        return {isvalid: false, isvencido: true, refrest:false,}
    }
    // sacmos la fecha de expiracion del token
    const {exp} = getTokenStorage()
    const dateTokenExpire = new Date(exp * 1000);
    const dateNow = new Date();

    const diferencia = dateNow - dateTokenExpire

    // diferencia en horas
    const horas = Math.abs(Math.floor(diferencia / (1000 * 60 * 60)))
    
   
    
    //  diferencia en minutos
    const minutos = Math.abs(Math.floor((diferencia / (1000 * 60)) % 60))


    // fecha actual es mayor que el token Token vencido
    if (dateNow > dateTokenExpire) {
        
        return {isvalid: false, isvencido: true, refrest:false, horas:horas , minutos: minutos,}
    }

    
    // si faltan menos de 30 minutos para que expire el token realizamos el refres
    if (minutos < 30) {
       
        return {isvalid: true, isvencido: false, refrest:true, horas:horas , minutos: minutos,}

    } else {

        return {isvalid: true, isvencido: false, refrest:false, horas:horas , minutos: minutos,}
    }
}


//  esta funcion se ejecuta en bucle para verificar si el token expiro y de acuerdo a eso tomar decisiones
//  1 desicion: eliminar el usuario por si no se pudo realizar el refrest

export function autoVerifyAutoRefrest(setUser) {

    // temporizadores para horas y minutos
    let idTimeOutHours = null

    let idTimeOutMinuts = null

    const {isvalid,isvencido,refrest,horas,minutos} = verifyTokenExpiration()


    // si hay horas se vuelve a ejecutar esta funcion dentro de esas
    const hourstToVerify =  horas * 3600000

    // si el token ya vencio
    if(isvencido){
       
        if(idTimeOutHours) clearTimeout(idTimeOutHours)
        if(idTimeOutHours) clearTimeout(idTimeOutMinuts)
        // eliminar el token del local storage si hay 
        if(getTokenStorage()) deleteTokenStorage()
        setUser(null)
        return
    }

    if(refrest){
        // esta funcion se ejecutara la veces que tenemos refres
        // en el backend para que no exceda a muchas peticiones debe poner una fecha mas larga
       getTokenRefrest()
    }

   

    if(horas > 1 && !refrest){
        
        if(idTimeOutMinuts) clearTimeout(idTimeOutMinuts)
        idTimeOutHours = setTimeout( ()=>{
            autoVerifyAutoRefrest(setUser)
        },hourstToVerify)
        
    }else{

        if(idTimeOutHours) clearTimeout(idTimeOutHours)
        
        // intervalo en minutos ya que queda menos de una hora
        idTimeOutMinuts = setTimeout(()=>{
            autoVerifyAutoRefrest(setUser)
        },120000)
    }



}



async function getTokenRefrest() {

    // console.log("comun headers",comunHeaders)

    const headers = getCommunHeaders()
    

   
        
       try {
        
        const getToken = await fetch(`${endpoints.auth}refrestToken/`,{
            headers: headers
        })
        const data = await getToken.json()

        console.log("NUEVO TOKKEN",data)
       
        // eliminamos por si las moscas esta el token viejo
        if(getTokenStorage()) deleteTokenStorage()
        
         // guardamos el nuevo token
        if(getToken.status === 200) saveToken(data.token)

        return {success: true}

        
       } catch (error) {
        
        return {success:false}
       }
    

   
    
}


// tokenRefrest()
