import { useEffect, useState } from "react"
import useProductCategories from "../../../hooks/useProductCategories"
import InteractiveRangeSlider from "../../InteractiveRangeSlider"


function ProductFilters({ onChangePrice, onChangeCategory, category, price }) {
  const { categories, getCategories } = useProductCategories()
  // dejamos este estado para no recibir la propiedad de categorya actual si no mantenerla en este componenete generando un nuevo estado


  const handleChangeFilterCategory = (e) => {
    const category = e.target.value

    onChangeCategory(category)

  }

  const handleChangeFilterPrice = (value) => {

    return onChangePrice(value)
  }

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <>
      <article className="flex flex-col gap-1">
        <h2 className="dark:text-secondary text-blue-600 w-fit text-xl">Filtros</h2>




        <span className="flex font-semibold ">Categorías</span>

        {categories ? categories.map(cate => {
          const isCategory = category.includes(cate)
          const styleIsCategory = isCategory ? "dark:text-secondary  text-blue-600" : ""
          return <label key={cate} htmlFor={cate} className={`${styleIsCategory} flex gap-1 items-center   capitalize ` }><input onChange={handleChangeFilterCategory} type="checkbox" checked={isCategory} value={cate} id={cate} />{cate}</label>
        }) : null}

        <div className="mt-2 border-t border-blue-600 dark:border-secondary flex justify-between  items-center">
          <span className="font-semibold">Precio</span>
          <span>{price} - $500</span>
        </div>
        <InteractiveRangeSlider  handleChangeInput={handleChangeFilterPrice}/>


      </article>
    </>
  )
}

export default ProductFilters