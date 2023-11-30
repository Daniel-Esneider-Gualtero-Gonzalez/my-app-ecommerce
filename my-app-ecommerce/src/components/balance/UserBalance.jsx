import { useEffect } from 'react'
import useGetUserBalance from '../../hooks/useGetUserBalance'

function UserBalance() {

    const {loading,error,balance,getUserBalance} = useGetUserBalance()
    useEffect(()=>{
        getUserBalance()
    },[])
  return (
    <>
    {loading ? <div>UserBalance : cargando..</div> : null}
    {balance ? <div>UserBalance : {balance}</div> : null}
    </>
  )
}

export default UserBalance