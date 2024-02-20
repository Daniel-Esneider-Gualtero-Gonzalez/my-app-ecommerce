import { CiImageOn } from "react-icons/ci";

function SkeletonCategoryProdut({...props}) {
  return (
    <>
      <article {...props} className="border flex flex-col gap-1 rounded-lg  animate-pulse duration-1000  p-1 border-gray-400  ">

        <div className=" mx-auto flex place-content-center place-items-center w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full border border-gray-400 text-gray-400 ">
          <CiImageOn className="w-[50%] h-[50%]" />
        </div>
        <h1 className="w-[50%] mx-auto h-[8px]  rounded border bg-gray-300 border-gray-300"></h1>
      </article>

    </>
  )
}

export default SkeletonCategoryProdut