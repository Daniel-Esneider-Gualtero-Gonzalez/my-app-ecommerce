

function ProductDetails() {
    return (
        <article className=' grid gap-2  sm:grid-cols-2  bg-gradient-to-b from-transparent via-transparent to-blue-100'>


            <div className=' '>
                <img className='object-cover   ' src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-01.png" alt="" />
            </div>

            <div className=' p-1 rounded flex flex-col gap-1'>
                <h2 className='font-semibold text-xl'>Libero X250</h2>
                <h3 className=''>250 Watt Electric Scooter</h3>
                <span className='font-bold'>$7500</span>
                <h2 className='mt-3 font-bold '>Detalles de producto</h2>
                <p className='max-w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni impedit ab. Quisquam corrupti dolor itaque officia nisi, numquam suscipit, ipsa accusamus labore, ea et aliquid debitis fuga veritatis culpa.</p>
                <button className='btn-addToCart rounded w-fit '>Agregar al carrito</button>
            </div>
            

        </article>
    )
}

export default ProductDetails