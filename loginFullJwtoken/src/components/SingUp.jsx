import React from 'react'

function SingUp() {
  return (
    <div className='w-screen h-screen border bg-green-100 border-black'>
        <form className="mx-auto mt-[10%]  w-[400px]">

        <label className=" block text-sm font-medium leading-6 text-gray-900">Names</label>
        <div className="mt-2">
        <input  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <label className=" mt-2 block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
        <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <label className="mt-2 block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
        <input  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className='border border-black flex justify-center'>
            <div className='mx-2 border'>
                <label className="text-center mt-2 block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="mt-2">
                <input  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div className='mx-2 border'>
                <label className="text-center mt-2 block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                <div className="mt-2">
                <input  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </div>

        <button className="hover:bg-green-400 hover:scale-105 hover:border-none hover:text-white border font-semibold mx-auto  flex py-2 px-2 w-[200px] justify-center items-center rounded mt-10">Sing Up</button>
        </form>
    </div>
  )
}

export default SingUp