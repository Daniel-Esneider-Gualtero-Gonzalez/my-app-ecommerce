import { useLocation } from "react-router-dom"

import SideBar from "../../SideBar"
import ProductCardList from "../products/ProductCardList"
import ProductFilters from "./ProductFilters"
import useGetProducts from "../../../hooks/useGetProducts"
import { useEffect } from "react"

function ProductListPageLayout() {
  const { search } = useLocation()
  console.log("bucamos el parametro de consult que es un nombre de producto")
  const query = new URLSearchParams(search).get("q")
  const {error,products,getProducts} = useGetProducts()
  useEffect(()=>{
    getProducts()
  } ,[])

  return (
    <>
      <div className="grid  grid-cols-4 h-screen">
        <SideBar className="p-4">
          <ProductFilters />
        </SideBar>

        <div className="bg-green-500 col-span-3 border flex flex-wrap overflow-y-auto  border-black  p-4">  
          <ProductCardList  productList={products}/>
        </div>
       
      </div>


      <div className="mt-3 border border-red-600">
        <h1 className="text-5xl">Resultados para <span className="border-b bg-green-300 border-black">{query}</span></h1>

      </div></>
  )
}

export default ProductListPageLayout