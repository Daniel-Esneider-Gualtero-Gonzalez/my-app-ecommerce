import { useLocation } from "react-router-dom"

import SideBar from "../../SideBar"
import ProductCardList from "../products/ProductCardList"
import ProductFilters from "./ProductFilters"
import useGetProducts from "../../../hooks/useGetProducts.jsx"
import { useEffect } from "react"
import useFiltersProducts from "../../../hooks/useFiltersProducts"
import Prefetching from "./Prefetching.jsx"

function ProductListPageLayout() {
  const { search } = useLocation()
  const queryName = new URLSearchParams(search).get("q")
  const queryCategory = new URLSearchParams(search).get("category")
  const { loading, error, products, getProducts,prefetching } = useGetProducts()
  const { onChangeName, onChangeCategory, category, onChangePrice,price, productsFilters } = useFiltersProducts(products)

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
      <div className="grid  grid-cols-4 h-screen">
        <SideBar className="p-4">
          <ProductFilters onChangePrice={onChangePrice} onChangeCategory={onChangeCategory} category={category} price={price} />
          <span className="mt-1 flex">Filter by name: {queryName}</span>
        </SideBar>
        
        <Prefetching handlePrefetching={prefetching} className="col-span-3 border flex flex-wrap overflow-y-auto  border-black  p-4 " >
          <ProductCardList productList={productsFilters && productsFilters.length ? productsFilters : products} />
          {loading ? <span>Cargardo productos</span> : null}
        </Prefetching>

      </div>


      </>
  )
}

export default ProductListPageLayout