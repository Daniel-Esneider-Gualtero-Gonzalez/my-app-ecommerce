import InfoUserCard from "./InfoUserCard"
import SingOut from "./buttons/singOut"
function SideBarUserProfile({showBarSideUser}) {
  return (
    <>
    
    <div className='bg-gray-300 border border-black h-screen right-0  absolute top-0  ml-2  py-1 px-1 rounded w-[300px]'>
    <InfoUserCard showBarSideUser={showBarSideUser}/>
    <SingOut/>
    </div>
    </>
  )
}

export default SideBarUserProfile