import { NavLink } from "react-router-dom"

function NavItems() {
    return (
        <ul className=' flex'>
            <li>
                <NavLink to={"/"} className='mx-2 relative '>Home</NavLink>
            </li>
            <li>
                <NavLink className='mx-2'>Productos</NavLink>
            </li>
            <li>
                <NavLink className='mx-2'>Servicios</NavLink>
            </li>
            <li>
                <NavLink className='mx-2'>About as</NavLink>
            </li>
        </ul>

    )
}

export default NavItems
