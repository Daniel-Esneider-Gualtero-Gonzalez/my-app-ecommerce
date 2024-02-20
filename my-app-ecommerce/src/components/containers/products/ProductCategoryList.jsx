import { useEffect } from "react"
import useProductCategories from "../../../hooks/useProductCategories"
import CategoryItem from "./CategoryItem"
import SkeletonCategoryProdut from "./SkeletonCategoryProdut"
import { Link } from "react-router-dom"


function ProductCategoryList() {

  const cantSkeleton = [1,2,3,4]
  const { loading, error, categories, getCategories } = useProductCategories()
  useEffect(() => {
    getCategories()
  }, [])


  if(error){
      return <div>Error al obtener categorias</div>
  }


  return (
    <>

      {categories && categories.map((category, index) => {
        return <Link key={index} to={`/products/search?category=${category}`} ><CategoryItem title={category} /></Link>
      })}

      {loading && !categories &&  cantSkeleton.map((numSkeleton)=> <SkeletonCategoryProdut key={numSkeleton} /> ) }
    </>
  )

}

export default ProductCategoryList