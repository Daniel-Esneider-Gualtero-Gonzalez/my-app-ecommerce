import React from 'react'
import CategoryItem from './CategoryItem'

function SkeletonCategoryProdut() {
  return (
    <>
    <div className="mx-1  w-fit  justify-center p-1 ">
         <h1 className="skeletonCategoriTitle h-[10px] mb-2 rounded border"></h1>
        <img className="skeletonCategoriImage w-[150px] mx-auto h-[150px] rounded-full border border-gray-400" src="" alt="" />
    </div>
    <div className="mx-1  w-fit  justify-center p-1 ">
         <h1 className="skeletonCategoriTitle h-[10px] mb-2 rounded border"></h1>
        <img className="skeletonCategoriImage w-[150px] mx-auto h-[150px] rounded-full border border-gray-400" src="" alt="" />
    </div>
    <div className="mx-1  w-fit  justify-center p-1 ">
         <h1 className="skeletonCategoriTitle h-[10px] mb-2 rounded border"></h1>
        <img className="skeletonCategoriImage w-[150px] mx-auto h-[150px] rounded-full border border-gray-400" src="" alt="" />
    </div>
    <div className="mx-1  w-fit  justify-center p-1 ">
         <h1 className="skeletonCategoriTitle h-[10px] mb-2 rounded border"></h1>
        <img className="skeletonCategoriImage w-[150px] mx-auto h-[150px] rounded-full border border-gray-400" src="" alt="" />
    </div>
    </>
  )
}

export default SkeletonCategoryProdut