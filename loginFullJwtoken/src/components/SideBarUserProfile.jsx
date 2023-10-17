import InfoUserCard from "./InfoUserCard"
import SingOut from "./buttons/singOut"
function SideBarUserProfile() {
  return (
    <>
    
    <div className='border border-black h-screen right-0  absolute top-0  ml-2  py-1 px-1 rounded w-[300px]'>
    <InfoUserCard />
    <SingOut/>
    </div>
    </>
  )
}

export default SideBarUserProfile