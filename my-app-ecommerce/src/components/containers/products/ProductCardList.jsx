import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

function ProductCardList({productList}) {
  return (
    <>
    {productList && productList.length > 0 ? productList.map((product)=>{
    
      return <Link key={product.id} to={"/products/masinfo/1"}><ProductCard title={product.title} description={product.description} img={product.image} price={product.price} /></Link>
    
    
   }) : null}
    </>
  )
}

export default ProductCardList