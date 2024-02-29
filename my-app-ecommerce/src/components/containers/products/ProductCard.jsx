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


            <article className="w-full grid gap-1 max-w-sm p-1 border  rounded-lg shadow ">

                <img className=" w-full mx-auto rounded-t-lg h-[200px]" src={image} alt="product image" />


                <h5 className=" text-md max-h-12 overflow-hidden text-ellipsis font-semibold tracking-tight ">{title}</h5>
                
                <p className=" text-sm max-h-16 overflow-hidden text-ellipsis">{description}</p>

                <div className="h-fit self-end  flex items-center justify-between">
                    <span className="text-xl font-semibold">${price}</span>
                    {isInCart === false && <button onClick={onAddProduct}  className="btn-addToCart"><FaCartShopping /></button>}
                    {isInCart && <RemoveCartItemButton className={"btn-delete"} onClick={onDeleteProduct} />}
                </div>

            </article>

        </>
    )
}

export default ProductCard