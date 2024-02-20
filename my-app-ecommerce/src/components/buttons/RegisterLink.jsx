import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContextAuth } from "../../contexts/contextAuth";

function RegisterLink({...props}) {
    const {user} = useContextAuth()
    const navigate = useNavigate()
    // si la url actual es diferente de login se muestra el boton
    let urlActual = window.location.href.split("/");
    urlActual = urlActual[urlActual.length - 1].toLocaleLowerCase()
  return (
    <>
    {!user && urlActual !== "singup"? <Link {...props} to={"singup"} >Register</Link> : null }
    </>
  )
}

export default RegisterLink