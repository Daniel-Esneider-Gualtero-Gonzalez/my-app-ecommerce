

import useForm from '../../hooks/useForm'
import { useContextAuth } from '../../contexts/contextAuth'
import { useAuthUser } from '../../hooks/useAuthUser'
import { useState } from 'react'
import AlertMessage from '../AlertMessage'
import { Link } from 'react-router-dom'


function SingInForm() {
    const { errors, register, registerError, cleanError, handleSubmitForm } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const { user } = useContextAuth()
    const { loading, error, userToken, getAuthUser } = useAuthUser()


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
        getAuthUser(data)


    }
    return (
        <>


            { error ? <AlertMessage error={true} textMessage={`Correo o password incorrectos`} /> : null}


            <div className=' w-full '>
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form method='POST' onSubmit={submitLogin}>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Correo</label>
                        <div className='flex items-center '><div className='ml-1 absolute'>📧</div>
                            <input onBlur={handleOnBlurCorreo} {...register("correo")} required type="gmail" id="username" name="correo" className="px-8 w-full border rounded h-[45px] border-black focus:outline-none focus:border-blue-500" />
                        </div>
                        {errors.correo?.dominio ? <span className="text-sm text-red-400">"Solo se permite el dominio de colombia"</span> : null}

                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <div className='flex items-center relative '><div className='ml-1 absolute'>🔒</div> <input id="password" required {...register("password")} name="password" className='px-8 w-full border rounded h-[45px] border-black focus:outline-none focus:border-blue-500' type={showPassword ? "text" : "password"} /> <button onClick={() => setShowPassword(!showPassword)} type="button" className="absolute right-1 border border-black">👁</button> </div>

                    </div>

                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                        <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                    </div>

                    <div className="mb-6 text-blue-500">
                        <a href="#" className="hover:underline">Forgot Password?</a>
                    </div>

                    <div className="mt-6 text-blue-500 text-center mb-10">
                        
                        <Link className="hover:underline border-b border-black hover:border-none" to={"/register"}>Sign up Here</Link>
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
            </div>
        </>
    )
}

export default SingInForm

