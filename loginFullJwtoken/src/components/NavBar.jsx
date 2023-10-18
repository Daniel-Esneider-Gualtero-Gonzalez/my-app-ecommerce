import SideBarUserProfile from "./SideBarUserProfile"
import NavItems from "./NavItems"
import { useState } from "react"

function NavBar() {
    const [showsBarUser,setShowBarUser] = useState(false)
    return (
       <nav className="border border-black py-2 px-4 flex justify-between">
          

            <div className='border border-black'>
                <img className='w-[80px] h-full ' src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg" alt="" />
            </div>
           

            <div className='mx-auto flex py-5 border border-gray-400 w-fit  hidden md:block'>
                <NavItems />
           </div>

            
            <div className='border w-[60px]'>
                
                <button className='w-full h-full border' onClick={()=>setShowBarUser(true)}>🥅</button>
                {showsBarUser ? <SideBarUserProfile showBarSideUser={setShowBarUser} />  : null}
            </div>


           

           
           
           

       </nav>
    )
}

export default NavBar
