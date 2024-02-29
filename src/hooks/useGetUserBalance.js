import React, { useState } from 'react'
import { getCommunHeaders } from '../api/config'

function useGetUserBalance() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [balance, setBalance] = useState(null)


    const getUserBalance = async () => {
        setLoading(true)

        const headers = getCommunHeaders()

        try {
            const getBalance = await fetch("http://localhost:3000/user/balance/",{
                headers:headers
            })
            if (!getBalance.ok) {
                return setError("Error al obtener el saldo")
            }

            const balance = await getBalance.json()

           return setBalance(balance.balance)
        } catch (error) {

            return setError("Error al obtener el saldo")
        } finally{
            setLoading(false)
        }

    }

    return { loading, error, balance, getUserBalance }
}

export default useGetUserBalance