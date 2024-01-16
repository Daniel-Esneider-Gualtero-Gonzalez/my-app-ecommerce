import {useLocation, useNavigate} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { useEffect } from 'react';

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
    
    // Comprueba si la ruta actual es la página de búsqueda de productos Para reemplzar la url y asi no agregar mas al history
    const isThisPathProductSearch = window.location.pathname === "/products/search"
   
    return navigate(`/products/search?q=${productToSearch}`,{replace:isThisPathProductSearch})

  }
  useEffect(()=>{
    if(window.location.pathname === "/products/search"){
      
      const query = new URLSearchParams(window.location.href.split("?")[1]).get("q")
     document.querySelector("#searchProduct").value = query
    }
  } , [])
  return (
    <form onSubmit={handleSearchProducts}  className=" flex w-[300px] items-center bg-white rounded p-1 ">
      <input onChange={handleSearchProducts} placeholder="Search Products" id='searchProduct' name="searchProduct" className='md:w-full outline-none  border-b border-violet-600 pl-2 py-1   ' type="text" />
      <button className=" text-violet-600 flex h-full ">
        <CiSearch  className="object-cover text-2xl"/>
      </button>
    </form>
  )
}

export default ProductSearchBar