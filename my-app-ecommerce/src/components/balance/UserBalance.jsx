import { useEffect } from 'react'
import useGetUserBalance from '../../hooks/useGetUserBalance'
import { GiCash } from "react-icons/gi";

function UserBalance() {

    const {loading,error,balance,getUserBalance} = useGetUserBalance()
    useEffect(()=>{
        getUserBalance()
    },[])
  return (
    <>
      <span className='flex gap-1 items-center'><GiCash /> {loading && "...cargando"} {balance && balance} </span>
    </>
  )
}

export default UserBalance