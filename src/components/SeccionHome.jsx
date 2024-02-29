import React from 'react'

function SeccionHome() {
  return (
    <div className='block bg-blue-400 rounded-bl-[200px] shadow-2xl rounded-br-[40px]   py-4 border border-black sm:flex  sm:py-20 sm:justify-center'>

      <div className='max-w-[300px] mx-4 '>
        <h1 className='ml-4 font-bold'>Build your next project whith react and typescript</h1>
        <p className='px-4 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea, quo dolorem molestiae est necessitatibus eveniet voluptatem possimus dicta, pariatur, eaque perferendis sit voluptates dolor blanditiis inventore sed quas expedita.</p>
        
        <div className='ml-4 flex justify-between mt-2'>
          <button className='py-2 px-2 flex justify-center items-center border rounded font-semibold'>View Pages</button>
          <button className='py-2 px-2 flex justify-center items-center border rounded font-semibold'>Documentation</button>
        </div>
      </div>

      <div className=' flex justify-center '>
        <img className='w-[300px] rounded' src="https://images.unsplash.com/photo-1695010834080-e082892f829a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>

    </div>
  )
}

export default SeccionHome