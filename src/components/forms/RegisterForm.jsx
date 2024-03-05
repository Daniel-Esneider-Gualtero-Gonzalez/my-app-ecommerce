import Loading from '../common/Loading'
import useForm from "../../hooks/useForm"

function RegisterForm({ isLoading,submitForm = Function }) {
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


    const onSubmitRegister = (e) => {
        e.preventDefault()
        // trae el objeto con los valores de los inputs que hayamos registrado
        const data = handleSubmitForm(e.target)

        // ejecutamos el callback que recibimos por prop  pasandole la data
        submitForm(data)

    }



    return (

        <form onSubmit={onSubmitRegister} method="POST" className='w-full  flex flex-col gap-1'>
            <h1 className='w-fit mx-auto font-semibold mb-3 text-xl  border-b border-blue-600'>Registrate</h1>

            <div className='grid gap-1 sm:grid-cols-2'>
                <div className=' '>
                    <label>Primer nombre</label>
                    <input {...register("names")} required name="names" className='w-full border rounded ' type="text" />
                </div>

                <div>
                    <label>Segundo nombre</label>
                    <input {...register("lastname")} name="lastname" required maxLength={10} className='w-full border  rounded ' type="text" />
                </div>
            </div>

            <div className=''>
                <label htmlFor="">Correo</label>
                <input onBlur={handleOnBlurCorreo} {...register("correo")} required name="correo" className=' w-full border rounded' type="email" />

                {errors.correo?.dominio ? <span className="text-sm text-red-400">"Solo se permite el dominio de colombia"</span> : null}

            </div>

            <div className=''>
                <label htmlFor="">Password</label>
                <input id="password" {...register("password")} name="password" required className=' w-full border rounded ' type="password" />
            </div>

            {Object.keys(errors).length > 0 ? <span className="w-fit mx-auto flex mt-10">Por favor completar los campos</span>
             :
             <button className='w-full bg-blue-500 text-white   items-center  justify-center rounded'>
                {isLoading && <Loading className={"mx-2"} />}
                  Enviar</button>}

        </form>

    )
}

export default RegisterForm
