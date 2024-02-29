import { NavLink } from "react-router-dom"
import { useContextAuth } from "../contexts/contextAuth"


const navItemsPath = {
    Home: "/",
    Products: "/products",
    Aboutas : "/aboutas"
    
}
function NavItems() {

    const { user } = useContextAuth()
    return (

        <>
            {navItemsPath && Object.entries(navItemsPath).map(navItem=>{
                const [name,path] = navItem
                return <NavLink className={"border-b border-white"} key={name} to={path}>{name}</NavLink>
            })}

        </>


    )
}

export default NavItems
