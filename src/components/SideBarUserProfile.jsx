import InfoUserCard from "./InfoUserCard"
import SingOut from "./buttons/SingOut";
import NavItems from "./NavItems"
import SingInLink from "./buttons/SingInLink"
import { Link } from "react-router-dom"
import ConditionalLinkIsUser from "./ConditionalLinkIsUser";
function SideBarUserProfile({ showBarSideUser }) {
  return (
    <>

      <aside className='sideBarUserProfile p-2 h-screen right-0  z-50  fixed top-0 rounded w-[300px]'>
        <InfoUserCard showBarSideUser={showBarSideUser} />
        {/*  elementos dentro de la lista estaran solo visibles a partir */}
        <ol className="flex md:hidden flex-col ">
          <NavItems  classNameItemLink=" hover:bg-[#FAEBD7] hover:text-black w-full" />
          <SingInLink  className="hover:bg-[#FAEBD7] hover:text-black w-full"/>
        </ol>

        <ConditionalLinkIsUser >
          <Link className="border hover:bg-[#FAEBD7] hover:text-black  w-full " to={"/user/userprofile"}>Profile</Link>
        </ConditionalLinkIsUser>


        <SingOut className=" w-full gap-1  hover:bg-[#FAEBD7] hover:text-black" />
      </aside>
    </>
  )
}

export default SideBarUserProfile