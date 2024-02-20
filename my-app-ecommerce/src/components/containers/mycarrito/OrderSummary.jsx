

function OrderSummary() {
  return (
    <article className='border flex flex-col gap-1 w-full   rounded p-1 h-fit '>
      <h1 className='font-semibold'>Resumen de la compra</h1>
      <div className='flex justify-between'>
        <h3>Subtotal</h3>
        <span className='font-semibold'>$25</span>
      </div>
      <div className='flex justify-between border-t border-black'>
        <h3>Costo de envío</h3>
        <span className='font-semibold'>$25</span>
      </div>
      <div className='flex justify-between border-t border-black'>
        <h3>Impuestos</h3>
        <span className='font-semibold'>$2</span>
      </div>
      <div className='flex justify-between border-t border-black'>
        <h1 className='text-xl font-bold '>Total pedido</h1>
        <span className='font-bold  text-xl'>$25</span>
      </div>

      <button className='rounded bg-blue-600 mt-7 text-white  hover:bg-green-600 transition-all w-full mx-auto flex justify-center items-center h-[40px]'>Checkout</button>

    </article>
  )
}

export default OrderSummary