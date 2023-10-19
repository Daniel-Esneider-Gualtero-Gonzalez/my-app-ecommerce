import React from 'react'

function RegisterForm() {
    return (
        <div className='h-full w-full border border-black'>
            <form className=' border border-black py-2 px-3 '>
                <h1 className='w-fit mx-auto text-xl font-bold border-b-2 border-blue-500'>Registrate</h1>
                <span className='flex w-fit mt-1 mx-auto text-sm'>Es genial que te registres</span>

                <div className='mt-4 flex gap-10'>
                    <div className=''>
                        <label>First Name</label>
                        <div className='mt-2'>
                            <div className='mt-1 flex  items-center -gray-600'><div className='ml-1 absolute'>🧑‍✈️</div> <input className='w-full border rounded h-[45px] px-10' type="text" /> </div>
                        </div>
                    </div>

                    <div>
                        <label>Last Name</label>
                        <div className='mt-2'>
                            <div className='mt-1 flex  border-gray-300 items-center'><div className='ml-1 absolute'>🧑‍✈️</div> <input className='w-full border rounded h-[45px] px-10' type="text" /> </div>
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Email</label>
                    <div>
                        <div className='flex items-center '><div className='ml-1 absolute'>📧</div> <input className='px-8 w-full border rounded h-[45px] border-black' type="email" /></div>
                    </div>
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Password</label>
                    <div>
                    <div className='flex items-center '><div className='ml-1 absolute'>🔒</div> <input className='px-8 w-full border rounded h-[45px] border-black' type="email" /></div>
                    </div>
                </div>

                <button className='mx-auto bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 hover:scale-105 flex mt-10 border w-[50%] items-center py-2 justify-center rounded'>Registrarse</button>

            </form>
        </div>
    )
}

export default RegisterForm
