import { useNavigate } from "react-router-dom"
import { useContextAuth } from "../../contexts/contextAuth"


function BtnLogin({width = "w-100px"}) {
    const {user} = useContextAuth()
    const navigate = useNavigate()
    // si la url actual es diferente de login se muestra el boton
    let urlActual = window.location.href.split("/");
    urlActual = urlActual[urlActual.length - 1].toLocaleLowerCase()
    
  return (
    <>
    {!user && urlActual !== "login" ? <button onClick={()=> navigate("/login")} className={`mt-1 ${width}   h-[40px] bg-white text-black w-full  lg:block rounded   justify-center items-center `}>Login</button> : null }
    </>
  )
}

export default BtnLogin