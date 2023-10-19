
import { useContextAuth } from "../../contexts/contextAuth"

function singOut() {
  const {logOut,user} = useContextAuth()
  return (
    <> 
   
    {user ? <button onClick={()=> logOut()} className='mt-1 h-[40px] border w-full flex justify-center items-center border-blue-700'>LogOut</button> : null }
    </>
  )
}

export default singOut