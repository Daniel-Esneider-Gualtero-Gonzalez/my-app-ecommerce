import React from 'react'

function ProductDetails() {
    return (
        <div className='w-screen h-screen flex justify-between my-5 bg-gradient-to-b from-transparent via-transparent to-blue-100'>
            <div className='border px-2 '>
                <h1 className='text-6xl '>Libero X250</h1>
                <h2 className='text-xl'>250 Watt Electric Scooter</h2>
                <h3 className='font-bold'>Informations:</h3>

                <div className='flex'>
                    <div className='w-[50px] h-[80px] mx-1 rounded bg-gray-400'></div>
                    <div className='w-[50px] h-[80px] mx-1 rounded bg-gray-400'></div>
                    <div className='w-[50px] h-[80px] rounded bg-gray-400'></div>
                </div>

                <div className='w-fit mx-auto mt-5'>
                    <span>$7500</span>
                    <button className='transition-all hover:ml-4 hover:shadow-md hover:scale-105 bg-ble-600 rounded border p-2 bg-blue-600 text-white font-semibold'>ADD TO CART</button>
                </div>
            </div>

            <div>
                <img className='object-cover w-full ' src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-01.png" alt="" />
            </div>

            <div className=''>
                more images
                <div className='flex'>
                    <div className='w-[80px] mx-1 bg-blue-600 h-[100px] rounded'></div>
                    <div className='w-[80px] mx-1 bg-violet-600 h-[100px] rounded'></div>
                    <div className='w-[80px] mx-1 bg-yellow-400 h-[100px] rounded'></div>
                </div>

                <h2 className='font-bold mt-5'>Description</h2>
                <p className='max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni impedit ab. Quisquam corrupti dolor itaque officia nisi, numquam suscipit, ipsa accusamus labore, ea et aliquid debitis fuga veritatis culpa.</p>
            </div>

        </div>
    )
}

export default ProductDetails