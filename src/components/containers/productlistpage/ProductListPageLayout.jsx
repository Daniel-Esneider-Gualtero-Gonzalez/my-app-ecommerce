import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import SideBar from "../../SideBar"
import ProductCardList from "../products/ProductCardList"
import ProductFilters from "./ProductFilters"
import useGetProducts from "../../../hooks/useGetProducts.jsx"

import useFiltersProducts from "../../../hooks/useFiltersProducts"
import Prefetching from "./Prefetching.jsx"
import SkeletonProductCard from "../products/SkeletonProductCard.jsx"


function ProductListPageLayout() {
  const { search } = useLocation()
  const queryName = new URLSearchParams(search).get("q")
  const queryCategory = new URLSearchParams(search).get("category")
  const { loading, error, products, getProducts, prefetching } = useGetProducts()
  const { name, category, price, onChangeName, onChangeCategory, onChangePrice, productsFilters } = useFiltersProducts(products)

  useEffect(() => {
    onChangeCategory(queryCategory)
  }, [])

  useEffect(() => {
    getProducts()
  }, [])


  useEffect(() => {
    onChangeName(queryName)
  }, [search])




  return (
    <>
      <section className="grid gap-1 p-1  md:grid-cols-3 xl:grid-cols-8  rounded-lg h-screen overflow-auto">
        <SideBar className="p-1 h-fit md:col-span-1 xl:col-span-2  rounded-lg ">
          <ProductFilters name={name} onChangeName={onChangeName} onChangePrice={onChangePrice} onChangeCategory={onChangeCategory} category={category} price={price} />
        </SideBar>

        <Prefetching handlePrefetching={prefetching} className=" h-fit overflow-y-auto grid gap-1  grid-cols-1 md:col-span-2 xl:col-span-6  sm:grid-cols-2   xl:grid-cols-3 ">

          {products && !productsFilters.isFilter && <ProductCardList productList={products} />}
          {productsFilters.isFilter && productsFilters.listProducts.length > 0 && <ProductCardList productList={productsFilters.listProducts} />}

          {productsFilters.isFilter && !loading && productsFilters.listProducts.length === 0 &&
           <div className="col-span-full  border text-2xl"> <span>☹️</span>No se encontraron resultados prueba con otros filtros  </div>}
          {loading && <SkeletonProductCard cantSkeleton={5} />}

        </Prefetching>


      </section>


    </>
  )
}

export default ProductListPageLayout