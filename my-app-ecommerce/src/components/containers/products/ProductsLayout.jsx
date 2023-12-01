import Carousel from "../../common/Carousel"
import ProductCard from "./ProductCard"
import ProductCategoryList from "./ProductCategoryList"
import ProductOfWeek from "./ProductOfWeek"


function ProductsLayout() {
  return (
    <div className="border border-black">

        <h1 className="font-medium text-2xl mt-2">Category of Products</h1>
        <ProductCategoryList />
        <h2 className="mt-4 text-xl">Some products</h2>
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <h2 className="mt-4 text-xl">Product of the week</h2>
        <ProductOfWeek />
        <h2 className="mt-4 text-xl">Featured Products</h2>
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <h1>Carrusel de images mas comprados</h1>
        <Carousel />
        
    </div>
  )
}

export default ProductsLayout