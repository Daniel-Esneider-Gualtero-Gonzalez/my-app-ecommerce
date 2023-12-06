import Carousel from "../../common/Carousel"
import ProductCard from "./ProductCard"
import ProductCategoryList from "./ProductCategoryList"
import ProductOfWeek from "./ProductOfWeek"


function ProductsLayout() {
  return (
    <div className="border border-black px-3">

        <h1 className="font-medium text-2xl mt-2">Category of Products</h1>
        <ProductCategoryList />
       <div className="mt-1 mb-5 flex justify-between items-center">
       <h2 className="mt-4 text-xl">Some products Interesting</h2>
       <span>Ver mas</span>
       </div>
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <h2 className="mt-4 text-xl mb-1">Product of the week</h2>
        <ProductOfWeek />

        <div className="mt-5 flex justify-between items-center">
        <h2 className="mt-4 text-xl">Featured Products</h2>
        <span>Ver mas</span>
        </div>
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="flex justify-between  mt-5">
        <h1>Carrusel de images mas comprados</h1>
        <span className="font-bold">Ver mas</span>
        </div>
        <Carousel />
       
        
    </div>
  )
}

export default ProductsLayout