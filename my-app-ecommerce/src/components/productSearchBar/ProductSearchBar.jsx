import { useLocation, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from 'react';
import IndexedSearch from '../IndexedSearch';





const opacityGlobal = (hidden = false) => {
  const elementOpacity = document.getElementById("allscreenOpacity")
  if (hidden) {
    elementOpacity.style.display = "none"
  } else {
    elementOpacity.style.display = "block"
  }
}

function ProductSearchBar() {
  const navigate = useNavigate()
  const [isActiveEvents, setIsActiveEvents] = useState(false)
  const [asctiveSearchIndex, setActiveSearchIndex] = useState(false)

  const handleBlur = () => {
    opacityGlobal(true)
    setActiveSearchIndex(false)
  }
  const handleFocus = (e) => {
    opacityGlobal()

    // activamos la busqueda indexada
    setActiveSearchIndex(true)
  }


  const handleSearchProducts = (e) => {
    e.preventDefault()
    let productToSearch = null
    // agregue los dos metodos ya que si no escribe mas y esta en otra pagina y no escribe si no le da enter tambien funcione
    if (e.target instanceof HTMLFormElement) {
      productToSearch = e.target.elements[0].value
    } else {
      productToSearch = e.target.value
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

    // ejecutamos la funcionalidad del index seacrh y la barra centrada solo si es diferente de productos

   
      const mediaQueryEventsInput = window.matchMedia('(min-width: 768px)')
    
      const handleMediaQueryChange = (e) => {
        if (e.matches) {
          // La ventana coincide con la media query
          setIsActiveEvents(true)
          isActiveEvents && opacityGlobal()
  
        } else {
          // La ventana no coincide con la media query
          opacityGlobal(true)
          setIsActiveEvents(false)
        }
      }
      mediaQueryEventsInput.addEventListener("change", handleMediaQueryChange)
      // inicializar 
      handleMediaQueryChange(mediaQueryEventsInput)
    

  }, [])


  return (
    <form onSubmit={handleSearchProducts} className=" md:focus-within:w-[450px]  transition-all duration-600 ease-linear md:focus-within:absolute focus-within:border-[2px] focus-within:border-blue-400 focus-within:z-[99] md:focus-within:m-auto md:focus-within:top-0 right-0 left-0 bottom-0 md:focus-within:h-fit    bg-white rounded p-1 ">
      <article className='flex items-center'>
        <input onBlur={isActiveEvents ? () => handleBlur() : () => { }} onFocus={isActiveEvents ? handleFocus : () => { }} onChange={handleSearchProducts} placeholder="Search Products" id='searchProduct' name="searchProduct" className='w-full outline-none  border-b border-violet-600 pl-2 py-1   ' type="text" />
        <button className="border w-fit text-violet-600 flex h-full ">
          <CiSearch className="object-cover text-2xl" />
        </button>
      </article>
      {asctiveSearchIndex  && isActiveEvents ? <ul className='border mt-1 flex flex-col p-2'>
        <IndexedSearch className='p-1 ' search="hola" bdCoicidencias={["hola", "holaaaa"]} />
      </ul> : null}
    </form>
  )
}



export default ProductSearchBar