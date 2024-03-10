import SkeletonProductCard from "./SkeletonProductCard"
import ProductCardList from "./ProductCardList"
import useGetProducts from "../../../hooks/useGetProducts"
import { useState,useEffect } from "react"
import { genNumberRandomNoRepeat } from "../../../utils/globalUtils"

function SuggestedProducts() {
    const {loading, error, products,getProducts,} = useGetProducts()
    const [suggestedProducts,setSuggestedProducts] = useState(null)

    useEffect(()=> {
        if(!products){
            getProducts()
            return
        }
        const genSuggestedProducts = genNumberRandomNoRepeat(0 , products.length, 5)
        setSuggestedProducts(prev=> {
            return genSuggestedProducts.map((indexProductRandom)=> products[indexProductRandom])
        })

    } ,[products])

    

  return (
    <>

    {loading &&  <SkeletonProductCard cantSkeleton={5} />}
    
    {suggestedProducts &&  <ProductCardList productList={suggestedProducts} />}
    
    
    </>
  )
}

export default SuggestedProducts