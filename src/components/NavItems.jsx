import { NavLink } from "react-router-dom"
import { useContextAuth } from "../contexts/contextAuth"


const navItemsPath = {
    Home: "/",
    Products: "/products",
    Aboutas : "/aboutas"
    
}
function NavItems({classNameItemLink=""}) {

    const { user } = useContextAuth()
    
    return (

        <>
            {navItemsPath && Object.entries(navItemsPath).map(navItem=>{
                const [name,path] = navItem
                return <NavLink className={classNameItemLink} key={name} to={path}>{name}</NavLink>
            })}

        </>


    )
}

export default NavItems
