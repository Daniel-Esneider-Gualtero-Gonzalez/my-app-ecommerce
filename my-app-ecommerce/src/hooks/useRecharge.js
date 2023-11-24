
import { useState } from "react"


function useRecharge() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [successRecharge, setSuccessRecharge] = useState(null)

    const rechargeBalance = async (dataRecharge) => {
        setLoading(true)
       
        try {
            const recharge = await fetch("http://localhost:3000/user/balance/recharge/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Puedes incluir otros encabezados necesarios, como token de autenticación si es necesario
                },
                body: JSON.stringify(dataRecharge)
            })
    
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


    return {loading,error,successRecharge}
}

export default useRecharge