import { CiImageOn } from "react-icons/ci";

function ProductDetailsSkeleton() {
    return (
        <article className='h-screen animate-pulse duration-1000 grid gap-2  sm:grid-cols-2 '>


            <div className=' rounded text-gray-400  flex place-content-center '>
             <CiImageOn  className="text-[400px] w-fit"/>
            </div>

            <div className=' p-1 rounded flex flex-col gap-6'>
                <h2 className=' w-[70%] h-4 rounded border font-semibold bg-gray-300'></h2>
                <span className='w-10 h-3 font-bold bg-gray-300 rounded'></span>
                <h2 className='w-[30%] h-3 bg-gray-300 rounded   '></h2>
                <p className='max-w-[85%] flex flex-col gap-1 '>
                    <span className='w-[90%] h-2 bg-gray-300 rounded flex'></span>
                    <span className='w-[85%] h-2 bg-gray-300 rounded flex' ></span>
                    <span className='w-[90%] h-2 bg-gray-300 rounded flex' ></span>
                    <span className='w-[85%] h-2 bg-gray-300 rounded flex' ></span>
                    <span className='w-[75%] h-2 bg-gray-300 rounded flex' ></span> 
                    <span className='w-[65%] h-2 bg-gray-300 rounded flex' ></span> 

                </p>
                <button className='w-40 h-8 bg-gray-300 rounded  '></button>
            </div>


        </article>
    )
}

export default ProductDetailsSkeleton