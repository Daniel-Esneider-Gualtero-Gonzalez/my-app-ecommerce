import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import { useContextCart } from "../../../contexts/contextCart"
import { useRef } from "react"

function ProductCardList({ productList }) {
  const refRenders =useRef(1)
  const {addProductCart,deleteProductCart,isProductsInCart} = useContextCart()
  console.log("renders de product cart list ", refRenders.current)
  refRenders.current++
  return (
    <>
      {productList && productList.length > 0 ? productList.map((product) => {
        const genKeyProdu = crypto.randomUUID() 
        return <ProductCard key={genKeyProdu} title={product.title} description={product.description} image={product.image} price={product.price}
          onAddProduct={()=> addProductCart(product)} onDeleteProduct={()=>deleteProductCart(product.id)}

          isInCart={isProductsInCart(product.id)}
        />


      }) : null}


    </>
  )
}

export default ProductCardList