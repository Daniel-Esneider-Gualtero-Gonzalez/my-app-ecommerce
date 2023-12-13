import {useNavigate} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

function ProductSearchBar() {
  const navigate = useNavigate()
  

  const handleSearchProducts = (e)=> {
    e.preventDefault()
    let productToSearch = null
    // agregue los dos metodos ya que si no escribe mas y esta en otra pagina y no escribe si no le da enter tambien funcione
    if(e.target instanceof HTMLFormElement){
      productToSearch = e.target.elements[0].value
    }else{
      productToSearch = e.target.value
    }
    
    
   
    return navigate(`/products/search?q=${productToSearch}`)

  }
  return (
    <form onSubmit={handleSearchProducts}  className=" flex w-[300px] items-center bg-white rounded p-1 ">
      <input onChange={handleSearchProducts} placeholder="Search Products" name="searchProduct" className='md:w-full outline-none  border-b border-violet-600 pl-2 py-1   ' type="text" />
      <button className=" text-violet-600 flex h-full ">
        <CiSearch  className="object-cover text-2xl"/>
      </button>
    </form>
  )
}

export default ProductSearchBar