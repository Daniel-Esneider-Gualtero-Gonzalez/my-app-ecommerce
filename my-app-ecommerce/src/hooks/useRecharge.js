
import { useState } from "react"
import { getCommunHeaders } from "../api/config"


function useRecharge() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [successRecharge, setSuccessRecharge] = useState(null)

    const rechargeBalance = async (dataRecharge) => {
        setLoading(true)

        const headers = getCommunHeaders()
        headers.set("Content-Type","application/json")
       
        //  'Content-Type': 'application/json',
        try {
            const recharge = await fetch("http://localhost:3000/user/balance/recharge/", {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(dataRecharge)
            })

            const data = await recharge.json()

            console.log("respuesta de intentar recargar",data)
    
            if(!recharge.ok){
    
                setError("Error al realizar la recarga ")
    
            }else{
                successRecharge(true)
    
            }
            
        } catch (error) {
            setError("Error al realizar la recarga ")
        }finally{
            setLoading(false)
        }

    }


    return {loading,error,successRecharge,rechargeBalance}
}

export default useRecharge