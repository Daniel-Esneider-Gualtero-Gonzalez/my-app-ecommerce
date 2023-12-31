import { useEffect } from "react"
import useProductCategories from "../../../hooks/useProductCategories"
import CategoryItem from "./CategoryItem"
import SkeletonCategoryProdut from "./SkeletonCategoryProdut"


function ProductCategoryList() {
    const imageCategories = ["https://img.freepik.com/foto-gratis/lugar-trabajo-negocios-accesorios-masculinos-modernos-portatil-blanco_155003-1722.jpg?size=626&ext=jpg","https://img.freepik.com/foto-gratis/exhibicion-cadena-dorada-brillante-lujosa_23-2149635268.jpg?size=626&ext=jpg",
    "https://img.freepik.com/foto-gratis/accesorios-sueter-cinturon-ropa-masculina_1203-6421.jpg?t=st=1701197036~exp=1701197636~hmac=53fbb2024d01609cbe9d6028070ecd623238cdde90784bcc58b513efb7b43fcf", "https://img.freepik.com/foto-gratis/trajes-femeninos-gafas-sol-par-sandalias-bolsa-viaje_23-2147856132.jpg?size=626&ext=jpg"]
    const {loading,error,categories,getCategories} = useProductCategories()
    useEffect(()=>{
        getCategories()
    },[])


    if(error){
        return <div>Error al obtener categorias</div>
    }

    
  return (
    <div className="border flex justify-center p-1 border-green-600">
         {categories && categories.map((category,index)=>{
            return <CategoryItem  img={imageCategories[index]} title={category}/>
        }) } 

        {loading && !categories ?  <SkeletonCategoryProdut />  : null}
        
    </div>
  )
}

export default ProductCategoryList