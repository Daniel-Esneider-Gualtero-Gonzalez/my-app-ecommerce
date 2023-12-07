import ProductDetails from "./ProductDetails"
import ProductCard from "./ProductCard"
import useGetProducts from "../../../hooks/useGetProducts"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function ProductDetailLayout() {
  const {loading,error,products,getProducts} = useGetProducts()

  useEffect(()=> {
    getProducts()
  },[])
  return (
   <>
   <ProductDetails />
   <h1 className="text-4xl mt-5 font-semibold">RELATED PRODUCTS</h1>
   <div className="flex flex-wrap mb-5 mt-4">
   {products ? products.map((product,index)=>{
    if(index <= 3){
      return <Link to={"/products/masinfo/1"}><ProductCard title={product.title} description={product.description} img={product.image} price={product.price} /></Link>
    }
    
   }) : null}
  
   </div>

   
   </>
  )
}

export default ProductDetailLayout