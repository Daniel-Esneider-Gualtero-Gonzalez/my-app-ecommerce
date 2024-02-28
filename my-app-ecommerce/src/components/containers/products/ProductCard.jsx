import { FaCartShopping } from "react-icons/fa6";
import RemoveCartItemButton from "../../buttons/RemoveCartItemButton";
import { useState } from "react";

const product = {
    title: "Title Product",
    description: "Aquí ira un breve texto de la descripcion de este producto",
    price: 100,
    image: "https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}


function ProductCard({ title = product.title, description = product.description, image = product.image, price = product.price, onAddProduct = () => { }, onDeleteProduct = () => { }, isInCart = false }) {



    return (
        <>


            <article className="w-full flex flex-col gap-1 max-w-sm p-1 border  rounded-lg shadow ">

                <img className="w-full mx-auto rounded-t-lg h-[200px]" src={image} alt="product image" />


                <h5 className="text-md h-20 overflow-hidden text-ellipsis font-semibold tracking-tight ">{title}</h5>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">${price}</span>
                    <button  href="#" className="border rounded p-2"><FaCartShopping /></button>
                </div>

            </article>

        </>
    )
}

export default ProductCard