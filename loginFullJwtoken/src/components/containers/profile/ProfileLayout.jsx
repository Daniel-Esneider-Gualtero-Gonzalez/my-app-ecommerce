import ExpandableSection from "../../ExpandableSection"
import SideBar from "../../SideBar"
import CardProfile from "./CardProfile"


function ProfileLayout() {
  return (
    

     
    <>

          <div className=" mt-3 sm:mt-8  sm:flex justify-center">
            <img className=" mx-auto  sm:mx-none border-black h-[200px]  animationTop " src="https://api.multiavatar.com/Binx.png" alt="" />

            <div className="animationRight  mt-2   text-2xl    border border-blue-600">
              <span className="font-bold">Daniel Esneider Gualtero Gonzalez</span>
              <div className="text-sm">Programmin</div>
            </div>

            <button className="border mt-2 sm:my-auto  py-2 px-2 flex justify-center items-center h-[40px] rounded border-blue-600 bg-transition hover:bg-blue-600 hover:text-white  w-fit mx-auto">Editar Perfil</button>

          </div>







        <div className="  flex flex-wrap mt-10  justify-center   ">
          <CardProfile titleCard="Saldo" iconCard="💰" backgraund="bg-green-300 text-black" />
          <CardProfile titleCard="Historial" iconCard="📑" backgraund="bg-yellow-400" />
          <CardProfile titleCard="Recargar saldo" iconCard="💸" backgraund="bg-green-800 text-white" />
        </div>





        <ExpandableSection title="Account Information">
          <li>Email adres: <span className="font-bold">Daniel@gmail.com</span></li>
          <li>Telefono: <span className="font-bold">315-705-76-63</span></li>
        </ExpandableSection>

        <ExpandableSection title="other Information">
          <li>Email adres: <span className="font-bold">Daniel@gmail.com</span></li>
          <li>Telefono: <span className="font-bold">315-705-76-63</span></li>
        </ExpandableSection>



     </>








  )
}

export default ProfileLayout