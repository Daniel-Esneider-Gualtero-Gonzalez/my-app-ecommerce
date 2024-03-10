import { MdLogout } from "react-icons/md";
import { useContextAuth } from "../../contexts/contextAuth"

function SingOut({...props}) {
  const {logOut,user} = useContextAuth()
  return (
    <> 
   
    {user ? <button  {...props} onClick={()=> logOut()} ><MdLogout/> LogOut</button> : null }
    </>
  )
}

export default SingOut