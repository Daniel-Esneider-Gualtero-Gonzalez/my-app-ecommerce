import {useForm} from 'react-hook-form'

import { useAuthUser } from '../hooks/useAuthUser'
import { useState } from 'react'

import { useContextAuth } from '../contexts/contextAuth'



function SingIn() {

  const {user} = useContextAuth()
  const {register,handleSubmit,formState:{errors}} = useForm()

  const {loading,error,userToken,getAuthUser} = useAuthUser()

  
  
  
  const submitLogin = async (e)=>{
    console.log(e)
     getAuthUser(e)
    
  }
  return (
    <div className='w-screen h-screen border bg-green-100 border-black'>
      
      {user ? <span>{JSON.stringify(user)}</span> : null}


      {loading ? <span>VALIDANTO EL USUARIO</span> : null}
      
 
      
      
      {error && <span className='text-2xl'>{error.message}</span>}
      <form onSubmit={(handleSubmit(submitLogin))} className="mt-[15%] mx-auto   w-[400px]">
        <label className=" block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
        <input {...register("username",{required:true,maxLength:100})}  type="text" className="py-2 px-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        {errors.username && <span>campo requerido</span>}
        </div>

        <label className=" mt-2 block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
        <input {...register("password",{required:true,maxLength:50})}  type="text" className="py-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        {errors.password && <span>campo requerido</span>}
        </div>

        <button className="hover:bg-green-400 hover:scale-105 hover:border-none hover:text-white border font-semibold mx-auto  flex py-2 px-2 w-[200px] justify-center items-center rounded mt-10">Sing In</button>
        </form>

    </div>
  )
}

export default SingIn


{/* <form onSubmit={(handleSubmit(submitLogin))} className="mt-[10%] mx-auto   w-[400px]">
        <label className=" block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
        <input {...register("username",{required:true,maxLength:100})}  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        {errors.username && <span>campo requerido</span>}
        </div>

        <label className=" mt-2 block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
        <input {...register("password",{required:true,maxLength:50})}  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        {errors.password && <span>campo requerido</span>}
        </div>

        <button className="hover:bg-green-400 hover:scale-105 hover:border-none hover:text-white border font-semibold mx-auto  flex py-2 px-2 w-[200px] justify-center items-center rounded mt-10">Sing In</button>
        </form> */}