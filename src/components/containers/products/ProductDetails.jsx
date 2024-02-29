import React from 'react'

function ProductDetails() {
    return (
        <article className=' grid gap-2 grid-cols-2  bg-gradient-to-b from-transparent via-transparent to-blue-100'>
            

            <div className=' '>
                <img className='object-cover   ' src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-01.png" alt="" />
            </div>

            <div className='border p-1 rounded flex flex-col gap-1'>
            <h1 className=' '>Libero X250</h1>
                <h2 className=''>250 Watt Electric Scooter</h2>
                <span>$7500</span>
                
                {/* more images */}
                <div className=' w-fit grid grid-cols-3'>
                    <div className='w-[80px]  bg-blue-600 h-[100px] rounded'></div>
                    <div className='w-[80px]  bg-violet-600 h-[100px] rounded'></div>
                    <div className='w-[80px] mx-1 bg-yellow-400 h-[100px] rounded'></div>
                </div>
                <button className=' bg-ble-600 rounded border  bg-blue-600 text-white font-semibold'>ADD TO CART</button>

                <h2 className='font-bold '>Description</h2>
                <p className='max-w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni impedit ab. Quisquam corrupti dolor itaque officia nisi, numquam suscipit, ipsa accusamus labore, ea et aliquid debitis fuga veritatis culpa.</p>
            </div>

        </article>
    )
}

export default ProductDetails