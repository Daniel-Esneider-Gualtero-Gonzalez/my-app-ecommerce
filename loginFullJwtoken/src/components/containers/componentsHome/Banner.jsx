import React from 'react'

function Banner() {
    return (
        <header className='bg-gradient-to-r from-orange-300 via-green-500 to-yellow-500" border border-black  sm:flex px-4 py-12 justify-center'>
            <div className=''>
                <img className='object-cover rounded' src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

            <div className=' border py-2 px-8  border-green-600 ]'>
                <h1 className='font-semibold text-xl'>Welcome to the best trading website in the world</h1>
                <p className='border border-black mt-2 py-1 text-sm'>Muchas cosas para buscar y comprar</p>

                <button className='w-[100px] font-bold  py-2 px-2 flex justify-center items-center border border-white  rounded mt-5'>Buy now</button>
            </div>
        </header>
    )
}

export default Banner