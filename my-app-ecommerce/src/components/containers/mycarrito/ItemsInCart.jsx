import React from 'react'

function ItemsInCart() {
  return (
    <>
      <div className='border h-fit my-1 rounded hover:ml-3 hover:border-blue-500 transition-all   border-black p-3 '>

        <div className='flex gap-2'>
          <img className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] rounded' src="https://img.freepik.com/foto-gratis/productos-belleza-surtido-destinatarios-sobre-piedras-grises_23-2148761390.jpg?size=626&ext=jpg" alt="" />

          <div className=''>
            <h1 className=''>Name product</h1>
            <span className='font-semibold'>$25</span>

            <div className='mt-8'>
              <select className='border rounded w-[60px]' name="" id="">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
          </div>
          <button className='text-2xl mt-0 border w-[40px] rounded ml-4 h-fit  hover:bg-red-600 hover:text-white'>X</button>
        </div>
      </div>

      {/*s  */}

      <div className='border h-fit rounded hover:ml-3 hover:border-blue-500 transition-all   border-black p-3 '>

        <div className='flex gap-2'>
          <img className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] rounded' src="https://img.freepik.com/foto-gratis/productos-belleza-surtido-destinatarios-sobre-piedras-grises_23-2148761390.jpg?size=626&ext=jpg" alt="" />

          <div className=''>
            <h1 className=''>Name product</h1>
            <span className='font-semibold'>$25</span>

            <div className='mt-8'>
              <select className='border rounded w-[60px]' name="" id="">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
          </div>
          <button className='text-2xl mt-0 border w-[40px] rounded ml-4 h-fit  hover:bg-red-600 hover:text-white'>X</button>
        </div>
      </div>

      



    </>
  )
}

export default ItemsInCart