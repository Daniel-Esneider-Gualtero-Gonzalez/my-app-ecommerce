import { useContextAuth } from "../contexts/contextAuth"
import {  Outlet,Navigate } from "react-router-dom"

function PrivateRutes() {

    // validaciones para evitar que acceden a estas rutas de acuerdo a requisitos
    const {user} = useContextAuth()
    
    if(!user){
        return <Navigate to={"/login"}/>
    }

  return (
    <>
    {/* devuleve las ruta hijas que esten envolvidas */}
    <Outlet />
    </>
  )
}

export default PrivateRutes