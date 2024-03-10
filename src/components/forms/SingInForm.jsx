import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import Loading from '../common/Loading'



function SingInForm({ isLoading=false,submitForm }) {
    const { errors, register, registerError, cleanError, handleSubmitForm } = useForm()


    const handleOnBlurCorreo = (e) => {
        const valueInput = e.target.value.split(".")

        const dominioIsColombia = valueInput[valueInput.length - 1] === "co"
        if (!dominioIsColombia && e.target.value.includes("@")) {
            // si el dominio no es de colombia registramos el error
            registerError(e.target.name, "dominio")
        } else {
            cleanError(e.target.name, "dominio")
        }
    }


    const submitLogin = (e) => {
        e.preventDefault()

        // data del login del usuario
        const data = handleSubmitForm(e.target)
        if (submitForm) submitForm(data)


    }
    return (
        <>
            <form className='flex flex-col gap-3 w-full ' method='POST' onSubmit={submitLogin}>

                <h3 className='w-fit mx-auto text-xl border-b border-blue-600 font-semibold'>Iniciar Sesión</h3>
                <label htmlFor="username" className="block ">Correo</label>

                <input onBlur={handleOnBlurCorreo} {...register("correo")} required type="gmail" id="username" name="correo" className=" w-full border rounded  focus:outline-none focus:border-blue-500" />

                {errors.correo?.dominio ? <span className="text-sm text-red-400">"Solo se permite el dominio de colombia"</span> : null}



                <label htmlFor="password" className="block">Contraseña</label>


                <input id="password" type="password" required {...register("password")} name="password" className=' w-full border rounded   ' />



                <label htmlFor="remember" className=" ">
                    <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                    Recordarme
                </label>

                <a href="#crear-servicio-de-recuperacion" className="mx-auto w-fit ">La olvido?</a>

                <button disabled={isLoading} type="submit" className="p-1 bg-blue-500   text-white  rounded  w-full"> 
                {isLoading && <Loading className={"mx-1 "}/>}
                Iniciar Sesión</button>
            </form>

        </>
    )
}

export default SingInForm

