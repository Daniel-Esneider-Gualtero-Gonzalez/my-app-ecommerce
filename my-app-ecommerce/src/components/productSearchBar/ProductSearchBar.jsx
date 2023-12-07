import { CiSearch } from "react-icons/ci";

function ProductSearchBar() {
  return (
    <form className=" flex items-center bg-white border-b-[2px] p-1 ">
      <input placeholder="Search Products" className='outline-none  border-b border-violet-600 pl-2 py-1   ' type="text" />
      <button className=" text-violet-600 flex h-full ">
        <CiSearch  className="object-cover text-3xl"/>
      </button>
    </form>
  )
}

export default ProductSearchBar