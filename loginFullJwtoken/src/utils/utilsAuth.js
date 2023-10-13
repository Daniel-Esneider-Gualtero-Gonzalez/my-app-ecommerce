



export function saveToken(token) {
    window.localStorage.setItem("token",JSON.stringify(token))
    return
}

// trae el usario que esta codificado en el token del storage
export function getUserStorage() {
    const tokenStorage =  window.localStorage.getItem("token")
    const token = decodeToken(tokenStorage)
    

    return token
    
}

export function deleteUserStorage() {
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

// verifica si debemos refrescar el token 
export function verifyRefrestToken() {

    const token = getUserStorage()
    
    const {exp} = token

    const dateNow = Date.now()
    
}