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
      <section className=" w-screen h-screen grid gap-1 md:mx-auto md:w-[900px] sm:grid-cols-2 p-1 rounded-lg">

        <div className=" flex flex-col gap-1 overflow-auto">

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
        <OrderSummary subtotal={detailsPayout.subtotal} shipping={detailsPayout.shipping} iva={detailsPayout.iva} totalAmount={detailsPayout.totalAmount} />

      </section>
    </>
  )
}

export default MyCartLayout