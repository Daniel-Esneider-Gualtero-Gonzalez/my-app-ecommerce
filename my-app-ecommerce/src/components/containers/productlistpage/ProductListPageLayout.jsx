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
  const query = new URLSearchParams(search).get("q")
  const { loading, error, products, getProducts } = useGetProducts()
  const { onChangeName, onChangeCategory, onChangePrice, productsFilters } = useFiltersProducts(products)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    onChangeName(query)
  }, [search])

  return (
    <>
      <div className="grid  grid-cols-4 h-screen">
        <SideBar className="p-4">
          <ProductFilters onChangePrice={onChangePrice} onChangeCategory={onChangeCategory} />
        </SideBar>

        <Prefetching className="col-span-3 border flex flex-wrap overflow-y-auto  border-black  p-4 " >
          <ProductCardList productList={productsFilters ? productsFilters : products} />
        </Prefetching>

      </div>


      <div className="mt-3 border border-red-600">
        <h1 className="text-1xl">Resultados para <span className="border-b bg-green-300 border-black">{query}</span></h1>

      </div></>
  )
}

export default ProductListPageLayout