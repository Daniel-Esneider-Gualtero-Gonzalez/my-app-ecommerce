import React from 'react'

function Banner() {
    return (
        <header className=' border border-black  sm:flex px-4 py-12 justify-center'>
            <div className=''>
                <img className='object-cover rounded' src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY25vbG9naXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>

            <div className=' border py-2 px-8  border-green-600 ]'>
                <h1 className='font-semibold text-xl'>Welcome to the best trading website in the world</h1>
                <p className='border border-black mt-2 py-1 text-sm'>Muchas cosas para buscar y comprar</p>

                <button className='w-[100px] font-bold  border-black  py-2 px-2 flex justify-center items-center border   rounded mt-5'>Buy now</button>
            </div>
        </header>
    )
}

export default Banner