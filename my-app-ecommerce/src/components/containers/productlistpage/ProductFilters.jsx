import { useEffect, useState } from "react"
import useProductCategories from "../../../hooks/useProductCategories"


function ProductFilters() {
  const {categories,getCategories} = useProductCategories()
  const [category,setCategory] = useState(null)

  const handleChangeFilterCategory = (e)=>{

    if(e.target.checked){
      setCategory(e.target.value)
    }else setCategory(null)

  }

  useEffect(()=> {
    getCategories()
  },[])
  return (
    <>
      Products Filter
      <div className="flex border-black border-b  p-1">
        <h1>Price:</h1>
        <input onChange={(e) => { console.log("filter product price", e.target.value) }} className="ml-5" max={10} type="range" />
      </div>

      <div className="mt-6 border-b border-black p-1">
        <span>Category</span>
        <div>
          {categories ? categories.map(cate=>{
            return <div><input onChange={handleChangeFilterCategory} type="checkbox"  checked={category === cate} value={cate}  id={cate} /><label htmlFor={cate}  className="ml-1 capitalize font-semibold">{cate}</label></div>
          }): null}

          {category}
        </div>
      </div>
    </>
  )
}

export default ProductFilters