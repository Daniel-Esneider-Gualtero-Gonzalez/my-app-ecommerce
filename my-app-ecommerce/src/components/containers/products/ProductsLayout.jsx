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
        <div className="h-[300px] relative bg-black rounded-tr-[100px]">
          <h1 className="text-white text-[80px]">Productos con Descuento <span className="border-b">50%</span></h1>
          <div className=" absolute bottom-0 rounded-tr-[100px] border-white bg-white w-[500px] h-[80px]"></div>
          <button className="absolute text-white border w-[100px] h-[40px] bottom-4 right-[40%] hover:bg-white hover:text-black font-bold hover:rounded transition-all duration-300">Ir</button>
        </div>
        
    </div>
  )
}

export default ProductsLayout