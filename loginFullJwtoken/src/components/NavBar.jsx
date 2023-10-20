import SideBarUserProfile from "./SideBarUserProfile"
import NavItems from "./NavItems"
import BtnLogin from "./buttons/BtnLogin"
import { useState } from "react"
import BtnRegister from "./buttons/BtnRegister"

function NavBar() {
    const [showsBarUser,setShowBarUser] = useState(false)
    return (
       <nav className="border border-black py-2 px-4 flex justify-between sm:grid sm:grid-cols-3 sm:gap-1">
          

            <div className='border border-black'>
                <img className='w-[80px] h-full ' src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg" alt="" />
            </div>
           

            <div className=' py-5 border border-black  hidden md:block'>
                <NavItems />
           </div>

            
            <div className='border  flex justify-end items-center h-full   '>
                
                <BtnLogin />
                <BtnRegister />
                <button className='w-[100px] rounded h-[40px] mx-1 text-2xl border' onClick={()=>setShowBarUser(true)}>🤴</button>
                {showsBarUser ? <SideBarUserProfile showBarSideUser={setShowBarUser} />  : null}
            </div>


           

           
           
           

       </nav>
    )
}

export default NavBar
