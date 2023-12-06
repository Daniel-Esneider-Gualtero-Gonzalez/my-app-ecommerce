import ProductDetails from "./ProductDetails"
import ProductCard from "./ProductCard"

function ProductDetailLayout() {
  return (
   <>
   <ProductDetails />
   <h1 className="text-4xl">Cards de productos relacionados</h1>
   <div className="flex">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
   </div>
   </>
  )
}

export default ProductDetailLayout