import React from 'react'
import CategoryItem from './CategoryItem'

function SkeletonCategoryProdut() {
  return (
    <>
    <div className="mx-1 border w-fit  justify-center p-1 border-green-600">
         <h1 className="skeletonCategoriTitle h-[10px] mb-2 border-[1px]"></h1>
        <img className="skeletonCategoriImage w-[150px] mx-auto h-[150px] rounded-full border border-black" src="" alt="" />
    </div>
    <div className="mx-1 border w-fit  justify-center p-1 border-green-600">
         <h1 className="skeletonCategoriTitle h-[10px] mb-2 border-[1px]"></h1>
        <img className="skeletonCategoriImage w-[150px] mx-auto h-[150px] rounded-full border border-black" src="" alt="" />
    </div>
    </>
  )
}

export default SkeletonCategoryProdut