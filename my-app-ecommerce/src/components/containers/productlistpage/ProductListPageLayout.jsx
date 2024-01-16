import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import SideBar from "../../SideBar"
import ProductCardList from "../products/ProductCardList"
import ProductFilters from "./ProductFilters"
import useGetProducts from "../../../hooks/useGetProducts.jsx"

import useFiltersProducts from "../../../hooks/useFiltersProducts"
import Prefetching from "./Prefetching.jsx"

function ProductListPageLayout() {
  const { search } = useLocation()
  const queryName = new URLSearchParams(search).get("q")
  const queryCategory = new URLSearchParams(search).get("category")
  const { loading, error, products, getProducts,prefetching } = useGetProducts()
  const { isFilter,onChangeName, onChangeCategory, category, onChangePrice,price, productsFilters } = useFiltersProducts(products)

  useEffect(()=>{
    onChangeCategory(queryCategory)
  } ,[])

  useEffect(() => {
    getProducts()
  }, [])
 

  useEffect(() => {
    onChangeName(queryName)
  }, [search])

 
  return (
    <>
      <section className="grid  xl:grid-cols-4 h-screen">
        <SideBar className="p-4 col-span-1">
          <ProductFilters onChangePrice={onChangePrice} onChangeCategory={onChangeCategory} category={category} price={price} />
          <span className="mt-1 flex">Filter by name: {queryName}</span>
        </SideBar>
        
        <Prefetching handlePrefetching={prefetching} className="md:col-span-3  border grid md:grid-cols-2 lg:grid-cols-3 m-auto  max-h-[600px]     overflow-y-auto  border-black  p-4 " >
          {isFilter  && productsFilters.length > 0  && <ProductCardList productList={productsFilters} /> }

          {isFilter && productsFilters.length === 0 && <h1>No se encontraron resultados</h1>}
          

          {!isFilter && <ProductCardList productList={products} />}
          {loading ? <span>Cargardo productos</span> : null}
        </Prefetching>

      </section>


      </>
  )
}

export default ProductListPageLayout