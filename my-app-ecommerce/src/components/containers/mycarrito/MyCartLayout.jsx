import ItemsInCart from "./ItemsInCart"
import OrderSummary from "./OrderSummary"


function MyCartLayout() {
  return (
    <>
      <h1 className='text-2xl font font-semibold'>Shopping Cart</h1>
      <div className="md:grid md:grid-cols-3 border border-black">

        <div className="grid col-span-2 p-1 max-h-screen overflow-auto">
        <ItemsInCart />
        </div>

      
          
          <div className=" grid grid-cols-1 p-1 ">
            <OrderSummary />
          </div>
        

      </div>
    </>
  )
}

export default MyCartLayout