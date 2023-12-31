import { NavLink } from "react-router-dom"
import { useContextAuth } from "../contexts/contextAuth"

function NavItems({className}) {

    const {user} = useContextAuth()
    return (
        <ul className={className ? className : 'flex w-fit  mx-auto '}>

            {/* PUBLIC NAV ITEMS */}
            <li>
                <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
                <NavLink  to={"/products"}>Products</NavLink>
            </li>
            <li>
                <NavLink to={"/aboutas"}>About as</NavLink>
            </li>

        </ul>

    )
}

export default NavItems
