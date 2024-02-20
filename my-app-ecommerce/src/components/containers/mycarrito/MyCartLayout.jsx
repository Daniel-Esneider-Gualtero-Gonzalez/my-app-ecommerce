import ItemsInCart from "./ItemsInCart"
import OrderSummary from "./OrderSummary"


function MyCartLayout() {
  return (
    <>
      <section className="border h-screen grid gap-1 md:mx-auto md:w-[900px] sm:grid-cols-2 p-1 rounded-lg">
        
        

          <div className=" flex flex-col gap-1 overflow-auto">
            <ItemsInCart />
            <ItemsInCart />
            <ItemsInCart />
            <ItemsInCart />
          </div>

          <article className="">
            <OrderSummary />
          </article>


   
      </section>
    </>
  )
}

export default MyCartLayout