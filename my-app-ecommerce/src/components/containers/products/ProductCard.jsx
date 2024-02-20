import { FaCartShopping } from "react-icons/fa6";

const product = {
    title: "title Product",
    description: "Aquí ira un breve texto de la descripcion de este producto",
    price: 100,
    image: "https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}


function ProductCard({ title = product.title, description = product.description, image = product.image, price = product.price }) {
    return (
        <>
            <article className="w-full flex flex-col gap-2 rounded-lg border p-[0.3rem] ">
                <img className="h-[200px] w-full min-w-full max-w-full  rounded-tl-lg rounded-tr-lg " src={image} alt="product" />
                <div className="flex justify-between">
                <h2 className="  font-bold  max-w-[60%]  overflow-hidden  text-ellipsis whitespace-nowrap text-gray-500">{title}</h2>
                <span className="">${price}</span>
                </div>
                
                <p className=" max-w-full h-[100px]  overflow-hidden  text-ellipsis  font-semibold text-gray-600">{description}</p>
                <div className="flex  justify-end  ">
                    <button className='flex place-content-center place-items-center border rounded-full  hover:bg-green-600 hover:text-white  p-2  '>
                        <FaCartShopping  />
                    </button>
                </div>


            </article>

        </>
    )
}

export default ProductCard