import { useEffect, useState } from "react"
import useProductCategories from "../../../hooks/useProductCategories"
import InteractiveRangeSlider from "../../InteractiveRangeSlider"

import { TiDelete } from "react-icons/ti";

function ProductFilters({ name, onChangeName, onChangePrice, onChangeCategory, category, price }) {
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
      <article className="flex flex-col gap-2">
        <h2 className=" text-blue-600 font-bold w-fit text-xl">Filtros</h2>

        <div>
          <span className="flex font-semibold ">Categorías</span>

          {categories ? categories.map(cate => {
            const isCategory = category.includes(cate)
            const styleIsCategory = isCategory ? "  text-blue-600" : ""
            return <label key={cate} htmlFor={cate} className={`${styleIsCategory} flex gap-1 items-center   capitalize `}><input onChange={handleChangeFilterCategory} type="checkbox" checked={isCategory} value={cate} id={cate} />{cate}</label>
          }) : null}

        </div>

        <div className=" border-t border-blue-600  flex justify-between  items-center">
          <span className="font-semibold">Precio</span>
          <span>{price} - $500</span>
        </div>

        <InteractiveRangeSlider handleChangeInput={handleChangeFilterPrice} />

        {name &&
          <div className="flex flex-col gap-1 border-t border-blue-600">
            <span className="font-semibold">Nombre</span>
            <div className="flex gap-2">
              <span className="text-blue-600">{name}</span>
              <button onClick={() => onChangeName("")} className="w-fit text-xl  "><TiDelete /></button>
            </div>
          </div>}


      </article>
    </>
  )
}

export default ProductFilters