import InfoUserCard from "./InfoUserCard"
import SingOut from "./buttons/SingOut";
import NavItems from "./NavItems"
import SingInLink from "./buttons/SingInLink"
import { Link } from "react-router-dom"
function SideBarUserProfile({ showBarSideUser }) {
  return (
    <>

      <aside className='sideBarUserProfile p-2 h-screen right-0  z-50  fixed top-0 rounded w-[300px]'>
        <InfoUserCard showBarSideUser={showBarSideUser} />
        {/*  elementos dentro de la lista estaran solo visibles a partir */}
        <ol className="flex md:hidden flex-col ">
          <NavItems />
          <SingInLink />
        </ol>

        <ol>
          <Link className="border  w-full " to={"/user/userprofile"}>Profile</Link>
        </ol>


        <SingOut className="  w-full gap-1 " />
      </aside>
    </>
  )
}

export default SideBarUserProfile