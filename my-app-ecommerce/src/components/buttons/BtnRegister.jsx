import { useNavigate } from "react-router-dom";
import { useContextAuth } from "../../contexts/contextAuth";

function BtnRegister({className}) {
    const {user} = useContextAuth()
    const navigate = useNavigate()
    // si la url actual es diferente de login se muestra el boton
    let urlActual = window.location.href.split("/");
    urlActual = urlActual[urlActual.length - 1].toLocaleLowerCase()
  return (
    <>
    {!user && urlActual !== "singup"? <button onClick={()=> navigate("/singup")} className='mt-1 h-[40px] bg-white text-black py-2 px-2 w-[100px] rounded flex justify-center items-center '>Register</button> : null }
    </>
  )
}

export default BtnRegister