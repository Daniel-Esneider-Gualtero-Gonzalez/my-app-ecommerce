import ProductDetails from "./ProductDetails"
import ProductCard from "./ProductCard"
import useGetProducts from "../../../hooks/useGetProducts"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function ProductDetailLayout() {
  const { loading, error, products, getProducts } = useGetProducts()

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <section className=" p-2 w-full ">
        <ProductDetails />
        <h1 className=" font-semibold">RELATED PRODUCTS</h1>
      </section>

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center">
   {products ? products.map((product,index)=>{
    if(index <= 3){
      return <Link to={"/products/masinfo/1"}><ProductCard title={product.title} description={product.description} img={product.image} price={product.price} /></Link>
    }
    
   }) : null}
  
   </div> */}


    </>
  )
}

export default ProductDetailLayout