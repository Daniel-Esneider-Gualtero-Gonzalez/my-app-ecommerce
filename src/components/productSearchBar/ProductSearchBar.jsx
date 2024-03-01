import { useLocation, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from 'react';
import IndexedSearch from '../IndexedSearch';
import OverlayScreen from '../OverlayScreen';

function ProductSearchBar() {
  const navigate = useNavigate()
  const [isFocus,setIsFocus] = useState(false)
  const [isActiveOverlay, setIsActiveOverlay] = useState(false)
  const [isActiveSearchIndex, setActiveSearchIndex] = useState(false)

  
  const cancelFocus = ()=>{
    setIsFocus(false)
    setIsActiveOverlay(false)
    setActiveSearchIndex(false)
  }

  const handleBlur = ()=>{
    setIsFocus(false)
    setIsActiveOverlay(false)
    setActiveSearchIndex(false)
  }
  const handleFocus = () => {
    setIsFocus(true)
    setIsActiveOverlay(true)
    // activamos la busqueda indexada
    setActiveSearchIndex(true)
  }


  const handleSearchProducts = (e) => {
    e.preventDefault()
    let productToSearch = null
    // agregue los dos metodos ya que si no escribe mas y esta en otra pagina y no escribe si no le da enter tambien funcione
    if (e.target instanceof HTMLFormElement) {
      productToSearch = e.target.elements[0].value
      if(!productToSearch) return
      // una ves que se envie eliminamos el foco para que se restablescan los estados
      cancelFocus()

     
    } 

    // Comprueba si la ruta actual es la página de búsqueda de productos Para reemplzar la url y asi no agregar mas al history
    const isThisPathProductSearch = window.location.pathname === "/products/search"

    return navigate(`/products/search?q=${productToSearch}`, { replace: isThisPathProductSearch })

  }
  useEffect(() => {
    if (window.location.pathname === "/products/search") {

      const query = new URLSearchParams(window.location.href.split("?")[1]).get("q")
      document.querySelector("#searchProduct").value = query
    }


  }, [])

  const stylesFocus  = isFocus ? `focus-within:p-2 h-fit  focus-within:bg-white focus-within:border focus-within:rounded focus-within:w-[400px] focus-within:absolute  focus-within:mt-[10%] focus-within:top-0 focus-within:left-0 focus-within:right-0 focus-within:bottom-0` : ''


  return (
    <>
      <form onSubmit={handleSearchProducts} onBlur={handleBlur} onFocus={handleFocus} className={`${isFocus && stylesFocus} z-10  mx-auto border rounded `}>
        <div className='flex '>
          <input required  placeholder="Search Products" id='searchProduct' name="searchProduct" className='w-full border-none text-black  focus:border-b focus:border-t-0 focus:border-l-0 focus:border-r-0 border-blue-600 dark:border-secondary outline-none   ' type="text" />
          <button className="dark:bg-secondary bg-blue-600 text-white  text-xl  ">
            <CiSearch className="" />
          </button>
        </div>

        {isActiveSearchIndex && <ul className='h-[200px] border rounded mt-2 '>

        </ul>}

      </form>

      {isActiveOverlay && <OverlayScreen  zIndex="50" />}
    </>
  )
}



export default ProductSearchBar