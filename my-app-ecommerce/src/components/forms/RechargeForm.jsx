import React from 'react'
import Input from '../Input'
import useForm from '../../hooks/useForm'
function RechargeForm() {

    const { errors, register, registerError, cleanError, handleSubmitForm } = useForm()

    const onSubmitRecharge = (e)=>{
    e.preventDefault()
    const dataToRecharge = handleSubmitForm(e.target)
    console.log("data to send recharge",dataToRecharge)
        

    }

    return (
        <form onSubmit={onSubmitRecharge} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
                <label htmlFor="full_name">Full Name</label>
                <Input required {...register("full_name")} name="full_name"   className=" w-full h-10 mt-1" type="text" />

            </div>

            <div className="md:col-span-5">
                <label htmlFor="">Cuenta a recargar</label>
                <Input {...register("acount_Recharge")} name="acount_Recharge" className="w-full h-10 mt-1" required type="number" />

            </div>

            <div className="md:col-span-3">
                <label htmlFor="address">Password Cuenta</label>
                <Input {...register("password_acount")} name="password_acount" className="h-10 border mt-1 rounded  w-full bg-gray-50" />

            </div>

            <div className="md:col-span-2">
                <label htmlFor="city">Saldo</label>
                <Input {...register("amount_recharge")} name="amount_recharge" className="h-10 border mt-1 rounded  w-full bg-gray-50" />

            </div>

            <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
            </div>

        </form>
    )
}

export default RechargeForm