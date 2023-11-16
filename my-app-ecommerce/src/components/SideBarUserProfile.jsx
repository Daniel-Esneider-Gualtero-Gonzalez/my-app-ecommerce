import InfoUserCard from "./InfoUserCard"
import SingOut from "./buttons/singOut"
import NavItems from "./NavItems"
import  BtnLogin from "./buttons/BtnLogin"
import { Link } from "react-router-dom"
function SideBarUserProfile({showBarSideUser}) {
  return (
    <>
    
    <div className='bg-gray-300 border border-black h-screen right-0  z-50  absolute top-0  ml-2  py-1 px-1 rounded w-[300px]'>
    <InfoUserCard showBarSideUser={showBarSideUser}/>
    <li className="border border-black py-2"><Link to={"/userprofile"}>Your Profile</Link></li>

    {/* le paso unos stylos ya que el navbar los tiene de otra manera  */}
    <NavItems className={'navItemsProfile md:hidden'} />
    <SingOut/>

    <BtnLogin width={"w-full"}/>
    </div>
    </>
  )
}

export default SideBarUserProfile