import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

function ProductCardList({productList}) {
  return (
    <>
    {productList && productList.length > 0 ? productList.map((product)=>{
      const genKeyProdu = crypto.randomUUID()
      return <ProductCard key={genKeyProdu} title={product.title} description={product.description} image={product.image} price={product.price} />
    
    
   }) : null}

  
    </>
  )
}

export default ProductCardList