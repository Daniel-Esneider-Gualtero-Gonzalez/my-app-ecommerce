import { useRef } from "react"
import { useContextCart } from "../../../contexts/contextCart"
import CartEmpty from "./CartEmpty"
import ItemsInCart from "./ItemsInCart"
import OrderSummary from "./OrderSummary"


function MyCartLayout() {
  const { detailsPayout, productsInCart, addCantItemProduct, deleteCantItemProduct, deleteProductCart } = useContextCart()

  if (productsInCart.length === 0) return <CartEmpty />


  return (
    <>
      <section className=" w-fit h-screen grid grid-cols-1 gap-1 sm:mx-auto sm:w-[600px] md:w-[800px] xl:w-[900px] md:grid-cols-3 p-1 rounded-lg">

        <div className=" flex col-span-2 flex-col gap-1 overflow-auto">
          {productsInCart.map(product => {
            const keyProductItem = crypto.randomUUID()
            const addItem = () => addCantItemProduct(product.id)
            const deleteItem = () => deleteCantItemProduct(product.id)
            const deleteProduct = () => deleteProductCart(product.id)
            return <ItemsInCart title={product.title} image={product.image} price={product.price} cant={product.cant} onAddCantProduct={addItem}
              onDeleteCantProduct={deleteItem} onDeleteProduct={deleteProduct} keyItemProduct={keyProductItem}
            />
          })}


        </div>
        <OrderSummary  subtotal={detailsPayout.subtotal} shipping={detailsPayout.shipping} iva={detailsPayout.iva} totalAmount={detailsPayout.totalAmount} />

      </section>
    </>
  )
}

export default MyCartLayout