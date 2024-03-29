import { Link } from "react-router-dom"
import Carousel from "../../common/Carousel"
import ProductCard from "./ProductCard"
import ProductCategoryList from "./ProductCategoryList"
import ProductOfWeek from "./ProductOfWeek"

import { IoIosArrowForward } from "react-icons/io";
import FeaturedProducts from "./FeaturedProducts"
import SuggestedProducts from "./SuggestedProducts"


function ProductsLayout() {
  return (
    <section className="flex flex-col gap-5  p-1 rounded-lg">

      <section className="gap-1 grid grid-cols-3 md:grid-cols-4  md:max-w-[70%]  md:m-auto">
        <ProductCategoryList />
      </section>
      
      <section className="flex flex-col gap-2">
        <h2 className="flex justify-between  md:text-xl">Productos que podrian interesarte <Link to={"/products/search"} className=" p-2 bg-blue-600 rounded  text-white ">Ver más <IoIosArrowForward className="ml-1"/> </Link></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 xl:grid-cols-4  ">
          <SuggestedProducts />
        </div>
      </section>

      <section  className="flex flex-col gap-2">
        <h2 className="md:text-xl">Producto de la semana</h2>
        <ProductOfWeek />
      </section>

      <section  className="flex flex-col gap-2">
        <h2 className=" justify-between md:text-xl">Productos destacados <Link to={"/products/search"}  className=" p-2 rounded bg-blue-600 text-white ">Ver más <IoIosArrowForward className="ml-1"/> </Link></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 xl:grid-cols-4 ">
          <FeaturedProducts />
        </div>
      </section>


      <section className=" flex flex-col gap-2 rounded-lg" >
        <h1 className="justify-between md:text-xl">Carrusel de imagenes de los productos más comprados <Link to={"/products/search"}  className=" p-2 rounded bg-blue-600 text-white ">Ver más <IoIosArrowForward className="ml-1"/></Link></h1>
          <Carousel />

      </section>


    </section>
  )
}

export default ProductsLayout