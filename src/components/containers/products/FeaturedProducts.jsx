import { useEffect, useState } from "react"
import useGetProducts from "../../../hooks/useGetProducts"
import SkeletonProductCard from "./SkeletonProductCard"
import ProductCardList from "./ProductCardList"

import { genNumberRandomNoRepeat } from "../../../utils/globalUtils.js"


function FeaturedProducts() {

    const {loading, error, products,getProducts,} = useGetProducts()
    const [featureProducts,setFeaturedProduct] = useState(null)

    useEffect(()=> {
        if(!products){
            getProducts()
            return
        }
        const genFeaturedProduct = genNumberRandomNoRepeat(0 , products.length, 5)
        setFeaturedProduct(prev=> {
            return genFeaturedProduct.map((indexProductRandom)=> products[indexProductRandom])
        })

    } ,[products])

    

  return (
    <>

    {loading &&  <SkeletonProductCard cantSkeleton={5} />}
    
    {featureProducts &&  <ProductCardList productList={featureProducts} />}
    
    
    </>
  )
}

export default FeaturedProducts