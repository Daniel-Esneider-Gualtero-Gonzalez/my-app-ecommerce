import { useEffect, useState } from "react"
import useProductCategories from "../../../hooks/useProductCategories"


function ProductFilters({onChangePrice,onChangeCategory,category,price}) {
  const {categories,getCategories} = useProductCategories()
  // dejamos este estado para no recibir la propiedad de categorya actual si no mantenerla en este componenete generando un nuevo estado
  

  const handleChangeFilterCategory = (e)=>{
    const category = e.target.value
    if(e.target.checked){
      onChangeCategory(category)
     
    }else{
      onChangeCategory(null)
      
    }

  }

  const handleChangeFilterPrice = (e)=>{
    
    return onChangePrice(e.target.value)
  }

  useEffect(()=> {
    getCategories()
  },[])
  return (
    <>
      Products Filter
      <div className="flex border-black border-b  p-1">
        <h1>Price:</h1>
        <input onChange={handleChangeFilterPrice} className="ml-5" max={500} type="range" />
        {price}
      </div>

      <div className="mt-6 border-b border-black p-1">
        <span className="flex font-semibold mb-1">Category</span>
        <div>
          {categories ? categories.map(cate=>{
            return <div key={cate}><input onChange={handleChangeFilterCategory} type="checkbox"  checked={category === cate} value={cate}  id={cate} /><label htmlFor={cate}  className="ml-1 capitalize ">{cate}</label></div>
          }): null}

          {category}
        </div>
      </div>
    </>
  )
}

export default ProductFilters