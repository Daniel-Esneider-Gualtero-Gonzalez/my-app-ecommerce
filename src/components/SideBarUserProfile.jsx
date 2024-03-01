import InfoUserCard from "./InfoUserCard"
import SingOut from "./buttons/SingOut";
import NavItems from "./NavItems"
import SingInLink from "./buttons/SingInLink"
import { Link } from "react-router-dom"
function SideBarUserProfile({ showBarSideUser }) {
  return (
    <>

      <aside className='bg-blue-600 p-2 h-screen right-0  z-50  absolute top-0 rounded w-[300px]'>
        <InfoUserCard showBarSideUser={showBarSideUser} />
        {/*  elementos dentro de la lista estaran solo visibles a partir */}
        <ol className="flex md:hidden flex-col ">
          <NavItems />
          <SingInLink />
        </ol>

        <ol>
          <Link className="border  w-full " to={"/user/userprofile"}>Profile</Link>
        </ol>


        <SingOut className=" rounded w-full gap-1 " />
      </aside>
    </>
  )
}

export default SideBarUserProfile