import { useEffect, useState } from "react"


function useGetAvatars() {
    const [loading,setLoading] = useState()
    const [error,setError] = useState()
    const [avatars,setAvatars] = useState()

    useEffect(()=> {
        setLoading(true)
        const getAvatars = async ()=>{
            const response = await fetch("http://localhost:3000/avatars/")
            const avatars = await response.json()
            setLoading(false)
            if(!response.ok){
                setError("No se pudieron obtener los avatars")
            }else{
               
                setAvatars(avatars.avatars)
            }
        }

        getAvatars()
    }, [])

  return {loading,error,avatars}
}

export default useGetAvatars