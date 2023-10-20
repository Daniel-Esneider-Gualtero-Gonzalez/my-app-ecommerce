
import { useForm } from 'react-hook-form'

import { useContextAuth } from '../../contexts/contextAuth'
import { useAuthUser } from '../../hooks/useAuthUser'



function SingInForm() {
    const { user } = useContextAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loading, error, userToken, getAuthUser } = useAuthUser()



    const submitLogin = async (e) => {
        console.log(e)
        getAuthUser(e)

    }
    return (
        <div className=' w-full  '>
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form onSubmit={handleSubmit(submitLogin)}>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600">Username</label>
                    <input {...register("username",{required:true,maxLength:100})} type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    {errors.username && <span>campo requerido</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">Password</label>
                    <input {...register("password",{required:true,maxLength:50})}  type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    {errors.password && <span>campo requerido</span>}
                </div>

                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                    <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                </div>

                <div className="mb-6 text-blue-500">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                </div>

                <div className="mt-6 text-blue-500 text-center mb-10">
                    <a href="#" className="hover:underline">Sign up Here</a>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
            </form>
        </div>
    )
}

export default SingInForm

