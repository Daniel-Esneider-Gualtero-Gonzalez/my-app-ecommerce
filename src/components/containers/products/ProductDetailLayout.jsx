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
      <section className="h-screen border rounded-lg p-1 ">
        <ProductDetails />
        <h2 className=" font-semibold">Productos relacionados</h2>
      </section>

  
    </>
  )
}

export default ProductDetailLayout