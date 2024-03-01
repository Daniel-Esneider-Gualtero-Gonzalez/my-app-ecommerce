import { useContextAuth } from "../../../contexts/contextAuth"
import ExpandableSection from "../../ExpandableSection"
import UserBalance from "../../balance/UserBalance"
import SideBar from "../../SideBar"
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
            <h3 className="font-bold">Daniel Esneider Gualtero Gonzalez</h3>
            <div className="text-sm dark:text-secondary text-blue-600">Programmin</div>
            
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
            <li>Email adres: <span className="font-bold">Daniel@gmail.com</span></li>
            <li>Telefono: <span className="font-bold">315-705-76-63</span></li>
          </ExpandableSection>

          <ExpandableSection title="¿Aquì puede ir una pregunta ?">
            <li>Email adres: <span className="font-bold">Daniel@gmail.com</span></li>
            <li>Telefono: <span className="font-bold">315-705-76-63</span></li>
          </ExpandableSection>

          <ExpandableSection title="Otra Informaciòn">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dolore, quas ducimus, eaque ea, corrupti distinctio odio unde tempore perferendis nulla beatae incidunt eos debitis? Blanditiis illum natus impedit tempore.</p>
          </ExpandableSection>

        </section>

          <article className="border h-fit rounded" >
            hola
          </article>

       
        </div>


       

      </section>



    </>








  )
}

export default ProfileLayout