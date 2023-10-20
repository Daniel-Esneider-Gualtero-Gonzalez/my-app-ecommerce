import InfoUserCard from "./InfoUserCard"
import SingOut from "./buttons/singOut"
import NavItems from "./NavItems"
import  BtnLogin from "./buttons/BtnLogin"
function SideBarUserProfile({showBarSideUser}) {
  return (
    <>
    
    <div className='bg-gray-300 border border-black h-screen right-0  absolute top-0  ml-2  py-1 px-1 rounded w-[300px]'>
    <InfoUserCard showBarSideUser={showBarSideUser}/>

    {/* le paso unos stylos ya que el navbar los tiene de otra manera  */}
    <NavItems className={'navItemsProfile md:hidden'} />
    <SingOut/>
    <BtnLogin width={"w-full"}/>
    </div>
    </>
  )
}

export default SideBarUserProfile