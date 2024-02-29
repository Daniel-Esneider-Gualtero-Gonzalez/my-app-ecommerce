import { Link } from "react-router-dom"
import Carousel from "../../common/Carousel"
import ProductCard from "./ProductCard"
import ProductCategoryList from "./ProductCategoryList"
import ProductOfWeek from "./ProductOfWeek"

import { IoIosArrowForward } from "react-icons/io";


function ProductsLayout() {
  return (
    <section className="flex flex-col gap-5 border p-1 rounded-lg">

      <section className="gap-1 grid grid-cols-3 md:grid-cols-4  md:max-w-[70%]  md:m-auto">
       
        <ProductCategoryList />

      </section>
      
      <section className="flex flex-col gap-2">
        <h2 className="flex justify-between ">Some products Interesting <Link className=" p-2 rounded dark:bg-secondary dark:text-black text-white ">Ver más <IoIosArrowForward className="ml-1"/> </Link></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 xl:grid-cols-4  ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section  className="flex flex-col gap-2">
        <h2 className="">Producto de la semana</h2>
        <ProductOfWeek />
      </section>

      <section  className="flex flex-col gap-2">
        <h2 className=" justify-between ">Featured Products <Link className=" p-2 rounded dark:bg-secondary dark:text-black text-white ">Ver más <IoIosArrowForward className="ml-1"/> </Link></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 xl:grid-cols-4 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>


      <section className=" flex flex-col gap-2 rounded-lg" >
        <h1 className="justify-between">Carrusel de images mas comprados <Link className=" p-2 rounded dark:bg-secondary dark:text-black">Ver más <IoIosArrowForward className="ml-1"/></Link></h1>
          <Carousel />

      </section>


    </section>
  )
}

export default ProductsLayout