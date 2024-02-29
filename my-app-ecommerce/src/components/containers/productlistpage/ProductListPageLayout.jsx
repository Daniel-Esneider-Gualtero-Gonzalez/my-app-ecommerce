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
  const { isFilter, onChangeName, onChangeCategory, category, onChangePrice, price, productsFilters } = useFiltersProducts(products)

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
      <section className="grid gap-1 p-1  md:grid-cols-3 xl:grid-cols-8 border rounded-lg h-screen overflow-auto">
        <SideBar className="p-1 h-fit md:col-span-1 xl:col-span-2  rounded-lg ">
          <ProductFilters onChangePrice={onChangePrice} onChangeCategory={onChangeCategory} category={category} price={price} />
          <span className="">Filter by name: {queryName}</span>
        </SideBar>

        <Prefetching handlePrefetching={prefetching} className="overflow-y-auto grid gap-1  grid-cols-1 md:col-span-2 xl:col-span-6  sm:grid-cols-2   xl:grid-cols-3 ">

          {products && <ProductCardList productList={products} />}
          {loading && <SkeletonProductCard cantSkeleton={5} />}

        </Prefetching>



        {/* <Prefetching handlePrefetching={prefetching} className="md:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 m-auto  max-h-[600px]     overflow-y-auto  " >
          {isFilter  && productsFilters.length > 0  && <ProductCardList productList={productsFilters} /> }

          {isFilter && productsFilters.length === 0 && <h1>No se encontraron resultados</h1>}
          

          {!isFilter && <ProductCardList productList={products} />}
          {loading ? <span>Cargardo productos</span> : null}
        </Prefetching> */}

      </section>


    </>
  )
}

export default ProductListPageLayout