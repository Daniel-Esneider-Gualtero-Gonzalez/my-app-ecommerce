import { CiImageOn } from "react-icons/ci";

function SkeletonCategoryProdut({...props}) {
  return (
    <>
      <article {...props} className="w-[150px]   border flex flex-col gap-1 rounded-lg  animate-pulse duration-1000  p-1 border-gray-400  ">

      
          <CiImageOn className=" mx-auto rounded-full  h-full w-[50%]  text-gray-400  " />
        
        <h1 className="w-full mx-auto h-[8px]  rounded border bg-gray-300 border-gray-300"></h1>
      </article>

    </>
  )
}

export default SkeletonCategoryProdut