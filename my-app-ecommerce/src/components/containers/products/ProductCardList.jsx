import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

function ProductCardList({productList}) {
  return (
    <>
    {productList && productList.length > 0 ? productList.map((product)=>{
      const genKeyProdu = crypto.randomUUID()
      return <Link key={genKeyProdu} to={"/products/masinfo/1"}><ProductCard title={product.title} description={product.description} img={product.image} price={product.price} /></Link>
    
    
   }) : null}
    </>
  )
}

export default ProductCardList