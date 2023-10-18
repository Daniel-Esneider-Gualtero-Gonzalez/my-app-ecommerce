import { NavLink } from "react-router-dom"

NavLink

function NavBar() {
    return (
       <nav className="border border-black py-2 px-2 flex justify-">
           {/* <div className='mx-auto border border-gray-400 w-fit py-2'>
               <NavLink className='mx-2'>Home</NavLink>
               <NavLink className='mx-2'>Productos</NavLink>
               <NavLink className='mx-2'>Servicios</NavLink>
               <NavLink className='mx-2'>About as</NavLink>
           </div> */}

           <button>Actiivar menu</button>

           
           

       </nav>
    )
}

export default NavBar
