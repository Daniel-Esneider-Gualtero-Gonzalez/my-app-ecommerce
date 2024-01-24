import { Link } from "react-router-dom"
import Carousel from "../../common/Carousel"
import ProductCard from "./ProductCard"
import ProductCategoryList from "./ProductCategoryList"
import ProductOfWeek from "./ProductOfWeek"


function ProductsLayout() {
  return (
    <section className=" w-screen p-5"> 

      <h1 className="font-medium text-2xl mt-2">Category of Products</h1>
      <ProductCategoryList />
      <div className="mt-1 mb-5 flex justify-between items-center">
        <h2 className="mt-4 text-xl">Some products Interesting</h2>
        <Link className="border p-2 rounded">Ver más</Link>
      </div>
      <div className="w-screen grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-9 place-items-center ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <h2 className="mt-4 text-xl mb-1">Product of the week</h2>
      <ProductOfWeek />

      <div className="mt-5 flex justify-between items-center">
        <h2 className="mt-4 text-xl">Featured Products</h2>
        <Link className="border p-2 rounded">Ver más</Link>
      </div>
      <div className="w-screen grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  p-9 place-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="flex justify-between  mt-5">
        <h1>Carrusel de images mas comprados</h1>
        <Link className="border p-2 rounded">Ver más</Link>
      </div>
      <Carousel  className='max-w-[600px] mx-auto rounded relative h-[300px] flex justify-center items-center overflow-hidden ' />


    </section>
  )
}

export default ProductsLayout