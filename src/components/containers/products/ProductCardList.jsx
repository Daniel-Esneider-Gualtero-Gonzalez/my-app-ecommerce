import { Link, useNavigate } from "react-router-dom"
import ProductCard from "./ProductCard"
import { useContextCart } from "../../../contexts/contextCart"
import { useRef } from "react"

function ProductCardList({ productList }) {
  const navigate = useNavigate()

  const { addProductCart, deleteProductCart, isProductsInCart } = useContextCart()

  return (
    <>
      {productList && productList.length > 0 ? productList.map((product) => {
        const onSelectCart = () => navigate(`/product/masinfo?id_item=${product.id}`)
        if (!product) return
        const genKeyProdu = crypto.randomUUID()
        return <ProductCard onSelect={onSelectCart} key={genKeyProdu} title={product.title} description={product.description} image={product.image} price={product.price}
          onAddProduct={() => addProductCart(product)} onDeleteProduct={() => deleteProductCart(product.id)}

          isInCart={isProductsInCart(product.id)}
        />


      }) : null}


    </>
  )
}

export default ProductCardList