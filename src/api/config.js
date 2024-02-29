


const apiBase = "http://localhost:3000/"


// Cabeceras DEFINITAS  para enviar EN TODA REQUEST 
export const getCommunHeaders = ()=>{
    if(!localStorage.getItem("token")){
        console.log("no hay token para las commun header")

        return null
    }

    const communHeader = new Headers({
        'Authorization':`Bearer ${JSON.parse(localStorage.getItem("token"))}` 
    })

    return communHeader
}



export const endpoints = {

    auth : `${apiBase}auth/`
}