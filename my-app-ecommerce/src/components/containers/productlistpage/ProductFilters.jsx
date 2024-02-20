import { useEffect, useState } from "react"
import useProductCategories from "../../../hooks/useProductCategories"


function ProductFilters({ onChangePrice, onChangeCategory, category, price }) {
  const { categories, getCategories } = useProductCategories()
  // dejamos este estado para no recibir la propiedad de categorya actual si no mantenerla en este componenete generando un nuevo estado


  const handleChangeFilterCategory = (e) => {
    const category = e.target.value

    onChangeCategory(category)

  }

  const handleChangeFilterPrice = (e) => {

    return onChangePrice(e.target.value)
  }

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <>
      <article className="flex flex-col gap-1">
        <h2>Filtros</h2>
        
        <div className="flex justify-between  items-center">
        <span>Precio</span>
         <span>0 - $500</span>
        </div>
        <input onChange={handleChangeFilterPrice} className="" value={price} max={500} type="range" />

        
          <span className="flex font-semibold ">Categorías</span>
         
            {categories ? categories.map(cate => {
              return <label  key={cate} htmlFor={cate} className="flex gap-1 items-center   capitalize "><input onChange={handleChangeFilterCategory} type="checkbox" checked={category.includes(cate)} value={cate} id={cate} />{cate}</label>
            }) : null}

            {category}
        
       
      </article>
    </>
  )
}

export default ProductFilters