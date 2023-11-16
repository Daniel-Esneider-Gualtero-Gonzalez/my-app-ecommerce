
import { Route,Outlet } from "react-router-dom"

function PublicRutes({children}) {
    // rutas publicas
  return (
    <>
    
    {/* devuleve las ruta hijas que esten envolvidas */}
    <Outlet />
    </>
  )
}

export default PublicRutes