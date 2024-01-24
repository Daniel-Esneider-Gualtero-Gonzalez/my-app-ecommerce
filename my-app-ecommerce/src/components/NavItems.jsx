import { NavLink } from "react-router-dom"
import { useContextAuth } from "../contexts/contextAuth"

function NavItems() {

    const { user } = useContextAuth()
    return (

        <>
            {/* PUBLIC NAV ITEMS */}
            <li>
                <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
                <NavLink to={"/aboutas"}>About as</NavLink>
            </li>

        </>


    )
}

export default NavItems
