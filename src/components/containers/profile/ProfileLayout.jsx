import { useContextAuth } from "../../../contexts/contextAuth"
import ExpandableSection from "../../ExpandableSection"
import UserBalance from "../../balance/UserBalance"
import SingOut from "../../buttons/SingOut"
import CardProfile from "./CardProfile"
import { Link } from "react-router-dom"

// icons card
import { MdSpaceDashboard } from "react-icons/md";
import { TbRecharging } from "react-icons/tb";


function ProfileLayout() {
  const { user } = useContextAuth()
  return (

    <>
      <section className=" border flex flex-col gap-1 p-1 rounded-lg md:w-[700px] md:mx-auto ">

        <article className=" flex justify-between items-center ">
          <div className=" ">
            {user && <h2 className="font-bold text-md">{user.names} {user.last_name} </h2>}
            
          </div>
          <img className="  rounded-full  w-28 h-28 border-gray-300  animationTop " src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg" alt="" />
        </article>




        <article className="text-xl grid grid-cols-2 md:grid-cols-3 gap-1 ">
          <Link >
            <CardProfile className="border w-full rounded flex place-content-center place-items-center bg-gray-200 h-[100px] ">
              <UserBalance />
            </CardProfile>
          </Link>

          <Link to={"/user/tablero"}>
            <CardProfile className="w-full rounded flex place-content-center place-items-center border bg-gray-200 h-[100px]">
              <span className="flex items-center gap-1"><MdSpaceDashboard/> Tablero</span>
            </CardProfile>
          </Link>

          <Link to={"/user/recharge/"}>
            <CardProfile className="w-full rounded flex place-content-center place-items-center border bg-gray-200 h-[100px] ">
              <span className="flex items-center gap-1"><TbRecharging /> Recargar saldo </span> 
            </CardProfile>
          </Link>


        </article>

        
        <div className="   gap-1 grid sm:grid-cols-2">
        <section className="flex flex-col gap-1">
          <ExpandableSection title="Informacion de cuenta">
            {user && <span>Correo: <span className="font-semibold">{user.correo}</span></span>}
            
          </ExpandableSection>

          <ExpandableSection title="¿Cuando te registraste ?">
            {user && <span className="font-semibold">{user.created_at}</span>}
            
          </ExpandableSection>

          <ExpandableSection title="Otra Informaciòn">
            <p>Si tienes dudas reclamos y otras inquietudes no dudes en escribirnos al correo: <span className="font-semibold">myecommerce@help.com</span></p>
          </ExpandableSection>

        </section>
            <SingOut  className="border rounded text-xl h-fit"/>
      
        </div>


       

      </section>



    </>








  )
}

export default ProfileLayout