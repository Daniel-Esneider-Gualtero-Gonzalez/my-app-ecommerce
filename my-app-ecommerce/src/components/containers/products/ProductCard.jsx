import { FaCartShopping } from "react-icons/fa6";

function ProductCard() {
    return (
        <>
            <div className="mx-2 max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                <div>
                    <div className="my-6 flex items-center justify-between px-4">
                        <h2 className="font-bold text-gray-500">Audifonos</h2>
                        <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
                    </div>

                    <div className="my-4  items-center justify-between px-4">

                        <h3 className="text-sm font-semibold text-gray-500 ">Description</h3>
                        <p className="  px-2 py-0.5 text-xs font-semibold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium sed odio itaque quia delectus sequi! Magnam officiis tempore tenetur dolore est saepe. Porro, in doloribus. Aperiam hic lib   </p>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button className='border rounded-full hover:bg-green-600 hover:text-white   p-3'>
                    <FaCartShopping className="text-xl" />
                    </button>
                    
                </div>

            </div>

        </>
    )
}

export default ProductCard