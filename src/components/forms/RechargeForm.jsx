
import Input from '../Input'
import useForm from '../../hooks/useForm'

function RechargeForm({ submitForm, ...props }) {

    const { errors, register, registerError, cleanError, handleSubmitForm } = useForm()


    const onSubmitRecharge = (e) => {
        e.preventDefault()
        const dataToRecharge = handleSubmitForm(e.target)

        // hay que cambiarles el typo ya que el input asi sea number lo pone como texto y el baken los espera en number
        // cuando se hace el strinjyfy y se envian ,d espues se parsean y seguia siendo texto, entonces toca cambiarlo
        dataToRecharge.amount = 100000
        console.log("data to send recharge", dataToRecharge)
        if (!submitForm) return
        submitForm(dataToRecharge)


    }

    return (
        <form onSubmit={onSubmitRecharge} className=" w-full flex flex-col gap-1 ">

            <label htmlFor="full_name">Full Name</label>
            <Input required {...register("full_name")} name="full_name" className=" w-full " type="text" />


            <label htmlFor="">Cuenta a recargar</label>
            <Input {...register("acount_Recharge")} name="acount_Recharge" className="w-full  " required type="number" />


            <label htmlFor="address">Password Cuenta</label>
            <Input {...register("password_acount")} name="password_acount" className=" border  rounded  w-full bg-gray-50" />

            <div className="md:col-span-2">
                <label htmlFor="city">Saldo</label>
                <Input type='number' {...register("amount")} name="amount" className=" border rounded  w-full bg-gray-50" />

            </div>

            <button type='submit' className="border rounded">Submit</button>



        </form>
    )
}

export default RechargeForm