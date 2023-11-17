
import { Route,Outlet } from "react-router-dom"

function PublicRutes({children}) {
    // rutas publicas
  return (
    <>
    <Outlet />
    </>
  )
}

export default PublicRutes