import { useState } from "react"
import useForm from "../../hooks/useForm"

function RegisterForm({handleRegisterUser=Function}) {
    const { errors, register, registerError, cleanError, handleSubmitForm } = useForm()
    const [showPassword,setShowPassword] = useState(false)

    const handleOnBlurCorreo = (e) => {
        const valueInput = e.target.value.split(".")

        const dominioIsColombia = valueInput[valueInput.length - 1] === "co"
        if (!dominioIsColombia && e.target.value.includes("@")) {
            // si el dominio no es de colombia registramos el error
            registerError(e.target.name, "dominio")
        }else{
            cleanError(e.target.name, "dominio")
        }
    }


    const onSubmitRegister = (e)=>{
        e.preventDefault()
        // trae el objeto con los valores de los inputs que hayamos registrado
        const data = handleSubmitForm(e.target)

        // ejecutamos la funcion que crea el usuario que recibimos or prop 
        handleRegisterUser(data)

        console.log("data lista para enviar al server", data)
    }

    

    return (
        <div className='h-full w-full '>
            <form onSubmit={onSubmitRegister} method="POST" className=' py-2 px-3 '>
                <h1 className='w-fit mx-auto text-xl font-bold border-b-2 border-blue-500'>Registrate</h1>
                <span className='flex w-fit mt-1 mx-auto text-sm'>Es genial que te registres</span>

                <div className='mt-4 flex gap-10'>
                    <div className=''>
                        <label>First Name</label>
                        <div className='mt-2'>
                            <div className='mt-1 flex  items-center -gray-600'><div className='ml-1 absolute'>🧑</div> <input {...register("names")} required maxLength={10} name="names" className='w-full border border-black rounded h-[45px] px-8 focus:outline-none focus:border-blue-500' type="text" /> </div>
                        </div>
                    </div>

                    <div>
                        <label>Last Name</label>
                        <div className='mt-2'>
                            <div className='mt-1 flex  border-gray-300 items-center'><div className='ml-1 absolute'>🧑</div> <input {...register("lastname")} name="lastname" required maxLength={10} className='w-full border border-black rounded h-[45px] px-8 focus:outline-none focus:border-blue-500' type="text" /> </div>
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Correo</label>
                    <div>
                        <div className='flex items-center '><div className='ml-1 absolute'>📧</div>
                            <input onBlur={handleOnBlurCorreo} {...register("correo")} name="correo" className='px-8 w-full border rounded h-[45px] border-black focus:outline-none focus:border-blue-500' type="email" />
                        </div>
                        {errors.correo?.dominio ? <span className="text-sm text-red-400">"Solo se permite el dominio de colombia"</span>: null}
                    </div>
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Password</label>
                    <div>
                        <div className='flex items-center relative '><div className='ml-1 absolute'>🔒</div> <input id="password" {...register("password")} name="password" className='px-8 w-full border rounded h-[45px] border-black focus:outline-none focus:border-blue-500' type={showPassword ? "text" : "password"} /> <button onClick={()=>setShowPassword(!showPassword)} type="button" className="absolute right-1 border border-black">👁</button> </div>
                    </div>
                </div>

                {Object.keys(errors).length > 0 ? <span className="w-fit mx-auto flex mt-10">Por favor completar los campos</span> : <button className='mx-auto bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 hover:scale-105 flex mt-10 border w-[40%] items-center py-2 justify-center rounded'>Registrarse</button>}

            </form>
        </div>
    )
}

export default RegisterForm
