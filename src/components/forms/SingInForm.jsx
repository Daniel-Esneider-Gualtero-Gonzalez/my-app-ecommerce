import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'



function SingInForm({ submitForm }) {
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


            <form className='flex flex-col gap-2 w-full ' method='POST' onSubmit={submitLogin}>

                <h3 className='w-fit mx-auto font-semibold'>Iniciar Sesión</h3>
                <label htmlFor="username" className="block text-gray-600">Correo</label>

                <input onBlur={handleOnBlurCorreo} {...register("correo")} required type="gmail" id="username" name="correo" className=" w-full border rounded  focus:outline-none focus:border-blue-500" />

                {errors.correo?.dominio ? <span className="text-sm text-red-400">"Solo se permite el dominio de colombia"</span> : null}



                <label htmlFor="password" className="block text-gray-600">Contraseña</label>


                <input id="password" type="password" required {...register("password")} name="password" className=' w-full border rounded  focus:outline-none focus:border-blue-500' />



                <label htmlFor="remember" className="text-gray-600 ">
                    <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                    Recordarme
                </label>

                <a href="#crear-servicio-de-recuperacion" className="mx-auto w-fit border-b">La olvido?</a>

                <Link className="mx-auto w-fit flex  border-b  " to="/singup">Registrarse?</Link>

                <button type="submit" className="bg-blue-500 dark:bg-secondary dark:text-black hover:bg-blue-600 text-white  rounded  w-full">Login</button>
            </form>

        </>
    )
}

export default SingInForm

