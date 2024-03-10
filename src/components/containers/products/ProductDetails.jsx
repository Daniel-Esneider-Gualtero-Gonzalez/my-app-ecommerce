import ControlCantItemsProduct from "./ControlCantItemsProduct"
import RatingProduct from "./RatingProduct"


function ProductDetails({ title, description, price, image, isIncart = false, cant = 0, onDeleteProduct = () => { }, onAddProduct = () => { }, onAddCantProduct = () => { }, onDeleteCantProduct = () => { } }) {
    return (
        <article className=' grid gap-2  sm:grid-cols-2  '>

            <img className='mx-auto w-[70%] h-[60%]' src={image} alt={`imagen del producto ${title}`} />

            <div className=' p-1 rounded flex flex-col gap-5'>

                <h2 className='font-semibold text-2xl'>{title}</h2>
                <span className='text-xl font-bold'>${price}</span>
                <p className='max-w-[85%]'>{description}</p>

                <div className="flex gap-5 mt-4">
                    {isIncart && <ControlCantItemsProduct cant={cant} onAddCantProduct={onAddCantProduct} onDeleteCantProduct={onDeleteCantProduct} />}
                    {isIncart && <button onClick={onDeleteProduct} className='btn-delete rounded w-fit '>Eliminar del carrito</button>}
                    {!isIncart && <button onClick={onAddProduct} className='btn-addToCart rounded w-fit '>Agregar al carrito</button>}
                </div>


                <RatingProduct />
            </div>




        </article>
    )
}

export default ProductDetails