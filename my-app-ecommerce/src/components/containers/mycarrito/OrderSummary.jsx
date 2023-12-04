import React from 'react'

function OrderSummary() {
  return (
    <div className=' bg-gray-200 rounded p-4 h-fit '>
      <h1 className='font-semibold text-xl mb-4 '>Order Summary</h1>
      <div className='flex justify-between'>
        <h3>Subtotal</h3>
        <span className='font-semibold'>$25</span>
      </div>
      <div className='flex justify-between border-t border-black'>
        <h3>Shipping estimate</h3>
        <span className='font-semibold'>$25</span>
      </div>
      <div className='flex justify-between border-t border-black'>
        <h3>Iva</h3>
        <span className='font-semibold'>$2</span>
      </div>
      <div className='flex justify-between border-t border-black'>
        <h1 className='text-xl font-bold mt-2'>Order total</h1>
        <span className='font-bold mt-2 text-xl'>$25</span>
      </div>

      <button className='rounded bg-blue-600 mt-7 text-white hover:scale-105 hover:bg-green-600 transition-all w-full mx-auto flex justify-center items-center h-[40px]'>Checkout</button>

    </div>
  )
}

export default OrderSummary