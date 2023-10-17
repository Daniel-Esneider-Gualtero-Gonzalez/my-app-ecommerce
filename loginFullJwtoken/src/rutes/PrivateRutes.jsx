import { useContextAuth } from "../contexts/contextAuth"
import {  Outlet,useNavigate } from "react-router-dom"

function PrivateRutes() {

    // validaciones para evitar que acceden a estas rutas de acuerdo a requisitos
    const {user} = useContextAuth()
    const navigate = useNavigate()
    
    if(!user){
        navigate("/login")
    }

  return (
    <>
    <Outlet />
    </>
  )
}

export default PrivateRutes